---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-copper-of-a-thickness-not-exceeding-0-15-mm
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Foil, of copper, of a thickness not exceeding 0.15 mm

## 1. Scope and Applicability

This PCR applies to unsupported copper or copper-alloy foil with a declared thickness not exceeding 0.15 mm, supplied as a roll, coil, sheet, or slit width at the producer's gate. It covers electrodeposited (electrolytic, ED) foil and wrought (rolled, RA) foil as distinct production routes. It may cover a surface-treated, roughened, passivated, annealed, or coated foil only when the treatment or coating is part of the foil as sold and its material and process burdens are included.

The intended foreground dataset represents foil manufacturing, not a downstream application. A lithium-ion-battery current-collector grade, printed-circuit grade, flexible-circuit grade, or other application-specific grade may instantiate this PCR only with its own declared specifications. No one such grade is representative of the entire category.

Composite copper foil with a non-copper structural core, copper-clad laminate, flexible copper-clad laminate, printed circuit board, laminate, electrode laminate, and any product in which the copper foil is already bonded to a substrate or active-material layer are outside scope. Copper plate, sheet, or strip exceeding 0.15 mm is also outside scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-copper-of-a-thickness-not-exceeding-0-15-mm` |
| classification_refs | CPC 3.0 `41515`, Foil, of copper, of a thickness not exceeding 0.15 mm |
| covered_products | Unsupported copper or copper-alloy foil, thickness ≤0.15 mm, including ED and rolled routes and declared integral surface treatment or coating |
| excluded_products | Composite copper foil with a structural core; copper-clad or flexible copper-clad laminate; printed circuit board; electrode laminate; foil already bonded to a substrate or active-material layer; copper plate, sheet, or strip >0.15 mm |
| representative_product | No single application grade is representative; the concrete dataset shall identify the route and delivered foil specification |
| production_route | `electrodeposited`, `rolled`, or a separately justified route; mixed-route averages shall disclose route shares and shall not conceal materially different technologies |
| market_state | Net conforming foil at the producer's gate, in the declared delivery form and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming copper foil meeting the declared specification and CPC 3.0 `41515` boundary |
| How much | 1,000 kg net delivered foil product, excluding packaging and any detachable carrier |
| How well | Declared route, thickness, areal mass, copper grade or purity, surface state, annealing or temper, coating state, and delivery-roll condition |
| How long or cycle | One completed production reporting period; no service-life function is assigned |
| reference_flow_link | Producer-gate output of `slitting_inspection_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Copper foil `e41f89ae-d52b-49e7-a9ad-5977e2b1314f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production route; nominal and measured thickness; thickness range or tolerance; measured areal mass; copper grade or purity; alloy designation when applicable; matte/drum or equivalent side identity for ED foil; surface-treatment and roughness/profile state; annealing or temper state; coating chemistry and coating mass when present, otherwise `uncoated`; roll/coil/sheet form, width, length or net area, splice state, core or detachable-carrier state, and packaging exclusion; geography; reporting period; energy mix; net yield; internal and external scrap destinations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1,000 kg of accepted foil leaving final inspection; exclude packaging and detachable carrier mass, and separately disclose adherent non-copper treatment or coating mass included in the delivered product. |
| `foil_thickness` | reference product | Length | µm | Report the lot- or product-weighted measured thickness and declared tolerance; every represented product shall be ≤150 µm. Do not infer thickness from a nominal battery or circuit-board grade. |
| `foil_areal_mass` | reference product | Mass per area | kg/m2 | Calculate measured net foil mass divided by measured delivered foil area for the represented production; do not calculate areal mass from thickness alone unless the dataset documents a product-specific measured density and composition basis. |
| `copper_composition` | reference product and copper-bearing inputs | Mass fraction | kg/kg | Report copper purity or alloy designation and the analytical or certificate basis; do not treat a single high-purity or battery-grade specification as the category default. |
| `surface_and_coating` | reference product | Mass per area and declared profile metric where applicable | kg/m2 and declared roughness/profile unit | Identify each side's treatment or roughening state and measurement convention. Report coating chemistry and measured coating mass separately; use `uncoated` only when no coating is present. |
| `production_yield` | each route and final conversion | Mass ratio | kg/kg | Report accepted output, edge trim, off-spec foil, samples, work-in-progress change, and other copper-bearing losses on a consistent dry-mass basis; calculate net yield as accepted product mass divided by accountable copper-bearing input mass. |

## 5. System Boundary

The dataset is cradle-to-producer-gate when upstream datasets are linked for purchased refined copper, copper scrap, copper chemicals, energy, water, treatment chemicals, packaging, and other supplied inputs. The foreground boundary begins at factory receipt of the declared copper-bearing feed and ends after slitting, inspection, and packaging of conforming foil. Route-specific formation, thermal treatment, surface treatment or roughening, coating when present, utilities, emission control, wastewater treatment, scrap handling, and on-site recycling are included when performed by the reporting organization.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The physical and commercial state of each copper-bearing feed at the reporting-site receiving gate, including refined copper, copper scrap, anode or solution input, billet, strip, or other intermediate |
| starting_condition_role | Foreground manufacturing starts at receipt; all earlier extraction, smelting, refining, scrap preparation, and transport burdens are linked as upstream datasets unless physically performed within the reporting boundary |
| product_classification_scope | CPC 3.0 `41515`; ED and rolled foil are route-specific members, not interchangeable default technologies |
| recursive_input_rule | Purchased foil in CPC 3.0 `41515` is recorded as an input with its own upstream dataset and declared purpose; its manufacture is not recreated inside the same process inventory |
| upstream_dataset_requirement | Link technology-, geography-, and period-appropriate upstream datasets for all material and energy inputs; identify recycled-content claims and copper-scrap preparation boundaries |
| disclosure | Declare route, site geography, reporting period, feed states, included upstream stages, electricity and fuel supply, on-site utilities, treatment/coating scope, internal recycling loops, external scrap destinations, and excluded operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_separation` | route-specific foreground model | Select at least one formation route. Keep `ed_foil_formation` and `rolled_foil_formation` separate unless a sales-weighted average is the declared product and route shares, energy, yield, and material differences remain transparent. | `fukuda-ed-foil-production`; `jx-rolled-copper-foil-technology` |
| `boundary_treatment_inclusion` | surface-treated, roughened, annealed, or coated foil | Include all treatment, roughening, annealing, passivation, coating, washing, drying, and associated utilities and releases performed before the product gate; declare both sides separately when their states differ. | `ipc-4562b-toc`; `fukuda-ed-foil-production`; `jx-rolled-copper-foil-technology` |
| `boundary_excluded_products` | product identity | Do not apply the dataset to composite copper foil, copper-clad laminate, flexible copper-clad laminate, printed circuit board, electrode laminate, or foil already bonded to a structural substrate or active-material layer. | `unsd-cpc-3-0-explanatory-notes`; `ipc-4562b-toc` |
| `boundary_resource_and_release_coverage` | all included processes | Account for copper-bearing materials, process chemicals, water, electricity, fuels, direct air emissions, wastewater pollutants, wastes, and copper-bearing residues. Use substance-specific flows rather than an unquantified aggregate where records permit. | `eu-jrc-nfm-bref` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ed_foil_formation` | Electrodeposited foil formation | conditional | Required when any represented foil is made by electrodeposition | foreground production | measured unfinished ED foil output and accountable copper input |
| `rolled_foil_formation` | Rolled foil formation | conditional | Required when any represented foil is made by rolling or other wrought reduction | foreground production | measured unfinished rolled foil output and accountable copper input |
| `surface_thermal_finishing` | Surface and thermal finishing | conditional | Required when annealing, tempering, roughening, passivation, adhesion treatment, or coating is performed within the product boundary | foreground conditioning | measured finished foil transferred to final conversion |
| `slitting_inspection_packaging` | Slitting, inspection, and packaging | required | Always included for net conforming foil at the producer's gate | foreground final conversion | 1,000 kg accepted foil output |

### Process: Electrodeposited foil formation (`ed_foil_formation`)

#### Inputs

##### Product flows

###### Copper-bearing ED feed (`ed_copper_feed`)

Record every copper-bearing feed crossing the process boundary, such as refined copper, prepared copper scrap, anode, copper salt, or purchased electrolyte, without treating unlike feed states as interchangeable.

- Selected flow: Select one Tiangong product flow for each actual copper-bearing feed state
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or inventory-reconciled dry mass entering ED foil formation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished ED foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ed_materials`
- Sources:

###### Electricity for electrodeposition and auxiliaries (`ed_electricity`)

Record metered electricity for rectification, circulation, filtration, foil stripping, ventilation, and directly supporting equipment; allocate only shared-meter consumption under section 7.

- Selected flow: Select the geography- and period-matched electricity supply flow
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity attributable to ED foil formation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished ED foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ed_energy`
- Sources:

###### Electrolyte make-up, process water, and ED auxiliaries (`ed_consumables`)

Create a separate product-flow row in the data package for each consumed acid, copper salt, additive, process-water supply, filter medium, or other material; this card defines their common collection rule and is not permission to aggregate unlike substances.

- Selected flow: Select a substance- and supply-specific Tiangong product flow for each consumed material
- Flow property / unit: Mass / kg
- Amount rule: Purchased quantity plus opening inventory minus closing inventory, corrected for transfers and returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished ED foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ed_materials`
- Sources:

#### Outputs

##### Product flows

###### Unfinished ED copper foil (`ed_unfinished_foil`)

Record measured ED foil transferred to finishing or final conversion, before counting it as accepted reference product.

- Selected flow: Copper foil `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balance-reconciled transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: ED formation process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ed_output`
- Sources:

##### Waste flows

###### ED copper residues and off-spec foil (`ed_copper_residues`)

Record each copper-bearing residue by measured mass and destination, distinguishing internal electrolyte return, internal remelting, external recycling, and disposal.

- Selected flow: Select a waste or product flow matching the documented residue state and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by residue class and destination; do not net internal or external recovery against energy use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished ED foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ed_output`
- Sources:

##### Elementary flows

###### ED direct releases (`ed_direct_releases`)

Create substance-specific elementary-flow rows for measured or permitted direct air and water releases after on-site treatment; do not represent wastewater sent to an external treatment plant as an elementary flow.

- Selected flow: Select one Tiangong elementary flow for each identified released substance and receiving compartment
- Flow property / unit: Mass / kg
- Amount rule: Validated monitoring result, discharge record, or engineering calculation for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished ED foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_releases`
- Sources:

### Process: Rolled foil formation (`rolled_foil_formation`)

#### Inputs

##### Product flows

###### Copper feed for rolling (`rolled_copper_feed`)

Record the actual refined copper, copper alloy, ingot, billet, slab, or strip state entering the foreground route and link all production before that state upstream unless performed on site.

- Selected flow: Select one Tiangong product flow matching the actual copper feed state and grade
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled dry mass entering rolling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolled_materials`
- Sources:

###### Electricity and thermal energy for rolling (`rolled_energy`)

Create separate data-package rows for electricity and each fuel or purchased-heat carrier used for rolling, intermediate annealing, cleaning, and directly supporting equipment.

- Selected flow: Select a geography-, technology-, and period-matched energy supply flow for each carrier
- Flow property / unit: Energy / kWh, MJ, or carrier-specific physical unit
- Amount rule: Metered use or reconciled fuel and purchased-heat records attributable to rolled foil formation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolled_energy`
- Sources:

###### Rolling lubricants and process consumables (`rolled_consumables`)

Create a separate product-flow row for each consumed lubricant, cleaning agent, process-water supply, roll-treatment material, or other material.

- Selected flow: Select a substance- and supply-specific Tiangong product flow for each consumed material
- Flow property / unit: Mass / kg
- Amount rule: Purchased quantity plus opening inventory minus closing inventory, corrected for recovered and returned material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rolled_materials`
- Sources:

#### Outputs

##### Product flows

###### Unfinished rolled copper foil (`rolled_unfinished_foil`)

Record foil transferred from the rolling route to finishing or final conversion, with annealing or temper state at transfer.

- Selected flow: Copper foil `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balance-reconciled transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: rolled formation process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolled_output`
- Sources:

##### Waste flows

###### Rolled-route copper scrap and process wastes (`rolled_wastes`)

Create separate rows for copper edge trim and off-spec foil, spent lubricant, treatment sludge, and other wastes; identify measured mass, physical state, and destination.

- Selected flow: Select a waste or product flow matching each documented waste state and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by waste class and destination; do not net recycling receipts against process consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolled_output`
- Sources:

##### Elementary flows

###### Rolled-route direct releases (`rolled_direct_releases`)

Create substance-specific rows for direct combustion and process releases to air or water after on-site control, using the correct receiving compartment.

- Selected flow: Select one Tiangong elementary flow for each identified released substance and receiving compartment
- Flow property / unit: Mass / kg
- Amount rule: Validated monitoring result, fuel-based calculation, discharge record, or engineering calculation for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured unfinished rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_releases`
- Sources:

### Process: Surface and thermal finishing (`surface_thermal_finishing`)

#### Inputs

##### Product flows

###### Unfinished copper foil for finishing (`finishing_foil_input`)

Record the route-specific unfinished foil entering annealing, tempering, roughening, passivation, adhesion treatment, coating, washing, or drying.

- Selected flow: Copper foil `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balance-reconciled transfer mass, separated by ED and rolled route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured finished foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Finishing energy, treatment chemicals, and coating materials (`finishing_inputs`)

Create separate data-package rows for electricity, fuels or heat, water, every surface-treatment chemical, and every coating constituent. Record zero coating input only for a verified uncoated product.

- Selected flow: Select a supply-specific Tiangong product flow for each actual energy or material input
- Flow property / unit: Energy or Mass / carrier-appropriate unit
- Amount rule: Metered energy and material issue or inventory-reconciled consumption for each finishing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured finished foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

#### Outputs

##### Product flows

###### Finished foil transferred to final conversion (`finished_foil_transfer`)

Record the foil mass and product specification after finishing, including side-specific surface state, annealing or temper, and coating state.

- Selected flow: Copper foil `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled with treatment and coating additions and finishing losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: finishing process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources:

##### Waste flows

###### Finishing wastes and spent baths (`finishing_wastes`)

Create separate rows for spent baths, wastewater sent to external treatment, sludge, filters, and copper-bearing finishing residues, recording destination and any internal recovery.

- Selected flow: Select a waste flow matching each documented waste state and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured or inventory-reconciled mass by waste class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured finished foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

### Process: Slitting, inspection, and packaging (`slitting_inspection_packaging`)

#### Inputs

##### Product flows

###### Foil entering final conversion (`final_conversion_foil_input`)

Record route- and product-specific foil transferred to slitting and final inspection.

- Selected flow: Copper foil `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass before slitting and final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conversion`
- Sources:

###### Final-conversion energy and packaging (`final_conversion_inputs`)

Create separate rows for electricity and each packaging material. Packaging is inventoried but excluded from the reference-product mass.

- Selected flow: Select a supply-specific Tiangong product flow for each actual energy or packaging input
- Flow property / unit: Energy or Mass / carrier-appropriate unit
- Amount rule: Metered electricity and measured or purchased packaging consumption attributable to accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted foil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conversion`
- Sources:

#### Outputs

##### Product flows

###### Net conforming copper foil (`reference_copper_foil`)

This is the reference product after inspection, with packaging and detachable carrier excluded from its mass.

- Selected flow: Copper foil `e41f89ae-d52b-49e7-a9ad-5977e2b1314f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed normalization to 1,000 kg of accepted product; scale collected inventory from measured accepted mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Slitting trim, rejected foil, and samples (`final_copper_scrap`)

Record copper-bearing edge trim, rejected rolls or sheets, and destructive samples by measured mass and actual internal return, external recycling, or disposal destination.

- Selected flow: Select a waste or product flow matching each documented copper scrap state and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by scrap class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted foil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conversion`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | route, product grade, and finishing operation | Avoid allocation by separately metering ED and rolled routes, products with materially different surface or coating systems, and operations with distinct energy or yield. | `ec-pef-method-2021` |
| `allocation_shared_utilities` | shared utilities and treatment systems | When subdivision is not feasible, allocate shared energy, water, and treatment by a documented causal driver such as metered use, operating time corrected for load, treated volume and pollutant load, or another verified engineering relationship. Mass allocation is allowed only when no more causal relationship is available. | `ec-pef-method-2021` |
| `allocation_internal_scrap` | copper returned within the reporting boundary | Model internal scrap return as an internal loop: include collection, preparation, remelting or dissolution, treatment, and energy, but do not create an avoided-primary-copper credit or count the returned mass as a second product. | `ec-pef-method-2021` |
| `allocation_external_recycling` | copper-bearing material leaving for external recycling | Report the physical scrap or residue output and its destination. The base producer-gate inventory shall not apply an avoided-burden credit; any recycled-content or end-of-life allocation method shall be an explicit downstream scenario with all parameters and no double counting. | `ec-pef-method-2021` |
| `allocation_multiple_saleable_foils` | joint production of saleable foil grades | Prefer product-level records. If genuinely inseparable burdens remain, use physical mass allocation and disclose it; use economic allocation only with a documented reason and a sensitivity result because price differences can reflect application grade rather than manufacturing causality. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ed_materials` | `ed_foil_formation` | Copper feed, electrolyte, water, and auxiliaries | purchase, issue, stock, return, and transfer records | material identity; grade; opening stock; purchases; closing stock; returns; transfer mass; moisture basis | reconcile enterprise records to ED production and retain substance-level rows | kg or material-specific unit | batch or monthly, reconciled for the reporting period | same representative period as ED output | each ED production site | sum net consumption by material and normalize to unfinished ED output | invoices, stock reconciliation, batch tickets, and material certificates |
| `cp_ed_energy` | `ed_foil_formation` | ED electricity | meter and production-log records | meter start/end; submeter use; operating hours; production mass; electricity supplier and mix period | use dedicated meters; otherwise apply the disclosed shared-utility rule | kWh | continuous or shift record, monthly reconciliation | same representative period as ED output | each ED production site | sum attributable electricity and normalize to unfinished ED output | calibrated meter records and reconciliation |
| `cp_ed_output` | `ed_foil_formation` | Unfinished foil and copper residues | scale, batch, transfer, and disposition records | gross mass; tare; net mass; lot; route; accepted transfer; residue class; destination | reconcile input, transfer, inventory change, and residues | kg | each lot, monthly reconciliation | same representative period as ED inputs | each ED production site | sum dry net mass by output and destination | scale calibration, batch record, and mass-balance sign-off |
| `cp_rolled_materials` | `rolled_foil_formation` | Copper feed, lubricants, water, and consumables | purchase, issue, stock, return, and transfer records | material identity; grade; opening stock; purchases; closing stock; recovered amount; return; transfer mass | reconcile material records to rolling production | kg or material-specific unit | batch or monthly, reconciled for the reporting period | same representative period as rolled output | each rolling site | sum net consumption by material and normalize to unfinished rolled output | invoices, stock reconciliation, batch tickets, and material certificates |
| `cp_rolled_energy` | `rolled_foil_formation` | Rolling electricity, fuel, and purchased heat | meter, fuel invoice, tank, and production-log records | energy carrier; meter start/end; purchased amount; stock change; lower heating value when used; operating hours; output mass | meter each carrier; reconcile fuel stock and invoices; separate on-site combustion from purchased energy | kWh, MJ, or carrier-specific unit | continuous or shift record, monthly reconciliation | same representative period as rolled output | each rolling site | sum attributable carrier use and normalize to unfinished rolled output | meter calibration, invoices, tank reconciliation, and calculation sheet |
| `cp_rolled_output` | `rolled_foil_formation` | Unfinished foil, copper scrap, and other waste | scale, batch, transfer, and disposition records | gross mass; tare; net mass; lot; temper; accepted transfer; waste class; destination | reconcile input, output, work-in-progress change, and wastes | kg | each lot, monthly reconciliation | same representative period as rolled inputs | each rolling site | sum dry net mass by output and destination | scale calibration, batch record, and mass-balance sign-off |
| `cp_finishing_records` | `surface_thermal_finishing` | Foil, energy, treatment and coating inputs, finished transfer, and wastes | meter, batch recipe, issue, stock, scale, and disposition records | route; lot; input/output mass; energy carrier; material identity; coating issue and recovery; bath make-up; waste class; destination | reconcile each finishing line and product family without averaging coated and uncoated products | kg, kWh, MJ, or carrier-specific unit | each batch or lot, monthly reconciliation | same representative period as finished output | each finishing site and line | aggregate only products with the same declared treatment/coating system; normalize to finished transfer | batch recipes, meter and scale calibration, chemical analysis, and stock reconciliation |
| `cp_final_conversion` | `slitting_inspection_packaging` | Input foil, energy, packaging, accepted foil, trim, rejects, and samples | meter, slitting plan, scale, inspection, packaging, and disposition records | route; lot; input mass; accepted mass; width; length/area; thickness; areal mass; trim; reject; sample; packaging mass; destination | reconcile each product lot through final inspection and packaging | kg, m2, µm, kWh, and material-specific unit | each lot, monthly reconciliation | same representative period as product output | each final-conversion site | sum accepted mass by declared product and route; separately sum scrap and packaging | scale and gauge calibration, inspection certificate, and disposition record |
| `cp_site_releases` | all applicable processes | Direct air and water releases | continuous monitoring, periodic sampling, permit report, fuel analysis, and discharge records | substance; compartment; concentration; flow or volume; duration; fuel quantity; emission factor source; treatment stage | calculate substance mass from validated measurements or documented engineering method | kg or measurement-specific unit | as monitored or sampled, reconciled for the reporting period | same representative period as production | each reporting site and discharge point | sum by substance and receiving compartment, then allocate by causal driver | laboratory accreditation, instrument calibration, permit return, and signed calculation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = reporting-period amount × 1,000 kg / reporting-period accepted reference-product mass | reporting-period amount; accepted foil mass | amount per 1,000 kg accepted foil | `ec-pef-method-2021` |
| `calc_areal_mass` | reference product | areal mass = net foil mass / measured delivered foil area; report the area and mass measurement basis and do not substitute nominal thickness | net foil mass; delivered foil area | kg/m2 | `ipc-4562b-toc` |
| `calc_net_yield` | each formation route and final conversion | net yield = accepted output mass / accountable copper-bearing input mass; also report each copper-bearing loss and inventory change so the ratio is auditable | accepted output; copper-bearing inputs; work-in-progress change; scrap; residues | kg/kg and mass-balance table | `eu-jrc-nfm-bref` |
| `calc_coating_mass` | coated foil | coating mass per area = net coating material retained on product / coated delivered area; distinguish input, recovered material, and waste | coating input; recovered material; waste; coated area | kg/m2 by coating constituent | `ipc-4562b-toc` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | all foreground data | Use one recent consecutive period representative of normal operation; continuous production should normally cover at least 12 months, while a shorter campaign shall cover all operating states and be justified. | reporting-period definition, monthly trend, shutdown and abnormal-operation log |
| `dq_technology` | formation route | Record ED and rolled production separately, including actual equipment and finishing route; no battery-grade or printed-circuit-grade dataset may stand in for the whole category. | route map, equipment list, production records, and product-family reconciliation |
| `dq_geography_energy` | energy and upstream supplies | Use site geography and reporting-period electricity and fuel supply; disclose contractual instruments separately from the physical inventory mix. | meters, invoices, supplier data, and energy-mix documentation |
| `dq_mass_balance` | copper-bearing inputs and outputs | Reconcile copper-bearing input, accepted foil, work-in-progress change, internal returns, external scrap, residues, samples, and unexplained difference for each route and site. | signed mass-balance worksheet and stock reconciliation |
| `dq_product_specification` | reference product | Retain lot-weighted evidence for thickness, areal mass, purity or alloy, side-specific surface state, annealing or temper, coating, and delivery condition. | certificate of analysis or conformance, inspection records, and calibrated measurements |
| `dq_completeness` | all included processes | Cover all material and energy inputs and substance-specific releases that can materially affect results; disclose exclusions and quantify their screening basis. | flow checklist, meter and purchase reconciliation, permit records, and exclusion log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Confirm CPC 3.0 `41515`, measured thickness ≤150 µm, unsupported foil state, and exclusion of composite foil, copper-clad laminate, laminate, board, and electrode laminate. | `unsd-cpc-3-0-explanatory-notes` |
| `validate_route_scope` | process map and dataset metadata | Confirm that ED and rolled routes are identified and separately inventoried, or that a declared mixed-route product reports route shares and preserves route-specific energy, yield, and treatment data. | `fukuda-ed-foil-production`; `jx-rolled-copper-foil-technology` |
| `validate_reference_flow` | reference flow | Confirm exactly 1,000 kg net accepted foil, excluding packaging and detachable carrier, and verify that all required qualifiers are populated. | `ipc-4562b-toc` |
| `validate_mass_balance` | each route and final conversion | Verify the copper-bearing mass balance, work-in-progress change, accepted output, all scrap and residue destinations, and any unexplained difference before normalization. | `eu-jrc-nfm-bref` |
| `validate_energy_yield` | each included process | Confirm that electricity and each thermal-energy carrier are foreground records for the same period as output, and that route yield and final slitting yield are reported without netting scrap-recycling credits. | `eu-jrc-nfm-bref`; `ec-pef-method-2021` |
| `validate_surface_state` | treated, annealed, or coated foil | Confirm side-specific treatment/roughness, annealing or temper, coating chemistry and retained mass; confirm explicit `uncoated` when no coating is present. | `ipc-4562b-toc`; `fukuda-ed-foil-production`; `jx-rolled-copper-foil-technology` |
| `validate_release_coverage` | site inventory | Confirm substance-specific direct air and water releases, wastes sent to external treatment, and copper-bearing residues are assigned to the correct flow type and destination. | `eu-jrc-nfm-bref` |
| `validate_no_category_extrapolation` | published claims and downstream use | Reject any claim that extrapolates a single battery-grade, printed-circuit-grade, ED-only, rolled-only, coated, or uncoated dataset to the full copper-foil category without a supported production-weighted aggregation. | `ipc-4562b-toc`; `ec-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route- and product-specific foreground manufacturing dataset for copper foil at the producer's gate |
| downstream_use | LCA process or lifecycle model for copper-foil supply to batteries, printed circuits, electronics, or other products when the declared foil specification matches |
| allowed_use | Use for the represented sites, period, route mix, thickness, grade or purity, surface treatment, annealing or temper, coating, and delivery state; aggregation is allowed only with disclosed production weights and preserved route distinctions |
| excluded_use | Composite copper foil, copper-clad laminate, flexible copper-clad laminate, printed circuit board, electrode laminate, downstream electrode coating or lamination, and category-wide claims based on one narrow grade |
| required_metadata | CPC code; Tiangong reference-flow UUID; site and geography; reporting period; ED/rolled route and shares; thickness and areal mass; purity/alloy; both-side surface state and roughness convention; annealing/temper; coating state and mass; roll/coil/sheet delivery condition; energy supply; yield; scrap and residue destinations; allocation and upstream-boundary choices |
| required_quality_disclosure | Meter coverage; measurement and analytical methods; temporal coverage; route and product representativeness; copper mass-balance closure; allocation; excluded flows; data gaps; use of secondary data; uncertainty or sensitivity results |
| update_trigger | Material change in route or route shares, site, electricity or fuel supply, copper feed state, thickness family, surface treatment, annealing, coating system, yield, scrap recovery, allocation, upstream dataset, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 30 June 2025, subclass 41515. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-08-08) | Official product-category boundary and separation from copper plate, sheet, and strip over 0.15 mm |
| `ipc-4562b-toc` | standard | IPC, *IPC-4562B: Metal Foil for Printed Board Applications*, table of contents, October 2023. https://www.ipc.org/TOC/IPC-4562B-TOC.pdf (accessed 2026-08-08) | Route distinction between electrodeposited and wrought foil and declaration/inspection dimensions including thickness, area weight, profile, treatment, purity, and delivery; not used as a category-wide performance threshold |
| `eu-jrc-nfm-bref` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Non-Ferrous Metals Industries*, adopted June 2016, published 2017. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/non-ferrous-metals-industries-0 (accessed 2026-08-08) | Copper-process resource, energy, waste, air-emission, and water-emission inventory coverage and mass-balance attention |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-08-08) | Functional-unit normalization, company-specific data, multifunctionality, recycling allocation transparency, data quality, and validation |
| `fukuda-ed-foil-production` | handbook | Fukuda Metal Foil & Powder Co., Ltd., *How Electrodeposited Copper Foil Is Produced*. https://www.fukuda-kyoto.co.jp/en/technology/making/foil_electrolytic.html (accessed 2026-08-08) | ED route sequence: electroplating formation, product-dependent two-side treatment, slitting/cutting, inspection, and roll or sheet delivery |
| `jx-rolled-copper-foil-technology` | handbook | JX Advanced Metals Corporation, *Our Core Technologies Contributing to Societal Growth and Innovation*, sections on rolling, annealing, and copper-foil surface treatment. https://www.jx-nmm.com/english/rd_sp/core_tech/ (accessed 2026-08-08) | Rolled-route repeated rolling and annealing, multi-pass thickness control, roughening/plating, anti-oxidation treatment, and separation of foil from bonded composites |
