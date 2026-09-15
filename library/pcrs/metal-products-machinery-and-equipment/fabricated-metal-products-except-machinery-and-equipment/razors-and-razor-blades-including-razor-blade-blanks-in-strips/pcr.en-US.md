---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.razors-and-razor-blades-including-razor-blade-blanks-in-strips
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Razors and razor blades (including razor blade blanks in strips)

## 1. Scope and Applicability

This PCR applies to gate-to-gate manufacture of unpackaged razors, razor cartridges, finished razor blades, and razor blade blanks supplied in strips. It covers conversion of purchased blade-grade steel strip through forming, hardening and tempering, sharpening, cleaning, optional edge coating, and, when the declared product is a complete razor or cartridge, housing manufacture and final assembly. The representative route is a martensitic stainless-steel blade with an optional PTFE low-friction coating and an optional polypropylene housing.

Upstream production of steel, polymers, chemicals, water, and electricity is represented by linked background datasets. Retail packaging, distribution after the factory gate, shaving-aid consumables, use, blade replacement, and end-of-life are excluded. Electric shavers, powered clippers, surgical blades, industrial machine knives, and separately supplied non-razor handles are excluded. A dataset using another declared alloy, coating, housing polymer, or manufacturing technology remains in scope only when every actual exchange is represented by a chemically or physically specific flow and the differing route is disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.razors-and-razor-blades-including-razor-blade-blanks-in-strips` |
| classification_refs | CPC 3.0 `42914`, Razors and razor blades (including razor blade blanks in strips), exact contextual reference |
| covered_products | Unpackaged safety or shaving razors; razor cartridges; finished single-edge, double-edge, or cartridge razor blades; razor blade blanks in strips |
| excluded_products | Electric shavers and clippers; surgical blades; industrial cutting knives; separately supplied non-razor handles; retail packaging |
| representative_product | Martensitic stainless-steel razor blade or razor cartridge with declared blade count, optional PTFE edge coating, and optional polypropylene housing |
| production_route | Purchased blade-grade steel strip → perforating or stamping → hardening and tempering → grinding and honing → cleaning → optional coating and curing → optional housing moulding and assembly → inspection and factory-gate release |
| market_state | Dry, unpackaged, saleable finished razor, cartridge or blade, or saleable blade blanks in strips, at the manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of a declared razor, razor cartridge, finished razor blade, or razor blade blank in strip form |
| How much | 1 kg net saleable unpackaged product at the factory gate |
| How well | Conforms to the manufacturer's released specification for the declared product form, dimensions, blade geometry, material grade, coating state, and assembly state |
| How long or cycle | One completed manufacturing campaign to factory-gate release; no use-life or replacement credit is included |
| reference_flow_link | The reference amount and product-flow object below represent the same net saleable output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Razors and razor blades (including razor blade blanks in strips) `6c5d6033-a2c9-40f0-bc7d-077549573ace` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; blade count where applicable; blade alloy and grade; blank, sharpened or assembled state; coating material and coating state; housing or handle inclusion and polymer; recycled content; manufacturing geography; production period; net dry mass basis; factory-gate definition |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and normalization denominator | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry mass of saleable unpackaged product after final inspection. Exclude pallets, transport packaging, temporary carriers, and rejected product. |
| `electricity_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity and convert kWh to MJ using exactly 3.6 MJ per kWh; do not mix fuel energy into this row. |
| `solution_active_mass` | sodium hydroxide and PTFE dispersions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report active dry substance mass. Calculate it from as-received solution or dispersion mass and batch-specific concentration; retain both raw values. |
| `wastewater_mass` | cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass. A volume-to-mass conversion requires measured or supplier-supported density and must retain volume, density, temperature, and conversion evidence. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_operations` | foreground manufacturing | Include all on-site forming, heat treatment, sharpening, cleaning, optional coating and curing, optional housing moulding and assembly, inspection, rework, and directly controlled waste handling needed to produce the declared reference product. | `epo-ep2454056b1-2014`; `uspto-us11571827b2-2023` |
| `sb_upstream_inputs` | purchased inputs | Record each purchased material, chemical, water, and electricity flow crossing the site boundary and link it to an upstream dataset with matching product state, geography, technology, and recycled-content qualifiers. |  |
| `sb_water_and_waste` | aqueous cleaning and surface treatment | Include process-water intake, sodium-hydroxide active mass when alkaline cleaning is used, cleaning wastewater, internal recycle, and treatment destination; retain a site water mass balance. | `eu-jrc-sts-bref-2020` |
| `sb_exclusions` | downstream stages | Exclude retail packaging, distribution, use, replacement frequency, shaving consumables, and end-of-life unless the study explicitly expands the boundary and reports those stages separately. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased blade-grade steel strip and any declared housing or coating inputs received at the razor-product manufacturing site |
| starting_condition_role | Upstream product inputs to the foreground conversion and assembly process |
| product_classification_scope | Razors, razor cartridges, finished razor blades, and razor blade blanks in strips within CPC 3.0 `42914` |
| recursive_input_rule | A razor blade, blade blank, or cartridge from the same product category that enters this process is recorded as a separate product input with its own upstream dataset; it is not folded into the reference output or silently cut off. |
| upstream_dataset_requirement | Every purchased input must use a compatible upstream dataset or supplier primary record that declares product state, material grade or formulation, geography, technology, recycled content where relevant, and delivery boundary. |
| disclosure | Declare product form, blade alloy, coating system, housing material, included assembly components, manufacturing route, site geography, production period, excluded operations, internal recycling, and whether mass and energy records cover all included operations. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `razor_product_manufacturing` | Razor and razor-blade manufacture | required |  | Foreground conversion, finishing, optional housing moulding, assembly, inspection, and factory-gate release | 1 kg net saleable unpackaged reference product |

### Process: Razor and razor-blade manufacture (`razor_product_manufacturing`)

#### Inputs

##### Product flows

###### Blade-grade stainless-steel strip (`blade_steel_strip`)

Purchased cold-rolled martensitic stainless-steel strip enters forming, heat treatment, and sharpening. The alloy grade, strip thickness, temper, supplier, and recycled content must be retained; no exact Tiangong flow UUID is currently confirmed.

- Selected flow: Martensitic stainless-steel razor-blade strip
- Flow property / unit: Mass / kg
- Amount rule: measured received mass consumed by the included production campaign, net of unchanged returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blade_steel_strip`
- Sources: `epo-ep2454056b1-2014`

###### Manufacturing electricity (`manufacturing_electricity`)

Purchased electricity supplies forming, electric heat treatment, grinding, cleaning, coating, moulding, assembly, ventilation, and directly attributable auxiliaries. Shared meters are allocated only through the approved calculation rule.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered purchased electricity attributable to the included campaign, converted from kWh where necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_electricity`
- Sources:

###### Process water (`process_water`)

Process water crosses the boundary for aqueous cleaning, rinsing, cooling, and PTFE dispersion make-up when used. Record make-up water separately from internally recycled water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up process water supplied to the included campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-jrc-sts-bref-2020`

###### Sodium hydroxide active substance (`sodium_hydroxide`)

Sodium hydroxide is recorded only when an alkaline cleaning bath is used. Report active NaOH mass, not the combined mass of the supplied solution.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: as-received cleaning-solution mass multiplied by batch-specific sodium-hydroxide mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product; not applicable when no sodium-hydroxide cleaner is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sodium_hydroxide`
- Sources: `eu-jrc-sts-bref-2020`

###### PTFE resin for edge coating (`ptfe_resin`)

PTFE resin crosses the boundary only for a declared fluoropolymer low-friction blade-edge coating. Report dry PTFE solids and disclose the dispersion medium and coating application route.

- Selected flow: PTFE resin `f1adfc87-da88-4bcb-ace7-d6b809049f56`
- Flow property / unit: Mass / kg
- Amount rule: as-applied dispersion mass multiplied by batch-specific PTFE solids fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product; not applicable for products without PTFE coating
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ptfe_resin`
- Sources: `epo-ep2454056b1-2014`

###### Polypropylene for razor housing (`polypropylene`)

Polypropylene enters injection moulding only when it is the declared razor or cartridge housing material. Do not use this row for ABS, HIPS, nylon, elastomer, or another polymer. No exact Tiangong flow UUID is currently confirmed because the exact-name candidate carries an incompatible public classification.

- Selected flow: Polypropylene resin in primary form
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene resin charged to housing moulding, net of verified internal regrind returned within the same campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product; not applicable for blade-only products or non-polypropylene housings
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polypropylene`
- Sources: `uspto-us11571827b2-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable reference product (`reference_product_output`)

Only conforming unpackaged product released at the factory gate is reference output. Rejects, retained samples, rework awaiting release, and packaging are excluded from this mass.

- Selected flow: Razors and razor blades (including razor blade blanks in strips) `6c5d6033-a2c9-40f0-bc7d-077549573ace`
- Flow property / unit: Mass / kg
- Amount rule: measured net saleable output normalized to exactly 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_product_output`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Post-industrial steel scrap (`postindustrial_steel_scrap`)

Segregated steel offcuts, punched skeletons, trimming losses, and rejected steel parts leaving the process are recorded here. Grinding dust is excluded and has its own row.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured steel scrap leaving the campaign after deducting verified internal remelt or direct reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postindustrial_steel_scrap`
- Sources:

###### Cleaning wastewater (`cleaning_wastewater`)

Spent aqueous cleaning and rinsing water leaving the foreground process for treatment or discharge is recorded with treatment status and composition. Internally recycled water is not counted as an output until it leaves the boundary.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving the included campaign, or volume converted using documented density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-jrc-sts-bref-2020`

###### Captured grinding dust (`grinding_dust`)

Dry dust collected from blade-edge grinding, honing, and associated filtration is recorded separately from metal offcuts and wet sludge. Disclose metal and abrasive composition and treatment route.

- Selected flow: Dust from Grinding and Sieving `e0f3b3af-7794-4c25-ae58-5e4302b226d2`
- Flow property / unit: Mass / kg
- Amount rule: measured dry captured dust leaving the included campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_dust`
- Sources: `epo-ep2454056b1-2014`

###### Polypropylene moulding waste (`polypropylene_waste`)

Segregated polypropylene runners, sprues, trim, purge, and rejected mouldings leaving the boundary are recorded only for the polypropylene housing route. Internally returned regrind is disclosed but not counted as an output.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene waste leaving the campaign after deducting verified internal regrind
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product; not applicable for blade-only products or non-polypropylene housings
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polypropylene_waste`
- Sources: `uspto-us11571827b2-2023`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | separately metered products, lines, and campaigns | Prefer subdivision and direct measurement by product form and campaign before allocating shared inputs or wastes. |  |
| `allocation_shared_operations` | inseparable shared electricity, water, cleaning, ventilation, and waste handling | Allocate using a documented physical driver that reflects causality, such as machine time, metered sub-load, treated surface area, bath loading, or measured mass throughput; do not default to revenue. |  |
| `allocation_internal_recycling` | steel scrap and polypropylene regrind returned within the same foreground system | Treat verified internal reuse as an internal loop and avoid double-counting it as both an output waste and a new input. Report losses and any material leaving the boundary. |  |
| `allocation_external_recovery` | scrap or waste leaving for recycling or recovery | Report the waste flow and destination at the factory gate without avoided-burden credit inside this gate-to-gate dataset; any downstream credit belongs to an explicitly declared expanded model. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_blade_steel_strip` | `razor_product_manufacturing` | Blade-grade stainless-steel strip | receiving, issue, and return record | lot id; supplier; alloy grade; strip thickness; received mass; issued mass; returned mass; recycled content | calibrated scale and inventory reconciliation | kg | per lot and campaign | declared representative production period covering complete campaigns | all included lines at the declared site | sum issued mass minus unchanged returned mass and normalize to released output | scale calibration; supplier certificate; lot traceability; inventory reconciliation |
| `cp_manufacturing_electricity` | `razor_product_manufacturing` | Manufacturing electricity | meter record | meter id; start and end readings; kWh; covered equipment; allocation driver; downtime | revenue-grade site or submeter | kWh and MJ | per billing interval and campaign where available | declared representative production period covering complete campaigns | all included equipment and auxiliaries | subtract excluded loads, allocate shared load by approved physical driver, convert kWh × 3.6, normalize to released output | meter calibration; one-line diagram; reconciliation to utility invoice |
| `cp_process_water` | `razor_product_manufacturing` | Process water | meter and water-balance record | source; meter id; make-up volume or mass; recycle volume; discharge volume; density if converted | calibrated water meter or tank mass balance | kg | per meter interval or campaign | declared representative production period covering complete campaigns | all included water-using operations | count boundary make-up once, reconcile intake, recycle, losses and outputs, normalize to released output | meter calibration; water mass balance; treatment log |
| `cp_sodium_hydroxide` | `razor_product_manufacturing` | Sodium hydroxide active substance | chemical batch and concentration record | batch id; solution mass; NaOH mass fraction; bath make-up; inventory change; disposal | calibrated scale plus certificate or verified titration | kg active NaOH | per batch | declared representative production period covering complete campaigns | included alkaline cleaning baths | sum solution mass × batch concentration, adjust for inventory change, normalize to released output | scale calibration; certificate of analysis or titration; bath log |
| `cp_ptfe_resin` | `razor_product_manufacturing` | PTFE resin for edge coating | coating batch record | batch id; dispersion mass; PTFE solids fraction; recovered coating; inventory change; coated product mass | calibrated scale plus formulation or certificate | kg dry PTFE | per coating batch | declared representative production period covering complete campaigns | included PTFE coating line | sum dispersion mass × verified solids fraction, subtract recovered unchanged material, normalize to released output | scale calibration; formulation; certificate of analysis; batch log |
| `cp_polypropylene` | `razor_product_manufacturing` | Polypropylene for razor housing | resin issue and regrind record | lot id; resin grade; virgin mass; external recycled resin mass; internal regrind charged; returned stock; housing output | calibrated hopper or platform scale | kg | per moulding batch | declared representative production period covering complete campaigns | included polypropylene moulding lines | sum externally supplied resin consumed; disclose but do not double-count internal regrind; normalize to released output | scale calibration; supplier certificate; batch genealogy |
| `cp_reference_product_output` | `razor_product_manufacturing` | Net saleable reference product | final release and mass record | product code; product form; blade count; alloy; coating; housing material; gross mass; packaging tare; rejected mass; released mass | calibrated scale linked to lot-release record | kg | per released lot | declared representative production period covering complete campaigns | all included final inspection and release points | sum released net unpackaged mass and normalize all exchanges to 1 kg | scale calibration; release authorization; tare verification; mass reconciliation |
| `cp_postindustrial_steel_scrap` | `razor_product_manufacturing` | Post-industrial steel scrap | scrap container and dispatch record | container id; alloy where known; gross mass; tare; internal reuse; destination; date | calibrated floor or dispatch scale | kg | per container or dispatch | same period as product output | all included forming, trimming, and rejection points | sum net scrap leaving the boundary, exclude internal reuse, normalize to released output | scale calibration; dispatch ticket; material segregation record |
| `cp_cleaning_wastewater` | `razor_product_manufacturing` | Cleaning wastewater | effluent meter and treatment record | source operation; volume or mass; density; pH; metals; oil; treatment status; destination | calibrated meter or tank mass balance with representative sampling | kg | continuous or per discharge batch | same period as product output | all included cleaning and rinsing operations | sum effluent leaving the boundary, exclude internal recycle, convert volume only with documented density, normalize to released output | meter calibration; sample chain of custody; laboratory result; water balance |
| `cp_grinding_dust` | `razor_product_manufacturing` | Captured grinding dust | dust collector clean-out record | collector id; gross mass; tare; moisture; metal content; abrasive content; destination | calibrated scale at each clean-out | kg dry mass | per clean-out | same period as product output | all included dry grinding and filtration systems | sum dry net dust leaving the boundary and normalize to released output | scale calibration; collector log; waste characterization; dispatch ticket |
| `cp_polypropylene_waste` | `razor_product_manufacturing` | Polypropylene moulding waste | scrap and regrind record | batch id; runners; sprues; purge; rejects; internal regrind; mass leaving; destination | calibrated scale and batch reconciliation | kg | per moulding batch | same period as product output | included polypropylene moulding lines | sum polypropylene waste leaving the boundary after internal regrind, normalize to released output | scale calibration; batch record; waste dispatch ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all inventory rows | normalized amount = period exchange amount / period net released unpackaged product mass × 1 kg | exchange records; `cp_reference_product_output` | exchange amount per 1 kg reference product |  |
| `convert_electricity_kwh` | manufacturing electricity | electricity MJ = metered kWh × 3.6 MJ/kWh | `cp_manufacturing_electricity` | MJ electricity |  |
| `calculate_active_mass` | sodium hydroxide and PTFE resin | active mass = as-received solution or dispersion mass × verified batch mass fraction | `cp_sodium_hydroxide`; `cp_ptfe_resin` | kg active NaOH or dry PTFE |  |
| `reconcile_material_mass` | steel and polypropylene | received external input = saleable product share + material in wastes leaving boundary + net inventory change + documented process loss; internal recycle appears once as an internal loop | input, output, scrap, waste, and inventory records | material-specific reconciliation and unexplained balance |  |
| `reconcile_site_water` | process water and cleaning wastewater | intake = wastewater leaving + water in products or wastes + evaporation and other measured losses + net system inventory change; internal recycle is disclosed but not counted twice | `cp_process_water`; `cp_cleaning_wastewater` | water mass balance and unexplained balance | `eu-jrc-sts-bref-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | reference product and blade steel | Maintain product code, product form, blade count, alloy grade, strip lot, coating state, housing material, and released-lot linkage. | supplier certificates, batch genealogy, and release records |
| `dq_temporal_coverage` | all foreground exchanges | Cover complete campaigns within a declared representative production period and disclose seasonality, shutdowns, abnormal events, and any uncovered interval. | dated meter, inventory, batch, and dispatch records |
| `dq_mass_completeness` | steel, polymer, product, and wastes | Reconcile each material family and investigate every unexplained balance before publication; disclose the review criterion and its justification. | signed reconciliation with source records and corrective-action evidence |
| `dq_water_management` | water and wastewater | Maintain a flow diagram and site water mass balance; identify intake, internal recycle, treatment, discharge, and losses. | water audit, meter calibration, sampling records, and treatment logs |
| `dq_conditional_routes` | coating and housing rows | Mark a conditional row not applicable only when product specification and line records demonstrate that the declared coating or housing material is absent. | bill of materials, route sheet, and batch record |
| `dq_range_status` | all important flows | No external empirical amount range is normative in this candidate PCR. Preserve foreground values and flag them for review until two independent, boundary-compatible original sources or reviewed foreground datasets support a range. | manifest unresolved range-evidence record and source-review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Confirm the reference output UUID, Mass/kg property support, net unpackaged mass basis, and every required product qualifier. |  |
| `val_atomic_inventory` | inventory | Confirm every row is one atomic exchange with one direction, flow type, property, unit, amount rule, basis, evidence kind, and collection protocol; reject umbrella utilities, combined materials, and combined wastes. |  |
| `val_process_coverage` | foreground boundary | Confirm the dataset covers all declared on-site forming, heat treatment, sharpening, cleaning, coating, moulding, assembly, inspection, rework, and directly controlled waste handling, or explicitly marks non-applicable operations with evidence. | `epo-ep2454056b1-2014`; `uspto-us11571827b2-2023` |
| `val_mass_balance` | steel and polypropylene | Confirm material-specific reconciliations, internal recycling treatment, and destination for every material output; investigate unexplained balances over the data-quality threshold. |  |
| `val_water_balance` | water and wastewater | Confirm water intake, internal recycle, cleaning wastewater, treatment, discharge, and losses reconcile for the same site and period. | `eu-jrc-sts-bref-2020` |
| `val_allocation` | shared operations | Confirm subdivision was attempted first and every remaining allocation uses a disclosed physical driver with numerator, denominator, period, and affected products. |  |
| `val_range_evidence` | important flows | Confirm no unverified single-source value, repeated single value, or mechanically combined scenario minimum/maximum is presented as an empirical range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset; foreground building block for lifecyclemodel projections |
| allowed_use | Gate-to-gate datasets for razors, cartridges, finished razor blades, or strip blanks matching the declared product form, material, coating, housing, geography, technology, period, and factory gate |
| excluded_use | Electric shavers, surgical blades, industrial knives, packaged retail products, use-stage comparisons, replacement-frequency claims, and cradle-to-grave results without additional verified stages |
| required_metadata | PCR id; reference product UUID; product form; blade count; alloy and grade; coating; housing material; recycled content; geography; technology; production period; net mass basis; boundary; allocation; source dataset identities |
| required_quality_disclosure | record coverage; meter and scale calibration; supplier certificates; active-substance calculations; mass and water balances; allocation drivers; data gaps; unresolved UUID and range-evidence status; uncertainty and representativeness |
| update_trigger | Change in product form, reference-flow identity, alloy family, coating system, housing material, manufacturing route, site geography, allocation method, data period, background dataset, or evidence sufficient to resolve UUID or range gaps |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Product classification identity and official English title for CPC 42914 |
| `epo-ep2454056b1-2014` | Literature (`literature`) | European Patent Office, EP 2 454 056 B1, Razor Blade Technology, 19 March 2014: https://data.epo.org/publication-server/rest/v1.2/publication-dates/20140319/patents/EP2454056NWB1/document.pdf (retrieved 2026-09-05) | Stainless-steel strip, hardening, sharpening, cleaning, edge coating, PTFE application and curing, and cartridge assembly process decomposition |
| `eu-jrc-sts-bref-2020` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document on Surface Treatment Using Organic Solvents including Preservation of Wood and Wood Products with Chemicals, 2020: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf (retrieved 2026-09-05) | Aqueous cleaning, sodium-hydroxide cleaning input, water and wastewater accounting, water audits, and recycling controls |
| `uspto-us11571827b2-2023` | Literature (`literature`) | United States Patent US 11,571,827 B2, Shaving Razor Cartridge and Method of Manufacture, 7 February 2023: https://patents.google.com/patent/US11571827B2/en (retrieved 2026-09-05) | Injection-moulded razor-cartridge housing, polypropylene as a housing polymer option, and blade-to-housing assembly |
