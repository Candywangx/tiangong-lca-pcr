---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.tanks-casks-drums-cans-boxes-and-similar-containers-other-than-for-compressed-or-liquef-f53244d2
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Small iron, steel and aluminium containers without mechanical or thermal equipment

## 1. Scope and Applicability

This PCR applies to the manufacture of empty iron, steel or aluminium tanks, casks, drums, cans, boxes and similar containers with a capacity not exceeding 300 litres, excluding containers for compressed or liquefied gas and excluding products fitted with mechanical or thermal equipment. It covers forming from purchased metal sheet or strip, route-specific joining, aqueous cleaning or chemical pretreatment when performed, coating, printing and curing when performed, inspection, and release at the manufacturing plant gate.

The foreground boundary begins when purchased metal feedstock, process chemicals, coating materials and utilities cross the manufacturing-site boundary. Upstream production of those inputs is represented by linked datasets. Filling with contents, distribution, use, collection and end-of-life of the container are outside this gate-to-gate foreground boundary. Separately supplied stoppers, caps, lids, closures and other packing accessories are excluded as products; a closure permanently supplied as part of the declared container must be disclosed and inventoried as its own atomic component in the foreground data package.

The method is common to covered container forms, but every dataset must declare one actual material, container form, nominal capacity, joining route, coating system and market state. The reference-flow object below is a mass-based steel-can representative; use for another covered form requires a product-specific output identity review while retaining the same mass, boundary and data-collection rules.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.tanks-casks-drums-cans-boxes-and-similar-containers-other-than-for-compressed-or-liquef-f53244d2 |
| classification_refs | CPC 3.0: 42931 (exact category context) |
| covered_products | Empty iron, steel or aluminium tanks, casks, drums, cans, boxes and similar containers with nominal capacity not exceeding 300 L and without mechanical or thermal equipment |
| excluded_products | Containers for compressed or liquefied gas; containers exceeding 300 L; containers fitted with mechanical or thermal equipment; separately supplied stoppers, caps, lids and packing accessories; filled containers |
| representative_product | Empty steel can released at the manufacturing plant gate |
| production_route | Purchased metal sheet or strip; cutting and forming; conditional joining; conditional aqueous pretreatment; conditional coating, printing and curing; inspection and release |
| market_state | Empty, conforming, dry container at the manufacturing plant gate, with material, form, capacity, coating and closure configuration declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and provide a conforming empty small metal container represented by a steel can |
| How much | 1 kg net mass of released empty steel can |
| How well | Meets the declared dimensional, capacity, material, seam, coating, cleanliness and leak-tightness specification |
| How long or cycle | One completed manufacturing and release cycle to the plant gate; container use life is outside the foreground boundary |
| reference_flow_link | The released `steel_can_output` mass equals the 1 kg reference amount after excluding contents, transport packaging and separately supplied accessories |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Steel can `5e63418a-6550-4e3c-a334-3a1b343ced44` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual container material and alloy or steel grade; container form; nominal capacity in L; empty net mass; sheet or strip gauge; two-piece, three-piece, welded, seamed or drawn joining/forming route; internal and external coating system; printing route; closure supplied with container or separately; reusable or single-use market state; production geography and reporting period; released-product specification; plant-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the net dry mass of conforming empty containers released at the plant gate. Exclude contents, pallets, stretch wrap, cartons and separately supplied accessories. |
| `measurement_count_to_mass` | item-count production and reject records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass using a contemporaneous average tare from a documented sample of the same material, form, capacity and configuration; retain sample size and dispersion. |
| `measurement_electricity_energy` | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Retain meter readings in kWh and convert to MJ using 3.6 MJ per kWh; do not mix purchased electricity with on-site fuel energy. |
| `measurement_gas_volume` | natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the metering reference temperature, pressure and dry/wet basis and use the supplier or meter correction to the reported volume basis. |
| `measurement_water_mass` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass measurement. When volume is measured, convert using measured or documented density at the recorded temperature and retain both the volume record and conversion basis. |
| `measurement_material_balance` | metal feedstock, released product and metal scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile opening stock plus receipts minus closing stock to released product, segregated scrap, rejects and documented inventory change for each material route. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal sheet or strip, process chemicals, coating materials and utilities at the manufacturing-site gate, each with supplier identity, material state and upstream dataset link |
| starting_condition_role | Upstream product inputs to gate-to-gate foreground container manufacture |
| product_classification_scope | Empty iron, steel or aluminium containers not exceeding 300 L, excluding compressed/liquefied-gas containers and mechanically or thermally equipped containers |
| recursive_input_rule | If a covered small metal container is itself consumed as a foreground input, record that specific container as a direct product input with a separate upstream dataset; do not recursively include its manufacture inside the current foreground process |
| upstream_dataset_requirement | Link upstream datasets for each purchased metal feedstock, electricity supply, fuel, water, chemical, coating and joining consumable at the declared geography and delivery boundary |
| disclosure | Declare material and gauge, forming and joining route, pretreatment and coating route, nominal capacity, included closure configuration, plant geography, reporting period, upstream dataset choices, allocation and any excluded on-site operation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground container manufacture | Include all on-site cutting, forming, joining, cleaning, pretreatment, coating, printing, curing, inspection, rework and release operations used for the declared container; end the foreground boundary at release of the empty container. | `unsd-cpc-3-0-structure-2025`; `us-epa-ap42-can-coating` |
| `boundary_conditional_routes` | route selection | Include joining, aqueous treatment, coating, printing and curing only when performed for the declared product, and identify each included technology and material rather than using an averaged unqualified route. | `us-epa-ap42-can-coating`; `ec-jrc-stm-bref-2006` |
| `boundary_upstream_inputs` | purchased inputs | Keep upstream production outside the foreground unit processes but require one compatible upstream dataset for every purchased product input. | `ec-jrc-stm-bref-2006` |
| `boundary_direct_releases` | emissions and wastes | Include measured on-site wastewater, segregated metal scrap, coating-related NMVOC and direct fossil-fuel CO2 when those exchanges cross the foreground boundary; do not duplicate emissions already embedded in upstream electricity or fuel datasets. | `us-epa-ap42-can-coating`; `ec-jrc-stm-bref-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sheet_preparation_and_forming` | Sheet preparation and forming | required | Always include cutting, blanking, drawing, rolling or forming operations used for the declared container | Foreground material conversion | Per 1 kg released steel can |
| `seam_joining` | Seam joining | conditional | Include when the body, ends, handles or structural parts are welded or joined with a consumed welding material | Foreground joining | Per 1 kg released steel can |
| `aqueous_surface_pretreatment` | Aqueous surface pretreatment | conditional | Include when water-based cleaning, degreasing, etching, rinsing or chemical pretreatment is performed on-site | Foreground surface preparation | Per 1 kg released steel can |
| `coating_printing_and_curing` | Coating, printing and curing | conditional | Include when internal or external coating, printing, seam lacquer or thermal curing is performed on-site | Foreground finishing | Per 1 kg released steel can |
| `inspection_and_release` | Inspection and release | required | Always include final dimensional, visual, cleanliness and leak testing plus released-product accounting | Foreground quality release | Per 1 kg released steel can |

### Process: Sheet preparation and forming (`sheet_preparation_and_forming`)

#### Inputs

##### Product flows

###### Tinplate steel sheet (`tinplate_steel_sheet_input`)

Record tin-coated steel sheet entering cutting or forming only for the tinplate route.

- Selected flow: Tinplate steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from receiving, coil, sheet and production records, adjusted for opening and closing stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `us-epa-ap42-can-coating`

###### Cold-rolled carbon steel sheet (`cold_rolled_carbon_steel_sheet_input`)

Record uncoated cold-rolled carbon steel sheet only for a declared steel route using that feedstock.

- Selected flow: Cold-rolled carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from receiving, coil, sheet and production records, adjusted for opening and closing stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `us-epa-ap42-can-coating`

###### Aluminium sheet over 0.2 mm (`aluminium_sheet_over_0_2mm_input`)

Record this sheet only when the declared aluminium feedstock thickness exceeds 0.2 mm.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net issued mass from receiving, coil, sheet and production records, adjusted for opening and closing stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### 0.1 mm aluminium sheet (`aluminium_sheet_0_1mm_input`)

Record this specific thin-sheet input only when the declared route uses 0.1 mm aluminium stock.

- Selected flow: 0.1mm Al sheet `c5e98422-1b9b-4e10-b3f4-3dc4e17d3989`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net issued mass from receiving, coil, sheet and production records, adjusted for opening and closing stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Forming electricity (`forming_electricity_input`)

Record purchased electricity consumed by cutting, presses, drawing, rolling, conveying and route-specific forming auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Submetered electricity for included forming equipment, converted from kWh under `measurement_electricity_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `ec-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel sheet offcuts (`steel_offcut_scrap_output`)

Record segregated steel blanking skeletons, edge trim and offcuts leaving the foreground process as waste.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed segregated steel offcuts transferred to the documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Aluminium forming scrap (`aluminium_scrap_output`)

Record segregated aluminium blanking skeletons, edge trim and forming scrap leaving the foreground process as waste.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed segregated aluminium scrap transferred to the documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

##### Elementary flows

### Process: Seam joining (`seam_joining`)

#### Inputs

##### Product flows

###### Flux-cored welding wire (`flux_cored_wire_input`)

Record flux-cored wire only when it is physically consumed by the declared welded joining route; resistance-welded or mechanically seamed routes report this row as not applicable.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued mass minus returned usable wire for container lots using flux-cored welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining_consumables`
- Sources:

###### Joining electricity (`joining_electricity_input`)

Record purchased electricity for welding, seaming and joining equipment included in the declared route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Submetered electricity for included joining equipment, converted from kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Aqueous surface pretreatment (`aqueous_surface_pretreatment`)

#### Inputs

##### Product flows

###### Process water (`process_water_input`)

Record externally supplied water used for aqueous cleaning, bath make-up and rinsing; exclude internally recirculated water to avoid double counting.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered net external water input, converted to mass when necessary under `measurement_water_mass`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_pretreatment`
- Sources: `ec-jrc-stm-bref-2006`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Record sodium hydroxide as pure-equivalent product mass only when used in an alkaline cleaning or treatment bath; retain delivered solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Delivered solution mass multiplied by measured or supplier-declared sodium-hydroxide mass fraction.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aqueous_pretreatment`
- Sources: `ec-jrc-stm-bref-2006`

###### Pretreatment electricity (`pretreatment_electricity_input`)

Record purchased electricity for pumps, agitation, extraction, filtration, bath controls and drying in the aqueous pretreatment process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Submetered electricity for the included pretreatment line, converted from kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `ec-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Alkaline metal-cleaning wastewater (`alkaline_cleaning_wastewater_output`)

Record the aqueous waste stream discharged or transferred from alkaline metal cleaning separately from other wastewater and spent concentrated bath solutions.

- Selected flow: Alkaline metal-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-reconciled wastewater mass crossing the site boundary, with destination and treatment route recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_pretreatment`
- Sources: `ec-jrc-stm-bref-2006`

##### Elementary flows

### Process: Coating, printing and curing (`coating_printing_and_curing`)

#### Inputs

##### Product flows

###### Formulated epoxy-resin container coating (`formulated_epoxy_coating_input`)

Record a formulated epoxy-resin coating only when it is applied to the declared container; retain solids, solvent and water fractions and do not substitute primary epoxy resin mass.

- Selected flow: Formulated epoxy-resin container coating
- Flow property / unit: Mass / kg
- Amount rule: Issued coating mass minus returned usable coating, by formulation and application line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_fuel_and_formulation`
- Sources: `us-epa-ap42-can-coating`

###### Natural gas for curing (`natural_gas_input`)

Record gaseous natural gas delivered to coating or curing ovens only when directly burned on-site.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Corrected meter volume assigned to the included coating and curing line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_fuel_and_formulation`
- Sources: `us-epa-ap42-can-coating`

###### Coating-line electricity (`coating_electricity_input`)

Record purchased electricity for coating application, printing, ventilation, controls, conveying and electrically heated curing equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Submetered electricity for the included coating, printing and curing line, converted from kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `us-epa-ap42-can-coating`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Non-methane volatile organic compounds to air (`nmvoc_emission_output`)

Record direct non-methane volatile organic compounds released from coating application, printing and curing after capture and control; exclude upstream emissions.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Site-measured release or coating-line solvent mass balance after documented capture, recovery and destruction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `us-epa-ap42-can-coating`

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide_output`)

Record direct fossil carbon dioxide from on-site natural-gas combustion for coating or curing; exclude upstream fuel-supply and purchased-electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Site-measured direct stack release allocated to the included curing equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `us-epa-ap42-can-coating`

### Process: Inspection and release (`inspection_and_release`)

#### Inputs

##### Product flows

###### Inspection and release electricity (`inspection_electricity_input`)

Record purchased electricity for leak testing, dimensional inspection, vision systems, dry cleaning, conveying and dispatch preparation.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Submetered electricity for inspection and release equipment, converted from kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released steel can (`steel_can_output`)

Record only conforming empty steel cans released at the plant gate; other covered product forms require their own reviewed product-flow identity.

- Selected flow: Steel can `5e63418a-6550-4e3c-a334-3a1b343ced44`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net dry mass of conforming empty steel cans released during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg released steel can
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_released_product`
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all foreground processes | Avoid allocation by separating material routes, product forms, lines, batches, meters, tanks and emission controls wherever records permit. | `ec-jrc-stm-bref-2006` |
| `allocation_shared_utilities` | shared electricity, fuel, water and treatment services | Assign directly metered quantities first. If direct measurement is unavailable, use a documented physical driver such as equipment time, treated surface area or throughput mass; disclose the driver and sensitivity. | `ec-jrc-stm-bref-2006` |
| `allocation_metal_scrap` | steel and aluminium scrap | Report segregated scrap as waste output with measured mass and destination. Do not apply an avoided-primary-material credit inside the foreground inventory; any recycling substitution belongs to the declared downstream system model. | `ec-jrc-stm-bref-2006` |
| `allocation_rework_and_rejects` | internal rework and rejected containers | Keep internal rework loops inside the foreground system and include their incremental material and energy. Report only waste that crosses the boundary; do not count reworked mass as additional released product. | `us-epa-ap42-can-coating` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `sheet_preparation_and_forming` | metal sheet inputs and segregated scrap | purchase, coil/sheet issue, stock, scale and waste-transfer records | material identity; alloy or grade; coating; thickness; opening stock; receipts; issued mass; closing stock; scrap mass; destination; lot | calibrated scales and reconciled inventory ledger | kg | each receipt, issue and waste transfer; monthly reconciliation | full reporting period | all included lines and stores | reconcile separately by material and product route, then normalize to released mass | scale calibration; supplier certificate; inventory close; waste transfer note |
| `cp_process_electricity` | all included processes | purchased electricity | submeter and production records | meter id; start/end reading; kWh; process; line; lot; operating time; shared-load driver | calibrated submeter or documented main-meter subtraction | kWh | continuous or each shift; monthly close | full reporting period | all included production and auxiliary equipment | subtract excluded loads, allocate shared loads by documented physical driver, convert to MJ and normalize | meter calibration; single-line diagram; reconciliation to invoice |
| `cp_joining_consumables` | `seam_joining` | flux-cored wire | issue, return and batch records | consumable identity; grade; diameter; issued mass; returned mass; lot; joining technology; product lot | calibrated issue scale and stores ledger | kg | each issue and return | full reporting period | all included joining lines | net consumption by compatible joining route, normalized to released mass | material certificate; scale calibration; batch traceability |
| `cp_aqueous_pretreatment` | `aqueous_surface_pretreatment` | water, sodium hydroxide and wastewater | water meter, chemical issue, bath analysis, tank and discharge records | water volume or mass; density; chemical solution mass; concentration; bath inventory; discharge mass; destination; line; lot | calibrated meters/scales, bath analysis and tank reconciliation | kg; m3; mass fraction | each batch or continuous meter; each discharge | full reporting period | all included aqueous treatment and rinse stages | keep external water, each chemical and each waste stream separate; normalize net boundary-crossing mass | meter/scale calibration; analysis result; discharge manifest; bath balance |
| `cp_coating_fuel_and_formulation` | `coating_printing_and_curing` | coating and natural gas | formulation, coating issue/return, gas meter and production records | formulation id; coating mass; returned mass; solids; water; solvent; gas volume; reference conditions; line; lot; coated area | calibrated scale and corrected gas meter | kg; m3 | each coating lot and shift; monthly close | full reporting period | all included coating, printing and curing equipment | aggregate only identical formulations and route conditions; normalize to released mass | safety/technical data sheet; scale and meter calibration; lot traceability |
| `cp_direct_air_emissions` | `coating_printing_and_curing` | NMVOC and fossil CO2 | stack test, continuous monitor, capture/control and operating records | pollutant; concentration; flow; duration; coating solvent input; capture; recovery; destruction; fuel; line; lot | site measurement or reconciled line-specific mass balance after control | kg | each test and operating period required by site plan | representative full reporting period | all direct exhausts from included coating and curing equipment | sum direct releases after control; exclude upstream electricity and fuel-supply emissions | method report; calibration; control-device log; completeness reconciliation |
| `cp_released_product` | `inspection_and_release` | released steel can | production, inspection, tare and dispatch records | product id; material; form; capacity; coating; closure; count; sampled tare; released mass; rejects; rework; date | calibrated production scale or count-to-mass protocol plus signed release | kg; item | each released lot | full reporting period | all included inspection and dispatch points | sum conforming released mass only; reconcile rejects and rework | scale calibration; tare sample; inspection result; release authorization; dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory row | normalized amount = reporting-period exchange amount / reporting-period released steel-can mass | exchange amount; released mass | amount per 1 kg released steel can |  |
| `calc_electricity_mj` | all electricity rows | electricity MJ = metered kWh × 3.6 MJ/kWh | metered kWh | electricity in MJ |  |
| `calc_sodium_hydroxide_pure` | sodium hydroxide | pure-equivalent NaOH mass = delivered solution mass × measured or supplier-declared NaOH mass fraction | solution mass; NaOH mass fraction | kg NaOH | `ec-jrc-stm-bref-2006` |
| `calc_count_to_mass` | released product when counted | released mass = conforming item count × contemporaneous average sampled tare | conforming count; sampled tare; sample statistics | kg released product |  |
| `calc_metal_balance` | each metal route | imbalance = opening stock + receipts - closing stock - released product - segregated scrap - other documented outputs; investigate and disclose non-zero imbalance | stock, receipt, product and waste masses | route mass-balance result |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare material, grade/alloy, form, capacity, gauge, joining route, coating, closure configuration and released specification for every modelled product. | supplier certificate; drawing/specification; release record |
| `dq_temporal_representativeness` | all foreground data | Use one complete, representative reporting year or the full shorter production campaign; disclose shutdowns, trials and abnormal periods. | dated records; production calendar; exception log |
| `dq_measurement_traceability` | mass, energy, water and emissions | Retain meter/scale identity, calibration status, raw readings, conversion basis and responsible record owner. | calibration certificate; raw log; signed reconciliation |
| `dq_route_separation` | material and technology variants | Do not average iron/steel and aluminium routes, coated and uncoated routes, or materially different forming/joining technologies without disclosing composition and testing sensitivity. | route-specific batch and meter records |
| `dq_completeness` | foreground boundary | Reconcile metal mass, purchased energy, water, chemicals, coating, waste and direct releases to the included process map and explain missing or estimated records. | signed mass/energy balance and completeness checklist |
| `dq_upstream_compatibility` | upstream product inputs | Use upstream datasets compatible with declared geography, technology, product state and delivery boundary; document substitutions. | upstream dataset metadata and selection record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope_identity` | product category and reference flow | Fail validation if the product is for compressed or liquefied gas, exceeds 300 L, includes mechanical or thermal equipment, is filled, or lacks the required product qualifiers. | `unsd-cpc-3-0-structure-2025` |
| `validation_reference_mass` | reference product | Confirm that exactly 1 kg net mass of conforming released empty steel cans is the reference and that contents, transport packaging and separately supplied accessories are excluded. |  |
| `validation_process_alignment` | process map and inventory | Confirm every required process has a detailed inventory, every conditional process states applicability, and every selected flow is one atomic exchange. | `us-epa-ap42-can-coating`; `ec-jrc-stm-bref-2006` |
| `validation_uuid_and_units` | UUID-bearing rows | Confirm public state 100, English and Chinese baseName, flow type, classification, property, unit group and reference unit match the selected row; keep unresolved rows UUID-empty. |  |
| `validation_balance_and_completeness` | foreground records | Confirm material-balance closure, released-product reconciliation, route-specific utility coverage, wastewater destination and direct-emission completeness; investigate unexplained gaps. | `ec-jrc-stm-bref-2006` |
| `validation_no_double_counting` | emissions and recycling | Confirm upstream electricity and fuel emissions are not repeated as direct releases and no avoided recycling credit is embedded in foreground scrap outputs. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may serve as `background_dataset` only for the declared material, product form, capacity, route, geography and plant-gate boundary |
| downstream_use | Foreground process datasets and lifecycle models requiring manufacture of empty small metal containers |
| allowed_use | Comparison or modelling within the declared material, form, capacity, joining, coating, geography and reporting-period qualifiers |
| excluded_use | Compressed/liquefied-gas containers; containers above 300 L; equipped containers; filled packaging systems; a different material or product form without compatibility review; container use or end-of-life |
| required_metadata | PCR id; product and CPC context; material and grade/alloy; form; capacity; gauge; joining route; coating/printing route; closure configuration; geography; reporting period; reference mass; process applicability; upstream dataset links; allocation; data quality |
| required_quality_disclosure | Raw-record coverage; calibration; mass-balance result; count-to-mass sampling; route separation; shared-service allocation; direct-emission method; unresolved UUIDs; missing independent range evidence |
| update_trigger | Material, gauge, forming/joining technology, coating formulation or control, fuel, capacity class, closure configuration, site geography, allocation, upstream dataset, reporting period or released-product specification changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | dataset | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 42931 identity, capacity limit and exclusions |
| `us-epa-ap42-can-coating` | official_guidance | U.S. EPA, AP-42 Section 4.2.2.2, Can Coating, https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2b.pdf (retrieved 2026-09-04) | Two-piece and three-piece can route decomposition, sheet coating, forming, seam coating, curing and direct NMVOC collection requirement |
| `ec-jrc-stm-bref-2006` | official_guidance | European Commission Joint Research Centre, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-04) | Aqueous pretreatment, rinsing, energy, water, alkali, wastewater, waste segregation and foreground quality rules |
