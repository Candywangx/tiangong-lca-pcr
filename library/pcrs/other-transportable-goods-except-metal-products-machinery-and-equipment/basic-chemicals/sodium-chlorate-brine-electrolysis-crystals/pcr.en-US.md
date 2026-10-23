---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.sodium-chlorate-brine-electrolysis-crystals
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Sodium chlorate crystals by sodium-chloride brine electrolysis

## 1. Scope and Applicability

This PCR applies to industrial dried, bulk sodium-chlorate crystals (NaClO3, CAS 7775-09-9) made from solid sodium chloride by aqueous brine electrolysis, with dichromate-assisted electrolyte, brine precipitation/filtration, concentration and vacuum crystallization, crystal separation/washing, drying and hydrogen scrubbing. The category is a single chemical species with declared impurities, not the entire inorganic-salt classification. The route and relevant alternatives are described by `eu-lvics-2007` §7.13 and `epa-chlorate-2022` manufacturing section.

Exclude potassium chlorate, sodium chlorite, hypochlorite, perchlorate, formulated mixed oxidants, triammonium phosphate and unrelated inorganic salts. Delivered solutions, wet crystal cakes and hydrate-based products have different mass/processing bases and are outside this reference. This route imports heat and treated water; on-site fuel combustion, internal hydrogen combustion, refrigerated crystallization, ion-exchange brine polishing and packaged chlorate delivery require their own actual atomic additions and supporting route evidence before using an extended dataset. No absent plant technology is silently assumed. Chemical grade variants require actual supplier identities and component ledgers; the listed grades do not prescribe a recipe.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.sodium-chlorate-brine-electrolysis-crystals |
| classification_refs | CPC 3.0:34240; proposed narrower relation for this electrolysis/crystal subset only |
| covered_products | Dried bulk NaClO3 crystals from the declared sodium-chloride electrolyte route, with disclosed assay/free moisture/co-salts |
| excluded_products | Other chlorate cations/oxidation states; mixed formulations; delivered solutions; wet cake; hydrate products; unrelated salts |
| representative_product | Accepted dried crystalline sodium chlorate in bulk at the manufacturing gate |
| production_route | Solid salt dissolution → impurity precipitation/filtration → dichromate-assisted brine electrolysis and reaction → vacuum concentration/crystallization → washing/separation → drying/bulk storage; scrubbed hydrogen branch; closed mother-liquor loop |
| market_state | Bulk dried crystal product, declared residual free moisture and impurities; no assumed concentration or purity |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply crystalline sodium chlorate as an industrial chemical intermediate |
| How much | 1 kg reference flow |
| How well | Accepted grade with actual NaClO3 assay, residual free moisture, chloride, chromium and other co-salts disclosed; no use-performance equivalence inferred |
| How long or cycle | One production/delivery gate reference; service life not applicable |
| reference_flow_link | chlorate_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sodium chlorate `763dbb4e-a338-4348-b2a8-bf07b6bf7b47` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual SKU/grade; NaClO3/CAS; solid crystal state; net product mass excluding tare; assay basis; free moisture; co-salts and total/valence-specific chromium; route and electrolyte additive/hydration state; batch/site/time; feed origin/purity; utility/voltage/provider definitions and supply geography (China for the listed electricity and CaCl2 identities); hydrogen destination/purity; treatment and receiving media; allocation decision; bulk delivery boundary |

Declare every required qualifier in dataset metadata, process notes, reference-flow comment or equivalent working-package fields. The broad product UUID identifies the chemical crystal, while this PCR constrains route/state and measured supplied-product basis. It does not establish a ready background process or silently turn net product into 100% active mass. Sources: `eu-lvics-2007`, `epa-chlorate-2022`, `nouryon-chlorate-manual`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net_crystal | chlorate_product | Mass | kg | Measure accepted net dried crystal-product mass P for the represented period using calibrated weighing and acceptance/stock records; exclude packaging/container tare. The inventory reference is 1 kg supplied crystal product, not 1 kg pure active salt. Use cp_product. |
| one_denominator | all inventory rows | Declared row property | Declared row unit | Every inventory row is per 1 kg reference flow. Collection aggregates the same period’s actual attributable row quantity and divides by P; intermediate salts, liquor circulation and hydrogen quantities never replace P. |
| phase_components | all inventory rows | Mass | kg | For each actual supplied solution or wet waste retain gross physical mass and separately measured solute/free-water/other-component masses. Hydration state requires actual formula/assay and bound-water mass; do not treat crystal water as active salt or as a second purchased-water exchange. |
| electricity_basis | electricity | Net calorific value | MJ | Retain metered AC kWh and the energy conversion 1 kWh = 3.6 MJ. Verify supplier delivery voltage/loss boundary and electrical-energy meaning; a thermal property label does not make electricity a fuel. Record DC demand diagnostically, not as another purchased electricity input. |
| steam_net_heat | steam_heat, heat_export | Energy | MJ | Net useful heat is measured inlet enthalpy minus return/export enthalpy at the declared interface; retain mass, pressure, temperature and quality evidence, provider definition and losses. Do not infer net heat from a database MJ or steam mass property. |
| gas_mass_basis | nitrogen_product, hydrogen_product, hydrogen_air, oxygen_air, nitrogen_air | Mass | kg | Use actual calibrated gas measurement, composition, absolute pressure, temperature, compressibility and wet/dry convention to determine species mass; a secondary database mass coefficient is not a measured density. |
| water_phase_basis | process_water, water_air, water_discharge | Declared row property | Declared row unit | Purchased process water and vapour use kg; liquid freshwater discharge uses m3. Volume-to-mass uses measured relevant density/temperature/composition. Separate carrier water, bound water, condensate returns, recirculation and ambient humidity; preserve each physical phase. |
| effluent_species | chloride_water, sodium_water, chlorate_water, chromium_vi_water, chromium_iii_water | Mass | kg | Match laboratory species and mass basis: chloride/Na+/ClO3− as ions, Cr(VI)/Cr(III) as Cr. Convert salt-equivalent results only with documented chemical formula and molar masses; no total-Cr substitution for a valence, and no double salt/ion addition. |
| particle_partition | chlorate_dust, pm25_air, pm10_air, pmover10_air | Mass | kg | The size intervals are disjoint, and generic PM rows contain only remaining non-chlorate mass after validated chemical/size partition. Do not add species-specific NaClO3 dust a second time as PM; without a defensible partition choose one inventory representation and retain the other measurement as characterization evidence. |

The manufacturer assay in `nouryon-chlorate-manual` pp.16–18 concerns chlorate feed solution. The printed p.17 equation and the p.18 instrument expression differ in molar-ratio/dilution factors; resolve these against the stated reactions and an independently validated lab calculation before any quantitative application. It can inform analytical planning for a weighed/dissolved crystal sample only after lab validation of dissolution recovery, sample volume, temperature and interfering oxidants. Its printed numerical formula/performance is not transplanted as a universal crystal or brine default. `epa-anions-300-1` supplies anion identification/QA principles, with industrial high-salt applicability to be demonstrated; `epa-crvi-218-6` addresses dissolved Cr(VI), not total chromium or universal regulatory preservation periods.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered solid NaCl, actual supplied auxiliaries, treated industrial water and contracted utilities at the plant gate |
| starting_condition_role | Foreground input interface; no exemption for upstream production |
| product_classification_scope | Sodium-chlorate crystal electrolysis subset of CPC 34240; classification does not define feed recipe or technology |
| recursive_input_rule | Internal mother liquor/wash/condensate/heat recycle remains within the integrated unit. Purchased same-category crystal is separate upstream material and cannot be recounted as newly generated product. |
| upstream_dataset_requirement | Link each external input and transport/treatment service to a compatible verified supplier/background quantity, chemistry, source and boundary; unresolved identity or basis is disclosed and prevents complete dataset claims. |
| disclosure | Site/time/grade; incoming and outgoing phase/component ledgers; process stages; provider interfaces and losses; recovery, wastes and actual receiving media; missing measurements and allocation decision |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | chlorate_production | Include brine making/purification, rectification/electrolysis/reaction, crystallization/washing/drying, hydrogen scrubbing, solid handling, actual effluent/waste management and represented consumable replacement. Retain stage meters even when modelled as one foreground unit. | eu-lvics-2007, epa-chlorate-2022 |
| b_loops | chlorate_production | Keep a physical stage ledger for recycle links with equal quantities/composition at both ends; inventory changes, spills, recovered dust and actual purges are measured. Internal mother liquor, wet crystal and finished crystal transfers are not duplicate external product outputs. | eu-lvics-2007 |
| b_interfaces | all inventory rows | Preserve all upstream production and actual transport/treatment burdens through compatible provider links. Declare foreground/background interfaces; outsourced wastewater is a waste transfer and not a site freshwater pollutant discharge. Extend the actual recipient’s treatment inventory through its own measured releases without duplicating it. | eu-lvics-2007, eu-ef-multifunctionality-2021 |
| b_emissions | all elementary output rows | Include measured atmospheric and actual receiving-water releases after abatement, including start/stop events and leaks. Closed-loop or negligible historical emissions are not proof of zero; not-applicable/zero, missing measurement and nondetect remain distinct. Different receiving media require separately verified identities. | eu-lvics-2007 |
| b_capital | chlorate_production | Declare capital-equipment treatment under the study method; do not hide consumed electrode/filter replacements as capital. No default infrastructure, fuel boiler, packaging or refrigerated route is inserted. Any actual extension must have its own atomic rows, basis and applicable original evidence. | eu-lvics-2007, eu-ef-multifunctionality-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| chlorate_production | Integrated bulk crystal manufacture | required | Declared brine-electrolysis/dichromate/vacuum-crystallization route | foreground production | 1 kg accepted net dried crystal product |

The physically separate stages remain: salt dissolution → impurity precipitation/filtration → electrolyte/reaction tanks ↔ cells → vacuum crystallization → separation/washing → drying → bulk storage. Mother/wash liquor returns to the electrolyte loop; scrubber liquid/condensate recovery is measured. The gas branch goes from cells → alkaline scrubbing → accepted external hydrogen or measured vent. Keep stage mass, water, Na/Cl/Cr/inorganic-carbon and heat ledgers through `cp_internal`; stage aggregation is a modelling choice supported by the common reference and must not delete any actual outlet. A single finished reference-product output avoids counting the same salt at wet-cake, dryer and delivery interfaces. Sources: `eu-lvics-2007` Figure7.39 and §§7.13.2–7.13.4.

### Process: Integrated bulk crystal manufacture (`chlorate_production`)

#### Inputs

##### Product flows

###### Sodium chloride (`salt_feed`)

Solid sodium chloride enters brine preparation. This identity requires the recorded purity to meet the record’s ≥99.5% condition; retain the actual origin, assay, moisture, sulfate and insolubles. Weigh the supplied solid; neither pure NaCl stoichiometry nor the BREF historical salt consumption replaces receipts and inventory changes.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

###### Process Water (`process_water`)

Purchased treated industrial water enters dissolution, crystal washing, scrubber makeup and cooling makeup. Record each use separately before aggregation. Count fresh makeup once; recirculating cooling water, wash recycle and mother liquor are internal movements. Supplier abstraction/treatment remains upstream. Metered volume needs measured temperature-dependent density for this Mass identity.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `eu-lvics-2007`

###### Alternating current (`electricity`)

China-supply grid-average 1–35 kV AC electricity at the plant delivery meter supplies rectification, pumping, evaporation, drying and auxiliaries. Retain stage meters and AC/DC conversion losses without adding DC cell energy a second time. The exact property name is Net calorific value: preserve this database energy property and obtain provider confirmation that exchange MJ represents delivered electrical energy; it is not fuel consumption or an inferred calorific factor.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-lvics-2007`

###### Sodium hydroxide（30%） (`sodium_hydroxide`)

Use this row only for purchased 30% by-mass sodium hydroxide solution used in impurity precipitation, pH control or alkaline scrubbing. Record actual acceptance assay and total solution mass, with carrier water in the component ledger. A different concentration requires its own compatible identity and supply basis; 30% is an identity condition, never a default dosing recipe.

- Selected flow: Sodium hydroxide（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

###### Anhydrous sodium carbonate for brine purification (`sodium_carbonate`)

Include if sodium carbonate is actually used for calcium precipitation. Record the supplied anhydrous grade, assay, moisture and manufacturing source. The quantities are measured batch additions. The actual soda-ash supply route and grade require their own compatible physical identity and quantity basis; a recycling-route supply cannot be silently treated as another manufacturing source.

- Selected flow: Anhydrous sodium carbonate for brine purification
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

###### Calcium chloride, CaCl2 (`calcium_chloride`)

Conditional anhydrous solid calcium chloride from the declared China supply consumption mix for sulfate precipitation. Declare whether used and retain actual grade, purity and water content. A hydrated crystal or supplied solution cannot be treated as identical kilograms of anhydrous salt: preserve its full physical mass and separately reconcile bound or carrier water and the background basis.

- Selected flow: Calcium chloride, CaCl2 `cbe945c7-53a6-4c34-8002-795b73aabf48`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

###### Hydrochloric acid (30%) (`hydrochloric_acid`)

Purchased 30% by-mass hydrochloric acid solution for cell pH adjustment and acid washing. Record weighed solution, verified concentration and the destination stage; account for carrier water and any washing emissions. Other supplied grades require compatible separate identity; no historical acid-use default is adopted.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

###### Sodium dichromate (`sodium_dichromate`)

For the declared dichromate-assisted route, this row identifies anhydrous Na2Cr2O7 from the record’s chromium-ore roasting/dissolving route. Require supplier confirmation of that route, CAS/grade and delivered hydration state. Track fresh additions, opening/closing electrolyte stocks, Cr(VI), Cr(III), product carryover and waste. Dihydrate or supplied solution needs a separate compatible flow basis; do not apply anhydrous kilograms to its gross mass.

- Selected flow: Sodium dichromate `5e170be8-9cff-4002-baaa-01cbe42053f5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

###### Hydrogen peroxide (30%) (`peroxide`)

Include purchased 30% by-mass hydrogen peroxide solution only when it is the actual hypochlorite-reduction reagent before crystallization. Keep supplied solution mass, assay and carrier water, treatment batch and residual oxidants. No BREF example dose or alternate reagent is silently assigned.

- Selected flow: Hydrogen peroxide (30%) `b21960ac-f3c4-4f00-ba92-527ca1dd5d12`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

###### Nitrogen gas (`nitrogen_product`)

Conditional purchased gaseous nitrogen for purging. The selected product identity describes N2 inerting gas at plant; its bottling-use description does not establish a manufacturing route restriction or this installation’s quantity/vent fraction. Obtain actual source, gas purity, pressure, temperature, wet/dry state, standard-volume convention and supplier basis. Determine gas mass using calibrated weighing or validated volume/composition/condition conversion. Native Mass reference must represent measured kg consistently; neither a database meanValue nor an unexplained primary-property coefficient is a measured density or permission to rescale the exchange.

- Selected flow: Nitrogen gas `92233c86-8e75-441c-94de-03cc91bc7c10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

###### Imported process heat carried by steam (`steam_heat`)

Include only net delivered steam heat used for evaporation/vacuum operation or drying. Measure incoming steam and returned condensate mass, pressure, temperature and steam quality; reconcile enthalpy at the contractual interface. Steam physical identity must match the actual pressure and quality; an MJ property alone does not prove the provider’s net-heat basis. Preserve physical water transfers as well as energy without counting steam generation twice.

- Selected flow: Imported process heat carried by steam
- Flow property / unit: Energy / MJ
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam`
- Sources: `eu-lvics-2007`

###### Titanium Ruthenium Electrode (`anode`)

Conditional replacement of a titanium Ru/Ir mixed-metal-oxide-coated anode compatible with the selected physical identity. Record actual substrate, coating composition, supplier, installed net mass, coating/recoating service and campaign life. Include consumed replacements over the represented production; do not infer catalyst loading or life from the broad electrode description.

- Selected flow: Titanium Ruthenium Electrode `d76b86d3-e656-49f5-940d-933b1ab65a8f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `eu-lvics-2007`

###### Steel cathode for sodium-chlorate electrolysis (`cathode`)

Conditional installed steel cathode replacement; record alloy, configuration, contamination, net mass and campaign production. The actual steel-cathode component and supplier mass reference must be established before linking its background supply.

- Selected flow: Steel cathode for sodium-chlorate electrolysis
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `eu-lvics-2007`

###### Brine-compatible replacement filter cartridge (`filter_cartridge`)

Replacement of one assembled brine-compatible cartridge is one component flow, not a collection of filtration materials. Retain actual medium/housing, grade, mass, service life and brine/chromium compatibility. A coolant/mist cartridge is a different service; toxicity units do not measure consumed cartridge mass.

- Selected flow: Brine-compatible replacement filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables`
- Sources: `eu-lvics-2007`

###### Paper Bag (`incoming_bag`)

Include only the actual paper bag arriving with sodium dichromate. Measure the empty bag mass separately from chemical net contents; reconcile opening/closing packaging stock, reuse/return and the paper fraction of empty_bag. Retained reagent belongs to the chemical component ledger once. Verify the actual assembled paper bag, lining and supplier basis; any separate liner or other container has its own actual atomic exchange. No assumed packaging weight or disposal rate.

- Selected flow: Paper Bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `eu-lvics-2007`

#### Outputs

##### Product flows

###### Sodium chlorate (`chlorate_product`)

Accepted dried sodium-chlorate crystals leave the integrated unit in bulk. The reference is the whole accepted crystalline-powder net contents P, including retained free water and actual impurities, excluding bulk-container tare, not dry active NaClO3 equivalent. Match that supplied powder to the native crystalline sodium-chlorate product and its Mass/kg reference; an active-salt-only provider amount requires a separately justified component conversion, never redefinition of P. Record batch assay, residual free moisture, chloride, chromium and other identified co-salts. Wet cakes, mother liquor and dissolving into a delivery solution are not this reference output.

- Selected flow: Sodium chlorate `763dbb4e-a338-4348-b2a8-bf07b6bf7b47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product`
- Sources: `eu-lvics-2007`, `epa-chlorate-2022`, `nouryon-chlorate-manual`

###### Purified hydrogen co-product from sodium-chlorate electrolysis (`hydrogen_product`)

Include only accepted hydrogen exported to an identified user. Measure total gas and hydrogen purity, residual chlorine/oxygen, pressure, temperature and destination; report hydrogen species mass separately from the gas-mixture physical ledger. Retain actual purification burden. Electrolysis-generated hydrogen requires a compatible source-route identity and cannot inherit an unrelated coal/methanol/ethylene background route. Exported, vented, stored and internally transferred gas must close without theoretical-yield substitution.

- Selected flow: Purified hydrogen co-product from sodium-chlorate electrolysis
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct`
- Sources: `eu-lvics-2007`

###### Exported recovered electrolyte heat (`heat_export`)

Conditional useful recovered heat delivered to a named external user. Record supply/return conditions and measured net enthalpy transfer; internal reuse in brine heating or crystallization is not a co-product sale. Natural-gas combustion heat is not interchangeable with recovered electrolytic heat.

- Selected flow: Exported recovered electrolyte heat
- Flow property / unit: Energy / MJ
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct`
- Sources: `eu-lvics-2007`

##### Waste flows

###### Chromium-free brine-purification filter cake (`brine_cake`)

Before mixing with dichromate recycle, weigh precipitated Ca/Mg/sulfate/insoluble cake and retained brine. Record solids, water, sodium, chloride, carbonate carbon, sulfate and receiver acceptance; absence of chromium requires analytical evidence.

Use this broad identity only when the actual outlet is wet semi-solid sludge from industrial aqueous treatment; verify each row’s actual salinity, chromium-bearing/free state, moisture and receiving treatment. Dry solids or incompatible recipient bases need another identity. No municipal origin is presumed for the declared industrial outlet.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvics-2007`

###### Chromium-bearing electrolyte filtration sludge (`chromium_sludge`)

Keep this later chromium-bearing cake separate from primary brine cake. Weigh wet mass, determine solids and retained liquor, total chromium and valence fractions; disclose salt carryover, hazard status, destination and treatment. Do not use municipal or paper sludge identity.

Use this broad identity only when the actual outlet is wet semi-solid sludge from industrial aqueous treatment; verify each row’s actual salinity, chromium-bearing/free state, moisture and receiving treatment. Dry solids or incompatible recipient bases need another identity. No municipal origin is presumed for the declared industrial outlet.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvics-2007`

###### Chromium-contaminated spent brine filter cartridge (`spent_filter`)

Weigh the discarded cartridge with retained liquor and solids; characterize substrate, Cr(VI)/Cr(III), chlorate and leachability for its actual recipient. A single discarded composite cartridge remains one flow.

- Selected flow: Chromium-contaminated spent brine filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvics-2007`

###### Spent coated titanium electrolysis anode (`spent_anode`)

Conditional removed anode goes to an identified metal recovery/recoating recipient. Weigh substrate/coating and retained contamination; distinguish returned substrate from purchased new electrode and separately record any actual recoating service.

- Selected flow: Spent coated titanium electrolysis anode
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvics-2007`

###### Spent steel electrolysis cathode (`spent_cathode`)

Conditional removed steel cathode is weighed and characterized for salt/chromium contamination and actual recycling/treatment acceptance. Generic metallic waste does not establish recipient compatibility.

- Selected flow: Spent steel electrolysis cathode
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvics-2007`

###### Dichromate-contaminated discarded paper bag (`empty_bag`)

Include only if this actual incoming reagent package is discarded. Weigh paper and residues together; retain wet/dry condition and chromium/chlorate contamination and disposal acceptance. Other package components need separate rows; bulk chlorate delivery adds no assumed product bag.

- Selected flow: Dichromate-contaminated discarded paper bag
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvics-2007`

###### Chloride-chlorate-chromium aqueous purge to external treatment (`wastewater`)

This is one actual segregated liquid outlet, not a collection of wastes. Measure solution mass/volume, density, dissolved and suspended solids, sodium, chloride, chlorate, chromium valences and receiver acceptance. Record purge, cleaning liquor and condensate by actual outlet before aggregation; segregated compositions/destinations require separate flows. It is not a direct environmental discharge at this transfer.

- Selected flow: Chloride-chlorate-chromium aqueous purge to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-lvics-2007`

##### Elementary flows

###### Sodium chlorate (`chlorate_dust`)

Sodium chlorate particle mass actually released beyond abatement to outdoor air, unspecified subcompartment. Determine exhaust, fugitives, chemical composition and recovered dust separately; recovered material returned to the loop is not an emission. This species mass must not also be entered as generic particulate mass.

- Selected flow: Sodium chlorate `00a1aa9f-2693-4272-bf30-8f34704fcdb7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### hydrogen (`hydrogen_air`)

Hydrogen species in measured vented gas after scrubbing, including start/stop events. Split species using contemporaneous composition and actual gas conditions. Sold hydrogen is excluded from this vent quantity; no assumed utilization percentage.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### chlorine (`chlorine_air`)

Measured molecular Cl2 surviving alkaline scrubbing in offgas and vents. Chlorine dioxide, chloride aerosol and hydrogen chloride are different species and cannot be reported as this flow; retain monitoring species and concentration basis.

- Selected flow: chlorine `4d9a8790-3ddd-11dd-9b45-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### hydrogen chloride (`hcl_air`)

Conditional measured hydrogen chloride escaping acid-tank ventilation or acid washing after abatement. Use HCl species mass, not Cl2-equivalent or total chloride; do not assume a positive emission.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### oxygen (`oxygen_air`)

Reaction-generated oxygen in separated gas actually vented to outdoor air. Distinguish it from ambient carrier-air oxygen; do not infer a side-reaction yield from the ideal chlorate equation.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### dinitrogen (`nitrogen_air`)

Purchased purge dinitrogen actually discharged, conditional on its use. Exclude entrained ambient-air nitrogen from the process-added species ledger; retain any exported-gas carryover and measured stock change.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### water vapour (`water_air`)

Net process-derived water vapour to outdoor air from drying and cooling. Separate incoming ambient humidity, condensate recovery, steam returns and actual net chemical formation/consumption of H2O; derive from measured moisture/gas or a reaction-aware reconciled water balance with uncertainty, not assumed evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `eu-lvics-2007`

###### Water (`water_discharge`)

Conditional water component of an actual site-authorized discharge to fresh water after any on-site treatment. Record the actual gross effluent volume/mass/density, temperature and dissolved/suspended components separately. The Water exchange is the H2O component quantity, using effluent_water_component and an explicitly compatible provider volume convention, rather than silently treating all saline solution as pure water and adding the solutes again. Not a resource withdrawal, sewer transfer or water-vapour flow.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-lvics-2007`

###### chloride (`chloride_water`)

Chloride ion mass in the same final freshwater discharge. Retain laboratory reporting as Cl− and dilution/recovery evidence; NaCl-equivalent reporting must be converted on the documented chemical basis before entry, without double-counting dissolved salt.

- Selected flow: chloride `08a91e70-3ddc-11dd-9508-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-lvics-2007`, `epa-anions-300-1`

###### Sodium, ion (`sodium_water`)

Sodium ion mass in final freshwater discharge, measured or derived from a validated same-outlet analysis. It is not metallic sodium. Sodium in product, sludge, recycling and externally transferred effluent remains separately in the physical sodium ledger.

- Selected flow: Sodium, ion `6a3f413e-8aab-4c58-93b0-1f51c9714adb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-lvics-2007`

###### chlorate (`chlorate_water`)

Chlorate ion (ClO3−) mass in the final freshwater discharge. Sodium chlorate reporting is a different mass basis; reconcile the laboratory species and documented molar-mass conversion and the separate sodium ion, never enter both salt and ion as duplicate solute mass.

- Selected flow: chlorate `4d9a8790-3ddd-11dd-9b3f-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-lvics-2007`, `epa-anions-300-1`

###### chromium (vi) (`chromium_vi_water`)

Dissolved hexavalent chromium mass reported as Cr in final freshwater effluent. Preserve sampling filtration, valence stability, chloride/sulfate matrix interference tests and lab basis. Sodium dichromate mass or total Cr is not identical to this quantity.

- Selected flow: chromium (vi) `4d9a8790-3ddd-11dd-8fd7-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-lvics-2007`, `epa-crvi-218-6`

###### chromium (iii) (`chromium_iii_water`)

Dissolved trivalent chromium mass reported as Cr in the same freshwater discharge. Require validated speciation or a validated difference between same-sample dissolved total Cr and dissolved Cr(VI); unfiltered total chromium and particulate chromium cannot silently become Cr(III). A difference requires matched analytical fractions, recovery, preservation and uncertainty demonstrating that the residual represents Cr(III); a negative or indeterminate residual remains unresolved, never zero-filled.

- Selected flow: chromium (iii) `4d9a8790-3ddd-11dd-8fd0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-lvics-2007`, `epa-crvi-218-6`

###### particles (PM2.5) (`pm25_air`)

Conditional remaining non-chlorate particle mass in the PM2.5 size fraction discharged to outdoor air. Chemical and size-resolved monitoring must first subtract the sodium-chlorate species mass already in chlorate_dust for this fraction; otherwise choose one representation and retain the other as characterization evidence. No default emission factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### particles (PM2.5 - PM10) (`pm10_air`)

Conditional remaining non-chlorate particles in the disjoint PM2.5–PM10 interval, with the same speciation partition as pm25_air. It is not inclusive PM10; subtract nested PM2.5 only when sampling conditions and quantitative definitions are compatible, and never add inclusive and interval totals together.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### particles (> PM10) (`pmover10_air`)

Conditional remaining non-chlorate particles >PM10, physically disjoint from the two smaller fractions and chlorate_dust. Collected filter dust, indoor exposure and recycled material are not this outdoor release; unknown size/speciation stays pending.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

###### Mineral-carbon carbon dioxide from acid washing (`carbonate_co2_air`)

Conditional measured CO2 from actual acid contact with carbonate-bearing deposits. Establish source carbon origin and speciation and reconcile the inorganic-carbon ledger; this is not a boiler emission factor. The actual mineral-carbon origin and provider/characterization quantity convention must be established before linking this exchange; a fossil-carbon label alone is insufficient. No biogenic carbon is erased if actually present: add its separately verified atomic exchange with origin evidence.

- Selected flow: Mineral-carbon carbon dioxide from acid washing
- Flow property / unit: Mass / kg
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized from the same-period physical total as defined in section 8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `eu-lvics-2007`

## 7. Allocation and Co-product Handling

The unallocated physical ledger contains the full measured chlorate crystal, useful hydrogen, recovered external heat, actual wastes and releases. Allocation operates on attributable environmental burdens; it never multiplies a co-product’s physical mass/heat by its own allocation share. This separation is essential to preserve material/element and energy closure. The generic hierarchy in `eu-ef-multifunctionality-2021` Annex I §4.5 informs this PCR; no claim of a complete PEF study or sector-specific approval follows.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_physical | chlorate_production | Preserve measured physical quantities for all outputs, internal reuse, stocks, wastes and releases before allocating. Sold hydrogen, vented H2 and internal gas movements are distinct; recovered internal heat is not an exported co-product. | eu-lvics-2007, eu-ef-multifunctionality-2021 |
| a_hierarchy | shared burdens | Investigate subdivision/system expansion first, then a relevant demonstrated physical relationship. Assign separable crystal-drying or hydrogen-conditioning activities to their actual outputs; do not infer a causal allocation from theoretical mass ratio or generic heating values. Record the rejected choices and justification. | eu-ef-multifunctionality-2021 |
| a_economic | non-separable joint burdens | If the earlier hierarchy cannot supply a defensible method, use actual period-matched accepted output gate values: crystal value, useful exported hydrogen value and useful exported recovered-heat value. Apply economic_share only to the remaining joint environmental burdens, retain sensitivity and actual prices, and leave unknown value/share unresolved. | eu-ef-multifunctionality-2021 |
| a_wastes | all waste output rows | Establish product versus waste from actual acceptance/use and the study’s applicable methodology, not merely a flow name or positive mass. Retain measured waste transport/treatment responsibilities. No routine sale, avoided burden or recycling credit is presumed. | eu-lvics-2007, eu-ef-multifunctionality-2021 |
| a_substitution | hydrogen_product, heat_export | Any separate system-expansion/substitution scenario needs an empirically established user, displaced product/service, compatible technology and quantity basis. Do not combine a substitution credit and allocation benefit for the same outlet. Report the expanded system and uncertainty explicitly. | eu-ef-multifunctionality-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All collection covers one declared site, compatible product grade/route and matched batch/campaign/period, including normal operation and attributed start/stop/idle/upset activity. No actual site quantity is supplied by this PCR. Record total physical quantities X_i first; for every inventory row use the same accepted crystal-product denominator P and report per 1 kg reference flow. Keep raw measurements, component/element balances and separately allocated environmental burdens independently reviewable.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | chlorate_production | chlorate_product | acceptance_and_stock_records | batch; SKU; calibrated net accepted mass P; free moisture; NaClO3 assay and wet/dry basis; chloride/co-salts; total/valence-specific Cr; rejected/reworked mass; opening/closing stock | Weigh accepted bulk dry crystal, excluding container tare; sample representative lots for actual moisture/assay and impurities using a validated matrix-specific lab method. Reconcile production, dispatch and stock without recounting rework. Manufacturer solution titration is planning evidence, not a validated crystal default. | kg; assay mass fraction | each batch; stock at period bounds | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | calibration; acceptance; assay basis and matrix recovery; moisture method |
| cp_inputs | chlorate_production | chemical inputs, nitrogen and incoming_bag | receipts_dosing_and_stock | row_id; supplier/SKU/CAS; delivery grade/state/route; solution/hydrate formula; assay; free/bound/carrier water; weigh/dose records; opening/closing stock; return; actual incoming bag tare/liner and package stock; gas T/P/composition/Z | Reconcile delivered and consumed material per row using calibrated weighing/dosing and inventory changes. Keep each supplier solution/hydrate gross mass and components. Record incoming_bag empty mass separately from chemical net contents and bind actual package stocks/returns to the outgoing paper and retained-reagent ledgers. Gas volume needs the actual reference-condition conversion; assay/source differences require separate grade records. | kg; gas conditions; mass fraction | each receipt and dose; inventory at bounds | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | supplier original; certificates; scale/doser calibration; physical/source compatibility |
| cp_water | chlorate_production | process_water, water_air | water_meter_and_phase_balance | inlet meters by use; makeup; recycle-link ends; actual density/T; solution carrier water; hydrate bound water; steam/condensate physical water; product moisture; wet wastes; discharge; humidity; stock | Measure fresh supplied water by use and convert the Mass row with actual density. Reconcile water in purchased solutions, internal loops, steam/return, accepted product, wet wastes, final discharge and net vapour. Subtract inlet ambient humidity and do not count recycle throughput as withdrawal. | kg; m3; temperature; humidity | continuous meters; matched samples; events | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | meter calibration; density/sample conditions; phase closure and uncertainty |
| cp_energy | chlorate_production | electricity | energy_meter_records | AC inlet kWh; voltage/grid/provider; stage meters; rectifier losses; DC cell measurement; meter boundary; idle/start-stop; shared auxiliaries | Read plant AC and stage meters, reconcile losses and shared loads; retain actual provider loss boundary. Convert kWh to MJ using 3.6 exactly; no source energy-use range substitutes for measured values. | kWh; MJ; voltage | continuous; aggregate matched period | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | meter calibration; provider reference-energy confirmation; AC/DC balance |
| cp_steam | chlorate_production | steam_heat | steam_heat_interface_measurement | steam mass flow; absolute/gauge pressure definition; temperature; quality; provider inlet enthalpy; returned condensate mass/T/enthalpy; water losses; heat meter; vacuum/dryer stages | Measure the contractual steam/condensate interface and validate its enthalpy method with actual supplier conditions. Keep net delivered MJ and all physical water transfers. Unknown pressure or provider heat basis remains unresolved rather than being represented by a convenient steam UUID. | kg; pressure; temperature; kJ/kg; MJ | continuous flow/heat; matched condition samples | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | flowmeter/heatmeter calibration; supplier net-heat definition; enthalpy method and uncertainty |
| cp_consumables | chlorate_production | anode, cathode, filter_cartridge | replacement_campaign_records | row_id; installed component SKU/material/coating; actual net mass; removal date; reuse/recoating; service life; represented campaign output; contamination; receiver | Weigh and record each actual replacement/component or verified recoating service. Attribute the consumed portion to the represented campaign using documented life/output, keeping return and new supply separate; no generic lifetime or assumed throughput default. | kg; campaign output kg | each replacement; campaign reconciliation | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | component/supplier specification; weigh tickets; traceable campaign attribution |
| cp_coproduct | chlorate_production | hydrogen_product, heat_export | export_delivery_records | hydrogen total gas; species fraction; residual Cl2/O2; T/P/Z/wet-dry; accepted/exported/vented/storage quantities; gas recipient; heat supply/return conditions and net delivered enthalpy; internal heat reuse | Measure actual useful external gas/heat acceptance and its purification/conditioning. Reconcile generated species against vent/export/storage using compatible gas bases. Track internal heat separately; do not assume theoretical hydrogen ratio or substitution benefit. | kg hydrogen; gas conditions; MJ | continuous; each delivery; period bounds | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | recipient acceptance; gas analyzer; meter calibration; heat interface basis |
| cp_waste | chlorate_production | all waste output rows | segregated_transfer_records | row_id/outlet; wet mass; volume/density; dry solids; retained water; Na/Cl/ClO3/Ca/Mg/sulfate/Cr/total inorganic C; Cr valences and leachability; contaminated substrate; source stage; receiver/treatment | Weigh each separated outlet before aggregation, sample actual composition/hazard state and bind its accepting treatment. Keep primary brine cake, chromium cake, cartridges, electrodes, paper bags and liquid purge physically separate. Distinct outlet compositions or recipients cannot be collapsed into one selector row. | kg wet; kg dry; m3; concentrations | each shipment/outlet; representative matched samples | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | weigh tickets; analysis; receiver acceptance; waste-water component reconciliation |
| cp_air | chlorate_production | all atmospheric elementary output rows | abatement_outlet_and_fugitive_measurement | outlet/location; duration; wet/dry gas volume/T/P; background carrier air; H2/Cl2/HCl/O2/N2/water; CO2 carbon origin; NaClO3 dust species/size; residual PM bins; captured/recycled dust; events; detection limits | Measure after actual abatement and document fugitive estimates with actual sampling basis and uncertainty. Gas concentrations and volume must share conditions; subtract ambient carrier gas/humidity when reporting process-generated oxygen/nitrogen/water. Reconcile actual H2 and captured/recycled dust. Resolve non-overlapping species/size representation; nondetect is not zero and unmeasured is not not-applicable. | kg species; gas volume; conditions; duration | representative operation and each start/stop/upset | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | sampling method/matrix validation; blanks/recoveries; size/species partition; uncertainty |
| cp_effluent | chlorate_production | all freshwater elementary output rows | final_outlet_monitoring | receiver/outlet; matched discharge volume/time; density/T; filtered and unfiltered analysis; Cl−/Na+/ClO3−/sulfate/Ca/Mg; dissolved Cr(VI)/Cr(III), unfiltered total Cr; particulate Cr(VI)/Cr(III) and total particulate Cr; suspended-solid composition; species/salt units; dilution/recovery; preservation; non-detect | Monitor the actual final site freshwater outlet only. Sum time-matched concentration-times-volume with stated unit conversions and lab species basis. Validate high-chloride/sulfate matrix and valence stability; Method218.6 filtration is analytical selection, not removal of particulate chromium from the actual discharge. Establish dissolved and particulate Cr(VI)/Cr(III) by actual matrix-validated laboratory speciation, with total-Cr recovery and separate analytical fractions; no dissolved method establishes particulate valence. Other ions or suspended species observed at the outlet need their own verified atomic exchanges before completeness can be claimed. | m3 water; kg species; concentration units | matched flow-weighted samples; events | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | lab species definition; matrix spike/dilution; filtered/unfiltered reconciliation; receiving-medium verification |
| cp_internal | chlorate_production | physical stage links | stage_mass_component_energy_balance | stage/link id; two-end time-matched mass/composition; recycle/stock; actual species formation/consumption and reaction extent; wet crystal/accepted product/reject; Na/Cl/Ca/Mg/S/Cr/inorganic C/H/O/N; water/free/bound/carrier fractions; gas species; heat; measurement uncertainty | Keep a complete unallocated physical register and balances at each stage and the integrated boundary, matching both ends of internal liquor/water/solid/gas/heat links. Retain whole mother-liquor, liquid/solid stocks, accepted and rejected product, full generated/exported/vented/stored hydrogen, steam/condensate transfers, incoming/returned/discarded containers and maintenance materials. Container tare excluded from P still belongs in this physical register; add each actual external packaging, return or maintenance exchange atomically and reconcile residues without counting their chemical mass twice. Account for actual net chemical water formation/consumption and its conversion into hydrogen/oxygen-bearing compounds through the actual species/element ledger. Quantify moisture, co-salts, losses, purge and inventory changes; investigate residuals against declared measurement uncertainty rather than filling an invented balancing flow. | kg; component fractions; m3; MJ | matched batch/campaign and period bounds | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | calibrated measurements; link agreement; component closure and residual investigation |
| cp_allocation | chlorate_production | shared environmental burdens | multifunctionality_decision_and_market_records | decision hierarchy; directly attributable activity; shared burden; actual accepted output quantities; product-specific gate prices/currency/time; value of hydrogen/heat; system-expansion/substitution evidence; selected shares/sensitivity | Document why subdivision/system expansion can or cannot be used, then examine a relevant causal physical relationship. Use period-matched actual gate economic values only if earlier choices are inapplicable and justified. Retain allocation-free physical outputs and a separate attributed burden account; an unvalued outlet is not proof of zero value. | row unit; kg; MJ; currency | each study period; contracts/price updates | matched represented period/batch/campaign | declared site and compatible grade/route | per 1 kg reference flow | decision evidence; invoices/contracts; actual useful output; value sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | I_i = X_i / P; X_i is the actual row quantity over the matched represented period after any stated unit conversion; P is accepted net supplied crystal-product mass in kg. The reference row is 1 kg, all co-product physical outputs remain their full actual X_i/P. Allocation is a separate burden calculation. | X_i; P; cp_product; row collection protocol | row unit per 1 kg reference flow | eu-lvics-2007 |
| supplied_components | solution and hydrate input rows, wet wastes, chlorate_product | For a measured mass fraction w_j on the as-supplied basis, component mass C_j = supplied gross mass × w_j. Convert dry-basis assay only using the same sample’s measured moisture and declared basis. Reconcile component sum with gross physical mass; do not add its carrier/bound water again as a second external flow. | gross mass; actual assay/moisture; hydration formula; cp_inputs; cp_product; cp_waste | kg each component; gross-mass closure | eu-lvics-2007, nouryon-chlorate-manual |
| measured_species_discharge | all air and freshwater species rows | Species mass = sum of time-matched flow volume × species concentration × documented unit conversion, with validated density/gas conditions/dilution if required. Subtract background carrier gas where the row represents net process-derived species. Use actual ionic/elemental reporting basis and investigate detection/uncertainty; no default factor. | actual outlet flow/time; actual species analyses; reporting basis; cp_air; cp_effluent | kg each emitted species | eu-lvics-2007, epa-crvi-218-6, epa-anions-300-1 |
| effluent_water_component | water_discharge | Determine gross discharged liquid mass G by calibrated weighing or actual gross volume and solution density. Determine water mass W = G − measured non-water component mass, using a complete non-overlapping composition ledger. Water-component equivalent volume = W / measured water density at the declared reference condition only if that convention matches the provider/characterization definition; preserve gross effluent volume independently. Unknown composition or volume convention remains pending, never approximated by pure-water gross mass plus duplicate solutes. | actual gross effluent mass/volume/density; complete composition; water density/convention; cp_effluent; cp_water | m3 H2O component on verified convention | eu-lvics-2007, epa-anions-300-1 |
| steam_enthalpy | steam_heat, heat_export | Net useful heat = sum of measured inlet mass × inlet specific enthalpy minus sum of contractual return mass × return specific enthalpy, converted to MJ on a consistent datum. Retain separate losses and water stocks/returns; supplier agreement and calibrated enthalpy method are prerequisites. | actual mass/T/pressure/quality; provider interface; cp_steam; cp_coproduct | MJ net delivered or exported heat | eu-lvics-2007 |
| physical_closure | all stage links and external material outputs | For whole physical mass and each conserved element, actual external input minus actual external output equals closing minus opening stock within stated measurement uncertainty. Molecular-species balances instead include actual formation and consumption: input + formation − output − consumption = stock change. Water, NaCl, NaClO3 and chromium valences are not individually conserved through reaction. Internal link quantities/composition agree at both ends and cancel at the integrated boundary. Preserve transformation of water into H2 and oxygen-bearing compounds; the reaction NaCl + 3 H2O → NaClO3 + 3 H2 constrains chemistry, never a plant yield or emissions amount. No invented balancing exchange. | measured links/inputs/outputs/stocks; composition; cp_internal | component/element residual and uncertainty | eu-lvics-2007, epa-chlorate-2022 |
| economic_share | non-separable joint environmental burdens | If justified by a_hierarchy, s_c = V_c / (V_c + V_h + V_e), where each V is the same-period actual accepted output gate value for crystal, useful exported H2 or useful exported recovered heat. Attributed crystal burden = directly assigned crystal burden + s_c × remaining joint burden. Use actual prices/quantities; no unknown-value-to-zero conversion; do not scale physical co-product outputs. | actual gate values; separable/joint burdens; cp_allocation | crystal environmental-burden share and sensitivity | eu-ef-multifunctionality-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Actual SKU/state/source/route and background reference quantity must match each conditional identity; a UUID is not a completed process dataset. Missing or contradictory fields remain pending. | Supplier originals, direct identity and reference property/unit verification, actual provider basis |
| dq_product_basis | chlorate_product | One accepted net supplied crystal basis, with same sample wet/dry assay, free moisture, co-salts and chromium. No mother-liquor/wet-cake/solution substitution and no packaging tare. | cp_product; nouryon-chlorate-manual; epa-chlorate-2022 |
| dq_closed_ledger | all stages and outputs | Whole physical mass, phase water, Na/Cl/Ca/Mg/S/Cr/inorganic-carbon and gas/heat ledgers include all actual stocks, residues, purge, co-salts, carryover, emissions and recovery. Investigate uncertainty-resolved imbalance; no allocation of physical outputs to make it close. | cp_internal; cp_inputs; cp_water; cp_waste; cp_coproduct; eu-lvics-2007 |
| dq_water_speciation | all freshwater outputs | Laboratory filtration selects the dissolved analytical fraction only. Reconcile unfiltered total and dissolved/particulate species; unlisted sulfate/Ca/Mg/other ions or particulate chromium are additional atomic requirements when present, not losses erased by analytical filtration. Demonstrate industrial matrix applicability of the selected method. | cp_effluent; epa-crvi-218-6; epa-anions-300-1 |
| dq_air_partition | all atmospheric outputs | Cl2, HCl, H2, O2, N2, water and dust retain distinct species quantities. PM bins and NaClO3 dust do not overlap; preserve measured carbon origin if CO2 occurs. No biological CO2 omission by reporting convention. | cp_air; eu-lvics-2007 |
| dq_temporal | all inventory rows | Align period/site/route/grade and quantities including idle and start/stop events. Source historical European values or one producer’s observed supply data are not universal recipes, ranges or yields. | Actual synchronized records; eu-lvics-2007 scope limitations |
| dq_gaps | all inventory rows | Distinguish unavailable UUID, unresolved provider basis, measurement gap, nondetect, zero and non-applicability. Keep uncertainty and residuals explicit; a range-free row requires actual collection, not an invented prior. | Declared gap register; measurement uncertainty; cp protocols |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | chlorate_product | Require one final reference row with exactly 1 kg accepted net supplied dried crystal; verify chemical/route/state and all qualifiers. Same-salt internal links are not extra reference outputs. | eu-lvics-2007, epa-chlorate-2022, nouryon-chlorate-manual |
| v_denominator | all inventory rows | Inventory basis, collection aggregation and normalization use the same P and per 1 kg reference flow. No active-mass, wet-cake, solution, hydrogen or packaging denominator substitution; both languages keep the same rule/row ids and formulas. | eu-lvics-2007 |
| v_identity | all inventory rows | Verify actual source, species/CAS, route, grade, media, reference property/unit and provider background amount compatibility. Unresolved identities stay blank and block complete linked-dataset claims, not silently replaced by other products/elementary compartments. | eu-lvics-2007 |
| v_phase_balance | all physical links and outputs | Reconcile physical mass, water and component/element stocks across all actual outlets. Confirm paired internal links, full co-product physical output, mother liquor, retained water, crystalline/free water, co-salts, filtrate, sludge and gases without double counting. Unsupported relationships and unexplained residuals require review. | eu-lvics-2007, epa-chlorate-2022 |
| v_release | all elementary output rows | Require actual release outlet/receiver and valid species/unit/sampling basis after abatement. External waste transfer is not an environmental release; dissolved-only analytical filtration does not justify dropping particulate matter or other measured ions. Separate Cl2/HCl and non-overlapping dust/PM bins. | eu-lvics-2007, epa-crvi-218-6, epa-anions-300-1 |
| v_utilities | electricity, steam_heat, heat_export | Verify AC voltage/grid/loss interface and exact reference energy property; retain AC/DC meter reconciliation. Verify steam pressure/quality and contractual net heat/enthalpy/water interface before provider linkage; MJ alone is insufficient. | eu-lvics-2007 |
| v_allocation | shared environmental burdens | Validate the selected hierarchy, actual useful outputs and gate values, directly assigned versus joint burdens and sensitivity; never mechanically scale physical co-product output. Avoid simultaneous allocation and substitution benefits for the same output. | eu-ef-multifunctionality-2021 |
| v_completeness | all inventory rows | No completed dataset claim with missing actual quantities, provider bases, UUIDs required for linkage, unresolved measured species or incompatible evidence. Add actual grade/route/compound/service extensions as individual atomic exchanges with their own source and identity checks. Do not declare review/publication from mechanical checks. | eu-lvics-2007, eu-ef-multifunctionality-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset only after actual data collection, provider linkage and separate review |
| downstream_use | Supply of the declared dried bulk sodium-chlorate crystal at its stated gate |
| allowed_use | Declared route/state/grade and measured supplied-product mass; explicit conditional guidance until unresolved evidence is completed |
| excluded_use | Other salts/oxidation states; solution or wet-cake/hydrate basis; packaged delivery or different process variants without actual extensions; unproved substitution credits; claims of scientific approval |
| required_metadata | Reference qualifiers; site/period/route/grade; actual source and supplier bases; upstream/foreground interfaces; physical/component water and stock ledgers; gas/heat destinations; emission media; waste treatment; allocation choices; uncertainty and remaining gaps |
| required_quality_disclosure | Actual coverage of collection/checks, measurement limitations, unknown UUID/provider links, source metadata classification debt, nondetect handling, uncertainty and independent scientific/translation review state |
| update_trigger | Changed route/additive/grade/hydration/delivery form; different source or utility conditions; new measured species/outlet; changed treatment or hydrogen/heat use; updated representative field evidence or source clarification |

## 11. Data Sources

These originals constrain only the stated method/scope. No historical consumption, production ratio, recipe, purity, emission factor, market price or single-plant observation is adopted as a quantity default. The database identities are represented by UUIDs in the flow cards and are not literature sources.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| eu-lvics-2007 | official_guidance | European Commission, Reference Document on Best Available Techniques for the Manufacture of Large Volume Inorganic Chemicals – Solids and Others Industry, August2007; §7.13, printed pp.513–527 / PDF pp.558–572; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic-s_bref_0907.pdf | Route, Figure7.39 stage interfaces, brine impurities/auxiliaries, mother-liquor and water recovery, hydrogen/heat branches, species releases and segregated waste. 2007 European descriptive/BAT evidence only; no current permit, universal recipe or amount range. |
| epa-chlorate-2022 | official_guidance | US EPA, Sodium Chlorate Supply Chain – Full Profile, EPA817-F-22-043, December2022, manufacturing section printed p.1 / PDF p.2; https://www.epa.gov/system/files/documents/2023-03/Sodium%20Chlorate%20Supply%20Chain%20Profile.pdf | NaCl-brine electrolysis identity and balanced reaction; crystallization, washing/drying and hydrogen branch. Supply-chain context is not a yield, shelf-life or inventory default. |
| nouryon-chlorate-manual | handbook | Nouryon, Sodium chlorate Product information manual, undated producer manual as acquired 2026-10-13; physical form pp.5–6, analytical scope pp.16–18; https://www.nouryon.com/globalassets/inriver/resources/brochure-nouryon-sodiumchlorate-product-information-manual.pdf | Crystal versus solution identity and solution assay planning. Formula, typical density, performance and solution-method concentration intervals are not adopted as general crystal or high-salt-matrix defaults; current SKU assay needs actual validated collection. |
| epa-crvi-218-6 | official_guidance | US EPA, Method218.6, Revision3.3, May1994, §§1–2, PDF pp.3–4; https://www.epa.gov/sites/default/files/2015-08/documents/method_218-6_rev_3-3_1994.pdf | Dissolved Cr(VI) analytical fraction, industrial-effluent scope, high-anion interference and valence preservation. Not total Cr, Cr(III), particulate Cr, a quantitative default or current regulatory holding-time advice. |
| epa-anions-300-1 | official_guidance | US EPA, Method300.1, Revision1.0,1997, §§1–3, PDF pp.2–4; https://www.epa.gov/sites/production/files/2015-08/documents/method_300-1_1997.pdf | Chloride/chlorate and other anion identity and QA principles. Source water/drinking-water scope; industrial brine/effluent matrix needs demonstrated applicability and actual validation, not automatic certification. |
| eu-ef-multifunctionality-2021 | official_guidance | European Commission, C(2021)9332 final, Annexes1–2,16December2021, AnnexI §4.5, PDF/printed pp.63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General subdivision/system-expansion → meaningful physical → other/economic relation hierarchy and justification. No animal-specific factors, default share or price, unproved substitution benefit or complete PEF compliance claim. |
