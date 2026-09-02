---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fruits-and-nuts-provisionally-preserved-not-for-immediate-consumption
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fruits and nuts, provisionally preserved, not for immediate consumption

## 1. Scope and Applicability

This PCR covers foreground production of fruits and nuts placed in a temporary preservation state for storage, transport, or transfer to a subsequent processor. The output remains intended for further processing and is not represented as ready for direct consumption. A concrete data package shall identify the fruit or nut, physical form, temporary preservation route, preservation medium or treatment, holding conditions, mass basis, and packaging system.

The category can include brine-based, sulfur-dioxide or sulfite-based, and other documented temporary preservation routes. Those routes are alternatives, not ingredients in one generic recipe. A hybrid operation shall model each actual treatment stage separately. This PCR does not prescribe a universal salt concentration, sulfur-dioxide dose, pH, contact time, storage temperature, or medium-to-product ratio.

Excluded are fresh, frozen, simply dried, sugar-preserved, ready-to-eat pickled, canned final, jam, jelly, paste, roasted, salted ready-to-eat, or otherwise fully processed products whose market state is no longer provisional preservation for later processing. Codex CXS 260-2007 is not used as a product specification because it excludes products intended for further processing; its direct-consumption pickled-product requirements shall not be transferred to this category without a separate scope determination.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fruits-and-nuts-provisionally-preserved-not-for-immediate-consumption |
| classification_refs | CPC 3.0: 21496 — Fruits and nuts, provisionally preserved, not for immediate consumption |
| covered_products | Fruits, nuts, fruit peel, and relevant edible plant parts in a declared temporary preservation state and intended for further processing; route may be brine, sulfur dioxide or sulfite, or another documented provisional-preservation method |
| excluded_products | Fresh, frozen, simply dried, sugar-preserved, ready-to-eat pickled, canned final, jam, jelly, paste, roasted, salted ready-to-eat, and other products suitable for immediate consumption or no longer intended for further processing |
| representative_product | A declared fruit or nut batch temporarily preserved by one identified route, held under specified conditions, and supplied in declared packaging for further processing |
| production_route | Receiving and preparation; one declared temporary preservation route; controlled holding; conditional draining, rinsing, or medium adjustment; packaging and dispatch; route-specific residual management |
| market_state | Packaged or bulk provisionally preserved intermediate product at the producer gate, not suitable in that state for immediate consumption and destined for a subsequent processing operation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a declared fruit or nut in a verified temporary preservation state for transfer to a subsequent processor |
| How much | 1 kg of saleable provisionally preserved product on the declared mass basis |
| How well | Product identity, physical form, preservation route and agent, as-packed or drained mass basis, retained medium state, holding conditions, intended next processing step, and packaging system are declared; the product is not represented as ready for direct consumption |
| How long or cycle | One production lot from receipt of the incoming fruit or nut through temporary preservation, holding, packaging, and producer-gate dispatch; actual holding duration is recorded |
| reference_flow_link | One reference flow equals the Reference amount in the reference-flow object below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fruits and nuts, provisionally preserved, not for immediate consumption `70b546f4-bfbc-4e64-a70d-4ff57cedcc6d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fruit or nut species and commercial form; physical preparation state; preservation route identifier; preservation agent or medium identity; formulation or concentration as applied; route sequence for hybrid treatment; contact time and holding duration; temperature or other controlled holding condition; as-packed net-content or drained-product mass basis; retained medium included or excluded from reference mass; intended subsequent processing step; primary and secondary packaging system; geography; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported inventory to 1 kg of saleable product on one explicitly declared mass basis. Packaging mass is excluded from reference product mass and inventoried separately. |
| `medium_mass_basis` | preservation medium and treated product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether the reference mass is as-packed net contents or drained product. Include retained medium in the reference mass only when the declared commercial mass basis includes it; separately report medium added, recovered, retained, drained, and discarded. |
| `agent_as_supplied` | salt, sulfur dioxide, sulfite, and other preservation agents | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each agent as supplied and also record active-substance concentration or purity. Do not compare or aggregate agents without a documented conversion. |
| `energy_separation` | electricity and thermal-energy carriers | Energy | kWh and MJ | Record electricity in kWh and fuels or purchased heat in their native quantity and MJ; do not combine them into one unqualified energy amount. |
| `packaging_mass` | packaging materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging component by material and mass per reference flow, including reusable-container trip count when applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Incoming fruit or nut at the temporary-preservation facility gate, with species or commercial form, preparation state, received mass, supplier, origin, and receipt condition declared |
| starting_condition_role | Foreground gate-to-gate starting point; upstream cultivation, harvest, and any earlier handling are represented by linked upstream datasets rather than repeated in this foreground inventory |
| product_classification_scope | CPC 3.0 code 21496 is classification context for products provisionally preserved and not for immediate consumption; the canonical PCR remains classification-independent |
| recursive_input_rule | If an input is already a product within this same category, record it as an upstream product input with its own declared preservation route and upstream dataset; do not recursively recreate its prior temporary-preservation operations inside the current process |
| upstream_dataset_requirement | Require linked datasets for incoming fruit or nuts, water, salt, sulfur dioxide or sulfite, other preservation agents, electricity, thermal-energy carriers, packaging materials, transport when included, and off-site waste or wastewater treatment |
| disclosure | Declare the product identity, preservation route and route sequence, agent formulation, mass basis, holding conditions and duration, retained or removed medium, intended next processing step, packaging, included treatment, excluded downstream processing, geography, reference period, and any use of provisional estimates |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_to_gate` | foreground production | Include receiving, sorting and preparation, the actual temporary preservation treatment, controlled holding, conditional pre-dispatch conditioning, packaging, and on-site residual handling through producer-gate dispatch. | `unsd-cpc-3-0-2025`; `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_route_specificity` | preservation route | Select one primary preservation route for a single-route dataset. If the real operation is hybrid, represent each stage and its inputs, outputs, holding conditions, and emissions separately; do not use a blended salt-plus-sulfur-dioxide default recipe. | `unsd-cpc-3-0-2025` |
| `boundary_packaging` | packaging | Include primary, secondary, and tertiary packaging placed on the product at the reporting gate; exclude packaging mass from the reference product mass and disclose reusable-container cycles. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_downstream_exclusion` | downstream processing | Exclude de-preservation and conversion performed by the next processor, final food manufacture, distribution beyond the reporting gate, preparation for consumption, use, and end of life unless a broader study explicitly adds them as separate life-cycle stages. | `unsd-cpc-3-0-2025`; `codex-cxs-260-2007` |
| `boundary_inventory_completeness` | foreground inputs and outputs | Record water, energy, raw materials, packaging, products, wastes, wastewater or spent medium, and route-relevant direct emissions; link non-foreground burdens to appropriate upstream or treatment datasets. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_receiving_preparation` | Raw fruit or nut receiving and preparation | `required` | Always | Foreground receipt, inspection, sorting, trimming, and washing where performed | Per mass of accepted material transferred to preservation |
| `temporary_preservation_holding` | Temporary preservation and controlled holding | `required` | Always; populate only the actual route-specific agent rows | Foreground application of the declared preservation method and holding before further processing | Per mass of provisionally preserved intermediate product |
| `predispatch_conditioning` | Pre-dispatch draining, rinsing, or medium adjustment | `conditional` | Include only when performed before the producer gate | Foreground route-specific conditioning without converting the product into a direct-consumption product | Per mass of conditioned product |
| `packaging_dispatch` | Packaging and producer-gate dispatch | `required` | Always; bulk reusable containers remain packaging and are recorded by trip | Foreground packaging and release of the reference product | 1 kg reference product |
| `onsite_residual_treatment` | On-site residual or wastewater treatment | `conditional` | Include when treatment occurs within the reporting facility boundary | Foreground treatment of rejects, spent medium, wastewater, or route-specific emissions | Per mass or volume treated |

### Process: Raw fruit or nut receiving and preparation (`raw_receiving_preparation`)

#### Inputs

##### Product flows

###### Incoming fruit or nut material (`received_fruit_or_nuts`)

Record the received fruit or nut batch crossing the facility gate before temporary preservation.

- Selected flow: Declared incoming fruit or nut material
- Flow property / unit: Mass / kg
- Amount rule: measured received mass assigned to accepted and rejected batch fractions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`
- Range: Provisional yield-screening input; replace with reviewed product- and route-specific batch yield evidence after at least 10 representative batches or one complete campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 3.0
  - Unit: kg/kg reference product
  - Basis: received fruit or nut mass per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record water used for washing, fluming, or other preparation when it crosses the foreground boundary.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water allocated to the batch; record reused water separately from make-up water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional water-use screen; replace when product-line meters or a validated batch water balance cover one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: preparation make-up water per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared fruit or nut (`prepared_fruit_or_nuts`)

Record accepted product transferred to temporary preservation from measured mass records.

- Selected flow: Accepted prepared fruit or nut
- Flow property / unit: Mass / kg
- Amount rule: received mass minus measured preparation rejects and other documented mass changes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass`

##### Waste flows

###### Preparation rejects (`preparation_rejects`)

Record spoiled, damaged, trimmed, or otherwise rejected fruit or nut material by destination.

- Selected flow: Fruit or nut preparation rejects
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg received fruit or nut material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`
- Range: Provisional reject-fraction screen; replace with reviewed product-specific sorting records after at least 10 representative batches or one complete campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg received material
  - Basis: preparation rejects per kg received fruit or nut material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Temporary preservation and controlled holding (`temporary_preservation_holding`)

#### Inputs

##### Product flows

###### Prepared fruit or nut input (`preservation_product_input`)

Record the accepted prepared material entering the declared temporary preservation route.

- Selected flow: Accepted prepared fruit or nut
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg provisionally preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`

###### Preservation water for an aqueous route (`preservation_water`)

Populate only for a route that actually uses water in brine, sulfurous water, solution preparation, make-up, or holding.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water; separately record recovered, recirculated, retained, and discharged quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg provisionally preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional aqueous-route screen; replace with product-, vessel-, and route-specific make-up and recirculation records for one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg preserved intermediate output
  - Basis: make-up water per kg preserved intermediate output; excludes internal recirculation unless make-up is added
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt for a brine route (`brine_salt`)

Populate only when salt is actually used in the declared brine route; do not populate it as part of a generic recipe for sulfur-dioxide or other routes.

- Selected flow: Salt as supplied
- Flow property / unit: Mass / kg
- Amount rule: measured salt charged, replenished, recovered, and remaining in retained medium
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`
- Range: Provisional brine-route screening estimate; replace with the product specification, measured bath concentration, charge records, and retained-medium balance for the actual product
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg preserved intermediate output
  - Basis: salt as supplied per kg preserved intermediate output for a declared brine route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulfur dioxide or sulfite agent for an SO2 route (`sulfur_dioxide_agent`)

Populate only when sulfur dioxide, sulfurous water, or a sulfite formulation is actually used. Record formulation, purity, and active SO2 equivalent without transferring a food-category limit from an inapplicable standard.

- Selected flow: Declared sulfur dioxide or sulfite agent as supplied
- Flow property / unit: Mass / kg
- Amount rule: measured agent charge and replenishment, with active-substance concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`
- Range: Provisional SO2-route screening estimate; replace with the product-specific process specification, supplier assay, charge records, residual measurements, and applicable legal requirements
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.00001
  - Upper: 0.1
  - Unit: kg/kg preserved intermediate output
  - Basis: agent as supplied per kg preserved intermediate output for a declared SO2 or sulfite route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other temporary preservation agent (`other_preservation_agent`)

Populate only for a documented route not represented by the brine or SO2 rows. Identify every agent separately; this row is not permission to combine unspecified agents.

- Selected flow: Declared other temporary preservation agent as supplied
- Flow property / unit: Mass / kg
- Amount rule: measured charge by named agent, formulation, and purity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`
- Range: Provisional other-route screening estimate; replace before comparative or publication-critical use with product- and agent-specific process specifications and charge records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.00001
  - Upper: 1
  - Unit: kg/kg preserved intermediate output
  - Basis: one named agent as supplied per kg preserved intermediate output for the declared other route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation electricity (`preservation_electricity`)

Record metered electricity for dosing, pumping, agitation, cooling, ventilation, monitoring, and holding.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: meter or equipment record allocated to the route and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional electricity screen; replace with submetered route-specific records covering one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg preserved intermediate output
  - Basis: electricity per kg preserved intermediate output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation thermal energy (`preservation_thermal_energy`)

Record purchased heat or fuel used for temperature control or other route operations; leave the row unused when no thermal energy is consumed.

- Selected flow: Declared fuel or purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced energy allocated to the route and batch; retain native fuel quantity and conversion basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional thermal-energy screen; replace with route-specific fuel or heat records covering one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg preserved intermediate output
  - Basis: thermal energy per kg preserved intermediate output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Provisionally preserved intermediate product (`preserved_intermediate_product`)

Record the mass leaving preservation and holding before any optional pre-dispatch conditioning.

- Selected flow: Provisionally preserved fruit or nut intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured output mass with retained preservation medium identified separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`

##### Waste flows

###### Spent preservation liquid or wastewater (`spent_preservation_liquid`)

Record spent brine, sulfurous water, other preservation solution, wash-off, and wastewater separately by composition and destination.

- Selected flow: Declared spent preservation liquid or wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or transfer mass, with reused and retained fractions excluded and documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional spent-liquid screen; replace with route-specific liquid mass balance and discharge records for one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg preserved intermediate output
  - Basis: spent liquid or wastewater per kg preserved intermediate output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation rejects (`preservation_rejects`)

Record product removed during treatment or holding, including spoiled and off-specification material, by destination.

- Selected flow: Preservation rejects
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Range: Provisional preservation-loss screen; replace with reviewed product- and route-specific loss records after at least 10 representative batches or one complete campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg preserved intermediate output
  - Basis: preservation rejects per kg preserved intermediate output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct route-specific emissions to air (`direct_preservation_emissions`)

Record measured or calculated direct emissions, including sulfur dioxide when relevant, at the point where they cross to the environment; do not equate agent input with emissions.

- Selected flow: Declared direct preservation emission to air
- Flow property / unit: Mass / kg
- Amount rule: species-specific measured emission or calculation from collected agent input, recovery, residual, waste, and mass-balance records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional emission-fraction screen; replace with route-specific monitoring or a reviewed mass balance before comparative or publication-critical use
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg corresponding preservation agent input
  - Basis: direct emitted mass per kg of the corresponding agent as supplied; assess each emitted species separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Pre-dispatch draining, rinsing, or medium adjustment (`predispatch_conditioning`)

#### Inputs

##### Product flows

###### Provisionally preserved product for conditioning (`conditioning_product_input`)

Record the preserved product transferred to conditioning without redefining it as a direct-consumption product.

- Selected flow: Provisionally preserved fruit or nut intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`

###### Conditioning water (`conditioning_water`)

Record rinse or adjustment water only when the producer performs this operation before dispatch.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water allocated to conditioned product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional conditioning-water screen; replace with product- and route-specific metered records for one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg conditioned output
  - Basis: conditioning make-up water per kg conditioned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned provisionally preserved product (`conditioned_product`)

Record the conditioned mass and continued not-for-immediate-consumption state.

- Selected flow: Conditioned provisionally preserved fruit or nut
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned output mass and retained-medium status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`

##### Waste flows

###### Drained or rinse liquid (`drained_conditioning_liquid`)

Record drained medium and rinse liquid separately by route, composition, and destination.

- Selected flow: Declared drained preservation medium or rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured drained or discharged mass net of recovered and reused fractions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional drained-liquid screen; replace with route-specific mass-balance and discharge records for one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg conditioned output
  - Basis: drained or rinse liquid per kg conditioned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Packaging and producer-gate dispatch (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Product entering packaging (`packaging_product_input`)

Record the preserved product entering packaging from preservation or conditional conditioning.

- Selected flow: Provisionally preserved fruit or nut before packaging
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass on the same declared mass basis as the reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Primary packaging (`primary_packaging`)

Record each container, liner, closure, seal, and other product-contact packaging component by material and mass.

- Selected flow: Declared primary packaging material
- Flow property / unit: Mass / kg
- Amount rule: component count multiplied by measured component mass, divided by saleable reference product mass; apply recorded trip count for reusable packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021-2279`
- Range: Provisional primary-packaging screen; replace with the product-specific bill of packaging and measured component masses before comparative or publication-critical use
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: primary packaging supplied per kg reference product, after reusable-trip allocation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Secondary and tertiary packaging (`secondary_tertiary_packaging`)

Record cartons, straps, stretch film, pallets, and other dispatch packaging by material and mass.

- Selected flow: Declared secondary or tertiary packaging material
- Flow property / unit: Mass / kg
- Amount rule: measured or bill-of-material packaging quantity allocated to shipped reference product; apply recorded trip count for reusable items
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021-2279`
- Range: Provisional secondary/tertiary-packaging screen; replace with shipment-specific packaging records and reusable-trip evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: secondary and tertiary packaging per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference provisionally preserved product (`reference_product_output`)

This is the sole reference product output at the producer gate.

- Selected flow: Fruits and nuts, provisionally preserved, not for immediate consumption `70b546f4-bfbc-4e64-a70d-4ff57cedcc6d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: fixed normalization output of 1 kg on the declared reference mass basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: reference product output per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging waste generated on site (`packaging_waste`)

Record damaged, trimmed, or discarded packaging material generated before dispatch, by material and destination.

- Selected flow: Declared packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by packaging material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional on-site packaging-waste screen; replace with product-line waste records covering one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg reference product
  - Basis: on-site packaging waste per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-site residual or wastewater treatment (`onsite_residual_treatment`)

#### Inputs

##### Product flows

###### Treatment utilities and reagents (`treatment_inputs`)

Record named electricity, fuel, water, and treatment reagents when on-site treatment is included.

- Selected flow: Declared treatment utility or reagent
- Flow property / unit: Native property and unit for each input
- Amount rule: measured treatment input allocated to the relevant residual stream and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg or m3 residual treated and converted to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`

##### Waste flows

###### Residual stream entering on-site treatment (`onsite_treatment_feed`)

Record each reject, spent medium, or wastewater stream entering on-site treatment without double-counting it as a system-boundary output before treatment.

- Selected flow: Declared residual or wastewater stream
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured transfer to on-site treatment by stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Range: Provisional treatment-feed screen; replace with route-specific treatment inlet records and mass balance for one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg reference product
  - Basis: residual stream sent to on-site treatment per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treatment sludge and other treatment waste (`treatment_waste`)

Record treatment sludge and other residuals by composition and destination.

- Selected flow: Declared treatment sludge or waste
- Flow property / unit: Mass / kg
- Amount rule: measured wet and dry mass with moisture basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Range: Provisional treatment-waste screen; replace with treatment-specific sludge and residual records for one representative campaign
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: wet treatment waste per kg reference product, with moisture basis declared
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated discharge and direct treatment emissions (`treatment_emissions`)

Record species-specific emissions to water, air, or soil after on-site treatment at the point they cross the environment boundary.

- Selected flow: Declared elementary flow from on-site treatment
- Flow property / unit: Mass / kg
- Amount rule: measured load or concentration multiplied by measured discharge quantity, separately for each elementary flow and compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional treatment-emission screen; replace with species- and treatment-specific monitoring data before comparative or publication-critical use
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg residual stream treated
  - Basis: emitted species mass per kg corresponding residual stream treated; assess each species separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all multifunctional foreground processes | Avoid allocation by separately metering and subdividing route, batch, holding, conditioning, packaging, and treatment operations wherever feasible. | `eu-pef-2021-2279` |
| `allocation_physical` | shared operations that cannot be subdivided | Allocate shared burdens using a documented causal physical relationship, such as measured mass throughput, vessel occupancy time, pumping time, or treatment load, chosen to represent the driver of resource use or emissions. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | shared operations lacking a defensible physical relationship | Use economic allocation only as a documented fallback, record prices, currency, reference period, and sensitivity, and do not use it to reclassify wastes as co-products. | `eu-pef-2021-2279` |
| `allocation_recovered_material` | rejects, recovered medium, and recovered packaging | Treat an output as a co-product only when it has documented intended use, a receiving user or market, and non-waste status under the applicable jurisdiction; otherwise model it as waste and link treatment. | `eu-pef-2021-2279` |
| `allocation_route_separation` | brine, SO2 or sulfite, other, and hybrid routes | Do not average burdens across preservation routes as one default formula. A multi-route facility shall report route-specific inventories or disclose the production-weighted aggregation and its underlying route shares. | `unsd-cpc-3-0-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass` | `raw_receiving_preparation` | received, accepted, and rejected product mass | scale tickets and batch records | batch_id; product identity; supplier; origin; receipt date; gross mass; tare; accepted mass; reject mass; reject destination; preparation state | calibrated scales reconciled to batch ledger | kg | every batch | representative campaign and stated reference period | all facilities and lines in scope | sum by batch and product; normalize to saleable reference product | calibration records; signed batch reconciliation; completeness check |
| `cp_preparation_water` | `raw_receiving_preparation` | preparation make-up, reused, and discharged water | meter and batch log | meter_id; opening and closing readings; batch_id; make-up water; recirculated water; discharge water; allocation driver | dedicated meter or validated water balance | kg or m3 | every batch or shift | representative campaign and stated reference period | each preparation line in scope | allocate by measured batch use; convert volume using measured or documented density | meter calibration; water balance; exception log |
| `cp_preservation_route` | `temporary_preservation_holding` | product, medium, agents, route conditions, and preserved output | batch formulation, assay, vessel, and holding records | batch_id; product identity; route_id; ordered route stages; vessel_id; input and output mass; water; each agent name; formulation; purity; charge; replenishment; recovered amount; retained amount; concentration; contact time; holding duration; temperature; other controlled condition | calibrated scales, dosing records, concentration or residual analysis, and vessel log | kg; concentration unit; h; °C as applicable | every batch and each charge or adjustment | representative campaign and stated reference period | every preservation vessel and route in scope | retain route-specific records; calculate per preserved output; never blend unused route rows | scale and dosing calibration; supplier assay; laboratory result; signed route record |
| `cp_utilities` | `temporary_preservation_holding` | electricity, fuel, and purchased heat | meter, invoice, and equipment runtime records | meter_id; fuel_type; native_quantity; energy_content; opening and closing readings; runtime; batch_id; allocation driver | submetering preferred; otherwise documented engineering allocation from facility records | kWh; MJ; native fuel unit | continuous, batch, shift, or invoice period | at least one representative campaign and the stated reference period | all included preservation and holding equipment | allocate using causal driver and convert to reference flow | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_waste_emissions` | `temporary_preservation_holding` | spent liquid, rejects, treatment feed, treatment waste, and direct emissions | weigh tickets, flow meters, laboratory analyses, manifests, and emission records | batch_id; stream_id; route_id; mass or volume; composition; concentration; pH; temperature; pollutant species; compartment; recovery; destination; treatment; moisture basis | direct measurement or calculation from measured activity and reviewed factor or mass balance | kg; m3; mg/L or other analyte unit | every batch or discharge event; continuous where required | representative campaign and stated reference period | all included discharge, emission, and treatment points | calculate species-specific loads; prevent double counting of internal treatment transfers | meter calibration; laboratory report; waste manifest; mass balance; monitoring record |
| `cp_conditioning` | `predispatch_conditioning` | product transfer, conditioning water, drained medium, and conditioned output | batch, meter, and scale records | batch_id; route_id; input mass; water; recovered medium; drained medium; discharge; output mass; retained medium; continued further-processing designation | calibrated scales, meter, and batch balance | kg or m3 | every conditioned batch | representative campaign and stated reference period | each conditioning line in scope | normalize to conditioned output and reference flow; retain route identity | calibration records; batch mass balance; disposition record |
| `cp_packaging` | `packaging_dispatch` | product, packaging materials, reusable trips, and packaging waste | packaging bill, component weights, batch and shipment records | batch_id; product net mass; declared mass basis; component_id; material; component mass; count; reusable trip count; waste mass; shipment_id | calibrated scale, supplier specification verified by sampling, and packaging issue record | kg; count; trips | every packaging format and representative shipment | representative campaign and stated reference period | all packaging formats and dispatch points in scope | component mass times count divided by reference product mass; divide reusable items by validated trips | packaging bill; weighing record; supplier specification; trip log; shipment reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Normalized amount = batch-attributed amount / saleable reference product mass on the declared as-packed or drained basis. Packaging is never included in the denominator. | batch-attributed amount; saleable reference product mass; declared mass basis | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_product_yield` | receiving, preservation, and conditioning | Yield = measured saleable output mass / measured incoming product mass for the stated process; separately reconcile retained medium, rejects, samples, and unexplained difference. | input mass; output mass; retained medium; rejects; samples | process yield and mass-balance closure | `eu-fdm-bat-2019-2031` |
| `calc_active_agent` | sulfur dioxide, sulfite, salt, and other formulated agents | Active amount = formulation mass × measured or supplier-certified active fraction; preserve the as-supplied amount as a separate inventory value. | formulation mass; active fraction; assay basis | active-agent amount and as-supplied amount |  |
| `calc_liquid_load` | wastewater and spent medium | Pollutant load = measured liquid quantity × measured concentration, with density and unit conversion documented; do not apply one composition to another route. | liquid mass or volume; density; species concentration; route_id | species-specific load by stream and compartment | `eu-fdm-bat-2019-2031` |
| `calc_packaging_amount` | packaging | Packaging amount = component mass × component count / saleable reference product mass; divide reusable component burden by validated lifetime trips only when the study method requires trip allocation. | component mass; count; trip count; reference product mass | kg packaging per kg reference product | `eu-pef-2021-2279` |
| `calc_shared_burden` | shared equipment and treatment | Apply the allocation hierarchy in section 7 and retain the measured or calculated driver, route share, and sensitivity record. | shared burden; physical driver; route share; economic fallback data if used | route- and product-attributed burden | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and reference flow | Match the declared product to the category, preserve the exact reference UUID, and declare every required qualifier. | product specification; batch record; reference-flow record |
| `dq_route_specificity` | preservation inventory | Records shall identify one primary route or an ordered hybrid sequence and shall not silently populate salt, SO2 or sulfite, and other-agent rows as one default formulation. | route sheet; batch formulation; agent issue record; vessel log |
| `dq_temporal` | foreground activity data | Cover a representative campaign and the stated reference period, including seasonal or product-change variability where material. | date-bounded batch list; production calendar; coverage calculation |
| `dq_completeness` | mass, water, energy, waste, and emissions | Reconcile incoming and outgoing product, medium, water, agents, wastes, and retained inventory; explain exclusions and unresolved balance differences. | mass and water balance; meter reconciliation; waste manifests; exception log |
| `dq_measurement` | measured values | Use calibrated instruments or documented supplier records and retain units, detection limits, sampling methods, and conversions. | calibration certificate; laboratory report; invoice; conversion worksheet |
| `dq_estimates` | all reasoned_estimate ranges | Treat ranges marked reasoned_estimate only as provisional screening or default values and replace them when the stated product-, route-, facility-, or campaign-specific trigger is met. | estimate register; replacement record; reviewed source or foreground data |
| `dq_source_limit` | Codex, UNECE, EU PEF, and EU BAT use | Apply each source only within its scope: do not transfer direct-consumption pickled-product requirements, product-specific commercial standards, legal thresholds, or sector performance levels to this whole category. | source applicability assessment; documented exclusions and assumptions |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The product-flow UUID shall be `70b546f4-bfbc-4e64-a70d-4ff57cedcc6d`, the Mass flow-property UUID shall be `93a60a56-a3c8-11da-a746-0800200b9a66`, the Units of mass UUID shall be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference unit shall be kg. |  |
| `validate_required_qualifiers` | dataset metadata | Fail validation when any required qualifier is absent, including route identifier, mass basis, medium status, holding duration, intended next processing step, or packaging system. | `unsd-cpc-3-0-2025` |
| `validate_not_immediate_consumption` | product scope | The dataset shall state that the product remains intended for further processing and is not ready for immediate consumption; otherwise a different product category is required. | `unsd-cpc-3-0-2025`; `codex-cxs-260-2007` |
| `validate_route_exclusivity` | preservation inventory | A single-route dataset shall populate only the applicable route-specific agent rows. A hybrid route shall declare ordered stages and separate their activity data; a blended generic salt/SO2/other formula is invalid. | `unsd-cpc-3-0-2025` |
| `validate_reference_mass` | mass normalization | The reference output shall equal 1 kg on the declared as-packed or drained basis; packaging shall be excluded, and retained medium inclusion shall agree with the declaration. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_inventory_balance` | foreground inventory | Check product and preservation-medium mass balances, water balance where material, energy coverage, rejects, spent liquid, treatment transfers, and route-relevant direct emissions; unexplained differences require disclosure and review. | `eu-fdm-bat-2019-2031` |
| `validate_packaging` | packaging | Require packaging material, mass, component count, reusable-trip basis, and on-site packaging waste for every packaging format represented at the producer gate. | `eu-pef-2021-2279` |
| `validate_estimate_replacement` | reasoned estimates | Every reasoned_estimate shall retain its provisional label and replacement trigger; it shall not be presented as a source-backed typical or allowed range. |  |
| `validate_source_applicability` | external standards and guidance | Reject any use of Codex direct-consumption pickled-product composition or pH rules, a product-specific UNECE standard, or EU BAT performance levels unless the concrete product and facility applicability are separately demonstrated. | `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a declared fruit or nut and one actual provisional-preservation route at the producer gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness, source applicability, estimate replacement, and data quality |
| allowed_use | Product-, route-, geography-, technology-, and time-representative modelling of provisionally preserved fruits or nuts destined for further processing; aggregation only when route shares and allocation are disclosed |
| excluded_use | Ready-to-eat pickled or canned products; fresh, frozen, simply dried, or sugar-preserved products; undisclosed route mixtures; consumer use; downstream final processing; comparative assertions based on unresolved reasoned estimates |
| required_metadata | canonical PCR id; product and commercial form; Tiangong reference-flow UUID; route and ordered stages; agent identity, formulation, and concentration; mass basis; retained medium state; holding duration and conditions; intended next process; packaging; facility and geography; reference period; allocation; data sources; estimate register |
| required_quality_disclosure | foreground coverage; meter and scale calibration; batch and campaign coverage; mass and water balance; allocation basis; source applicability; route share; treatment destinations; unresolved UUIDs; every reasoned_estimate and its replacement status |
| update_trigger | Change in fruit or nut, commercial form, preservation route or agent, formulation, equipment, holding condition, mass basis, retained medium, packaging, treatment, facility, geography, allocation, regulation, source applicability, or availability of reviewed evidence replacing a reasoned estimate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | CPC 21496 category identity, provisional-preservation and further-processing boundary, and exclusions; it does not supply a route recipe or quantitative factors |
| `codex-cxs-260-2007` | Standard (`standard`) | Codex Alimentarius, CXS 260-2007, Standard for Pickled Fruits and Vegetables, adopted 2007 and amended through 2023, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+260-2007%2FCXS_260e.pdf (retrieved 2026-08-11) | Applicability limit: the standard covers direct-consumption pickled products and excludes products intended for further processing; its composition, pH, drained-weight, and additive provisions are not generalized here |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Functional-unit and reference-flow consistency, life-cycle inventory completeness, packaging, multifunctionality hierarchy, data collection, data quality, and downstream EF use |
| `eu-fdm-bat-2019-2031` | Official guidance (`official_guidance`) | European Commission, Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, CELEX 32019D2031, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-11) | Generic process-flow and monitoring coverage for water, energy, raw materials, wastewater, waste gas, residues, and treatment; legal scope thresholds and sector performance levels are not generalized to this PCR |
