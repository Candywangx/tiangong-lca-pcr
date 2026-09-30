import assert from "node:assert/strict";
import test from "node:test";
import { toolFailureDetails } from "./evidence-audit.mjs";
import { classifyFinding, selectRecovery } from "./errors.mjs";

function classify(error, channel = "stderr") {
  const details = toolFailureDetails({ status: 1, signal: null, stdout: "", stderr: "",
    [channel]: JSON.stringify({ error }) }, { subject_id: "public-uuid" });
  const finding = { code: "GOAL_UUID_DIRECT_READ_FAILED", details };
  return { details, finding: classifyFinding(finding), recovery: selectRecovery(finding) };
}

for (const error of [
  { code: "REMOTE_REQUEST_FAILED", status: 0, details: { cause_code: "SUPABASE_OAUTH_LOGIN_REQUIRED" } },
  { code: "AUTH_IDENTITY_SESSION_FAILED", details: { cause_code: "SUPABASE_OAUTH_LOGIN_REQUIRED" } },
  { code: "SUPABASE_OAUTH_LOGIN_REQUIRED" },
  { code: "AUTH_IDENTITY_SESSION_FAILED" },
  { code: "REMOTE_REQUEST_FAILED", details: { code: "SUPABASE_OAUTH_LOGIN_REQUIRED" } },
  { code: "UNAUTHENTICATED" },
  { code: "REMOTE_REQUEST_FAILED", status: 401 },
  { code: "REMOTE_REQUEST_FAILED", details: { status: 401 } },
  { code: "REMOTE_REQUEST_FAILED", details: { code: "PGRST301" } },
  { code: "REMOTE_REQUEST_FAILED", details: { code: "PGRST302" } },
]) {
  test(`structured auth failure is configuration/hold: ${JSON.stringify(error)}`, () => {
    const { details, finding, recovery } = classify(error);
    assert.equal(details.origin, "tool_transport");
    assert.equal(details.failure_kind, "authentication");
    assert.equal(details.retryable, false);
    assert.equal(finding.category, "configuration");
    assert.equal(recovery.category, "configuration");
    assert.equal(recovery.action, "hold");
    assert.equal(recovery.retryable, false);
  });
}

test("auth cause takes priority over a misleading network wrapper/status and read-only-lock prose", () => {
  const { details } = classify({ code: "ECONNRESET", status: 503, retryable: true,
    details: { cause_code: "SUPABASE_OAUTH_LOGIN_REQUIRED", code: "ECONNRESET",
      message: "EROFS: read-only file system, open '/private/session.json.lock'" } });
  assert.equal(details.failure_kind, "authentication");
  assert.equal(details.retryable, false);
  assert.equal(details.upstream_code, "SUPABASE_OAUTH_LOGIN_REQUIRED");
  assert.equal(details.underlying_error, null);
});

for (const [error, kind] of [
  [{ code: "ECONNRESET" }, "network"],
  [{ code: "REMOTE_REQUEST_FAILED", status: 0, details: { cause_code: "ECONNRESET" } }, "network"],
  [{ code: "REMOTE_REQUEST_FAILED", details: { code: "EAI_AGAIN" } }, "network"],
  [{ code: "REMOTE_REQUEST_FAILED", details: { code: "ENOTFOUND" } }, "network"],
  [{ code: "ETIMEDOUT" }, "timeout"],
  [{ code: "REMOTE_REQUEST_FAILED", details: { cause_code: "ETIMEDOUT" } }, "timeout"],
  [{ code: "REMOTE_REQUEST_FAILED", status: 503 }, "service_unavailable"],
  [{ code: "REMOTE_REQUEST_FAILED", details: { status: 503 } }, "service_unavailable"],
  [{ code: "SERVICE_UNAVAILABLE" }, "service_unavailable"],
  [{ code: "REMOTE_REQUEST_FAILED", details: { code: "FETCH_FAILED" } }, "network"],
]) {
  test(`structured transient transport stays retryable: ${JSON.stringify(error)}`, () => {
    const { details, finding, recovery } = classify(error);
    assert.equal(details.failure_kind, kind);
    assert.equal(details.retryable, true);
    assert.equal(finding.category, "infrastructure");
    assert.equal(recovery.action, "resume");
  });
}

for (const message of ["No usable OAuth session is available", "login required", "HTTP 401 returned from secret-url",
  "HTTP 503 returned from secret-url", "TypeError: fetch failed", "ECONNRESET", "ETIMEDOUT"]) {
  test(`message and stack text cannot establish auth/network: ${message}`, () => {
    const { details, recovery } = classify({ code: "REMOTE_REQUEST_FAILED", status: 0,
      message, details: { message, stack: message } });
    assert.equal(details.failure_kind, "unknown");
    assert.equal(details.retryable, false);
    assert.equal(details.http_status, null);
    assert.equal(recovery.action, "hold");
    assert.doesNotMatch(JSON.stringify(details), /secret-url|No usable|login required/u);
  });
}

test("status zero and no structured cause fail closed, including text-only stderr", () => {
  assert.equal(classify({ code: "REMOTE_REQUEST_FAILED", details: { status: 0 } }).details.failure_kind, "unknown");
  const details = toolFailureDetails({ status: 1, stderr: "SUPABASE_OAUTH_LOGIN_REQUIRED: login required", stdout: "" }, {});
  assert.equal(details.failure_kind, "unknown");
  assert.equal(details.retryable, false);
});

test("structured stdout cause is accepted and JSON process exit status is not an HTTP status", () => {
  assert.equal(classify({ code: "REMOTE_REQUEST_FAILED", details: { cause_code: "SUPABASE_OAUTH_LOGIN_REQUIRED" } }, "stdout").details.failure_kind, "authentication");
  assert.equal(toolFailureDetails({ status: 401, stderr: "", stdout: "" }, {}).failure_kind, "unknown");
});

test("explicit retryable=false still suppresses transient retry", () => {
  const { details, recovery } = classify({ code: "REMOTE_REQUEST_FAILED", details: { cause_code: "ECONNRESET", retryable: false } });
  assert.equal(details.failure_kind, "network");
  assert.equal(details.retryable, false);
  assert.equal(recovery.action, "hold");
});
