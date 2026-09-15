---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-refined
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Cottonseed oil, refined

## 1. Scope and Applicability

This PCR governs foreground data packages for bulk refined cottonseed oil made from crude oil derived from cultivated `Gossypium` species. The foreground boundary starts when crude cottonseed oil is received at the refinery and ends with conforming refined oil in bulk storage at the refinery gate. Chemical refining and physical refining routes are covered when their actual unit operations and inputs are declared. Winterization is included only when used to meet a declared cold-stability or salad-oil specification.

Cotton cultivation, ginning, cottonseed preparation, pressing or solvent extraction, and crude-oil production are upstream and require linked datasets. Packaging, distribution, retail, cooking or other use, and end-of-life are downstream. Hydrogenated, interesterified, fractionated, blended, formulated, or non-food cottonseed-oil products are excluded unless represented by a separate declared downstream process. This PCR does not prescribe unsupported default plant performance; primary refinery records produce inventory amounts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-refined |
| classification_refs | CPC 3.0: 21682 (Cottonseed oil, refined) |
| covered_products | Bulk edible refined cottonseed oil derived from cultivated `Gossypium` species; chemically or physically refined; winterized or non-winterized when declared |
| excluded_products | Crude cottonseed oil; cottonseed meal; hydrogenated, interesterified, fractionated, blended, formulated, or non-food oils; packaged consumer product unless packaging is modelled separately |
| representative_product | Refined cottonseed oil suitable for human consumption at the refinery gate |
| production_route | Receipt and storage of crude cottonseed oil; route-specific degumming and free-fatty-acid removal; bleaching and filtration; deodorization; conditional winterization; final filtration and bulk storage |
| market_state | Bulk finished oil at refinery gate, with refining route, winterization status, additives, quality specification, geography, and reporting period declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Refined cottonseed oil providing edible vegetable oil as a bulk food ingredient |
| How much | 1 kg net mass of conforming refined cottonseed oil |
| How well | Derived from cultivated `Gossypium` species, suitable for human consumption, and meeting the declared applicable product specification and test methods |
| How long or cycle | At the refinery gate after one declared batch, campaign, or continuous reporting period; shelf life and use are outside this reference function |
| reference_flow_link | The amount of bulk refined cottonseed oil released from final quality control and transferred to refinery-gate storage |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cottonseed oil, refined `5c448d72-c368-4fd2-a3d0-e1cc73572241` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | `Gossypium`-derived identity; refinery geography; crude-oil production route and upstream dataset; chemical or physical refining route; winterization status; bulk or packaging status; additives or antioxidants; declared product specification and test methods; reporting period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Refined cottonseed oil reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net oil mass, excluding transport and storage packaging; normalize all foreground amounts to 1 kg or 1,000 kg of released reference product. |
| `material_mass_basis` | Crude oil, water, chemicals, residues, wastewater, and recovered co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured mass; when volume is the primary record, retain temperature, density source, concentration, and the volume-to-mass calculation. |
| `electricity_energy_basis` | Purchased or generated electricity used by the refinery | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh or MJ | Preserve meter units and convert with 1 kWh = 3.6 MJ; do not treat the energy-property UUID as the Mass property. |
| `steam_basis` | Purchased or generated steam used for heating, vacuum, stripping, or winterization support | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg steam | Record steam mass plus pressure, temperature, condensate return, and generation source; if thermal energy is calculated, retain the enthalpy method and avoid double counting boiler fuel. |
| `solution_concentration_basis` | Alkali, acid, antioxidant, and other formulated aids | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg solution and kg active substance | Record supplied solution mass and concentration; calculate active-substance mass without replacing the purchased-solution inventory. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground refinery | Include crude-oil receipt and storage, the actual degumming/free-fatty-acid-removal route, washing and drying when used, bleaching and filtration, deodorization, conditional winterization, final filtration, quality control, and bulk storage up to the refinery gate. | `epa-vegetable-oil-voc-1978`; `fsanz-cot102-2004` |
| `boundary_upstream_link` | Crude cottonseed oil input | Keep crude cottonseed oil as a visible product input and link a separate upstream dataset covering cottonseed production and oil extraction; where solvent extraction is used, that upstream dataset must include solvent make-up, recovery, and releases. | `us-epa-vegetable-oil-neshap`; `fsanz-cot102-2004` |
| `boundary_route_specific` | Chemical and physical refining | Include only the route actually operated; do not simultaneously model caustic neutralization and physical steam stripping as mandatory parallel treatments unless both occur and records demonstrate them. | `epa-vegetable-oil-voc-1978` |
| `boundary_environmental_exchanges` | Refinery operations | Include site electricity, fuel or steam, process and cleaning water, chemicals and adsorbents, direct air emissions, wastewater, recovered materials, and solid residues attributable to the reporting period. | `eu-fdm-bref-2019` |
| `boundary_exclusions` | Downstream and modified products | Exclude packaging, distribution, retail, use, end-of-life, hydrogenation, interesterification, fractionation, blending, and formulation unless explicitly added as separate processes for the study goal. | `codex-cxs-210-1999` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crude cottonseed oil received into refinery custody, with supplier, mass, water/impurity condition, free-fatty-acid or acid-value result, lot or tank, and upstream dataset reference declared |
| starting_condition_role | Purchased intermediate product and foreground refining feedstock |
| product_classification_scope | Refined cottonseed oil; CPC 3.0 21682 is classification context, not canonical identity ownership |
| recursive_input_rule | If refined cottonseed oil is reprocessed or blended into the foreground, record it as a separate same-category product input with quantity, origin, previous processing, and reason; never collapse it into the reference output or silently recurse. |
| upstream_dataset_requirement | Use a geographically, temporally, and technologically representative crude-cottonseed-oil dataset that includes cottonseed burdens, pressing and/or solvent extraction, crude-oil yield, meal and other co-products, and upstream allocation. |
| disclosure | Declare refinery geography, reporting period, crude-oil origin and upstream dataset, refining route, winterization status, utilities, co-product treatment, allocation method, packaging exclusion or inclusion, quality specification, and any substituted background data. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cottonseed_oil_refining` | Cottonseed oil refining; Tiangong process `921c799b-2836-454b-8d99-481b33bc504a` | required | Always required for this PCR; individual unit operations are route-specific and winterization is conditional on product specification | Foreground conversion of crude cottonseed oil to conforming bulk refined cottonseed oil | 1,000 kg released refined cottonseed oil |

### Process: Cottonseed oil refining (`cottonseed_oil_refining`)

#### Inputs

##### Product flows

###### Crude cottonseed oil feedstock (`crude_cottonseed_oil`)

Crude cottonseed oil crosses the refinery boundary as the primary intermediate input. The amount comes from calibrated receipt or transfer records reconciled to tank inventory.

- Selected flow: Crude cottonseed oil (exact Tiangong UUID unresolved; do not substitute cottonseed seed flow `a60671ff-7325-4636-9fba-bcc5f6afaeeb`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net crude-oil input allocated to the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fsanz-cot102-2004`
- Range: Provisional crude-oil mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1250
  - Unit: kg crude oil
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and wash water (`process_water`)

Water used for degumming, washing, steam-system make-up, and product-contact cleaning is recorded without netting wastewater or condensate return.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured metered water attributable to the foreground process, separated by use where possible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional water-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg water
  - Basis: per 1,000 kg released refined cottonseed oil; excludes steam mass counted separately
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Degumming acid (`degumming_acid`)

Phosphoric acid or another declared degumming aid is recorded only when used; supplied concentration and active-acid mass remain distinguishable.

- Selected flow: Orthophosphoric Acid `9102d985-3980-4e5d-a870-f5164ff2e977`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied product and kg active acid
- Amount rule: measured purchased or dosed mass and concentration for batches using acid degumming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil for the applicable route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `epa-vegetable-oil-voc-1978`
- Range: Provisional degumming-aid screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg supplied product
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium hydroxide for chemical neutralization (`sodium_hydroxide`)

Alkali is recorded only for chemical refining. Physical refining without caustic neutralization reports zero and documents the route.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied solution and kg active NaOH
- Amount rule: measured solution dose and concentration for chemical neutralization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil for the chemical-refining route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `epa-vegetable-oil-voc-1978`
- Range: Provisional alkali-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg supplied solution
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bleaching earth (`bleaching_earth`)

Fresh activated clay or equivalent adsorbent used for bleaching is recorded separately from spent adsorbent output.

- Selected flow: Bleaching earth `7c9494b2-6b2f-496b-b140-acc13c4c90d9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured adsorbent charged to the bleaching operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `epa-vegetable-oil-voc-1978`
- Range: Provisional adsorbent-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg bleaching earth
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity (`electricity`)

Metered electricity covers pumps, mixing, centrifugation, filtration, vacuum auxiliaries, cooling, winterization when used, and allocated shared services.

- Selected flow: alternating current, electricity consumption mix, 1-35 kV `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: measured meter consumption plus a documented allocation of shared electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional electricity-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Steam (`steam`)

Steam used for heating, drying, vacuum systems, and deodorization is recorded by mass; boiler fuel is linked only when steam is generated inside the foreground boundary.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg steam
- Amount rule: measured steam supplied less separately measured returned condensate only when the selected steam dataset requires netting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `epa-vegetable-oil-voc-1978`; `eu-fdm-bref-2019`
- Range: Provisional steam-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg steam
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is required by default. Reprocessed off-spec oil is a same-category product input, not an anonymous waste input.

##### Elementary flows

No elementary input is prescribed as a fixed amount. Site water abstraction and on-site fuel resources are represented when they cross the environment boundary directly rather than through selected product-flow datasets.

#### Outputs

##### Product flows

###### Refined cottonseed oil (`refined_cottonseed_oil`)

Released bulk refined oil is the quantitative reference and must pass the declared product specification.

- Selected flow: Cottonseed oil, refined `5c448d72-c368-4fd2-a3d0-e1cc73572241`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed quantitative reference of 1,000 kg after final quality release
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `codex-cxs-210-1999`
- Range: Fixed quantitative reference
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg released refined cottonseed oil
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)

###### Recovered refinery co-products (`recovered_refinery_coproducts`)

Soapstock or acid oil, deodorizer distillate, recovered oil, and winterization stearin are separate product outputs only when they have a documented function, quantity, destination, and positive economic value; otherwise classify them under the applicable waste flow.

- Selected flow: Route-specific recovered refinery co-product (exact Tiangong UUID required for each declared output)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by named output and destination; zero when not produced or when classified as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_residue_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional recovered-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg total recovered co-products
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent bleaching earth and filter residues (`spent_adsorbent_and_filter_residue`)

Spent adsorbent, filter cake, and polishing residues are recorded by mass, retained oil, hazard classification, and treatment destination.

- Selected flow: Spent bleaching earth and filter residues (refinery-specific Tiangong waste-flow UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured dispatched mass, corrected only for documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_residue_records`
- Sources: `epa-vegetable-oil-voc-1978`; `eu-fdm-bref-2019`
- Range: Provisional solid-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg residue
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refinery wastewater (`refinery_wastewater`)

Wastewater from degumming, neutralization, washing, cleaning, and utility systems is recorded before or after treatment as declared. The unrelated Tiangong candidate `d2d44ce1-c0f4-461d-9413-f4b33e0d200f` must not be used.

- Selected flow: Edible-oil refinery wastewater (exact Tiangong waste-flow UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharge mass or metered volume converted using documented density, with treatment stage and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_residue_records`
- Sources: `eu-fdm-bref-2019`
- Range: Provisional wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wastewater
  - Basis: per 1,000 kg released refined cottonseed oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct air and water emissions (`direct_emissions`)

Record measured or calculated direct emissions from on-site fuel combustion, deodorization and vacuum systems, storage vents, wastewater treatment, and refrigerant systems when these cross the environment boundary. Use pollutant-specific Tiangong elementary flows selected during dataset construction; do not create a generic aggregate emission.

- Selected flow: Pollutant-specific elementary flows selected from verified site records
- Flow property / unit: pollutant-specific mass or energy property / compatible unit
- Amount rule: measured continuous or periodic monitoring result, permit inventory, or transparent calculation from collected activity data and an identified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released refined cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_records`
- Sources: `eu-fdm-bref-2019`; `us-epa-vegetable-oil-neshap`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Refinery unit operations and dedicated batches | Avoid allocation by collecting unit-operation, batch, tank, and meter records that directly assign inputs, outputs, wastes, and emissions to the refined-oil route. | `eu-pef-method-2021` |
| `allocation_physical_relation` | Shared foreground burdens that cannot be subdivided | Allocate only by a documented, quantifiable physical relationship that reflects how the shared input or emission is caused; mass allocation is not automatic merely because all outputs are measured in kg. | `eu-pef-method-2021` |
| `allocation_economic_fallback` | Marketable co-products without a defensible physical relationship | If subdivision and a relevant physical relationship are not feasible, use economic allocation based on contemporaneous plant-gate values for the specific reporting period and disclose prices, currency, averaging, zero-value outputs, and sensitivity. | `eu-pef-method-2021` |
| `allocation_waste_classification` | Soapstock, acid oil, deodorizer distillate, winterization solids, spent earth, and residues | Treat an output as a co-product only when function, positive economic value, mass, and destination are documented; otherwise retain it as a waste output with treatment burdens and no avoided-product credit in the attributional foreground package. | `eu-pef-method-2021` |
| `allocation_upstream_separation` | Crude cottonseed oil input | Do not reallocate cotton cultivation, ginning, extraction, cottonseed meal, or lint burdens inside the refining foreground; preserve the allocation already declared by the linked crude-oil dataset and report its method. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `cottonseed_oil_refining` | crude cottonseed oil input | weighbridge, calibrated tank transfer, invoice, and laboratory receipt record | timestamp; supplier; lot/tank; gross/net mass; water/impurities; acid value or FFA; origin; upstream dataset | reconcile receipts, transfers, opening stock, and closing stock | kg | each receipt or transfer | all foreground batches in reporting period | all included refinery lines and tanks | net input = receipts + transfers in - transfers out + opening stock - closing stock | calibration certificate; signed receipt; tank table; laboratory result; stock reconciliation |
| `cp_additive_records` | `cottonseed_oil_refining` | acid, alkali, bleaching earth, antioxidant, and other aids | batch sheet, dosing meter, inventory issue, supplier specification | timestamp; batch; material identity; Tiangong flow; supplied mass; concentration; active mass; operation | reconcile dosing and stock movements by unit operation | kg supplied product; kg active substance | each batch or continuous dosing interval | all foreground batches in reporting period | all included dosing systems and unit operations | sum by material and route, then normalize to released product | calibrated dosing device; supplier certificate; inventory reconciliation |
| `cp_utility_records` | `cottonseed_oil_refining` | water, electricity, steam, fuel, cooling, and refrigeration | utility meter, boiler log, invoice, condensate and refrigerant log | timestamp; meter; opening/closing reading; unit; line; operating hours; steam conditions; condensate return; allocation driver | use dedicated meters first; document shared-utility allocation | kg water; kWh; kg steam; MJ fuel; kg refrigerant | shift, day, batch, or billing interval | representative full reporting period | all included operations and shared services | difference meter readings, correct resets, subtract excluded uses, normalize to released product | meter calibration; invoice; boiler log; allocation worksheet |
| `cp_output_and_residue_records` | `cottonseed_oil_refining` | refined oil, recovered outputs, wastewater, spent earth, filter cake, and other residues | tank transfer, dispatch, weighbridge, wastewater meter, manifest, and stock record | timestamp; batch; output identity; mass/volume; density; stock change; destination; economic value; waste classification; treatment | reconcile all outputs and inventory change on a wet and dry basis where relevant | kg; m3 with density; currency/kg | each transfer or dispatch | all foreground batches in reporting period | all included output tanks, lines, and treatment destinations | output = dispatch + closing stock - opening stock; retain each output separately | quality release; weighbridge ticket; waste manifest; meter calibration; sales document |
| `cp_emissions_records` | `cottonseed_oil_refining` | direct emissions to air and water | CEMS, stack test, wastewater analysis, refrigerant log, fuel record, permit report | pollutant; medium; concentration; flow; duration; activity; factor; method; detection limit; treatment status | integrate measurements or calculate transparently from collected activity data and identified factors | pollutant-specific kg or MJ | monitoring or permit frequency | all operating and upset periods in reporting period | all included emission sources and treatment systems | aggregate by pollutant and medium, then normalize to released product | accredited laboratory report; instrument QA; permit submission; factor citation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_output` | All foreground rows | normalized amount = reporting-period amount / released refined-oil mass × 1,000 kg | reconciled row amount; released reference-product mass | amount per 1,000 kg refined cottonseed oil |  |
| `active_substance_mass` | Acid, alkali, antioxidant, and formulated aids | active mass = supplied-solution mass × mass-fraction concentration; retain both supplied and active mass | supplied mass; concentration certificate or measured concentration | kg supplied product and kg active substance |  |
| `water_volume_to_mass` | Water and wastewater recorded by volume | mass = measured volume × documented density at declared temperature; do not assume 1,000 kg/m3 when salinity or oil content makes that assumption material | volume; density; temperature | kg water or wastewater | `eu-fdm-bref-2019` |
| `electricity_conversion` | Electricity records | MJ = kWh × 3.6; retain the original meter record and conversion direction | kWh | MJ |  |
| `steam_thermal_energy` | Steam when energy is reported | thermal energy = steam mass × (supply specific enthalpy - returned-condensate specific enthalpy), using declared pressure and temperature | kg steam; supply/return conditions; enthalpy source | MJ useful steam energy |  |
| `foreground_mass_balance` | Refinery reporting period | Compare crude-oil, chemical, and water inputs with refined oil, recovered products, residues, wastewater, direct releases, and inventory changes; investigate rather than force-close unexplained imbalance. | all mass-bearing inputs, outputs, and stock changes | documented mass-balance residual and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Match product name, CPC context, `Gossypium` origin, Tiangong reference-flow UUID, refining route, winterization status, and quality specification. | quality release; supplier and product specification; Tiangong identity lookup |
| `dq_temporal` | Foreground reporting period | Cover a representative continuous period or complete campaign including normal operation, cleaning, start-up, shutdown, and documented upset exclusions. | production calendar; batch register; meter coverage; exclusion log |
| `dq_completeness` | Foreground inventory | Reconcile crude oil, released oil, recovered outputs, solid residues, wastewater, utilities, chemicals, direct emissions, and stock changes; disclose excluded flows and their materiality. | mass balance; utility balance; waste register; completeness checklist |
| `dq_quality_specification` | Released refined oil | Report the applicable specification and methods. When CXS 210-1999 is the declared basis, include at least the applicable refined-oil acid value, peroxide value, matter volatile, insoluble impurities, soap, iron, and copper checks, plus cottonseed-oil identity testing. | laboratory certificate; `codex-cxs-210-1999` |
| `dq_geography_technology` | Background links and shared services | Use geography- and technology-representative datasets; document any proxy for crude oil, electricity, steam, chemicals, wastewater treatment, or waste treatment. | dataset metadata; supplier source; substitution statement |
| `dq_uncertainty` | Estimated, allocated, or converted values | Label measured, calculated, allocated, and estimated values; retain concentration, density, allocation, and factor uncertainty and test sensitivity for material choices. | calculation workbook; allocation worksheet; uncertainty record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Foreground data package | The quantitative reference is exactly 1 kg or an explicit multiple of bulk Cottonseed oil, refined `5c448d72-c368-4fd2-a3d0-e1cc73572241`, using Mass `93a60a56-a3c8-11da-a746-0800200b9a66` and kg from Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. |  |
| `validate_product_scope` | Reference product | The product is `Gossypium`-derived refined cottonseed oil; crude, hydrogenated, interesterified, fractionated, blended, formulated, non-food, or packaged products are not silently represented by this reference flow. | `codex-cxs-210-1999` |
| `validate_route_logic` | Refinery process | Every declared unit operation has matching input/output records; chemical and physical refining are not double counted, and winterization is included only when declared. | `epa-vegetable-oil-voc-1978`; `fsanz-cot102-2004` |
| `validate_upstream_link` | Crude-oil input | A separate upstream crude-cottonseed-oil dataset is linked and its extraction route and allocation are disclosed; cottonseed seed flow `a60671ff-7325-4636-9fba-bcc5f6afaeeb` is rejected as a crude-oil substitute. | `us-epa-vegetable-oil-neshap` |
| `validate_quality_release` | Refined-oil output | The output has a laboratory release against the declared specification. If CXS 210-1999 is used, verify its applicable refined-oil quality limits and cottonseed-oil identity provisions using declared sampling and analysis methods. | `codex-cxs-210-1999` |
| `validate_inventory_completeness` | Foreground reporting period | All material, utility, product, co-product, waste, wastewater, direct-emission, and inventory-change records required by the operated route are present or explicitly zero/not applicable with evidence. | `eu-fdm-bref-2019` |
| `validate_mass_balance` | Mass-bearing inventory | The foreground mass-balance residual is calculated and explained; values are not altered merely to force closure, and wet/dry basis and stock changes are consistent. |  |
| `validate_allocation` | Shared burdens and recovered outputs | Subdivision is attempted first; any physical or economic allocation is justified, uses reporting-period evidence, sums to 100% for allocated burdens, and includes a disclosed sensitivity. | `eu-pef-method-2021` |
| `validate_uuid_specificity` | Inventory identities | Generic or semantically wrong UUIDs are rejected; in particular, do not use the cottonseed seed flow for crude oil or the electrolytic-manganese-slag wastewater flow for refinery wastewater. |  |
| `validate_provisional_ranges` | Candidate-stage QA ranges | Reasoned-estimate ranges are screening flags only; foreground values outside them trigger review rather than automatic rejection, and publication requires reviewed acceptance or stronger evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground refinery data package that may support a published unit-process `secondary_dataset` or `background_dataset` after review |
| downstream_use | Link to a representative crude-cottonseed-oil dataset and use the refinery process in product systems for bulk refined cottonseed oil |
| allowed_use | Gate-to-gate refinery modelling and cradle-to-gate studies when upstream and any added downstream modules are explicit and compatible |
| excluded_use | Comparative claims without equivalent specification, route, geography, time, allocation, and packaging boundary; direct representation of crude, modified, blended, formulated, packaged, or non-food oil |
| required_metadata | PCR id/version; reference-flow UUID; refinery geography and period; crude-oil origin and upstream dataset; route; winterization; specification and tests; utilities; co-products and wastes; allocation; background substitutions; packaging boundary |
| required_quality_disclosure | Measurement coverage, calibration, mass-balance residual, data gaps, estimates, allocation sensitivity, proxy datasets, quality-test results, and unresolved UUIDs |
| update_trigger | Material change in crude-oil source, refining route, winterization, utility system, yield or losses, co-product market, waste treatment, geography, product specification, or reporting period; or availability of exact unresolved Tiangong identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | standard | Codex Alimentarius, *Standard for Named Vegetable Oils*, CXS 210-1999, current redesigned publication incorporating amendments through 2024, https://workspace.fao.org/sites/codex/Standards/CXS%20210-1999/CXS_210e.pdf (retrieved 2026-08-10) | Cottonseed-oil identity, edible-product scope, quality and composition checks, sampling/analysis linkage |
| `fsanz-cot102-2004` | official_guidance | Food Standards Australia New Zealand, *Final Assessment Report, Application A509: Food derived from insect-protected cotton line COT102*, 4 August 2004, https://www.fao.org/fileadmin/user_upload/gmfp/docs/1_A509_GM_Cotton_FAR_Final.pdf (retrieved 2026-08-10) | Cottonseed-specific refining evidence: gossypol removal and bleaching/deodorization reduction of cyclopropenoid fatty acids |
| `epa-vegetable-oil-voc-1978` | official_guidance | U.S. EPA, *Control of Volatile Organic Emissions from Manufacture of Vegetable Oils*, EPA-450/2-78-035, 1978, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9102156N.TXT (retrieved 2026-08-10) | Refining process decomposition, alkali neutralization, adsorptive bleaching, vacuum steam deodorization, and emissions awareness |
| `us-epa-vegetable-oil-neshap` | official_guidance | U.S. EPA, *Solvent Extraction for Vegetable Oil Production: National Emission Standards for Hazardous Air Pollutants (NESHAP)*, https://www.epa.gov/stationary-sources-air-pollution/solvent-extraction-vegetable-oil-production-national-emission (retrieved 2026-08-10) | Upstream cottonseed solvent-extraction boundary, solvent recovery, and hexane-release completeness |
| `eu-fdm-bref-2019` | official_guidance | European Commission JRC, *Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries*, 2019, DOI 10.2760/243911, https://doi.org/10.2760/243911 (retrieved 2026-08-10) | Vegetable-oil-refining environmental scope; energy, water, wastewater, air emissions, resource efficiency, monitoring, and data-quality priorities |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, corrected consolidated text, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279R(01) (retrieved 2026-08-10) | Allocation hierarchy: subdivision/system expansion, relevant physical relationship, then justified other relationship including economic allocation |
