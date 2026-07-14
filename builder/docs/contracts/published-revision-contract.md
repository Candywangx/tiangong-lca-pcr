# Published Revision Contract

Use this contract when publishing a PCR for the first time or preparing a new version of an already published PCR. It
preserves an immutable release chain while keeping the current consumer-facing files stable during revision work.
The executable Schemas are `builder/schemas/pcr-revision.schema.json`, `pcr-release.schema.json`, and
`pcr-release-history.schema.json`.

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
discovery and is rejected. `release-history.yaml` is the append-only index of published versions. The revision and
release directories must contain exactly the files shown above; managed artifacts must be regular files and must not
be symbolic links.

The four top-level files always represent the current consumer-facing release after first publication. Revision work
must never edit those files directly. A `deprecated` top-level manifest may differ from its latest published snapshot
only in the permitted lifecycle overlay (`status`, `content_maturity`, and `updated_at_utc`); its Markdown and
projection bytes remain identical to the latest snapshot.

## First Publication

First publication operates on the top-level `current` workspace:

```bash
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace current --version <semver>
```

`--workspace current` is the default, but keeping it explicit makes the first-release boundary clear. The source must
be active, reviewed, translated, fingerprint-current, and otherwise pass publication preflight. The operation writes
the published top-level files, creates `releases/<semver>/`, and creates the first `release-history.yaml` entry in one
directory transaction. The first release has `predecessor_version: null`.

An already managed PCR cannot be published again from `current`; later releases must use an explicit revision.

## Opening a Revision

Open a revision with an explicit target version:

```bash
npm run pcr:revise -- --pcr <library/pcrs/...> --version <target-semver>
```

`pcr:revise` enforces all of these rules:

- The top-level manifest is `published`; a `deprecated` PCR cannot be reopened directly.
- The current release is managed by valid `release-history.yaml` and `releases/` state. A legacy published directory
  without that lineage is rejected until a separately governed adoption workflow records it explicitly.
- No `revision/` directory already exists. A PCR may have at most one open revision.
- The requested target version is valid SemVer and greater than the current published version.
- The target version is recorded in `revision/revision.yaml` when the revision opens and cannot be changed later.
- `revision/manifest.next.yaml` retains the PCR id, records the same target version, removes the prior publication
  timestamp, sets `status: candidate` and `content_maturity: authored_methodology`, and updates its edit timestamp. No
  `revising` lifecycle status is added.
- Revision Markdown bodies are derived from the current published version, their frontmatter is moved back to
  candidate authoring state, and the projection is regenerated. The canonical English source becomes editable, and
  `manifest.next.yaml` sets `translation_status.zh-CN: out_of_sync` so Chinese alignment and review must be performed
  again.

At minimum, `revision.yaml` owns `schema_version`, `pcr_id`, `base_version`, `target_version`, and `opened_at_utc`. It is
workflow metadata, not PCR lifecycle truth. The presence of `revision/` represents the open-revision state; the
top-level manifest remains the current published record throughout authoring.

Normal update, translation, sync, review, and publication checks must operate on the revision files explicitly. They
must not mutate the top-level published files before promotion.

Use `--workspace revision` for revision-specific mutation commands:

```bash
npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace revision
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace revision --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
```

The default workspace is `current`. `pcr:sync-structured` rejects a published or deprecated current workspace, and
`pcr:bump` operates only on unpublished current workspaces. A revision version is locked by `revision.yaml`, so it is
never changed with `pcr:bump`.

## Publishing and Release History

Revision publication requires the same methodology, translation, projection, fingerprint, and review preflight as a
first publication. It also requires the revision base version to equal the current top-level version and the target
version to have no existing release directory or history entry.

Publish the reviewed revision without a `--version` argument:

```bash
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace revision
```

The command reads the immutable target version from `revision/revision.yaml`; supplying `--version` for revision
publication is rejected.

A successful publication must:

1. create `releases/<target-version>/` from the exact files being promoted, using `manifest.snapshot.yaml`;
2. create `release.yaml` with the PCR id, version, publication timestamp, predecessor version, and immutable artifact
   fingerprints;
3. append one matching entry to `release-history.yaml` without changing or removing earlier entries;
4. promote the reviewed revision files to the four top-level current-published files; and
5. remove `revision/` only after the complete transaction succeeds.

First publication follows the same archive rule: it creates the initial release snapshot and `release-history.yaml`
entry while promoting the active PCR to the top-level published state. A release directory, release metadata file,
artifact snapshot, or history entry must never be edited after commit; corrections require a new version.

`release.yaml` owns `schema_version`, `pcr_id`, `version`, `published_at_utc`, `predecessor_version`, and the exact-byte
SHA-256 fingerprints of `manifest.snapshot.yaml`, both Markdown files, and `structured.yaml`. `release-history.yaml`
owns `schema_version`, `pcr_id`, `current_version`, and chronologically appended release entries containing the
version, publication timestamp, predecessor version, snapshot path, and exact-byte `release.yaml` SHA-256. Versions
and snapshot paths must be unique, history order must match the predecessor chain, and `current_version` must equal
the latest entry. The current published manifest also records the exact-byte hashes of both Markdown files and
`structured.yaml` in `release_artifacts` so consumers can detect mixed or tampered current-release reads.

## Transaction and Recovery Boundary

The `sync-structured`, `bump`, `lifecycle`, `revise`, and `publish` mutations use a directory-level transaction rather
than independently replacing managed files. The transaction implementation:

- acquires an exclusive per-PCR lock before changing state;
- copies the complete canonical PCR directory to a staging tree and validates the complete proposed tree;
- stores the lock, journal, staging tree, and backup outside the canonical leaf under
  `library/.pcr-builder-state/`;
- records the `prepared`, `current_moved`, `new_installed`, and `committed` phases with old and new tree digests;
- replaces the directory with two same-filesystem renames, then validates the installed tree; and
- removes recovery state only after commit and cleanup succeed.

This is a recoverable whole-directory replacement, not a claim of atomic directory exchange. Failures before the
`committed` phase roll back to the recorded old tree. A committed transaction whose cleanup was interrupted is
finished forward. The builder reports when explicit recovery is required.

Recover a recorded transaction before retrying mutation work:

```bash
npm run pcr:recover -- --pcr <library/pcrs/...>
```

Recovery refuses a lock owned by a live local process. Use `--force-stale-lock` only for explicit recovery of
malformed, foreign-host, or otherwise stale lock/journal state after verifying no writer is active:

```bash
npm run pcr:recover -- --pcr <library/pcrs/...> --force-stale-lock
```

Always run `npm run validate` after recovery and before resuming mutation work.

## Deprecation Boundary

Deprecation is not a revision state. A deprecated PCR cannot be sent directly through `pcr:revise`, changed back to a
candidate, reopened through lifecycle, synced in place, or overwritten by a new version. Reintroduction requires an
explicit governance decision and a separately defined successor or restoration workflow; it is outside this
contract.
