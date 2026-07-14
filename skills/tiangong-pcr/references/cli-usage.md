# tiangong-pcr CLI Usage

The public CLI is for PCR consumption during LCA data construction.

```bash
npm --silent run tiangong-pcr -- list --status candidate --format json
npm --silent run tiangong-pcr -- list --path-prefix <domain/subdomain> --format json
npm --silent run tiangong-pcr -- list --page 2 --page-size 10
npm --silent run tiangong-pcr -- tree --format markdown
npm --silent run tiangong-pcr -- resolve --classification cpc:3.0:01111 --format json
npm --silent run tiangong-pcr -- show --pcr <pcr-id> --lang zh-CN
npm --silent run tiangong-pcr -- guidance --pcr <pcr-id> --format json
npm --silent run tiangong-pcr -- validate-dataset --pcr <pcr-id> --input <file> --format json
npm --silent run tiangong-pcr -- feedback draft --pcr <pcr-id> --type <feedback-type> --summary "<finding>"
```

`list` and `tree` are explicit catalog browsing commands. `tree` defaults to depth 2; use `list --path-prefix` for bounded down-drill and request `tree --depth 3` only when the large complete hierarchy is required. `list` defaults to 10 records per page and returns filters, `has_more`, pagination metadata, and copyable page commands in JSON. Prefer `resolve` when a classification code is available. Use `validate-dataset` for foreground collection package coverage.

Output formats are command-specific. When `--format json` is requested, failures leave stdout empty and return a stable error envelope on stderr. Validation exit 2 is different: stdout remains the complete JSON report and stderr remains empty.
