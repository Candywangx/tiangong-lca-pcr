---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aqueous-caesium-137-calibration-residue
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Generation and characterized handoff of aqueous caesium-137 calibration residues

## 1. Scope and Applicability

This attributional PCR covers one source-segregated aqueous caesium-137 chloride residual stream formed by the actual civil use of a certified hydrochloric-acid-matrix calibration solution, followed by characterization, first release for a named receiver and attributable on-site containment/handoff. The liquid must demonstrably meet that receiver system's documented low- or intermediate-level radioactive-liquid category. A generic native name or Cs-137 content alone does not prove classification. The reference is wet residual liquid mass including its actual water, acid and stable carrier, excluding container, separately captured glass and wipes. Residue has no further intended calibration use; no saleability, positive value, clearance or disposal authorization is implied.

Original metrology use and residue formation remain inside the physical foreground. Buying ready-made waste and merely repacking it does not implement this method. Trace the actual source lot, use campaign, no-further-use decision, segregation, characterization, rejection/rework and first handoff readiness. Use existing qualified records; this environmental method supplies no opening, isotope-production, separation, concentration, decontamination or radioactive handling procedures or parameters.

Exclude sealed sources, mixed-nuclide residues, uranium/thorium/plutonium, organic scintillation liquids, sludge, solidified waste, glass as reference, fuel-cycle residues and treatment services as reference. Actual rinse water joining the documented source stream requires measured quantity and compatible resulting matrix, not a prescribed dilution/mixing operation. Actual collection containers must match documented chemical/radiological compatibility and receiver requirements.

NIST documents the real Cs-137 calibration-solution state and distinguishes certified activity from uncertified chemical information. IAEA SSG-45 independently describes aqueous wastes from measurement/research uses and characterization/management records. A producer's different matrix and uncertified chemical purity are countercontext. No source supplies a factory inventory, universal waste threshold, isotope mixture, half-life, residue yield, chemical assay, energy intensity or emission default. The whole native reference is actually Product flow; this retains its physical radioactive-waste status without turning it into a useful calibration solution or a treatment-service output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aqueous-caesium-137-calibration-residue |
| classification_refs | CPC 3.0 33690; narrower product and route boundary |
| covered_products | One source-segregated characterized aqueous Cs-137 chloride calibration residual in declared HCl matrix |
| excluded_products | Sealed sources; mixed nuclides; fuel materials; organic liquids; solids; treatment services |
| representative_product | A traceable residual cohort from one certified calibration-solution genealogy, without further intended use |
| production_route | Original civil calibration use/residue formation → segregation → characterization → first receiver-ready release → on-site handoff |
| market_state | Aqueous radioactive liquid residue; actual receiving class/criteria; no saleability claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a characterized physical radioactive liquid residue at the generator handoff-readiness gate |
| How much | 1 kg reference flow |
| How well | Actual source matrix, radionuclide/activity/time evidence, receiving category and documented acceptance conditions |
| How long or cycle | One newly first-released cohort and attributable later on-site services; no downstream treatment promise |
| reference_flow_link | `finished` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Medium and low radioactive liquid waste `598474f7-e317-401d-b61a-9709b8af6c4f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source lot/certified-solution genealogy; actual CsCl/HCl/water/stable-carrier composition and independent chemical-assay limits; original civil use and no-further-use decision; actual nuclides/impurities and detection limits; receiving category with its actual definitions and acceptance tests; net wet-liquid mass excluding containers/solids; independently measured unique first receiver-ready-release wet-liquid event masses with locked original Q in kg plus event IDs/genealogy and disjoint same-basis D_new/FG_new/L_new covering net returns/losses/disposal/downgrading/accepted WIP; activity measurement time/comparison date/time zone/uncertainty and supported decay method; raw/WIP/FG opening/closing stocks and inherited per-exchange vectors; usable retained solution; rejected/Q0/rework loads; metrology co-function and exchange-specific allocation; actual container compatibility/ownership/all returns/retirement; matched source providers and original burden boundary; actual environmental media/species/nondetect policy and later-service corrections |

The native Product flow describes the whole physical liquid residue, not only contained Cs. Declare every qualifier in the data package; actual waste status and receiver class remain explicit.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net wet residual liquid, including its actual constituents but excluding container tare and separated solids. Independently weigh each unique first receiver-ready-release event using cp_release; lock its original wet-liquid kg and event genealogy for Q. Later moisture/composition or activity changes do not redefine that event mass. |
| unit_basis | all inventory rows | actual row property | row unit | Preserve raw quantities; 1 kWh = 3.6 MJ and 1000 Bq = 1 kBq. Volume-to-mass conversion requires independent actual same-matrix density and temperature, not a catalog value. Mass uses group `93a60a57-a4c8-11da-a746-0800200c9a66`. Electricity energy group `93a60a57-a3c8-11da-a746-0800200c9a66` has MJ reference. |
| activity_time | finished, cs_air, cs_water | Radioactivity `93a60a56-a3c8-17da-a746-0800200c9a66` | kBq | Keep isotope-specific activity and measurement/reference time, time zone and uncertainty. Group `93a60a57-a3c8-16da-a746-0800200c9a66` has kBq reference. Do not combine parent/daughter activity as Cs-137, infer chemical mass from activity, or invent half-life data. |
| one_normalization | all inventory rows | actual row property | per reference flow | Assign raw exchange burdens and divide by original positive Q exactly once. Q = sum(m_first,e) over unique first receiver-ready-release events e in net wet-liquid kg; never infer Q from dispatch or stocks. Independently reconcile Q = D_new + FG_new + L_new on the same original event basis; only evidenced zero other post-release destinations permits D_new + FG_new. Old FG, returns, retests and re-release add no Q. For Q zero or unknown retain raw loads without a normalized result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Certified aqueous Cs-137 chloride calibration solution before actual civil use, with source genealogy and inherited burdens |
| starting_condition_role | Original use/residue-generation foreground including metrology co-function, not purchased-waste packing |
| product_classification_scope | Narrow aqueous calibration-residue subgroup of CPC33690; actual receiver low/intermediate category demonstrated |
| recursive_input_rule | Each genuine external residue return retains original cohort and burden history; no new first-release Q |
| upstream_dataset_requirement | Actual certified-solution and container providers; inherited burdens explicitly assigned across service/residue functions without zero-burden or recursive substitution |
| disclosure | Generator handoff gate; off-site transport, treatment and disposal excluded; extended-system claims require their complete compatible links |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_original | all inventory rows | Include original civil use, residual formation, segregation, characterization and on-site handoff. Record actual additions individually; no isotope-production, separation, mixing or treatment operating procedure is prescribed. | `nist-cs137-2019`; `iaea-ssg45-2019` |
| sb_identity | finished | Verify no further intended use, actual source matrix and nuclides, physical liquid state and documented receiving class/criteria. Keep differing nuclides, organic streams and solids separate. | `iaea-ssg45-2019` |
| sb_stocks | all material gates | Preserve opening/closing raw, WIP and released-FG quantities with inherited exchange vectors. Include failed/Q0, start-stop, idle, rejected, cleaning, repeated characterization and rework loads. Cancel only matched internal transfers with equal state, amount, time and inherited vector. | `jrc-ilcd-2010` |
| sb_atomic | all inventory rows | Add each actual energy carrier, chemical, container component, cleaning material, filter, waste stream and environmental species as an individual concrete exchange before claiming completeness. Stock retention and receiver transfer are not environmental discharge. | `iaea-ssg45-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| residue_generation | Original use, residue generation, characterization and handoff | required | Declared segregated aqueous Cs-137 route | foreground | 1 kg reference flow |

Retain separate stage records inside this unit: source receipt/use → residue formation → segregation/containment → characterization/first release → on-site storage/handoff. Matched internal transfers cancel physically; inherited vectors persist. Monitoring rows are conditional on actual releases.

### Process: Original calibration use and residue generation (`residue_generation`)

#### Inputs

##### Product flows

###### Certified aqueous caesium-137 chloride calibration solution (`source_solution`)

Original solution actually used, including its water/acid/carrier once; retain usable raw stock separately. Exact whole-solution UUID and provider remain unresolved; pure salt or an elementary emission cannot replace it.

- Selected flow: Certified aqueous caesium-137 chloride calibration solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_source; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Sources: `nist-cs137-2019`; `iaea-ssg45-2019`

###### Original sealed borosilicate source ampoule (`source_ampoule`)

The actual complete original ampoule accompanying the source solution across the declared receipt gate, before its original civil use. Measure empty-package net mass separately from liquid, track original package/lot ID and actual contaminated glass destination, retained liquid, stocks and any returns. This is distinct from later collection bottles. Its exact whole-package native identity remains unresolved. Preserve physical package input even when source-solution provider burdens already include it; add no second manufacture burden for the same ampoule. No opening or handling procedure is prescribed.

- Selected flow: Original sealed borosilicate source ampoule
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount: Actual attributable source-package exchange from cp_source; retain raw totals and original-cohort assignment, normalized once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_source`
- Sources: `nist-cs137-2019`; `iaea-ssg45-2019`

###### Laboratory deionized rinse water (`rinse_water`)

Only separately measured actual water joining this same documented aqueous stream, with compatible resulting matrix. Water already contained in source_solution is not another input; no rinse quantity is assumed.

- Selected flow: Laboratory deionized rinse water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_streams; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_streams`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Alternating current (`electricity`)

Selected full record is grid-average electricity delivered to the user below 1 kV. Match actual voltage, region, period and loss boundary. Identity supplies no quantity and does not imply combustion.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange from cp_energy; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Complete borosilicate-glass collection bottle with polypropylene screw closure (`bottle_purchase`)

Actual purchased complete bottle, only with documented compatibility and receiving acceptance. Closure is included in the whole assembly. If the actual compatible container differs, this specified-container route does not apply unchanged.

- Selected flow: Complete borosilicate-glass collection bottle with polypropylene screw closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_container; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_container`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Complete borosilicate-glass collection bottle with polypropylene screw closure (`bottle_entrusted`)

First external nonpurchase receipt of this complete bottle specification, retaining owner and inherited manufacturing/use history; not a purchase or a new manufacture event.

- Selected flow: Complete borosilicate-glass collection bottle with polypropylene screw closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_container; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_container`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Complete borosilicate-glass collection bottle with polypropylene screw closure (`bottle_return`)

Genuine external return of an already tracked bottle with original serial/pool and burdens. Internal repositioning is not a boundary receipt.

- Selected flow: Complete borosilicate-glass collection bottle with polypropylene screw closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_container; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_container`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Dry cellulose laboratory wiping tissue (`wipe`)

Only actual tissue used by the scoped campaign; retain composition and contamination destination. No universal consumption or cleanup recipe.

- Selected flow: Dry cellulose laboratory wiping tissue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_streams; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_streams`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed civil radioactivity-instrument calibration (`calibration_service`)

The actual completed metrology co-function from the original source-use campaign. Define one completed service by its instrument, method, acceptance event and reported result; retain its physical workload separately from residue mass. Its UUID/property/unit chain and provider remain unresolved; this co-function is never the reference output.

- Selected flow: Completed civil radioactivity-instrument calibration
- Flow property / unit: Number of completed calibration services / service
- Amount rule: Actual attributable exchange from cp_source; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Sources: `nist-cs137-2019`; `jrc-ilcd-2010`

###### Medium and low radioactive liquid waste (`finished`)

Whole aqueous Cs-137 chloride residual first characterized and released for the declared receiver category. Retain actual native Product flow type and physical waste status, without saleability. Exclude container and separately captured solids from wet-liquid mass. The 1 kg card is the normalized reference event output, not an additional physical Q output beside dispatch, stocks and waste; post-release fates retain the original event basis.

- Selected flow: Medium and low radioactive liquid waste `598474f7-e317-401d-b61a-9709b8af6c4f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Complete borosilicate-glass collection bottle with polypropylene screw closure (`bottle_dispatch`)

Actual complete bottle accompanying residue across handoff gate; tare is separate from liquid. Dispatch of old released liquid or containers creates no new Q.

- Selected flow: Complete borosilicate-glass collection bottle with polypropylene screw closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_container; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_container`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Complete borosilicate-glass collection bottle with polypropylene screw closure (`bottle_to_owner`)

Genuine external return to its owner with contamination/acceptance state; match original receipt. On-site retention is stock, not an outgoing exchange.

- Selected flow: Complete borosilicate-glass collection bottle with polypropylene screw closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_container; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_container`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

##### Waste flows

###### Caesium-137 contaminated borosilicate-glass ampoule waste (`glass_waste`)

Actual separated solid ampoule stream. Liquid already in finished is excluded; residual contamination is distinct from glass mass. No clean cullet identity or default recycling credit.

- Selected flow: Caesium-137 contaminated borosilicate-glass ampoule waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_streams; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_streams`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Caesium-137 contaminated cellulose wiping tissue waste (`wipe_waste`)

Actual contaminated tissue transfer; account for retained liquid exactly once, stock and receiver. Not ordinary paper waste.

- Selected flow: Caesium-137 contaminated cellulose wiping tissue waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_streams; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_streams`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Caesium-137 contaminated borosilicate collection bottle waste (`bottle_retired`)

Actual retired complete bottle with closure, contamination and receiver evidence. Separate liquid from tare and preserve original pool burden; not ordinary glass recycling.

- Selected flow: Caesium-137 contaminated borosilicate collection bottle waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_container; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_container`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

##### Elementary flows

###### cesium-137 (`cs_air`)

Only actual outdoor-air discharge with unspecified subcompartment if evidence matches. Use timestamped activity; no assumed positive release and no automatic zero for nondetect.

- Selected flow: cesium-137 `4d9a8790-3ddd-11dd-9b37-0050c2490048`
- Flow property / unit: Radioactivity `93a60a56-a3c8-17da-a746-0800200c9a66` / kBq
- Amount rule: Actual attributable exchange from cp_emissions; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### cesium-137 (`cs_water`)

Only actual freshwater discharge. Liquid in containment or transferred to a receiver is not a water emission; actual different submedia need another verified record.

- Selected flow: cesium-137 `4d9a8790-3ddd-11dd-9b3b-0050c2490048`
- Flow property / unit: Radioactivity `93a60a56-a3c8-17da-a746-0800200c9a66` / kBq
- Amount rule: Actual attributable exchange from cp_emissions; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### hydrogen chloride (`hcl_air`)

Actual atmospheric HCl, unspecified subcompartment, from qualified monitoring. Distinguish atmospheric HCl from acid matrix retained in liquid; no positive emission factor.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_emissions; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

###### Water vapour to outdoor air (`water_air`)

Only observed net water evaporation crossing the boundary, with balance uncertainty. Water loss does not establish Cs-137 release or chemical purity.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_emissions; retain raw totals and original-cohort assignment, normalized once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `iaea-ssg45-2019`; `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_subdivide | all inventory rows | Keep gross physical V separate from attributable A. Subdivide metrology use, residue-exclusive characterization/containment and common services using actual source lots, meters and duty records first. | `jrc-ilcd-2010` |
| al_shared | shared source and services | Use evidenced determining physical causality per remaining shared exchange; weights across all co-functions sum to one. Liquid mass alone does not partition calibration service. If causality is unavailable retain the exchange and document a study-consistent justified alternative and sensitivity for review; no complete quantitative claim before closure. | `jrc-ilcd-2010` |
| al_residue | finished | Do not invent a positive residue selling price or confuse a disposal-service payment with product revenue. No automatic avoided material, isotope-recovery or radioactive-decay credit. Physical waste status does not erase original source burdens. | `jrc-ilcd-2010`; `iaea-ssg45-2019` |
| al_cohort | released cohorts | Q is the independently measured sum of unique first receiver-ready-release event wet masses in kg. Reconcile the new cohort through disjoint, exhaustive Q = D_new + FG_new + L_new on its original acceptance basis; losses, disposal, downgrading and accepted material returned to WIP remain traced in L_new, never omitted. Only when all other post-release destinations are evidenced zero may D_new + FG_new be used as a bridge. Old FG dispatch, genuine returns, retests and re-release add no Q. Later storage, failed handoff, repeat characterization and real rework correct the original cohort numerator while retaining its original Q; failed/Q0 loads are not discarded. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The authoritative Q = sum(m_first,e) is the independent sum of calibrated net wet-liquid masses in kg over unique first receiver-ready-release events e at the fixed reference gate. Lock each original event mass, identity and genealogy; dispatch, stock changes, returns and repeated release do not define or increase Q. Reconcile Q = D_new + FG_new + L_new at one cut-off on that same original event basis. D_new is the accepted material still held externally after genuine returns, not gross dispatch; FG_new is the new cohort still held on site in the released, receiver-ready state. L_new is the sum of every other disjoint destination of that accepted material, including irreversible loss, disposal/scrap, downgrading, returned quarantine and accepted material in WIP/rework. Preserve each substate rather than treating L_new as waste alone. A returned parcel belongs once to its final D_new, FG_new or L_new state; returned WIP later released again moves between states and adds no acceptance event. Only when every other post-release destination is evidenced zero may Q = D_new + FG_new be used as a two-term reconciliation, never as an independent Q measurement. Incomplete genealogy or unresolved destinations remain gaps rather than a reduced Q.

These are mutually exclusive, exhaustive shares of originally accepted material, expressed in original wet-liquid acceptance kg. Later water uptake, evaporation or composition changes require separate measured physical exchanges and traceable conversion to that original-material basis; added material cannot inflate Q or the original-material partition. Retain surviving accepted material and its lost portion once; do not restore the survivor to its pre-loss quantity while also recording that loss. Keep actual wet-liquid/constituent/elemental balances, evidenced species transformations and time-referenced nuclide/activity ledgers independent from the event-equivalent bridge. An event-equivalent kg is not a current physical stream, an activity-to-mass conversion or a new external output. Preserve uncertainty and unresolved conversions without a fitted closure plug.

Separate opening already-released FG and its later states by original cohort; they never enter the current period's new Q. Subsequent storage, failed handoff, characterization, loss and rework services retain the original positive Q for that cohort. Pre-first-release WIP and failed/Q0 work retain their actual loads and inherited vectors, but create no Q until a genuine first release. Missing original Q prohibits normalization. This accounting requirement supplies no material-handling or nuclear operating method.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | residue_generation | source_solution, source_ampoule, calibration_service | raw event and stock ledger | SKU/lot/certificate; supplier; completed calibration service definition and acceptance event; raw opening/closing usable stock; actual use; no-further-use decision; HCl/water/carrier; assays; source vectors; original ampoule/lot ID and independently measured package tare; source-provider packaging coverage; package stock/return/destination and retained liquid | Trace calibrated net-mass and existing use/certificate records; preserve physical source amount separately from its function allocation. Do not manipulate material to collect PCR data. | kg; composition; activity/time separately | each lot, actual interval and stock reconciliation | actual source/use/cohort period and attributable later services | declared generator, source and receiver | per 1 kg reference flow | calibration; raw events/stock; certificates/receiver records; uncertainty |
| cp_release | residue_generation | finished | raw event and stock ledger | cohort and unique first-event IDs/time; independently measured original event gross/tare/net wet-liquid kg; original locked Q; source genealogy; gross dispatch and genuine returns; disjoint cut-off D_new and receiver-ready FG_new; every L_new substate including loss, disposal/scrap, downgrading, returned quarantine and accepted WIP/rework; opening old released FG and original cohort Q; pre-release WIP and Q0; actual current physical masses and separate original-event-basis conversions; receiving tests/class; assay/nuclides/activity/time/uncertainty | Use calibrated weighing and qualified characterization/receiver records to measure each first receiver-ready event once, independently of dispatch/stocks. Trace each accepted parcel to one final D_new/FG_new/L_new state on its original wet-liquid basis; keep gross return/rework histories and original Q. Reweighing, rework or renewed release never creates Q; retain unresolved destinations/conversions and keep actual physical and activity ledgers separate. | kg; composition; timestamped kBq | each lot, actual interval and stock reconciliation | actual source/use/cohort period and attributable later services | declared generator, source and receiver | per 1 kg reference flow | calibration; raw events/stock; certificates/receiver records; uncertainty |
| cp_energy | residue_generation | electricity | raw event and stock ledger | meter/interval; kWh/MJ; voltage/region/provider; use/characterization duty; idle/start-stop/retest/Q0; shared drivers | Read calibrated meters and matched duty logs; retain raw totals and independent attribution evidence for service/residue functions. Convert kWh to MJ once. | MJ | each lot, actual interval and stock reconciliation | actual source/use/cohort period and attributable later services | declared generator, source and receiver | per 1 kg reference flow | calibration; raw events/stock; certificates/receiver records; uncertainty |
| cp_streams | residue_generation | rinse_water, wipe, glass_waste, wipe_waste | raw event and stock ledger | row/quantity/composition; retained liquid; raw/WIP/FG stock; destination/receiver; species/element partitions; burden; rework/Q0 | Use traceable scales, water meters and receiving records, retaining every stream once. Liquid retained on glass/wipes is not counted again in finished. Do not merge specific exchanges into a basket. | kg; composition/activity separately | each lot, actual interval and stock reconciliation | actual source/use/cohort period and attributable later services | declared generator, source and receiver | per 1 kg reference flow | calibration; raw events/stock; certificates/receiver records; uncertainty |
| cp_container | residue_generation | bottle_purchase, bottle_entrusted, bottle_return, bottle_dispatch, bottle_to_owner, bottle_retired | raw event and stock ledger | serial/pool; bottle/closure specification and compatibility; owner; purchase/entrustment/return/outgoing/retirement; opening/closing stock; cleaning/repair; inherited manufacture vector/use history | Reconcile each count and measured net tare; preserve owner and actual service history. Distinguish first purchased and entrusted receipts from genuine external returns. Assign manufacture over evidenced actual use, never an invented universal reuse count. | kg; count separately | each lot, actual interval and stock reconciliation | actual source/use/cohort period and attributable later services | declared generator, source and receiver | per 1 kg reference flow | calibration; raw events/stock; certificates/receiver records; uncertainty |
| cp_emissions | residue_generation | cs_air, cs_water, hcl_air, water_air | raw event and stock ledger | species/nuclide; final medium/submedium; matched concentration/outlet quantity intervals; load; sampling/activity/reference times; detection limits; uncertainty; nondetect policy; containment/receiver transfers | Use existing qualified monitoring and matched outlet quantities. Preserve actual activity dates and independently supported comparison-date correction. Retain nondetect bounds or missing measurement instead of inventing zero. | kBq for Cs-137; kg for HCl/water | each lot, actual interval and stock reconciliation | actual source/use/cohort period and attributable later services | declared generator, source and receiver | per 1 kg reference flow | calibration; raw events/stock; certificates/receiver records; uncertainty |

All protocols retain unnormalized raw records and independent physical V/attributed A ledgers. Their aggregation denotes the final per-1-kg result after assignment and division by original Q once; never normalize a card again.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_Q | finished | Q = sum(m_first,e) over unique first receiver-ready-release events e, each independently measured in net wet-liquid kg excluding container/solids; Q > 0 for normalization. Reconcile the separate disjoint exhaustive Q = D_new + FG_new + L_new on the original event basis, including all loss, disposal, downgraded and accepted-WIP states. The two-term bridge requires every other post-release destination evidenced zero. Old FG, returns, retests and repeated release add no Q. Zero/unknown Q keeps raw loads without a unit result. | cp_release | original positive Q or explicit unavailable result | `jrc-ilcd-2010` |
| calc_vectors | all inventory rows | Retain physical V and burden A independently for each exchange. Raw consumption carries opening raw burdens plus actual receipts less closing raw burdens. Carry opening WIP vectors forward, add newly attributable loads, retain closing WIP vectors separately and assign released vectors to original cohorts. Closing released FG already belongs to its locked event cohort: do not subtract its burden again. Already-accepted material returned to WIP retains original Q and inherited vectors; re-release transfers state without new Q. Keep it distinct from never-accepted WIP and retain failed/Q0/rework services. Unknown/incompatible inherited vectors block completeness. | cp_source; cp_release; cp_energy; cp_streams; cp_container | cohort exchange numerators | `jrc-ilcd-2010` |
| calc_once | all inventory rows | Normalized exchange = original-cohort attributable exchange numerator / original positive Q in kg. Numerators retain their own units. Later services add dated corrections to that original numerator with the same original denominator; cumulative corrected results replace prior results instead of adding another product. | cp_release; cp_energy; cp_streams; cp_container; cp_emissions | exchange per 1 kg reference flow | `jrc-ilcd-2010` |
| calc_material | source_solution, rinse_water, finished, glass_waste, wipe_waste, water_air | Reconcile opening stock plus external inputs against closing stock, external outputs and evidenced transformations per material and relevant element. Whole liquid wet mass and nonadditive composition partitions are separate. Chemical species may react, while elemental closure on the declared material basis remains required; identify evidenced nuclear transmutation/daughter terms separately where relevant, without an invented decay-mass conversion. Investigate residuals and retain measurement uncertainty. | cp_source; cp_release; cp_streams; cp_container; cp_emissions | whole-material and elemental ledgers | `nist-cs137-2019`; `iaea-ssg45-2019` |
| calc_activity | finished, cs_air, cs_water | Retain separate nuclide activity ledgers with actual measurement/reference dates. Compare stock/transfer activities only at an evidenced common date using applicable certificate/qualified decay method and supported nuclear data; preserve daughter identity and uncertainty. Activity loss is not missing solution mass. Do not force activity conservation across decay or invent kg-to-Bq factors. | cp_source; cp_release; cp_emissions | time-referenced activity reconciliation | `nist-cs137-2019`; `iaea-ssg45-2019` |
| calc_outlet | cs_air, cs_water, hcl_air, water_air | Integrate matched concentration and outlet-quantity intervals only with compatible units and activity dates. Record actual species/final medium. Transfers to containment/receiver are distinct from direct discharge and never counted again as emissions. | cp_emissions | species/medium-specific external loads | `iaea-ssg45-2019` |
| acceptance_event_bridge | all inventory rows | Lock independently measured unique first-release Q in original wet-liquid kg. At the same cut-off D_new is net externally retained accepted material after genuine returns, FG_new is on-site receiver-ready released stock, and L_new contains every other disjoint accepted-material state: losses, disposal/scrap, downgrading, returned quarantine and accepted WIP/rework. Reconcile Q = D_new + FG_new + L_new with exhaustive parcel genealogy; only evidenced zero for all L_new substates permits the two-term bridge. A returned parcel is located once, and re-release from WIP adds no Q. Keep old opening FG and original cohort Q separate. Retain actual wet-liquid/element/species/nuclide ledgers and later exchange conversions independently; event-equivalent quantities are no extra physical outputs or activity-to-mass factors. Unresolved event, state or conversion evidence blocks complete normalization. | original acceptance events; net parcel-state bridge; original cohort quantities | auditable positive event Q and separate physical stock bridge |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | finished | Actual source genealogy, matrix assay, no-further-use decision, receiver class and tests required. Chemical purity, nuclide purity and activity are different claims. Native umbrella identity is not a site certificate. | Source/receiver records; NIST/IAEA scope |
| dq_complete | all inventory rows | No invented mass, activity, isotope mixture, half-life or empirical amount ranges. Add missing atomic exchanges and preserve rejected/Q0/stock burdens. Missing important data prevents a complete dataset, not a zero input. | Raw records, calibration, reconciliation and uncertainty |
| dq_provider | all selected flows | Check physical identity, property/unit chain and provider compatibility separately. Unresolved source-solution/container/solid-waste UUIDs remain explicit. No elementary-emission, clean-glass or generic-chemical proxy. | Full native/provider records and actual boundary |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_reference | finished | Require one uniquely linked 1 kg liquid output, complete qualifiers, actual class proof and whole-residue native identity. Do not substitute useful certified solution, solid waste, handling service or pure isotope emission. | `iaea-ssg45-2019` |
| val_account | all inventory rows | Verify independent unique first receiver-ready-release wet-liquid event masses and locked original Q, plus disjoint exhaustive D_new/FG_new/L_new on the same basis with net returns, losses, disposal/scrap, downgrading and accepted WIP/rework. Reject Q inferred from dispatch or closing-FG movements. Allow a two-term reconciliation only when all other destinations are evidenced zero; keep Q measurement independent and reject repeated release as new Q. Reconcile old opening FG separately and retain original cohort Q for subsequent/failed/rework services and inherited vectors. Normalize once; zero/unknown Q or unresolved states/conversions gives no complete unit result. Check source-to-service/residue attribution and shared weights without fictitious residue value; actual material/species/nuclide balances stay independent. | `jrc-ilcd-2010` |
| val_balances | all material and emission rows | Verify whole-material and elemental closure separately from species transformations and time-dependent activity. Inspect liquid retained in solids, container tare, source-water double counting, actual media and nondetect uncertainty. | `nist-cs137-2019`; `iaea-ssg45-2019` |
| val_limits | all inventory rows | No completeness or cradle-to-grave claim with missing upstream burden, attribution, class/receiver or downstream links. This environmental PCR neither certifies safety nor authorizes radioactive activities or discharge. | `iaea-ssg45-2019`; `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset after actual collection/qualification; background_dataset only with compatible explicit boundary |
| downstream_use | Same documented Cs-137 aqueous-residue route linked to compatible receiving management |
| allowed_use | Physical generator-to-handoff residue inventory with metrology co-function explicit |
| excluded_use | Dose, safety or legal compliance decisions; nuclear procedures; treatment performance; saleability/clearance; other nuclides/forms; full CPC coverage |
| required_metadata | source lot/certified-solution genealogy; actual CsCl/HCl/water/stable-carrier composition and independent chemical-assay limits; original civil use and no-further-use decision; actual nuclides/impurities and detection limits; receiving category with its actual definitions and acceptance tests; net wet-liquid mass excluding containers/solids; independently measured unique first receiver-ready-release wet-liquid event masses with locked original Q in kg plus event IDs/genealogy and disjoint same-basis D_new/FG_new/L_new covering net returns/losses/disposal/downgrading/accepted WIP; activity measurement time/comparison date/time zone/uncertainty and supported decay method; raw/WIP/FG opening/closing stocks and inherited per-exchange vectors; usable retained solution; rejected/Q0/rework loads; metrology co-function and exchange-specific allocation; actual container compatibility/ownership/all returns/retirement; matched source providers and original burden boundary; actual environmental media/species/nondetect policy and later-service corrections |
| required_quality_disclosure | Unresolved nonreference identities/providers; allocation and uncertainty; stock/Q0/return corrections; actual class and monitoring limits; excluded downstream stages |
| update_trigger | Source matrix, isotope impurities, route, receiver/class, Q convention, container or monitoring/provider boundary changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| nist-cs137-2019 | official_guidance | NIST SRM 4233f Cesium-137 Radioactivity Standard Certificate, 25 October 2019, pp.1–2 Tables1–2 and footnotes; https://tsapps.nist.gov/srmext/certificates/4233f.pdf | Actual parent solution; activity versus chemical information/reference time; historical SKU values are not residue defaults |
| ezag-single-solutions | handbook | Eckert & Ziegler Single Nuclide Solutions; retained snapshot 13 October 2026; Nuclitec Accuracy/Purity/Packaging/Carrier and complete Cs-137 entries; https://www.ezag.com/products/isotope-products/isotrak-calibration-sources/standardized-solutions/calibrated-solutions/single-nuclide-solutions/ | Independent producer countercontext: different matrix/containers, chemical purity not certified; no formulation, amount or procedure transferred |
| iaea-ssg45-2019 | official_guidance | IAEA Safety Standards SSG-45, 2019, §§1.4,4.15–4.17,4.31–4.32,4.42–4.43; printed pp.2,33,37,40–41; https://www-pub.iaea.org/MTCD/publications/PDF/PUB1758_web.pdf | Aqueous-waste origins, characterization/segregation/container/receiving context; no classification threshold, operating parameter or authorization |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–257; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and determining causality only; no radioactive-residue allocation coefficient |
