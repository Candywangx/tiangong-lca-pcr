---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-and-pipes-of-non-circular-cross-section-and-hollow-profiles-seamless-of-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tubes and pipes, of non-circular cross-section and hollow profiles, seamless, of steel

## 1. Scope and Applicability

This PCR covers factory-gate production of steel tubes, pipes, and hollow profiles whose finished cross-section is non-circular and whose wall is made without a longitudinal or helical weld. It applies to products formed from a solid steel billet or bar by piercing or extrusion followed by elongation, sizing or shaping, and finishing. The foreground data package shall identify the alloy family and steel grade; the PCR does not silently substitute a non-alloy route for alloy-steel production.

Circular seamless pipe, welded pipe or hollow section, centrifugally cast pipe, and cast-iron pipe are outside the product boundary. Downstream component fabrication, installation, use, repair, and end-of-life are excluded. Coating, galvanizing, machining, or other surface treatment is included only when performed before the declared factory gate and shall then be represented by its own process and atomic exchanges rather than absorbed into the two core process inventories below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-and-pipes-of-non-circular-cross-section-and-hollow-profiles-seamless-of-steel |
| classification_refs | CPC 3.0: 41284, exact classification identity |
| covered_products | Seamless steel tubes, pipes, and hollow profiles with square, rectangular, oval, polygonal, or another non-circular cross-section, in the saleable state declared at the factory gate |
| excluded_products | Circular seamless pipe; welded pipe or hollow section; centrifugally cast steel pipe; cast-iron pipe; downstream installed components and fabricated assemblies |
| representative_product | A finished seamless rectangular or other non-circular steel hollow profile meeting its declared grade, dimensions, tolerances, heat-treatment condition, and surface condition |
| production_route | Solid steel billet or bar receipt; reheating; piercing or extrusion; elongation; non-circular sizing or shaping; cooling; route-specific heat treatment; straightening, cutting, inspection, marking, and dispatch |
| market_state | Saleable finished product at the manufacturing-site gate, with packaging inclusion and any applied coating or surface treatment explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a seamless steel tube, pipe, or hollow profile with a declared non-circular cross-section and declared technical specification |
| How much | 1 kg of saleable product at the manufacturing-site gate |
| How well | Conforming to the declared steel grade, cross-sectional geometry, dimensions and tolerances, heat-treatment condition, surface condition, and applicable product specification |
| How long or cycle | One production output at the factory gate; no use-stage service life is represented |
| reference_flow_link | The functional unit is realized by the single reference product flow defined below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tubes and pipes, of non-circular cross-section and hollow profiles, seamless, of steel `13a951fc-19a6-4ff3-98a7-9cb44ed2db2f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel alloy family and grade; non-circular section geometry; outside dimensions and wall thickness; dimensional tolerance or product standard; heat-treatment condition; surface condition and coating status; production technology; factory-gate location; production year; packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product and all mass-balance rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report dry or as-delivered mass consistently, declare which basis is used for scale and scrap, and normalize saleable product output to exactly 1 kg. |
| `electricity_energy_basis` | alternating-current inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity unit and conversion factor in the calculation record; convert to MJ without changing the selected electricity identity or combining electricity with fuels. |
| `gas_volume_basis` | gaseous natural-gas inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record meter reference conditions, composition or supplier specification, and the conversion used when invoices or meters use another volume or energy basis. |

## 5. System Boundary

The foreground boundary starts with received steel billet or solid bar and ends with conforming, saleable non-circular seamless steel tube or hollow profile at the manufacturing-site gate. It includes internal handling, billet preparation, reheating, piercing or extrusion, elongation, sizing or shaping, cooling, route-specific heat treatment, straightening, cutting, inspection, marking, and attributable on-site ancillary services. Upstream production and transport of billet, electricity, fuel, water, and other separately added consumables shall be linked as background datasets. Direct emissions, wastes, and recovered materials crossing the foreground boundary shall be recorded as separate atomic exchanges.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Steel billet or solid bar received at the seamless hollow-profile manufacturing site, with grade, mass, moisture or surface basis where relevant, supplier, origin, and transport handover declared |
| starting_condition_role | Upstream product input to the first foreground hot-forming process |
| product_classification_scope | Seamless steel tubes, pipes, and hollow profiles with a finished non-circular cross-section; circular, welded, centrifugally cast, and cast-iron products are outside scope |
| recursive_input_rule | If a purchased input is already a seamless non-circular steel tube or hollow profile in this same product category, model it once as an upstream product with its own dataset and begin foreground collection at the first transformation performed by the reporting site; do not reproduce the supplier's earlier operations. |
| upstream_dataset_requirement | Use geographically and technologically representative upstream datasets for billet or bar, alternating current, natural gas, process water, and every separately added consumable; preserve supplier-specific data when verified. |
| disclosure | Declare billet or bar state, steelmaking route where known, alloy family and grade, piercing or extrusion technology, shaping sequence, heat treatment, surface treatment, internal recovery, packaging inclusion, geography, reference year, and the exact factory gate. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | Include operations from received billet or solid bar through the saleable finished product at the manufacturing-site gate, plus attributable on-site ancillary services; exclude downstream installation, use, and end-of-life. | `worldsteel-lci-methodology-2017`; `worldsteel-lci-study-2021` |
| `boundary_atomic_completeness` | all_foreground_processes | Record every material, energy, waste, recovered-material, and direct elementary exchange that crosses a foreground process boundary as a separate atomic row; explain any verified exclusion. | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `boundary_no_double_count` | upstream_and_internal_recovery | Do not double count supplier operations, internally recirculated intermediates, recovered scale or scrap, wastewater treatment, or recycling credits across foreground and upstream datasets. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hot_forming_and_sizing` | Billet reheating, piercing or extrusion, elongation, and non-circular sizing | `required` | Include the site's actual sequence from received solid feedstock to a hot-formed seamless non-circular hollow profile. | Foreground hot forming | Per kg of hot-formed profile transferred to finishing |
| `finishing_and_dispatch` | Cooling, heat treatment, straightening, cutting, inspection, marking, and dispatch | `required` | Include all finishing operations performed before the declared factory gate; mark direct-fired heat rows not applicable only when no such heat is used. | Foreground finishing and reference-product production | Per 1 kg saleable reference product |

### Process: Billet reheating, piercing or extrusion, elongation, and non-circular sizing (`hot_forming_and_sizing`)

#### Inputs

##### Product flows

###### Declared-grade solid steel feedstock (`hf_steel_billet`)

Record the mass of the specific steel billet or solid bar charged to the seamless-forming line. The dataset shall state the alloy family, grade, geometry, supplier state, and whether any surface conditioning occurred upstream.

- Selected flow: Steel billet of the declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass charged to the process, reconciled to production and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of hot-formed seamless non-circular hollow-profile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_forming_material_balance`
- Sources: `worldsteel-lci-study-2021`; `eu-jrc-fmp-bref-2022`

###### Natural gas for billet reheating (`hf_natural_gas`)

Record gaseous natural gas delivered to reheating or direct-fired hot-forming equipment. If no natural gas is used, document non-applicability and add each actual fuel as its own atomic exchange.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured or invoiced gas volume attributable to hot forming, with meter reference conditions retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of hot-formed seamless non-circular hollow-profile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_forming_energy`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### Alternating-current electricity for hot forming (`hf_electricity`)

Record electricity consumed by billet handling, piercing or extrusion, elongation, sizing, pumps, fans, and allocated ancillary equipment without combining it with fuel.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to hot forming, converted to MJ using a disclosed conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of hot-formed seamless non-circular hollow-profile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_forming_energy`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### Process water for hot forming (`hf_process_water`)

Record make-up process water supplied for descaling, cooling, and other hot-forming uses after subtracting documented closed-loop recirculation from gross circulation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water crossing the process boundary, with any density conversion documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of hot-formed seamless non-circular hollow-profile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_forming_water`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot-formed seamless non-circular hollow profile transferred to finishing (`hf_hot_formed_profile_output`)

Record the measured mass transferred from hot forming to finishing before final heat treatment, straightening, cutting, inspection, and dispatch. This is a site-specific internal intermediate, not the saleable reference product.

- Selected flow: Hot-formed seamless non-circular steel hollow profile
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass accepted by the finishing process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of hot-formed seamless non-circular hollow-profile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_forming_material_balance`
- Sources: `worldsteel-lci-study-2021`

##### Waste flows

###### Mill scale removed during hot forming (`hf_mill_scale`)

Record iron-oxide scale separated from the product or water circuit and crossing the process boundary. Declare moisture, oil content, and recovery or disposal destination.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of mill scale leaving hot forming on the declared wet or dry basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of hot-formed seamless non-circular hollow-profile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_forming_material_balance`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### Post-industrial steel crop ends and offcuts from hot forming (`hf_steel_scrap`)

Record steel crop ends and rejected pieces generated before finishing as post-industrial steel scrap. Keep internally remelted material and off-site scrap transfers distinguishable in the destination record.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass generated by hot forming and leaving this process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of hot-formed seamless non-circular hollow-profile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_forming_material_balance`
- Sources: `worldsteel-lci-methodology-2017`

##### Elementary flows

###### Fossil carbon dioxide from hot-forming combustion (`hf_fossil_co2`)

Record fossil carbon dioxide emitted directly to air from fuel combusted in hot-forming equipment. Exclude upstream electricity emissions and retain the fuel-carbon calculation or stack-measurement evidence.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct stack mass or calculated mass from metered fossil fuel and documented carbon balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of hot-formed seamless non-circular hollow-profile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_forming_emissions`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

### Process: Cooling, heat treatment, straightening, cutting, inspection, marking, and dispatch (`finishing_and_dispatch`)

#### Inputs

##### Product flows

###### Hot-formed seamless non-circular hollow profile from hot forming (`fd_hot_formed_profile_input`)

Record the measured mass of the internal hot-formed profile accepted into finishing. Its identity and amount shall reconcile with `hf_hot_formed_profile_output` after declared storage changes.

- Selected flow: Hot-formed seamless non-circular steel hollow profile
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass accepted into finishing, adjusted only for documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_balance`
- Sources: `worldsteel-lci-study-2021`

###### Alternating-current electricity for finishing (`fd_electricity`)

Record electricity consumed by cooling systems, straightening, cutting, non-destructive testing, pumps, marking, and allocated ancillary equipment without combining it with heat or fuel.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to finishing, converted to MJ using a disclosed conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### Natural gas for direct-fired finishing heat (`fd_natural_gas`)

Record gaseous natural gas only when direct-fired heat treatment or another finishing furnace is within the declared route. Document non-applicability when the route uses no natural gas and add each different actual fuel as its own exchange.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured or invoiced gas volume attributable to finishing heat, with meter reference conditions retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### Process water for cooling and product testing (`fd_process_water`)

Record make-up process water used in finishing cooling, hydrostatic testing, or washing when it crosses the finishing boundary. Do not report gross closed-loop circulation as make-up water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water attributable to finishing, with use and density conversion documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_water`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable seamless non-circular steel tube or hollow profile (`fd_reference_product`)

Record only conforming saleable product at the declared factory gate. The amount is the reference flow and excludes rejected pieces, crop ends, and separately transferred scrap.

- Selected flow: Tubes and pipes, of non-circular cross-section and hollow profiles, seamless, of steel `13a951fc-19a6-4ff3-98a7-9cb44ed2db2f`
- Flow property / unit: Mass / kg
- Amount rule: measured saleable product mass normalized to exactly 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_balance`
- Sources: `un-cpc-3-0-structure-2025`; `worldsteel-lci-study-2021`

##### Waste flows

###### Post-industrial steel offcuts and rejected pieces from finishing (`fd_steel_scrap`)

Record cut ends, test pieces, and rejected finished pieces leaving finishing as post-industrial steel scrap. Declare grade, contamination, internal recirculation, and off-site recovery destination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured finishing scrap mass leaving the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_balance`
- Sources: `worldsteel-lci-methodology-2017`

##### Elementary flows

###### Fossil carbon dioxide from direct-fired finishing heat (`fd_fossil_co2`)

Record fossil carbon dioxide emitted directly to air from natural gas or another fossil fuel combusted in finishing. Mark non-applicable when no direct fossil fuel is used; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct stack mass or calculated mass from metered fossil fuel and documented carbon balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_emissions`
- Sources: `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | foreground_processes | Avoid allocation by metering and subdividing hot forming, finishing, ancillary energy, water treatment, and recovery operations wherever technically possible. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recovery` | internal_scale_scrap_and_intermediates | Record internal transfers as matched outputs and inputs and assign no external credit; only the net quantity crossing the site boundary may receive an upstream treatment or recovery dataset. | `worldsteel-lci-methodology-2017` |
| `allocation_exported_coproduct` | exported_material_with_market_function | When scale, scrap, or another material leaves the site with a documented market function, prefer system expansion using a functionally equivalent displaced product and disclose the substitution; if the applicable programme forbids system expansion, use a justified physical relation and report sensitivity. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hot_forming_material_balance` | `hot_forming_and_sizing` | billet input, intermediate output, mill scale, and steel scrap | weighbridge, scale, production, and stock records | timestamp; batch; grade; input mass; intermediate mass; scale mass and basis; scrap mass; stock change; destination | Calibrated weighing and batch reconciliation | kg | Per batch with monthly reconciliation | At least one representative production year | Reporting hot-forming line | Sum accepted records, adjust for verified stock change, then divide by hot-formed output | calibration record; batch reconciliation; grade traceability; destination record |
| `cp_hot_forming_energy` | `hot_forming_and_sizing` | natural gas and alternating current | fuel meter, electricity meter, and production records | meter period; opening and closing readings; reference conditions; electricity unit; conversion factor; allocation basis; output mass | Calibrated submeter or documented allocation from site meter | m3 and MJ | Meter interval with monthly reconciliation | Same representative year as production | Reporting line and attributable shared equipment | Subtract non-production use, allocate documented shared use, and divide each carrier separately by hot-formed output | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_hot_forming_water` | `hot_forming_and_sizing` | process-water make-up | water meter and recirculation-system records | make-up volume or mass; density; gross circulation; purge; process assignment; output mass | Calibrated make-up meter; do not use gross closed-loop circulation | kg | Meter interval with monthly reconciliation | Same representative year as production | Hot-forming water circuits | Convert volume with documented density when needed, sum make-up only, and divide by hot-formed output | meter calibration; water balance; circuit diagram |
| `cp_hot_forming_emissions` | `hot_forming_and_sizing` | direct fossil carbon dioxide | stack monitoring or fuel-carbon calculation record | stack result or fuel amount; carbon content; oxidation factor; period; equipment; output mass | Verified stack measurement or documented carbon balance from metered fossil fuel | kg | Monitoring interval or fuel-accounting period | Same representative year as production | Direct-fired hot-forming sources | Sum direct fossil carbon dioxide only and divide by hot-formed output | monitoring report; fuel certificate; calculation worksheet |
| `cp_finishing_material_balance` | `finishing_and_dispatch` | intermediate input, saleable product, and steel scrap | production, scale, inspection, and stock records | timestamp; batch; grade; intermediate mass; saleable mass; scrap mass; stock change; disposition | Calibrated weighing and batch reconciliation | kg | Per batch with monthly reconciliation | At least one representative production year | Reporting finishing line | Reconcile input, saleable product, scrap, and stock change; normalize to 1 kg saleable product | calibration record; inspection release; reconciliation; grade traceability |
| `cp_finishing_energy` | `finishing_and_dispatch` | alternating current and route-specific natural gas | fuel meter, electricity meter, furnace log, and production records | meter period; readings; reference conditions; heat-treatment route; electricity unit; conversion factor; output mass | Calibrated submeter or documented allocation from site meter | m3 and MJ | Meter interval with monthly reconciliation | Same representative year as production | Finishing line and attributable shared equipment | Separate electricity and gas; mark gas not applicable only with route evidence; divide each carrier by saleable output | meter calibration; invoice reconciliation; furnace log; allocation worksheet |
| `cp_finishing_water` | `finishing_and_dispatch` | process-water make-up | water meter, test-bay, and recirculation records | make-up volume or mass; density; use; gross circulation; purge; output mass | Calibrated make-up meter assigned to cooling, washing, or testing | kg | Meter interval with monthly reconciliation | Same representative year as production | Finishing and test-water circuits | Sum boundary-crossing make-up only and divide by saleable output | meter calibration; water balance; test records |
| `cp_finishing_emissions` | `finishing_and_dispatch` | direct fossil carbon dioxide | stack monitoring or fuel-carbon calculation record | stack result or fuel amount; carbon content; oxidation factor; period; equipment; output mass | Verified stack measurement or documented carbon balance from metered fossil fuel | kg | Monitoring interval or fuel-accounting period | Same representative year as production | Direct-fired finishing sources | Sum direct fossil carbon dioxide only; mark not applicable when no direct fossil fuel is used | monitoring report; fuel certificate; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_process_rows` | every inventory row | Normalized amount = verified period or batch exchange divided by the matching process output; final-process rows are then expressed per 1 kg saleable product. | exchange record; process output; stock change; conversion factor where applicable | amount in the row's declared unit per process output or reference flow | `worldsteel-lci-methodology-2017`; `worldsteel-lci-study-2021` |
| `calc_intermediate_reconciliation` | `hf_hot_formed_profile_output`; `fd_hot_formed_profile_input` | Finishing input = hot-forming output + opening intermediate stock - closing intermediate stock - separately documented loss before finishing. | both process transfer records; intermediate stock records; documented loss | reconciled intermediate transfer mass | `worldsteel-lci-methodology-2017` |
| `calc_fossil_co2` | `hf_fossil_co2`; `fd_fossil_co2` | Prefer verified stack mass; otherwise calculate direct fossil CO2 from metered fossil fuel, documented carbon content, and oxidation basis, keeping biogenic carbon and upstream emissions separate. | stack measurement or fuel amount; carbon content; oxidation basis; output mass | kg fossil CO2 per process output | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | reference product and steel inputs | Retain grade, alloy family, section geometry, wall thickness, product standard or tolerance, heat treatment, surface state, batch, supplier, and factory-gate traceability. | material certificate; batch traveller; inspection release; product specification |
| `dq_temporal_representativeness` | all foreground records | Use a representative annual period where practicable; records older than five years or shorter periods require a documented representativeness justification. | period coverage report; production schedule; exception justification; `worldsteel-lci-methodology-2017` |
| `dq_meter_and_balance_quality` | material, energy, water, and emissions | Prefer measured data, retain calibration and conversion records, and perform mass, carbon, energy-carrier, and water-balance checks at the process level. | calibration certificates; reconciliation worksheets; balance checks; `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `dq_geography_technology` | foreground and upstream datasets | Match foreground technology and geography; use supplier or regional electricity and other upstream datasets representative of the reporting period and disclose justified proxies. | technology description; site location; supplier records; upstream dataset metadata |
| `dq_complete_atomic_inventory` | all foreground processes | Add every additional actual fuel, consumable, waste, recovered material, and measured or permitted elementary emission as its own atomic exchange; do not replace them with an umbrella row. | purchase ledger; process recipe; waste manifest; permit report; completeness checklist |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Confirm the product is steel, seamless, and non-circular; reject a dataset whose reference output is circular, welded, centrifugally cast, cast iron, or lacks grade and dimensional state. | `un-cpc-3-0-structure-2025`; `worldsteel-lci-study-2021` |
| `validate_mass_reconciliation` | both_foreground_processes | Reconcile billet or intermediate input, saleable or transferred output, scale, scrap, other atomic material outputs, and stock change; investigate and disclose any residual. | `worldsteel-lci-methodology-2017` |
| `validate_energy_separation` | energy_inputs | Require electricity, natural gas, and every other actual carrier to be represented separately with consistent conversions, route applicability, upstream dataset, and no double counting. | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `validate_emission_scope` | direct_emissions | Confirm direct fossil carbon dioxide excludes upstream electricity emissions; add each other reported direct air, water, or soil emission as a separate elementary flow. | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `validate_intermediate_transfer` | internal_intermediate | Confirm `hf_hot_formed_profile_output` and `fd_hot_formed_profile_input` use the same identity, grade, unit, and stock-adjusted amount and are not counted as external production twice. | `worldsteel-lci-methodology-2017` |
| `validate_range_status` | important_inventory_rows | Do not treat a foreground value as source-backed typical or a QA range until at least two independent, boundary-compatible original sources or a reviewed foreground distribution supports it. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a specified seamless non-circular steel tube, pipe, or hollow profile |
| downstream_use | `secondary_dataset`; `background_dataset` after methodological review and release |
| allowed_use | Product carbon-footprint and LCA models that require a mass-based factory-gate steel hollow-profile input and preserve the declared grade, geometry, route, geography, time, allocation, and recycling assumptions |
| excluded_use | Direct comparison of different grades, shapes, factories, or technologies without an equivalent function and harmonized boundaries; use-stage performance; downstream fabrication; undisclosed substitution for circular or welded pipe |
| required_metadata | PCR id and version; reference UUID; steel alloy family and grade; section geometry and dimensions; product standard or tolerance; route; heat treatment; surface state; coating and packaging inclusion; site and geography; reference year; factory gate; allocation; upstream dataset versions; unresolved UUIDs and range status |
| required_quality_disclosure | Data coverage; meter and scale calibration; mass and carbon reconciliation; allocation or substitution; internal recovery; upstream representativeness; exclusions; proxy data; uncertainty; review status |
| update_trigger | Change in steel grade family, billet source or steelmaking route, piercing or extrusion technology, shaping or heat-treatment route, energy or water system, recovery destination, allocation method, factory gate, geography, or representative production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Exact CPC 41284 classification identity and product-boundary terminology |
| `worldsteel-lci-methodology-2017` | `official_guidance` | World Steel Association, Life Cycle Inventory Methodology Report, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-04) | Declared unit, factory-gate boundary, foreground inventory, data collection, quality, validation, recovery, and allocation rules |
| `worldsteel-lci-study-2021` | `dataset` | World Steel Association, Life Cycle Inventory Study Report, 2021 data release, https://worldsteel.org/wp-content/uploads/2021-LCA-Study-Report.pdf (retrieved 2026-09-04) | One-kilogram factory-gate production basis and seamless-pipe process description based on piercing or extrusion and subsequent shaping |
| `eu-jrc-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, doi:10.2760/196475, https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 (retrieved 2026-09-04) | Hot-rolling process boundary; energy, water, emissions, waste, monitoring, and technology disclosure |
