---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.jewellery-and-other-articles-of-precious-metal-or-of-metal-clad-with-precious-metal-art-1c2fed3b
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Unplated unset cast silver-alloy ring manufacture

## 1. Scope and Applicability

This PCR covers manufacture of one complete, unplated, unset silver-alloy finger ring through its first quality release: supplied prealloy casting grain and hand-carved expendable wax; actual investment preparation and burnout; electric melting and vacuum-assisted casting; breakout, sprue removal, filing/abrasive finishing, polishing, actual cleaning and final inspection. Record the actual configuration and alloy, without fixing a universal 925 recipe. The ring may be a plain or sculptural band/signet within this same route. It is a complete wearing article, not pure silver, metal grain, a blank, separate setting or a purchased finished ring merely repacked. The Jewellers Toolkit supports direct expendable-wax casting as well as the separate reusable-mould alternative. Westhill and STRUGA positively support complete unplated ring terminals; their neighbouring stone-setting, gold, preblackened and prototype variants do not all belong to this route. Hisae supplies finishing/cleaning context, not proof that every final order is silver. Beehive demonstrates the route and failed casts, while its patina and historical yields are not adopted. Indutherm independently supports electric induction/vacuum casting capability and cooling-water/inert-gas boundaries; no machine rating becomes factory energy. Cooksongold supports a supplied prealloy-grain form, not the same factory, order or universal composition. This is a transparent qualitative technical synthesis, not a measured single-factory BOM. `goldsmith-casting`; `westhill-ring`; `struga-ring`; `hisae-ring`; `beehive-rings`; `cookson-grain`; `indutherm-machine`

Exclude plated/clad rings, intentional chemical patination, stones/pearls/settings, other metals, powder-sintered or wire/sheet-fabricated routes, onsite alloying, and unfinished/intermediate reference products. Actual new chemical treatment or different route needs independent evidence and an explicit scope review; do not insert acids, cyanides, soldering, electroplating, resin printing or rubber moulds by analogy. Collect ordinary LCA material/energy/waste records without providing operating recipes, temperatures, doses, safety or certification conclusions. Unknown actual quantities remain future collection needs; this PCR establishes no default weight, geometry, density, purity, yield, emission factor, life, strength or inspection threshold. `un-cpc-38240`; `goldsmith-casting`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.jewellery-and-other-articles-of-precious-metal-or-of-metal-clad-with-precious-metal-art-1c2fed3b |
| classification_refs | CPC 3.0 38240; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38240.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete unplated unset cast silver-alloy finger rings made by the declared expendable carved-wax electric casting route |
| excluded_products | Raw/alloy metal; ring blanks; isolated settings; purchased finished-ring repacking; gold/base-metal rings; clad/plated/patinated/set rings; fabricated wire/sheet and sintered rings |
| representative_product | One complete cleaned mechanically finished unplated silver-alloy ring with actual configuration and assay |
| production_route | Supplied prealloy grain -> carved expendable wax/investment -> burnout/electric melting/vacuum casting -> breakout/sprue removal -> mechanical finish/polish/actual cleaning -> first quality release |
| market_state | Complete wearing article at first quality release; actual later services reported for original cohort |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and first quality release of complete unplated unset silver-alloy finger rings |
| How much | 1 kg of net complete-ring first-release mass |
| How well | Actual declared alloy/configuration/finish specification and documented acceptance; no invented performance or certification threshold |
| How long or cycle | One declared manufacturing cohort; actual later service retains original Q_H and observed H; no assumed service life |
| reference_flow_link | `finished_ring` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Jewellery and other articles of precious metal or of metal clad with precious metal, articles of natural or cultured pearls or precious or semi-precious stones (natural, synthetic or reconstructed) `25a0b000-0f4c-453f-877e-a8cae925820b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete ring configuration and drawing revision; actual silver-alloy assay and supplier grain form; no stones pearls plating cladding or intentional patina; expendable carved-wax electric vacuum-casting route; actual mechanical finish and cleaning route; unique first quality-release gate and acceptance specification; calibrated net complete-ring mass excluding all packaging; site country period and actual energy supplier; raw WIP non-WIP stock and inherited exchange vectors; original cohort and actual post-release service horizon; packaging pools full six-leg events and upstream owners; waste phase species destinations and actual treatment ownership |

All qualifiers must be declared in the actual foreground package. A kg is the net whole ring mass, not fine-silver equivalent or a guessed item mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated same-configuration complete-ring net mass; cp_release supplies Q once at first quality release. Exclude packaging, loose sprues and unaccepted product. No item weight or density assumed. |
| native_extensive | all inventory rows | Actual native extensive property | row-specific | Preserve each row property/unit; Mass/kg applies only to mass. Electricity and heat keep energy/MJ; road freight keeps kg*km; asset service h remains a separately measured service quantity. Convert raw units before one quotient, never force all rows to kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of declared whole prealloy silver grain, expendable wax and actual supplied investment/finishing articles; upstream burdens linked once |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | A narrow complete-ring semantic boundary within CPC 3.0:38240; not all jewellery |
| recursive_input_rule | Purchased same-category finished rings do not create new manufacturing output by repacking; actual returned released rings keep original cohort and historical vector. Supplied intermediate castings carry their real prior work without a second finished-product reference. |
| upstream_dataset_requirement | Compatible actual alloy/route/provider for grain, each supplied preparation/article, energy and freight; no ore/refinery duplication |
| disclosure | Actual site and period; configuration/alloy; all actual steps including failures/Q0; contractor gates; first Q; stocks/vectors; gross packaging/FG legs; actual service horizon; providers and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_complete | entire foreground | Include actual receipt/storage, wax and investment work, burnout, electric melting/vacuum casting, breakout and sprue separation, mechanical finishing, polishing, cleaning, inspection, process controls and all actual losses. Maintain contractor gates for outsourced casting/finishing; an external semi-finished casting carries its actual upstream steps once and cannot replace the complete-ring reference. | `goldsmith-casting`; `westhill-ring` |
| sb_upstream | each whole supplied article and preparation | Carry mining/recycled-feed collection, refining, alloy/grain manufacture, materials, energy and transport through one compatible upstream owner. Whole grain, investment, polishing compound, cleaner and packaging are purchased once; assay, active ingredients, carrier water and attached components are subaccounts. Real onsite preparation instead lists each actual purchase, mixing energy and loss. Never purchase pure Ag/Cu again within supplied alloy. | `cookson-grain`; `ilcd-attributional-2010` |
| sb_first_release | manufacturing Q and physical gates | Q is the calibrated net mass sum of uniquely first-quality-released complete rings. Closing FG already first released is included in Q and must not subtract manufacturing burdens or be added beside Q as another manufacturing output. Manufacturing-to-FG handover is internal; cancel matched legs in the combined gate. Physical FG gate keeps opening FG plus actual first-release transfer plus actual returns and other true inputs equal to closing FG plus full gross dispatch plus true waste/loss and separately measured transformations. Shipment/reinspection/rework does not create Q. | `westhill-ring`; `ilcd-attributional-2010` |
| sb_service | actual post-release handling storage packing dispatch and work | Retain all actual post-release storage, handling, natural humidity exchange, packing, freight and work in the original cohort service account with original Q_H and observed horizon H. Historical manufacturing burden is retained separately; performed service is not deducted for closing FG, only unused/unassigned charge carries. Actual rework needs manufacturer/specification permission, post-work tests, acceptance and disposition; unauthorized, failed and held work still retains all occurred flows and burdens. No assumption that a damaged ring is restored. A net-delivery basis is outside this first-release PCR and requires a separately justified complete gross G/R and original-delivery-reversal bridge with stock histories. | `westhill-ring`; `ilcd-attributional-2010` |
| sb_stocks | every raw WIP and non-WIP stock | For each raw material, WIP, unused charge and unused/unassigned non-WIP store retain actual opening/closing physical quantity in original extensive units and its complete inherited exchange-burden vector by cohort. Correct a raw purchase/issue once; already stock-corrected consumption must not receive a second stock subtraction. Include failed batches, zero-output trials, start/stop, idle, cleanup, scrap, samples and all actual rework. Q=0 retains the complete load without a unit result. | `beehive-rings`; `ilcd-attributional-2010` |
| sb_physical | manufacturing FG service and consolidated balances | Keep physical full wet stocks and all actual gross external legs independent of burden shares. New material/water influx remains even when retained in full wet closing stock. X_in/X_out remove overlap only with the identical other same-side flow term, never with stocks or the opposite side and never merely because a card exists. Whole wet articles and disjoint separately added components must not overlap. Independently close total mass and relevant Ag/Cu/other elements and carbon/water using real phase/species evidence; a single residual cannot fit two unknowns. Distinguish free, sorbed, structural and real reaction water, ions, complexes, oxides and metallic particles. COD/VOC/PM/total metal are not molecular masses. | `ilcd-attributional-2010` |
| sb_packaging | each real packaging pool | For each physical pool, full opening empty/attached WIP/FG/reusable stocks + separate purchase P + supplier-included ingress I + external return received ER = full closing stocks + packaging carried on gross physical shipment S + external return sent EO + waste W, plus independently measured natural water/material changes with disjoint X bridges. Cards expose all six conditional directions. Internal reuse cancels; S follows gross shipment rather than Q or economic share. Each ingress has one upstream owner. If W pools share one mixed outlet, source-pool subaccounts sum to that single complete outlet and are not added as duplicate exchanges/providers. | `ilcd-attributional-2010`; `westhill-ring` |
| sb_assets_thermal | actual assets parts fluids and thermal carriers | Keep dry asset-body stocks, attached water, installed fluids, new/used repair parts and every real acquisition/return/retirement separate from fulfilled-service burden. No fixed life or full machine per kg. Actual external steam/water supply-return uses full carrier kg and actual state/enthalpy alongside MJ with one provider convention; condensate to supplier is Product return. Onsite electric steam cleaning instead uses actual water/electricity once and has no fictitious external steam or boiler. | `hisae-ring`; `ilcd-attributional-2010` |
| sb_actual_atoms | all actual exchange additions and direct emissions | Each actually present input, preparation, chemical, fuel, energy carrier, packaging material, repair part, waste outlet and environmental chemical species needs its own atomic card and real identity/quantity; unknown is not zero. Air species have disjoint actual ingress/outlet accounts with no duplicate total-air exchange. A physical-only gross card always uses complete actual V, not an allocated burden numerator. Its actual upstream/treatment or direct-emission burden is retained once in a separately tagged burden vector of the same exchange/cohort; disclosure alone cannot erase characterized direct emissions. Absent chemistry or a different outlet is never manufactured by analogy. | `ilcd-attributional-2010` |
| sb_cooling | actual electric induction casting cooling gate | Record actual external cooling-water full supply/return kg, independently measured states/enthalpy and actual net cooling MJ under one provider convention. Real return is Product flow, not free recovered heat. An onsite closed loop instead cancels internal circulation, retains actual independently metered makeup, real water losses and actual cooler/pump electricity once. No rated machine power, fixed coolant rate, gas dose or catalogue capacity substitutes for actual measurements. | `indutherm-machine`; `ilcd-attributional-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| model | Expendable carved-wax model | required | Actual event only; all real steps inside selected route retained | foreground | per reference flow |
| cast | Investment burnout and electric vacuum casting | required | Actual event only; all real steps inside selected route retained | foreground | per reference flow |
| finish | Mechanical finish cleaning inspection and first release | required | Actual event only; all real steps inside selected route retained | foreground | per reference flow |
| service | Actual original-cohort post-release services | conditional | Actual event only; all real steps inside selected route retained | foreground | per reference flow |
| support | Actual utilities air controls waste assets and freight | required | Actual event only; all real steps inside selected route retained | foreground | per reference flow |
| pack | Actual packaging stock and six-leg events | conditional | Actual event only; all real steps inside selected route retained | foreground | per reference flow |

All card amounts and protocol aggregation refer to the same sole calc_quotient result x_i; never execute another division. Internal wax/metal/WIP/first-release handovers are traceable process ledgers; if separately modelled as exchanges, pair and cancel them in consolidation. They are not external purchases or extra Q. Every card below carries its own numerator dimension. Actual non-CN/non-grid electricity or additional substances/packaging require new specific cards with compatible native/provider evidence, not substitution into a restricted UUID.

### Process: Expendable carved-wax model (`model`)

#### Inputs

##### Product flows

###### Whole jewellery modelling wax block (`model_wax`)

Whole purchased castable modelling wax including actual sprue wax; retain formulation, fossil/biogenic carbon, unused opening/closing stock and recovered-wax lineage. Resin-print and rubber-copy routes are outside this selected route. Manufacturing burden dimension. Native manufactured artificial/prepared-wax Product at plant, Mass/kg. Qualify one actual whole prepared castable modelling/sprue wax block for the direct expendable-wax route, with supplier formulation and carving/burnout suitability. No CAS, fixed recipe, fossil fraction, grade, dimensions or density is supplied. The cleaning-preparation parent classification does not require furniture polish. Not pure paraffin by assumption, a natural-wax substitute, SLA resin or reusable rubber mould; included constituents are nonadditive subaccounts. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Artificial waxes and prepared waxes `554ecf09-e83f-4f0d-b777-342cf04a7643`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_model`
- Sources: `goldsmith-casting`; `beehive-rings`

###### Alternating current (`model_electricity`)

Meter actual model-work/lighting, investment burnout, electric melting/vacuum, finishing/cleaning or original-cohort service duty for this process only. Include failed runs, start/stop, standby and cleanup; distinct duty meters reconcile to the main meter without duplicate totals. Manufacturing burden dimension. Native Product flow is CN grid-average consumption mix to user, alternating current below 1 kV; only actual matching Chinese low-voltage grid supply may use this card. Another country, voltage, captive supply or dedicated hydro mix requires its own confirmed card/provider, not this UUID. Native reference property is Net calorific value in the energy unit group; use MJ electrical energy, with actual kWh converted once by 3.6. It supplies no measured factory energy or emission factor and no independent certification conclusion. Property support resolves to unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit is MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_model`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

#### Outputs

##### Waste flows

###### Separately collected discarded jewellery modelling wax (`wax_waste`)

Actual discarded wax; reusable internal wax is paired and cancelled, while its reprocessing energy and losses remain. Physical-only full gross event dimension. The sole-quotient numerator for this actual waste outlet is its complete independently measured wet V_i, never a raw/WIP inherited burden, stock correction, T_other transfer or economic/service share. Its real manufacturing and treatment burdens remain in separately tagged, once-owned vectors of the same exchange/cohort; full physical reporting neither erases those burdens nor creates another provider or credit. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Separately collected discarded jewellery modelling wax
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_model`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

### Process: Investment burnout and electric vacuum casting (`cast`)

#### Inputs

##### Product flows

###### Supplied prealloy silver casting grain (`alloy_grain`)

Record the complete externally supplied silver-alloy grain once. Supplier certificate/assay defines actual silver and other elements, grade and upstream route; do not assume 925 or pure Ag, and do not repurchase assayed copper/silver. Upstream mining/recovery/refining and alloy/grain manufacture have one supplier owner. On-site alloying is excluded from this route. Manufacturing burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Supplied prealloy silver casting grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_cast`
- Sources: `cookson-grain`; `goldsmith-casting`

###### Whole gypsum-bonded jewellery casting investment preparation (`investment_powder`)

One complete supplied investment powder preparation; collect actual gypsum/silica/binder/additives and phase data independently. Assay fractions are subaccounts, not extra purchases; independently added mixing water has its own card. No universal composition or reaction-water factor is prescribed. Manufacturing burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Whole gypsum-bonded jewellery casting investment preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_cast`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Water, tap (`casting_water`)

Actual separately added mixing/quench/wash water at the casting gate; separate circuits by submeter records and retain full wet investment before and after use. Manufacturing burden dimension. Supplied tap-water Product flow, not deionised water, steam or direct abstraction. No native grade, geographic, route, CAS or quantity factor; actual supplier quality/temperature and treatment are collected. Preserved received Other goods classification is a taxonomy discrepancy; current natural-water classification and consistent tap-water physical identity are disclosed separately. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_cast`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Argon, gaseous (`shielding_argon`)

Conditional only when actual gaseous argon crosses the casting gate; measure full gas supply and actual outlet separately. Do not assume a reducing cover or gas recipe from an industry suggestion. Manufacturing burden dimension. Gaseous argon Product flow only, never liquid argon, air aggregate or an environmental release. Native names say gaseous argon; no fixed grade, route, geography, CAS or supplier factor. Confirm actual shielding use and grade independently. Native CPC/source-classification labels are not evidence of gas purity or a reason to change this consistent gaseous identity. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Argon, gaseous `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_cast`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Alternating current (`cast_electricity`)

Meter actual model-work/lighting, investment burnout, electric melting/vacuum, finishing/cleaning or original-cohort service duty for this process only. Include failed runs, start/stop, standby and cleanup; distinct duty meters reconcile to the main meter without duplicate totals. Manufacturing burden dimension. Native Product flow is CN grid-average consumption mix to user, alternating current below 1 kV; only actual matching Chinese low-voltage grid supply may use this card. Another country, voltage, captive supply or dedicated hydro mix requires its own confirmed card/provider, not this UUID. Native reference property is Net calorific value in the energy unit group; use MJ electrical energy, with actual kWh converted once by 3.6. It supplies no measured factory energy or emission factor and no independent certification conclusion. Property support resolves to unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit is MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_cast`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Nitrogen (`shielding_nitrogen`)

Only actual separately supplied gaseous nitrogen, disjoint from argon and natural-air N2. Confirm whether the actual equipment uses this alternative or none; no source suggestion creates a mandatory gas amount. Do not infer gas density or a volume conversion from an unexplained reference-property coefficient; actual gas mass/state and the support relationship need independent confirmation. Manufacturing burden dimension. Native nitrogen-gas Product with reference internal property 1, Mass/kg. Use only actual separately supplied gaseous N2 with measured mass and documented supplier purity, pressure, state and boundary. No native fixed CAS, purity, production route, geography or density is given. Not liquid nitrogen, atmospheric-resource N2, a nitrogen-oxide mixture or a gas-volume identity. Native coefficient one supplies no density or dose. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Nitrogen gas `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_cast`
- Sources: `indutherm-machine`; `ilcd-attributional-2010`

###### Water, tap (`cooling_makeup`)

Actual fresh water makeup for an onsite closed cooling circuit only, independently metered and disjoint from casting_water and external cooling carrier. Internal circulation is not another external receipt. Actual cooler/pump electricity is part of the metered cast duty once. Manufacturing burden dimension. Supplied tap-water Product flow, not deionised water, steam or direct abstraction. No native grade, geographic, route, CAS or quantity factor; actual supplier quality/temperature and treatment are collected. Preserved received Other goods classification is a taxonomy discrepancy; current natural-water classification and consistent tap-water physical identity are disclosed separately. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_cast`
- Sources: `indutherm-machine`; `ilcd-attributional-2010`

###### Externally supplied liquid cooling water (`cooling_carrier_in`)

Only real external cooling-water carrier inlet, full gross wet kg and actual state/enthalpy; no assumed tap-water grade or duplicated onsite loop makeup. Supply/return and net cooling service have one provider contract and disjoint mass/energy dimensions. Physical-only full gross event dimension. Native Product flow is cooling water, H2O sum formula, reference internal property id 1 is Mass/kg. No native CAS, temperature, enthalpy, grade, route, geography or treatment is fixed; its compliance is Not defined and is not scientific approval. Use only actual chemically compatible liquid-water carrier supply/return with independently measured states. Not glycol antifreeze, a heat-only MJ service, environmental discharge, steam or internal circulation counted as external purchase. Return state and mass are independent, with one supply-return provider convention. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Sources: `indutherm-machine`; `ilcd-attributional-2010`

###### Actual external cooling-water service (`cooling_service`)

Actual net cooling duty at the measured supply-return states with one compatible service provider. Preserve the two complete carrier masses separately and do not duplicate the whole provider through each mass leg. Onsite cooling has actual water/power rather than this external service. Manufacturing burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero.

- Selected flow: Actual external cooling-water service
- Flow property / unit: Delivered thermal energy / MJ
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Sources: `indutherm-machine`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Externally returned liquid cooling water (`cooling_carrier_return`)

Actual complete Product return of cooling water to its supplier at its measured state/enthalpy, not an environmental discharge, free heat coproduct or return equal to supply by assumption. Physical-only full gross event dimension. Native Product flow is cooling water, H2O sum formula, reference internal property id 1 is Mass/kg. No native CAS, temperature, enthalpy, grade, route, geography or treatment is fixed; its compliance is Not defined and is not scientific approval. Use only actual chemically compatible liquid-water carrier supply/return with independently measured states. Not glycol antifreeze, a heat-only MJ service, environmental discharge, steam or internal circulation counted as external purchase. Return state and mass are independent, with one supply-return provider convention. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Sources: `indutherm-machine`; `ilcd-attributional-2010`

##### Waste flows

###### Spent gypsum-silica casting investment (`investment_waste`)

Actual separate wet investment outlet; include water and entrained alloy once, assay elements/phases independently and exclude separately metered effluent water. Physical-only full gross event dimension. The sole-quotient numerator for this actual waste outlet is its complete independently measured wet V_i, never a raw/WIP inherited burden, stock correction, T_other transfer or economic/service share. Its real manufacturing and treatment burdens remain in separately tagged, once-owned vectors of the same exchange/cohort; full physical reporting neither erases those burdens nor creates another provider or credit. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Spent gypsum-silica casting investment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_cast`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Separately collected silver-alloy sprues and rejected castings (`silver_scrap`)

One actual alloy scrap stream, assayed and physically weighed; internal remelt legs cancel without credit and retain all work and losses. External sale or refining is not automatic negative burden. Physical-only full gross event dimension. The sole-quotient numerator for this actual waste outlet is its complete independently measured wet V_i, never a raw/WIP inherited burden, stock correction, T_other transfer or economic/service share. Its real manufacturing and treatment burdens remain in separately tagged, once-owned vectors of the same exchange/cohort; full physical reporting neither erases those burdens nor creates another provider or credit. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Separately collected silver-alloy sprues and rejected castings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_cast`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

### Process: Mechanical finish cleaning inspection and first release (`finish`)

#### Inputs

##### Product flows

###### Alternating current (`finish_electricity`)

Meter actual model-work/lighting, investment burnout, electric melting/vacuum, finishing/cleaning or original-cohort service duty for this process only. Include failed runs, start/stop, standby and cleanup; distinct duty meters reconcile to the main meter without duplicate totals. Manufacturing burden dimension. Native Product flow is CN grid-average consumption mix to user, alternating current below 1 kV; only actual matching Chinese low-voltage grid supply may use this card. Another country, voltage, captive supply or dedicated hydro mix requires its own confirmed card/provider, not this UUID. Native reference property is Net calorific value in the energy unit group; use MJ electrical energy, with actual kWh converted once by 3.6. It supplies no measured factory energy or emission factor and no independent certification conclusion. Property support resolves to unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit is MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_finish`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Abrasive paper (`abrasive_paper`)

Actual whole supplied abrasive paper used on wax/metal; disjoint issue and stock records by duty and configuration, with spent article and removed alloy measured separately. Manufacturing burden dimension. Whole abrasive paper Product flow at plant, Mass/kg; backing, abrasive and binder are one purchased article, not separate purchases of grit and paper. Native has no fixed grit, grade, route, geography or CAS; retain actual sheet composition and use. Preserved Other goods taxonomy is distinct from consistent abrasive-paper identity and current abrasive classification. Not bare silicon carbide, a wheel or furniture-specific sandpaper. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Abrasive paper `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_finish`
- Sources: `goldsmith-casting`; `hisae-ring`

###### Whole supplied jewellery polishing compound (`polishing_compound`)

One actual supplied compound with abrasive, binder and carrier assay retained as subaccounts. Do not bind an aluminium-content reference preparation as whole-mass input. Each genuinely different compound requires another atomic card; no assumed rouge chemistry or formula. Manufacturing burden dimension. Native Product flow is a manufactured polish/cream family for metal and other named surfaces, production mix at plant, Mass/kg. Here it is exactly one actual supplied jewellery-metal polishing compound; not footwear/furniture polish, loose abrasive mineral or an aluminium-content subaccount. No fixed formula, active fraction, CAS, carrier, grade, geography or amount is specified. Full supplied preparation is purchased once and its actual ingredients/water stay subaccounts. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Polishes and creams, for footwear, furniture, floors, coachwork, glass or metal `cf3e3bd0-5658-47b0-9630-629015baac7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_finish`
- Sources: `goldsmith-casting`; `hisae-ring`

###### Whole cotton jewellery buffing wheel (`cotton_buff`)

Actual cotton buffing article including its supplied hub/bond once; not plain cotton fabric. Track measured wear, retained stock and actual separate spent outlet; no fixed lifetime. Manufacturing burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Whole cotton jewellery buffing wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_finish`
- Sources: `hisae-ring`; `ilcd-attributional-2010`

###### Whole aqueous ultrasonic jewellery cleaner preparation (`cleaner`)

Only actual supplied ultrasonic cleaner; whole wet purchase once, carrier water and ingredients as subaccounts. Separately added dilution water is independently metered. No acid, cyanide, plating bath, solvent or dose is presumed. On-site preparation needs each purchased ingredient and real mixing losses/energy. Manufacturing burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Whole aqueous ultrasonic jewellery cleaner preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_finish`
- Sources: `hisae-ring`; `westhill-ring`

###### Water, tap (`finish_water`)

Actual separate rinse, ultrasonic bath dilution or on-site steamer feed; include actual heating once in the electricity duty. On-site steam is an internal conversion, not a purchased second water or heat provider. Manufacturing burden dimension. Supplied tap-water Product flow, not deionised water, steam or direct abstraction. No native grade, geographic, route, CAS or quantity factor; actual supplier quality/temperature and treatment are collected. Preserved received Other goods classification is a taxonomy discrepancy; current natural-water classification and consistent tap-water physical identity are disclosed separately. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_finish`
- Sources: `hisae-ring`; `westhill-ring`

###### Whole stainless-steel jewellery tumbling shot (`tumbling_media`)

Conditional actual steel tumbling media article; not bulk steel sheet. Track opening/closing charge, real additions, wear and retirement separately with inherited burden; no fixed media-to-ring ratio. Manufacturing burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Whole stainless-steel jewellery tumbling shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_finish`
- Sources: `hisae-ring`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### finished ring (`finished_ring`)

Unique reference output: complete unplated, unset, mechanically finished and cleaned cast silver-alloy finger ring meeting the declared actual specification at first quality release. Q includes released rings still in closing FG. Exclude all packaging and do not count reinspection, shipment or returned previously released rings as new manufacture. Unique reference output. One complete manufactured silver-alloy finger ring at plant; no stones, pearls, cladding, plating or intentional patina. The native Product flow is a broad manufactured jewellery/precious-article family with production mix at plant, no fixed CAS, purity, alloy recipe, geometry or casting route. Primary terminal and route evidence narrows this compatible family; it does not admit raw silver, a sprue, ring blank, mounting kit or another metal. No native claim establishes performance or certification. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Jewellery and other articles of precious metal or of metal clad with precious metal, articles of natural or cultured pearls or precious or semi-precious stones (natural, synthetic or reconstructed) `25a0b000-0f4c-453f-877e-a8cae925820b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `westhill-ring`; `struga-ring`; `goldsmith-casting`

##### Waste flows

###### Separately collected silver-bearing polishing dust (`polishing_dust`)

Captured whole polishing dust with actual carrier/abrasive and moisture, not pure Ag inferred from total silver. Keep captured versus airborne particles distinct. Physical-only full gross event dimension. The sole-quotient numerator for this actual waste outlet is its complete independently measured wet V_i, never a raw/WIP inherited burden, stock correction, T_other transfer or economic/service share. Its real manufacturing and treatment burdens remain in separately tagged, once-owned vectors of the same exchange/cohort; full physical reporting neither erases those burdens nor creates another provider or credit. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Separately collected silver-bearing polishing dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_finish`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Whole separately collected jewellery-cleaning wastewater (`cleaning_effluent`)

One whole wet wastewater outlet, water plus dissolved/suspended constituents once; COD/VOC/total Ag/Cu are indicators or element subaccounts, not separate chemical species. Treatment/provider once; independently released species need actual separate environmental outlet. Physical-only full gross event dimension. The sole-quotient numerator for this actual waste outlet is its complete independently measured wet V_i, never a raw/WIP inherited burden, stock correction, T_other transfer or economic/service share. Its real manufacturing and treatment burdens remain in separately tagged, once-owned vectors of the same exchange/cohort; full physical reporting neither erases those burdens nor creates another provider or credit. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Whole separately collected jewellery-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_finish`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

### Process: Actual original-cohort post-release services (`service`)

#### Inputs

##### Product flows

###### Alternating current (`service_electricity`)

Meter actual model-work/lighting, investment burnout, electric melting/vacuum, finishing/cleaning or original-cohort service duty for this process only. Include failed runs, start/stop, standby and cleanup; distinct duty meters reconcile to the main meter without duplicate totals. Actual original-cohort service burden dimension. Native Product flow is CN grid-average consumption mix to user, alternating current below 1 kV; only actual matching Chinese low-voltage grid supply may use this card. Another country, voltage, captive supply or dedicated hydro mix requires its own confirmed card/provider, not this UUID. Native reference property is Net calorific value in the energy unit group; use MJ electrical energy, with actual kWh converted once by 3.6. It supplies no measured factory energy or emission factor and no independent certification conclusion. Property support resolves to unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit is MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_service`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Purchased steam carrier water (`steam_carrier`)

Conditional actual external steam; full carrier mass, pressure/temperature/phase, enthalpy and supplier supply-return convention. No whole provider duplicated by heat subaccount. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Purchased steam carrier water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Delivered purchased steam heat service (`steam_heat`)

Actual independently determined net delivered heat after real return state, under the same carrier/provider contract. Heat duty is one burden dimension; steam carrier mass is physical-only. No heat credit or fictitious boiler. Actual original-cohort service burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero.

- Selected flow: Delivered purchased steam heat service
- Flow property / unit: Delivered thermal energy / MJ
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Gross return of previously released ring (`ring_return`)

Actual gross receipt R of the same previously released whole ring; preserve original dispatch identity and original manufacturing burden. If damaged, incomplete or altered, add its actual identity-specific return card instead of using the compatible whole-ring UUID. Rework permission/specification/post-tests govern acceptance, never deletion of occurred work or burdens. Physical-only full gross event dimension. One complete manufactured silver-alloy finger ring at plant; no stones, pearls, cladding, plating or intentional patina. The native Product flow is a broad manufactured jewellery/precious-article family with production mix at plant, no fixed CAS, purity, alloy recipe, geometry or casting route. Primary terminal and route evidence narrows this compatible family; it does not admit raw silver, a sprue, ring blank, mounting kit or another metal. No native claim establishes performance or certification. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Jewellery and other articles of precious metal or of metal clad with precious metal, articles of natural or cultured pearls or precious or semi-precious stones (natural, synthetic or reconstructed) `25a0b000-0f4c-453f-877e-a8cae925820b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Water, tap (`service_water`)

Actual separately added original-cohort storage/handling/cleaning or permitted or unpermitted post-release work water; complete occurred increments survive failed acceptance. Natural humidity is recorded separately without a fictional operation. Actual original-cohort service burden dimension. Supplied tap-water Product flow, not deionised water, steam or direct abstraction. No native grade, geographic, route, CAS or quantity factor; actual supplier quality/temperature and treatment are collected. Preserved received Other goods classification is a taxonomy discrepancy; current natural-water classification and consistent tap-water physical identity are disclosed separately. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_service`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Externally returned liquid water condensate (`condensate_return`)

Actual Product return to supplier, full mass and actual liquid state/enthalpy; not an environmental emission or a coproduct credit. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Externally returned liquid water condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Gross dispatch of previously released ring (`ring_dispatch`)

Actual gross dispatch G of complete released rings over the observed horizon; full physical amount, original cohort and historical burden vector. No new manufacturing Q or extra purchase. Physical-only full gross event dimension. One complete manufactured silver-alloy finger ring at plant; no stones, pearls, cladding, plating or intentional patina. The native Product flow is a broad manufactured jewellery/precious-article family with production mix at plant, no fixed CAS, purity, alloy recipe, geometry or casting route. Primary terminal and route evidence narrows this compatible family; it does not admit raw silver, a sprue, ring blank, mounting kit or another metal. No native claim establishes performance or certification. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Jewellery and other articles of precious metal or of metal clad with precious metal, articles of natural or cultured pearls or precious or semi-precious stones (natural, synthetic or reconstructed) `25a0b000-0f4c-453f-877e-a8cae925820b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

### Process: Actual utilities air controls waste assets and freight (`support`)

#### Inputs

##### Product flows

###### freight transport (`freight`)

Actual inbound/outbound included freight duties, one owner where supplier-included. Keep legs and physical wet masses full; road service amounts are not mass of a transport asset. Manufacturing burden dimension. Road freight Product service with production mix at plant; not a truck asset, sea freight or parcel count. Native mass*distance reference property resolves to kg*km; record full actual wet consignment kg and km before justified burden attribution. Convert actual t*km by 1000 only once. No native vehicle class, geography, fuel, load factor or distance is supplied. Property support resolves to unit group Unit of kg*km `3620148f-c5db-48ce-9065-a10092089aca`; reference unit is kg*km.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_support`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Electric burnout kiln dry body (`kiln_receipt`)

Actual receipt event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. Native manufactured industrial/laboratory furnace-or-oven Product at plant, Mass/kg. Narrow it to one actual complete electric jewellery burnout kiln in its documented dry supplied/returned condition, including all integral dry components; not a bare casing, heater element, building or whole casting machine. Separately measured installed fluids/deposits use disjoint bridges. Full English name and bilingual body exclude non-electric bakery ovens; the shortened official Chinese basename omits bakery and mistranslates dielectric, so retain that display without applying the faulty broader exclusion. No kiln weight, life, service-hours conversion, temperature or electricity use is supplied. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Industrial or laboratory furnaces and ovens, except non-electric bakery ovens, other industrial or laboratory induction or dielectric heating equipment `b7fbf2da-6bb0-4f10-b78b-fdf2207373d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Actual service of one electric burnout kiln dry body (`kiln_service`)

Only fulfilled service hours for actual manufacturing or original-cohort service, with observed utilization/capacity and one asset provider. Keep historical embodied vectors and physical stock independent; no invented lifetime, capacity or kg/hour factor. Unused/unassigned charge carries separately. Actual fulfilled-asset-service burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero.

- Selected flow: Actual service of one electric burnout kiln dry body
- Flow property / unit: Fulfilled service duration / h
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Electric vacuum jewellery casting machine dry body (`melter_receipt`)

Actual receipt event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Electric vacuum jewellery casting machine dry body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Actual service of one electric vacuum jewellery casting machine dry body (`melter_service`)

Only fulfilled service hours for actual manufacturing or original-cohort service, with observed utilization/capacity and one asset provider. Keep historical embodied vectors and physical stock independent; no invented lifetime, capacity or kg/hour factor. Unused/unassigned charge carries separately. Actual fulfilled-asset-service burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero.

- Selected flow: Actual service of one electric vacuum jewellery casting machine dry body
- Flow property / unit: Fulfilled service duration / h
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Steel jewellery casting flask (`flask_receipt`)

Actual receipt event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. Native manufactured moulding-box/mould-base/pattern/mould Product family at plant, Mass/kg. The actual selected member is one complete steel investment-casting flask that holds the jewellery mould, consistent with the foundry mould-holding function; verify actual supplier design, full dry article and returned condition. The official Chinese moulding-box label is retained without inventing a sand-mould route. Not an ingot mould, crucible, thermos, loose steel or a complete casting machine; investment, deposited metal and water are disjoint from the measured dry flask and do not create a second whole article. No dimensions, mass per item, duty or life is prescribed. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Moulding boxes for metal foundry, mould bases, moulding patterns, moulds for metal (except ingot moulds), metal carbides, glass, mineral materials, rubber or plastics `da241301-584e-4c9c-baa7-2208878acd1d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Actual service of one steel jewellery casting flask (`flask_service`)

Only fulfilled service hours for actual manufacturing or original-cohort service, with observed utilization/capacity and one asset provider. Keep historical embodied vectors and physical stock independent; no invented lifetime, capacity or kg/hour factor. Unused/unassigned charge carries separately. Actual fulfilled-asset-service burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero.

- Selected flow: Actual service of one steel jewellery casting flask
- Flow property / unit: Fulfilled service duration / h
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Graphite jewellery melting crucible (`crucible_receipt`)

Actual receipt event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Graphite jewellery melting crucible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Actual service of one graphite jewellery melting crucible (`crucible_service`)

Only fulfilled service hours for actual manufacturing or original-cohort service, with observed utilization/capacity and one asset provider. Keep historical embodied vectors and physical stock independent; no invented lifetime, capacity or kg/hour factor. Unused/unassigned charge carries separately. Actual fulfilled-asset-service burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero.

- Selected flow: Actual service of one graphite jewellery melting crucible
- Flow property / unit: Fulfilled service duration / h
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Whole supplied mineral vacuum-pump oil (`pump_oil`)

Conditional actual whole oil preparation, no base-oil/additive repurchase; no amount inferred from machine mass. Manufacturing burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Whole supplied mineral vacuum-pump oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_support`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Whole steel jewellers saw blade (`saw_blade`)

Actual new or used replacement blade with identity, receipt, service and retirement lineage. Manufacturing burden dimension. Native finished steel saw-blade/shear-knife Product, GLO at plant, Mass/kg, described as a cutting consumable for blank preparation. Select only the actual complete steel jewellers saw blade used for rough-casting/sprue separation with its actual tooth, alloy, coating and supplier preparation; not a shear-knife alternative, raw steel, diamond wire or whole saw. Whole supplied components have one owner. No native wear rate, blade mass, lifetime or automatic material compatibility is supplied. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Steel saw blades or shear knives `970801c9-08c1-4d9c-999d-4b66609430be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_support`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Whole dust-extraction filter cartridge (`filter`)

One actual supplied filter article; filter dry body and captured dust/water use disjoint bridge, not full wet filter plus same constituents again. Manufacturing burden dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Whole dust-extraction filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_support`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

##### Elementary flows

###### Atmospheric molecular oxygen (`air_oxygen_in`)

Actual atmospheric O2 ingress to burnout/ventilation gate, not purchased oxygen. Physical-only full gross event dimension. Elementary molecular O2, CAS 7782-44-7, resource from air, Mass/kg. Use only independently measured actual atmospheric gaseous molecular species and this exact inlet/outlet compartment. Native broad synonyms include liquefied forms or non-target labels; they do not authorise purchased cryogenic gas, ions, total nitrogen/NOx or another phase. No fixed grade, geography, density or amount is supplied. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Atmospheric molecular nitrogen (`air_nitrogen_in`)

Actual N2 ingress; no aggregate air row plus its component masses. Physical-only full gross event dimension. Elementary molecular N2, CAS 7727-37-9, resource from air, Mass/kg. Use only independently measured actual atmospheric gaseous molecular species and this exact inlet/outlet compartment. Native broad synonyms include liquefied forms or non-target labels; they do not authorise purchased cryogenic gas, ions, total nitrogen/NOx or another phase. No fixed grade, geography, density or amount is supplied. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Atmospheric argon (`air_argon_in`)

Actual atmospheric argon component, distinct from supplied shielding argon. Physical-only full gross event dimension. Native elementary argon resource from air, CAS 7440-37-1, Mass/kg. Select only independently established ordinary atmospheric argon ingress. Native isotope/ionic aliases do not change the ordinary elemental-gas identity; no default air fraction, quantity or density. Keep supplied shielding argon, inlet resource, outlet and net change separate. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Water vapour uptake from ambient air (`humidity_in`)

Actual natural humidity uptake in raw/WIP/FG, packaging, tools or handling; no fictional repair activity or permission requirement. Preserve independently measured uptake and full wet closing stock. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Water vapour uptake from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Electric burnout kiln dry body (`kiln_return`)

Actual return event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. Native manufactured industrial/laboratory furnace-or-oven Product at plant, Mass/kg. Narrow it to one actual complete electric jewellery burnout kiln in its documented dry supplied/returned condition, including all integral dry components; not a bare casing, heater element, building or whole casting machine. Separately measured installed fluids/deposits use disjoint bridges. Full English name and bilingual body exclude non-electric bakery ovens; the shortened official Chinese basename omits bakery and mistranslates dielectric, so retain that display without applying the faulty broader exclusion. No kiln weight, life, service-hours conversion, temperature or electricity use is supplied. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Industrial or laboratory furnaces and ovens, except non-electric bakery ovens, other industrial or laboratory induction or dielectric heating equipment `b7fbf2da-6bb0-4f10-b78b-fdf2207373d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Electric vacuum jewellery casting machine dry body (`melter_return`)

Actual return event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Electric vacuum jewellery casting machine dry body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Steel jewellery casting flask (`flask_return`)

Actual return event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. Native manufactured moulding-box/mould-base/pattern/mould Product family at plant, Mass/kg. The actual selected member is one complete steel investment-casting flask that holds the jewellery mould, consistent with the foundry mould-holding function; verify actual supplier design, full dry article and returned condition. The official Chinese moulding-box label is retained without inventing a sand-mould route. Not an ingot mould, crucible, thermos, loose steel or a complete casting machine; investment, deposited metal and water are disjoint from the measured dry flask and do not create a second whole article. No dimensions, mass per item, duty or life is prescribed. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Moulding boxes for metal foundry, mould bases, moulding patterns, moulds for metal (except ingot moulds), metal carbides, glass, mineral materials, rubber or plastics `da241301-584e-4c9c-baa7-2208878acd1d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Graphite jewellery melting crucible (`crucible_return`)

Actual return event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Graphite jewellery melting crucible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

##### Waste flows

###### Whole mixed workshop solid waste (`mixed_waste`)

Only one actual mixed collection outlet. Separate source pools for spent abrasive, cotton buff, filter, packaging W and other evidenced atoms sum to this full wet total; do not add their subaccounts as other exchanges or treat providers twice. Separate waste cards apply only to genuinely segregated outlets, disjoint from this stream. Physical-only full gross event dimension. The sole-quotient numerator for this actual waste outlet is its complete independently measured wet V_i, never a raw/WIP inherited burden, stock correction, T_other transfer or economic/service share. Its real manufacturing and treatment burdens remain in separately tagged, once-owned vectors of the same exchange/cohort; full physical reporting neither erases those burdens nor creates another provider or credit. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Whole mixed workshop solid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_support`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

###### Separately collected spent electric burnout kiln dry body (`kiln_retire`)

Actual retire event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Separately collected spent electric burnout kiln dry body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Separately collected spent electric vacuum jewellery casting machine dry body (`melter_retire`)

Actual retire event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Separately collected spent electric vacuum jewellery casting machine dry body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Separately collected spent steel jewellery casting flask (`flask_retire`)

Actual retire event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Separately collected spent steel jewellery casting flask
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Separately collected spent graphite jewellery melting crucible (`crucible_retire`)

Actual retire event of this one article; full physical mass only, dry body boundary excludes separately accounted installed fluid and attached moisture. Maintain opening/closing installed/spare/old stock, new versus used parts and each external return. Only unused/unassigned charge may carry; no full-machine-per-kg assumption. Retire card only for a real segregated outlet; mixed disposal belongs only to mixed_waste. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Separately collected spent graphite jewellery melting crucible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`; `indutherm-machine`

###### Separately collected spent vacuum-pump oil (`pump_oil_waste`)

Actual separate whole wet spent-oil outlet with contaminants once; not repeated in mixed waste. Physical-only full gross event dimension. The sole-quotient numerator for this actual waste outlet is its complete independently measured wet V_i, never a raw/WIP inherited burden, stock correction, T_other transfer or economic/service share. Its real manufacturing and treatment burdens remain in separately tagged, once-owned vectors of the same exchange/cohort; full physical reporting neither erases those burdens nor creates another provider or credit. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg.

- Selected flow: Separately collected spent vacuum-pump oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_support`
- Sources: `goldsmith-casting`; `ilcd-attributional-2010`

##### Elementary flows

###### Molecular oxygen to air (`air_oxygen_out`)

Actual unreacted O2 outlet, independently reconciled against ingress and reactions. Physical-only full gross event dimension. Elementary molecular O2, CAS 7782-44-7, emission to air unspecified, Mass/kg. Use only independently measured actual atmospheric gaseous molecular species and this exact inlet/outlet compartment. Native broad synonyms include liquefied forms or non-target labels; they do not authorise purchased cryogenic gas, ions, total nitrogen/NOx or another phase. No fixed grade, geography, density or amount is supplied. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Molecular nitrogen to air (`air_nitrogen_out`)

Actual molecular N2 outlet; never use total nitrogen excluding N2 or infer nitrogen oxide speciation. Physical-only full gross event dimension. Elementary molecular N2, CAS 7727-37-9, emission to air unspecified, Mass/kg. Use only independently measured actual atmospheric gaseous molecular species and this exact inlet/outlet compartment. Native broad synonyms include liquefied forms or non-target labels; they do not authorise purchased cryogenic gas, ions, total nitrogen/NOx or another phase. No fixed grade, geography, density or amount is supplied. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Argon to air (`argon_out`)

Actual discharged atmospheric/supplied argon with disjoint source subaccounts; not Product argon input duplicated as emission. Physical-only full gross event dimension. Native elementary argon emission to unspecified air, CAS 7440-37-1, Mass/kg. Record actual ordinary gaseous argon release with separately measured atmospheric and supplied-gas origins. No isotope, indoor/high-stack/long-term compartment or Product gas substitution; aliases do not establish a mixture or emission amount. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Fossil methane to air (`methane_air`)

Conditional only actual independently speciated fossil CH4; not VOC, total hydrocarbons or a balance residual. Physical-only full gross event dimension. Native ordinary fossil methane emission to unspecified air, CAS 74-82-8, Mass/kg. Independently establish actual CH4 and fossil origin; native graphite, carbon-black, ether, formaldehyde and isotope synonyms are conflicting aliases, not alternate adopted substances. Not whole fuel, VOC, total hydrocarbons, a delayed-emission correction or assumed wax-burnout fraction. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Elemental silver particles to air (`silver_air`)

Conditional only actual metallic Ag particles in the measured release medium and size range; not total Ag or mixed alloy dust. Separate each actual oxide, ion or complex. Physical-only full gross event dimension. Native silver elementary emission to unspecified air, metallic-form CAS 7440-22-4, Mass/kg. Its comment also covers ions unless the applied LCIA method differentiates them, in which case the differentiated flows are preferred. This card is narrowed to independently speciated actual metallic Ag particles only: neither whole alloy dust nor total Ag across oxides, ions or complexes. Add actual different species with compatible identities and respect applicable LCIA differentiation; no speciation or particle-size fraction is inferred from the aliases. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: silver `fe0acd60-3ddc-11dd-abf6-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Copper(II) oxide particles to air (`copper_oxide_air`)

Only actual independent CuO speciation, phase and receiving air compartment. High-stack-specific native identity cannot be assigned to an unspecified workshop outlet. Physical-only full gross event dimension. Native copper(II) oxide elementary emission to unspecified air, CAS 1317-38-0, Mass/kg. Use actual independently identified CuO mass and phase only. Cu(I)-oxide Chinese synonyms and catalyst/mixture aliases do not identify Cu2O, total copper, whole catalyst or mixed polishing dust here. No oxidation fraction, high-stack/indoor/long-term compartment or emission factor is assumed. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: copper (ii) oxide `d6f10835-64fd-42de-b964-96512a8e29fe`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Silicon dioxide particles to air (`silica_air`)

Only measured actual SiO2 phase/particle identity and compartment, not total PM or total silicon. A long-term emission native cannot stand for a contemporary workshop release. Physical-only full gross event dimension. Native silicon-dioxide elementary emission to unspecified air, CAS 7631-86-9, Mass/kg. Confirm actual SiO2 chemical identity, phase/crystallinity, hydration and particle state independently against this identity and the applied method; generic silica, quartz/nano/catalyst and unrelated phosphate aliases do not establish a compatible specific phase or permit whole investment/PM/Si mass. Use a more specific compatible identity when actual phase or LCIA treatment requires it. No long-term/high-stack/indoor substitute or phase fraction is inferred. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: silicon dioxide `37e31ea4-0317-4d50-a77e-54fe9eedcc33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Elemental carbon soot to air (`soot_air`)

Only actual speciated soot carbon outlet; mixed soot Waste records are not an Elementary air identity. Other actual organics/particles require individual additions. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Elemental carbon soot to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Fossil carbon dioxide outlet (`fossil_co2`)

Only actual independently measured separate external outlet; include actual burnout/finishing/storage/cleanup/service periods and distinguish source cohort. No gas is assumed to exist merely because a card is present. Physical-only full gross event dimension. Elementary emission of fossil carbon dioxide, CAS 124-38-9, to air unspecified, Mass/kg. Only independently established fossil CO2 mass uses this UUID; separate biogenic carbon, product CO2, dissolved carbon and measured carbon indicators. No default oxidation factor or release amount. Native broad synonyms include dry ice, ions and isotope labels; these do not replace the specific neutral fossil CO2 gas/CAS and emission compartment adopted here. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Fossil carbon monoxide outlet (`fossil_co`)

Only actual independently measured separate external outlet; include actual burnout/finishing/storage/cleanup/service periods and distinguish source cohort. No gas is assumed to exist merely because a card is present. Physical-only full gross event dimension. Elementary fossil carbon monoxide emission, CAS 630-08-0, to air unspecified, Mass/kg. Require independent actual CO speciation and fossil origin; not total carbon, VOC, CO2 or a purchased gas. No assumed incomplete-combustion amount. Native broad synonyms include cryogenic liquid and whole flue/exhaust gas; only independently measured molecular CO mass is adopted, never whole exhaust mass or a purchased liquid. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

###### Actual water vapour outlet (`vapour_out`)

Only actual independently measured separate external outlet; include actual burnout/finishing/storage/cleanup/service periods and distinguish source cohort. No gas is assumed to exist merely because a card is present. Physical-only full gross event dimension. Elementary H2O vapour emission to air unspecified, CAS 7732-18-5, Mass/kg. Only an actual separate external vapour outlet; never duplicate liquid effluent/carrier water or infer two unknowns by residual. No native density, humidity, energy or heat credit. Native broad synonyms include heavy/tritiated water, ice, deionised water and unrelated group labels; none changes the ordinary H2O vapour/CAS and air-emission identity used here. Isotope-labelled water or other compounds require their own identity. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_support`
- Sources: `beehive-rings`; `ilcd-attributional-2010`

### Process: Actual packaging stock and six-leg events (`pack`)

#### Inputs

##### Product flows

###### Whole folding paperboard ring box (`folding_box_p`)

Separate external procurement of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native whole folding paper/paperboard-box Product at plant, cut/fold/laminate route, Mass/kg. The English comment is truncated; the Chinese text includes printing, flat delivery and a transport-durability limitation. Use only the actual inner folding paperboard ring-presentation box with matching supplied construction/finish, recording flat or erected condition and one complete article owner. It is not the outer corrugated shipping carton or a foam/velvet case; actual shipment requires independently suitable outer protection rather than attributing transport strength to this box. Integral components are nonadditive; separately supplied inserts use disjoint bridges. No thickness, recipe, reuse life or automatic return fitness is supplied; discarded articles need Waste identities. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole folding paperboard ring box (`folding_box_i`)

Supplier-included ingress of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native whole folding paper/paperboard-box Product at plant, cut/fold/laminate route, Mass/kg. The English comment is truncated; the Chinese text includes printing, flat delivery and a transport-durability limitation. Use only the actual inner folding paperboard ring-presentation box with matching supplied construction/finish, recording flat or erected condition and one complete article owner. It is not the outer corrugated shipping carton or a foam/velvet case; actual shipment requires independently suitable outer protection rather than attributing transport strength to this box. Integral components are nonadditive; separately supplied inserts use disjoint bridges. No thickness, recipe, reuse life or automatic return fitness is supplied; discarded articles need Waste identities. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole folding paperboard ring box (`folding_box_er`)

External return received of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native whole folding paper/paperboard-box Product at plant, cut/fold/laminate route, Mass/kg. The English comment is truncated; the Chinese text includes printing, flat delivery and a transport-durability limitation. Use only the actual inner folding paperboard ring-presentation box with matching supplied construction/finish, recording flat or erected condition and one complete article owner. It is not the outer corrugated shipping carton or a foam/velvet case; actual shipment requires independently suitable outer protection rather than attributing transport strength to this box. Integral components are nonadditive; separately supplied inserts use disjoint bridges. No thickness, recipe, reuse life or automatic return fitness is supplied; discarded articles need Waste identities. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole corrugated cardboard shipping carton (`carton_p`)

Separate external procurement of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Whole corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole corrugated cardboard shipping carton (`carton_i`)

Supplier-included ingress of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Whole corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole corrugated cardboard shipping carton (`carton_er`)

External return received of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Whole corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole polyethylene ingress bag (`pe_bag_p`)

Separate external procurement of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native Product flow is one whole polyethylene bag, CAS 9002-88-4, production mix at plant, Mass/kg. PE bag synonyms and comment agree on supplied polyethylene packaging/transport/storage article; no fixed layer, thickness, size, density, content share or provider. Not PET, a liner/thread added beside the same whole bag, a seed-capacity-specific sack or bare resin. Actual attached water/components are included once. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole polyethylene ingress bag (`pe_bag_i`)

Supplier-included ingress of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native Product flow is one whole polyethylene bag, CAS 9002-88-4, production mix at plant, Mass/kg. PE bag synonyms and comment agree on supplied polyethylene packaging/transport/storage article; no fixed layer, thickness, size, density, content share or provider. Not PET, a liner/thread added beside the same whole bag, a seed-capacity-specific sack or bare resin. Actual attached water/components are included once. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole polyethylene ingress bag (`pe_bag_er`)

External return received of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native Product flow is one whole polyethylene bag, CAS 9002-88-4, production mix at plant, Mass/kg. PE bag synonyms and comment agree on supplied polyethylene packaging/transport/storage article; no fixed layer, thickness, size, density, content share or provider. Not PET, a liner/thread added beside the same whole bag, a seed-capacity-specific sack or bare resin. Actual attached water/components are included once. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Whole folding paperboard ring box (`folding_box_s`)

Carried on gross physical shipment of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native whole folding paper/paperboard-box Product at plant, cut/fold/laminate route, Mass/kg. The English comment is truncated; the Chinese text includes printing, flat delivery and a transport-durability limitation. Use only the actual inner folding paperboard ring-presentation box with matching supplied construction/finish, recording flat or erected condition and one complete article owner. It is not the outer corrugated shipping carton or a foam/velvet case; actual shipment requires independently suitable outer protection rather than attributing transport strength to this box. Integral components are nonadditive; separately supplied inserts use disjoint bridges. No thickness, recipe, reuse life or automatic return fitness is supplied; discarded articles need Waste identities. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole folding paperboard ring box (`folding_box_eo`)

External return sent of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native whole folding paper/paperboard-box Product at plant, cut/fold/laminate route, Mass/kg. The English comment is truncated; the Chinese text includes printing, flat delivery and a transport-durability limitation. Use only the actual inner folding paperboard ring-presentation box with matching supplied construction/finish, recording flat or erected condition and one complete article owner. It is not the outer corrugated shipping carton or a foam/velvet case; actual shipment requires independently suitable outer protection rather than attributing transport strength to this box. Integral components are nonadditive; separately supplied inserts use disjoint bridges. No thickness, recipe, reuse life or automatic return fitness is supplied; discarded articles need Waste identities. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole corrugated cardboard shipping carton (`carton_s`)

Carried on gross physical shipment of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Whole corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole corrugated cardboard shipping carton (`carton_eo`)

External return sent of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Whole corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole polyethylene ingress bag (`pe_bag_s`)

Carried on gross physical shipment of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native Product flow is one whole polyethylene bag, CAS 9002-88-4, production mix at plant, Mass/kg. PE bag synonyms and comment agree on supplied polyethylene packaging/transport/storage article; no fixed layer, thickness, size, density, content share or provider. Not PET, a liner/thread added beside the same whole bag, a seed-capacity-specific sack or bare resin. Actual attached water/components are included once. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Whole polyethylene ingress bag (`pe_bag_eo`)

External return sent of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. Native Product flow is one whole polyethylene bag, CAS 9002-88-4, production mix at plant, Mass/kg. PE bag synonyms and comment agree on supplied polyethylene packaging/transport/storage article; no fixed layer, thickness, size, density, content share or provider. Not PET, a liner/thread added beside the same whole bag, a seed-capacity-specific sack or bare resin. Actual attached water/components are included once. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

##### Waste flows

###### Separately collected spent whole folding paperboard ring box (`folding_box_w`)

Separate waste outlet of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Separately collected spent whole folding paperboard ring box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Separately collected spent whole corrugated cardboard shipping carton (`carton_w`)

Separate waste outlet of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Separately collected spent whole corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

###### Separately collected spent whole polyethylene ingress bag (`pe_bag_w`)

Separate waste outlet of this one packaging pool, conditional on the actual event. Full gross V in kg; no manufacture/service stock correction or economic share. P and I are disjoint: supplier-included material retains real physical ingress and exactly one upstream owner. Whole wet article includes its actual components/water once; separately added components use disjoint bridges. W is an exchange only for a real segregated outlet; a mixed W pool is a measured subledger of mixed_waste, never an extra external outlet. Absence needs evidence, unknown is not zero. All opening/closing empty, attached WIP/FG and reusable stocks remain; internal reuse cancels. Physical-only full gross event dimension. UUID unresolved: retain this specific physical identity and verify actual grade/form/route/type/phase/provider before binding; not an absent exchange or a fabricated zero. Property support resolves to unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit is kg. The sole-quotient numerator here is the actual complete gross leg V_i; no stock correction or economic allocation is applied to this physical amount. Any real associated burden has one separate tagged vector; no new procurement, provider duplication or credit.

- Selected flow: Separately collected spent whole polyethylene ingress bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i once; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `westhill-ring`; `ilcd-attributional-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_context | actual attributional multifunctionality | The following rules apply to actual attributional multifunctionality, not an arbitrary choice of favourable results. | `ilcd-attributional-2010` |
| al_hierarchy | attributional studies requiring allocation | Limit this hierarchy to the declared attributional situations in which allocation is methodologically required. First separately meter dedicated steps, then use justified real/virtual subdivision. For each remaining exchange independently establish its determining physical causal relationship and quantify it. Do not arbitrarily choose mass, item count, fine-silver content, time or economic value. Only genuinely residual shared process burdens use representative contemporaneous market values at the same actual common process gate, state, grade and condition; remove later refining, packing and freight costs if deriving that gate value. Report keys, limitations, sensitivity and conservation of each exchange across functions. | `ilcd-attributional-2010` |
| al_scrap | sprues scrap dust rejects and treatment | Internal alloy/wax returns pair and cancel at the combined gate while preserving energy, loss, pollution and inherited vectors. Precious-metal value does not exempt scrap production/treatment burdens. Ordinary failed/rejected/sample/sold waste or offsite treatment is not an automatic T_other deduction or recycling credit. Transfer one burden vector only to a true other cohort/function under a justified allocation/handover. If external recovery/recycling is modelled, identify the actual joint process, secondary material condition and applicable study recycling model first; no default recycled content, recovery, price share, avoided virgin metal or avoided disposal credit. Keep all physical masses gross regardless of burden allocation. | `goldsmith-casting`; `ilcd-attributional-2010` |
| al_service | shared services and assets | Service allocation is exchange-specific: actual fulfilled duty, duration/capacity and physically determining constraint require evidence. Keep manufacturing, original-cohort FG service and physical-only ledgers distinct; performed service remains with its original cohort even for unsold closing FG. Asset mass is not fulfilled service hours or MJ. Packaging procurement and supplier-included ownership occur once; gross S/ER/EO/W never generate new procurement, second provider or automatic coproduct credit. | `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect undivided raw records in their actual original units. The aggregation label identifies the final common basis only; it does not execute another division. Keep event/cohort/dimension, full gross physical quantity and every inherited burden vector distinct. Actual factory values and unknown species remain unmeasured until real evidence arrives.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | finish | finished_ring | calibrated weighing and unique release register | configuration; drawing revision; complete article; alloy assay; finish; dry/wet condition; unique release id; calibrated net mass; inspection method; results; disposition; Q; original Q_H; H | Weigh each complete ring net of all packaging on a calibrated suitable balance, link the same configuration/condition and first release exactly once, and preserve raw resolution/calibration and uncertainty. Counts never imply weight; if count conversion is needed, independently measure net mass of same configured complete pieces, without geometry/density inference. | kg; item | each release and configuration change | complete cohort including Q0 | actual manufacturing acceptance gate | per reference flow | release register; balance calibration; specification; test result |
| cp_material_model | model | one supplied material or preparation | receipt issue stock and assay records | row_id; actual event; actual presence; supplier; full formulation; supplied form; CAS; grade; raw original quantity; unit; phase; carrier water; assay subaccounts; B_open; U; B_close; full wet physical stock; each inherited vector; cohort; provider owner; already_net; loss; destination | Weigh/meter actual whole supplied material once; independently assay constituent/phase subaccounts without extra purchases. Record original extensive units, receipts, issues, complete opening/closing raw/WIP/unused non-WIP quantities and vectors. Already net consumption is not stock-corrected twice. Add individually identified actual new materials or parts before modelling. | actual original unit; kg for whole mass | every receipt issue mixing loss and stock event | complete manufacturing cohort and stock history | actual each material gate | per reference flow | supplier certificate; current SDS/TDS; invoices; weighing; stock history |
| cp_material_cast | cast | one supplied material or preparation | receipt issue stock and assay records | row_id; actual event; actual presence; supplier; full formulation; supplied form; CAS; grade; raw original quantity; unit; phase; carrier water; assay subaccounts; B_open; U; B_close; full wet physical stock; each inherited vector; cohort; provider owner; already_net; loss; destination | Weigh/meter actual whole supplied material once; independently assay constituent/phase subaccounts without extra purchases. Record original extensive units, receipts, issues, complete opening/closing raw/WIP/unused non-WIP quantities and vectors. Already net consumption is not stock-corrected twice. Add individually identified actual new materials or parts before modelling. | actual original unit; kg for whole mass | every receipt issue mixing loss and stock event | complete manufacturing cohort and stock history | actual each material gate | per reference flow | supplier certificate; current SDS/TDS; invoices; weighing; stock history |
| cp_material_finish | finish | one supplied material or preparation | receipt issue stock and assay records | row_id; actual event; actual presence; supplier; full formulation; supplied form; CAS; grade; raw original quantity; unit; phase; carrier water; assay subaccounts; B_open; U; B_close; full wet physical stock; each inherited vector; cohort; provider owner; already_net; loss; destination | Weigh/meter actual whole supplied material once; independently assay constituent/phase subaccounts without extra purchases. Record original extensive units, receipts, issues, complete opening/closing raw/WIP/unused non-WIP quantities and vectors. Already net consumption is not stock-corrected twice. Add individually identified actual new materials or parts before modelling. | actual original unit; kg for whole mass | every receipt issue mixing loss and stock event | complete manufacturing cohort and stock history | actual each material gate | per reference flow | supplier certificate; current SDS/TDS; invoices; weighing; stock history |
| cp_material_support | support | one supplied material or preparation | receipt issue stock and assay records | row_id; actual event; actual presence; supplier; full formulation; supplied form; CAS; grade; raw original quantity; unit; phase; carrier water; assay subaccounts; B_open; U; B_close; full wet physical stock; each inherited vector; cohort; provider owner; already_net; loss; destination | Weigh/meter actual whole supplied material once; independently assay constituent/phase subaccounts without extra purchases. Record original extensive units, receipts, issues, complete opening/closing raw/WIP/unused non-WIP quantities and vectors. Already net consumption is not stock-corrected twice. Add individually identified actual new materials or parts before modelling. | actual original unit; kg for whole mass | every receipt issue mixing loss and stock event | complete manufacturing cohort and stock history | actual each material gate | per reference flow | supplier certificate; current SDS/TDS; invoices; weighing; stock history |
| cp_energy_model | model | each actual electricity duty | original meter readings | row_id; process; circuit; site country; voltage; supply mix; provider; raw unit; cumulative start; cumulative end; real rate and time if applicable; startup; shutdown; idle; failed run; cleanup; cohort; unused charge; allocation evidence | Meter actual electrical duty in original kWh/MJ before allocation, with full failed/idle intervals. Distinct circuits/duties sum to the main meter without adding both. Native CN low-voltage grid identity applies only where matched; other actual countries/voltages/supply routes need separate compatible identity cards. No energy factor invented. | kWh; MJ | each duty and complete meter interval | full cohort and original-cohort service H | actual energy supply boundary | per reference flow | meter calibration; circuit logs; supply agreement; allocation record |
| cp_energy_cast | cast | each actual electricity duty | original meter readings | row_id; process; circuit; site country; voltage; supply mix; provider; raw unit; cumulative start; cumulative end; real rate and time if applicable; startup; shutdown; idle; failed run; cleanup; cohort; unused charge; allocation evidence | Meter actual electrical duty in original kWh/MJ before allocation, with full failed/idle intervals. Distinct circuits/duties sum to the main meter without adding both. Native CN low-voltage grid identity applies only where matched; other actual countries/voltages/supply routes need separate compatible identity cards. No energy factor invented. | kWh; MJ | each duty and complete meter interval | full cohort and original-cohort service H | actual energy supply boundary | per reference flow | meter calibration; circuit logs; supply agreement; allocation record |
| cp_energy_finish | finish | each actual electricity duty | original meter readings | row_id; process; circuit; site country; voltage; supply mix; provider; raw unit; cumulative start; cumulative end; real rate and time if applicable; startup; shutdown; idle; failed run; cleanup; cohort; unused charge; allocation evidence | Meter actual electrical duty in original kWh/MJ before allocation, with full failed/idle intervals. Distinct circuits/duties sum to the main meter without adding both. Native CN low-voltage grid identity applies only where matched; other actual countries/voltages/supply routes need separate compatible identity cards. No energy factor invented. | kWh; MJ | each duty and complete meter interval | full cohort and original-cohort service H | actual energy supply boundary | per reference flow | meter calibration; circuit logs; supply agreement; allocation record |
| cp_energy_service | service | each actual electricity duty | original meter readings | row_id; process; circuit; site country; voltage; supply mix; provider; raw unit; cumulative start; cumulative end; real rate and time if applicable; startup; shutdown; idle; failed run; cleanup; cohort; unused charge; allocation evidence | Meter actual electrical duty in original kWh/MJ before allocation, with full failed/idle intervals. Distinct circuits/duties sum to the main meter without adding both. Native CN low-voltage grid identity applies only where matched; other actual countries/voltages/supply routes need separate compatible identity cards. No energy factor invented. | kWh; MJ | each duty and complete meter interval | full cohort and original-cohort service H | actual energy supply boundary | per reference flow | meter calibration; circuit logs; supply agreement; allocation record |
| cp_water_cast | cast | actual external water and moisture exchange | metering weighing and independent moisture measurements | event; row_id; original cohort; actual phase; receiving medium; cumulative amount; actual rate and time; independently measured density and state; free water; carrier water; sorbed water; structural water; independently evidenced reaction water; full wet opening; full wet closing; natural uptake; desorption; X_in; X_out; other_same_side_overlap_id | Measure separate liquid ingress/outlets and natural ambient-water uptake/desorption in manufacture/storage/handling as well as actual cleaning/work. Preserve influx retained in full wet closing stock; X removes only identical other same-side flow overlap, never stock. Whole wastewater/article carrier water is included once. No one-residual solution for two unknowns. | kg; m3 only with measured substance density and state | every event and representative continuous interval | manufacturing and actual service/storage horizon | manufacturing FG and combined physical gates | per reference flow | water meter; calibrated scales; moisture sampling; density; independent closure |
| cp_water_finish | finish | actual external water and moisture exchange | metering weighing and independent moisture measurements | event; row_id; original cohort; actual phase; receiving medium; cumulative amount; actual rate and time; independently measured density and state; free water; carrier water; sorbed water; structural water; independently evidenced reaction water; full wet opening; full wet closing; natural uptake; desorption; X_in; X_out; other_same_side_overlap_id | Measure separate liquid ingress/outlets and natural ambient-water uptake/desorption in manufacture/storage/handling as well as actual cleaning/work. Preserve influx retained in full wet closing stock; X removes only identical other same-side flow overlap, never stock. Whole wastewater/article carrier water is included once. No one-residual solution for two unknowns. | kg; m3 only with measured substance density and state | every event and representative continuous interval | manufacturing and actual service/storage horizon | manufacturing FG and combined physical gates | per reference flow | water meter; calibrated scales; moisture sampling; density; independent closure |
| cp_water_service | service | actual external water and moisture exchange | metering weighing and independent moisture measurements | event; row_id; original cohort; actual phase; receiving medium; cumulative amount; actual rate and time; independently measured density and state; free water; carrier water; sorbed water; structural water; independently evidenced reaction water; full wet opening; full wet closing; natural uptake; desorption; X_in; X_out; other_same_side_overlap_id | Measure separate liquid ingress/outlets and natural ambient-water uptake/desorption in manufacture/storage/handling as well as actual cleaning/work. Preserve influx retained in full wet closing stock; X removes only identical other same-side flow overlap, never stock. Whole wastewater/article carrier water is included once. No one-residual solution for two unknowns. | kg; m3 only with measured substance density and state | every event and representative continuous interval | manufacturing and actual service/storage horizon | manufacturing FG and combined physical gates | per reference flow | water meter; calibrated scales; moisture sampling; density; independent closure |
| cp_water_support | support | actual external water and moisture exchange | metering weighing and independent moisture measurements | event; row_id; original cohort; actual phase; receiving medium; cumulative amount; actual rate and time; independently measured density and state; free water; carrier water; sorbed water; structural water; independently evidenced reaction water; full wet opening; full wet closing; natural uptake; desorption; X_in; X_out; other_same_side_overlap_id | Measure separate liquid ingress/outlets and natural ambient-water uptake/desorption in manufacture/storage/handling as well as actual cleaning/work. Preserve influx retained in full wet closing stock; X removes only identical other same-side flow overlap, never stock. Whole wastewater/article carrier water is included once. No one-residual solution for two unknowns. | kg; m3 only with measured substance density and state | every event and representative continuous interval | manufacturing and actual service/storage horizon | manufacturing FG and combined physical gates | per reference flow | water meter; calibrated scales; moisture sampling; density; independent closure |
| cp_water_pack | pack | actual external water and moisture exchange | metering weighing and independent moisture measurements | event; row_id; original cohort; actual phase; receiving medium; cumulative amount; actual rate and time; independently measured density and state; free water; carrier water; sorbed water; structural water; independently evidenced reaction water; full wet opening; full wet closing; natural uptake; desorption; X_in; X_out; other_same_side_overlap_id | Measure separate liquid ingress/outlets and natural ambient-water uptake/desorption in manufacture/storage/handling as well as actual cleaning/work. Preserve influx retained in full wet closing stock; X removes only identical other same-side flow overlap, never stock. Whole wastewater/article carrier water is included once. No one-residual solution for two unknowns. | kg; m3 only with measured substance density and state | every event and representative continuous interval | manufacturing and actual service/storage horizon | manufacturing FG and combined physical gates | per reference flow | water meter; calibrated scales; moisture sampling; density; independent closure |
| cp_gas_cast | cast | each supplied or environmental actual gas species | independent flow and species measurement | row_id; event; original cohort; gas species; CAS; phase; particle size if relevant; inlet or receiving compartment; fossil or biogenic origin; cumulative volume; real rate; actual time; temperature; pressure; humidity; independently measured density; full gross V; assigned direct-emission vector; uncertainty; detection limit | Measure each actual gas or particulate species and outlet independently with calibrated flow/speciation. Cumulative integrated gas volume is not multiplied by time again; only true rates integrate. Use substance-specific measured state/density, not water density. O2/N2/Ar/H2O accounts do not overlap an air aggregate; total metal/COD/VOC/PM do not identify species. Keep complete physical V and actual attributed direct-emission burden as separate dimensions once. | kg; original gas unit with measured state | each batch outlet and complete monitoring interval | complete failures cleanup idle and service horizons | actual inlet and receiving environmental compartments | per reference flow | calibration; analytical report; measured state; independent carbon water and metal balances |
| cp_gas_support | support | each supplied or environmental actual gas species | independent flow and species measurement | row_id; event; original cohort; gas species; CAS; phase; particle size if relevant; inlet or receiving compartment; fossil or biogenic origin; cumulative volume; real rate; actual time; temperature; pressure; humidity; independently measured density; full gross V; assigned direct-emission vector; uncertainty; detection limit | Measure each actual gas or particulate species and outlet independently with calibrated flow/speciation. Cumulative integrated gas volume is not multiplied by time again; only true rates integrate. Use substance-specific measured state/density, not water density. O2/N2/Ar/H2O accounts do not overlap an air aggregate; total metal/COD/VOC/PM do not identify species. Keep complete physical V and actual attributed direct-emission burden as separate dimensions once. | kg; original gas unit with measured state | each batch outlet and complete monitoring interval | complete failures cleanup idle and service horizons | actual inlet and receiving environmental compartments | per reference flow | calibration; analytical report; measured state; independent carbon water and metal balances |
| cp_gas_service | service | each supplied or environmental actual gas species | independent flow and species measurement | row_id; event; original cohort; gas species; CAS; phase; particle size if relevant; inlet or receiving compartment; fossil or biogenic origin; cumulative volume; real rate; actual time; temperature; pressure; humidity; independently measured density; full gross V; assigned direct-emission vector; uncertainty; detection limit | Measure each actual gas or particulate species and outlet independently with calibrated flow/speciation. Cumulative integrated gas volume is not multiplied by time again; only true rates integrate. Use substance-specific measured state/density, not water density. O2/N2/Ar/H2O accounts do not overlap an air aggregate; total metal/COD/VOC/PM do not identify species. Keep complete physical V and actual attributed direct-emission burden as separate dimensions once. | kg; original gas unit with measured state | each batch outlet and complete monitoring interval | complete failures cleanup idle and service horizons | actual inlet and receiving environmental compartments | per reference flow | calibration; analytical report; measured state; independent carbon water and metal balances |
| cp_waste_model | model | each real segregated or single mixed waste outlet | weighing consignment treatment and component subaccounts | row_id; actual outlet id; whole wet mass; dry solids; water; actual species; Ag assay; Cu assay; each source pool W; same-side overlap bridge; treatment provider; historical vector; cohort; actual status; sale or fee; treatment burden; justified true other function handover | Weigh complete actual wet outlets and independently analyse constituents. Distinguish captured dust from emission, and wastewater carrier mass from species released by actual treatment. A single mixed outlet has one exchange and one treatment owner; source-pool W masses sum to it and never add again. Waste sale/failure/offsite disposal does not automatically deduct manufacturing/treatment burden. Report each actual waste outlet through calc_gross with its complete measured V_i as the sole-quotient numerator; historical/allocated manufacturing or treatment burden is a separate once-owned vector, never a correction or share applied to that physical outlet. | kg; actual original extensive unit | each outlet and treatment consignment | full cohort including failures Q0 and cleanup | actual external treatment or recovery gate | per reference flow | weighing; laboratory speciation; waste manifest; treatment contract; source-pool reconciliation |
| cp_waste_cast | cast | each real segregated or single mixed waste outlet | weighing consignment treatment and component subaccounts | row_id; actual outlet id; whole wet mass; dry solids; water; actual species; Ag assay; Cu assay; each source pool W; same-side overlap bridge; treatment provider; historical vector; cohort; actual status; sale or fee; treatment burden; justified true other function handover | Weigh complete actual wet outlets and independently analyse constituents. Distinguish captured dust from emission, and wastewater carrier mass from species released by actual treatment. A single mixed outlet has one exchange and one treatment owner; source-pool W masses sum to it and never add again. Waste sale/failure/offsite disposal does not automatically deduct manufacturing/treatment burden. Report each actual waste outlet through calc_gross with its complete measured V_i as the sole-quotient numerator; historical/allocated manufacturing or treatment burden is a separate once-owned vector, never a correction or share applied to that physical outlet. | kg; actual original extensive unit | each outlet and treatment consignment | full cohort including failures Q0 and cleanup | actual external treatment or recovery gate | per reference flow | weighing; laboratory speciation; waste manifest; treatment contract; source-pool reconciliation |
| cp_waste_finish | finish | each real segregated or single mixed waste outlet | weighing consignment treatment and component subaccounts | row_id; actual outlet id; whole wet mass; dry solids; water; actual species; Ag assay; Cu assay; each source pool W; same-side overlap bridge; treatment provider; historical vector; cohort; actual status; sale or fee; treatment burden; justified true other function handover | Weigh complete actual wet outlets and independently analyse constituents. Distinguish captured dust from emission, and wastewater carrier mass from species released by actual treatment. A single mixed outlet has one exchange and one treatment owner; source-pool W masses sum to it and never add again. Waste sale/failure/offsite disposal does not automatically deduct manufacturing/treatment burden. Report each actual waste outlet through calc_gross with its complete measured V_i as the sole-quotient numerator; historical/allocated manufacturing or treatment burden is a separate once-owned vector, never a correction or share applied to that physical outlet. | kg; actual original extensive unit | each outlet and treatment consignment | full cohort including failures Q0 and cleanup | actual external treatment or recovery gate | per reference flow | weighing; laboratory speciation; waste manifest; treatment contract; source-pool reconciliation |
| cp_waste_support | support | each real segregated or single mixed waste outlet | weighing consignment treatment and component subaccounts | row_id; actual outlet id; whole wet mass; dry solids; water; actual species; Ag assay; Cu assay; each source pool W; same-side overlap bridge; treatment provider; historical vector; cohort; actual status; sale or fee; treatment burden; justified true other function handover | Weigh complete actual wet outlets and independently analyse constituents. Distinguish captured dust from emission, and wastewater carrier mass from species released by actual treatment. A single mixed outlet has one exchange and one treatment owner; source-pool W masses sum to it and never add again. Waste sale/failure/offsite disposal does not automatically deduct manufacturing/treatment burden. Report each actual waste outlet through calc_gross with its complete measured V_i as the sole-quotient numerator; historical/allocated manufacturing or treatment burden is a separate once-owned vector, never a correction or share applied to that physical outlet. | kg; actual original extensive unit | each outlet and treatment consignment | full cohort including failures Q0 and cleanup | actual external treatment or recovery gate | per reference flow | weighing; laboratory speciation; waste manifest; treatment contract; source-pool reconciliation |
| cp_waste_pack | pack | each real segregated or single mixed waste outlet | weighing consignment treatment and component subaccounts | row_id; actual outlet id; whole wet mass; dry solids; water; actual species; Ag assay; Cu assay; each source pool W; same-side overlap bridge; treatment provider; historical vector; cohort; actual status; sale or fee; treatment burden; justified true other function handover | Weigh complete actual wet outlets and independently analyse constituents. Distinguish captured dust from emission, and wastewater carrier mass from species released by actual treatment. A single mixed outlet has one exchange and one treatment owner; source-pool W masses sum to it and never add again. Waste sale/failure/offsite disposal does not automatically deduct manufacturing/treatment burden. | kg; actual original extensive unit | each outlet and treatment consignment | full cohort including failures Q0 and cleanup | actual external treatment or recovery gate | per reference flow | weighing; laboratory speciation; waste manifest; treatment contract; source-pool reconciliation |
| cp_transport_support | support | actual road freight duty | shipment and consignment record | leg; wet mass kg; distance km; vehicle; load; route; provider; included freight owner; raw t*km or kg*km; cohort; attribution evidence | Collect actual undivided full physical consignment and distance, including actual returns. Convert workload once in kg*km and retain actual vehicle and provider; supplier-included freight is singly owned. Physical wet mass is never scaled by a price share. | kg*km; kg; km | each real consignment | complete included routes and original service H | actual road freight gate | per reference flow | consignment; route record; load evidence; invoice |
| cp_transport_service | service | actual road freight duty | shipment and consignment record | leg; wet mass kg; distance km; vehicle; load; route; provider; included freight owner; raw t*km or kg*km; cohort; attribution evidence | Collect actual undivided full physical consignment and distance, including actual returns. Convert workload once in kg*km and retain actual vehicle and provider; supplier-included freight is singly owned. Physical wet mass is never scaled by a price share. | kg*km; kg; km | each real consignment | complete included routes and original service H | actual road freight gate | per reference flow | consignment; route record; load evidence; invoice |
| cp_service | service | gross released-ring dispatch return and actual postwork | cohort-linked physical and service record | event; original release id; original Q_H; H; G; R; full returned mass; actual state; added water; actual loss; original dispatch match; original manufacturing vector; actual new service vector; manufacturer specification permission; posttests; acceptance; disposition; unused charge | Weigh actual gross G/R independently, retain original cohort and historical burden without repurchase or second Q. Record every actual storage/handling/work increment even if unauthorised or failed. Permission and tests govern renewed acceptance/disposition only; natural humidity exchange needs no fictional work permission. Preserve performed service on closing FG; carry only unused/unassigned charge. | kg; actual service extensive unit | each actual service dispatch return and work event | original Q_H with observed horizon H | actual released-product gate | per reference flow | release and dispatch match; service logs; permission; test; disposition |
| cp_thermal | service | actual externally purchased heat carrier and return | mass state and energy supply-return record | event; provider; contract boundary; full steam carrier kg; actual inlet state; actual pressure; actual temperature; phase; measured enthalpy; delivered MJ; returned condensate kg; actual return state and enthalpy; product return owner; onsite steamer overlap; cohort | Only for real external purchased steam/heat: measure full carrier mass and net delivered heat from actual supply-return state under one provider agreement. Return to supplier is Product flow. Onsite electrical steam instead uses actual water/electricity records once; do not invent external steam, boiler or default enthalpy. | kg; MJ; measured thermodynamic state | each actual thermal delivery and return | original-cohort service horizon | actual provider supply-return boundary | per reference flow | carrier meter; actual state; enthalpy evidence; provider convention |
| cp_asset | support | one asset dry body and its fulfilled service | physical stock and measured utilization history | asset id; new or used; dry body kg; separately included installed fluid; attached water; opening installed and spare stocks; actual receipt; actual external return; actual retirement; closing full wet stock; new repair part; old part; each water phase; fulfilled hours; observed capacity; provider vector; original cohort; unused unassigned charge; same_side_X | Keep full physical asset/part/fluid stocks and events independent of fulfilled service burden. Match dry body plus disjoint installed fluids/water to whole wet article without double tare. Real replacement-material/water influx remains even in full wet closing stock; X removes only identical other incoming/outgoing terms. Derive service burden from real utilization/capacity and one provider, never assumed life or whole-machine-per-kg replacement. | kg for physical mass; h for actual service; each original native unit | each asset stock receipt repair return retirement and service event | actual historical and current service period | actual equipment and provider gate | per reference flow | asset log; part identity; service meter; observed utilization; provider boundary |
| cp_pack | pack | each named packaging pool and six disjoint physical events | six-leg event cards and complete stock reconciliation | pool; actual material; whole wet article; disjoint components; event direction; P; I; ER; gross S; EO; W; opening empty; opening attached WIP; opening attached FG; opening reusable; closing empty; closing attached WIP; closing attached FG; closing reusable; internal reuse; natural water uptake; desorption; component addition; X_in; X_out; other_same_side_overlap_id; mixed outlet id; one upstream owner; actual service charge; cohort; Q_H; H | Weigh every real P/I/ER/S/EO/W direction for each individual pool; P and supplier-included I are disjoint. Full opening plus P+I+ER equals full closing plus gross S+EO+W with separately measured natural material/water changes and disjoint X bridges. Preserve new influx retained in closing stock and whole wet mass once. Mixed W source pools sum to one outlet; W cards activate only for segregated outlets. Gross numerator is actual complete V, not burden stock correction or economic allocation. Attribute actual procurement/treatment/service burden in one separate tagged vector; internal reuse creates no purchase, Q or credit. | kg; actual original package count with measured same-article wet mass | every real event and stock close | complete cohort and observed original-cohort H | packaging manufacturing FG and consolidated gates | per reference flow | event ledger; full wet weighing; component bridge; mixed W pool sum; upstream ownership |
| cp_cooling | cast | actual external cooling carrier and net cooling service | mass state and service records | event; provider; contract; full supply kg; inlet temperature; inlet pressure; inlet phase; measured inlet enthalpy; full return kg; actual return state; measured return enthalpy; net cooling MJ; actual loss; makeup overlap; onsite cooling electricity; cohort; one provider vector | Meter only actual external supply and return carrier masses, their independently measured liquid states and enthalpies, and the actual cooling duty under one supply-return provider convention. No equal-return or fixed enthalpy assumption. Onsite closed-loop circulation cancels internally; its actual makeup, electricity and real losses remain individually recorded. | kg; MJ; actual measured state | each real supply-return and duty interval | actual complete manufacturing and service horizon | actual cooling provider gate | per reference flow | carrier meters; state and enthalpy evidence; contract; one provider vector |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_units | all inventory rows | Convert original extensive units to the actual row unit once before attribution. MJ=3.6*kWh for measured electrical energy; kg*km=1000*t*km. Only true rates integrate over actual time/state; already integrated volume does not. Count-to-mass needs independent calibrated same-configuration complete-ring mass, never a guessed per-ring weight or secondary property/density. | raw_i; native_unit; measured_state; conversion_evidence | U_i | `ilcd-attributional-2010` |
| calc_manufacturing | manufacturing burden dimension only | A_m_i = B_open_i + U_m_i - B_close_i - T_other_i. B_close contains raw/WIP and only unused/unassigned non-WIP stores or charges; never first-released closing FG. Preserve every inherited exchange vector and actual physical stock. Already stock-corrected consumption enters once without another subtraction. T_other requires a true other cohort/function and justified once-only handover; ordinary manufacturing waste, rejects, samples, sale or external treatment is not T_other. | B_open_i; U_m_i; B_close_i; T_other_i; allocation_evidence | A_m_i | `ilcd-attributional-2010` |
| calc_service | original-cohort service burden dimension only | A_s_i = C_open_i + U_s_i - C_close_unused_i - T_other_s_i. Include all performed storage/handling/packing/work increments for original Q_H over H, even unauthorised/failed work. Carry only unused/unassigned charge; do not deduct performed service for closing FG. Retain original manufacturing vector without repurchase. | C_open_i; U_s_i; C_close_unused_i; T_other_s_i; original_cohort; H | A_s_i | `ilcd-attributional-2010` |
| calc_asset_service | actual fulfilled asset service burden only | A_asset_i is actual fulfilled service with observed utilization/capacity and justified exchange-specific attribution of one compatible provider. Physical acquisition/installed stock, new/used repair parts, wet material and retirement remain separate full gross events. Unknown capacity/provider conversion stays unknown; no invented lifetime or full-machine-per-kg factor. | fulfilled_hours; observed_capacity; provider_vector; allocation_evidence; cohort | A_asset_i | `ilcd-attributional-2010` |
| calc_gross | each physical-only gross event card | N_gross_i = V_i, the actual complete physical leg in its own unit. Do not apply B_open+U-B_close, service/asset stock correction or economic share to V. Keep all actual influx and full wet closing stock; X removes only identical other same-side flow terms. Physical disclosure creates no second purchase/provider/credit. Each actual procurement, treatment, direct-emission or service burden remains in a separately tagged, once-owned vector of the same exchange/cohort, never erased or added twice. | V_i; event_identity; same_side_overlap_bridge; cohort; singly_owned_burden_vector | N_gross_i | `ilcd-attributional-2010` |
| calc_numerator | all non-reference rows | Choose one declared dimension for this card: manufacturing A_m_i, original-cohort service A_s_i, actual asset service A_asset_i, or full physical-only N_gross_i. Keep accompanying actual burden vectors separate from gross disclosures. Never merge different cohorts/dimensions under an averaged denominator. Raw-unit conversion and the real allocation decision occur before the sole quotient; no second attribution of an already assigned vector. | A_m_i; A_s_i; A_asset_i; N_gross_i; dimension; cohort | N_i | `ilcd-attributional-2010` |
| calc_denominator | finished_ring and each original cohort | Q is the sum of measured net complete-ring mass at unique first quality release. Q_c equals this Q for manufacturing, or matched original Q_H for actual service/gross/asset records over H. Closing first-released FG stays in Q; dispatch/return/reinspection adds none. Actual Q_c=0 retains full physical records and all burdens without unit results. | unique_release_id; net_mass; original_Q_H; H | Q_c | `ilcd-attributional-2010` |
| calc_quotient | all non-reference rows | x_i = N_i / Q_c. This is the only division by the declared first-release mass denominator, after raw-unit conversion and the single correct burden attribution; physical-only cards instead use complete actual V_i. All card amounts and protocol aggregation refer only to this already-calculated x_i. Never divide x_i again. No unit result at Q_c=0. | N_i; Q_c | x_i | `ilcd-attributional-2010` |
| calc_physical | manufacturing FG service and consolidated physical gates | Independently reconcile full wet opening stocks plus all actual external gross inputs against full wet closing stocks plus all actual external gross outputs and evidenced phase/species changes. Cancel internal first-release transfers and actual internal remelt/reuse pairs only. Do not add Q beside closing FG/gross dispatch. Full water/material influx retained in closing stock is not overlap. Metal, water and carbon closures need independent constraints; no residual fitting of multiple unknowns. | full_opening_stocks; actual_gross_inputs; full_closing_stocks; actual_gross_outputs; independent_species_phase_evidence | independent_physical_reconciliation | `ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all flow identities | Complete native restrictions, all properties/support chains and primary whole-terminal context; source applicability is an author judgement, not a query success flag. | Exact native record; actual supplier/grade/form |
| dq_events | all physical and burden accounts | Disjoint event/cohort/dimension; gross V with actual full wet stocks and one owned burden vector. Six packaging legs and actual new water retained. | Raw stock and event ledgers; bridge reconciliation |
| dq_measurement | actual quantities | Calibrated net complete-ring mass and real meters/assays; no invented weight, density, geometry, reaction yield or one-residual multi-unknown closure. | Calibration and independent analytical constraints |
| dq_coverage | complete cohort and actual H | All failed, Q0, idle, start/stop, cleanup, rejects, samples and actual permitted/unpermitted work retained; Q and service original Q_H/H reconciled. | Full production/service logs and dispositions |
| dq_sources | external evidence | Qualitative synthesis of independent primary routes/terminals plus applicable attributional method; not one factory BOM, scientific approval or numeric reuse. | Original full scope; applicability and countercontext |
| dq_unknown | unresolved identities providers and measurements | Declare each actual unresolved atom and uncertainty; future measurements are requirements, not zeros, passes or universal defaults. A genuine core identity/route gap would require draft/unusable status. | Explicit data gaps and actual resolution records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| vr_identity | reference and every selected flow | Verify the complete finished-ring terminal and native material/form/route/phase/type/geography/grade restrictions, every property and its exact support chain before UUID binding. The broad manufactured jewellery family is narrowed by primary whole-terminal evidence, never by name/CPC alone. Native status and software checks do not establish science, translation or methodology approval. | `goldsmith-casting`; `westhill-ring`; `struga-ring` |
| vr_completeness | all events and accounts | Require atomic cards, six-leg packaging events, actual gross legs and singly owned burden vectors; raw units/rates and full stocks with inherited vectors; all failures and Q0; independently evidenced mass/element/water/species closure. Unknown or unmeasured relationships remain explicit inconclusive data gaps, never a passing quantitative result. | `ilcd-attributional-2010` |
| vr_denominator | manufacturing and original-cohort services | Check one unique first-release output, common kg basis in both languages, no closing-FG double output or manufacturing subtraction, and one sole quotient after raw conversion and justified attribution. Actual service keeps original Q_H/H; gross V never becomes a stock-corrected/economically shrunk numerator. | `ilcd-attributional-2010` |
| vr_acceptance | actual first release and later work | Collect real configured specification, test/inspection method, result, release identity and disposition. Do not invent quality limits, certification, lifetime, fixed alloy recipe or successful rework. Unauthorised/failed work and damaged materials retain all actual increments and hold/waste disposition. | `goldsmith-casting`; `westhill-ring` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A configured unreviewed attributional manufacturing dataset once actual foreground evidence is complete |
| allowed_use | Same complete-ring boundary and declared route with verified actual providers and measured data |
| excluded_use | Automatic coverage of all 38240 jewellery; raw silver, finished-ring repacking, plated/set/other-metal or different-route products; durability comparisons or certification |
| required_metadata | All required qualifiers; source and native applicability; site/period; configuration/assay; first Q; original service horizon; stocks/vectors; actual providers; recycling convention |
| required_quality_disclosure | Science pending; Chinese aligned only; future actual measurements and auxiliary/provider identity gaps; no claimed publication or mapping acceptance |
| update_trigger | Core material/form/route/terminal, supplier, assay, energy, actual exchange, allocation, measurement or acceptance changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-38240 | official_guidance | UNSD. CPC Version 3.0 code 38240. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38240 | Broad classification context only; does not define one canonical finished-jewellery methodology. |
| goldsmith-casting | handbook | The Jewellers Toolkit; acknowledgements: Weston Beamor Ltd. Fact Sheet 06: Lost wax casting. https://bpstorageprodneu02.blob.core.windows.net/cmsassets/the-jewellers-toolkit-factsheet-06-lost-wax-casting.pdf | Complete four-page primary guide; direct expendable versus reusable-mould branch; casting/finishing/inspection and alloy-separated scrap; no operating settings or generic shrink/yield adopted. |
| westhill-ring | extension_guidance | Westhill. Silver Round Signet; Materials and craftsmanship; Design through Polishing. https://westhill-store.com/collections/signet-rings/products/silver-round-signet-ring | Primary complete unplated silver-ring terminal; lost-wax casting through abrasives/polish/ultrasonic/steam/quality check and packing; adjacent stone/gold/prototype context distinguished. No same-site combined BOM or defaults. |
| struga-ring | extension_guidance | STRUGA. Fused Cross Ring. https://strugadesign.com/products/ring-fused-cross | Primary whole unplated silver-ring terminal and natural ageing versus preblackened adjacent version; catalogue mass/size and care claims are not default LCA values or safety proof. |
| cookson-grain | extension_guidance | Cooksongold. Sterling Silver Grain, ASA 000. https://www.cooksongold.com/Grain-and-Casting-Pieces/Sterling-Silver-Grain,-100-Recycled-Silver-prcode-ASA-000 | Primary prealloy-grain supply form and supplier-specific grade context; actual lot assay/provider required. No universal 925 composition, recycled share, density, energy or operating settings adopted. |
| hisae-ring | extension_guidance | M. Hisae. Process: The Figure Ring. 1 August 2019. https://www.mhisae.com/blogs/blog/process-figure-ring | Primary sprue/abrasive/buff/ultrasonic/steam finishing context; silver master versus final chosen metal distinguished. Reusable mould life and process times not adopted. |
| beehive-rings | extension_guidance | Silver Beehive Studio. How Do You Make Your Cast Rings? 9 July 2018. https://silverbeehivestudio.com/blogs/news/how-do-you-make-your-cast-rings | Primary wax-investment-burnout-cast-finish route and failed-run inclusion; patina, historical percentages and kiln schedule remain countercontext rather than defaults. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC. ILCD Handbook General guide for Life Cycle Assessment: Detailed guidance. First edition March 2010; sections 7.9.2-7.9.3 pp.255-272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional situations requiring allocation; real/virtual subdivision, exchange-specific determining physical causality, residual same-state/gate economic value and inventory conservation. Not manufacturing evidence or permission for default recycling credits. |
| indutherm-machine | extension_guidance | Indutherm. MC-series MC 16; full process and technical overview with adjacent models. https://indutherm.de/en/MC-16/MC-16 | Primary electrical induction/vacuum investment casting capability, actual cooling-water/inert-gas questions and adjacent models. No fixed equipment, capacity, power factor, operating settings or safety assurance adopted. |
