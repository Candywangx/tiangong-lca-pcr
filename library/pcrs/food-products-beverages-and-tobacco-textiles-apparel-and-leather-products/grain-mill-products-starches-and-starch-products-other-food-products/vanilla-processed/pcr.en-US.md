---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vanilla-processed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Vanilla, processed

## 1. Scope and Applicability

This PCR defines foreground data production from mature fresh vanilla pods received at the curing facility through hot-water killing, sweating/curing, staged drying, conditioning/equilibration, grading, any selected mechanical form conversion, and packaging at the plant gate. The reference route produces cured and dried vanilla; one `selected_product_form` is declared for each foreground data package: `whole`, `split`, `cut`, `ground_or_powdered`, or `pulp_and_seeds`. Conditional form-conversion processes are activated only by that declaration and are never averaged together.

The PCR covers processed vanilla made from declared *Vanilla* species when the incoming pod lot, curing route, final form, moisture basis, class/grade, and package configuration are traceable. Agricultural cultivation and transport to the curing facility are upstream; their datasets are linked to the received fresh-pod input. Ethanol or other solvent extraction, maceration, oleoresin production, isolated or synthetic vanillin, vanilla-flavoured formulations, and finished foods are excluded. In particular, an extract route must not be appended to or averaged with the cured-pod route in this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vanilla-processed |
| classification_refs | CPC:3.0:23928 (`exact`) |
| covered_products | Cured and dried vanilla as whole or naturally split pods; cut vanilla; ground or powdered vanilla obtained only by mechanical size reduction of cured pods; vanilla pulp and seeds mechanically separated from cured pods. |
| excluded_products | Fresh or otherwise unprocessed vanilla (CPC 01658); ethanol or other solvent extracts; oleoresins; isolated or synthetic vanillin; formulated vanilla flavourings; downstream foods; lots lacking a declared species and selected product form. |
| representative_product | Cured and dried *Vanilla planifolia* whole pods, declared class/grade and moisture, packaged at the curing/processing plant gate. |
| production_route | Mature fresh pods → receiving and sorting → hot-water killing → sweating/curing → staged drying → conditioning/equilibration → grading and form selection → conditional cutting, grinding, or pod opening → packaging. |
| market_state | Food-grade processed vanilla at plant gate; selected form, species, class/grade, moisture, origin, lot, and package configuration declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Processed vanilla providing the characteristic vanilla ingredient in the declared physical form. |
| How much | 1,000 kg net processed vanilla, excluding packaging. |
| How well | Declared species, `selected_product_form`, class/grade, moisture on wet basis, vanillin specification when claimed, absence of live insects, package configuration, and conformance basis. |
| How long or cycle | One completed production lot at the plant gate; no use duration is assigned. |
| reference_flow_link | `rf_processed_vanilla` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net product |
| Reference product flow | Vanilla, processed `34e7961c-4ef0-42f4-a62c-6231e257cd65` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar or trade name when known; country of origin; country and year of harvest when available; `selected_product_form`; class/grade; measured moisture wet basis; vanillin specification and method when claimed; killing method; sweating regime; drying technology; conditioning duration; package configuration; net product mass; production lot; temporal coverage |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1,000 kg net processed vanilla at the plant gate. |
| `net_product_mass` | Packaged output | Mass | kg | Exclude primary, secondary, and tertiary packaging from the reference amount; retain gross packed mass and each packaging-component mass as separate raw fields. |
| `fresh_to_processed_mass_ratio` | Fresh-pod input and packaged product | Mass | kg/kg | Calculate the lot-specific ratio from measured accepted fresh-pod mass and measured net processed-vanilla mass. Use 4.5:1 to 6:1 only as an external typical QA interval, never as a substitute for foreground mass records. |
| `killing_time_temperature` | Hot-water killing | Temperature and elapsed time | °C; min | Record time-weighted water temperature and immersion time for each batch. The 60–70 °C and 1.5–5 min evidence envelope is a route QA comparator, not a universal fixed recipe; do not average distinct treatment schedules. |
| `product_moisture` | Final processed vanilla | Moisture on wet basis | % w/w | Measure by the declared method and apply the species/form/class cell of the adopted Codex vanilla standard. For the representative *V. planifolia* whole Class I form, the cited interval is 30–36% w/w. Do not average moisture specifications across species, forms, or grades. |
| `energy_conversion` | Metered electricity | Energy | kWh | Preserve metered kWh. If source records use MJ, convert with 1 kWh = 3.6 MJ and retain the original reading and conversion. |
| `form_route_gate` | Conditional form conversion | Mass | kg | Activate exactly the process matching `selected_product_form`; naturally split pods do not activate cutting, and extraction never activates any process in this PCR. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Mature fresh vanilla pods delivered to and accepted by the curing facility, with species, origin, harvest lot, received mass, maturity/condition, and upstream dataset reference declared. |
| starting_condition_role | Foreground gate input; cultivation and inbound transport remain upstream linked systems. |
| product_classification_scope | Processed vanilla represented by CPC 3.0 code 23928 and restricted to the covered forms and curing route in this PCR. |
| recursive_input_rule | Purchased or transferred cured vanilla already in this product category must be recorded as a distinct input with its own upstream dataset; do not recursively re-run the fresh-pod curing inventory or relabel it as fresh pods. |
| upstream_dataset_requirement | Link agricultural production and inbound transport for fresh pods; link upstream datasets for purchased hot water, electricity, packaging components, cleaning chemicals, and any other product input actually used. |
| disclosure | Declare facility and geography, species, harvest origin/period, incoming condition, killing schedule, sweating schedule, drying technology, conditioning duration, selected form, package configuration, allocation, exclusions, data gaps, and all zero/not-applicable route decisions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_fresh_pod_start` | Covered route | Start at accepted mature fresh pods and include every curing and finishing process through packaged plant-gate product. | `fao-vanilla-postharvest`; `uf-ifas-vanilla-production`; `sanchez-2008-vanilla-killing` |
| `boundary_complete_curing_chain` | Covered route | Killing, sweating/curing, staged drying, and conditioning/equilibration are distinct required foreground processes; none may be hidden in an aggregate processing row. | `fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing`; `budiastra-2025-vanilla-curing` |
| `boundary_selected_form` | Product form | Include only the conditional mechanical conversion matching `selected_product_form`; report each form as a separate lot or model. | `codex-rep25-sch-vanilla`; `iso-5565-1-1999` |
| `boundary_extract_exclusion` | Extraction | Exclude solvent extraction, maceration, oleoresin production, and isolated vanillin; a separate PCR or explicitly extended model is required. | `iso-5565-1-1999`; `uf-ifas-vanilla-production` |
| `boundary_used_inputs` | Utilities and materials | Include every actually used utility, fuel, refrigerant, ingredient, cleaning chemical, and packaging component as its own atomic exchange. If the representative cards below do not cover an actually used item, add one chemically or physically specific card rather than a collection label. | `iso-14044-2006` |
| `boundary_waste_emissions` | Direct outputs | Include each measured solid waste, wastewater stream, and direct elementary emission separately; do not hide a direct discharge in a treatment-service input. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fresh_pod_receiving` | Fresh-pod receiving and sorting | `required` | Every covered lot. | Foreground receipt, identity control, and removal of unacceptable pods and plant debris. | kg accepted fresh pods |
| `hot_water_killing` | Hot-water killing/blanching | `required` | The selected reference route uses hot-water killing; another killing technology requires a separately reviewed route, not averaging. | Stop pod development and initiate curing reactions. | kg killed pods |
| `sweating_curing` | Sweating/curing | `required` | Every covered lot after killing. | Controlled warm, humid curing and aroma/color development. | kg sweated pods |
| `staged_drying` | Staged drying | `required` | Every covered lot; the declared passive, solar-assisted, or controlled-air technology determines electricity use. | Reduce moisture while preserving declared quality. | kg dried pods |
| `conditioning_equilibration` | Conditioning and moisture equilibration | `required` | Every covered lot after drying. | Stabilize aroma and moisture before grading. | kg conditioned pods |
| `grading_form_selection` | Final sorting, grading, and form selection | `required` | Every conditioned lot. | Separate conforming product, declared saleable grades, rejects, and the selected finishing route. | kg conforming conditioned vanilla |
| `cutting` | Cutting cured vanilla | `conditional` | Include only when `selected_product_form = cut`. | Mechanical size reduction to cut form. | kg cut vanilla |
| `grinding` | Grinding cured vanilla | `conditional` | Include only when `selected_product_form = ground_or_powdered`. | Mechanical size reduction to ground/powdered form. | kg ground or powdered vanilla |
| `pod_opening` | Pod opening and pulp/seed separation | `conditional` | Include only when `selected_product_form = pulp_and_seeds`. | Mechanically recover pulp and seeds without solvent extraction. | kg vanilla pulp and seeds |
| `packaging` | Packaging and labelling | `required` | Every selected product form; activate only the actual package-component cards. | Deliver declared net product at plant gate. | 1,000 kg net packaged product |
| `lot_sanitation` | Lot-attributable equipment and surface sanitation | `required` | Include direct records or an explicit allocation of shared sanitation for every lot; chemical cards apply only when that chemical was used. | Food-hygiene support allocated to the covered lot. | 1,000 kg net packaged product |

All `reasoned_estimate` ranges below are provisional screening intervals, not defaults or conformance limits. Their reasoning is physical non-negativity plus deliberately broad allowance for batch size, passive versus controlled operation, and bulk versus retail packaging. Replace them with reviewed source evidence or foreground records. Test lower and upper bounds in sensitivity analysis whenever the row is material.

### Process: Fresh-pod receiving and sorting (`fresh_pod_receiving`)

#### Inputs

##### Product flows

###### Mature fresh vanilla pods received (`received_fresh_vanilla_pods`)

The mass at the facility gate includes only the traceable harvested vanilla-pod lot before curing.

- Selected flow: Mature fresh vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh each received lot before sorting and normalize to net packaged product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `fao-vanilla-postharvest`; `uf-ifas-vanilla-production`
- Range: Fresh-to-conditioned mass-ratio QA interval
  - Range role: Typical range (`typical_range`)
  - Lower: 4500
  - Upper: 6000
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-vanilla-postharvest`

#### Outputs

##### Product flows

###### Accepted fresh vanilla pods (`accepted_fresh_vanilla_pods`)

Accepted pods are the measured fresh-pod output transferred to hot-water killing.

- Selected flow: Accepted fresh vanilla pods
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Received fresh-pod mass minus rejected-pod mass and plant-debris mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- Sources:

##### Waste flows

###### Rejected fresh vanilla pods (`rejected_fresh_vanilla_pods`)

Pods rejected for immaturity, decay, severe splitting, pest damage, or other documented nonconformity are weighed separately.

- Selected flow: Rejected fresh vanilla pods
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejects by lot and record the disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `uf-ifas-vanilla-production`
- Range: Provisional receiving-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Vanilla plant debris removed at receiving (`vanilla_plant_debris`)

Stems, leaves, and other vanilla-plant matter removed from the pod lot are one solid-waste stream and are not combined with rejected pods.

- Selected flow: Vanilla plant debris
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected plant debris by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `codex-rep25-sch-vanilla`

### Process: Hot-water killing/blanching (`hot_water_killing`)

#### Inputs

##### Product flows

###### Accepted fresh pods for killing (`killing_fresh_pod_input`)

The accepted fresh pods enter the documented hot-water treatment batch.

- Selected flow: Accepted fresh vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure batch charge mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_killing_records`
- Sources: `fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing`; `budiastra-2025-vanilla-curing`

###### Hot water supplied to killing bath (`killing_hot_water`)

Hot water crossing the process boundary is recorded separately from electricity; recirculated water is counted once at make-up and its reuse is documented.

- Selected flow: Hot water, 60–70 °C
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Meter or weigh make-up hot water supplied to killing batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_killing_records`
- Sources: `fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing`; `budiastra-2025-vanilla-curing`
- Range: Provisional hot-water make-up screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 500
  - Upper: 15000
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity used by killing equipment (`killing_electricity`)

Electricity for pumps, controls, and directly metered electric heating is recorded as one electricity exchange; purchased hot-water energy is not double counted here.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter killing-equipment electricity and subtract documented non-route loads.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_killing_records`
- Sources:
- Range: Provisional killing-electricity screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Hot-water-killed vanilla pods (`killed_vanilla_pods`)

Killed pods are weighed or calculated from a closed batch mass balance before sweating.

- Selected flow: Hot-water-killed vanilla pods
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure batch output mass; where immediate weighing is infeasible, calculate from input pods and measured water retained/lost and flag the method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_killing_records`
- Sources: `sanchez-2008-vanilla-killing`

##### Waste flows

###### Spent killing-bath wastewater (`killing_wastewater`)

Spent killing water sent to treatment or discharge is a distinct aqueous waste stream.

- Selected flow: Wastewater from vanilla hot-water killing
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Meter discharged bath water and record destination and treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_killing_records`
- Sources:

##### Elementary flows

###### Water evaporated during killing (`killing_water_to_air`)

Water lost from the open hot-water bath to indoor or outdoor air is calculated separately from wastewater.

- Selected flow: Water, to air
- Direction: Output (`output`)
- Flow type: Elementary flow (`elementary`)
- Flow property / unit: Mass / kg
- Amount rule: Calculate by water-and-pod mass balance after subtracting wastewater and water retained in pods.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_killing_records`
- Sources:

### Process: Sweating/curing (`sweating_curing`)

#### Inputs

##### Product flows

###### Killed pods for sweating (`sweating_killed_pod_input`)

Killed pods are charged to the warm, humid sweating stage as a separate measured intermediate.

- Selected flow: Hot-water-killed vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure lot mass entering sweating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sweating_records`
- Sources: `fao-vanilla-postharvest`; `uf-ifas-vanilla-production`; `sanchez-2008-vanilla-killing`

###### Electricity used during sweating (`sweating_electricity`)

Electricity for a controlled chamber, fans, sensors, or humidification is recorded only when used; a documented passive sweating route records zero.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter electricity attributable to sweating equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sweating_records`
- Sources: `uf-ifas-vanilla-production`; `budiastra-2025-vanilla-curing`
- Range: Provisional sweating-electricity screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Sweated vanilla pods (`sweated_vanilla_pods`)

Pods completing the declared sweating schedule are weighed before staged drying.

- Selected flow: Sweated vanilla pods
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure lot output mass after sweating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sweating_records`
- Sources: `fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing`

##### Waste flows

###### Spoiled pods removed during sweating (`sweating_spoiled_pods`)

Mouldy, rotten, or otherwise nonconforming pods removed during sweating are weighed separately and isolated from conforming pods.

- Selected flow: Spoiled vanilla pods from sweating
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh removals and record disposition and reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sweating_records`
- Sources: `fao-vanilla-postharvest`
- Range: Provisional sweating-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water released during sweating (`sweating_water_to_air`)

Moisture leaving pods during sweating and venting to air is calculated by stage mass balance.

- Selected flow: Water, to air
- Direction: Output (`output`)
- Flow type: Elementary flow (`elementary`)
- Flow property / unit: Mass / kg
- Amount rule: Input killed-pod mass minus sweated-pod mass minus solid rejects and collected liquid loss.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sweating_records`
- Sources:

### Process: Staged drying (`staged_drying`)

#### Inputs

##### Product flows

###### Sweated pods for drying (`drying_sweated_pod_input`)

Sweated pods enter the declared sun, solar-assisted, ambient, or controlled-air drying sequence.

- Selected flow: Sweated vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure lot mass entering staged drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `fao-vanilla-postharvest`; `uf-ifas-vanilla-production`; `budiastra-2025-vanilla-curing`

###### Electricity used during drying (`drying_electricity`)

Electricity for fans, tray dryers, controls, and dehumidification is recorded only when used; passive solar and ambient periods record zero rather than being averaged with controlled drying.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter drying-equipment electricity by lot or allocate from submetered operating hours and rated load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `budiastra-2025-vanilla-curing`
- Range: Provisional drying-electricity screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Dried vanilla pods (`dried_vanilla_pods`)

Pods completing staged drying are weighed with moisture and flexibility/condition observations retained.

- Selected flow: Dried vanilla pods
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure lot output mass at the drying endpoint.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`; `budiastra-2025-vanilla-curing`

##### Waste flows

###### Rejected pods removed during drying (`drying_rejected_pods`)

Mouldy, burnt, brittle, or otherwise rejected pods removed during drying are weighed separately.

- Selected flow: Rejected vanilla pods from drying
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh drying rejects and record reason and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `fao-vanilla-postharvest`
- Range: Provisional drying-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water released during drying (`drying_water_to_air`)

Water removed from pods and vented during drying is calculated as a distinct elementary output.

- Selected flow: Water, to air
- Direction: Output (`output`)
- Flow type: Elementary flow (`elementary`)
- Flow property / unit: Mass / kg
- Amount rule: Sweated-pod input mass minus dried-pod output mass minus solid rejects and any collected condensate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources:

### Process: Conditioning and moisture equilibration (`conditioning_equilibration`)

#### Inputs

##### Product flows

###### Dried pods for conditioning (`conditioning_dried_pod_input`)

Dried pods are charged to the declared conditioning containers or room.

- Selected flow: Dried vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure mass entering conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-vanilla-postharvest`; `uf-ifas-vanilla-production`

###### Electricity used during conditioning (`conditioning_electricity`)

Electricity for ventilation, temperature/humidity control, and monitoring is recorded when used; ambient conditioning records zero.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter or allocate conditioning-equipment electricity over the recorded residence time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `uf-ifas-vanilla-production`
- Range: Provisional conditioning-electricity screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1500
  - Unit: kWh
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned vanilla pods (`conditioned_vanilla_pods`)

Conditioned pods are weighed after the declared residence period and moisture equilibration.

- Selected flow: Conditioned vanilla pods
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure lot output mass and associated moisture result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`

##### Waste flows

###### Rejected pods removed during conditioning (`conditioning_rejected_pods`)

Mouldy or otherwise nonconforming conditioned pods are isolated and weighed.

- Selected flow: Rejected vanilla pods from conditioning
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh removals and record reason and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`
- Range: Provisional conditioning-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water released during conditioning (`conditioning_water_to_air`)

Net moisture loss during conditioning is calculated separately from rejected-pod mass.

- Selected flow: Water, to air
- Direction: Output (`output`)
- Flow type: Elementary flow (`elementary`)
- Flow property / unit: Mass / kg
- Amount rule: Dried-pod input mass minus conditioned-pod output mass minus solid rejects and collected condensate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources:

### Process: Final sorting, grading, and form selection (`grading_form_selection`)

#### Inputs

##### Product flows

###### Conditioned pods for grading (`grading_conditioned_pod_input`)

Conditioned pods enter final inspection with lot identity preserved.

- Selected flow: Conditioned vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure mass entering grading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources: `fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`

###### Electricity used by grading equipment (`grading_electricity`)

Electricity for lighting, conveyors, scales, or optical sorting is recorded when attributable to the lot.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter or allocate equipment electricity by operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources:

#### Outputs

##### Product flows

###### Conforming graded vanilla pods (`graded_vanilla_pods`)

Pods meeting the declared species, form, grade, moisture, and quality specification proceed to the selected form route or packaging.

- Selected flow: Conforming graded vanilla pods
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh each conforming grade separately; do not merge grades before allocation and disclosure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources: `codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### Saleable off-grade cured vanilla pods (`saleable_offgrade_vanilla_pods`)

Off-grade pods sold for a declared downstream vanilla use are recorded as a separate product output, not as waste.

- Selected flow: Saleable off-grade cured vanilla pods
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh saleable off-grade output and retain grade, destination, and revenue records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources: `fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`

##### Waste flows

###### Extraneous vanilla-plant matter removed at grading (`grading_extraneous_matter`)

Vegetative matter not accepted as final vanilla is weighed separately from off-grade saleable product.

- Selected flow: Extraneous vanilla-plant matter
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh matter removed during final inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Sources: `codex-rep25-sch-vanilla`

### Process: Cutting cured vanilla (`cutting`)

#### Inputs

##### Product flows

###### Graded pods for cutting (`cutting_pod_input`)

This input is present only for a lot declared as `selected_product_form = cut`.

- Selected flow: Conforming graded vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure pod mass charged to the cutter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### Electricity used for cutting (`cutting_electricity`)

Electricity attributable to the cutting equipment is recorded separately.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter or calculate from verified equipment load and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources:

#### Outputs

##### Product flows

###### Cut vanilla (`cut_vanilla_output`)

Cut vanilla is the measured principal output of this conditional route.

- Selected flow: Cut cured vanilla
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh conforming cut product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### Recovered vanilla fines from cutting (`cutting_recovered_fines`)

Captured edible fines sold or internally used as vanilla are recorded as a distinct product output.

- Selected flow: Recovered vanilla fines
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh captured saleable fines and record disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources:

##### Waste flows

###### Discarded vanilla fines from cutting (`discarded_cutting_fines`)

Captured fines that are not saleable or internally reused are recorded as a distinct solid waste; do not duplicate mass reported as recovered product.

- Selected flow: Discarded vanilla fines
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded fines and record treatment or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources:

### Process: Grinding cured vanilla (`grinding`)

#### Inputs

##### Product flows

###### Cured vanilla feed for grinding (`grinding_vanilla_input`)

This feed is present only for a lot declared as `selected_product_form = ground_or_powdered`.

- Selected flow: Cured vanilla pods for grinding
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure cured vanilla mass charged to the grinder.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### Electricity used for grinding (`grinding_electricity`)

Grinder, sieve, and dust-control electricity is recorded as one metered electricity exchange.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter or calculate from verified equipment load and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources:

#### Outputs

##### Product flows

###### Ground or powdered vanilla (`ground_vanilla_output`)

Ground or powdered vanilla is weighed after the declared particle-size control.

- Selected flow: Ground or powdered cured vanilla
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh conforming ground/powdered output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### Captured vanilla powder dust (`grinding_captured_dust`)

Vanilla powder recovered in a dust collector and returned or sold is measured separately as a product output.

- Selected flow: Captured vanilla powder dust
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected edible dust and record reuse or sale.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources:

##### Waste flows

###### Discarded captured vanilla powder dust (`discarded_grinding_dust`)

Captured powder that is not returned or sold is recorded as a separate solid waste and is not combined with the fugitive air emission.

- Selected flow: Discarded captured vanilla powder dust
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded captured powder and record treatment or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources:

##### Elementary flows

###### Fugitive particulate matter from grinding (`grinding_particulate_to_air`)

Only uncaptured airborne particulate crossing the facility boundary is reported here; captured dust is not double counted.

- Selected flow: Particulate matter, >10 µm, to air
- Direction: Output (`output`)
- Flow type: Elementary flow (`elementary`)
- Flow property / unit: Mass / kg
- Amount rule: Measure at the exhaust or calculate from a documented dust-control mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grinding_records`
- Sources:

### Process: Pod opening and pulp/seed separation (`pod_opening`)

#### Inputs

##### Product flows

###### Cured pods for opening (`pod_opening_input`)

This input is present only for a lot declared as `selected_product_form = pulp_and_seeds`.

- Selected flow: Conditioned cured vanilla pods for opening
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Measure cured pod mass charged to opening/separation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pod_opening_records`
- Sources: `codex-rep25-sch-vanilla`

###### Electricity used for pod opening (`pod_opening_electricity`)

Electricity for mechanical opening and separation is recorded when equipment is used.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter or calculate from verified equipment load and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pod_opening_records`
- Sources:

#### Outputs

##### Product flows

###### Vanilla pulp and seeds (`vanilla_pulp_seeds_output`)

Pulp and seeds are mechanically recovered without solvent and weighed as the principal conditional product.

- Selected flow: Vanilla pulp and seeds
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh conforming pulp-and-seed output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pod_opening_records`
- Sources: `codex-rep25-sch-vanilla`

###### Emptied cured vanilla pod skins (`emptied_vanilla_pod_skins`)

Emptied cured pod skins retained for sale or internal vanilla use are a separate product output.

- Selected flow: Emptied cured vanilla pod skins
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh only saleable or internally reused emptied pod skins and document disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pod_opening_records`
- Sources:

##### Waste flows

###### Discarded emptied vanilla pod skins (`discarded_emptied_pod_skins`)

Emptied pod skins not sold or internally reused are recorded as a distinct solid waste; do not duplicate mass reported as a product output.

- Selected flow: Discarded emptied vanilla pod skins
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded emptied pod skins and record treatment or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pod_opening_records`
- Sources:

### Process: Packaging and labelling (`packaging`)

#### Inputs

##### Product flows

###### Whole cured vanilla pods for packaging (`packaging_whole_pod_input`)

This input is present only when `selected_product_form = whole`.

- Selected flow: Whole cured vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh unpackaged conforming whole pods entering the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-rep25-sch-vanilla`

###### Naturally split cured vanilla pods for packaging (`packaging_split_pod_input`)

This input is present only when `selected_product_form = split`; naturally split pods do not pass through the cutting process.

- Selected flow: Naturally split cured vanilla pods
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh unpackaged conforming naturally split pods entering the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-rep25-sch-vanilla`

###### Cut cured vanilla for packaging (`packaging_cut_vanilla_input`)

This input is present only when `selected_product_form = cut` and is the output of `cutting`.

- Selected flow: Cut cured vanilla
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh unpackaged conforming cut vanilla entering the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-rep25-sch-vanilla`

###### Ground vanilla powder for packaging (`packaging_ground_vanilla_input`)

This input is present only when `selected_product_form = ground_or_powdered` and is the output of `grinding`.

- Selected flow: Ground vanilla powder
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh unpackaged conforming ground vanilla powder entering the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-rep25-sch-vanilla`

###### Vanilla pulp and seeds for packaging (`packaging_pulp_seeds_input`)

This input is present only when `selected_product_form = pulp_and_seeds` and is the output of `pod_opening`.

- Selected flow: Vanilla pulp and seeds
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh unpackaged conforming vanilla pulp and seeds entering the packaging line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-rep25-sch-vanilla`

###### Electricity used for packaging (`packaging_electricity`)

Electricity for filling, sealing, weighing, and labelling is recorded separately.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter or allocate packaging-line electricity by operating time and throughput.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waxed paper liner (`packaging_waxed_paper`)

Waxed paper is recorded only when it is an actual liner or pod wrap in the declared package configuration.

- Selected flow: Waxed paper packaging liner
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh issued liner material minus returned unused material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-vanilla-postharvest`
- Range: Provisional waxed-paper screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Tinplate packaging container (`packaging_tinplate_container`)

Tinplate container mass is recorded only for the actual bulk or retail configuration using metal containers.

- Selected flow: Tinplate packaging container
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Sum container tare mass from bill of materials or verified unit mass times count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-vanilla-postharvest`
- Range: Provisional tinplate-container screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated paperboard box (`packaging_paperboard_box`)

Paperboard is recorded only when an actual outer or direct-contact box is used.

- Selected flow: Corrugated paperboard packaging box
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Sum verified unit mass times box count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-vanilla-postharvest`
- Range: Provisional paperboard-box screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polyethylene packaging pouch (`packaging_polyethylene_pouch`)

Polyethylene film or preformed pouch mass is recorded only when used in the declared configuration.

- Selected flow: Polyethylene packaging pouch
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Sum verified pouch mass times used count plus measured film trim.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-vanilla-postharvest`
- Range: Provisional polyethylene-pouch screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Paper package label (`packaging_paper_label`)

Paper labels are recorded as a separate packaging component when used.

- Selected flow: Paper package label
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Sum verified label mass times applied count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-rep25-sch-vanilla`

#### Outputs

##### Product flows

###### Packaged processed vanilla (`packaged_processed_vanilla`)

This is the net processed-vanilla output at the plant gate; packaging mass is excluded from the reference amount.

- Selected flow: Packaged processed vanilla, net product
- Direction: Output (`output`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Set normalized net product to 1,000 kg from measured gross packed mass minus all packaging-component masses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-rep25-sch-vanilla`

##### Waste flows

###### Waste waxed-paper offcuts (`waste_waxed_paper_offcuts`)

Waxed-paper trim and damaged liner material not entering a package are weighed separately.

- Selected flow: Waste waxed-paper packaging offcuts
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh offcuts and record recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste paperboard offcuts (`waste_paperboard_offcuts`)

Paperboard trim and damaged boxes are recorded separately from waxed paper and plastic waste.

- Selected flow: Waste corrugated paperboard offcuts
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh paperboard waste and record recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste polyethylene film (`waste_polyethylene_film`)

Polyethylene trim and rejected pouches are recorded as a distinct plastic-waste flow.

- Selected flow: Waste polyethylene packaging film
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Weigh polyethylene waste and record recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

### Process: Lot-attributable equipment and surface sanitation (`lot_sanitation`)

#### Inputs

##### Product flows

###### Process water used for sanitation (`sanitation_process_water`)

Water used to clean food-contact equipment and surfaces is recorded independently from the hot-water killing bath.

- Selected flow: Potable process water
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Meter direct sanitation water or allocate a shared meter by documented cleaning event and equipment area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `codex-rep25-sch-vanilla`
- Range: Provisional sanitation-water screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg
  - Basis: per 1,000 kg net processed vanilla
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium hydroxide used for sanitation (`sanitation_sodium_hydroxide`)

Record sodium hydroxide only when present in the actual cleaning formulation, converted to 100% active NaOH mass.

- Selected flow: Sodium hydroxide, 100% active substance
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Purchased formulation mass × supplier-declared NaOH mass fraction, allocated to the lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources:

###### Peracetic acid used for sanitation (`sanitation_peracetic_acid`)

Record peracetic acid only when present in the actual sanitizer, converted to 100% active peracetic-acid mass.

- Selected flow: Peracetic acid, 100% active substance
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Mass / kg
- Amount rule: Purchased formulation mass × supplier-declared peracetic-acid mass fraction, allocated to the lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources:

###### Electricity used for sanitation (`sanitation_electricity`)

Electricity for pressure washing, cleaning-in-place pumps, or drying is recorded only when used.

- Selected flow: Electricity, low voltage
- Direction: Input (`input`)
- Flow type: Product flow (`product`)
- Flow property / unit: Energy / kWh
- Amount rule: Meter or allocate sanitation-equipment electricity by documented operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources:

#### Outputs

##### Waste flows

###### Wastewater from sanitation (`sanitation_wastewater`)

Cleaning wastewater is measured separately from the spent killing bath and linked to its treatment or discharge destination.

- Selected flow: Wastewater from vanilla-processing sanitation
- Direction: Output (`output`)
- Flow type: Waste flow (`waste`)
- Flow property / unit: Mass / kg
- Amount rule: Meter wastewater or calculate sanitation-water input minus documented evaporation and retained water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net processed vanilla
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `codex-rep25-sch-vanilla`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_separation` | All lots and selected forms | First avoid allocation by keeping species, grades, selected forms, process routes, and production lots physically or temporally separate. Never average whole, cut, powder, pulp-and-seeds, or extract production. | `iso-14044-2006` |
| `allocation_common_curing_mass` | Common curing before grade separation | If multiple saleable cured grades are jointly produced and separate measurement cannot divide the common burden, allocate common burdens by measured conditioned-product dry mass; disclose moisture conversion. | `iso-14044-2006` |
| `allocation_value_sensitivity` | Saleable grades or pod-skin/fines co-products | When products have materially different commercial functions or values, report an economic-allocation sensitivity using contemporaneous lot-level revenue while retaining dry-mass allocation as the base case. | `iso-14044-2006` |
| `allocation_waste_no_credit` | Rejected pods, debris, wastewater, packaging waste | Assign waste handling to the generating process. Do not award avoided-product credit unless a documented recovery system and substitutable product are explicitly modelled. | `iso-14044-2006` |
| `allocation_shared_sanitation` | Shared cleaning events | Allocate shared sanitation by documented equipment cleaning time, food-contact area, or processed throughput; state the selected driver and test alternatives when material. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `fresh_pod_receiving` | `received_fresh_vanilla_pods`; `accepted_fresh_vanilla_pods`; `rejected_fresh_vanilla_pods`; `vanilla_plant_debris` | weighbridge/scale and inspection log | lot_id; species; origin; harvest_date; received_kg; rejected_kg; debris_kg; rejection_reason; disposition | Calibrated scale and lot inspection | kg | Every received lot | At least 12 consecutive months or all lots for a shorter campaign | Every facility in scope | Sum masses by lot; calculate accepted mass; normalize by net packaged output | Calibration certificate; signed inspection log; lot photos; disposition record |
| `cp_killing_records` | `hot_water_killing` | `killing_fresh_pod_input`; `killing_hot_water`; `killing_electricity`; `killed_vanilla_pods`; `killing_wastewater`; `killing_water_to_air` | batch sheet, meter, and mass balance | batch_id; pod_input_kg; water_makeup_kg; water_temperature_C_time_series; immersion_min; electricity_kWh; pod_output_kg; wastewater_kg; retained_water_kg | Calibrated scale, water meter, temperature logger, timer, electricity submeter | kg; °C; min; kWh | Every killing batch | Same period as reference product | Every killing unit in scope | Sum batch records; calculate water-to-air by closed mass balance; reject negative residuals | Meter calibration; logger file; operator sign-off; mass-balance closure |
| `cp_sweating_records` | `sweating_curing` | `sweating_killed_pod_input`; `sweating_electricity`; `sweated_vanilla_pods`; `sweating_spoiled_pods`; `sweating_water_to_air` | lot sheet and environmental logger | lot_id; input_kg; output_kg; reject_kg; electricity_kWh; temperature_C; relative_humidity_percent; duration_h; rejection_reason | Calibrated scales, submeter, temperature/RH logger | kg; kWh; °C; %; h | Every lot and sweating cycle | Same period as reference product | Every sweating room/chamber in scope | Sum energy and masses; time-weight conditions; calculate water loss by mass balance | Calibration; raw logger export; reject log; mass-balance closure |
| `cp_drying_records` | `staged_drying` | `drying_sweated_pod_input`; `drying_electricity`; `dried_vanilla_pods`; `drying_rejected_pods`; `drying_water_to_air` | lot sheet, meter, and moisture record | lot_id; technology; input_kg; output_kg; reject_kg; electricity_kWh; drying_hours; temperature_C; relative_humidity_percent; moisture_percent; condensate_kg | Calibrated scales, electricity submeter, environmental logger, declared moisture method | kg; kWh; h; °C; % | Every lot and drying stage | Same period as reference product | Every dryer/rack system in scope | Keep passive and controlled stages separate; sum only within declared route; calculate water loss | Calibration; logger export; moisture test; mass-balance closure |
| `cp_conditioning_records` | `conditioning_equilibration` | `conditioning_dried_pod_input`; `conditioning_electricity`; `conditioned_vanilla_pods`; `conditioning_rejected_pods`; `conditioning_water_to_air` | conditioning lot sheet | lot_id; input_kg; output_kg; reject_kg; electricity_kWh; start_time; end_time; temperature_C; relative_humidity_percent; moisture_percent | Calibrated scales, submeter, environmental logger, moisture test | kg; kWh; h; °C; % | Every conditioning lot | Same period as reference product | Every conditioning room/container in scope | Residence-time weighted conditions; calculate water loss by mass balance | Calibration; logger export; moisture result; inspection record |
| `cp_grading_records` | `grading_form_selection` | `grading_conditioned_pod_input`; `grading_electricity`; `graded_vanilla_pods`; `saleable_offgrade_vanilla_pods`; `grading_extraneous_matter` | grade and yield record | lot_id; species; form; grade; input_kg; conforming_kg_by_grade; offgrade_kg; extraneous_matter_kg; electricity_kWh; disposition; revenue | Calibrated scale and documented grade inspection | kg; kWh; currency | Every lot | Same period as reference product | Every grading line in scope | Preserve each grade; reconcile input to all outputs | Calibration; test certificates; grade sheet; sales/disposition evidence |
| `cp_cutting_records` | `cutting` | `cutting_pod_input`; `cutting_electricity`; `cut_vanilla_output`; `cutting_recovered_fines`; `discarded_cutting_fines` | production and equipment log | lot_id; input_kg; output_kg; recovered_fines_kg; discarded_fines_kg; electricity_kWh; particle_or_length_specification; disposition | Calibrated scales and submeter | kg; kWh | Every cut-form lot | Same period as reference product | Every cutter in scope | Reconcile input, cut output, recovered fines, discarded fines, and measured losses | Calibration; batch sheet; product specification; disposition record |
| `cp_grinding_records` | `grinding` | `grinding_vanilla_input`; `grinding_electricity`; `ground_vanilla_output`; `grinding_captured_dust`; `discarded_grinding_dust`; `grinding_particulate_to_air` | production, meter, and dust-control log | lot_id; input_kg; product_kg; recovered_dust_kg; discarded_dust_kg; exhaust_dust_kg; electricity_kWh; particle_size; disposition | Calibrated scales, submeter, and exhaust measurement or documented dust mass balance | kg; kWh | Every ground/powdered lot | Same period as reference product | Every grinder and dust-control unit in scope | Reconcile product, recovered dust, discarded dust, and air emissions to input | Calibration; batch record; sieve result; dust-control and disposition evidence |
| `cp_pod_opening_records` | `pod_opening` | `pod_opening_input`; `pod_opening_electricity`; `vanilla_pulp_seeds_output`; `emptied_vanilla_pod_skins`; `discarded_emptied_pod_skins` | production and equipment log | lot_id; input_kg; pulp_seeds_kg; saleable_pod_skins_kg; discarded_pod_skins_kg; electricity_kWh; pod_skin_disposition | Calibrated scales and submeter | kg; kWh | Every pulp-and-seeds lot | Same period as reference product | Every opening/separation unit in scope | Reconcile input to pulp/seeds, saleable pod skins, discarded pod skins, and measured losses | Calibration; batch sheet; disposition record |
| `cp_packaging_records` | `packaging` | `packaging_whole_pod_input`; `packaging_split_pod_input`; `packaging_cut_vanilla_input`; `packaging_ground_vanilla_input`; `packaging_pulp_seeds_input`; `packaging_electricity`; `packaging_waxed_paper`; `packaging_tinplate_container`; `packaging_paperboard_box`; `packaging_polyethylene_pouch`; `packaging_paper_label`; `packaged_processed_vanilla`; `waste_waxed_paper_offcuts`; `waste_paperboard_offcuts`; `waste_polyethylene_film` | packaging BOM, count, scale, and meter | lot_id; selected_product_form; unpackaged_product_kg; gross_packed_kg; component_id; component_unit_mass_kg; component_count; trim_kg; electricity_kWh; net_product_kg | Verified bill of materials, calibrated scale, count, submeter | kg; count; kWh | Every packaging lot | Same period as reference product | Every packaging line and storage area in scope | Activate exactly one form input and actual components only; sum by material; calculate net product separately | Supplier specification; tare check; calibration; reconciliation |
| `cp_sanitation_records` | `lot_sanitation` | `sanitation_process_water`; `sanitation_sodium_hydroxide`; `sanitation_peracetic_acid`; `sanitation_electricity`; `sanitation_wastewater` | cleaning event, purchase, formulation, meter, and allocation log | event_id; affected_equipment; water_kg; formulation_name; formulation_kg; active_mass_fraction; electricity_kWh; wastewater_kg; allocation_driver; allocated_share | Meters, issue records, supplier formulation certificate, documented allocation | kg; kWh; fraction | Every cleaning event attributable to covered production | Same period as reference product | All equipment and surfaces used by the covered lot | Convert formulations to active mass; allocate shared events once; reconcile water | Meter calibration; supplier certificate; cleaning sign-off; allocation worksheet |
| `cp_quality_records` | `grading_form_selection` | final product identity and conformance | laboratory and inspection record | lot_id; species; selected_product_form; class_grade; moisture_percent_wet_basis; vanillin_g_per_100g_when_claimed; extraneous_matter_percent; live_insect_count; method; laboratory | Representative sampling and cited/declared analytical method | % w/w; g/100 g; count | Every finished lot or justified sampling plan | Same period as reference product | Every finished-product lot and laboratory in scope | No averaging across species/form/grade cells; link result to packaged lot | Laboratory report; chain of custody; method version; sample plan |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | Every inventory row | `normalized_amount = lot_amount / net_packaged_processed_vanilla_kg × 1000` | lot_amount; net_packaged_processed_vanilla_kg | amount per 1,000 kg reference flow | — |
| `calc_accepted_fresh_pods` | Receiving | `accepted_fresh_pods_kg = received_fresh_pods_kg - rejected_fresh_pods_kg - vanilla_plant_debris_kg` | received_fresh_pods_kg; rejected_fresh_pods_kg; vanilla_plant_debris_kg | accepted_fresh_pods_kg | — |
| `calc_stage_water_loss` | Killing, sweating, drying, conditioning | `water_to_air_kg = input_mass_kg + water_input_kg - product_output_kg - solid_waste_kg - wastewater_or_condensate_kg`; investigate and do not publish a negative residual. | stage input/output masses; water input; solid wastes; wastewater/condensate | water_to_air_kg | — |
| `calc_net_packaged_product` | Packaging | `net_packaged_processed_vanilla_kg = gross_packed_lot_kg - sum(packaging_component_mass_kg)` | gross packed mass; each packaging-component mass | net packaged processed vanilla mass | `codex-rep25-sch-vanilla` |
| `calc_fresh_to_product_ratio` | Whole route | `fresh_to_product_ratio = accepted_fresh_pods_kg / net_packaged_processed_vanilla_kg` | accepted fresh pods; net packaged product | kg/kg ratio | `fao-vanilla-postharvest` |
| `calc_active_cleaning_chemical` | Sanitation chemicals | `active_chemical_kg = formulation_kg × supplier_declared_active_mass_fraction` | formulation mass; active mass fraction | active NaOH or peracetic-acid mass | — |
| `calc_dry_mass_allocation` | Joint saleable cured products | `allocation_share_i = product_i_kg × (1 - moisture_fraction_i) / sum(product_j_kg × (1 - moisture_fraction_j))` | product masses; moisture fractions | dry-mass allocation shares | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and intermediates | Preserve lot linkage from fresh pods to packaged product and declare species, origin, selected form, grade, moisture, and package configuration. | Receiving, process, laboratory, and packaging lot records |
| `dq_temporal` | Foreground inventory | Cover at least 12 consecutive months when production is year-round; for a shorter campaign, cover every lot and disclose campaign dates. | Dated raw records and production calendar |
| `dq_technology` | Killing, sweating, drying, conditioning, finishing | Report actual equipment and schedules; do not mix passive and controlled routes or mutually exclusive form processes into one unqualified average. | Equipment list, route gate, logger exports, batch sheets |
| `dq_mass_balance` | Every mass-transforming process | Reconcile measured inputs to product, waste, wastewater/condensate, and calculated water loss; investigate material residuals and disclose corrections. | Signed mass-balance worksheet and calibration evidence |
| `dq_energy` | Electricity | Prefer submeters; otherwise use verified equipment power × operating time and disclose allocation. Do not use a combined thermal-energy amount. | Meter export or equipment calculation worksheet |
| `dq_atomicity` | All inventory | One card equals one physical or chemical exchange. Any actually used fuel, steam, hot water, refrigerant, chemical, packaging component, waste, or emission absent from these representative cards must be added as a specific atomic exchange with blank UUID until verified. | Atomic-flow audit and purchase/emission records |
| `dq_quality_test` | Finished product | Use the declared method and species/form/class specification; preserve sample identity, result, wet/dry basis, method version, and laboratory. | Laboratory report and sampling chain of custody |
| `dq_sources` | External constraints | Preserve source id and retrieved reference; never use a search snippet as quantitative evidence. | Source register matching Section 11 |
| `dq_reasoned_estimate` | Provisional ranges | Replace each `reasoned_estimate` with foreground or reviewed external evidence before using it as a publication-critical conformance interval; test both bounds when material. | Sensitivity worksheet and replacement status |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Foreground package | Fail if PCR id, reference-flow UUID, species, selected product form, net reference mass, or production lot is missing or inconsistent. | `unsd-cpc3-23928`; `codex-rep25-sch-vanilla` |
| `validate_route_chain` | Process coverage | Fail unless receiving, hot-water killing, sweating, staged drying, conditioning, grading/form selection, packaging, and sanitation are represented for the lot. | `fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing` |
| `validate_form_gate` | Conditional processes | Fail if more than one of cutting, grinding, or pod opening is active for the same reference output, or if the active process does not match `selected_product_form`. | `codex-rep25-sch-vanilla`; `iso-5565-1-1999` |
| `validate_extraction_excluded` | Boundary | Fail if ethanol, another extraction solvent, extract, oleoresin, isolated vanillin, or extraction residue is included as part of the reference route. | `iso-5565-1-1999`; `uf-ifas-vanilla-production` |
| `validate_atomic_flows` | Inventory | Fail any card whose selected flow combines more than one utility, fuel, refrigerant, material, chemical, packaging component, waste, wastewater, or emission. | — |
| `validate_uuid_policy` | UUID references | Fail if an inventory flow other than the Section 3 reference identity carries an unverified UUID; unresolved atomic flow names remain UUID-blank until exact Tiangong verification. | — |
| `validate_mass_balance` | Each process | Fail negative masses or unexplained duplicate counting; flag any material mass residual outside the facility's documented scale uncertainty. | — |
| `validate_moisture_quality` | Finished product | Fail if the declared moisture result is absent or checked against an averaged or wrong species/form/class requirement; for representative *V. planifolia* whole Class I, require 30–36% w/w. | `codex-rep25-sch-vanilla` |
| `validate_pest_extraneous` | Finished product | Require live-insect count and applicable extraneous-matter result; the cited Codex table sets live insects to zero for covered forms. | `codex-rep25-sch-vanilla` |
| `validate_packaging` | Packaging | Fail if gross and net product mass are conflated or if the active package configuration lacks component-level masses. | `fao-vanilla-postharvest`; `codex-rep25-sch-vanilla` |
| `validate_used_utility_coverage` | Utilities and direct emissions | Fail when operating or purchase records show a fuel, steam, refrigerant, cleaning chemical, or direct emission that has no specific atomic row and collection method. | `iso-14044-2006` |
| `validate_source_closure` | Evidence | Fail if a non-empty source id in a rule or card is absent from Section 11, or if a quantitative external range lacks its cited source. | — |
| `validate_protocol_coverage` | Collected/calculated rows | Fail if a `collected_record` or `calculated_from_collection` card lacks a matching collection protocol and required raw fields. | — |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for processed vanilla and its process/lifecyclemodel projections. |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication controls. |
| allowed_use | LCA of cured and mechanically finished vanilla in the declared species, form, grade, moisture, route, geography, period, and package configuration. |
| excluded_use | Vanilla extract, oleoresin, isolated or synthetic vanillin, unprocessed vanilla, an undeclared mixture of forms/routes, or comparative claims beyond the represented technology and geography. |
| required_metadata | PCR id/version; reference-flow UUID; species; origin and harvest facts; lot; selected form; grade; moisture/method; killing/sweating/drying/conditioning schedules; package BOM; allocation; geography; period; source ids; data gaps. |
| required_quality_disclosure | Foreground coverage; mass-balance closure; meter and scale calibration; laboratory methods; route-specific zero/not-applicable decisions; unresolved UUIDs; reasoned-estimate sensitivity; allocation sensitivity; exclusions. |
| update_trigger | New reviewed process/yield evidence; change in Codex or ISO vanilla specification; new killing/drying/form technology; package redesign; material change in energy, water, loss, moisture, or allocation; resolution of inventory UUIDs. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-23928` | `official_guidance` | United Nations Statistics Division, Draft CPC Version 3.0 Explanatory Notes, code 23928, pp. 109–110. https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf (retrieved 2026-08-13) | Classification scope: processed forms included; unprocessed vanilla excluded. |
| `codex-rep25-sch-vanilla` | `standard` | Codex Alimentarius Commission, REP25/SCH, Appendix III, Standard for spices derived from dried or dehydrated fruits and berries—requirements for vanilla, pp. 24–29. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FMeetings%252FCX-736-08%252F%25E2%2598%2585Final%252520report%252FREP25_SCHe.pdf (retrieved 2026-08-13) | Species and product styles; moisture/vanillin cells; extraneous matter and live insects; hygiene; package and label facts; analytical methods. |
| `codex-cac49-vanilla-adoption` | `official_guidance` | Codex Alimentarius, “CAC49 / New and revised science-based standards now added to the Codex Alimentarius,” 12 July 2026. https://www.fao.org/fao-who-codexalimentarius/news-and-events/news-details/en/c/1760016/ (retrieved 2026-08-13) | Confirms CAC49 adoption of the vanilla standard text. |
| `iso-5565-1-1999` | `standard` | ISO 5565-1:1999, Vanilla—Part 1: Specification. https://www.iso.org/standard/22116.html (retrieved 2026-08-13) | Covered pod/bulk/cut/powder forms and explicit exclusion of vanilla extracts. |
| `fao-vanilla-postharvest` | `official_guidance` | Food and Agriculture Organization of the United Nations, *Vanilla: Post-harvest Operations*. https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Vanilla.pdf (retrieved 2026-08-13) | Receiving, killing, sweating, sun/slow drying, conditioning, grading, packaging, monitoring, and 4.5:1–6:1 green-to-conditioned mass ratio. |
| `uf-ifas-vanilla-production` | `extension_guidance` | University of Florida IFAS Extension, *Natural Vanilla Extract Production*, EP656. https://ask.ifas.ufl.edu/publication/EP656 (retrieved 2026-08-13) | Curing-stage decomposition, representative conditions, grading/moisture context, conditioning/storage, and separation of later ethanol extraction. |
| `sanchez-2008-vanilla-killing` | `literature` | Sánchez, H. A. Zavaleta, K. N. Waliszewski, and V. Sánchez (2008), “The effect of killing conditions on the structural changes in vanilla pods during the curing process,” *International Journal of Food Science & Technology* 43(8):1452–1457. https://doi.org/10.1111/j.1365-2621.2007.01691.x | Four-phase curing chain, purpose of killing, hot-water schedules, and separation of killing from sweating/drying/conditioning. |
| `budiastra-2025-vanilla-curing` | `literature` | Budiastra, Nelwan, and Distriani (2025), “Improvement of cured vanilla pod qualities with a combination of advanced sweating and drying methods,” *Jurnal Keteknikan Pertanian* 13(1):147–161. https://doi.org/10.19028/jtep.013.1.147-161 | Hot-water withering, sweating/drying route decomposition, moisture endpoint context, and technology-specific duration evidence. |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management—Life cycle assessment—Requirements and guidelines (confirmed current in 2022; Amendments 1 and 2 noted by ISO). https://www.iso.org/standard/38498.html (retrieved 2026-08-13) | Goal/scope, inventory, allocation, data quality, reporting, and review framework. |
