---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.ducks
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ducks

## 1. Scope and Applicability

This PCR covers living domestic ducks classified as *Anas* (mainly *A. platyrhynchos*) under the CPC 3.0 explanatory note, including ducklings at producer hatchery handover and older live ducks at producer farm handover. A non-*Anas* bird is not automatically within this leaf without separate classification evidence. One final gate is chosen for each foreground package. The reference is measured live weight; head count, age/class, breed/purpose and gate must be disclosed. Slaughter, meat, processed eggs, post-slaughter feathers and downstream transport are excluded. Operated breeder, hatchery and rearing stages are inventoried; purchased predecessor products carry upstream burden once. Integrated fish/rice/wetland production is conditional, never a universal duck route. Sources: `un-cpc-3-2025`, `fao-small-poultry-2004`, `fao-duck-fish-integration`, `fao-leap-poultry-2016`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.ducks |
| classification_refs | CPC 3.0 02154 Ducks |
| covered_products | Living domestic *Anas* ducks (mainly *A. platyrhynchos*) at producer hatchery or farm handover. |
| excluded_products | Slaughtered ducks, duck meat, eggs as reference, post-slaughter feathers, downstream distribution. |
| representative_product | 1 kg living domestic duck at one declared producer gate. |
| production_route | Managed breeder/egg supply and incubation if operated, brooding/rearing if operated, then independent live capture/dispatch. Hatchery and farm final routes are mutually exclusive. Integrated fish/rice/wetland management is a conditional delta of the managed biological production parent. |
| market_state | Living, unprocessed duck with declared age/class and gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living domestic duck of declared age/class at one producer gate. |
| How much | 1 kg measured live weight, plus observed head count and kg/head. |
| How well | Live and unprocessed, excluding dead birds from sold live output. |
| How long or cycle | Actual hatchery or rearing batch and any attributed breeder periods. |
| reference_flow_link | `live_duck_final` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Living domestic duck at declared producer gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Anas* species identity; breed/purpose; age/class; count; measured live mass; hatchery or farm gate; location; production period; integrated-system status |

The platform count-based large-scale ecological farm duck UUID does not match this mass-based two-gate reference. Each final dataset must separately verify a concrete reference identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `duck_live_mass` | Final handover | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the live lot before producer-gate handover; exclude dead birds and packaging. |
| `duck_count_conversion` | Count-based records | Mass and head count | kg; head | Divide measured live kg by counted living heads; never substitute a Number-of-items UUID for the mass reference. |
| `feed_basis` | Feed records | As-fed mass and moisture state | kg | Retain feed state and use one consistent basis for aggregation. |
| `carrier_basis` | Energy records | Carrier-specific property | Supplier unit | Preserve actual carrier/unit and documented conversion before normalization. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or internally supplied duck hatching eggs/ducklings or breeding stock at the first operated stage, together with feed, water and energy. |
| starting_condition_role | Biological starting input with upstream provenance. |
| product_classification_scope | CPC 3.0 02154 live ducks; eggs, meat, rice and fish remain separate products. |
| recursive_input_rule | Purchased live ducks carry predecessor burden once; internal transfers link to their producer node and are not re-imported as external duck products. |
| upstream_dataset_requirement | Attach traceable upstream datasets for purchased eggs/ducklings, feed, water, energy, bedding and other supplied products. |
| disclosure | Declare route, gate, breed/purpose, age, count, weight, period, housing/water regime, manure fate, mortality, independently sold outputs and shared/integrated boundary. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `one_final_gate` | All routes | Select exactly one final hatchery or farm producer handover; internal ducklings later reared are not also final sold output. | `fao-leap-poultry-2016` |
| `capture_independent` | Final capture | Separate catching, weighing and loading from biological production because this node establishes sold-live versus lost status and the final gate. | `fao-leap-poultry-2016` |
| `integrated_delta` | Fish/rice/wetland route | Add changed water, feed and manure pathways plus independently transferred fish/rice only with current enterprise evidence. | `fao-duck-fish-integration` |
| `period_linkage` | Breeder and growout | Link laying periods, incubation/rearing batches, replacement and retirement to their recipient outputs once. | `fao-leap-poultry-2016` |

The integrated route shares the managed duck-production parent with ordinary rearing but changes inventory categories (field/wetland water, foraging, manure destination and possible fish/rice handover), calculation boundaries and output-attribution validation. Farm records must identify each changed category. Integrated and non-integrated batches may coexist at an enterprise, but each lot selects its evidenced route; mutually exclusive water/manure assignments cannot be stacked.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder_flock` | Breeder flock and egg production | `conditional` | Only when breeding/egg supply is operated; otherwise purchased eggs or ducklings carry upstream burden. | Managed biological production across laying periods. | Per breeder period and hatching eggs transferred. |
| `incubation` | Egg incubation and duckling production | `conditional` | Only when incubation is operated; otherwise purchased ducklings enter rearing. | Managed hatchery production and live duckling handover. | Per incubation batch and duckling output. |
| `duck_rearing` | Brooding and rearing | `conditional` | Required for farm-gate grown duck output; absent for direct hatchery-gate duckling sale. | Managed biological production parent with conditional integrated-system delta. | Per rearing batch and live bird mass. |
| `live_capture` | Live capture, weighing and dispatch | `required` | At the one selected final hatchery or farm producer gate. | Independent capture and measured final handover. | Per 1 kg final live duck. |

### Process: Breeder flock and egg production (`breeder_flock`)

#### Inputs

##### Product flows

###### Breeder-house water (`breeder_water`)

Record supplied drinking and service water at this operated node; the actual water-use group is determined from foreground uses.

Denominator and scope requirements：per breeder period and hatching eggs transferred

Raw quantity and calculation requirements: Metered water attributed to breeder period. Original collection denominator kind: process_output.

- Selected flow: Breeder-house supplied water by actual use
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_inputs`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg hatching eggs transferred
  - Basis: per breeder period and hatching eggs transferred
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity at the equipment supply point (`breeder_energy_electricity`)

**Collection scope and applicability for breeder_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record electricity and fuel by actual carrier, avoiding shared-meter double count.
Denominator and scope requirements：per breeder period and hatching eggs transferred
Raw quantity and calculation requirements: Metered or invoiced carrier quantities. Original collection denominator kind: process_output.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_breeder_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_breeder_inputs`
- Sources: `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`breeder_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_breeder_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_breeder_inputs`
- Sources: `fao-agricultural-energy`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hatching eggs transferred (`breeder_eggs`)

Weigh and count eggs sold or internally sent to incubation; internal burden transfers once.

Denominator and scope requirements：per breeder laying period

Raw quantity and calculation requirements: Measured egg mass and count by batch. Original collection denominator kind: process_output.

- Selected flow: Duck hatching eggs; UUID unresolved
- Flow property / unit: Mass / kg; head count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_outputs`
- Range: Mass-balance QA interval
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg collected egg mass
  - Basis: per breeder laying period
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Independently sold breeder manure (`breeder_manure_export`)

Record only when breeder manure is independently transferred as a sold product with handover evidence.

Denominator and scope requirements：per breeder laying period and hatching eggs transferred

Raw quantity and calculation requirements: Weigh by breeder period and document independent handover. Original collection denominator kind: process_output.

- Selected flow: Breeder manure product; concrete UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_outputs`
- Range: Provisional manure quantity screen
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg hatching eggs transferred
  - Basis: per breeder laying period and hatching eggs transferred
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Unsold breeder manure (`breeder_manure_residue`)

Record breeder manure not independently transferred as a product and its treatment destination.

Denominator and scope requirements：per breeder laying period and hatching eggs transferred

Raw quantity and calculation requirements: Weigh by breeder period and document treatment destination. Original collection denominator kind: process_output.

- Selected flow: Breeder manure waste; concrete UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_outputs`
- Range: Provisional manure quantity screen
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg hatching eggs transferred
  - Basis: per breeder laying period and hatching eggs transferred
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Biogenic methane from managed manure to air (`breeder_ch4_air`)

Use only for an identified manure storage/treatment pathway emitting biogenic CH4 to air; the UUID is an identity, not an emission factor.

Denominator and scope requirements：per breeder laying period and hatching eggs transferred

Raw quantity and calculation requirements: Calculate from observed volatile solids, manure management system and appropriate CH4 method factor. Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional species-specific emission screen
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg substance/kg hatching eggs transferred
  - Basis: per breeder laying period and hatching eggs transferred
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Nitrous oxide from managed manure to air (`breeder_n2o_air`)

Use only for identified manure nitrogen pathways releasing N2O to air; do not merge indirect and direct pathway factors.

Coverage of this single N2O card: use calc_manure_n2o_coverage to calculate direct and applicable indirect components separately for the represented node, then report only their non-overlapping molecular-N2O sum assigned to this card. Keep storage and managed-soil calculations distinct. Exclude components explicitly covered by a linked process, retain the coverage evidence, and do not duplicate them as both aggregate and component exchanges. Missing indirect-pathway evidence is not zero.

Denominator and scope requirements：per breeder laying period and hatching eggs transferred

Raw quantity and calculation requirements: Calculate from observed manure nitrogen, management pathway and appropriate N2O method factor. Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional species-specific emission screen
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg substance/kg hatching eggs transferred
  - Basis: per breeder laying period and hatching eggs transferred
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Ammonia from managed manure to air (`breeder_nh3_air`)

Use only for separately evidenced NH3 volatilization to air from the documented manure/housing pathway; do not infer its amount from the IPCC CH4/N2O factors.

Denominator and scope requirements：per breeder laying period and hatching eggs transferred

Raw quantity and calculation requirements: Measured NH3 for this pathway, or a separately documented compatible factor calculation. Original collection denominator kind: process_output.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure_emissions`
- Range: Provisional species-specific emission screen
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg substance/kg hatching eggs transferred
  - Basis: per breeder laying period and hatching eggs transferred
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Egg incubation and duckling production (`incubation`)

#### Inputs

##### Product flows

###### Eggs entering incubation (`incubation_eggs`)

Track purchased or internal duck eggs and predecessor burden once.

Denominator and scope requirements：per incubation batch

Raw quantity and calculation requirements: Measured batch input mass and count. Original collection denominator kind: process_output.

- Selected flow: Duck hatching eggs; UUID unresolved
- Flow property / unit: Mass / kg; count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_incubation_batch`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg hatched live duckling
  - Basis: per incubation batch
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity at the equipment supply point (`incubation_energy_electricity`)

**Collection scope and applicability for incubation_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Assign actual incubator energy by carrier and batch.
Denominator and scope requirements：per kg live duckling output
Raw quantity and calculation requirements: Metered or invoiced batch energy. Original collection denominator kind: process_output.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_incubation_batch` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incubation_batch`
- Sources: `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Hatchery water (`incubation_water`)

Record supplied process and cleaning water; disaggregate actual uses in foreground exchange data.

Denominator and scope requirements：per kg live duckling output

Raw quantity and calculation requirements: Metered water assigned to hatchery batches. Original collection denominator kind: process_output.

- Selected flow: Hatchery process water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_incubation_batch`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live duckling
  - Basis: per kg live duckling output
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live ducklings (`hatched_ducklings`)

Weigh and count living ducklings; choose internal rearing transfer or final hatchery sale, not both.

Denominator and scope requirements：per incubation batch

Raw quantity and calculation requirements: Measured live duckling lot mass and count. Original collection denominator kind: process_output.

- Selected flow: Live duckling at hatchery gate; UUID unresolved
- Flow property / unit: Mass / kg; count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_incubation_batch`
- Range: Mass-balance QA interval
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg all weighed hatchery outputs
  - Basis: per incubation batch
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Brooding and rearing (`duck_rearing`)

#### Inputs

##### Product flows

###### Starting ducklings (`rearing_ducklings`)

Record purchased or internal living ducklings entering rearing with prior burden once.

Denominator and scope requirements：per rearing batch

Raw quantity and calculation requirements: Measured starting live mass and count. Original collection denominator kind: process_output.

- Selected flow: Live duckling entering rearing; UUID unresolved
- Flow property / unit: Mass / kg; count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing_batch`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg final live duck
  - Basis: per rearing batch
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Rearing water (`rearing_water`)

Record supplied water and distinguish drinking, cleaning and integrated-field uses from actual records; the group is deferred until those functions are known.

Denominator and scope requirements：per kg final live duck

Raw quantity and calculation requirements: Metered water attributed to duck rearing. Original collection denominator kind: reference_flow.

- Selected flow: Rearing supplied water by actual use
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing_inputs`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg final live duck
  - Basis: per kg final live duck
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity at the equipment supply point (`rearing_energy_electricity`)

**Collection scope and applicability for rearing_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record brooder, ventilation, pump and equipment energy by actual carrier.
Denominator and scope requirements：per kg final live duck
Raw quantity and calculation requirements: Metered or allocated carrier energy by batch. Original collection denominator kind: reference_flow.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_rearing_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rearing_inputs`
- Sources: `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`rearing_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_rearing_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rearing_inputs`
- Sources: `fao-agricultural-energy`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reared living ducks (`reared_live_ducks`)

Count and weigh living ducks leaving biological rearing for capture.

Denominator and scope requirements：per rearing batch

Raw quantity and calculation requirements: Measured live mass and heads transferred to capture. Original collection denominator kind: process_output.

- Selected flow: Live reared duck before dispatch; UUID unresolved
- Flow property / unit: Mass / kg; count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing_batch`
- Range: Mass-balance QA interval
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg weighed bird output
  - Basis: per rearing batch
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

###### Biogenic methane from managed manure to air (`rearing_ch4_air`)

Use only for an identified manure storage/treatment pathway emitting biogenic CH4 to air; the UUID is an identity, not an emission factor.

Denominator and scope requirements：per kg final live duck

Raw quantity and calculation requirements: Calculate from observed volatile solids, manure management system and appropriate CH4 method factor. Original collection denominator kind: reference_flow.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional species-specific emission screen
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg substance/kg final live duck
  - Basis: per kg final live duck
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Nitrous oxide from managed manure to air (`rearing_n2o_air`)

Use only for identified manure nitrogen pathways releasing N2O to air; do not merge indirect and direct pathway factors.

Coverage of this single N2O card: use calc_manure_n2o_coverage to calculate direct and applicable indirect components separately for the represented node, then report only their non-overlapping molecular-N2O sum assigned to this card. Keep storage and managed-soil calculations distinct. Exclude components explicitly covered by a linked process, retain the coverage evidence, and do not duplicate them as both aggregate and component exchanges. Missing indirect-pathway evidence is not zero.

Denominator and scope requirements：per kg final live duck

Raw quantity and calculation requirements: Calculate from observed manure nitrogen, management pathway and appropriate N2O method factor. Original collection denominator kind: reference_flow.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional species-specific emission screen
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg substance/kg final live duck
  - Basis: per kg final live duck
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Ammonia from managed manure to air (`rearing_nh3_air`)

Use only for separately evidenced NH3 volatilization to air from the documented manure/housing pathway; do not infer its amount from the IPCC CH4/N2O factors.

Denominator and scope requirements：per kg final live duck

Raw quantity and calculation requirements: Measured NH3 for this pathway, or a separately documented compatible factor calculation. Original collection denominator kind: reference_flow.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Range: Provisional species-specific emission screen
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg substance/kg final live duck
  - Basis: per kg final live duck
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Live capture, weighing and dispatch (`live_capture`)

#### Inputs

##### Product flows

###### Ducks presented for final capture (`capture_ducks`)

Receive ducks from exactly one predecessor; internal transfer carries prior burden once.

Denominator and scope requirements：per final producer-gate lot

Raw quantity and calculation requirements: Weighed live mass and count presented for dispatch. Original collection denominator kind: process_output.

- Selected flow: Live duck at selected predecessor gate; UUID unresolved
- Flow property / unit: Mass / kg; count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_capture`
- Range: Provisional screening interval
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg sold live duck
  - Basis: per final producer-gate lot
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Final live duck at producer gate (`live_duck_final`)

Record one selected hatchery- or farm-gate living duck lot; exclude dead birds and downstream transport.

Raw reference-output records: 1 kg measured final live duck; record count and gate. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Living domestic duck at declared producer gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_capture`
- Range: Mass-balance QA interval
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference live duck
  - Basis: per 1 kg final live duck
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_census` | All stages | Enumerate hatching eggs, sold table eggs, spent live breeders, sold ducklings, sold grown ducks and exported manure/rice/fish only when actually transferred; record each handover. Deaths and unsold manure are residues or waste, not co-products. | `fao-leap-poultry-2016` |
| `allocation_precedence` | Multi-output nodes | First subdivide measured activities by output; for inseparable joint output use defensible physical causality, otherwise contemporaneous economic values with period and sensitivity disclosed. Do not apply substitution credit by default. | `fao-leap-poultry-2016` |
| `period_allocation` | Breeder, hatchery, rearing | Attribute feed, assets, output and replacement/retirement events to actual periods/batches; assign cross-period burdens once by measured service or documented throughput. | `fao-leap-poultry-2016` |
| `shared_assets` | Houses, incubators, pumps and meters | List each consuming node and service period; split shared service by meter or documented time/throughput, reconcile assigned shares to recorded total and prevent duplicate charges. | `fao-leap-poultry-2016` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `rearing_feed_specific_input` | `cp_rearing_inputs` | Operation duck_rearing: Include purchased or on-farm feed supplied to rearing, retaining actual intake and losses separately; integrated foraging is not zero burden. Denominator and scope requirements：per kg final live duck Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: reference_flow. Original quantity method: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden. |


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeder_inputs` | `breeder_flock` | Feed, water, energy | Ledgers, meter, invoice | period; flock; feed type/stocks; water; carrier; quantity | Reconcile issues and meters to laying period; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. `breeder_feed_specific_input`: Record feed types and as-fed mass issued to the breeder flock in the attributed period. Denominator and scope requirements：per breeder period and hatching eggs transferred Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: process_output. Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden. This is a mandatory specific-input collection requirement, not a selected exchange. Identify every actual formulation, carrier or independently supplied service from primary records, with physical identity, state, native quantity and supplier specifications. Create a separate concrete card for each actual input before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. Product mass and contained active-substance mass are different ledgers: convert only using documented composition and never count both as two purchases. Finished feed and separately added ingredients must not duplicate its recipe. Distinguish fuel purchase, purchased electricity/heat and inclusive machinery services; charge only their actual boundaries once. Preserve the original operation, period, attribution and final-output normalization. Missing identity or records do not establish zero use; no universal component range or invented recipe is supplied.  | kg; kWh; MJ | per issue/meter | whole breeder period | breeder unit | per reference flow | ledger; invoice; meter; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_breeder_outputs` | `breeder_flock` | Eggs, spent birds, losses and manure | Collection/disposal ledger | period; egg count/mass; destination; spent birds; deaths; manure mass/fate | Count/weigh lots and manure transfers/disposals; Raw aggregation requirements: separate product from waste by handover. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. `breeder_coproducts_specific_output`: Record table eggs and spent live breeders only when independently sold, each at its own gate. Denominator and scope requirements：per breeder laying period Raw quantity and calculation requirements: Measure each independently transferred output. Original collection denominator kind: process_output. Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `breeder_losses_specific_output`: Separate mortality and unmarketable eggs from products; document disposal. Denominator and scope requirements：per breeder laying period Raw quantity and calculation requirements: Weigh or calculate from observed counts and mean mass. Original collection denominator kind: process_output. Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records. This is a mandatory specific-output collection requirement, not a selected exchange. Preserve every actual waste, residue, reject and co-product from this operation. Create separate cards for physically distinct streams with actual material, composition/state, quantity, receiving route and Product/Waste role before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. A genuinely mixed stream may remain one physically defined mixture supported by composition records; never invent separation or count its components again. Keep liquid and solid treatment quantities separate. Preserve original period, output balance, reference normalization and allocation rules; missing records do not establish zero or exclusion. `mass-balance-identity` | kg; head | per lot | whole breeder period | breeder unit | per reference flow | scale; sales; disposal; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_breeder_manure_emissions` | `breeder_flock` | Species-specific breeder manure emissions | Manure, N and NH3 measurement records | breeder period; manure; volatile solids; N; housing/storage pathway; CH4/N2O factors; independent NH3 measurement | Calculate CH4/N2O by actual breeder-manure system; report NH3 only from independent measurement or separately sourced method; Raw aggregation requirements: assign each manure fraction one pathway, once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg substance | per breeder period | whole manure period | breeder unit/manure node | per reference flow | analysis; factor worksheet; NH3 record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_incubation_batch` | `incubation` | Eggs, services, ducklings, losses | Batch sheet and meters | batch; egg count/mass/origin; ducklings; losses; energy; water | Link input/output/services by batch; Raw aggregation requirements: assign shared services once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. `hatchery_losses_specific_output`: Record unhatched eggs, shells and dead ducklings by real disposal stream. Denominator and scope requirements：per incubation batch Raw quantity and calculation requirements: Weigh or calculate from batch counts and observed mass. Original collection denominator kind: process_output. Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records. This is a mandatory specific-output collection requirement, not a selected exchange. Preserve every actual waste, residue, reject and co-product from this operation. Create separate cards for physically distinct streams with actual material, composition/state, quantity, receiving route and Product/Waste role before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. A genuinely mixed stream may remain one physically defined mixture supported by composition records; never invent separation or count its components again. Keep liquid and solid treatment quantities separate. Preserve original period, output balance, reference normalization and allocation rules; missing records do not establish zero or exclusion. `mass-balance-identity` | kg; head; kWh; MJ | per batch | full incubation | hatchery | per reference flow | batch sheet; scale; meter; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_rearing_batch` | `duck_rearing` | Starting/ending birds | Movement/weight ledger | batch; age; count; starting/ending mass | Count/weigh each handover; Raw aggregation requirements: reconcile bird movements. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; head | per movement | whole rearing period | flock | per reference flow | scale; register; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_rearing_inputs` | `duck_rearing` | Feed, water, energy | Ledger and meters | batch; stocks; feed; water; carrier; meter | Reconcile actual consumption; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. `rearing_feed_specific_input`: Operation duck_rearing: Include purchased or on-farm feed supplied to rearing, retaining actual intake and losses separately; integrated foraging is not zero burden. Denominator and scope requirements：per kg final live duck Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: reference_flow. Original quantity method: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg; kWh; MJ | per delivery/meter | whole rearing period | flock and shared assets | per reference flow | invoices; meter; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_rearing_outputs` | `duck_rearing` | Co-products, manure, deaths | Sales/removal records | batch; product; mass; destination; mortality | Weigh output or waste removal; Raw aggregation requirements: classify by actual handover. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. `rearing_coproducts_specific_output`: Record intentionally sold manure, rice or fish only for actual integrated enterprises, each with own gate. Denominator and scope requirements：per rearing batch and co-product handover Raw quantity and calculation requirements: Measure each independently transferred product. Original collection denominator kind: process_output. Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `rearing_residues_specific_output`: Classify dead birds, litter and manure not intentionally transferred as products by destination. Denominator and scope requirements：per rearing batch Raw quantity and calculation requirements: Weigh removals or calculate from logs and measured class mean mass. Original collection denominator kind: process_output. Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records. This is a mandatory specific-output collection requirement, not a selected exchange. Preserve every actual waste, residue, reject and co-product from this operation. Create separate cards for physically distinct streams with actual material, composition/state, quantity, receiving route and Product/Waste role before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. A genuinely mixed stream may remain one physically defined mixture supported by composition records; never invent separation or count its components again. Keep liquid and solid treatment quantities separate. Preserve original period, output balance, reference normalization and allocation rules; missing records do not establish zero or exclusion.  | kg; head | per movement | whole rearing period | flock/integrated unit | per reference flow | sales; removal ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure_emissions` | `duck_rearing` | Species-specific rearing emissions | Manure, N and NH3 measurement records | batch; manure; volatile solids; N; housing/storage pathway; CH4/N2O factors; independent NH3 measurement | Calculate CH4/N2O by actual rearing-manure system; report NH3 only from independent measurement or separately sourced method; Raw aggregation requirements: assign each manure fraction one pathway, once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg substance | per batch | manure period | flock/manure node | per reference flow | analysis; factor worksheet; NH3 record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_live_capture` | `live_capture` | Presented/sold/lost birds | Gate weighing sheet | lot; gate; age; count; presented/sold/lost mass | Weigh/count at final gate; Raw aggregation requirements: normalize sold live kg to 1 kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. `capture_losses_specific_output`: Record birds lost between presentation and sold-live weighing separately. Denominator and scope requirements：per final producer-gate lot Raw quantity and calculation requirements: Reconcile presented minus sold mass with loss and rejection logs. Original collection denominator kind: process_output. Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records. This is a mandatory specific-output collection requirement, not a selected exchange. Preserve every actual waste, residue, reject and co-product from this operation. Create separate cards for physically distinct streams with actual material, composition/state, quantity, receiving route and Product/Waste role before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. A genuinely mixed stream may remain one physically defined mixture supported by composition records; never invent separation or count its components again. Keep liquid and solid treatment quantities separate. Preserve original period, output balance, reference normalization and allocation rules; missing records do not establish zero or exclusion. `mass-balance-identity` | kg; head | per lot | capture to handover | selected gate | per reference flow | scale; delivery note; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_supply_and_intake` | `breeder_flock`; `duck_rearing` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `breeder_flock`; `duck_rearing` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `feed_consumed` | Breeder/rearing feed | Opening stock + deliveries − closing stock − returns. | stocks; deliveries; returns | kg consumed | `mass-balance-identity` |
| `count_to_mass` | Live birds | Measured live lot kg ÷ counted living heads; no universal kg/head. | mass; count | observed kg/head | `mass-balance-identity` |
| `capture_balance` | Final handover | Presented live mass = sold live mass + accounted losses, within weighing uncertainty. | scale; removals | kg final live and loss | `mass-balance-identity` |
| `manure_species` | Breeder and rearing direct emissions | Calculate CH4 and N2O separately using actual manure pathway and appropriate method; flow identity is not an emission factor. | manure; volatile solids; N; pathway; factor | kg CH4 and N2O separately | `ipcc-livestock-2019` |
| `nh3_observation` | Breeder and rearing NH3 | Use independently measured NH3 or a separately documented compatible factor; do not derive NH3 from CH4/N2O factors. | NH3 measurement or independent factor | kg NH3 |  |
| `shared_sum` | Shared assets | Assigned node-period quantities sum to measured total within documented meter uncertainty. | meter; recipient usage | allocated service | `mass-balance-identity` |
| `calc_feed_supply_and_intake` | `breeder_feed`; `rearing_feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `breeder_n2o_air`; `rearing_n2o_air` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `ipcc-livestock-2019`; `ipcc-managed-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Final duck lot | Record duck identity, breed/purpose, age/class, live count, measured mass and exact gate. | dispatch and scale |
| `dq_route` | All nodes | State operated stages, purchased versus internal predecessors and integrated-system status. | enterprise map and supplier links |
| `dq_completeness` | Inputs, losses, outputs | Reconcile stocks, meters, mortality, manure and all output destinations over complete periods; disclose gaps. | ledgers, invoices, tickets |
| `dq_attribution` | Shared and multi-output | Archive causal/economic values, service period, allocation shares and sensitivity. | allocation worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_gate` | Reference | Choose one producer gate and measured sold-live mass; count-based ecological-farm UUID cannot substitute for broad 1 kg reference. | `un-cpc-3-2025` |
| `validate_balance` | All nodes | Reconcile egg/bird/feed/capture records and internal transfers; no bird or upstream burden appears twice. | `mass-balance-identity` |
| `validate_outputs` | Joint outputs | Verify independent handover for eggs, spent birds, manure, fish or rice; otherwise retain internal, residue or waste classification. | `fao-leap-poultry-2016` |
| `validate_periods` | Multi-period | Link replacement/retirement and each breeder/rearing period to recipient batches exactly once. | `fao-leap-poultry-2016` |
| `validate_shared` | Shared infrastructure | List all consumers and periods; allocation shares sum to recorded service without duplication. | `fao-leap-poultry-2016` |
| `validate_integrated` | Integrated route | Require actual farm evidence before changed water/feed/manure pathways or fish/rice co-products enter the model. | `fao-duck-fish-integration` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `ipcc-livestock-2019`; `ipcc-managed-soils-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground package for one living-duck hatchery- or farm-gate lot. |
| downstream_use | Reviewed package may become `secondary_dataset` or `background_dataset` and support process/lifecyclemodel projection. |
| allowed_use | Declared live-duck route with measured mass, count, age, period, inputs, losses and co-outputs. |
| excluded_use | Duck meat/slaughter, egg reference, generic poultry, undeclared gate or universal integrated-system assumption. |
| required_metadata | Gate, location, breed/purpose, age/class, count/mass, route, period, housing/water regime, upstream links and verified concrete flow identities. |
| required_quality_disclosure | Feed/water/energy coverage, mortality, manure pathway, species-specific emissions, shared allocation, co-output treatment and unresolved evidence. |
| update_trigger | Changed route/gate, product purpose, integrated boundary, manure system, allocation method or verified flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Live-duck classification boundary. |
| `fao-small-poultry-2004` | `official_guidance` | https://www.fao.org/4/y5169e/y5169e03.htm | Poultry and duck route context. |
| `fao-duck-fish-integration` | `official_guidance` | https://www.fao.org/fishery/static/FAO_Training/FAO_Training/General/x6709e/x6709e07.htm | Conditional integrated duck/fish route. |
| `fao-leap-poultry-2016` | `official_guidance` | https://openknowledge.fao.org/handle/20.500.14283/i6421en | Poultry LCA boundary, allocation and quality. |
| `ipcc-livestock-2019` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Livestock/manure emission method. |
| `mass-balance-identity` | `method_factor` | Conservation of measured mass/count/service totals | QA and calculation identities, not empirical duck factors. |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
| `ipcc-managed-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Direct/indirect nitrogen pathways and coordination of manure storage with managed-soil emissions; select applicable species and management evidence. |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
