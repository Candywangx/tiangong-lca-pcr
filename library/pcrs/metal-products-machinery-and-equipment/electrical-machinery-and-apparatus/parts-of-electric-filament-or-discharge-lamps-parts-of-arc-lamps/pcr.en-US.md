---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electric-filament-or-discharge-lamps-parts-of-arc-lamps
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of electric filament or discharge lamps; parts of arc lamps

## 1. Scope and Applicability

This PCR applies to separately supplied parts identifiable as intended solely or principally for electric filament lamps, discharge lamps, or arc lamps. Covered part families include lamp bases, tungsten filaments cut and ready for mounting, metal electrodes, non-insulating glass parts intended for mounting in lamps or tubes, and filament-supporting brackets. The foreground data package represents manufacture of one declared part family in its market-ready state at the factory gate.

Complete lamps and tubes, luminaires or lighting fittings, parts of portable self-powered lamps, LED light sources and their dedicated parts, generic material stock not yet identifiable as a lamp part, glass or ceramic electrical insulators classified elsewhere, and carbon electrodes or lamp carbons classified as electrical carbon articles are excluded. Apparatus that merely incorporates a lamp is also excluded. The product drawing, part family, material composition, lamp compatibility, finished state, and production technology shall be declared so this heterogeneous category is not modelled as an unspecified average.

The boundary begins with receipt of specified materials, bought-in components, energy, water, and process chemicals. It includes the route-applicable forming, drawing, coiling, cutting, stamping, joining, heat treatment, cleaning, surface treatment, inspection, handling, and packaging performed by the reporting facility. Upstream production of purchased inputs is represented by compatible supplier or background datasets; use of the part in a complete lamp and end-of-life are outside this cradle-to-gate foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electric-filament-or-discharge-lamps-parts-of-arc-lamps |
| classification_refs | CPC 3.0: 46541 (exact classification context) |
| covered_products | Separately supplied identifiable lamp bases; mounting-ready tungsten filaments; metal discharge-lamp electrodes; non-insulating glass parts for lamps or tubes; filament-supporting brackets |
| excluded_products | Complete lamps or tubes; luminaires and lighting fittings; portable self-powered lamp parts; LED parts; generic material stock; separately classified insulating parts; carbon electrodes and lamp carbons |
| representative_product | One declared market-ready part for an electric filament lamp, discharge lamp, or arc lamp |
| production_route | Product-specific conversion of declared glass or metal stock through route-applicable forming, cleaning, heat treatment, finishing, inspection, and packing |
| market_state | Conforming finished part at the factory gate, packed when packing is part of the sale specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An identifiable, conforming part ready for mounting into the declared electric filament lamp, discharge lamp, or arc lamp |
| How much | 1 kg net mass of market-ready part, excluding reusable transport packaging |
| How well | Meets the declared material, dimensional, electrical, mechanical, surface, cleanliness, and lamp-interface acceptance criteria |
| How long or cycle | One production lot delivered at the factory gate; no service duration is assigned to the part itself |
| reference_flow_link | 1 kg of the declared CPC 46541 part at the specified finished state and quality |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts of electric filament or discharge lamps, parts of arc lamps `8234a28a-728c-4755-a4ed-834ace7ddfd8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part family; material and grade or composition; drawing or part number; dimensions and net mass per item when sold by count; finished or semi-finished state; compatible lamp technology; applicable electrical, thermal, mechanical and cleanliness specifications; surface finish or coating; manufacturing technology; production geography; reference year; recycled-content claim; packing configuration |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and mass-based inventory exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg net mass of conforming reference product. State whether sale packaging is included in inventory, but never include it in the reference-product mass. |
| `count_to_mass` | Production and sales records expressed as item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using the measured lot-average net mass per conforming part; retain sample size, weighing method, and lot identifier. |
| `gas_reference_conditions` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare temperature, pressure, dry or wet basis, and meter correction used for each reported gas volume; do not combine gases. |
| `electricity_energy_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity separately and convert kWh to MJ using 1 kWh = 3.6 MJ. Declare voltage level, grid or supplier mix, and whether transformer and distribution losses are inside the purchased-electricity dataset. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `part_identity_boundary` | Product eligibility | Include only separately supplied parts identifiable as parts of electric filament, discharge, or arc lamps; exclude complete lamps, lighting apparatus, and separately classified generic or insulating articles. | `eu-cn-explanatory-notes-2000-8539`; `unsd-cpc-3-0-structure-2025` |
| `foreground_operation_boundary` | Foreground manufacturing | Include every route-applicable operation under the reporting facility's control from receipt of specified inputs through forming or assembly, cleaning, heat treatment, finishing, inspection, and market packing. | `us-epa-mercury-study-volume-2-1997`; `imerc-mercury-use-in-lighting-2008` |
| `purchased_input_boundary` | Purchased materials, energy, chemicals, components, and packaging | Record each purchased input as one atomic product exchange and link it to a geography-, technology-, product-state-, and reference-year-compatible upstream dataset. |  |
| `direct_release_boundary` | Wastes and elementary emissions | Record each waste stream leaving the facility and each direct elementary release separately. Internal recycling is not an output until material crosses the foreground boundary. |  |
| `capital_goods_boundary` | Buildings, machinery, tooling, and infrastructure | Exclude capital goods by default; disclose and justify any inclusion required by the study goal or governing programme. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt at the manufacturing facility of the specified glass or metal stock, bought-in components, energy, water, chemicals, and packaging used for the declared part |
| starting_condition_role | purchased_material_and_component_gate |
| product_classification_scope | Parts identifiable as belonging to CPC 3.0 subclass 46541, independent of the classification assigned to their constituent materials |
| recursive_input_rule | If a purchased input is itself a CPC 46541 lamp part, record it as a separate product input with its declared part family and upstream dataset; do not fold it into the reference product or recursively reapply the same foreground operations |
| upstream_dataset_requirement | Each purchased input requires a compatible upstream dataset with disclosed product state, geography, technology, reference year, and allocation or recycled-content treatment |
| disclosure | Declare the part family, bill of materials, process route, outsourced steps, internal recycling loops, direct releases, packaging, cut-offs, and all deviations from this boundary |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `lamp_part_manufacturing` | Lamp-part manufacturing, inspection, and market preparation | required | Apply the atomic rows that correspond to the declared part material and technology; mark a conditional row not applicable only with product or process evidence | foreground production | 1 kg net mass of conforming market-ready part |

### Process: Lamp-part manufacturing, inspection, and market preparation (`lamp_part_manufacturing`)

#### Inputs

##### Product flows

###### Borosilicate glass stock (`borosilicate_glass`)

Record borosilicate glass consumed when the declared product is a borosilicate glass part or incorporates such glass. Other glass compositions require their own atomic flow rather than substitution under this row.

- Selected flow: Borosilicate glass `05342b0b-c850-45a8-b6dd-1b735e40262a`
- Flow property / unit: Mass / kg
- Amount rule: Net purchased mass consumed, adjusted for opening and closing stock and internal returns; set not applicable for products without borosilicate glass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Tungsten wire stock (`tungsten_wire`)

Record the declared tungsten wire consumed to form mounting-ready filaments or tungsten electrodes. The flow UUID remains unresolved; do not use an ore, rod, molybdenum, or titanium proxy.

- Selected flow: Tungsten wire
- Flow property / unit: Mass / kg
- Amount rule: Net purchased tungsten-wire mass consumed, adjusted for inventory change and verified internal returns; set not applicable when the declared part contains no tungsten wire
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Aluminium sheet stock (`aluminium_sheet`)

Record aluminium sheet consumed for lamp bases, contacts, brackets, or other declared aluminium parts. Declare alloy, temper, thickness, and recycled-content basis.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net purchased aluminium-sheet mass consumed, adjusted for inventory change and internal returns; set not applicable when aluminium sheet is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Molybdenum wire stock (`molybdenum_wire`)

Record molybdenum wire consumed as a declared lead-in or support material. The flow UUID remains unresolved because the name-matched candidate has an incompatible unwrought-metal classification.

- Selected flow: Molybdenum wire
- Flow property / unit: Mass / kg
- Amount rule: Net purchased molybdenum-wire mass consumed, adjusted for inventory change and internal returns; set not applicable when molybdenum wire is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Purchased electricity (`electricity`)

Record metered electricity delivered to the foreground operations. Do not combine it with natural gas or other energy carriers.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered purchased electricity attributable to the declared part, converted from kWh when necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Gaseous natural gas (`natural_gas`)

Record natural gas supplied to on-site furnaces, burners, or heat-treatment equipment when that technology is used. Purchased heat is not represented by this row.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered corrected gas volume attributable to the declared part; set not applicable when no natural gas is combusted within the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Industrial oxygen (`industrial_oxygen`)

Record purchased industrial oxygen supplied to an oxy-fuel or other declared forming or heat-treatment operation. Do not use this row for oxygen drawn from ambient air.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered corrected oxygen volume attributable to the declared part; set not applicable unless purchased industrial oxygen crosses the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Process water (`process_water`)

Record process water supplied for washing, wet cleaning, solution preparation, or cooling when it is consumed or discharged across the foreground boundary. Closed-loop recirculation is reported only through make-up and purge quantities.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded make-up process-water mass attributable to the declared part; set not applicable when no process water is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources:

###### Sodium hydroxide (`sodium_hydroxide`)

Record sodium hydroxide consumed in alkaline cleaning or surface preparation. Report active sodium-hydroxide mass and retain the supplied solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass issued to the declared process; set not applicable when no sodium hydroxide is used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources:

###### Corrugated-board boxes (`corrugated_board_boxes`)

Record corrugated-board boxes that leave the factory with the reference product. Reusable transport packaging that does not transfer with the product is excluded and disclosed separately.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net mass of corrugated-board boxes transferred with the declared reference product; set not applicable for unpacked bulk delivery or a different separately inventoried package
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming reference product (`reference_product`)

Record only conforming market-ready parts that meet the declared acceptance criteria. Rework and rejects remain outside this output until their final disposition is known.

- Selected flow: Parts of electric filament or discharge lamps, parts of arc lamps `8234a28a-728c-4755-a4ed-834ace7ddfd8`
- Flow property / unit: Mass / kg
- Amount rule: Normalize the net mass of conforming output to exactly 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conforming_output_records`
- Sources:

##### Waste flows

###### Borosilicate-glass cullet (`borosilicate_glass_cullet`)

Record borosilicate-glass offcuts and rejects that leave the foreground boundary as waste. Do not substitute float-glass cullet or combine other glass compositions in this row.

- Selected flow: Borosilicate-glass cullet
- Flow property / unit: Mass / kg
- Amount rule: Measured mass exported as borosilicate-glass cullet, net of verified internal return; set not applicable when the declared route generates none
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Tungsten manufacturing scrap (`tungsten_scrap`)

Record tungsten-wire offcuts, forming rejects, and recovered dust leaving the boundary as a single tungsten-specific scrap stream only when their disposition and contamination state are equivalent. Otherwise split the physical streams.

- Selected flow: Tungsten manufacturing scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured tungsten-scrap mass exported from the foreground facility, net of verified internal return; set not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Aluminium scrap (`aluminium_scrap`)

Record aluminium sheet offcuts and forming rejects that leave the foreground boundary as aluminium scrap. Declare alloy, contamination, physical form, and treatment destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Measured aluminium-scrap mass exported from the foreground facility, net of verified internal return; set not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Molybdenum manufacturing scrap (`molybdenum_scrap`)

Record molybdenum-wire offcuts and forming rejects that leave the foreground boundary as molybdenum-specific scrap. Do not use an unspecified-heavy-metals proxy.

- Selected flow: Molybdenum manufacturing scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured molybdenum-scrap mass exported from the foreground facility, net of verified internal return; set not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Waste alkaline liquor (`waste_alkaline_liquor`)

Record spent alkaline cleaning liquor when it leaves the foreground boundary for treatment. Retain pH, sodium-hydroxide concentration, relevant dissolved or suspended contaminants, and destination.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of spent alkaline liquor exported for treatment; set not applicable when no alkaline liquor leaves the facility
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide (`carbon_dioxide_fossil`)

Record fossil carbon dioxide released directly from on-site natural-gas combustion attributable to the declared part. Upstream electricity emissions are excluded from this direct-emission row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or calculation from collected natural-gas consumption, supplier composition, and documented oxidation assumptions; set not applicable when no fossil fuel is combusted on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared foreground operations | Subdivide and meter product-specific operations and material losses wherever practicable before applying allocation. |  |
| `allocation_physical_causality` | Multiple conforming lamp parts from one line | Allocate shared inputs and releases using a measured physical relationship that reflects causality, such as machine time, furnace occupancy, treated surface area, or processed mass; document the selected driver and reconciliation. |  |
| `allocation_mass_fallback` | Shared burdens without a defensible causal driver | Use net conforming output mass only as a documented fallback; do not allocate by item count when part masses differ materially. |  |
| `allocation_recycling_consistency` | Scrap and internal returns | Exclude verified internal recycling loops from boundary outputs and avoid double counting any recycling credit, recycled-content claim, or waste-treatment burden applied by the selected LCA method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `lamp_part_manufacturing` | Material inputs, packaging, material-specific scrap | Purchase, issue, inventory, weighbridge, production, and waste-transfer records | material identity; grade; supplier; opening stock; receipts; issues; closing stock; internal returns; exported scrap; package mass; lot; date | Reconcile calibrated scales and inventory transactions to each production lot | kg | Each lot, aggregated monthly | At least 12 representative months or the full production campaign if shorter | All foreground operations and storage under reporting-facility control | Net consumption = opening stock + receipts - closing stock - documented transfers; normalize allocated net consumption and exported waste by conforming output mass | Calibration records; stock reconciliation; bill of materials; weigh tickets; waste transfer notes; variance investigation |
| `cp_energy_and_gas_records` | `lamp_part_manufacturing` | Electricity, natural gas, industrial oxygen | Submeter, utility invoice, tank or cylinder issue, and operating-hour records | meter id; opening and closing readings; volume correction conditions; invoice period; equipment; product lot; downtime | Use dedicated meters where available; otherwise allocate shared consumption with a documented causal driver | MJ; m3 | Each lot or meter interval, aggregated monthly | At least 12 representative months or the full campaign if shorter | All route-applicable foreground equipment | Subtract non-production use, reconcile to invoices, apply the approved allocation driver, and normalize by conforming output mass | Meter calibration; invoice reconciliation; operating log; temperature and pressure correction record |
| `cp_water_and_chemical_records` | `lamp_part_manufacturing` | Process water, sodium hydroxide, waste alkaline liquor | Water meter, batch recipe, chemical issue, solution analysis, and waste-transfer records | water reading; solution mass; sodium-hydroxide concentration; make-up; purge; pH; contaminant result; destination; lot; date | Meter water and weigh or meter chemical solutions; sample spent liquor when composition affects treatment | kg | Each batch or discharge, aggregated monthly | At least 12 representative months or the full campaign if shorter | Wet-cleaning and surface-treatment operations under facility control | Convert supplied solution to active sodium-hydroxide mass; reconcile make-up, carryover, purge, and exported liquor; normalize by conforming output mass | Meter and scale calibration; concentration certificate or analysis; pH record; manifest; mass-balance check |
| `cp_conforming_output_records` | `lamp_part_manufacturing` | Reference product | Production, inspection, rejection, and net-mass records | part number; part family; lot; produced count; accepted count; rejected count; sampled net masses; acceptance result | Weigh representative conforming parts and reconcile accepted count to net lot mass | kg | Each lot | Full reporting period | Final inspection and dispatch point | Conforming mass = accepted count multiplied by verified lot-average net mass, or direct lot mass; normalize all exchanges to 1 kg | Calibrated-scale record; sampling plan; inspection release; production reconciliation |
| `cp_direct_emission_records` | `lamp_part_manufacturing` | Direct fossil carbon dioxide | Stack measurement, fuel meter, supplier gas analysis, or documented site calculation | emission result; fuel volume; temperature; pressure; composition; fossil carbon fraction; oxidation assumption; equipment; lot or period | Prefer representative direct measurement; otherwise calculate from collected fuel and documented site-specific composition and assumptions | kg | Monitoring interval or fuel billing period, aggregated monthly | Same period as fuel inventory | All on-site natural-gas combustion attributable to the declared product | Reconcile calculated or measured fossil carbon dioxide to natural-gas consumption and normalize by conforming output mass | Monitoring QA; analyzer calibration; supplier composition; calculation workbook; independent mass-balance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_mass` | Count-based reference-product records | Conforming product mass = accepted item count × measured lot-average net mass per item | accepted count; sampled net mass; sample size; lot id | kg conforming product |  |
| `calc_active_sodium_hydroxide` | Supplied sodium-hydroxide solution | Active sodium hydroxide = solution mass × verified mass fraction of sodium hydroxide | solution mass; concentration certificate or analysis | kg sodium hydroxide |  |
| `calc_inventory_normalization` | Every foreground exchange | Normalized amount = allocated exchange amount ÷ net conforming reference-product mass | allocated exchange amount; conforming output mass | exchange amount per 1 kg reference product |  |
| `calc_fossil_carbon_dioxide` | On-site natural-gas combustion | Use a documented site calculation based on corrected fuel quantity, supplier composition or measured carbon content, fossil carbon fraction, and oxidation assumption; do not apply the result to upstream electricity | corrected gas volume; gas composition or carbon content; fossil fraction; oxidation assumption | kg direct fossil carbon dioxide per 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Identify one part family and retain the drawing or part number, material specification, finished state, lamp compatibility, and acceptance criteria; do not publish an unspecified category average. | Released drawing or specification; bill of materials; inspection release |
| `dq_temporal_representativeness` | Foreground inventory | Use a continuous representative reporting period covering seasonal or campaign variation; explain shutdowns, abnormal lots, and any period shorter than 12 months. | Dated production, utility, inventory, and waste records |
| `dq_mass_reconciliation` | Materials, product, scrap, and wet-process streams | Reconcile inputs, conforming output, internal returns, stock changes, and exported waste at material-family level; investigate material unexplained differences. | Signed mass-balance worksheet; stock count; weigh tickets; variance investigation |
| `dq_technology_and_geography` | Purchased datasets | Match input state, grade, production technology, geography, voltage or pressure level, recycled-content basis, and reference year as closely as available; disclose substitutions. | Supplier data; dataset metadata; substitution log |
| `dq_completeness` | Foreground process | Check each atomic row and the facility environmental and waste registers; mark conditional rows not applicable only with evidence and add any additional concrete exchange present at the site. | Completeness checklist; environmental register; chemical inventory; waste manifest |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_qualifiers` | Reference flow | Fail validation when the part family, material or composition, drawing or part number, finished state, lamp compatibility, production geography, technology, reference year, or packing configuration is missing. | `eu-cn-explanatory-notes-2000-8539` |
| `validate_reference_mass` | Reference flow and inventory | Confirm that the reference output is exactly 1 kg net conforming product and that every exchange is normalized to that mass without including sale packaging in the product mass. |  |
| `validate_atomicity` | Process inventory | Confirm that every row represents one concrete product, waste, or elementary exchange; reject combined utilities, generic materials or wastes, and selector labels. |  |
| `validate_uuid_semantics` | UUID-bearing rows | Confirm state-100 Tiangong flow type, base name, classification, property, unit group, product state, geography, technology, and general comment; do not replace unresolved rows with proxies. |  |
| `validate_material_balance` | Material routes | Reconcile each declared glass or metal input to conforming product, stock change, verified internal return, and each material-specific exported waste; investigate unexplained differences. |  |
| `validate_energy_and_emissions` | Energy and direct releases | Reconcile electricity and each gas to meters or invoices; when on-site natural gas is used, reconcile direct fossil carbon dioxide to fuel records and document any other direct releases as separate atomic flows. |  |
| `validate_conditional_rows` | Route-specific inputs and outputs | Require evidence for every not-applicable decision and ensure the chosen rows match the declared part material and manufacturing technology without constructing a variant-by-route Cartesian inventory. |  |
| `validate_source_and_period` | Dataset evidence | Confirm that source references resolve, foreground records cover the declared period and site, and no external empirical range is asserted without two independent, boundary-compatible sources verified in original text. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground gate-to-gate production dataset with linked upstream inputs |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product-specific cradle-to-gate modelling of a declared CPC 46541 lamp part when required qualifiers, boundary, technology, geography, and reference year are compatible |
| excluded_use | Complete lamps, luminaires, LED products, portable-lamp parts, unspecified mixed lamp parts, use-phase performance, end-of-life, or substitution among glass and metal part families without a new foreground inventory |
| required_metadata | PCR id and version; part family; drawing or part number; material and composition; finished state; compatible lamp technology; functional and quality specification; production route; facility geography; technology; reference period; net mass basis; packaging; upstream dataset identifiers; allocation; internal recycling; data owner and review date |
| required_quality_disclosure | Metering and weighing coverage; count-to-mass sampling; record coverage; allocation drivers; mass-balance result; conditional-row decisions; unresolved UUIDs; dataset substitutions; cut-offs; abnormal periods; uncertainty; verification status |
| update_trigger | Change in part design or material; process technology; energy or gas supply; cleaning chemistry; scrap or wastewater route; packaging; facility geography; allocation driver; supplier dataset; reference period; Tiangong UUID resolution; or evidence that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (verified 2026-09-04) | Official CPC 46541 identity and hierarchy |
| `unsd-cpc-1-1-zh-2007` | Official guidance (`official_guidance`) | United Nations Statistics Division, 产品总分类（CPC）版本1.1, ST/ESA/STAT/SER.M/77/Ver.1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (verified 2026-09-04) | Professional Chinese rendering of the stable 46541 product concept |
| `eu-cn-explanatory-notes-2000-8539` | Official guidance (`official_guidance`) | European Commission, Explanatory Notes to the Combined Nomenclature, heading 8539, Official Journal C 199, 13 July 2000, https://eur-lex.europa.eu/resource.html?format=PDF&uri=cellar%3A775740e4-ebfb-4d08-888b-cb13caba979b.0005.02%2FDOC_86 (verified 2026-09-04) | Identifiable-parts boundary, covered part examples, and exclusions |
| `us-epa-mercury-study-volume-2-1997` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, Mercury Study Report to Congress, Volume II: An Inventory of Anthropogenic Mercury Emissions in the United States, EPA-452/R-97-004, December 1997, https://www.epa.gov/sites/production/files/2015-09/documents/volume2.pdf (verified 2026-09-04) | Lamp-component interfaces and manufacturing-operation decomposition; no quantitative range adopted |
| `imerc-mercury-use-in-lighting-2008` | Official guidance (`official_guidance`) | Interstate Mercury Education and Reduction Clearinghouse, Fact Sheet: Mercury Use in Lighting, January 2008, https://semspub.epa.gov/work/05/936142.pdf (verified 2026-09-04) | Component identities and functional relationships for fluorescent-lamp parts; no quantitative range adopted |
