---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.intact-spent-uranium-dioxide-fuel-rods
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Intact individual spent uranium-dioxide PWR fuel rods at plant handover

## 1. Scope and Applicability

This method covers the environmental inventory of complete individual civilian uranium-dioxide PWR spent fuel elements, already separately inventoried at a nuclear power plant, through an identified wet-storage interval to a documented management handover at that plant. The whole object includes fuel, cladding and integral end/structural components. A rod is the reference object in its own right: it never stands for an assembly, contained uranium alone or fragments. IAEA distinguishes a complete fuel element from a set of elements forming an assembly. Historical GAO and ORNL originals document separately inventoried spent rods, including onward delivery of unpunctured full-length rods (`iaea-glossary-2022`, `gao-spent-fuel-2005`, `ornl-full-length-rods-2020`). WCO distinguishes the spent-element subheading from radioactive residues; its wording alone does not prove rod/native applicability (`wco-spent-elements-2022`).

The selected generic rod native has locationOfSupply CN, at-plant location and an origin described as used for nuclear power generation. This UUID binding applies only to actual compatible CN plant delivery. Foreign cases establish that the object and accounting questions exist; they supply no Chinese plant inventory, provider, release rate or operating condition. Before dataset admission, an independent nuclear/LCA expert must adjudicate the native record's serious contrary CPC33710 non-irradiated classification against its generic whole-rod name/comments and the actual spent object. Do not silently treat that metadata as wrong. A new hard conflicting native name, state, route, composition or geography rejects the binding; a qualifier cannot override it.

Exclude fresh fuel, complete assemblies, MOX and other fuel matrices, BWR/research/naval/military fuel, breached or damaged rods, cut rods, fragments, exposed pellets, recovered nuclear materials, generic radioactive residues and treatment-service outputs. The starting gate is after any separate-rod preparation; the method gives no rod removal, disassembly, cutting, recovery, reprocessing, storage-design or safety-limit instructions. Destructive examination, dry storage, off-site transport and disposal are separate scopes. The actual nuclear work and legal designation require the responsible site and nuclear experts' authorization independently of this LCA method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.intact-spent-uranium-dioxide-fuel-rods |
| classification_refs | CPC 3.0 33720; narrower product and route boundary |
| covered_products | Complete intact individual spent UO2 PWR rods at compatible CN plant handover after separately documented wet storage |
| excluded_products | Fresh rods, whole assemblies, other reactor/fuel types, damaged/breached/cut rods, fragments, pellets, recovered material, generic radioactive residue and service outputs |
| representative_product | An unpunctured full-length irradiated UO2 PWR rod with integral cladding/ends and recorded permanent reactor removal, at the declared CN plant gate |
| production_route | Already separate post-irradiation rod receipt and inventory identification; actual wet-storage environmental accounting; documented acceptance/handover, without nuclear-material processing |
| market_state | Complete spent element under declared custody and legal designation; native Product flow type is preserved and implies neither saleability nor suitability as fresh fuel |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Account for the complete spent rod and environmental exchanges attributable to its declared receipt, wet-storage interval and plant handover |
| How much | 1 kg net mass of complete accepted spent rods |
| How well | Intact, unpunctured, full-length UO2 PWR element; traceable mass/state/custody evidence; actual compatible CN plant/native binding and expert admission; no assembly or contained-U substitution |
| How long or cycle | Actual recorded interval with dates and cohort identity; later storage increments retain their original accepted cohort basis and declare their own service interval |
| reference_flow_link | `spent_rod_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Nuclear Fuel Rod `28f5ac8d-dbfb-415d-afd2-36d0860a1cc3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual CN plant and delivery gate; native at-plant/power-generation-origin compatibility; independent disposition of native CPC33710 contrary classification; civilian PWR and UO2 matrix; complete unpunctured full-length rod with cladding and integral ends; rod/cohort identity at an appropriate public resolution; actual irradiation and permanent removal evidence; received/accepted/dispatch/closing-stock dates; whole-rod net mass source/reference date/uncertainty; external water/container exclusion; actual wet state and custody/legal designation; isotopic composition evidence including nuclide/basis/unit/reference date/uncertainty; activity evidence including nuclide/form/unit/reference date/uncertainty; first-acceptance or later-storage mode; unique first-acceptance Q or original-cohort Q0; inherited raw/WIP/accepted-stock burdens; upstream stage register/overlap/exclusion coverage; actual interval and cohort history; actual receiver acceptance; expert approval and hard-native-field admission |

Declare these qualifiers in the data package. The native display and actual Product flow type remain unchanged. Generic identity does not establish a compatible provider or quantitative background. The opposing non-irradiated classification and CN admission limit remain explicit even after a concrete study supplies additional qualifiers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| whole_rod_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_rod_identity traceable mass records for the same entire rod, including cladding/integral ends and excluding pool water, separate containers and cask. A documented design/pre-irradiation record needs compatible scope, actual adjustment evidence and uncertainty. Do not prescribe new handling/weighing, invent rod mass or substitute uranium/heavy-metal/pellet mass. |
| accepted_basis | all inventory rows | Declared row property | per 1 kg reference flow | Use cp_acceptance and cp_cohort_ledger. Q is the sum of unique first-acceptance whole-rod net kg from traceable existing records at the fixed gate, locked to each original event mass basis/reference date and uncertainty. Later dispatch, loss, scope exit or return to pending verification cannot shrink or increase Q. Exclude opening accepted stock, returns/retests and repeated record acceptance from new Q. Reconcile every net destination through acceptance_event_bridge; dispatch plus closing accepted stock is only a conditional zero-other-disposition simplification. Later services use original Q0 and actual increments without fresh acceptance. Missing/zero basis retains raw totals and blocks normalization; no new handling/weighing is prescribed. |
| activity_identity | tritium_air, tritium_freshwater, carbon14_air, cesium137_freshwater | Radioactivity `93a60a56-a3c8-17da-a746-0800200c9a66` | kBq | Preserve nuclide, species/form where known, compartment, interval and activity reference date. Bq/1000 gives kBq. Stored activity is not an emitted exchange; activity, mass and dose are different quantities. No activity-to-mass or default decay conversion is allowed. |
| electricity_identity | storage_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | This native electricity reference is MJ. Convert compatible recorded kWh by multiplying by 3.6; preserve the CN 35–330 kV customer-side grid supply condition. Other voltage, self-generation or supplier routes require their own verified row/background rather than reuse by UUID. |
| water_identity | pool_makeup_water, pool_water_purge | Mass | kg | Use actual net purchased makeup and actual whole liquid purge separately. Circulated pool volume is not net makeup; volume-to-mass needs recorded density/state. Nuclide activity in a purge does not equal purge solution mass or an environmental release. |

## 5. System Boundary

The boundary starts with already separated, identifiable intact spent rods and their inherited records. It accounts for receipt/inventory, actual wet-storage auxiliary exchanges and documented plant handover. Separate generation/fuel-origin, earlier assembly/rod preparation, off-site transport, dry storage, laboratory examination and disposal in the stage register. A foreign historical example cannot fill a missing CN stage or supplier inventory (`gao-spent-fuel-2005`, `ornl-full-length-rods-2020`).

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already separately inventoried intact irradiated civilian UO2 PWR rods at a declared compatible CN plant receipt gate, with actual history, state, mass/date and inherited burdens |
| starting_condition_role | Physical spent-element/custody transfer, without assigning a fresh-fuel function, recovery credit or nuclear processing recipe |
| product_classification_scope | Narrower individual complete spent-element scope within CPC33720; the selected native's CPC33710 contrary metadata remains subject to independent admission |
| recursive_input_rule | Match each same-category transfer by rod/cohort identity, whole mass, state and dates; retain physical quantities at both ends and cancel only genuine internal transfers on aggregation; later storage does not create a new acceptance cohort |
| upstream_dataset_requirement | Link only actual compatible site/provider/time/state backgrounds; preserve origin and raw/WIP/accepted-stock burdens and explicit unlinked gaps. Do not double-add generation or management already included elsewhere. No zero upstream burden follows from spent/waste designation. |
| disclosure | CN gate/native admission; actual completed storage interval; opening/closing raw, WIP and accepted stocks; first acceptance versus later increment; inherited burdens; containers, infrastructure and shared utilities; source monitoring coverage; legal custody, missing stages, receiver and nuclear expert approval |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| whole_element_gate | all processes | Preserve the complete rod as the physical reference entity. Begin only after documented separate-rod receipt; do not replace an assembly by a rod or import a removal/cutting procedure. | iaea-glossary-2022, ornl-full-length-rods-2020 |
| cn_native_admission | receipt_rod, spent_rod_handover | Bind this native only to compatible actual CN at-plant delivery and origin. Independently adjudicate its opposing non-irradiated classification; reject any hard conflicting name/state/route/geography. Foreign sources are object/method evidence, never a CN site inventory or provider. | iaea-glossary-2022, gao-spent-fuel-2005, ornl-full-length-rods-2020 |
| stage_register | all processes | Declare completed gates and dates; separate off-site transport and future treatment/disposal. Keep earlier generation and preparation burdens visible without double counting; unknown coverage is a gap, not zero. | iaea-glossary-2022, ilcd-allocation-2010 |
| route_completeness | rod_wet_storage | Inventory every actual utility, material, secondary waste and source discharge as an atomic exchange. Extend the rows for actual treatment, maintenance, containers and attributable infrastructure; applicable unmeasured modules block a complete dataset. | ilcd-allocation-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rod_receipt | Existing-record receipt and whole-rod inventory | required | Already separately identified intact UO2 PWR spent rods at compatible CN plant gate | Physical receipt and inherited-burden ledger | per 1 kg reference flow |
| rod_wet_storage | Environmental inventory of identified wet storage | required | Actual declared interval and same admitted cohort; no storage operating procedure | Measured auxiliary exchanges, secondary wastes and source releases | per 1 kg reference flow |
| rod_handover | Record-based acceptance and plant handover | required | Unique first gate acceptance from actual authorized records, including newly accepted closing stock and every later net destination; later increments retain original cohort | One unique whole-element reference coordinate, without treating dispatch, return, retest or renewed verification as additional first output | per 1 kg reference flow |

The three activities share one facility/cohort ledger. Keep current physical stock/custody movements separate from original-basis first-acceptance events and attributed burden vectors. Q and the normalized 1 kg handover coordinate are not additional external outputs alongside actual dispatch, closing accepted stock or other dispositions. Match gross dispatch and linked actual returns; internal movements and return to pending verification cancel on aggregation. Here WIP or renewed verification denotes only record/eligibility status of intact whole rods, never material rework, fabrication or nuclear processing. If actual object/state leaves scope, retain its original event/burden history and record the scope exit separately; subsequent excluded operations are not covered by this PCR. The selected emission examples are conditional physical species/compartment rows, not a presumed release list. Add every other actually present exchange; missing monitoring is not zero. No supported CN/site/interval-compatible empirical ranges were established for these amounts; use actual records and retain the disclosed range evidence needs.

### Process: Existing-record receipt and whole-rod inventory (`rod_receipt`)

#### Inputs

##### Product flows

###### Complete incoming spent rod (`receipt_rod`)

An already separately inventoried entire rod, admitted only under the reference qualifiers and expert native/geography decision. Include its integral cladding/ends and inherited records; the actual native Product type does not assert saleability or fresh-fuel suitability.

- Selected flow: Nuclear Fuel Rod `28f5ac8d-dbfb-415d-afd2-36d0860a1cc3`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rod_identity`
- Sources: `iaea-glossary-2022`, `gao-spent-fuel-2005`, `ornl-full-length-rods-2020`

### Process: Environmental inventory of identified wet storage (`rod_wet_storage`)

#### Inputs

##### Product flows

###### Grid electricity for attributable auxiliary loads (`storage_electricity`)

Conditional only for actual compatible CN 35–330 kV customer-side grid supply. Match the actual provider and supply boundary; include verified transformation losses if the meter is downstream. Self-generation or another supply needs a separate compatible flow/background.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_utilities`
- Sources: `ilcd-allocation-2010`

###### Net de-ionised pool makeup water (`pool_makeup_water`)

Conditional on actual net de-ionised water crossing this foreground boundary. Internal recirculation is not another purchase. Verify water quality, state, supply and any on-site production boundary before linking a background.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_utilities`
- Sources: `ilcd-allocation-2010`


#### Outputs

##### Waste flows

###### Spent radioactive ion-exchange resin (`spent_resin`)

Conditional on actual exhausted resin leaving an included water-purification operation. Record one chemically identified resin stream and its actual retained-water/activity state; a non-radioactive general-solid-waste record is incompatible.

- Selected flow: Spent radioactive ion-exchange resin
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_waste`
- Sources: `ilcd-allocation-2010`

###### Spent contaminated particulate air filter (`spent_filter`)

Conditional on actual replacement of one particulate filter in the included auxiliary system. Preserve the entire filter with retained contamination and the actual receiver; do not substitute pure filter material or generic radioactive residue.

- Selected flow: Spent radioactive particulate air filter
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_waste`
- Sources: `ilcd-allocation-2010`

###### Contaminated pool-water purge sent to a receiver (`pool_water_purge`)

Conditional on an actual liquid purge sent to a managed treatment receiver. Preserve the entire solution, actual chemistry/activity date and receiver. This waste transfer is distinct from an authorized environmental discharge and from its contained radionuclides.

- Selected flow: Contaminated de-ionised pool-water purge
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_waste`
- Sources: `ilcd-allocation-2010`


##### Elementary flows

###### Hydrogen-3 release to air (`tritium_air`)

Conditional on a documented source release of hydrogen-3 to air, unspecified, matching this native compartment. Preserve actual chemical-form evidence and route; do not infer a release from stored fuel activity or ambient measurements.

- Selected flow: hydrogen-3 `08a91e70-3ddc-11dd-94b2-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_releases`
- Sources: `iaea-glossary-2022`

###### Hydrogen-3 release to fresh water (`tritium_freshwater`)

Conditional on a documented environmental source release to fresh water. This native cannot stand for a sea-water release, stored pool activity or waste-solution shipment.

- Selected flow: hydrogen-3 `08a91e70-3ddc-11dd-94b6-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_releases`
- Sources: `iaea-glossary-2022`

###### Carbon-14 release to air (`carbon14_air`)

Conditional on a documented source release of carbon-14 to air, unspecified. Preserve actual chemical-form and monitoring evidence; neither a whole-fuel inventory nor a measured carbon mass establishes this exchange.

- Selected flow: carbon-14 `08a91e70-3ddc-11dd-9257-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_releases`
- Sources: `iaea-glossary-2022`

###### Cesium-137 release to fresh water (`cesium137_freshwater`)

Conditional on a documented environmental release to fresh water with matching nuclide/form/medium. Preserve actual detection-limit and uncertainty treatment; do not infer zero or a release from absent data.

- Selected flow: cesium-137 `4d9a8790-3ddd-11dd-9b3b-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Actual attributable collected exchange normalized by the same positive Q or original cohort Q0, per 1 kg reference flow; preserve raw totals, inherited burden attribution and stock state under section 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_releases`
- Sources: `iaea-glossary-2022`


### Process: Record-based acceptance and plant handover (`rod_handover`)

#### Outputs

##### Product flows

###### Complete spent rod at the admitted plant gate (`spent_rod_handover`)

This is the entire physical element under declared custody. Preserve actual spent state, CN at-plant compatibility and the contrary native classification/admission record. The 1 kg card is the normalized unique first-acceptance reference coordinate, not another external mass output alongside dispatch and stock. A subsequent storage increment, linked return or repeated record verification retains the original accepted cohort and Q0; it does not manufacture or newly accept another rod. A later excluded state/disposition remains in the historical event bridge while its subsequent operations leave this method.

- Selected flow: Nuclear Fuel Rod `28f5ac8d-dbfb-415d-afd2-36d0860a1cc3`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_acceptance`
- Sources: `iaea-glossary-2022`, `ornl-full-length-rods-2020`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| direct_assignment | all processes | Subdivide/directly assign exchanges by actual rod/cohort and interval before allocating shared activity. Preserve each physical transfer and waste stream unallocated in the raw ledger. | ilcd-allocation-2010 |
| shared_pool_causality | rod_wet_storage | Allocate each residual shared utility by documented causal service: use recorded attributable energy for thermal load when available; occupancy-time may serve only documented space/time-driven overhead. Mass-times-duration is not a universal proxy for cooling, activity or hazard. Record all served cohorts, drivers, denominator and sensitivity under cp_shared_services; absent a defensible driver, keep raw shared totals and an allocation gap. | ilcd-allocation-2010 |
| no_recovery_credit | receipt_rod, spent_rod_handover | No co-product, economic value, avoided fresh fuel or recovery credit follows from this intact spent-rod handover. Any actual co-function requires separate evidence and review; physical radionuclide activity or contained U cannot allocate away custody transfers. | iaea-glossary-2022, ilcd-allocation-2010 |
| inheritance_no_double_count | all processes | Carry attributable inherited raw/WIP/accepted-stock burdens by cohort, preserving their origin and scope. Do not assign old stock zero burdens or divide only new utility consumption by newly dispatched mass. Later increments retain original accepted Q0 and add only that interval's documented exchanges; do not add the original product/generation inventory again. | ilcd-allocation-2010 |

Unaccepted raw/WIP here means already received intact whole rods whose identity or first gate acceptance remains incomplete; their burdens carry forward without new Q. Separately identify previously accepted rods returned to pending record/eligibility verification: they retain original Q/Q0 and their incremental services, never become never-accepted material and cannot also occupy closing accepted stock. Neither status authorizes fuel fabrication, physical rework or processing. Separate unfinished-cohort exchanges, all newly first-accepted destinations and later service for old accepted cohorts. Normalize only the evidenced accepted-cohort burden share by its original event quantity; never divide the undivided facility total by new Q. Assign each shared exchange and inherited vector once, preserving stock state and original dataset link.

## 8. Foreground Data Collection, Calculation, and Quality Rules

The authoritative Q is the sum of unique first-acceptance whole-rod net masses evidenced by existing traceable records at the fixed gate, locked to the original event basis/reference date and uncertainty. Reconcile Q = D_new + F_new_close + L_new with the fully defined, disjoint original-basis net destinations in acceptance_event_bridge. Opening accepted stocks and old returns keep their original Q0, never new Q. Preserve all post-acceptance services and actual scope-exit records without reducing Q or adding gross repeat movements. No mass disappearance, waste, decay or state change may be inferred to force this reconciliation; unresolved records remain unresolved. WIP here is pending record/eligibility verification of intact rods, not authorization for physical rework. Any broken/cut/damaged/recovered state is outside the category and cannot be admitted by a bookkeeping term. The scope of actual nuclear work and its authorization are unchanged.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rod_identity | rod_receipt | Complete incoming rod and mass | existing operator/manufacturer custody and mass record | public-safe rod/cohort id; UO2 PWR origin; irradiation/permanent-removal evidence; full-length/unpunctured state; integral ends/cladding; net mass and date; record method/uncertainty; external water/container exclusions; CN gate; expert native/classification decision | Reconcile existing traceable entire-rod mass/design records to the same actual object, state and gate; retain documented adjustments and uncertainty. Do not prescribe new nuclear handling or a new weighing operation. Aggregation detail: retain raw whole-rod mass by unique identity; normalize attributable receipt totals per 1 kg reference flow using cp_acceptance | kg | each receipt/state change | actual origin and receipt dates | actual CN plant and admitted cohort only | per 1 kg reference flow | custody/receipt reconciliation; mass source/calibration if existing weighing used; expert state/geography/native admission |
| cp_acceptance | rod_handover | unique acceptance reference output | existing acceptance and stock registers | immutable rod/cohort id; unique first-acceptance date/gate; original net kg/basis/reference date/uncertainty; gross new dispatch and linked returns; new accepted closing stock; opening accepted stock and original Q0; each actual other net disposition/pending-verification stock or scope exit; repeat verification history; original dataset link and mode | Link existing authorized acceptance, custody and stock records without new handling/weighing. Sum each unique first event once to lock Q, then reconcile D_new + F_new_close + L_new on that original whole-rod basis with linked current-state evidence and uncertainty; do not infer Q from remaining stock. Returns/retests/repeated acceptance add no Q. Dispatch plus closing accepted stock alone requires evidence of zero other dispositions. Earlier accepted cohorts and all their later services use original Q0. | kg | Each recorded event/movement and period close | Same declared period; later increments retain original dates | Admitted same-state CN cohort; excluded states/dispositions recorded only as scope exits | per 1 kg reference flow | Unique-event trace; original positive denominator; full net destination and current-state reconciliation; receiver/stock signatures; original dataset/mass evidence |
| cp_cohort_ledger | rod_receipt | stocks, inherited burdens and state/date changes | existing physical and burden ledgers | opening/closing raw/WIP/accepted stock by new/old immutable cohort; actual receipts, gross dispatch/linked returns, internal record-status transfers and external scope exits; original event mass and Q0; current mass/reference date/uncertainty; each inherited burden/source/stage; nuclide/activity dates and mode | Reconcile actual opening stocks + actual receipts/returns = actual closing stocks + gross external dispatch/other exits using existing evidence; retain unexplained differences as findings, not assumed losses. Internal acceptance/pending-verification transfers cancel, and Q is not another physical output. Track current whole-rod mass separately from original event-basis destinations and date-resolved nuclide/activity ledgers; any actual conversion requires supported study evidence. Carry own-foreground vectors once, preserve provider overlap and all incremental original-cohort services. Normalize only the attributable exchanges by original Q or Q0. | kg; original burden/activity units kept separately | Each recorded change and period close | Actual continuous cohort history and selected interval | Same CN plant and actual upstream stage links; scope exit separately bounded | per 1 kg reference flow | Stock bridge, original-basis/current-state evidence, uncertainty, vector/stage overlap checks and unresolved findings |
| cp_storage_utilities | rod_wet_storage | Electricity and makeup water | meters, supplier records and invoices | each meter/flow id; actual supply voltage/route/CN provider; original unit; readings; interval; net makeup; density/state if volume; attribution driver; cohort denominator | Reconcile actual auxiliary meters and supplier records, subtract verified unrelated loads, preserve net water makeup separately from recirculation and link compatible backgrounds. Aggregation detail: attributable exchange totals divided by same Q or Q0 per 1 kg reference flow; preserve raw totals and conversions | MJ; kg, retained separately | each available meter interval and period close | actual wet-storage interval | actual CN plant; electricity UUID only for compatible 35–330 kV customer grid supply | per 1 kg reference flow | meter/record uncertainty, supply compatibility, purchase reconciliation, missing-interval evidence |
| cp_shared_services | rod_wet_storage | Shared storage services | causal attribution workbook | each exchange total; all served cohorts; measured energy or evidenced driver; actual time intervals; occupancy record; denominator; assigned shares; sensitivity | Directly assign first; document a physically causal driver for each remaining exchange and reconcile all shares to its total. Do not derive thermal load or hazard from rod mass/activity by assumption. Aggregation detail: attributable share = exchange total times evidenced cohort driver / all-user driver total; then normalize per 1 kg reference flow with Q or Q0 | original exchange unit; actual driver unit and time | each driver interval and period close | all actual overlap intervals | all users of the same shared system, including out-of-scope users | per 1 kg reference flow | complete user coverage, driver evidence, shares sum to one, sensitivity and expert review |
| cp_secondary_waste | rod_wet_storage | Resin, whole filter and liquid purge | waste transfer and receiver records | separate stream id; chemistry/whole-object basis; retained water; mass; activity/species/date; custody; actual receiver/process; treatment boundary | Reconcile each entire stream to existing site waste and receiver records. Retain physical whole mass separately from contained nuclide activities; verify native flow and receiver before linking a background. Aggregation detail: assign each stream by actual origin/cohort; raw total and stock bridge retained; divide attributable mass by same Q or Q0 per 1 kg reference flow | kg; separate original activity units | each transfer and period close | same actual storage interval | actual site and each receiver | per 1 kg reference flow | stream-specific identity/state, receipt, measurement basis/uncertainty and unresolved-background disclosure |
| cp_source_releases | rod_wet_storage | Each nuclide and receptor exchange | authorized environmental source-monitor records | nuclide; chemical form if known; medium/subcompartment; measured activity; unit; collection interval; activity reference date; method; detection limit; uncertainty; source attribution | Read existing authorized source-release inventory and analytical metadata; distinguish source discharges from ambient concentrations, stored activity and waste transfers. Preserve unmeasured/non-detect coverage explicitly. Aggregation detail: sum compatible activity records only, attribute actual source share and divide by same Q or Q0 per 1 kg reference flow; no default decay adjustment or activity-to-mass conversion | kBq | each reported interval and period close | actual source-monitor interval and reference dates | actual source serving the admitted cohort; exact receptor match | per 1 kg reference flow | source report, laboratory/method evidence, detection limits, nuclide/media/date coverage and uncertain attribution |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| unique_acceptance | spent_rod_handover | Q = sum of traceable existing whole-rod net masses over unique first-acceptance events at the fixed gate, locked to the original mass basis/reference date and uncertainty. Each rod identity contributes once even if later returned, held pending verification, transferred out of scope or repeatedly verified. Opening accepted stock and repeated events never add to new Q. Reconcile the complete acceptance_event_bridge; do not replace Q with net dispatch plus remaining stock or invent a mass/decay correction. Missing/zero Q blocks normalization. | cp_acceptance; cp_rod_identity | locked Q in kg and identity audit | iaea-glossary-2022, gao-spent-fuel-2005 |
| ledger_normalization | all inventory rows | For burden-bearing exchanges, normalize the newly accepted cohort's applicable inherited burden plus all attributable interval exchanges, including later service/loss/scope-exit burdens within the declared scope, by its original locked Q once. Unaccepted cohorts carry forward; earlier accepted-stock services use original Q0 separately and never shift into new Q. Carry inherited own-foreground vectors once and add actual incremental services once; do not re-add provider stages already included by linked datasets. Physical transfer rows retain actual reconciled whole masses without adding inherited transfer quantities; the normalized reference coordinate remains 1 kg. Keep every term/unit/origin/state/date and all unresolved basis evidence. No excluded nuclear operation is made applicable by attribution. | cp_cohort_ledger; cp_acceptance; each row protocol | exchange per 1 kg reference flow | ilcd-allocation-2010 |
| subsequent_storage | all inventory rows | Later normalized increment = actual attributable exchanges of the same original accepted cohort during the declared later in-scope interval divided by original Q0. Preserve Q0 and original event/basis/date even after return, pending verification, changed later destination or repeated record acceptance; do not add original burdens again or shift services to current new Q. WIP denotes record status only. Excluded changed-state/treatment stages remain outside this interval and require separate methods; retain the boundary/custody record and historic accepted burden without treating the new state as eligible output. Unknown/zero Q0 permits only an unresolved raw correction. | original accepted Q0; cp_acceptance; cp_cohort_ledger; each row protocol | incremental exchange per 1 kg original reference flow, with dates | ilcd-allocation-2010 |
| shared_attribution | storage_electricity, pool_makeup_water | After direct assignment, allocated exchange = residual actual shared exchange times evidenced cohort-specific causal driver divided by the driver total for all served cohorts. Use different justified drivers where causality differs; preserve unresolved allocation instead of guessing. | cp_shared_services; cp_storage_utilities | attributable raw exchange in its original unit | ilcd-allocation-2010 |
| recorded_unit_conversion | storage_electricity, tritium_air, tritium_freshwater, carbon14_air, cesium137_freshwater | Compatible electricity MJ = recorded kWh times 3.6; kBq = recorded Bq / 1000. Preserve original unit and scope; neither formula converts activity to mass or invents a physical emission. | cp_storage_utilities; cp_source_releases | compatible unit-correct exchange | |
| physical_nuclide_ledgers | receipt_rod, spent_rod_handover | Reconcile actual whole-rod physical opening stocks + receipts/linked returns with closing stocks + gross external dispatch/other recorded exits, with no duplicate internal acceptance/status transfer and no additional Q output. Use actual state/date masses; original event-basis destination equivalents are a separate bridge, not extra physical mass. Loss, downgrade/waste designation or excluded state must be evidenced and bounded, never invented as a residual or authorization for handling/treatment; unresolved differences remain findings. Nuclide quantity/activity has its own date-resolved ledger: decay or species change needs actual supported study evidence and is not a mass residual. Balance only genuinely conserved quantities; do not force chemical-element/isotope conservation where supported nuclear change alters identity. Never force activity conservation or invent a half-life, activity-to-mass or mass/date adjustment. | cp_rod_identity; cp_cohort_ledger; cp_source_releases | separate physical and nuclide/date reconciliations | iaea-glossary-2022 |
| acceptance_event_bridge | all inventory rows | Lock Q to unique first-acceptance whole-rod masses from existing independent traceable records. For only that newly first-accepted cohort (zero opening accepted stock), reconcile Q = D_new + F_new_close + L_new on the original event mass basis/reference date with evidence and uncertainty for any later-state conversion. D_new is gross eligible external handover dispatch minus linked actual returns; F_new_close is closing accepted stock; L_new covers every other mutually exclusive actual net destination, including intact pending-verification/returned WIP and evidenced out-of-scope custody, downgrade/waste designation or actual loss/state exit absent from both other terms. Actual excluded states, broken/cut/damaged rods or recovery/treatment are scope exits only, never newly admitted operations or eligible product. A returned parcel is removed from net dispatch and occupies its actual final accepted stock/pending/other destination once; gross loops/retests/repeated acceptance add nothing. A purely documentary 100 kg first event with 60 kg net handover, 30 kg accepted stock and 10 kg other recorded custody/status retains Q=100 kg, not 90 kg. Use dispatch plus accepted stock alone only with evidenced zero L_new. Original Q/Q0 and all applicable later services remain; never infer zero loss, physical disappearance, decay or a balancing adjustment. Unresolved basis/stock/destination evidence blocks complete normalization. Q is not an additional external output. | cp_acceptance; cp_cohort_ledger; cp_rod_identity | locked event Q and complete separate original-basis net destination bridge | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_native_admission | reference and received rods | Actual compatible CN at-plant/power-generation origin, full-object state and independent disposition of serious native CPC33710 contrary metadata; no hard field overridden. No compatible provider/process background is implied by flow identity. | cp_rod_identity; full native/admission record; actual plant/receiver records |
| dq_whole_object | all rod records | Trace the same full-length intact unpunctured UO2 PWR rod, cladding and integral ends, with mass/date/uncertainty. State change to a breached/cut/damaged rod or fragment exits this category. | identity/custody/state records; iaea-glossary-2022; ornl-full-length-rods-2020 |
| dq_denominator | all normalized records | Positive unique first-acceptance Q or independently traceable original-cohort Q0; opening stocks, dispatch, returns/retests and raw/WIP burdens reconciled; no normalization when denominator is unavailable. | cp_acceptance; cp_cohort_ledger |
| dq_temporal_species | stored inventory, releases and waste | Actual nuclide/activity reference dates, unit, species/medium and uncertainty; no shared default decay date or mass/activity substitution. | actual analytical and source records; cp_source_releases |
| dq_completeness | all processes | Actual CN site utilities, materials, shared services, secondary wastes, releases, containers/maintenance and attributable infrastructure addressed separately; no absent measurement treated as absent flow. Historical foreign cases are not quantitative backgrounds. | complete stage/flow coverage register; cp_storage_utilities; cp_secondary_waste; cp_source_releases |
| dq_ranges | all variable exchanges | Retain actual collection and unresolved range evidence needs. Foreign historical object cases/definitions do not establish CN plant inventory ranges, rod mass, storage duration, decay factors or release rates. | site measurement coverage and uncertainty; source applicability record |
| dq_expert_scope | complete study | Nuclear experts approve actual state/custody/site and reference compatibility; LCA reviewer approves scope, inheritance, allocation and background links. These do not replace legal/operating/safety authorization. | named expert/reviewer decisions and actual scope, with unresolved issues disclosed |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference_object | receipt_rod, spent_rod_handover | Reject whole-assembly, fresh-fuel, contained-U, fragment, breached/cut/damaged rod, non-UO2/non-PWR or service-output substitutions. Require entire rod/cladding/ends, actual spent state and permanent-removal evidence. | iaea-glossary-2022, ornl-full-length-rods-2020 |
| validate_native_geography | reference binding | Require compatible actual CN at-plant origin/delivery and independent expert decision on contrary native CPC33710 classification. Any unresolved hard conflict or non-CN provider fails admission; US/IAEA principles cannot supply missing CN site facts. | gao-spent-fuel-2005, ornl-full-length-rods-2020 |
| validate_acceptance_stock | all inventory rows | Verify unique first events and locked original-basis Q, then complete disjoint D_new + F_new_close + L_new with net linked returns and every actual other disposition; reject unconditional dispatch-plus-stock, loss reducing Q, repeated acceptance adding Q, or accepted-stock/pending-WIP double location. Keep opening accepted stock/original Q0, inherited raw/WIP/accepted vectors and later services separate from new Q; no lost failed/pending-verification activity. Independently verify actual physical and dated nuclide ledgers, cancelling internal transfers and never adding Q to external outputs. Scope exits remain outside product/processing eligibility. Missing/zero Q/Q0 or unresolved conversion/history retains raw quantities and fails affected complete normalization. | ilcd-allocation-2010 |
| validate_species_units | storage and releases | Keep whole mass, conserved element quantities, stored nuclide/activity and source releases separate; verify actual dates, receptor and units. Reject invented decay factors, per-rod masses and activity-to-mass conversions. | iaea-glossary-2022 |
| validate_inventory_coverage | all processes | Require atomic actual flows, correct selected property/unit, protocols, allocation evidence and compatible provider/background. Unresolved secondary-waste identities or applicable unmeasured modules remain gaps; non-detects and incomplete monitoring do not prove zero. | ilcd-allocation-2010 |
| validate_claim_limits | complete dataset | Declare the actual completed CN gate/interval, review limitations and unlinked stages. Do not claim operating/safety approval, complete fuel-cycle results, foreign case equivalence, final disposal or methodology approval from this inventory check. | iaea-glossary-2022, gao-spent-fuel-2005 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific physical spent-element stage inventory; separately identified subsequent storage increment retains original accepted cohort |
| downstream_use | secondary_dataset; background_dataset only for independently admitted compatible site/state/time/gate scope |
| allowed_use | Environmental inventory linkage for actual compatible CN plant intact individual UO2 PWR spent rods, with expert native/geography admission, whole-rod basis and declared completed interval |
| excluded_use | Fresh fuel, whole assemblies, other fuel/reactor types, non-CN native/provider substitution, nuclear operation/design/safety instructions, recovery credits, destructive examination, uncompleted transport/disposal, or full fuel-cycle claims without all linked stages |
| required_metadata | Actual CN plant/gate and receiver; native contrary-classification/expert decision; rod/cohort state and net mass evidence; irradiation/permanent-removal and activity dates; actual interval; first-acceptance Q or original Q0; opening/closing raw/WIP/accepted stocks and inherited burdens; source units/uncertainties; legal designation; provider/background/stage links |
| required_quality_disclosure | Scientific/site/native qualification; independent review state; actual monitoring and allocation coverage; unresolved stream identities/ranges/backgrounds; mass/isotope/date uncertainty; omitted stages and infrastructure; no quantitative transfer from foreign cases |
| update_trigger | Native hard-field/admission or classification change; site/geography/provider change; fuel/state or whole-object change; acceptance/cohort ledger correction; revised monitoring/analytical evidence; actual interval/boundary or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| iaea-glossary-2022 | official_guidance | IAEA Nuclear Safety and Security Glossary, 2022 (Interim) Edition, downloaded PDF pp.99 and212, printed pp.90 and203; https://www-pub.iaea.org/MTCD/Publications/PDF/IAEA-NSS-GLOweb.pdf | Complete element versus assembly; spent-state and management-stage terminology. No operating, safety, duration, geometry or decay default. |
| gao-spent-fuel-2005 | official_guidance | GAO-05-339, April2005, printed pp.1–2, official Government Publishing Office original: https://www.govinfo.gov/content/pkg/GAOREPORTS-GAO-05-339/pdf/GAOREPORTS-GAO-05-339.pdf | Historical independent evidence of separately inventoried/stored spent rods and distinction from fragments. Not current regulation or a Chinese inventory. |
| ornl-full-length-rods-2020 | literature | ORNL/LTR-2020/8, March2020, introduction and section3, printed pp.1,3; https://info.ornl.gov/sites/publications/Files/Pub138356.pdf | Historical receipt and onward handover of unpunctured full-length spent PWR rods; physical object/gate evidence only. No testing/reprocessing recipes, operating parameters or CN factors adopted. |
| wco-spent-elements-2022 | standard | WCO Harmonized System Nomenclature2022, Chapter28, subheading2844.50, PDFp.11; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0628_2022e.pdf?la=en | Spent fuel elements distinguished from radioactive residues; classification wording only, not proof of rod/native applicability or a CPC3 mapping. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA, Detailed guidance, first edition March2010, section7.9.3, printed pp.257–258; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Direct assignment/virtual subdivision and flow-specific determining physical causality, including time-dependent services. Does not prescribe a nuclear storage driver or numeric factor. |
