---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapples-otherwise-prepared-or-preserved
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Pineapples, otherwise prepared or preserved

## 1. Scope and Applicability

This PCR applies to foreground production of pineapple products classified as CPC 3.0 subclass 21491 after preparation or preservation. It covers packaged or bulk products made from pineapple by formulation and one declared primary preservation route, including frozen, aseptic or hot-filled, chemically or osmotically preserved, and hermetically sealed thermally processed products. Canned pineapple is one route within this broader category and does not define the whole category.

The foreground boundary begins with pineapple, ingredients, primary packaging, and other purchased inputs received at the preparation facility and ends with the net preserved pineapple product packed or otherwise ready to leave the producing facility. Pineapple cultivation, production of purchased ingredients and packaging, external utilities, distribution, retail, consumer use, and end-of-life remain outside the foreground boundary and require linked upstream or downstream datasets when included in the study. Fresh pineapple, pineapple juice declared as the product, and products assigned to another classification leaf are outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapples-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0: 21491, Pineapples, otherwise prepared or preserved (`unsd-cpc-3-21491`) |
| covered_products | Pineapple pieces, slices, chunks, crushed product, pulp, or other declared physical forms preserved by one primary route; products may be packed with or without a declared packing medium and may be sold in retail or bulk formats. |
| excluded_products | Fresh pineapple; pineapple juice declared as the reference product; products classified by the practitioner outside CPC 3.0 subclass 21491; mixed-fruit products not identified as a pineapple product. |
| representative_product | Net pineapple product, including declared packing medium but excluding packaging, ready to leave the producing facility after the selected preservation route. |
| production_route | Pineapple receipt and preparation; formulation and filling; exactly one declared primary preservation route (`sealed_container_thermal`, `freezing`, or `other_validated_preservation`); final packing and dispatch preparation. |
| market_state | Ambient-stable, frozen, or otherwise preserved state in retail or bulk packaging, with temperature state, physical form, packing medium, and primary package declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net pineapples, otherwise prepared or preserved, ready to leave the producing facility. |
| How much | 1 kg net product, excluding all packaging and including any packing medium sold with the product. |
| How well | Conforming product of the declared physical form, formulation, packing medium, preservation route, and market temperature state; route-specific specification or conformity status is disclosed. |
| How long or cycle | One completed production lot at the facility gate; no service duration is assigned. |
| reference_flow_link | The functional unit is realized by the single Tiangong product flow and reference amount below. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Pineapples, otherwise prepared or preserved `5787a516-5769-4072-a5fc-2ef53e8ba7e4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | primary preservation route; physical form; pineapple cultivar or declared material specification where material; packing medium or formulation; net-content basis; drained pineapple mass or solids content when applicable; primary packaging format; ambient, chilled, or frozen market state; facility geography; production period |

When constructing a foreground data package, every required qualifier must be recorded in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A liquid-packing-medium product remains normalized to total net product mass; its drained pineapple mass or solids content is an additional required qualifier rather than an alternative reference amount.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net product mass after the selected preservation route and exclude primary, secondary, and tertiary packaging; include packing medium sold as part of the product. |
| `drained_mass_disclosure` | products in liquid packing medium | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record total net contents and drained pineapple mass for the same lot using the declared test or plant method; do not substitute drained mass for the 1 kg reference amount. |
| `lot_mass_balance` | each foreground process | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep input, product, by-product, waste, wastewater, and documented stock-change masses on a consistent wet-mass basis unless a dry-matter conversion and its measured moisture data are disclosed. |
| `energy_carrier_separation` | preservation and packing energy | Energy by carrier | kWh or MJ | Preserve metered electricity and purchased fuel, steam, heat, or cooling records as separate carriers; document every conversion factor and do not combine them into one unsupported energy total. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Pineapple, formulation ingredients, packaging, and utilities received at the producing facility gate, with physical state, supplier geography, and incoming mass basis declared. |
| starting_condition_role | Starting condition for foreground preparation; upstream production burdens are represented by linked supplier-specific or suitable secondary datasets. |
| product_classification_scope | CPC 3.0 subclass 21491; the dataset declares the physical product and primary preservation route represented. |
| recursive_input_rule | A purchased input already within this same product category is recorded as a visible technosphere input and linked to an upstream dataset at its supplier gate; its production is not repeated inside this foreground system. |
| upstream_dataset_requirement | Link upstream datasets for received pineapple, ingredients, packaging materials, energy carriers, water supply, and externally treated wastes when those stages are included in the study. |
| disclosure | Declare facility geography, production period, product form, formulation or packing medium, preservation route, temperature state, package format, co-product treatment, waste destinations, and any boundary extension. |

### Normative Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground system boundary | Include pineapple receiving and preparation, formulation and filling, the selected preservation treatment, final packing, directly used utilities, on-site direct emissions, and wastes generated by those operations. | `eu-pef-2021-2279` |
| `boundary_upstream_links` | purchased inputs and external services | Keep purchased pineapple, ingredients, packaging, utilities, and external waste treatment visible and link them to appropriate upstream datasets instead of recreating their production inside the foreground processes. | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | preservation treatment | Declare exactly one primary route: `sealed_container_thermal`, `freezing`, or `other_validated_preservation`. Record route-specific flows only for that route; ancillary cooling or heating does not create a second primary route. | `unsd-cpc-3-21491` |
| `boundary_canned_route` | sealed-container canned pineapple | Apply Codex CXS 319-2015 product description and applicable pineapple-annex conformity records only when the declared product is within that standard's canned-fruit scope; do not apply the canned route to the whole PCR category. | `codex-cxs-319-2015` |
| `boundary_downstream_exclusion` | default facility-gate dataset | Exclude distribution, retail, consumer storage or preparation, and packaging or product end-of-life unless the declared study boundary explicitly adds them with separate processes and datasets. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pineapple_receiving_preparation` | Pineapple receiving and preparation | required | Always included. | Foreground fruit receiving, sorting, washing when used, peeling, coring, cutting, pulping, and separation of unusable material. | kg prepared pineapple intermediate |
| `formulation_filling` | Formulation and filling | required | Always included; a no-added-medium product records zero optional formulation inputs. | Foreground recipe preparation, ingredient dosing, and filling into the primary package or bulk handling unit. | kg filled product before preservation |
| `preservation_treatment` | Preservation treatment | required | Exactly one primary preservation route is declared; only its route-specific inputs and emissions apply. | Foreground thermal, freezing, or other validated preservation treatment. | kg preserved product |
| `final_packing_dispatch` | Final packing and dispatch preparation | required | Always included; secondary or tertiary packaging inputs are zero when absent. | Foreground inspection, coding, secondary or tertiary packing, and transfer to the facility gate. | 1 kg net preserved pineapple output |

### Process: Pineapple receiving and preparation (`pineapple_receiving_preparation`)

#### Inputs

##### Product flows

###### Pineapple fruit received (`pineapple_fruit_input`)

Record the accepted and rejected incoming pineapple mass crossing the facility gate by lot before preparation.

- Selected flow: Pineapple fruit
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming pineapple mass normalized to net preserved pineapple output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation`
- Range: Temporary incoming-fruit screening estimate, used only until representative lot records or reviewed quantitative evidence are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.2
  - Upper: 10
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across products with packing media and different preparation losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water supplied (`preparation_water_input`)

Record metered or reconciled water used for washing, fluming, peeling, cutting, and equipment-contact preparation operations.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measured preparation water supplied, excluding water demonstrably assigned to another process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation`
- Range: Temporary preparation-water screening estimate, used only until representative meter or reconciled batch records are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen allowing dry preparation and water-intensive handling
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared pineapple intermediate (`prepared_pineapple_output`)

Record the measured pineapple intermediate transferred to formulation, including its declared physical form and wet-mass basis.

- Selected flow: Prepared pineapple intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass after preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation`

##### Waste flows

###### Separated peel, crown, core, and rejected pineapple material (`preparation_residue_output`)

Record each separated material stream by destination and identify whether it leaves as a co-product, recycling input, animal-feed input, or waste; the flow remains in the waste group unless the foreground dataset documents product status.

- Selected flow: Pineapple preparation residues
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass by material stream and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation`
- Range: Temporary preparation-residue screening estimate, used only until representative weighed residue records or reviewed quantitative evidence are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across pineapple form and preparation intensity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater_output`)

Record wastewater leaving preparation before any separately modelled on-site treatment, net of water demonstrably retained in products or other recorded outputs.

- Selected flow: Preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or documented water-balance result for the preparation process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_preparation`
- Range: Temporary preparation-wastewater screening estimate, used only until representative discharge or complete water-balance records are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen bounded by declared water inputs and transfers
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Formulation and filling (`formulation_filling`)

#### Inputs

##### Product flows

###### Prepared pineapple supplied to formulation (`prepared_pineapple_input`)

Record the transferred prepared pineapple mass and reconcile it with the preceding process output.

- Selected flow: Prepared pineapple intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass received by formulation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_filling`

###### Packing medium and formulation ingredients (`formulation_ingredients_input`)

Record water, juice, syrup components, sugar, salt, acids, permitted additives, or other formulation inputs separately by purchased material; record zero when the declared product has no added medium or ingredients.

- Selected flow: Declared formulation ingredients
- Flow property / unit: Mass / kg
- Amount rule: Weighed issue, batch recipe reconciliation, or supplier invoice mass by ingredient.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_filling`
- Range: Temporary formulation-input screening estimate, conditionally used only when a product contains added medium or ingredients and replaced when approved recipes plus weighed issues are available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across no-added-medium and formulated products
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging supplied to filling (`primary_packaging_input`)

Record each primary package component by material and mass; bulk products record the reusable or single-use handling unit according to the declared packaging model.

- Selected flow: Primary packaging materials
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued package count multiplied by verified component mass, reconciled to packed units.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation_filling`
- Range: Temporary primary-packaging screening estimate, used only until verified package bills of materials and production counts are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across bulk and retail package formats
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Filled product before preservation (`filled_product_output`)

Record the mass transferred to the declared preservation treatment, including pineapple and any packing medium but excluding packaging mass.

- Selected flow: Filled pineapple product before preservation
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated net contents transferred to preservation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation_filling`

##### Waste flows

###### Formulation and filling losses (`formulation_filling_waste_output`)

Record spills, off-specification product, and rejected primary packages separately by material and destination.

- Selected flow: Formulation and filling waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste or batch mass-balance result, without netting material sent to different destinations.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation_filling`
- Range: Temporary formulation-and-filling-loss screening estimate, used only until representative weighed loss or closed batch-balance records are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across product and package formats
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Preservation treatment (`preservation_treatment`)

#### Inputs

##### Product flows

###### Filled product supplied to preservation (`filled_product_input`)

Record the transfer from formulation and filling without duplicating pineapple or formulation ingredients.

- Selected flow: Filled pineapple product before preservation
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled transfer mass entering the selected preservation route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_treatment`

###### Electricity supplied to preservation (`preservation_electricity_input`)

Record metered electricity for the selected route, including route equipment and attributable cooling, pumping, and controls.

- Selected flow: Electricity, grid or declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered route electricity or documented allocation from a shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_treatment`
- Range: Temporary preservation-electricity screening estimate, used only until representative route-specific meter records or reviewed quantitative evidence are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across the three primary route families
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy carriers supplied to preservation (`preservation_thermal_energy_input`)

Record purchased fuel, steam, or heat separately when used by `sealed_container_thermal` or another declared heat-using route; record zero and mark not applicable for a route without thermal demand.

- Selected flow: Declared fuel, steam, or purchased heat by carrier
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoice-reconciled energy by carrier using documented conversion factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_treatment`
- Range: Temporary thermal-energy screening estimate, conditionally used only for a heat-using route and replaced when representative carrier-specific meter or invoice records are available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across thermal and non-thermal routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up supplied to route equipment (`preservation_refrigerant_input`)

Record refrigerant make-up only when mechanical refrigeration is operated inside the foreground boundary; other routes record zero and mark the row not applicable.

- Selected flow: Declared refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Inventory reconciliation of refrigerant added to route equipment over the production period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_treatment`
- Range: Temporary refrigerant-make-up screening estimate, conditionally used only for in-boundary refrigeration and replaced when equipment inventory and service records cover the declared production period
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen that does not substitute for refrigerant service records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved pineapple product (`preserved_product_output`)

Record net product transferred from the selected route, together with route identifier, hold or release status, and temperature state.

- Selected flow: Preserved pineapple product
- Flow property / unit: Mass / kg
- Amount rule: Measured released-product mass after the selected preservation treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_treatment`

##### Waste flows

##### Elementary flows

###### Direct preservation emissions (`preservation_direct_emissions_output`)

Record substance-specific on-site combustion releases and refrigerant leakage when they cross the environment boundary; do not include upstream generation emissions for purchased electricity or heat here.

- Selected flow: Substance-specific direct emission to air
- Flow property / unit: Mass / kg by substance
- Amount rule: Measured emission, mass-balance result, or documented factor applied to collected fuel or refrigerant records, reported separately by substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_treatment`
- Range: Temporary direct-emission screening estimate, conditionally used only where an on-site emitting source exists and replaced when source-specific measurements or reviewed factors applied to complete activity records are available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg substance/kg net preserved pineapple output
  - Basis: broad candidate-stage screen applied separately by emitted substance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Final packing and dispatch preparation (`final_packing_dispatch`)

#### Inputs

##### Product flows

###### Preserved product supplied to final packing (`preserved_product_input`)

Record the released preserved product transferred from the selected preservation route.

- Selected flow: Preserved pineapple product
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass entering final packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packing`

###### Secondary and tertiary packaging supplied (`secondary_packaging_input`)

Record cartons, film, trays, pallets, labels, and other non-primary packaging separately by material; record zero for absent components.

- Selected flow: Secondary and tertiary packaging materials
- Flow property / unit: Mass / kg
- Amount rule: Issued component count multiplied by verified component mass, reconciled to dispatched units.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_packing`
- Range: Temporary secondary-and-tertiary-packaging screening estimate, used only until verified packaging bills of materials and dispatched-unit counts are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across bulk and retail dispatch formats
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to final packing (`packing_electricity_input`)

Record electricity for coding, conveying, case packing, palletizing, and attributable final-condition holding within this process.

- Selected flow: Electricity, grid or declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered packing electricity or documented allocation from a shared meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packing`
- Range: Temporary final-packing-electricity screening estimate, used only until representative process-meter records or reviewed quantitative evidence are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across manual and automated packing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net pineapples, otherwise prepared or preserved (`reference_product_output`)

This output realizes the single reference-flow object after reconciliation of net contents and packing records.

- Selected flow: Pineapples, otherwise prepared or preserved `5787a516-5769-4072-a5fc-2ef53e8ba7e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed at 1 kg net product, excluding packaging and including any packing medium sold with the product.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Final packing waste (`packing_waste_output`)

Record rejected packaging and off-specification packed product separately by material and destination.

- Selected flow: Final packing waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste or component-count reconciliation without netting destinations.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net preserved pineapple output at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_packing`
- Range: Temporary final-packing-waste screening estimate, used only until representative weighed waste or closed component-balance records are available and replaced at that trigger
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net preserved pineapple output
  - Basis: broad candidate-stage screen across package formats and rejection rates
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | separable products, routes, and batches | Use process subdivision or direct metering first so different product forms, packing media, preservation routes, and package formats retain their own inputs and outputs. | `eu-pef-2021-2279` |
| `allocation_physical_then_economic` | unavoidable joint production | When subdivision is not feasible, use a physical relationship only when it reflects the causal relationship between jointly produced outputs; otherwise use an economic relationship based on a declared representative period, and disclose quantities, prices, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_recovered_material` | pineapple residues or other recovered outputs | Keep recovered outputs and their destinations visible. Do not credit substitution or avoided production unless the receiving model explicitly defines and documents that consequential treatment. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | wastes and wastewater | Assign collection, on-site treatment, and external treatment burdens to the process generating the stream unless a documented receiving-system rule requires another treatment; never net unrelated waste destinations. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_preparation` | `pineapple_receiving_preparation` | incoming pineapple, preparation water, prepared intermediate, residues, and wastewater | lot sheet, scale record, water meter, discharge record | lot_id; input_mass_kg; prepared_mass_kg; water_mass_kg; residue_mass_kg_by_destination; wastewater_mass_kg; opening_stock_kg; closing_stock_kg | Record scale readings by lot and meter readings or documented water balance for the same production period. | kg | each lot for mass; each meter-reading interval for water | declared representative production period covering normal pineapple and product mix | each included preparation line at the facility | Sum compatible records by product and route, adjust documented stock change, then divide by conforming net output mass. | calibrated-scale or verification record; meter record; lot reconciliation; destination record |
| `cp_formulation_filling` | `formulation_filling` | prepared pineapple, formulation ingredients, packaging, filled product, and losses | approved recipe, batch sheet, material issue, package bill of materials, scale and rejection record | batch_id; prepared_input_kg; ingredient_kg_by_material; package_count_by_component; component_mass_kg; filled_net_mass_kg; loss_mass_kg_by_destination | Reconcile approved recipe and actual material issues to measured filled net contents and rejected materials. | kg | each batch | same declared representative production period as output data | each included formulation and filling line | Sum by product formulation and package format; calculate component mass from verified item mass; normalize to conforming net output. | approved recipe; scale record; verified package specification; closed batch balance |
| `cp_preservation_treatment` | `preservation_treatment` | filled input, electricity, thermal carriers, refrigerant, preserved output, and direct emissions | route log, utility meter, invoice, refrigerant service record, release record, emission measurement or factor record | route_id; batch_id; filled_input_kg; preserved_output_kg; electricity_kwh; fuel_or_heat_quantity_by_carrier; conversion_factor; refrigerant_added_kg; direct_emission_kg_by_substance | Record exactly one primary route per batch; use route meters where available and document allocation from shared meters; reconcile refrigerant and direct emissions to activity records. | kg; kWh; MJ | each batch and each applicable meter, invoice, or service interval | same declared representative production period as output data | each included preservation line and its attributable utility equipment | Aggregate only batches with the same primary route and product qualifiers; convert carriers with documented factors; normalize to released net product. | route log; calibrated meter or invoice; conversion-factor reference; service record; product release record |
| `cp_final_packing` | `final_packing_dispatch` | preserved input, non-primary packaging, packing electricity, final output, and packing waste | transfer record, packaging bill of materials, component issue, electricity meter, dispatch and rejection record | batch_id; preserved_input_kg; package_count_by_component; component_mass_kg; electricity_kwh; dispatched_net_mass_kg; packing_waste_kg_by_material_and_destination | Reconcile preserved product, packaging issues, metered or allocated electricity, conforming dispatched units, and rejected material. | kg; kWh | each packing batch and meter interval | same declared representative production period as output data | each included packing line at the facility | Sum by product and package format, apply documented stock change, and divide by conforming net output mass. | verified bill of materials; transfer and dispatch record; meter record; closed component balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized row amount = period amount assigned to the declared product and route / conforming net product mass leaving final packing; preserve the row's original unit. | assigned period amount; conforming net product mass | amount per 1 kg net preserved pineapple output |  |
| `calc_process_mass_balance` | each foreground process | mass-balance difference = mass inputs + opening stock - mass products - mass co-products - mass wastes - wastewater - closing stock; investigate and disclose material unexplained differences without forcing the balance to zero. | wet-mass records by stream; stock changes | process mass-balance difference and completeness check |  |
| `calc_packaging_mass` | packaging inputs | packaging mass = issued component count × verified mass per component, adjusted for documented returned or unused components. | component count; component mass; returns | kg packaging by material |  |
| `calc_energy_conversion` | fuel, steam, heat, or cooling records | convert the collected carrier quantity to the reported energy unit with the documented carrier-specific factor while retaining the original quantity, unit, and factor reference. | carrier quantity; original unit; conversion factor | MJ or kWh by carrier | `eu-pef-2021-2279` |
| `calc_wastewater` | preparation wastewater | wastewater mass = measured discharge; when no discharge meter exists, calculate from recorded water and liquid inputs minus documented product retention, evaporation, other outputs, and stock change, and flag the result as calculated. | discharge record or water balance fields | kg wastewater |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_route` | every data package | Match the Tiangong reference-flow UUID and declare all required qualifiers, exactly one primary preservation route, and the product/package scope represented. | dataset metadata; route logs; product specification |
| `dq_temporal_representativeness` | foreground activity data | Use one internally consistent production period representing normal operations and material product or seasonal variation; disclose shutdowns, trials, abnormal losses, and justified exclusions. | dated lot, meter, invoice, inventory, and dispatch records; representativeness statement (`eu-pef-2021-2279`) |
| `dq_mass_and_energy_completeness` | each foreground process | Reconcile product, co-product, waste, wastewater, stock change, and separately reported energy carriers; disclose every unexplained material gap and shared-meter allocation. | process balances; meter reconciliation; allocation worksheet |
| `dq_source_quality` | linked upstream and factor data | Record source, geography, technology, time period, and substitution or proxy rationale for each material upstream dataset or factor. | data-source register and quality assessment (`eu-pef-2021-2279`) |
| `dq_reasoned_estimate_replacement` | every `reasoned_estimate` range | Treat the range only as a temporary candidate-stage screening prior; replace it when complete representative foreground records or reviewed source-backed quantitative evidence become available, and do not use it as an asserted measured value. | review log identifying replacement status and retained source or collection records |
| `dq_canned_conformity` | `sealed_container_thermal` products within the canned-fruit standard scope | Retain the applicable product description, style, packing medium, fill or drained-content test records, and conformity evidence required for the declared canned pineapple product. | route-specific specification and test records (`codex-cxs-319-2015`) |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require exactly 1 kg net product on Tiangong flow `5787a516-5769-4072-a5fc-2ef53e8ba7e4`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, excluding packaging and including sold packing medium. |  |
| `validate_required_qualifiers` | dataset metadata | Fail conformance when any required qualifier is missing, including primary route, physical form, formulation or packing medium, net-content basis, applicable drained mass or solids content, package format, temperature state, geography, and production period. | `unsd-cpc-3-21491` |
| `validate_route_exclusivity` | preservation process | Require exactly one primary route token and reject simultaneous primary-route claims; verify that conditional thermal-energy, refrigeration, emission, and conformity rows match the declared route. | `unsd-cpc-3-21491` |
| `validate_process_completeness` | foreground inventory | Require all four process ids, collected or calculated amounts for every applicable flow, explicit zero or not-applicable treatment for conditional flows, route-separated energy, waste destinations, and disclosed mass-balance differences. | `eu-pef-2021-2279` |
| `validate_allocation` | multi-output processes | Require subdivision evidence or the declared allocation relationship, collected basis data, sensitivity where economic allocation is used, and explicit treatment of recovered materials without undocumented credits. | `eu-pef-2021-2279` |
| `validate_canned_route_scope` | canned pineapple route | When and only when the product falls within the canned-fruit standard scope, require applicable CXS 319-2015 pineapple-annex product and conformity evidence; never infer canned requirements for frozen or other preserved products. | `codex-cxs-319-2015` |
| `validate_estimate_status` | provisional ranges | Reject any `reasoned_estimate` represented as measured or source-backed data; require its conditional applicability, temporary status, and replacement trigger to remain disclosed until replacement. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset suitable for controlled publication as a `secondary_dataset` and, after review, as a `background_dataset`. |
| downstream_use | Construction of process and lifecyclemodel projections for pineapple products otherwise prepared or preserved. |
| allowed_use | Facility-gate modelling for the declared product, route, formulation, package format, geography, and production period; aggregation only across compatible qualifiers and one primary route. |
| excluded_use | Fresh pineapple, pineapple juice declared as the product, an undeclared preservation route, consumer-stage claims, or substitution of canned-pineapple requirements for the broader category. |
| required_metadata | Reference-flow UUID and amount; product form; formulation or packing medium; net and applicable drained mass basis; primary preservation route; market temperature state; package format; facility geography; production period; allocation method; upstream dataset choices; waste destinations. |
| required_quality_disclosure | Foreground record coverage; meter and mass-balance quality; unexplained balance differences; shared-meter allocation; source-data quality; proxy choices; route-specific conformity evidence; every retained reasoned estimate and replacement status. |
| update_trigger | Change in product classification, formulation or packing medium, primary preservation route, package format, facility technology, energy supply, waste treatment, allocation basis, or reference-flow identity; availability of complete representative records or reviewed quantitative evidence triggers replacement of the corresponding reasoned estimate. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21491` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21491, “Pineapples, otherwise prepared or preserved.” | Classification context, product-category identity, and requirement to declare the represented preserved-product route. |
| `codex-cxs-319-2015` | standard | Codex Alimentarius, CXS 319-2015, Standard for Certain Canned Fruits, including the pineapple annex; supersedes CXS 42-1981 for canned pineapple. | Product description and conformity evidence only for the canned or applicable hermetically sealed thermal route. |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods to measure and communicate life cycle environmental performance. | System-boundary linkage, allocation hierarchy, data-quality disclosure, energy conversion traceability, and published-dataset profile. |
