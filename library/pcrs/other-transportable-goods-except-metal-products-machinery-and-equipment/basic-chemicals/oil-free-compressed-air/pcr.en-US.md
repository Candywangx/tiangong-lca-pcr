---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.oil-free-compressed-air
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Oil-free compressed air from an air-cooled screw station

## 1. Scope and Applicability

This method covers industrial compressed air produced from atmospheric intake by electrically driven, dry oil-free rotary screw compression, rejecting heat to ambient air, with intercooling/aftercooling and actual moisture separation, delivered at the compressor-station interface. Neither lubricant nor water is injected into the compression chamber; bearings and gears may use an isolated lubricant circuit. This is one actual gaseous mixture product, not pure nitrogen, pure oxygen or a collection of inorganic chemicals. Delivery pressure, moisture, particulates and oil content follow actual acceptance requirements; an oil-free label does not establish zero moisture, zero particulates or uncontaminated atmospheric intake.

Exclude lubricant/water-injected compression, liquid cooling as the main external heat sink, separate drying/adsorption, refrigeration, bottling, high-pressure boosting, breathing/medical/instrument-air certification, foreground compressor equipment manufacture, and the plant distribution network/end use after delivery. Include a receiver when it is inside the declared station boundary; do not narrow the interface/configuration to omit known burdens. A product requiring further treatment cannot treat this nondried intermediate as the final air product.

Official ENE section 3.7 supports complete-station accounting, pressure/purity and demand dependence. DOE supports isolated lubrication of oil-free screws, condensate separation and concurrent flow/pressure/energy measurement. The Atlas air-cooled diagram supports the actual route, but adjacent text contains an optional dryer and a repeated water-flow paragraph: verify the actual model OEM circuit instead of inferring no liquid makeup. Historical statistics, cases, rated power and savings percentages in these sources supply no inventory defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.oil-free-compressed-air |
| classification_refs | CPC 3.0 34250; narrower product and route boundary |
| covered_products | Nondried industrial compressed air at the station outlet from the stated route |
| excluded_products | Other chemicals, mercury species, amalgams, pure gases and the excluded routes above |
| representative_product | Aftercooled/separated compressed air in the measured delivered state |
| production_route | Intake filtration → dry oil-free screw compression/intercooling → aftercooling/separation → station receiver when present → delivery; isolated lubrication and maintenance accompany operation |
| market_state | Gaseous mixture at the station interface; declared pressure, temperature, moisture and quality |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Account for newly first-accepted industrial compressed air meeting declared station-supply pressure/quality at the product-accounting acceptance gate, with actual in-scope postgate fates and service disclosed |
| How much | 1 m3 newly first-accepted compressed-air wet mixture at one declared actual station-supply reference state P_ref_abs/T_ref_K/vapor-composition/Z_ref. Q is the sum of unique measured actual first-acceptance event volumes; subsequent leaks or other fates do not cancel acceptance. This production-accounting reference is not an additional external physical output or an assertion that all accepted gas is dispatched |
| How well | The same declared outlet gate, dry oil-free screw route, pressure, temperature, humidity/pressure dew point, particle and oil acceptance; nonbreathing and not separately dried. Different composition/quality regimes require separate datasets unless a measured fully reconciled conversion establishes equivalence |
| How long or cycle | One representative common production period including loaded/unloaded operation, start/stop, standby, rejected operation and maintenance; previously accepted stock keeps its original cohort and denominator |
| reference_flow_link | `delivered_air` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | station product-accounting acceptance gate after final cooler/separator and tests; external physical boundary plus included receiver/linepack and actual first-acceptance point; model and dry oil-free configuration; actual cooling/coolant circuit and no dryer; one actual supply reference state P_ref_abs/T_ref_K/vapor-composition/Z_ref; raw P_abs and gauge-to-absolute relation; raw T_K; RH/pressure dew point and water-vapor fraction; gas composition and validated density/EOS/Z; calibration and original meter convention/compensation; provider quantity convention and verified same-state conversion; actual particle/oil acceptance limits and tests; common period and unique first-acceptance event IDs with measured volume increments; authoritative locked positive Q from events; disjoint same-basis net D_new/F_new_close/L_new fate bridge including all in-scope postgate exits; opening/closing raw/WIP/old/new accepted gas and liquid stocks; returns/recirculation/rework lineage without repeated acceptance; full unallocated Qt_i physical and energy ledgers; per-exchange Qb_i actual new-cohort attribution and inherited not-embedded raw/WIP demand; old accepted-stock service with original Q; asset/provider boundaries and causal service fractions/lifetime evidence; electricity geography/voltage |

Declare every qualifier when constructing a data package. Volume/m3 identity fixes no free-air, standard-state or line-volume convention; physical flow identity and foreground/provider quantity-basis compatibility require separate review.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `volume_basis` | reference product | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Q = sum_e(v_e) over unique actual first-acceptance events from cp_delivery; each v_e is a nonoverlapping measured newly accepted gas quantity converted to the one declared reference state. Preserve event IDs/lineage and locked Q after acceptance, including gas later leaked/relieved/withdrawn/downgraded/reworked. Reconcile Q = D_new + F_new_close + L_new using disjoint actual net postgate fates within the same period and scope: net external dispatch, closing accepted stock and all other net fates. D_new + F_new_close alone is valid only after proving L_new = 0. Returns/gross loops/retests and repeated acceptance of the same gas do not add events; unaccepted raw/WIP and opening accepted gas add no new Q. Actual measurement/identity corrections need a traceable event-history correction, never cancellation because of a later loss. Incompatible fate bases leave an unresolved bridge, not a replacement Q. Q must be positive for normalization; zero/unknown Q retains raw records and unknown normalized values. No default state/density/Z or double meter compensation. |
| `mass_closure` | ambient_air, delivered_air, vented_air, condensate, cooling_water, cooling_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_air, cp_delivery and cp_wastes to transform each measured gas-volume increment to wet mass using density validated for its own P_abs, T, RH, composition and Z. Delivered_air remains a Volume reference; its mass is an analytical ledger, not a second exchange. Reconcile oxygen, nitrogen, other dry components and vapor/liquid water using measured composition and the same wet/dry mass basis. Condensate is inlet moisture separated at each actual drain. Constituent analyses partition bulk air; do not add them again as independent air inputs/outputs. Retain gas and liquid stock changes and uncertainty. |
| `electric_energy` | electricity_mv, electricity_lv | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the original Net calorific value property; convert metered kWh using the unit-group factor 1 kWh = 3.6 MJ, without interpreting this as delivered heat. Include fans, controls and actual auxiliaries; do not replace measured energy with nameplate kW times undifferentiated hours. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual ambient intake and supplied electricity, makeup materials and equipment providers at declared interfaces |
| starting_condition_role | Foreground station operating entry; upstream supplies linked separately |
| product_classification_scope | Narrow compressed-air subset of CPC34250; no inferred common chemistry |
| recursive_input_rule | This route does not purchase same-category compressed-air feed; actual boosting or purchased-air configurations exceed this boundary and must not be recursively unfolded |
| upstream_dataset_requirement | Each supply requires actual geographic/temporal/technology, delivered-state, property/unit and boundary compatibility; each waste requires actual treatment linkage, not a provider inferred from UUID |
| disclosure | Delivery interface, included equipment components/first fill, actual coolant, stocks, missing measurements, anomalies and all boundary extensions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `station_complete` | compression-station | Aggregate intake filtration, compression, intercooling, aftercooling, separation, actual receiver, drains, controls, isolated lubrication and maintenance into one foreground unit while retaining stage meters. Internal gas transfers have equal physical quantities at both ends and are not a second product output with the reference UUID. | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `boundary_fates` | all waste outputs | Distinguish waste sent for treatment from direct air/water-body release by actual receiver. Cover actual station air outlets; oil-free labelling cannot omit known releases. Actual direct liquid release or additional emitted species requires added verified atomic rows for its exact species/compartment before inventory completeness is claimed. | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `route_configuration` | compression-station | Verify model OEM circuit and actual modifications; do not treat a dryer-equipped or water-injected configuration as this scope. If external cooling water, glycol coolant or another formulation is actually used, add its individual supply/waste rows and review applicability instead of assuming zero use. | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `asset_material_completeness` | compression-station | Equipment manufacture is outside the foreground transformation but its attributable service burden is retained through providers. Inventory actual packing, seals, lubricant, first fill, replacements and removed assets independently by their concrete physical identities, including returns/reuse/stocks; provider-included components must be reconciled without duplicate mass or burdens. | `ilcd-general-guide`, `doe-compressed-air` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `compression-station` | Oil-free air-cooled screw compressed-air station | required | Declared route and outlet after cooler/separator | foreground production | 1 m3 newly first-accepted at declared actual supply state and gate |

### Process: Oil-free air-cooled screw compressed-air station (`compression-station`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_mv`)

This UUID is for CN grid-average consumption mix, to user, at 1–35 kV. Use it only for a verified compatible Chinese supply at the measured station boundary; another geography or supply mix requires its own verified atomic electricity identity. Include attributable transformer losses when station motors are downstream. Do not also book the same energy at low voltage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort provider/resource demand from cp_energy with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Alternating current (`electricity_lv`)

This UUID is for CN grid-average consumption mix, to user, at <1 kV. Use it only for a verified compatible Chinese supply at the measured station boundary; another geography or supply mix requires its own verified atomic electricity identity. Select the actual supply interface; this row and electricity_mv are alternative interfaces for the same supply, not additive representations.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort provider/resource demand from cp_energy with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Compressor bearing and gear lubricating oil (`gear_lubricant`)

One actual supplied lubricant formulation, with SKU, base fluid, additives and viscosity declared. It lubricates bearings/gears isolated from the compression chamber; oil-free compression does not mean lubricant-free equipment. Record replacement and makeup, excluding internal circulation and the initial fill already included in the equipment provider. No petroleum/PAO recipe is prescribed.

- Selected flow: Compressor bearing and gear lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort provider/resource demand from cp_materials with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Compressor inlet air filter element (`inlet_filter`)

One actual replacement inlet filter element, including its integral housing only if supplied together. Obtain net mass and media composition from the actual part. An internal-combustion-engine filter or coolant-mist cartridge is not a compatible substitute.

- Selected flow: Compressor inlet air filter element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort provider/resource demand from cp_materials with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Compressor lubricant filter element (`oil_filter`)

One actual replacement filter element in the isolated gear lubricant circuit; record part, media, dry net mass and service interval separately from the inlet air filter.

- Selected flow: Compressor lubricant filter element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort provider/resource demand from cp_materials with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Air or vacuum pumps, air or other gas compressors (`compressor_asset`)

The named calculation rule asset_service applies exactly to compressor_asset and receiver_asset and is implemented by cp_assets with cp_delivery. Its period product-accounting numerator S_asset is actual allocated manufacturing/service-exposure provider demand in kg for newly accepted production, including traced inherited WIP service and current attributable service once; old accepted-stock service stays with its original cohort. It is not equipment physically consumed at the gas station. Amount S_asset / Q performs the same once-only period normalization as other input rows. The full measured net-mass × causal-service-fraction relationship remains in asset_service; no count-to-kg product conversion is implied. Preserve complete physical incoming/removed/returned/reused assets and stocks separately.

This broad identity locates one actual manufactured oil-free air-cooled dry screw package, not a mixture of machines. Declare model, net equipment mass and whether motor, intercooler, aftercooler, controls, fans and first fill are included. Attribute embodied equipment burden using asset_service with demonstrated physical service causality and actual service/lifetime evidence; no per-machine mass or lifetime is assumed.

- Selected flow: Air or vacuum pumps, air or other gas compressors `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: S_asset / Q; S_asset is the period newly accepted-product equipment-provider numerator in kg collected and reconciled by cp_assets and cp_cohorts; Q is the same positive accepted m3 from cp_delivery; divide once, with no physical machine-mass consumption claim
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Steel compressed-air receiver vessel (`receiver_asset`)

The named calculation rule asset_service applies exactly to compressor_asset and receiver_asset and is implemented by cp_assets with cp_delivery. Its period product-accounting numerator S_asset is actual allocated manufacturing/service-exposure provider demand in kg for newly accepted production, including traced inherited WIP service and current attributable service once; old accepted-stock service stays with its original cohort. It is not equipment physically consumed at the gas station. Amount S_asset / Q performs the same once-only period normalization as other input rows. The full measured net-mass × causal-service-fraction relationship remains in asset_service; no count-to-kg product conversion is implied. Preserve complete physical incoming/removed/returned/reused assets and stocks separately.

Conditional on an actual separate steel receiver inside the station boundary. Record manufactured vessel net mass, pressure certification and provider boundary. Include it once; do not rebook a receiver already included with the compressor package.

- Selected flow: Steel compressed-air receiver vessel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: S_asset / Q; S_asset is the period newly accepted-product equipment-provider numerator in kg collected and reconciled by cp_assets and cp_cohorts; Q is the same positive accepted m3 from cp_delivery; divide once, with no physical machine-mass consumption claim
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### de-ionised water (`cooling_water`)

Conditional on documented actual deionised-water makeup/service fill in an auxiliary cooling circuit. Air-cooled describes heat rejection, not proof of zero liquid inventory. Only external added water is counted, not recirculation. A glycol/inhibited premix is a different formulated flow and requires its own atomic row and supplier identity before dataset completion.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort provider/resource demand from cp_materials with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

##### Waste flows

No such boundary exchange is specified for this route; actual occurrence requires an individual atomic row and boundary review.

##### Elementary flows

###### air (`ambient_air`)

Ambient atmospheric intake: Resources / Resources from air / Renewable material resources from air. Measure intake wet mass from calibrated flow, pressure, temperature, humidity, composition and validated density; include intake losses and stock changes. Do not substitute a pollutant emission or technosphere instrument-air record.

- Selected flow: air `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort provider/resource demand from cp_air with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

#### Outputs

##### Product flows

###### Compressed air (`delivered_air`)

The sole product-accounting reference is newly first-accepted nondried compressed air after station cooling/separation and actual acceptance tests, at the declared gate and supply state. Exactly 1 m3 of wet mixture uses the same basis as the unique actual event volumes defining Q. It is not an additional external physical output: actual net dispatch, closing stock and other in-scope postgate fates are separately reconciled without duplicating gas quantities. Moisture is a measured qualifier, not an extra product. No intermediate copy of this reference UUID is created.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: Unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: 1 m3
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_delivery`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

##### Waste flows

###### Compressed-air separator condensate for wastewater treatment (`condensate`)

Liquid water condensed from intake humidity and actually drained, sampled for contaminants. Declare drain points, wet mass, composition and sewer/off-site receiver. It is untreated waste sent to a treatment provider, not an elementary water discharge, product water or saleable by-product. A treatment-specific wastewater UUID is not evidence for this untreated stream.

- Selected flow: Compressed-air separator condensate for wastewater treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_wastes with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Used lubricating oil (`spent_lubricant`)

Collect actual spent bearing/gear lubricant; declare base fluid, contamination and receiving treatment. The broad used-oil identity does not establish recycling, incineration or a disposal dataset. Do not combine it with aqueous separator condensate.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_wastes with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Spent compressor inlet air filter element (`spent_inlet_filter`)

One discarded inlet element with retained dust; measure gross discarded mass and identify media and contamination. Dust still retained in this element is not emitted particulate matter. Record separately collected loose dust as a further atomic waste only when it actually occurs.

- Selected flow: Spent compressor inlet air filter element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_wastes with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Spent compressor lubricant filter element (`spent_oil_filter`)

One discarded lubricant-circuit filter, with residual oil and contamination recorded. State whether drained oil is weighed separately and avoid counting that oil again in both filter and spent_lubricant.

- Selected flow: Spent compressor lubricant filter element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_wastes with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Spent auxiliary cooling-circuit water (`cooling_waste`)

Conditional on actual disposal of water from the auxiliary loop; declare impurities, service event and actual treatment receiver separately from atmospheric condensate. A glycol/inhibited mixture must be a distinct formulated waste row. No direct water-body discharge is assumed.

- Selected flow: Spent auxiliary cooling-circuit water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_wastes with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

##### Elementary flows

###### used air (`vented_air`)

Bulk wet carrier released from blow-off, relief, drains and station leakage to air, unspecified subcompartment. Identify each actual outlet and ventilation to outdoor air. Preserve the physical bulk-gas ledger; this carrier row does not replace pollutant-specific elementary exchanges or assert impact characterization. Exclude separately counted pollutant mass from the summed carrier mass.

- Selected flow: used air `fe0acd60-3ddc-11dd-ae96-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_air with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Particulate matter, particle size unspecified (`particulate_air`)

Conditional on measured particulate release across the environmental boundary. Use a nonoverlapping measured size-unspecified particulate fraction, excluding separately inventoried lubricant aerosol. Verify sampling definition, composition, recovery and actual outdoor-air pathway. If size is known, resolve the corresponding disjoint size fractions; do not add PM2.5, PM10 and total PM as independent masses. No clinker example factor is used.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_emissions with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Compressor gear-lubricant aerosol to outdoor air (`oil_aerosol`)

Conditional on observed lubricant aerosol release despite chamber isolation, such as a vent or maintenance leak. Declare actual formulation/species and outlet; do not assign a generic glycerin or correction flow. Split chemically identified species when the monitoring and database definitions require it. Reconcile its inclusion in total particulate sampling so it is counted once.

- Selected flow: Compressor gear-lubricant aerosol to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_emissions with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### Rejected compression heat to outdoor air (`rejected_heat`)

Thermal energy rejected through intercoolers, aftercoolers, lubricant coolers and actual fan ventilation to outdoor air; this is neither a water-body thermal release nor sold heat. Use cp_heat measurements/validated heat accounting, recording cooling airflow, temperature, humidity, rejection pathway, boundaries and uncertainty. Retain other heat transfers and do not automatically assign an unclosed residual to this exchange.

- Selected flow: Rejected compression heat to outdoor air
- Flow property / unit: Thermal energy / MJ
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Qb_i / Q; Qb_i is this row's actual new-cohort attributed output/effect with its source/date/receiver from cp_heat with cp_cohorts, including only compatible consumed prior foreground vectors not already in linked providers. Retain full unallocated Qt_i/physical stocks separately; old accepted-stock service keeps original Q. This model amount does not scale real gross physical outputs or imply a second external gas output; unknown attribution remains unavailable
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat`
- Sources: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `air_product_only` | compression-station | There is one reference air product and no assumed coproduct. Condensate, used oil and spent elements link to treatment under their actual waste identities, without water-product or recycling credits. Preserve rejected heat in the energy ledger; this non-exported-heat route does not invent a sold-heat product. If useful heat is actually exported, record its receiver, measured transfer and useful-temperature/service basis as a distinct product exchange and review the boundary extension; no automatic avoided-heat credit. | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `physical_before_burden` | all inventory rows | Retain the complete physical wet/dry air, water, oil, filter and stock ledger before a separate allocated-burden ledger. For users with the same pressure/quality, share common station burdens by measured accepted outlet volumes on identical actual state/composition conventions; differing pressure/quality first requires separated measured operating regimes rather than mechanical volume allocation. Do not multiply physical outputs or internal links by burden-allocation shares. | `ilcd-general-guide`, `doe-compressed-air` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Q is authoritative measured first-acceptance production: sum_e(v_e) from actual unique events at the declared product-accounting gate. Retain accepted event IDs, nonoverlapping measured increments, lineage and the original locked denominator. Gas accepted then lost, relieved, consumed, withdrawn, downgraded or sent back to rework remains part of its original acceptance. Q is not reconstructed from surviving stock/sales, and is not another physical external output.

D_new, F_new_close and L_new form a reconciliation bridge only. D_new is net external dispatch of the newly accepted cohort after matching actual returns; F_new_close is that cohort's closing accepted stock including eligible returned gas; L_new is all other actual net in-scope postgate fates, including leakage/relief, withdrawals, consumption, downgrades and rework-out. The three terms must be mutually exclusive and on the same declared accepted-product basis; no gross circulation or repeated passage, duplicate returned parcel, pre-acceptance reject or downstream out-of-scope loss is added. Hence Q = D_new + F_new_close + L_new; D_new + F_new_close is a special bridge only if all other postgate fates are demonstrably absent. Retain measured mass/component/water correspondence for changed state/composition; unsupported equivalence leaves bridge coverage unresolved without erasing the actual acceptance event.

Qt_i is the full unallocated same-period physical station exchange for all new/old/unfinished/other recipients. It remains in the actual control-volume mass, component, water and energy ledgers; Qt_i/Q is optional physical analysis only. Each linked new-product inventory/provider-demand card instead uses Qb_i/Q, where Qb_i is that row's actual newly accepted-cohort exchange numerator under station_ratio and cp_cohorts. Exclude current old-FG/other-recipient service from that numerator; old service is separately carried with its original Q. For actual physical output tracing use measured cohort identity/partition, never environmental burden shares to reduce real external outputs. New-product attribution does not rewrite measured facility emissions, waste, heat, stocks or transfer totals.

Trace each opening raw-material, WIP and finished-gas cohort with its original raw physical quantities, original measured basis/denominator, upstream burden vector and asset/maintenance service vector. WIP without a final accepted-output denominator retains raw quantities and service numerators; do not manufacture a prior Q. Previously accepted gas retains its original Q. New production incorporates inherited raw/WIP burdens and newly incurred attributable activity exactly once; receipts alone are not consumption. Opening accepted gas remains an old cohort when dispatched, returned, mixed or retested; use its original normalization denominator, not the new Q. Any additional current storage, leakage, recompression or service burden goes to the cohort actually served; do not repeat its previous manufacture/service or credit missing records as zero. Use actual raw/WIP/FG stock and transfer equations, including physical rejects and internal links. For Q=0 or unknown, preserve raw records, state uncertainty and unknown normalized values; never divide by zero or invent production.

S_asset is each asset row's period newly accepted-product manufacturing/service-exposure numerator in the compatible background provider's unit (kg here), derived by the named asset_service rule and cp_assets. It is separate from physical machines received or scrapped and from lubricant/filter/material consumption. Retain complete equipment and component/first-fill boundaries, packaging, returns/reuse and prior service allocations; no default machine weight, lifetime, load factor or service fraction. Only compatible accepted quality/composition regimes may be combined.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | compression-station | authoritative first-acceptance event Q and disjoint postgate fate bridge | site measurement | fixed acceptance gate and external physical boundary; OEM circuit; event/cohort id and lineage; nonoverlapping measured first-accepted increments v_e; acceptance time/test; locked original Q and correction trail; net D_new; F_new_close; each net L_new fate with date/receiver; pre/post-acceptance rejection distinction; opening old FG; old dispatch; returns/gross recirculation/retests/rework; raw/WIP; counter resets; raw P_abs/gauge offset; T_K; RH/dew point; vapor/composition; Z/EOS/density; meter compensation; provider basis; receiver/linepack and liquid stocks | Use calibrated gas meters and concurrent acceptance/state records to identify each real first event and measure its new nonoverlapping quantity at the same reference state. Lock Q from events; postgate losses never reverse first acceptance. Independently reconcile disjoint net D_new/F_new_close/L_new from actual transfer/stock/outlet records within the same period; match returns and repeated passages by lineage instead of adding gross crossings. Quantify all in-scope postgate fates, or leave the bridge incomplete; use the two-term bridge only with evidenced zero other fates. For mixed receiver cohorts use traceable transfers or validated mixing/component balances with uncertainty. State/composition conversion and moisture phase changes need actual supported correspondence; no generic standard state, assumed density or duplicate correction. | m3 | Each actual first acceptance, fate/transfer and opening/closing survey | Common period including startup/standby/rejected operation; original acceptance dates retained | Actual product-accounting gate, external physical boundary, included receiver/linepack and actual outlets | per reference flow | Unique measured acceptance-event register, locked-Q history, disjoint net fate/stock bridge, actual state/quality/calibration/EOS records and uncertainty |
| cp_energy | compression-station | complete station electricity Qt_energy | site measurement | country/grid; voltage and transformer boundary; meter start/end; timestamped actual active power; load/unload/start/stop/standby; fans/controls/drains; electrical reuse/export; Q | Calibrated active-energy submeter or time integral of measured active kW over each actual operating regime; include all actual auxiliaries and attributable transformer losses. Reconcile complete unallocated station energy, then implement station_ratio with cp_cohorts to form actual new-cohort Qb_i and separate old-stock service before normalization; no nameplate-power or default power-factor estimate and no duplicate voltage interface. | kWh; MJ | Each representative regime and service event | Same period as Q | Actual station electricity interface | per reference flow | Calibration, actual power/energy logs and supplier/attribution reconciliation |
| cp_materials | compression-station | actual material consumption | site measurement | SKU; composition; net mass; receipts; opening/closing stock; service events; internal circulation; Q | Calibrated weighing and inventory reconciliation by each individual supplied lubricant, filter or makeup water; retain actual SDS/part specification and first-fill boundary. Use station_ratio with cp_cohorts for actual new-cohort consumption/provider demand, compatible inherited-not-embedded quantities and separate old-recipient service; raw receipts and stocks remain complete. | kg | Each representative regime and service event | Common declared period covering shifts/loads | Actual station boundary | per reference flow | Calibration, raw records, stock/delivery reconciliation and uncertainty |
| cp_assets | compression-station | actual period allocated provider numerator S_asset for compressor_asset and receiver_asset; full physical fleet ledger separately | measured/recorded foreground service and asset records | exact asset row/id/model/configuration; manufactured mass kg; actual counts; traceable weighing; provider unit/reference property/boundary; full asset opening/purchases/transfers/returns/closing/scrap; component/first-fill packaging and seals; period duty/duration and all served uses; lifetime/retirement evidence or explicit scenario; previous allocated fractions; current f_service_j by recipient cohort; u_provider_j; inherited-to-new service; S_current; S_asset; service recipient cohort; original denominator; Q | Use calibrated weighing or traceable same-configuration net-mass records and actual fleet counts. Reconcile opening + receipts/transfers in = closing + returns/transfers out + scrap with no invented physical consumption. Separately implement asset_service for the exact asset rows: derive each causal fraction from measured actual service and evidenced lifetime, sum compatible provider kg × current new-production fractions as S_current; add only the traced inherited raw/WIP service actually consumed to form S_asset. Keep old finished-stock service separate with its original Q. Link all recipient cohorts to cp_delivery and cp_cohorts. Retain initial manufacture and distinct maintenance providers, remaining life, reuse/retirement and sensitivity. An unresolved kg-based receiver provider is an explicit gap, not zero. | kg provider-equivalent per period; kg/count/duty units in separate raw ledgers | Each asset/service/retirement event and period closing | Common period plus full lifetime/prior attribution evidence | Each actual compressor package and separate receiver, their compatible provider boundaries and served cohorts | per reference flow | Actual asset/mass/duty records; full physical fleet equation; provider/component boundary; causal lifetime scenario; prior fraction ledger; S_asset arithmetic and independent dimensional review |
| cp_air | compression-station | complete intake, vent and gas-stock mass | site measurement | outlet-specific flow/counter; P_abs; T; RH/vapor fraction; measured dry composition including oxygen/nitrogen; validated density/EOS/Z; blow-off/relief/drain leaks; external blowdown; internal recirculation; gas/liquid stocks; Q | Survey all actual outlets and measure gas flow under each load regime. For each volume increment use its own validated wet-gas density; retain measured mass fractions for oxygen, nitrogen, other dry components and water separately. Reconcile actual accepted gas, vapor, each drain condensate, emissions, reuse and stocks, including pre/post-acceptance and new/old cohorts. Use station_ratio with cp_cohorts for the model Qb_i only; raw physical totals are not reduced by burden shares. Internal recirculation has equal incoming/outgoing quantities and is not a second external exchange. | kg | Each regime and actual release event | Same period as Q | Complete station intake, final separator, receiver and all actual gas outlets | per reference flow | Circuit/outlet map, calibrated measurements, composition, conversion and uncertainty |
| cp_wastes | compression-station | each actual waste | site measurement | stream; wet mass; moisture; contamination/species; drained oil split; receiver; transport/treatment; stocks; Q | Weigh each segregated waste and retain representative analysis and transfer records. Identify actual sewer/off-site receiver; verify any actual direct environmental liquid outlet separately. Preserve complete physical Qt_i; use cp_cohorts and station_ratio to trace actual new-cohort Qb_i and separate old service without reducing actual waste output. | kg | Each representative regime and service event | Common declared period covering shifts/loads | Actual station boundary | per reference flow | Calibration, raw records, stock/delivery reconciliation and uncertainty |
| cp_emissions | compression-station | actual particulate and lubricant aerosol | site measurement | outlet; outdoor pathway; sample definition; blank; recovery; size cut; species/composition; flow; operating hours; uncertainty; Q | Survey actual vents/leaks and maintenance releases, then sample with a documented applicable measurement method. Report positive, nondetect and absent evidence distinctly; quantify nonoverlapping pollutant fractions and preserve oil-aerosol/PM overlap reconciliation. Preserve full measured source Qt_i; separately use station_ratio and cp_cohorts for evidenced new-cohort attribution Qb_i and old-cohort additions, never changing actual release records. | kg | Each representative regime and service event | Common declared period covering shifts/loads | Actual station boundary | per reference flow | Calibration, raw records, stock/delivery reconciliation and uncertainty |
| cp_heat | compression-station | Heat to air | site measurement | cooling airflow; inlet/outlet temperature and humidity; density/enthalpy; outlet; boundary; regime; uncertainty; Q | Measure calibrated cooling flow and inlet/outlet states at actual cooler/ventilation outlets and calculate net heat by applicable validated enthalpy relationships. Retain radiation, other transfers and balance residuals; avoid recounting internal coolant circulation. Keep full physical Qt_heat; separately implement station_ratio with cp_cohorts for actual new-cohort Qb_i and old service, never filling a missing measurement with an energy residual. | MJ | Each representative regime | Common declared period | Actual station boundary and outdoor receiving air | per reference flow | Calibration, actual circuit and energy ledger |
| cp_cohorts | compression-station | raw/WIP/FG inheritance, per-exchange Qb_i and original-cohort service vectors | site records | cohort/event id; original gate/date/state/measured basis; original Q for accepted gas and raw numerator for unaccepted WIP; locked first-event quantities; disjoint D_new/F_new_close/L_new and each fate; full Qt_i by flow/source/date/receiver; current actual new/old/unfinished/other recipient quantities and causal drivers; N_i_to_new; compatible inherited I_i_to_new and provider-embedded flag; Qb_i; raw/material/gas opening/receipts/consumption/closing; returns/loops/retests; provider boundaries; service vectors and unknown origins | Reconcile chronological event/transfer/outlet and validated receiver mixing records without repeating a first acceptance. Implement station_ratio and cohort_carry for each actual row: trace current new-cohort consumption/outputs before allocating genuinely shared effects by evidenced per-exchange causality; retain the full unallocated physical Qt_i. Add only consumed prior foreground raw/WIP exchange vectors not already inside linked input providers, preserving original flow/unit/source/date. Background-embedded burdens remain decomposition only. Keep old accepted-stock manufacture and added current service separately with original Q. Unresolved recipient/stock/state/provider evidence leaves Qb_i unknown, not Qt_i automatically assigned to new production. | raw kg/m3 and exact provider/service/emission units kept separately | Each movement/first event/fate and attribution interval; period close | Original cohorts plus common new period; original exchange dates retained | Complete declared station stocks, all served recipients, actual source boundaries and providers | per reference flow | Unique-event and fate bridge; raw stock/whole-output closure; original denominators/vectors; per-exchange recipient/causal shares and provider-overlap audit; missing-history disclosure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `station_ratio` | all inventory rows | qphysical_i = Qt_i / Q is unallocated physical analysis only, never the selected linked new-product quantity. For each ordinary row, Qb_i = N_i_to_new + I_i_to_new and a_i = Qb_i / Q once. N_i_to_new is the actually traced current new-cohort exchange/provider demand; remaining genuinely shared effects require evidenced per-exchange causal attribution across all served recipients. Exclude old-FG/unfinished/other-recipient portions and retain their own ledgers/bases. I_i_to_new contains only traceable prior foreground exchanges carried by consumed raw/WIP, with matching actual flow/provider unit/boundary and no overlap with any linked input provider; embedded upstream burdens are decomposition, never extra foreground demand/emissions. Preserve inherited source/date/medium; a carried historical emission is not a new current release. Keep incompatible sources/units/states in distinct subrecords. Actual gross physical outputs, stock/transfer quantities and reference gas are not multiplied by environmental burden shares. Q is locked actual first-event production, reconciled to disjoint D_new/F_new_close/L_new, not another external physical output; delivered_air is the 1 m3 product-accounting reference. For compressor_asset and receiver_asset use Qb_asset = S_asset from the complete named asset_service relation and asset_per_m3 = S_asset / Q once; neither is physical equipment consumption. Old-stock services keep original Q, and unknown Qb_i/Q remains unavailable rather than assuming full Qt_i. | Qt_i; N_i_to_new; I_i_to_new; Qb_i; S_asset; Q; cp_delivery; cp_assets; cp_cohorts | separate full physical ledger and actual new-cohort linked exchange/provider demand per reference flow | `doe-compressed-air`, `ilcd-general-guide` |
| `gas_volume_conditions` | ambient_air, delivered_air, vented_air | For each raw increment, wet mass = raw volume × validated density(raw P_abs, T_K, vapor/composition, Z). Convert that same mass to reference volume = mass / density(P_ref_abs, T_ref_K, same composition, Z_ref); retain meter algorithm and any already applied compensation. For identical composition only, equivalent EOS notation is V_ref = V_raw × (P_raw_abs/P_ref_abs) × (T_ref_K/T_raw_K) × (Z_ref/Z_raw). Use actual absolute pressure, Kelvin temperature and validated compressibility; do not assume Z=1. Different water fractions or condensation require actual component/water balances and measured conditioning, not this same-composition shortcut. Separate incompatible state/composition regimes. Wet/dry, actual/free-air/standard and provider bases remain explicit. No generic density or source-example reference state. | cp_air; cp_delivery; measured volume/mass; concurrent raw state/composition; declared reference state; validated meter/EOS | complete physical gas masses and same-basis accepted Q with uncertainty | `nist-gas-flow`, `doe-compressed-air` |
| `asset_service` | compressor_asset, receiver_asset | For one compatible mass-based asset current-service contribution: q_ref = q_item × f_service / Q; q_item is its actual collected identified-equipment net mass in kg, not a gas-product denominator; q_ref is allocated provider-equivalent kg per 1 m3 reference flow. General period form: S_current = sum_j(u_provider_j × f_service_j_to_new); S_asset = S_inherited_to_new + S_current; asset_per_m3 = S_asset / Q. S_inherited_to_new is traced previously incurred foreground asset demand carried by raw/WIP actually consumed in new production and not already included in a linked input provider. Service embedded in a material/WIP background provider is retained as a decomposition vector inside that provider, never booked again as these equipment rows; old finished-gas service is excluded. For a fresh single mass-based asset contribution with no inherited service, u_provider_j = q_item_j and the original formula is exactly retained. Sums retain each provider/asset family separately; incompatible provider units or boundaries cannot be pooled. cp_assets retains every asset id, actual measured mass/count, provider unit/boundary, measured causal period service, total lifetime service, remaining attribution, retirements and scenarios. f_service_j_to_new is the dimensionless current service share attributable to new production, separated from all old finished-stock and other-service shares. Each f_service_j is dimensionless and justified for that specific asset by actual duty/duration or demonstrably causal same-state output service, including rejected/idle duty when causal; no universal volume fraction. A volume fraction is allowed only when period/lifetime accepted volume genuinely determines that asset service, using the same actual first-acceptance-event gate/counting policy and with other uses and state/quality bases reconciled. Different assets may need different fractions. All life/cohort fractions sum at most one; keep prior service allocations and avoid resetting the full manufacturing burden on reuse. These two inventory rows require a compatible kg-based provider; a provider expressed in items needs an explicitly measured configuration-specific kg/item relationship and property/unit reconciliation before linking, otherwise retain a provider gap. Physical fleet movements and submaterial/first-fill ledgers remain separate; do not book both whole-package manufacture and its included components. Do not divide S_asset or q_ref twice. No default weight, lifetime, duty, fraction or reuse credit. | q_item; u_provider_j; f_service_j; f_service_j_to_new; S_inherited_to_new; S_current; S_asset; Q; cp_assets; cp_delivery; cp_cohorts | S_asset in provider-equivalent kg for each asset row and asset_per_m3 in kg per 1 m3; q_ref equivalence retained | `ilcd-general-guide` |
| `actual_power_integral` | electricity_mv, electricity_lv | Qt_energy_MJ = 3.6 × integral of measured active power P_kW over time in hours, including all actual station loads at the selected interface. Prefer calibrated meter energy differences; reconcile the two methods and do not add both. Retain complete unallocated energy, actual stock/reuse/export and measured heat/gas transfers before any burden allocation. | cp_energy; time-resolved actual power or calibrated energy counter | complete station electricity MJ | `doe-compressed-air` |
| `cohort_carry` | all inventory rows | For each physical stock, opening + actual receipts/transfers/production = closing + dispatch/consumption/transfers/rejects with actual gas-state/component/water changes. Carry inherited burden/service vectors with traced consumed quantities and original bases; do not add provider-embedded vectors twice. New Q = sum_e(v_e) of unique actual first events and remains locked after postgate loss/rework. Independently reconcile Q = D_new + F_new_close + L_new for disjoint same-basis net fates; the two-term bridge applies only when L_new is evidenced zero. Gross loops/returns/retests do not repeat events, and a returned parcel has one net fate. Old accepted gas adds no new Q and keeps its original denominator/service history. Current new-product Qb_i excludes old/unfinished/other recipients; unknown inherited/attribution/state vectors remain unknown. No forced quotient for zero/unknown Q and no duplicated external physical output for event Q. | cp_cohorts; cp_delivery; cp_assets; actual acceptance/fate/stock/transfer/recipient records; original cohort denominators/vectors | complete physical stock/fate bridge, locked event Q and separate actual new/old cohort exchange/service numerators | `ilcd-general-guide`, `doe-compressed-air` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `same_period` | all inventory rows | Common period/configuration and locked actual first-event Q; retain postgate fates, actual new/old recipients, anomalies, gaps, start/stop and low loads | cp_delivery; cp_energy; cp_materials |
| `physical_ledgers` | compression-station | Reconcile dry air, water, oil and filter mass/stocks separately; Close the complete unallocated station control-volume energy ledger with measured electricity and all incoming/outgoing gas, liquid, heat, work and energy-stock changes; use validated actual-state enthalpies, including vapor/condensation and actual reuse. Disclose residuals/uncertainty rather than forcing an imbalance into an invented emission | cp_air; cp_materials; cp_wastes; cp_energy |
| `provider_basis` | all product inputs | Verify flow identity, reference property/unit, actual supplied state and provider quantity definition separately; a matching name is not provider compatibility | Actual supplier/provider originals and metering definitions |
| `emission_completeness` | all elementary outputs | Detection limit is not zero; positive emissions need actual species/medium; avoid total-PM/oil-aerosol duplication; absence requires documented survey scope, not invented survey results | cp_emissions; cp_wastes |
| `asset_dimension_review` | compressor_asset, receiver_asset | Independently verify the full named asset_service formula, exact asset/provider units, measured period numerator, positive Q, causal lifetime fraction and cohort history using reproducible dimensional and stock examples. A finite common-reference measurement pass establishes the explicit period basis only; it does not establish generic mathematical typing, physical validity or scientific approval of asset service attribution. | cp_assets; cp_delivery; cp_cohorts; actual provider originals; independent review |
| `cohort_numerator` | all inventory rows | Every selected ordinary new-product amount is actual Qb_i/Q and each asset amount is S_asset/Q. Verify measured current recipients and consumed prior foreground not-embedded vectors before calculation; preserve full raw Qt_i and all physical outputs without burden-share scaling. Old accepted-stock service remains with original Q. Unsupported attribution or a missing postgate fate/state bridge prevents a complete dataset. | cp_cohorts; cp_delivery; all linked row protocols; original provider/source/stock records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `reference_unique` | delivered_air | Exactly one 1 m3 Volume product-accounting reference at the declared state. Reproduce positive locked Q from actual unique nonoverlapping first-acceptance events; subsequent leakage/relief/downgrade never erases an accepted event. Reconcile disjoint same-period same-basis net D_new/F_new_close/L_new; use D_new+F_new_close alone only if all other postgate net fates are proved absent. Reject gross loops, duplicate returned quantities, old-FG dispatch and retests as new acceptance. Q is not a second physical external output. Check all model-card Qb_i, old-cohort original bases, actual state/provider compatibility and complete unallocated raw outputs/stock/component/energy closure separately. | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `route_and_balance` | compression-station | Check actual oil-free dry screws, air cooling, absence of separate drying, boundary components and OEM/modified circuit. Reconcile wet/dry gas, water, oil and energy ledgers separately and assess residuals within measurement uncertainty. Unverified coolant composition or quantity cannot be declared conforming. | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `exact_id_and_fate` | all inventory rows | Verify each UUID with name, CAS where applicable, route, compartment, reference property and unit. An empty UUID remains a concrete atomic flow but has incomplete linkage; unresolved identity/supply/treatment compatibility cannot be reported as a complete dataset. Add atomic rows for actual additional exchanges first. | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `no_proxy_emissions` | all elementary outputs | Do not replace pollutants with bulk carrier air, another industry wastewater or correction flows. Verify indoor-to-outdoor vent paths, aqueous-waste receivers and any direct water-body outlet. Use actual measurements/validated calculations for emissions, without default positives or fabricated zeroes. | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | First-acceptance production-gate compressed-air inventory at verified pressure/quality/volume basis; actual net dispatch and all in-scope postgate fates disclosed |
| allowed_use | Complete linked compressed air for this route and declared first-acceptance quantity basis; downstream physically dispatched-air demand requires its own verified gate/quantity correspondence and provider compatibility, with postgate losses explicit |
| excluded_use | Whole CPC34250, other chemicals, equipment manufacture, medical air, dried products, high-pressure bottles and completeness claims with missing medium/provider linkage |
| required_metadata | All reference qualifiers, locked actual acceptance events, disjoint same-period net D/FG/L bridge, physical external boundary, cohort-specific Qb_i and unallocated Qt_i, original old-stock denominators, inherited-not-embedded demands, geography, OEM circuit, metering, upstream/waste providers and gaps |
| required_quality_disclosure | Calibration, coverage, uncertainty, detection limits, residuals, lifetime scenarios and identity/provider debt |
| update_trigger | Changes to equipment/coolant/drying/delivery pressure-quality, volume convention, load, supply or treatment provider |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-ene-bref` | official_guidance | European Commission, Reference Document on Best Available Techniques for Energy Efficiency, February 2009, corrected 09/2021. §3.7, printed pp.206–214 / PDF pp.238–246; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-09/ENE_Adopted_02-2009corrected20210914.pdf; retrieved 2026-10-13T18:10:42.859Z | Horizontal station architecture, pressure/purity/demand, components and emission survey; no statistical savings or universal recipe |
| `doe-compressed-air` | official_guidance | U.S. Department of Energy, Improving Compressed Air System Performance: A Sourcebook for Industry, Third Edition, 2016, DOE/EE-1340. Printed pp.8,11,14–15,60–61,84 / PDF pp.13,16,19–20,65–66,89; https://www.govinfo.gov/content/pkg/GOVPUB-E-PURL-gpo176573/pdf/GOVPUB-E-PURL-gpo176573.pdf; retrieved 2026-10-13T18:10:38.197Z | Oil-free isolated lubrication, accessories/condensate, simultaneous flow-pressure-energy metering and volume convention; no injected-lubricant data or example quantities |
| `atlas-zrzt` | handbook | Atlas Copco, Oil-free rotary screw compressors ZR/ZT 110-160 (FF), undated brochure. Printed/PDF pp.7,16–18,22; https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/oil-free-air/documents/ZRZT-110-160-%28VSD%29-FF.pdf; retrieved 2026-10-13T18:10:38.311Z | Producer oil-free air-cooled diagram, isolated oil loop, separation, optional drying and FAD limitations; model evidence, no default quantity; repeated water-flow text needs actual OEM circuit clarification |
| `nist-gas-flow` | official_guidance | Wright et al., NIST SP 250-80, Gas Flowmeter Calibrations with the Working Gas Flow Standard, 2009. §§6,8–10, printed pp.8,13–15 / PDF pp.10,15–17; https://doi.org/10.6028/NIST.SP.250-80; retrieved 2026-10-13T18:14:57.112Z | Calibration, actual local state/composition, mass↔volume density relationship and uncertainty; dry calibration gas/reference conditions are not nondried-product defaults |
| `ilcd-general-guide` | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, DOI 10.2788/38479. §§7.2.1,7.9.3.2; printed pp.154–155,257–263 / PDF pp.174–175,277–283; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; retrieved 2026-10-13T18:15:00.159Z | Complete capital/maintenance boundaries and causally justified service allocation; no compressor-specific weight, lifetime or universal volume allocation |
