---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.flower-seeds
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flower seeds

## 1. Scope and Applicability

This PCR covers seed of flowering plants produced and released specifically for sowing. It follows one declared species, cultivar and lot from parent stock and managed multiplication through harvest, extraction, drying, cleaning, testing, optional treatment and packaging at the seed producer or conditioner hand-off.

It excludes cut flowers, bulbs and other vegetative propagules, edible or oilseed uses, unmanaged wild collection, and seed without a declared sowing use. A dataset shall not combine unlike species, cultivars, production routes, or treated and untreated states without transparent weighting.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.flower-seeds |
| classification_refs | CPC 3.0 `01963`; mapping relation: exact |
| covered_products | Conditioned seed of declared flowering-plant species intended for sowing |
| excluded_products | Cut flowers; vegetative propagules; seed sold for food, feed or oil; unidentified mixtures; unmanaged wild collection |
| representative_product | One accepted lot of a declared flower species and cultivar |
| production_route | Parent stock → managed seed crop → harvest/extraction → drying/cleaning/grading → testing, optional treatment and packaging |
| market_state | Conditioned sowing seed with lot, species/cultivar, purity, germination or viability, moisture, treatment and certification status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conditioned flower seed released for sowing at producer or conditioner hand-off |
| How much | 1 kg |
| How well | Species, cultivar, lot, purity, germination/viability, moisture, treatment and certification status declared |
| How long or cycle | One traceable multiplication and conditioning lot; multi-period burdens cover the declared productive period |
| reference_flow_link | released_flower_seed |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Flower seed for sowing; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar; lot; multiplication route; purity; germination or viability; moisture; treatment; certification; geography; hand-off gate |

The available `Seed of H. annuus` identity is restricted to that species and is not used as the category reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference and intermediate seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net seed mass at the moisture value reported for the same lot; exclude packaging mass. |
| `quality_alignment` | released seed | lot-specific test result | declared test unit | Purity, germination/viability and moisture shall refer to the same sampled lot. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Parent-stock identity, multiplication class, field or protected-production state, and perennial stand age when applicable |
| starting_condition_role | Traceable starting condition for the multiplication lot |
| product_classification_scope | One flower-seed product within CPC 3.0 01963 |
| recursive_input_rule | Parent flower seed is a linked upstream product input and is not recursively produced inside the current lot |
| upstream_dataset_requirement | Match species/cultivar, class, treatment, geography and supplier gate of received parent seed |
| disclosure | Declare production system, crop cycle, pollination management, sites, conditioning route, storage, treatment and reject destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_route` | all datasets | Include evidenced multiplication, harvest/extraction, drying, cleaning, testing and pre-hand-off treatment, packaging and storage. | `fao-seed-handling`; `fao-seed-portal` |
| `boundary_parent_stock` | parent seed | Represent parent seed as a separate upstream exchange with lot identity and stop recursion there. |  |
| `boundary_market_state` | reference product | Release only seed intended for sowing and distinguish treated, coated, pelleted and untreated states. |  |
| `boundary_reject_route` | rejected material | Report off-spec seed, screenings and foreign matter by recovery, downgraded use or disposal destination. | `fao-seed-handling` |
| `boundary_multi_period` | perennial crops and shared assets | Attribute establishment and shared assets over documented productive output without double charging. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | Parent-stock establishment and seed-crop production | `required` | Managed production of the declared flowering plant for seed | biological production | 1 kg harvested seed-bearing material |
| `harvest_extraction` | Harvest and seed extraction | `required` | Collection and separation of seed from heads, capsules, pods or fruit | harvest/capture | 1 kg raw extracted seed |
| `dry_clean` | Drying, cleaning and grading | `required` | Moisture stabilization and separation of accepted seed | conditioning/grading | 1 kg conditioned seed |
| `release_pack` | Testing, optional treatment, packaging and hand-off | `required` | Lot testing, release, presentation and pre-dispatch storage | material treatment/presentation | 1 kg released flower seed |

### Process: Parent-stock establishment and seed-crop production (`seed_crop_production`)

#### Inputs

##### Product flows

###### Parent flower seed (`parent_seed`)

Declared parent seed enters the managed multiplication lot.

- Selected flow: Parent flower seed for sowing; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass assigned to the production lot
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per kg harvested seed-bearing material.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parent_stock`

- Range: Provisional parent-seed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 0.5
  - Unit: kg
  - Basis: per kg harvested seed-bearing material
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Fertilizer, urea input (`nutrient_supply`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg harvested seed-bearing material.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Fertilizer, monoammonium phosphate input (`nutrient_supply_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg harvested seed-bearing material.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Fertilizer, potassium chloride input (`nutrient_supply_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg harvested seed-bearing material.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Cattle manure, as applied input (`nutrient_supply_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg harvested seed-bearing material.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Agricultural limestone input (`nutrient_supply_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg harvested seed-bearing material.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Irrigation water (`irrigation_water`)

Water delivered for irrigation is recorded when that route is active.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Amount rule: metered delivery or verified pump-flow calculation
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per kg harvested seed-bearing material.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_irrigation`

- Range: Provisional irrigation QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3
  - Basis: per kg harvested seed-bearing material; zero only for documented rainfed production
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

###### Electricity, medium voltage (`production_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per kg harvested seed-bearing material.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Diesel fuel (`production_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per kg harvested seed-bearing material.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

##### Waste flows

None required as a universal card.

##### Elementary flows

Route-specific field emissions are calculated in the concrete package from recorded inputs and the declared method.

#### Outputs

##### Product flows

###### Harvested seed-bearing material (`harvested_seed_material`)

Mature heads, capsules, pods, fruit or other declared material transferred to extraction.

- Selected flow: Harvested flower seed-bearing material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass with material form and moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per crop lot.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional harvested-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per kg raw extracted seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

None required as a universal card.

##### Elementary flows

None required as a universal card.

### Process: Harvest and seed extraction (`harvest_extraction`)

#### Inputs

##### Product flows

###### Harvested material received (`harvested_material_input`)

The traceable harvested lot enters separation without substitution by another crop.

- Selected flow: Harvested flower seed-bearing material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: linked measured mass from production
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per kg raw extracted seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional extraction-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per kg raw extracted seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage (`extraction_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per kg raw extracted seed.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Diesel fuel (`extraction_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per kg raw extracted seed.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

##### Waste flows

None required as a universal input card.

##### Elementary flows

None required as a universal card.

#### Outputs

##### Product flows

###### Raw extracted flower seed (`raw_seed`)

Separated unconditioned seed is transferred to drying and cleaning.

- Selected flow: Raw extracted flower seed; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured output mass and moisture by lot
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per extraction lot.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional raw-seed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Extraction residues (`extraction_residue`)

Non-seed crop material and unrecovered fractions leave by a documented destination.

- Selected flow: Flower-seed extraction residue; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass or moisture-corrected mass balance
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per kg raw extracted seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_reject`

- Range: Provisional extraction-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per kg raw extracted seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

None required as a universal card.

### Process: Drying, cleaning and grading (`dry_clean`)

#### Inputs

##### Product flows

###### Raw flower seed received (`raw_seed_input`)

The linked raw-seed lot enters moisture stabilization and cleaning.

- Selected flow: Raw extracted flower seed; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: linked measured input mass and moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per kg conditioned seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional raw-seed input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage (`conditioning_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per kg conditioned seed.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Diesel fuel (`conditioning_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per kg conditioned seed.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

##### Waste flows

None required as a universal input card.

##### Elementary flows

None required as a universal card.

#### Outputs

##### Product flows

###### Conditioned flower seed (`conditioned_seed`)

Moisture-stable cleaned seed transfers to release testing.

- Selected flow: Conditioned flower seed for sowing; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned mass at declared moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional conditioned-seed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Cleaning and grading rejects (`cleaning_rejects`)

Off-spec seed, chaff and inert matter are excluded from accepted seed.

- Selected flow: Flower-seed cleaning rejects; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by reason and destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg conditioned seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_reject`

- Range: Provisional cleaning-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg conditioned seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

None required as a universal card.

### Process: Testing, optional treatment, packaging and hand-off (`release_pack`)

#### Inputs

##### Product flows

###### Conditioned seed received (`conditioned_seed_input`)

The linked conditioned lot enters sampling, testing and final preparation.

- Selected flow: Conditioned flower seed for sowing; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: linked measured mass from conditioning
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per kg released flower seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stage_mass_quality`

- Range: Provisional conditioned-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Seed treatment material (`seed_treatment`)

Treatment, coating or pelleting material is recorded only when applied before hand-off.

- Selected flow: Seed treatment material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured material applied net of returned stock
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per kg released treated seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_packaging`

- Range: Provisional treatment-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg released seed; zero for an untreated lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Seed packaging (`seed_packaging`)

Actual packaging components used for the released lot are recorded.

- Selected flow: Flexible packaging for flower seed
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass by component; use another permitted group when the actual package is not flexible
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg released flower seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_packaging`

- Range: Provisional packaging QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kg
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage (`final_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per kg released flower seed.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Diesel fuel (`final_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per kg released flower seed.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

##### Waste flows

None required as a universal input card.

##### Elementary flows

None required as a universal card.

#### Outputs

##### Product flows

###### Released flower seed (`released_flower_seed`)

Only net seed mass covered by the release decision becomes the reference output.

- Selected flow: Flower seed for sowing; UUID unresolved
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: measured net mass covered by the release decision

- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: per released lot.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release_quality`

- Range: Reference-flow mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `collected_record`

##### Waste flows

###### Failed-test or treatment rejects (`release_rejects`)

Material failing release or treatment controls remains outside the reference output.

- Selected flow: Rejected flower seed; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by failure reason and destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per kg released flower seed.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_reject`

- Range: Provisional release-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per kg released flower seed
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

None required as a universal card.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_reconciliation` | each process | Reconcile opening stock, inputs, outputs, moisture change, residues, rejects and closing stock on one basis. |  |
| `allocation_secondary_outputs` | saleable plant material or downgraded seed | Prefer subdivision or direct physical attribution; if allocation remains, disclose outputs, causal basis, formula and sensitivity. |  |
| `allocation_rejects` | all rejects | Do not include rejected seed in released output or credit a destination before routing is evidenced. |  |
| `allocation_periods` | perennial crops and shared assets | Attribute establishment and infrastructure over documented productive output using one consistent period rule. |  |
| `allocation_batches` | shared processing, storage and changeovers | Assign shared burdens by measured time, occupied storage, throughput or another causal driver without double counting. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_stock` | `seed_crop_production` | parent seed | supplier/sowing record | species, cultivar, class, lot, treatment, mass, date, plot | invoice, label and calibrated scale; Raw aggregation and attribution: sum traceable parent stock | kg | each sowing | crop cycle | production lot | per declared reference flow | label, invoice, scale check |
| `cp_crop_inputs` | `seed_crop_production` | nutrients and crop protection | purchase/application record | product, composition or active, mass, date, plot, purpose | invoice plus application log; Raw aggregation and attribution: retain actual products and composition | kg | each application | crop cycle | plot/lot | per declared reference flow | invoice and log |
| `cp_irrigation` | `seed_crop_production` | irrigation | meter/pump record | volume, source, meter, runtime, plot, date | meter or documented pump calculation; Raw aggregation and attribution: sum delivered volume | m3 | each event | crop cycle | plot/lot | per declared reference flow | calibration or pump specification |
| `cp_energy` | `all processes` | energy | meter, fuel and run record | carrier, quantity, equipment, node, lot, runtime | invoices, meters and equipment logs; Raw aggregation and attribution: convert and allocate by causal driver | MJ; kWh | each run/interval | complete route | site/process | per declared reference flow | invoice, reading, run log |
| `cp_stage_mass_quality` | `all processes` | product/intermediate mass | batch/lot record | lot, stage, input, output, tare, moisture, form, time | weighing and moisture test; Raw aggregation and attribution: preserve stage mass and moisture | kg; % | each transfer/batch | complete route | lot/node | per declared reference flow | ticket, calibration, sample id |
| `cp_residue_reject` | `harvest_extraction; dry_clean; release_pack` | residues/rejects | disposition record | type, mass, reason, destination, date, lot | scale plus dispatch/receiver record; Raw aggregation and attribution: sum by material and destination | kg | each removal/lot | complete route | node/lot | per declared reference flow | scale, dispatch, mass balance |
| `cp_treatment_packaging` | `release_pack` | treatment/packaging | batch/stock record | formulation, applied mass, package type, component mass, count, returns, lot | equipment record and stock reconciliation; Raw aggregation and attribution: net consumed by component | kg | each lot | final preparation | line/lot | per declared reference flow | stock and equipment check |
| `cp_release_quality` | `release_pack` | released seed | sampling/test/release record | identity, lot, purity, germination/viability, moisture, treatment, certification, mass | representative sampling and recognized test method; Raw aggregation and attribution: include only released mass | kg; % | each lot | hand-off | lot | per declared reference flow | test, certificate, chain of custody |
| `cp_phase1_environment_coverage` | seed_crop_production | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage; site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | normalized amount = lot-attributed amount / net released seed mass | attributed amount; released mass | amount per kg reference seed |  |
| `calc_irrigation` | irrigation | delivered volume = meter difference, or verified pump rate × runtime | meter or pump data | m3 delivered |  |
| `calc_energy` | energy | convert carriers to declared energy and assign by evidenced driver | quantity; conversion; driver | MJ per process output |  |
| `calc_stage_balance` | each process | loss = opening stock + inputs − intended outputs − closing stock, adjusted for moisture | mass, stock, moisture | reconciled loss/residue |  |
| `calc_multi_period` | perennial/shared production | attributed burden = total burden × lot output / documented productive output | burden; outputs | lot burden |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | Species, cultivar, lot, sowing use and state shall be explicit; a species UUID represents only that species. | label, release record, binding review |
| `dq_quality_tests` | released seed | Purity, germination/viability and moisture shall cover the released lot and state method/date. | laboratory record and sample chain |
| `dq_completeness` | foreground route | Include all released/rejected lots and at least 95% of operating days; quantify gaps. | coverage reconciliation |
| `dq_mass_balance` | each node | Reconcile material on a consistent moisture basis and disclose tolerance. | stage balance and calibration |
| `dq_binding` | emitted exchanges | Resolve parameterized and unmapped cards to verified UUIDs before final TIDAS publication. | expansion and identity review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Reject non-sowing seed, vegetative propagules, cut flowers and records without species, cultivar and lot. |  |
| `validate_reference` | reference flow | Require exactly 1 kg net released seed and the required quality qualifiers. |  |
| `validate_species_uuid` | reference identity | Keep the category UUID blank unless compatible; use `50835e31-8359-4b7c-a818-81ef48e5ed42` only for explicitly declared H. annuus after detail compatibility is rechecked. |  |
| `validate_nutrient_cardinality` | `seed_crop_production` | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_lot_chain` | all processes | Require an unbroken parent-stock, production, extraction, conditioning and release lot chain. |  |
| `validate_rework_rejects` | rework/rejects | Rework re-enters through a recorded node; rejected mass cannot also be released output. |  |
| `validate_ranges` | all flow cards | Require ordered bounds, unit, basis, basis kind and evidence kind; foreground records determine amounts. |  |
| `validate_binding` | all cards | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground flower-seed data package and process projection |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Studies matching species/cultivar, route, geography, quality state and conditioner hand-off |
| excluded_use | Proxy for another species, cut flowers, food/oil seed, vegetative propagules or an unqualified species average |
| required_metadata | species; cultivar; lot; parent class; field/protected route; crop period; sites; purity; germination/viability; moisture; treatment; certification; storage; gate |
| required_quality_disclosure | record coverage; gaps; range exceedances; unresolved UUIDs; mass-balance tolerance; allocation; reject/rework destinations |
| update_trigger | new reviewed route evidence, compatible category UUID, changed concrete flow identity verification|

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-portal` | `official_guidance` | FAO, Seeds portal, https://www.fao.org/seeds/en | conditioning, packaging, storage, sampling and testing stages |
| `fao-seed-handling` | `handbook` | FAO, *A Guide to Forest Seed Handling*, https://www.fao.org/4/ad232e/ad232e00.htm | collection, extraction, drying, cleaning, storage and seed-quality testing |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
