---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cream-fresh
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cream, fresh

## 1. Scope and Applicability

This PCR applies to liquid fresh cream obtained by physical separation of milk, followed by fat standardization as needed, pasteurization or a validated equivalent heat treatment, optional homogenization, cooling, and filling. It supports foreground data packages for unpackaged or packaged fresh cream leaving a dairy processing facility under a declared refrigerated condition.

The covered product is a pourable fat-in-skimmed-milk emulsion whose milkfat content, milk species, heat treatment, and packaging state are declared. It excludes raw high-fat milk sold without separation; fermented, cultured, acidified, sweetened, flavoured, whipped, frozen, concentrated, dried, sterilized, or UHT cream; cream cheese; butter and anhydrous milkfat; and reconstituted or recombined cream. Those products require a separate product boundary or a documented broader study.

This PCR defines a dairy-processing foreground boundary. Dairy farming, raw-milk production, off-site energy and material production, packaging manufacture, distribution after the facility gate, retail, use, and end-of-life are represented by linked upstream or downstream datasets when included in the study, not duplicated inside the foreground processes below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cream-fresh |
| classification_refs | CPC 3.0: 22120, Cream, fresh |
| covered_products | Pourable fresh cream physically separated from milk; pasteurized or equivalently heat-treated; optionally fat-standardized and homogenized; packaged or bulk at dairy-facility gate |
| excluded_products | Raw high-fat milk; fermented, cultured, acidified, sweetened, flavoured, whipped, frozen, concentrated, dried, sterilized, or UHT cream; cream cheese; butter; anhydrous milkfat; reconstituted or recombined cream |
| representative_product | Refrigerated pasteurized fresh cream, physically separated from milk and filled at the dairy plant |
| production_route | Chilled raw-milk receiving; centrifugal separation and fat standardization; cream pasteurization; optional homogenization; cooling; filling; refrigerated storage; cleaning-in-place and wastewater dispatch |
| market_state | Finished liquid product, bulk or packaged, at dairy processing facility gate under declared refrigerated conditions |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh liquid cream obtained by physical separation of milk and prepared for direct consumption or further food processing |
| How much | 1 kg net fresh cream |
| How well | Meets the declared milk species, milkfat content, physical-separation route, heat-treatment validation, packaging state, and applicable food-safety specification |
| How long or cycle | One production batch represented at the dairy facility gate; declared shelf-life and cold-chain conditions are metadata, not additional product quantity |
| reference_flow_link | `fresh_cream_at_plant` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cream, fresh `e58b11a6-5d86-40a3-bed6-e365a95d0981` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | milk species; milkfat content as mass percent; physical-separation route; heat-treatment type and validated time-temperature condition; homogenization status; bulk or packaging format; net product mass; facility location; production period; product exit temperature or refrigerated condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference fresh cream | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass. Convert volume records to mass only with a lot- or product-specific measured density and retain the density, temperature, sampling method, and conversion record. |
| `milkfat_mass_fraction` | Raw milk, separated cream, skimmed milk co-product, and reference cream | Milkfat mass fraction | % by mass | Measure or obtain from verified compositional records for each representative batch or aggregation period; do not substitute a label category for a numeric mass fraction. |
| `dry_matter_mass_fraction` | Reference cream and every dairy co-product used in allocation | Dry matter mass fraction | % by mass | Use product-specific measured or verified formulation data for dry-matter allocation. A default may be used only as an exceptional, disclosed fallback and must not support a current PEF-conformity claim. |
| `energy_preservation` | Electricity and thermal energy | Energy | kWh and MJ | Preserve electricity and thermal energy separately. Convert units with explicit factors and do not combine heat and electricity before linking the corresponding background energy datasets. |
| `water_volume` | Process and cleaning water; wastewater | Volume | m3 or L | Preserve measured water and wastewater volumes by source and discharge route. Use 1 m3 = 1,000 L; do not infer wastewater mass from product mass without a measured or documented water balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Chilled raw milk accepted at the dairy processing facility gate with recorded mass, milk species, milkfat and dry-matter or total-solids information, receipt time, temperature, and supplier or upstream-dataset identity |
| starting_condition_role | Foreground initial product input; upstream dairy farming and raw-milk production are outside the foreground boundary |
| product_classification_scope | Fresh cream physically separated from milk and delivered as a refrigerated liquid product; excludes the product forms listed in Section 1 |
| recursive_input_rule | If fresh cream from the same category enters as rework or transferred intermediate, record it as a distinct product input with quantity, composition, origin, and an upstream dataset; do not recursively recreate its prior production inside this PCR boundary |
| upstream_dataset_requirement | Link raw milk, transferred dairy intermediates, electricity, thermal energy carriers, water supply, cleaning agents, refrigerants, packaging materials, transport, and off-site treatment to geographically and temporally representative datasets when those activities are in study scope |
| disclosure | Declare facility location, production period, milk species, product milkfat and dry matter, heat-treatment and homogenization status, packaging state, cold-chain exit condition, included process modules, allocation method and factors, exclusions, data gaps, and every use of a provisional estimate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | Dairy processing foreground | Include raw-milk receiving and separation, cream standardization, heat treatment, cooling, filling, refrigerated on-site storage, cleaning, product losses, wastewater dispatch, and applicable direct refrigerant emissions. An operation may be reported as zero only with facility evidence that it did not occur. | `dairy-pefcr-2025`; `epa-dairy-effluent-guidelines` |
| `boundary_upstream_separation` | Raw milk and other incoming products | Stop foreground recursion at the declared facility-gate inputs and require linked upstream datasets; do not omit their upstream burdens from a cradle-to-gate or broader study. | `dairy-pefcr-2025` |
| `boundary_heat_treatment` | Fresh cream heat treatment | Include the actual validated time-temperature treatment and associated heating and cooling. For cream pasteurization, use at least 75 degrees C for 15 seconds or a validated equivalent appropriate to product composition and applicable law; retain the validation record. | `codex-cxc-57-2004`; `eu-reg-853-2004` |
| `boundary_cold_chain` | Intermediate and finished cream | Include on-site refrigeration until the declared facility-gate exit and record product temperature or equivalent refrigerated condition. Downstream refrigerated distribution is outside this foreground boundary unless explicitly added. | `codex-cxc-57-2004` |
| `boundary_no_silent_cutoff` | Foreground activity data | Collect the mandatory material, energy, water, chemical, refrigerant, co-product, wastewater, and direct-emission fields. Any omitted item must be shown immaterial and disclosed; a data gap is not a zero flow. | `dairy-pefcr-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `milk_receiving_and_separation` | Raw-milk receiving, separation, and fat standardization | required | Always | Foreground separation producing cream and skimmed-milk co-product | Per measured kg of separated cream transferred to heat treatment |
| `pasteurization_and_cooling` | Cream pasteurization, optional homogenization, and cooling | required | Always; homogenization is included only when performed | Foreground microbiocidal treatment and refrigerated product preparation | Per measured kg of pasteurized cream transferred to filling |
| `filling_and_cold_storage` | Filling, packaging, and on-site refrigerated storage | required | Always; packaging input is zero only for documented bulk dispatch | Foreground finished-product preparation | Per 1 kg net fresh cream at facility gate |
| `cleaning_and_wastewater` | Cleaning-in-place, sanitation, and wastewater dispatch | required | Always | Shared foreground support process allocated to the represented cream line | Per 1 kg net fresh cream at facility gate after allocation |

### Process: Raw-milk receiving, separation, and fat standardization (`milk_receiving_and_separation`)

#### Inputs

##### Product flows

###### Accepted raw milk (`raw_milk_input`)

Raw milk crosses the facility gate and supplies the milkfat and non-fat solids separated into cream and co-products.

- Selected flow: Raw milk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured accepted raw-milk mass attributable to the represented production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milk_and_composition`
- Sources: `dairy-pefcr-2025`
- Range: Provisional raw-milk input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg raw milk
  - Basis: per 1 kg net fresh cream at facility gate; broad authoring screen pending reviewed plant evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separator and transfer electricity (`separation_electricity`)

Electricity used by receiving pumps, storage agitation, separation, standardization, and transfers is recorded separately from thermal energy.

- Selected flow: Electricity, supplied to dairy processing
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated share from equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of separated cream transferred to heat treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `dairy-pefcr-2025`
- Range: Provisional separation-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh
  - Basis: per kg of separated cream; broad authoring screen pending reviewed metering
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separated cream transferred to heat treatment (`separated_cream_intermediate`)

The intermediate cream output is measured or calculated from calibrated tank and composition records before heat treatment.

- Selected flow: Cream, separated intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transferred mass, reconciled with milkfat and total-mass balances
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_coproduct_and_loss`
- Sources: `mass-balance-identity`
- Range: Provisional intermediate-to-finished mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg separated cream
  - Basis: per 1 kg net fresh cream at facility gate; includes downstream product losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Skimmed-milk co-product (`skimmed_milk_coproduct`)

Skimmed milk leaving separation is a co-product, not a negative raw-milk input or unreported avoided product.

- Selected flow: Skimmed milk, at separator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured co-product mass with measured dry matter or total solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_coproduct_and_loss`
- Sources: `dairy-pefcr-2025`
- Range: Provisional co-product mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg skimmed milk
  - Basis: per 1 kg net fresh cream at facility gate; broad authoring screen pending product-specific milkfat balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Separation rejects and dairy product loss (`separation_product_loss`)

Separator sludge, off-spec dairy material, spills, and unrecovered start-up or change-over product are recorded by destination.

- Selected flow: Dairy processing residue or product loss
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-calculated loss sent to recovery, feed, wastewater treatment, or disposal
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of separated cream
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_coproduct_and_loss`
- Sources: `epa-dairy-effluent-guidelines`; `mass-balance-identity`
- Range: Provisional separation-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg dairy material
  - Basis: per kg of separated cream; broad authoring screen pending reviewed plant balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cream pasteurization, optional homogenization, and cooling (`pasteurization_and_cooling`)

#### Inputs

##### Product flows

###### Separated cream input (`cream_to_pasteurizer`)

The separated cream transferred from the prior foreground process is reconciled by batch or production period.

- Selected flow: Cream, separated intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: transferred mass from `separated_cream_intermediate`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of pasteurized cream output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_coproduct_and_loss`
- Sources: `mass-balance-identity`
- Range: Provisional pasteurizer-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.1
  - Unit: kg separated cream
  - Basis: per kg of pasteurized cream output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy for pasteurization and hot-water service (`pasteurization_heat`)

Fuel or purchased heat used for cream heat treatment and attributable hot-water service is recorded by carrier before conversion to MJ.

- Selected flow: Thermal energy, supplied to dairy processing
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel or heat multiplied by documented net calorific value and allocated to the represented process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of pasteurized cream output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `dairy-pefcr-2025`; `codex-cxc-57-2004`
- Range: Provisional pasteurization-heat screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5
  - Unit: MJ
  - Basis: per kg of pasteurized cream output; broad authoring screen pending reviewed heat metering
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pasteurizer, homogenizer, and cooling electricity (`thermal_process_electricity`)

Electricity for heat-exchange pumping, optional homogenization, chilling, and transfers is recorded by equipment or allocation period.

- Selected flow: Electricity, supplied to dairy processing
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated equipment-power-by-runtime use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of pasteurized cream output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `dairy-pefcr-2025`
- Range: Provisional thermal-process electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh
  - Basis: per kg of pasteurized cream output; broad authoring screen pending reviewed metering
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pasteurized and cooled cream (`pasteurized_cream_output`)

Cream output is accepted only when the batch heat-treatment record and product specification meet the declared control criteria.

- Selected flow: Cream, pasteurized and cooled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass transferred to filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of pasteurized cream output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_and_product_release`
- Sources: `codex-cxc-57-2004`; `eu-reg-853-2004`
- Range: Pasteurizer output-reference check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg pasteurized cream
  - Basis: per kg of measured pasteurized cream output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Pasteurizer start-up, shut-down, and off-spec loss (`pasteurization_product_loss`)

Rejected or unrecovered cream from thermal-process start-up, shut-down, change-over, or failed release is recorded by destination.

- Selected flow: Dairy processing residue or product loss
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected mass or difference in the reconciled cream balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of pasteurized cream output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_coproduct_and_loss`
- Sources: `epa-dairy-effluent-guidelines`; `mass-balance-identity`
- Range: Provisional pasteurization-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg dairy material
  - Basis: per kg of pasteurized cream output; broad authoring screen pending reviewed plant balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant released from attributable cooling equipment (`cooling_refrigerant_emission`)

Record actual refrigerant type and calculated leakage from inventory reconciliation for equipment serving the represented line or storage zone.

- Selected flow: Refrigerant, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus additions minus closing inventory and documented recovery, allocated to the represented cream line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of pasteurized cream output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- Sources: `dairy-pefcr-2025`
- Range: Provisional refrigerant-leakage screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg refrigerant
  - Basis: per kg of pasteurized cream output; intentionally broad authoring screen pending equipment-specific inventory
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Filling, packaging, and on-site refrigerated storage (`filling_and_cold_storage`)

#### Inputs

##### Product flows

###### Pasteurized cream transferred to filling (`cream_to_filling`)

Accepted pasteurized cream enters the filling system and is reconciled with net filled product and filling losses.

- Selected flow: Cream, pasteurized and cooled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transferred mass from `pasteurized_cream_output`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_coproduct_and_loss`
- Sources: `mass-balance-identity`
- Range: Provisional filling-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.1
  - Unit: kg pasteurized cream
  - Basis: per 1 kg net fresh cream at facility gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary, secondary, and tertiary packaging (`packaging_materials`)

Packaging is recorded by material, component, recycled content where known, and net mass. Bulk dispatch records zero primary packaging with the bulk-container arrangement disclosed.

- Selected flow: Packaging materials, by material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: bill-of-material mass attributable to accepted filled product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_finished_product`
- Sources: `dairy-pefcr-2025`
- Range: Provisional packaging-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg packaging
  - Basis: per 1 kg net fresh cream at facility gate; zero allowed only for documented bulk dispatch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filling and cold-storage electricity (`filling_storage_electricity`)

Electricity for filling, packaging, cold-room operation, and local warehouse storage through facility-gate exit is recorded.

- Selected flow: Electricity, supplied to dairy processing
- Flow property / unit: Energy / kWh
- Amount rule: metered use or documented allocation of line and cold-store electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `dairy-pefcr-2025`; `codex-cxc-57-2004`
- Range: Provisional filling-and-storage electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh
  - Basis: per 1 kg net fresh cream at facility gate; broad authoring screen pending reviewed metering and storage duration
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh cream at dairy facility gate (`fresh_cream_at_plant`)

This is the reference product after acceptance of net mass, composition, heat treatment, packaging state, and refrigerated exit condition.

- Selected flow: Cream, fresh `e58b11a6-5d86-40a3-bed6-e365a95d0981`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: fixed reference output of 1 kg net fresh cream
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `codex-cxs-288-1976`
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg net fresh cream
  - Basis: per declared reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Filling loss and rejected packaging (`filling_and_packaging_waste`)

Record dairy product loss and rejected packaging as separate waste materials and preserve their recovery, treatment, or disposal routes.

- Selected flow: Filling and packaging waste, by material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reject mass by dairy and packaging material category
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_finished_product`
- Sources: `epa-dairy-effluent-guidelines`
- Range: Provisional filling-and-packaging waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg waste
  - Basis: per 1 kg net fresh cream at facility gate; report dairy and packaging fractions separately
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning-in-place, sanitation, and wastewater dispatch (`cleaning_and_wastewater`)

#### Inputs

##### Product flows

###### Process and cleaning water (`cleaning_water`)

Record potable, reclaimed, and recirculated water separately by source and intended use; reclaimed water requires a documented hazard assessment.

- Selected flow: Water supplied to dairy processing, by source
- Flow property / unit: Volume / L or m3
- Amount rule: measured make-up water and final-rinse water attributable to the represented process line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_chemicals_and_wastewater`
- Sources: `codex-cxc-57-2004`; `dairy-pefcr-2025`
- Range: Provisional cleaning-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: L water
  - Basis: per 1 kg net fresh cream at facility gate; broad authoring screen pending site water balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation agents (`cleaning_agents`)

Cleaning agents are recorded by chemical identity, concentration, delivered mass, and allocation to the represented line.

- Selected flow: Cleaning agent, by chemical
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchase, dosing, or batch-record mass reconciled for the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_chemicals_and_wastewater`
- Sources: `codex-cxc-57-2004`; `dairy-pefcr-2025`; `epa-dairy-effluent-guidelines`
- Range: Provisional cleaning-agent screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 0.2
  - Unit: kg cleaning agent
  - Basis: per 1 kg net fresh cream at facility gate; broad authoring screen pending dosing records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Dairy-processing wastewater sent to treatment (`dairy_wastewater`)

Wastewater includes cleaning rinses and product-bearing discharges; record volume, COD where measured, discharge route, and treatment destination without netting product loss against water use.

- Selected flow: Wastewater from dairy processing
- Flow property / unit: Volume / L or m3; COD / kg when available
- Amount rule: measured wastewater volume and COD load attributable to the represented line or allocated facility remainder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net fresh cream at facility gate after allocation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_chemicals_and_wastewater`
- Sources: `dairy-pefcr-2025`; `epa-dairy-effluent-guidelines`
- Range: Provisional wastewater-volume screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 20
  - Unit: L wastewater
  - Basis: per 1 kg net fresh cream at facility gate; broad authoring screen pending site discharge records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Metered process inputs, wastes, and direct emissions | Assign data directly to the specific process stage and product flow wherever line- or equipment-specific records exist. Do not allocate packaging or ingredients that are directly attributable to one product. | `dairy-pefcr-2025` |
| `allocation_dry_matter_joint_process` | Raw milk and inseparable joint separation burdens for cream and skimmed-milk co-products | When subdivision cannot resolve a joint dairy process, calculate each product allocation factor as `(product mass x product dry-matter fraction) / sum(product mass x dry-matter fraction for all co-products)`. Use measured product-specific dry matter and retain the mass, dry-matter, period, and factor calculation. | `dairy-pefcr-2025` |
| `allocation_partial_metering` | Facility totals with some directly assigned process data | Assign the detailed data first, subtract those assigned quantities from the same facility-period totals, and allocate only the remaining unassigned energy, water, cleaning agents, chemicals, and wastewater by co-product dry-matter output. | `dairy-pefcr-2025` |
| `allocation_no_avoided_product_default` | Skimmed milk and other dairy co-products | Report co-products as positive outputs. Do not apply avoided-product substitution unless a separately declared study method requires it and provides a complete sensitivity result. | `dairy-pefcr-2025` |
| `allocation_mass_balance_disclosure` | All allocation results | Allocation factors for a joint process must sum to 1 within documented rounding tolerance, and allocated quantities must reconcile to the unallocated total. Disclose any default dry-matter value as a data limitation. | `dairy-pefcr-2025`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_milk_and_composition` | `milk_receiving_and_separation` | Raw milk and dairy composition | Scale tickets, tank meters, laboratory results, supplier receipts | receipt_id; supplier; milk_species; gross_mass; tare_mass; accepted_mass; receipt_temperature; milkfat_mass_fraction; dry_matter_fraction; sample_id; test_method; timestamp | Calibrated weighbridge or flow meter plus representative compositional sampling | kg; degrees C; % by mass | Each receipt or tank lot | All receipts represented by the dataset period | All suppliers and receiving points feeding the represented line | Sum accepted mass; mass-weight composition; retain rejected receipts separately | Calibration certificates; chain of custody; laboratory QA; supplier reconciliation |
| `cp_product_coproduct_and_loss` | `milk_receiving_and_separation`; `pasteurization_and_cooling`; `filling_and_cold_storage` | Cream, skimmed milk, and dairy losses | Calibrated meters, tank levels, batch records, waste tickets | batch_id; flow_role; opening_mass; inflow_mass; outflow_mass; closing_mass; milkfat_fraction; dry_matter_fraction; destination; timestamp | Batch or period mass and milk-solids reconciliation | kg; % by mass | Each batch and monthly reconciliation | Complete represented production period | All relevant tanks, separators, pasteurizers, fillers, and loss destinations | Sum flows by role; calculate mass and solids imbalance before normalization | Meter calibration; signed batch record; destination ticket; reconciliation report |
| `cp_energy_records` | `milk_receiving_and_separation`; `pasteurization_and_cooling`; `filling_and_cold_storage`; `cleaning_and_wastewater` | Electricity and thermal energy | Submeters, utility invoices, fuel meters, equipment runtime | meter_id; carrier; opening_reading; closing_reading; unit; net_calorific_value; equipment_power; runtime; production_line; storage_duration; period | Prefer line or equipment meters; otherwise documented same-period allocation | kWh; MJ; fuel unit | Continuous or per batch, reconciled monthly | Same period as represented output | Receiving, separator, pasteurizer, homogenizer, chiller, filler, cold store, and CIP serving the line | Difference readings; convert fuel to MJ; assign direct meters first; allocate only remainder | Meter calibration; invoice match; conversion factor source; no overlapping meter hierarchy |
| `cp_heat_treatment_and_product_release` | `pasteurization_and_cooling` | Heat treatment, cooling, and accepted cream | Continuous recorder, batch chart, diversion log, product release record | batch_id; product_fat; inlet_temperature; legal_or_validated_target; holding_temperature; holding_time; flow_diversion_events; phosphatase_or_equivalent_result; outlet_temperature; release_status | Validated time-temperature recorder and release review under HACCP | degrees C; seconds or minutes; pass/fail | Every batch or continuous production run | All reference product represented | Each pasteurizer and product route | Accept only released mass; segregate diversion and rejected output | Calibration; validation study; signed release; deviation and corrective-action record |
| `cp_packaging_and_finished_product` | `filling_and_cold_storage` | Packaging, finished product, and filling rejects | Bill of materials, packaging issue/return record, checkweigher, warehouse release | sku; package_component; material; issued_mass; returned_mass; reject_mass; filled_units; net_mass; bulk_flag; exit_temperature; release_time | Reconcile issued packaging and accepted net product by SKU | kg; count; degrees C | Each batch or packaging campaign | Complete represented production period | All filling lines and local warehouse releases in scope | Net material use and accepted product mass; separate dairy and packaging waste | Supplier specification; checkweigher verification; stock reconciliation; release record |
| `cp_cleaning_water_chemicals_and_wastewater` | `cleaning_and_wastewater` | Water, cleaning agents, and wastewater | Water meters, CIP recipes, dosing logs, effluent meter and laboratory data | water_source; meter_reading; reuse_volume; use_category; chemical_name; concentration; dose_mass; rinse_volume; wastewater_volume; COD_concentration; discharge_route; period | Metered balance plus recipe and effluent sampling | L or m3; kg; kg COD/m3 | Each CIP cycle where available; monthly reconciliation | Same period as represented output | Process line and shared CIP or wastewater systems serving it | Direct assignment first; allocate facility remainder per Section 7; calculate COD load as volume x concentration | Meter calibration; chemical stock reconciliation; laboratory QA; discharge invoice or permit record |
| `cp_refrigerant_inventory` | `pasteurization_and_cooling`; `filling_and_cold_storage` | Direct refrigerant emissions | Equipment register, service logs, purchase and recovery records | equipment_id; refrigerant_type; opening_charge; additions; recovered_mass; closing_charge; service_date; served_zone; period | Refrigerant mass inventory reconciliation by equipment | kg refrigerant | Each service event and annual closure | Period overlapping represented output; disclose mismatch | Cooling equipment serving process and storage zones | Calculate leakage; assign direct equipment first; allocate shared remainder by documented cooling service | Technician record; purchase/recovery evidence; charge verification; no negative leakage without correction |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | `normalized amount = same-period attributable amount / accepted net fresh-cream mass`; convert the denominator to kg before division | Attributable flow amount; accepted net output mass | Amount per 1 kg fresh cream | `mass-balance-identity` |
| `calc_mass_and_solids_balance` | Separation, pasteurization, and filling | For each bounded process and period, reconcile opening inventory + inputs = outputs + closing inventory + measured losses for total mass; repeat for milkfat and dry matter where compositional data exist | Tank inventory; input/output mass; milkfat; dry matter; recorded losses | Mass, milkfat, and dry-matter imbalance with explanation | `mass-balance-identity`; `dairy-pefcr-2025` |
| `calc_dry_matter_allocation` | Joint dairy processing burdens | `AF_i = (Q_i x DM_i) / sum(Q_j x DM_j)` for all co-products; allocate only the joint or residual burden by `AF_i` | Co-product mass `Q`; product-specific dry-matter fraction `DM`; joint burden | Product allocation factors and allocated quantities | `dairy-pefcr-2025` |
| `calc_wastewater_cod_load` | Wastewater to treatment | `COD load = wastewater volume x COD concentration`, with compatible volume and concentration units | Metered wastewater volume; sampled COD concentration | kg COD for the period and normalized kg COD/kg cream | `dairy-pefcr-2025` |
| `calc_refrigerant_leakage` | Cooling equipment | `leakage = opening charge + additions - recovered mass - closing charge`; investigate negative or implausible values before allocation | Refrigerant inventory and service records | kg refrigerant released by type | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_composition` | Reference product and dairy flows | Declare milk species, milkfat, dry matter, heat treatment, homogenization, package state, and reference flow UUID; composition must cover the represented products and co-products. | Product specification; laboratory results; Tiangong identity; batch release |
| `dq_temporal_alignment` | All foreground data | Use the same production period for output, inputs, co-products, losses, utilities, wastewater, and allocation. Disclose any substituted or extrapolated period. | Meter periods; production ledger; reconciliation workbook |
| `dq_meter_hierarchy` | Energy, water, and material data | Prefer product-line or equipment data; prevent double counting between submeter and parent meter; document the allocation of only the unassigned remainder. | Meter tree; invoice reconciliation; allocation record |
| `dq_mass_balance` | Dairy materials | Quantify total mass and, where available, milkfat and dry-matter imbalance. Investigate discrepancies before accepting a dataset; do not hide imbalance as allocation. | Signed balance and corrective-action record |
| `dq_heat_treatment` | Pasteurized cream | Retain validated time-temperature criteria and run-specific evidence. Record diversion, failed verification, rework, and rejected mass. | Recorder chart; validation; calibration; release and deviation logs |
| `dq_water_and_wastewater` | Water use and wastewater | Distinguish potable, reclaimed, and recirculated water; preserve wastewater destination, volume, and COD measurement basis. | Water balance; hazard assessment; effluent laboratory report; discharge record |
| `dq_estimate_disclosure` | Provisional ranges and substituted data | Every `reasoned_estimate` is a screening aid only. Replace it with foreground or reviewed source evidence, or disclose and explicitly accept it during methodology review before publication-critical use. | Data-gap register; reviewer decision; replacement evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require exactly 1 kg of Cream, fresh `e58b11a6-5d86-40a3-bed6-e365a95d0981` using the Mass property and Units of mass group UUIDs declared in Section 3. |  |
| `validate_required_qualifiers` | Foreground data package | Fail completeness when any required qualifier in Section 3 is absent or when the product falls within an excluded form. | `codex-cxs-288-1976` |
| `validate_pasteurization_record` | Each represented production run | Require a valid time-temperature record and release evidence. Cream pasteurization below the declared validated minimum, unexplained diversion, or missing applicable phosphatase/equivalent verification is an error. | `codex-cxc-57-2004`; `eu-reg-853-2004` |
| `validate_process_coverage` | Foreground inventory | Require all four processes in the Process Map, including cold storage, cleaning, wastewater, losses, and applicable refrigerant emissions; zero values require facility evidence. | `dairy-pefcr-2025`; `epa-dairy-effluent-guidelines` |
| `validate_mass_balance` | Dairy material flows | Require total-mass reconciliation and reported milkfat/dry-matter reconciliation where data exist. Unexplained negative losses, missing co-products, or an undisclosed imbalance are errors. | `mass-balance-identity` |
| `validate_allocation` | Joint or shared burdens | Require direct assignment before allocation, measured output mass and dry matter, factors summing to 1 within rounding tolerance, and reconciliation of allocated quantities to the joint total. | `dairy-pefcr-2025`; `mass-balance-identity` |
| `validate_activity_data` | Energy, water, chemicals, packaging, refrigerants, co-products, wastewater, and emissions | Require same-period foreground values or an explicit data gap. A missing record must not be silently converted to zero. | `dairy-pefcr-2025` |
| `validate_estimate_status` | Every amount range | Treat a `reasoned_estimate` only as a replaceable screening range. It cannot establish legal compliance, an allowed production range, or publication-critical performance without reviewer acceptance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dairy-processing data package for physically separated fresh cream at the dairy facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review, publication, and linkage of required upstream datasets |
| allowed_use | Product carbon-footprint or LCA modelling for a declared fresh-cream product, route, facility geography, production period, packaging state, and boundary; scenario comparison when allocation and data quality are consistent |
| excluded_use | Raw, fermented, acidified, sweetened, whipped, frozen, concentrated, dried, sterilized, UHT, reconstituted, or recombined cream; legal food-safety certification; current PEF-conformity claim; cross-product comparative assertion without a compatible reviewed method |
| required_metadata | PCR id and version; reference flow UUID; facility and geography; production period; milk species; milkfat and dry matter; heat treatment and validation; homogenization; package format; net mass; cold-chain exit; process coverage; allocation formula and factors; upstream datasets; data sources; estimation flags |
| required_quality_disclosure | Meter coverage; composition sampling; mass/solids imbalance; heat-treatment evidence; allocation level; co-product dry matter; water and wastewater basis; refrigerant inventory; temporal/geographic representativeness; unresolved UUIDs; all provisional estimates and data gaps |
| update_trigger | Change in milk source or species, product milkfat or formulation, separation or heat-treatment route, homogenization, packaging, refrigerant, energy system, wastewater route, allocation method, facility geography, production period, reference UUID, legal control criterion, or replacement evidence for an important flow |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-288-1976` | standard | FAO/WHO Codex Alimentarius, CXS 288-1976, Standard for Cream and Prepared Creams, official PDF: https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ua/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+288-1976%2FCXS_288e.pdf (retrieved 2026-08-10) | Cream identity as a fluid fat-in-skimmed-milk emulsion obtained by physical separation; scope, product qualifiers, milkfat and heat-treatment disclosure |
| `codex-cxc-57-2004` | official_guidance | FAO/WHO Codex Alimentarius, CXC 57-2004, Code of Hygienic Practice for Milk and Milk Products, official PDF: https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B57-2004%252FCXC_057e.pdf (retrieved 2026-08-10) | Validated process controls; minimum 75 degrees C for 15 seconds for cream or equivalent; verification records; cold chain; water reuse; cleaning and sanitation |
| `eu-reg-853-2004` | standard | European Union, consolidated Regulation (EC) No 853/2004, Annex III Section IX, 2026-01-27 consolidation: https://eur-lex.europa.eu/eli/reg/2004/853/2026-01-27/eng (retrieved 2026-08-10) | Legal-context heat-treatment alternatives, validation, and record expectations for milk and dairy products; facility-specific applicable law remains controlling |
| `dairy-pefcr-2025` | standard | European Dairy Association, Product Environmental Footprint Category Rules for Dairy Products, Final PEFCR, February 2025: https://eda.euromilk.org/wp-content/uploads/2025/02/PEFCR-DairyProducts_update_final.pdf (retrieved 2026-08-10; document states validity through December 2025) | Sector process inputs/outputs; mandatory company-specific activity data; meter hierarchy; co-product dry-matter allocation; technical evidence only, not a current PEF-conformity claim |
| `epa-dairy-effluent-guidelines` | official_guidance | United States Environmental Protection Agency, Dairy Products Processing Effluent Guidelines, 40 CFR Part 405 overview: https://www.epa.gov/eg/dairy-products-processing-effluent-guidelines (retrieved 2026-08-10) | Cleaning residues, spills, pasteurizer start-up/change-over losses, spoiled products, detergents, wastewater, BOD5, TSS, and pH inventory coverage |
| `mass-balance-identity` | method_factor | Conservation of total mass and constituent mass across a declared process boundary | Mass, milkfat, dry-matter, refrigerant, and allocation reconciliation formulas; no empirical performance range |
