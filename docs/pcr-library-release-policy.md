# PCR Library Release Policy

PCR release state is managed per PCR in `manifest.yaml`.

Use:

- `npm run pcr:lifecycle -- --pcr <library/pcrs/...> ...` for review, content maturity, and translation state changes.
- `npm run pcr:bump -- --pcr <library/pcrs/...> --level patch|minor|major` for semantic version increments.
- `npm run pcr:publish -- --pcr <library/pcrs/...> --version <semver>` to preflight, regenerate structured output, and mark the PCR as published.

Publication requires current `active` status with `reviewed_methodology`, reviewed Chinese translation, valid semantic
versioning, a deterministic current `structured.yaml`, no unresolved or blocking review metadata, and passing material
PCR lint. The command validates the future manifest and generated projection before writing; failed preflight leaves
both existing files unchanged. Run `npm run validate` before and after publication.
