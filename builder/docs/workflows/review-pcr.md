# Review PCR Workflow

Use this workflow to review an authored PCR before publication or broad reuse.

Select the workspace before review. Use top-level `current` only for an unpublished record. For a managed published
PCR, open or reuse its explicit revision and review `revision/manifest.next.yaml` plus the revision Markdown and
projection. Never record review changes in the published top-level current release. A deprecated PCR cannot be
reopened through this workflow.

## Review Checks

1. Reference flow is one declared object, not competing free-text alternatives.
2. Required qualifiers are actionable and category-specific.
3. Measurement rules are constraints, not a duplicate unit catalog.
4. Process decomposition matches common lifecycle modelling practice for the category.
5. Inventory rows are grouped by process, direction, and flow type.
6. UUIDs are present where Tiangong rows have been selected and never include versions.
7. Important flows have range blocks; source-backed ranges use defensible source ids, while provisional ranges are clearly marked as `reasoned_estimate`.
8. Data Sources exclude default Tiangong UUID rows and include external evidence.
9. Chinese Markdown is aligned with canonical English Markdown.
10. `structured.yaml` is generated from current English Markdown.

After resolving findings, record review state in the selected workspace and validate it:

```bash
npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace <current|revision>
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace <current|revision> --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
npm run validate
```

## Output

Record review outcomes in issue, PR, or manifest lifecycle fields when needed. Do not add review notes or pending-question sections to PCR Markdown.
