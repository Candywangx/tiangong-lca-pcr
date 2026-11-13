---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.industrial-diamonds-worked-dust-and-powder-of-natural-or-synthetic-precious-or-semi-pre-0e8458e7
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Uncoated HPHT monocrystalline diamond micron powder from purchased grit

## 1. Scope and Applicability

This method covers one actual uncoated HPHT synthetic monocrystalline diamond micron-powder grade made from purchased coarse diamond grit through real comminution/shaping, acid cleaning, aqueous classification, separation, actual grade-specific acid cleaning/rinsing, electric drying and independent first quality release. It retains whole supplied feed/reagent burdens, actual wear, failures, fines and residues, plus observed original-cohort packing/storage/handling services. It is a transparent technical synthesis of primary evidence, not a same-SKU/factory recipe or actual measured inventory. `egrind-types`; `egrind-route`; `egrind-grading`; `grish-terminal`; `harmony-hpht`

Exclude natural diamond powder as this reference, CVD or detonation/polycrystalline/nanodiamond routes, coated or intentionally functionalized powder, finished slurries/pastes, rough mine/press product as final reference, other gemstone powders, whole bonded wheels/PCD compacts/tools and jewellery. No numerical particle distribution, purity, yield, dosage, energy intensity, reaction conditions, tool life or certification threshold is prescribed. The fluoride/high-temperature chlorination/flotation/ultrapurity upgrades in related primary context are not silently combined with this route. Each actual reagent and treatment must be identified; unlisted real operations require evidence and atomic additions before compatibility is claimed. `un-cpc-2025`; `diamtech-cleaning`; `harmony-hpht`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.industrial-diamonds-worked-dust-and-powder-of-natural-or-synthetic-precious-or-semi-pre-0e8458e7 |
| classification_refs | CPC 3.0 38230; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38230.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Uncoated HPHT single-crystal diamond micron powder in one independently accepted grade |
| excluded_products | Natural/CVD/detonation or polycrystalline diamond; coated powder; formulated slurry/paste; rough feed as terminal; other gem powders; tools wheels PCD jewellery |
| representative_product | Whole uncoated HPHT monocrystalline micron powder accepted to its actual declared PSD and impurity specification |
| production_route | Purchased coarse monocrystalline grit → crushing/shaping → actual identified acid cleaning and rinsing/ultrasound → aqueous sedimentation or centrifugal grading → separation → actual grade-specific acid cleaning/rinsing → electric drying → grade acceptance |
| market_state | Whole manufactured at-plant powder at first quality release; packaging excluded; free water independently measured; actual subsequent cohort service disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one specified abrasive powder grade for subsequent industrial grinding/lapping/polishing or tool manufacture |
| How much | 1 kg newly first-released net dry-equivalent whole powder |
| How well | Meet the actual declared grade/PSD method, impurity, crystal structure and uncoated surface acceptance; source-specific tables supply no universal threshold |
| How long or cycle | One manufacturing first release with declared production period; original-cohort actual service uses its Q_c and observation H; no use-phase lifetime equivalence |
| reference_flow_link | finished_powder |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones `427ace16-590b-4f33-ac11-ad4c130205a9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | HPHT synthetic origin and purchased coarse-grit custody; single-crystal diamond structure; uncoated surface and actual acid-cleaned state; one accepted particle-size grade and measured PSD method; actual metallic and non-diamond impurities; free-water measurement and dry-equivalent whole powder mass; first-release Q and unique cohort; actual finished manufactured at-plant product; actual incoming purification and surface state; actual milling medium and wear; actual separately supplied whole reagent formulations and assays; wet-classification route and reprocessing; electric drying and final acceptance; native reference Mass and kg; CN below-1-kV grid supply only for adopted electricity identity; DI water ion-exchange or reverse-osmosis supply; PE-bag material and whole supplied state; ordinary H2O vapour to unspecified air only for adopted emission identity; site and reporting period; original cohort Q_c and service horizon H; opening and closing raw WIP FG and unused service vectors; all actual failures and Q0 periods; packaging material and six-direction ledger; gross physical versus attributed-burden basis; actual species phase receiving medium and provider; subdivision and exchange-specific allocation evidence; actual other-grade cofunctions and waste fate; permission posttests acceptance and disposition for actual postrelease work |

All qualifiers belong in the actual data package and every adopted row retains its complete native conditions below. The whole manufactured family is narrowed by positive primary terminal evidence; no exact SKU is required, but hard material/form/route/phase/type contradictions cannot be waived by a name or classification match.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net whole-powder mass minus independently measured free water, excluding packaging. Q is the unique first-release cohort total; no invented pure-diamond correction or density. |
| one_basis | all inventory rows | Row native extensive property | row unit per reference flow | Keep raw records undivided. Amount cards and aggregation refer to one calc_quotient result after raw conversion and actual burden accounting; gross-mode cards always use complete V, never burden stock correction or economic scaling. |
| energy_units | electricity_milling; electricity_wet; electricity_drying; electricity_abatement; handling_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve electrical energy despite the native property name; 1 kWh = 3.6 MJ. Do not apply material Mass/kg to energy rows. |
| species_units | cp_species; cp_raw | actual extensive quantity | actual original unit then row unit | Only integrate genuine rates. Density must be independently established for that substance and state; integrated gas/liquid volume gets no extra time multiplier. Native metric-carats kt convert by 0.0002 kg/kt; no piece-to-mass or particle-count inference. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased HPHT monocrystalline coarse diamond grit plus separately identified actual supplies; upstream synthesis/recovery already represented once |
| starting_condition_role | Foreground receipt before micronization; not purchase of finished target-grade powder for repacking |
| product_classification_scope | Narrower manufactured diamond-powder subset of CPC38230; classification does not prescribe recipes |
| recursive_input_rule | Supplied same-family grit carries its compatible supplier dataset once; internal regrind/transfer cancels and cannot become new external procurement or second Q |
| upstream_dataset_requirement | Match actual supplier route, recovery/purification state, composition, grade, extensive property/unit, geography, year and delivery owner; unresolved provider is explicit |
| disclosure | Declare site/period, whole raw/reagent/asset and packaging supply, actual acid system, wet grading, electric drying, capture/treatment, Q and Q_c/H, stocks and all gaps |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | Include actual receipt, crushing/shaping, acid cleaning with separately supplied identified reagents, rinsing/ultrasound, aqueous sedimentation or centrifugal grading, separation, actual grade-specific acid cleaning/rinsing after classification, electric drying, grade testing and first release. Retain actual controls and waste treatment. This is technical synthesis of compatible primary processes, not a measured recipe or one supplier SKU; neither HPHT synthesis at this plant nor a final-powder repacking-only route is implied. | egrind-route; egrind-types; egrind-grading; grish-terminal; harmony-hpht |
| boundary_upstream | purchased_inputs | Carry complete mining/synthesis, recovery and actual supplier purification burdens exactly once at the incoming supply state. A recovered coarse grit is not automatically identical to the as-produced HPHT press-output flow. Whole purchased aqueous preparations include carrier water and active constituents once; assay subaccounts are nonadditive. If actually blended on site collect each purchased ingredient, separate added water, electricity and losses; do not also purchase a finished blend. | egrind-types; harmony-hpht; diamtech-cleaning |
| boundary_q | manufacture; handling | Q counts unique newly first-released target-grade net dry-equivalent whole powder once. Closing FG already belongs to that Q: never subtract its manufacturing burden or add Q and closing FG as two products. Manufacturing B_close covers only raw/WIP and genuinely unused/unassigned non-WIP stores. Keep opening inherited raw/WIP and every exchange vector; do not stock-correct already net consumption twice. Grade inspection, repeat acceptance and dispatch of an old cohort do not create new production. |  |
| boundary_service | handling | Packing, storage, humidity exchange, handling and actual postrelease work retain a separate incremental service ledger for original cohort c with its original Q_c and observed horizon H. Performed service remains attributable even if FG stays stored. Only genuinely unused/unassigned service/charge can carry forward. Full FG history, gross dispatch/returns, changing moisture and losses remain physical facts; this first-release method never substitutes a net-delivery denominator or blindly reverses manufacturing from return weight. | ilcd-allocation |
| boundary_actual | all actual exchanges | Conditional rows require evidence of presence/absence; unknown is not zero. Add a separate concrete atomic card, native extensive property, protocol and source for any actual unlisted chemical, fuel, gas, refrigerant, wear material, treatment or external liquid return. The selected route uses electric drying; an actual fuel-fired/steam/fluoride/flotation/coating route needs a complete separately evidenced boundary and species inventory before claiming compatibility. No boiler, steam supply, avoided heat or default reaction is invented. | egrind-route; diamtech-cleaning |
| boundary_physical | manufacturing; FG service; consolidated gate | Keep unscaled gross physical V, stock quantities and attributed burden vectors separately at identical gates. Reconcile full wet physical mass, diamond/non-diamond carbon, relevant metals and actual reactive elements with independent substance/phase measurements. Free, reaction-generated and structural water are distinct; do not assume reaction stoichiometry, pure diamond or fit two unknown species from one carbon residual. Wet waste/whole-article totals and their component assays never add twice. |  |
| boundary_assets | equipment; repairs; utilities | Separate whole physical asset receipt/installed/retirement inventories from used service burden. Record actual new/old parts, installed fluids, wear, refurbishment, lifetime evidence and unused charges, never a whole machine per kg. X_in and X_out remove only overlap with other same-side flow terms, not closing stock or opposite legs. Retain real new material/water influx AND full wet closing mass. Any real external condensate/heat-carrier return requires its own liquid/thermal state, enthalpy and one provider agreement on water/energy; internal circulation cancels. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. | ilcd-allocation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Coarse-grit receipt through first grade release | required | declared complete route; conditional atoms only when actual | manufacturing | finished_powder |
| handling | Original-cohort packing storage and handling | conditional | actual service observed over H; no second production reference | service | original Q_c |

The combined manufacture process retains stage-resolved raw records and matched internal transfers without inventing purchased intermediates. Every row is a specific possible atomic exchange and requires an actual applicability decision. Descriptions define whether the row is a burden dimension or a full gross physical leg; cp_raw/cp_service preserve the companion physical/burden view and calc_quotient never treats them interchangeably.

### Process: Manufacturing (`manufacture`)

#### Inputs

##### Product flows

###### Purchased HPHT monocrystalline diamond grit (`diamond_feed`)

Receive whole coarse grit before micronization. Record synthetic origin, HPHT route, single-crystal structure, catalyst inclusions, surface state and supplier purification already performed; carry its entire upstream synthesis/recovery burden once. Do not substitute an as-produced HPHT press output for recovered coarse grit without independent matching supply-state evidence. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Purchased HPHT monocrystalline diamond grit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-types`; `harmony-hpht`; `egrind-route`

###### Steel grinding ball (`steel_media`)

Conditional actual steel milling media; measure initial/final installed charge, additions, worn fragments and discarded balls. Confirm actual alloy, ball form and wet/dry use for this diamond circuit; record all fragments and losses. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Steel grinding ball
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `diamtech-cleaning`; `ilcd-allocation`

###### Steel mill liner (`steel_liner`)

Conditional actual steel liner; retain complete replacement-part supply, installed stock, wear and removed part. No assumed wear rate or life. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Steel mill liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `diamtech-cleaning`; `ilcd-allocation`

###### Nylon filter cloth (`nylon_filter`)

Actual nylon cloth for wet grading or filtration when present; identify polymer and structure, not an entire unspecified filter or machine. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Nylon filter cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `diamtech-cleaning`; `ilcd-allocation`

###### Mineral lubricating oil (`lubricating_oil`)

Conditional external mineral lubricating oil for mill and centrifuge drives; measure make-up, installed wet charge, leakage and spent oil without treating closed circulation as purchase. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `diamtech-cleaning`; `ilcd-allocation`

###### Aqueous hydrochloric acid preparation (`hcl_solution`)

Conditional separately purchased whole aqueous HCl reagent for actual metal-impurity cleaning. Record assay and carrier water as nonadditive components; concentration is not prescribed. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Aqueous hydrochloric acid preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `diamtech-cleaning`; `ilcd-allocation`

###### Aqueous nitric acid preparation (`nitric_solution`)

Conditional separately purchased whole aqueous nitric-acid reagent; one procurement for the supplied preparation including carrier water, with measured assay. No bath recipe or fixed reaction dose. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Aqueous nitric acid preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `diamtech-cleaning`; `ilcd-allocation`

###### Aqueous sulfuric acid preparation (`sulfuric_solution`)

Conditional separately purchased whole aqueous sulfuric-acid reagent for the declared cleaning system; do not assume concentrated grade or every acid at every site. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Aqueous sulfuric acid preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `diamtech-cleaning`; `ilcd-allocation`

###### Aqueous sodium hydroxide preparation (`caustic_solution`)

Conditional actual purchased whole NaOH solution for scrubber or wastewater neutralization, not an inferred pure NaOH purchase plus its included water. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Aqueous sodium hydroxide preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `diamtech-cleaning`; `ilcd-allocation`

###### Deionised water (`di_water`)

Separately supplied pure H2O produced by ion exchange or reverse osmosis at plant; CAS 7732-18-5. Native comment also mentions distillation but the adopted supply must match the narrower named route. Retain actual grade and supplier; it is neither wastewater nor natural water abstraction. Add only water purchased or made on site beyond carrier water already in whole reagent supply; on-site DI production instead requires its actual feed, reject, resin, electricity and equipment, without a second purchased DI provider. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-grading`; `diamtech-cleaning`; `egrind-route`

###### Supplied liquid process water (`process_water`)

Actual separate mains/process-water supply for cleaning, cooling or scrubber make-up. Record its source, liquid state, independent metering and density at measured conditions; it is distinct from DI supply and reagent carrier water. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. Native is treated industrial process/service/utility liquid-water Product/Mass/kg with no fixed geography, density or treatment grade. Verify actual source, treatment/quality and provider; do not rebind natural abstraction, a separate DI supply or carrier water in a whole preparation as this card. External ingress occurs once; internal circulation is not purchase. Actual-state density requires independent measurement. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `egrind-route`; `ilcd-allocation`

###### Alternating current (`electricity_milling`)

Meter crushing and shaping including attributable starts, idle, failed batches and cleaning. Native identity: customer-side grid-average AC below 1 kV in CN, consumption mix to user; not hydropower-only, generator output or medium-voltage supply. Its reference property is Net calorific value used here as electrical energy in MJ; retain kWh readings and convert once using 3.6 MJ/kWh. Supplier/grid year, voltage, losses and geography must match before linkage. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `egrind-route`; `ilcd-allocation`

###### Alternating current (`electricity_wet`)

Meter washing, ultrasound, pumps, centrifuge and filtration including attributable starts, idle, failed batches and cleaning. Native identity: customer-side grid-average AC below 1 kV in CN, consumption mix to user; not hydropower-only, generator output or medium-voltage supply. Its reference property is Net calorific value used here as electrical energy in MJ; retain kWh readings and convert once using 3.6 MJ/kWh. Supplier/grid year, voltage, losses and geography must match before linkage. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `egrind-route`; `ilcd-allocation`

###### Alternating current (`electricity_drying`)

Meter electric drying and vacuum pump including attributable starts, idle, failed batches and cleaning. Native identity: customer-side grid-average AC below 1 kV in CN, consumption mix to user; not hydropower-only, generator output or medium-voltage supply. Its reference property is Net calorific value used here as electrical energy in MJ; retain kWh readings and convert once using 3.6 MJ/kWh. Supplier/grid year, voltage, losses and geography must match before linkage. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `egrind-route`; `ilcd-allocation`

###### Alternating current (`electricity_abatement`)

Meter ventilation and actual scrubber/wastewater operation including attributable starts, idle, failed batches and cleaning. Native identity: customer-side grid-average AC below 1 kV in CN, consumption mix to user; not hydropower-only, generator output or medium-voltage supply. Its reference property is Net calorific value used here as electrical energy in MJ; retain kWh readings and convert once using 3.6 MJ/kWh. Supplier/grid year, voltage, losses and geography must match before linkage. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `egrind-route`; `ilcd-allocation`

###### Complete diamond powder ball mill (`ball_mill_in`)

Conditional actual asset receipt. Physical gross V retains measured whole installed configuration and fills, serial, new/used status and ownership; its production burden enters the asset service ledger once, not a second whole machine in every kg. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Complete diamond powder ball mill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Complete diamond powder ball mill use service (`ball_mill_service`)

Actual measured operating service of the same asset configuration; use calibrated operating hours and empirically supported remaining capacity, refurbishment, downtime and life evidence. Transfer only used service burden once; unused unassigned service can remain stocked. No fixed lifetime or secondary mass-to-hours coefficient. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Complete diamond powder ball mill use service
- Flow property / unit: Operating time / h
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Complete wet-classification centrifuge (`centrifuge_in`)

Conditional actual asset receipt. Physical gross V retains measured whole installed configuration and fills, serial, new/used status and ownership; its production burden enters the asset service ledger once, not a second whole machine in every kg. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Complete wet-classification centrifuge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Complete wet-classification centrifuge use service (`centrifuge_service`)

Actual measured operating service of the same asset configuration; use calibrated operating hours and empirically supported remaining capacity, refurbishment, downtime and life evidence. Transfer only used service burden once; unused unassigned service can remain stocked. No fixed lifetime or secondary mass-to-hours coefficient. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Complete wet-classification centrifuge use service
- Flow property / unit: Operating time / h
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Complete electric vacuum dryer (`dryer_in`)

Conditional actual asset receipt. Physical gross V retains measured whole installed configuration and fills, serial, new/used status and ownership; its production burden enters the asset service ledger once, not a second whole machine in every kg. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Complete electric vacuum dryer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Complete electric vacuum dryer use service (`dryer_service`)

Actual measured operating service of the same asset configuration; use calibrated operating hours and empirically supported remaining capacity, refurbishment, downtime and life evidence. Transfer only used service burden once; unused unassigned service can remain stocked. No fixed lifetime or secondary mass-to-hours coefficient. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Complete electric vacuum dryer use service
- Flow property / unit: Operating time / h
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Steel rolling bearing (`bearing_new`)

Actual new or reused replacement component received; identify complete part and wet retained fill, then record gross receipt even when it remains in closing stock. X_in removes only duplication with another incoming term, never closing stock. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx.

- Selected flow: Steel rolling bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Polytetrafluoroethylene seal (`seal_new`)

Actual new or reused replacement component received; identify complete part and wet retained fill, then record gross receipt even when it remains in closing stock. X_in removes only duplication with another incoming term, never closing stock. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx.

- Selected flow: Polytetrafluoroethylene seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Freight transport service (`transport`)

Actual uncovered upstream delivery service measured by load, distance, mode and empty-return/capacity evidence; use tonnes and km without inferring intensity. Supplier-included delivery retains the physical trip but only one provider burden; infrastructure and vehicle operation are not purchased twice. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Freight transport service
- Flow property / unit: Freight transport work / t*km
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw`
- Sources: `ilcd-allocation`

##### Waste flows

##### Elementary flows

###### Atmospheric H2O vapour absorbed (`ambient_water_in`)

Actual humidity ingress during normal manufacture, storage and handling as an elementary inflow. Measure actual moisture change with independent wet/dry samples and ambient conditions; no work authorization is invented. Preserve real influx even when retained in closing wet materials; X_in only removes another same-side duplication. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx.

- Selected flow: Atmospheric H2O vapour absorbed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Nitrogen gas entering from atmosphere (`air_n2_in`)

Actual Nitrogen gas gross in leg in ventilation/drying gas, only when present. Measure composition, phase, humidity, flow and temperature/pressure independently; no fixed air fractions or aggregate-air duplicate. Preserve pass-through and changed amounts separately; a net quantity does not replace full gross legs. Integrate actual rates once, never multiply an already integrated volume by time. Carbon residual cannot solve both diamond dust and CO2. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. Native is only an Elementary resource input from ambient air, dinitrogen, CAS 7727-37-9 with Mass/kg; independently confirm ordinary species, gas phase, medium, actual composition and temperature/pressure. Purchased-gas Product, other media, isotopic/liquid/ionic aliases and total-gas indicators are not this species. No assumed air fraction or reaction; full pass-through/change and whole-air constituent subaccounts stay disjoint. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Oxygen gas entering from atmosphere (`air_o2_in`)

Actual Oxygen gas gross in leg in ventilation/drying gas, only when present. Measure composition, phase, humidity, flow and temperature/pressure independently; no fixed air fractions or aggregate-air duplicate. Preserve pass-through and changed amounts separately; a net quantity does not replace full gross legs. Integrate actual rates once, never multiply an already integrated volume by time. Carbon residual cannot solve both diamond dust and CO2. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. Native is only an Elementary resource input from ambient air, oxygen, CAS 7782-44-7 with Mass/kg; independently confirm ordinary species, gas phase, medium, actual composition and temperature/pressure. Purchased-gas Product, other media, isotopic/liquid/ionic aliases and total-gas indicators are not this species. No assumed air fraction or reaction; full pass-through/change and whole-air constituent subaccounts stay disjoint. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Argon gas entering from atmosphere (`air_ar_in`)

Actual Argon gas gross in leg in ventilation/drying gas, only when present. Measure composition, phase, humidity, flow and temperature/pressure independently; no fixed air fractions or aggregate-air duplicate. Preserve pass-through and changed amounts separately; a net quantity does not replace full gross legs. Integrate actual rates once, never multiply an already integrated volume by time. Carbon residual cannot solve both diamond dust and CO2. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. Native is only an Elementary resource input from ambient air, argon, CAS 7440-37-1 with Mass/kg; independently confirm ordinary species, gas phase, medium, actual composition and temperature/pressure. Purchased-gas Product, other media, isotopic/liquid/ionic aliases and total-gas indicators are not this species. No assumed air fraction or reaction; full pass-through/change and whole-air constituent subaccounts stay disjoint. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Carbon dioxide gas entering from atmosphere (`air_co2_in`)

Actual Carbon dioxide gas gross in leg in ventilation/drying gas, only when present. Measure composition, phase, humidity, flow and temperature/pressure independently; no fixed air fractions or aggregate-air duplicate. Preserve pass-through and changed amounts separately; a net quantity does not replace full gross legs. Integrate actual rates once, never multiply an already integrated volume by time. Carbon residual cannot solve both diamond dust and CO2. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Carbon dioxide gas entering from atmosphere
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

#### Outputs

##### Product flows

###### Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones (`finished_powder`)

The whole manufactured Product flow is a broad at-plant production-mix family, explicitly finished and manufactured; it is not an elementary carbon resource, graphite, carbon black, rough mine product or completed tool. This row selects only uncoated single-crystal HPHT-derived diamond fragments after actual micronization, acid cleaning, aqueous classification, electric drying and independent grade acceptance. Record actual accepted PSD, impurity and surface state; native record supplies no numerical grade or pure-carbon assay. Q is first-release net dry-equivalent whole powder mass with independently measured free water removed, including accepted solids/impurities under its actual specification. Count each cohort once including its closing FG; exclude packaging, unaccepted grades and test withdrawals. Accounting mode: reference. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones `427ace16-590b-4f33-ac11-ad4c130205a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `egrind-types`; `egrind-route`; `grish-terminal`; `harmony-hpht`

###### Separately accepted monocrystalline diamond powder grade (`other_grade`)

One separate actually accepted grade, identified by cohort and PSD, with its own output and causal burden vector; never silently add it to selected Q or infer coproduct function from sale of waste. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. Native is the finished manufactured at-plant worked industrial-diamond powder Product family. This card is only another actually independently accepted uncoated HPHT monocrystalline micron grade after the complete declared route, with its own PSD, impurities, free-water/dry-equivalent state and cofunction decision. It is outside target Q, not rough press output, unaccepted powder, natural/polycrystal/coated variants or waste relabelled because sold; full physical V and justified independent burden vector remain separate. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones `427ace16-590b-4f33-ac11-ad4c130205a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `egrind-route`; `ilcd-allocation`

###### Returned liquid water condensate (`condensate_return`)

Conditional real externally returned recovered liquid water, not steam. Preserve gross liquid mass, actual temperature/enthalpy and one provider agreement on water and energy; closed internal condenser circulation cancels. Without an actual external return there is no invented product, avoided-water credit or boiler. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Returned liquid water condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `egrind-route`; `ilcd-allocation`

##### Waste flows

###### Complete diamond powder ball mill retired unit (`ball_mill_out`)

Actual distinct physical retirement or external transfer of that whole asset; V is unscaled gross mass. Carry disposal and lawful burden transfer separately, without negative manufacturing credit. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. This Waste card applies only to actual discarded equipment/parts leaving as waste. Serviceable units, items transferred as products for repair/reuse, or supplier-returned products need a separate compatible Product outlet with actual condition/destination evidence; external movement or sale alone does not make Waste. Retain all actual disposition/work quantities and burdens.

- Selected flow: Complete diamond powder ball mill retired unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Complete wet-classification centrifuge retired unit (`centrifuge_out`)

Actual distinct physical retirement or external transfer of that whole asset; V is unscaled gross mass. Carry disposal and lawful burden transfer separately, without negative manufacturing credit. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. This Waste card applies only to actual discarded equipment/parts leaving as waste. Serviceable units, items transferred as products for repair/reuse, or supplier-returned products need a separate compatible Product outlet with actual condition/destination evidence; external movement or sale alone does not make Waste. Retain all actual disposition/work quantities and burdens.

- Selected flow: Complete wet-classification centrifuge retired unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Complete electric vacuum dryer retired unit (`dryer_out`)

Actual distinct physical retirement or external transfer of that whole asset; V is unscaled gross mass. Carry disposal and lawful burden transfer separately, without negative manufacturing credit. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. This Waste card applies only to actual discarded equipment/parts leaving as waste. Serviceable units, items transferred as products for repair/reuse, or supplier-returned products need a separate compatible Product outlet with actual condition/destination evidence; external movement or sale alone does not make Waste. Retain all actual disposition/work quantities and burdens.

- Selected flow: Complete electric vacuum dryer retired unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Steel rolling bearing removed part (`bearing_removed`)

Actual removed old part leaving externally, measured separately from new part and its attached liquid. X_out removes only another duplicate outgoing term, not stock or an opposite direction. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. This Waste card applies only to actual discarded equipment/parts leaving as waste. Serviceable units, items transferred as products for repair/reuse, or supplier-returned products need a separate compatible Product outlet with actual condition/destination evidence; external movement or sale alone does not make Waste. Retain all actual disposition/work quantities and burdens.

- Selected flow: Steel rolling bearing removed part
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Polytetrafluoroethylene seal removed part (`seal_removed`)

Actual removed old part leaving externally, measured separately from new part and its attached liquid. X_out removes only another duplicate outgoing term, not stock or an opposite direction. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. This Waste card applies only to actual discarded equipment/parts leaving as waste. Serviceable units, items transferred as products for repair/reuse, or supplier-returned products need a separate compatible Product outlet with actual condition/destination evidence; external movement or sale alone does not make Waste. Retain all actual disposition/work quantities and burdens.

- Selected flow: Polytetrafluoroethylene seal removed part
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `egrind-route`; `ilcd-allocation`

###### Rejected diamond micron powder (`diamond_reject`)

Actual separately routed off-spec solids and withdrawn tests not accepted as the reference grade; preserve manufacturing and treatment burdens even if sold or sent away. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Rejected diamond micron powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `egrind-route`; `ilcd-allocation`

###### Wet diamond-cleaning sludge (`wet_sludge`)

One real segregated wet sludge outlet containing measured diamond fines, metal debris and associated liquor; whole wet mass and dry/element components are nonadditive. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Wet diamond-cleaning sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `egrind-route`; `ilcd-allocation`

###### Spent diamond-cleaning aqueous liquor (`waste_liquor`)

One real common liquid outlet when acid drains, grade washings and scrubber blowdown are mixed before external handover. Measure whole wet stream once, with source-pool liquor/water/dissolved-species subaccounts summing to total. Separate outlets instead require separate actual atomic cards and matched providers. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Spent diamond-cleaning aqueous liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `egrind-route`; `ilcd-allocation`

###### Spent nylon filter cloth (`spent_filter`)

One separate actual spent nylon cloth outlet; attached wet fines remain in its whole wet article. Do not add the same attached sludge/water again to another exit. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Spent nylon filter cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `egrind-route`; `ilcd-allocation`

###### Spent mineral lubricating oil (`spent_oil`)

One actual distinct spent-oil outlet including measured water/solids in the supplied waste preparation; retain treatment once and no automatic metal/oil recovery credit. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `egrind-route`; `ilcd-allocation`

###### Worn steel grinding ball (`spent_ball`)

Actual discarded whole balls, disjoint from dissolved metal, suspended fines and liner wear; retain real wear/stock reconciliation and treatment. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Worn steel grinding ball
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `egrind-route`; `ilcd-allocation`

##### Elementary flows

###### Airborne diamond particulate (`diamond_dust_air`)

Actual solid diamond particles escaping capture, with measured particle fraction, crystal identity and air compartment. Total PM or total carbon is not specific diamond mass. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Airborne diamond particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Airborne steel particulate (`steel_dust_air`)

Actual alloy particulate escaping the mill/handling system; retain alloy composition and receiving air medium, not pure iron inferred from total PM. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Airborne steel particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Hydrogen chloride gas to air (`hcl_air`)

Actual separately measured HCl at the final air release after abatement; record CAS, phase and location. Acid preparation mass and chloride analysis alone cannot establish gaseous HCl. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Adopted native identity: hydrogen chloride; CAS 7647-01-0; Elementary flow; Mass/kg; emissions to unspecified air only. No fixed grade, route or geographic supply is supplied. All synonyms/comments were reviewed: alternate aqueous, isotopic or different-molecule synonyms do not establish those identities here; this row is only the independently measured ordinary gas named by the basename and CAS. An inlet, Product supply, other air compartment, NOx/SOx total or dissolved-ion indicator needs a different identity. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Chlorine gas to air (`chlorine_air`)

Conditional actual measured Cl2 at the final air exit; no fixed fraction of acid input or generic chlorine-total indicator. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Adopted native identity: chlorine; CAS 7782-50-5; Elementary flow; Mass/kg; emissions to unspecified air only. No fixed grade, route or geographic supply is supplied. All synonyms/comments were reviewed: alternate aqueous, isotopic or different-molecule synonyms do not establish those identities here; this row is only the independently measured ordinary gas named by the basename and CAS. An inlet, Product supply, other air compartment, NOx/SOx total or dissolved-ion indicator needs a different identity. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: chlorine `4d9a8790-3ddd-11dd-9b45-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Nitrogen monoxide gas to air (`no_air`)

Conditional actual NO species measurement; NOx expressed as NO2 equivalent is not molecular NO quantity. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Adopted native identity: nitrogen monoxide; CAS 10102-43-9; Elementary flow; Mass/kg; emissions to unspecified air only. No fixed grade, route or geographic supply is supplied. All synonyms/comments were reviewed: alternate aqueous, isotopic or different-molecule synonyms do not establish those identities here; this row is only the independently measured ordinary gas named by the basename and CAS. An inlet, Product supply, other air compartment, NOx/SOx total or dissolved-ion indicator needs a different identity. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Nitrogen dioxide gas to air (`no2_air`)

Conditional actual NO2 species measurement after capture; maintain independent NO and NO2 rather than assigning a default NOx split. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. Native is only an Elementary emission output to unspecified environmental air, nitrogen dioxide, CAS 10102-44-0 with Mass/kg; independently confirm ordinary species, gas phase, medium, actual composition and temperature/pressure. Purchased-gas Product, other media, isotopic/liquid/ionic aliases and total-gas indicators are not this species. No assumed air fraction or reaction; full pass-through/change and whole-air constituent subaccounts stay disjoint.Primary name/CAS establish NO2; noisy N2O4 synonyms are not adopted. Total NOx or NO2-equivalent reporting does not establish molecular NO2. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Sulfur dioxide gas to air (`so2_air`)

Conditional actual SO2 species after abatement; sulfur oxides or total sulfur do not establish SO2 without speciation. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Adopted native identity: sulfur dioxide; CAS 7446-09-5; Elementary flow; Mass/kg; emissions to unspecified air only. No fixed grade, route or geographic supply is supplied. All synonyms/comments were reviewed: alternate aqueous, isotopic or different-molecule synonyms do not establish those identities here; this row is only the independently measured ordinary gas named by the basename and CAS. An inlet, Product supply, other air compartment, NOx/SOx total or dissolved-ion indicator needs a different identity. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### water vapour (`water_vapour`)

Actual ordinary H2O vapour released to unspecified air, CAS 7732-18-5, Elementary flow/Mass. Use only non-isotopic water vapour despite the overinclusive synonym list; liquid wastewater, ice and condensate are different. Covers actual drying, ordinary storage/handling desorption and cleanup evaporation; source-resolved measured water balance separates these events, not permission-dependent repair only. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Nitrogen gas leaving to air (`air_n2_out`)

Actual Nitrogen gas gross out leg in ventilation/drying gas, only when present. Measure composition, phase, humidity, flow and temperature/pressure independently; no fixed air fractions or aggregate-air duplicate. Preserve pass-through and changed amounts separately; a net quantity does not replace full gross legs. Integrate actual rates once, never multiply an already integrated volume by time. Carbon residual cannot solve both diamond dust and CO2. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Adopted native identity: dinitrogen; CAS 7727-37-9; Elementary flow; Mass/kg; emissions to unspecified air only. No fixed grade, route or geographic supply is supplied. All synonyms/comments were reviewed: alternate aqueous, isotopic or different-molecule synonyms do not establish those identities here; this row is only the independently measured ordinary gas named by the basename and CAS. An inlet, Product supply, other air compartment, NOx/SOx total or dissolved-ion indicator needs a different identity. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Oxygen gas leaving to air (`air_o2_out`)

Actual Oxygen gas gross out leg in ventilation/drying gas, only when present. Measure composition, phase, humidity, flow and temperature/pressure independently; no fixed air fractions or aggregate-air duplicate. Preserve pass-through and changed amounts separately; a net quantity does not replace full gross legs. Integrate actual rates once, never multiply an already integrated volume by time. Carbon residual cannot solve both diamond dust and CO2. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. Native is only an Elementary emission output to unspecified environmental air, oxygen, CAS 7782-44-7 with Mass/kg; independently confirm ordinary species, gas phase, medium, actual composition and temperature/pressure. Purchased-gas Product, other media, isotopic/liquid/ionic aliases and total-gas indicators are not this species. No assumed air fraction or reaction; full pass-through/change and whole-air constituent subaccounts stay disjoint. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Argon gas leaving to air (`air_ar_out`)

Actual Argon gas gross out leg in ventilation/drying gas, only when present. Measure composition, phase, humidity, flow and temperature/pressure independently; no fixed air fractions or aggregate-air duplicate. Preserve pass-through and changed amounts separately; a net quantity does not replace full gross legs. Integrate actual rates once, never multiply an already integrated volume by time. Carbon residual cannot solve both diamond dust and CO2. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Adopted native identity: argon; CAS 7440-37-1; Elementary flow; Mass/kg; emissions to unspecified air only. No fixed grade, route or geographic supply is supplied. All synonyms/comments were reviewed: alternate aqueous, isotopic or different-molecule synonyms do not establish those identities here; this row is only the independently measured ordinary gas named by the basename and CAS. An inlet, Product supply, other air compartment, NOx/SOx total or dissolved-ion indicator needs a different identity. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Carbon dioxide gas leaving to air (`air_co2_out`)

Actual Carbon dioxide gas gross out leg in ventilation/drying gas, only when present. Measure composition, phase, humidity, flow and temperature/pressure independently; no fixed air fractions or aggregate-air duplicate. Preserve pass-through and changed amounts separately; a net quantity does not replace full gross legs. Integrate actual rates once, never multiply an already integrated volume by time. Carbon residual cannot solve both diamond dust and CO2. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Carbon dioxide gas leaving to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

###### Sulfuric acid aerosol to air (`sulfuric_mist`)

Only actual measured H2SO4-containing mist, with independently established chemical mass, droplet water and air receiving compartment. Do not treat total aerosol as anhydrous sulfuric acid or derive it from total SOx. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Sulfuric acid aerosol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `egrind-route`; `ilcd-allocation`

### Process: Original-cohort service (`handling`)

#### Inputs

##### Product flows

###### Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones (`fg_r`)

Actual gross external return received of the same already first-released uncoated HPHT monocrystalline dry powder family at plant, manufactured Product/production mix. V is actual full physical mass; it is not new Q or net-delivery reversal. Match original cohort and original shipment, independently measure added moisture, loss and rework; do not assume returned weight equals original delivery. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. This binding is only for actual movement retaining the stated complete uncoated monocrystalline-powder physical identity. Contaminated, damaged or otherwise incompatible returns retain all real quantities and original-cohort disposition under their compatible Product/Waste identity, without claiming renewed grade acceptance or deleting actual work.

- Selected flow: Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones `427ace16-590b-4f33-ac11-ad4c130205a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `egrind-route`; `ilcd-allocation`

###### Alternating current (`handling_electricity`)

Actual incremental packing, storage and handling electricity of original cohort c within observed horizon H, including failed or unauthorized work actually performed. Native only CN customer-side grid-average below 1 kV consumption supply with electrical energy expressed by Net calorific value/MJ; record voltage, mix, year and losses; other supplies need distinct identity. Closing FG does not cancel performed service. Accounting mode: burden. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_row / Q for manufacture or A_H,row / Q_c for original-cohort service from the same single section8 quotient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `egrind-route`; `ilcd-allocation`

###### Polyethylene bag (`pe_bag_p`)

Only the actual polyethylene bag pool: new external procurement. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Native is one manufactured PE bag, CAS 9002-88-4, at-plant production mix, Mass/kg; no fixed capacity, polymer grade, geography, supplier or multilayer components. Confirm the actual whole bag; an included closure or carrier water is counted once and disjoint from separate articles. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polyethylene bag (`pe_bag_i`)

Only the actual polyethylene bag pool: supplier-included ingress. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Native is one manufactured PE bag, CAS 9002-88-4, at-plant production mix, Mass/kg; no fixed capacity, polymer grade, geography, supplier or multilayer components. Confirm the actual whole bag; an included closure or carrier water is counted once and disjoint from separate articles. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polyethylene bag (`pe_bag_er`)

Only the actual polyethylene bag pool: external return received. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Native is one manufactured PE bag, CAS 9002-88-4, at-plant production mix, Mass/kg; no fixed capacity, polymer grade, geography, supplier or multilayer components. Confirm the actual whole bag; an included closure or carrier water is counted once and disjoint from separate articles. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### HDPE powder bottle (`hdpe_bottle_p`)

Only the actual hdpe powder bottle pool: new external procurement. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: HDPE powder bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### HDPE powder bottle (`hdpe_bottle_i`)

Only the actual hdpe powder bottle pool: supplier-included ingress. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: HDPE powder bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### HDPE powder bottle (`hdpe_bottle_er`)

Only the actual hdpe powder bottle pool: external return received. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: HDPE powder bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene bottle cap (`pp_cap_p`)

Only the actual polypropylene bottle cap pool: new external procurement. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene bottle cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene bottle cap (`pp_cap_i`)

Only the actual polypropylene bottle cap pool: supplier-included ingress. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene bottle cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene bottle cap (`pp_cap_er`)

Only the actual polypropylene bottle cap pool: external return received. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene bottle cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Corrugated transport carton (`carton_p`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Corrugated transport carton (`carton_i`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Corrugated transport carton (`carton_er`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Wooden transport pallet (`wood_pallet_p`)

Only the actual wooden transport pallet pool: new external procurement. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native is the finished manufactured at-plant wooden load-platform family, Product/Mass/kg; this role is one actual whole wooden pallet including its supplied fasteners/moisture, not collars, separate repair wood or metal/plastic pallets. Verify complete supply gate, species/structure and treatment state without assumed dimensions, grade or life. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Wooden transport pallet (`wood_pallet_i`)

Only the actual wooden transport pallet pool: supplier-included ingress. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native is the finished manufactured at-plant wooden load-platform family, Product/Mass/kg; this role is one actual whole wooden pallet including its supplied fasteners/moisture, not collars, separate repair wood or metal/plastic pallets. Verify complete supply gate, species/structure and treatment state without assumed dimensions, grade or life. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Wooden transport pallet (`wood_pallet_er`)

Only the actual wooden transport pallet pool: external return received. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native is the finished manufactured at-plant wooden load-platform family, Product/Mass/kg; this role is one actual whole wooden pallet including its supplied fasteners/moisture, not collars, separate repair wood or metal/plastic pallets. Verify complete supply gate, species/structure and treatment state without assumed dimensions, grade or life. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene transport strap (`pp_strap_p`)

Only the actual polypropylene transport strap pool: new external procurement. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene transport strap (`pp_strap_i`)

Only the actual polypropylene transport strap pool: supplier-included ingress. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene transport strap (`pp_strap_er`)

Only the actual polypropylene transport strap pool: external return received. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### LDPE stretch wrapping film (`pe_film_p`)

Only the actual ldpe stretch wrapping film pool: new external procurement. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native PE film/sheet Product, CAS9002-88-4, at-plant production mix, Mass/kg, explicitly permits different branching forms. This role remains actual finished LDPE stretch wrapping film with real grade/forming provider once, not resin, PET, bags, bottles or composite film. PET is a competing polymer; luggage/leather taxonomy is an isolated conflict against explicit PE name/CAS/film form and does not introduce leather or relax actual material. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### LDPE stretch wrapping film (`pe_film_i`)

Only the actual ldpe stretch wrapping film pool: supplier-included ingress. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native PE film/sheet Product, CAS9002-88-4, at-plant production mix, Mass/kg, explicitly permits different branching forms. This role remains actual finished LDPE stretch wrapping film with real grade/forming provider once, not resin, PET, bags, bottles or composite film. PET is a competing polymer; luggage/leather taxonomy is an isolated conflict against explicit PE name/CAS/film form and does not introduce leather or relax actual material. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### LDPE stretch wrapping film (`pe_film_er`)

Only the actual ldpe stretch wrapping film pool: external return received. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native PE film/sheet Product, CAS9002-88-4, at-plant production mix, Mass/kg, explicitly permits different branching forms. This role remains actual finished LDPE stretch wrapping film with real grade/forming provider once, not resin, PET, bags, bottles or composite film. PET is a competing polymer; luggage/leather taxonomy is an isolated conflict against explicit PE name/CAS/film form and does not introduce leather or relax actual material. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Supplied liquid handling water (`handling_water`)

Actual separately supplied handling/cleaning water, including genuine postrelease work. X_in excludes only another incoming quantity already counted in a whole wet preparation or article; water retained in closing wet stock is still a real influx and full wet closing mass remains. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. Native is treated industrial process/service/utility liquid-water Product/Mass/kg with no fixed geography, density or treatment grade. Verify actual source, treatment/quality and provider; do not rebind natural abstraction, a separate DI supply or carrier water in a whole preparation as this card. External ingress occurs once; internal circulation is not purchase. Actual-state density requires independent measurement. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `egrind-route`; `ilcd-allocation`

##### Waste flows

##### Elementary flows

###### Atmospheric H2O vapour absorbed (`handling_humidity`)

Actual ordinary storage/handling humidity uptake by powder and packaging; preserve complete gross inward H2O and full wet closing stocks. Natural uptake needs no work permission; do not borrow the emission-only water-vapour identity for an incoming Resource. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx.

- Selected flow: Atmospheric H2O vapour absorbed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `egrind-route`; `ilcd-allocation`

#### Outputs

##### Product flows

###### Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones (`fg_g`)

Actual gross physical shipment of the same already first-released uncoated HPHT monocrystalline dry powder family at plant, manufactured Product/production mix. V is actual full physical mass; it is not new Q or net-delivery reversal. Match original cohort and original shipment, independently measure added moisture, loss and rework; do not assume returned weight equals original delivery. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. This binding is only for actual movement retaining the stated complete uncoated monocrystalline-powder physical identity. Contaminated, damaged or otherwise incompatible returns retain all real quantities and original-cohort disposition under their compatible Product/Waste identity, without claiming renewed grade acceptance or deleting actual work.

- Selected flow: Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones `427ace16-590b-4f33-ac11-ad4c130205a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `egrind-route`; `ilcd-allocation`

###### Polyethylene bag (`pe_bag_s`)

Only the actual polyethylene bag pool: outward with gross physical shipments. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Native is one manufactured PE bag, CAS 9002-88-4, at-plant production mix, Mass/kg; no fixed capacity, polymer grade, geography, supplier or multilayer components. Confirm the actual whole bag; an included closure or carrier water is counted once and disjoint from separate articles. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polyethylene bag (`pe_bag_eo`)

Only the actual polyethylene bag pool: external empty return or transfer. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Native is one manufactured PE bag, CAS 9002-88-4, at-plant production mix, Mass/kg; no fixed capacity, polymer grade, geography, supplier or multilayer components. Confirm the actual whole bag; an included closure or carrier water is counted once and disjoint from separate articles. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### HDPE powder bottle (`hdpe_bottle_s`)

Only the actual hdpe powder bottle pool: outward with gross physical shipments. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: HDPE powder bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### HDPE powder bottle (`hdpe_bottle_eo`)

Only the actual hdpe powder bottle pool: external empty return or transfer. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: HDPE powder bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene bottle cap (`pp_cap_s`)

Only the actual polypropylene bottle cap pool: outward with gross physical shipments. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene bottle cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene bottle cap (`pp_cap_eo`)

Only the actual polypropylene bottle cap pool: external empty return or transfer. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene bottle cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Corrugated transport carton (`carton_s`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Corrugated transport carton (`carton_eo`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Wooden transport pallet (`wood_pallet_s`)

Only the actual wooden transport pallet pool: outward with gross physical shipments. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native is the finished manufactured at-plant wooden load-platform family, Product/Mass/kg; this role is one actual whole wooden pallet including its supplied fasteners/moisture, not collars, separate repair wood or metal/plastic pallets. Verify complete supply gate, species/structure and treatment state without assumed dimensions, grade or life. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Wooden transport pallet (`wood_pallet_eo`)

Only the actual wooden transport pallet pool: external empty return or transfer. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native is the finished manufactured at-plant wooden load-platform family, Product/Mass/kg; this role is one actual whole wooden pallet including its supplied fasteners/moisture, not collars, separate repair wood or metal/plastic pallets. Verify complete supply gate, species/structure and treatment state without assumed dimensions, grade or life. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene transport strap (`pp_strap_s`)

Only the actual polypropylene transport strap pool: outward with gross physical shipments. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Polypropylene transport strap (`pp_strap_eo`)

Only the actual polypropylene transport strap pool: external empty return or transfer. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### LDPE stretch wrapping film (`pe_film_s`)

Only the actual ldpe stretch wrapping film pool: outward with gross physical shipments. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native PE film/sheet Product, CAS9002-88-4, at-plant production mix, Mass/kg, explicitly permits different branching forms. This role remains actual finished LDPE stretch wrapping film with real grade/forming provider once, not resin, PET, bags, bottles or composite film. PET is a competing polymer; luggage/leather taxonomy is an isolated conflict against explicit PE name/CAS/film form and does not introduce leather or relax actual material. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### LDPE stretch wrapping film (`pe_film_eo`)

Only the actual ldpe stretch wrapping film pool: external empty return or transfer. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. This physical disclosure creates no additional procurement, supplier burden or credit. Its actual one upstream owner and attributable service burden are recorded separately once by cp_pack and calc_service; I retains supplier-included physical ingress even if its burden is already in the supplied input. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider. Native PE film/sheet Product, CAS9002-88-4, at-plant production mix, Mass/kg, explicitly permits different branching forms. This role remains actual finished LDPE stretch wrapping film with real grade/forming provider once, not resin, PET, bags, bottles or composite film. PET is a competing polymer; luggage/leather taxonomy is an isolated conflict against explicit PE name/CAS/film form and does not introduce leather or relax actual material. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

##### Waste flows

###### Discarded polyethylene bag (`pe_bag_w`)

Only the actual polyethylene bag pool: segregated waste outlet. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. Use only for an actual separate outlet. If pools share one mixed outlet, this per-pool W is a nonadditive source subledger under cp_pack and is NOT a second exchange; use mixed_pack_w once instead, with no duplicate provider. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Discarded polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Discarded hdpe powder bottle (`hdpe_bottle_w`)

Only the actual hdpe powder bottle pool: segregated waste outlet. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. Use only for an actual separate outlet. If pools share one mixed outlet, this per-pool W is a nonadditive source subledger under cp_pack and is NOT a second exchange; use mixed_pack_w once instead, with no duplicate provider. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Discarded hdpe powder bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Discarded polypropylene bottle cap (`pp_cap_w`)

Only the actual polypropylene bottle cap pool: segregated waste outlet. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. Use only for an actual separate outlet. If pools share one mixed outlet, this per-pool W is a nonadditive source subledger under cp_pack and is NOT a second exchange; use mixed_pack_w once instead, with no duplicate provider. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Discarded polypropylene bottle cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Discarded corrugated transport carton (`carton_w`)

Only the actual corrugated transport carton pool: segregated waste outlet. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. Use only for an actual separate outlet. If pools share one mixed outlet, this per-pool W is a nonadditive source subledger under cp_pack and is NOT a second exchange; use mixed_pack_w once instead, with no duplicate provider. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Discarded corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Discarded wooden transport pallet (`wood_pallet_w`)

Only the actual wooden transport pallet pool: segregated waste outlet. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. Use only for an actual separate outlet. If pools share one mixed outlet, this per-pool W is a nonadditive source subledger under cp_pack and is NOT a second exchange; use mixed_pack_w once instead, with no duplicate provider. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Discarded wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Discarded polypropylene transport strap (`pp_strap_w`)

Only the actual polypropylene transport strap pool: segregated waste outlet. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. Use only for an actual separate outlet. If pools share one mixed outlet, this per-pool W is a nonadditive source subledger under cp_pack and is NOT a second exchange; use mixed_pack_w once instead, with no duplicate provider. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Discarded polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Discarded ldpe stretch wrapping film (`pe_film_w`)

Only the actual ldpe stretch wrapping film pool: segregated waste outlet. V is the complete gross physical leg in kg, never B_open + U - B_close, an economic share or a burden vector. Keep opening/closing empty, attached-WIP/FG and reusable units; internal reuse cancels. Confirm this exact material and whole article; bottle is not cap, film is not bag, and pallet is not repair wood. Whole wet supplied article includes its components once; independently procured components are disjoint. Use only for an actual separate outlet. If pools share one mixed outlet, this per-pool W is a nonadditive source subledger under cp_pack and is NOT a second exchange; use mixed_pack_w once instead, with no duplicate provider. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Discarded ldpe stretch wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Mixed discarded transport packaging (`mixed_pack_w`)

Conditional one real commingled external packaging-waste outlet; identify actual PE bag, HDPE bottle, PP cap/strap, carton, wood and film present, their moisture and residual powder. Measure the whole wet outlet once; W_p source pools sum to it and are nonadditive components. Disable per-material external W cards for these same components. One treatment/provider, no automatic sale/recycling credit. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. P/I are exclusive for the same ingress; under actual co-collection each material W is only an independently measured origin-W subaccount, with one total external outlet and provider.

- Selected flow: Mixed discarded transport packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `harmony-hpht`; `ilcd-allocation`

###### Spent handling-cleaning aqueous liquor (`handling_liquor`)

Actual separate external liquid-waste outlet after handling; include its full wet physical mass and measured powder/solute components without adding them again. If it merges into manufacture waste_liquor, retain source subaccounts and exactly one physical external outlet/provider. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: Spent handling-cleaning aqueous liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `egrind-route`; `ilcd-allocation`

##### Elementary flows

###### water vapour (`handling_vapour`)

Actual ordinary H2O vapour to unspecified air, CAS 7732-18-5, Elementary/Mass, from storage/handling desorption or genuine cleanup. Restrict the overbroad native synonyms to non-isotopic water gas; no liquid condensate or wastewater. Gross physical V is not reduced by closing stocks or burden shares. Physical amount is the complete actual V of this outlet. The same material may carry an independently attributed impact/treatment burden dimension once; physical disclosure is not another provider purchase and never stock-corrects or economically shrinks V. Accounting mode: gross. This row uses calc_quotient in section8 exactly once with the mode-specific numerator. Keep all actual failures, idle, cleanup and rework increments; retain the full companion physical ledger separately from attributed burden.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_row / Q_basis from the single section8 quotient; actual complete gross physical leg only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `egrind-route`; `ilcd-allocation`

## 7. Allocation and Co-product Handling

These rules apply only to the stated attributional partitioning scenario after the complete route and cohort boundary in §5. Full physical mass is never an allocated burden share. A separated grade or sold residue is not automatically an independent cofunction.

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | shared manufacturing and service burdens | Use only attributional cases that require partitioning consistently with the declared study decision context. First separate dedicated operations and real or virtual subdivisions, including grade-specific finishing and exclusive reagent/tool service. Industrial process descriptions and a sale invoice do not authorize allocation. | ilcd-allocation |
| allocation_causal | each remaining exchange | Establish the determining physical causal relationship for each exchange/function from actual measured technology: e.g. actual grade processing demand and equipment service where causally determining. Mass, duration, energy and value are not freely interchangeable keys; justify their determining role and all effects on linked flows. Keep full gross physical legs unscaled by that burden share. | ilcd-allocation |
| allocation_residual | only the genuinely unresolved common-process residue | Only after those steps, allocate the true residual with contemporaneous values at the same common process gate and actual output state, quantity and quality. Back out later purification, packing and delivery costs from later prices with evidence. Distinct grades need independent actual outputs and cofunction decisions; do not impose yield, size-share or price ratios. Document no-causality justification, sensitivity, conservation across all functions and unresolved values. | ilcd-allocation |
| allocation_losses | failures; samples; sludge; sold residues; recycling | Retain ordinary manufacturing failures, off-spec solids, samples and their treatment burdens in the causing cohort. Waste leaving, being sold or sent for recycling never automatically becomes T_other, a negative input or avoided-product credit. A one-time vector transfer requires a real independent other cohort/function and justified allocation/handover; retain full physical exit. Internal recirculation is not another purchase or product. | ilcd-allocation |
| allocation_pack | each actual packaging pool | For each separately identified packaging material or whole-article pool, O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O/C retains complete wet empty, attached-WIP, attached-FG and reusable stocks; S follows gross physical shipments, not Q or net sales. P/I are mutually exclusive for the same physical ingress event and have one actual upstream owner, independent of burden shares. F_in/F_out are independently measured actual repair/material/water additions or removals, including ordinary humidity, with event, phase and destination; never fitted balancing residuals. X_in/X_out removes only the same event/material quantity proved duplicated in another actual OTHER flow on the SAME input/output side. It never removes a stock, opposite-side leg, mere card presence or real ingress retained in C. Use complete wet articles or one mutually exclusive component bridge; internal transfers/reuse cancel once. Physical V stays complete under the sole V/Q_c quotient and does not generate another provider or credit. One actual mixed_pack_w has one measured whole outlet and receiver/treatment provider. Independently measured disjoint origin-W subaccounts, including actual attached residue/water on a consistent basis, sum to the outlet and are not extra exported component cards or treatment amounts. Retain unknown origins explicitly; no mixture is invented. Burden ownership, used service and allocation are accounted once separately. | ilcd-allocation; harmony-hpht |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | finished_powder | weighing | cohort; incoming origin/HPHT/single crystal; grade; release timestamp; accepted mass; free water; tare; rejects; withdrawals; repeat release flags | Calibrated weighing with independent moisture measurement and traceable grade acceptance. Sum only unique first-released net dry-equivalent whole powder; keep impurity/PSD evidence separately, no assumed purity correction. Aggregation instructions (raw quantities remain undivided): raw unique mass sum Q; calc_release; denominator only The aggregation_rule cell is an output-basis label referring to the same single section8 quotient; it is not another division. | kg | each lot and release | whole production period including Q0 and failed lots | declared plant and target-grade cohort | per reference flow | calibration; moisture method; PSD method; disposition; cohort deduplication |
| cp_raw | manufacture | material and transport rows | raw_records | row; actual processing stage; event; source state; raw unit/quantity; rate or integral; timestamp; formulation and assay; upstream owner; V; raw/WIP/nonWIP opening/closing quantities; inherited per-exchange burden vectors; already-net flag; F_in; F_out; same_side_OTHER_event | Measure each whole supply separately using calibrated scale/meter/invoice and actual delivery records. Record actual acid system; component assays and carrier water are nonadditive. Keep full gross physical V and stock quantities separate from each original-unit burden vector. Aggregation instructions (raw quantities remain undivided): raw undivided records only; for per reference flow use calc_raw then calc_burden and calc_quotient once The aggregation_rule cell is an output-basis label referring to the same single section8 quotient; it is not another division. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. | row native unit | each receipt transfer and stock census | complete period and opening history | plant receipt and all actual processing stages | per reference flow | scale/meters; batch genealogy; supplier composition; background reference basis; stock reconciliation |
| cp_energy | manufacture | each electricity row | metering | stage; meter opening/closing; kWh; timestamp; voltage; geography; year; provider; start/idle/failure/cleanup; submeter reconciliation | Read cumulative energy differences once; retain actual rate integrations only where power is a rate. Reconcile common feeders against submeters without summing both. Preserve CN below1kV restriction and all real operating modes. Aggregation instructions (raw quantities remain undivided): raw undivided meter totals; per reference flow uses the same calc_quotient after calc_raw and allocation The aggregation_rule cell is an output-basis label referring to the same single section8 quotient; it is not another division. | kWh; MJ | meter interval and each batch | complete period including zero-output operation | actual mill wet-line dryer and controls | per reference flow | meter calibration; time alignment; mains reconciliation; supply contract |
| cp_assets | manufacture | each asset and replacement part | asset_records | serial/configuration; new/used; whole wet mass; fills; O/P/C/retirement; remaining service; actual hours; overhaul; new/old parts; X_in/X_out same-side overlap; burden owner; F_in; F_out; same_side_OTHER_event | Measure gross whole assets/parts and installed wet stocks independently of service. Derive actual used service from engineering life/capacity records with uncertainty, not a default life; retain unused unassigned charge separately. Do not turn hours into kg using a secondary coefficient. Aggregation instructions (raw quantities remain undivided): raw physical V and service records; per reference flow use calc_burden only for used service and calc_quotient once; physical rows use V The aggregation_rule cell is an output-basis label referring to the same single section8 quotient; it is not another division. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. | kg; h | each change and usage interval | complete asset history needed for current service | actual plant equipment and maintenance | per reference flow | serial register; installed-stock survey; maintenance; service-capacity support; ownership |
| cp_outputs | manufacture | other grade and each waste/liquid output | weighing_sampling | outlet; grade/cohort; physical wet mass; dry component; actual species; impurity; destination; treatment owner; stock; common versus separate outlet | Independently weigh actual whole outlets and sample composition; identify actual separately accepted grades and true cofunctions. Sludge/liquor components and whole totals are nonadditive. One real combined outlet uses one external exchange and provider with source subaccounts. Aggregation instructions (raw quantities remain undivided): raw undivided physical outputs and burden assignments; per reference flow uses calc_quotient once with row mode The aggregation_rule cell is an output-basis label referring to the same single section8 quotient; it is not another division. | kg | each outlet and representative sample | complete period and retained stocks | same manufacturing boundary | per reference flow | weighing; wet/dry assays; manifests; sale versus cofunction decision; provider treatment basis |
| cp_species | manufacture | each elementary species and humidity row | species_measurements | species identity; CAS; crystal/particle/phase; actual receiving medium; gross inlet/outlet; pass-through/net; rate/integral flag; temperature; pressure; humidity; independent analytical method; detection limit; wet full stocks; F_in; F_out; same_side_OTHER_event | Measure at actual external exit after capture and independently at required ingress. Use true species and particle composition; preserve total PM/NOx/SOx/COD/VOC indicators only as nonadditive measured indicators, not molecules. Independently distinguish water sorption, evaporation, reaction and structural water; never solve two missing species from one residual. Aggregation instructions (raw quantities remain undivided): raw undivided species records; per reference flow uses calc_raw and the same calc_quotient; gross modes retain full V The aggregation_rule cell is an output-basis label referring to the same single section8 quotient; it is not another division. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. | kg; original meter unit | each relevant run and actual event | all operating states and ordinary storage | actual external gate and air/water compartment | per reference flow | analytical QA; calibrated rates; phase and compartment evidence; independent balances |
| cp_service | handling | original-cohort handling and FG movements | cohort_service_records | original cohort c; fixed original Q_c; horizon H; opening/closing whole wet FG; original shipment links; gross G/R; absorbed/released water; actual incremental materials/energy; performed versus unused service; permission; posttests; acceptance; hold/waste disposition; F_in; F_out; same_side_OTHER_event | Trace all actual work and physical movements to original first-release history including older FG. Meter new increments separately; do not reassign old manufacture or treat reacceptance as Q. Natural humidity needs no permit. Unauthorized/failed work remains collected and its real disposition retained. Aggregation instructions (raw quantities remain undivided): raw undivided records; per reference flow use fixed Q_c in calc_quotient once; physical legs retain V The aggregation_rule cell is an output-basis label referring to the same single section8 quotient; it is not another division. True F_in/F_out and complete wet closing stock coexist; X removes only a proven same-event/material duplicate in another actual OTHER same-side flow, never a stock, opposite side, card presence or retained real influx. | row native unit | each movement/work interval | observed H including opening FG history | original cohort and actual storage/packing gate | per reference flow | cohort genealogy; dispatch/return weights; humidity/phase checks; permission/tests; meter reconciliation |
| cp_pack | handling | each material and each of six physical directions | packaging_six_legs | material/whole article; pool; empty/attached WIP/FG/reusable O and C; P; supplier-included I; ER; gross S; EO; W; internal reuse; full wet mass; X overlap with other same-side terms; disjoint component bridge; one upstream owner; actual used burden vector; F_in; F_out; X_in; X_out; same_side_OTHER_event; independently_measured_origin_W; one_receiver_provider | For each separately identified packaging material or whole-article pool, O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O/C retains complete wet empty, attached-WIP, attached-FG and reusable stocks; S follows gross physical shipments, not Q or net sales. P/I are mutually exclusive for the same physical ingress event and have one actual upstream owner, independent of burden shares. F_in/F_out are independently measured actual repair/material/water additions or removals, including ordinary humidity, with event, phase and destination; never fitted balancing residuals. X_in/X_out removes only the same event/material quantity proved duplicated in another actual OTHER flow on the SAME input/output side. It never removes a stock, opposite-side leg, mere card presence or real ingress retained in C. Use complete wet articles or one mutually exclusive component bridge; internal transfers/reuse cancel once. Physical V stays complete under the sole V/Q_c quotient and does not generate another provider or credit. One actual mixed_pack_w has one measured whole outlet and receiver/treatment provider. Independently measured disjoint origin-W subaccounts, including actual attached residue/water on a consistent basis, sum to the outlet and are not extra exported component cards or treatment amounts. Retain unknown origins explicitly; no mixture is invented. Burden ownership, used service and allocation are accounted once separately. Raw quantities remain undivided; aggregation_rule only references the same calc_quotient output basis and does not divide again. | kg | each physical leg and stock count | whole H including attached beginning/ending stocks | actual material pool and receiving/shipping/waste point | per reference flow | scales; supply-included ownership; stock locations; gross shipment links; component disjointness; one waste manifest/provider |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | raw observations | Convert raw readings to each row native extensive unit before stock/inheritance and allocation. Energy kWh ×3.6 = MJ. A measured metric carat (native kt) ×0.0002 = kg; no single-grain weight is inferred. Use independent substance density at actual temperature/pressure for genuine volume/mass conversion. Integrate actual rates once; a total metered volume is already integrated. | raw quantity; original unit; actual state; independently measured density | native extensive raw quantity |  |
| calc_release | finished_powder | Q = sum(unique newly first-released target-grade whole dry-equivalent net kg). Subtract independently measured free water from wet powder mass; do not correct solids to hypothetical pure diamond. Q includes the cohort closing FG once, not another output. Q=0 preserves burdens and returns no unit result. | cp_release | Q |  |
| calc_burden | manufacturing burden dimension only | A = B_open + U - B_close - T_other, separately for every original-unit exchange vector after calc_raw and actual allocation. B_open/B_close contain raw/WIP and unused unassigned non-WIP stores, never first-released FG. U retains failures/Q0/startstop/idle/cleanup and used asset service. Already stock-corrected consumption is not corrected again. T_other requires a real other cohort/function and justified one-time transfer; ordinary waste/sale is insufficient. This formula never applies to a gross physical card V. | cp_raw; cp_energy; cp_assets; cp_outputs; allocation decisions | A | ilcd-allocation |
| calc_service | original cohort c within H | A_H is actual performed incremental service burden allocated once to original cohort c over observed H, with fixed original Q_c. Keep original manufacturing history; no manufacturing reversal or new Q. Deduct only genuinely unused/unassigned service/charge once, not performed service on closing FG. Actual failed or unauthorized work retains burdens and disposition. | cp_service; cp_pack; cp_assets | A_H; Q_c | ilcd-allocation |
| calc_quotient | all inventory rows except fixed finished_powder | For a burden-mode manufacture row q = A_row / Q. For a burden-mode original-cohort service row q_c = A_H,row / Q_c. For EVERY gross-mode physical card q_V = V_row / Q_basis where Q_basis is Q for manufacture or original Q_c for handling. V_row is that complete actual gross physical leg, never A, B_open+U-B_close, economic share or stock-adjusted burden. Physical disclosures create no added procurement/provider burden or credit; separately carry the one actual burden-owner dimension once. Apply this division once after calc_raw and appropriate burden steps; cards/aggregation reference this same result, never divide it again. Q_basis=0 retains raw V and burden and emits no unit value. | A; Q; A_H; Q_c; V_row; row mode; cp_release | q; q_c; q_V |  |
| calc_physical | all physical gates | For each independently identified material/species opening + external incoming + evidenced transformation = closing + external outgoing. Never scale V by burden shares.  X_in/out only removes other same-side flow duplication; actual retained influx and full wet closing mass remain. Cancel matched internal transfers and the internal first-release handover when consolidating, leaving one Q. Never add wet totals and their component assays twice or use one residual for multiple unknowns. For each separately identified packaging material or whole-article pool, O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O/C retains complete wet empty, attached-WIP, attached-FG and reusable stocks; S follows gross physical shipments, not Q or net sales. P/I are mutually exclusive for the same physical ingress event and have one actual upstream owner, independent of burden shares. F_in/F_out are independently measured actual repair/material/water additions or removals, including ordinary humidity, with event, phase and destination; never fitted balancing residuals. X_in/X_out removes only the same event/material quantity proved duplicated in another actual OTHER flow on the SAME input/output side. It never removes a stock, opposite-side leg, mere card presence or real ingress retained in C. Use complete wet articles or one mutually exclusive component bridge; internal transfers/reuse cancel once. Physical V stays complete under the sole V/Q_c quotient and does not generate another provider or credit. One actual mixed_pack_w has one measured whole outlet and receiver/treatment provider. Independently measured disjoint origin-W subaccounts, including actual attached residue/water on a consistent basis, sum to the outlet and are not extra exported component cards or treatment amounts. Retain unknown origins explicitly; no mixture is invented. Burden ownership, used service and allocation are accounted once separately. | cp_raw; cp_assets; cp_outputs; cp_species; cp_pack; cp_service; F_in; F_out; X_in; X_out; same_side_OTHER_event; independent_origin_W | independent closures and explicit unresolved residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each row and reference | Verify whole product identity and every native restriction including all names/synonyms/comments, CAS, crystal/particle phase, route, form, geography, medium, type and all property/unit links. Generic family compatibility requires positive terminal evidence; identity alone supplies no provider dataset, assay or quantities. | native original; supplier specification; full route evidence |
| dq_full_period | all inventories | Cover complete period, failed and Q0 lots, starts, idle, cleanup, rework, stock inheritance and older FG services. Retain actual raw measurements, uncertainty, non-detect bounds, sampling limits and representativeness; future collection is not claimed observation. | raw logs; inventories; cohort history; laboratory QA |
| dq_primary | sources and constraints | Primary process sources are technical synthesis, not a universal SKU recipe or one facility measurement. Do not copy PSD, purity, dosage, yield, reactor settings or performance thresholds into defaults. Product comparisons require actual equivalent grade and service. | full original and adjacent countercontext; actual foreground evidence |
| dq_allocation | burden dimensions and physical views | Keep allocation evidence and 100% burden conservation separate from independent full gross physical closure. All denominators and one-time unit conversions are traceable; no service or stock quantity is corrected twice. | subdivision records; technical causality; common-gate prices; physical ledger |
| dq_language | complete PCR and data package | Match English and Chinese ordered row/rule/source identities, actual qualifier elements, description restrictions and formulas. Distinguish unresolved ordinary identities from core terminal holds, engineering source fidelity from scientific and translation review. | complete paired raw-to-typed audit; native originals |

## 9. Validation Rules

Apply every rule with the entire §5/§7 premises and §8 protocols/formulas. Unknown future measurements are unmeasured rather than passes; unsupported relationships remain explicit.

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_core | whole data package | Require one independently identified whole uncoated HPHT single-crystal manufactured powder after the complete declared route and grade acceptance. Bind the broad finished Product family only under all §3 and card restrictions; no graphite/carbon-black/Resource/rough-press material/tool substitution. A hard native material, crystal form, phase, route or type conflict is a core hold, even with a mechanically passing projection. | grish-terminal; egrind-types; harmony-hpht |
| validate_q | all rows and calculations | Require positive independent first-release Q, unique finished_powder Product output, same native Mass/kg basis and aligned languages. Q0 retains all raw loads and no unit result. Q is not closing-FG-plus-release, shipment or repeat qualification. No unknown conversion passes and no raw aggregation divides before the single quotient. |  |
| validate_physical | manufacture; service; combined gates | Require complete gross legs and independent wet mass/element/species balances, all stock vectors and packaging six-direction events. Keep actual retained influx plus full closing wet mass. One residual cannot identify multiple species; NOx, SOx, total PM, VOC, COD and total carbon remain indicators unless actual speciation exists. Integrated volume never gets an extra time multiplier or borrowed water density. |  |
| validate_work | actual postrelease work and all losses | Record manufacturer/specification permission, postwork tests, acceptance and disposition for actual rework or continued qualification; never assume broken or contaminated product is restored. These are qualification gates, not permission to delete flows: unauthorized, failed or rejected work actually done retains all materials, energy, original cohort and hold/waste disposition. Natural humidity exchange needs no invented work permit. |  |
| validate_completeness | all providers and measured inventories | Verify each actual purchased preparation, wear part, utility, asset service, waste outlet and species has a specific atomic identity and collection basis. Match supplier dataset incoming state, reference property, unit, year and geography before numerical use. Unresolved auxiliaries/providers or future values are ordinary data-completion gaps; unknown core route/terminal identity is different and cannot be hidden by declared_unresolved. |  |
| validate_claims | reported result | Report performed, skipped, unknown and failed checks with evidence. Source fingerprint/Schema/arithmetic checks do not grant scientific review, translation review, accepted mapping, product certification or publication; this method contains collection requirements rather than fabricated factory observations. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Compatible declared-grade abrasive powder input to subsequent tool/slurry manufacture or industrial finishing |
| allowed_use | Only a complete compatible route/grade/site/period inventory with positive first-release Q and disclosed service horizon |
| excluded_use | No equal performance/lifetime claim across grades; no natural/CVD/polycrystalline/coated substitution; no publication or scientific approval from this profile |
| required_metadata | HPHT synthetic origin and purchased coarse-grit custody; single-crystal diamond structure; uncoated surface and actual acid-cleaned state; one accepted particle-size grade and measured PSD method; actual metallic and non-diamond impurities; free-water measurement and dry-equivalent whole powder mass; first-release Q and unique cohort; actual finished manufactured at-plant product; actual incoming purification and surface state; actual milling medium and wear; actual separately supplied whole reagent formulations and assays; wet-classification route and reprocessing; electric drying and final acceptance; native reference Mass and kg; CN below-1-kV grid supply only for adopted electricity identity; DI water ion-exchange or reverse-osmosis supply; PE-bag material and whole supplied state; ordinary H2O vapour to unspecified air only for adopted emission identity; site and reporting period; original cohort Q_c and service horizon H; opening and closing raw WIP FG and unused service vectors; all actual failures and Q0 periods; packaging material and six-direction ledger; gross physical versus attributed-burden basis; actual species phase receiving medium and provider; subdivision and exchange-specific allocation evidence; actual other-grade cofunctions and waste fate; permission posttests acceptance and disposition for actual postrelease work |
| required_quality_disclosure | actual measured data; provider and ordinary UUID gaps; source applicability; allocation; wet/gross versus burden views; unmeasured checks; uncertainty |
| update_trigger | Change of incoming state, crystal/route, grade/surface, chemical supply, processing, provider, electricity, gate, allocation or service horizon |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | UNSD CPC3.0 30June2025 pp61 164 186–189: classification and adjacent rough/gem/tool exclusions only; no manufacturing method |
| egrind-types | extension_guidance | https://www.superabrasivespowder.com/the-types-of-diamond-micron-powder.html | Synthetic monocrystalline coarse-grain comminution versus natural and polycrystalline powder and downstream tools |
| egrind-route | extension_guidance | https://www.superabrasivespowder.com/the-current-status-of-diamond-micro-powder-development.html | Complete crushing/shaping cleaning grading drying inspection route and actual acid/alkali emissions; no recipe or threshold copied |
| egrind-grading | extension_guidance | https://www.superabrasivespowder.com/unlocking-efficient-applications-of-diamond-micron-powder.html | Aqueous sedimentation and centrifugal grading context and alternative-method limits; actual site route declared |
| grish-terminal | handbook | https://grish.com/wp-content/uploads/2022/09/Monocrystalline-Diamond-Powder.pdf | Complete single-page manufacturer sheet printed16: whole manufactured monocrystalline powder terminal and source-specific PSD table; no universal PSD/purity copied |
| harmony-hpht | extension_guidance | https://www.industrydiamond.com/monocrystalline-metal-resin-diamond-powders-micron-sizes.html | Manufacturer HPHT micron-powder supply form and bag/bottle/carton context; related coated and detonation products are excluded |
| diamtech-cleaning | extension_guidance | https://diamtech.store/en/blog/purification-process/ | Named acid identities washing and drying context; no universal reagent combination/operating conditions; fluoride flotation ultrapurity upgrade excluded |
| ilcd-allocation | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | First edition2010 §§7.9.2–7.9.3 pp255–272: attributional subdivision determining causality residual same-gate/state value and 100% conservation; industrial sources do not establish allocation |
