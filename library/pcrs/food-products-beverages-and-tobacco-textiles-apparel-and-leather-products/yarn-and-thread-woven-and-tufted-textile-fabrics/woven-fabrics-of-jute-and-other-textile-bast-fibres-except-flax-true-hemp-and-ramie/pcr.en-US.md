---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics of jute and other textile bast fibres (except flax, true hemp and ramie)

## 1. Scope and Applicability

This PCR covers factory-gate production of woven fabric made from jute or other textile bast fibres, while explicitly excluding flax, true hemp, and ramie. The foreground boundary begins with spun bast-fibre yarn received at the fabric mill and includes yarn preparation, warping, sizing when applied, weaving, route-specific pretreatment or finishing when performed, inspection, and packaging for dispatch.

The PCR covers greige and finished woven fabric only when the data package declares the actual fibre composition and finishing state. It excludes cultivation, retting, fibre preparation, and spinning before the yarn reaches the fabric mill; knitted, crocheted, nonwoven, tufted, and special fabrics; fabrics of flax, true hemp, or ramie; garment or article manufacture; distribution, use, and end of life. Upstream burdens of purchased yarn, utilities, chemicals, and packaging are represented by separate upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie |
| classification_refs | CPC 3.0: 26570, exact |
| covered_products | Woven fabrics whose declared textile fibre is jute or another bast fibre within CPC 26570, excluding the named fibres |
| excluded_products | Flax, true-hemp, and ramie fabrics; cotton or man-made-fibre fabrics; knitted, crocheted, nonwoven, tufted, and special fabrics; yarn and finished textile articles |
| representative_product | Woven jute or other in-scope bast-fibre fabric at the fabric-mill gate |
| production_route | Spun yarn receipt; warping and optional sizing; weaving; route-specific pretreatment or finishing; inspection and packaging |
| market_state | Greige or finished fabric in rolls or another declared dispatch form, sold at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Woven fabric of jute or another in-scope textile bast fibre, excluding flax, true hemp, and ramie |
| How much | 1 kg net fabric mass, excluding packaging |
| How well | Conforming to the declared fibre composition, weave, areal density, width, finishing state, and quality grade |
| How long or cycle | One production lot at the fabric-mill gate; no service-life duration is assigned |
| reference_flow_link | `reference_woven_fabric_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of jute and other textile bast fibres (except flax, true hemp and ramie) `97e92077-1caf-4f27-9d87-9b49e9d6a4e2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | bast-fibre species; fibre composition by mass; yarn specification; weave; areal density; fabric width; greige or finished state; pretreatment and finishing route; moisture or conditioning state; dispatch form; production site and geography; production period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net fabric mass excluding tubes, film, labels, and other dispatch packaging; declare the moisture or conditioning state used for weighing. |
| `composition_basis` | Fibre composition | Mass fraction | mass % | Report the mass percentage of each fibre in the woven fabric and demonstrate that flax, true hemp, and ramie are outside the claimed product scope. |
| `areal_density` | Fabric specification | Mass per area | g/m2 | Record the tested or specification-based areal density and fabric width as qualifiers; do not replace the 1 kg reference amount with an area-based functional unit. |
| `lot_normalization` | All foreground inventory quantities | Quantity appropriate to the atomic exchange | reported unit per 1 kg reference product | Normalize each lot record by the accepted net mass of in-scope fabric from the same accounting period and retain the unnormalised source record. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Spun jute or other in-scope bast-fibre yarn received at the fabric-mill gate, with fibre identity, composition, yarn specification, supplier, and received mass declared |
| starting_condition_role | Purchased product input and start of foreground fabric manufacturing |
| product_classification_scope | CPC 3.0 code 26570 only; flax, true hemp, ramie, knitted, nonwoven, tufted, and special fabrics are excluded |
| recursive_input_rule | A same-category intermediate transferred between foreground processes is recorded as an internal product flow and carries no additional upstream fabric burden; purchased same-category fabric must use a separate upstream dataset and be disclosed |
| upstream_dataset_requirement | Use separate upstream datasets for yarn, electricity, steam or heat, water, chemicals, and packaging that cross the foreground boundary |
| disclosure | Declare whether sizing, desizing, washing, bleaching, dyeing, thermal treatment, or other finishing occurred; declare wastewater destination, packaging form, cut-offs, and any operation performed off-site |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_1` | Foreground manufacturing | Include yarn preparation, warping, sizing when applied, weaving, all on-site route-specific pretreatment or finishing, inspection, and dispatch packaging from yarn receipt to accepted fabric at the factory gate. | `jrc-textiles-bref-2023`; `eu-2022-2508-textiles-bat` |
| `system_boundary_2` | Purchased inputs | Represent burdens before the mill gate with separate upstream datasets and do not duplicate them on internal intermediate fabric transfers. | `iso-14044-2006` |
| `system_boundary_3` | Conditional operations | Include each wet, thermal, chemical, wastewater, and air-emission operation only when it occurred, and record a documented not-applicable decision otherwise. | `jrc-textiles-bref-2023`; `eu-2022-2508-textiles-bat` |
| `system_boundary_4` | Atomic inventory coverage | Add every actual yarn, electricity supply, steam or heat supply, fuel, water supply, process chemical, packaging component, waste stream, and direct elementary emission as a separate atomic exchange; never combine unlike exchanges in one row. | `eu-2022-2508-textiles-bat` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabric_formation` | Yarn preparation and weaving | `required` | Required for all in-scope woven fabric; sizing and sizing water are included only when used | Convert in-scope spun bast-fibre yarn into greige woven fabric | Mass of greige fabric leaving weaving |
| `finishing_and_dispatch` | Route-specific finishing, inspection, and dispatch | `required` | Inspection and dispatch are required; wet or thermal treatment inputs apply only when those operations occur | Produce accepted fabric in the declared market state and prepare it for dispatch | Accepted net mass of in-scope reference fabric |

### Process: Yarn preparation and weaving (`fabric_formation`)

#### Inputs

##### Product flows

###### In-scope bast-fibre yarn (`bast_fibre_yarn_input`)

Spun jute or other in-scope bast-fibre yarn enters the mill for warping and weaving. The record must identify the fibre species and exclude flax, true hemp, and ramie.

- Selected flow: Jute and other in-scope textile bast-fibre yarn
- Flow property / unit: Mass / kg
- Amount rule: Supplier- and lot-recorded yarn mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_materials`
- Sources: `un-cpc-v3-26570`

###### Grid electricity for fabric formation (`grid_electricity_formation`)

Metered grid electricity supplies warping, sizing auxiliaries, loom drives, compressed air, humidification, and local extraction assigned to fabric formation.

- Selected flow: Grid electricity supplied to the fabric-formation process
- Flow property / unit: Energy / kWh
- Amount rule: Metered or invoice-reconciled electricity allocated to fabric formation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_energy`
- Sources: `eu-2022-2508-textiles-bat`

###### Modified starch sizing agent (`modified_starch_size`)

Modified starch is recorded when it is applied to protect and lubricate warp yarn during weaving.

- Selected flow: modified starch `09797370-6632-42aa-9d77-e9d41ff82c75`
- Flow property / unit: Mass / kg
- Amount rule: Supplier- and batch-recorded mass of modified starch charged to sizing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_materials`
- Sources: `eu-2022-2508-textiles-bat`

###### Process water for sizing (`process_water_sizing`)

Process water is recorded separately when it is supplied to prepare or apply the sizing liquor.

- Selected flow: Process water supplied for sizing
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-recorded water supplied to sizing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_materials`
- Sources: `eu-2022-2508-textiles-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven jute fabric (`greige_woven_fabric_output`)

Greige woven fabric is the measured intermediate leaving fabric formation before any route-specific wet or thermal finishing.

- Selected flow: Greige woven jute or other in-scope bast-fibre fabric
- Flow property / unit: Mass / kg
- Amount rule: Lot-recorded mass of greige fabric released from weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_materials`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Jute yarn waste (`jute_yarn_waste_output`)

Broken ends, loom waste, and other discarded in-scope yarn are recorded as one jute-yarn waste stream, separate from fabric offcuts.

- Selected flow: Jute yarn waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled mass sent to the declared recovery or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_materials`
- Sources: `eu-2022-2508-textiles-bat`

##### Elementary flows

### Process: Route-specific finishing, inspection, and dispatch (`finishing_and_dispatch`)

#### Inputs

##### Product flows

###### Greige woven jute fabric input (`greige_woven_fabric_input`)

The measured greige intermediate enters the route-specific finishing and dispatch process without an added upstream fabric burden when transferred internally.

- Selected flow: Greige woven jute or other in-scope bast-fibre fabric
- Flow property / unit: Mass / kg
- Amount rule: Lot-recorded mass transferred from fabric formation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `jrc-textiles-bref-2023`

###### Process water for finishing (`process_water_finishing`)

Process water is recorded when used for desizing, washing, bleaching, dyeing, rinsing, or equipment cleaning assigned to the product route.

- Selected flow: Process water supplied for textile finishing
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-recorded water supplied to applicable finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `eu-2022-2508-textiles-bat`

###### Sodium hydroxide input (`sodium_hydroxide_input`)

Sodium hydroxide is recorded when used in an applicable scouring, desizing, pH-control, or other declared finishing operation. The delivered concentration must be retained with the foreground record.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Supplier- and batch-recorded delivered mass with concentration declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `eu-2022-2508-textiles-bat`

###### Hydrogen peroxide solution input (`hydrogen_peroxide_solution_input`)

Hydrogen peroxide solution is recorded only when chlorine-free bleaching with this chemical is performed; solution concentration is a mandatory foreground field.

- Selected flow: Hydrogen peroxide solution used for textile bleaching
- Flow property / unit: Mass / kg
- Amount rule: Supplier- and batch-recorded delivered solution mass with concentration declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `eu-2022-2508-textiles-bat`

###### Grid electricity for finishing and dispatch (`grid_electricity_finishing`)

Metered grid electricity supplies wet-processing equipment, drying or curing auxiliaries, inspection, winding, and packing assigned to this process.

- Selected flow: Grid electricity supplied to finishing and dispatch
- Flow property / unit: Energy / kWh
- Amount rule: Metered or invoice-reconciled electricity allocated to finishing and dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources: `eu-2022-2508-textiles-bat`

###### Purchased steam for finishing (`purchased_steam_finishing`)

Purchased steam is recorded separately when it supplies washing, drying, curing, or other route-specific thermal duty.

- Selected flow: Purchased steam supplied to textile finishing
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam energy or supplier statement assigned to applicable finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources: `eu-2022-2508-textiles-bat`

###### Paperboard tube input (`paperboard_tube_input`)

A paperboard tube is recorded when the accepted fabric is wound onto a tube for dispatch.

- Selected flow: Paperboard tube for a textile roll
- Flow property / unit: Mass / kg
- Amount rule: Purchasing or packing-record mass of paperboard tubes consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_records`
- Sources:

###### Polyethylene film input (`polyethylene_film_input`)

Polyethylene film is recorded when used to wrap the fabric roll for dispatch.

- Selected flow: Polyethylene film used for textile-roll packaging
- Flow property / unit: Mass / kg
- Amount rule: Purchasing or packing-record mass of polyethylene film consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference woven fabric (`reference_woven_fabric_output`)

Accepted in-scope woven fabric leaves the foreground boundary in the declared greige or finished state; packaging mass is excluded from the reference amount.

- Selected flow: Woven fabrics of jute and other textile bast fibres (except flax, true hemp and ramie) `97e92077-1caf-4f27-9d87-9b49e9d6a4e2`
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted net fabric mass released for dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_records`
- Sources: `un-cpc-v3-26570`

##### Waste flows

###### Textile wastewater to treatment (`textile_wastewater_to_treatment`)

Combined wastewater transferred to on-site or off-site treatment is recorded separately from any direct elementary discharge to water.

- Selected flow: Textile wastewater transferred to treatment
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater volume assigned to the applicable product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Jute fabric offcuts (`jute_fabric_offcuts_output`)

Rejected edges, samples, and cut pieces of in-scope fabric are recorded as a fabric-offcut waste stream, separate from yarn waste.

- Selected flow: Jute fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled offcut mass sent to the declared recovery or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_records`
- Sources: `eu-2022-2508-textiles-bat`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Multi-process mill records | Avoid allocation by metering, batch records, and process subdivision so that fabric formation and finishing burdens are assigned to the actual product route. | `iso-14044-2006`; `eu-2022-2508-textiles-bat` |
| `allocation_rule_2` | Rework and internal intermediate fabric | Treat internal transfers and rework within the foreground boundary without a second upstream burden; disclose the returned mass and the processes repeated. | `iso-14044-2006` |
| `allocation_rule_3` | Unavoidable shared burdens and co-products | When subdivision cannot resolve shared burdens, apply and document a physical relationship that reflects causality; use mass only when it is representative, and use economic allocation only when no defensible physical relationship exists. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabric_formation_materials` | `fabric_formation` | yarn, sizing agent, sizing water, greige output, and yarn waste | weighbridge, warehouse issue, batch, meter, and waste-transfer records | lot_id; flow_name; supplier; fibre_identity; quantity; unit; timestamp; destination | Reconcile issued inputs, metered water, greige output, stock change, and waste by production lot | kg or m3 as recorded | Each lot, aggregated monthly | At least one representative production year or the full declared period | All fabric-formation equipment serving the declared product | Sum by atomic flow and lot, then normalize to accepted reference-fabric mass | Calibrated scale or meter evidence; supplier documents; stock reconciliation; waste receipts |
| `cp_fabric_formation_energy` | `fabric_formation` | grid electricity | submeter and invoice records | meter_id; opening_reading; closing_reading; period; production_line; allocation_key | Prefer direct submetering; reconcile to site invoices and document any allocation | kWh | Meter interval or monthly | Same period as product output | Fabric-formation equipment and assigned auxiliaries | Sum direct readings or documented allocation for the process | Meter calibration, invoice reconciliation, and allocation worksheet |
| `cp_finishing_materials` | `finishing_and_dispatch` | greige fabric, water, sodium hydroxide, and hydrogen peroxide solution | batch recipe, issue, meter, supplier, and transfer records | lot_id; operation; chemical_name; concentration; quantity; unit; water_meter; fabric_mass | Record every applicable operation and reconcile chemical issues and water meters to the lot | kg or m3 as recorded | Each batch or continuous production run | Same period as product output | All on-site wet or chemical operations for the declared product | Sum each atomic flow separately; do not aggregate different chemicals | Batch sheets, safety data sheets, supplier specifications, meter calibration, and stock reconciliation |
| `cp_finishing_energy` | `finishing_and_dispatch` | electricity and purchased steam | submeter, steam meter, and supplier records | meter_id; energy_carrier; reading; unit; pressure; temperature; period; operation | Measure each energy carrier separately and reconcile to supplier statements | kWh or MJ | Meter interval or monthly | Same period as product output | Finishing, inspection, packing, and assigned auxiliaries | Sum by energy carrier and process before normalization | Meter calibration, invoice reconciliation, and documented conversion factors |
| `cp_wastewater_records` | `finishing_and_dispatch` | textile wastewater to treatment | effluent meter and treatment-transfer records | meter_id; volume; timestamp; destination; treatment_route; product_allocation | Measure wastewater at the relevant process or treatment transfer point and document allocation | m3 | Continuous totalizer or each batch | Same period as wet processing | Wastewater generated by the declared product route | Sum measured volume by destination and keep direct discharges separate | Meter calibration, treatment records, and route identification |
| `cp_dispatch_records` | `finishing_and_dispatch` | packaging, accepted fabric, and fabric offcuts | packing list, scale, quality release, warehouse, and waste records | lot_id; net_fabric_mass; moisture_state; tube_mass; film_mass; offcut_mass; destination | Weigh accepted fabric net of packaging and reconcile packaging issues and offcuts | kg | Each lot | Full declared production period | Final inspection, winding, packing, and dispatch for the declared product | Sum accepted net mass and each packaging or waste flow separately | Scale calibration, quality-release record, packing list, and waste receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot_records` | Every foreground inventory row | Divide the collected atomic-flow quantity for the declared period by accepted net reference-fabric mass from the same period; preserve the raw record and reported unit. | atomic-flow quantity; accepted net reference-fabric mass | foreground quantity per 1 kg reference fabric | `iso-14044-2006` |
| `reconcile_internal_fabric` | Greige fabric transfer | Reconcile greige output and input by lot; explain storage change, rejection, or rework and do not attach a second upstream burden to the internal transfer. | greige output; greige input; stock change; rejects; rework | reconciled internal fabric transfer | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Confirm CPC 26570 product semantics, fibre species and composition, weave, areal density, width, market state, and exclusion of flax, true hemp, and ramie. | Product specification, bill of materials, test report, and quality-release record |
| `dq_atomic_completeness` | Inventory | Record every actual input, waste, and direct emission separately; a combined utility, chemical, packaging, waste, or emission label is incomplete. | Process-level input-output inventory and reconciliation |
| `dq_temporal_match` | All records | Use inputs and outputs from the same declared production period and disclose shutdowns, abnormal batches, outsourcing, and stock changes. | Timestamped records and production log |
| `dq_measurement` | Metered and weighed quantities | Identify meter or scale, unit, calibration status, and any estimation or allocation applied to a missing reading. | Calibration certificate, meter log, invoice, and allocation worksheet |
| `dq_chemical_identity` | Process chemicals | Record chemical name, delivered concentration, supplier, and batch or issue quantity; do not substitute a generic chemical-group amount. | Supplier specification, safety data sheet, warehouse issue, and batch recipe |
| `dq_no_default_values` | Missing foreground data | Do not replace missing foreground records with AI-generated ranges or uncited default quantities; report the gap for review. | Data-gap register and reviewer disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Reference flow | Confirm UUID `97e92077-1caf-4f27-9d87-9b49e9d6a4e2`, Product flow type, CPC 26570 identity, Mass property, 1 kg amount, and exclusion of packaging mass. | `un-cpc-v3-26570` |
| `validation_rule_2` | Scope | Reject a data package that includes flax, true hemp, ramie, knitted, nonwoven, tufted, or special fabric under this reference product. | `un-cpc-v3-26570` |
| `validation_rule_3` | Required qualifiers | Reject an incomplete reference flow when fibre identity and composition, weave, areal density, width, finishing state, moisture state, dispatch form, geography, or production period is missing. | `un-cpc-v3-26570` |
| `validation_rule_4` | Process coverage | Confirm fabric formation, inspection, and dispatch records; confirm each declared wet or thermal operation and its separate water, chemical, energy, wastewater, waste, and emission records when applicable. | `jrc-textiles-bref-2023`; `eu-2022-2508-textiles-bat` |
| `validation_rule_5` | Atomic exchanges | Reject a row that combines different fuels, utilities, chemicals, packaging components, wastes, or elementary emissions, or that uses a selector instruction instead of one exchange. | `eu-2022-2508-textiles-bat` |
| `validation_rule_6` | Reconciliation | Require lot or period reconciliation of yarn input, internal greige transfer, accepted fabric, yarn waste, fabric offcuts, rework, and stock change; investigate and disclose material imbalance. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a completed foreground data package |
| downstream_use | Foreground process datasets and lifecyclemodel projections for woven jute or other in-scope bast-fibre fabric |
| allowed_use | Studies whose product, geography, technology, fibre composition, finishing route, moisture state, and production period are compatible with the disclosed dataset |
| excluded_use | Flax, true-hemp, ramie, cotton, man-made-fibre, knitted, nonwoven, tufted, or special fabrics; undisclosed proxy use; substitution for missing site records |
| required_metadata | PCR id and version; reference UUID; CPC 26570; all reference-flow qualifiers; process route; site and geography; production period; data owners; source dataset versions; allocation and cut-off decisions |
| required_quality_disclosure | Record coverage; measurement and calibration evidence; allocation; mass reconciliation; data gaps; wastewater destination; off-site operations; uncertainty and limitations |
| update_trigger | Change in fibre composition, yarn specification, weave, finishing route, process technology, site, energy or water supply, chemical recipe, wastewater route, packaging, allocation, or production period that materially changes representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-26570` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 26570, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-08-12 | Product identity, inclusions, exclusions, and classification scope |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, JRC131874, EUR 31392 EN, DOI 10.2760/355887, 2023, https://doi.org/10.2760/355887, retrieved 2026-08-12 | Process decomposition, wet processing, fabric production, finishing, and environmental inventory context |
| `eu-2022-2508-textiles-bat` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj, retrieved 2026-08-12 | Sizing, weaving, water, energy, chemical, wastewater, waste, monitoring, and atomic input-output coverage rules |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html, retrieved 2026-08-12 | System boundary, allocation, inventory calculation, reconciliation, reporting, and data-quality principles |
