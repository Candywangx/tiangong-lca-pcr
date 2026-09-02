# Local PCR Goal Harness

Use the Goal Harness when a reviewed policy prompt needs to schedule many one-PCR author tasks without keeping queue
truth in a long conversation. It is a local Node.js ESM CLI; it does not require a database service or web console.

## Configuration

The YAML configuration is validated by `builder/schemas/goal-harness-config.schema.json`. A minimal configuration is:

```yaml
schema_version: 1
goal_id: metal-products-cpc-3
project_root: /absolute/path/to/repository
target_category_path: /absolute/path/to/repository/library/pcrs/metal-products-machinery-and-equipment
classification_system: cpc
classification_version: "3.0"
cpc_selector:
  mode: target_category
  value: all
skip_cpc_list: []
author_slots: 6
integration_batch_size: 6
policy_prompt_path: /absolute/path/to/policy.txt
tools:
  codex: codex
  tiangong_cli_root: /absolute/path/to/tiangong-cli
  flow_hybrid_search_root: /absolute/path/to/flow-hybrid-search
  paper_search: /absolute/path/to/paper-search
integration:
  decided_by: tiangong-lca-pcr-maintainers
```

`value: all` is always bounded by `target_category_path`. Repository-wide CPC selection is invalid. Use the baseline
tracked-root and exact untracked allowlists when the dirty starting tree contains task-relevant content. Credential,
`.env`, dependency, temporary, and runtime-state paths are rejected even if accidentally allowlisted.

## Commands

```bash
npm run goal:doctor -- --config <goal.yaml> [--format json]
npm run goal:plan -- --config <goal.yaml> --dry-run [--format json]
npm run goal:plan -- --config <goal.yaml>
npm run goal:start -- --config <goal.yaml> --slots 1
npm run goal:status -- --config <goal.yaml> [--format json]
npm run goal:resume -- --config <goal.yaml>
npm run goal:integrate -- --config <goal.yaml> [--snapshot <id>] [--allow-partial] [--dry-run]
npm run goal:land -- --config <goal.yaml> [--snapshot <id>] [--dry-run]
npm run goal:stop -- --config <goal.yaml>
```

Start with one slot. `--allow-partial` is an explicit pilot/final-tail integration override; normal rolling operation
creates a snapshot from the earliest six valid results. Human output is the default. JSON failures keep stdout empty,
write a stable error code and details to stderr, and include a next action.

## State and recovery

Runtime state is stored at:

```text
library/.pcr-builder-state/goals/<goal-id>/
  initial-state.json
  events.jsonl
  state.json
  goal.lock
  baseline-*.index
  authors/<task-attempt>/
  integrations/<snapshot-id>/
  landings/<snapshot-id>/
```

`events.jsonl` is append-only and hash chained; `state.json` is an atomically replaced projection. Worktree, Codex
thread/turn, author commit, baseline, validation, unresolved, snapshot, and landing identities are persisted. Repeating
`plan`, `resume`, `integrate`, or `land` reuses completed identities instead of creating duplicates.

`goal:stop` only stops dispatch. It does not remove a worktree, Codex thread, commit, report, snapshot, or user result.
After an interruption, inspect `goal:status`, fix the reported external condition if any, and repeat the same command.
An incomplete landing journal fails closed and must be inspected before recovery; never delete transaction state to
bypass it.

## Dirty baseline and landing

The harness uses a temporary `GIT_INDEX_FILE`, `git write-tree`, and `git commit-tree` to capture only approved current
bytes. It updates a private `refs/tiangong-goals/<goal-id>/baseline` ref and never changes the user's real index, HEAD,
branch, or dirty working tree. Authors and integrations run in `.worktrees/goals/<goal-id>/` from that synthetic
commit.

Landing is staged and journaled. Every destination path is compared with the baseline or the last successfully landed
snapshot. Any byte mismatch produces `GOAL_LAND_CAS_CONFLICT` with exact paths and does not overwrite newer user
content. Author worktrees are retained after stop and successful landing for audit.

## Visible Codex tasks

The adapter starts the managed daemon idempotently and connects through `codex app-server proxy`, then uses the
initialize handshake, `project/list`, durable non-ephemeral `thread/start`, `thread/name/set`, `turn/start` with an
output Schema, and `thread/read`/`thread/resume`. Closing a short-lived CLI proxy does not interrupt author turns.
Each thread is bound to one independent Git worktree and the current visible Codex project. If this interface or project binding is
unavailable, dispatch stops with `GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE` or `GOAL_CODEX_PROJECT_UNAVAILABLE`. There is
no fallback to `codex exec`, hidden subagents, or multiple writers in one directory.

## Gates

The author report Schema and commit-tree review enforce the exact four files, PCR path, material Builder contracts,
bilingual inventory order/row/UUID/source alignment, official Tiangong Chinese names, UUID direct-read audit,
`total = matched + unresolved`, atomic flows, source-original verification, two-independent-source external ranges,
strict range bounds, reasoned-estimate labeling, anti-Cartesian-expansion thresholds, deterministic structured sync,
and author validation. Search/OpenAlex summaries are discovery-only evidence.

Integration is serial. It accepts only reviewed `exact`, `broader`, `narrower`, or `proxy` edges to material PCRs with
accepted status, decision maker, UTC time, and a durable generated ADR. It then runs aliases, catalog, coverage/viewer,
full validation, and public list/resolve/guidance checks before CAS landing is permitted.
