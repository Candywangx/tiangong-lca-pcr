import assert from "node:assert/strict";
import test from "node:test";

import { verifySourceLocators } from "./evidence-audit.mjs";
import { sourceParagraphs } from "./fixtures/original-source.mjs";

const title = "Heavy machinery production study";
const source = { source_id: "nested-study", name: title, locator: "https://example.test/nested-study", original_text_verified: true };
const section = (heading, prose) => `<h2>${heading}</h2><p>${prose}</p>`;
const completeBody = section("Introduction", sourceParagraphs[1])
  + section("Methodology", sourceParagraphs[3])
  + section("Results", sourceParagraphs[1]);

// Synthetic publisher layout: nested recommendation cards precede the full paper.
// The prose is owned by the test suite, rather than copied from a publisher page.
function nestedHtml({ documentTitle = title, before = "", body = completeBody, after = "" } = {}) {
  return `<html><head><title>${documentTitle}</title></head><body><article><h1>${documentTitle}</h1><main>${before}<article class="recommendation"><h3>Related research</h3><p>Separate publication metadata.</p></article><article class="recommendation"><p>Another separate publication.</p></article>${body}</main></article>${after}</body></html>`;
}

async function verifyHtml(html) {
  return verifySourceLocators({ report: { sources: [source] },
    fetchImpl: async () => new Response(html, { headers: { "content-type": "text/html" } }) });
}

function identityRejection(error) {
  return error.code === "GOAL_SOURCE_ORIGINAL_IDENTITY_UNVERIFIED" && error.details.retryable === false;
}

test("a complete nested HTML article retains sections after recommendation cards", async () => {
  const [audit] = await verifyHtml(nestedHtml());
  assert.equal(audit.original_identity_verified, true);
  assert.equal(audit.content_kind, "original");
});

test("numbered introduction and combined results/discussion are substantive sections", async () => {
  const body = section("1. Introduction", sourceParagraphs[1])
    + section("3. Results and discussion", sourceParagraphs[3]);
  const [audit] = await verifyHtml(nestedHtml({ body }));
  assert.equal(audit.original_identity_verified, true);
  await assert.rejects(verifyHtml(nestedHtml({ body: section("3. Results and discussion", sourceParagraphs[3].repeat(3)) })), identityRejection);
});

test("a complete nested HTML main retains its enclosing body", async () => {
  const [audit] = await verifyHtml(nestedHtml().replaceAll("article", "main"));
  assert.equal(audit.original_identity_verified, true);
});

test("structural tag text in quoted attributes does not close the article", async () => {
  const [audit] = await verifyHtml(nestedHtml({ before: '<div data-template="</article><article>" data-operator="a > b">Metadata</div>' }));
  assert.equal(audit.original_identity_verified, true);
});

test("an unclosed article cannot qualify through a nested article closing tag", async () => {
  const html = `<html><body><article><h1>${title}</h1>${completeBody}<article>Related metadata</article></body></html>`;
  await assert.rejects(verifyHtml(html), identityRejection);
});

test("crossed article and main closing tags remain for review", async () => {
  const html = `<html><body><article><h1>${title}</h1><main>${completeBody}</article></main></body></html>`;
  await assert.rejects(verifyHtml(html), identityRejection);
});

for (const tag of ["article", "main"]) {
  for (const apparentClose of [false, true]) {
    test(`a malformed ${tag} opener ${apparentClose ? "with" : "without"} an apparent close cannot use whole-page fallback`, async () => {
      const html = `<html><body><${tag} data-template="unterminated><h1>${title}</h1>${completeBody}${apparentClose ? `</${tag}>` : ""}</body></html>`;
      await assert.rejects(verifyHtml(html), identityRejection);
    });
  }
}

test("nested article metadata cannot borrow full-text sections from outside its body", async () => {
  const summary = "This abstract summarizes the study and links to a separately available complete paper. ".repeat(8);
  const html = nestedHtml({ before: `<h2>Abstract</h2><h3>Introduction</h3><p>${summary}</p><h3>Methods</h3><p>${summary}</p><h3>Results</h3><p>${summary}</p>`,
    body: `<a href="/download">Download full text</a>`, after: completeBody });
  await assert.rejects(verifyHtml(html), identityRejection);
});

for (const wrapper of ['section class="abstract"', 'div id="abstract"']) {
  test(`explicit ${wrapper} excludes equal-level structured abstract subsections`, async () => {
    const tag = wrapper.split(" ")[0];
    const abstract = `<${wrapper}><h2>Abstract</h2>${completeBody}</${tag}>`;
    await assert.rejects(verifyHtml(nestedHtml({ body: abstract + '<a href="/download">Download full text</a>' })), identityRejection);
    const [audit] = await verifyHtml(nestedHtml({ before: abstract, body: completeBody }));
    assert.equal(audit.original_identity_verified, true);
  });
}

for (const tag of ["article", "main"]) {
  test(`a selected ${tag} abstract wrapper cannot qualify structured subsections`, async () => {
    const html = `<html><body><${tag} class="abstract"><h1>${title}</h1><h2>Abstract</h2>${completeBody}</${tag}></body></html>`;
    await assert.rejects(verifyHtml(html), identityRejection);
  });
}

test("overlapping Abstract and Summary ranges retain genuine subsequent full text", async () => {
  const summary = '<h2>Abstract</h2><h3>Summary</h3><p>' + sourceParagraphs[1].repeat(3) + '</p>';
  const body = section("Methods", sourceParagraphs[3]) + section("Results", sourceParagraphs[1]);
  const [audit] = await verifyHtml(nestedHtml({ before: summary, body }));
  assert.equal(audit.original_identity_verified, true);
});

test("an apparent abstract attribute inside another quoted attribute is inert", async () => {
  const body = `<section data-template='class="abstract"'>${completeBody}</section>`;
  const [audit] = await verifyHtml(nestedHtml({ body }));
  assert.equal(audit.original_identity_verified, true);
});

test("nested catalog metadata still requires substantive document sections", async () => {
  const prose = "Publication details describe the authors, citation, publisher and access options for this study. ".repeat(8);
  await assert.rejects(verifyHtml(nestedHtml({ body: section("Overview", prose) + section("Publication information", prose) })), identityRejection);
});

test("nested full text still requires two substantive sections", async () => {
  await assert.rejects(verifyHtml(nestedHtml({ body: section("Introduction", sourceParagraphs[1].repeat(3)) })), identityRejection);
});

test("nested full text still requires sufficient text length", async () => {
  const prose = "Measure production inputs over one consistent basis. ".repeat(3);
  const html = `<article><h1>${title}</h1><main><article></article>${section("Introduction", prose)}${section("Methods", prose)}</main></article>`;
  await assert.rejects(verifyHtml(html), identityRejection);
});

test("a complete nested article with a similar title remains unidentified", async () => {
  await assert.rejects(verifyHtml(nestedHtml({ documentTitle: "Heavy machinery repair study" })), identityRejection);
});

for (const [name, challenge] of [
  ["login", '<input type="password">'],
  ["captcha", "Verify you are human captcha"],
  ["browser challenge", "Checking your browser"],
]) {
  test(`a nested full-text-shaped ${name} page remains an access challenge`, async () => {
    await assert.rejects(verifyHtml(nestedHtml({ before: challenge })), error => identityRejection(error)
      && error.details.content_kind === "access_challenge");
  });
}

test("nested original recognizes a substantive combined Results and discussion section", async () => {
  const html = nestedHtml({ body: section("Methodology", sourceParagraphs[3])
    + section("Results and discussion", sourceParagraphs[1]) });
  const [audit] = await verifyHtml(html);
  assert.equal(audit.original_identity_verified, true);
});
