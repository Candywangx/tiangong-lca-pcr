---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.injection-moulded-reusable-polypropylene-bowls
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Single-shot injection-moulded reusable polypropylene household bowls

## 1. Scope and Applicability

Manufacture one specified reusable, single-piece, non-cellular, unreinforced PP household food-serving bowl by single-shot screw injection moulding. Start with purchased complete virgin unfilled PP pellets, natural or already pre-coloured/stabilised, and include receipt/storage, conveyance, actual moisture conditioning, plastication, mould filling/packing, cooling, ejection, gate/flash trimming, identified clean internal regrind, inspection and new first quality release. Include actual utility production/distribution and failed/idle/cleanup operations. Actual packaging, storage, handling and dispatch follow in a separate linked service account. This is complete manufacture from feedstock, not purchased-bowl repacking. `ineos-pp-processing-2007`; `ifc-plastic-products-2007`

The PP process guide and IKEA's supplied bowl establish a transparent technical synthesis, not a common SKU, grade, current order or factory. The example product does not prove its undisclosed recipe, and PP's general properties do not establish food-contact or microwave approval. The linked care leaflet prohibits microwave use; retain actual article-specific instructions and test evidence. No source processing temperature, pressure, regrind percentage, density, packaging weight, yield, lifetime or energy intensity is a default here. `ikea-kalas-bowl`; `ikea-kalas-care`; `ineos-pp-processing-2007`

Exclude other polymers; external recyclate; filled/fibre-reinforced/foamed or multilayer articles; thermoset melamine tableware; thermoforming from sheet; injection-compression; blow/rotational/compression moulding; lids/handles/assemblies; in-mould labelling; printing/coating; applied release agents; onsite pigment/masterbatch blending or resin compounding; disposable food-conveyance packaging; baths/toilet seats/cisterns; mere purchased-product handling; medical/sterile claims. A real departure requires applicability review and its complete atomic inputs/outputs; exclusion never authorises omitting a real operation. `ineos-pp-processing-2007`; `un-cpc3-2025`

Original CPC notes pp.177–179 distinguish semi-manufactures363, packaging364, sanitary ware36930 and household/tableware36940. They add no substantive36940 manufacturing note. The bowl's household use and this specific complete route justify the narrow identity, not the classification leaf alone. Mass is a production declared unit, not equivalence between bowl capacity, durability or consumer services. `un-cpc3-2025`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.injection-moulded-reusable-polypropylene-bowls |
| classification_refs | CPC3.0:36940; narrower methodological context; no accepted edge implied |
| covered_products | One approved single-piece unfilled virgin-PP reusable household bowl configuration |
| excluded_products | All section1 exclusions; product and route changes require new applicability assessment |
| representative_product | A specified monolithic PP serving bowl; IKEA KALAS is independent terminal evidence only |
| production_route | Complete pellet receipt/conditioning → screw plastication → fill/pack/cool/eject → trim/recover/inspect → first release; separate actual supply services |
| market_state | Bare cooled bowl at new first quality release; detachable packaging excluded; actual supply-service interval disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a specified reusable household food-serving bowl |
| How much | 1 kg newly first-quality-released net bare bowls |
| How well | Actual drawing and declared material/dimensional/mechanical/surface/food-contact acceptance; no generic certification or capacity equivalence |
| How long or cycle | One complete manufacturing campaign to first quality release; useful life/use cycles not quantified here |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tableware, kitchenware, other household articles and toilet articles, of plastics `6ea38dc6-ba15-428c-8881-f25b8ef37de1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | approved bowl geometry and capacity; PP grade and homo/copolymer type; complete pellet formulation and supplied colour; unfilled virgin origin; single-shot route and mould configuration; food-contact test basis and intended use restrictions; dimensional surface and mechanical acceptance; measured new first-release net mass and cohort; opening/closing WIP and inherited exchange vectors; internal regrind genealogy and heat history; FG stocks returns and original-release linkage; distinct manufacturing and supply-service gates; whole supplied preparations and component subledgers; plant utility gate voltage geography and losses; water state and supplier heat-service convention; each packaging material stock and dispatch ledger; species-specific release evidence and media; period site allocation and uncertainty |

All required qualifiers must be present in the actual dataset metadata, reference description, process notes or an equivalent consumer-visible field. This1kg reference is net first release; neither retail packaged weight nor a count is its measurement.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is unique newly first-quality-released net bowl mass in kg for the declared configuration and cohort, measured by calibrated weighing after cooling and acceptance; exclude detachable packaging. Same-batch closing FG is already in Q. cp_release collects raw kg; calc_reference alone divides attributable raw amounts by Q. |
| native_unit_chain | all inventory rows | Native reference property | declared row unit | Mass uses 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg; electricity uses native Net calorific value 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ as an energy property, not fuel mass. Preserve raw meter units and convert kWh to MJ by3.6 exactly before allocation/normalisation. |
| raw_measurement | all inventory rows | Measured extensive quantity | kg or MJ | Collect whole supplied formulations once. Assay, carrier water and active constituents are nested composition ledgers, not extra purchases. Integrated volumes are not multiplied by time; integrate only real rates. A volume-to-mass conversion needs independently measured density for that substance at documented temperature/pressure. Do not infer density from a native secondary property or use water density for oil/refrigerant. |
| zero_output | all inventory rows | Raw burden vector | raw units | Keep start-up, shutdown, idle, failed shots, cleanup, rejected lots and actual rework even when Q=0. Retain and explain their raw burden vector and future cohort assignment; publish no per-unit result for Q=0. Never infer a bowl mass from package weight or item count. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete virgin unfilled natural/pre-coloured PP pellet formulation at receipt, with upstream production burden and actual feed packaging declared |
| starting_condition_role | Purchased feedstock for complete foreground conversion |
| product_classification_scope | Narrow household PP bowl subset of CPC3.0:36940; packing/sanitary/semi-manufactured products excluded |
| recursive_input_rule | Purchased finished bowls and old released returns retain upstream/historical burden; never recursively substitute them for virgin-pellet manufacture |
| upstream_dataset_requirement | Match complete actual resin/formulation, utilities, packaging and transport/treatment boundaries; no omitted or duplicate component burdens |
| disclosure | Declare site/period/configuration, manufacturing first-release gate, separate actual supply-service interval, all inventories/inherited vectors and provider limitations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | Collect every actual operation from complete pellet receipt to newly released bowl, including actual drying when moisture/condensation requires it, feed transfer, electric heating/screw/clamp/robot loads, cooling and trim/grind/inspection. The guide's normal no-predrying statement does not override a wet-material record. No steam, boiler, fuel, mould release, wash system or abatement plant is presumed; actual installed equipment and real flows must be added individually. | ineos-pp-processing-2007; ifc-plastic-products-2007 |
| boundary_feed | pp_feed | A complete purchased PP pellet formulation crosses the boundary once. Include its actual pigment/stabiliser carrier within that supply; do not purchase ingredients again. Actual separate colour preparation changes the declared route and requires every separately purchased preparation and its mixing energy/losses. Internal regrind retains its own original per-exchange burden vector and heat history; it is not virgin feed, an additional purchase or a credit. | ineos-pp-processing-2007 |
| boundary_gates | all processes | Manufacturing Q is first release, not net dispatch. Keep WIP at both ends with quantity/state/configuration and inherited burden vector for every exchange. Same-cohort closing FG is part of Q, never an additional manufacturing output. Supply services retain opening/closing FG, gross physical dispatch, external returns, reshipment, rejects and losses separately; reinspection creates no Q and incremental rework belongs once to its original cohort. | ilcd-general-2010 |
| boundary_species | manufacture | Screen each actual gas/liquid/solid species and destination. IFC Table4 is potential high-temperature evidence, not proof of n-butane, formaldehyde or any rate. Do not turn VOC/COD/TOC into a specific chemical mass; retain uncharacterised indicators as indicators and the real species uncertainty as a hold for a quantitative package. Add all actually identified species as separate cards. | ifc-plastic-products-2007 |
| boundary_utilities | all processes | Bind electricity only at the declared CN1–35kV grid-average consumer gate; branch measurements reconcile to imported electricity including real transformer, motor, compressor, chiller and distribution losses. Other geography/voltage/supply needs another verified identity/provider. Onsite compressed-air/cooling generation is counted through actual equipment energy/water, not again as purchased service. For actual external heat-exchange water, record gross received/returned mass, temperatures/pressures/enthalpies and supplier water/energy convention; cancel internal recirculation and do not also charge the same parcel as makeup. | ifc-plastic-products-2007 |
| boundary_packaging | supply_services | For each single packaging supply maintain opening empty plus packaging attached to WIP/FG plus reusable stock + external acquisitions + external returns received = closing equivalents + packaging with gross physical shipments + external returns sent + waste. Cancel internal reuse. Packaging is separate from bare bowl Q; do not count reuse as another purchase or automatic coproduct. Associated inlet resin sacks follow the same ledger and supplier-boundary check. | ilcd-general-2010 |
| boundary_recursive | all processes | Do not recursively model a bowl as the raw material of itself. A purchased finished bowl is an upstream product with inherited burdens and lies outside this pellet-conversion reference route. Qualified rework/returns keep original identity and stock/burden links. Upstream resin, utility and packaging providers must match their actual boundary and formulation; avoid missing or duplicated packaging, transport and utility production. | ilcd-general-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete pellet-to-bowl manufacture and first release | required | Actual full conversion and installed utility operations | Foreground manufacturing including receipt/conditioning, screw/mould cycle, cooling, ejection, trimming/recovery, inspection, real utilities and their losses | 1 kg new first release |
| supply_services | Actual post-release packing storage handling and dispatch | required | Actual observed matched-cohort supply interval, including stock remaining unshipped | Separately reported incremental supply services and physical FG/packaging ledger | per 1 kg reference flow |

Every card is one physical exchange. Conditional rows are included only with real presence evidence; evidence of absence differs from an unmeasured amount. Add any actual missing material, utility, packaging component, waste or identified species/destination before completion. Internal regrind is inside manufacture with a complete genealogy/vector ledger, not an unburdened new purchase. Each row uses its own raw numerator; calc_reference executes the only division by Q. Supply-service results are labelled separately from manufacture and preserve the observed interval.

### Process: Complete pellet-to-bowl manufacture and first release (`manufacture`)

#### Inputs

##### Product flows

###### Complete virgin PP pellet supply (`pp_feed`)

One actual complete natural or pre-coloured unfilled virgin PP formulation, including its contained additives, measured net of detachable sacks. Native identity is PP granulate from propylene polymerisation at plant with Mass reference; no CAS, grade, comonomer, colour, locationOfSupply or supplier formulation is specified. The residual classification is not formulation evidence. Verify the actual virgin PP pellet/food-contact specification; do not bind external recyclate or internal regrind here and do not repurchase constituent pigment/stabiliser. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `ineos-pp-processing-2007`

###### Manufacturing electricity (`production_electricity`)

Native CN grid-average consumption supply at1–35kV to user, reference Net calorific value as MJ. Use only the actual MV plant import gate; do not substitute a BR mix, incineration-generated electricity, a cable or transformation service. Reconcile branch-meter use and real transformer/distribution losses once. Meter heaters, screw/clamp/robots, actual dryers, grinders, extraction, compressor and chiller including start/stop/idle, without separately purchasing the same onsite utility. Reference unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `ineos-pp-processing-2007`; `ifc-plastic-products-2007`

###### Cooling-loop tap-water makeup (`cooling_makeup`)

Actual treated tap-water makeup crossing the plant gate, reference Mass/kg; native municipal/potable supply and at-plant production do not specify a geography or supplier treatment train. The additional native Volume property is not an independently measured density. Verify actual water source/state; no raw/DI water or circulating utility return is identified by this UUID. Internal circulation is not repeated purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

###### Actual equipment-cleaning tap water (`washing_water`)

Include only actual wet cleaning or tests; dry cleaning is not converted into fictional washing. Actual treated tap-water makeup crossing the plant gate, reference Mass/kg; native municipal/potable supply and at-plant production do not specify a geography or supplier treatment train. The additional native Volume property is not an independently measured density. Verify actual water source/state; no raw/DI water or circulating utility return is identified by this UUID. Internal circulation is not repeated purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

###### Mineral hydraulic oil formulation (`hydraulic_oil`)

Whole actual supplied mineral hydraulic-oil formulation for hydraulic/hybrid equipment only. Record supplier grade, additive package, oil inventory, service allocation and spent-oil destination; fully electric equipment may have no such circuit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Mineral hydraulic oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastic-products-2007`

###### 1,1,1,2-Tetrafluoroethane refrigerant (`r134a_supply`)

Conditional only for an actually installed R134a circuit. Charge/makeup, opening/closing charge, recovery and losses reconcile separately; do not assume a chiller uses this refrigerant. Add the precise other chemical when real. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastic-products-2007`

###### Aqueous sodium hydroxide cleaning formulation (`caustic_cleaner`)

Conditional actual purchased aqueous sodium hydroxide cleaner, complete formulation mass and supplier assay/water subledger, not pure NaOH plus a duplicate solution/water purchase. Do not assert this cleaner is used or compatible without equipment and cleaning records. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Aqueous sodium hydroxide cleaning formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastic-products-2007`

###### Granular activated carbon (`activated_carbon`)

Conditional actual exhaust adsorber charge; retain grade, opening/closing inventory, replacement and regeneration destination. No abatement installation or efficiency is presumed. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Granular activated carbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastic-products-2007`

###### LDPE resin-delivery sack (`inlet_sack`)

Conditional single LDPE sack accompanying raw resin, separate from net resin; record actual sack composition and any upstream packaging burden already included. This physical inlet is not automatically a second packaging purchase. Other actual liner/bag components require separate cards. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE resin-delivery sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_inlet_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_inlet_packaging`
- Sources: `ifc-plastic-products-2007`

###### Liquid heat-exchange water (`received_exchange_water`)

Only actual externally supplied cooling/heat-exchange water. Collect gross received and returned mass plus temperature/pressure/enthalpy, state and supplier water/energy ownership agreement. No steam/condensate or boiler is assumed. Use instead of, not in addition to, the same parcel in tap-water makeup. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Liquid heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

#### Outputs

##### Product flows

###### New first-quality-released bowl (`first_release`)

Exactly one bare newly first-released bowl configuration/cohort at the manufacturing gate. Native flow is a broad manufactured-finished plastic household article, production mix at plant, Mass reference; it specifies no PP grade, CAS, bowl design, food-contact test, useful life, locationOfSupply or medium. Use only independently established single-piece unfilled virgin-PP reusable bowls from this complete route; native identity does not prove actual supplier compatibility. Record calibrated net release mass and all required qualifiers. Closing FG from this cohort is already in Q; no separate production output or new Q from reinspection/dispatch. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Tableware, kitchenware, other household articles and toilet articles, of plastics `6ea38dc6-ba15-428c-8881-f25b8ef37de1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `ikea-kalas-bowl`; `ineos-pp-processing-2007`

###### External liquid heat-exchange water return (`returned_exchange_water`)

Only a real externally returned water parcel under the corresponding supply agreement, with measured mass and actual thermal state/enthalpy. Keep the supplier physical/energy convention explicit; neither an internal loop transfer nor automatic useful-heat coproduct/credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Liquid heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

##### Waste flows

###### PP moulding rejects (`pp_rejects`)

Actual externally transferred PP rejected bowls, runners, purges and trim of one identified formulation and treatment destination. Record status and complete composition; internal clean regrind is tracked inside the process and is not this external output. Split different formulation/destination records. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: PP moulding rejects
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Captured PP particulate (`captured_pp_dust`)

Actual collected particulate from a declared PP formulation, separate from air release and from contaminated cleaning waste. Retain filter/capture records and disposition, without an assumed capture efficiency. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Captured PP particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Spent mineral hydraulic oil (`spent_hydraulic_oil`)

Actual spent oil from the identified circuit, with water/contamination measured separately as subcomposition; do not duplicate the same wet stream as separate material mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Recovered 1,1,1,2-tetrafluoroethane (`recovered_r134a`)

Actual recovered refrigerant sent to authorised treatment/reclamation, separate from fugitive release and equipment charge stock; no assumed recovery rate. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Recovered 1,1,1,2-tetrafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Cooling-loop bleed water (`cooling_bleed`)

One actual aqueous cooling discharge to treatment, with mass/temperature and measured water/solute subledger. Internal recirculation is not a discharge; direct environmental discharge requires separate medium/species cards. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Cooling-loop bleed water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Aqueous equipment-cleaning effluent (`cleaning_effluent`)

One actual aqueous equipment-cleaning stream to treatment with measured composition, water mass and analytical indicators. COD/TOC is not a selected species or chemical-mass substitute. Split chemically distinct streams/destinations. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Aqueous equipment-cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Spent granular activated carbon (`spent_carbon`)

Only an actually used adsorbent with measured retained compounds/water and offsite regeneration/treatment boundary; adsorbed compound mass is a nested ledger rather than a second whole waste output. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Spent granular activated carbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Waste LDPE resin-delivery sack (`inlet_sack_waste`)

Actual discarded incoming sack; distinguish empty mass, adhered resin and actual returns to supplier. The resin content is nested and must not also be booked as the same PP reject. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste LDPE resin-delivery sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

##### Elementary flows

###### PP particulate matter (`pp_particulate_air`)

Actual airborne particulate of the identified PP formulation, stated size fraction and air compartment. A generic dust search hit is not proof of polymer chemistry, particle structure or release quantity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: PP particulate matter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastic-products-2007`

###### n-Butane (`n_butane_air`)

Conditional only when the real molecular species n-butane is independently identified in air. IFC says potential butane/alkane classes under high-temperature conditions; it does not resolve isomer or quantity. Never book an alkane total as n-butane. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Native CAS 106-97-8; Elementary flow, Mass/kg, emissions to air, unspecified. Bind only an independently identified release of this exact species at that compartment. Native mixture/solution synonyms do not authorise booking a whole preparation or an analytical total as this species. Actual indoor, water, soil, long-term or more specific air compartments require their own verified identity.

- Selected flow: n-butane `4d9a8790-3ddd-11dd-94c2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastic-products-2007`

###### Formaldehyde (`formaldehyde_air`)

Conditional independently identified formaldehyde in air; the general PP aldehyde class does not prove this compound. Quantify using matched sampling/speciation with detection limits, not a total VOC conversion. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Native CAS 50-00-0; Elementary flow, Mass/kg, emissions to air, unspecified. Bind only an independently identified release of this exact species at that compartment. Native mixture/solution synonyms do not authorise booking a whole preparation or an analytical total as this species. Actual indoor, water, soil, long-term or more specific air compartments require their own verified identity.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastic-products-2007`

###### Water vapour (`water_vapour_air`)

Measured actual drying or cooling evaporation to air, separately from drift droplets and liquid bleed. Distinguish free moisture from any actual chemically generated water; non-reactive PP shaping does not establish reaction or structural water. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Native CAS 7732-18-5; Elementary flow, Mass/kg, emissions to air, unspecified. Bind only an independently identified release of this exact species at that compartment. Native mixture/solution synonyms do not authorise booking a whole preparation or an analytical total as this species. Actual indoor, water, soil, long-term or more specific air compartments require their own verified identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastic-products-2007`

###### 1,1,1,2-Tetrafluoroethane (`r134a_air`)

Only actual R134a loss from an installed circuit, reconciled with charge, makeup and recovery; distinguish captured refrigerant and other species. An absence claim needs equipment and service evidence. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg. Native CAS 811-97-2; Elementary flow, Mass/kg, emissions to air, unspecified. Bind only an independently identified release of this exact species at that compartment. Native mixture/solution synonyms do not authorise booking a whole preparation or an analytical total as this species. Actual indoor, water, soil, long-term or more specific air compartments require their own verified identity. The native record has no official Chinese baseName; the Chinese selected-flow display retains HFC-134a.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastic-products-2007`

### Process: Actual post-release packing storage handling and dispatch (`supply_services`)

#### Inputs

##### Product flows

###### Internal newly released bowl transfer (`released_transfer`)

Carry the exact first_release cohort mass and per-exchange burden vector into FG service stock. Native broad manufactured household-article/Mass identity has no polymer/grade/design/geography guarantee; retain the same bounded PP bowl qualifiers. This internal Q transfer is cancelled in the consolidated factory account. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Tableware, kitchenware, other household articles and toilet articles, of plastics `6ea38dc6-ba15-428c-8881-f25b8ef37de1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-general-2010`

###### Previously dispatched bowl return (`returned_bowls`)

Actual returned physical bowls of a known original release/delivery cohort, carrying historical mass and burden. Reverse the corresponding original dispatch attribution where appropriate; isolate contamination and incremental rework. The generic finished-article flow does not prove returned quality; reinspection or reshipment creates no new Q. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Tableware, kitchenware, other household articles and toilet articles, of plastics `6ea38dc6-ba15-428c-8881-f25b8ef37de1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-general-2010`

###### Supply-service electricity (`service_electricity`)

Actual separately attributed packing/storage/handling electricity for the matched cohort and interval. Native CN grid-average consumption supply at1–35kV to user, reference Net calorific value as MJ. Use only the actual MV plant import gate; do not substitute a BR mix, incineration-generated electricity, a cable or transformation service. Reconcile branch-meter use and real transformer/distribution losses once. Meter actual post-release packing equipment, storage and handling loads, including their attributable idle periods and utility losses. Keep injection-moulding and other manufacturing loads exclusively in the manufacturing account; allocate any genuinely shared equipment exchange by its measured causal driver without duplicate purchase of onsite utilities. Reference unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_service_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_energy`
- Sources: `ilcd-general-2010`

###### Corrugated shipping carton (`carton`)

One complete actual corrugated shipping carton, including its manufactured board/adhesive construction, Mass/kg. Verify the complete actual carton composition and supplier boundary. An unspecified packaging-material identity cannot establish one corrugated carton; retain this specific article without an unverified UUID. Track liners, tape and wrap separately and avoid repurchasing the carton’s own constituents. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE stretch wrapping film (`stretch_film`)

One actual supplied monolayer LDPE stretch-film preparation with its complete additive composition and core/liner separately identified; no generic plastic-film UUID is assumed to establish grade or wrapping route. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE stretch wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### BOPP acrylic carton-sealing tape (`sealing_tape`)

One complete purchased BOPP-backed acrylic adhesive tape formulation, not separate duplicate purchases of backing and adhesive; split a real release liner/core as its own material. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: BOPP tape with acrylic adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Reusable solid-wood pallet (`wood_pallet`)

Only an actual supplied solid-wood pallet, with fasteners/composition and supplier ownership/return history. Complete purchased pallet is counted once; distinguish repairs and each replacement material when they actually occur. Internal reuse is not a purchase or bowl output. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Solid-wood transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

#### Outputs

##### Product flows

###### Corrugated shipping carton (`carton_out`)

Record the actual physical outward shipment/return of this one packaging article, distinct destination records and same material stock ledger; never add its mass to bare bowl Q. One complete actual corrugated shipping carton, including its manufactured board/adhesive construction, Mass/kg. Verify the complete actual carton composition and supplier boundary. An unspecified packaging-material identity cannot establish one corrugated carton; retain this specific article without an unverified UUID. Track liners, tape and wrap separately and avoid repurchasing the carton’s own constituents. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE stretch wrapping film (`stretch_film_out`)

Record the actual physical outward shipment/return of this one packaging article, distinct destination records and same material stock ledger; never add its mass to bare bowl Q. One actual supplied monolayer LDPE stretch-film preparation with its complete additive composition and core/liner separately identified; no generic plastic-film UUID is assumed to establish grade or wrapping route. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE stretch wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### BOPP acrylic carton-sealing tape (`sealing_tape_out`)

Record the actual physical outward shipment/return of this one packaging article, distinct destination records and same material stock ledger; never add its mass to bare bowl Q. One complete purchased BOPP-backed acrylic adhesive tape formulation, not separate duplicate purchases of backing and adhesive; split a real release liner/core as its own material. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: BOPP tape with acrylic adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Reusable solid-wood pallet (`wood_pallet_out`)

Record the actual physical outward shipment/return of this one packaging article, distinct destination records and same material stock ledger; never add its mass to bare bowl Q. Only an actual supplied solid-wood pallet, with fasteners/composition and supplier ownership/return history. Complete purchased pallet is counted once; distinguish repairs and each replacement material when they actually occur. Internal reuse is not a purchase or bowl output. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Solid-wood transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Gross physical bowl dispatch (`dispatched_bowls`)

Actual bare bowl mass physically dispatched per original cohort, separate from packaging and external returns received. Broad native finished-plastic-household-article/Mass identity still requires the same PP bowl configuration and acceptance limitations; it does not certify use performance. This is a service-ledger exit, not a second first_release or a net-delivery denominator. Closing FG and losses remain separate stock records. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Tableware, kitchenware, other household articles and toilet articles, of plastics `6ea38dc6-ba15-428c-8881-f25b8ef37de1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-general-2010`

##### Waste flows

###### Waste Corrugated shipping carton (`carton_waste`)

Actual discarded corrugated shipping carton with complete composition, adhered product/water subledger and treatment destination; do not net it against new purchases or invent coproduct credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste LDPE stretch wrapping film (`stretch_film_waste`)

Actual discarded LDPE stretch wrapping film with complete composition, adhered product/water subledger and treatment destination; do not net it against new purchases or invent coproduct credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste LDPE stretch wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste BOPP acrylic carton-sealing tape (`sealing_tape_waste`)

Actual discarded BOPP tape with acrylic adhesive with complete composition, adhered product/water subledger and treatment destination; do not net it against new purchases or invent coproduct credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste BOPP tape with acrylic adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste Reusable solid-wood pallet (`wood_pallet_waste`)

Actual discarded Solid-wood transport pallet with complete composition, adhered product/water subledger and treatment destination; do not net it against new purchases or invent coproduct credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste Solid-wood transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Damaged PP bowl waste (`damaged_bowls`)

Actual post-release damaged/returned PP bowl waste with original cohort, contamination, complete mass and treatment destination; remove it from FG physical stock but do not erase its manufacturing burden or create new output by reinspection. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Discarded PP household bowls
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw amounts with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-general-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | Use this hierarchy only for an attributional inventory requiring allocation. First identify actual functions and dedicated operations; subdivide or virtually subdivide their measured inputs and outputs. Product-specific PP and rejected runs remain with the corresponding original bowl cohort. | ilcd-general-2010 |
| allocation_causality | shared exchanges | For each remaining exchange determine which physical relationship controls its amount. Use measured machine cycle/load only when causal for that electrical load; storage may require occupied volume/area and duration, while transport may be mass- or volume-limited. Document tests and sensitivity. No blanket mass, time, physical/economic choice or fixed share across all exchanges. | ilcd-general-2010 |
| allocation_residual | genuinely residual multifunctional process | Only demonstrably unresolved residual multifunctional-process burdens may use contemporaneous quantities times market value at the same common-process exit gate and actual supplied condition. Remove downstream conditioning, packaging, transport and trading value. Retain evidence, excluded alternatives and sensitivity. Non-positive/unknown prices or missing causal data are explicit review issues, not automatic economic allocation. | ilcd-general-2010 |
| allocation_scrap | internal recovery and exported rejects | Internal recovery carries burdens and cancels within the physical gate. Determine actual waste/service/product status of each export and required treatment; sale alone gives no avoided-virgin credit. Never use allocated quantities to close physical balances. Any exported recovered-material or end-of-life method requires separate justified boundary review. | ilcd-general-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

Collect raw observations before any reference division. The aggregation_rule column labels the final destination basis only; it instructs no arithmetic at collection. calc_units converts original units/rates, calc_attribution handles real causal attribution and inherited WIP vectors, and calc_reference alone calculates A_i/Q once. Card amounts and aggregation reference that same stored result. Preserve original units, unallocated physical quantities, per-exchange inherited burdens, uncertainty and zero-output records throughout.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | Whole pellet supplies and raw-material/WIP genealogy | raw foreground record | receipt ID; lot; complete formulation; supplier net mass; opening/closing raw stock; withdrawal; external returns; WIP mass/state; inherited exchange vector; internal regrind origin and heat passes | Weigh with calibrated scales; reconcile receipts to withdrawals and residual stock by material and configuration. Preserve raw amounts and imported historical vectors before any division. Retain actual colour/additive composition as nested subledgers. | kg | Each receipt/withdrawal and shift close | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Scale calibration; supplier specification; lot genealogy; inventory counts |
| cp_energy | manufacture | Actual manufacturing electricity | raw foreground record | meter ID; raw opening/closing kWh or MJ; timestamp; voltage; geography; branch loads; actual transformer/distribution losses; cycle/load traces; idle/start/stop time; cohort assignment | Read main and branch meters, reconcile the plant import gate and equipment events; retain raw energy units. Separate production and supply-service loads and test any shared-load driver before allocation. | kWh or MJ | Continuous meters with shift and campaign reconciliation | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Meter calibration; bills; gate diagram; time series and loss reconciliation |
| cp_service_energy | supply_services | Actual supply-service electricity | raw foreground record | meter ID; raw opening/closing kWh or MJ; timestamp; voltage; geography; branch loads; actual transformer/distribution losses; cycle/load traces; idle/start/stop time; cohort assignment | Read main and branch meters, reconcile the plant import gate and equipment events; retain raw energy units. Separate production and supply-service loads and test any shared-load driver before allocation. | kWh or MJ | Continuous meters with shift and campaign reconciliation | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Meter calibration; bills; gate diagram; time series and loss reconciliation |
| cp_water | manufacture | Separate water supplies and destinations | raw foreground record | source; supply agreement; raw inlet/outlet mass or integral volume; actual rate/time if rate measurement; measured density and temperature/pressure; opening/closing loop stock; gross received/returned heat water; enthalpy; bleed; evaporation; carryover; test evidence | Meter each physically distinct inlet/outlet and liquid stock; weigh or use independently measured density at actual state. Distinguish rates from already integrated volume and avoid treating gross circulation as consumption. | kg; m3; MJ | Continuous flows and each fill/cleaning event | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Meter/balance calibration; density method; temperatures; supplier water/heat contract; uncertainty |
| cp_aux | manufacture | Each complete auxiliary formulation or refrigerant | raw foreground record | exact formulation/chemical; batch; supplier assay; carrier water; raw receipt/withdrawal; opening/closing stock; equipment charge; spill; recovery; disposition; causality driver | Reconcile purchase and actual withdrawals with chemical-specific stock/charge and recovered/spent quantities. Weigh the whole supplied formulation; assay and carrier remain subcomposition. Document a real absence instead of assigning invented zero. | kg | Each delivery/use/service and period close | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Supplier SDS/TDS; calibration; maintenance/charge logs; composition and disposal records |
| cp_packaging | supply_services | Each single packaging article and full stock ledger | raw foreground record | material; complete supplied composition; empty tare; opening/closing empty/attached WIP/attached FG/reusable stocks; external acquisitions; external returns received; gross physical outward shipments; external returns sent; waste; internal reuse; ownership; historical burden | Weigh representative actual supplied packaging configurations and reconcile mass/count records by each material and destination; preserve tare/contents separately. Keep associated inbound packaging and actual acquisitions distinct; identify any supplier packaging burden already included. | kg; count | Each packing/return/waste event and stock boundary | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Tare samples; supplier composition; stock count; return/shipment and waste tickets |
| cp_inlet_packaging | manufacture | Each single packaging article and full stock ledger | raw foreground record | material; complete supplied composition; empty tare; opening/closing empty/attached WIP/attached FG/reusable stocks; external acquisitions; external returns received; gross physical outward shipments; external returns sent; waste; internal reuse; ownership; historical burden | Weigh representative actual supplied packaging configurations and reconcile mass/count records by each material and destination; preserve tare/contents separately. Keep associated inbound packaging and actual acquisitions distinct; identify any supplier packaging burden already included. | kg; count | Each packing/return/waste event and stock boundary | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Tare samples; supplier composition; stock count; return/shipment and waste tickets |
| cp_waste | manufacture | Each waste stream before treatment | raw foreground record | stream identity; formulation; raw gross wet mass; water/solid content; adhered product; origin lot; treatment destination; original burden link; actual product/waste status | Weigh and characterise each separate actual stream; reconcile transfer tickets with stocks and capture records. Use nested composition to avoid counting gross wastewater plus the same water/solids twice. | kg | Each discharge/collection and period close | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Calibrated scales; lab methods; waste tickets; destination verification |
| cp_emissions | manufacture | Each actual chemical species and medium | raw foreground record | exact species or analytical indicator; CAS where applicable; air compartment/particle size; sampling method; concentration and actual gas conditions; integrated volume or real rate/time; detection limit; uncertainty; recovery/charge balance; campaign context | Use matched flow and species-resolved measurements or an independently justified chemical-specific balance; distinguish analytical totals from species. Convert gas state consistently and integrate only rates. Non-detect and unmeasured are distinct; no default gas species is inferred from IFC. | kg; original analytical units | Representative actual operating states including start-up/upset | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Laboratory method; sampling train; raw time series; detection limit; independent balances |
| cp_release | manufacture | Unique new first release and net bowl mass | raw foreground record | configuration; batch/cohort; release ID; cooled accepted net mass; gross mass; detachable tare; accepted/rejected disposition; actual tests; prior-release flag; WIP status; timestamp | Weigh cooled accepted bare bowls with calibrated scales and traceable tare. Deduplicate first-release IDs against earlier FG/returns; retain all failures and rework history. Sum only unique newly accepted kg into Q; keep count checks as checks. | kg | Each first release and stock boundary | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Scale calibration; acceptance tests; release IDs; deduplication ledger |
| cp_fg | supply_services | FG stock and actual physical delivery/returns | raw foreground record | cohort; original release; opening/closing FG mass; inherited exchange vectors; new Q transfer; gross physical dispatch; external returns received; original-dispatch reverse; reshipment; post-release waste; incremental rework; service interval | Reconcile warehouse weights, shipment/return documents and original cohort vectors. Isolate previous-cohort stock and services. Reinspection/re-dispatch does not create production; link actual incremental rework once to the original cohort. | kg; original vector units | Each movement and opening/closing census | Complete declared campaign including zero-output and opening/closing stocks | Actual site and line/cohort; declared gate | per 1 kg reference flow | Inventory census; calibrated weights; shipment/return IDs; matched historical burden |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all inventory rows | Convert raw observations to the row reference unit before attribution: energy_MJ = energy_kWh ×3.6; use a single integral volume as collected; for a real volume rate integrate over its actual measured time; mass = volume × independently measured substance density at the same state. Preserve raw observations and uncertainty. | raw_amount; raw_unit; measured_state; cp_energy; cp_service_energy; cp_water; cp_emissions | converted_raw |  |
| calc_release | first_release | Q = sum of unique newly first-released accepted net bowl kg in cp_release for the declared configuration/cohort. Prior-release returns/reinspection/reshipments are excluded from new production. Closing FG from the same first release is already within Q. | cp_release; configuration; cohort | Q | ikea-kalas-bowl |
| calc_attribution | all inventory rows | A_i is the attributable unnormalised amount for row i: reconcile converted current observations with opening/closing WIP quantity and each inherited exchange vector; retain all actual failed/idle/cleanup/rework burdens; cancel internal transfers/regrind. Apply section7 separately to each shared exchange, record direct and residual shares and their sum. Preserve the unallocated physical ledger independently. Supply-service A_i contains actual incremental services for its matched cohort/interval; historical manufacturing burden is carried, not produced again. | converted_raw; opening_WIP_vectors; closing_WIP_vectors; internal_transfers; actual_rework; allocation_evidence | A_i | ilcd-general-2010 |
| calc_reference | all inventory rows | x_i = A_i / Q for Q>0, exactly once. A_i is the attributable raw amount from calc_attribution in the stated row unit; Q is new first-release kg from calc_release. x_i is the result per1kg reference flow; cards and collection aggregation only point to this same result and never divide it again. For Q=0 retain raw records and unresolved cohort assignment without a unit result. | A_i; Q; calc_attribution; calc_release | x_i |  |
| calc_physical | all processes | Before allocation close each unallocated physical gate. Manufacturing: opening WIP and in-process water/oil/refrigerant stocks + net withdrawals of each physical input = new Q + closing WIP and in-process stocks + each actual external output/loss; internal recovery cancels. FG: opening FG + new Q transfer + external returned bowls = closing FG + gross outward physical bowls + post-release waste/loss. Consolidation cancels internal new Q once. Include raw-material stocks separately; energy is not a mass term. Resolve discrepancies against uncertainty, never force residual to zero. | cp_material; cp_water; cp_waste; cp_emissions; cp_release; cp_fg | unallocated_gate_balances |  |
| calc_packaging | all packaging rows | Apply boundary_packaging to each material separately using kg and verified counts/tare. Preserve gross physical outward/return movements and attached opening/closing WIP/FG. Internal reuse cancels; associate historical burdens with actual service cohorts. Only actual new acquisitions enter purchase burden; never add packaging to Q. | cp_packaging; cp_inlet_packaging; packaging_ownership; historical_packaging_vectors | packaging_material_balances |  |
| calc_species_elements | manufacture | Maintain independent total physical mass and relevant C/H/O or actual additive-element balances across matching gates, using measured composition and all real water/chemical streams. Species/reaction evidence is separate from elemental totals. Do not fit two unknowns with one residual, infer a species from carbon closure, assume reaction/structural water, or equate COD/VOC to chemical mass. | cp_material; cp_aux; cp_water; cp_waste; cp_emissions; independent_composition | independent_mass_element_species_checks | ifc-plastic-products-2007 |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify each whole preparation, flow type, chemical identity, native route/form/grade, all properties, geography/medium and provider gate before a quantitative package uses its UUID. A broad accepted display cannot prove supplier compatibility. Preserve exact native Chinese basename. | Complete native record; specification; provider boundary |
| dq_completeness | all processes | Demonstrate actual presence/absence for conditional rows. Add every actual missing chemical/formulation, utility, fuel, packaging component, waste and species/destination as a specific atomic row before inventory completion; no other/zero bundle or de minimis omission is authorised. | Process walkdown; BOM; maintenance; SDS; full movement/emission ledger |
| dq_temporal | all collection protocols | Cover the full same declared campaign, site and configuration with opening/closing stocks, all failed/idle periods and supplier/utility agreements. Disclose sampling and temporal/geographic gaps and sensitivity; no source case becomes a universal range. | Calibrations; time series; stock census; site evidence |
| dq_uncertainty | all calculations | Keep unmeasured distinct from zero/non-detect. Quantitative packages lacking a real denominator, core route, species support, WIP/FG historical burdens or defensible allocation remain incomplete/held; no schema/check result grants scientific or translation approval. | Gap ledger; uncertainty; sensitivity; independent review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | all processes | Check actual product and complete manufacturing route against every inclusion/exclusion and required qualifier. Household bowls are not sanitary fixtures or conveyance packaging; a common polymer does not make adjacent methods interchangeable. | un-cpc3-2025; ineos-pp-processing-2007 |
| validate_basis | all inventory rows | Exactly one first_release Product output is the reference_flow_link, with1kg declared basis in both languages. Verify raw records, calc_units, calc_attribution and the sole calc_reference division; Q=0 has no unit result. Check first-release deduplication and packaging exclusion. | ikea-kalas-bowl |
| validate_physical | all processes | Reconcile manufacturing, FG and consolidated physical gates, each packaging material, raw stocks and WIP/FG per-exchange inherited vectors independently from allocated results. Keep external returned water actual thermal state and supplier convention. A fitted residual cannot establish two unknowns or a real species. | ifc-plastic-products-2007 |
| validate_atomic | all inventory rows | Each selected flow is one specific physical/chemical exchange. Verify actual applicability and every adopted native limitation in its full description. Conditional species need independent speciation; non-detect is not an absent source, and an unresolved auxiliary UUID does not permit an aggregate binding. | ifc-plastic-products-2007 |
| validate_allocation | shared exchanges | Check the subdivision/virtual-subdivision record, exchange-specific determining causality and only genuine residual same-gate/state contemporaneous market value. Reject arbitrary physical/economic selection, fixed shares or automatic recycling credit. | ilcd-general-2010 |
| validate_terminal | first_release | Require actual drawing, material and food-contact/quality test evidence and article-specific use instructions at first release. Do not infer microwave capability, sterile status, lifetime or a single-bowl mass from generic PP guidance, retail packaging weight or a successful engineering check. | ikea-kalas-bowl; ikea-kalas-care |
| validate_completeness | all processes | Report performed/skipped checks, missing real data and uncharacterised species separately from result status. No unavailable relationship may be claimed passed. Ordinary future supplier/auxiliary measurements are collection requirements; a real missing core terminal or methodological relationship is an explicit draft/hold. | ilcd-general-2010 |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A completed evidence-backed1kg newly released bowl manufacturing inventory; separately identified actual supply-service supplement if available |
| allowed_use | Model the declared complete PP bowl configuration and route with matching supplier/gate evidence; preserve uncertainty and actual service interval |
| excluded_use | No whole-CPC36940 coverage; functional product comparison; disposable packaging/sanitary article substitution; unmeasured generic factor; medical/sterile or blanket microwave/lifetime claim |
| required_metadata | All reference qualifiers; actual site/period; source/provider gates; configuration; allocation decisions; raw denominators; WIP/FG/return vectors; service interval; packaging ownership; species/medium and uncertainty |
| required_quality_disclosure | Scientific review and translation status remain distinct from checks; identify measured/estimated/missing values and actual omissions; no publication or mapping acceptance inferred |
| update_trigger | Changed grade/formulation; mould/route/acceptance; utility gate; actual operations/species; reuse policy; supplier evidence; stock or allocation method; consequential scope |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ineos-pp-processing-2007 | handbook | INEOS O&P USA, Polypropylene Processing Guide, March 2007, pp.3–9 and13–18; https://www.ineos.com/globalassets/ineos-group/businesses/ineos-olefins-and-polymers-usa/products/technical-information--patents/ineos_polypropylene_processing_guide.pdf; retrieved2026-10-16 | Qualitative PP feed/forming/cooling/ejection and defects; pre-coloured resin versus separate colouring; internal regrind limitations. No universal settings, recipe, regrind share, emission factor or product approval. |
| ikea-kalas-bowl | literature | IKEA, KALAS bowl mixed colors, article204.613.78, US product page snapshot; https://www.ikea.com/us/en/p/kalas-bowl-mixed-colors-20461378/; retrieved2026-10-16 | Real household food-serving bowl endpoint and declared PP material/care. Neither a manufacturing recipe nor evidence of one specific resin grade, factory or net single-bowl mass. |
| ikea-kalas-care | handbook | Inter IKEA Systems B.V., Advice and Instructions AA-2535874-3-100, PDF creation metadata2026-09-11, English and Chinese panels on PDF pp.1–2, linked from the retained US article204.613.78 product page; https://www.ikea.com/us/en/manuals/kalas-bowl-mixed-colors__AA-2535874-3-100.pdf; retrieved2026-10-20 | Counterevidence to blanket PP microwave/service-life claims; actual supplied article instructions govern. Consumer washing is outside the manufacturing gate. |
| ifc-plastic-products-2007 | official_guidance | IFC/World Bank Group, EHS Guidelines for Metal Plastic and Rubber Products Manufacturing,30April2007, pp.9–11 and22–23 including Table4; https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf; original retrieved2026-10-16 | Non-reactive forming and environmental-stream screening. High-temperature potential-release table is not a measured PP species inventory or factor; other-polymer/rubber lists do not prescribe PP inputs. Not LCA allocation guidance. |
| ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, PDF275–292/printed255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; original retrieved2026-10-13; reread2026-10-16 | General allocation hierarchy only for this attributional study when allocation is required. Subdivision and virtual subdivision precede exchange-specific determining physical causality and genuinely residual gate-condition market value. No whole-handbook compliance or recycling-credit claim. |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version3.0 structure30June2025 and Explanatory Notes pp.177–179; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retained original retrieved2026-10-12; reread2026-10-16 | Classification context only: plastic semi-manufactures, packing articles and sanitary ware are separate;36940 note is title-only. Narrow scope does not establish accepted whole-leaf coverage. |
