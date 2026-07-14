# Structured Projection Contract

`structured.yaml` is a generated projection from canonical `pcr.en-US.md`.

## Rules

- Regenerate `structured.yaml` with `npm run pcr:sync-structured -- --pcr <library/pcrs/...>` during PCR authoring.
- Commit Markdown and generated structured projection together.
- Keep the projection limited to PCR facts, rules, UUID references, data production rules, dataset profile fields, and source references.
- Do not hand-edit `structured.yaml`. Repository lint compares every material PCR with a fresh deterministic projection and rejects stale output.

## Projection Fields

Expected generated fields include:

- `schema_version`
- `generated_from`
- `source_markdown`
- `product_category_identity`
- `functional_unit`
- `system_boundary.rules`
- `boundary_abstraction`
- `reference_flow_definition`
- `reference_flows`
- `measurement_rules`
- `process_map`
- `process_inventory`
- `allocation_rules`
- `dataset_production.collection_protocols`
- `dataset_production.calculation_rules`
- `dataset_production.data_quality_requirements`
- `validation_rules`
- `published_dataset_profile`
- `data_sources`

## Normative Rule Shape

System-boundary, allocation, and validation rules use the same machine-addressable shape:

```yaml
- rule_id: allocation_rule_1
  applies_to: foreground_burden_allocation
  rule: Avoid allocation by subdividing independently measured processes.
  source_ids: []
```

An explicit Markdown rule table may assign `rule_id`, `applies_to`, and `source_ids`. Existing numbered lists,
bullets, and normative paragraphs receive deterministic section-local fallback ids. Reordering fallback rules changes
their ids, so use explicit ids once another tool or review record needs a durable rule reference.

Material English and Chinese PCR renderings must project the same ordered rule ids for system boundary, allocation,
and validation. Repository tests enforce this structural bilingual alignment even though `structured.yaml` is generated
from canonical English Markdown only.

## Process Inventory Amount Shape

Generated `process_inventory` rows use stable `row_id` plus a nested `amount` object:

```yaml
amount:
  expression: measured water use
  value_mode: foreground_record
  specificity: site_specific
  basis:
    text: per 1,000 kg cleaned product output
    kind: process_output
  evidence:
    kind: collected_record
    collection_protocol_id: cp_washing_water_records
    source_ids: []
  ranges:
    - role: qa_guardrail
      lower: "0.5"
      upper: "3.0"
      unit: m3
      basis: per 1,000 kg cleaned product output
      basis_kind: process_output
      evidence_kind: external_source
      source_ids:
        - source-id
```

`ranges` are optional amount metadata. They must not be collapsed into `value_mode`.
