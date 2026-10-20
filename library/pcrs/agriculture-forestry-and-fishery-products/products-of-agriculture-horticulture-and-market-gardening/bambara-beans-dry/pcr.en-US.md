---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.bambara-beans-dry
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bambara beans, dry

## 1. Scope and Applicability

This PCR covers foreground production of mature dry shelled Bambara groundnut or Bambara bean seed (*Vigna subterranea*) as a production mix at the farm gate. It covers crop management, lifting or digging subterranean pods, soil removal, pod detachment, drying, shelling, cleaning, grading and conditional final drying. Dry in-shell pods are an intermediate state and are not the reference product. Fresh pods, planting seed sold as seed, roasted or boiled seed, flour, canned product, oil and downstream processing are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.bambara-beans-dry |
| classification_refs | CPC 3.0: 01708 Bambara beans, dry; mapping relation: narrower |
| covered_products | Mature dry shelled *Vigna subterranea* seed at farm gate |
| excluded_products | Fresh pods; planting seed sold as seed; roasted/boiled seed; flour; canned product; oil; downstream products |
| representative_product | Food-grade mature dry Bambara bean seed |
| production_route | Managed crop production, independent lifting/digging, primary conditioning, stabilization, shelling, and grading; sole/intercrop, manual/mechanized and ambient/mechanical routes may coexist only when separately declared |
| market_state | Dry shelled seed, production mix at farm gate; declare moisture basis, grade, damage/reject criteria, production mode and conditioning route |

Alternative production routes inherit `crop_production`; sole-crop and intercropped routes change land, input and attribution records. Alternative technologies inherit the relevant harvest, drying, shelling or grading parent; they change energy, service and loss records. Mutually exclusive alternatives shall not be merged in one undifferentiated lot.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mature dry shelled Bambara bean seed at farm gate |
| How much | 1,000 kg as-received reference product |
| How well | Declared moisture, foreign matter, broken/damaged seed, pest damage and grade criteria |
| How long or cycle | One crop cycle and its farm-gate conditioning campaign |
| reference_flow_link | reference_bambara_beans |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Bambara beans, dry `855d61a4-389d-4db6-bbbd-c4f817ae16b4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; `dry_shelled_seed`; moisture and basis; grade; foreign matter; broken/damaged and pest-damaged fractions; geography; crop year; sole/intercrop route; harvest, drying and shelling technology; farm-gate hand-off |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and material balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg as received and declare moisture on one consistent basis. |
| `area_to_mass` | Crop records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/ha and kg/1,000 kg | Retain field area and gross/accepted yield before normalization. |
| `shell_state_mass` | Pod, shell and seed hand-offs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile in-shell input with seed, shells, foreign matter, rejects and moisture change. |
| `moisture_correction` | Drying | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use paired mass and moisture measurements and conserve dry solids. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field with prior crop, soil condition, retained residues and carry-over inputs disclosed |
| starting_condition_role | Start of managed production before sowing |
| product_classification_scope | Mature dry *Vigna subterranea* seed corresponding to CPC 3.0 01708 |
| recursive_input_rule | Purchased Bambara grain used as an input is upstream product input and is not recursively represented as output of this foreground system |
| upstream_dataset_requirement | Link product, energy, water and service inputs to suitable upstream datasets; expand set-level nutrient records to concrete products and UUIDs in final processes |
| disclosure | Geography, crop year, area, sole/intercrop mode, irrigation, nutrient products/composition, crop protection, lifting, drying, shell state, grade, residue/reject routes and allocation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | Crop production | Include management inputs, direct managed-soil emissions, residues and losses through mature crop hand-off. | `sa-dard-bambara-2020`; `sa-daff-bambara-2016`; `ipcc-2019-managed-soils` |
| `boundary_harvest` | Harvest | Model lifting/digging independently because it removes subterranean pods and creates collected pod, haulm, soil and field-loss states. | `sa-dard-bambara-2020`; `tanzania-naliendele-2001` |
| `boundary_conditioning` | Conditioning | Include soil removal, pod detachment, drying, cleaning, grading and conditional final drying. | `fao-pulse-loss-2020`; `fao-grain-handling` |
| `boundary_shell_state` | Shelling | Require shelling before the CPC 01708 reference-product hand-off. Keep dry pods as an intermediate and never combine pod and shelled-seed mass without a measured balance. | `feedipedia-bambara-byproducts-2016` |
| `boundary_exclusions` | Downstream | Exclude cooking, roasting, milling, canning, oil extraction, post-farm storage/transport and planting-seed certification. | `fao-forgotten-foods-2023` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | Managed biological Bambara bean crop production | `required` | One declared crop cycle | Alternative production route and technology delta; batch production indexed by crop cycle; single-period with no storage | per harvested area and accepted product |
| `lift_and_recover` | Lift or dig and recover pods | `required` | Crop has reached declared maturity | Independent harvest hand-off for pods, haulm, soil and field loss | per lifted pod lot |
| `pod_conditioning` | Primary conditioning, preservation and stabilization of pods | `required` | Lifted crop enters farm conditioning | Soil removal, pod detachment and drying create clean stabilized pods and separate debris and rejects | per kg dry pod output |
| `shell_dry_pods` | Shell dry pods | `required` | Every dry-pod lot contributing to CPC 01708 | Creates shelled seed and separately routes shells and damage | per kg shelled-seed output |
| `clean_grade_final_dry` | Cleaning, grading and sorting with conditional final drying | `required` | Dry shelled seed is prepared for sale | Creates accepted, downgraded and rejected states and farm-gate hand-off | per 1,000 kg accepted product |

Production is indexed by field/crop cycle and later nodes by lot/campaign. Assign shared inputs, outputs, cleaning and changeover once using measured time, throughput or another disclosed causal driver.

### Process: Managed biological Bambara bean crop production (`crop_production`)

#### Inputs

##### Product flows

###### Planting material (`planting_material`)

Record viable Bambara bean planting material entering the crop cycle; it is an upstream input rather than the farm-gate reference product.

- Selected flow: Bambara bean planting material
- Flow property / unit: Mass / kg
- Amount rule: Measured mass sown for the harvested area
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle_records`
- Range: Provisional planting-material QA screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 300
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fertilizer, urea input (`agricultural_nutrient_supply`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle_records`

###### Fertilizer, monoammonium phosphate input (`agricultural_nutrient_supply_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle_records`

###### Fertilizer, potassium chloride input (`agricultural_nutrient_supply_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle_records`

###### Cattle manure, as applied input (`agricultural_nutrient_supply_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle_records`

###### Agricultural limestone input (`agricultural_nutrient_supply_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle_records`

###### Irrigation water (`irrigation_water`)

Record gross irrigation water by source, event and delivery system; use zero where irrigation is inactive.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Amount rule: measured or calculated gross irrigation delivery by event
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle_records`
- Sources: `sa-daff-bambara-2016`
- Range: Provisional irrigation-water screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: m3/1,000 kg accepted product
  - Basis: gross irrigation supplied for the crop cycle
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage input (`field_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_crop_cycle_records`

###### Diesel fuel input (`field_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_crop_cycle_records`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature crop with subterranean pods (`mature_crop_handoff`)

Record the mature managed crop at the hand-off to the independent lifting or digging node.

- Selected flow: Mature Bambara bean crop with subterranean pods
- Flow property / unit: Mass / kg
- Amount rule: Harvest-area reconciliation of pods, haulm, adhering soil and field losses
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_crop_cycle_records`
- Sources: `sa-dard-bambara-2020`
- Range: Provisional mature-crop mass-balance screen
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 15000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Field residues and production losses (`field_residue_and_loss`)

Record roots and other residues retained in soil and failed or unrecovered production; distinguish returned residue from removed haulm.

- Selected flow: Bambara bean field residues and losses
- Flow property / unit: Mass / kg dry matter
- Amount rule: Field sampling and crop-cycle reconciliation
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_crop_cycle_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional field-residue and loss QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg dry matter
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_soil_n2o`)

Calculate direct N2O from actual nutrient and crop-residue nitrogen records using the selected IPCC tier.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: IPCC managed-soil calculation with N2O-N to N2O conversion
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_crop_cycle_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional direct-soil-N2O QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 30
  - Unit: kg N2O
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Lift or dig and recover pods (`lift_and_recover`)

#### Inputs

##### Product flows

###### Mature crop received (`mature_crop_received`)

Receive the mature crop from `crop_production` and preserve the field and crop-cycle link.

- Selected flow: Mature Bambara bean crop with subterranean pods
- Flow property / unit: Mass / kg
- Amount rule: Equal to the linked `mature_crop_handoff`
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_lot_records`
- Range: Provisional received-crop reconciliation screen
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 15000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage input (`harvest_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per kg lifted pod lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_lot_records`

###### Diesel fuel input (`harvest_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per kg lifted pod lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_lot_records`

###### Manual crop harvesting service (`harvest_non_energy_service`)

Record Manual crop harvesting service only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle.
Raw activity or stage basis: per kg lifted pod lot.

- Selected flow: Manual crop harvesting service
- Flow property / unit: Service / worker-hour
- Amount rule: Measured net quantity of Manual crop harvesting service, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lot_records`

###### Animal-traction crop harvesting service (`harvest_non_energy_service_animal_harvest`)

Record Animal-traction crop harvesting service only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle.
Raw activity or stage basis: per kg lifted pod lot.

- Selected flow: Animal-traction crop harvesting service
- Flow property / unit: Service / operating hour
- Amount rule: Measured net quantity of Animal-traction crop harvesting service, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lot_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Intended output: lifted pod lot with adhering soil (`lifted_pod_lot`)

Record collected pods before soil removal and pod detachment and hand them to `pod_conditioning`.

- Selected flow: Lifted Bambara bean pods with adhering soil
- Flow property / unit: Mass / kg
- Amount rule: Weighed lifted pod lot
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lot_records`
- Sources: `sa-dard-bambara-2020`; `tanzania-naliendele-2001`
- Range: Provisional lifted-pod-lot QA screen
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 5000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Removed haulm with beneficial destination (`haulm_coproduct`)

Record haulm as a co-product only with a documented feed, bedding or other beneficial hand-off; otherwise classify it as returned residue or waste.

- Selected flow: Bambara bean haulm
- Flow property / unit: Mass / kg dry matter
- Amount rule: Moisture-corrected removed haulm by destination
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_lot_records`
- Sources: `sa-dard-bambara-2020`
- Range: Provisional removed-haulm QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg dry matter
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Unrecovered pods and harvest rejects (`harvest_loss`)

Record pods left in soil, spill, and immature or damaged pods rejected in the field; exclude them from accepted output.

- Selected flow: Bambara bean harvest loss
- Flow property / unit: Mass / kg
- Amount rule: Field sampling plus lifted-lot reconciliation
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_lot_records`
- Range: Provisional harvest-loss QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Primary conditioning, preservation and stabilization of pods (`pod_conditioning`)

#### Inputs

##### Product flows

###### Lifted pod lot received (`lifted_pod_lot_received`)

Receive the linked lifted lot with field, crop-cycle and harvest-lot identifiers.

- Selected flow: Lifted Bambara bean pods with adhering soil
- Flow property / unit: Mass / kg
- Amount rule: Equal to the linked `lifted_pod_lot`
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg dry pod output.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pod_conditioning_records`
- Range: Provisional received-lot QA screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 5
  - Unit: kg
  - Basis: per kg dry pod output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage input (`conditioning_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per kg dry pod output.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pod_conditioning_records`

###### Diesel fuel input (`conditioning_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per kg dry pod output.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pod_conditioning_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized dry pods (`dry_pods`)

Record clean detached dry pods as the intermediate handed to shelling; dry pods are not the CPC 01708 reference product.

- Selected flow: Bambara bean dry pods, intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed output at measured moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per kg dry pod output.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pod_conditioning_records`
- Sources: `tanzania-naliendele-2001`; `fao-pulse-loss-2020`
- Range: Dry-pod output reconciliation range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per kg dry pod output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Detached soil, debris and pod rejects (`conditioning_debris_rejects`)

Record soil, roots, plant debris, spill, mouldy or damaged pods separately by return, recovery, downgrade or discard destination.

- Selected flow: Pod-conditioning debris and rejects
- Flow property / unit: Mass / kg
- Amount rule: Weighed streams by state and destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg dry pod output.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pod_conditioning_records`
- Range: Provisional conditioning-reject QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 3
  - Unit: kg
  - Basis: per kg dry pod output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Water evaporated during pod drying (`pod_drying_water`)

Calculate removed water from paired input/output mass and moisture measurements; do not classify it as product loss.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Determine supported evaporation on a closed water-mass control volume: incoming material water + actual added water + opening water stock - water in all accepted/co-product/reject/residue exits - separate liquid discharge/exports - closing water stock. Use measured wet mass times wet-basis moisture for each material stream, and compatible density for liquid volumes. Internal recirculation cancels. Retain actual rain/rewetting where relevant; total fresh/dry mass difference is not all water. Independently support all terms and the evaporation pathway; investigate an unexplained or negative balance rather than force it into a vapour release or clip it to zero. Keep water quantities distinct from dry-solids loss and other volatiles. Attribute and normalize the evidenced water release once using the original matched final reference.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per kg dry pod output.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pod_conditioning_records`
- Sources: `fao-grain-handling`
- Range: Provisional pod-drying-water QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 2
  - Unit: kg water
  - Basis: per kg dry pod output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Shell dry pods (`shell_dry_pods`)

#### Inputs

##### Product flows

###### Dry-pod input to shelling (`dry_pods_shelling_inputs`)

Record dry pods by originating conditioning lot.

- Selected flow: Dry Bambara bean pods
- Flow property / unit: Mass / kg
- Amount rule: measured dry-pod input by shelling batch
- Value mode: `foreground_record`
- Specificity: `technology_specific`
Raw activity or stage basis: per kg accepted shelled seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shelling_records`
- Sources:
- Range: Provisional dry-pod input screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 12
  - Unit: kg dry pods/kg accepted shelled seed
  - Basis: one shelling batch
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage input (`shelling_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per kg accepted shelled seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_shelling_records`

###### Diesel fuel input (`shelling_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per kg accepted shelled seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_shelling_records`

###### Manual shelling service (`manual_shelling_service`)

Record manual shelling separately when it is represented as a Product-service exchange.

- Selected flow: Manual shelling service
- Flow property / unit: Service / service-hour
- Amount rule: measured manual service by shelling batch
- Value mode: `foreground_record`
- Specificity: `technology_specific`
Raw activity or stage basis: per kg accepted shelled seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shelling_records`
- Sources:
- Range: Provisional manual-shelling service screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 12
  - Unit: service-hour/kg accepted shelled seed
  - Basis: one shelling batch
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dry shelled seed (`dry_shelled_seed`)

Record intact dry seed at the shelling hand-off to final cleaning and grading.

- Selected flow: Bambara beans, dry, shelled
- Flow property / unit: Mass / kg
- Amount rule: Weighed intact shelled-seed output
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per kg accepted shelled seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shelling_records`
- Range: Shelled-seed output reconciliation range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted shelled seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Shells with beneficial destination (`shell_coproduct`)

Record shells as a co-product only with a documented beneficial destination; otherwise route them as waste.

- Selected flow: Bambara bean shells
- Flow property / unit: Mass / kg dry matter
- Amount rule: Weighed shells by destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg accepted shelled seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shelling_records`
- Sources: `feedipedia-bambara-byproducts-2016`
- Range: Provisional shell co-product QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 2
  - Unit: kg dry matter
  - Basis: per kg accepted shelled seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Broken seed, rejects and discarded shells (`shelling_rejects`)

Record each rejected state and its rework, downgrade, recovery or discard destination; count rework once and only after final acceptance.

- Selected flow: Bambara bean shelling rejects
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected material by state and destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg accepted shelled seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shelling_records`
- Range: Provisional shelling-reject QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per kg accepted shelled seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Cleaning, grading and sorting with conditional final drying (`clean_grade_final_dry`)

#### Inputs

##### Product flows

###### Shelled-seed lot input (`shelled_lot_input`)

Receive dry shelled seed from shelling as a mass-linked lot.

- Selected flow: Dry shelled Bambara bean lot
- Flow property / unit: Mass / kg
- Amount rule: measured linked-lot input
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_lot_records`
- Sources: `fao-pulse-loss-2020`; `fao-grain-handling`
- Range: Provisional shelled-lot input screen
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 1500
  - Unit: kg shelled lot/1,000 kg accepted product
  - Basis: one final-conditioning lot
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage input (`final_conditioning_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_final_lot_records`

###### Diesel fuel input (`final_conditioning_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_final_lot_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dry shelled Bambara beans at farm gate (`reference_bambara_beans`)

This is the sole reference-product hand-off and excludes every pod, shell, downgraded, broken, damaged and rejected state.

- Selected flow: Bambara beans, dry `855d61a4-389d-4db6-bbbd-c4f817ae16b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Raw output measurement and reconciliation: 1,000 kg accepted dry shelled-seed lot at measured moisture

- Amount rule: 1000 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
Raw activity or stage basis: reference flow.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Range: Reference-flow identity range
  - Range role: `allowed_range`
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Downgraded dry seed (`downgraded_seed`)

Record saleable off-grade seed separately with its grade and destination; it is not reference product.

- Selected flow: Downgraded dry Bambara bean seed
- Flow property / unit: Mass / kg
- Amount rule: Weighed downgraded output by grade and destination
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_lot_records`
- Range: Provisional downgraded-seed QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Foreign matter, damaged seed and final rejects (`final_rejects`)

Record material failing accepted or downgrade states with its recovery, feed or disposal destination.

- Selected flow: Bambara bean cleaning and grading rejects
- Flow property / unit: Mass / kg
- Amount rule: Weighed reject streams by state and destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_lot_records`
- Sources: `fao-pulse-loss-2020`
- Range: Provisional final-reject QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Water evaporated during final drying (`final_drying_water`)

Record only when final drying is active and calculate from paired mass and moisture measurements.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Determine supported evaporation on a closed water-mass control volume: incoming material water + actual added water + opening water stock - water in all accepted/co-product/reject/residue exits - separate liquid discharge/exports - closing water stock. Use measured wet mass times wet-basis moisture for each material stream, and compatible density for liquid volumes. Internal recirculation cancels. Retain actual rain/rewetting where relevant; total fresh/dry mass difference is not all water. Independently support all terms and the evaporation pathway; investigate an unexplained or negative balance rather than force it into a vapour release or clip it to zero. Keep water quantities distinct from dry-solids loss and other volatiles. Attribute and normalize the evidenced water release once using the original matched final reference.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1,000 kg accepted reference product.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_final_lot_records`
- Sources: `fao-grain-handling`
- Range: Provisional final-drying-water QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg water
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | All nodes | First avoid allocation by separately metering nodes and linking each crop cycle or lot once. | `iso-14044-2006` |
| `allocation_intercrop` | Intercropped fields | Assign crop-specific inputs directly and shared operations by area, time or another causal driver; shares sum to one. | `iso-14044-2006` |
| `allocation_residue_status` | Haulm and shells | Without evidenced beneficial hand-off a stream is residue/waste with no co-product credit; beneficial hand-off makes it an intended co-product. | `iso-14044-2006`; `feedipedia-bambara-byproducts-2016` |
| `allocation_coproduct` | Intended co-products | Where subdivision cannot avoid allocation, use contemporaneous farm-gate economic allocation and report mass-allocation sensitivity. | `iso-14044-2006` |
| `allocation_rework` | Rework/rejects | Retain rework burdens in the producing lot, count material only at final disposition, and never count rejects as accepted output. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_cycle_records` | `crop_production` | All crop inputs/outputs | Field logs, invoices, meters and yield records | field; cycle; area; route; input product and composition; water; energy; yield; residues; loss; emission method | Link every event to harvested field; Raw aggregation and attribution: sum then normalize by accepted product; causal attribution for intercrop | original unit | event/cycle | full cycle | field | per declared reference flow | invoices, calibration, labels, area and yield records |
| `cp_harvest_lot_records` | `lift_and_recover` | Harvest inputs/outputs | Harvest log, scales and samples | field; lot; method; energy; pod; haulm; soil; loss; destinations | Link each lot to one field; Raw aggregation and attribution: reconcile collected and uncollected states | kg; MJ | lot | campaign | field/technology | per declared reference flow | scale checks, sampling and receipts |
| `cp_pod_conditioning_records` | `pod_conditioning` | Conditioning inputs/outputs | Lot sheet, scales, moisture and equipment logs | input/output mass/moisture; route; energy; debris; reject; time ; all input/output water including rejects/residues; actual added/rain water; separate liquid exports; opening/closing water stock; moisture and density; supported evaporation| Measure every state; Raw aggregation and attribution: dry-solids balance then normalize | kg; %; MJ | lot | all lots | site/route | per declared reference flow | calibration, route log and closure |
| `cp_shelling_records` | `shell_dry_pods` | Shelling inputs/outputs | Batch sheet and destinations | pod mass/moisture; route; energy; seed; shells; rejects; rework | Measure every batch; Raw aggregation and attribution: balance and count rework once | kg; %; MJ | batch | all shelled lots | sheller | per declared reference flow | calibration, logs and closure |
| `cp_final_lot_records` | `clean_grade_final_dry` | Final lot inputs/outputs | Grade sheet, scales, moisture and dispatch | shell state; mass/moisture; grade; energy; accepted; downgrade; reject; rework ; all input/output water including rejects/residues; actual added/rain water; separate liquid exports; opening/closing water stock; moisture and density; supported evaporation| Measure every state; Raw aggregation and attribution: balance then normalize to 1,000 kg | kg; %; MJ | lot | all sales lots | site/route | per declared reference flow | calibration, grade and dispatch records |
| `cp_phase1_environment_coverage` | crop_production | managed environmental coverage by actual node | site/activity/method ledger | site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All cards | amount / accepted mass × 1,000 kg | linked amount; accepted mass | amount per reference flow |  |
| `calc_moisture_balance` | Drying | dry solids = wet mass × (1 − moisture fraction); water loss from paired states | mass, moisture, removed matter | corrected mass and water to air | `fao-grain-handling` |
| `calc_shelling_balance` | Shelling | pods = seed + shells + rejects + moisture change within uncertainty | batch states | shelling yield and residues | `feedipedia-bambara-byproducts-2016` |
| `calc_managed_soil_n2o` | Crop production | selected IPCC tier using actual synthetic/organic N and residue N; convert N2O-N to N2O | nutrient composition; residues; area; factors | kg N2O | `ipcc-2019-managed-soils` |
| `calc_intercrop_attribution` | Shared operations | shared amount × disclosed causal share; shares sum to one | shared record and driver | Bambara share | `iso-14044-2006` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_crop_cycle_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product | Verify species, dry and shell states, grade and hand-off; segregate planting seed and processed products. | specification, inspection and dispatch |
| `dq_completeness` | System | Cover all contributing fields/lots and reconcile pods, seed, haulm, shells, debris, rework, rejects and losses. | linked node balances |
| `dq_nutrients` | Nutrient supply | Retain every concrete product and composition inside the one card and resolve final exchanges to UUIDs. | invoices, labels and applications |
| `dq_measurement` | Quantities | Preserve raw units, instrument checks, method and uncertainty. | calibration and workbook |
| `dq_routes` | Alternatives | Keep sole/intercrop, manual/mechanized, ambient/heated shelling and active/inactive final-drying routes distinct. | route codes |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail when UUID, mass property/group, species, dry/shell state, moisture basis or farm-gate hand-off is missing. |  |
| `validate_route_topology` | Process map | Require production, independent harvest, pod conditioning, shelling and grading for the dry shelled reference product. | `sa-dard-bambara-2020`; `fao-pulse-loss-2020` |
| `validate_nutrient_cardinality` | Crop inputs | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_mass_balance` | Lots | Input equals accepted, co-product, downgrade, reject, debris, loss and moisture change within disclosed uncertainty. |  |
| `validate_grade_handoffs` | Grading | Require accepted, downgraded and rejected destinations and exclude rejects from reference output. | `fao-pulse-loss-2020` |
| `validate_rework` | Rework | Require producing-lot link, one final disposition and no duplicated output or burden. |  |
| `validate_multioutput` | Haulm/shells | Require intended-product, residue or waste status, destination and attribution decision before credit. | `iso-14044-2006`; `feedipedia-bambara-byproducts-2016` |
| `validate_run_attribution` | Cycles/lots | Require indexing and shares that reconcile to one; count shared burden once. |  |
| `validate_range_condition` | Conditional cards | Shelling ranges always apply; final-drying ranges apply only when final drying is active and use zero when inactive. Provisional ranges are QA screens, not limits. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-production and conditioning dataset for mature dry Bambara beans |
| downstream_use | `secondary_dataset` or `background_dataset` when geography, shelled state and route match |
| allowed_use | Dry shelled *Vigna subterranea* seed at farm gate with matching qualifiers |
| excluded_use | Fresh, planting-seed, cooked, roasted, milled, canned, oil and post-farm activities |
| required_metadata | Geography; crop year; area; route; yield; irrigation; nutrient products/composition; technologies; shell state; moisture; grade; destinations; allocation; coverage |
| required_quality_disclosure | Primary-data share, estimates, calibration, balance closure, representativeness, UUID gaps, allocation sensitivity and unresolved destinations |
| update_trigger | Material change in product state, geography, yield, field practice, technology, grade, residue market, allocation, emission method or upstream data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-forgotten-foods-2023` | official_guidance | FAO, *Compendium of Forgotten Foods* (2023), https://openknowledge.fao.org/3/cc5044en/cc5044en.pdf | Identity, dry seed and exclusions |
| `sa-dard-bambara-2020` | extension_guidance | North West Province DARD, *Bambara Groundnut: A Crop for the Future* (2020), https://dard.nwpg.gov.za/wp-content/uploads/2022/05/Bambara-groundnut-a-crop-for-the-future.pdf | Subterranean pods, lifting, inputs and residues |
| `sa-daff-bambara-2016` | extension_guidance | South Africa DAFF, *Bambara Groundnuts Production Guideline* (2016), https://nda.gov.za/phocadownloadpap/Brochures_and_Production_Guidelines/Bambara.pdf | Field management, nutrients and water |
| `tanzania-naliendele-2001` | official_guidance | Tanzania MAFS/Naliendele, *Farmer seed experts...* (2001), https://www.fao.org/fileadmin/templates/esw/esw_new/documents/Links/Publications_Tanzania/38_Farmer_seed_experts_Naliendele.pdf | Digging/lifting, drying and storage |
| `fao-pulse-loss-2020` | official_guidance | FAO, *Improving the Storability and Availability of Pulses by Reducing Post-Harvest Losses* (2020), https://www.fao.org/platform-food-loss-waste/resources/news/news-detail/COVID-19-Series-Improving-the-Storability-and-Availability-of-Pulses-by-Reducing-Post-Harvest-Losses/en | Harvest, drying, cleaning and damage control |
| `fao-grain-handling` | handbook | FAO, *Farm structures in tropical climates*, Chapter 9, https://www.fao.org/4/s1250e/S1250E0u.htm | Moisture, drying and storage quality |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O and residue N |
| `feedipedia-bambara-byproducts-2016` | literature | INRAE/CIRAD/AFZ/FAO Feedipedia (2016), https://feedipedia.review.fao.org/node/529 | Shell/offal states and feed destinations |
| `iso-14044-2006` | standard | ISO 14044:2006, confirmed 2022, https://www.iso.org/standard/38498.html | Allocation and inventory treatment |
