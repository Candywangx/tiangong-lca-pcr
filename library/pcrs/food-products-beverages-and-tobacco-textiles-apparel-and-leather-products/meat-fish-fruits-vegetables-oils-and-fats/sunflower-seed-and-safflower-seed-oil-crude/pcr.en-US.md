---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-crude
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sunflower-seed and safflower-seed oil, crude

## 1. Scope and Applicability

This PCR governs foreground data packages for crude oil produced from sunflower seed (*Helianthus annuus* L.) or safflower seed (*Carthamus tinctorius* L.) and delivered at the oil mill gate. It covers seed receipt and preparation, mechanical pressing where used, solvent extraction and solvent recovery where used, crude-oil clarification, on-site storage before dispatch, co-product handling, direct emissions, and on-site waste management attributable to the crude-oil production campaign.

The PCR applies to conventional, high-oleic, and other declared sunflower or safflower seed varieties when the oilseed species, variety or oil type, extraction route, solvent use, degumming status, and crude product quality are disclosed. It does not merge sunflower and safflower production into an undisclosed average.

Cultivation and delivery of oilseed to the mill are represented by upstream datasets and are not re-authored inside the foreground mill processes. Oil refining after crude-oil production, including neutralisation, bleaching, deodorisation, winterisation, and manufacture of retail edible oil, is excluded. Packaging, retail, use, and end-of-life are excluded. A study may add transport beyond the mill gate, but that transport is not part of this reference flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-crude |
| classification_refs | CPC 3.0 `21631`, Sunflower-seed and safflower-seed oil, crude |
| covered_products | crude sunflower-seed oil; crude safflower-seed oil; mechanically pressed crude oil; solvent-extracted crude oil; crude oil from a declared pre-press plus solvent-extraction route |
| excluded_products | refined, bleached, deodorised, winterised, hydrogenated, interesterified, blended, formulated, or packaged retail oil; crude oils from other oilseeds; biodiesel and other chemical derivatives |
| representative_product | one kilogram of separately identified crude sunflower-seed oil or crude safflower-seed oil at the oil mill gate |
| production_route | received oilseed preparation followed by declared mechanical pressing, solvent extraction, or combined pre-press/solvent extraction, then solvent removal where applicable and crude-oil clarification |
| market_state | unrefined bulk crude vegetable oil at the oil mill gate, before downstream refining or retail packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provision of crude sunflower-seed oil or crude safflower-seed oil as an intermediate oil product at the oil mill gate |
| How much | 1 kg |
| How well | species and oil type identified; crude and unrefined state demonstrated; extraction route, solvent use, degumming status, and quality basis declared |
| How long or cycle | one production batch or campaign; no use-duration function is assigned |
| reference_flow_link | 1 kg of the qualifying reference product flow at the declared mill gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sunflower-seed and safflower-seed oil, crude `e48ecaca-7bfe-427a-a117-7eeeb8253565` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | oilseed species; variety or oil type; extraction route; solvent used and recovery arrangement; degumming status; crude quality specification; moisture and volatile-matter basis; geography; production period; mill gate; allocation method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference crude oil | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference flow as net mass of qualifying crude oil at the mill gate; exclude container, transport vehicle, free water, and separately measured settled solids. |
| `species_route_separation` | oilseed and crude-oil production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep sunflower and safflower campaigns, and materially different mechanical or solvent routes, separate unless a documented production-weighted aggregation is reported. |
| `moisture_basis` | received and prepared oilseed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured mass and moisture content for each lot; convert seed-input comparisons to the declared moisture basis without silently treating wet mass as dry mass. |
| `energy_conversion` | purchased electricity and thermal energy | energy | kWh and MJ | Preserve meter units and conversion factors; 1 kWh equals 3.6 MJ. Report electricity and thermal energy separately before any combined energy indicator is calculated. |
| `hexane_loss_basis` | solvent route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/t cleaned seed | Calculate annual or campaign hexane loss from verified make-up, stock change, recovered solvent returned to inventory, and solvent leaving in products, wastes, water, or air; normalise to tonnes of cleaned seed processed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | separately identified sunflower-seed or safflower-seed lots received at the oil mill gate, with mass, moisture, origin, and oil type declared |
| starting_condition_role | upstream agricultural dataset linkage point and foreground seed-receipt control point |
| product_classification_scope | CPC 3.0 `21631`, limited to crude sunflower-seed and safflower-seed oil |
| recursive_input_rule | purchased crude oil in the same category that is blended with site output is recorded as an upstream product input with its own dataset and share; its production is not recursively replayed inside the foreground mill model |
| upstream_dataset_requirement | species-, geography-, period-, and farm-gate-representative sunflower-seed or safflower-seed production dataset plus transport to the declared mill gate when transport is in study scope |
| disclosure | disclose oilseed species and oil type, seed moisture basis, route, solvent use, solvent recovery, degumming status, included preparation steps, crude-oil quality basis, co-products, allocation method, geography, period, and any excluded shared utilities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | all foreground mill routes | Include seed receipt, weighing and quality checks, cleaning and preparation, route-specific oil extraction, crude-oil clarification, on-site storage before dispatch, attributable utilities, co-products, residues, waste water, and direct emissions. | `fao-ebrd-sunflower-oils-2010`; `eu-fdm-bat-2019-2031` |
| `boundary_solvent_route` | solvent extraction or combined pre-press/solvent route | Include solvent input, solvent recovery and reuse, oil and meal desolventising, make-up solvent, solvent in oil/meal/water/waste, and vented or fugitive losses; do not represent a solvent route as mechanical pressing only. | `fao-ebrd-sunflower-oils-2010`; `us-epa-ap42-9-11-1-1995`; `eu-fdm-bat-2019-2031` |
| `boundary_excluded_operations` | downstream and upstream stages | Exclude oilseed cultivation from mill foreground operations and link it as an upstream dataset; exclude neutralisation, bleaching, deodorisation, winterisation, retail packaging, distribution, use, and end-of-life from this crude-oil reference flow. | `fao-ebrd-sunflower-oils-2010`; `us-epa-ap42-9-11-1-1995` |
| `boundary_shared_services` | shared mill utilities and treatment systems | Include the measured share of shared electricity, steam, water, storage, dust control, solvent recovery, and waste-water treatment only when an auditable meter, engineering driver, or allocation rule links it to the declared campaign. | `eu-fdm-bat-2019-2031` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| seed_receipt_and_preparation | Seed receipt and preparation | required |  | foreground preparation | kg prepared oilseed leaving preparation |
| crude_oil_extraction_and_clarification | Crude-oil extraction and clarification | required | route-specific pressing and/or solvent operations are selected from the declared production route | foreground production | 1 kg qualifying crude oil at the mill gate |

### Process: Seed receipt and preparation (`seed_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Received sunflower or safflower oilseed (`received_oilseed`)

Record separately identified oilseed lots entering mill preparation. The selected flow must match the declared species and oil type; no combined sunflower/safflower seed flow is assumed.

- Selected flow: Select a public Tiangong sunflower-seed or safflower-seed product flow matching the declared lot
- Flow property / unit: Mass / kg
- Amount rule: measured received seed mass at measured moisture content, reconciled to stock change and normalised to qualifying crude-oil output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying crude oil at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_received_oilseed`
- Sources:
- Range: Sunflower-route clean-seed conversion benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 3.34
  - Upper: 4.06
  - Unit: kg clean sunflower seed/kg crude sunflower oil
  - Basis: FAO conversion examples for solvent-extraction and pressing routes using sunflower seed with 44% oil content
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-ebrd-sunflower-oils-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared oilseed to extraction (`prepared_oilseed`)

Record the mass transferred to pressing or solvent extraction after cleaning, optional dehulling, size reduction, conditioning, and optional flaking. This is a site intermediate, not the reference product.

- Selected flow: Site-specific prepared sunflower-seed or safflower-seed intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after preparation, reconciled with separated material and preparation stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg received oilseed and per 1 kg qualifying crude-oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepared_seed_mass`
- Sources:
- Range: Preparation mass-balance screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.75
  - Upper: 1.00
  - Unit: kg prepared seed/kg received seed
  - Basis: broad preparation-output fraction allowing route-specific cleaning and optional dehulling
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Screenings, foreign material, and non-valued hulls (`preparation_residues`)

Record removed foreign material, rejected seed, and hulls as waste only when they have no intended co-product use or economic value; otherwise classify the relevant fraction as a product co-product.

- Selected flow: Select route-specific preparation residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured separated residue mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg received oilseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_residue_mass`
- Sources:
- Range: Preparation-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg received oilseed
  - Basis: includes optional hull removal and other preparation by-products reported for sunflower processing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-ebrd-sunflower-oils-2010`

##### Elementary flows

###### Preparation dust emitted to air (`preparation_dust_to_air`)

Record measured or calculated dust passing final abatement from seed receiving, cleaning, dehulling, grinding, conditioning, and conveying. Do not report captured dust again as an elementary emission.

- Selected flow: Select the Tiangong particulate-matter elementary flow matching the monitored size fraction and compartment
- Flow property / unit: Mass / kg
- Amount rule: stack or fugitive measurement, or activity multiplied by a documented site emission factor and control efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne received oilseed and per 1 kg qualifying crude-oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources:
- Range: Provisional controlled-dust screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/t received oilseed
  - Basis: broad replaceable first-pass estimate after site dust control
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Crude-oil extraction and clarification (`crude_oil_extraction_and_clarification`)

#### Inputs

##### Product flows

###### Prepared oilseed input (`prepared_oilseed_input`)

Transfer the measured prepared oilseed from the preparation process without changing species, campaign, moisture basis, or route identity.

- Selected flow: Site-specific prepared sunflower-seed or safflower-seed intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: equal to reconciled prepared-oilseed output assigned to this extraction campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepared_seed_mass`
- Sources:
- Range: Prepared-seed transfer consistency check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.75
  - Upper: 1.00
  - Unit: kg/kg received oilseed
  - Basis: transfer fraction from the matched preparation process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-ebrd-sunflower-oils-2010`

###### Purchased electricity (`purchased_electricity`)

Record electricity for preparation, pressing, conveying, pumps, solvent recovery, clarification, abatement, and attributable storage. Sub-meter route-specific loads where practicable.

- Selected flow: Select geography-, voltage-, and period-representative electricity supply flow
- Flow property / unit: Energy / kWh
- Amount rule: measured meter consumption minus exports and unrelated loads, allocated only through a documented driver when shared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional crude-oil electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 1.10
  - Unit: kWh/kg crude oil
  - Basis: broad replaceable range bounded to cover mill configurations; not the integrated crushing-and-refining BAT range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy and steam (`thermal_energy`)

Record fuel-derived or purchased heat for conditioning, pressing, solvent distillation, desolventising, drying, and other attributable operations. Record fuel inputs and direct combustion emissions when heat is generated on site.

- Selected flow: Select technology- and geography-representative fuel, steam, or heat flow
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel lower-heating-value input or purchased heat/steam energy, separated from electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional thermal-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg crude oil
  - Basis: broad replaceable route-sensitive range; zero is allowed only for a documented unheated route without attributable thermal utility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hexane make-up (`hexane_makeup`)

Include this row only when hexane or a hexane-containing extraction solvent is used. Record purchased make-up and campaign stock changes; recovered and reused internal solvent is not counted repeatedly as new external input.

- Selected flow: Select a public Tiangong hexane product flow with verified chemical identity
- Flow property / unit: Mass / kg
- Amount rule: purchased make-up plus opening stock minus closing stock, corrected for transfers and inventory changes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per tonne cleaned seed processed and per 1 kg qualifying crude-oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hexane_balance`
- Sources:
- Range: Sunflower-seed hexane-loss BAT-AEL
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 0.7
  - Unit: kg/t cleaned sunflower seed
  - Basis: yearly average total hexane consumed per tonne of cleaned sunflower seed processed; apply only to a solvent route in the BAT scope
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bat-2019-2031`

###### Process and cleaning water (`process_water`)

Record water crossing the foreground boundary for conditioning, solvent recovery, clarification, equipment cleaning, and emission control. Keep uncontaminated cooling water separately identified.

- Selected flow: Select location-specific process-water supply flow
- Flow property / unit: Volume / m3
- Amount rule: measured intake minus separately discharged uncontaminated water, with recycled internal water reported but not double-counted as external supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources:
- Range: Provisional crude-oil water-use screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.0
  - Unit: m3/t crude oil
  - Basis: broad replaceable range for crude-oil operations only; do not substitute the integrated crushing-and-refining BAT range without matching scope
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualifying crude sunflower-seed or safflower-seed oil (`crude_oil_reference_output`)

The reference output is measured after route-specific solvent removal and clarification at the declared mill gate, before downstream refining. Species-specific production remains separately reported.

- Selected flow: Sunflower-seed and safflower-seed oil, crude `e48ecaca-7bfe-427a-a117-7eeeb8253565`
- Flow property / unit: Mass / kg
- Amount rule: measured net qualifying crude-oil mass; all exchanges are normalised to exactly 1 kg reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg qualifying crude oil at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crude_oil_output_quality`
- Sources:
- Range: Reference-output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: normalized PCR reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `codex-cxs-210-1999-2026`

###### Press cake, extracted meal, and valued hull co-products (`oilseed_coproducts`)

Record each saleable or intentionally used cake, meal, or hull fraction as a separate product flow with moisture, residual oil, disposition, and market value. Do not use a soybean-meal flow as a proxy for sunflower or safflower meal.

- Selected flow: Select species- and product-state-specific press-cake, meal, or hull product flows
- Flow property / unit: Mass / kg
- Amount rule: measured co-product mass at declared moisture content, separated by product and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_residue_mass`
- Sources:
- Range: Sunflower meal-output benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.88
  - Upper: 1.83
  - Unit: kg meal/kg crude sunflower oil
  - Basis: FAO general yield statement and route conversion examples; verify actual moisture and route before use
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-ebrd-sunflower-oils-2010`

##### Waste flows

###### Clarification solids and non-valued process residues (`clarification_residues`)

Record filter cake, settled solids, spent filter aid, contaminated absorbent, and other non-valued residues by treatment route. A residue with intended feed, fuel, or material use is a co-product, not waste.

- Selected flow: Select treatment-route-specific residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass leaving the process, net of recovered oil returned to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_residue_mass`
- Sources:
- Range: Provisional clarification-residue screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg crude oil
  - Basis: broad replaceable first-pass estimate for clarification residues
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process waste water (`process_wastewater`)

Record contaminated water sent to on-site or off-site treatment. Keep separately discharged uncontaminated cooling water outside this row and disclose it separately.

- Selected flow: Select a waste-water flow matching composition and treatment route
- Flow property / unit: Volume / m3
- Amount rule: measured discharge by destination, corrected for internal recycle and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources:
- Range: Provisional crude-oil waste-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.0
  - Unit: m3/t crude oil
  - Basis: broad replaceable range for crude-oil operations only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Hexane emitted to air (`hexane_to_air`)

Include this row only for a solvent route. Reconcile measured or calculated channelled and fugitive emissions with the campaign solvent balance and do not assume that all make-up solvent reaches air when measured solvent leaves in oil, meal, water, or waste.

- Selected flow: Select the Tiangong hexane elementary flow for emission to air with verified chemical identity and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured emissions plus documented fugitive estimate, reconciled with the total hexane balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne cleaned seed processed and per 1 kg qualifying crude-oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hexane_balance`
- Sources:
- Range: Sunflower-seed total hexane-loss BAT-AEL
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 0.7
  - Unit: kg/t cleaned sunflower seed
  - Basis: yearly average total hexane loss; air emissions are the reconciled air fraction rather than an automatic copy of total loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bat-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | independently measurable preparation, pressing, extraction, clarification, and treatment operations | Avoid allocation by subdivision and direct measurement wherever the operation or utility can be separated; do not allocate a separately metered route through a plant-wide revenue key. | `eu-pef-2021-2279` |
| `allocation_coproducts` | crude oil, press cake, extracted meal, and valued hulls from an inseparable campaign | After subdivision is exhausted, use a documented physical relationship only when it represents a verified causal relationship between inputs and co-product functions. Otherwise allocate remaining shared burdens by relative economic value at the mill gate using contemporaneous prices, and report a mass-allocation sensitivity result. | `eu-pef-2021-2279`; `fao-ebrd-sunflower-oils-2010` |
| `allocation_residue_status` | hulls, screenings, clarification solids, spent filter aid, and waste water | Determine product, co-product, or waste status from intended use, legal status, and economic value. Assign waste handling to the generating process; do not grant an avoided-product credit without an empirically supported substitution scenario. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `allocation_documentation` | every multifunctional or shared operation | Retain unallocated quantities, co-product masses and moisture, prices and currency, price period, allocation factors, excluded flows, and sensitivity results so the allocation is reproducible and sums to one. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_oilseed` | seed_receipt_and_preparation | received oilseed | weighbridge and lot-quality record | lot id; species; variety/oil type; origin; gross mass; tare; net mass; moisture; damaged/foreign matter; receipt time | calibrated weighbridge plus representative lot sampling | kg; % | each received lot | complete declared campaign | all receiving points serving the campaign | sum accepted lot net mass; retain rejected lots separately; report production-weighted moisture | scale calibration; sampling procedure; lot certificates; reconciliation to inventory |
| `cp_prepared_seed_mass` | seed_receipt_and_preparation | prepared oilseed and separated preparation material | transfer scale and preparation log | campaign id; preparation route; input mass; output mass; hulls; screenings; moisture; stock change | calibrated belt scale, hopper scale, or batch mass reconciliation | kg; % | each batch or continuous shift total | complete declared campaign | all preparation lines serving the campaign | input plus opening stock minus outputs and closing stock; normalise after moisture-basis disclosure | calibration; batch log; mass-balance closure |
| `cp_energy_records` | crude_oil_extraction_and_clarification | electricity, fuel, heat, and steam | meter, invoice, and fuel-stock record | meter id; opening/closing readings; fuel quantity; heating value; steam mass/enthalpy; exports; shared-load driver; downtime | sub-meter reading or reconciled purchase and stock records | kWh; MJ; kg fuel | continuous or each shift; reconcile monthly | all months overlapping the campaign | all utility meters and supply points serving the campaign | subtract exports and unrelated loads; convert with documented factors; allocate shared loads only through an auditable driver | meter calibration; invoice; fuel certificate; reconciliation |
| `cp_hexane_balance` | crude_oil_extraction_and_clarification | hexane make-up, recovery, and losses | purchase, tank, recovery, product, waste-water, waste, and emission records | solvent composition; purchases; opening/closing stock; transfers; recovered volume; density/temperature; oil/meal/water/waste solvent; channelled/fugitive emissions | mass balance supported by calibrated tanks/meters and analytical measurements | kg | daily operating record; campaign and annual reconciliation | complete declared campaign and annual reconciliation period | every solvent-extraction line in scope | convert volumes at measured temperature/density; total input minus recovered closing inventory and quantified outputs equals unresolved loss; report air fraction separately | tank calibration; purchase records; laboratory results; leak/vent monitoring; closure statement |
| `cp_water_wastewater` | crude_oil_extraction_and_clarification | process water and waste water | water-meter and discharge record | intake; recycle; segregated cooling water; discharge volume; destination; COD/TOC; TSS; oil and grease; pH; temperature | calibrated meters and representative sampling at relevant discharge points | m3; mg/L; pH | continuous volume; sampling per permit or monitoring plan | complete declared campaign | all relevant water intake and discharge points | prevent double counting recycled water; report direct, indirect, and separately discharged uncontaminated water by route | calibration; chain of custody; laboratory accreditation; discharge reconciliation |
| `cp_crude_oil_output_quality` | crude_oil_extraction_and_clarification | qualifying crude-oil output | tank gauge/scale, dispatch, and laboratory record | species; oil type; extraction route; batch; net mass; water/volatile matter; insoluble impurities; density; quality tests; degumming status; dispatch time | calibrated tank/scale measurement and representative laboratory testing | kg; %; g/ml | each tank batch and dispatch | complete declared campaign | all in-scope crude-oil tanks and dispatch points | sum only batches meeting the declared crude-oil identity; normalise all exchanges to net qualifying mass | calibration; laboratory method and result; batch release; dispatch reconciliation |
| `cp_coproduct_residue_mass` | seed_receipt_and_preparation; crude_oil_extraction_and_clarification | co-products, hulls, screenings, meal, cake, and residues | scale, stock, dispatch, and waste-transfer record | material id; product/waste status; mass; moisture; residual oil; destination; price; currency; disposal/treatment | calibrated scale plus stock and dispatch reconciliation | kg; %; currency/kg | each batch or dispatch | complete declared campaign | all preparation, extraction, storage, and waste-transfer points | aggregate by material, moisture basis, status, and destination; do not merge valued products with wastes | calibration; sales invoice; waste manifest; inventory closure |
| `cp_air_emissions` | seed_receipt_and_preparation; crude_oil_extraction_and_clarification | dust and route-specific air emissions | stack test, continuous monitor, leak survey, and operating-hour record | pollutant/flow; compartment; concentration; flow rate; operating time; control device; efficiency; fugitive method | applicable standard measurement or documented activity-factor calculation | kg; mg/Nm3 | per permit/monitoring plan and after material changes | representative normal operation plus abnormal-event disclosure | all relevant emission points, fugitive sources, and control devices | calculate mass emission from measured concentration, gas flow, and time; add separately estimated fugitives; avoid double counting captured material | test report; instrument calibration; operating log; control-device record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_seed_input` | received oilseed | accepted received seed kg assigned to campaign / qualifying crude-oil kg | `cp_received_oilseed`; `cp_crude_oil_output_quality` | kg received seed/kg crude oil | `fao-ebrd-sunflower-oils-2010` |
| `calc_preparation_balance` | seed preparation | received seed + opening stock = prepared seed + separated co-products/residues + closing stock + quantified loss | `cp_received_oilseed`; `cp_prepared_seed_mass`; `cp_coproduct_residue_mass` | preparation mass-balance closure and unresolved difference | `fao-ebrd-sunflower-oils-2010` |
| `calc_energy_intensity` | electricity and thermal energy | attributable energy / qualifying crude-oil mass; retain electricity and thermal results separately | `cp_energy_records`; `cp_crude_oil_output_quality` | kWh/kg oil and MJ/kg oil | `eu-fdm-bat-2019-2031` |
| `calc_hexane_loss` | solvent route | (make-up + opening stock + imports - closing stock - exports - recovered stock change) / cleaned seed tonnes; reconcile oil, meal, water, waste, and air fractions | `cp_hexane_balance`; `cp_prepared_seed_mass` | kg total hexane loss/t cleaned seed and kg hexane-to-air/t cleaned seed | `eu-fdm-bat-2019-2031`; `us-epa-ap42-9-11-1-1995` |
| `calc_water_intensity` | process water and waste water | external water or waste-water discharge / qualifying crude-oil tonnes, reported separately | `cp_water_wastewater`; `cp_crude_oil_output_quality` | m3/t crude oil | `eu-fdm-bat-2019-2031` |
| `calc_allocation_factors` | inseparable shared burdens | selected driver value for each co-product / sum of driver values; verify factors sum to 1.000 within rounding tolerance | `cp_coproduct_residue_mass`; allocation decision record | allocation factors and mass-allocation sensitivity factors | `eu-pef-2021-2279` |
| `calc_extraction_mass_balance` | extraction and clarification | prepared seed + material auxiliaries = crude oil + co-products + wastes + measured stock change + quantified emissions + unresolved difference | `cp_prepared_seed_mass`; `cp_crude_oil_output_quality`; `cp_coproduct_residue_mass`; `cp_hexane_balance`; `cp_water_wastewater`; `cp_air_emissions` | campaign mass-balance closure and unresolved difference | `fao-ebrd-sunflower-oils-2010`; `eu-fdm-bat-2019-2031` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and oilseed input | Demonstrate species, oil type, crude/unrefined state, route, solvent use, degumming status, and mill gate for every included batch. | lot certificates; route log; laboratory release; reference-flow UUID check |
| `dq_measurement` | mass, energy, solvent, and water records | Use calibrated instruments or reconciled purchase/stock records; retain units, conversions, missing-data treatment, and instrument coverage. | calibration certificates; invoices; stock reconciliation; calculation workbook |
| `dq_temporal` | declared reporting period | Use a continuous campaign or at least 12 representative months for an annual dataset; disclose shutdowns, abnormal releases, and seasonality. | production calendar; operating log; exception record |
| `dq_completeness` | foreground inventory | Cover all material seed, crude-oil, co-product, utility, solvent, water, residue, waste-water, and direct-emission flows; quantify or justify exclusions. | signed completeness checklist; mass/energy/solvent reconciliation |
| `dq_representativeness` | geography and technology | Match seed source, mill geography, extraction route, solvent-recovery technology, and production scale, or document and assess extrapolation. | site description; supplier geography; technology record; extrapolation note |
| `dq_source_scope` | external QA ranges | Apply the FAO sunflower ranges only to matching sunflower routes and the EU BAT-AEL only to matching regulated solvent-route scope; do not silently transfer them to safflower or mechanical-only cases. | applicability assessment linked to source ids |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail if the reference UUID, Mass property, Units of mass group, 1 kg amount, species qualifier, crude/unrefined state, or mill gate is missing or inconsistent. | `codex-cxs-210-1999-2026` |
| `validate_route_completeness` | process map and inventory | Fail if the declared mechanical, solvent, or combined route omits a required route operation; a solvent route must include solvent recovery/desolventising and solvent balance, while refining operations must not be included in the crude-oil foreground result. | `fao-ebrd-sunflower-oils-2010`; `us-epa-ap42-9-11-1-1995` |
| `validate_species_separation` | combined datasets | Fail if sunflower and safflower batches are aggregated without production weights, species-specific input/output records, and disclosure of the aggregation method. | `codex-cxs-210-1999-2026` |
| `validate_mass_balance` | each process and campaign | Flag an unexplained preparation or extraction mass-balance difference above 2% of the largest material throughput; require correction or documented investigation rather than forced closure. | `fao-ebrd-sunflower-oils-2010`; `eu-fdm-bat-2019-2031` |
| `validate_hexane_balance` | solvent route | Fail if make-up, stock change, recovered solvent, quantified product/water/waste fractions, and air emissions are not reconciled; flag a matching-scope sunflower yearly loss outside 0.2-0.7 kg/t cleaned seed for investigation, not automatic replacement. | `eu-fdm-bat-2019-2031`; `us-epa-ap42-9-11-1-1995` |
| `validate_allocation` | co-products and shared services | Fail if allocation is used before documented subdivision review, factors do not sum to one, waste and co-product status is inconsistent, or price/physical-driver evidence and sensitivity results are absent. | `eu-pef-2021-2279` |
| `validate_quality_and_coverage` | published foreground package | Fail if required qualifiers, protocol coverage, calibration evidence, temporal coverage, direct emissions, quality tests, or excluded-flow justifications are missing. | `codex-cxs-210-1999-2026`; `eu-fdm-bat-2019-2031` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process foreground data package for crude-oil production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | LCA models requiring crude sunflower-seed or safflower-seed oil at a matching mill gate, species/oil type, geography, period, extraction route, solvent practice, degumming status, and allocation method |
| excluded_use | refined or packaged edible oil; other oilseed oils; undisclosed sunflower/safflower averages; routes or geographies with materially different extraction and recovery technology; direct food-compliance claims without applicable testing |
| required_metadata | PCR id and version; reference-flow UUID; oilseed species and variety/oil type; geography; period; mill gate; route; solvent and recovery; degumming status; crude quality basis; upstream seed dataset; allocation method; protocol coverage; data-quality assessment |
| required_quality_disclosure | measured versus calculated coverage; missing-data substitutions; provisional-range use; instrument calibration; mass, energy, water, and solvent reconciliation; co-product status and allocation sensitivity; abnormal operations; excluded flows |
| update_trigger | material change in oilseed species/oil type, seed source, extraction or solvent-recovery route, degumming/clarification, geography, energy or water system, co-product market, allocation method, legal status, reference UUID, or evidence base |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-ebrd-sunflower-oils-2010` | official_guidance | FAO/EBRD, *Sunflower Crude and Refined Oils: Agribusiness Handbook*, 2010, https://www.fao.org/fileadmin/user_upload/tci/docs/1_AH10-Sunflower%20Crude%20%26%20Refined%20Oils.pdf (retrieved 2026-08-10) | sunflower process decomposition; seed preparation, pressing, solvent extraction, clarification, co-products, and route conversion benchmarks |
| `codex-cxs-210-1999-2026` | standard | Codex Alimentarius CXS 210-1999, *Standard for Named Vegetable Oils*, official 2026 corrected text, https://openknowledge.fao.org/handle/20.500.14283/cd9108en (retrieved 2026-08-10) | sunflower/safflower product identity, crude-oil trade applicability, quality and physical-property context |
| `eu-fdm-bat-2019-2031` | standard | Commission Implementing Decision (EU) 2019/2031, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-10) | foreground inventory, monitoring, energy/water/solvent accounting, oilseed dust and sunflower-route hexane-loss QA |
| `us-epa-ap42-9-11-1-1995` | official_guidance | U.S. EPA AP-42 Section 9.11.1, *Vegetable Oil Processing*, November 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf (retrieved 2026-08-10) | solvent-route process decomposition, crude-versus-refined boundary, dust and hexane emission accounting |
| `eu-pef-2021-2279` | standard | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-10) | allocation hierarchy, physical/economic allocation evidence, sensitivity and documentation requirements |
