---
pcr_id: pcr.business-and-production-services.digital-software-deliveries.software-download-delivery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Software download delivery


## 1. Scope and Applicability

This PCR covers versioned system and application software delivered as electronic files that are downloaded and stored locally for later installation/execution. System examples include operating-system images and system-level network, database-management or utility releases; application examples include document processing, spreadsheets, graphics and other declared user-task programs. The publisher defines actual function, platform, architecture, version, included components and prerequisites. Neither a classification code nor the system/application label establishes a separate manufacturing or delivery method. Both use released-master preparation, storage/replication, actual transmission and local integrity acceptance. Sources: `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers`.

Direct publisher, mirror/CDN, package repository and peer-to-peer delivery architectures are covered according to actual primary records. Full/offline installers, installation images, bootstrap/online installers, component/language/help packages and incremental update bundles are distinct completeness profiles within this method. One item means the complete declared profile, not necessarily all software needed for installation. A downloaded bootstrap file alone cannot represent delivery of a complete application or operating system. An update must declare the prerequisite installed version, changed content and separately acquired dependencies. Retain all actual device, network, storage, retry and original-asset burdens; no fixed bytes, technology, energy or life is assumed.

Excluded reference outputs are the software original itself, physical packaged carriers, standalone licence-right transactions, contracted development activities alone, hosted execution/SaaS, remote gameplay and telecommunications service alone. Installation, execution, user workloads and support after delivery are separate downstream activities. Downloaded application/game files are assessed by their actual local software-file delivery and declared function rather than excluded by a marketing name. This method is not a universal software functional-equivalence or security certification rule.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.digital-software-deliveries.software-download-delivery |
| classification_refs | CPC 3.0: 84341 System software downloads; 84342 Application software downloads; contextual references, not accepted positive mappings |
| covered_products | Declared system/application software file bundles accepted in local storage, including separately identified full, bootstrap, component and update delivery profiles |
| excluded_products | Original assets; physical packaged carriers; licensing alone; contracted development alone; hosted execution/SaaS; continuing software operation; telecommunications activity alone |
| representative_product | One locally accepted version/platform-specific software bundle with publisher-defined functional and completeness profile; no assumed average software or installer route |
| production_route | Accepted released master → distribution preparation → origin/cache/repository storage → actual transmission → local write and integrity acceptance |
| market_state | Complete declared downloadable file profile locally accepted, before installation/execution; a complete bootstrap profile is not a complete installed software system |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the declared software release/profile to local storage for later installation/execution, with specified system or application function |
| How much | One completed accepted declared bundle, 1 item; file count and bytes are descriptors, not the reference quantity |
| How well | Actual publisher manifest, integrity acceptance, function/platform/version and component/prerequisite completeness; no generic performance, security or regulatory approval |
| How long or cycle | One accepted delivery during a declared release-distribution observation period; not an assumed installed service lifetime |
| reference_flow_link | `download_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted software download package |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | publisher; system/application function; release/version/channel; target OS/platform/architecture; installer/image/bootstrap/component/update profile; prerequisite version and dependency manifest; included languages/help/extensions; complete profile file manifest/hash and observed bytes; local acceptance; delivery path; rights/reuse conditions; observation period/cohort; original/component share ledger; actual sites/grid/voltage; provider and hardware/network coverage; installation/use separation |

item is the single-item display alias of public Item(s). All qualifiers must be declared in the actual data package; absence makes its reference definition incomplete. Equal item count, bytes or software class does not establish equivalent function or completeness. Separate incompatible profiles into separate datasets; this shared method never averages an operating-system image with a small bootstrap program. Sources: `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers`.

Debian netinst is a system example whose initial image contains a base subset and later fetches remaining packages; Firefox stub/full installers demonstrate the same need to separate initial profile, further delivery and installation for applications. Thus these are cross-category delivery configurations, not a reason to create duplicate system/application methods. Record actual local persistence and acceptance for each declared payload; do not treat streamed remote execution or an inseparable installed-software result as a verified locally stored download bundle. Source: `debian-netinst`; `mozilla-installers`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One accepted download bundle of fixed version, platform and completeness scope is the reference item, recorded by cp_delivery. Rights, revenue, users, bytes and device kg do not replace item count. |
| `energy_unit` | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Collect attributable kWh through cp_energy then convert MJ = kWh × 3.6; preserve the actual net-calorific-value property, not Mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_delivery` | all stages | Collect from the released reusable software master through accepted local storage. Cover distribution preparation, retained origin/cache copies, actual transmission path, failures/retries and reception checks. List incomplete network/provider segments explicitly; this foreground alone is not complete cradle-to-gate. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `boundary_original` | master_input | Link original creation as an upstream share with declared reuse population and attribution schedule. Do not recreate source coding/testing inside each download. Release-specific repackaging or delivery verification remains foreground when it actually occurs. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `boundary_use` | reference output | Exclude installation, boot, ongoing execution, user services, support after delivery and eventual hardware disposal from the delivery unit; separately model those stages when requested. Input device manufacture shares do not imply that installation/operation is covered. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `boundary_conditions` | conditional exchanges | Actual backup-generator fuels, refrigerant losses, water abstractions, direct discharges, cooling additives and device disposal require distinct atomic rows and primary evidence if within the declared boundary. No combustion emission is assumed from purchased electricity. Where supplier services replace decomposed stages, add one specifically bounded delivery input with primary activity units and upstream inventory, and remove duplicate constituents. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `boundary_profiles` | download_output and dependency delivery | Define the exact file profile and acceptance point before measurement. Offline installer/image delivery ends after declared files are locally accepted. A bootstrap-only profile ends at accepted bootstrap files and discloses missing payload/dependencies. If a bootstrap fetches the actual payload or repository dependencies, a full-delivery profile must include those download stages once, even when interleaved with installation. Separately meter/attribute network fetch, local writes and integrity work versus unpacking, configuration, installation and first-run activity. If inseparable, retain an explicit measured/modelled split and uncertainty; do not call the delivery inventory complete. | `libreoffice-install`; `mozilla-installers`; `debian-verify` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted versioned reusable master and its declared upstream original share |
| starting_condition_role | Distribution foreground starting state |
| product_classification_scope | Locally stored system/application software downloadable files; CPC 84341 and 84342 are context only |
| recursive_input_rule | Record prior software copies/originals once with bounded upstream reuse inventory; do not reopen nested development/distribution recursively |
| upstream_dataset_requirement | Compatible original share, actual regional electricity, equipment manufacture and conditional utility/treatment inputs; unknown segments remain gaps |
| disclosure | Original versus delivery coverage; full network/local path; storage period; cache/replica policy; attempts; suppliers; hardware/cooling; conditional exchanges; excluded installation/use |

## 6. Process Inventory Structure

All four delivery stages apply to both system and application profiles. The infrastructure stage is conditional on actual supporting equipment and utilities, not optional permission to ignore their burdens. Provider-bundled inventories replace their contained constituents only after boundary reconciliation. If mobile devices, separate displays, optical links, backup generators, refrigerants or cooling chemicals contribute, instantiate their actual individual exchanges and protocols; these initial cards are not a complete universal device/utility list. Dependency originals and additional bundles require individually identified upstream shares, not an unspecified collection row.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `preparation` | Release distribution preparation | required | Freeze accepted master, distribution manifest, publisher-provided signatures where available and actual mirror publication jobs; avoid repeating original-development jobs. | Foreground delivery | per declared reference flow |
| `storage` | Origin storage and cache replication | required | Include actual retained origin files, replicas, cache fills, redundancy, monitoring and reserved capacity over the declared distribution period. | Foreground delivery | per declared reference flow |
| `transfer` | Download transmission | required | Include origin/CDN, backbone, access network and retries in the measured architecture, including peer upload where peer-to-peer distribution is used. | Foreground delivery | per declared reference flow |
| `receipt` | Local reception and integrity verification | required | Include receiving-device download, local write and integrity check through accepted local file storage, before installation/execution. | Foreground delivery | per declared reference flow |
| `infrastructure` | Attributable supporting infrastructure | conditional | Actual owned or transparently decomposed provider equipment/cooling only; avoid duplicate bundled service inventories. | Foreground delivery | per declared reference flow |

### Process: Release distribution preparation (`preparation`)

#### Inputs

##### Product flows

###### Alternating current (`preparation_lv_electricity`)

Actual China user-side grid-average supply below 1 kV only. Record only this stage's attributable electricity; include its reserved idle capacity and measured cooling overhead once. These are alternative supply identities, not two additions to one meter.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 through cp_energy, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci`

###### Alternating current (`preparation_mv_electricity`)

Actual China user-side grid-average supply at 1–35 kV only. Record only this stage's attributable electricity; include its reserved idle capacity and measured cooling overhead once. These are alternative supply identities, not two additions to one meter.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 through cp_energy, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci`

###### Released software master (`master_input`)

A single versioned reusable master enters with its upstream original-creation inventory share. It is not consumed again in full for each download. If original attribution cannot be established, retain this input and the separate delivery-only result with the missing upstream burden disclosed.

- Selected flow: Released software master
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Record the evidenced master share attributable to this accepted delivery through cp_master, per declared reference flow; never assume one whole original per copy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_master`
- Sources: `gsf-sci`

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

#### Outputs

##### Product flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.


### Process: Origin storage and cache replication (`storage`)

#### Inputs

##### Product flows

###### Alternating current (`storage_lv_electricity`)

Actual China user-side grid-average supply below 1 kV only. Record only this stage's attributable electricity; include its reserved idle capacity and measured cooling overhead once. These are alternative supply identities, not two additions to one meter.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 through cp_energy, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci`

###### Alternating current (`storage_mv_electricity`)

Actual China user-side grid-average supply at 1–35 kV only. Record only this stage's attributable electricity; include its reserved idle capacity and measured cooling overhead once. These are alternative supply identities, not two additions to one meter.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 through cp_energy, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci`

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

#### Outputs

##### Product flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.


### Process: Download transmission (`transfer`)

#### Inputs

##### Product flows

###### Alternating current (`transfer_lv_electricity`)

Actual China user-side grid-average supply below 1 kV only. Record only this stage's attributable electricity; include its reserved idle capacity and measured cooling overhead once. These are alternative supply identities, not two additions to one meter.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 through cp_energy, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci`

###### Alternating current (`transfer_mv_electricity`)

Actual China user-side grid-average supply at 1–35 kV only. Record only this stage's attributable electricity; include its reserved idle capacity and measured cooling overhead once. These are alternative supply identities, not two additions to one meter.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 through cp_energy, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci`

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

#### Outputs

##### Product flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.


### Process: Local reception and integrity verification (`receipt`)

#### Inputs

##### Product flows

###### Alternating current (`receipt_lv_electricity`)

Actual China user-side grid-average supply below 1 kV only. Record only this stage's attributable electricity; include its reserved idle capacity and measured cooling overhead once. These are alternative supply identities, not two additions to one meter.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 through cp_energy, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci`

###### Alternating current (`receipt_mv_electricity`)

Actual China user-side grid-average supply at 1–35 kV only. Record only this stage's attributable electricity; include its reserved idle capacity and measured cooling overhead once. These are alternative supply identities, not two additions to one meter.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 through cp_energy, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci`

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

#### Outputs

##### Product flows

###### Accepted software download package (`download_output`)

The output is one complete declared software-file profile locally stored and accepted for later installation/execution. Freeze function, release/channel, platform/architecture, components, language/help content, dependency and prerequisite state in cp_delivery. A full bundle, a bootstrap file and an incremental patch have different scope; completion of a bootstrap download does not prove receipt of its later full installer. For an aggregate full-software delivery, include all subsequently fetched declared components, their original shares, storage and actual transfer/retry/write/check burdens before accepting this output. Do not add installation or runtime work to the download unit.

- Selected flow: Accepted software download package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `gsf-sci`

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.


### Process: Attributable supporting infrastructure (`infrastructure`)

#### Inputs

##### Product flows

###### Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks (`portable_computer_share`)

Only actual portable preparation/receiving computers no heavier than 10 kg matching this identity. Device net mass is hardware mass, not software mass. Separate screens or peripherals need their own concrete rows if outside the device dataset.

- Selected flow: Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net device kg × attributable reserved-time share × reserved-resource share through cp_hardware, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: `gsf-sci`

###### Other telephone sets and apparatus for transmission or reception of voice, images or other data, including apparatus for communication in a wired or wireless network (such as a local or wide area network) (`router_share`)

Only an actual separate data routing appliance matching this identity; exclude network cards and equipment already counted in provider inventories. Hardware attribution uses the documented configuration and primary reservation data.

- Selected flow: Other telephone sets and apparatus for transmission or reception of voice, images or other data, including apparatus for communication in a wired or wireless network (such as a local or wide area network) `8b57a042-ffa4-4f3d-a5c7-556fce28e7b3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net device kg × attributable reserved-time share × reserved-resource share through cp_hardware, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: `gsf-sci`

###### Other automatic data processing machines whether or not containing in the same housing one or two of the following types of units: storage units, input units, output units (`server_share`)

Only actual origin/cache rack servers matching the other-ADP-machine identity (not a same-housing integrated input/output system); retain CPU, memory, storage, chassis and measured configuration. Include upstream manufacture once; provider-contained equipment must not be added again.

- Selected flow: Other automatic data processing machines whether or not containing in the same housing one or two of the following types of units: storage units, input units, output units `ea5779a6-4214-400c-b380-155efbd5b98e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net device kg × attributable reserved-time share × reserved-resource share through cp_hardware, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: `gsf-sci`

###### Tap water (`cooling_water`)

Only real purchased treated tap-water cooling make-up matching supplier state and geography. Not a freshwater elementary resource; no default cooling technology or water requirement. Exclude provider-contained water already inventoried.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable water mass through cp_water, per declared reference flow; retain density and state evidence for any volume-to-mass conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `gsf-sci`

##### Waste flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

#### Outputs

##### Product flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.

##### Waste flows

###### Untreated cooling-tower blowdown (`cooling_blowdown`)

Only actual cooling-tower discharge sent to an identified treatment provider; characterize dissolved salts and actual additives. No direct environmental release or generic wastewater composition is assumed.

- Selected flow: Untreated cooling-tower blowdown
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable outgoing blowdown mass through cp_water, per declared reference flow; reconcile input, evaporation and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `gsf-sci`

##### Elementary flows

No exchange is assumed in this group. Add specific atomic rows only with actual primary evidence; upstream electricity emissions are not repeated as direct emissions.


## 7. Allocation and Co-product Handling

The original-beneficiary ledger below is a foreground accounting requirement implemented through cp_master; SCI supplies resource-attribution concepts, not a software-copy count or original-burden allocation factor. Device mass scales a compatible upstream manufacturing inventory only; it is never software mass, and hardware disposal scope must be disclosed separately.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_resource` | electricity and infrastructure | Use direct stage/site/job meters first. Shared storage energy follows measured reserved capacity and duration with calibrated resource attribution; transmission follows reconciled equipment energy and job/traffic telemetry, not a universal kWh/GB factor. Include provisioned idle and cooling once. Reconcile allocated totals with device/provider totals and disclose missing segments. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `allocation_copy` | master and publication overhead | Maintain one master/component burden ledger across every benefiting system/application release, bootstrap/full/update profile, physical-copy channel and hosted-service reuse where applicable. Identify original creation versus version-specific development, packaging/signing and delivery verification; charge each activity once. Record a bounded observation cutoff, actual compatible accepted deliveries, assigned shares, remaining unallocated burden and any projected beneficiaries separately. Reconcile allocated and residual shares to each original total; cumulative assignment cannot exceed that total. For one homogeneous release/profile cohort, normalize its justified assigned share using the observed accepted count. Shares between unlike beneficiaries need a documented primary causal/resource contribution basis and sensitivity, not a universal copy factor, price, users or file bytes. Unknown original attribution blocks an upstream-complete result; never charge one whole original per download or assume zero. | `gsf-sci` |
| `allocation_hardware` | hardware shares | Adapt SCI time/resource attribution to the delivery architecture: use measured net hardware mass times reserved-time/evidenced installed-life share times reserved-resource/total-resource share. Keep all time units consistent; no default device life or utilization. Provider-contained embodied inventories exclude a second hardware share. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_delivery` | receipt | download_output | acceptance_record | release/channel; architecture/platform; system/application function; profile; component/language/help manifest; dependency and prerequisite version; file list; hash/signature; bytes; licence/reuse conditions; local receipt id; accepted delivery count; failures/retries; bootstrap payload fetches; installation activity split | Reconcile publisher release/component manifest with received files, supported integrity verification and unique completed-transfer records. Log bootstrap/full/update status, dependency fetches and exact local acceptance. Count one declared complete profile, not HTTP requests, file chunks, licences, users or installed machines; record failed retries in the same observation boundary. | item | each accepted delivery | complete declared observation period | publisher, mirrors, actual local recipients | per declared reference flow | acceptance; manifest/hash; transfer ledger |
| `cp_energy` | preparation; storage; transfer; receipt | stage electricity | meter_record | stage; site; meter; region; voltage; time interval; kWh; jobs; bytes transferred/stored; reserved resources; idle; cooling; allocation ledger | Collect calibrated submeter or primary provider telemetry; reconcile stage/job electricity, storage retention/cache fills, network path and receiving write/check jobs. Bytes/time are attribution evidence only with measured/calibrated resource-energy relationships; no generic conversion. | kWh | each meter/job interval | including unsuccessful attempts and idle reservation | all contributing sites/providers/recipients | per declared reference flow | calibration; provider boundary; reconciliation |
| `cp_master` | preparation | master_input | asset_record | master/component id/version; system/application function; original inventory and creation boundary; release acceptance; preparation jobs; beneficiaries across releases/channels; cohort/cutoff; assigned/residual original shares; actual/projected delivery population; rights; cumulative shares | Read primary version/component provenance, original inventory and reuse records. Reconcile each original total with all assigned and residual beneficiary shares across system/application channels; link cohort shares and actual accepted counts. Document packaging/signing jobs outside original development and avoid duplication. Preserve unresolved future-population and cross-profile attribution uncertainty separately from measured delivery-stage inventory. | item | each release/cohort | original scope and declared delivery window | actual publisher/upstream original author | per declared reference flow | upstream inventory; rights; cumulative schedule |
| `cp_hardware` | infrastructure | portable_computer_share; router_share; server_share | device_record | device id; CPU/memory/storage/chassis; net mass; scale/supplier record; reserved time; installed life evidence; reserved/total resources; provider coverage | Use calibrated net-device weighing or traceable same-configuration supplier mass; record installed service-life evidence and reservation logs with consistent time/capacity definitions. No software mass or default lifespan. | kg | device configuration/reservation change | distribution window and hardware-life evidence | actual owned or transparently decomposed provider devices | per declared reference flow | weighing/configuration; life basis; no duplication |
| `cp_water` | infrastructure | cooling_water; cooling_blowdown | utility_record | input water mass; outgoing blowdown mass; supplier quality; additives; density/state; evaporation; stocks; treatment destination; cooling allocation | Read actual cooling supply/discharge meters and primary water-quality records. Reconcile input, evaporation, stocks and blowdown with attributable workload; volume requires measured density/state conversion, not arbitrary mass equality. | kg | each utility interval | full applicable distribution window | actual cooling sites and treatment providers | per declared reference flow | meters; quality/density; receiving treatment; balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | all electricity rows | MJ = measured attributable kWh × 3.6; resource attribution must first be established from primary measurement, not a byte-to-energy assumption. | cp_energy | MJ per declared reference flow | `gsf-sci` |
| `delivery_basis` | all inventory rows | Record all exchanges directly per declared reference flow. For cohorts of compatible accepted deliveries of identical version/platform/completeness, reconcile primary attribution and failed attempts before dividing by observed accepted count; never combine unlike profiles. | cp_delivery; cp_energy; cp_master; cp_hardware; cp_water | per declared reference flow | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `hardware_share` | portable_computer_share; router_share; server_share | Attributed hardware kg = measured device net kg × (reserved time / evidenced installed life) × (reserved resources / total resources). Use consistent time units, positive life/capacity and shares at most one; reconcile sums across jobs. | cp_hardware | kg per declared reference flow | `gsf-sci` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | download_output | Fix system/application function, release/channel, OS/platform/architecture, installer/patch completeness, dependencies, optional components, rights and local acceptance. Publisher evidence establishes included functionality and compatibility, not universal code quality; observed bytes cannot substitute for acceptance. | cp_delivery; publisher manifest |
| `quality_coverage` | all stages | Cover actual retention, replicas/cache, network segments, receipt and retries; disclose supplier gaps and measured/modelled split; missing data is not zero. | primary job/meter ledger; provider boundaries |
| `quality_representative` | dataset reuse | Declare distribution architecture, region/grid/voltage, file size/completeness, storage window, receiving device and network conditions; one release is not an industry average. | dataset profile; uncertainty and original-share sensitivity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | download_output | Require one complete locally stored accepted bundle with exact release/platform, file manifest, checksum/signature verification as supported by the publisher, software functions and dependency/prerequisite scope. Full image, bootstrap installer and incremental patch are different profiles; a bootstrap package alone is not a fully installed system. No generic security or compliance approval follows from checksum verification. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `validate_basis` | all inventory rows | Check the common completed-delivery denominator, stage/job scope, retry attribution, observed delivery count, master schedule and energy conversion. Traffic bytes, stored bytes, users, revenue, licence entitlements and hardware mass cannot replace the reference item or directly become electricity. Match electricity region/voltage and every hardware/water identity to actual primary records. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `validate_profiles` | download_output and linked original/component inputs | Require source-supported system/application functions and actual publisher release/platform/component records. Do not equate offline full installers, bootstrap profiles, incremental updates or optional language/help bundles. A patch requires its compatible prerequisite; a full profile requires every declared downloaded dependency. Reconcile master/component ledger assignment and residuals across all benefiting profiles; reject repeated whole-original charges, unnoticed reused components and unobserved future-copy denominators. | `un-system-download`; `un-application-download`; `libreoffice-install`; `mozilla-installers` |
| `validate_completeness` | dataset release | Missing network or receiving records, unresolved applicable flow identities, unverified original shares and unsupported provider attribution remain explicit gaps. Report measured/modelled coverage and uncertainty; do not call a delivery-only dataset whole-life, complete cradle-to-gate or an approved methodology. Compare only equivalent software function, release completeness and delivery boundaries. | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Software download-delivery foreground; upstream-inclusive result only with verified linked inputs |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible software delivery module; separately linked installation/use study with equivalent functions and completeness |
| excluded_use | Whole-life software operation; complete cradle-to-gate with unlinked originals/providers; rights valuation; security/methodology approval; universal GB impact factor |
| required_metadata | All reference qualifiers, cohort/period, original share schedule, actual transfer/storage/receiver boundaries, supplier inventories and conditional exchanges |
| required_quality_disclosure | Measured/modelled split, missing segments/identities, allocation uncertainty, cache/retry treatment, hardware-life assumptions, upstream exclusions |
| update_trigger | Changed release/software function/completeness, delivery architecture, grid, retention policy, measured supplier data or original reuse population |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-system-download` | official_guidance | UNSD, CPC Version 3.0, subclass 84341 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 | System-software locally stored file identity; no inventory quantities or methodology approval |
| `un-application-download` | official_guidance | UNSD, CPC Version 3.0, subclass 84342 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84342 | Application-software locally stored file identity; same delivery-state definition, no classification-driven method duplication |
| `gsf-sci` | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0, Energy; Embodied emissions; Software boundary; Quantification method. https://sci.greensoftware.foundation/ | Reserved-resource energy and time/resource hardware attribution concepts adapted to delivery. No SCI score, default life, byte-energy or original-copy factor adopted |
| `debian-verify` | official_guidance | Debian Project, Verifying authenticity of Debian images, signed checksum and matching hash/signature instructions. https://www.debian.org/CD/verify | System-image integrity example; publisher-supported verification does not prove installed functionality/security and does not require Debian tools for every product |
| `libreoffice-install` | official_guidance | The Document Foundation, LibreOffice Installation Instructions, macOS/Linux/Windows and additional language/help components. https://www.libreoffice.org/installation-instructions/ | Application platform and component completeness; download versus installation. Example only, not a mandatory packaging format or universal dependency list |
| `mozilla-installers` | official_guidance | Mozilla, Firefox Source Docs, Stub Installer and Full Installer. https://firefox-source-docs.mozilla.org/browser/installer/windows/installer/StubInstaller.html ; https://firefox-source-docs.mozilla.org/browser/installer/windows/installer/FullInstaller.html | Stub downloads a full installer which then installs the browser; separates downloaded profile/payload from installation. Example only, no download-size or default energy value adopted |
| `debian-netinst` | official_guidance | Debian Project, Network install from a minimal USB, CD, explanatory paragraphs on base image and remaining Internet packages. https://www.debian.org/CD/netinst/ | System-image versus later payload completeness and installation boundary; downloaded image only, no physical USB/CD manufacturing requirement or universal package list |
