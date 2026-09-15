---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.grapefruit-juice
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Grapefruit juice

## 1. Scope and Applicability

This PCR supports foreground data packages for unfermented grapefruit juice intended for direct consumption at the processing-site gate. It covers directly expressed (not-from-concentrate) juice, juice made from grapefruit concentrate, and combinations of those routes when the route shares are declared. The foreground boundary may include fresh-fruit receipt, sorting, washing, citrus-oil recovery, mechanical extraction, screening or finishing, clarification, blending or reconstitution, preservation, cooling, filling, primary packaging, cleaning-in-place, and on-site wastewater handling when these operations are controlled by the reporting site.

Grapefruit concentrate as a product sold in its concentrated state, grapefruit nectar, multi-fruit juice, grapefruit-flavoured drinks, fermented beverages, and fresh grapefruit are outside the product scope. Distribution, retail, consumer refrigeration or preparation, and packaging end-of-life are outside the factory-gate foreground boundary unless a study explicitly extends it. Applicable food-law and market specifications prevail when they are stricter than the identity and quality checks stated here.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.grapefruit-juice |
| classification_refs | CPC 3.0: 21432 (Grapefruit juice; exact mapping context) |
| covered_products | Unfermented single-strength grapefruit juice; not-from-concentrate grapefruit juice; grapefruit juice from concentrate; declared blends of directly expressed and reconstituted grapefruit juice |
| excluded_products | Grapefruit juice concentrate sold as concentrate; grapefruit nectar; multi-fruit juices; flavoured or diluted juice drinks that do not meet the declared grapefruit-juice identity; fermented grapefruit beverages; fresh grapefruit |
| representative_product | Unfermented single-strength grapefruit juice released at the processing-site gate |
| production_route | Fresh grapefruit receipt, preparation, mechanical juice extraction and finishing, with optional concentration steps under the same foreground control; and/or receipt of grapefruit concentrate followed by reconstitution and blending; then preservation, cooling, and factory-gate preparation |
| market_state | Finished liquid in a declared bulk, aseptic, chilled, frozen, canned, or other primary-packaged state at the processing-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished, unfermented grapefruit juice intended for direct consumption |
| How much | 1 kg net mass of grapefruit juice, excluding primary and secondary packaging |
| How well | Meets the declared route-specific grapefruit-juice identity, composition, preservation, and market requirements; reconstituted juice meets at least 10.0 degrees Brix at 20 degrees C under the Codex baseline unless a stricter applicable requirement is declared |
| How long or cycle | One production lot at factory-gate release; shelf life is a required qualifier but is not the normalization basis |
| reference_flow_link | `grapefruit_juice_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Grapefruit juice `796385da-cb79-4275-8087-13bc9656ff65` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | route share (not-from-concentrate and/or from-concentrate); fruit species and product identity; measured soluble-solids result and method; preservation method; bulk or primary-package state and packaging material; pulp or clarification state; added sweetener and other optional ingredient status; production geography and period; shelf-life or storage condition; co-product and waste treatment; allocation method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg net grapefruit juice at factory-gate release; exclude packaging mass from the reference amount and record packaging separately. |
| `route_mass_conversion` | all route inputs and outputs | Mass | kg | Preserve measured lot masses and moisture or concentration state. Convert volume records to mass only with a batch- or product-specific density and retain the density value, temperature, method, and source record. |
| `soluble_solids_check` | reconstituted grapefruit juice | Soluble solids by refractometry | degrees Brix at 20 degrees C | Record the corrected soluble-solids result and method. Under the Codex baseline, reconstituted grapefruit juice must be at least 10.0 degrees Brix; apply and cite a stricter market rule when relevant. |
| `energy_carrier_accounting` | electricity, fuels, steam, refrigeration, and recovered energy | Energy or carrier-specific property | kWh, MJ, or carrier mass/volume unit | Keep purchased carriers and on-site conversions separate; record metered quantities and conversion factors before normalizing to the reference flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Harvested grapefruit, single-strength grapefruit juice, and/or grapefruit concentrate received at the processing site, with quantity, origin, supplier, concentration state, and transport hand-off declared |
| starting_condition_role | Gate-to-gate foreground starting condition with linked upstream supply datasets |
| product_classification_scope | Grapefruit juice only; route intermediates remain explicit and must not broaden the PCR to grapefruit nectar, mixed juice, fresh fruit, or concentrate sold as the reference product |
| recursive_input_rule | Record purchased grapefruit juice or concentrate as an explicit product input and link it to an upstream dataset; do not recursively reproduce its manufacture inside the same foreground package unless those operations are under the reporting site's control and are subdivided as foreground processes |
| upstream_dataset_requirement | Link representative upstream datasets for grapefruit cultivation and harvest, purchased juice or concentrate, ingredients and processing aids, packaging, utilities, fuels, refrigerants, inbound transport, and off-site waste or wastewater treatment |
| disclosure | Declare route shares, origin and concentration state of each grapefruit-derived input, controlled operations, preservation and packaging state, temporal and geographic coverage, cut-offs, data gaps, co-product fate, and allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_controlled_operations` | foreground operations | Include every controlled operation needed to convert the declared received grapefruit-derived inputs into the reference product, including route-specific preparation, extraction, screening, reconstitution or blending, preservation, cooling, filling, cleaning, and on-site residue or effluent management. | `jrc-fdm-bref-2019` |
| `boundary_upstream_links` | purchased inputs and services | Represent excluded upstream production and off-site treatment with linked datasets rather than treating purchased grapefruit, concentrate, ingredients, packaging, energy, transport, or waste treatment as burden-free. | `ec-pef-method-2021` |
| `boundary_route_specificity` | route selection | Include only processes that occurred for the represented production mix, but declare the not-from-concentrate and from-concentrate shares and retain intermediate mass balances for each route. |  |
| `boundary_direct_releases` | controlled site releases | Record direct emissions, refrigerant losses, wastewater, solid residues, and product losses that cross the controlled-site boundary; do not hide them in a generic utility total. | `jrc-fdm-bref-2019` |
| `boundary_downstream_exclusion` | factory-gate dataset | Exclude distribution, retail, consumer use, and end-of-life from this foreground package unless the declared study extends the boundary and reports those stages separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fresh_fruit_extraction` | Fresh grapefruit preparation, extraction, and finishing | conditional | Include when fresh grapefruit is processed under foreground control. | Foreground conversion of accepted fruit to juice intermediate and separated citrus materials | Per kg accepted fresh grapefruit and per kg juice intermediate |
| `reconstitution_blending` | Concentrate receipt, reconstitution, and blending | conditional | Include when grapefruit concentrate, purchased single-strength juice, or permitted blending ingredients are used under foreground control. | Foreground formulation of route-specific juice intermediate | Per kg blended grapefruit juice intermediate |
| `stabilisation_factory_gate` | Preservation, cooling, filling, and factory-gate preparation | required | Always include the actual preservation and release operations; include filling and primary packaging when performed by the reporting site. | Production of the declared reference grapefruit juice | Per 1 kg reference product |
| `site_services_effluent` | Cleaning, utility support, and effluent handling | required | Include site services attributable to the represented production and all controlled effluent or residue management. | Supporting foreground operations and boundary-crossing releases | Per 1 kg reference product |

### Process: Fresh grapefruit preparation, extraction, and finishing (`fresh_fruit_extraction`)

#### Inputs

##### Product flows

###### Accepted fresh grapefruit (`fresh_grapefruit_input`)

Record sound grapefruit entering the controlled preparation line after separately identifying rejected inbound fruit. Supplier and lot mass records connect the foreground operation to the upstream fruit dataset.

- Selected flow: Grapefruit, fresh
- Flow property / unit: Mass / kg
- Amount rule: accepted fresh-grapefruit mass assigned to the represented production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_route_mass_records`
- Range: Provisional fresh-fruit input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1.0
  - Upper: 5.0
  - Unit: kg fresh grapefruit/kg reference grapefruit juice
  - Basis: broad initial route-specific estimate pending reviewed site or literature evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation and extraction water (`fresh_route_water`)

Record process water used for washing, fruit handling, oil recovery, extraction support, and finishing when it crosses the process boundary; do not combine it with CIP water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance water supplied to the fresh-fruit route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_route_utility_records`
- Range: Provisional fresh-route water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg water/kg reference grapefruit juice
  - Basis: broad initial estimate including route variability, pending reviewed evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fresh-route electricity (`fresh_route_electricity`)

Record metered electricity for conveying, sorting, washing, oil recovery, extraction, screening, pumping, and finishing assigned to this route.

- Selected flow: Electricity, supplied to processing site
- Flow property / unit: Energy / kWh
- Amount rule: route-specific meter total or documented allocation of site electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_route_utility_records`
- Range: Provisional fresh-route electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg reference grapefruit juice
  - Basis: broad initial estimate pending reviewed technology-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Screened grapefruit juice intermediate (`screened_juice_intermediate`)

Record the measured juice mass after mechanical extraction and screening or finishing, before downstream blending or preservation.

- Selected flow: Grapefruit juice, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate juice mass at the extraction-process hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh grapefruit and per 1 kg reference grapefruit juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_route_mass_records`

###### Recovered grapefruit oil (`recovered_grapefruit_oil`)

Record recovered citrus oil as a co-product only when it leaves the process with a documented use or market; otherwise record its actual waste treatment.

- Selected flow: Grapefruit essential oil
- Flow property / unit: Mass / kg
- Amount rule: measured recovered oil mass leaving the extraction process as a co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh grapefruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_route_mass_records`

###### Usable peel, pulp, and seed co-product (`usable_citrus_residue`)

Record separated citrus solids as product output only when a documented downstream use makes them a co-product; identify the material state and destination.

- Selected flow: Grapefruit peel, pulp, and seeds for further use
- Flow property / unit: Mass / kg
- Amount rule: measured usable residue mass dispatched for further use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh grapefruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_route_mass_records`

##### Waste flows

###### Rejected fruit and unusable citrus residue (`fresh_route_organic_waste`)

Record rejected fruit, peel, pulp, seeds, and other organic solids that leave without a co-product function, separated by treatment route where materially different.

- Selected flow: Citrus processing organic waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh grapefruit and per 1 kg reference grapefruit juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_route_mass_records`
- Range: Provisional citrus-solid mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg residue/kg accepted fresh grapefruit
  - Basis: physical upper screen before investigating measurement boundary or moisture-state errors
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fresh-route wastewater (`fresh_route_wastewater`)

Record wastewater leaving fruit preparation, oil recovery, extraction, and finishing before site treatment or off-site transfer.

- Selected flow: Wastewater from fruit-juice processing
- Flow property / unit: Mass / kg
- Amount rule: measured or water-balance wastewater mass assigned to the fresh-fruit route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_water_effluent_records`
- Range: Provisional fresh-route wastewater screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 12
  - Unit: kg wastewater/kg reference grapefruit juice
  - Basis: broad initial estimate pending reviewed site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Concentrate receipt, reconstitution, and blending (`reconstitution_blending`)

#### Inputs

##### Product flows

###### Grapefruit concentrate or purchased juice intermediate (`grapefruit_derived_input`)

Record each purchased grapefruit-derived input separately by concentration state, soluble solids, supplier, origin, and lot; link each to an upstream dataset.

- Selected flow: Grapefruit juice concentrate or purchased single-strength grapefruit juice
- Flow property / unit: Mass / kg
- Amount rule: measured input mass by concentration state and supplier lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_batch_records`
- Range: Provisional grapefruit-derived input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 1.2
  - Unit: kg input/kg reference grapefruit juice
  - Basis: broad initial range spanning concentrate and single-strength inputs pending product-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Potable reconstitution water (`reconstitution_water`)

Record potable water added to reconstitute concentrate or adjust the declared blend; keep it separate from cleaning and cooling water.

- Selected flow: Potable water
- Flow property / unit: Mass / kg
- Amount rule: batch-meter or formulation-record water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_batch_records`
- Range: Provisional reconstitution-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg water/kg reference grapefruit juice
  - Basis: broad initial formulation range pending batch-specific concentration data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Optional ingredients and processing aids (`optional_ingredients`)

Record every added sweetener, restored grapefruit component, clarification material, processing aid, or other permitted ingredient by substance and actual batch mass; legal permissibility is market-specific.

- Selected flow: Declared ingredient or processing aid, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: formulation or issue-record mass for each substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_batch_records`

###### Reconstitution and blending electricity (`blending_electricity`)

Record metered or allocated electricity for concentrate handling, pumping, mixing, clarification, and blending.

- Selected flow: Electricity, supplied to processing site
- Flow property / unit: Energy / kWh
- Amount rule: route-specific meter total or documented allocation of site electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_utility_records`
- Range: Provisional blending-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg reference grapefruit juice
  - Basis: broad initial estimate pending reviewed technology-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Blended grapefruit juice intermediate (`blended_juice_intermediate`)

Record the measured formulation output transferred to preservation, together with soluble solids, temperature, and route shares.

- Selected flow: Grapefruit juice, blended intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured batch output mass at the blending-process hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reconstitution_batch_records`

##### Waste flows

###### Off-specification blend and formulation loss (`blending_product_loss`)

Record off-specification product, tank heel, filter residue, and unrecovered formulation loss by actual destination.

- Selected flow: Grapefruit-juice formulation waste
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance loss assigned to the blending batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reconstitution_batch_records`
- Range: Provisional blending-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg loss/kg blended juice intermediate
  - Basis: broad initial mass-balance screen pending reviewed site evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Preservation, cooling, filling, and factory-gate preparation (`stabilisation_factory_gate`)

#### Inputs

##### Product flows

###### Juice intermediate supplied to preservation (`juice_to_stabilisation`)

Record the mass, route shares, soluble solids, and temperature of juice entering the actual preservation and factory-gate preparation sequence.

- Selected flow: Grapefruit juice, pre-preservation intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from extraction and/or blending
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_gate_batch_records`

###### Thermal energy or steam (`preservation_thermal_energy`)

Record purchased heat, fuel, or steam used for pasteurisation, sterilisation, evaporation, hot filling, or other declared preservation; keep carrier types separate.

- Selected flow: Thermal energy carrier, route-specific
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered carrier use or documented equipment energy balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilisation_utility_records`
- Range: Provisional preservation-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg reference grapefruit juice
  - Basis: broad initial estimate spanning preservation technologies pending reviewed route-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Stabilisation and filling electricity (`stabilisation_electricity`)

Record electricity for pumping, heat exchange, cooling, refrigeration, aseptic systems, filling, conveyors, and product storage attributable to this process.

- Selected flow: Electricity, supplied to processing site
- Flow property / unit: Energy / kWh
- Amount rule: process meter total or documented allocation of site electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilisation_utility_records`
- Range: Provisional stabilisation-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg reference grapefruit juice
  - Basis: broad initial estimate pending reviewed site and technology evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging (`primary_packaging_input`)

Record each primary package, closure, liner, and aseptic component when filling occurs within the foreground boundary; omit the row only for a declared unpackaged bulk output.

- Selected flow: Primary packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: packaging issue records minus returned unused material, by material and component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_gate_batch_records`
- Range: Provisional primary-packaging screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg packaging/kg reference grapefruit juice
  - Basis: broad initial estimate spanning bulk and retail primary-package states pending packaging-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Grapefruit juice reference output (`grapefruit_juice_reference_output`)

This is the net finished grapefruit juice released at the processing-site gate after the declared preservation and factory-gate preparation operations.

- Selected flow: Grapefruit juice `796385da-cb79-4275-8087-13bc9656ff65`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg net grapefruit juice, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Product and packaging loss at preservation or filling (`factory_gate_product_loss`)

Record preservation rejects, start-up and changeover product, tank heel, damaged packages, and packaging scrap separately by material and destination.

- Selected flow: Product or packaging waste, material-specific
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass or reconciled batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_gate_batch_records`
- Range: Provisional factory-gate loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg loss/kg reference grapefruit juice
  - Basis: broad initial mass-balance screen pending reviewed site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant leakage to air (`refrigerant_leakage`)

When refrigeration equipment serves the represented product, record each refrigerant substance released to air from top-up and service records; do not combine substances.

- Selected flow: Refrigerant emission to air, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: annual or campaign refrigerant loss allocated using documented equipment service and production records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_environmental_records`

### Process: Cleaning, utility support, and effluent handling (`site_services_effluent`)

#### Inputs

##### Product flows

###### Cleaning and CIP water (`cip_water`)

Record water used for cleaning tanks, pipes, extractors, fillers, floors, and other controlled equipment; distinguish fresh, reused, and recovered water where records permit.

- Selected flow: Process water for cleaning
- Flow property / unit: Mass / kg
- Amount rule: metered CIP and sanitation water assigned to the represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_water_effluent_records`
- Range: Provisional cleaning-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water/kg reference grapefruit juice
  - Basis: broad initial estimate pending reviewed site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning chemicals (`cip_cleaning_agents`)

Record each detergent, acid, alkali, disinfectant, and other cleaning chemical supplied to the controlled operations.

- Selected flow: Cleaning agent, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: issue, dosing, or tank-balance mass by chemical
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_water_effluent_records`
- Range: Provisional cleaning-chemical screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg chemical/kg reference grapefruit juice
  - Basis: broad initial estimate pending reviewed chemical-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Site-service electricity (`site_service_electricity`)

Record electricity for CIP, compressed air, water pumping, wastewater handling, and other attributable site services not already assigned to a product process.

- Selected flow: Electricity, supplied to processing site
- Flow property / unit: Energy / kWh
- Amount rule: service meter total or documented allocation to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_service_utility_records`
- Range: Provisional site-service electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg reference grapefruit juice
  - Basis: broad initial estimate pending reviewed site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater to on-site or off-site treatment (`site_wastewater`)

Record wastewater volume or mass and relevant pollutant measurements at the hand-off to on-site treatment, off-site treatment, or permitted discharge; separate uncontaminated cooling water when applicable.

- Selected flow: Wastewater from grapefruit-juice processing
- Flow property / unit: Mass / kg
- Amount rule: effluent meter total or documented site water balance assigned to represented production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_water_effluent_records`
- Range: Provisional total-wastewater screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 25
  - Unit: kg wastewater/kg reference grapefruit juice
  - Basis: broad initial estimate pending reviewed site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment sludge and separated solids (`effluent_treatment_residue`)

When treatment is controlled by the reporting site, record sludge and separated solids by dry or wet mass basis and actual destination.

- Selected flow: Wastewater-treatment residue
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass with moisture basis and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference grapefruit juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_environmental_records`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | juice, grapefruit oil, usable citrus solids, and other co-products | First avoid allocation by subdividing independently measured operations or by expanding the system when the additional functions and substituted products are robustly demonstrated. | `ec-pef-method-2021` |
| `allocation_physical` | inseparable multifunctional operations | If subdivision or system expansion is not practicable, use a documented, quantifiable physical relationship that reflects how inputs and outputs provide the functions; do not default to mass merely because masses are available. | `ec-pef-method-2021` |
| `allocation_other_relationship` | multifunctional operations lacking a defensible physical relationship | Use another relationship, such as site- and period-specific economic value, only after documenting why subdivision, system expansion, and physical allocation were rejected; disclose prices, period, currency, factors, and sensitivity. | `ec-pef-method-2021` |
| `allocation_waste_status` | peel, pulp, seeds, rejected fruit, off-specification juice, and sludge | Classify each output as product, co-product, or waste from its documented destination and function. Waste treatment remains in the generating system; do not assign avoided-production credits without a separately justified system-expansion model. | `ec-pef-method-2021` |
| `allocation_shared_site_services` | utilities and site services shared with other products | Prefer sub-metering. Otherwise allocate only the residual shared amount using a causal driver such as process time, metered throughput, cleaning cycle, or equipment demand, and retain the calculation. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fresh_route_mass_records` | `fresh_fruit_extraction` | Fruit, juice intermediate, citrus oil, usable residue, and waste masses | weighbridge, batch ticket, tank level, dispatch record | lot_id; timestamp; accepted_fruit_mass_kg; rejected_fruit_mass_kg; juice_intermediate_mass_kg; oil_mass_kg; usable_residue_mass_kg; waste_mass_kg; moisture_basis; destination | Reconcile calibrated scales, tank measurements, and dispatch records by production lot. | kg | each lot or shift | complete represented production period | all controlled fresh-fruit lines | Sum by lot and route; normalize to net reference-product mass; retain separate co-product and waste destinations. | scale calibration; batch reconciliation; signed dispatch or waste record |
| `cp_fresh_route_utility_records` | `fresh_fruit_extraction` | Water and electricity | meter, invoice, equipment log | meter_id; opening_reading; closing_reading; timestamp; route_runtime; production_mass_kg; allocation_driver | Use route sub-meters; when absent, reconcile site totals and allocate only residual use with a documented causal driver. | kg water; kWh | meter interval and each production campaign | complete represented production period | all controlled fresh-fruit lines | Subtract verified non-production use, assign to route, and normalize to reference-product mass. | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_reconstitution_batch_records` | `reconstitution_blending` | Grapefruit-derived inputs, water, ingredients, intermediate output, and loss | formulation, batch sheet, tank meter, laboratory result | batch_id; input_id; supplier; origin; concentration_state; input_mass_kg; water_mass_kg; ingredient_mass_kg; output_mass_kg; brix_20c; temperature; loss_mass_kg | Reconcile issued materials, calibrated tank or scale readings, and laboratory soluble-solids results for each batch. | kg; degrees Brix | each batch | complete represented production period | all controlled blending lines | Sum by product recipe and route share; calculate mass balance and normalize to net reference-product mass. | approved formula; instrument calibration; batch release record |
| `cp_reconstitution_utility_records` | `reconstitution_blending` | Electricity and other route utilities | meter and equipment runtime log | meter_id; opening_reading; closing_reading; runtime; rated_load; batch_id; output_mass_kg | Prefer sub-metering; otherwise use validated runtime and load data for residual allocation. | kWh | meter interval and each batch campaign | complete represented production period | all controlled blending lines | Assign route utility use to batches and normalize to reference-product mass. | meter calibration; runtime log; calculation worksheet |
| `cp_factory_gate_batch_records` | `stabilisation_factory_gate` | Juice input, finished output, packaging, and product or packaging loss | batch ticket, filler counter, package bill, scale, warehouse release | batch_id; input_mass_kg; finished_net_mass_kg; package_component; package_mass_kg; rejected_product_mass_kg; packaging_scrap_mass_kg; preservation_method; storage_state | Reconcile process transfers, filler or scale records, packaging issues, rejects, and warehouse releases. | kg | each lot or shift | complete represented production period | all controlled preservation and filling lines | Sum released net product and separately normalize packaging and losses to 1 kg reference product. | scale and filler calibration; packaging stock reconciliation; release record |
| `cp_stabilisation_utility_records` | `stabilisation_factory_gate` | Thermal energy, electricity, cooling, and refrigeration | meter, fuel or steam invoice, equipment log | carrier_id; quantity; unit; energy_content; meter_reading; runtime; preservation_method; product_mass_kg | Use process meters or reconcile carrier invoices and equipment records with documented conversion factors. | kWh; MJ; carrier-specific unit | meter interval and each campaign | complete represented production period | all controlled preservation, cooling, filling, and storage equipment | Keep carriers separate, assign to represented operations, and normalize to reference-product mass. | meter calibration; invoice; energy-conversion record |
| `cp_site_water_effluent_records` | `site_services_effluent` | Cleaning water, cleaning chemicals, and wastewater | water meter, dosing log, effluent meter, laboratory sample | meter_id; water_source; water_mass_kg; chemical_id; chemical_mass_kg; effluent_mass_kg; COD; BOD; TSS; pH; discharge_destination; sampling_time | Reconcile inlet, reuse, product water, evaporation, and effluent meters; retain chemical dosing and representative effluent analyses. | kg; mg/L where analysed | each cleaning cycle or meter interval; effluent sampling per permit or site plan | complete represented production period | all controlled process and effluent systems | Allocate only residual shared services with a documented driver and normalize to reference-product mass. | meter calibration; dosing record; accredited or documented laboratory report; water balance |
| `cp_site_service_utility_records` | `site_services_effluent` | Electricity and other utilities for shared site services | sub-meter, invoice, equipment log | meter_id; quantity; unit; runtime; service_area; production_mass_kg; allocation_driver | Sub-meter where possible; otherwise reconcile site totals and causally allocate residual service use. | kWh; MJ; carrier-specific unit | meter interval | complete represented production period | all relevant controlled site services | Remove separately metered product-process use, allocate the residual, and normalize to reference-product mass. | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_site_environmental_records` | `site_services_effluent` | Refrigerant losses, treatment residues, and direct releases | refrigerant service log, residue ticket, permit monitoring, emission calculation | substance_id; opening_inventory; purchases; closing_inventory; recovered_mass; emitted_mass; residue_mass; moisture_basis; destination; monitoring_result; factor_source | Use substance-specific inventory balance, calibrated measurement, or an approved factor applied to collected activity data. | kg; release-specific unit | each service event and reporting period | complete represented production period | all controlled refrigeration and treatment systems | Calculate each substance or residue separately and normalize to reference-product mass. | service certificate; inventory reconciliation; laboratory or permit record; factor citation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = amount assigned to represented production / released net grapefruit-juice mass | assigned amount; released net grapefruit-juice mass | amount per 1 kg reference grapefruit juice |  |
| `calc_fresh_route_yield` | `fresh_fruit_extraction` | fresh-route juice yield = screened juice intermediate mass / accepted fresh-grapefruit mass | screened juice intermediate mass; accepted fresh-grapefruit mass | kg juice intermediate/kg accepted fresh grapefruit | `jrc-fdm-bref-2019` |
| `calc_route_mass_balance` | each route and production lot | mass-balance discrepancy = total measured mass inputs - total measured product, co-product, waste, and measured release outputs; investigate rather than force the discrepancy to zero | all measured mass inputs and outputs; moisture and concentration states | disclosed discrepancy and reconciliation status |  |
| `calc_reconstitution_brix_check` | reconstituted grapefruit juice | compare the corrected refractometric soluble-solids result at 20 degrees C with the 10.0 degrees Brix Codex minimum and any stricter declared market rule | corrected soluble-solids result; measurement temperature and correction; applicable market threshold | pass/fail plus measured value and cited threshold | `codex-cxs-247-2005`; `us-21-cfr-146-132` |
| `calc_allocation_factor` | residual multifunctional burdens | allocation factor for output i = documented driver for output i / sum of the same driver across all co-products; apply only after the hierarchy in Section 7 | output quantities or values for one consistent driver; subdivision assessment | disclosed allocation factor by output | `ec-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | every represented product | Retain product name, grapefruit species or declared legal identity, route shares, concentration state, soluble solids, preservation, packaging state, added ingredients, geography, period, and shelf-life or storage condition. | Approved specification, laboratory result, recipe, label or release record |
| `dq_temporal_coverage` | foreground activity data | Cover the full declared production period and capture seasonal or campaign variation; explain shutdowns, missing intervals, and extrapolation. | Meter completeness report, production calendar, and gap log |
| `dq_measurement_traceability` | measured quantities | Use calibrated or verified measurement systems and preserve raw readings, units, conversion factors, and responsible record owner. | Calibration certificate, meter or scale log, and conversion worksheet |
| `dq_mass_balance` | fruit, juice, concentrate, water, co-products, wastes, and losses | Reconcile route-specific mass inputs and outputs on consistent moisture and concentration states; disclose unexplained discrepancies and corrective action. | Lot or campaign mass-balance worksheet |
| `dq_allocation` | shared operations and co-products | Document the allocation hierarchy assessment, causal driver, factors, data period, and sensitivity; retain unallocated measurements where subdivision is possible. | Allocation decision record and calculation worksheet |
| `dq_upstream_representativeness` | linked datasets | Match input identity, geography, technology, concentration state, temporal coverage, transport hand-off, and treatment route; disclose proxies. | Dataset metadata and proxy justification |
| `dq_provisional_ranges` | all `reasoned_estimate` ranges | Treat provisional ranges only as authoring or QA screens; they must not overwrite collected values and must be replaced by reviewed evidence or explicitly accepted before publication-critical use. | Review record and replacement source or acceptance decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference output | Confirm exactly one reference output of 1 kg net Grapefruit juice uses product-flow UUID `796385da-cb79-4275-8087-13bc9656ff65`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; packaging mass is separate. |  |
| `validate_product_scope` | product identity | Reject nectar, concentrate sold as concentrate, multi-fruit juice, flavoured drinks outside the declared juice identity, fermented beverages, and fresh fruit from this PCR. | `codex-cxs-247-2005`; `us-21-cfr-146-132` |
| `validate_route_completeness` | represented production mix | Confirm route shares sum to the represented production, every occurring conditional process is included, purchased juice or concentrate has an upstream dataset, and no controlled operation is omitted. | `jrc-fdm-bref-2019` |
| `validate_soluble_solids` | reconstituted grapefruit juice | Confirm a corrected soluble-solids result at 20 degrees C is present and is at least 10.0 degrees Brix under the Codex baseline, or meets the cited stricter applicable market threshold. | `codex-cxs-247-2005`; `us-21-cfr-146-132` |
| `validate_inventory_completeness` | foreground inventory | Confirm all product, co-product, waste, wastewater, packaging, utility, and direct elementary releases crossing the controlled boundary are represented or explicitly documented as not applicable. | `jrc-fdm-bref-2019`; `ec-pef-method-2021` |
| `validate_mass_balance` | each route and production lot | Confirm masses use consistent states, the mass-balance discrepancy is calculated, and material discrepancies are investigated and disclosed rather than silently allocated. |  |
| `validate_allocation` | multifunctional and shared operations | Confirm the Section 7 hierarchy is followed, drivers and factors are reproducible, and waste treatment or avoided-production credits are not double counted. | `ec-pef-method-2021` |
| `validate_data_quality` | published foreground dataset | Confirm protocol coverage, calibration or verification evidence, temporal and geographic representativeness, source links, proxy disclosure, and provisional-range review status are complete. | `ec-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for finished grapefruit juice at the processing-site gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-footprint, process, and lifecyclemodel studies whose product identity, route mix, geography, period, preservation, packaging state, and boundary match the dataset or are transparently adapted |
| excluded_use | Direct representation of grapefruit concentrate, nectar, multi-fruit or flavoured drinks, fermented beverages, fresh grapefruit, or downstream distribution, use, and end-of-life without additional modelling |
| required_metadata | Canonical PCR id; reference-flow UUIDs; route shares; input origin and concentration state; soluble-solids result and method; preservation; packaging state and mass; geography; period; technology; shelf-life or storage condition; co-product and waste destinations; allocation; data gaps; upstream dataset links |
| required_quality_disclosure | Foreground coverage and protocol completeness; calibration and reconciliation evidence; route mass balance; temporal and geographic representativeness; allocation sensitivity; proxy datasets; provisional reasoned estimates and their review status; excluded stages |
| update_trigger | Material change in fruit or concentrate sourcing, recipe or soluble-solids target, route mix, extraction or preservation technology, energy or water system, packaging, site allocation, co-product destination, waste or wastewater treatment, regulatory identity requirement, or a foreground-data period no longer representative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-247-2005` | `standard` | Codex Alimentarius, General Standard for Fruit Juices and Nectars, CXS 247-2005, https://www.fao.org/input/download/standards/10154/CXS_247e.pdf (retrieved 2026-08-11) | Fruit-juice identity and composition; potable reconstitution water; authenticity and quality checks; minimum 10.0 degrees Brix for reconstituted grapefruit juice |
| `us-21-cfr-146-132` | `standard` | U.S. eCFR, 21 CFR 146.132, Grapefruit juice, https://www.ecfr.gov/current/title-21/section-146.132 (official XML issue date 2026-08-06; retrieved 2026-08-11) | Grapefruit-juice identity, directly expressed and from-concentrate distinctions, 10 percent soluble-solids rule for the U.S. standard, permitted preservation, and market-specific labelling context |
| `jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries, EUR 29978 EN, JRC118627, 2019, doi:10.2760/243911, https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-11) | Citrus-juice process decomposition; sorting, washing, oil recovery, mechanical extraction, screening, preservation, concentration, cleaning, wastewater, energy, and solid-residue boundary |
| `ec-pef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods, Annex I, Sections 4.5 and 4.6, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Multifunctionality hierarchy, subdivision and system expansion, physical and other allocation relationships, company-specific inventory collection, and data-quality expectations |
