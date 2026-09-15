---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.removable-media-storage-units
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Removable media storage units

## 1. Scope and Applicability

This PCR covers computing peripherals that read or write physically removable media: optical-disc drives, removable magnetic-disk drives, tape drives and flash-card readers. The device, rather than the removable medium, is the product. Fixed-media drives, flash-memory cards, standalone audiovisual players and host computers are excluded. The classification title is verified in `un-cpc-3-0-structure-2025`; the device/media distinction follows the explanatory note in `un-cpc-2-1-removable-storage`.

The foreground package covers receipt of purchased components through assembly, functional testing and packaging at the factory gate. Component manufacture is represented by upstream datasets, including semiconductor fabrication and board population; it is not treated as burden-free. The inventory below is a compact component-assembly route. Integrated component manufacturing requires additional measured unit processes. Do not apply the optical component quantities to tape drives or card readers. The electronics life-cycle decomposition in `epa-sustainable-electronics-roadmap` supports separating component production, assembly and rejects; it provides no unit-specific consumption factors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.removable-media-storage-units |
| classification_refs | CPC 3.0: 45272; classification identity only |
| covered_products | Removable optical-disc drives, magnetic-disk drives, magnetic-tape drives and flash-card readers for computing |
| excluded_products | Fixed-media drives; flash cards and recording media; host computers; standalone audiovisual players |
| representative_product | Factory-tested optical-disc drive supplied without removable media |
| production_route | Purchased populated controller board and finished mechanical components; assembly; functional testing; packaging |
| market_state | New, tested device at factory gate; packaging recorded separately from net device mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Read or write a declared removable-media format for a host computer |
| How much | 1 kg net finished devices of one declared model; also report device count and kg/device |
| How well | Declare interface, supported media, read/write capability, throughput and acceptance-test criteria |
| How long or cycle | One production batch through final acceptance; service lifetime is not normalized into this production-only package |
| reference_flow_link | reference_product; production declared unit, not a claim of equal lifetime storage service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Removable media storage units `d0af9a31-3017-4ab7-a6e4-172f40cd7bb1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | device type; model; supported removable-media format; interface; read/write capability; throughput and test method; net kg/device; accessories included; packaging configuration; factory; country; production period; purchased-component boundary; acceptance yield |

Declare all required qualifiers in the foreground package. A comparison based on storage service additionally requires workload, media consumption, operating modes, reliability and service duration; this production declared unit alone cannot establish functional equivalence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference product | Mass | kg | Weigh accepted devices without packaging or removable media; convert count using measured model-specific kg/device. Never convert storage capacity to device mass. |
| energy | electricity | Net calorific value | MJ | Preserve metered energy; convert kWh to MJ by multiplying by 3.6. Allocate meter coverage once; test electricity must not be counted again in assembly electricity. |
| component_mass | components | Mass | kg | Use received component mass and reconcile installed mass, rejects, returns and stock changes. A populated board dataset includes its mounted components; do not count them twice. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | foreground | Include component receipt, assembly, testing, rework, packing and associated energy and production rejects. Record purchased components with upstream production links. | epa-sustainable-electronics-roadmap |
| boundary_disclosure | data package | Disclose the gate-to-gate foreground and upstream coverage separately; include inbound transport in linked supply datasets or separately measured transport processes, once only. Excluded downstream use and disposal mean this is not a complete product life-cycle footprint. | ghg-protocol-product-standard |
| boundary_completeness | site inventory | Reconcile the actual bill of materials and site process register with the listed exchanges. Add separate atomic rows for any additional component, chemical, fuel, water, waste or direct emission actually crossing the boundary; absence needs site evidence, not an assumed zero. | ghg-protocol-product-standard |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished components and populated boards received for device assembly |
| starting_condition_role | Foreground entry gate; not a zero-burden cut-off |
| product_classification_scope | Removable-media computing storage devices, excluding the removable media |
| recursive_input_rule | Purchased complete drives used inside an enclosure are recorded once as a same-category input with supplier boundary and upstream dataset; never recursively recreate the same assembly or omit its burdens. |
| upstream_dataset_requirement | Link each purchased component to a geographically and technologically suitable production dataset; state missing links and avoid overlapping component and raw-material inventories. |
| disclosure | Starting state; component make/buy boundary; transport coverage; production period; included accessories; losses; exclusions; downstream stages not represented |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Component assembly, functional testing and packing | required | All devices; component cards are conditional on the bill of materials | foreground production | 1 kg accepted net devices |

One batch-level process encompasses assembly, test and packing because the reference output and loss reconciliation share one production ledger. Keep operation-level electricity and test-time records within the collection protocol. Internal movements and rework are not fictitious purchased intermediate flows.

### Process: Component assembly, functional testing and packing (`assembly`)

#### Inputs

##### Product flows

###### Populated storage-drive controller board (`controller_board`)

When the specified controller board is purchased for the device.

- Selected flow: Populated storage-drive controller board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When the specified controller board is purchased for the device.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


###### Finished steel drive housing (`steel_housing`)

When the model has a purchased steel housing; do not apply to a plastic enclosure.

- Selected flow: Finished steel drive housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When the model has a purchased steel housing; do not apply to a plastic enclosure.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


###### Optical-disc drive spindle motor (`motor`)

When an optical-drive spindle motor is separately purchased; exclude if already included in a purchased mechanism dataset.

- Selected flow: Optical-disc drive spindle motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When an optical-drive spindle motor is separately purchased; exclude if already included in a purchased mechanism dataset.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


###### Optical disc drive laser pickup unit (`laser_pickup`)

When an optical laser pickup is separately purchased; include the module, not its constituent parts again.

- Selected flow: Optical disc drive laser pickup unit `634db7bf-732f-47ee-9546-ac7f2026a939`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When an optical laser pickup is separately purchased; include the module, not its constituent parts again.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


###### Magnetic tape-drive read/write head (`tape_head`)

When a magnetic tape-drive head is separately purchased.

- Selected flow: Magnetic tape-drive read/write head
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When a magnetic tape-drive head is separately purchased.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


###### Flash-memory card socket (`card_connector`)

When a flash-card socket is separately purchased; exclude if already mounted on the purchased populated board.

- Selected flow: Flash-memory card socket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When a flash-card socket is separately purchased; exclude if already mounted on the purchased populated board.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


###### Steel screw (`screws`)

When steel screws are issued for assembly; record actual grade and coating.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When steel screws are issued for assembly; record actual grade and coating.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


###### corrugated board boxes (`box`)

When a corrugated-board shipping box is used; record mass per package and devices per box.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When a corrugated-board shipping box is used; record mass per package and devices per box.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


###### Electricity (`electricity`)

Purchased electricity for assembly, testing and packing, including attributable shared services; retain operation submeter records.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Inclusion condition: Purchased electricity for assembly, testing and packing, including attributable shared services; retain operation submeter records.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


#### Outputs

##### Product flows

###### Removable media storage units (`reference_product`)

Accepted device output only; packaging mass is excluded from this reference output.

- Selected flow: Removable media storage units `d0af9a31-3017-4ab7-a6e4-172f40cd7bb1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Accepted device output only; packaging mass is excluded from this reference output.
- Amount rule: Calculate accepted net mass from accepted count and measured kg/device, then normalize to 1 kg.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


##### Waste flows

###### Discarded optical-disc drive (`reject`)

When a failed optical drive is discarded as a whole device; record waste destination. Rework is not waste until discarded.

- Selected flow: Discarded optical-disc drive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: When a failed optical drive is discarded as a whole device; record waste destination. Rework is not waste until discarded.
- Amount rule: Aggregate matched-period net exchange from cp_batch and divide by accepted net output mass using normalize_batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net devices
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | shared production | Use product-line and operation metering before allocating shared burdens. Where subdivision is infeasible use a demonstrated physical driver such as occupied equipment time; document why it reflects resource use and test sensitivity. | ghg-protocol-product-standard |
| allocation_rejects | yield and recycling | Retain failed-test and rework burdens in accepted output. Track rejects separately and do not treat them as saleable reference product. Declare a consistent recycling allocation method; do not deduct an assumed avoided virgin-material credit. | ghg-protocol-product-standard |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_batch | assembly | Components, energy, packaging, accepted product and rejects | batch ledger and meters | model; lot; component identity; issued mass; returns; opening and closing stock; accepted count; net device mass; reject mass; meter readings; run and test hours; destinations | Reconcile BOM, purchasing and production ledgers with calibrated weighing, submetering, acceptance tests and waste transfer records | kg; count; MJ; h | each batch and meter interval | Full declared production period including shutdowns and rework | Declared factory and shared services | Aggregate net exchanges over the same period; allocate shared service once; divide by accepted net mass | Calibration; supplier specifications; invoices; test logs; waste receipts; allocation reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all exchanges | q_i = allocated net batch exchange i / accepted net batch mass; reference output = 1 kg | cp_batch quantities and accepted count times measured kg/device | kg or MJ per kg reference product | |
| net_issues | purchased components | Net issue = opening stock + receipts - closing stock - supplier returns; reconcile against installed components and measured rejects | cp_batch mass ledger | Component input mass | |
| meter_partition | electricity | Sum operation meters; allocate unmetered shared services using justified occupied equipment time; reconcile total to the site bill | cp_batch energy and runtime | Purchased electricity attributable to this batch | |

These are foreground bookkeeping identities, not literature-derived yield or consumption estimates.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | device and components | Verify removable-media function and actual BOM; record purchased board population and mechanical-module scope | Supplier drawings and acceptance specifications |
| dq_period | all records | Use one matched production period and report missing periods, meter allocation, representativeness and uncertainty | cp_batch; ghg-protocol-product-standard chapter 8 |
| dq_coverage | material and waste balances | Investigate discrepancy between issued mass, device output, scrap, returns and stock movement using measurement uncertainty; no unsupported tolerance is prescribed | Signed mass reconciliation and waste receipts |
| dq_ranges | foreground amounts | Collect actual amounts; do not replace absent measurements with a generic optical-drive, tape-drive or reader benchmark | cp_batch |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | Require all qualifiers, net device mass and acceptance records. Reject a fixed-media drive or a removable medium presented as the reference device. | un-cpc-2-1-removable-storage |
| validate_inventory | quantities | Verify each actual exchange is atomic, normalized to accepted output, supported by cp_batch, and assigned once; reconcile BOM, electricity and waste totals. Missing data are unresolved, not zero. | ghg-protocol-product-standard |
| validate_boundary | downstream claims | Require explicit upstream links and disclosure of unmodelled stages; prohibit lifetime service comparisons from this production-only package without an additional use and end-of-life model. | ghg-protocol-product-standard |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a specified removable-media device model |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Production input to host-computer or peripheral-device life-cycle models with compatible boundaries |
| excluded_use | Removable-media manufacture; fixed-media drive production; generic lifetime storage-service comparison; claim of a full life-cycle footprint |
| required_metadata | Model; device technology; site; country; period; net mass; count; acceptance criteria; BOM scope; upstream links; transport treatment; allocation |
| required_quality_disclosure | Measurement coverage; supplier-data gaps; unresolved flow identities; missing upstream datasets; uncertainty; exclusions |
| update_trigger | BOM, manufacturing route, supplier technology, test protocol, site energy or reference-product specification changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UNSD, CPC 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; retrieved 2026-09-09 | Exact classification title; independence_key: un-cpc-3-0-structure-2025 |
| un-cpc-2-1-removable-storage | official_guidance | UNSD, CPC 2.1 explanatory note 45272; https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/45272 ; retrieved 2026-09-09 | Prior-version device/media boundary explanation, not asserted as CPC 3.0 explanatory text; independence_key: un-cpc-2-1 |
| epa-sustainable-electronics-roadmap | official_guidance | US EPA, E. Sahle-Demessie, Sustainable Electronics Roadmap, slides 7, 11 and 16; https://www.epa.gov/sites/default/files/2014-05/documents/roadmap.pdf ; retrieved 2026-09-09 | Electronics components/assembly/reject decomposition and measured energy need; no amount factors; independence_key: epa-sustainable-electronics-roadmap |
| ghg-protocol-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 7–9; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; retrieved 2026-09-09 | Boundary disclosure, primary records and allocation hierarchy adapted to a production dataset; not a claim of full standard conformance; independence_key: ghg-protocol-product-standard-2011 |
