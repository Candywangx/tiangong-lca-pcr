# Controlled Vocabulary Contract

`builder/vocab/*.yaml` is the only hand-authored source for stable machine-facing PCR tokens. Each file owns one vocabulary, uses `schema_version: 1`, and maps lower-snake-case tokens to non-empty descriptions.

Do not add a token directly to JavaScript or JSON Schema. Change the YAML source, then regenerate the checked-in consumption artifacts:

```bash
npm run vocab:generate
```

The generator validates the complete vocabulary registry and deterministically produces:

- `packages/pcr-core/src/generated/controlled-vocabulary.mjs` for builder, core, and public CLI runtime use
- `packages/pcr-core/schemas/controlled-vocabulary.schema.json` for JSON Schema `$ref` use

`npm run vocab:check` fails when either generated artifact is missing or stale, and `npm run validate` runs that check before lint and tests. Generated artifacts must remain self-contained so the public consumption packages do not depend on `builder/` at runtime.

Vocabulary values define whether a token is recognized. They do not define lifecycle compatibility, transition rules, guidance readiness, evidence sufficiency, or other cross-field policy. Keep those state-sensitive decisions in the relevant policy or semantic validator.

Stable tokens are language-independent. Preserve them unchanged in both `pcr.en-US.md` and `pcr.zh-CN.md`; translate only human-facing labels and prose. Material `structured.yaml` projections must use the same tokens and are regenerated from canonical English Markdown.

When adding or changing a vocabulary:

1. update one YAML source under `builder/vocab/`;
2. run `npm run vocab:generate`;
3. update Schema references or semantic policy only when the field contract also changes;
4. migrate affected bilingual Markdown and regenerate material projections;
5. run `npm run validate`.
