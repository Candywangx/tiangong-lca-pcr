---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-hot-rolled-in-irregularly-wound-coils-of-iron-or-non-alloy-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bars and rods, hot-rolled, in irregularly wound coils, of iron or non-alloy steel

## 1. Scope and Applicability

This PCR applies to non-alloy steel bars and rods hot-rolled from steel billets or blooms and delivered as irregularly wound coils (wire rod) at the steelworks gate. It covers the rolling-mill foreground from receipt of the declared semi-finished steel input through reheating, hydraulic descaling, roughing, intermediate and finishing rolling, controlled cooling, coil laying or winding, inspection, identification and dispatch preparation. On-site water and waste treatment attributable to this mill is included.

The PCR excludes alloy-steel and stainless-steel wire rod, straight hot-rolled bars, reinforcing bars delivered straight, flat-rolled coil, cold drawing, cold rolling, pickling or metallic coating performed after wire-rod production, fabrication of downstream wire products, distribution after the steelworks gate, use and end of life. Ironmaking, steelmaking and casting are outside the foreground boundary and enter through the upstream billet or bloom dataset. A producer operating an integrated steelworks shall still disclose and link those upstream processes rather than merge them invisibly into the foreground rolling inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-hot-rolled-in-irregularly-wound-coils-of-iron-or-non-alloy-steel |
| classification_refs | CPC 3.0: 41241 (exact) |
| covered_products | Hot-rolled bars and rods of iron or non-alloy steel delivered in irregular coils, including wire rod with circular, oval, square, hexagonal, octagonal or other rolled cross-sections when the product remains wire rod at the factory gate. |
| excluded_products | Alloy-steel or stainless-steel wire rod; straight bars; flat-rolled coils; cold-drawn or cold-rolled wire; pickled, coated or fabricated downstream wire products. |
| representative_product | Non-alloy steel wire rod hot-rolled from billet and delivered as an identified irregular coil. |
| production_route | Receipt of billet or bloom; reheating; descaling; continuous roughing, intermediate and finishing rolling; controlled water and air cooling where used; coil laying or winding; inspection and dispatch preparation. Upstream steelmaking route is declared as BOF, EAF or another documented route in the linked billet dataset. |
| market_state | Factory-gate, uncoated hot-rolled wire rod in an irregular coil; grade, chemistry, cross-section, nominal diameter or dimensions, tolerances, surface state, coil mass and delivery condition are declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply factory-gate non-alloy steel wire rod in an irregular coil for downstream drawing, rolling or fabrication. |
| How much | 1 metric tonne (1,000 kg) of accepted wire rod. |
| How well | Conforms to the declared grade or purchase specification, chemical composition, cross-section, dimensions and tolerances, mechanical or metallurgical condition, surface condition and coil acceptance criteria. |
| How long or cycle | One production output at the steelworks gate; no use-stage service duration is represented. |
| reference_flow_link | Output row `reference_product_wire_rod` of process `wire_rod_hot_rolling`. |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Bars and rods, hot-rolled, in irregularly wound coils, of iron or non-alloy steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade or specification; non-alloy chemistry basis; cross-section shape; nominal diameter or dimensions and tolerance; surface state; coil mass; delivery condition; rolling and controlled-cooling technology; billet or bloom origin and BOF, EAF or other upstream route; production site and geography; production period; accepted-product and downgrade criteria |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The exact TianGong reference-product UUID remains unresolved. Do not substitute a flat-rolled coil, straight bar, alloy-steel rod, engineering-steel proxy or generic steel flow solely to populate the UUID field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every exchange to 1,000 kg of accepted wire rod at the factory gate. Exclude rejected or downgraded material from the denominator and record its fate separately. |
| `material_mass` | billet, lubricant, scale, scrap, sludge and emitted substances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated mass records or concentration multiplied by measured carrier volume; retain wet or dry basis, moisture and sampling basis where they affect the result. |
| `electricity_energy` | alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity and conversion record. Convert kWh to MJ with 1 kWh = 3.6 MJ and do not mix electricity with fuel energy. |
| `natural_gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume separately from energy content and declare temperature, pressure and standard or normal reference conditions; retain net calorific value when an energy conversion is calculated. |
| `water_mass` | process-water make-up and wastewater | Mass | kg | Distinguish gross recirculating flow from make-up water and discharged wastewater. Report only boundary-crossing make-up and discharge as inventory amounts while retaining loop-flow records for engineering checks. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified non-alloy steel billet or bloom received at the wire-rod mill boundary, with mass, grade, dimensions, temperature state, supplier or captive source, upstream route and linked upstream dataset declared. |
| starting_condition_role | Upstream semi-finished steel product input to foreground hot rolling. |
| product_classification_scope | Non-alloy steel wire rod delivered in irregular coils; classification does not extend to alloy steel, stainless steel, straight bars, flat products or downstream cold-worked and coated products. |
| recursive_input_rule | If an input already meets this PCR's wire-rod product definition, record it as an explicit product input with its upstream dataset and stated purpose; do not recursively apply this PCR to hide re-rolling or blending. |
| upstream_dataset_requirement | Link every billet or bloom input to a geographically, technologically and temporally representative upstream dataset that discloses steelmaking route, recycled input treatment and transport to the mill. Unknown origin uses a documented conservative regional or global dataset and remains a quality limitation. |
| disclosure | Declare whether casting is coupled to the mill, hot charging is used, reheating fuel and burner technology, descaling configuration, rolling train, controlled-cooling system, water-circuit type, on-site treatment, internal material returns, exported co-products and factory-gate point. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_start_end` | foreground_system_boundary | Start at receipt of the identified billet or bloom and end with accepted non-alloy steel wire rod in an irregular coil ready to leave the steelworks gate. | `jrc-fmp-bref-2022`, `worldsteel-wire-rod-2022` |
| `sb_required_operations` | foreground_system_boundary | Include reheating, descaling, roughing, intermediate and finishing rolling, controlled cooling, coil laying or winding, inspection, dispatch preparation and attributable on-site water and waste treatment. | `jrc-fmp-bref-2022` |
| `sb_upstream_link` | upstream_steel_input | Keep ironmaking, steelmaking and casting outside the foreground rolling process and link the billet or bloom to a representative upstream dataset; integrated ownership does not remove this disclosure. | `worldsteel-lci-methodology-2017` |
| `sb_direct_exchanges` | foreground_inventory | Record each directly used fuel, electricity flow, process-water make-up and lubricant, and each waste and elementary emission as a separate exchange; record zero with evidence when a listed exchange is demonstrated absent. | `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017` |
| `sb_exclusions` | downstream_system_boundary | Exclude downstream cold drawing, cold rolling, pickling, coating, fabrication, distribution, use and end of life unless a separate declared study extension models them. | `worldsteel-wire-rod-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wire_rod_hot_rolling` | Non-alloy steel wire-rod hot rolling and coil preparation | required | Always required for products in scope. | Foreground production from received billet or bloom through accepted irregular coil at the steelworks gate. | 1,000 kg accepted wire rod output. |

### Process: Non-alloy steel wire-rod hot rolling and coil preparation (`wire_rod_hot_rolling`)

#### Inputs

##### Product flows

###### Received non-alloy steel billet or bloom (`steel_billet_input`)

The identified semi-finished steel feed crosses into the wire-rod mill boundary. Record received mass by grade and lot, net of returnable transport items, and link the supplier or captive upstream dataset.

- Selected flow: Billet `7de70586-42d8-40bb-a687-e0e0c05722e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Sum accepted billet or bloom mass charged to production and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Natural gas for reheating (`natural_gas_reheating`)

Meter gaseous natural gas supplied to the billet reheating furnace. The flow is applicable only where the declared furnace actually consumes natural gas; absence is demonstrated by fuel and furnace records.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Meter furnace natural-gas volume at declared reference conditions and normalize with `calc_normalize_one_tonne`; record zero only when another documented furnace energy source is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Alternating-current electricity for mill operations (`electricity_hot_rolling`)

Meter alternating-current electricity used by furnace auxiliaries, descaling pumps, rolling stands, cooling systems, coil handling, inspection and attributable treatment equipment. Allocate shared meters by documented submetering or a physical driver.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Sum metered electricity attributable to the production period, convert to MJ, and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Process-water make-up (`process_water`)

Record fresh or externally supplied make-up water entering cooling, descaling and water-treatment loops. Do not report the gross recirculating loop flow as a boundary input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Meter make-up water entering the declared mill water system, subtract documented water supplied to out-of-scope users, and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy`
- Sources: `jrc-fmp-bref-2022`

###### Rolling lubricant oil (`rolling_lubricant`)

Record the specific lubricant oil crossing the process boundary for rolling and mill equipment when it is consumed or lost. Recovered oil returned to the same system is not counted again as a new input.

- Selected flow: Hot rolling oil `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Sum lubricant issued to the mill minus measured uncontaminated returns and inventory change, then normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy`
- Sources: `jrc-fmp-bref-2022`

##### Waste flows

No waste flow enters this foreground process. Returned internal residues are represented by their original production and recovery records, not as a second external input.

##### Elementary flows

No elementary flow enters this foreground process. Water supplied as a technosphere product is recorded under product inputs.

#### Outputs

##### Product flows

###### Accepted non-alloy steel wire rod in irregular coils (`reference_product_wire_rod`)

This is the quantitative-reference output after cooling, coil formation and acceptance inspection. The exact TianGong product-flow UUID remains unresolved and must not be replaced by a proxy.

- Selected flow: Bars and rods, hot-rolled, in irregularly wound coils, of iron or non-alloy steel
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of 1,000 kg accepted product; retain actual gross and accepted output masses for yield and allocation calculations.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg accepted wire rod at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `unsd-cpc-3-0-2025`, `worldsteel-wire-rod-2022`

##### Waste flows

###### Steel crop ends and cobble scrap (`steel_crop_scrap`)

Record clean steel crop ends, cobbles and rejected steel leaving the foreground process for internal remelting, external recovery or disposal. Keep each destination quantity separate in the underlying records.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh or reconcile generated scrap by destination and normalize with `calc_normalize_one_tonne`; subtract only material demonstrably returned within the same measured foreground system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_waste`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Iron-oxide mill scale (`mill_scale`)

Record mill scale separated during reheating, descaling, rolling and water treatment. Retain oil and moisture basis and the declared fate because clean recovered scale and oily scale are not interchangeable.

- Selected flow: Mill scale `763bdad1-b443-428a-89b6-371a6807fc6c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Sum weighed scale by oil-content class and destination, convert to the declared wet or dry basis, and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_waste`
- Sources: `jrc-fmp-bref-2022`

###### Hot-rolling wastewater to treatment (`hot_rolling_wastewater`)

Record blowdown or wastewater leaving the declared mill water loop for on-site or external treatment. A closed loop with no discharge is recorded as zero with water-balance evidence.

- Selected flow: Wastewater `ba1c2ea5-0ea3-4981-a893-45a0650fea62`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Meter discharged wastewater volume at declared reference conditions, distinguish on-site from external treatment, and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_waste`
- Sources: `jrc-fmp-bref-2022`

###### Oily iron-bearing water-treatment sludge (`oily_water_treatment_sludge`)

Record oily sludge removed from the hot-rolling water-treatment system. Retain moisture, oil and iron-oxide content and the recovery or disposal destination.

- Selected flow: Oily iron-bearing water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Sum weighed wet sludge by destination, retain analysis and moisture basis, and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_waste`
- Sources: `jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air`)

Record direct fossil carbon dioxide from reheating-fuel combustion and other foreground fossil-carbon oxidation. Do not include upstream electricity or billet-production emissions in this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use validated stack or mass-balance records attributable to the foreground mill and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Nitrogen oxides to air, expressed as nitrogen dioxide (`nox_air`)

Record the monitored nitrogen-oxides emission from reheating combustion using the facility's declared reporting basis expressed as nitrogen dioxide.

- Selected flow: Nitrogen oxides to air, expressed as nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: Multiply validated concentration by dry or wet stack-gas volume on the same oxygen and reference-condition basis, or use the validated annual mass report, then normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Sulphur dioxide to air (`sulfur_dioxide_air`)

Record sulphur dioxide emitted by the declared reheating fuel. Where the fuel and verified monitoring demonstrate no reportable emission, retain the evidence for the zero value.

- Selected flow: Sulphur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use validated stack mass or a documented fuel-sulphur balance for the same production period and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Carbon monoxide to air (`carbon_monoxide_air`)

Record carbon monoxide from incomplete combustion in the reheating system on the facility's validated reporting basis.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Multiply validated concentration by stack-gas volume on consistent conditions, or use the validated annual mass report, then normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Total particulate matter to air (`particulate_matter_air`)

Record total particulate matter emitted from the reheating furnace, descaling and rolling sources after declared controls. Keep source-level measurements so unlike sampling methods are not silently merged.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Sum validated source-specific particulate mass for the production period and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Iron discharged to water (`iron_water`)

Record iron in treated effluent discharged across the environment boundary. Subtract measured iron already present in intake water when required by the selected water-accounting method.

- Selected flow: iron `08a91e70-3ddc-11dd-9597-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Multiply representative iron concentration by matched discharge volume, subtract documented intake load, and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_emissions`
- Sources: `worldsteel-lci-methodology-2017`

###### Mineral oil discharged to water (`mineral_oil_water`)

Record mineral oil in treated effluent discharged across the environment boundary using the declared analytical method.

- Selected flow: Mineral oil to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply representative mineral-oil concentration by matched discharge volume, subtract documented intake load where relevant, and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_emissions`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### Suspended solids discharged to water (`suspended_solids_water`)

Record suspended solids in treated effluent discharged across the environment boundary using the declared filtration and drying method.

- Selected flow: Suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply representative suspended-solids concentration by matched discharge volume, subtract documented intake load, and normalize with `calc_normalize_one_tonne`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted wire rod
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_emissions`
- Sources: `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | foreground_shared_operations | Avoid allocation by submetering or subdividing separately operated lines, grades, campaigns and treatment units wherever the causal exchange can be measured. | `worldsteel-lci-methodology-2017` |
| `alloc_internal_returns` | internal_scrap_scale_and_water | Keep scrap, scale, oil and water returned within the measured foreground system as internal loops; do not credit them as exported co-products and do not count the same return as a new external input. | `jrc-fmp-bref-2022`, `worldsteel-wire-rod-2022`, `worldsteel-lci-methodology-2017` |
| `alloc_exported_recovery` | exported_recovered_material | For a separately measured output with a documented external market and function, apply system expansion only when the substituted function and dataset are demonstrated; otherwise report it as waste to its actual treatment. Disclose the substitution and sensitivity. | `worldsteel-wire-rod-2022`, `worldsteel-lci-methodology-2017` |
| `alloc_shared_treatment` | shared_water_waste_and_energy_services | Allocate shared water treatment, waste treatment and energy services by direct metering first, then by a physical causal driver such as treated volume, pollutant load, energy or mass; disclose the driver and exclude unrelated plant operations. | `worldsteel-lci-methodology-2017` |
| `alloc_upstream_scrap_method` | linked_billet_or_bloom_dataset | Preserve the recycled-input and end-of-life method of the linked upstream steel dataset and report it separately from foreground mill scrap; do not apply a second scrap credit inside this rolling process. | `worldsteel-wire-rod-2022`, `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_energy` | `wire_rod_hot_rolling` | billet, natural gas, electricity, process-water make-up and lubricant inputs | weighbridge, production ledger, invoice, tank or stock record and calibrated meter | timestamp; grade and lot; gross and net mass; meter start and end; unit; gas temperature and pressure basis; electricity kWh; water source; lubricant issue, return and stock change; product attribution | Reconcile records to production campaigns; use dedicated meters where available and a documented physical driver for shared services. | kg; m3; kWh; MJ | continuous or per batch with monthly reconciliation | Normally 12 consecutive months; a shorter period of at least 6 months requires justification and correction for predictable operating or seasonal variation. | All equipment and utilities attributable to the declared wire-rod mill at the site. | Sum boundary-crossing quantities for the period, resolve stock changes and returns, then normalize to accepted output. | Calibration certificates; meter hierarchy; invoices; weighbridge tickets; stock reconciliation; campaign log; allocation worksheet. |
| `cp_outputs_waste` | `wire_rod_hot_rolling` | accepted product, steel scrap, mill scale, wastewater and oily sludge | product scale, waste scale, dispatch record, water meter and treatment record | output grade and mass; acceptance status; scrap mass and destination; scale wet or dry mass, oil and moisture; wastewater volume and destination; sludge wet mass and analysis | Reconcile accepted, downgraded, internally returned, externally recovered and disposed outputs to the same production period. | kg; m3 | per batch or shipment with monthly reconciliation | Same representative period as `cp_material_energy`. | Foreground mill and attributable on-site treatment. | Sum each physical output and destination separately; retain internal-loop records; normalize to accepted product. | Product certificates; calibrated scales; waste transfer notes; recovery receipts; water balance; sludge laboratory results. |
| `cp_air_emissions` | `wire_rod_hot_rolling` | direct fossil carbon dioxide, nitrogen oxides, sulphur dioxide, carbon monoxide and total particulate matter | continuous emissions monitoring, periodic stack test, mass balance or regulated annual mass report | source id; operating hours; concentration; reference oxygen; wet or dry basis; temperature and pressure; gas volume; fuel carbon and sulphur where used; control status; uncertainty | Match concentration and gas-flow conditions; aggregate only attributable source masses; retain calculation and monitoring hierarchy. | kg; mg/Nm3; Nm3 | continuous where monitored, otherwise each valid test and annual reconciliation | Same representative period as production data; document test representativeness. | Reheating furnace and other declared mill air-emission points. | Calculate source mass for the production period, avoid double counting measured and calculated reports, and normalize to accepted product. | Monitoring certificates; laboratory reports; reference-condition calculations; fuel analysis; regulatory submissions; data-gap log. |
| `cp_water_emissions` | `wire_rod_hot_rolling` | iron, mineral oil and suspended solids discharged to water | flow-proportional or representative sample paired with discharge meter | outfall; sample time; analytical method; concentration; discharge volume; intake concentration where applicable; treatment status; detection limit; uncertainty | Pair representative concentrations with matched discharge volumes; subtract documented intake load where the accounting method requires it. | kg; mg/L; m3 | per permit and process variability, with monthly and annual reconciliation | Same representative period as production and water-balance data. | Attributable final outfalls from the mill or shared treatment after allocation. | Calculate each pollutant mass separately, handle non-detects by the declared rule, and normalize to accepted product. | Accredited laboratory reports; chain of custody; meter calibration; permit reports; intake and outfall balance; allocation worksheet. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_one_tonne` | every foreground exchange | normalized amount = period exchange amount / period accepted wire-rod mass × 1,000 kg | period exchange amount; period accepted wire-rod mass | exchange amount per 1,000 kg accepted wire rod | `worldsteel-wire-rod-2022` |
| `calc_electricity_mj` | alternating-current electricity | electricity MJ = metered kWh × 3.6; retain the original kWh record and do not combine electricity with fuel energy | metered kWh | MJ alternating-current electricity |  |
| `calc_water_pollutant_mass` | each water elementary flow | pollutant mass = matched discharge volume × representative concentration minus documented intake pollutant load; apply consistent volume and concentration units | discharge volume; outfall concentration; intake concentration where applicable | kg pollutant discharged | `worldsteel-lci-methodology-2017` |
| `calc_mass_balance` | rolling-process completeness | Reconcile billet input and other mass inputs with accepted product, downgraded product, scrap, scale, sludge, measured emissions and inventory change; investigate unexplained imbalance rather than forcing closure. | all mass inputs; product and residue outputs; inventory change | documented mill mass balance and unexplained difference | `worldsteel-lci-methodology-2017` |
| `calc_shared_service_allocation` | shared electricity, water and treatment | Allocate the measured shared total to the wire-rod process using the declared physical driver; allocation shares across users must sum to the measured total. | shared total; driver quantity by user | attributable foreground exchange | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and billet input | Retain grade, chemistry basis, cross-section, nominal dimensions, coil and lot identity, delivery state, upstream route and acceptance status; do not mix alloy steel or straight-bar production into the denominator. | Product specification, test certificate, production order, coil tag and acceptance record. |
| `dq_primary_foreground` | gate-to-gate foreground | Use measured primary data for the rolling mill and attributable treatment; calculated or estimated substitutions require a documented hierarchy, formula and uncertainty. | Meter and scale records, laboratory reports, calculation files and data-gap log. |
| `dq_temporal` | all foreground records | Use a representative 12-month period where practicable. If a period of at least 6 months is used, justify it and account for predictable seasonal, campaign and maintenance variation. | Period coverage report, operating calendar, downtime and campaign records. |
| `dq_geography_technology` | upstream and foreground datasets | Match site geography, electricity supply, reheating fuel, burner, rolling train, cooling and water-circuit technology; disclose deviations and unknown upstream billet origin. | Dataset metadata, supplier record, process flow diagram and technology description. |
| `dq_completeness` | inventory | Account for every listed atomic exchange or retain evidence that it is zero; document any additional site-specific material, fuel, emission or waste and the cut-off decision. | Completeness checklist, mass and energy balances, environmental register and cut-off log. |
| `dq_no_proxy_uuid` | TianGong identity references | Leave a UUID empty until the exact flow, type, state, property and unit support are directly verified; do not promote a semantically different steel, utility, waste or emission proxy. | UUID audit record and unresolved-inventory register. |
| `dq_range_evidence` | quantitative ranges | Do not infer an external empirical range unless at least two independent original sources have compatible system boundary, declared unit and product state; until then use foreground records without an invented range. | Source-comparison record or explicit unresolved range-evidence need. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_output` | reference_flow | Confirm exactly 1,000 kg of accepted non-alloy steel wire rod in irregular coils is the quantitative-reference output and all inventory rows use the same accepted-output denominator. | `worldsteel-wire-rod-2022` |
| `val_identity_scope` | product_identity | Reject a data package that mixes alloy or stainless steel, straight bars, flat products or downstream cold-worked and coated products without separate modelling and disclosure. | `unsd-cpc-3-0-2025`, `jrc-fmp-bref-2022` |
| `val_boundary_link` | system_boundary | Confirm billet or bloom origin and upstream route are declared and linked; confirm downstream drawing, rolling, coating, distribution, use and end of life are excluded or separately identified. | `worldsteel-lci-methodology-2017`, `worldsteel-wire-rod-2022` |
| `val_process_completeness` | foreground_inventory | Confirm reheating, descaling, rolling, controlled cooling, coil formation, attributable water treatment and every listed atomic exchange are measured or explicitly evidenced as zero. | `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017` |
| `val_mass_balance` | mass_inventory | Reconcile billet and other mass inputs against accepted product, scrap, scale, sludge, direct emissions and inventory change; investigate and disclose unexplained imbalance. | `worldsteel-lci-methodology-2017` |
| `val_energy_water_separation` | energy_and_water_inventory | Confirm electricity, natural gas and water are separate exchanges; confirm water make-up is not gross recirculating flow and gas reference conditions are declared. | `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017` |
| `val_allocation` | allocation_and_recovery | Confirm internal returns receive no exported-product credit, shared-service allocations close to the measured total, and any system-expansion credit names an actual external function and substitute dataset. | `worldsteel-wire-rod-2022`, `worldsteel-lci-methodology-2017` |
| `val_uuid_resolution` | tiangong_references | Confirm every populated UUID has public state 100, exact semantics, correct flow type, property and unit support; confirm every empty UUID appears in the unresolved inventory register. |  |
| `val_bilingual_alignment` | bilingual_pcr | Confirm English and Chinese process ids, row ids, UUIDs, controlled values, source ids and normative rule ids are identical and that human-facing Chinese flow names are localized. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` produced from reviewed site foreground records. |
| downstream_use | Cradle-to-gate product systems for downstream wire drawing, cold rolling, fabrication and product LCA; process and lifecyclemodel projections that require a declared non-alloy steel wire-rod input. |
| allowed_use | Use when product chemistry, delivery state, upstream route, geography, technology and period are representative and the chosen recycling or allocation method is compatible with the downstream study. |
| excluded_use | Do not use as a proxy for alloy or stainless wire rod, straight bar, reinforcing bar, flat-rolled coil, cold-drawn wire, coated wire, fabricated wire products or a site whose upstream steel route and mill technology are materially different without sensitivity analysis. |
| required_metadata | PCR id and version; product grade and specification; chemistry basis; cross-section and nominal dimensions; coil mass and delivery state; site and geography; period; billet origin and upstream route; hot-charge status; reheating fuel and technology; rolling and cooling configuration; water-circuit and treatment boundary; allocation and recycling method; reference-product UUID status. |
| required_quality_disclosure | Primary-data share; meter and scale coverage; temporal coverage; allocation drivers; mass and energy balance results; water balance; emission-monitoring basis; missing or estimated exchanges; unresolved UUIDs; upstream dataset quality; uncertainty and cut-off decisions. |
| update_trigger | Change in steel grade family, billet source or BOF/EAF route, reheating fuel or burner, hot-charge practice, rolling or cooling technology, water circuit, treatment route, allocation or recycling method, site geography, reference-product UUID, or a production-period update that materially changes representative results. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, code 41241. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03). | Official product-classification identity and non-alloy irregular-coil scope. |
| `jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, 2022. https://doi.org/10.2760/196475 (retrieved 2026-09-03). | Original-text process sequence for wire-rod mills; reheating, descaling, rolling, controlled cooling and coiling; hot-rolling inputs, water circuits, wastes and emissions. |
| `worldsteel-wire-rod-2022` | Dataset (`dataset`) | World Steel Association, worldsteel LCA eco-profile: Wire Rod, May 2022. https://worldsteel.org/wp-content/uploads/worldsteel_eco-profiles_global-Wire-Rod-2022_Other.pdf (retrieved 2026-09-03). | Declared one-tonne product, wire-rod state, BOF/EAF route disclosure, factory-gate boundary, internal scrap treatment and co-product system expansion. |
| `worldsteel-lci-methodology-2017` | Method factor (`method_factor`) | World Steel Association, Life Cycle Inventory Methodology Report for Steel Products, 2017, ISBN 978-2-930069-89-0. https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (retrieved 2026-09-03). | Steel LCI boundary, upstream semi-finished steel linkage, foreground collection, emissions completeness, data quality, cut-off, scrap, co-product, allocation and validation rules. |
| `china-mof-tariff-2014` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, tariff schedule with HS 7213 Chinese product terms, 2014. https://m.mof.gov.cn/zcfb/201404/P020140429621906752215.pdf (retrieved 2026-09-03). | Professional Chinese terminology for 热轧盘条 and 铁或非合金钢条、杆; no quantitative rule. |
