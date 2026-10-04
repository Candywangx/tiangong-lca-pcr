---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-application-software-packaged
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other application software, packaged

## 1. Scope and Applicability

This PCR covers the production of published, off-the-shelf cross-industry business applications (for example professional accounting, HR, CRM or GIS), vertical-market applications and utilities within the residual packaged-application boundary. The output is a licensed software release entitlement, not kilograms of software. Physical carrier supply under CPC 47829 is covered by conditional carrier routes; the carrier is an accessory to delivery, not the function or reference denominator. [un-cpc3-notes-2025]

Exclude general productivity/home-use applications, games, systems software and programming tools; commissioned customer-specific development, customization/integration services and software originals sold as intellectual property are separate products. Download-only application files, online-executed software, SaaS, application provisioning and hosting/storage sold to customers are outside this packaged-product output. Purchased cloud/storage used to produce the release remain inputs, not customer hosting outputs. The common original may benefit excluded download or service products; its burden must be partitioned across all beneficiaries rather than assigned only to physical packages. [un-cpc3-notes-2025]

The declared production boundary includes stock software R&D/design/coding, third-party component development contribution, development equipment/workplace resources, build/integration/tests including failures, release signing/provenance, retained production archives, entitlement handling and selected physical carrier/packaging through the publisher delivery gate. Later customer installation, runtime electricity, device manufacture for customer use, maintenance/support, lifetime updates and customer disposal require separate downstream datasets with their own workload and time assumptions. A perpetual license is not a claim of an infinite service lifetime. This is a production inventory method; it is not an SCI score or a lifecycle carbon footprint by itself. NIST supports process/provenance decomposition, IBM illustrates license configuration and SCI supports measured resource attribution; none supplies universal per-license energy, development life, hardware life or carbon factors. [nist-ssdf-2022; ibm-ipla-2011; gsf-sci-1-1-0]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-application-software-packaged |
| classification_refs | CPC3:47829 |
| covered_products | Published residual business/vertical/utility application release entitlements supplied as packaged products with declared carrier configuration |
| excluded_products | General productivity/home applications; games; systems/tools; custom development; IP originals; download-only files; online software; SaaS/hosting |
| representative_product | One fixed-SKU, declared-release professional business application entitlement, carrier and optional hardware key as specified |
| production_route | Create/buy/reuse attributed original; build/integrate/test; sign/archive; license administration; bought recorded carrier or in-house writing; package acceptance |
| market_state | Accepted publisher delivery bundle of immutable release files, documented rights and actual carrier configuration; not operated customer service |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared published application capabilities and authorized use rights at publisher delivery gate |
| How much | One accepted entitlement bundle for a fixed SKU and rights configuration; disclose authorized installation/device/user/concurrent-user count or other contractual metric |
| How well | Release hash/version, supported platform, application function and release acceptance tests; different rights or function configurations are separate references |
| How long or cycle | One declared production/delivery cohort and cutoff; record license term or perpetual right. Runtime service duration is outside the production unit |
| reference_flow_link | delivered_entitlement |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other application software, packaged, declared release entitlement |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Application function; release version/hash; SKU; rights/installation/device/user/concurrency metric; license term; carrier and key configuration; platform; release geography; production period; cohort cutoff; accepted entitlement denominator; original allocation; make/buy interfaces; supplier scope |

The count property and unit group support countable products; they do not establish a specific software-flow identity. A constructed foreground package must declare all qualifiers and compatible flow/provider/property/unit identities. One fixed rights bundle is the declared production unit; comparisons of application service require a separately harmonized function/workload/duration.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One item equals one declared entitlement bundle. The supported Item(s) unit factor is 1; item is its display alias. Dozens convert by 12 only for the identical entitlement configuration. Carrier copies, backup installers, devices, seats and CPU licensing points do not convert to entitlements without documented contractual cardinality. Collect N with cp_entitlement. |
| no_software_mass | reference product and physical carriers | Count and independent physical quantities | item; kg | No kg/license conversion exists. Weigh physical carrier, packaging and freight only for their own exchanges; do not substitute their gross or net mass for software function. |
| cohort_consistency | all inventory rows | Same release entitlement basis | item | Use one accepted fixed configuration reference. Fixed original/build pools and variable carrier/delivery amounts may have different raw periods but must retain attributable share and the stated closed cohort denominator. No infinite future-sales dilution. |
| energy_and_services | purchased energy and service records | Recorded service dimension | kWh; MJ; vCPU-h; GB-day; GB | Keep electricity kWh and heat MJ; 1 kWh = 3.6 MJ if the upstream provider requires MJ. GB is 10^9 bytes, not GiB; GB-day integrates days. vCPU-hours are service quantities, not kWh; no generic service-to-energy factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified original/reused components and production resources; historical original creation burdens remain attributed, not assumed free |
| starting_condition_role | Collection and recursion boundary; an approved source tree is not a burden-free start |
| product_classification_scope | CPC 47829 packaged residual application product; excluded downloads/services can be beneficiaries of shared original inputs |
| recursive_input_rule | Use an explicit upstream inventory for purchased code, contracted work, carriers or services. In-house expansion replaces corresponding purchased row; never expand the same original or complete carrier twice |
| upstream_dataset_requirement | Matching provider region/year, energy interface, compute/storage/network unit and capital/utility scope; supplier missing layers remain unknown and must be completed before usable dataset publication |
| disclosure | Original burden ledger and reuse allocation; actual count cutoff; make/buy matrix; route applicability; library/component gaps; uncertainty; no customer lifetime in production result |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | all production processes | Include stock R&D and purchased/reused original shares, tooling, build/test retries, signing, production archives and entitlement/packaging through publisher gate. Screen attributable workplace utilities and business travel; significant additional actual flows must be instantiated individually with collection/provider evidence. | nist-ssdf-2022; gsf-sci-1-1-0 |
| boundary_classification | packaged output | Reject treating downloadable files, on-line software, custom development or hosting as CPC 47829 output solely because they share code. Preserve common-original allocation across benefiting products. | un-cpc3-notes-2025 |
| boundary_use | downstream use and support | Keep customer runtime, support and updates after delivery separate. A production cohort is not a runtime workload; no guessed lifetime-use electricity can enter this manufacturing result. | un-cpc3-notes-2025; gsf-sci-1-1-0 |
| boundary_upstream_once | make/buy alternatives | A complete purchased cloud, code-development or recorded-carrier inventory replaces its embedded electricity, hardware or blank carrier burdens. Add only demonstrably absent layers. Self-operated direct utilities are distinct; no supplier generation emissions in direct foreground air rows. | gsf-sci-1-1-0 |
| boundary_conditional | carrier and direct facility routes | Apply only actual SKU carrier/BOM and controlled cooling routes. A no-carrier/digital-only delivery is outside the CPC 47829 output here; do not create a zero-mass packaged reference. Conditional absence needs evidence; unknown is not not-applicable or zero. | un-cpc3-notes-2025; ibm-ipla-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Stock software development and reusable original attribution | required | Always; include in-house work and the attributable upstream portion of purchased work | foreground production | per reference flow |
| release | Build, integration, testing and approved release | required | Always; failed/repeated builds and tests remain in the release pool | foreground production | per reference flow |
| delivery | Entitlement administration and publisher delivery gate | required | Always for accepted fixed release/SKU; pooled infrastructure is allocated | foreground production | per reference flow |
| carrier | Physical carrier writing and package assembly | conditional | Only the declared carrier route: bought recorded or in-house written optical, magnetic or USB media; packaging per actual BOM | foreground production | per reference flow |

The process map separates workload pools; it does not create additional entitlement outputs. Source/build/recorded-carrier movements inside the producer are paired internal transfers and cancel when consolidating the inventory. Raw carrier manufacture is upstream of complete blank/recorded carriers, not an invented plastic-molding factory.

### Make/buy matrix

| Interface | In-house route | Bought route | No-double-count rule |
| --- | --- | --- | --- |
| Original coding | Metered developer/workstation/project resources | Accepted contract/component with upstream development inventory | Partition tasks/components; supplier complete work replaces own resources |
| Compute/storage/network | Own equipment/time shares and direct measured utilities; local disk included in identified equipment | Matched vCPU-h, GB-day and GB service inventories; separate providers/scopes | Do not add own electricity/hardware to supplier-covered layers; missing layers are explicit |
| Physical media | Purchase blank complete carrier; write/verify with own power and equipment | Purchase recorded complete carrier of actual specification | Choose one route per lot; upstream carrier materials once; keep software original separate |
| Packaging/key | Assemble purchased finished components and keys | Supplier-assembled finished package with component disclosure | Replace covered assembly/resources; do not add embedded resin/paper/electronics again |

### Process: Stock software development and reusable original attribution (`development`)

#### Inputs

##### Product flows

###### Purchased low-voltage grid electricity at developer workplace (`dev_power`)

Metered workplace electricity including workstations and attributable lighting; assign project hours and reconcile the office meter.

- Selected flow: Purchased low-voltage grid electricity at developer workplace
- Flow property / unit: Energy / kWh
- Amount rule: Metered workplace electricity including workstations and attributable lighting; assign project hours and reconcile the office meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources: nist-ssdf-2022; gsf-sci-1-1-0

###### Developer computer workstation (`dev_workstation`)

Allocate one identified workstation upstream production inventory by reserved project time over documented installed life; exclude its use electricity already in dev_power.

- Selected flow: Developer computer workstation
- Flow property / unit: Number of items / item
- Amount rule: Allocate one identified workstation upstream production inventory by reserved project time over documented installed life; exclude its use electricity already in dev_power.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: gsf-sci-1-1-0

###### Contracted application code development service (`dev_contract`)

Include accepted contracted engineering hours assigned to the released original with provider activity inventory; replace corresponding in-house work rather than add it twice.

- Selected flow: Contracted application code development service
- Flow property / unit: Time / h
- Amount rule: Include accepted contracted engineering hours assigned to the released original with provider activity inventory; replace corresponding in-house work rather than add it twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_contract`
- Sources: nist-ssdf-2022; un-cpc3-notes-2025

###### Licensed reusable application code component (`dev_component`)

Record the one concrete SBOM component and acquired rights; assign its upstream development share over documented releases and entitlement cohorts, including zero-price code with an unresolved upstream burden.

- Selected flow: Licensed reusable application code component
- Flow property / unit: Number of items / item
- Amount rule: Record the one concrete SBOM component and acquired rights; assign its upstream development share over documented releases and entitlement cohorts, including zero-price code with an unresolved upstream burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`
- Sources: nist-ssdf-2022; ibm-ipla-2011

###### Purchased district hot-water space heating (`dev_heat`)

Conditional on purchased workplace heating; sum delivered meter heat allocated by occupied project area-time. Do not duplicate a complete rented-office provider inventory.

- Selected flow: Purchased district hot-water space heating
- Flow property / unit: Energy / MJ
- Amount rule: Conditional on purchased workplace heating; sum delivered meter heat allocated by occupied project area-time. Do not duplicate a complete rented-office provider inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources:

###### Passenger rail transport for production business travel (`dev_rail`)

Conditional on release-attributable rail travel; sum ticket distance times travelling persons assigned to the project.

- Selected flow: Passenger rail transport for production business travel
- Flow property / unit: Passenger distance / passenger-km
- Amount rule: Conditional on release-attributable rail travel; sum ticket distance times travelling persons assigned to the project.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_travel`
- Sources:

###### Scheduled passenger air transport for production business travel (`dev_air`)

Conditional on release-attributable flights; sum itinerary segment passenger distances and document cabin/provider matching.

- Selected flow: Scheduled passenger air transport for production business travel
- Flow property / unit: Passenger distance / passenger-km
- Amount rule: Conditional on release-attributable flights; sum itinerary segment passenger distances and document cabin/provider matching.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_travel`
- Sources:

### Process: Build, integration, testing and approved release (`release`)

#### Inputs

##### Product flows

###### Purchased low-voltage grid electricity at release computing site (`release_power`)

Self-operated route only: sum build, integration, functional/security tests, signing and archive workloads, retries and assigned idle energy. Include facility overhead once.

- Selected flow: Purchased low-voltage grid electricity at release computing site
- Flow property / unit: Energy / kWh
- Amount rule: Self-operated route only: sum build, integration, functional/security tests, signing and archive workloads, retries and assigned idle energy. Include facility overhead once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources: nist-ssdf-2022; gsf-sci-1-1-0

###### Build and test computer server (`release_server`)

Self-operated route only: assign identified server production inventory by reserved time and resource fraction; apply to development VMs too when not included elsewhere.

- Selected flow: Build and test computer server
- Flow property / unit: Number of items / item
- Amount rule: Self-operated route only: assign identified server production inventory by reserved time and resource fraction; apply to development VMs too when not included elsewhere.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: gsf-sci-1-1-0

###### Purchased virtual CPU compute service for builds and tests (`release_cloud`)

Purchased-cloud route: total billed and telemetry-reconciled vCPU-hours, including retries and reserved idle capacity; provider inventory must include cooling, electricity and hardware or identify each missing layer.

- Selected flow: Purchased virtual CPU compute service for builds and tests
- Flow property / unit: Compute time / vCPU-h
- Amount rule: Purchased-cloud route: total billed and telemetry-reconciled vCPU-hours, including retries and reserved idle capacity; provider inventory must include cooling, electricity and hardware or identify each missing layer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cloud`
- Sources: gsf-sci-1-1-0

###### Purchased object storage service for source and release archives (`release_storage`)

Sum daily attributable stored decimal GB including versions and replicas from provider logs; include retention only through the declared cutoff.

- Selected flow: Purchased object storage service for source and release archives
- Flow property / unit: Storage occupancy / GB-day
- Amount rule: Sum daily attributable stored decimal GB including versions and replicas from provider logs; include retention only through the declared cutoff.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage`
- Sources: nist-ssdf-2022; gsf-sci-1-1-0

###### Purchased data transfer service for release engineering (`release_network`)

Sum actual decimal GB transferred for source synchronization, dependencies, builds and test artifacts, preserving direction/provider. Do not infer energy from an unverified universal GB factor.

- Selected flow: Purchased data transfer service for release engineering
- Flow property / unit: Data volume / GB
- Amount rule: Sum actual decimal GB transferred for source synchronization, dependencies, builds and test artifacts, preserving direction/provider. Do not infer energy from an unverified universal GB factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_network`
- Sources: gsf-sci-1-1-0

###### Purchased potable water for evaporative computer-site cooling (`release_water`)

Conditional on direct evaporative cooling: sum makeup-water meter readings assigned to release workloads; no direct water row for a complete cloud provider inventory.

- Selected flow: Purchased potable water for evaporative computer-site cooling
- Flow property / unit: Volume / m3
- Amount rule: Conditional on direct evaporative cooling: sum makeup-water meter readings assigned to release workloads; no direct water row for a complete cloud provider inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling`
- Sources: gsf-sci-1-1-0

###### R-134a refrigerant (`release_refrigerant`)

Conditional on a directly managed R-134a circuit: charge additions net of recovered refrigerant returned to stock, allocated over the same workload period.

- Selected flow: R-134a refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Conditional on a directly managed R-134a circuit: charge additions net of recovered refrigerant returned to stock, allocated over the same workload period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling`
- Sources:

#### Outputs

##### Waste flows

###### Cooling blowdown wastewater to treatment (`release_wastewater`)

Conditional on direct cooling-water discharge: meter blowdown sent to the named wastewater operator; record chemistry and treatment interface separately from evaporation.

- Selected flow: Cooling blowdown wastewater to treatment
- Flow property / unit: Volume / m3
- Amount rule: Conditional on direct cooling-water discharge: meter blowdown sent to the named wastewater operator; record chemistry and treatment interface separately from evaporation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling`
- Sources:

##### Elementary flows

###### 1,1,1,2-Tetrafluoroethane to air (`release_leak`)

Conditional on direct R-134a leakage: derive species-specific air release only from a reconciled same-circuit/interval charge, recovery, stock, transfer and service-loss balance supported by direct leakage evidence and measurement uncertainty. An unmatched or negative residual is unresolved, never automatically an air release or clipped to zero; separate supplier manufacture from direct leakage.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Conditional on direct R-134a leakage: derive species-specific air release only from a reconciled same-circuit/interval charge, recovery, stock, transfer and service-loss balance supported by direct leakage evidence and measurement uncertainty. An unmatched or negative residual is unresolved, never automatically an air release or clipped to zero; separate supplier manufacture from direct leakage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling`
- Sources:

### Process: Entitlement administration and publisher delivery gate (`delivery`)

#### Inputs

##### Product flows

###### Purchased low-voltage grid electricity for entitlement administration (`delivery_power`)

Self-operated publisher administration and order/activation processing through delivery gate only; assign workload logs, meter period and entitlement cohort.

- Selected flow: Purchased low-voltage grid electricity for entitlement administration
- Flow property / unit: Energy / kWh
- Amount rule: Self-operated publisher administration and order/activation processing through delivery gate only; assign workload logs, meter period and entitlement cohort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources: gsf-sci-1-1-0; ibm-ipla-2011

###### Purchased virtual CPU compute service for entitlement delivery (`delivery_cloud`)

Purchased-cloud administration route: assign entitlement/order jobs and reserved share through delivery gate; recurring hosted customer operation is outside this production result.

- Selected flow: Purchased virtual CPU compute service for entitlement delivery
- Flow property / unit: Compute time / vCPU-h
- Amount rule: Purchased-cloud administration route: assign entitlement/order jobs and reserved share through delivery gate; recurring hosted customer operation is outside this production result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cloud`
- Sources: gsf-sci-1-1-0; ibm-ipla-2011

###### Road freight transport of physical software packages to publisher gate (`delivery_freight`)

Conditional on physical carrier/package incoming freight: actual consignment gross shipping mass times road-leg distance; keep shipping mass independent from entitlement count.

- Selected flow: Road freight transport of physical software packages to publisher gate
- Flow property / unit: Freight distance / t-km
- Amount rule: Conditional on physical carrier/package incoming freight: actual consignment gross shipping mass times road-leg distance; keep shipping mass independent from entitlement count.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freight`
- Sources:

#### Outputs

##### Product flows

###### Other application software, packaged, declared release entitlement (`delivered_entitlement`)

One accepted released rights bundle crosses the publisher gate; physical carrier copies do not add entitlements.

- Selected flow: Other application software, packaged, declared release entitlement
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_entitlement`
- Sources: un-cpc3-notes-2025; ibm-ipla-2011

### Process: Physical carrier writing and package assembly (`carrier`)

#### Inputs

##### Product flows

###### Purchased recorded optical software disc (`carrier_bought_optical`)

Bought-recorded route only: reconcile accepted carrier receipts, issue and stock changes for the declared release; provider inventory includes carrier manufacture and recording, not publisher software development.

- Selected flow: Purchased recorded optical software disc
- Flow property / unit: Number of items / item
- Amount rule: Bought-recorded route only: reconcile accepted carrier receipts, issue and stock changes for the declared release; provider inventory includes carrier manufacture and recording, not publisher software development.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carrier`
- Sources: un-cpc3-notes-2025; ibm-ipla-2011

###### Purchased recorded USB flash software drive (`carrier_bought_usb`)

Bought-recorded route only: reconcile accepted carrier receipts, issue and stock changes for the declared release; provider inventory includes carrier manufacture and recording, not publisher software development.

- Selected flow: Purchased recorded USB flash software drive
- Flow property / unit: Number of items / item
- Amount rule: Bought-recorded route only: reconcile accepted carrier receipts, issue and stock changes for the declared release; provider inventory includes carrier manufacture and recording, not publisher software development.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carrier`
- Sources: un-cpc3-notes-2025; ibm-ipla-2011

###### Purchased recorded magnetic software diskette (`carrier_bought_magnetic`)

Bought-recorded route only: reconcile accepted carrier receipts, issue and stock changes for the declared release; provider inventory includes carrier manufacture and recording, not publisher software development.

- Selected flow: Purchased recorded magnetic software diskette
- Flow property / unit: Number of items / item
- Amount rule: Bought-recorded route only: reconcile accepted carrier receipts, issue and stock changes for the declared release; provider inventory includes carrier manufacture and recording, not publisher software development.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carrier`
- Sources: un-cpc3-notes-2025; ibm-ipla-2011

###### Blank recordable optical disc (`carrier_blank_optical`)

In-house writing route only: reconcile blank-carrier issues including write failures; upstream dataset covers complete blank carrier rather than adding its embedded raw materials again.

- Selected flow: Blank recordable optical disc
- Flow property / unit: Number of items / item
- Amount rule: In-house writing route only: reconcile blank-carrier issues including write failures; upstream dataset covers complete blank carrier rather than adding its embedded raw materials again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carrier`
- Sources:

###### Blank USB flash drive (`carrier_blank_usb`)

In-house writing route only: reconcile blank-carrier issues including write failures; upstream dataset covers complete blank carrier rather than adding its embedded raw materials again.

- Selected flow: Blank USB flash drive
- Flow property / unit: Number of items / item
- Amount rule: In-house writing route only: reconcile blank-carrier issues including write failures; upstream dataset covers complete blank carrier rather than adding its embedded raw materials again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carrier`
- Sources:

###### Blank magnetic diskette (`carrier_blank_magnetic`)

In-house writing route only: reconcile blank-carrier issues including write failures; upstream dataset covers complete blank carrier rather than adding its embedded raw materials again.

- Selected flow: Blank magnetic diskette
- Flow property / unit: Number of items / item
- Amount rule: In-house writing route only: reconcile blank-carrier issues including write failures; upstream dataset covers complete blank carrier rather than adding its embedded raw materials again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carrier`
- Sources:

###### Purchased low-voltage grid electricity for software carrier writing (`carrier_write_power`)

In-house writing/verification/assembly route only: sum metered writing, hash verification and batch assembly energy including rejects and stand-by assigned to the batch.

- Selected flow: Purchased low-voltage grid electricity for software carrier writing
- Flow property / unit: Energy / kWh
- Amount rule: In-house writing/verification/assembly route only: sum metered writing, hash verification and batch assembly energy including rejects and stand-by assigned to the batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources: nist-ssdf-2022

###### Software media writing workstation (`carrier_writer`)

In-house writing route only: allocate complete writer/workstation production inventory by batch operating time over documented service life.

- Selected flow: Software media writing workstation
- Flow property / unit: Number of items / item
- Amount rule: In-house writing route only: allocate complete writer/workstation production inventory by batch operating time over documented service life.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: gsf-sci-1-1-0

###### Printed paperboard software carton (`package_box`)

Conditional on this exact component in the SKU BOM: weigh received/issued finished component, reconcile stocks and rejects, and retain purchased printing/forming burdens once.

- Selected flow: Printed paperboard software carton
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact component in the SKU BOM: weigh received/issued finished component, reconcile stocks and rejects, and retain purchased printing/forming burdens once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: ibm-ipla-2011

###### Printed paper software instruction booklet (`package_booklet`)

Conditional on this exact component in the SKU BOM: weigh received/issued finished component, reconcile stocks and rejects, and retain purchased printing/forming burdens once.

- Selected flow: Printed paper software instruction booklet
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact component in the SKU BOM: weigh received/issued finished component, reconcile stocks and rejects, and retain purchased printing/forming burdens once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: ibm-ipla-2011

###### Polypropylene optical-disc case (`package_case`)

Conditional on this exact component in the SKU BOM: weigh received/issued finished component, reconcile stocks and rejects, and retain purchased printing/forming burdens once.

- Selected flow: Polypropylene optical-disc case
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact component in the SKU BOM: weigh received/issued finished component, reconcile stocks and rejects, and retain purchased printing/forming burdens once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: ibm-ipla-2011

###### Low-density polyethylene package sealing film (`package_seal`)

Conditional on this exact component in the SKU BOM: weigh received/issued finished component, reconcile stocks and rejects, and retain purchased printing/forming burdens once.

- Selected flow: Low-density polyethylene package sealing film
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact component in the SKU BOM: weigh received/issued finished component, reconcile stocks and rejects, and retain purchased printing/forming burdens once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: ibm-ipla-2011

###### USB hardware license dongle (`license_dongle`)

Conditional on a hardware activation key in the SKU: collect issued identified dongles, including replacements before acceptance; complete dongle upstream inventory includes embedded electronic components.

- Selected flow: USB hardware license dongle
- Flow property / unit: Number of items / item
- Amount rule: Conditional on a hardware activation key in the SKU: collect issued identified dongles, including replacements before acceptance; complete dongle upstream inventory includes embedded electronic components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carrier`
- Sources: ibm-ipla-2011

#### Outputs

##### Waste flows

###### Rejected recorded optical software disc to treatment (`waste_optical`)

Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.

- Selected flow: Rejected recorded optical software disc to treatment
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Rejected USB flash software drive to electronic-waste treatment (`waste_usb`)

Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.

- Selected flow: Rejected USB flash software drive to electronic-waste treatment
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Rejected magnetic software diskette to treatment (`waste_magnetic`)

Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.

- Selected flow: Rejected magnetic software diskette to treatment
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste paperboard software carton to recycling (`waste_board`)

Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.

- Selected flow: Waste paperboard software carton to recycling
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste printed paper booklet to recycling (`waste_paper`)

Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.

- Selected flow: Waste printed paper booklet to recycling
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste polypropylene optical-disc case to treatment (`waste_case`)

Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.

- Selected flow: Waste polypropylene optical-disc case to treatment
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste low-density polyethylene sealing film to treatment (`waste_film`)

Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.

- Selected flow: Waste low-density polyethylene sealing film to treatment
- Flow property / unit: Mass / kg
- Amount rule: Conditional on this exact rejected stream before publisher gate: measure net waste mass from scale tickets and named handler; do not add future customer disposal or assume a recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_original | shared original and reusable code | Keep original creation resource amounts in one ledger. First separate independent tasks/products; allocate inseparable shared code using documented causal engineering/resource shares with sum one across all beneficiaries, including excluded download products. Free/open-source code is not environmentally free; missing upstream development contribution is a gap. Do not allocate by package mass or line count alone. | nist-ssdf-2022 |
| allocation_cohort | fixed stock development/build pools | After beneficiary partition, divide fixed target-release resource pools by actual cumulative accepted equivalent entitlements at a fixed cutoff, with identical documented rights configuration; split non-equivalent SKUs. Publish cutoff/earliest development period and deliveries including returns. A version update reuses only its assigned common core and adds incremental work. Revised cumulative profiles replace prior profiles, never add both into one model. New/low-sales releases must disclose the large undiluted burden. Forecast finite sales/horizon can be sensitivity only, with stated scenario and subsequent actual reconciliation; no unlimited amortization. | ibm-ipla-2011 |
| allocation_variable | delivery/media variable burdens | Divide actual cohort delivery/assembly quantities by accepted same-SKU entitlements N, including production failures and pre-acceptance replacements in numerator. Carrier duplication/backups are not additional entitlement output. Separately disclose fixed original and variable route contributions. | ibm-ipla-2011 |
| allocation_compute | self-operated equipment and shared computing | Assign hardware inventory by reserved time divided by installed life times reserved resource fraction; do not convert hardware emissions to an elementary exchange. Allocate electricity from metering and measured job/resource share, including idle and cooling once. Complete purchased services retain their provider allocation rather than an additional self-operated share. Sensitivity must vary life/resource/idle shares within documented alternatives without inventing defaults. | gsf-sci-1-1-0 |
| allocation_waste | production rejects and recovered material | Record waste to actual treatment provider without avoided-burden credit. Internal reuse/stock return cancels paired input/output transfers rather than counting a new software product or external recovery credit. No software mass balance is required; physical carrier/component balances are independent. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_entitlement | delivery | release entitlement output | sales and acceptance ledger | SKU; release hash; rights metric; installations; users; concurrency; term; accepted deliveries; returns; carrier count | Reconcile invoices, PoE/contract, shipped packages and release acceptance; derive net accepted N from gross recorded declared bundle deliveries minus same-cohort returns/unaccepted bundles exactly once; duplicate installers/backups add no deliveries. Freeze positive N by cutoff, split different rights configurations. | item | each delivery and cohort close | declared historical development and cumulative delivery cutoff | publisher and selected release/SKU | per reference flow | PoE, hashes and closed ledger |
| cp_power | development; release; delivery; carrier | purchased electricity | meter and workload records | meter start/end; kWh; interval; voltage; grid; project/task; active/idle allocation; facility overhead; N | Use calibrated submeters/traceable utility bills plus job logs; sum interval differences, assign project/workload shares, reconcile to site total. Measure failed jobs and allocated idle capacity. Record included cooling; multiply IT energy by measured period PUE only when utility total is absent. | kWh | each interval/job/batch | complete development/release/cohort period with cutoff | named self-operated office/computing/writing sites | per reference flow | meter calibration; provider/grid/year and workload reconciliation |
| cp_hardware | development; release; carrier | allocated capital equipment | asset and reservation ledger | asset/model; number; installed life hours; reserved hours; resource fraction; upstream scope; N | Identify each complete workstation/server/writer and supplier production inventory. Derive life from asset records; collect reserved time and resource capacity separately; assign share number times reserved hours/life hours times resource fraction. Disclose idle share and prevent overlapping reservations exceeding total. | item | asset event and each job interval | actual installed life and production intervals | self-operated production equipment only | per reference flow | asset register; supplier boundary; time/resource logs |
| cp_contract | development | outsourced coding | contract and accepted time sheets | provider; task; accepted h; original/release; rework; included utilities/hardware; N | Reconcile contracted task acceptance with supplier engineering hours and environmental activity inventory; allocate only delivered original share, keeping supplier electricity/hardware within its inventory. Missing provider inventory is unknown, not zero. | h | each accepted task | entire contracted development contribution | named code development provider | per reference flow | contract; acceptance; supplier activity inventory |
| cp_component | development | reusable original contribution | SBOM and rights/original burden ledger | component ID/version; acquired rights units; upstream development pool; released products; observable causal share; actual entitlement cohorts; N | Read component identity, rights and supplier development inventory. Partition shared originals across benefiting products by traceable engineering contribution/resource use with shares summing to one; spread target share over actual cumulative accepted entitlements through cutoff, including download cohorts as separate beneficiaries. Record missing/free component upstream data. | item | each release/SBOM revision and cutoff | original creation through declared cumulative cutoff | all benefiting products of the reusable original | per reference flow | SBOM; rights; causal ledger; denominator sensitivity |
| cp_cloud | release; delivery | purchased compute | provider billing and task telemetry | provider/region; vCPU count; reserved h; task; memory provision; reattempts; scope included; N | Sum vCPU count times reserved hours by task and period, reconcile bill and reservation logs; keep configured memory and hardware/provider interface. Require primary supplier intensity on the same service basis and check electricity/cooling/hardware coverage. | vCPU-h | each job and billing period | all production jobs through cutoff | named cloud provider/region; production accounts | per reference flow | bill-task crosscheck; supplier allocation/coverage |
| cp_storage | release | archive storage | object occupancy records | object/release; decimal bytes; replica count; daily occupancy; retention cutoff; supplier; N | Integrate each object size divided by 10^9 over actual stored days; count provider-reported replica scope once. Reconcile occupancy with billing; obtain supplier GB-day inventory. | GB-day | daily or event-based integration | creation to fixed archival cutoff | selected source/build/release archives | per reference flow | object logs; retention policy; billing |
| cp_network | release | data transfer | network/provider logs | task; direction; actual bytes; provider; transfer date; region; N | Sum logged bytes divided by 10^9 for each actual transfer; reconcile billed direction. Attach one matching service inventory per provider; do not count transfers internal to a complete cloud service twice. | GB | each transfer and billing period | production period through release gate | production network interfaces | per reference flow | transfer logs and supplier basis |
| cp_heat | development | workplace heat | heat meter and occupancy | MJ received; area; project occupied hours; total occupancy; provider; period; N | Read district delivered heat meter; allocate by measured project occupied area-hours divided by total heated area-hours for the same period, reconcile all allocated heat. | MJ | each heating billing period | development project heating intervals | heated workplace served by provider | per reference flow | heat bill; floor plan; occupancy |
| cp_travel | development | production business travel | itinerary and project ledger | rail/flight segment; passenger count; distance; class; trip purpose; project fraction; N | Reconcile tickets/itineraries and project approvals; sum each segment distance times passenger count times causal project share for rail and air separately. Record absence only with travel ledger evidence. | passenger-km | each trip | historical production project period | release-attributable business travel | per reference flow | tickets; project approval; route/provider |
| cp_cooling | release | direct cooling water and refrigerant | meters and refrigerant servicing | makeup m3; blowdown m3; evaporation; charge start/end kg; additions; recoveries; stock; circuit species; transfers; service losses; direct leak evidence; uncertainty; workload share; N | Meter makeup and blowdown separately and reconcile evaporation/stocks. For the same R-134a species reconcile opening/closing circuit charge, additions, all recovery destinations, stocks, paired transfers and documented non-air service losses. Assess the residual against weighing/charge uncertainty and direct leak evidence; unresolved missing paths or negative residuals require review, not presumed air leakage or zero clipping. Retain recovery certificates, not a default rate. Assign direct utility amounts by measured workload share; other refrigerants require separate species rows. | m3; kg | each interval and service event | same release workload interval | directly controlled computer-site cooling only | per reference flow | water balance; species charge/recovery reconciliation |
| cp_carrier | carrier | recorded/blank carrier and license key | lot receipts/issues and writing logs | carrier type/spec; recorded/blank route; units in/out; stock; rejected units; hash; dongle model; N | Reconcile opening stock plus receipts minus closing stock for each carrier/dongle, then match issue to accepted packages and rejects. For in-house writing verify release hash and retries; bought recorded route excludes duplicated recording power. Measure a traceable sample net mass per carrier for waste/freight, never for software reference. | item; kg | each received/written/assembled lot | all lots in delivery cohort | publisher writing/assembly or contracted recorded-carrier interface | per reference flow | lot ledger; hashes; route scope; calibrated weighing |
| cp_packaging | carrier | finished packaging component | SKU BOM and component issue records | component material/grade; tare-free kg; issues; accepted packages; stock; rejects; supplier scope; N | Weigh each named finished carton/booklet/case/film separately on calibrated scales; reconcile component stock and issues to BOM and actual accepted package count. Purchased finished components include printing/forming once; no separate embedded polymer/paper inputs. | kg | each SKU lot | delivery cohort assembly period | actual package BOM at publisher | per reference flow | BOM; weighing; supplier finished-component scope |
| cp_waste | carrier | specific pre-gate waste | weighing and handler transfer | stream; kg net; rejected lot; handler; treatment; stock; N | Weigh each stream separately without tare and reconcile rejected units times measured carrier mass or component scrap to transfer tickets. Track stored waste separately; match actual handler route and composition to treatment inventory. | kg | each rejected lot and transfer | same assembly/delivery cohort | pre-gate production rejects only | per reference flow | scale tickets; waste ledger; handler contract |
| cp_freight | delivery | incoming physical freight | consignment documents | gross shipment kg; road km; load share; lot; carrier; origin/destination; N | Read actual gross shipment mass and each road leg distance; calculate kg/1000 times km with documented consignment load share. Match carrier/truck/load conditions, count packaging shipping mass but do not normalize software by that mass. | t-km | each consignment | incoming carrier/package delivery lots | supplier to publisher gate road legs | per reference flow | weighbill; actual itinerary; carrier scope |

Protocol aggregation denotes the final common reference basis. The raw-field arithmetic and pre-normalization pool are defined in collection methods and calculation rules below. Use actual cumulative release entitlements for fixed pools and same-SKU accepted cohort N for variable exchanges; retain both raw periods and ratios. A finite positive denominator is required; an absent denominator cannot be repaired with a guessed license mass or future sales.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| entitlement_denominator | delivered_entitlement | N = gross recorded bundle deliveries of the same rights/SKU through declared cutoff minus same-cohort returned/unaccepted bundles exactly once; net accepted ledger values require no further subtraction. Output = 1 item; copies and backup files do not increment N. | cp_entitlement | N; reference output | ibm-ipla-2011 |
| fixed_pool_attribution | dev_power; dev_workstation; dev_contract; dev_component; dev_heat; dev_rail; dev_air; release_power; release_server; release_cloud; release_storage; release_network; release_water; release_refrigerant; release_wastewater; release_leak | For each fixed original/release resource j: normalized amount = sum of original resource quantities times target beneficiary shares divided by its actual cumulative equivalent-entitlement denominator. Keep resource units; shares sum to one across recipients and include incremental/reused core separately. | cp_entitlement; cp_component; applicable resource protocol | resource amount per reference flow |  |
| variable_cohort | delivery_power; delivery_cloud; delivery_freight; carrier_bought_optical; carrier_bought_usb; carrier_bought_magnetic; carrier_blank_optical; carrier_blank_usb; carrier_blank_magnetic; carrier_write_power; carrier_writer; package_box; package_booklet; package_case; package_seal; license_dongle; waste_optical; waste_usb; waste_magnetic; waste_board; waste_paper; waste_case; waste_film | For each variable route exchange: normalized amount = assigned actual cohort quantity / accepted same-SKU entitlement N. Failed writes, rejects and replacements stay in numerator; inactive routes are evidenced not-applicable. | cp_entitlement; applicable route protocol | exchange amount per reference flow |  |
| hardware_fraction | dev_workstation; release_server; carrier_writer | Allocated equipment quantity = identified equipment number times reserved production hours / documented life hours times reserved resource fraction. Normalize resulting original or cohort pool using the appropriate fixed/variable denominator; all fractions must be finite and within actual capacity. | cp_hardware; cp_entitlement | allocated item share | gsf-sci-1-1-0 |
| meter_energy | dev_power; release_power; delivery_power; carrier_write_power | Assigned kWh = sum of calibrated interval meter differences times causal workload share, plus assigned facility overhead only if not included. IT-only metered energy times measured same-period PUE replaces, never adds to, total facility energy. If provider unit is MJ multiply kWh by 3.6; apply fixed or variable cohort denominator afterwards. | cp_power; cp_entitlement | electricity quantity | gsf-sci-1-1-0 |
| cloud_service | release_cloud; delivery_cloud | vCPU-h = sum of reserved vCPU count times interval hours assigned to production jobs. Billing/telemetry and provider coverage must match; energy is supplied by a matching service inventory, not inferred from hours. | cp_cloud; cp_entitlement | service vCPU-h | gsf-sci-1-1-0 |
| archive_storage | release_storage | GB-day = sum of object bytes / 10^9 times stored days through cutoff, including declared replica scope once; then original allocation and count normalization. | cp_storage; cp_entitlement | storage GB-day | nist-ssdf-2022 |
| network_transfer | release_network | GB = sum of actual direction-specific transferred bytes / 10^9; then apply original share and entitlement count. No universal kWh/GB or kgCO2e/GB factor. | cp_network; cp_entitlement | transfer GB | gsf-sci-1-1-0 |
| cooling_balance | release_water; release_refrigerant; release_wastewater; release_leak | Water makeup plus opening storage = blowdown plus evaporation plus closing storage. R-134a candidate residual kg = opening circuit charge plus external additions plus net circuit transfers minus closing charge minus all recoveries minus documented non-air service losses, reconciled with species-specific storage movements. Assign to air only when complete paths, direct leak evidence and measurement uncertainty substantiate that compartment; otherwise keep unresolved. Never clip a negative residual or turn missing recovery into air release. Apply supported measured totals to workload shares and original denominator; no default water or leakage factor. | cp_cooling; cp_entitlement | separate m3 and species kg |  |
| carrier_balance | carrier_bought_optical; carrier_bought_usb; carrier_bought_magnetic; carrier_blank_optical; carrier_blank_usb; carrier_blank_magnetic; license_dongle | Opening stock plus receipts = accepted issued carrier/key units plus rejected units plus closing stock. A shipped multi-disc/backup set may have several carriers but one entitlement; record SKU cardinality and paired internal written-carrier transfers without external double counting. | cp_carrier; cp_entitlement | separate physical item quantities |  |
| physical_mass_balance | package_box; package_booklet; package_case; package_seal; waste_optical; waste_usb; waste_magnetic; waste_board; waste_paper; waste_case; waste_film | For each actual carrier or component, opening net material stock plus receipts = mass in accepted packages plus measured production waste plus closing stock; compare same tare-free moisture/material basis. Mixed/unknown composition needs resolution, not an assumed recycling output. | cp_carrier; cp_packaging; cp_waste; cp_entitlement | physical mass reconciliation |  |
| freight_activity | delivery_freight | t-km = sum of actual gross consignment kg / 1000 times road segment km times supported load allocation; then divide by accepted cohort N. This shipping denominator never replaces entitlement reference. | cp_freight; cp_entitlement | incoming freight t-km |  |
| heat_travel_activity | dev_heat; dev_rail; dev_air | Heat = delivered MJ times project occupied-area-hour fraction; rail/air passenger-km = sum of ticket segment km times passengers times project share for each separate mode. Then apply fixed original attribution and denominator. | cp_heat; cp_travel; cp_entitlement | separate MJ and passenger-km |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference and all inputs | Resolve a compatible count-based reference flow and every applicable supplier/flow/property/unit before dataset publication; a correct name with mass or toxicity reference property is not compatible. | contracts, direct identity records and property-unit linkage |
| completeness | original and production pools | Cover historical original creation and reused/free components plus repeated jobs and idle capacity; quantify missing coverage and obtain actual records before claiming completeness. Do not supply invented ranges or universal factors. | SBOM; resource ledger; job coverage |
| cohort | denominators and allocations | Retain positive actual N and fixed cutoff; cumulative original and interval-variable profiles disclose separate periods. Test observed alternate beneficiary split and finite forecast/count scenarios separately. | closed entitlement ledger; original allocation; sensitivity |
| route | conditional facilities/media | Document actual make/buy route and carrier specifications; not-applicable requires BOM/contract/asset evidence, zero requires measurement and unknown stays unknown. Other important actual exchanges need separate concrete rows and protocols. | BOM; provider scope; asset lists; records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered output | Require 1 item of the exact release/SKU/rights reference and a positive reconciled N; reject kg/software, copied carriers counted as new licenses, mixed rights configurations and unbounded future-sales denominators. | ibm-ipla-2011 |
| validate_original | development/build reuse | Check original ledger conservation across beneficiaries, shared core versus incremental release scope, and fixed/variable denominator periods; no original omitted because source tree exists or supplier price is zero. Require disclosed attribution/denominator sensitivity. | nist-ssdf-2022 |
| validate_production_coverage | all actual routes | Verify successful/failed/repeated jobs, metered utilities, capital shares, purchased code/compute/storage/network and carrier/packaging scope are represented once with applicable collection records. Missing UUIDs, provider layers or primary quantities are unresolved, never modeled as zero. | nist-ssdf-2022; gsf-sci-1-1-0 |
| validate_physical | media, packaging, waste, cooling | Check independent carrier-unit and material-mass balances, freight units, water/refrigerant stocks, every recovery/transfer/non-air service loss and measurement uncertainty supporting direct species/compartment; unmatched or negative residuals remain unresolved, never clipped or automatically emitted to air; reject guessed yield/leak factors and elementary emissions copied from upstream suppliers. |  |
| validate_boundary | downstream/customer service | Reject download-only/service output under this packaged mapping. Customer lifetime electricity, support and end-of-life require separately named datasets and scenarios; no production-only comparative lifecycle claim. | un-cpc3-notes-2025; gsf-sci-1-1-0 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production inventory for one accepted packaged application release entitlement |
| downstream_use | secondary_dataset; background_dataset only when scope/coverage is complete and upstream references match |
| allowed_use | Production-gate modelling of matching release/SKU/rights and carrier route; downstream use models may consume this production inventory once |
| excluded_use | Lifecycle superiority claims from production alone; kg/software proxy; download-only or hosted-service reference; other function/rights configurations without documented equivalence |
| required_metadata | Release hash/SKU, rights/platform, N and cutoff, original pool period, beneficiary allocation, provider interfaces, make/buy route and carrier BOM |
| required_quality_disclosure | Unknown UUID/provider/quantity gaps, original/free-code coverage, measured/modelled split, denominator/asset-life sensitivity, separate variable route contributions and production-only boundary |
| update_trigger | Release/rights/SKU change, new observed entitlement cutoff, original reuse repartition, material provider or carrier route change, resolved gaps |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp. 262–263, 417–419, 441–442. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category boundary and counterexamples: packaged application, originals, commissioned development, downloads, online execution and hosting. No LCA quantities. |
| nist-ssdf-2022 | official_guidance | NIST SP 800-218, SSDF v1.1, February 2022, PS.2/PS.3 and PW.6/PW.7/PW.8. https://doi.org/10.6028/NIST.SP.800-218 | Build/test, release integrity, component provenance and archive records; security-process guidance, not numerical LCA factors. |
| ibm-ipla-2011 | official_guidance | IBM International Program License Agreement, Z125-3301-14 (2011), Part 1 definitions and license grant, p.1. https://www.ibm.com/docs/en/STVRB7_3.4.0/Z125-3301-14.pdf | Program/authorized-use/PoE distinction, copies and media; one provider licensing example only, not a universal seat/license conversion or current product contract. |
| gsf-sci-1-1-0 | standard | Green Software Foundation, Software Carbon Intensity Specification v1.1.0, Embodied emissions, Software boundary, Functional unit. https://sci.greensoftware.foundation/ | Time/resource allocation, infrastructure coverage and measured/modelled disclosure adapted to production workloads; operational SCI scope is counterevidence to claiming production-only equivalence. No numeric examples adopted. |
