---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.watches
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Watches

## 1. Scope and Applicability

This PCR applies to complete portable personal timepieces placed on the market as watches, including wrist-watches, pocket-watches, and other complete watches with mechanical, quartz, or other watch movements. The foreground dataset covers final assembly, cleaning when performed, functional and water-resistance testing, attachment of the declared band or strap, final quality release, and retail-unit packaging up to the factory gate.

The semantic boundary follows CPC 48410 and its established correspondence to HS headings 9101 and 9102. It excludes clocks; time-recording or interval-indicating apparatus; movements sold separately; cases, bands, straps, glasses, and other parts sold separately; watch repair or manufacturing services; and multifunction connected wearable computers whose primary product identity is not a watch. Component manufacture, transport, distribution, use, maintenance, and end-of-life are outside the foreground process but must be represented by linked upstream or downstream datasets when the study claims a broader life-cycle boundary.

Mechanical and battery-powered routes are not averaged silently. The data package must identify the movement technology, power system, case and cover materials, band or strap material, water-resistance class, declared accuracy or release specification, manufacturing geography, packaging configuration, and whether cleaning or wet testing occurs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.watches |
| classification_refs | CPC 3.0: 48410 Watches; semantic boundary informed by the official CPC 2.1 correspondence to HS 9101 and 9102 |
| covered_products | Complete wrist-watches, pocket-watches, and other complete portable personal timepieces whose primary identity is a watch; mechanical and battery-powered or quartz variants |
| excluded_products | Clocks; time-recording apparatus; movements and parts sold separately; repair and manufacturing services; connected wearable computers not classified as watches |
| representative_product | One accepted, functionally tested, retail-unit packaged watch at the manufacturing factory gate |
| production_route | Final assembly and testing from delivered watch movement components, case components, declared band or strap, route-specific power source, and packaging inputs |
| market_state | Finished, accepted, packaged watch ready for distribution; movement technology, material configuration, and power system declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one finished portable personal timepiece whose primary product identity is a watch |
| How much | One accepted retail-unit packaged watch at the factory gate |
| How well | Meets the manufacturer's declared timekeeping, functional, appearance, water-resistance where applicable, and quality-release specifications |
| How long or cycle | One completed manufacturing lot allocation to one accepted watch; use-life duration is outside this factory-gate functional unit |
| reference_flow_link | `finished_watch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Watches (Tiangong UUID unresolved) |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | movement technology; power system; case material; watch-cover material; band or strap material; water-resistance class or not applicable; declared accuracy or release specification; manufacturing site and geography; accepted-lot period; packaging configuration; included and excluded life-cycle stages |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `watch_item_reference` | Reference product and accepted-watch count | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Normalize all foreground exchanges to one accepted, packaged watch; reject units do not increase the denominator. |
| `component_mass_basis` | Component, strap, packaging, solvent, and waste mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net mass crossing the process boundary and convert supplier item counts to mass using lot-specific measured or supplier-declared mass. |
| `electricity_energy_basis` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered energy before normalization; if source records use kWh, convert with 1 kWh = 3.6 MJ and disclose the grid geography, voltage level, and included losses. |
| `water_mass_basis` | Process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net make-up or consumed water, excluding recirculated volume that does not cross the foreground boundary; document any volume-to-mass conversion and reference conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered movement components, surface-treated case components, declared band or strap, route-specific button cell where used, cleaning agent, and retail packaging materials at the watch-assembly site gate |
| starting_condition_role | Upstream component and material datasets feed the foreground final assembly, testing, quality release, and packaging process |
| product_classification_scope | Complete watches within CPC 48410; separately sold movements, cases, bands, straps, glasses, and other parts remain upstream products rather than reference products |
| recursive_input_rule | A complete watch re-entering the foreground process for rework is tracked as an internal rework item and not as a new purchased reference-category input; an externally purchased complete watch must be disclosed and linked to a separate upstream dataset without double counting its production |
| upstream_dataset_requirement | Supplier- or technology-specific cradle-to-gate datasets are required for each delivered component, power source, solvent, water, electricity supply, and packaging input when a cradle-to-gate or broader result is claimed |
| disclosure | Declare the assembly site, accepted-lot period, included operations, manual versus automated assembly, movement and power technology, component material configuration, wet-testing and cleaning practice, utility boundary, rejects, packaging, and all omitted upstream or downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_watch` | Product inclusion | Include only a complete watch as the reference product; treat movements, cases, straps, bands, glasses, and other separately supplied parts as upstream inputs. | `un-cpc-3-0-structure-2025`; `un-cpc-2-1-hs-correspondence-2013` |
| `boundary_foreground_gate` | Foreground operations | Include final assembly, cleaning when performed, functional and water-resistance testing, quality release, reject handling, and retail-unit packaging performed at the reporting site. | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |
| `boundary_upstream_components` | Broader cradle-to-gate claims | Link upstream datasets for delivered movement, case, strap or band, battery, solvent, utilities, and packaging; do not represent their embedded burdens as direct foreground emissions. | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |
| `boundary_route_disclosure` | Variant handling | Keep mechanical and battery-powered routes and different case, cover, and strap materials separately parameterized whenever their bills of materials or operations differ. | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `watch_final_assembly` | Final watch assembly, testing, quality release, and packaging | required | Always included for complete watches | Foreground production | Per one accepted, retail-unit packaged watch at the factory gate |

Internal transfers between assembly, testing, and packaging stations remain inside this aggregated foreground process and are not duplicated as technosphere exchanges. If a site models those stations separately, their internal product transfers must cancel at the foreground-system boundary.

### Process: Final watch assembly, testing, quality release, and packaging (`watch_final_assembly`)

#### Inputs

##### Product flows

###### Delivered watch movement component set (`movement_components`)

Record the delivered component set used to build the declared mechanical or electronic watch movement configuration. Do not mix movement technologies in one foreground average unless the declared product mix and weighted bill of materials are retained.

- Selected flow: Delivered watch movement component set (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Supplier or receiving mass consumed, including components incorporated in accepted watches and attributable rejects, normalized to accepted watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted packaged watch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `hes-so-he-arc-mechanical-watch-eco-audit-2022`

###### Surface-treated watch case components (`watch_case_components`)

Record the case, back, bezel, cover or crystal, crown, seals, and other case components as the delivered case-component lot used by the declared watch configuration. The unresolved selected-flow label denotes one delivered case-component set, not a choice among materials; component material and masses remain explicit in the bill of materials.

- Selected flow: Surface-treated watch case components (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Receiving or bill-of-material mass consumed for the declared case configuration, including attributable rejects, normalized to accepted watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted packaged watch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022`

###### Assembled metal watch band (`metal_watch_band`)

Include only when the accepted watch is supplied with a metal band. Record one finished metal band crossing the assembly boundary and its measured or supplier-declared mass.

- Selected flow: Assembled metal watch band (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Mass of metal bands consumed, including attributable rejects, normalized to accepted watches fitted with this band type
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted packaged watch fitted with a metal band
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `casio-environmental-report-2003`

###### Finished leather watch strap (`leather_watch_strap`)

Include only when the accepted watch is supplied with a leather strap. Keep leather origin, tanning route, buckle material, and supplier identity as upstream qualifiers.

- Selected flow: Finished leather watch strap (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Mass of leather straps consumed, including attributable rejects, normalized to accepted watches fitted with this strap type
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted packaged watch fitted with a leather strap
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `casio-environmental-report-2003`

###### Finished elastomer watch strap (`elastomer_watch_strap`)

Include only when the accepted watch is supplied with an elastomer or resin strap. Record the actual finished strap material and supplier dataset; do not substitute a generic plastic mass without disclosure.

- Selected flow: Finished elastomer watch strap (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Mass of elastomer straps consumed, including attributable rejects, normalized to accepted watches fitted with this strap type
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted packaged watch fitted with an elastomer strap
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `casio-environmental-report-2003`

###### Watch button cell (`watch_button_cell`)

Include only for a battery-powered watch when a button cell crosses the assembly-site boundary separately from the movement. Record its chemistry, model, nominal capacity, rechargeable status, supplier, and whether it is incorporated in the delivered movement.

- Selected flow: Watch button cell (Tiangong UUID unresolved)
- Flow property / unit: Number of items / Item(s)
- Amount rule: Count of button cells issued to assembly, less verified returns to stock, normalized to accepted battery-powered watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted packaged battery-powered watch receiving a separate cell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Isopropanol (`isopropanol`)

Include when isopropanol is consumed for component or case cleaning. Purity, water content, recovered quantity, and waste or air destinations must be retained in the site record.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus receipts minus closing inventory, verified returns, and recovered reusable solvent, normalized to accepted watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted packaged watch when isopropanol cleaning is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_records`
- Sources:

###### Purchased electricity (`assembly_electricity`)

Record electricity consumed by assembly benches, automated equipment, cleaning, testing, packaging, and the allocated share of directly supporting facility loads during the reporting period.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity for included operations plus a documented allocation of shared directly supporting loads, normalized to accepted watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted packaged watch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_metering`
- Sources: `hes-so-he-arc-mechanical-watch-eco-audit-2022`

###### Process water for cleaning and wet testing (`test_process_water`)

Include net make-up water when cleaning or water-resistance testing causes water to cross the foreground boundary. Do not count closed-loop recirculation repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balanced net process-water input for included cleaning and wet-testing operations, normalized to accepted watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted packaged watch when wet cleaning or testing is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_metering`
- Sources:

###### Paper presentation box (`paper_box`)

Record the paper or paperboard presentation box supplied with the retail unit. Decorative non-paper components must be recorded in additional atomic rows in the site implementation.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: Net receiving mass of paper boxes issued to accepted retail units plus attributable rejects, normalized to accepted watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted packaged watch supplied with a paper box
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Sources:

###### Printed paper instruction insert (`paper_instruction_insert`)

Record the printed paper instruction, warranty, or compliance insert included in the retail package as one paper insert exchange. Electronic-only instructions are not assigned a paper input.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass / kg
- Amount rule: Net mass of printed paper inserts issued to accepted retail units plus attributable rejects, normalized to accepted watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted packaged watch containing a printed insert
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished watch (`finished_watch`)

This is the declared reference product after functional testing, quality release, and retail-unit packaging. The Tiangong product-flow UUID remains unresolved; the item-count property and reference unit are confirmed.

- Selected flow: Watches (Tiangong UUID unresolved)
- Flow property / unit: Number of items / Item(s)
- Amount rule: Count of accepted, released, retail-unit packaged watches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one accepted packaged watch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_rejects`
- Sources: `un-cpc-3-0-structure-2025`; `un-cpc-2-1-hs-correspondence-2013`

##### Waste flows

###### Rejected finished watch (`rejected_finished_watch`)

Record rejected assembled watches that leave the foreground system for treatment and are not successfully reworked into accepted output. Preserve their actual component configuration and waste destination.

- Selected flow: Rejected finished watch (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of rejected assembled watches leaving for treatment, excluding units returned to successful internal rework
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted packaged watch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_rejects`
- Sources:

###### Spent isopropanol cleaning solution (`spent_isopropanol_solution`)

Include when spent isopropanol solution leaves the site for treatment or recovery. Record water and contaminant content when known and keep recovered solvent returned to the process out of this output.

- Selected flow: Spent isopropanol cleaning solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass dispatched off-site as spent isopropanol solution, normalized to accepted watches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted packaged watch when isopropanol cleaning is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_records`
- Sources:

##### Elementary flows

Direct emissions to air, water, or soil are not represented by umbrella rows. A site implementation must add one atomic elementary-flow row for every measured or mass-balance-derived substance that crosses the environment boundary, including solvent emissions when applicable, and must complete a Tiangong UUID audit for each added row.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Multi-product assembly and packaging operations | Avoid allocation by separate product bills of materials, accepted and reject counts, direct labor or machine records, and submetered utility data wherever practicable. |  |
| `allocation_shared_utilities` | Shared electricity, water, and directly supporting facility loads | Allocate only the residual shared amount using a documented physical driver that reflects consumption, such as measured machine hours, test cycles, or occupied equipment time; retain the total and reconciliation. |  |
| `allocation_rework` | Internal rework | Assign rework inputs and losses to the product family that caused them and count only successfully released watches in the reference-product denominator. |  |
| `allocation_recycling` | Recovered solvent, recyclable rejects, and waste treatment | Report recovered materials and wastes at the foreground boundary without netting avoided virgin-material or treatment credits into the foreground inventory; place substitution or recycling credits in an explicitly disclosed downstream scenario. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `watch_final_assembly` | movement, case, band or strap, and button-cell inputs | approved bill of materials; receiving and issue records; supplier specifications; reject records | component identity; material; supplier; lot; opening and closing stock; receipts; returns; issued mass or count; reject mass or count; product variant | Reconcile approved BOM to lot-level warehouse issues and physical or supplier-declared mass; separate mutually exclusive strap and power routes | kg and Item(s) | Each production lot with monthly reconciliation | Representative continuous 12-month period or complete shorter campaign disclosed | All lines and subcontracted steps controlled by the reporting assembly site | Net issued quantity plus attributable rejected quantity divided by accepted watches of the matching variant | Approved BOM revision, calibrated balance records, warehouse reconciliation, supplier specifications, and variance investigation |
| `cp_solvent_records` | `watch_final_assembly` | isopropanol input and spent-solution output | purchase, inventory, recovery, and waste consignment records | opening stock; receipts; closing stock; returned or recovered solvent; spent-solution mass; purity; water content; destination | Monthly solvent mass balance reconciled to cleaning operation records and waste dispatches | kg | Monthly and each waste dispatch | Same period as accepted-watch output | All included cleaning stations and on-site solvent recovery | Net consumed input and off-site waste mass divided by accepted watches; unexplained balance disclosed | Calibrated stock measurement, purchase invoices, recovery logs, waste manifests, and mass-balance closure |
| `cp_electricity_metering` | `watch_final_assembly` | assembly, testing, cleaning, packaging, and supporting electricity | revenue meter, submeter, and equipment runtime records | meter start and end; multiplier; equipment runtime; rated or measured load; production downtime; accepted watch count; grid contract | Prefer submeters; reconcile included submeters and allocated supporting loads to the facility meter | kWh and MJ | Continuous or shift readings with monthly reconciliation | Representative continuous 12-month period or complete shorter campaign disclosed | Included production lines and directly supporting facility loads | Net included kWh converted to MJ and divided by accepted watches; residual shared load allocated by disclosed physical driver | Meter calibration, utility invoices, reconciliation, driver records, and documented conversion |
| `cp_water_metering` | `watch_final_assembly` | cleaning and wet-test process water | water meter, tank balance, batch log, and discharge record | make-up water; drain volume or mass; recirculation inventory change; batch count; accepted watch count; reference conditions | Meter net make-up where possible; otherwise perform a documented tank balance without repeatedly counting recirculation | kg or m3 with conversion | Each batch or monthly meter reconciliation | Same period as accepted-watch output | Included cleaning and water-resistance test systems | Net boundary-crossing water mass divided by accepted watches | Meter calibration, tank dimensions, density assumption, leak checks, and reconciliation |
| `cp_packaging_bom` | `watch_final_assembly` | paper box and printed paper insert | packaging BOM; receiving and issue records; supplier mass specifications | packaging item identity; material; mass per item; issued count; returned count; rejected count; accepted watch count | Reconcile packaging BOM and issues to accepted retail units; record each additional non-paper component separately | kg and Item(s) | Each packaging specification and monthly reconciliation | Same period as accepted-watch output | All retail-unit packaging applied at the reporting site | Net packaging mass issued plus attributable rejects divided by accepted watches using that configuration | Approved packaging specification, calibrated sample weighing, issue records, and reconciliation |
| `cp_output_and_rejects` | `watch_final_assembly` | accepted finished watches and rejected assembled watches | quality-release, production, rework, and waste records | product model; movement route; material configuration; packaged accepted count; rejected count and mass; rework entry and release; waste destination | Reconcile final quality release to packaging and dispatch records; track rework until accepted output or waste exit | Item(s) and kg | Each lot with monthly reconciliation | Same period as all input protocols | All included final assembly and quality-release lines | Accepted count is the denominator; only rejects leaving the system are waste outputs | Signed release records, test logs, rework genealogy, calibrated reject weighing, and dispatch manifests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_component_input` | Component and packaging input rows | (opening stock + receipts - closing stock - verified returns) / accepted watches of the matching configuration; reconcile against BOM and add separately measured attributable rejects when issue records exclude them | inventory, receiving, return, BOM, reject, and accepted-output records | kg or Item(s) per accepted packaged watch |  |
| `calc_net_solvent_input` | `isopropanol` | (opening stock + receipts - closing stock - verified off-site returns - recovered solvent returned to stock) / accepted watches | solvent inventory, receipts, returns, recovery, and accepted-output records | kg isopropanol input per accepted packaged watch |  |
| `calc_electricity_per_watch` | `assembly_electricity` | (submetered included electricity + reconciled shared supporting electricity) × 3.6 MJ/kWh / accepted watches | meters, allocation driver, and accepted-output records | MJ per accepted packaged watch |  |
| `calc_net_process_water` | `test_process_water` | net make-up or boundary-crossing water mass / accepted watches; do not add internal recirculation volume | water meters or tank balance and accepted-output records | kg per accepted packaged watch |  |
| `calc_waste_per_watch` | Waste output rows | measured mass leaving the foreground system / accepted watches; exclude successful internal rework and recovered solvent returned to the process | waste dispatch, recovery, rework, and accepted-output records | kg waste per accepted packaged watch |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and all exchanges | Preserve product model, movement and power technology, component material configuration, supplier or source, flow state, and Tiangong UUID status; do not replace specific exchanges with generic utilities, materials, wastes, or emissions. | Approved product specification, BOM, supplier records, direct-read UUID audit, and unresolved-flow register |
| `dq_temporal` | All foreground records | Use one common representative period; disclose shutdowns, start-up lots, model changes, incomplete months, and any shorter campaign. | Dated meter, inventory, production, and release records |
| `dq_completeness` | Mass, item, utility, waste, and direct-emission balances | Reconcile purchased or issued inputs, accepted output, rejects, recovery, and inventory change; investigate material discrepancies and add substance-specific direct-emission rows where applicable. | Reconciliation worksheets, mass-balance closure, variance investigations, and emission records |
| `dq_measurement` | Metered and weighed quantities | Retain calibration status, reading frequency, unit conversions, detection limits, and allocation drivers; supplier-declared mass must be distinguished from on-site measurement. | Calibration certificates, meter logs, scale records, supplier specifications, and calculation files |
| `dq_upstream_linkage` | Broader cradle-to-gate claims | Use component, electricity, water, solvent, battery, and packaging datasets matching the declared geography, technology, material, recycled content, and delivery state; disclose proxies separately. | Linked dataset metadata and documented representativeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | Reference flow | Confirm exactly one `finished_watch` reference output is reported as one accepted packaged item and that rejects do not increase the denominator. | `un-cpc-3-0-structure-2025`; `un-cpc-2-1-hs-correspondence-2013` |
| `validate_route_exclusivity` | Band, strap, movement, and power inputs | Confirm only the material and power rows applicable to the declared product configuration carry amounts; justify any weighted product-family average with model-level quantities. | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |
| `validate_inventory_reconciliation` | Components, utilities, solvent, water, output, rework, and waste | Confirm all normalized values use the same accepted-watch denominator and period, and reconcile each protocol to source totals before normalization. |  |
| `validate_no_umbrella_flows` | Site-specific additions | Reject combined labels such as utilities, packaging materials, mixed chemicals, wastes and residues, or emissions to air; every added row must represent one physical or chemical exchange. |  |
| `validate_boundary_claim` | Dataset profile | A gate-to-gate dataset must not be presented as cradle-to-gate unless all required upstream component and supply datasets are linked; use, maintenance, transport, and end-of-life require separate downstream modelling. | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |
| `validate_unresolved_identities` | UUID-empty rows | Keep unresolved rows visible and do not publish an exact Tiangong identity until a public state-100 direct read confirms semantic identity, classification, flow type, property, unit group, product state, geography, technology, and general comment. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate watch assembly, testing, quality-release, and retail-unit packaging dataset |
| downstream_use | May be linked as a `secondary_dataset` or `background_dataset` within a cradle-to-gate or full-life-cycle watch model after upstream component and supply datasets are added |
| allowed_use | Product- and site-specific modelling of complete watches with matching movement technology, material configuration, power system, geography, reporting period, quality specification, and packaging |
| excluded_use | Unqualified comparison across mechanical, quartz, solar, or connected products; use as a clock or watch-part dataset; representation of component manufacture, distribution, use, maintenance, or end-of-life without additional datasets |
| required_metadata | Canonical PCR id; product model or family; CPC scope; movement and power technology; case, cover, and band or strap materials; accepted-watch count; factory geography; reporting period; included operations; packaging configuration; allocation drivers; UUID status; upstream dataset links |
| required_quality_disclosure | Metering and weighing methods; calibration; BOM version; supplier data quality; temporal coverage; completeness and reconciliation; rejects and rework; solvent recovery; water recirculation; shared-load allocation; unresolved UUIDs; proxy upstream datasets |
| update_trigger | Change in movement or power technology, case or strap material, supplier or BOM, manufacturing geography, cleaning or testing route, packaging configuration, allocation driver, or a material change in normalized inputs, rejects, or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48410 product-classification identity and title |
| `un-cpc-2-1-hs-correspondence-2013` | official_guidance | United Nations Statistics Division, CPC Version 2.1 complete structure and explanatory notes, https://unstats.un.org/unsd/statcom/doc13/BG-CPC-Version21.pdf (retrieved 2026-09-07) | Semantic boundary through HS 9101 and 9102 and separation from clocks, movements, and other parts |
| `casio-environmental-report-2003` | literature | CASIO Computer Co., Ltd., Environmental Report 2003, “Comparison of Watches through LCA,” https://arch.casio.com/file/csr/pdf/report_2003/p19-20.pdf (retrieved 2026-09-07) | Per-watch basis, life-cycle stage separation, and material-dependent case, bezel, and strap configurations; not used as range evidence |
| `hes-so-he-arc-mechanical-watch-eco-audit-2022` | literature | HES-SO / HE-Arc Ingénierie, “Ecological impact of a typical mechanical Swiss watch,” 2022, https://www.he-arc.ch/wp-content/uploads/2022/06/Ecological-impact-of-a-typical-mechanical-Swiss-watch.pdf (retrieved 2026-09-07) | Mechanical-watch movement and external-case decomposition, material and processing disclosure, and electricity-geography sensitivity; not used as range evidence |
