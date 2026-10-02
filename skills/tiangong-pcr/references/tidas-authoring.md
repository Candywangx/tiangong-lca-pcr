# Optional TIDAS process authoring

First establish the LCA content and basis using [LCA authoring](lca-authoring.md).
Then map that content into the installed TIDAS contract. TIDAS specification/SDK
owns required fields, controlled values and full format validation. Read the
installed SDK version and matching local documentation/schemas before using its
factory or validation API; no dependency is downloaded during offline work.

For the supported native process view, these are useful field locations:

| LCA meaning | Native JSON location |
| --- | --- |
| Dataset identity/name | `/processDataSet/processInformation/dataSetInformation` |
| Quantitative reference | `/processDataSet/processInformation/quantitativeReference` |
| Time/geography/technology | Corresponding fields below `/processDataSet/processInformation` |
| Exchanges and their internal IDs | `/processDataSet/exchanges/exchange` |
| Flow reference | Each exchange's `referenceToFlowDataSet` |
| Amount and direction | Each exchange's `meanAmount`, `resultingAmount`, `exchangeDirection` |
| Dataset version | `/processDataSet/administrativeInformation/publicationAndOwnership/common:dataSetVersion` |

`referenceToReferenceFlow` points to an exchange's internal ID, not its array
position or flow UUID. Preserve the distinction between mean/resulting amounts;
do not overwrite parameterized or allocated values simply because they differ.
Units are interpreted through the selected flow, reference flow property and
reference unit group. Keep the exact supporting UUID/version evidence. A PCR
identity suggestion does not choose a locally available dataset version.

Use installed SDK creation facilities when available, and the separately
provisioned offline toolkit for full package validation:

```sh
tidas --format json version
tidas validate ./tidas-package --issues ./tidas-issues.jsonl --format json
tiangong-pcr inspect --input ./tidas-package/processes/process.json --related ./tidas-package --format json
```

Verify the installed toolkit's help; retain its version, output and coverage.
Inspection is available even for incomplete drafts and cannot certify schema
validity. If local format tooling or source measurements are unavailable, provide
an explicitly incomplete native draft and the exact remaining requirements.
Do not fill missing quantities with zero to obtain a successful validation.
Do not label a draft as publishable based on PCR review alone.

After mapping, use [TIDAS review](reviewing-tidas.md) to check that the native
representation still reflects the intended scope and calculations.
