/**
 * Test-only authoring fixture: writes a publication-ready bilingual PCR and, on
 * request, declared optional language Markdown. It mirrors the builder CLI
 * authoring fixture so library-level lifecycle tests exercise the real
 * publication, revision, and language-file contracts.
 */

import {
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { syncStructured } from "./manifest-lifecycle.mjs";

export const AUTHORING_PCR_PATH = "library/pcrs/agriculture/crops/wheat-seed";

export function createAuthoringPcr(root, options = {}) {
  const libraryPath = options.libraryPath ?? AUTHORING_PCR_PATH;
  const pcrDir = path.join(root, libraryPath);
  mkdirSync(pcrDir, { recursive: true });
  writePublicationReadyPcr(root, libraryPath, options);
  return { root, libraryPath, pcrDir };
}

function writePublicationReadyPcr(
  root,
  libraryPath,
  {
    blocker = false,
    translationStatus = "reviewed",
    schemaVersion = 1,
    languages = null,
    titles = null,
    optionalTranslations = {},
    writeOptionalFiles = true,
  } = {},
) {
  const pcrDir = path.join(root, libraryPath);
  const declaredLanguages = languages ?? ["en-US", "zh-CN"];
  const declaredTitles = titles ?? { "en-US": "Wheat seed production", "zh-CN": "小麦种子生产" };
  const titleBlock = Object.entries(declaredTitles)
    .map(([language, title]) => `  ${language}: ${JSON.stringify(title)}`)
    .join("\n");
  const availableBlock = declaredLanguages.map((language) => `    - ${language}`).join("\n");
  const translationStatusBlock = declaredLanguages
    .filter((language) => language !== "en-US")
    .map((language) => `  ${language}: ${language === "zh-CN" ? translationStatus : optionalTranslations[language]}`)
    .join("\n");
  writeFileSync(
    path.join(pcrDir, "manifest.yaml"),
    `schema_version: ${schemaVersion}
id: pcr.agriculture.crops.wheat-seed
version: "0.1.0"
title:
${titleBlock}
status: candidate
pcr_kind: product_category_rule
content_maturity: authored_methodology
languages:
  canonical: en-US
  available:
${availableBlock}
translation_status:
${translationStatusBlock}
target_entities:
  - flow
  - process
  - lifecyclemodel
  - dataset
${blocker ? `review_metadata:\n  unresolved_identity:\n    - "Select the final product flow before publication."\n` : ""}`,
  );
  writeFileSync(
    path.join(pcrDir, "pcr.en-US.md"),
    `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture.crops.wheat-seed |
| covered_products | wheat seed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | cleaned wheat seed for sowing |
| How much | 1 kg |
| How well | declared seed class and moisture basis |
| How long or cycle | one seed production crop cycle |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Wheat \`12da5e7d-9b93-4404-8c7d-08f98bec6238\` |
| Reference flow property | Mass \`93a60a56-a3c8-11da-a746-0800200b9a66\` |
| Reference unit group | Units of mass \`93a60a57-a4c8-11da-a746-0800200c9a66\` |
| Reference unit | kg |
| Required qualifiers | seed class; moisture basis |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| \`reference_mass\` | reference product | Mass \`93a60a56-a3c8-11da-a746-0800200b9a66\` | kg | Record the reference flow in kg. |

## 5. System Boundary

The foreground system boundary must begin with the accepted seed lot and end at the declared gate.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | accepted seed lot |
| starting_condition_role | disclosed foreground input |
| product_classification_scope | wheat seed |
| recursive_input_rule | same-category input remains explicit |
| upstream_dataset_requirement | source lot disclosure |
| disclosure | record source lot and declared gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| applicability | Applicability record | required |  | foreground disclosure | reference product |

### Process: Applicability Record (\`applicability\`)

#### Inputs

##### Product flows

###### Method applicability record (\`method_applicability_record\`)

This row records the applicability declaration and is not a quantitative exchange.

- Selected flow: Method applicability record
- Flow property / unit: Narrative disclosure record
- Amount rule: descriptive record
- Value mode: Not applicable (\`not_applicable\`)
- Specificity: Not applicable (\`not_applicable\`)
- Normalization basis: reference flow
- Basis kind: Reference flow (\`reference_flow\`)
- Evidence kind: Identity reference (\`identity_reference\`)
- Sources:

## 7. Allocation and Co-product Handling

No co-products are represented by this applicability record.

## 9. Validation Rules

The applicability record and reference-flow qualifiers must be present.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset |
| allowed_use | wheat seed production with matching qualifiers |
| excluded_use | commodity grain production |
| required_metadata | reference flow; seed class; moisture basis |
| required_quality_disclosure | applicability and source-lot records |
| update_trigger | material boundary or reference-flow change |
`,
  );
  writeFileSync(
    path.join(pcrDir, "pcr.zh-CN.md"),
    `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 小麦种子生产

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture.crops.wheat-seed |
| covered_products | 小麦种子 |

## 5. 系统边界

前景系统边界必须从接收的种批开始，并在声明的交付边界结束。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | accepted seed lot |
| starting_condition_role | disclosed foreground input |
| product_classification_scope | wheat seed |
| recursive_input_rule | same-category input remains explicit |
| upstream_dataset_requirement | source lot disclosure |
| disclosure | record source lot and declared gate |

## 7. 分配与副产品处理

本适用性记录不表示副产品。

## 9. 验证规则

适用性记录和参考流限定信息必须存在。
`,
  );
  for (const [language, status] of Object.entries(optionalTranslations)) {
    if (!writeOptionalFiles) {
      continue;
    }
    // A dependent translation mirrors the canonical source; only its frontmatter identity differs.
    const englishText = readFileSync(path.join(pcrDir, "pcr.en-US.md"), "utf8");
    writeFileSync(
      path.join(pcrDir, `pcr.${language}.md`),
      englishText.replace("language: en-US", `language: ${language}`).replace(
        "sync_with: pcr.zh-CN.md",
        "sync_with: pcr.en-US.md",
      ),
    );
  }
  syncStructured({ root, pcr: libraryPath });
}
