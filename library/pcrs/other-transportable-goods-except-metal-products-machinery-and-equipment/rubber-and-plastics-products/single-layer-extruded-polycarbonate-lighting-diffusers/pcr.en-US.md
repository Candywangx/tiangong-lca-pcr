---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.single-layer-extruded-polycarbonate-lighting-diffusers
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Single-layer extruded polycarbonate lighting diffusers from complete supplied pellets

## 1. Scope and Applicability

Manufacture a specified indoor-lighting-host single-layer, non-cellular, unreinforced, cut-to-length PC diffuser, starting from purchased complete virgin PC pellet formulation. Include receipt/storage, conveyance, moisture conditioning, screw plastication, continuous die forming, actual sizing/cooling, haul-off/cut-to-length, trimming and clean regrind management, dimensional/optical inspection and first quality release. Include actual utility generation/losses and failed, start/stop, idle, cleanup and rework loads. Record actual subsequent packing/storage/handling/dispatch in separate service accounts. This is complete manufacture, not purchased-finished-part repacking. [condale-pc; condale-manufacture; covestro-pc-2018; ifc-plastics-2007]

Actual Condale PC diffuser/manufacturing capability and Covestro pellet-processing evidence form a transparent technical synthesis, not one SKU, plant, grade, recipe or contemporary order. The UK example does not establish a Chinese factory; the CN medium-voltage identity below applies only at a matching actual utility gate. Predrying has a melt-degassing alternative; retain actual equipment and moisture-control evidence without automatically charging both. Source temperatures, moisture thresholds, dimensions, recipe fractions, density, power, losses, lifetime and performance values are not defaults. [condale-pc; covestro-pc-2018]

Exclude complete luminaires, LEDs/drivers, electrical enclosures, insulating fittings, generic building profiles, formed sheet, other polymers/PC blends, external recyclate, reinforcement/foam, multilayer/UV coextrusion, onsite resin or diffuser-masterbatch compounding, injection moulding, coating/printing, bonding/assembly, and outdoor or medically certified uses. A changed construction needs applicability review and complete actual exchanges; exclusion never permits hiding an actual operation. ET evidence distinguishes outdoor protective layers and component fire tests from resin ratings. CPC distinguishes36960 from36310,36950 and36980 but supplies no substantive manufacturing note; this is only a narrow36960 subset. [covestro-et-2016; un-cpc3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.single-layer-extruded-polycarbonate-lighting-diffusers |
| classification_refs | CPC3.0:36960; narrower subset; accepted narrower association is governed by classifications/mappings/cpc-3.0-to-pcr.yaml and its decision record; scientific review remains pending |
| covered_products | One specified single-layer virgin-PC indoor luminaire diffuser cut to length |
| excluded_products | Complete luminaires; LEDs and drivers; electrical enclosures; insulating fittings; generic building profiles; formed sheet; other polymers or PC blends; external recyclate; reinforcement or foam; multilayer or UV coextrusion; onsite resin or diffuser-masterbatch compounding; injection moulding; coating or printing; bonding or assembly; outdoor or medically certified uses; actual departures require complete applicability review |
| representative_product | A bare opal/frosted PC diffuser dedicated to its declared lighting host; no fixed brand or dimensions |
| production_route | Complete pellets → moisture control → screw/die extrusion → size/cool/haul/cut → inspect/first release → separately observed supply services |
| market_state | Cooled bare accepted diffuser at first release; packaging and host electrical assembly excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce a host-specific PC optical lighting diffuser |
| How much | 1 kg unique newly first-quality-released net bare diffuser mass |
| How well | Actual approved drawing and dimensional optical mechanical surface and host-interface acceptance; no generic lumen or certification equivalence |
| How long or cycle | One manufacturing campaign through first quality release; useful life and lamp electricity not quantified |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts n.e.c. of lamps, lighting fittings, illuminated signs, illuminated name-plates and the like, of plastics `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part drawing and dedicated lighting host interface; PC grade and virgin origin; complete supplied formulation and optical finish; linear or branched structure and actual additive declaration; single-layer non-cellular unreinforced construction; actual drying or melt-degassing configuration; die sizing cooling haul-off and cut-length route; dimensional optical mechanical and duty-specific acceptance; actual indoor use restriction and no whole-lamp approval claim; unique first-release cohort and net mass; raw-material WIP FG and equipment-loop stocks; each inherited exchange vector and original cohort denominator; internal regrind genealogy and thermal history; external return direction and original release linkage; observed post-release service interval and carryover; CN medium-voltage import gate and actual losses; water thermal state and supplier water-energy convention; whole preparations and nested constituent ledgers; each package material stock and gross movement ledger; species particle size compartment and independent identification; site period allocation hierarchy uncertainty and completeness |

Every required qualifier must appear in consumer-visible dataset metadata, reference description, process notes or equivalent fields. Q is unique new first-release net kg; same-cohort closing FG is already inside Q, not additional production. Count, length and gross packaged weight do not replace measured net mass; a length conversion requires measured same-configuration linear mass with sampling, conditioning and uncertainty, never density inferred from a native secondary coefficient.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is unique newly first-quality-released net bare diffuser kg for one configuration/cohort, calibrated weighed after cooling and acceptance excluding detachable tare. cp_release collects raw kg; calc_reference alone divides attributable raw numerators by Q. |
| native_units | all inventory rows | Native reference property | kg or MJ | Mass and energy use their verified native chains. Convert electricity kWh to MJ by3.6 exactly before attribution; energy is not a mass balance term. No count-to-mass or length-to-mass constant is invented. |
| raw_conversion | all inventory rows | Measured extensive quantity | raw units | Whole preparations enter once with assay/carrier subledgers. An already integrated volume is not multiplied by time; integrate only a real rate. Mass from volume requires independently measured substance-specific density at stated temperature/pressure. |
| zero_output | all inventory rows | Raw burden vector | raw units | Retain all failed/start/stop/idle/cleanup/rework burdens for Q=0; preserve unresolved cohort attribution and report no unit result. Reinspection/reshipment never creates Q. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete virgin unreinforced extrusion-grade PC pellet preparation at receipt with upstream burden and packaging boundary declared |
| starting_condition_role | Purchased material for complete foreground conversion |
| product_classification_scope | Narrow dedicated plastic lighting diffuser subset of36960; not generic36310 stock or whole lamp |
| recursive_input_rule | Purchased finished diffusers retain upstream burden and are outside pellet conversion; qualified old returns retain original release and do not recurse |
| upstream_dataset_requirement | Match complete resin formulation and actual utility packaging transport treatment providers without omitting or duplicating their included burdens |
| disclosure | Site period configuration first-release gate and actual service interval; raw/WIP/FG/equipment-loop stocks with distinct inherited vectors and native restrictions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_applicability | all processes | Apply only to a dedicated indoor-lighting-host single-layer non-cellular unreinforced virgin-PC diffuser made from complete supplied pellets and cut to length. Exclude complete lamps/LEDs/drivers, electrical enclosures, insulating fittings, generic building profiles, formed sheet, other polymers/PC blends, external recyclate, reinforcement/foam, multilayer/UV coextrusion, onsite resin/masterbatch compounding, injection moulding, coating/printing, bonding/assembly and outdoor/medically certified use. Actual departures require complete route review and every actual atomic exchange, not hidden zero. | condale-pc; covestro-et-2016; un-cpc3-2025 |
| boundary_source_context | all processes | Industrial sources are qualitative independent technical synthesis, not one SKU/grade/recipe/factory. Condale UK capability does not establish CN manufacture; each utility geography and provider needs actual compatibility. No source processing threshold, dimension, yield, density, unit mass, energy intensity, lifetime or certification is a default. Preserve real drawing and optical/dimensional/mechanical acceptance; a resin fire rating is not a finished-diffuser or whole-luminaire approval. | condale-pc; condale-lighting; covestro-pc-2018; covestro-et-2016 |
| boundary_route | manufacture | Include the complete actual pellet-to-diffuser conversion and all installed utilities. Record actual drying or melt degassing, die/sizing/cooling/haul-off/cut operations and optical rejection. No fuel/steam/boiler, wash plant, abatement train or refrigerant is presumed. Any actual additional operation needs named atomic inputs/outputs and applicability review. | covestro-pc-2018; condale-manufacture; ifc-plastics-2007 |
| boundary_feed | pc_feed | Whole purchased PC formulation crosses once; supplied diffusion additives and stabilisers remain its composition subledger. Actual separate masterbatch mixing changes the route and requires every whole purchased preparation, mixing energy and loss. Internal regrind retains configuration, contamination and thermal history plus each inherited burden vector; never call it new virgin purchase or free feed. | covestro-et-2016; ifc-plastics-2007 |
| boundary_stocks | all processes | Use disjoint raw-material, WIP, FG, water-loop, oil-charge, refrigerant-charge and abatement-stock accounts, each with opening/closing quantity, state and inherited exchange vector. Do not count circulating water or an in-equipment charge again as WIP. Raw-material withdrawals reflect real stock changes. Retain historical cohorts and original denominators; future missing vectors hold a quantitative package. | ilcd-general-2010 |
| boundary_gates | all processes | Manufacturing Q is first quality release once. Same-batch closing FG is inside Q. Post-release service burdens attach to actual serviced cohorts/intervals including stock remaining unshipped; carry opening/closing FG history, gross dispatch and both external return directions. Reinspection creates no production; actual incremental rework attaches once to the original cohort. Consolidation cancels internal Q transfer and every internal recovery without erasing their burdens. | ilcd-general-2010 |
| boundary_water | manufacture | Separate purchased makeup, free feed moisture, in-loop water, condensate, actual evaporation, aqueous waste and external Product returns. Record actual gross received/returned heat-exchange water with temperature/pressure/enthalpy and supplier water/energy agreement. No presumed reaction or hydration/dehydration is inferred from one residual; mass and relevant element balances are independent from species/reaction-water evidence. | ifc-plastics-2007 |
| boundary_species | manufacture | Screen actual SDS/process/outlet evidence for each real chemical and destination. IFC Table4 omits PC; no listed other-polymer species or factor is transferred. Phenol and R134a cards are conditional, not proof of emissions. VOC/COD/TOC and uncharacterised losses remain indicators/uncertainty; add independently identified species and correct compartments individually before quantitative completion. | ifc-plastics-2007 |
| boundary_packaging | all processes | For each single package material: opening empty + opening attached-to-WIP/FG + opening reusable + external acquisition + external returns received = corresponding closing stocks + packages with gross physical shipments + separate external returns sent + waste. Cancel internal reuse; never reduce real outward mass by allocation or reuse. Packaging is not bare diffuser Q, new purchase on reuse, or an automatic coproduct/credit. Keep inlet sacks and each supply-service package separate. | ilcd-general-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete pellet-to-diffuser manufacture and first release | required | Actual complete route and installed operations | Foreground manufacture | per 1 kg reference flow |
| supply_services | Actual post-release supply services and custody movements | required | Actual observed matched-cohort service interval | Separately reported incremental services and physical stocks | per 1 kg reference flow |

Each card is one physical exchange; conditional rows require real presence/absence evidence, and unmeasured never means zero. Add every actual missing material, utility, package, waste and species individually, and reassess changed routes. Cards and collection aggregation point to the same once-computed calc_reference result without another division. Retain gross physical quantities independently; burden allocation does not shrink physical exchanges.

### Process: Complete pellet-to-diffuser manufacture and first release (`manufacture`)

#### Inputs

##### Product flows

###### Complete supplied PC pellets (`pc_feed`)

Whole actual purchased virgin unreinforced PC pellet formulation, including its supplied optical diffusion or stabilising constituents. Native Product flow is PC granulate, GLO production mix at plant, Mass reference; no CAS, fixed linear/branched structure, grade, pigment recipe or supply geography field is specified. GLO is not a verified site provider. Verify actual extrusion-grade complete formulation, origin and optical acceptance; never bind PC/PBT blends, external recyclate, internal regrind or the electronics-enclosure proxy. Constituents are composition subledgers, not repeated purchases. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polycarbonate granulate `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `covestro-pc-2018`; `covestro-et-2016`

###### Manufacturing electricity (`production_electricity`)

Native Product flow is CN grid-average 1–35 kV alternating-current consumption mix to user, with reference Net calorific value as energy in MJ. Use only the actual CN medium-voltage plant import gate; reconcile real transformers and downstream distribution losses against branch loads. Other geography, voltage or supply route needs another verified flow/provider. Onsite dryers, extruder, die heaters, haul-off, saw, grinder, extraction, compressor and chiller consume this imported electricity once; do not purchase their internally generated services again. Reference unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `covestro-pc-2018`; `ifc-plastics-2007`

###### Cooling-system tap-water makeup (`cooling_makeup`)

Record actual cooling makeup, not the gross internally recirculated quantity. Actual treated tap-water supply crossing the plant gate; native Product flow is municipal/potable water production supply, Mass reference, with no fixed geography in flowInformation. Its secondary Volume coefficient is native metadata, not a measured density. Verify actual source, treatment and state; not raw water, deionised water, recirculating water or external heat-exchange return. Measure makeup and separate every real cleaning/cooling destination. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-2007`

###### Actual equipment-cleaning water (`cleaning_water`)

Conditional on real wet cleaning; do not invent washing for a dry-cleaned line. Actual treated tap-water supply crossing the plant gate; native Product flow is municipal/potable water production supply, Mass reference, with no fixed geography in flowInformation. Its secondary Volume coefficient is native metadata, not a measured density. Verify actual source, treatment and state; not raw water, deionised water, recirculating water or external heat-exchange return. Measure makeup and separate every real cleaning/cooling destination. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-2007`

###### Gearbox lubricating-oil formulation (`gear_oil`)

Only actual whole supplied gearbox oil; record grade, charge stock, makeup and drained destination. Allocate use with real equipment service history; no assumed consumption from installed charge. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Mineral gear lubricating oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastics-2007`

###### Actual R134a circuit makeup (`r134a_supply`)

Include only a verified installed R134a circuit. Record opening/closing charge, purchases, recovery and species-specific loss; another refrigerant requires its own named exchange. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastics-2007`

###### Actual alkaline cleaning preparation (`alkaline_cleaner`)

Conditional on actual compatible wet equipment cleaning. Purchase the whole supplied solution once; assay and carrier water are subledgers. Actual onsite dilution adds separately metered water only; verify PC compatibility and no residual surface treatment. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Aqueous sodium hydroxide cleaning formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastics-2007`

###### Actual abatement carbon charge (`activated_carbon`)

Only actual installed adsorption treatment; retain carbon charge stock, replacement, captured species and spent destination. No abatement unit or removal efficiency is presumed. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Granular activated carbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastics-2007`

###### Incoming resin-delivery sack (`inlet_sack`)

Only actual LDPE sack supplied with feed; tare separate from resin. Keep the physical sack exchange even when its upstream burden is already included in the resin provider; document that inclusion to prevent a second background purchase. Other delivery formats require separate actual rows. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE resin-delivery sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging_in.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_in`
- Sources: `ifc-plastics-2007`

###### External empty resin-sack return received (`inlet_sack_return_received`)

Conditional actual empty sack return from outside, separate from sacks accompanying fresh resin. Retain prior packaging history and real mass; reuse is not a new purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE resin-delivery sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging_in.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_in`
- Sources: `ifc-plastics-2007`

###### External heat-exchange water received (`exchange_water_in`)

Conditional on actual externally supplied cooling water. Record gross mass, temperature, pressure and enthalpy and the supplier water/energy convention; not tap-water makeup and not internal recirculation. No steam/boiler is assumed. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Liquid heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Resin sack leaving with gross physical goods (`inlet_sack_gross_dispatch`)

Only when this actual sack leaves attached to gross physical goods instead of the separately recorded empty return; mutually exclusive custody directions, full mass retained. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE resin-delivery sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging_in.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_in`
- Sources: `ifc-plastics-2007`

###### New first quality release (`first_release`)

One finished bare single-layer PC lighting diffuser of the declared drawing, host interface and optical specification at first quality release. Native broad plastic lighting-parts Product flow is manufactured finished product, production mix at plant, with no CAS, polymer, extrusion route, geometry, performance, lifetime or fixed geography. It is used only for this qualified manufactured optical part; it does not establish whole-lamp, generic enclosure, electrical-insulating-fitting or all-leaf applicability. Verify material and host-specific dimensional/optical/mechanical acceptance. Packaging and fitted LED/electrical parts are excluded from net part mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Parts n.e.c. of lamps, lighting fittings, illuminated signs, illuminated name-plates and the like, of plastics `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `condale-pc`; `condale-lighting`; `condale-manufacture`

###### External heat-exchange water returned (`exchange_water_out`)

Return to the external supplier is a real Product output, with its own gross mass, thermal state and enthalpy; pair with received flow and service contract. Do not book the same water parcel again as makeup/waste or claim automatic recovered-heat credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Liquid heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-2007`

###### Empty resin sack returned externally (`inlet_sack_return`)

Record only real empty sack returns to an external owner with actual mass and condition; distinguish waste sacks and internal reuse. This is not a new purchase, product Q or a credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE resin-delivery sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging_in.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_in`
- Sources: `ifc-plastics-2007`

##### Waste flows

###### Exported PC rejects and offcuts (`pc_rejects`)

Weigh the specific unfilled-PC stream leaving manufacture; retain contamination and treatment identity. Internal clean regrind stays inside the gate with inherited vectors and heat history; it is not this external waste output. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: PC extrusion rejects and offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Captured PC dust (`captured_pc_dust`)

Record captured particulate from the actual saw/grinder/extraction train, polymer identity and contamination separately from air release and rejects; no removal rate is presumed. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Captured PC particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Spent gearbox oil (`spent_oil`)

Real drained oil with contaminant analysis and destination; reconcile charged equipment stocks, fresh oil and actual losses without using a balance residual as an emission species. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Spent mineral gear lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Recovered R134a for treatment (`recovered_r134a`)

Actual recovered refrigerant leaving for treatment; record purity, container tare, recovery mass and legal destination. Any qualified product sale requires separate status review; recovery is not an automatic avoided-production credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Recovered 1,1,1,2-tetrafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Cooling-loop bleed to treatment (`cooling_bleed`)

Actual aqueous purge crossing to treatment, including characterised contents within the whole effluent; do not also emit its contained species directly to nature. Distinguish external Product return and internal circulation. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Cooling-loop bleed water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Equipment-cleaning effluent to treatment (`cleaning_effluent`)

Actual whole cleaning wastewater, including carried solution ingredients and captured contaminants. Record water/solids/species assays and destination; COD/TOC remain indicators and do not identify phenol or another chemical mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Aqueous equipment-cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Spent adsorption carbon (`spent_carbon`)

Only actual spent carbon; retain captured pollutant identity and total wet/dry mass basis. Contained pollutants travel in this waste stream and are not simultaneously direct emissions. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Spent granular activated carbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-2007`

###### Waste resin sack (`inlet_sack_waste`)

Actual non-returned sack waste by treatment destination; preserve contamination, residual resin and tare as separate subledgers without inventing a resin loss or recovery credit. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste LDPE resin-delivery sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging_in.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_in`
- Sources: `ifc-plastics-2007`

##### Elementary flows

###### Actual PC particulate released to air (`pc_dust_air`)

Only actual measured polymer-specific release to air. Retain sampling medium and particle-size distribution; unspecified total PC dust cannot be bound to a PM2.5 or PM10 UUID. Do not substitute generic VOC or captured filter solids. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: PC particulate matter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastics-2007`

###### Actual phenol release to air (`phenol_air`)

Conditional screening card only: include positive mass solely when actual resin SDS/process sampling independently identifies phenol at this air outlet. IFC Table4 has no PC entry and does not establish this species. Uncharacterised organic releases remain a data-package hold; never force them into phenol or zero. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Phenol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastics-2007`

###### Actual water vapour released to air (`water_vapour_air`)

Actual drying/cooling evaporation identified independently, with humidity/condensate/loop stocks retained. Feed free moisture and evaporated cooling water are separately traced; no presumed reaction water or chemically bound-water loss from a mass residual. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastics-2007`

###### Actual R134a leak to air (`r134a_air`)

Only verified R134a mass lost to the air compartment, reconciled to independent charge/recovery evidence and measured stock changes; no default leak factor and no double count of recovered refrigerant. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-plastics-2007`

### Process: Actual post-release supply services and custody movements (`supply_services`)

#### Inputs

##### Product flows

###### Actual post-release service electricity (`service_electricity`)

Only incremental actual packing, storage, handling and dispatch loads for the identified first-release cohort and observed service interval; no second manufacturing burden. Native Product flow is CN grid-average 1–35 kV alternating-current consumption mix to user, with reference Net calorific value as energy in MJ. Use only the actual CN medium-voltage plant import gate; reconcile real transformers and downstream distribution losses against branch loads. Other geography, voltage or supply route needs another verified flow/provider. Onsite dryers, extruder, die heaters, haul-off, saw, grinder, extraction, compressor and chiller consume this imported electricity once; do not purchase their internally generated services again. Reference unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_service.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `ilcd-general-2010`

###### Corrugated shipping carton (`carton_acquisition`)

Actual external acquisition; retain opening empty/attached/reusable stocks and distinguish internal reuse. One complete supplied corrugated shipping carton only. The generic unspecified-packaging native record does not establish this atomic carton identity; no native flow UUID is adopted for this row. Verify the actual carton construction, fibre composition, grade, coating, supplier and upstream boundary before selecting a compatible flow/provider. Measure the complete actual carton independently. Tape, sleeve and every other packaging article remain separate exchanges; do not infer a GLO production mix or an upstream route from the rejected generic identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Corrugated shipping carton (`carton_return_received`)

Actual package returned from outside; count physical mass even when no new purchase burden occurs. One complete supplied corrugated shipping carton only. The generic unspecified-packaging native record does not establish this atomic carton identity; no native flow UUID is adopted for this row. Verify the actual carton construction, fibre composition, grade, coating, supplier and upstream boundary before selecting a compatible flow/provider. Measure the complete actual carton independently. Tape, sleeve and every other packaging article remain separate exchanges; do not infer a GLO production mix or an upstream route from the rejected generic identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE protective sleeve acquisition (`sleeve_acquisition`)

Actual external acquisition; retain opening empty/attached/reusable stocks and distinguish internal reuse. One complete actual LDPE protective sleeve; verify supplied formulation, dimensions and tare. No paperboard, tape, diffuser mass or other wrapping is bundled into it. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE protective sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE protective sleeve return_received (`sleeve_return_received`)

Actual package returned from outside; count physical mass even when no new purchase burden occurs. One complete actual LDPE protective sleeve; verify supplied formulation, dimensions and tare. No paperboard, tape, diffuser mass or other wrapping is bundled into it. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE protective sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Polypropylene-backed acrylic adhesive packing tape acquisition (`tape_acquisition`)

Actual external acquisition; retain opening empty/attached/reusable stocks and distinguish internal reuse. One actual complete polypropylene-backed acrylic-adhesive tape supply, with adhesive and backing within the purchased preparation; measure actual applied tape and waste. Do not count adhesive again or infer its chemistry from another reviewed tape. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polypropylene-backed acrylic adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Polypropylene-backed acrylic adhesive packing tape return_received (`tape_return_received`)

Actual package returned from outside; count physical mass even when no new purchase burden occurs. One actual complete polypropylene-backed acrylic-adhesive tape supply, with adhesive and backing within the purchased preparation; measure actual applied tape and waste. Do not count adhesive again or infer its chemistry from another reviewed tape. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polypropylene-backed acrylic adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### fg return received (`fg_return_received`)

Actual externally returned previously released bare diffuser; carry original release ID, historical denominator and every inherited burden vector. Reinspection is not new production. One finished bare single-layer PC lighting diffuser of the declared drawing, host interface and optical specification at first quality release. Native broad plastic lighting-parts Product flow is manufactured finished product, production mix at plant, with no CAS, polymer, extrusion route, geometry, performance, lifetime or fixed geography. It is used only for this qualified manufactured optical part; it does not establish whole-lamp, generic enclosure, electrical-insulating-fitting or all-leaf applicability. Verify material and host-specific dimensional/optical/mechanical acceptance. Packaging and fitted LED/electrical parts are excluded from net part mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Parts n.e.c. of lamps, lighting fittings, illuminated signs, illuminated name-plates and the like, of plastics `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `condale-pc`; `ilcd-general-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Corrugated shipping carton (`carton_gross_dispatch`)

Actual package leaving with gross physical shipments including old-FG/reshipments; allocation and reuse never reduce this physical mass. One complete supplied corrugated shipping carton only. The generic unspecified-packaging native record does not establish this atomic carton identity; no native flow UUID is adopted for this row. Verify the actual carton construction, fibre composition, grade, coating, supplier and upstream boundary before selecting a compatible flow/provider. Measure the complete actual carton independently. Tape, sleeve and every other packaging article remain separate exchanges; do not infer a GLO production mix or an upstream route from the rejected generic identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Corrugated shipping carton (`carton_return_sent`)

Actual separate return to an external owner/supplier; exclude packages already in the gross-dispatch row. One complete supplied corrugated shipping carton only. The generic unspecified-packaging native record does not establish this atomic carton identity; no native flow UUID is adopted for this row. Verify the actual carton construction, fibre composition, grade, coating, supplier and upstream boundary before selecting a compatible flow/provider. Measure the complete actual carton independently. Tape, sleeve and every other packaging article remain separate exchanges; do not infer a GLO production mix or an upstream route from the rejected generic identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE protective sleeve gross_dispatch (`sleeve_gross_dispatch`)

Actual package leaving with gross physical shipments including old-FG/reshipments; allocation and reuse never reduce this physical mass. One complete actual LDPE protective sleeve; verify supplied formulation, dimensions and tare. No paperboard, tape, diffuser mass or other wrapping is bundled into it. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE protective sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE protective sleeve return_sent (`sleeve_return_sent`)

Actual separate return to an external owner/supplier; exclude packages already in the gross-dispatch row. One complete actual LDPE protective sleeve; verify supplied formulation, dimensions and tare. No paperboard, tape, diffuser mass or other wrapping is bundled into it. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: LDPE protective sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Polypropylene-backed acrylic adhesive packing tape gross_dispatch (`tape_gross_dispatch`)

Actual package leaving with gross physical shipments including old-FG/reshipments; allocation and reuse never reduce this physical mass. One actual complete polypropylene-backed acrylic-adhesive tape supply, with adhesive and backing within the purchased preparation; measure actual applied tape and waste. Do not count adhesive again or infer its chemistry from another reviewed tape. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polypropylene-backed acrylic adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Polypropylene-backed acrylic adhesive packing tape return_sent (`tape_return_sent`)

Actual separate return to an external owner/supplier; exclude packages already in the gross-dispatch row. One actual complete polypropylene-backed acrylic-adhesive tape supply, with adhesive and backing within the purchased preparation; measure actual applied tape and waste. Do not count adhesive again or infer its chemistry from another reviewed tape. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polypropylene-backed acrylic adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### fg gross dispatch (`fg_gross_dispatch`)

Gross actual physical bare-diffuser dispatch, including old FG and reshipment, reported separately from manufacturing Q. Cancel internal first-release transfer on consolidation; do not add this again to Q. One finished bare single-layer PC lighting diffuser of the declared drawing, host interface and optical specification at first quality release. Native broad plastic lighting-parts Product flow is manufactured finished product, production mix at plant, with no CAS, polymer, extrusion route, geometry, performance, lifetime or fixed geography. It is used only for this qualified manufactured optical part; it does not establish whole-lamp, generic enclosure, electrical-insulating-fitting or all-leaf applicability. Verify material and host-specific dimensional/optical/mechanical acceptance. Packaging and fitted LED/electrical parts are excluded from net part mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Parts n.e.c. of lamps, lighting fittings, illuminated signs, illuminated name-plates and the like, of plastics `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `condale-pc`; `ilcd-general-2010`

###### fg return sent (`fg_return_sent`)

Actual separate outward returned bare diffuser, mutually exclusive with gross-dispatch custody movements; preserve original cohort, reason and destination. No new manufacture is created. One finished bare single-layer PC lighting diffuser of the declared drawing, host interface and optical specification at first quality release. Native broad plastic lighting-parts Product flow is manufactured finished product, production mix at plant, with no CAS, polymer, extrusion route, geometry, performance, lifetime or fixed geography. It is used only for this qualified manufactured optical part; it does not establish whole-lamp, generic enclosure, electrical-insulating-fitting or all-leaf applicability. Verify material and host-specific dimensional/optical/mechanical acceptance. Packaging and fitted LED/electrical parts are excluded from net part mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Parts n.e.c. of lamps, lighting fittings, illuminated signs, illuminated name-plates and the like, of plastics `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `condale-pc`; `ilcd-general-2010`

##### Waste flows

###### Waste corrugated shipping carton (`carton_waste`)

Actual package waste crossing to its declared treatment destination; retained attached residues are composition subledgers. This specific waste article has no adopted native UUID; verify actual whole article composition, contamination and destination. No Product identity is reused as Waste identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE protective sleeve waste (`sleeve_waste`)

Actual package waste crossing to its declared treatment destination; retained attached residues are composition subledgers. This specific waste article has no adopted native UUID; verify actual whole article composition, contamination and destination. No Product identity is reused as Waste identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste LDPE protective sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Polypropylene-backed acrylic adhesive packing tape waste (`tape_waste`)

Actual package waste crossing to its declared treatment destination; retained attached residues are composition subledgers. This specific waste article has no adopted native UUID; verify actual whole article composition, contamination and destination. No Product identity is reused as Waste identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste polypropylene-backed acrylic adhesive tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Post-release diffuser rejects (`fg_waste`)

Actual irrecoverable FG leaving to treatment after first release; retain original burden and reason. Actual rework retains original cohort with incremental loads once, never creates a second Q. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: PC diffuser rejects
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_i result; collect raw observations with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ifc-plastics-2007`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | Use this hierarchy only in a declared attributional inventory when allocation is required. First separate dedicated operations, then subdivide or virtually subdivide using actual process understanding and measurements. Dedicated resin, optical rejects and failed runs stay with their causative cohort. | ilcd-general-2010 |
| allocation_causality | shared exchanges | For each remaining exchange identify the determining physical causal relationship and test why it controls quantity. Extruder load/duration, cooling heat removal and warehouse occupied volume/area with time can differ; a convenient proxy is not causality. No universal mass/time share, fixed allocation ratio or free physical/economic choice applies to all exchanges. | ilcd-general-2010 |
| allocation_residual | genuinely residual multifunctional processes | Only after documenting why subdivision and exchange-specific determining causality cannot resolve a real residual, use contemporaneous quantities times market value at the same common-process gate and actual supplied condition. Derive gate values by removing downstream conditioning, packaging, transport and trading contributions. Unknown/non-positive prices, uncertain cofunction status or missing measurements require review, not automatic allocation. Retain sensitivity and uncertainty. | ilcd-general-2010 |
| allocation_recovery | internal and exported recovery | Carry internal regrind and reuse burdens and cancel internal transfers. Independently establish waste, treatment-service or product status of each external stream; sale does not grant avoided-virgin credit. Physical balances use unallocated real quantities and never allocated burden shares. Exported recovered-product methodology needs separate review. | ilcd-general-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

Collect unnormalised observations first. aggregation_rule labels the final destination basis only and performs no arithmetic. calc_units handles original units/rates, calc_attribution handles assignment and inheritance, and calc_reference divides by Q once. Historical service cohorts keep their original Q and vectors rather than renormalising against current production.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | Whole pellet supply and raw/WIP genealogy | raw foreground record | lot; grade; supplied composition; receipt issue return weights; opening closing raw stock; WIP quantities states and per-exchange vectors; regrind thermal history | Calibrated net weighing and supplier documents; reconcile disjoint raw/WIP stocks and internal recovery without dropping failed lots | kg | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_energy | manufacture | Actual imported and branch electricity | raw foreground record | site country; import voltage; start end meter; original unit; branch equipment load duration; start stop idle cleanup; transformer distribution losses | Reconcile calibrated import and branch meters; integrate actual power rates only; preserve measured raw kWh or MJ and real shared-load causality | kWh or MJ | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_water | manufacture | Water and thermal-state streams | raw foreground record | each source outlet; gross mass or integrated volume; true rate time; density method temperature pressure; humidity; opening closing water-loop stock; free moisture; condensate; heat-exchange return enthalpy; supplier agreement | Use calibrated meters/weighing with independent state-specific density where needed; close actual disjoint loop accounts; distinguish internal circulation from external purchase/return | kg and actual thermal units | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_aux | manufacture | Whole cleaner oil refrigerant carbon supplies separately | raw foreground record | specific formulation; supplied assay; net receipt; applied dose; opening closing equipment charge; stock; recovery; waste; leakage evidence | Weigh each preparation once; retain component subledgers and independent charge/recovery checks; document actual absence rather than zero by assumption | kg | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_waste | manufacture | Each actual waste stream and treatment destination | raw foreground record | stream identity; state; net weight; wet dry basis; assay; treatment; date; internal versus external; reject cohort | Weigh segregated streams and reconcile treatment receipts and retained contained substances without direct-emission double count | kg | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_emissions | manufacture | Each identified chemical and receiving compartment | raw foreground record | species identity; CAS if identified; particle size; outlet compartment; sampling time; concentration; actual rate or integrated volume; temperature pressure humidity; detection uncertainty; abatement and charge evidence | Independently identify chemical and compartment; convert sampling units before integrating real rates. Reconcile each actual destination; indicators and unexplained residuals do not become species masses | kg per species before reference division | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_release | manufacture | Unique first release and net diffuser mass | raw foreground record | configuration; host drawing; lot; unique release ID; cooled net mass; gross and detachable tare; actual optical dimensional mechanical tests; prior-release flag; rework genealogy | Calibrated weighing after acceptance; deduplicate first-release IDs against old FG and returns; retain failures and sum only unique newly released bare kg into Q | kg | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_packaging_in | manufacture | Resin sack custody and waste separately | raw foreground record | material; tare; opening closing empty attached reusable stock; external receipt; external return received; return sent; waste; upstream included burden | Weigh actual sack movements and confirm supplier-packaging boundary; maintain complete package identity and no overlap with polymer net mass | kg | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_packaging | supply_services | Each carton sleeve and tape custody stream separately | raw foreground record | package material; cohort; opening closing empty attached WIP FG reusable stock; acquisition; external returns received; gross shipment attachment; separate returns sent; waste; composition provider | Calibrated package weighing and movement/return/treatment documents by each material and direction; internal reuse cancels and never alters gross outward quantities | kg | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_fg | supply_services | Physical FG and original cohort history | raw foreground record | cohort; original release ID; original Q; inherited vector per exchange; opening closing FG; new internal transfer; external returns received; gross dispatch; separate returns sent; actual rework and loss | Reconcile weighed bare FG custody and trace original releases; reverse original dispatch custody on actual return, preserve original burdens, and attach only incremental actual rework/services once | kg | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |
| cp_service | supply_services | Actual incremental supply-service electricity | raw foreground record | cohort; service interval; import branch readings; stock occupancy volume area duration; actual handling packing dispatch loads; old original Q and vectors | Meter actual incremental loads and identify serviced cohort; apply exchange-specific causality only to shared remainder, carrying uncompleted observed-interval service burden explicitly | kWh or MJ | Each actual movement or meter interval and stock boundary | Complete campaign plus observed service interval including zero-output records | Actual site line configuration and original cohort | per 1 kg reference flow | Calibration source records full stock/vector reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all inventory rows | Convert original units before attribution: electricity MJ = 3.6 times measured kWh; mass from volume uses independently measured substance/state density. Integrate only real rates once; already integrated volume is not multiplied by duration. Retain original observations and uncertainty. | raw_observations; native_units; measured_density; actual_rates | converted_raw |  |
| calc_release | first_release | Q = sum of unique newly first-quality-released net bare diffuser kg in cp_release for the declared configuration/cohort. Closing FG of that cohort is already within Q; old returns and reinspection/reshipment add no new Q. | cp_release; configuration; cohort | Q | condale-pc; condale-lighting |
| calc_attribution | all inventory rows | A_i is the attributable unnormalised amount of row i after unit conversion, disjoint raw/WIP/FG and equipment-loop opening/closing stock/vector reconciliation and internal-transfer cancellation. Retain failed/idle/cleanup/rework loads. Apply section7 exchange by exchange only where shared. Real physical custody outputs remain gross quantities; no burden allocation reduces their mass. Supply-service A_i is incremental for its observed cohort interval; old cohorts retain original Q and per-exchange history. | converted_raw; opening_vectors; closing_vectors; allocation_evidence; internal_transfers; cohort_history | A_i | ilcd-general-2010 |
| calc_reference | all inventory rows | x_i = A_i / Q for Q>0, exactly once. A_i is this row attributable raw amount in its stated unit from calc_attribution; Q is first-release kg from calc_release. Cards and aggregation only reference this same stored result per1kg reference flow. For Q=0 retain raw burden without a unit result. Historical cohorts use their original Q, never the current campaign denominator. | A_i; Q; calc_attribution; calc_release | x_i |  |
| calc_physical | all processes | Close unallocated manufacturing mass: opening WIP + each actual material withdrawal + opening disjoint in-process water/oil/refrigerant/carbon stocks = Q + closing WIP + closing disjoint stocks + all actual external outputs/losses. Raw-material stores reconcile separately. FG: opening FG + internal new-Q handover + external returns received = closing FG + gross dispatch + separate outward returns + actual FG waste/loss. Consolidation cancels the internal Q handover and recovery; energy is no mass. Do not add same-batch closing FG to manufacturing Q. Independently check relevant element/species balances and measured moisture with uncertainty; one residual cannot solve two unknowns. | cp_material; cp_water; cp_aux; cp_waste; cp_emissions; cp_release; cp_fg | unallocated_physical_balances |  |
| calc_packaging | all processes | Apply boundary_packaging separately to each material and inlet sack; preserve actual gross outward and both external-return directions before attribution. Account attached WIP/FG packages and reusable stocks once. Internal reuse cancels; only external acquisitions incur a new purchase, subject to provider already-included boundaries. | cp_packaging_in; cp_packaging; cp_fg | package_material_balances |  |
| calc_quality | all inventory rows | Retain source identity, measurement uncertainty, non-detect limits, stock history and applicable provider restrictions. Unknown chemical fate, missing inherited vectors or core route/reference inconsistency blocks a completed quantitative package; do not invent zeros, default density, fixed losses or assumed compliance. | raw_observations; uncertainty; cp_release; cohort_history | quality_disclosures |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Inspect full native identity including every name qualifier comment CAS type property reference index and all geography; do not substitute chemical species or particle compartments by a matching word. Use official zh baseName for selected UUIDs. | Verified identity chain and actual provider compatibility |
| dq_coverage | all processes | Cover full matched campaigns and actual services with start/stop idle failed cleanup and rework; no favourable-run sampling or hidden unlisted totals. Keep zero-output and absence evidence distinct. | Logs meters BOM and rejected-lot records |
| dq_stocks | all processes | All disjoint raw WIP FG water-loop and equipment-charge stocks carry their own state and every inherited exchange vector without overlap; old cohorts retain original denominators and returns history. | Opening closing reconciliations and cohort genealogy |
| dq_speciation | manufacture | Use independent substance/destination evidence; mass/element residuals, COD or VOC are not a licence to infer individual chemicals or reaction water. No universal source emission factor or numerical screening threshold. | SDS sampling reports detection and thermal-state uncertainty |
| dq_applicability | reference product | Product-level drawings and actual optical/mechanical/duty acceptance govern use; resin rating or manufacturer capability never proves final diffuser or luminaire certification, lifetime or luminous equivalence. | Actual qualified release evidence and restrictions |
| dq_uncertainty | all inventory rows | Disclose time geography process gate allocation sensitivity missing UUID/provider and measured uncertainty separately; ordinary future site quantities do not become invented numbers. | Traceable data lineage and explicit completeness statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_basis | all inventory rows | Verify explicit first_release Product output link and1kg declared net first-release basis in both languages. Check raw units then attribution then the only A_i/Q operation, Q=0 retention and historical denominator preservation. | condale-pc |
| validate_route | reference product | Require actual complete PC pellet-to-lighting-diffuser route and product acceptance. Purchased finished part repacking, enclosure proxy, changed layer/material or unproven core terminal identity fails applicability; review actual changed operations completely. | condale-pc; covestro-pc-2018 |
| validate_identity | all inventory rows | Every adopted UUID requires compatible full flow and exact property/unit-chain evidence, including geography and media. Specific unresolved auxiliaries remain measured and tracked individually; no generic collection substitutes. Apply all native restrictions in each card. |  |
| validate_balances | all processes | Close independent unallocated raw/WIP/FG and equipment/water/charge accounts, each package material and each real external destination; preserve inherited vectors. Never close with allocated quantities, duplicated FG or unexplained species/reaction-water residuals. |  |
| validate_completeness | all processes | Retain all failed idle cleanup rework zero-output and conditional presence/absence evidence. Unknown core identity/route/basis or missing real species/history holds the quantitative package; ordinary auxiliary UUID gaps do not authorise omission. Engineering checks do not approve science, translation, classification mapping or publication. | ilcd-general-2010 |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset with separately reported actual supply-service accounts |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matched bare single-layer PC lighting-diffuser production with actual drawing and acceptance; link to complete-luminaire model without asserting equivalence |
| excluded_use | Whole-lamp efficacy or certification comparison; generic building profile or electrical enclosure; unqualified other polymer/coextrusion route; default recipe or emissions |
| required_metadata | All section3 qualifiers; actual site period gate native restrictions provider identity per-row units and stocks; separate service interval and original cohorts |
| required_quality_disclosure | Source synthesis scope; independent identity and provider uncertainty; stock/vector continuity; conditional coverage speciation and allocation sensitivity; quantitative package holds |
| update_trigger | Material grade formulation layers route host acceptance utility gate provider source edition or inventory/speciation changes require applicability review |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| condale-pc | extension_guidance | Condale Plastics. Polycarbonate Extrusions. Publisher snapshot 2026-10-20. https://www.condaleplastics.com/materials/material-selection/polycarbonate-extrusions/ | Actual PC optical diffuser product and alternative non-lighting uses; qualitative endpoint evidence |
| condale-lighting | extension_guidance | Condale Plastics. Plastic Extrusions for Lighting. Publisher snapshot 2026-10-20. https://www.condaleplastics.com/applications/lighting/ | Dedicated extruded lighting optics and bespoke host-specific requirements; no universal performance claim |
| condale-manufacture | extension_guidance | Condale Plastics. Plastic Extrusion Manufacturing. Publisher snapshot 2026-10-20. https://www.condaleplastics.com/services/plastic-extrusion-manufacturing/ | Manufacturing capability and cut-to-length state; no factory quantity transfer |
| covestro-pc-2018 | handbook | Covestro. Makrolon Product range Typical values. Edition 2018-02; pp.6–7 and disclaimer p.32. https://www.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1556888808.pdf | PC moisture conditioning and extrusion; degassing and special-grade exceptions; no recipe settings adopted |
| covestro-et-2016 | handbook | Covestro. Makrolon ET – Resins for Extrusion and Thermoforming. Edition 2016-04; pp.3–8 including spanning table pp.4–5. https://www.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1556890009.pdf | Extrusion-grade formulations; adjacent UV coextrusion and component fire-test limitations |
| ifc-plastics-2007 | official_guidance | IFC/World Bank Group. EHS Guidelines for Metal Plastic and Rubber Products Manufacturing. 30 April 2007; pp.1,9–11,22–23. https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf | Qualitative non-reactive extrusion and environmental completeness; Table4 has no PC entry and supplies no PC species or factors |
| ilcd-general-2010 | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA Detailed guidance. First edition March2010; §§7.9.2–7.9.3 PDF275–288. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and exchange-specific causality before genuinely residual common-gate market values; not industrial process evidence |
| un-cpc3-2025 | official_guidance | UNSD. CPC Version3.0 Explanatory Notes. 30June2025; pp.177–179; repository original Structure CSV row36960. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification boundary only; 36960 has no additional substantive manufacturing note |
