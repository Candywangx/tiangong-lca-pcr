---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.articles-of-asphalt-or-of-similar-material
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mineral-surfaced fiberglass asphalt roll roofing manufacture

## 1. Scope and Applicability

This profile covers one manufactured article: unmodified, non-self-adhered, mineral-surfaced fiberglass asphalt roofing supplied in complete solid rolls. Its foreground starts from purchased complete cured glass mat and roofing-grade coating asphalt, includes actual filled-coating preparation and the entire coating/surfacing/cooling/cut/wind/QC route, and ends at the unique first complete quality release. Packing, storage, handling and dispatch remain separate original-cohort service ledgers. It is a transparent technical synthesis from a manufacturing handbook and a real manufacturer terminal, not a claimed single-SKU/factory recipe. `arma-residential-manual-2014`; `tarco-fiberglass-msr`

Exclude shingles and their self-seal/lamination/release-tape system, polymer-modified SBS/APP or polyester membranes, smooth/organic underlayment, bare/uncoated mat/paper, liquid coatings/primers/emulsions, upstream binder extraction/refining as foreground, paving mixes, roof assemblies and installation. An ordinary material/provider/quantity gap remains a collection requirement; an actual incompatible core terminal is a hold. No default composition, plant heat source, emission, coating temperature, line speed, density, lifetime, fire/wind/acoustic rating or certification is supplied. UN CPC3.0 lists 37930 and neighbouring 37940 titles without detailed inclusion/exclusion prose; this narrower semantic boundary is not an accepted mapping. `unsd-cpc3-notes-2025`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.articles-of-asphalt-or-of-similar-material |
| classification_refs | CPC 3.0 37930; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-37930.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Unmodified non-self-adhered mineral-surfaced glass-fibre-mat asphalt roofing in rolls; complete uninstalled solid composite |
| excluded_products | Shingles; SBS/APP/polyester modified membranes; organic felt and bare mat; liquid coating/primer/emulsion; smooth underlayment; paving mixture; whole roof and installation |
| representative_product | One declared grade of mineral-surfaced fiberglass asphalt roll roofing; Tarco documents the physical terminal, not this profile’s exact recipe or factory |
| production_route | Receive cured whole glass mat and roofing coating asphalt; condition and mix actual filler; coat/impregnate mat; apply top granules and bottom parting mineral; embed; cool; measure length; cut; wind; inspect and first release; separately record packing/storage/dispatch |
| market_state | Complete uninstalled quality-released roll; removable packaging is separate; downstream roof coverage and service performance not declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply complete uninstalled mineral-surfaced glass-mat asphalt roll roofing |
| How much | 1 m2 actual single-face projected material area at first complete quality release |
| How well | Actual design, materials, dimensions, state and measured product tests declared; no whole-roof performance equivalence |
| How long or cycle | One first-release manufacturing cohort; actual post-release service horizon reported separately, no fixed installed life |
| reference_flow_link | finished_roll |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bituminous waterproofing membrane `78f09f81-deb9-42dd-9418-7860faee0a2e` |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | site and collection period; configuration and lot/cohort identity; glass-fibre mat and cured binder supply state; petroleum coating-asphalt grade and upstream oxidation owner; whole formulation versus onsite mixing ownership; actual filler mineralogy and moisture; granule stone/coating/colour/grading; actual bottom release material; unmodified non-self-adhered solid roll terminal; wound dimensions and calibrated single-face area; net product mass and measured moisture; first complete quality-release gate and Q; reject/sample/rework dispositions; raw/WIP/FG/packaging/asset opening and closing inventories; cohort inherited burden vector and service horizon; actual heat source and cooling route; provider geography and native identity restrictions; measured air/liquid species and discharge media; supplier-included ingress ownership; actual product tests with no inferred rating/life |

All qualifiers must be declared in dataset metadata, product/flow description or equivalent complete consumer context. Missing qualifiers leave a concrete dataset incomplete. Read this reference with the complete process and flow-card restrictions; the native family name alone establishes no applicability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_area | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Q = sum of individually measured single-face projected material areas at unique first complete quality release. Use cp_release; preserve selvage as material area. No overlap deduction, double-face area or nominal roof coverage. |
| geometry | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Use calibrated length times width only for proven rectangular unwound sheet. For variable width or cutouts integrate measured widths/traceable drawing geometry. Record winding length calibration and defects before acceptance; no bounding-box approximation for nonrectangles. |
| material_mass | roofing_mat; coating_asphalt; limestone_filler; roofing_granule; back_sand; diesel_fuel; cooling_water; cleaning_water; repair_water; steam_supply; hotwater_supply; lubricant; thermal_oil; filter_bag; cutoff_knife; bearing; line_asset; air_o2; air_n2; air_ar; air_h2o; air_co2; roll_scrap; granule_waste; filter_cake; wastewater; spent_filter; spent_oil; spent_thermal; old_knife; old_bearing; retired_line; condensate_return; hotwater_return; co2_fossil; co_air; so2_air; toluene_air; oxygen_out; nitrogen_out; argon_out; water_vapour; co2_passthrough; no_air; no2_air; methane_air; benzene_air; quartz_air; calcite_air; pack_paper_p; pack_paper_i; pack_paper_er; pack_paper_s; pack_paper_eo; pack_paper_w; pack_film_p; pack_film_i; pack_film_er; pack_film_s; pack_film_eo; pack_film_w; pack_pallet_p; pack_pallet_i; pack_pallet_er; pack_pallet_s; pack_pallet_eo; pack_pallet_w; pack_core_p; pack_core_i; pack_core_er; pack_core_s; pack_core_eo; pack_core_w; pack_strap_p; pack_strap_i; pack_strap_er; pack_strap_s; pack_strap_eo; pack_strap_w; service_diesel; service_water; released_roll_waste; service_wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Mass rules apply only to mass ledgers. Measure full wet/as-received mass and moisture independently; bound moisture, free water, reaction water, vapour and entrainment differ. Net product excludes removable packaging. Measure same-configuration kg/m2 or kg/roll using calibrated scales and matched projected areas; no numeric M or density is supplied. |
| native_units | all inventory rows | Actual native extensive property | native | Mass/kg never constrains MJ, kWh or m3. Preserve each flow’s native extensive property. Convert electricity kWh to MJ by 3.6 once; fuel volume needs its own observed state/composition/density and heating-value basis. Number of items/Item(s) and item are the same physical unit with factor 1, never a guessed kg/item. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased complete cured glass-fibre mat, preprocessed roofing coating asphalt, separately purchased filler and coated granules at receipt; no purchased finished roll repacking |
| starting_condition_role | Foreground production from burden-bearing materials; upstream processing remains in compatible provider datasets |
| product_classification_scope | One narrow 37930 manufactured-article route; UN notes state a title, not a shingle or membrane recipe, while 37940 is separately titled mixtures |
| recursive_input_rule | No same-category finished-roll input substitutes for whole manufacture; actual supplied intermediate needs its inherited burden, transfer state and additional operations; materially different inputs require scope review |
| upstream_dataset_requirement | One provider owner for each whole material/formulation, actual route/state/geography and transport gate; collect missing primary supply evidence and disclose uncertainty |
| disclosure | First-release area Q, material gate, all stock and inherited-vector bridges, actual utility/carrier conventions, gross packaging legs and original-cohort service horizon |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | Cover receipt/storage and actual preparation of complete materials, filler conditioning/mixing, whole-mat asphalt impregnation/coating, mineral surfacing/backsurfacing, cooling, trim/cut/wind and first complete QC release. Record all failure/zero-output, startup/shutdown, idle, cleanup, unreleased rework, dust/water controls and their utilities/wastes. No onsite asphalt oxidation, mat formation, granule coating, polymer modification, shingle lamination or roof installation is inferred. | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| b_owner | all inventory rows | Purchase a complete cured mat or externally filled coating once with all embedded binder, additives, carrier water and filler as subledgers only. For actual onsite filled coating, collect every separately purchased ingredient and real heating/mixing losses. When a complete filled formulation is supplied, add its own single atomic identity and suppress only its included ingredient purchases. Do not suppress separate new material/water because it remains in closing stock; any actual unlisted material or species must be added. | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| b_gate | finished_roll | Q is the sum of actual single-face projected material area of complete rolls at their unique first quality release. Closing FG already first-released is included in Q; do not add closing FG again as production or subtract its manufacturing burden. Reinspection, dispatch, external return and post-release processing never create a new first-release output. Maintain gross shipments/returns and FG changes by actual area, mass, configuration and moisture, without treating returned mass as unchanged original delivery. | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| b_vectors | manufacture | For each exchange-specific inherited burden vector, use opening raw/WIP/unassigned stores plus current attributable burden, less closing raw/WIP and genuinely unused/unassigned stores, plus legitimate incoming transfers and less only justified outgoing functional/cohort transfers. Closing manufacturing B excludes already released FG. Retain rejects, samples, ordinary waste and their treatment burdens even if sold or exported; a real other cohort/function and justified handover/allocation are needed for one vector transfer. Internal rework carries its vector and only real additional work; no repeated upstream charge and no second stock correction. | `ilcd-detailed-2010` |
| b_service | service | Retain actual storage/packing/handling/dispatch and permitted post-release work separately against original cohort Q and observed horizon, including service on FG still stored. Only unused/unassigned service/charge carries forward. Postwork needs manufacturer/specification permission, tests, acceptance and disposition; damaged roll is not assumed restorable. Keep old/new parts, every water phase and new losses atomic. At consolidation cancel internal first-release transfers once; do not sum manufacturing Q and closing FG as independent products. | `arma-residential-manual-2014`; `ilcd-detailed-2010` |
| b_physical | all inventory rows | Maintain independent mass and relevant element balances at manufacturing, FG/service and combined facility gates. Manufacturing physical closing stock includes raw/WIP/unassigned stores and applicable installed parts/fluids, but released product leaves this gate once, including its later closing FG. The combined gate instead includes opening/closing FG, actual gross external roll legs, packaging, assets, wet stocks, air species and carrier water. Cancel only internal transfers. Gross physical amounts are never scaled by burden allocation shares. Require independent composition/species/water-state evidence; one residual cannot fit two unknowns. | `ilcd-detailed-2010` |
| b_pack | service | This ledger spans receipt and actual attachment before or after quality release; each actual packaging operation is assigned once to its recorded manufacturing/cohort-service gate. For each packaging material separately: opening empty + attached WIP/FG + reusable stock + P + I + ER = closing empty + attached WIP/FG + reusable stock + S + EO + W, in consistent measured mass/state. P is paid standalone or bundled, I first non-purchased external ingress, ER external return received, S packaging on gross physical dispatch, EO external return sent, W waste. Internal reuse cancels; P/I whole-article contents and six legs are deduplicated only against other incoming/outgoing terms. Preserve actual new influx and full closing wet mass together. Do not put packaging in Q or buy reused assets again; upstream owner once, no automatic coproduct or credit. | `arma-residential-manual-2014`; `ilcd-detailed-2010` |
| b_airwater | manufacture | Retain actual gas species and phases for inlet air, exhaust, cooling evaporation, condensate, entrainment, liquid transfers and treatment. Integrate genuine rates over their measured time only; an integrated gas/liquid volume is not multiplied by time again. Use independent substance/state-specific density, measured thermal state and enthalpy. Steam/hot-water carrier kg and purchased heat MJ are linked without double purchase or invented boiler. VOC/PAH/PM/COD/NOx totals remain indicators until species are independently identified; unknown speciation is not a zero or a fabricated molecule. | `arma-residential-manual-2014`; `ilcd-detailed-2010` |
| b_assets | manufacture | Keep physical equipment/tooling inventory separate from attributable current service burden. Preserve opening/closing installed mass, each actual new/old repair part, lubricants and water with their real X_in/X_out. X terms deduplicate only other gross incoming/outgoing terms, never remove an influx because its material remains installed. No fixed service life, universal wear rate or whole machine per m2. Collect actual offsite freight and outsourced operations as separately identified service atoms with gross load/distance/mode and provider boundaries; supplier-included service is owned once. | `ilcd-detailed-2010` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-detailed-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete roll manufacture and first release | required | Declared unmodified non-self-adhered glass-mat mineral route | reference_product | Original-cohort first-release Q m2 |
| service | Packaging stewardship and post-release services | required | Actual services and horizon; individual atoms may be demonstrably absent | supporting_process | Original cohort Q m2; separate incremental service ledger |

All ordinary mass cards are specific physical exchanges, while service/asset burden allocation is a separate vector ledger. Each row requires raw collection even when its quantity is not yet known. Apply the applicable conversion/allocation/stock rules before producing the one normalize_once result; the cards reuse that result. Conditional absence requires evidence, not a zero placeholder. Add every actual unlisted atom (including transport, cleaning chemicals, thermal carriers, refrigerants, packaging or emissions) before asserting inventory completeness.

### Process: Complete roll manufacture and first release (`manufacture`)

#### Inputs

##### Product flows

###### Cured glass-fibre roofing reinforcement mat (`roofing_mat`)

One complete purchased wet-laid and binder-cured glass-fibre roofing mat, including its binder and additives once. Obtain supplier composition, cured/dry supply state, moisture, areal mass and roofing suitability. Wet uncured wood-fibre pressing mat, loose glass fibre and bare paper are incompatible; do not buy the embedded binder or mat-forming water again.

- Selected flow: Cured glass-fibre roofing reinforcement mat
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `arma-residential-manual-2014`

###### Purchased roofing-grade coating asphalt (`coating_asphalt`)

One purchased petroleum asphalt supply, already processed to the required coating grade; no onsite air blowing in this profile. Native Product identity describes viscous petroleum asphalt at plant with refining and waterproofing uses; it does not establish oxidation grade or a roofing-specific provider. Require actual supplier oxidation/grade/state and upstream refining/blowing burden. Coal tar, natural asphaltic rock, paving mix and a whole filled formulation are different identities.

- Selected flow: Asphalt `4e256aeb-9d90-4e11-9e58-4299c38c424b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `arma-residential-manual-2014`

###### Ground limestone coating filler (`limestone_filler`)

Only actual separately purchased ground limestone stabilizer. Record lithology, mineralogy, grading, moisture and formulation mass. Source examples do not impose a recipe or a fixed ratio. Native candidate with CAS 587-26-8 conflicts with limestone chemistry and is not bound. If actual slate or another filler is used, add its own atomic card and upstream owner rather than merging it here.

- Selected flow: Ground limestone coating filler
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `arma-residential-manual-2014`

###### Ceramic-coated mineral roofing granule (`roofing_granule`)

One complete supplied ceramic-coated roofing granule preparation. Record actual stone/mineral type, coating composition, colour, grain grading, moisture and provider. Mineral carrier and coating assays are subordinate ledgers, not additional purchases. Uncoated generic rock, foundry resin-coated sand and road-plant aggregate cannot identify this prepared roofing material; no stone type or pigment recipe is invented.

- Selected flow: Ceramic-coated mineral roofing granule
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `arma-residential-manual-2014`; `tarco-fiberglass-msr`

###### Silica sand backsurfacing powder (`back_sand`)

Conditional single separately supplied silica sand used as bottom parting material; collect actual mineral phase, grade, particle structure, moisture and supplier route. No assumption that all bottom release material is silica. The queried sand has polymorph aliases and divergent EN/ZH preparation routes; remain unbound until compatible native and supplier identity is established.

- Selected flow: Silica sand backsurfacing powder
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `arma-residential-manual-2014`; `tarco-fiberglass-msr`

###### Manufacturing electricity (`make_power`)

Meter coating preparation/heating, drives, filler conditioning, dust control, cooling, winding/cutting, inspection and attributable idle/start/stop/cleaning. Selected native Product is China grid-average consumption supply below 1 kV, Net calorific value/MJ. Use only when actual supply geography, voltage and provider agree; otherwise obtain a different atomic identity. Convert observed kWh to MJ once using 3.6, without fuel or emission defaults.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `arma-residential-manual-2014`

###### Pipeline natural gas fuel (`gas_fuel`)

Conditional actual heater fuel. Collect integrated volume, T/P/Z, wet/dry basis, composition, measured fuel-specific density, heating value and provider. No methane purity from a name: broad native CAS/methane aliases conflict with an unspecified mixture, and the other candidate is a fixed 2012 Jiangsu CHP case; neither is adopted. Fuel mass and heat are linked ledgers of one purchase.

- Selected flow: Pipeline natural gas fuel
- Flow property / unit: Volume / m3
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `arma-residential-manual-2014`

###### Manufacturing handling diesel (`diesel_fuel`)

Conditional measured fuel for actual handling or backup equipment; do not infer installation. Native Product/Mass/kg leaves grade, formulation, refinery route, geography, density, heating value and provider unspecified. Obtain them for the actual supply and distinguish fossil/biogenic carbon; no fixed CO2 factor.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `arma-residential-manual-2014`

###### Cooling and spray make-up water (`cooling_water`)

Actual municipal potable water used for this named function, not internal recirculation. Native Product is treated municipal supply, Mass/kg, with no fixed geography; provider treatment must match. Its secondary Volume coefficient is not a measured density. Preserve actual incoming water even when retained in closing wet stock or installed fluid; record its phase and destination, without duplicating water already inside a whole purchased formulation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `arma-residential-manual-2014`

###### Manufacturing cleaning water (`cleaning_water`)

Actual municipal potable water used for this named function, not internal recirculation. Native Product is treated municipal supply, Mass/kg, with no fixed geography; provider treatment must match. Its secondary Volume coefficient is not a measured density. Preserve actual incoming water even when retained in closing wet stock or installed fluid; record its phase and destination, without duplicating water already inside a whole purchased formulation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `arma-residential-manual-2014`

###### Maintenance and repair water (`repair_water`)

Actual municipal potable water used for this named function, not internal recirculation. Native Product is treated municipal supply, Mass/kg, with no fixed geography; provider treatment must match. Its secondary Volume coefficient is not a measured density. Preserve actual incoming water even when retained in closing wet stock or installed fluid; record its phase and destination, without duplicating water already inside a whole purchased formulation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `arma-residential-manual-2014`

###### Purchased water steam heat carrier (`steam_supply`)

Conditional only with actual external steam supply; do not invent a boiler. Record steam carrier kg, temperature, pressure, dryness, enthalpy, return convention and purchased useful heat MJ. Carrier mass is not MJ; one provider owns water and generation burden once. Separate condensate return and losses, and never duplicate the heat as another purchased carrier.

- Selected flow: Purchased water steam heat carrier
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources: `arma-residential-manual-2014`

###### Purchased hot-water heat carrier (`hotwater_supply`)

Conditional actual external hot water; record separate carrier mass, inlet/outlet thermal states, enthalpy difference and provider water/energy convention. Internal water circulation and its internally generated heat are not additional purchases.

- Selected flow: Purchased hot-water heat carrier
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources: `arma-residential-manual-2014`

###### Formulated machine lubricating oil (`lubricant`)

Only actual supplied lubricating formulation; collect base oil, additives, grade, measured stock/charge and leakage. No PAO, grease or dose is inferred from generic oil search.

- Selected flow: Formulated machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `arma-residential-manual-2014`

###### Mineral-oil heat-transfer formulation (`thermal_oil`)

Conditional actual indirect-heating loop fluid, not quenching oil or purchased heat. Record complete formulation, installed charge, replenishment, removal and loss; count one upstream owner, preserve full closing fluid and real influx.

- Selected flow: Mineral-oil heat-transfer formulation
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `arma-residential-manual-2014`

###### Polyester dust-filter bag (`filter_bag`)

One complete actual polyester filter bag; bare polyester fibre/mesh does not establish finished filter identity. Collect material, coating, use and replacement, capture retained dust separately without double mass.

- Selected flow: Polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `arma-residential-manual-2014`

###### Steel roll cut-off knife (`cutoff_knife`)

Actual complete steel cut-off knife for the roll line. Record alloy/coating, new and installed stock, sharpening, replacement and removed knife mass; no universal wear rate or per-m2 whole knife.

- Selected flow: Steel roll cut-off knife
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `arma-residential-manual-2014`

###### Steel machine bearing (`bearing`)

Conditional actual replacement bearing; collect complete construction, supplier, new/old parts and installed stock. An unlisted real replacement part requires a separate card.

- Selected flow: Steel machine bearing
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `arma-residential-manual-2014`

###### Asphalt coating and winding line (`line_asset`)

Physical asset acquisition/retirement and installed stock are separate from current cohort service burden. Collect actual construction, commissioning, maintenance, capacity, observed usage and defensible service allocation; do not prescribe a lifetime or charge one whole line for each m2.

- Selected flow: Asphalt coating and winding line
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `arma-residential-manual-2014`

##### Waste flows

##### Elementary flows

###### Atmospheric dioxygen intake (`air_o2`)

Gross actual air constituent, CAS 7782-44-7, for actual combustion or ventilation. Determine inlet flow/composition and state; atmospheric CO2 is not generated fossil CO2. Use neither a purchased pure gas nor an emissions-to-air UUID for resource intake. Keep the whole-air measurement as a reconciliation subtotal, never an additional molecular exchange.

- Selected flow: Atmospheric dioxygen intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Atmospheric dinitrogen intake (`air_n2`)

Gross actual air constituent, CAS 7727-37-9, for actual combustion or ventilation. Determine inlet flow/composition and state; atmospheric CO2 is not generated fossil CO2. Use neither a purchased pure gas nor an emissions-to-air UUID for resource intake. Keep the whole-air measurement as a reconciliation subtotal, never an additional molecular exchange.

- Selected flow: Atmospheric dinitrogen intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Atmospheric argon intake (`air_ar`)

Gross actual air constituent, CAS 7440-37-1, for actual combustion or ventilation. Determine inlet flow/composition and state; atmospheric CO2 is not generated fossil CO2. Use neither a purchased pure gas nor an emissions-to-air UUID for resource intake. Keep the whole-air measurement as a reconciliation subtotal, never an additional molecular exchange.

- Selected flow: Atmospheric argon intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Atmospheric water-vapour intake (`air_h2o`)

Gross actual air constituent, CAS 7732-18-5, for actual combustion or ventilation. Determine inlet flow/composition and state; atmospheric CO2 is not generated fossil CO2. Use neither a purchased pure gas nor an emissions-to-air UUID for resource intake. Keep the whole-air measurement as a reconciliation subtotal, never an additional molecular exchange.

- Selected flow: Atmospheric water-vapour intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Atmospheric carbon-dioxide intake (`air_co2`)

Gross actual air constituent, CAS 124-38-9, for actual combustion or ventilation. Determine inlet flow/composition and state; atmospheric CO2 is not generated fossil CO2. Use neither a purchased pure gas nor an emissions-to-air UUID for resource intake. Keep the whole-air measurement as a reconciliation subtotal, never an additional molecular exchange.

- Selected flow: Atmospheric carbon-dioxide intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

#### Outputs

##### Product flows

###### First-released complete roll roofing (`finished_roll`)

One complete manufactured glass-mat asphalt membrane with ceramic mineral top granules and actual mineral bottom parting material, cooled, cut to declared length, wound and quality accepted. Native Product family explicitly includes roofing felt/roll roofing, Area/m2 at plant; liquid primer/emulsion examples do not define this terminal. Restrict to this complete solid roll with actual supplier/design/material/state evidence; no generic membrane provider, chemistry, thickness, life, certification or installed system is inferred. Exclude removable core/wrapper/pallet from product mass and area.

- Selected flow: Bituminous waterproofing membrane `78f09f81-deb9-42dd-9418-7860faee0a2e`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `arma-residential-manual-2014`; `tarco-fiberglass-msr`

###### Steam condensate returned to supplier (`condensate_return`)

Only actual external carrier return. Collect measured kg, phase, T/P, enthalpy, quality and contractual provider convention. It is a physical Product return with no automatic credit or negative purchase; retain separate drain/vent/carryover losses and avoid counting returned water as both waste and return.

- Selected flow: Steam condensate returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources: `arma-residential-manual-2014`

###### Heat-exchange water returned to supplier (`hotwater_return`)

Only actual external carrier return. Collect measured kg, phase, T/P, enthalpy, quality and contractual provider convention. It is a physical Product return with no automatic credit or negative purchase; retain separate drain/vent/carryover losses and avoid counting returned water as both waste and return.

- Selected flow: Heat-exchange water returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_heat`
- Sources: `arma-residential-manual-2014`

##### Waste flows

###### Unreleased fiberglass asphalt roll offcut (`roll_scrap`)

Actual full composite offcut/rejected material, retaining glass mat, asphalt and mineral mass, contamination and moisture. Include failed batches, samples and cleanup residue with separate measured dispositions; sale or offsite treatment does not remove manufacturing/treatment burden.

- Selected flow: Unreleased fiberglass asphalt roll offcut
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Discarded ceramic-coated roofing granule (`granule_waste`)

Actual separately collected unused or spilled coated granule. Internal recovered granules return within the boundary and cancel, with actual recovery energy/loss retained; no new purchased granule or automatic coproduct.

- Selected flow: Discarded ceramic-coated roofing granule
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Asphalt-contaminated mineral filter cake (`filter_cake`)

Actual separately removed cake with independently measured wet mass, liquid fraction, mineral and organic composition; no COD-to-compound conversion. Do not also count its retained liquid or solids as another outgoing stream.

- Selected flow: Asphalt-contaminated mineral filter cake
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Asphalt-contaminated cooling and wash water (`wastewater`)

Actual liquid stream sent to a named treatment recipient; split distinct quality/recipient streams into new cards. Measure integrated liquid volume and substance-specific state/density or weighed mass, aqueous species and transferred sludge. This is a waste transfer, not a direct freshwater elementary release.

- Selected flow: Asphalt-contaminated cooling and wash water
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Spent polyester dust-filter bag (`spent_filter`)

Actual spent bag with retained material identified; use a disjoint bag/dust inventory so no retained dust is counted twice. Record actual receiver and treatment burden.

- Selected flow: Spent polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Used machine lubricating oil (`spent_oil`)

Native Waste/Mass/kg at generation, petroleum-based or synthetic lubricating oil, treatment unspecified. Restrict to actually collected used liquid oil with composition and receiver; not grease, thermal fluid or contaminated cloth. Separate retained stock and actual leakage.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Spent mineral-oil heat-transfer formulation (`spent_thermal`)

Conditional actual removed heat-transfer fluid, named formulation and contamination; do not map quench oil or assume it is ordinary used lubricant.

- Selected flow: Spent mineral-oil heat-transfer formulation
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Discarded steel roll cut-off knife (`old_knife`)

Actual removed knife including coating and adhered material; old parts leave gross even when a new part remains in installed closing stock.

- Selected flow: Discarded steel roll cut-off knife
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Discarded steel machine bearing (`old_bearing`)

Conditional actual removed bearing, retained oil and material disjointly assigned; no assumed recycling credit.

- Selected flow: Discarded steel machine bearing
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

###### Retired asphalt coating and winding line (`retired_line`)

Actual physical retirement and destination, with components/fluids split where independently transferred; distinguish asset physical mass from already allocated historical service burden.

- Selected flow: Retired asphalt coating and winding line
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `arma-residential-manual-2014`

##### Elementary flows

###### Generated fossil carbon dioxide (`co2_fossil`)

Only independently determined generated fossil CO2, CAS124-38-9, air unspecified. Native dry-ice/ion aliases do not establish those phases; require molecular gaseous CO2 and fossil origin. Exclude atmospheric passthrough and any biogenic/mineral origin. No emission factor or complete combustion is assumed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Fossil carbon monoxide to air (`co_air`)

Actual fossil molecular CO, CAS630-08-0, air unspecified; broad exhaust/flue-gas aliases are not total flue-gas identity. Quantify CO separately from CO2 and organic carbon.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Sulfur dioxide to air (`so2_air`)

Actual molecular SO2 gas, CAS7446-09-5, air unspecified; synonyms for preparations/fermentation agents do not authorize mixed formulation emissions. SOx reported as SO2-equivalent is not automatically SO2 mass.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Toluene to air (`toluene_air`)

Conditional individually identified molecular toluene, CAS108-88-3, air unspecified; excludes isotopic tracer aliases, total VOC and mixed technical solvent. Determine actual mass/speciation and source; no occurrence or release factor is prescribed.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Dioxygen in exhaust (`oxygen_out`)

Actual molecular gaseous O2, CAS7782-44-7, air unspecified. Native ion/liquid/singlet aliases do not describe this exchange; measure residual O2 and distinguish inlet, consumed and released amounts.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Dinitrogen in exhaust (`nitrogen_out`)

Actual molecular gaseous N2, CAS7727-37-9, air unspecified; not total nitrogen, nitrate, ammonia or NOx. Preserve gross passthrough mass separately from generated nitrogen species.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Argon in exhaust (`argon_out`)

Actual specific constituent, CAS 7440-37-1, with measured phase, discharge compartment and time coverage. Air argon passthrough, not a purchased shielding-gas product. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Argon in exhaust
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Water vapour to air (`water_vapour`)

Actual specific constituent, CAS 7732-18-5, with measured phase, discharge compartment and time coverage. Separate actual inlet humidity, free-water evaporation and combustion/reaction water origins in linked subledgers; never count a liquid entrainment droplet as vapour. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Atmospheric carbon dioxide passthrough (`co2_passthrough`)

Actual specific constituent, CAS 124-38-9, with measured phase, discharge compartment and time coverage. Actual inlet atmospheric CO2 leaving the exhaust, excluded from generated fossil mass. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Atmospheric carbon dioxide passthrough
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Nitrogen monoxide to air (`no_air`)

Actual specific constituent, CAS 10102-43-9, with measured phase, discharge compartment and time coverage. Measure NO individually; total NOx as NO2-equivalent is not actual NO or NO2 mass. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Nitrogen dioxide to air (`no2_air`)

Actual specific constituent, CAS 10102-44-0, with measured phase, discharge compartment and time coverage. Require actual NO2 molecule/state; N2O4-only aliases cannot establish this identity. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Methane to air (`methane_air`)

Actual specific constituent, CAS 74-82-8, with measured phase, discharge compartment and time coverage. Conditional measured methane from actual fuel slip or other identified source, not total hydrocarbons. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Benzene to air (`benzene_air`)

Actual specific constituent, CAS 71-43-2, with measured phase, discharge compartment and time coverage. Conditional individually measured benzene, not VOC, PAH or benzene/aniline mixture. Queried aliases include mixtures; unresolved until compatible exact native evidence. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Benzene to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Crystalline quartz particulate to air (`quartz_air`)

Actual specific constituent, CAS 14808-60-7, with measured phase, discharge compartment and time coverage. Only individually measured quartz particle phase and size partition; total PM or silica polymorph total is not quartz mass. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Crystalline quartz particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

###### Calcite particulate to air (`calcite_air`)

Actual specific constituent, CAS 471-34-1, with measured phase, discharge compartment and time coverage. Only independently identified calcite in actual discharged dust; limestone or ceramic-granule dust has other species requiring separate cards. Any actual additional molecular or particulate species needs a separate card; unknown speciation remains a data gap, not zero.

- Selected flow: Calcite particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `arma-residential-manual-2014`

### Process: Packaging stewardship and original-cohort post-release service (`service`)

#### Inputs

##### Product flows

###### Kraft-paper roll wrapper — separately purchased (`pack_paper_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Kraft-paper roll wrapper — separately purchased
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Kraft-paper roll wrapper — supplier-included incoming (`pack_paper_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Kraft-paper roll wrapper — supplier-included incoming
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Kraft-paper roll wrapper — external return received (`pack_paper_er`)

ER is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Kraft-paper roll wrapper — external return received
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polyethylene wrapping film — separately purchased (`pack_film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native PE film CAS9002-88-4, Mass/kg; luggage CPC mismatch is isolated from coherent PE-film name/CAS/comment. PET comparison is not PET identity. Confirm actual PE grade/composition/provider; multilayer coated films require a different identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polyethylene wrapping film — supplier-included incoming (`pack_film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native PE film CAS9002-88-4, Mass/kg; luggage CPC mismatch is isolated from coherent PE-film name/CAS/comment. PET comparison is not PET identity. Confirm actual PE grade/composition/provider; multilayer coated films require a different identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polyethylene wrapping film — external return received (`pack_film_er`)

ER is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native PE film CAS9002-88-4, Mass/kg; luggage CPC mismatch is isolated from coherent PE-film name/CAS/comment. PET comparison is not PET identity. Confirm actual PE grade/composition/provider; multilayer coated films require a different identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Complete wooden load pallet — separately purchased (`pack_pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native family is manufactured finished wooden load platforms, Mass/kg; restrict to one complete wooden pallet. Actual dimensions, species, nails, moisture, treatment and supplier determine compatibility; not EURO by default or loose lumber. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Complete wooden load pallet — supplier-included incoming (`pack_pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native family is manufactured finished wooden load platforms, Mass/kg; restrict to one complete wooden pallet. Actual dimensions, species, nails, moisture, treatment and supplier determine compatibility; not EURO by default or loose lumber. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Complete wooden load pallet — external return received (`pack_pallet_er`)

ER is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native family is manufactured finished wooden load platforms, Mass/kg; restrict to one complete wooden pallet. Actual dimensions, species, nails, moisture, treatment and supplier determine compatibility; not EURO by default or loose lumber. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Paperboard winding core — separately purchased (`pack_core_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native cylindrical paperboard tube/core, Mass/kg, at plant; actual ply, adhesive, dimensions, moisture and provider required. A mandrel that stays on the machine is not a delivered core. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Paperboard winding core — supplier-included incoming (`pack_core_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native cylindrical paperboard tube/core, Mass/kg, at plant; actual ply, adhesive, dimensions, moisture and provider required. A mandrel that stays on the machine is not a delivered core. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Paperboard winding core — external return received (`pack_core_er`)

ER is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native cylindrical paperboard tube/core, Mass/kg, at plant; actual ply, adhesive, dimensions, moisture and provider required. A mandrel that stays on the machine is not a delivered core. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polypropylene packing strap — separately purchased (`pack_strap_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polypropylene packing strap — separately purchased
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polypropylene packing strap — supplier-included incoming (`pack_strap_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polypropylene packing strap — supplier-included incoming
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polypropylene packing strap — external return received (`pack_strap_er`)

ER is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polypropylene packing strap — external return received
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Post-release service electricity (`service_power`)

Only actual incremental storage, packing, handling, dispatch and permitted post-release work, assigned to original first-release cohorts and a declared observation horizon. Same native CN below-1-kV grid-average/MJ restriction as the manufacturing meter; never infer site compatibility. Performed service is retained even while its FG remains in closing stock; only unused/unassigned service or charge may carry forward.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `arma-residential-manual-2014`; `ilcd-detailed-2010`

###### Post-release handling diesel (`service_diesel`)

Actual incremental service fuel by original cohort, separate from manufacturing fuel and supplier-included transport. Native diesel Mass/kg leaves grade, blend, density, heating value, refinery route, geography and provider unspecified; actual supplier evidence required.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `arma-residential-manual-2014`; `ilcd-detailed-2010`

###### Post-release service water (`service_water`)

Only actual incremental water for permitted work or packaging/asset service. Same treated municipal supply Mass/kg restriction as manufacture, with actual provider compatibility and independently measured density for any volume conversion; retain influx and full closing wet mass together.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `arma-residential-manual-2014`; `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Kraft-paper roll wrapper — leaving with gross physical dispatch (`pack_paper_s`)

S is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Kraft-paper roll wrapper — leaving with gross physical dispatch
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Kraft-paper roll wrapper — external return sent (`pack_paper_eo`)

EO is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Kraft-paper roll wrapper — external return sent
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polyethylene wrapping film — leaving with gross physical dispatch (`pack_film_s`)

S is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native PE film CAS9002-88-4, Mass/kg; luggage CPC mismatch is isolated from coherent PE-film name/CAS/comment. PET comparison is not PET identity. Confirm actual PE grade/composition/provider; multilayer coated films require a different identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polyethylene wrapping film — external return sent (`pack_film_eo`)

EO is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native PE film CAS9002-88-4, Mass/kg; luggage CPC mismatch is isolated from coherent PE-film name/CAS/comment. PET comparison is not PET identity. Confirm actual PE grade/composition/provider; multilayer coated films require a different identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Complete wooden load pallet — leaving with gross physical dispatch (`pack_pallet_s`)

S is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native family is manufactured finished wooden load platforms, Mass/kg; restrict to one complete wooden pallet. Actual dimensions, species, nails, moisture, treatment and supplier determine compatibility; not EURO by default or loose lumber. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Complete wooden load pallet — external return sent (`pack_pallet_eo`)

EO is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native family is manufactured finished wooden load platforms, Mass/kg; restrict to one complete wooden pallet. Actual dimensions, species, nails, moisture, treatment and supplier determine compatibility; not EURO by default or loose lumber. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Paperboard winding core — leaving with gross physical dispatch (`pack_core_s`)

S is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native cylindrical paperboard tube/core, Mass/kg, at plant; actual ply, adhesive, dimensions, moisture and provider required. A mandrel that stays on the machine is not a delivered core. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Paperboard winding core — external return sent (`pack_core_eo`)

EO is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native cylindrical paperboard tube/core, Mass/kg, at plant; actual ply, adhesive, dimensions, moisture and provider required. A mandrel that stays on the machine is not a delivered core. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polypropylene packing strap — leaving with gross physical dispatch (`pack_strap_s`)

S is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polypropylene packing strap — leaving with gross physical dispatch
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polypropylene packing strap — external return sent (`pack_strap_eo`)

EO is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polypropylene packing strap — external return sent
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

##### Waste flows

###### Kraft-paper roll wrapper — discarded (`pack_paper_w`)

W is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Kraft-paper roll wrapper — discarded
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polyethylene wrapping film — discarded (`pack_film_w`)

W is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native PE film CAS9002-88-4, Mass/kg; luggage CPC mismatch is isolated from coherent PE-film name/CAS/comment. PET comparison is not PET identity. Confirm actual PE grade/composition/provider; multilayer coated films require a different identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polyethylene wrapping film — discarded
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Complete wooden load pallet — discarded (`pack_pallet_w`)

W is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native family is manufactured finished wooden load platforms, Mass/kg; restrict to one complete wooden pallet. Actual dimensions, species, nails, moisture, treatment and supplier determine compatibility; not EURO by default or loose lumber. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Complete wooden load pallet — discarded
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Paperboard winding core — discarded (`pack_core_w`)

W is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Native cylindrical paperboard tube/core, Mass/kg, at plant; actual ply, adhesive, dimensions, moisture and provider required. A mandrel that stays on the machine is not a delivered core. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Paperboard winding core — discarded
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Polypropylene packing strap — discarded (`pack_strap_w`)

W is a gross physical leg for this material, with empty, attached WIP/FG and reusable opening/closing stock recorded separately. New material retained in closing stock still has real influx. Supplier-included I retains physical mass and one upstream owner; no second purchase. Actual single named packaging material, formulation and supplier required; no generic packaging-material bundle identity. For W retain actual contamination/recipient; a clean product UUID is not a waste identity.

- Selected flow: Polypropylene packing strap — discarded
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `arma-residential-manual-2014`

###### Discarded previously released fiberglass asphalt roll (`released_roll_waste`)

Actual post-release damaged, sampled or returned roll discarded, with current wet mass and original cohort. No new manufacture Q or automatic reversal/credit. Post-release processing requires manufacturer/specification permission and postwork tests/acceptance/disposition; damage is not assumed repairable.

- Selected flow: Discarded previously released fiberglass asphalt roll
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `arma-residential-manual-2014`; `ilcd-detailed-2010`

###### Post-release asphalt-contaminated wash water (`service_wastewater`)

Actual incremental collected liquid with recipient, composition, current state and mass, assigned to original cohort; do not hide extra water/losses inside a returned-product mass equivalence. Add actual service fuels, emissions, parts and wastes as separate atoms where present.

- Selected flow: Post-release asphalt-contaminated wash water
- Flow property / unit: Mass / kg
- Amount rule: Reuse this row’s single normalized physical result x; retain gross physical records and the separately attributed burden vector.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `arma-residential-manual-2014`; `ilcd-detailed-2010`

##### Elementary flows

The supporting packaging ledger spans actual receipt, attachment before or after release, stock and all external legs. It is not a claim that supplier-included ingress occurs after quality release. Assign each actual packaging operation to its recorded manufacturing/cohort service gate once; document any pre-release attachment and cancel internal package transfers.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_framework | all inventory rows | Use this attributional profile only in a study context requiring allocation; do not freely substitute consequential avoided-production credits. Identify actual functions and gates before allocation. | `ilcd-detailed-2010` |
| a_hierarchy | all inventory rows | First collect dedicated subprocesses and apply real or virtual subdivision. Then determine each remaining exchange’s physically determining causal relationship, including service duration and its true limiting capacity where relevant. No universal mass, area or economic key. Only genuinely inseparable residual common-process burdens use contemporaneous market value of actual cofunctions at their common process gate and actual state, with price/source/time/currency and sensitivity disclosed. | `ilcd-detailed-2010` |
| a_waste | all inventory rows | A receipt, waste sale or external recycling route is not proof of an independent function or avoided burden. Retain ordinary manufacturing rejects, cleanup, samples and treatment. A justified real other cohort/function handover may transfer its burden vector once, while gross physical mass still balances unscaled; no fixed allocation proportions or automatic credits. | `ilcd-detailed-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

These protocols collect raw original extensive units, not pre-divided unit results. The aggregation_rule label states the final reporting basis only; the sole division occurs in normalize_once after unit/rate conversion and attribution. For service records retain the original cohort Q and actual horizon.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | finished_roll | first-release record | lot; configuration; actual single-face area; net product mass; measured moisture; first acceptance timestamp; tests; Q; opening and closing WIP/FG | Calibrate length/width or design-specific area measurement and net weighing; join each unique whole-roll quality-release record. Record all rejects/samples/rework and verify no second first release. | m2; kg | each roll and period closure | Declared manufacturing period and first-release cohorts | Manufacturing line and acceptance gate | per reference flow | Calibration; dimensions; test/acceptance records; unique lot bridge |
| cp_material | manufacture | each named material | raw receipt and stock record | material and lot; supplier; whole formulation owner; received gross and net mass; embedded package I; composition; wet/dry state; opening/closing raw and WIP; inherited exchange vector | Weigh receipts and stocks on calibrated scales; verify supplier specifications and all composition subledgers. Trace actual batch issues, losses and transfers; retain raw amounts before conversion/allocation/normalization. | kg | each receipt, batch and period closure | Complete period including failed and zero-output batches | Receipt through first-release material gate | per reference flow | Scale certificates; stock counts; SDS/specs; moisture; issue/return slips |
| cp_energy | manufacture | each named electricity or fuel | raw meter and fuel record | meter; carrier; original amount/unit; integrated versus rate; time; voltage; geography; composition; T/P/Z; density; heating value; opening/closing stock; phase and cohort | Read calibrated meters and fuel receipts; independently convert actual rate/unit/state and separate manufacturing from service. Record startup/idle/cleanup and dedicated/shared causality before a single normalization. | original kWh; MJ; m3; kg | continuous or each supply and period | Full manufacturing period | Actual line and shared utilities | per reference flow | Meters; invoices; state/composition tests; allocation evidence |
| cp_water | manufacture | each named water function | raw water record | water source; function; original mass or integrated volume; phase; state; independent density; opening/closing wet stock; actual X_in/X_out; internal circulation; drain and evaporation destination | Use calibrated supply/function meters or weighing; close separate water-phase balances using independent sampling. Preserve real influx and complete wet closing mass; remove only duplicate outgoing/incoming representations. | kg; original m3 | continuous, each intervention and closure | Complete manufacturing and maintenance period | Water and wet-stock gates | per reference flow | Meter/scale calibration; sampling; phase/state and stock records |
| cp_heat | manufacture | each external heat carrier and return | raw carrier and heat record | provider; water/generation owner; incoming and returned carrier mass; phase; T/P; dryness; enthalpy; useful heat; drain; vent; stock change | Only actual external supplies; measure each carrier/return and heat at declared thermal states. Reconcile provider convention and internal circulation without duplicate purchase. | kg; MJ | each supply and return with period closure | Actual utility horizon | Supplier to foreground and return gate | per reference flow | Contracts; calibrated mass/thermal meters; enthalpy/state basis |
| cp_asset | manufacture | each named asset or maintenance material | raw asset/part/fluid record | asset/part ID; composition; opening and closing new/installed mass; acquisition; commissioning; usage; service vector; old part out; new part in; water/fluid state; X_in/X_out; repair and retirement | Inventory complete physical assets and each actual intervention; separately establish cohort service burden from observed use and justified allocation. Preserve true inputs plus closing installed wet mass, and avoid duplicating parts/fluids already in a whole asset. | kg; observed service units | each intervention and closure | Asset history and observed service period | Installed and stores inventory | per reference flow | Asset BOM; maintenance records; scales; service/stock bridge |
| cp_waste | manufacture | each named waste | raw waste transfer record | stream; lot; current wet mass; water/solid composition; treatment recipient; sampling; internal recycle; inherited vector; ordinary waste versus genuine other function | Weigh and sample every actual outgoing waste and retained stock; quantify treatment burden and segregated destination. Preserve ordinary rejected-product burdens, and document any legitimate vector handover separately. | kg; original integrated m3 | each stream transfer and closure | Full period including cleaning and failures | Generation, retained stock and named recipient | per reference flow | Weighbridge; analysis; receiver/treatment records; waste stock |
| cp_air | manufacture | each molecular or particulate species | raw species measurement | source; inlet/outlet; actual species and CAS; phase; size bin; medium; integrated gas volume or true flow rate; time; T/P; dry/wet/O2 correction; mass concentration; origin; detection limit; control/capture/bypass | Sample actual point/fugitive inlet and outlet conditions; independently identify species and rate/state conventions. Integrate only true rates; reconcile total/size/phase without overlapping bins or estimating species from VOC/PM/NOx/COD totals. | original concentration and gas units; kg | continuous or representative complete campaigns | All operational phases and actual controls | Actual media and release points | per reference flow | Laboratory methods; calibration; detection limits; original monitor and state records |
| cp_pack | service | each packaging material and each P/I/ER/S/EO/W leg | raw package record | material; composition; upstream owner; opening/closing empty and attached WIP/FG and reusable stock; P; I; ER; S; EO; W; gross physical dispatch; measured moisture; cohort; actual X duplicates ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Count and weigh matched actual packages and all six gross legs; measure mass for the same configuration, water state and range. Record first non-purchased external physical ingress even if included financially; internal reuse cancels and new influx remains with full closing wet mass.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg; actual counts | each movement and closure | Original cohorts and declared service horizon | Empty, attached and reusable package gates | per reference flow | Weigh/count calibration; supplier owner; gross dispatch and return documents |
| cp_service | service | each incremental post-release exchange | raw cohort service record | original cohort; its unique first-release Q; observation horizon; opening/closing FG; gross G and R; actual current mass/area/state; performed service; unused/unassigned charge; permission; posttests; acceptance/disposition; actual new parts/water and losses | Meter/weigh actual incremental cohort services; retain services already performed on closing FG. Trace original burden, permission and postwork tests; do not reconstruct first-release quantities from gross/net delivery or returned weight. | original extensive units | each service and observed horizon closure | Original first-release cohort plus explicit horizon | FG, warehouse, dispatch and permitted postwork | per reference flow | Original acceptance bridge; meters; permission/tests; stock/return/disposition records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| prepare_raw | all inventory rows | Convert raw original units and actual rates to one extensive amount by row before allocation; already integrated quantities have time factor 1. Keep every measured physical gross leg separately. Use independent substance/state density only when mass-volume conversion is needed. | raw_records; conversion_basis; state; time | converted_raw | `ilcd-detailed-2010` |
| cohort_attribution | all inventory rows | Preserve each actual gross physical leg and its recorded cohort assignment; packaging and repair/water legs are never multiplied by environmental-burden shares. Keep its burden vector separate: assign dedicated burdens first, then documented subdivision/causality and only real residual market-value allocation under a_hierarchy. Reconcile exchange-specific opening/closing raw/WIP/unassigned burden vectors and legitimate transfers under b_vectors; no released-FG subtraction, ordinary-waste deduction or second stock correction. A labels each separately identified physical numerator or burden-vector component; never replace one with the other. | converted_raw; allocation_evidence; inherited_vectors; transfer_decisions | A | `ilcd-detailed-2010` |
| release_quantity | finished_roll | Q = sum of calibrated actual single-face projected material areas of uniquely first-released complete rolls. No second release, installed overlap adjustment or packaging area. | cp_release; unique_acceptance; actual_geometry | Q | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| normalize_once | all inventory rows | For Q > 0, x = A / Q once, in each numerator native extensive unit per 1 m2 reference flow; for services use the original cohort Q and actual observed-horizon A. For Q = 0 retain A with no unit result. This is the only A/Q operation for each explicitly labelled physical or burden ledger; amount cards reuse physical x and aggregation reuses that same result. Gross reconciliation records stay unscaled. | A; Q; original_cohort; service_horizon | x | `ilcd-detailed-2010` |
| physical_balances | all inventory rows | At each physical gate: opening full wet stock plus actual gross incoming = closing full wet stock plus actual gross outgoing, with internal transfers cancelled once. Manufacturing, FG/service and combined gates have the distinct stocks specified in b_physical. Package balance uses b_pack independently for each material. Repair-water X terms remove duplicate other flow terms only, not new influx retained in stock. Validate relevant element/species balances independently; no fitted residual for multiple unknowns. | gross_legs; stocks; species; moisture; X_duplicates | physical_balance_report | `ilcd-detailed-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_terminal | finished_roll | Complete solid glass-mat/asphalt/mineral roll identity and unique first QC release, with all qualifiers and actual independent tests. No source default rating or service life. | Supplier specifications; acceptance and geometry evidence |
| dq_raw | all inventory rows | Retain original records, units, calibration, coverage, zero-output intervals, failed batches, detection limits and unknown values. Missing is distinct from measured zero and proven absence. | All collection protocols and original files |
| dq_vectors | all inventory rows | Audit exchange-specific inherited vectors, actual physical gross balances and one normalization separately; packaging/asset service must have one upstream owner and justified original-cohort allocation. | Stock, transfer, allocation and original cohort ledgers |
| dq_identity | all inventory rows | Verify native identity restrictions and actual provider compatibility; unbound atomic input or auxiliary is an ordinary identity gap, not evidence of zero use. A concrete complete-terminal identity conflict is a core hold. | Exact native records and supplier/state evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | Verify whole terminal/material identity, actual Product/Waste/Elementary type, CAS, phase/form, route, geography, compartment and every native property limitation; use exact property-to-unit-group reference units. Selected generic native family does not prove supplier/background applicability. Leave incompatible or unresolved atoms unbound and track them. | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| v_basis | finished_roll | Require all declared qualifiers, complete first-release QC, single projected material area and matching configuration. A rectangle alone permits length times width; arbitrary/irregular geometry needs traceable design-specific measurement. Roof coverage, overlaps, both faces, nominal roll weight and secondary density coefficients cannot define Q. | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| v_accounting | all inventory rows | Require raw original-unit data, unit/rate conversion, justified allocation and inherited vectors before a single A/Q normalization. Collection protocols retain raw records; cards and aggregation reuse that one result. Q=0 retains actual burden but has no unit result. Never divide a previously normalized value again. | `ilcd-detailed-2010` |
| v_complete | all inventory rows | Reconcile manufacturing, FG/service, combined physical and element gates independently; packaging six legs and repairs/water X do not erase inflows retained in stock. Check failures, start/stop, idle, cleanup, unreleased WIP/rework, FG returns, assets and all real added atoms. Unknown is not pass, zero or not_applicable. | `ilcd-detailed-2010` |
| v_service | service | Require original cohort Q, actual observation horizon, gross dispatch/returns and retained performed-service burden. Post-release rework requires permission and posttests/acceptance/disposition, with real incremental materials/water/energy/waste; never assume damaged product restored or a new output. | `arma-residential-manual-2014`; `ilcd-detailed-2010` |
| v_sources | all inventory rows | Do not use industrial process documents as allocation evidence or apply literature recipe, temperatures, line speeds, densities, lifetimes or ratings as defaults. Identify source scope and limits, actual foreground uncertainty and missing evidence; a declaration or mechanical check is not site observation or scientific approval. | `arma-residential-manual-2014`; `tarco-fiberglass-msr`; `ilcd-detailed-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Material-stage inventory for one declared complete roll configuration, with manufacturing and separately scoped original-cohort services |
| allowed_use | Matched state/route/configuration/provider basis with all identity restrictions and uncertainty carried into downstream context |
| excluded_use | Whole roof/system or installed coverage comparisons without independent scenario; shingle or modified membrane substitution; default life/rating or negative waste credit |
| required_metadata | site and collection period; configuration and lot/cohort identity; glass-fibre mat and cured binder supply state; petroleum coating-asphalt grade and upstream oxidation owner; whole formulation versus onsite mixing ownership; actual filler mineralogy and moisture; granule stone/coating/colour/grading; actual bottom release material; unmodified non-self-adhered solid roll terminal; wound dimensions and calibrated single-face area; net product mass and measured moisture; first complete quality-release gate and Q; reject/sample/rework dispositions; raw/WIP/FG/packaging/asset opening and closing inventories; cohort inherited burden vector and service horizon; actual heat source and cooling route; provider geography and native identity restrictions; measured air/liquid species and discharge media; supplier-included ingress ownership; actual product tests with no inferred rating/life |
| required_quality_disclosure | Raw data coverage, first-release Q, inherited vectors, gross physical gates, all unresolved identities/provider compatibility, service horizon, zero-output loads and remaining uncertainty |
| update_trigger | Change of mat/coating formulation, modifiers, granule/backsurfacing, geometry, route/gate, supply background, controls or method evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-notes-2025 | official_guidance | UNSD CPC Ver.3.0 explanatory notes, 30 June 2025, PDF186; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification title/parent and adjacent 37940 only; no detailed recipe or universal coverage inferred. |
| arma-residential-manual-2014 | handbook | ARMA Residential Asphalt Roofing Manual, 2014, printed3–4 and7–10; https://www.asphaltroofing.org/media/_pda/2019/03/TAC-Technical-Review-Task-Force-Residential-Asphalt-Roofing-Manual-2014.pdf | Material preparation, complete glass-mat coating/surfacing/cooling and roll winder/quality/storage route. Figure2-1 is laminate-shingle countercontext, not this roll recipe. No fixed proportions, temperatures, line speeds, lifetime or allocation. |
| tarco-fiberglass-msr | literature | Tarco, Fiberglass Mineral Surfaced Roll Roofing for Residential Applications, complete manufacturer page snapshot 2026-10-20; https://tarcoroofing.com/fiberglass-mineral-surfaced-roll-roofing | Positive complete terminal: glass mat/asphalt/ceramic-granule top/mineral-release bottom, supplied roll and actual storage/installation context. Gross material area differs from installed overlap coverage; nominal data, ratings and application rates are not PCR defaults. |
| ilcd-detailed-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, March2010, sections7.9.2–7.9.3, printed255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional scope requiring allocation, dedicated/virtual subdivision, exchange-specific determining physical causality, and residual common-gate actual-state market value. Cohort/stock/gross-leg protocols here operationalize that method; the handbook is not a roll factory dataset. |
