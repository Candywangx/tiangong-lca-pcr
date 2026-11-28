---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.agglomerated-wood-waste-and-scrap-in-forms-other-than-pellets-including-wood-briquettes
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Binderless wood fuel briquettes from dry untreated sawmill sawdust

## 1. Scope and Applicability

This attributional method follows one segregated stream of dry sawmill sawdust from untreated solid wood, through its actual generation and collection, inherited preparation/drying and supply, inbound transport, sheltered receipt, screening and necessary size preparation, mechanical reciprocating-piston compaction, actual die/line cooling, sizing and inspection, initial polyethylene-film packing and first quality release. It includes subsequent attributable finished-stock storage, repacking, handling and ex-works loading. It is a manufacturing method for non-pellet fuel briquettes, not a purchased finished-briquette packing service.

The selected route receives sawdust already at the actual press-compatible moisture and size distribution. Required drying before receipt remains in the linked upstream inventory with its actual heat source, water phases, dust, fuels, energy and losses. Dry receipt never establishes that drying was unnecessary or free. A wet feed that needs onsite thermal drying requires a reviewed expanded inventory before this bounded route applies. Screening is retained; additional milling is included only when the measured size distribution requires it. No universal moisture target, species purity, pressure, self-heating temperature, grade, density, energy intensity or heating value is prescribed. No binder, coal, charcoal, wax or other product additive is introduced in this selected composition; actual additions require a new explicit composition and individually identified exchanges.

This is a transparent technical synthesis of FAO route descriptions and modern equipment documentation, not evidence that their examples share one SKU, site or order. FAO distinguishes piston, hydraulic, screw and pellet technologies and describes different cooling arrangements. Modern C.F. Nielsen documents a cooling line and optional downstream saw/inspection/packing. Their published capacities, moisture windows, motor powers and cooling lengths are equipment examples, not inventory defaults here. The MDF and mixed-waste examples in those brochures do not enter this untreated-sawdust composition. [fao-briquetting-1996; cfn-mobile-2023; cfn-saw-2023.]

Exclude perforated-die wood pellets (39281), loose non-agglomerated wood waste (39283), compressed solid wood retaining continuous grain, bonded boards, charcoal/carbonised or torrefied products, chemically treated/glued/painted wood, post-consumer mixed refuse, agricultural-residue blends and hydraulic/screw briquetting. This reference supplies solid wood fuel at the producer gate; combustion performance, delivered useful heat, carbon neutrality, avoided fuel and legal end-of-waste status are not established. The only production denominator Q_c is the net mass of newly first-released briquettes in cohort c at its actual release moisture; packaging is excluded. Closing accepted finished goods already belong to Q_c. Shipment, reinspection or rework of an already released lot never creates Q_c again.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.agglomerated-wood-waste-and-scrap-in-forms-other-than-pellets-including-wood-briquettes |
| classification_refs | CPC 3.0:39282; narrower untreated sawdust mechanical-piston briquette subset; acceptance separate |
| covered_products | Non-pellet uncarbonised binderless wood fuel briquettes from one segregated untreated sawmill sawdust supply stream |
| excluded_products | Pellets; loose sawdust; continuous-grain densified wood; charcoal; bonded boards; treated wood; mixed refuse; other biomass; screw/hydraulic routes |
| representative_product | One declared wood-sawdust briquette specification; net mass at first release; polyethylene-film wrapped |
| production_route | Trace source and prior drying → collect/supply → transport/receive → screen/size → mechanical piston press → actual cooling → size/inspect/pack → first release → attributable stock/loading |
| market_state | Uncarbonised solid fuel briquettes; actual moisture and dimensions; no universal quality class |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply declared non-pellet wood fuel briquettes at first quality release with attributable ex-works services |
| How much | 1 kg newly first-released net briquette at actual release moisture excluding film |
| How well | Meet actual declared moisture/dimensions/integrity/contamination fuel specification; no universal grade or useful-heat equivalence |
| How long or cycle | One first-release cohort and disclosed subsequent storage/loading history; no assumed use lifetime |
| reference_flow_link | `finished_briquette` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Biomass briquette fuel `e464a548-5c9d-41d5-afb7-a88eba3849cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wood source process and waste/co-product status; single sawmill stream and actual species composition; untreated wood and no added product binder confirmation; source allocation and complete inherited load vector; prior drying site and actual heat/fuel/water/emission inventory; incoming and release moisture with wet/dry basis and test method; feed particle-size distribution and actual screening/milling; mechanical reciprocating-piston route and equipment/die settings; actual die/line cooling and water circuit configuration; briquette non-pellet dimensions and intended fuel specification; first-release event IDs and net mass Q_c excluding film; opening/closing WIP and each inherited exchange vector; opening/closing FG cohort IDs and original Q_c; gross dispatch and returns without second production; each packaging stock and destinations; site and accounting period and real product provider; electricity CN grid-average user supply below 1 kV when UUID selected; transport actual truck and service boundary; native identity limits and independent provider compatibility; measured state-specific density or NCV only when a conversion is needed |

Declare every required qualifier in dataset metadata, process notes or reference-flow comment. Native Product identity is only a locator: preserve the finished_briquette card’s full physical restrictions, disclosed classification defect, no numerical/neutrality claims and independent one-provider check in every concrete use.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net first-released briquette mass at measured release moisture. Weigh on calibrated scales and subtract actual film/tare. Q_c excludes packaging, rejected output and previously released material; record accepted closing FG without adding it a second time. |
| unit_conversion | all inventory rows | row-specific | row-specific | Keep raw units. Convert kWh to MJ with 3.6 MJ/kWh before allocation; tonne-km to kg*km with 1000 kg*km per tonne-km. Integrate true rates over their measured time only; a cumulative volume or energy total is never multiplied by duration again. Obtain material-specific density at measured temperature/pressure/composition if volume must become mass; no water-density assumption or secondary Flow coefficient establishes wood density. |
| moisture_accounts | wood exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | For each measured wet mass m and wet-basis water fraction w: water=m*w and dry solid=m*(1-w). Dry-basis moisture u converts by w=u/(1+u). Measure release and intake separately. Physical gross mass, dry wood, free/sorbed water and relevant elements are independent ledgers; moisture loss does not create dry wood. No assumed reaction, structural-water formation or combustion is introduced. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Segregated sawmill sawdust from untreated solid wood; received dry with actual source generation/collection and drying history |
| starting_condition_role | Explicit foreground receipt interface; upstream burdens are connected rather than discarded |
| product_classification_scope | Non-pellet wood briquettes in CPC 39282; no full-leaf coverage claim |
| recursive_input_rule | Incoming finished briquettes are never virgin sawdust or new production. Record their original cohort and upstream provider; internal fines and rework cancel physically and inherit their vector. Purchased briquettes require an explicitly different assessed input route. |
| upstream_dataset_requirement | One verified compatible provider per supplied exchange; include source wood production, source-process allocation, actual prior drying, collection and supply transport exactly once. Waste classification or low value never sets burdens to zero. |
| disclosure | Disclose site/period, source moisture and composition, prior drying, all gate locations, allocation, actual process configuration, stock vectors, service cohorts, exclusions and missing provider evidence. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | all processes | Include all failed runs, zero-output periods, start-up/shutdown, idle, cleanup, dust capture, rework and actual losses. Missing instruments are not zero. Add every actually present material, formulation, fuel, refrigerant, water stream, package, waste and identified emission separately before the dataset can be complete. | fao-briquetting-1996; ilcd-attributional-2010 |
| boundary_gates | all physical balances | Use identical manufacturing/FG/consolidated physical interfaces. Define V_new=Q_c+measured wrappers attached at first release; V_old is gross previously accepted material and its actual wrappers returned after rework. Manufacturing mass: opening raw/empty-package/machine-fluid stores and WIP+external mass inputs+old FG sent to rework=closing same stores and WIP+V_new+V_old returned to FG+external mass rejects/emissions. For each separate ledger preserve net wood, water and package components; Q_c excludes wrappers. Every internal transfer appears once on each side and cancels in consolidation. New Q_c is already within V_new and is not another added output. Keep gross V separate from attributed A; internal fines are not purchases/coproducts. | ilcd-attributional-2010 |
| boundary_stock | all inventory rows | For each exchange j retain opening/closing WIP physical quantities and historical/current burden vectors by lot/stage, including source, utilities and failed work. For newly first-released cohorts A_jc includes actual current attributable records plus historical unreleased WIP burden transferred in, minus separately retained closing unreleased WIP burden, with losses/allocation retained. Accepted closing FG is already in Q_c and its production burden is not subtracted. Previously accepted FG sent through rework carries its original vector as a balanced transfer at both ends, not a second addition of historical production to A_jc; only real incremental rework/service is newly assigned to its original cohort and original Q_c. Cross-period corrections remain linked to the original lot. | ilcd-attributional-2010 |
| boundary_service | p_service | Use gross FG mass including actual attached packaging consistently: opening gross FG+V_new+external accepted returns+V_old returned from manufacturing+actual moisture uptake+new service packaging issued=closing gross FG+gross physical dispatch+gross old FG sent to rework+actual external losses/emissions. Keep net wood/water and each packaging subledger independent; external returns include their real attached packaging. Empty service-packaging store changes are included in the separately closed packaging ledger. Closing FG is already first-released; new Q_c occurs only inside V_new. Link each physical return stock event to its original dispatch; retain both gross events for stock reconciliation. Retain the original production burden once and all actually performed original storage/handling/repacking/loading burdens on the original cohort; add actual return/inspection/repacking/rework increments once. Correct a service booking only with evidence that it was erroneous, duplicated or never performed; a physical return never cancels consumed energy/materials or actual emissions/waste. Attribute service to original cohorts with original Q_c; H allocates service and is never production. | ilcd-attributional-2010 |
| boundary_water_heat | cooling and upstream drying | Record actual die-water recirculation, makeup, purge, evaporation and heat rejection with measured states; internal loop water is not repeated supply. No boiler, steam, purchased heat or condensate return is assumed. If such exchanges actually exist, expand the route: external condensate/heat-exchanger-water returns remain separate Product returns with measured mass/state/enthalpy and supplier water/energy agreement, not an invented negative tap-water or heat input. | fao-briquetting-1996 |
| boundary_packaging | each packaging material | For each actual packaging material separately: opening empty + opening attached WIP + opening attached FG + opening reusable stock + purchases P + first non-purchase external physical receipts N_ext + actual external returns received ER = closing empty + closing attached WIP + closing attached FG + closing reusable stock + packaging on gross physical shipments S + external returns out EO + waste W. P is actual component procurement, including a component genuinely purchased within a whole consignment only as its non-additive share. N_ext is the actual first non-return external physical receipt without component procurement, including supplier-attached, first entrusted, borrowed or leased packaging. ER requires a linked prior external dispatch and true return; P/N_ext/ER are mutually exclusive event partitions. Opening means physically present at period start, not a current receipt. Keep measured component quantity, ownership/custody, original cohort and inherited vector separate from environmental burden: actual manufacture/supply and incremental lease/return/handling service follow one recorded provider convention, never automatically N_ext kg of new manufacture or a repeated upstream-included burden. Match N_ext once to the same external mass gate in boundary_gates/boundary_service using non-additive whole/component bridges; issue between empty stores and WIP/FG is a cancelling internal transfer, not another receipt. Internal reuse/transfers create no purchase, Q_c, automatic coproduct or credit. Each real pallet, label, strap or other additional component needs its own specific atomic physical receipt/destination interface and ledger when used; missing quantity/interface is a concrete-inventory completeness gap, not zero or a collective identity. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_manufacture | Sawdust receipt preparation piston pressing cooling sizing packing and first release | required | Selected dry-sawdust route; source drying remains upstream | manufacturing | Q_c kg newly first-released net briquette |
| p_service | Post-release stock handling repacking and loading | conditional | Whenever accepted lots have real storage/handling/return history | cohort_service | Original cohort Q_c; H is service allocator only |

The following cards are external exchanges of the two bounded processes. Preparation, pressing, cooling and sizing remain separately metered unit operations inside p_manufacture; internal wood/fines and loop-water transfers have the same lot vectors at both ends and cancel, never appearing as additional external supply. For every card obtain unnormalised records from its protocol, apply calc_raw then calc_attribution, and refer to the single calc_normalize result once. Real additional flows require separate cards and provider/measurement review before completion.

### Process: Complete mechanical-piston wood-briquette manufacture (`p_manufacture`)

#### Inputs

##### Product flows

###### Contracted inbound sawdust freight (`inbound_transport`)

One actual road freight service by a 30-ton diesel truck. Native mixed-production/road identity fixes that truck type; other truck sizes/modes require different verified identities. Record gross transported load, distance, utilisation and empty-return allocation; provider includes its own fuel/emissions so do not duplicate them as plant exchanges.

- Selected flow: Road freight transport service `9425f2bf-e734-4884-be1b-645473a3e82d`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_supply; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: ilcd-attributional-2010

###### Receipt screening and necessary milling electricity (`prep_electricity`)

Meter conveying, screening, any justified milling and associated dust aspiration. User-side CN grid-average AC below 1 kV only; native property is Net calorific value interpreted here as electrical energy in MJ, not fuel combustion. Actual site, voltage, supply mix, period, transmission boundary and one compatible provider must match; the Flow is no electricity consumption factor.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_energy; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Mechanical piston and actual cooling electricity (`press_electricity`)

Meter dosing, reciprocating press, actual die-loop pumps and cooling fans; include all start/stop and failed pressing. User-side CN grid-average AC below 1 kV only; native property is Net calorific value interpreted here as electrical energy in MJ, not fuel combustion. Actual site, voltage, supply mix, period, transmission boundary and one compatible provider must match; the Flow is no electricity consumption factor.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_energy; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Sizing inspection packing and compressor electricity (`finish_electricity`)

Meter real sizing/packing drives and onsite compressor if the actual saw uses pneumatic actuation. Compression, distribution leaks and standby remain in this electricity supply; internal compressed air is not bought again. User-side CN grid-average AC below 1 kV only; native property is Net calorific value interpreted here as electrical energy in MJ, not fuel combustion. Actual site, voltage, supply mix, period, transmission boundary and one compatible provider must match; the Flow is no electricity consumption factor.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_energy; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Die cooling-loop makeup water (`cooling_makeup`)

Conditional on an actual water-cooled die; meter fresh makeup, not internal circulation. Native Tap water is treated municipal/potable piped supply, production mix in factory, Water production supply; no fixed geography or treatment recipe. Use one compatible supplier and measured supply state. Native secondary Volume coefficient is not a measured density or conversion for this site; weigh or use independently measured state-specific water density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_water; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: fao-briquetting-1996

###### Purchased whole mineral machine lubricating oil (`lubricant`)

One whole purchased mineral-oil formulation for actual press/crank bearings or drive lubrication; count it once. Retain supplier SDS, viscosity grade and additives as a composition subledger, not additional purchases. Do not substitute a PAO/total-synthesis native record for mineral oil. No lubricant is a product binder in this route; leakage/contamination is measured separately.

- Selected flow: Mineral machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_consumables; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: fao-briquetting-1996

###### Initial polyethylene film wrapper (`film_input`)

One purchased polyethylene film wrapper formulation at plant, CAS 9002-88-4; verify actual polymer, thickness, grade, additives, recycled share and supplier. Native comments distinguish competing PET polyester, which is not this PE input; the unrelated luggage classification is disclosed as an isolated tag inconsistency, not physical permission for PET, resin pellets, cartons or straps. Whole film enters once; additives are subledger details.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_packaging; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: cfn-saw-2023

##### Waste flows

###### Segregated incoming dry untreated sawmill sawdust (`sawdust_input`)

One actual untreated sawmill sawdust waste stream, fine wood particles to small chips, at plant, untreated comb/rec; native reference Mass/kg and non-agglomerated form. Retain actual species/source, legal waste/co-product status, contamination checks, moisture and prior drying/collection burden and one supplier dataset. The native generic uses in fuel/mulch do not establish treatment, grade, composition, density or zero burden. Agglomerated wood-waste UUIDs cannot replace this non-agglomerated feed. Product status at a real site needs a separately compatible Product identity rather than silently changing this Waste type.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_supply; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources: fao-briquetting-1996

##### Elementary flows

###### Measured sorbed ambient water (`ambient_moisture`)

Only independently evidenced net water uptake by wood during manufacture, kept separate from native emission-to-air water identity. No assumed uptake, quantity or negative evaporation; inlet carrier-air humidity cancels against unchanged outlet humidity and is not counted as process consumption.

- Selected flow: Water vapour absorbed from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_water; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: fao-briquetting-1996

#### Outputs

##### Product flows

###### Newly first-released net fuel briquette (`finished_briquette`)

Only newly accepted non-pellet mechanical-piston briquettes from the declared untreated sawdust, after actual cooling, sizing, inspection and initial film packing. The Biomass briquette fuel native record is a Product, production mix at plant, solid fuel industrial, Mass/kg; it covers agricultural/forestry residues and has broad pellet synonyms. Here it is restricted to the declared wood briquette composition/form and gate; it is never pellet equivalence or a provider dataset. Native steam/hot-water classification conflicts with its consistently solid-fuel physical names/comments and Mass reference; this isolated classification defect is disclosed, never used to select steam. Native heating-value range, lower-emission and renewable claims are not adopted as quantitative factors, grade or neutrality. Actual net mass and qualifiers establish the reference. Closing FG is already included in its original Q_c.

- Selected flow: Biomass briquette fuel `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: fao-briquetting-1996; cfn-mobile-2023; cfn-saw-2023

##### Waste flows

###### Unreused captured untreated sawdust (`sawdust_reject`)

Only actual non-agglomerated untreated sawdust fines leaving for a documented external receiver, using the same untreated sawdust Waste identity and Mass/kg restrictions as incoming sawdust. Internal captured and rebriquetted fines cancel and remain in the load vector. No bulk mixed refuse, agglomerated briquette or oil-contaminated sweepings belong to this row.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_residuals; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Separated untreated wood cut-piece reject (`wood_cut_reject`)

Weigh actual screen-separated oversized solid-wood pieces sent externally; record composition/moisture and actual receiver. Internal remilling is transfer, not this waste output.

- Selected flow: Untreated solid-wood cut-piece reject
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_residuals; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Unreused agglomerated briquette reject (`briquette_reject`)

Weigh genuinely rejected still-agglomerated wood briquettes leaving externally; keep failed lots, moisture and destination. Distinguish broken loose sawdust. A Waste record cannot identify the accepted Product output.

- Selected flow: Rejected untreated wood fuel briquette
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_residuals; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Discarded polyethylene wrapper (`film_waste`)

Weigh actual PE offcuts/removed wraps as one material stream with contamination and destination; not an input Product UUID or all packaging wastes. Close the separate PE stock ledger.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_residuals; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Cooling-loop water purge (`cooling_purge`)

Conditional actual purge sent to external treatment. Record whole wastewater mass, temperature and measured dissolved/suspended species as non-additive composition detail; no separate environmental discharge is assumed. No condenser or steam return is inferred.

- Selected flow: Die-cooling-loop purge water
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_residuals; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Collected compressor condensate (`compressor_condensate`)

Only actual collected onsite-compressor condensate crossing to external treatment. Preserve measured whole mass and oil/water assay; oil submass is not another whole wastewater output. No drying condensate is invented.

- Selected flow: Air-compressor condensate wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_residuals; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: fao-briquetting-1996; cfn-saw-2023

###### Drained used lubricating oil (`spent_lubricant`)

Waste used petroleum-based or synthetic lubricating oil contaminated through use, at generation point, treatment unspecified, Mass/kg. Restrict here to the actual drained mineral machine oil; retain assay and one actual external treatment provider. The record gives no recycling, combustion, disposal or credit default and does not include oily water or cleaning textiles.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_consumables; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: fao-briquetting-1996

##### Elementary flows

###### Residual wood particulate release to air (`wood_pm_air`)

Actual uncaptured wood particulate emitted to air with subcompartment and size fraction unspecified; record measured control boundary, sampling and uncertainty. Native Mass/kg defines no chemical composition, size distribution, stack height or LCIA factor. Its clinker example is explicitly only an example and supplies no wood emission factor. Captured fines remain separate Waste/internal return. Do not sum nested PM size fractions; use mutually exclusive fractions if measured and separately identified.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_air; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: fao-briquetting-1996

###### Net actual water vapour release (`water_vapour_air`)

Water CAS 7732-18-5 in vapour phase emitted to air unspecified, Mass/kg. Subtract inlet-air humidity when using an exhaust moisture balance; cooling-loop and wood-water origins are subledger partitions of this whole emission, not additional water outputs. Native broad imported synonyms mentioning ice/heavy/isotopic water do not change this ordinary H2O vapour identity. It is neither liquid effluent nor purchased process steam, and its occurrence is measured, not forced from a single residual.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_air; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: fao-briquetting-1996

###### Speciated alpha-pinene release when present (`alpha_pinene_air`)

Conditional only on actual speciated alpha-pinene, CAS 80-56-8, from this wood/press handling. No amount or universal presence is asserted. Do not map an unspecified stereoisomer to a fixed (1S)-(-) native record or convert a total-VOC detector response into this species. Identify each additional actual gas separately with its own amount and destination; unknown VOC composition remains an explicit measurement gap.

- Selected flow: Alpha-pinene to air, stereochemistry unspecified
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_air; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: fao-briquetting-1996

### Process: Original-cohort finished-goods service (`p_service`)

#### Inputs

##### Product flows

###### Finished-stock handling and repacking electricity (`service_electricity`)

Meter actual electric storage/handling/loading/repacking work including idle and return inspection. User-side CN grid-average AC below 1 kV only; native property is Net calorific value interpreted here as electrical energy in MJ, not fuel combustion. Actual site, voltage, supply mix, period, transmission boundary and one compatible provider must match; the Flow is no electricity consumption factor. Attribute by original cohort and measured activity; use its original Q_c once, never gross dispatch or service H as production.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_service; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: ilcd-attributional-2010

###### Replacement polyethylene wrap (`service_film`)

Actual new PE replacement film only; the same CAS 9002-88-4 at-plant polyethylene-film native limits apply: verify polymer/thickness/grade/additives/recycled share and one supplier, disclose unrelated luggage classification, exclude PET/resin pellets/other package materials. Returned or internally reused film is stock transfer, never a new purchase. Assign to original cohort with original Q_c.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_packaging_service; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_service`
- Sources: cfn-saw-2023; ilcd-attributional-2010

##### Elementary flows

###### Stored briquette water uptake (`service_moisture`)

Only actual post-release net sorption into the original cohort, measured independently; changes physical FG mass, never its original release Q_c. It is not an emission Flow used in reverse.

- Selected flow: Water vapour absorbed from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_service; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: fao-briquetting-1996

#### Outputs

##### Waste flows

###### Removed PE wrapper (`service_film_waste`)

Actual removed film sent externally, by original cohort; retain its own packaging stock balance and measured mass/destination.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_packaging_service; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_service`
- Sources: ilcd-attributional-2010

###### Damaged stored agglomerated briquette (`service_wood_waste`)

Actual still-agglomerated stored briquette lost to an external receiver. Retain original production burden and incremental service, original acceptance ID and Q_c; it does not reverse or create production. Loose disintegrated sawdust is separately recorded under its own identity when real.

- Selected flow: Rejected untreated wood fuel briquette
- Flow property / unit: Mass / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_service; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: ilcd-attributional-2010

###### Loose sawdust from damaged stored briquettes (`service_sawdust`)

Only separately weighed actual disintegrated untreated wood sawdust sent externally, same non-agglomerated Waste at-plant untreated comb/rec Mass/kg limits as the incoming sawdust. Its original cohort burden and original Q_c remain; do not count the same mass again as still-agglomerated briquette reject or captured/internal recirculation.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_service; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: ilcd-attributional-2010

##### Elementary flows

###### Stored briquette net evaporation (`service_vapour`)

Actual H2O CAS 7732-18-5 vapour emitted to air unspecified, Mass/kg, assigned to original cohort. Native imported ice/heavy-water synonyms do not change ordinary vapour identity; no process-steam, liquid-effluent or density factor is inferred. Separate real physical moisture loss from allocation; original Q_c never changes.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_service; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: ilcd-attributional-2010

###### Actual handling dust emitted to air (`service_pm`)

Actual airborne wood particulate, size/subcompartment unspecified, Mass/kg. Native identity specifies no composition, size, stack height, emission factor or LCIA factor; clinker example supplies no value here. Keep captured dust and mutually exclusive measured size fractions separate, and attribute to the original cohort.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section 8 result x_jc for this exchange from cp_service; retain unnormalised raw records and do not divide again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: ilcd-attributional-2010

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_goal | all processes | Use attributional accounting. First identify actual functions and separate dedicated operations or virtual subdivisions, including source sawmill, drying, briquette production and FG services. Assign each exclusive input and its embodied components to its actual recipient without allocating the entire plant by one arbitrary mass fraction. | ilcd-attributional-2010 |
| allocation_physical | remaining multifunctional exchanges | After subdivision, determine for each remaining exchange whether a quantified physical causality actually determines its existence and quantity. Distinguish embodied wood/water, process electricity, transport and storage. A correlation with product mass, market value or heating value alone is not causality. Keep losses and non-valued outputs in the relationship; wet mass, dry wood, time or energy cannot be freely chosen as alternative whole-process keys. | ilcd-attributional-2010 |
| allocation_residual | genuinely residual shared exchanges | Only the unresolved remainder after the preceding steps may use contemporaneous quantities and market values in the actual conditions at one common allocation gate. Remove downstream drying/packing/transport value when reconciling a later quoted price back to that gate. Document quantities, prices, currency/date and uncertainty and test sensitivity. A negative-value treatment function requires explicit functional/boundary review; do not invent a positive product price, fixed ratio or substitution credit. | ilcd-attributional-2010 |
| allocation_recycle | fines rejects and returns | Internal compatible fines retain their load vector and circulation energy; no second raw purchase, avoided burden or new reference output is created. Externally sent rejects have actual treatment/provider destinations. Document any real saleable coproduct and reassess allocation before use; a waste flow name never proves zero burden or environmental credit. Keep biogenic uptake, stored carbon and actual species releases distinct, without automatic carbon neutrality. | ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocol aggregation_rule cells identify the final reporting basis only. Every collection_method collects and retains unnormalised original records; these cells do not execute division. The single section 8 x_jc calculation is the only division by Q_c, after raw-unit conversion, stock reconciliation and true allocation. Inventory amounts and final aggregation reuse that same result.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_supply | p_manufacture | sawdust_input; inbound_transport | supplier_and_weighing | source mill and actual species; untreated declaration; source operation and waste status; supplier and reference amount; source allocation vector; prior drying raw inputs and heat source and water phases and dust and losses; moisture tests and basis; gross and tare mass; transport truck and distance and load; supply boundary | Trace original sawmill and drying records and one compatible upstream provider. Weigh incoming lots on calibrated scales and sample moisture/size. Verify actual 30-ton diesel transport when that UUID is used; isolate transport already included upstream to prevent double counting. Retain raw receipt masses and trip activity before conversion/allocation; carry source burden by lot; no division by Q_c. | kg; kg*km; moisture fraction | each lot and trip | complete production period and inherited upstream periods | source mill/drying supplier and actual receiving site | per 1 kg reference flow | weighbridge calibration; moisture test; supplier route and source allocation evidence |
| cp_release | p_manufacture | finished_briquette | first_release | lot ID; previous acceptance ID check; time; release gross and actual film/tare; net mass; moisture method and wet/dry basis; dimensions; quality tests and target; no binder and route; disposition; Q_c cohort register | Weigh cooled inspected initially packed briquettes on calibrated scales and subtract actual wrappers; release only against declared actual specification and batch records. Deduplicate earlier accepted lots including returns. Sum unique net first-release masses as Q_c; retain closing FG as a destination within that total; no extra yield or shipment denominator. | kg | each first-release event | complete cohort production period | actual manufacturing and release gate | per 1 kg reference flow | scale calibration; release specification; batch register; rejection and return links |
| cp_energy | p_manufacture | prep_electricity; press_electricity; finish_electricity | meters | meter ID; start/end readings; original unit; true power rates and time if applicable; equipment stage; operating modes; cooling/compressor boundaries; site voltage and supply provider; failures and idle; shared-meter partition | Use calibrated submeters or a reconciled measured stage partition of one master meter; include actual conveying, sizing, press, cooling, extraction, packing and compressor. No nameplate-power default. Store unnormalised raw meter differences and measured activity partitions; retain all modes and unit conversions for calc_raw; no division by Q_c. | kWh; MJ; kW and h when actual rate | continuous meter logging and every batch | full period including all failure/idle/start/stop/cleanup | actual production site and shared utilities | per 1 kg reference flow | calibration; master/submeter closure; time and operating log |
| cp_water | p_manufacture | cooling_makeup; ambient_moisture | water_and_moisture | actual die cooling configuration; initial/final loop inventory; makeup; purge; evaporative loss; inlet/outlet state and temperature; measured water density if volumetric; wood moisture uptake; inlet/outlet air humidity; independent measurements | Meter/weigh real water transfers; record loop stocks and independently measured heat rejection. Use paired humidity/moisture measurements for actual net uptake/release. No boiler or steam inferred. Retain raw amounts/states and stocks; distinguish internal circulation from external makeup; no division by Q_c. | kg; temperature; actual volume only with state | each batch and purge and accounting boundary | complete production period | actual die loop and manufacturing air/wood interfaces | per 1 kg reference flow | meter calibration; state/density tests; water/heat-balance reconciliation |
| cp_consumables | p_manufacture | lubricant; spent_lubricant | purchase_stock_waste | whole mineral lubricant receipt; SDS and viscosity grade; opening/closing stores and machine fill; issued mass; drained mass; leaks and contamination; actual treatment receiver | Weigh receipts/issues/drains and reconcile stores and machine fills, including opening historical burdens; keep additive assays as subledger. Retain raw receipt/consumption/waste/stock masses; allocate actual machine-use burden before calc_normalize; no division by Q_c. | kg | each issue/change and stock boundary | full period and inherited machine fill | actual press/drive lubrication and external receiver | per 1 kg reference flow | SDS; invoices; stock reconciliation; waste transfer manifest |
| cp_packaging | p_manufacture | film_input; film_waste; each actual first non-purchase PE receipt N_ext and additional component interface | packaging_stock | PE supplier and composition; thickness and grade; opening empty/attached WIP/attached FG/reusable; purchases; external returns received; closing same stocks; gross shipment wrapper mass; external return out; waste; original cohort IDs; P actual component procurement; N_ext first non-purchase non-return external physical receipt kg by source; ER linked prior external dispatch; receipt event ID/time/direction and actual material/form/type/condition; measured gross/tare/component kg and uncertainty; ownership/custody before/after and entrustment/loan/lease terms; linked supplied consignment; inherited per-exchange vector; actual burden owner and provider-included scope; non-additive whole/component bridge; specific atomic external receipt row/interface | Weigh every actual PE component and every other packaging construction independently of net wood by event, phase and original cohort. Keep complete opening/closing empty, attached-WIP, attached-FG and reusable stocks, actual P/N_ext/ER receipts and gross S/EO/W destinations under boundary_packaging. Include first supplier-attached, entrusted, borrowed or leased non-purchase physical receipts even where manufacture is already upstream included; these are not opening stock, invented purchases or ER without prior-dispatch evidence. Each actual N_ext needs a separately identified atomic external-input quantity/interface matching its material/form/type/direction; add that specific receipt interface where existing purchase/true-return rows do not cover the event before concrete-inventory completeness. Do not merely add a prose symbol, clone procurement rows or use a collective package/UUID. Preserve each event ownership/custody, inherited vector and actual provider scope; assign real supply or incremental services once without buying included manufacture again. Whole-consignment/component views are non-additive. Retain unnormalised raw stocks/movements, reconcile the same manufacturing/FG gate and cancel internal empty-store/FG issuance and reuse without new purchase or Q_c. | kg | each packing/repacking/shipment/return and stock boundary | full production and attributable service history | actual packing and FG service sites | per 1 kg reference flow | scale records; polymer/SDS declaration; stock and return audit trail; delivery/entrustment/loan/lease receipt; original external dispatch; owner/cohort and inherited-vector/provider bridge |
| cp_residuals | p_manufacture | sawdust_reject; wood_cut_reject; briquette_reject; film_waste; cooling_purge; compressor_condensate | separate_waste_measurement | stream ID and actual material/form; raw whole mass; water/solids/oil assay; failed-run ID; captured dust returned/external; receiver/provider and destination; contamination; stock changes | Weigh each external waste separately and reconcile capture/screening/press/saw stocks and internal returns; actual liquid waste is measured whole, with species/origin partitions kept non-additive. Store unnormalised gross whole amounts, non-overlapping destinations and composition/origin subledgers; no Q_c division. | kg | each generation/transfer and stock boundary | full period including failures and cleanup | manufacturing gate to each actual receiver | per 1 kg reference flow | scales; assays; transfer manifests; dust-return closure |
| cp_air | p_manufacture | wood_pm_air; water_vapour_air; alpha_pinene_air | emission_measurement | species CAS/stereochemistry and medium; sampling/control point; concentration basis and actual integrated gas volume or rate/time; inlet humidity; actual gas temperature/pressure; dry/wet basis; detection limit; particulate size fractions; independent moisture and solids measures | Use actual monitored concentration and compatible total gas volume, or integrate real rates once, after controls with fugitive coverage declared. Water, wood solids and VOC speciation need independent evidence, not one residual fitted to two unknowns. Retain raw concentration/volume/rate/time and actual occurrence evidence; calc_raw handles one conversion before allocation; no Q_c division. | kg; actual concentration and volume units | representative operating modes including abnormal periods | full period with documented monitored/extrapolated coverage | real plant-air boundary and each actual species destination | per 1 kg reference flow | sampling report; analyser calibration; detection limits; coverage and uncertainty |
| cp_service | p_service | service_electricity; service_film_waste; service_wood_waste; service_sawdust; service_moisture; service_vapour; service_pm | cohort_service_stock | original acceptance cohort and original Q_c; opening/closing FG wet/dry/water mass and inherited burden; gross shipment ID/mass; matched gross return/original dispatch stock events; performed original service burdens; evidence for erroneous/duplicate/unperformed service-booking corrections; reinspection/rework increment; meters; H activity; loss and species measurements; no second acceptance count | Follow lot genealogy through storage/returns/repacking/loading. Measure real handling activity and physical net water/dust changes; use compatible meters/assays and original supplier links, retaining losses and failed handling. Keep raw activity, original Q_c and stock vectors. Allocate service to original cohorts first; calc_normalize alone divides attributable A by original Q_c once. H and gross dispatch never replace Q_c. | kg; MJ; actual H unit | each event and cohort/stock boundary | actual service history for every included cohort | actual FG storage/handling/loading sites | per 1 kg reference flow | cohort genealogy; stock/meter closure; dispatch/return links; sampling reports |
| cp_wip | p_manufacture | all inventory rows | lot_stage_stock_vectors | lot and process stage; opening/closing WIP wet/dry/water mass; per-exchange historical and current burden vector; internal fines/rework transfers; failed/idle/start/stop/cleanup loads; real allocation; provenance | Take physical stock measurements and retain each exchange vector by lot/stage, cross-checking production/utility records, internal transfers and original FG returns. Retain raw quantities and full vector; perform stock/attribution adjustments in calc_attribution only; never divide stock records by Q_c. | kg; each original exchange unit | each lot transfer and period boundary | full period plus inherited historical cohorts | all manufacturing stages | per 1 kg reference flow | physical stock audit; lot genealogy; source vector reconciliation |
| cp_packaging_service | p_service | service_film; service_film_waste; each actual first non-purchase PE receipt N_ext and additional component interface | packaging_stock | PE supplier and composition; thickness and grade; opening empty/attached WIP/attached FG/reusable; purchases; external returns received; closing same stocks; gross shipment wrapper mass; external return out; waste; original cohort IDs; P actual component procurement; N_ext first non-purchase non-return external physical receipt kg by source; ER linked prior external dispatch; receipt event ID/time/direction and actual material/form/type/condition; measured gross/tare/component kg and uncertainty; ownership/custody before/after and entrustment/loan/lease terms; linked supplied consignment; inherited per-exchange vector; actual burden owner and provider-included scope; non-additive whole/component bridge; specific atomic external receipt row/interface | Weigh every actual PE component and every other packaging construction independently of net wood by event, phase and original cohort. Keep complete opening/closing empty, attached-WIP, attached-FG and reusable stocks, actual P/N_ext/ER receipts and gross S/EO/W destinations under boundary_packaging. Include first supplier-attached, entrusted, borrowed or leased non-purchase physical receipts even where manufacture is already upstream included; these are not opening stock, invented purchases or ER without prior-dispatch evidence. Each actual N_ext needs a separately identified atomic external-input quantity/interface matching its material/form/type/direction; add that specific receipt interface where existing purchase/true-return rows do not cover the event before concrete-inventory completeness. Do not merely add a prose symbol, clone procurement rows or use a collective package/UUID. Preserve each event ownership/custody, inherited vector and actual provider scope; assign real supply or incremental services once without buying included manufacture again. Whole-consignment/component views are non-additive. Retain unnormalised raw stocks/movements, reconcile the same manufacturing/FG gate and cancel internal empty-store/FG issuance and reuse without new purchase or Q_c. | kg | each packing/repacking/shipment/return and stock boundary | full production and attributable service history | actual packing and FG service sites | per 1 kg reference flow | scale records; polymer/SDS declaration; stock and return audit trail; delivery/entrustment/loan/lease receipt; original external dispatch; owner/cohort and inherited-vector/provider bridge |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Convert raw units and integrate true rates once before attribution: E_MJ=3.6*E_kWh; transport_kgkm=1000*transport_tkm; species_mass=compatible_mass_concentration*integrated_gas_volume. If volume is already integrated do not multiply time. Apply measured state corrections and independently measured substance density only where needed; preserve original observations. | raw units; measured state; rate and time when applicable | converted raw numerator by exchange | fao-briquetting-1996 |
| calc_attribution | all inventory rows | Construct A_jc from converted actual records, inherited source and opening WIP exchange vectors, actual internal transfers and closing WIP vectors under boundary_stock. Allocate dedicated work first and remaining exchanges only under allocation_goal/physical/residual. Retain all failed and Q_c=0 loads, actual losses and original FG/rework cohorts. Service A_jc follows original cohort attribution using measured H; H allocates service and is never production output. Physical dispatch/return stock events do not cancel performed original service burdens. Retain those burdens and add actual return/inspection/repacking/rework increments once for the original cohort and original Q_c. Correct only evidenced erroneous, duplicate or unperformed service bookings; preserve production history and all real service consumption, emissions and waste. | converted records; cp_wip; original cohort; allocation evidence | A_jc in the original exchange unit | ilcd-attributional-2010 |
| calc_normalize | all inventory rows | x_jc = A_jc / Q_c, once only for Q_c > 0; x_jc is the exchange amount per 1 kg reference flow of original first-release cohort c. Cards and aggregation refer to this same result without further division. The reference output is exactly 1 kg. For Q_c=0 retain actual burden and disclose its later causal assignment or unresolved carryover; produce no unit result and never divide by zero or discard failed/idle load. | A_jc; Q_c; cp_release; cp_service | x_jc per 1 kg reference flow | ilcd-attributional-2010 |
| calc_physical | all physical exchanges | Reconcile independent wet-mass, dry-wood, water and relevant-element balances over the same manufacturing/FG/consolidated gates, including stock and internal cancellations. Whole liquid/gas waste/emission amounts are counted once; measured composition and source-origin partitions sum to that whole without adding it again. A mass residual is a discrepancy to investigate, not simultaneous evidence for both unmeasured evaporation and dust/VOC. Use measured temperatures/heat rejection and motor energy for a separate relevant energy check; do not treat mass closure as energy closure or a universal calorific/density factor. | cp_supply; cp_water; cp_air; cp_release; cp_wip; cp_service | independent physical and energy reconciliation | fao-briquetting-1996; ilcd-attributional-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify actual form/composition/CAS/route/type/media/geography and every native property, then one compatible provider independently. Use official Chinese basenames for adopted UUIDs. Missing auxiliary identities stay specific and tracked; a missing core terminal identity or unsupported essential route prevents a usable completed dataset. | native full records; supplier specification and matching provider reference |
| dq_measurement | all quantities | Retain raw original units, calibration, detection limits, temporal coverage and uncertainty; no factory quantities or grades are supplied by this PCR. Actual absence requires configuration/measurement evidence and not_applicable explanation, not a guessed zero. | calibration and source records; complete coverage matrix |
| dq_history | all stocks and services | Complete lot genealogy and per-exchange vectors must connect generation, drying, transport, WIP, first release, FG, returns and incremental rework; do not erase burdens at a waste or calendar boundary. | stock and vector audit; original cohort Q_c and return links |
| dq_completeness | all processes | List every real exchange and its provider/measurement status, including conditional species and packages. Unknown VOC, coolant, contamination or upstream drying burden remains explicit; investigate balances and missing routes before asserting completeness. | site diagram; complete meter/material/emission reconciliation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference and all exchanges | Confirm one non-pellet untreated-wood briquette composition and mechanical-piston route, explicit finished_briquette link and Mass/kg reference. Enforce native restrictions in every card, exact current projection and fingerprints, all declared qualifiers and source links. No classification tag alone proves physical applicability. | fao-briquetting-1996; un-cpc3-2025 |
| validate_quantity | all inventory rows | Check one first-release Q_c and one calc_normalize per attributed numerator, no second normalisation in protocols/cards and no division for Q_c=0. Closing accepted FG is inside Q_c; shipment/reinspection never adds production. Retain all operating modes and per-exchange stock history. | ilcd-attributional-2010 |
| validate_balances | manufacturing and FG and consolidated gates | Require independent mass/dry-wood/water/relevant-element checks, relevant energy check and each packaging identity/stock closure over the same gates. No single residual estimates two unknowns; no unknown gas composition is declared resolved by total VOC. Preserve actual receiver routes and non-additive mixture partitions. | fao-briquetting-1996; ilcd-attributional-2010 |
| validate_provider | all upstream exchanges | Verify upstream source, drying, transport, utilities, material and waste-treatment providers once with matching product/reference unit/state and boundary. UUID identity and engineering checks do not approve scientific applicability, translation, mapping, publication or measured factory data. | ilcd-attributional-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Specified non-pellet wood fuel briquette supply at first-release gate with disclosed attributable ex-works services |
| allowed_use | Matching composition/route/moisture/quality/site/time and independently compatible provider/boundary |
| excluded_use | Fuel-use combustion; useful-heat equivalence; pellet or loose-waste substitution; zero-burden residue; automatic biogenic neutrality/credits; treating draft guidance as approval |
| required_metadata | All section 3 qualifiers; actual source/route/provider/period; first-release cohort and original Q_c; stock and service boundary; actual specification |
| required_quality_disclosure | Raw evidence and coverage; uncertain identities/providers/speciation; actual collection/allocated values; source independence; complete stock vectors; allocation sensitivity; no numerical defaults |
| update_trigger | Feedstock/source-treatment, press route, thermal drying location/fuel, cooling system, additive, packaging, provider, quality gate or material/emission identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Ver.3.0 Structure 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 39281/39282/39283 mutually distinct product-form classification; no manufacturing, allocation or mapping approval |
| fao-briquetting-1996 | handbook | Grover and Mishra, FAO/RWEDP Field Document 46, Biomass Briquetting: Technology and Practices, April 1996, §§3–4 and adjacent screw/piston/pellet contrasts, Table 4.1 and Fig.4.1. https://www.fao.org/4/ad579e/ad579e00.pdf | Preparation and mechanical-piston distinction; conditional binderless compaction and cooling context; route examples not numerical defaults or allocation rules |
| cfn-mobile-2023 | handbook | C.F. Nielsen, Mechanical Briquetting Presses: Mobile Briquetting Plant, 2023 brochure, complete single page and table footnote. https://cfnielsen.com/wp-content/uploads/2024/03/7.-Mobile-Briquetting-Plant2023.pdf | Actual modern mechanical press/feeding/cooling-line configuration; capacities conditional; MDF/mixed feed examples excluded |
| cfn-saw-2023 | handbook | C.F. Nielsen, Briquette Saw BS350, 2023 brochure, complete single page including layout/table. https://cfnielsen.com/wp-content/uploads/2024/11/BS350-briquetting-saw-brochure-2023_CFN.pdf | Cooling before sizing, suction and internal sawdust return, optional rejection/weighing and foil packing, pneumatic actuation; no fixed line length or pack mass imposed |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272 including sawmill and transport examples and common-gate counterexample. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision then exchange-specific determining physical causality and only residual common-gate market value; accounting rules are explicit PCR operationalisation, not a source factory inventory |
