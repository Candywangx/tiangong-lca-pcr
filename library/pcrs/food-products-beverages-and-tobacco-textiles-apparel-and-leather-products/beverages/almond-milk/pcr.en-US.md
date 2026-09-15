---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.almond-milk
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Almond milk

## 1. Scope and Applicability

This PCR applies to liquid, ready-to-drink almond-based beverages manufactured from almonds, an almond extract, almond butter, or another declared almond ingredient and placed on the market as almond milk, almond drink, or almond beverage. It covers plain and flavoured products, fortified and unfortified products, and refrigerated pasteurised or shelf-stable heat-treated products when almond is the characteristic plant source.

The foreground boundary starts with received almonds or a declared almond ingredient, process water, formulation ingredients, processing aids, cleaning materials, and packaging at the beverage plant. It includes almond preparation when performed on site, aqueous extraction or reconstitution, separation when used, formulation, homogenisation or other physical stabilisation, thermal treatment, cooling, filling, packaging, cleaning-in-place, and management of almond residue, off-specification beverage, packaging scrap, and wastewater at the plant gate. Upstream production of almonds, ingredients, energy, water, packaging, and treatment services is represented by linked upstream datasets unless it is part of the reporting organisation's foreground.

Animal milk, soy-, oat-, rice-, coconut-, or other non-almond beverages; multi-plant beverages in which almond is not the characteristic plant source; fermented spoonable products; infant formula; dry beverage powder; concentrated almond base sold for further formulation; almond oil; and raw or prepared almonds sold as food are excluded. Distribution, retail, consumer refrigeration, consumption, and packaging end-of-life are outside this foreground production boundary and may be added in a downstream life-cycle model.

The term “almond milk” in this PCR identifies the CPC product category and a plant-based beverage, not animal milk or a Codex milk product. Applicable market labelling rules and the declared formulation remain controlling for a concrete dataset. Product composition varies with plant input, processing route, fortification, and added ingredients, so the required qualifiers below are mandatory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.almond-milk |
| classification_refs | CPC 3.0: 24422 Almond milk |
| covered_products | Ready-to-drink almond-based beverages whose characteristic plant source is almond; plain or flavoured; fortified or unfortified; refrigerated or shelf-stable |
| excluded_products | Animal milk; non-almond plant beverages; non-characteristic almond blends; fermented spoonable products; infant formula; powders and concentrates for further formulation; almond oil; raw or prepared almonds |
| representative_product | Plain packaged almond-based beverage at the beverage manufacturing gate |
| production_route | Received almond material or almond ingredient; preparation and aqueous extraction or formulation; optional separation; formulation; homogenisation or equivalent stabilisation; pasteurisation, UHT, or another validated heat treatment; cooling; filling and packaging |
| market_state | Finished liquid beverage, packaged, refrigerated or shelf-stable as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished liquid almond-based beverage for beverage use |
| How much | 1 kg net almond-based beverage |
| How well | Meets the declared recipe, food-safety treatment, packaging configuration, and market-state specification |
| How long or cycle | One production-batch output at the beverage plant gate; shelf life is declared but not modelled unless storage is included |
| reference_flow_link | One kilogram of packaged Almond milk output from `beverage_finishing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Almond milk `c2d5b4f7-ef33-477e-8b8c-4114e05d3346` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | almond input form and almond content or dry-matter basis; complete formulation and fortification status; extraction or reconstitution route; separation method and residue fate; homogenisation or stabilisation route; thermal-treatment route and validated time-temperature condition; refrigerated or shelf-stable market state; packaging material and net fill; production geography and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net beverage mass excluding the packaging mass; normalize every foreground amount to 1 kg net packaged beverage. |
| `water_mass_consistency` | Water incorporated into product and process water | Mass | kg | Record water incorporated into the beverage separately from cleaning, cooling, and other process water; convert volume records using a measured or documented density and retain the conversion basis. |
| `almond_basis_disclosure` | Almonds, almond butter, paste, extract, concentrate, or powder | Mass | kg | Record the purchased input form and wet or dry basis; do not compare or aggregate almond inputs across forms without a documented dry-matter or solids conversion. |
| `energy_carrier_separation` | Electricity, fuel, steam, and purchased heat | Energy | kWh or MJ | Preserve the metered carrier and unit; convert only with a documented factor and do not merge electricity and thermal energy before upstream datasets are linked. |
| `packaging_net_mass` | Primary, secondary, and tertiary packaging | Mass | kg | Report packaging mass separately from net beverage mass and identify packaging material and reusable or one-way status. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Almonds or a declared almond ingredient and all other formulation, utility, cleaning, and packaging inputs received at the beverage plant |
| starting_condition_role | Foreground manufacturing-gate input condition |
| product_classification_scope | CPC 3.0 code 24422 as classification context; canonical scope is the almond-based beverage definition in this PCR |
| recursive_input_rule | An almond-milk or almond-beverage intermediate purchased from another producer is recorded once as an upstream product input with its own supplier dataset; do not recursively recreate its manufacturing inventory inside this foreground process. |
| upstream_dataset_requirement | Link upstream datasets for almond material, other ingredients, water, energy carriers, packaging, transport to the plant, and external waste or wastewater treatment. Supplier-specific datasets are preferred when material. |
| disclosure | Declare received almond form and origin, formulation route, on-site preparation and separation, thermal-treatment route, residue status and destination, packaging configuration, included transport, and any excluded or externally operated process. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_foreground` | Beverage plant foreground | Include all material and energy flows for preparation/formulation, stabilisation, thermal treatment, filling, packaging, cleaning, and on-site waste handling that occur inside the declared plant boundary. | `eu-pef-2021`; `iso-14044-2006` |
| `boundary_no_silent_cutoff` | Inventory completeness | Do not omit a known flow solely because no default amount is supplied; collect it, document a justified negligible-flow screen, or disclose the data gap. | `eu-pef-2021` |
| `boundary_upstream_links` | Purchased inputs and treatment services | Represent excluded upstream production and off-site treatment with linked datasets and disclose dataset geography, technology, and reference period. | `eu-pef-2021`; `iso-14044-2006` |
| `boundary_route_disclosure` | Product and process identity | Declare whether the beverage is made by direct almond extraction or by formulation from almond ingredients and whether it is pasteurised, UHT-treated, or otherwise stabilised. | `fda-pbma-guidance-2023`; `redan-2024-almond-beverage-htst` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `almond_base_preparation` | Almond preparation, extraction, and formulation | required | Always; individual operations are conditional on received almond form and declared recipe | Foreground raw-material preparation and beverage formulation | kg formulated almond beverage transferred to finishing |
| `beverage_finishing` | Stabilisation, thermal treatment, filling, and packaging | required | Always; the validated technology and market state are route-specific | Foreground finishing and reference-product production | 1 kg net packaged almond milk |
| `cleaning_and_wastewater` | Cleaning and wastewater management | required | Always for the wet-processing equipment in scope; external treatment remains an upstream service | Foreground hygiene utilities and wastewater transfer | kg net packaged almond milk |

### Process: Almond preparation, extraction, and formulation (`almond_base_preparation`)

This process covers inspection and preparation of received almonds when performed on site, aqueous extraction or use of a declared almond ingredient, optional separation, batching of formulation water, and addition of other recipe ingredients. The exact route is declared rather than inferred.

#### Inputs

##### Product flows

###### Almond material supplied to the beverage process (`almond_material_input`)

Record each received almond form separately, including whole or shelled almonds, almond butter or paste, almond extract, concentrate, or powder. Retain supplier, origin, moisture or solids basis, and lot identity.

- Selected flow: Almond material appropriate to the declared purchased form
- Flow property / unit: Mass / kg
- Amount rule: measured received mass consumed by conforming batches, corrected for inventory change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_and_ingredient_records`
- Sources: `fda-pbma-guidance-2023`
- Range: Provisional almond-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.50
  - Unit: kg/kg net packaged beverage
  - Basis: broad route- and formulation-dependent screening range; not a default recipe
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formulation and preparation water (`formulation_water`)

Record water incorporated into the beverage separately from soaking, rinsing, and other preparation water so that the product water balance remains auditable.

- Selected flow: Water, process or potable quality as applicable
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-record water charged, separated by incorporated and non-incorporated use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Range: Provisional total preparation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.50
  - Upper: 10.0
  - Unit: kg/kg net packaged beverage
  - Basis: incorporated water plus route-dependent soaking, rinsing, and preparation water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other formulation ingredients and processing aids (`formulation_ingredients`)

Record oils, sweeteners, salt, stabilisers, emulsifiers, flavours, vitamin and mineral premixes, and processing aids by material identity. Zero use is valid only when the recipe and batch record confirm absence.

- Selected flow: Recipe-specific ingredient or processing aid
- Flow property / unit: Mass / kg
- Amount rule: measured batch issue less documented returns, grouped only when upstream datasets and functions are equivalent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_and_ingredient_records`
- Sources: `fda-pbma-guidance-2023`; `redan-2024-almond-beverage-htst`

###### Electricity for preparation and formulation (`preparation_electricity`)

Record electricity for preparation, wet milling, pumping, separation, mixing, and transfer using submetered data or a documented allocation from a shared meter.

- Selected flow: Electricity, supplied to the site
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated equipment load multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg formulated beverage transferred to finishing, then normalized to reference output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Provisional preparation-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1.0
  - Unit: kWh/kg formulated beverage
  - Basis: broad first-pass screening range for preparation and formulation equipment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Formulated almond beverage transferred to finishing (`formulated_beverage_output`)

Calculate the transferred beverage from calibrated vessel or flow measurements and reconcile it with batch inputs, retained material, samples, spills, and separated residue.

- Selected flow: Formulated almond beverage, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or volume converted with measured batch density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_output_records`

##### Waste flows

###### Separated almond residue and preparation rejects (`almond_residue`)

Record wet residue, skins, screening rejects, and other almond-derived material separately by actual destination and whether it is a saleable co-product, animal-feed material, recovered material, or waste.

- Selected flow: Almond residue or preparation reject, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch or container mass, adjusted for inventory change and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_loss_records`
- Range: Provisional residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg wet residue/kg net packaged beverage
  - Basis: route-dependent wet residue and rejects; zero is possible for some reconstitution routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Stabilisation, thermal treatment, filling, and packaging (`beverage_finishing`)

This process covers homogenisation or equivalent stabilisation, a validated thermal treatment, cooling, product holding, filling, and packaging. The pilot-scale study supports the presence of formulation, homogenisation, and heat-treatment operations, but its formulation and operating conditions are not category-wide defaults.

#### Inputs

##### Product flows

###### Formulated beverage received from preparation (`formulated_beverage_input`)

Link this intermediate directly to `formulated_beverage_output` without duplicating the upstream almond and ingredient inventory.

- Selected flow: Formulated almond beverage, intermediate
- Flow property / unit: Mass / kg
- Amount rule: equal to the measured transfer into finishing after documented holding loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_output_records`

###### Electricity for stabilisation and filling (`finishing_electricity`)

Record electricity for homogenisation, pumping, heat-treatment auxiliaries, cooling, compressed air, filling, and packaging equipment.

- Selected flow: Electricity, supplied to the site
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented shared-meter allocation to the conforming product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Provisional finishing-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2.0
  - Unit: kWh/kg net packaged beverage
  - Basis: broad first-pass screening range for stabilisation, cooling, filling, and packaging equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fuel, steam, or purchased heat for thermal treatment (`thermal_energy`)

Record the actual energy carrier used to heat the beverage and any attributable hot-water system losses inside the declared boundary.

- Selected flow: Route-specific fuel, steam, or purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: metered carrier use or calculated useful heat and documented efficiency
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `redan-2024-almond-beverage-htst`
- Range: Provisional thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10.0
  - Unit: MJ/kg net packaged beverage
  - Basis: broad route-dependent screening range; zero applies only when all thermal energy is represented through electricity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary container, closure, label, secondary grouping, and attributable tertiary packaging separately by material and recycled-content specification.

- Selected flow: Packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging less returns and inventory change, cross-checked against filled unit count and bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.25
  - Unit: kg packaging/kg net packaged beverage
  - Basis: broad screening range spanning lightweight and heavy packaging configurations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Packaged almond milk reference product (`packaged_almond_milk`)

This row is the quantitative reference. Net beverage mass excludes packaging and is reconciled to accepted filled units.

- Selected flow: Almond milk `c2d5b4f7-ef33-477e-8b8c-4114e05d3346`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net packaged almond milk
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Off-specification beverage and filling loss (`off_spec_beverage`)

Record beverage not accepted as product by destination, including rework returned within the same batch system, recovered product, animal-feed use, wastewater discharge, or waste treatment.

- Selected flow: Off-specification almond beverage, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or drained mass net of documented in-process rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_loss_records`
- Range: Provisional off-specification-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg net packaged beverage
  - Basis: broad campaign-level screening range before site evidence is available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging scrap (`packaging_scrap`)

Record damaged and unused packaging by material and destination; exclude packaging returned to usable inventory.

- Selected flow: Packaging waste, material-specific
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass or rejected unit count multiplied by verified component mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Elementary flows

### Process: Cleaning and wastewater management (`cleaning_and_wastewater`)

This process covers water, chemicals, and energy for cleaning wet-processing equipment and transfer of wastewater from the foreground plant. External wastewater treatment is linked as a treatment service unless operated inside the declared foreground.

#### Inputs

##### Product flows

###### Cleaning and rinse water (`cleaning_water`)

Record cleaning-in-place, manual wash, and rinse water separately from formulation water and once-through cooling water.

- Selected flow: Water, process or potable quality as applicable
- Flow property / unit: Mass / kg
- Amount rule: metered cleaning water or validated cleaning-cycle volume multiplied by completed cycle count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Range: Provisional cleaning-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 20.0
  - Unit: kg/kg net packaged beverage
  - Basis: broad first-pass range for batch and continuous cleaning configurations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning agents (`cleaning_agents`)

Record alkali, acid, disinfectant, and other cleaning agents as supplied and retain concentration data needed to link the correct upstream dataset.

- Selected flow: Cleaning chemical, product-specific
- Flow property / unit: Mass / kg
- Amount rule: issued or dosed mass from chemical records and concentration settings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Range: Provisional cleaning-agent screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg supplied chemical/kg net packaged beverage
  - Basis: broad site- and concentration-dependent screening range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

##### Waste flows

###### Process wastewater transferred to treatment (`process_wastewater`)

Record wastewater mass or volume and the receiving treatment route. Retain monitored pollutant data when available, including chemical oxygen demand, solids, pH, and nutrients relevant to the discharge permit or treatment model.

- Selected flow: Wastewater, treatment-route-specific
- Flow property / unit: Mass / kg
- Amount rule: effluent meter reading or reconciled water balance, excluding separately measured uncontaminated cooling water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged almond milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Range: Provisional wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 25.0
  - Unit: kg/kg net packaged beverage
  - Basis: broad screening range reconciled against non-incorporated water uses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Shared operations and outputs | Avoid allocation first by process subdivision, separate metering, or expanding the data collection to preserve physical causality. | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_physical_then_economic` | Unavoidable multifunctionality | When subdivision is not feasible, use a documented physical relationship that reflects causality; use economic allocation only when a defensible physical relationship cannot be established, and disclose prices, period, currency, and sensitivity. | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_residue_status` | Almond residue and recovered off-specification product | Classify the output before allocation. Waste receives no co-product credit and carries its treatment; a saleable co-product receives the selected allocation only after its quantity, destination, and market status are evidenced. | `eu-pef-2021` |
| `allocation_shared_utilities` | Shared energy, water, cleaning, and packaging lines | Prefer submetered or cycle-specific use; otherwise allocate by documented equipment operating time, throughput, or another causal driver and report the driver. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_almond_and_ingredient_records` | `almond_base_preparation` | Almond and recipe inputs | Purchase, receiving, inventory, and batch-issue records | material id; supplier; origin; lot; input form; moisture or solids basis; opening and closing inventory; issued mass; returned mass | Reconcile lot and batch records to calibrated scales | kg as supplied and kg dry matter when converted | Each batch; monthly reconciliation | At least 12 consecutive representative months when available; otherwise the declared production period | All included lines and products | Sum consumed mass equal to opening plus receipts minus closing, returns, and documented diversions; normalize to accepted output | Scale calibration; supplier specification; signed batch record; inventory reconciliation |
| `cp_water_and_wastewater_records` | `almond_base_preparation`; `cleaning_and_wastewater` | Formulation, preparation, cleaning water, and wastewater | Meter, batch, cleaning-cycle, and effluent records | meter start and end; batch charge; cycle volume; incorporated water; cooling water; effluent volume or mass; density; pollutant tests; destination | Read calibrated meters and reconcile with batch recipes and water balance | kg or m3 with documented density | Each batch or shift; monthly reconciliation | Same reporting period as accepted product output, including seasonal and cleaning-cycle variation | All included water users and discharge points | Separate incorporated, evaporated, recirculated, and discharged water; normalize net use and effluent to accepted output | Meter calibration; recipe record; cleaning log; laboratory result; utility invoice reconciliation |
| `cp_energy_records` | `almond_base_preparation`; `beverage_finishing`; `cleaning_and_wastewater` | Electricity and thermal energy | Submeter, fuel, steam, purchased-heat, and equipment records | meter readings; carrier; energy unit; equipment load; run time; throughput; shared-meter allocation driver | Prefer submetering; otherwise calculate from verified load and time or allocate a reconciled shared meter | kWh or MJ by carrier | Each campaign or shift; monthly reconciliation | Same reporting period as accepted product output, including start-up, shutdown, and seasonal loads | All foreground equipment and utilities | Sum by carrier; subtract unrelated loads; allocate shared use with a causal driver; normalize to accepted output | Meter calibration; utility invoice; equipment specification; run log; allocation worksheet |
| `cp_batch_output_records` | `almond_base_preparation`; `beverage_finishing` | Intermediate transfer and accepted product | Vessel, flowmeter, density, filler, and quality-release records | batch id; transfer volume or mass; density; filled units; net fill; accepted units; samples; rework; hold and reject quantities | Measure transfer and accepted fill; convert volume with measured batch density | kg | Each batch | Every represented batch in the declared reporting period | All included production lines | Reconcile formulated transfer to accepted output, losses, samples, rework, and inventory change | Calibrated vessel or meter; density test; filler checks; release record; mass-balance sign-off |
| `cp_packaging_records` | `beverage_finishing` | Packaging inputs and scrap | Bill of materials, issue, unit-count, inventory, and scrap records | component id; material; mass per unit; recycled content; issued count or mass; accepted units; returned units; scrap; destination | Reconcile component issue and measured scrap against accepted filled units | kg | Each campaign; monthly reconciliation | Same reporting period and product-packaging configurations as accepted output | Primary, secondary, and attributable tertiary packaging | Calculate consumed mass by material and normalize to net beverage mass; keep reusable assets separate | Verified component mass; supplier specification; inventory record; scrap ticket |
| `cp_residue_and_loss_records` | `almond_base_preparation`; `beverage_finishing` | Almond residue, rejects, off-specification beverage, and packaging loss | Scale, dispatch, rework, waste-manifest, and destination records | material type; wet mass; dry-matter result when used; rework; destination; waste or co-product status; revenue if economic allocation is used | Weigh each material stream or verify container mass and collection frequency | kg wet and kg dry matter where relevant | Each batch or dispatch | Same reporting period as production, with dispatch timing and inventory change reconciled | All included loss and residue streams | Subtract internal rework; aggregate by destination and status; normalize to accepted output | Scale calibration; dispatch ticket; waste manifest; buyer record; dry-matter test |
| `cp_cleaning_records` | `cleaning_and_wastewater` | Cleaning agents and cleaning cycles | Chemical dosing, concentration, cycle, and inventory records | chemical id; supplied concentration; dose; cycle count; line; opening and closing inventory; returned chemical | Read dosing system or reconcile issued chemical to completed cycles | kg as supplied and kg active substance when converted | Each cleaning cycle; monthly reconciliation | Every cleaning cycle attributable to the declared production period | All included wet-processing and filling equipment | Sum by chemical; separate active-substance conversions; normalize to accepted output | Doser calibration; safety data sheet; concentration test; cleaning log; inventory reconciliation |
| `cp_thermal_process_records` | `beverage_finishing` | Food-safety and stabilisation route | Process-control and release records | treatment technology; inlet and outlet temperature; hold time; pressure; homogenisation settings; flow rate; cooling condition; deviations; disposition | Capture validated control-system records and retain deviation review | °C; s; bar; kg/h as applicable | Continuous or each batch | Every represented batch and deviation in the declared reporting period | Every included thermal-treatment and stabilisation line | Report route and approved operating window; do not average away excursions | Calibration; validation study; electronic process record; deviation and release approval |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | normalized amount = attributable batch amount / accepted net packaged beverage mass | Attributable amount; accepted unit count; verified net fill or accepted mass | Amount per 1 kg net packaged almond milk | `iso-14044-2006` |
| `calc_volume_to_mass` | Water, beverage, and wastewater volume records | mass = measured volume multiplied by measured or documented density at the applicable temperature | Volume; density; temperature and conversion basis | kg | `iso-14044-2006` |
| `calc_almond_dry_matter` | Unlike almond input forms | dry-matter input = as-supplied mass multiplied by measured solids fraction | As-supplied mass; moisture or solids result | kg dry matter for comparability while retaining as-supplied mass |  |
| `calc_mass_balance` | Each batch and reporting period | input mass = accepted product + exported co-products + wastes and emissions + inventory change + documented mass-balance residual | Ingredient and water inputs; intermediate inventory; accepted output; residue; off-specification product; wastewater and measured losses | Reconciled mass-balance residual and completeness flag | `eu-pef-2021` |
| `calc_shared_utility_allocation` | Shared utilities | attributable utility = reconciled shared total multiplied by documented causal driver share | Shared total; equipment time, throughput, or cycle driver | Product-attributable utility by carrier | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and scope | Retain the recipe, label or product specification, almond input form, almond content or solids basis, fortification, treatment route, packaging, and market state for every represented product family. | Approved product specification; recipe; label; release record |
| `dq_temporal_coverage` | Foreground averages | Use at least 12 consecutive representative months when available; otherwise disclose the shorter period, seasonality, start-up or trial status, and why it represents the declared product. | Dated production, utility, procurement, and waste records |
| `dq_meter_and_scale_control` | Measured quantities | Use calibrated or verified meters and scales; record conversion factors, density, missing-data substitutions, and shared-meter allocation drivers. | Calibration certificates; meter logs; calculation workbook |
| `dq_completeness` | Inventory boundary | Account for all recipe inputs, major water and energy uses, packaging, accepted output, residue, off-specification product, wastewater, and known waste destinations; quantify or disclose every gap. | Completeness checklist; mass and water balances; waste manifests |
| `dq_thermal_route` | Stabilisation and thermal treatment | Retain validated process route and actual control records; disclose deviations and rejected or reworked product instead of substituting a generic pasteurisation or UHT assumption. | Validation study; electronic temperature-time record; deviation disposition |
| `dq_upstream_representativeness` | Linked datasets | Document supplier or database source, geography, technology, reference year, and any proxy for almonds, ingredients, utilities, packaging, transport, and treatment services. | Dataset metadata and proxy justification |
| `dq_allocation_transparency` | Multifunctional operations and co-products | Report subdivision attempts, allocation basis, factors, price period if used, residue status, and a sensitivity result when allocation materially affects outcomes. | Allocation worksheet; buyer or destination evidence; sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The product flow UUID, Mass flow-property UUID, mass unit-group UUID, kg unit, and 1 kg net amount must match the reference-flow definition. |  |
| `validate_required_qualifiers` | Dataset metadata | Fail completeness when any required qualifier is missing or when plant source, treatment route, packaging, or market state is ambiguous. | `fda-pbma-guidance-2023`; `codex-stan-206-1999` |
| `validate_process_coverage` | Foreground inventory | Confirm that all three required process groups are represented and that omitted route-specific operations are explicitly not applicable rather than silently absent. | `redan-2024-almond-beverage-htst`; `eu-pef-2021` |
| `validate_mass_balance` | Batch and period inventory | Require a documented mass-balance residual and investigate material unexplained differences before the dataset is released. | `eu-pef-2021` |
| `validate_water_separation` | Water inventory | Confirm that incorporated, preparation, cleaning, cooling, recirculated, and discharged water are separated or that any aggregation is justified and non-duplicative. |  |
| `validate_energy_carriers` | Energy inventory | Confirm that electricity and each thermal-energy carrier are reported separately and converted with documented factors. | `eu-pef-2021` |
| `validate_residue_allocation` | Almond residue and off-specification output | Confirm destination and waste or co-product status before applying allocation or treatment; no unsubstantiated avoided-product credit is allowed. | `iso-14044-2006`; `eu-pef-2021` |
| `validate_reasoned_estimates` | Provisional ranges | Treat every `reasoned_estimate` range as a screening flag only; do not replace collected foreground values with its midpoint or publish it as an allowed range without review. |  |
| `validate_data_quality_disclosure` | Published dataset package | Confirm temporal, geographical, technological, completeness, meter-quality, proxy, allocation, and uncertainty disclosures and identify every skipped check. | `iso-14044-2006`; `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for packaged almond milk at the beverage plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product-system modelling in which the declared almond formulation, manufacturing route, geography, period, packaging, and market state are representative; comparison only after harmonising functional unit, boundary, allocation, and data quality |
| excluded_use | Nutritional equivalence claims; animal-milk substitution claims; unqualified extrapolation to other plant beverages, powders, concentrates, fermented products, or materially different extraction and treatment routes |
| required_metadata | PCR id and version; product and almond input identity; recipe or solids basis; fortification; extraction or reconstitution route; separation; homogenisation; thermal-treatment route; refrigeration or shelf-stable state; packaging; plant and geography; reference period; accepted output; upstream datasets; allocation; residue destinations |
| required_quality_disclosure | Record coverage and temporal representativeness; meter and scale status; mass- and water-balance residuals; route deviations; data gaps and substitutions; proxy datasets; allocation sensitivity; provisional reasoned-estimate ranges remaining in guidance |
| update_trigger | Material recipe, almond input form, plant or line, treatment technology, packaging, residue destination, allocation method, energy or water system, supplier geography, or evidence update; otherwise review at least every three years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-pef-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Life-cycle boundary, inventory completeness, multifunctionality, data-quality, reporting, and verification framework |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022. https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | Goal and scope, inventory, allocation, interpretation, reporting, and review principles |
| `fda-pbma-guidance-2023` | official_guidance | U.S. FDA, Draft Guidance for Industry: Labeling of Plant-Based Milk Alternatives and Voluntary Nutrient Statements, February 2023, FDA-2023-D-0451. https://www.fda.gov/media/165420/download (retrieved 2026-08-11; draft, nonbinding) | Plant-based beverage identity, direct extraction and formulation routes, composition variability, ingredient and fortification disclosure |
| `codex-stan-206-1999` | standard | Codex Alimentarius, General Standard for the Use of Dairy Terms, CODEX STAN 206-1999. https://www.fao.org/input/download/standards/332/CXS_206e.pdf (retrieved 2026-08-11) | Distinction between animal milk or milk products and the plant-based beverage category |
| `redan-2024-almond-beverage-htst` | literature | Redan et al., Effect of pilot-scale high-temperature short-time processing on the retention of key micronutrients in a fortified almond-based beverage: implications for fortification of plant-based milk alternatives, Frontiers in Nutrition (2024), DOI: 10.3389/fnut.2024.1468828 | Almond-beverage formulation, homogenisation, thermal-treatment process decomposition, route disclosure, and process-record needs; experimental conditions are not category defaults |
