---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.ice-and-snow
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ice and snow

## 1. Scope and Applicability

This PCR covers production-gate supply of frozen water: manufactured block, flake or tube ice, artificial snow, or separately declared natural ice/snow harvesting. Fix one route, shape, temperature and retained liquid-water fraction. Include actual feed-water conditioning, freezing, harvest, separation, storage and loading. Natural harvesting does not inherit manufactured-freezing electricity. Cooling capacity and service duration are outside the mass reference. `fao-ice-2004`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.ice-and-snow |
| classification_refs | CPC 3.0:17400 |
| covered_products | Natural ice and snow and artificially frozen water, supplied for non-edible use |
| excluded_products | Edible ice; carbon-dioxide dry ice; refrigeration equipment; downstream cooling service |
| representative_product | Frozen water for non-edible use |
| production_route | Feed-water conditioning; Freezing and product separation; Natural ice/snow harvesting; Cold storage and gate handling |
| market_state | Frozen water at a declared harvest or ice-plant loading gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared solid-water material; no equivalent cooling-service claim |
| How much | 1 kg |
| How well | site and year; natural/manufactured route; fresh/saline origin; shape; solid and entrained liquid fractions; temperature; intended non-edible use; water quality; refrigerant species; storage duration; gate; allocation |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Frozen water for non-edible use |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and year; natural/manufactured route; fresh/saline origin; shape; solid and entrained liquid fractions; temperature; intended non-edible use; water quality; refrigerant species; storage duration; gate; allocation |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | Reconcile feed water, ice solids, entrained liquid, drained/melted water, evaporation and stock changes. Meter electricity for freezing, defrosting and storage separately. Declare solid fraction and measured temperatures; never infer cooling capacity from equal bulk volume. Refrigerant loss equals reconciled charge, purchases, recovery and closing stock with leak records; a closed brine bath is not a fresh product feed each cycle. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased suitable liquid water for manufacture, or natural ice/snow at its identified harvesting location |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural ice and snow and artificially frozen water, supplied for non-edible use |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site and year; natural/manufactured route; fresh/saline origin; shape; solid and entrained liquid fractions; temperature; intended non-edible use; water quality; refrigerant species; storage duration; gate; allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | This PCR covers production-gate supply of frozen water: manufactured block, flake or tube ice, artificial snow, or separately declared natural ice/snow harvesting. Fix one route, shape, temperature and retained liquid-water fraction. Include actual feed-water conditioning, freezing, harvest, separation, storage and loading. Natural harvesting does not inherit manufactured-freezing electricity. Cooling capacity and service duration are outside the mass reference. | `fao-ice-2004` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| water_prep | Feed-water conditioning | conditional | Manufactured route with purchased water | Foreground production | per 1 kg reference flow |
| freezing | Freezing and product separation | conditional | Artificial freezing or snow manufacture | Foreground production | per 1 kg reference flow |
| harvest | Natural ice/snow harvesting | conditional | Natural harvesting route only | Foreground production | per 1 kg reference flow |
| storage | Cold storage and gate handling | required | All routes; active cooling only where actually operated | Foreground production | per 1 kg reference flow |

### Process: Feed-water conditioning (`water_prep`)

#### Inputs

##### Product flows

###### Tap-water feed (`feed_water`)

Purchased tap water; food-contact suitability must be demonstrated when needed. Internal recovered meltwater is a balance observation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_feed_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed_water`
- Sources: `fao-ice-2004`

#### Outputs

##### Waste flows

###### Water-filtration sludge (`filter_sludge`)

Only when water conditioning generates transferred sludge; characterize solids and treatment fate.

- Selected flow: Water-filtration sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_filter_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_filter_sludge`
- Sources: `fao-ice-2004`

### Process: Freezing and product separation (`freezing`)

#### Inputs

##### Product flows

###### Freezing electricity (`freezing_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Include compressor, pump, fan, snowmaking and defrost loads on one reconciled ledger; distinguish the actual route.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_freezing_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freezing_power`
- Sources: `fao-ice-2004`

###### Sodium-chloride bath make-up (`brine_salt`)

Only for a sodium-chloride secondary bath; record fresh make-up, not circulating bath mass.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_brine_salt; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_brine_salt`
- Sources: `fao-ice-2004`

###### Refrigeration ammonia make-up (`ammonia_charge`)

Only when ammonia is the actual refrigerant; other refrigerants need their own specific cards.

- Selected flow: Refrigeration ammonia make-up
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ammonia_charge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ammonia_charge`
- Sources: `fao-ice-2004`

#### Outputs

##### Waste flows

###### Spent sodium-chloride refrigeration brine (`spent_brine`)

Only discharged bath liquid transferred for treatment; concentration and contaminants required.

- Selected flow: Spent sodium-chloride refrigeration brine
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_spent_brine; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_brine`
- Sources: `fao-ice-2004`

##### Elementary flows

###### Ammonia to outdoor air (`ammonia_air`)

Only direct measured/modelled ammonia leaks reaching outdoor air; recovered ammonia is not an emission.

- Selected flow: Ammonia to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ammonia_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ammonia_air`
- Sources: `fao-ice-2004`

### Process: Natural ice/snow harvesting (`harvest`)

#### Inputs

##### Product flows

###### Harvest-equipment diesel (`harvest_diesel`)

Only diesel-driven cutting, collecting and internal haulage in natural harvesting.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_harvest_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_diesel`
- Sources: `fao-ice-2004`

##### Elementary flows

###### Natural frozen water withdrawn (`natural_ice_resource`)

Record removed natural ice/snow mass and location; distinguish resource withdrawal from purchased ice.

- Selected flow: Natural frozen water withdrawn
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_natural_ice_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_ice_resource`
- Sources: `fao-ice-2004`

#### Outputs

##### Elementary flows

###### Fossil combustion carbon dioxide (`harvest_co2`)

Only foreground diesel combustion; keep supplier diesel production emissions upstream.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_harvest_co2; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_co2`
- Sources: `fao-ice-2004`

### Process: Cold storage and gate handling (`storage`)

#### Inputs

##### Product flows

###### Storage electricity (`storage_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only active cold-storage operation, handling and gate equipment; measure melt losses and storage duration.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_storage_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_power`
- Sources: `fao-ice-2004`

#### Outputs

##### Product flows

###### Frozen water for non-edible use (`final_product`)

One declared ice/snow product and route; exclude packaging and separately drained water from accepted net mass.

- Selected flow: Frozen water for non-edible use
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `fao-ice-2004`

##### Waste flows

###### Meltwater transferred for treatment (`meltwater`)

Only unsuitable meltwater sent to treatment; usable internally recovered water is not a waste output.

- Selected flow: Meltwater transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_meltwater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_meltwater`
- Sources: `fao-ice-2004`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Separate product grades and natural versus manufactured routes before assigning shared refrigeration and storage meters by measured use. Allocate unavoidable shared overhead on a justified physical basis; do not credit discharged cold water or internal melt-water recycling. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feed_water | water_prep | `feed_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_filter_sludge | water_prep | `filter_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_freezing_power | freezing | `freezing_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_brine_salt | freezing | `brine_salt` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ammonia_charge | freezing | `ammonia_charge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ammonia_air | freezing | `ammonia_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Use leak logs and charge-recovery inventory balance with destination and uncertainty; distinguish recovery and contained residue. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_spent_brine | freezing | `spent_brine` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_harvest_diesel | harvest | `harvest_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_natural_ice_resource | harvest | `natural_ice_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_harvest_co2 | harvest | `harvest_co2` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_storage_power | storage | `storage_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | storage | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_meltwater | storage | `meltwater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Frozen water at a declared harvest or ice-plant loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | Reconcile feed water, ice solids, entrained liquid, drained/melted water, evaporation and stock changes. Meter electricity for freezing, defrosting and storage separately. Declare solid fraction and measured temperatures; never infer cooling capacity from equal bulk volume. Refrigerant loss equals reconciled charge, purchases, recovery and closing stock with leak records; a closed brine bath is not a fresh product feed each cycle. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | Reconcile feed water, ice solids, entrained liquid, drained/melted water, evaporation and stock changes. Meter electricity for freezing, defrosting and storage separately. Declare solid fraction and measured temperatures; never infer cooling capacity from equal bulk volume. Refrigerant loss equals reconciled charge, purchases, recovery and closing stock with leak records; a closed brine bath is not a fresh product feed each cycle. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply a declared solid-water material; no equivalent cooling-service claim |
| excluded_use | Edible ice; carbon-dioxide dry ice; refrigeration equipment; downstream cooling service |
| required_metadata | site and year; natural/manufactured route; fresh/saline origin; shape; solid and entrained liquid fractions; temperature; intended non-edible use; water quality; refrigerant species; storage duration; gate; allocation |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-ice-2004 | official_guidance | FAO Fisheries Technical Paper 436, The Use of Ice on Small Fishing Vessels, 2004, chapter 2. https://www.fao.org/4/y5013e/y5013e05.htm | Block, flake and tube freezing and storage process descriptions; historical equipment values are not adopted as current site intensities. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
