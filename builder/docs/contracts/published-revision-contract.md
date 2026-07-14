# Published Revision Contract

> Implementation status: **pending**. This document defines the intended on-disk and transactional contract. The
> revision commands, executable Schemas, release snapshots, history writes, locking, and recovery behavior described
> here do not exist yet. The current `pcr:publish` command only performs first-publication preflight and replaces the
> top-level manifest and projection; it does not create the archival artifacts below. Until the complete contract is
> implemented, their content and version cannot be revised in place. A published manifest may still follow the
> existing one-way lifecycle transition to `deprecated`.

Use this contract when implementing a new version of a PCR that has already been published. It preserves the last
published version for consumers while a candidate revision is authored and reviewed.

## Directory Roles

Before first publication, the four top-level PCR files remain the candidate or active working record. After first
publication, they represent the current consumer-facing audited version; its manifest is normally `published` and may
later become `deprecated` through the existing lifecycle transition:

```text
library/pcrs/<domain>/<subdomain>/<pcr-slug>/
  manifest.yaml
  pcr.en-US.md
  pcr.zh-CN.md
  structured.yaml
  release-history.yaml
  revision/
    revision.yaml
    manifest.next.yaml
    pcr.en-US.md
    pcr.zh-CN.md
    structured.yaml
  releases/
    <semver>/
      release.yaml
      manifest.snapshot.yaml
      pcr.en-US.md
      pcr.zh-CN.md
      structured.yaml
```

`revision/` exists only while one revision is open. `releases/<semver>/` is an immutable snapshot and must use
`manifest.snapshot.yaml`; a nested file named `manifest.yaml` would be mistaken for another canonical PCR by catalog
discovery. `release-history.yaml` is an append-only index of published versions.

## Opening a Revision

A future `pcr:revise` operation must enforce all of these rules:

- The top-level manifest is `published`; a `deprecated` PCR cannot be reopened directly.
- No `revision/` directory already exists. A PCR may have at most one open revision.
- The requested target version is valid SemVer and greater than the current published version.
- The target version is recorded in `revision/revision.yaml` when the revision opens and cannot be changed later.
- `revision/manifest.next.yaml` retains the PCR id, records the same target version, removes the prior publication
  timestamp, sets `status: candidate` and `content_maturity: authored_methodology`, and updates its edit timestamp. No
  `revising` lifecycle status is added.
- Revision Markdown and projection files are copied from the current published version. The canonical English source
  becomes editable, and `manifest.next.yaml` sets `translation_status.zh-CN: out_of_sync` so Chinese alignment and
  review must be performed again.

At minimum, `revision.yaml` owns `schema_version`, `pcr_id`, `base_version`, `target_version`, and `opened_at_utc`. It is
workflow metadata, not PCR lifecycle truth. The presence of `revision/` represents the open-revision state; the
top-level manifest remains the current published record throughout authoring.

Normal update, translation, sync, review, and publication checks must operate on the revision files explicitly. They
must not mutate the top-level published files before promotion.

## Publishing and Release History

Revision publication requires the same methodology, translation, projection, fingerprint, and review preflight as a
first publication. It also requires the revision base version to equal the current top-level version and the target
version to have no existing release directory or history entry.

A successful publication must:

1. create `releases/<target-version>/` from the exact files being promoted, using `manifest.snapshot.yaml`;
2. create `release.yaml` with the PCR id, version, publication timestamp, predecessor version, and immutable artifact
   fingerprints;
3. append one matching entry to `release-history.yaml` without changing or removing earlier entries;
4. promote the reviewed revision files to the four top-level current-published files; and
5. remove `revision/` only after the complete transaction succeeds.

Under the future workflow, first publication follows the same archive rule: it creates the initial release snapshot
and `release-history.yaml` entry while promoting the active PCR to the top-level published state. A release directory,
release metadata file, artifact snapshot, or history entry must never be edited after commit; corrections require a
new version.

At minimum, `release.yaml` owns `schema_version`, `pcr_id`, `version`, `published_at_utc`, `predecessor_version`, and
the fingerprints of its four immutable artifacts. `release-history.yaml` owns `schema_version`, `pcr_id`, and
chronologically appended release entries containing the version, publication timestamp, predecessor version, and
snapshot path. Versions and snapshot paths must be unique, and the history order must match the predecessor chain.

## Transaction and Recovery Boundary

Publication is one directory-level transaction, not a sequence of independent file writes. Its implementation must:

- acquire an exclusive PCR-directory lock before checking or changing revision, release, history, or top-level state;
- prepare and fully validate all promoted files, release artifacts, and the next history document in a staging area;
- record a recovery journal and preserve a backup of the pre-publication directory state before replacement;
- replace the top-level files, release snapshot, history, and revision state as one recoverable operation; and
- clear the journal, backup, and lock only after post-write validation succeeds.

On failure or interrupted execution, recovery must restore the complete prior directory state or finish the recorded
transaction deterministically. Consumers must never observe a new top-level version with a missing snapshot, stale
history, partial file set, or open revision that was already promoted.

## Deprecation Boundary

Deprecation is not a revision state. A deprecated PCR cannot be sent directly through `pcr:revise`, changed back to a
candidate, or overwritten by a new version. Reintroduction requires an explicit governance decision and a separately
defined successor or restoration workflow; it is outside this contract.
