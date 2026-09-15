---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.line-pipe-of-a-kind-used-for-oil-or-gas-pipelines-welded-of-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Line pipe of a kind used for oil or gas pipelines, welded, of steel

## 1. Scope and Applicability

This PCR governs foreground datasets for welded steel line pipe intended for pipeline transportation of petroleum or natural gas. The foreground boundary begins when purchased hot-rolled steel coil or steel plate and manufacturing consumables enter the pipe mill and ends with conforming, inspected welded line pipe at the mill factory gate.

It covers high-frequency or electric-resistance welded pipe (HFW/ERW), helical submerged-arc welded pipe (HSAW), and longitudinal submerged-arc welded pipe (LSAW), with route-specific inputs declared separately. It excludes seamless pipe, cast pipe, casing, tubing and drill pipe, non-pipeline structural pipe, pipeline construction and use, and end-of-life. External corrosion, thermal-insulation, or concrete-weight coating is outside the default boundary; attach a separate foreground process when coated pipe is the declared product. Upstream production of purchased steel, electricity, fuels, water, and consumables is represented by linked upstream datasets and is not recreated inside the pipe-mill foreground inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.line-pipe-of-a-kind-used-for-oil-or-gas-pipelines-welded-of-steel |
| classification_refs | CPC 3.0: 41285, exact product-category context |
| covered_products | Welded circular steel line pipe for oil or gas pipeline transportation, including HFW/ERW, HSAW, and LSAW manufacture |
| excluded_products | Seamless line pipe; cast pipe; casing, tubing, and drill pipe; non-pipeline structural pipe; fittings; field-welded pipeline systems; separately applied external functional coating systems |
| representative_product | Plain-end, inspected welded steel line pipe conforming to the declared line-pipe specification and delivered at the producing mill gate |
| production_route | Hot-rolled coil forming plus HFW/ERW or HSAW; or steel plate forming plus LSAW; followed by applicable heat treatment, sizing, end finishing, inspection, and hydrostatic testing |
| market_state | Finished bare or routine mill-finished welded line pipe at factory gate, dry, marked, and accepted to the declared specification; any external functional coating is modelled separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of welded steel line pipe suitable for the declared oil or natural gas pipeline transportation specification |
| How much | 1 kg of conforming welded steel line pipe at the producing mill factory gate |
| How well | Meets the declared specification, product specification level, steel grade, dimensional tolerances, weld type, inspection and test acceptance criteria |
| How long or cycle | One production lot at factory-gate acceptance; service life is outside this gate-to-gate product boundary |
| reference_flow_link | The functional unit is realized by exactly 1 kg net mass of accepted reference product; packaging and external functional coatings are excluded unless separately modelled |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Line pipe of a kind used for oil or gas pipelines, welded, of steel `e505f1de-c307-4319-a6b6-371b34e7b1ed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturing route (HFW/ERW, HSAW, or LSAW); steel grade and alloy status; governing line-pipe specification and edition; product specification level; outside diameter; wall thickness; pipe length; weld orientation; heat-treatment condition; end finish; inspection and hydrostatic-test status; coating state; production site and country; production period; net product mass basis |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | accepted factory-gate line pipe | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry mass of accepted pipe. Exclude removable transport packaging and separately modelled external functional coatings from the 1 kg reference amount. |
| `material_mass_normalization` | coil, plate, welding wire, flux, scrap, and internal pipe intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg reference product | Reconcile weighed receipts, issues, returns, inventory change, recovered flux, scrap, and accepted product over the same reporting period before normalization. |
| `electricity_energy_conversion` | alternating-current inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh in raw records and convert to MJ using 1 kWh = 3.6 MJ; disclose voltage level and supplier or grid geography. |
| `gas_volume_conditions` | gaseous natural gas input | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume together with temperature, pressure, and dry/wet reference conditions; do not combine natural gas with another fuel. |
| `water_mass_conversion` | process water for hydrostatic testing | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer weighed or mass-metered water. If volume is metered, document density and reference conditions used for conversion and distinguish gross circulation from make-up water crossing the boundary. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased hot-rolled steel coil for HFW/ERW or HSAW, or purchased steel plate for LSAW, is received at the pipe-mill gate with declared grade, dimensions, supplier, origin, and upstream dataset |
| starting_condition_role | Purchased steel feedstock entering downstream forming and welding; upstream ironmaking, steelmaking, casting, and hot rolling remain in linked upstream datasets |
| product_classification_scope | Welded steel line pipe for oil or natural gas pipelines; classification context does not include seamless, cast, drilling tubular, or structural-pipe products |
| recursive_input_rule | If purchased or transferred welded line pipe of this same category is further finished, record it as a separate input with supplier/transfer dataset and do not recursively reproduce its upstream pipe manufacture |
| upstream_dataset_requirement | Link geographically and technologically representative upstream datasets for purchased coil or plate, electricity, natural gas, process water, welding consumables, and waste treatment; disclose any proxy |
| disclosure | Declare site, period, route, feedstock form, grade, dimensions, heat treatment, end finish, testing, coating state, allocation, internal recycling, scrap destination, water recirculation, and excluded downstream operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_pipe_mill_gate` | foreground pipe manufacture | Include steel preparation, forming, seam welding, applicable post-weld heat treatment, sizing, cooling, cutting, beveling, inspection, marking, and hydrostatic testing through accepted product at the producing mill gate. | `usitc-welded-line-pipe-2014`; `api-spec-5l-47-announcement-2026` |
| `boundary_upstream_links` | purchased products and energy | Keep purchased-input production outside the foreground gate but link representative upstream datasets; prevent double counting between supplier and pipe-mill inventories. | `worldsteel-lci-methodology-2017` |
| `boundary_route_specificity` | HFW/ERW, HSAW, and LSAW | Declare only the applicable feedstock form and welding consumables: coil for HFW/ERW and HSAW, plate for LSAW, and welding wire plus flux only for SAW routes. | `usitc-welded-line-pipe-2014` |
| `boundary_external_coating` | externally applied functional coating | Exclude external corrosion, thermal-insulation, and concrete-weight coating by default; when present in the declared market state, append a separately measured foreground coating process and disclose the changed boundary. | `api-spec-5l-47-announcement-2026` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Feedstock preparation and pipe forming | `required` | Always; use coil only for HFW/ERW or HSAW and plate only for LSAW | Foreground preparation and forming | Per kg formed pipe shell transferred to welding and per 1 kg accepted reference product |
| `welding` | Seam welding and applicable post-weld heat treatment | `required` | Always; SAW wire and flux apply only to HSAW or LSAW, and natural gas applies only when consumed on site for heat treatment | Foreground joining and thermal treatment | Per kg unfinished welded pipe transferred to finishing and per 1 kg accepted reference product |
| `finishing_testing` | Sizing, cutting, end finishing, inspection, marking, and hydrostatic testing | `required` | Always; record hydrotest make-up water and wastewater only when they cross the site boundary | Foreground finishing and quality acceptance | Per 1 kg accepted welded line pipe at factory gate |

### Process: Feedstock preparation and pipe forming (`forming`)

#### Inputs

##### Product flows

###### Hot-rolled steel coil for coil-fed routes (`forming_coil_input`)

Record purchased flat-rolled hot-rolled coil issued to HFW/ERW or HSAW forming. The row is not applicable to an LSAW plate route.

- Selected flow: steel hot rolled coil `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net coil mass issued to conforming production, adjusted for coil returns and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_issues`
- Sources: `usitc-welded-line-pipe-2014`

###### Hot-rolled steel plate for LSAW (`forming_plate_input`)

Record each purchased cut-to-length hot-rolled steel plate issued to LSAW forming. Keep UUID empty pending an exact public flow identity.

- Selected flow: Hot-rolled steel plate for LSAW line-pipe manufacture
- Flow property / unit: Mass / kg
- Amount rule: Net plate mass issued to conforming LSAW production, adjusted for returns and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_issues`
- Sources: `usitc-welded-line-pipe-2014`

###### Forming electricity (`forming_electricity_input`)

Record alternating current metered to decoiling, slitting, edge preparation, presses, and forming rolls; allocate a shared meter by documented operating or engineering evidence.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or defensibly allocated electricity used by forming equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed unwelded pipe shell (`formed_shell_output`)

Record the weighed or mass-balanced internal transfer of the formed, unwelded shell to welding. This internal intermediate requires a foreground-specific flow.

- Selected flow: Formed unwelded steel pipe shell
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from forming to welding after edge preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_transfers`
- Sources: `usitc-welded-line-pipe-2014`

##### Waste flows

###### Forming steel scrap (`forming_scrap_output`)

Record edge trim, slitting loss, cropping, and rejected formed steel leaving the process as post-industrial scrap; exclude metal still carried in the formed shell.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed forming scrap leaving the process, net of same-period returns to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_waste`
- Sources: `usitc-welded-line-pipe-2014`

##### Elementary flows

### Process: Seam welding and applicable post-weld heat treatment (`welding`)

#### Inputs

##### Product flows

###### Formed unwelded pipe shell input (`formed_shell_input`)

Record the same internal intermediate transferred from forming; match its reporting-period mass and flow identity to `formed_shell_output`.

- Selected flow: Formed unwelded steel pipe shell
- Flow property / unit: Mass / kg
- Amount rule: Mass received by welding from forming
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_transfers`
- Sources: `usitc-welded-line-pipe-2014`

###### Welding electricity (`welding_electricity_input`)

Record alternating current used by HFW/ERW or submerged-arc welding equipment and associated weld-line auxiliaries.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or defensibly allocated welding-line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `usitc-welded-line-pipe-2014`; `worldsteel-lci-methodology-2017`

###### Natural gas for post-weld heat treatment (`postweld_natural_gas_input`)

Record gaseous natural gas only when it crosses the site boundary and is burned for seam or full-body post-weld heat treatment; otherwise mark the row not applicable.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas attributable to applicable post-weld heat treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_fuel`
- Sources: `usitc-welded-line-pipe-2014`; `worldsteel-lci-methodology-2017`

###### Submerged-arc welding wire (`saw_welding_wire_input`)

Record the declared solid or otherwise specified welding wire consumed only for HSAW or LSAW; do not substitute flux-cored wire unless it is the actual qualified consumable.

- Selected flow: Submerged-arc steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Issued welding-wire mass less measured returns over the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_issues`
- Sources: `usitc-welded-line-pipe-2014`

###### Submerged-arc welding flux (`saw_welding_flux_input`)

Record granular submerged-arc welding flux consumed only for HSAW or LSAW. Gross issue, recovered flux, return, and disposal must be reconciled.

- Selected flow: Granular submerged-arc welding flux
- Flow property / unit: Mass / kg
- Amount rule: Fresh flux issued plus opening inventory minus recovered reusable flux, closing inventory, and returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts_issues`
- Sources: `usitc-welded-line-pipe-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfinished welded line pipe (`unfinished_pipe_output`)

Record welded pipe transferred to sizing and finishing before final inspection and hydrostatic-test acceptance. This is not the factory-gate reference product.

- Selected flow: Unfinished welded steel line pipe before finishing
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from welding to finishing after weld treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_transfers`
- Sources: `usitc-welded-line-pipe-2014`

##### Waste flows

###### Welding steel scrap (`welding_scrap_output`)

Record weld flash, cut-out repairs, and rejected welded steel leaving the welding process as post-industrial scrap.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed welding scrap leaving the process, net of same-period returns to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_waste`
- Sources: `usitc-welded-line-pipe-2014`

###### Spent submerged-arc welding flux (`spent_flux_output`)

Record only spent granular flux that can no longer be returned to the SAW operation and crosses the waste boundary. Keep it separate from welding fumes and steel scrap.

- Selected flow: Spent submerged-arc welding flux
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent flux sent to the declared treatment or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_waste`
- Sources: `usitc-welded-line-pipe-2014`

##### Elementary flows

###### Direct fossil carbon dioxide from heat treatment (`direct_fossil_co2_output`)

Record direct fossil carbon dioxide released from on-site natural-gas combustion for applicable heat treatment. Exclude upstream fuel and electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site-reported direct fossil CO2 attributable to the recorded natural-gas combustion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `worldsteel-lci-methodology-2017`

### Process: Sizing, end finishing, inspection, and hydrostatic testing (`finishing_testing`)

#### Inputs

##### Product flows

###### Unfinished welded line pipe input (`unfinished_pipe_input`)

Record the internal intermediate received from welding and match its mass and identity to `unfinished_pipe_output`.

- Selected flow: Unfinished welded steel line pipe before finishing
- Flow property / unit: Mass / kg
- Amount rule: Mass received by finishing from welding
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_transfers`
- Sources: `usitc-welded-line-pipe-2014`

###### Finishing and testing electricity (`finishing_electricity_input`)

Record alternating current used by sizing, cooling auxiliaries, cutting, beveling, inspection, marking, handling, and hydrostatic-test equipment.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or defensibly allocated finishing and testing electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `usitc-welded-line-pipe-2014`; `worldsteel-lci-methodology-2017`

###### Hydrostatic-test make-up water (`hydrotest_water_input`)

Record process water entering the site or inventory boundary to replace losses from hydrostatic testing. Do not report recirculated water repeatedly as new input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered hydrostatic-test make-up water crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrotest_water`
- Sources: `usitc-welded-line-pipe-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted welded steel line pipe (`reference_line_pipe_output`)

Record only pipe accepted after required sizing, finishing, inspection, marking, and hydrostatic testing. This row carries the reference-product identity.

- Selected flow: Line pipe of a kind used for oil or gas pipelines, welded, of steel `e505f1de-c307-4319-a6b6-371b34e7b1ed`
- Flow property / unit: Mass / kg
- Amount rule: Net dry mass of accepted factory-gate pipe; reference output equals 1 kg after normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_acceptance`
- Sources: `un-cpc-3-structure-2025`; `iso-3183-2019`; `api-spec-5l-47-announcement-2026`

##### Waste flows

###### Finishing steel scrap (`finishing_scrap_output`)

Record end crops, beveling swarf collected as steel, destructive-test pieces, and rejected finished pipe leaving the process as post-industrial scrap.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed finishing scrap leaving the process, net of same-period returns to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_waste`
- Sources: `usitc-welded-line-pipe-2014`

###### Hydrostatic-test wastewater (`hydrotest_wastewater_output`)

Record hydrostatic-test water discharged from the foreground boundary to on-site or off-site treatment. Identify water quality and destination; do not combine it with unrelated wastewater.

- Selected flow: Hydrostatic-test wastewater from welded line-pipe finishing
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-converted hydrostatic-test wastewater sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded steel line pipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrotest_water`
- Sources: `usitc-welded-line-pipe-2014`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | mixed pipe products and routes | Subdivide HFW/ERW, HSAW, and LSAW lines and separately metered operations before allocation wherever records permit. | `worldsteel-lci-methodology-2017` |
| `allocation_shared_operations` | shared forming, finishing, utilities, and treatment | Allocate shared burdens by a documented causal driver such as equipment electricity, operating time, processed mass, water volume, or waste-treatment mass; use accepted-product mass only when no more causal measurement exists. | `worldsteel-lci-methodology-2017` |
| `allocation_scrap` | post-industrial steel scrap | Report scrap mass, quality, destination, internal return, and any external recovery separately. Do not assign an avoided-primary-steel credit inside this gate-to-gate dataset unless the downstream study explicitly selects and documents a consistent recycling method. | `worldsteel-lci-methodology-2017` |
| `allocation_recovered_flux` | recovered submerged-arc welding flux | Treat flux returned to the same SAW operation as an internal loop, not a co-product. Record only fresh make-up flux as boundary input and only non-returnable spent flux as waste output. | `usitc-welded-line-pipe-2014` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts_issues` | forming; welding | coil, plate, welding wire, and welding flux | purchase, weighbridge, warehouse issue, return, and inventory records | material_id; specification; grade; supplier; origin; opening_stock; receipts; issues; returns; recovered_flux; closing_stock; mass | Reconcile traceable material lots to route and production lot | kg | Each receipt and issue; monthly reconciliation | At least 12 consecutive representative months or the full shorter production campaign | All foreground mill operations producing the declared product | Sum net consumption by material and route, then divide by accepted reference-product mass | Calibrated scales; supplier certificates; warehouse ledger; lot traceability; reconciliation sign-off |
| `cp_process_energy` | forming; welding; finishing_testing | alternating current | interval meter, submeter, utility invoice, and equipment allocation records | meter_id; voltage_level; start_reading; end_reading; kWh; production_line; route; operating_hours; allocation_driver | Read dedicated meters; allocate shared electricity with documented causal driver | kWh | Meter interval and monthly close | Same period as product output | All relevant meters at the foreground site | Convert net kWh to MJ and normalize by accepted product mass | Meter calibration; invoice reconciliation; allocation worksheet; grid or supplier identity |
| `cp_process_fuel` | welding | natural gas for heat treatment | gas meter, invoice, and heat-treatment campaign log | meter_id; volume; temperature; pressure; moisture_basis; route; furnace_id; campaign; allocation_driver | Meter fuel at furnace or allocate a reconciled site meter using heat-treatment records | m3 | Each campaign and monthly close | Same period as applicable heat-treated production | On-site heat-treatment equipment | Normalize reference-condition volume by accepted applicable product mass | Meter calibration; invoice reconciliation; reference-condition calculation; campaign log |
| `cp_internal_transfers` | forming; welding; finishing_testing | formed shell and unfinished welded pipe | transfer weight, line counter, dimensional record, and mass-balance worksheet | transfer_id; route; count; length; outside_diameter; wall_thickness; measured_mass; calculated_mass; rejects | Weigh transfer where practical; otherwise calculate from verified dimensions and density and reconcile to feedstock, scrap, and output | kg | Each lot or shift | Same period as product output | Transfers inside the foreground pipe mill | Match output and input of each internal intermediate; normalize by accepted product mass | Transfer record; dimensional inspection; scale calibration; signed mass-balance reconciliation |
| `cp_scrap_and_waste` | forming; welding; finishing_testing | steel scrap and spent flux | scrap-bin weights, waste manifest, recovered-flux ledger, and treatment record | waste_id; process_origin; material; gross_mass; tare; net_mass; destination; internal_return; treatment; hazardous_status | Weigh each dispatched waste lot and reconcile internal returns separately | kg | Each dispatch; monthly close | Same period as product output | All foreground waste collection points | Sum net waste by atomic stream and process, then normalize by accepted product mass | Calibrated scale; waste manifest; consignee receipt; recovered-material ledger |
| `cp_hydrotest_water` | finishing_testing | process-water make-up and hydrotest wastewater | inlet and discharge meters, tank balance, recirculation log, and treatment record | inlet_volume; discharge_volume; opening_storage; closing_storage; recirculated_volume; density; water_quality; destination | Meter boundary make-up and discharge; use storage balance only when meters are unavailable | kg or m3 | Each test campaign and monthly close | Same period as product output | Hydrostatic-test system and declared treatment boundary | Convert boundary volumes to mass with documented density; exclude internal recirculation from repeated input | Meter calibration; tank calibration; water analysis; discharge or treatment record |
| `cp_direct_emissions` | welding | direct fossil carbon dioxide | continuous monitor, verified emissions report, or site combustion inventory | source_id; fuel_id; monitored_CO2; reporting_method; period; allocation_driver | Use site-reported direct emissions and allocate only among products sharing the combustion source | kg | Continuous or reporting-period total | Same period as fuel and product output | On-site heat-treatment combustion sources | Sum direct fossil CO2 and normalize by applicable accepted-product mass | Monitor QA/QC or verified emissions inventory; fuel reconciliation; allocation worksheet |
| `cp_product_acceptance` | finishing_testing | accepted welded line pipe | production, inspection, hydrotest, marking, and dispatch records | lot_id; route; specification; edition; product_specification_level; grade; dimensions; heat_treatment; end_finish; coating_state; accepted_mass; rejected_mass; test_status | Weigh accepted lots and reconcile to inspection and hydrostatic-test acceptance | kg | Each lot | Same period as all inputs and outputs | All declared product lines at the foreground site | Sum only accepted net dry product mass and set normalized output to 1 kg | Scale calibration; material certificate; inspection and test record; lot traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = reporting-period atomic-flow amount / reporting-period accepted reference-product mass | atomic-flow amount; accepted product mass | amount per 1 kg accepted welded steel line pipe | `worldsteel-lci-methodology-2017` |
| `calc_material_reconciliation` | coil, plate, wire, and flux | net consumed = opening stock + receipts - returns - verified reusable recovery - closing stock | stock and transaction records | net material consumption by atomic material and route | `worldsteel-lci-methodology-2017` |
| `calc_internal_mass_balance` | formed shell and unfinished welded pipe | transferred mass must be identical on the output and input sides of each internal transfer; investigate any difference before publication | transfer weights or dimensional mass; recorded rejects | reconciled internal-intermediate mass | `usitc-welded-line-pipe-2014` |
| `calc_water_boundary` | hydrostatic-test water | net water input = boundary make-up; wastewater output = boundary discharge; recirculated water is an internal loop and is reported only as supporting information | inlet, discharge, storage, recirculation, and density records | process-water input and hydrotest-wastewater output | `usitc-welded-line-pipe-2014` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | reference product and steel feedstock | Trace every production lot to route, governing specification and edition, product specification level, grade, dimensions, weld orientation, heat treatment, inspection status, and supplier steel lot. | Mill test certificate; production traveler; inspection and hydrotest record; supplier certificate |
| `dq_temporal_representativeness` | all foreground records | Use at least 12 consecutive representative months unless production is campaign-based or the site operated for a shorter period; disclose the period, shutdowns, abnormal operation, and exclusions. | Dated ledgers, meter exports, production calendar, and exception log |
| `dq_geographic_technology` | upstream datasets | Select supplier- and region-representative upstream steel and country/region-representative electricity and fuel datasets; justify every proxy and disclose HFW/ERW, HSAW, or LSAW route. | Supplier origin; dataset metadata; grid or contract record; route declaration |
| `dq_completeness_reconciliation` | mass, energy, water, waste, and direct emissions | Reconcile each collection protocol to source ledgers; explain missing meters, estimated allocations, stock differences, unmeasured releases, and any flow excluded from the reported inventory. | Signed reconciliation worksheets; meter coverage list; waste manifests; emissions inventory |
| `dq_no_cartesian_variants` | route and product variants | Model actual production lots and route-specific atomic flows. Do not expand combinations of grade, diameter, wall thickness, coating, and route into synthetic inventory rows. | Lot-weighted aggregation file and variant-to-lot mapping |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Confirm the reference product UUID, 1 kg net dry mass, welded route, oil-or-gas pipeline use, specification, grade, dimensions, heat treatment, end finish, test status, and coating state. | `un-cpc-3-structure-2025`; `iso-3183-2019`; `api-spec-5l-47-announcement-2026` |
| `validation_route_inputs` | route-specific inventory | Require coil and no plate for HFW/ERW or HSAW, plate and no coil for LSAW, and welding wire plus flux only for SAW routes; any exception requires documented process evidence. | `usitc-welded-line-pipe-2014` |
| `validation_internal_transfers` | internal product flows | Require paired internal output and input rows for formed shell and unfinished welded pipe to have identical reporting-period mass and identity. | `usitc-welded-line-pipe-2014` |
| `validation_mass_balance` | foreground mill | Reconcile steel feedstock mass to accepted product, all separately recorded steel scrap, stock change, and documented unmeasured loss; investigate unresolved imbalance before release. | `worldsteel-lci-methodology-2017` |
| `validation_energy_water_emissions` | utilities and direct releases | Reconcile electricity and natural gas to meters or invoices, hydrotest make-up and discharge to the water balance, and direct fossil CO2 to the site emissions or combustion record without adding upstream electricity or fuel emissions. | `worldsteel-lci-methodology-2017` |
| `validation_boundary` | dataset completeness | Reject silent inclusion of external functional coating, pipeline installation, use, or end-of-life and reject silent omission of applicable heat treatment, inspection, hydrostatic testing, scrap, or wastewater. | `iso-3183-2019`; `api-spec-5l-47-announcement-2026` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset for welded steel line pipe at the producing mill factory gate |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for pipeline products and systems when product, route, geography, time, steel grade, dimensions, specification, and coating state are compatible |
| allowed_use | Product carbon-footprint, EPD, procurement, design, and life-cycle studies that link compatible upstream steel and energy datasets and append downstream coating, transport, construction, use, and end-of-life as required |
| excluded_use | Direct comparison of incompatible pipe routes or grades; representation of seamless, cast, drilling tubular, structural pipe, coated pipe without appended coating data, pipeline installation, service performance, or end-of-life |
| required_metadata | PCR id and version; site and geography; reporting period; HFW/ERW, HSAW, or LSAW route; specification and edition; product specification level; grade; diameter; wall thickness; length; heat treatment; end finish; inspection and hydrotest status; coating state; reference mass; upstream dataset identities; allocation rules |
| required_quality_disclosure | Primary-data share and meter coverage; route and product weighting; supplier and upstream dataset representativeness; material, energy, water, waste, and emissions reconciliation; proxy datasets; exclusions; internal recycling; uncertainty and unresolved UUID or range evidence needs |
| update_trigger | Recalculate when route, feedstock form or supplier steel dataset, product mix, specification, furnace or welding technology, electricity or fuel supply, hydrotest-water system, allocation method, site geography, or representative production period materially changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 41285 classification identity and distinction from adjacent pipe categories |
| `iso-3183-2019` | `standard` | ISO 3183:2019, Petroleum and natural gas industries — Steel pipe for pipeline transportation systems, https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/07/66/76676.html?browse=ics | Product application boundary; seamless and welded scope; cast-pipe exclusion; specification qualifier |
| `api-spec-5l-47-announcement-2026` | `standard` | American Petroleum Institute, API Announces 47th Edition of Foundational Line Pipe Standard, 2 June 2026, https://www.api.org/products-and-services/standards/important-standards-announcements/api-announces-47th-edition-of-foundational-line-pipe-standard-5l | Manufacturing, inspection, testing, marking, traceability, HFW quality, and product-qualification requirements |
| `usitc-welded-line-pipe-2014` | `official_guidance` | U.S. International Trade Commission, Certain Welded Line Pipe from Korea and Turkey, Investigation Nos. 701-TA-524-525 and 731-TA-1260-1261 (Preliminary), 2014, https://www.govinfo.gov/content/pkg/GOVPUB-ITC1-PURL-gpo54228/pdf/GOVPUB-ITC1-PURL-gpo54228.pdf | ERW, HSAW, and LSAW process decomposition; coil-versus-plate feedstock; welding, heat treatment, sizing, cutting, inspection, and hydrostatic testing |
| `worldsteel-lci-methodology-2017` | `method_factor` | World Steel Association, Life Cycle Inventory Methodology Report, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 | Declared mass unit, boundary transparency, upstream dataset representativeness, allocation, data collection, and prevention of double counting |
