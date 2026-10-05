# PCR consumer commands

Use command-specific `--help` for input shapes, defaults and next actions. Commands
below are native PCR arguments and run without network access; provision the reader first.
For a managed task, prepare once with `tiangong-lca pcr snapshot ensure`, then invoke
`tiangong-lca pcr exec --task-dir <absolute-task-dir> -- <arguments below without tiangong-pcr>`.
Preparation may discover/download public data for a new task; existing task pins
never refresh. Require `task_usable: true`, retain the same task directory, and
use absolute input/output paths when files are outside that directory.

```sh
tiangong-pcr tree --format markdown
tiangong-pcr list --path-prefix <domain/subdomain> --page 1 --page-size 10 --format json
tiangong-pcr coverage summary --classification cpc:3.0 --format json
tiangong-pcr resolve --classification cpc:3.0:01112 --format json
tiangong-pcr guidance --pcr <id> --topic reference-flow --format json
tiangong-pcr guidance --pcr <id> --topic boundary --page 1 --page-size 10 --format json
tiangong-pcr guidance --pcr <id> --pointer /system_boundary/rules/0 --format json
tiangong-pcr show --pcr <id> --lang en-US
tiangong-pcr inspect --input process.json --related ./datasets --section exchanges --format json
tiangong-pcr inspect --input model.json --related ./datasets --section instances --format json
tiangong-pcr inspect --input model.json --related ./datasets --section references --format json
tiangong-pcr inspect --input process.json --pointer /processDataSet/processInformation/quantitativeReference --format json
tiangong-pcr calculate --input calculation.json --output calculation-result.json --format json
tiangong-pcr review prepare --pcr <id> --input process.json --related ./datasets --output review.json --format json
tiangong-pcr review check --pcr <id> --input process.json --related ./datasets --report review.json --format json
tiangong-pcr feedback draft --pcr <id> --type <feedback-type> --summary "<finding>"
```

Use returned page/query arguments. In the task-managed route, remove the returned
standalone executable and any source selectors before passing arguments to
`pcr exec`; the wrapper supplies the retained library/hash and rejects overrides. Topic/section selection and exact pointer reading are
exclusive. New inspection/selection results use previews; truncated values carry
an explicit marker and a pointer for complete retrieval. Large complete output
requires `--output <new-file>`; existing files are not overwritten. This saves an
artifact and prints its path/hash. Input inspection and arithmetic do not need
`--library`; standalone PCR commands honor PCR_LIBRARY or explicit selection/pinning.
The managed wrapper instead verifies its task pins and clears ambient source overrides.

`--related` scans one explicitly supplied local directory, bounded to 200 JSON
files, 64 MiB total, 12 directory levels and 5000 entries. Each JSON file is bounded
to 16 MiB. Narrow the package if a limit is reached; no partial scan masquerades
as complete. Malformed JSON and interior symlinks fail. Non-dataset JSON is reported
as ignored. Local reference matching never chooses among duplicate identities.

For normalization, save a request such as:

```json
{
  "operation": "normalize",
  "amount": 50,
  "unit": "kg N",
  "source_reference": 1000,
  "target_reference": 1,
  "reference_unit": "kg grain",
  "basis": "Identical reference product, gate and moisture basis",
  "evidence": "Example only; replace with the actual source record and applicability evidence"
}
```

`convert` requires amount, from_unit, to_unit and an explicit factor.
`balance` requires inputs/outputs arrays of amount/label objects, accumulation,
and a common unit. Every operation requires basis and evidence. Arithmetic uses
floating-point numbers; scientific interpretation and tolerance remain the Agent's job.

Legacy diagnostics remain available: `validate-model` checks qualifier text
presence; `validate-dataset` checks protocol IDs in optional collection packages.
Their pass applies only to checks_performed. They do not check TIDAS fields or
perform agentic review.

With `--format json`, usage/input/runtime failures have empty stdout and a stable
stderr error envelope (exit 1). Review-envelope or legacy validation failures
return their JSON report on stdout (exit 2). `review check` exit 0 means envelope
validity only; findings and reviewed scope still need semantic assessment.
