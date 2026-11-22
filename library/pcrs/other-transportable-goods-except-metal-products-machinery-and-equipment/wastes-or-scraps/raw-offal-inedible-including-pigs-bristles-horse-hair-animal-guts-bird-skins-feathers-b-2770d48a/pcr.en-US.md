---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.raw-offal-inedible-including-pigs-bristles-horse-hair-animal-guts-bird-skins-feathers-b-2770d48a
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Raw inedible bovine bone collection and first release

## 1. Scope and Applicability

This method covers one physically traceable stream of raw inedible cattle bone arising as an industrial by-product of actual meat production. The foreground begins at the identified separation/collection handover after slaughter or cutting, with raw bone still awaiting the first release of this supply stage. It includes receipt, segregation and sorting, necessary initial cleaning only when performed, actual preservation/chilling, weighing, first quality release, packaging, storage, handling and factory-gate custody handover. It does not instruct animal slaughter or disposal. Animals are not modelled as raised or slaughtered solely to produce bones. Actual husbandry, slaughter and cutting burdens remain in the upstream provider/interface and its documented allocation.

The reference is a wet as-supplied bovine bone batch expressly designated for permitted nonfood industrial use, still unworked or simply prepared and not cut to an article shape. It excludes food/soup bones; edible offal; thermally or chemically degreased bone; bone ash; bone meal or meat-and-bone meal; ossein, gelatine or collagen; bone char; carved articles; human material; rare/protected-source defaults; and other species or mixed offal as the reference. Raw bone for subsequent processing is a Product only when its real supply purpose and destination support that identity; discarded bone remains a separately typed Waste. A disposal charge, zero sale price or a label does not establish zero upstream burden.

UN classification, institutional industrial evidence and supplier evidence are combined transparently to describe a generic narrow method, not one SKU, order or factory. The core raw terminal is distinct from the supplier’s processed bone chips and from food-grade gelatine feedstocks. No composition, water content, yield per animal, recovery rate, shelf life, cold-chain time/temperature, emission factor or statutory hygiene limit is a default. Actual authorization and veterinary decisions govern conforming destinations; they never erase burdens of failed, unauthorized-but-actually-performed, rejected or zero-output work.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.raw-offal-inedible-including-pigs-bristles-horse-hair-animal-guts-bird-skins-feathers-b-2770d48a |
| classification_refs | CPC3.0:39110, accepted narrower raw inedible bovine bone scope under docs/adr/2026-11-22-accept-cpc-39110-raw-inedible-bovine-bone-at-first-release.md |
| covered_products | One traceable wet raw cattle-bone by-product supply stream for permitted nonfood industrial use before deep processing |
| excluded_products | Food/soup bones; edible organs; other species; mixed offal; defatted bone; calcined ash; bone meal; MBM; gelatine; collagen; ossein; bone char; shaped crafts; human material |
| representative_product | 1 kg wet raw inedible bovine bone at its first quality release with actual later gate services separately retained |
| production_route | Actual meat-production by-product separation interface; collection; sorting; conditional initial cleaning and chilling; first release; actual packaging and gate custody |
| market_state | Raw nonfood bovine bone; residual tissue and water recorded; no imposed purity or moisture fraction |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a traceable raw inedible bovine-bone material for its permitted industrial destination |
| How much | 1 kg net wet bone material at first release; packaging excluded |
| How well | Actual lot specification and competent destination acceptance; no universal hygiene or composition threshold |
| How long or cycle | One first release in its declared cohort; record actual service horizon H without assumed lifetime |
| reference_flow_link | released_bone |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw offal, inedible (including pigs' bristles, horse hair, animal guts, bird skins, feathers, bones and ivory) `4d9c6b8c-c040-4b38-86f9-980adb462eec` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cattle taxon and source animal class; anatomical source and lot genealogy; nonfood designation and authorized destination; actual Product or Waste status at each handover; unworked or simply prepared state without deep processing; residual meat fat and marrow on the whole supplied bone; free water versus tissue water versus mineral structural water; wet mass and tare at the declared gate; first quality release Q and original cohort Qc; actual site geography provider and upstream allocation; actual chilling state and time history; opening and closing raw WIP FG physical stocks and inherited vectors; gross dispatch returns losses and original delivery links; each package and reusable-container balance; native flow restrictions and precise reference unit; observed service horizon H and unobserved later service |

The data package must declare every qualifier in reference-flow comments, process notes or equivalent fields. The official family name supplies an identity container only; this method selects one bovine-bone stream and does not authorize other family members.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| measurement_reference | reference product | Mass | kg | Q is net wet whole-bone mass first released in the cohort, determined by calibrated gross-minus-tare weighing. Do not infer kg from animal count, bone count, secondary density or assumed composition. |
| measurement_once | all inventory rows | Actual native extensive property | declared original unit | Preserve unnormalized raw amounts; convert units and integrate only true rates before attribution. Each card uses the single report_once N/Qc result. H is an observation window, never a second divisor. |
| measurement_wet | raw_bone | Mass | kg | Use one whole wet material account. Residual meat, fat, marrow, protein, minerals, tissue water and free water are non-additive composition subaccounts. Independent measurements constrain elements and phases; mineral hydroxyl/structural water is not free washing water. |
| measurement_energy | all inventory rows | Energy | MJ | Meter actual electricity and convert kWh to MJ by 3.6 once. Metering uses technical Energy; shared MJ/kWh unit support cannot establish a supplier property. The selected fixed-version electricity original independently declares Net calorific value; retain it only for that verified supply identity. Other providers require independent verification. External heat requires one energy account and measured carrier mass/state/enthalpy/return bridge; do not invent a boiler or its fuel. |
| measurement_species | all inventory rows | Mass | kg | Determine each actual molecular species and receiving medium independently. COD, TOC, TN, ammonia-N and odour units are indicators, not molecular emission masses. Do not use a mass residual to fit two unknowns or emit all biological carbon by assumption. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Separated raw bovine bone awaiting first supply release at one documented collection interface after actual slaughter/cutting |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 39110 raw inedible cattle-bone subset, not an entire-leaf coverage claim |
| recursive_input_rule | Same-category receipts retain provider, original state and inherited vectors. Previously released raw bone cannot be relabelled as newly produced by receipt/reinspection; handling-only service uses its original Qc. |
| upstream_dataset_requirement | Trace actual animal husbandry, live-animal transport, slaughter, meat cutting/separation and their allocation into one compatible upstream provider at this handover. Add only omitted operations; disclose unavailable providers without silently zeroing them. |
| disclosure | Wet basis; legal/use designation; separation and release events; inherited raw/WIP/FG vectors; original cohort Qc; physical V versus attributed A; actual observation horizon H |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | all processes | Use the actual collection-to-gate route. Initial cleaning may remove loose contamination but must not conceal thermal rendering, chemical degreasing, hydrolysis, demineralisation, drying to bone chips, grinding to meal or shape cutting. If such a conversion occurred, preserve its actual burden and classify the changed terminal separately; it is not conforming raw bone. | un-cpc3-2025; un-cpc3-2026; mla-bone-disposition; ilcd-allocation-2010 |
| boundary_origin | raw_bone | Require a traceable bovine lot and documented nonfood destination. Preserve actual live-animal/meat-system burdens and allocation at separation. Zero price, waste wording, a handling fee or recovered status cannot set a zero provider or create avoided-production credit. A true discarded Waste cannot replace the raw Product input/output UUID. | ec-animal-by-products; ilcd-allocation-2010 |
| boundary_q | released_bone | Q sums only NEW net wet mass at the first whole-batch quality release. Conforming closing FG is already part of Q: never add it again as production. Receipt, packaging, storage, shipment, return and retest do not create Q. For current manufacture Qc=Q; subsequent services use each original cohort Qc. At Qc=0 retain real burdens, stocks and history with no unit result. | ilcd-allocation-2010 |
| boundary_stocks | all inventory rows | Keep physical opening/closing raw material, WIP, rejected stock, equipment charge and FG separate from inherited per-exchange environmental vectors. F is genuine newly occurring burden; X cancels only a proven OTHER same-side duplicate event. New cleaning water, repair, replacement, leakage and rework are F, never X. Transfer each physical quantity and vector once; do not equate stored kg with environmental burden. | ilcd-allocation-2010 |
| boundary_fg | fg_service | Retain opening/closing FG, gross dispatch and actual external returns by original release cohort. Reverse an original delivery once in the custody ledger for a genuine return, while retaining its historic manufacturing burden. New cleaning/repacking/cooling/rework adds actual F to original Qc. Combine preparation and FG gates only by cancelling their paired internal release transfer and vector. Report unobserved future service beyond H. | ilcd-allocation-2010 |
| boundary_gross | all inventory rows | Physical gross V and environmental attribution A are separate channels. All real waste, emissions, repair/replacement and carrier returns keep V/Qc against their actual originating cohort; economic/service shares cannot shrink their mass. Origin partitions must be non-overlapping and sum to observed total V. Whole wet mixture and its components are alternative or bridged non-additive representations with one actual provider. | ilcd-allocation-2010 |
| boundary_pack | fg_service | For EACH PE liner and HDPE crate use disjoint empty, attached WIP/FG and reusable stock accounts: opening + purchases + first non-purchase external receipts + true returns received = closing + gross shipments + other external exits + waste. First receipts include packaging with incoming bone, separately borrowed or freely transferred, whether or not a supplier inventory covers it. True returns require the SAME article linked to an earlier dispatch from THIS site; unlinked receipts remain first receipts. Internal reuse cancels. Record ownership, prior service and supplier coverage; actual purchase, transport and service burdens occur once, with unavailable provider data explicitly pending. | ilcd-allocation-2010 |
| boundary_actual | all processes | Include all actual failed/zero-output runs, start-stop, idle cooling, trials, cleanup, rework, inspection and rejected/unauthorized activity. A quality or veterinary gate controls saleable output and destination only. Declare each additional actual purchased formulation, component, fuel, heat carrier, refrigerant, waste and gas species as its own atomic card and collection event before claiming completeness. | ilcd-allocation-2010 |
| boundary_water | all processes | Close wet material, total physical mass and relevant C/N/P/Ca/S balances independently; record free, tissue-bound, phase-change and mineral structural water without assuming a reaction. Water meters provide integrated volume unless explicitly rate meters; density requires independent substance-specific state measurement. Refrigeration condensate is not boiler condensate. Any real external heat-carrier Product return retains actual mass, enthalpy, state and supplier water/energy agreement. | ilcd-allocation-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bone_preparation | Collection sorting and first raw-bone release | required | Actual separation handover to first release | foreground_manufacturing | Q kg |
| fg_service | Postrelease packaging storage and handover | conditional | Actual postrelease services in H with original cohorts | foreground_service | original Qc kg |

Each card’s amount rule references the one report_once result. Raw physical V and environmental A remain separate; collection never predivides. Conditional occurrence/absence requires actual evidence; unmeasured is not zero. Add atomic cards for every additional actual exchange; repeated FG species rows record disjoint postrelease events only.

### Process: Collection sorting and first raw-bone release (`bone_preparation`)

#### Inputs

##### Product flows

###### Separated raw bovine bone received (`raw_bone`)

Weigh the complete wet supplied bone with residual meat/fat/marrow and record source slaughter/cutting interface and the inherited per-exchange vector. Receipt alone is not new production. The incoming cohort must be distinguishable from previously released FG; disclose all raw/WIP losses and rejects. The native Product family expressly includes unworked/simply prepared bones and is at plant with unspecified treatment; no CAS, fixed grade, species or geography is supplied. Here one actual bovine-bone lot alone is selected, not a bundle of bristles/hair/guts/feathers/ivory. Its official family display does not widen this method. Keep origin, anatomical part, nonfood designation, residual tissue/water, actual treatment and provider in this card’s dataset context; discarded Waste is not this Product.

- Selected flow: Raw offal, inedible (including pigs' bristles, horse hair, animal guts, bird skins, feathers, bones and ivory) `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bone`
- Sources: `un-cpc3-2025`; `ec-animal-by-products`; `ilcd-allocation-2010`

###### Actual refrigerated inbound road service (`inbound_transport`)

Conditional: use only when this service crosses the selected upstream handover and is not already in the bone provider. A same-site separation has no invented truck leg. Native refrigerated lorry service describes collection/slaughterhouse-to-plant-gate transport and a global industry-average interface. Its illustrative200km/0.2t-km is an expert estimate, never a site default. Exact reference is mass*distance in kg*km; t-km converts by1000. Record actual payload, route, distance, temperature service and provider, including empty-trip responsibility; do not duplicate provider fuel/refrigerant burdens in foreground.

- Selected flow: Refrigerated freight transport by lorry `23859e16-623e-4ece-8994-d9af546ba56c`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `ilcd-allocation-2010`

###### Collection sorting and first cooling electricity (`preparation_electricity`)

Meter collection equipment, sorting, weighing, actual refrigeration, ventilation and electrically heated cleaning separately by operation before common-meter reconciliation. Retain start-stop, idle, rejected batches and Q0 use. Native identity is CN grid-average consumption-mix AC below1kV delivered to the user; only that actual supply may use this UUID. It is not hydro-only power, generation at a plant or a transformation service. Different voltage/geography/provider requires a compatible identity and explicit gap until verified; actual electricity is still recorded. Reference property is energy/MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value (electrical energy) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `ilcd-allocation-2010`

###### Initial bone cleaning water (`initial_cleaning_water`)

Conditional initial rinse only if actually performed and still simple preparation; record fresh inlet, recycled internal water, adherent water and separate effluent. An actual hot degreasing/extraction operation changes the terminal and is outside this method. Native Product is treated potable municipal tap water at plant/to consumer, Mass/kg, with no fixed geography. Its secondary0.001m3-per-kg property is not an independently measured site density. Use actual mass or independent state-specific density for volume conversion; do not bind raw, recycled or untreated water to it.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `ilcd-allocation-2010`

###### Equipment and collection-area wash water (`hygiene_water`)

Record actual container, sorting-table, floor and collection-equipment cleaning water including unsuccessful work and cleanup. Do not deduct genuinely new wash water as duplicate or count internally reused water as a new external purchase. Native Product is treated potable municipal tap water at plant/to consumer, Mass/kg, with no fixed geography. Its secondary0.001m3-per-kg property is not an independently measured site density. Use actual mass or independent state-specific density for volume conversion; do not bind raw, recycled or untreated water to it.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `ilcd-allocation-2010`

###### Purchased50% caustic cleaning solution (`caustic_solution`)

Conditional equipment/floor hygiene input, not a bone demineralisation or hydrolysis recipe. Weigh the entire purchased solution once; in-house dilution records actual added water, mixing electricity and loss. Native industrial sodium hydroxide solution50% at plant uses total solution Mass/kg, not active NaOH mass. Its source-specific references support identity only. Apply only to genuinely purchased50% solution; record carrier water and assay in non-additive subaccounts and add separately only actual dilution water. Other formulations require a separate identity.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulations`
- Sources: `ilcd-allocation-2010`

###### Purchased sodium hypochlorite disinfectant solution (`hypochlorite_solution`)

Conditional hygiene input only when actually used. Record the complete supplier formulation and solution mass once; available-chlorine assay is a non-additive subaccount, not a second input or a universal concentration. The complete solution mass basis must be established before binding a supplier identity; an active-substance object cannot stand for the whole formulation.

- Selected flow: Sodium hypochlorite aqueous disinfectant solution
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulations`
- Sources: `ilcd-allocation-2010`

###### Actual refrigeration ammonia makeup (`ammonia_makeup`)

Conditional ammonia system only. Reconcile opening charge + external makeup + recovered receipt against closing charge + recovered external transfer + actual leakage + waste. Internal recirculation is not consumption. Record actual service allocation separately from gross charge/loss. Native ammonia NH3, CAS7664-41-7, permits refrigerant use, Mass/kg, without a fixed route/grade/geography. Apply only to the actual anhydrous ammonia charge/makeup, not aqueous ammonia, ammonia-N, salts or total refrigeration service. Record actual purity/state and supplier; do not infer a required refrigerant from this optional card.

- Selected flow: Ammonia `9874382d-672c-4601-a3ce-9a4ae21e663b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources: `ilcd-allocation-2010`

###### Stainless-steel sorting-table replacement (`sorting_table_replacement`)

Conditional actual replacement article with measured mass, alloy/composition, assembly provider and installed/retired dates. Steel stock alone is not the manufactured table. Retain actual replacement physical V and lifetime/service burden ledger without assuming life or fixed mass; enumerate each other actual equipment/component separately.

- Selected flow: Manufactured stainless-steel sorting table
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance`
- Sources: `ilcd-allocation-2010`

###### Mineral lubricating oil for handling equipment (`lubricating_oil`)

Conditional complete purchased oil formulation, not base oil plus duplicated additives. Record actual oil type and mass, spent oil and leaks separately. A fully synthetic PAO oil must not be substituted for an actual mineral-oil formulation.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance`
- Sources: `ilcd-allocation-2010`

##### Elementary flows

###### Actual atmospheric oxygen uptake (`oxygen_uptake`)

Conditional chemically demonstrated net O2 uptake in actual biological change, not the entire circulating ventilation-air volume. Do not infer uptake from COD or balance two unknown gas/water terms with one residual. Keep inert carrier air outside net material accounting unless measured and explicitly bridged. Native oxygen CAS7782-44-7 is an Elementary resource from air, Mass/kg. This binding is only molecular O2 actually taken from air; the native liquid-oxygen, dissolved-reagent and dioxygenyl-ion aliases do not expand that medium/species. It is neither a purchased oxygen Product nor oxygen emitted to air, and has no assumed uptake rate.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `ilcd-allocation-2010`

#### Outputs

##### Product flows

###### First released raw bovine bone (`released_bone`)

The sole reference output: NEW first-overall-released wet bone Q includes conforming closing FG. Record the release event, specification, accepted nonfood destination and actual wet net mass. Rejects and previous releases cannot be relabelled into Q; later custody/service movement carries this original cohort. The native Product family expressly includes unworked/simply prepared bones and is at plant with unspecified treatment; no CAS, fixed grade, species or geography is supplied. Here one actual bovine-bone lot alone is selected, not a bundle of bristles/hair/guts/feathers/ivory. Its official family display does not widen this method. Keep origin, anatomical part, nonfood designation, residual tissue/water, actual treatment and provider in this card’s dataset context; discarded Waste is not this Product.

- Selected flow: Raw offal, inedible (including pigs' bristles, horse hair, animal guts, bird skins, feathers, bones and ivory) `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `un-cpc3-2025`; `ec-animal-by-products`; `ilcd-allocation-2010`

##### Waste flows

###### Discarded bovine bone (`rejected_bone`)

Actual rejected/spoiled bone sent to its permitted treatment, measured as the whole wet stream with residual tissue; no Product substitution or credit. Require a whole wet Mass reference for discarded bone; a chemical-element-content property cannot replace that physical basis.

- Selected flow: Discarded raw bovine bone
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-allocation-2010`

###### Separated inedible bovine flesh residue (`flesh_residue`)

Conditional separately collected actual tissue removed in initial sorting; record wet mass, attached fat and moisture as non-additive composition. It is not the residual tissue already included in the whole bone or the suspended fraction already in gross wastewater. If no independent stream exists, retain its mass only in its actual parent stream.

- Selected flow: Inedible bovine flesh residue
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-allocation-2010`

###### Captured raw bone fines (`bone_fines`)

Conditional loose fines physically captured during collection/handling, not manufactured bone meal. Weigh wet material with documented state; do not duplicate fines in effluent or rejected bone. Actual grinding is outside this raw route.

- Selected flow: Raw bovine bone fines
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-allocation-2010`

###### Organic collection and cleaning wastewater (`organic_wastewater`)

One actual gross wet wastewater stream sent to one documented provider. Retain measured flow, independent density, dissolved/suspended matter and COD/TOC/TN as distinct indicators. Do not add constituent water, suspended flesh or pollutant molecular masses again to the whole-waste mass. On-site treatment, if actual, needs its full own atomic inventory and actual species, never a hidden zero.

- Selected flow: Bovine-bone collection wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `ilcd-allocation-2010`

###### Refrigeration condensate sent to drain (`refrigeration_condensate`)

Conditional actual condensate or defrost water sent separately to drain; identify atmospheric moisture, product moisture and added water origins independently. If joined into organic_wastewater before the chosen boundary, use a non-additive subaccount there instead of a second gross waste. This is not evaporation-process or steam-return condensate.

- Selected flow: Refrigeration condensate wastewater
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `ilcd-allocation-2010`

###### Discarded ammonia refrigerant (`spent_ammonia`)

Conditional actual discarded refrigerant leaving for authorized treatment. Distinguish recovered Product return, actual molecular leakage and remaining charge; do not select ammonia-N or chemically unrelated amine waste. Each external Product return requires its own actual identity and gross mass.

- Selected flow: Spent anhydrous ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources: `ilcd-allocation-2010`

###### Retired stainless-steel sorting table (`retired_table`)

Conditional complete retired article; retain gross mass, actual alloy/components and destination. Do not silently use a316/430 external scrap identity when grade and retirement route do not agree. Any dismantled separate components require non-overlapping measured partitions.

- Selected flow: Discarded stainless-steel sorting table
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance`
- Sources: `ilcd-allocation-2010`

###### Spent mineral lubrication oil (`spent_oil`)

Conditional weighed oil actually removed from handling equipment. Require actual used mineral oil from this handling operation with its contamination and treatment destination recorded. Retain actual spill species/media separately when present; do not invent an emission from all lubricant consumed. Native used lubricating oil is a Waste at its generation point, Mass/kg, covering petroleum-based or synthetic oil contaminated through use, with treatment unspecified. This row selects only actual spent mineral oil from handling equipment; keep full contaminated waste mass and actual treatment provider, without assuming recycling, combustion, a fixed assay or credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance`
- Sources: `ilcd-allocation-2010`

##### Elementary flows

###### Ammonia refrigerant leakage (`ammonia_leak`)

Conditional, measured at the actual receiving air compartment and release time. Actual NH3 CAS7664-41-7 leakage only; do not sum both charge-balance loss and the same leak meter. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources: `ilcd-allocation-2010`

###### Biological ammonia emission (`ammonia_decomposition`)

Conditional, measured at the actual receiving air compartment and release time. Actual NH3 CAS7664-41-7 from decomposition, separate from refrigerant origin. Total ammonia-N or salts are not NH3 mass. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `ilcd-allocation-2010`

###### Hydrogen sulfide emission (`hydrogen_sulfide`)

Conditional, measured at the actual receiving air compartment and release time. Actual H2S CAS7783-06-4 only; neither total sulfur, mercaptans nor odour units. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `ilcd-allocation-2010`

###### Biogenic methane emission (`biogenic_methane`)

Conditional, measured at the actual receiving air compartment and release time. Actual CH4 CAS74-82-8 with evidenced biological carbon origin; not total organic carbon, biogas volume or whole carbon loss. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Biogenic methane to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `ilcd-allocation-2010`

###### Biogenic carbon dioxide emission (`biogenic_co2`)

Conditional, measured at the actual receiving air compartment and release time. Actual gaseous CO2 CAS124-38-9 with biological origin. No automatic conversion of retained bone carbon or carbonate mineral carbon to a biogenic emission. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Biogenic carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `ilcd-allocation-2010`

###### Water vapour leaving the boundary (`water_evaporation`)

Conditional, measured at the actual receiving air compartment and release time. Actual H2O CAS7732-18-5 net evaporation after independent inlet/outlet humidity and moisture accounting; not steam purchase, liquid water or structural hydroxyl. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `ilcd-allocation-2010`

### Process: Postrelease packaging storage and handover (`fg_service`)

#### Inputs

##### Product flows

###### Internal first-release bone transfer (`released_bone_transfer`)

Receive the paired internal released_bone quantity and its inherited vector once. This transfer cancels on the combined gate and is not a second purchase/provider or another Q. Opening FG retains historical Qc and burden. The native Product family expressly includes unworked/simply prepared bones and is at plant with unspecified treatment; no CAS, fixed grade, species or geography is supplied. Here one actual bovine-bone lot alone is selected, not a bundle of bristles/hair/guts/feathers/ivory. Its official family display does not widen this method. Keep origin, anatomical part, nonfood designation, residual tissue/water, actual treatment and provider in this card’s dataset context; discarded Waste is not this Product.

- Selected flow: Raw offal, inedible (including pigs' bristles, horse hair, animal guts, bird skins, feathers, bones and ivory) `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-allocation-2010`

###### Actual returned raw-bone product (`returned_bone`)

Conditional genuine external return only while still this raw Product and legally eligible for the intended nonfood route. Link original delivery reversal, wet mass change, original Qc and all historic burdens; a rejected waste return needs the actual Waste identity instead. Reinspection does not create Q. The native Product family expressly includes unworked/simply prepared bones and is at plant with unspecified treatment; no CAS, fixed grade, species or geography is supplied. Here one actual bovine-bone lot alone is selected, not a bundle of bristles/hair/guts/feathers/ivory. Its official family display does not widen this method. Keep origin, anatomical part, nonfood designation, residual tissue/water, actual treatment and provider in this card’s dataset context; discarded Waste is not this Product.

- Selected flow: Raw offal, inedible (including pigs' bristles, horse hair, animal guts, bird skins, feathers, bones and ivory) `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-allocation-2010`

###### Postrelease cooling and handling electricity (`fg_electricity`)

Actual service electricity in H, separately metered or causally assigned to original cohorts, including idle cooling, returns, repacking and failed inspection. Never absorb all FG operations into a production-only denominator or add closingFG again to Q. Native identity is CN grid-average consumption-mix AC below1kV delivered to the user; only that actual supply may use this UUID. It is not hydro-only power, generation at a plant or a transformation service. Different voltage/geography/provider requires a compatible identity and explicit gap until verified; actual electricity is still recorded. Reference property is energy/MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value (electrical energy) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_energy`
- Sources: `ilcd-allocation-2010`

###### Postrelease package and area wash water (`fg_water`)

Actual new wash water for postrelease custody service and reusable crates; assign to original cohort Qc while preserving full physical V. Do not erase it as internal reuse or repeat manufacture. Native Product is treated potable municipal tap water at plant/to consumer, Mass/kg, with no fixed geography. Its secondary0.001m3-per-kg property is not an independently measured site density. Use actual mass or independent state-specific density for volume conversion; do not bind raw, recycled or untreated water to it.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_water`
- Sources: `ilcd-allocation-2010`

###### Purchased PE liner bag (`liner_purchase`)

Conditional actual purchased liner article. Reconcile empty/attached stock, gross shipment and waste. It remains outside net bone Q. Native PE bag, CAS9002-88-4, Mass/kg; one supplied liner bag is the article. Record polymer grade, additives, dimensions and measured tare. It does not cover laminate, paper or an unspecified packaging collection; count requires measured lot-specific article mass.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`



###### Previously dispatched PE liner genuinely returned (`liner_return_received`)

Only a genuine return of the same article linked to an earlier dispatch from this site. Retain gross kg, inherited history and actual new return transport/services without reacquiring manufacture. Unlinked receipts use liner_first_receipt.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`


###### PE liner first non-purchase receipt (`liner_first_receipt`)

Actual PE liner received with bone, separately borrowed or freely transferred. Record physical mass, ownership, prior service, supplier coverage and actual uncovered manufacture, transport and service once; missing provider data stays pending. This is not a new bone release or an unproven return.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### Purchased reusable HDPE crate (`crate_purchase`)

Conditional new manufactured container; retain capital/service allocation separately from actual purchased physical mass. Internal reuse is not purchase; no default trips or lifetime. Native Plastic crate is one supplied article, Mass/kg, with no fixed polymer/grade/route/geography. The CPC bags classification is an isolated taxonomy defect; the basename and unit consistently identify a crate, not resin or a bag. Restrict here to an actual documented reusable HDPE crate; retain its complete manufactured-article provider and measured mass, service history and repair.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`


###### HDPE crate first non-purchase receipt (`crate_first_receipt`)

Actual HDPE crate accompanying bone, borrowed separately or freely transferred, not a proven same-article return. Record gross kg, ownership, prior service and supplier coverage regardless of coverage availability; include actual uncovered manufacture, transport and services once.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### Reusable crate returned from outside (`crate_return_received`)

Only the SAME crate previously dispatched from THIS site qualifies; unlinked receipts use crate_first_receipt. Conditional actual external return, measured by article identity and mass with inherited history. Do not reacquire manufacturing burden or count internal reuse as this inflow. Native Plastic crate is one supplied article, Mass/kg, with no fixed polymer/grade/route/geography. The CPC bags classification is an isolated taxonomy defect; the basename and unit consistently identify a crate, not resin or a bag. Restrict here to an actual documented reusable HDPE crate; retain its complete manufactured-article provider and measured mass, service history and repair.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### Postrelease actual refrigeration ammonia makeup (`fg_ammonia_makeup`)

Only actual postrelease events in H assigned to original cohort Qc, disjoint from the preparation event ledger. Conditional ammonia system only. Reconcile opening charge + external makeup + recovered receipt against closing charge + recovered external transfer + actual leakage + waste. Internal recirculation is not consumption. Record actual service allocation separately from gross charge/loss. Native ammonia NH3, CAS7664-41-7, permits refrigerant use, Mass/kg, without a fixed route/grade/geography. Apply only to the actual anhydrous ammonia charge/makeup, not aqueous ammonia, ammonia-N, salts or total refrigeration service. Record actual purity/state and supplier; do not infer a required refrigerant from this optional card.

- Selected flow: Ammonia `9874382d-672c-4601-a3ce-9a4ae21e663b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_refrigerant`
- Sources: `ilcd-allocation-2010`

##### Elementary flows

###### Postrelease atmospheric oxygen uptake (`fg_oxygen_uptake`)

Actual disjoint postrelease uptake in H uses the original cohort Qc. Conditional chemically demonstrated net O2 uptake in actual biological change, not the entire circulating ventilation-air volume. Do not infer uptake from COD or balance two unknown gas/water terms with one residual. Keep inert carrier air outside net material accounting unless measured and explicitly bridged. Native oxygen CAS7782-44-7 is an Elementary resource from air, Mass/kg. This binding is only molecular O2 actually taken from air; the native liquid-oxygen, dissolved-reagent and dioxygenyl-ion aliases do not expand that medium/species. It is neither a purchased oxygen Product nor oxygen emitted to air, and has no assumed uptake rate.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_species`
- Sources: `ilcd-allocation-2010`


#### Outputs

##### Product flows

###### Raw bovine bone physically dispatched (`dispatched_bone`)

Gross physical gate handover by original cohort, destination, measured wet mass and condition. It is not the reference production row and does not redefine Q. Account for moisture change, rejection and genuine returns separately; disclosed service horizon includes actual storage/handling to this handover. The native Product family expressly includes unworked/simply prepared bones and is at plant with unspecified treatment; no CAS, fixed grade, species or geography is supplied. Here one actual bovine-bone lot alone is selected, not a bundle of bristles/hair/guts/feathers/ivory. Its official family display does not widen this method. Keep origin, anatomical part, nonfood designation, residual tissue/water, actual treatment and provider in this card’s dataset context; discarded Waste is not this Product.

- Selected flow: Raw offal, inedible (including pigs' bristles, horse hair, animal guts, bird skins, feathers, bones and ivory) `4d9c6b8c-c040-4b38-86f9-980adb462eec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `un-cpc3-2025`; `ilcd-allocation-2010`

###### PE liner leaving on gross shipments (`liner_dispatched`)

Actual attached packaging leaves with gross physical product shipment, including re-shipments. This is a custody transfer of the same purchased article, not a coproduct credit or product Q. Native PE bag, CAS9002-88-4, Mass/kg; one supplied liner bag is the article. Record polymer grade, additives, dimensions and measured tare. It does not cover laminate, paper or an unspecified packaging collection; count requires measured lot-specific article mass.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`


###### PE liner returned to external owner (`liner_external_return`)

Actual separate return to an external owner, excluding packaging already counted on bone shipments. Retain gross kg and actual return transport/service once; no credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### HDPE crate leaving on gross shipments (`crate_dispatched`)

Track actual gross container exit and return responsibility, without multiplying purchase by number of trips. Separate container stock, residual service burden and bone payload. Native Plastic crate is one supplied article, Mass/kg, with no fixed polymer/grade/route/geography. The CPC bags classification is an isolated taxonomy defect; the basename and unit consistently identify a crate, not resin or a bag. Restrict here to an actual documented reusable HDPE crate; retain its complete manufactured-article provider and measured mass, service history and repair.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### Empty crate returned to external owner (`crate_external_return`)

Conditional actual empty-container return across the boundary; it is distinct from a crate leaving with dispatched bone and from internal reuse. Preserve gross mass and history without a credit. Native Plastic crate is one supplied article, Mass/kg, with no fixed polymer/grade/route/geography. The CPC bags classification is an isolated taxonomy defect; the basename and unit consistently identify a crate, not resin or a bag. Restrict here to an actual documented reusable HDPE crate; retain its complete manufactured-article provider and measured mass, service history and repair.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

##### Waste flows

###### Discarded PE liner (`liner_waste`)

Conditional separately measured discarded bag substrate. Retain attached organic contamination with one gross-waste parent or a non-overlapping measured partition; do not count both gross bag waste and polymer fraction as additive. Generated PE waste identity remains unresolved; a cleaned waste mixture at a mechanical recycling plant is incompatible with this as-generated gate. Apply to the measured PE article substrate only when actually discarded; record contamination separately within a non-additive gross-waste bridge. Recycling language is no automatic recycling provider or credit. Do not double count polymer waste plus a gross contaminated package stream.

- Selected flow: Waste polyethylene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### Discarded HDPE crate (`crate_waste`)

Conditional measured HDPE crate substrate actually retired; not a sold reusable container or generic mixed plastic. Separate any metal fittings before using a polymer-only partition; gross retirement remains complete. Generated PE waste identity remains unresolved; a cleaned waste mixture at a mechanical recycling plant is incompatible with this as-generated gate. Apply to the measured PE article substrate only when actually discarded; record contamination separately within a non-additive gross-waste bridge. Recycling language is no automatic recycling provider or credit. Do not double count polymer waste plus a gross contaminated package stream.

- Selected flow: Waste polyethylene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-allocation-2010`

###### Postrelease spoiled bovine bone (`fg_spoiled_bone`)

Record actual discarded wet bone against original Qc with its inherited vector and new service burdens. Spoilage does not retrospectively create a new first-release cohort or cancel actual manufacturing.

- Selected flow: Spoiled raw bovine bone
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-allocation-2010`

###### Postrelease crate wash wastewater (`fg_wastewater`)

Actual wet effluent from postrelease crate/area washing by cohort; use one gross stream/provider and non-additive pollutant subaccounts. Do not duplicate production effluent or cleaning water already inside this wastewater mass.

- Selected flow: HDPE bone-crate wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_wastewater`
- Sources: `ilcd-allocation-2010`

###### Postrelease discarded ammonia refrigerant (`fg_spent_ammonia`)

Only actual postrelease events in H assigned to original cohort Qc, disjoint from the preparation event ledger. Conditional actual discarded refrigerant leaving for authorized treatment. Distinguish recovered Product return, actual molecular leakage and remaining charge; do not select ammonia-N or chemically unrelated amine waste. Each external Product return requires its own actual identity and gross mass.

- Selected flow: Spent anhydrous ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_refrigerant`
- Sources: `ilcd-allocation-2010`

##### Elementary flows

###### Postrelease ammonia refrigerant leakage (`fg_ammonia_leak`)

Only actual postrelease events in H assigned to original cohort Qc, disjoint from the preparation event ledger. Conditional, measured at the actual receiving air compartment and release time. Actual NH3 CAS7664-41-7 leakage only; do not sum both charge-balance loss and the same leak meter. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_refrigerant`
- Sources: `ilcd-allocation-2010`

###### Postrelease biological ammonia emission (`fg_ammonia_decomposition`)

Only actual postrelease events in H assigned to original cohort Qc, disjoint from the preparation event ledger. Conditional, measured at the actual receiving air compartment and release time. Actual NH3 CAS7664-41-7 from decomposition, separate from refrigerant origin. Total ammonia-N or salts are not NH3 mass. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_species`
- Sources: `ilcd-allocation-2010`

###### Postrelease hydrogen sulfide emission (`fg_hydrogen_sulfide`)

Only actual postrelease events in H assigned to original cohort Qc, disjoint from the preparation event ledger. Conditional, measured at the actual receiving air compartment and release time. Actual H2S CAS7783-06-4 only; neither total sulfur, mercaptans nor odour units. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_species`
- Sources: `ilcd-allocation-2010`

###### Postrelease biogenic methane emission (`fg_biogenic_methane`)

Only actual postrelease events in H assigned to original cohort Qc, disjoint from the preparation event ledger. Conditional, measured at the actual receiving air compartment and release time. Actual CH4 CAS74-82-8 with evidenced biological carbon origin; not total organic carbon, biogas volume or whole carbon loss. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Biogenic methane to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_species`
- Sources: `ilcd-allocation-2010`

###### Postrelease biogenic carbon dioxide emission (`fg_biogenic_co2`)

Only actual postrelease events in H assigned to original cohort Qc, disjoint from the preparation event ledger. Conditional, measured at the actual receiving air compartment and release time. Actual gaseous CO2 CAS124-38-9 with biological origin. No automatic conversion of retained bone carbon or carbonate mineral carbon to a biogenic emission. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Biogenic carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_species`
- Sources: `ilcd-allocation-2010`

###### Postrelease water vapour leaving the boundary (`fg_water_evaporation`)

Only actual postrelease events in H assigned to original cohort Qc, disjoint from the preparation event ledger. Conditional, measured at the actual receiving air compartment and release time. Actual H2O CAS7732-18-5 net evaporation after independent inlet/outlet humidity and moisture accounting; not steam purchase, liquid water or structural hydroxyl. Retain gross molecular V and source partition; do not infer occurrence from a candidate flow. Require an unambiguous match of the molecular species, CAS, phase, origin and receiving medium before binding an identity; a broad synonym does not establish chemical equivalence.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: N / Qc; take the calculated result once.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg_water`
- Sources: `ilcd-allocation-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | Use this hierarchy only for attributional situations requiring allocation. Industrial source descriptions do not establish LCA allocation or a default economic share. Describe the actual animal/meat/bone functions and their common interface before allocating upstream burdens. | ilcd-allocation-2010 |
| allocation_subdivide | all inventory rows | First directly assign dedicated collection, species-specific sorting, cooling and cleaning using actual submeter/job records and physical or virtual subdivision. Keep the complete common process inventory; retain residual and Q0 activity explicitly rather than selecting only successful shifts. | ilcd-allocation-2010 |
| allocation_causality | all inventory rows | For each remaining exchange identify and evidence the determining physical causal relationship with each co-function. Cooling heat load and duration may jointly determine one service; cleaning event/soiling may determine another. Mass, time, protein, energy or animal count is not automatically causal merely because available. One criterion need not apply to all exchanges. | ilcd-allocation-2010 |
| allocation_residual | all inventory rows | Only genuinely unresolved common-process burden proceeds to market-value allocation. Use contemporaneous values of the actual co-functions at the SAME common process gate and actual state; document quantity, price, period, treatment of paid services and sensitivity. Do not combine raw bone prices with downstream meat/gelatine prices at different gates. If the basis is unavailable or unsuitable, preserve an explicit unresolved allocation rather than inventing a ratio or zero. | ilcd-allocation-2010 |
| allocation_no_credit | all processes | Internal raw-bone transfers, returned packaging and recirculated water cancel only within their physical interfaces. They do not create extra production, substitute products, avoided disposal credits or a second upstream provider. Waste treatment is linked to the actual treatment provider and mass once; retained bone carbon is not an automatic negative emission. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Every protocol collects raw un-divided quantities, states and records. The aggregation_rule label “per reference flow” names the target basis of the final report_once result; it performs no division during collection. Cards, protocols and calculation share the same single normalization.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw | bone_preparation | Every atomic event and inherited vector | foreground_record | event ID; row ID; operation; cohort; provider; source and destination; original unit; raw amount or rate; interval; opening and closing stock; inherited exchange vector; actual F; proven OTHER duplicate X; Qc | Reconcile invoices, scales, meters and custody logs without predivision; retain missing-data and uncertainty flags. | original unit | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_bone | bone_preparation | Whole wet raw bone and upstream link | foreground_record | bovine taxon; source part; lot; slaughter and cutting interface; nonfood designation; veterinary destination decision; gross and tare kg; tissue composition; water phases; provider boundary; inherited vector | Use calibrated gross/tare scales and lot documents; measure composition and water independently with stated sampling method, not nominal handbook ratios. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_release | bone_preparation | First overall quality release | foreground_record | release event ID; original cohort; lot genealogy; net wet kg; scale calibration; tare; nonfood acceptance; rejection; closing FG; previous release exclusion; Q; Qc | Join calibrated wet weighing to first release evidence; check uniqueness across previously released lots and accepted closingFG. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_transport | bone_preparation | Actual inbound cold road service | foreground_record | route; provider; payload kg; actual distance km; refrigerated service; empty-trip responsibility; provider coverage; duplicate upstream leg | Use actual consignment and dispatch records; compute raw kg*km once before normalization and reject illustrative native distances as defaults. | kg*km | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_energy | bone_preparation | Equipment cooling hygiene and FG electricity | foreground_record | meter ID; voltage; geography; provider mix; meter start and end; kWh or MJ; operation; first release or FG service; idle and failure; causal service driver; observed H | Submeter where possible, reconcile to complete site totals and actual jobs; distinguish electricity from supplied heat and its carrier. | original energy unit | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_water | bone_preparation | Fresh wash water and each water phase | foreground_record | meter start and end; integrated volume or true rate; interval; independent density and state; fresh inlet; internal reuse; liquid outlet; adherent water; humidity; evaporation; condensate; structural water; uncertainty | Measure inlet/outlet totals and water states independently. Integrate only actual rates; a cumulative volume is not multiplied by time. Retain origin partitions and no arbitrary reaction-water residual. | original mass or volume unit | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_formulations | bone_preparation | Complete purchased cleaning formulations | foreground_record | supplier formulation; SDS or specification; whole-solution mass; assay; active substance; carrier water; actual dilution water; mixing electricity; spill; stock; concentration compatibility | Weigh complete purchased formulation once. Keep assay/active/carrier as non-additive subaccounts; measure separate actual in-house mixing inputs and loss. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_refrigerant | bone_preparation | Ammonia charge makeup recovery and loss | foreground_record | equipment and refrigerant identity; charge start and end; actual makeup; recovery received; recovered transfer; waste; molecular leakage; leak test; service cohort; phase and purity | Reconcile charge balance to maintenance and leak records. Do not count the same leakage from both balance and detector; split origins and cohorts without shrinking gross losses. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_maintenance | bone_preparation | Actual equipment replacements and oils | foreground_record | article ID; measured mass; alloy or oil formulation; supplier manufacture; installation and retirement; actual repair; replaced part; gross waste; prior service history; allocation evidence | Use actual purchase and maintenance logs; whole articles need manufacturing providers, not only material mass. Preserve physical replacement/retirement and new F. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_waste | bone_preparation | Each rejected solid stream | foreground_record | source event; original cohort; wet gross mass; bone or tissue or fines identity; residual moisture; non-overlapping origin partition; storage; destination; treatment provider; return distinction | Weigh each actual separately collected stream and reconcile to material stocks. Keep the whole wet stream or measured non-additive constituents, never both as added total. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_wastewater | bone_preparation | One physical wastewater stream per outlet | foreground_record | outlet ID; measured total wet amount; independent density; sampling time; dissolved solids; suspended solids; COD; TOC; TN; species-specific analysis; actual provider; internal origin partition | Reconcile actual gross effluent and sampling; a quality indicator is not a molecular mass. Count one treatment interface and retain actual on-site treatment separately if present. | original mass or volume unit | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_species | bone_preparation | Actual chemical species and receiving medium | foreground_record | species; CAS; physical phase; carbon origin; source operation; receiving medium; emission point; concentration basis; true gas rate or integrated volume; temperature; pressure; humidity; interval; independent uptake; uncertainty | Use species-specific measurement and actual dry/wet reference-state conversion; integrate rate once or use accumulated volume directly. Keep gross and net labels and independent total/element closure; no invented emissions from aggregate indicators. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_fg | fg_service | FG custody service and returns by original cohort | foreground_record | original Qc; first-release link; opening and closing FG kg; inherited per-exchange vector; gross dispatch; return; original delivery reversal; spoilage; water change; reinspection; real service F; H | Reconcile custody by lot and time. Keep services and burden vectors separate from physical stock; cancellation applies only to paired internal release. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_pack | fg_service | Every packaging article and external return | foreground_record | article and polymer; measured tare; empty opening and closing; attached WIP FG opening and closing; reusable opening and closing; purchases; first non-purchase external receipts; ownership and supplier coverage; same-article prior-site-dispatch-linked true returns; gross dispatched packaging; external return out; waste; internal reuse; inherited service burden | Count and independently weigh each actual article lot. Reconcile the complete boundary_pack equation; no assumed item mass or packaging per net dispatch shortcut. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_fg_raw | fg_service | Postrelease only: Every atomic event and inherited vector | foreground_record | event ID; row ID; operation; cohort; provider; source and destination; original unit; raw amount or rate; interval; opening and closing stock; inherited exchange vector; actual F; proven OTHER duplicate X; Qc | Disjoint postrelease events in H retain original Qc. Reconcile invoices, scales, meters and custody logs without predivision; retain missing-data and uncertainty flags. | original unit | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_fg_energy | fg_service | Postrelease only: Equipment cooling hygiene and FG electricity | foreground_record | meter ID; voltage; geography; provider mix; meter start and end; kWh or MJ; operation; first release or FG service; idle and failure; causal service driver; observed H | Disjoint postrelease events in H retain original Qc. Submeter where possible, reconcile to complete site totals and actual jobs; distinguish electricity from supplied heat and its carrier. | original energy unit | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_fg_water | fg_service | Postrelease only: Fresh wash water and each water phase | foreground_record | meter start and end; integrated volume or true rate; interval; independent density and state; fresh inlet; internal reuse; liquid outlet; adherent water; humidity; evaporation; condensate; structural water; uncertainty | Disjoint postrelease events in H retain original Qc. Measure inlet/outlet totals and water states independently. Integrate only actual rates; a cumulative volume is not multiplied by time. Retain origin partitions and no arbitrary reaction-water residual. | original mass or volume unit | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_fg_refrigerant | fg_service | Postrelease only: Ammonia charge makeup recovery and loss | foreground_record | equipment and refrigerant identity; charge start and end; actual makeup; recovery received; recovered transfer; waste; molecular leakage; leak test; service cohort; phase and purity | Disjoint postrelease events in H retain original Qc. Reconcile charge balance to maintenance and leak records. Do not count the same leakage from both balance and detector; split origins and cohorts without shrinking gross losses. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_fg_wastewater | fg_service | Postrelease only: One physical wastewater stream per outlet | foreground_record | outlet ID; measured total wet amount; independent density; sampling time; dissolved solids; suspended solids; COD; TOC; TN; species-specific analysis; actual provider; internal origin partition | Disjoint postrelease events in H retain original Qc. Reconcile actual gross effluent and sampling; a quality indicator is not a molecular mass. Count one treatment interface and retain actual on-site treatment separately if present. | original mass or volume unit | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |
| cp_fg_species | fg_service | Postrelease only: Actual chemical species and receiving medium | foreground_record | species; CAS; physical phase; carbon origin; source operation; receiving medium; emission point; concentration basis; true gas rate or integrated volume; temperature; pressure; humidity; interval; independent uptake; uncertainty | Disjoint postrelease events in H retain original Qc. Use species-specific measurement and actual dry/wet reference-state conversion; integrate rate once or use accumulated volume directly. Keep gross and net labels and independent total/element closure; no invented emissions from aggregate indicators. | kg | Each event and close | Complete H and opening/closing inherited history | Actual site and provider interfaces | per reference flow | Calibration; raw records; custody genealogy; gaps and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_cohort | released_bone | Sum measured NEW first-release wet net kg after duplicate-release exclusion to form Q. Assign original cohort Qc=Q; accepted closingFG is included once, never added a second time. Previously released returns or receipts retain their original Qc. | cp_release; cp_bone; cp_fg | Q; Qc | ilcd-allocation-2010 |
| raw_numerator | all inventory rows | Convert original units and integrate actual rates once. Reconcile physical V and inherited vectors independently; determine attributed environmental A using section7. N selects the labelled V or A channel with provenance; physical waste/emissions/repair/replacement/returns always retain full V. Add actual F and cancel only proven OTHER same-side X. | cp_raw; cp_bone; cp_energy; cp_water; cp_formulations; cp_transport; cp_refrigerant; cp_maintenance; cp_waste; cp_wastewater; cp_species; cp_fg; cp_pack; cp_fg_raw; cp_fg_energy; cp_fg_water; cp_fg_refrigerant; cp_fg_wastewater; cp_fg_species | N | ilcd-allocation-2010 |
| report_once | all inventory rows | r = N / Qc for Qc > 0, once for each row/cohort/channel. For new preparation Qc=Q; postrelease services retain original Qc. Physical channels use gross V; environmental channels use attributed A with inherited vectors. At Qc=0 retain all actual activity and stock but produce no unit result. For released_bone only N=Qc of newly first-released physical kg, giving exactly1kg. Cards and collection aggregation labels reference this result without dividing again; never divide by H. | N; Qc; cp_raw; cp_release; cp_fg; cp_fg_raw | r | ilcd-allocation-2010 |
| physical_closure | all inventory rows | At preparation, FG and combined gates separately close opening + genuine external inputs + internal receipts = closing + genuine external exits + internal transfers. Cancel paired internal transfers only in the combined ledger. Independently close relevant elements and water phases; residuals remain uncertainty, not invented reaction water or gases. | cp_bone; cp_water; cp_waste; cp_wastewater; cp_species; cp_fg; cp_pack; cp_fg_water; cp_fg_wastewater; cp_fg_species | physical_balance | ilcd-allocation-2010 |
| package_closure | all inventory rows | Apply boundary_pack separately to each article and original cohort. Record internal reuse as a paired transfer only; gross package shipment, true outside returns and actual waste remain. Link service burdens to actual original Qc without reducing measured article kg. | cp_pack; cp_fg | package_balance | ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Match whole native identity including every name/comment/synonym, CAS, route, grade, geography, medium, type and all properties. Ambiguous or incompatible candidates stay unbound; concrete exchanges remain. | Direct identity evidence; exact support chain; actual supplier specification |
| dq_origin | raw_bone | Keep actual bovine source, nonfood destination, separation state and upstream provider allocation; an animal-fit certificate does not by itself establish nonfood use. | Lot origin and custody evidence; veterinary/destination record; provider boundary |
| dq_complete | all processes | Retain failures, idle, trials, start-stop, cleanup, rework, Q0 and all raw/WIP/FG physical and inherited stocks. Missing measurements and unobserved later service remain visible; a blank UUID is not a zero exchange. | Full event logs; stock balance; missing-data register |
| dq_measurement | all inventory rows | Document calibration, sample representativeness, actual unit/state conversion and uncertainty; no fixed bone composition, density, yield, temperature, lifetime or emission factor. | Scale and meter certificates; test methods; raw readings |
| dq_sources | all processes | Use UN for classification, MLA for Australian bone-market distinctions, Akiolis for collection and food-material counterevidence, and ILCD for allocation. Conditional inventory and closure requirements are this PCR’s methodological synthesis, not measured industry defaults. Do not infer one factory or current statutory conformance from this synthesis. | Source-specific scope and date assessment; original context |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | released_bone | Exactly one linked first-release Product output defines1kg wet reference; its core UUID, property, unit, bovine nonfood scope and both languages agree. A true discarded Waste cannot be its substitute. | un-cpc3-2025; ec-animal-by-products |
| validate_boundary | all processes | Verify raw terminal and actual handover before accepting the method; preserve upstream animal/meat burdens and exclude deep conversion. Permission failures affect qualified destination/Q, not actual load retention. | ilcd-allocation-2010 |
| validate_accounting | all inventory rows | Check unique Q, original Qc, Q0, unnormalized collection, single N/Qc, full raw/WIP/FG inheritance and all three physical gates. No shrinking gross wastes or emissions by allocation, no second H divisor, no hidden actual F deducted as X. | ilcd-allocation-2010 |
| validate_atomic | all inventory rows | Require a specific atomic identity, native unit and linked protocol/source context for every actual exchange including new inputs not in the initial list. Do not hide actual inputs, emissions or residues in other/zero/aggregate cards; alternatives need a documented non-additive bridge. | ilcd-allocation-2010 |
| validate_pack_species | all inventory rows | Verify each packaging equation and actual molecular species/media independently from total wet mass and element balances. Never convert COD/TN/TOC directly to a molecule or fit two unknowns from one residual. | ilcd-allocation-2010 |
| validate_missing | all processes | Disclose unavailable provider/auxiliary identities and future site quantities as ordinary data requirements. A genuine unproven core terminal or unresolved method relationship remains a substantive hold; engineering checks do not approve science, translation, mapping or publication. | ilcd-allocation-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared raw-bone supply to a compatible permitted nonfood industrial process before conversion |
| allowed_use | Only the documented bovine raw state, wet mass, provider interface, first-release cohort and service horizon |
| excluded_use | Whole39110 coverage; food/soup bone; rendered or chemically converted products; automatic zero-burden waste; fixed composition or avoided credits; veterinary permission |
| required_metadata | All reference qualifiers, each atomic native restriction, provider boundary, source/protocol/calculation links, Q/Qc/H, physical V and attributed A, raw/WIP/FG inherited vectors |
| required_quality_disclosure | Actual measurement coverage, uncertainty, ordinary UUID/provider gaps, unresolved true holds, evidence synthesis and unobserved later service |
| update_trigger | Species/source/destination change; deep-processing change; core identity or provider change; release/stock boundary change; new actual exchange or measured method evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division. CPC Ver.3.0 Explanatory Notes, 30 June 2025, pp.33–36,64,69–72,88–91,198–199. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39110 includes unworked or simply prepared bones; distinguish edible offal, raw hides, rendered fats and meal. This method is a narrower subset; it excludes powder even where the full classification includes it. |
| ec-animal-by-products | official_guidance | Regulation (EC) 1069/2009, Articles 8–10, especially 10(a). https://eur-lex.europa.eu/eli/reg/2009/1069/oj/eng | Risk categories and material not intended for human consumption, including commercially redirected parts initially fit for food. Category and slaughter eligibility do not prove a bone lot, nonfood destination or local permission; no transfer of EU requirements to other sites. |
| akiolis-category3 | literature | Akiolis. Collection from the meat industry. https://www.akiolis.com/en/sourcing/collection-meat-industry | First-party collection of meat-industry bones and by-products. Bones for gelatine are explicitly described as food material: commercial bone availability alone cannot establish this nonfood route. No site quantities or supplier eligibility are inferred. |
| ilcd-allocation-2010 | handbook | European Commission JRC. ILCD Handbook, General guide for LCA—Detailed guidance, first edition March2010, section7.9.3, printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional cases needing allocation: virtual subdivision, exchange-specific determining physical causality, then residual market value at the actual common gate/state. No fixed share, arbitrary choice, avoided-production credit or recycling formula is imported. |
| mla-bone-disposition | literature | Coleby Process Consulting for Meat & Livestock Australia. Beef Bone Disposition, Australia 2024, V.RMH.2402, PDF pages 2–3 (printed 2–3). https://www.mla.com.au/globalassets/mla-corporate/research-and-development/documents/v.rmh.2402-mla-beef-bone-disposition-memo-0125.pdf | Distinguishes slaughter-floor and boning-room bone and downstream rendering, degreased chips and marrow markets. Supports an industrial raw-bone interface, not an actual batch, nonfood eligibility or a site-specific yield. National estimates and carcass weights are not foreground measurements; conversion remains excluded. |
| un-cpc3-2026 | official_guidance | UNSD. CPC Ver.3.0 explanatory notes, 23 October 2026 workbook, CPC3!A1861:D1861. https://unstats.un.org/unsd/econstats/classifications/cpc | Corroborates the frozen 2025 raw-bone inclusion and neighbouring exclusions; does not change the frozen classification inventory or approve the narrower method. |
