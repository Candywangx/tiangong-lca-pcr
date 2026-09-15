---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43141
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclass 43141

## 1. Scope and Applicability

This PCR covers gate-to-gate production of separately delivered parts made specifically for steam turbines and other vapour turbines. The declared boundary starts with a prepared material input and ends with an inspected, conforming part at the factory gate. The representative product is a machined, heat-treated alloy-steel part made from a prepared forged steel blank.

Complete turbines, parts for hydraulic, gas, wind, aircraft, or internal-combustion machines, generic shafts and bearings, installation, repair, remanufacturing, use, and end-of-life are excluded. Casting, forging, additive manufacture, joining, coating, and heat treatment are included only when performed inside the reporting facility; otherwise their received inputs or services require upstream datasets. Do not average materially different part designs, materials, routes, heat treatments, finishes, or sites.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43141 |
| classification_refs | CPC 3.0: 43153, Parts for the goods of subclass 43141 |
| covered_products | Separately delivered rotors, blades, casings, diaphragms, glands, nozzles, and other parts designed specifically for steam turbines or other vapour turbines and satisfying CPC 43153 |
| excluded_products | Complete turbines; parts for hydraulic, gas, wind, aircraft, or internal-combustion machines; generic shafts, bearings, valves, controls, services, repaired parts, and remanufactured parts |
| representative_product | Machined and heat-treated alloy-steel steam-turbine part supplied as a conforming factory-gate product |
| production_route | Received prepared forged steel blank; machining; route-specific heat treatment; conditional aqueous cleaning, oxy-fuel work, or alkaline cleaning; inspection and release |
| market_state | Finished, conforming, separately delivered part at the factory gate, with protection and packaging boundary declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished part providing its declared mechanical, flow-path, sealing, or structural function in a steam or other vapour turbine |
| How much | 1 kg net mass of conforming part |
| How well | Meets the declared drawing, material grade, dimensional tolerances, heat-treatment condition, surface finish, and acceptance standard |
| How long or cycle | One manufacturing release at the factory gate; service life is outside this gate-to-gate reference |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished steam-turbine part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part type and drawing; turbine application; material grade; received input form and preparation route; manufacturing technology; heat-treatment condition; surface treatment; net and gross mass; acceptance standard; site and geography; reference period; packaging boundary |

When constructing a foreground data package, every required qualifier must be declared in metadata or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-balance flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg net conforming part; report packaging separately. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh using 1 kWh = 3.6 MJ; disclose voltage, geography, meter boundary, and losses. |
| `gas_volume` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature, pressure, and dry/wet basis and use consistent reference conditions. |
| `liquid_mass` | water, sodium hydroxide, cutting fluid, and liquid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report supplied or removed mass and disclose concentration, dilution, and recovered material. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared steel blank or another precisely identified part material received at the facility, with grade, form, and upstream route declared |
| starting_condition_role | Upstream product input to foreground turbine-part manufacture |
| product_classification_scope | Separately delivered parts specifically for steam turbines and other vapour turbines corresponding to CPC 43153 |
| recursive_input_rule | Record a received unfinished part already in this PCR category once as a traceable product input with its upstream dataset; do not recreate it recursively inside the same boundary. |
| upstream_dataset_requirement | Every purchased material, chemical, energy carrier, and outsourced treatment crossing the boundary requires a representative upstream dataset. |
| disclosure | Declare which shaping, machining, heat treatment, joining, coating, cleaning, inspection, packaging, waste treatment, and combustion stages are foreground, purchased, excluded, or not applicable. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground boundary | Include on-site exchanges from receipt of the declared prepared input through release of the conforming part; exclude turbine assembly, installation, use, and end-of-life. | `eu-jrc-sf-bref`; `us-doe-harsh-service-materials-2020` |
| `boundary_route_specific` | manufacturing route | Include forging, casting, additive manufacture, heat treatment, joining, and coating only when they occur in the declared route; do not average mutually exclusive routes. | `eu-jrc-sf-bref`; `us-doe-harsh-service-materials-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_part_manufacture` | Integrated turbine-part machining and finishing | required | Always included; each conditional exchange below is recorded only when its operation occurs | Foreground manufacture, finishing, inspection, and release | 1 kg net conforming part output |

### Process: Integrated turbine-part machining and finishing (`integrated_part_manufacture`)

#### Inputs

##### Product flows

###### Prepared steel machining blank (`prepared_steel_blank`)

The prepared blank crosses the factory boundary as the principal material input for the declared part.
- Selected flow: Prepared steel blank for machining `a511bdc0-a8ac-443f-8dab-fc185d29aec3`
- Flow property / unit: Mass / kg
- Amount rule: measured lot input net of returned unused blank; declare alloy grade, forged state, dimensions, supplier, and upstream route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Purchased electricity (`electricity`)

Purchased electricity supplies the included machines and auxiliaries and is collected for the declared production lot.
- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or causally allocated kWh converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_records`
- Sources:

###### Natural gas for on-site heating (`natural_gas`)

Natural gas crosses the boundary only when included on-site thermal equipment consumes it for the declared route.
- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gas at declared reference conditions; record only when an on-site furnace or burner serves the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_records`
- Sources:

###### Industrial oxygen for oxy-fuel work (`industrial_oxygen`)

Industrial oxygen crosses the boundary only for included oxy-fuel cutting or heating.
- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered, cylinder-accounted, or invoiced oxygen; record only when oxy-fuel cutting or heating occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_records`
- Sources:

###### Process water for aqueous cleaning (`process_water`)

Process water crosses the boundary only when aqueous cleaning or rinsing is included.
- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured supplied water less separately metered internal reuse; record only when aqueous cleaning occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_input_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Sodium hydroxide crosses the boundary only as the active chemical supplied to an included alkaline-cleaning bath.
- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active-equivalent mass charged and allocated to the lot; record only when alkaline cleaning occurs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_liquid_input_records`
- Sources:

###### Cutting fluid make-up (`cutting_fluid`)

Fresh cutting fluid crosses the boundary as make-up for machining the declared lot.
- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh cutting-fluid or concentrate-equivalent make-up allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_input_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming steam-turbine part (`reference_product`)

The inspected and accepted part leaves the process as the reference product.
- Selected flow: Finished steam-turbine part
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of inspected, accepted CPC 43153 output; normalize to exactly 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared lot before normalization to 1 kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Steel scrap from machining (`steel_machining_chips`)

Steel chips leave the machining system as a separately measured waste exchange.
- Selected flow: Steel scrap, machining chips `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the lot and reconciled to material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Spent cutting fluid (`spent_cutting_fluid`)

Spent cutting fluid leaves the machining system for declared treatment or disposal.
- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from the machining system; declare water content, contaminants, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_liquid_records`
- Sources:

###### Waste alkaline cleaning liquor (`waste_alkaline_liquor`)

Spent alkaline liquor leaves an included cleaning bath as a separately measured waste exchange.
- Selected flow: Waste Alkaline Liquor `ca310225-50c8-4d41-8353-4338b41e19a1`
- Flow property / unit: Mass / kg
- Amount rule: measured drained bath mass allocated to the lot; record only when alkaline cleaning occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_liquid_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide to air (`fossil_carbon_dioxide`)

Fossil carbon dioxide crosses the environment boundary from included on-site combustion.
- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: verified or directly measured on-site fossil CO2 allocated to the lot; exclude upstream electricity and outsourced-operation emissions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming steam-turbine part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared foreground operations | Prefer lot, machine-time, meter, or mass-balance subdivision before allocation. |  |
| `allocation_shared_burdens` | unavoidable shared burdens | Allocate by a documented causal physical driver; use mass only when no better physical driver exists and disclose sensitivity. |  |
| `allocation_scrap` | steel machining chips | Report chips as waste without avoided-production credit; disclose revenue and downstream recycling or treatment separately. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `integrated_part_manufacture` | blank, product, chips | scale, issue, production, and transfer records | lot; part; input; return; conforming output; chip mass | calibrated scales reconciled to records | kg | each lot | full period | included operations | sum by lot, subtract returns, divide by conforming output | calibration; reconciliation; transfer ticket |
| `cp_electricity_records` | `integrated_part_manufacture` | electricity | meter and allocation records | meter; opening/closing kWh; machine hours; driver | submeter or documented causal allocation | kWh | shift or billing interval | full period | included equipment | allocate, convert with `calc_electricity_mj`, normalize | calibration; invoice; allocation worksheet |
| `cp_gas_records` | `integrated_part_manufacture` | natural gas and oxygen | meter, cylinder, supplier records | identity; volume; temperature; pressure; dry/wet basis; allocation | meter, cylinder balance, or invoice | m3 | lot or delivery interval | full period | included gas equipment | reference-condition conversion and lot allocation | certificate; invoice; conversion record |
| `cp_liquid_input_records` | `integrated_part_manufacture` | water, NaOH, cutting fluid | meter, batch, purchase, make-up records | identity; mass; concentration; dilution; recovery; lot | calibrated meter or scale | kg | each event | full period | included systems | sum net fresh input; calculate active NaOH; normalize | calibration; batch sheet; supplier specification |
| `cp_waste_liquid_records` | `integrated_part_manufacture` | spent fluid and alkaline liquor | tank, drum, manifest records | identity; mass; water; chemistry; contaminants; destination | calibrated tank or scale | kg | each removal | full period | collection points | sum by identity and lot allocation; normalize | calibration; manifest; treatment receipt |
| `cp_direct_emission_records` | `integrated_part_manufacture` | fossil CO2 | emissions or stack record | source; fossil attribution; CO2; period; driver | verified monitoring and allocation | kg | reporting interval | full period | included combustion | allocate verified CO2 and normalize | monitoring QA/QC; calibration; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every row | normalized amount = lot exchange / lot net conforming output mass | exchange; conforming output | exchange per kg reference product |  |
| `calc_electricity_mj` | electricity | MJ = kWh × 3.6 | metered kWh | MJ delivered electricity |  |
| `calc_active_sodium_hydroxide` | sodium hydroxide | active NaOH = solution mass × verified mass fraction | solution mass; concentration | kg active NaOH |  |
| `calc_mass_balance` | material yield | residual = blank input − returned blank − product − chips − other declared metal outputs | measured masses | residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and material | Link each lot to drawing, material certificate, route, heat treatment, acceptance release, and CPC 43153 eligibility. | drawing; certificate; traveller; release |
| `dq_completeness` | boundary | Reconcile operations, outsourced work, utilities, material, waste, and direct emissions for the period. | boundary checklist; meter map; ledgers; registers |
| `dq_measurement` | exchanges | Use calibrated instruments or documented invoices; retain conversions, allocation, and uncertainty notes. | calibration; invoice; worksheet; uncertainty statement |
| `dq_route_separation` | variants | Keep different designs, materials, shaping routes, heat treatments, and coatings separate unless homogeneity and weighting are demonstrated. | bills of material; travellers; homogeneity test; weighting record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Reject data lacking a separately delivered steam- or vapour-turbine part identity, declared material/route, or 1 kg net-mass reference. | `un-cpc-3-0-structure-2025` |
| `validate_mass_balance` | materials | Investigate and disclose residuals; do not hide scale, swarf, rejects, or returns in the reference product. |  |
| `validate_conditional_rows` | conditional exchanges | Require a documented not-applicable statement when a conditional atomic exchange is absent. | `eu-jrc-sf-bref` |
| `validate_uuid_semantics` | UUID flows | Recheck flow type, classification, property, unit group, product state, geography, technology, and generalComment. |  |
| `validate_ranges` | quantitative QA | Use foreground records; do not add an external numeric range without two independent compatible original sources or reviewed datasets. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset for one declared steam- or vapour-turbine part and route |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-specific LCA, turbine-system modelling, procurement comparison, and supply-chain inventory when qualifiers and upstream links match |
| excluded_use | Complete-turbine representation; generic machinery-part proxy; unqualified cross-material, cross-route, cross-site, or repaired-part comparison |
| required_metadata | PCR id; part/drawing; CPC reference; material/input state; route; heat treatment; finish; site; geography; period; net/gross mass; packaging; allocation; upstream datasets |
| required_quality_disclosure | Measurement coverage; calibration; material balance; allocation; route exclusions; outsourced stages; UUID and range-evidence gaps; uncertainty |
| update_trigger | Change in design, material, input route, technology, heat treatment, finish, site, energy, allocation, waste route, or resolved evidence gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | CPC 43153 identity and link to subclass 43141 |
| `eu-jrc-sf-bref` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry (retrieved 2026-09-05) | Heating, metal treatment, forging, machining, finishing, and heat-treatment process decomposition |
| `us-doe-harsh-service-materials-2020` | official_guidance | U.S. Department of Energy, 2020 Workshop on Materials for Harsh Service Conditions, https://www.energy.gov/sites/default/files/2021-04/Materials%20for%20Harsh%20Environments_%202020%20Virtual%20Workshop%20Summary%20Report.pdf (retrieved 2026-09-05) | Turbine-component route distinctions including forging, machining, joining, coatings, and near-net-shape manufacture |
