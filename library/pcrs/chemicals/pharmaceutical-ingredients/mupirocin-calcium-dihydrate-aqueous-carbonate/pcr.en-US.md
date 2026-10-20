---
pcr_id: pcr.chemicals.pharmaceutical-ingredients.mupirocin-calcium-dihydrate-aqueous-carbonate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Mupirocin calcium dihydrate production and delivery by aqueous carbonate conversion

## 1. Scope and Applicability

Applies to the specified bulk crystalline calcium dihydrate and the heterogeneous aqueous salt-conversion route. Purchased free-acid fermentation, extraction and purification require complete upstream linkage; onsite operations must be expanded as real processes. Heterogeneous CPC 35250 products do not share a reference. A new use of the same molecule does not create another methodology. The patent and independent monograph support route and physical identity respectively; factory quantities come from actual records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.chemicals.pharmaceutical-ingredients.mupirocin-calcium-dihydrate-aqueous-carbonate |
| classification_refs | CPC 3.0 35250: narrower semantic scope, antibiotic calcium salt only; no accepted mapping is created. |
| covered_products | Bulk crystalline mupirocin calcium dihydrate made by heterogeneous aqueous reaction of fermentation-derived solid mupirocin free acid with solid calcium carbonate, isolated, washed, dried and supplied at a declared factory dispatch gate. |
| excluded_products | Other vitamins, hormones, glycosides, alkaloids or antibiotics; mupirocin free acid as final product; sodium/lithium salts; anhydrous or amorphous calcium salt; finished ointments/creams; cosolvent, calcium-carboxylate or calcium-oxide conversion routes. |
| representative_product | Mupirocin calcium dihydrate, CAS 115074-43-6, C52H86CaO18·2H2O; one declared release specification, crystallinity, particle form and as-supplied water content. |
| production_route | Purchased fermentation-derived free acid with complete upstream burdens → heterogeneous aqueous carbonate salt conversion → separation and washing → hydrate-preserving drying and release → packing, inventory and net factory dispatch. |
| market_state | Bulk API salt, not a medicinal formulation, dosage unit, potency equivalent or claimed therapeutic service. Actual geography and provider must be declared; none is inferred from the generic reference identity. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one specified crystalline antibiotic calcium dihydrate ingredient for downstream manufacture. |
| How much | 1 kg net physically supplied product at actual factory dispatch handover. |
| How well | The same declared dihydrate form, assay basis, impurities, particle specification, water content and release acceptance; no clinical equivalence claim. |
| How long or cycle | A complete declared reporting interval and matched lot cohort through actual dispatch; include carried inventory burdens across intervals. |
| reference_flow_link | delivered_salt |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | MUPIROCIN CALCIUM `104a2107-4bc8-4a1b-8267-3ff0ff7614a1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS and formula; dihydrate crystallinity and particle form; as-supplied assay and assay basis; structural versus free water and impurities; actual route and starting-material origin; actual site geography and suppliers; complete reporting interval and cohort; signed net delivery Q and unique lot/return history; release R and finished-stock reconciliation; WIP and finished-stock opening/closing carried burdens; actual packaging and storage/dispatch boundary |

Required qualifiers must be retained in dataset metadata, process notes, reference-flow comments or equivalent fields; omissions make the data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_delivery | reference_product | Mass | kg | Q is actual accepted net dispatched salt mass excluding packaging and bulk free liquid. Retain crystal water and specification-permitted moisture; potency, anhydrous mass, pure free-acid equivalent and dose are separate descriptive subledgers, never substitutes for Q. |
| period_matching | all inventory rows | Declared numerator property | Declared row unit | Keep unnormalized complete raw-period numerators and inherited burdens. Report each assigned numerator once per 1 kg reference flow using the sole normalization rule; internal transfers and returns do not create another denominator. |
| physical_units | all inventory rows | Mass or Energy | kg or MJ | Convert raw kWh to MJ using 3.6 MJ/kWh. Convert volume to mass only with independently measured density at the stated temperature, composition and pressure. Integrate rates once over measured time; an integrated volume receives no extra duration multiplier. |
| hydrate_species | carbonate_co2, water_vapour | Mass and molar amount | kg and mol | Separate physical mass/element closure from independently constrained reaction extent, aqueous species, generated water, crystallization water, evaporation and condensate. Unknown outlets and unknown reaction water cannot both be fitted to one residual. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received isolated solid mupirocin free acid of documented fermentation origin, calcium carbonate reagent and utilities at the salt-conversion plant; finished opening stock is separately carried, not newly produced. |
| starting_condition_role | Explicit purchased precursor interface, not permission to omit fermentation, extraction or purification from cradle-to-dispatch results. |
| product_classification_scope | Only the specified antibiotic calcium dihydrate subset of CPC 35250. |
| recursive_input_rule | Require a route/state/grade-compatible cradle-to-receipt dataset for every acquired input. If precursor manufacture is onsite or provider coverage is incomplete, expand actual seed/fermentation/recovery/purification processes with every atomic exchange and reconcile internal transfers. |
| upstream_dataset_requirement | Whole commercial supplied precursor/reagent/packaging quantities with actual composition, geography and technology; no zero-burden precursor or reuse of salt burdens as free-acid burdens. |
| disclosure | Include actual receipt, reaction, separation, washing, drying, cleaning, quality-control share, rework, waste treatment, packing, warehouse residence, handling and dispatch up to signed factory handover. Downstream freight, formulation, patient use and end of life are outside this declared gate; separately added services require their own disclosed records. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | salt, finish | Use the stated heterogeneous water-only carbonate route; verify final hydrate rather than treating an alternative solvent route or amorphous salt as equivalent. The patent demonstrates a route, not a general operating recipe or guaranteed grade. | `pliva-2009-carbonate-route` |
| b_complete | all processes | Retain every actual input, emission and treatment. Split additional chemicals, each fuel, cleaning agent, refrigerant and actual waste stream into individual cards before data use. Process steam denotes heat delivery only; count any physical steam contact water separately when it enters the material balance. |  |
| b_stocks | all processes | R records newly qualified released mass only. Match R to warehouse receipts and cancel internal salt/cake edges when combined; never add closing finished stock to R. Q records actual delivery only, with complete opening/closing WIP and finished stock and inherited burdens. Undelivered stock is excluded from Q but its warehouse burden is retained and assigned by the declared stock ledger. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| salt | Salt conversion and first separation | required | declared heterogeneous aqueous route | foreground | wet cake transfer and components |
| finish | Wash drying and quality release | required | retain dihydrate state | foreground | new release R, distinct from Q |
| dispatch | Storage packing handling and net dispatch | required | through signed factory handover | foreground | delivered_salt: 1 kg |

### Process: Salt conversion and first separation (`salt`)

#### Inputs

##### Product flows

###### Fermentation-derived mupirocin free acid (`free_acid`)

Record the whole received solid lot, its water, assay and impurity subledgers. Require its actual Pseudomonas fermentation, recovery and purification background; do not substitute calcium salt or pharmaceutical cream.

- Selected flow: Mupirocin free acid solid
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_salt_records`
- Sources: `pliva-2009-carbonate-route`

###### Calcium carbonate reagent (`carbonate`)

Measure reagent grade, whole mass and CaCO3 assay. Excess solid carbonate is an actual stock or outlet, not proof that all purchased carbonate released CO2.

- Selected flow: Calcium carbonate solid reagent
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_salt_records`
- Sources: `pliva-2009-carbonate-route`

###### Reaction water (`reaction_water`)

Measure fresh water delivered to the heterogeneous reactor. Assayed water already in purchased wet ingredients is a subledger, not a second water purchase.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_salt_records`
- Sources: `pliva-2009-carbonate-route`

###### Reaction and vacuum electricity (`salt_electricity`)

Meter agitation, pumping, vacuum and actual temperature control. Retain idle, failed and zero-output operation attributable to this cohort.

- Selected flow: Grid alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_salt_records`
- Sources: `pliva-2009-carbonate-route`

#### Outputs

##### Product flows

###### Wet crystal cake transfer (`wet_cake_out`)

Weigh the whole internal wet cake with retained mother liquor; separately assay salt and free water. Match wet_cake_in and eliminate this internal transfer in the combined inventory.

- Selected flow: Mupirocin calcium dihydrate wet filter cake
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_salt_records`
- Sources: `pliva-2009-carbonate-route`

##### Waste flows

###### Separated reaction mother liquor (`mother_liquor`)

One actual segregated liquor stream sent to documented treatment; retain suspended carbonate, dissolved API and measured species. Internal recirculation is not repeated purchase or external waste.

- Selected flow: Aqueous mupirocin-carbonate mother liquor
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_salt_records`
- Sources: `pliva-2009-carbonate-route`

##### Elementary flows

###### Carbonate-derived CO2 reaching air (`carbonate_co2`)

Use independently established reaction extent and measured vent fate. Separate dissolved carbonate, dissolved CO2, capture and actual air release; disclose carbon origin instead of assigning a default fossil or biogenic factor.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_records`
- Sources: `pliva-2009-carbonate-route`

### Process: Wash drying and quality release (`finish`)

#### Inputs

##### Product flows

###### Wet crystal cake receipt (`wet_cake_in`)

Receive exactly the matching internal wet cake and its carried burdens; this is not newly procured API.

- Selected flow: Mupirocin calcium dihydrate wet filter cake
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_records`
- Sources: `pliva-2009-carbonate-route`

###### Crystal wash water (`wash_water`)

Meter fresh wash and equipment-rinse water separately in raw fields. Do not assume that reactor water equals wash-water use.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_records`
- Sources: `pliva-2009-carbonate-route`

###### Separation and drying electricity (`finish_electricity`)

Include centrifugation, filtration, fluid-bed fans, air conditioning and actual drying electricity, including rejected and reprocessed lots.

- Selected flow: Grid alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_records`
- Sources: `pliva-2009-carbonate-route`

###### Purchased steam heat (`steam_heat`)

Include only where actually used. Measure delivered thermal energy from steam/condensate enthalpy and flow. For an onsite boiler, replace this purchased-energy interface with its individual actual fuel, water and emissions without double counting.

- Selected flow: Process steam heat delivered to dryer
- Flow property / unit: Energy / MJ
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_records`
- Sources: `pliva-2009-carbonate-route`

#### Outputs

##### Product flows

###### Newly released bulk salt transfer (`released_salt`)

Record new qualified bulk dihydrate mass R once after controlled drying and quality release; retained crystal water belongs to the product. This is an internal transfer to dispatch, not delivered Q; do not add same-cohort closing finished stock to R.

- Selected flow: MUPIROCIN CALCIUM `104a2107-4bc8-4a1b-8267-3ff0ff7614a1`
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_records`
- Sources: `pliva-2009-carbonate-route`

##### Waste flows

###### Separated wash liquor (`wash_liquor`)

Record the actual whole wash effluent and measured API/carbonate species to its treatment endpoint. Include cleaning burdens; wastewater volume and COD do not identify molecular species.

- Selected flow: Aqueous crystal-wash liquor containing mupirocin
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_records`
- Sources: `pliva-2009-carbonate-route`

###### Discarded off-specification salt (`offspec_salt`)

Record only the actual discarded solid. Keep recovered/reworked salt as internal material with inherited burdens; never count it as a new second production lot.

- Selected flow: Off-specification mupirocin calcium dihydrate solid
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_records`
- Sources: `pliva-2009-carbonate-route`

##### Elementary flows

###### Drying water reaching air (`water_vapour`)

Determine free-water removal, condensate recovery and actual vented water independently. Hydrate loss changes product state and fails this reference unless the dihydrate is re-established and tested.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_records`
- Sources: `pliva-2009-carbonate-route`

### Process: Storage packing handling and net dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Released salt received into warehouse (`warehouse_receipt`)

Match released_salt by lot and mass, with opening stock and burdens kept separately. Eliminate receipt/release internal edges when consolidating, retaining all production burdens assigned to deliveries.

- Selected flow: MUPIROCIN CALCIUM `104a2107-4bc8-4a1b-8267-3ff0ff7614a1`
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

###### Polyethylene product liner (`liner`)

Record the whole actual bag and manufacturing background when used. Packaging tare is excluded from Q; replacements and damaged bags remain burdens.

- Selected flow: Polyethylene inner liner bag
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

###### Fibre transport drum (`drum`)

Record an actual whole specified drum with its fittings accounted once. This is a conditional packaging option, not evidence of a universally required drum size or material.

- Selected flow: Fibreboard transport drum
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

###### Wooden shipping pallet (`pallet`)

When used, retain actual reuse trips, repair, return and replacement allocation. No assumed pallet mass or number of reuse cycles.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

###### Storage packing handling and dispatch electricity (`warehouse_electricity`)

Meter actual warehouse environmental control, packing and electric handling, including inventory residence and returns. Attach measured residence allocation and opening/closing burden ledgers.

- Selected flow: Grid alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

#### Outputs

##### Product flows

###### Net delivered dihydrate API (`delivered_salt`)

The unique terminal Product output is the accepted net supplied dihydrate at the declared factory dispatch handover; packaging is excluded.

- Selected flow: MUPIROCIN CALCIUM `104a2107-4bc8-4a1b-8267-3ff0ff7614a1`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

##### Waste flows

###### Discarded warehouse salt (`warehouse_api_discard`)

Record actual damaged, expired or finally rejected API sent to destruction and its destruction burden. Return to stock or rework remains internal with its existing burdens.

- Selected flow: Discarded mupirocin calcium dihydrate solid
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

###### Discarded polyethylene liners (`liner_scrap`)

Record actual segregated liner waste to treatment, with retained API contamination assayed as a component rather than a second waste mass.

- Selected flow: Polyethylene liner waste
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

###### Discarded fibre drums (`drum_scrap`)

Record actual segregated drum waste and destination. Returned reusable drums stay in the asset ledger rather than a repeated new purchase.

- Selected flow: Fibreboard drum waste
- Flow property / unit: Mass / kg
- Amount rule: One final reported quantity assigned from the matched raw cohort records under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | all processes | Subdivide metered product-specific burdens before allocating shared utilities by documented physical drivers. Retain failed/zero-output runs, idle loads, rework and irreversible losses of this product cohort; no allocation by potency or drug selling price by default. | jrc-ilcd-2010-allocation |
| a_returns | dispatch | Track each returned physical quantity against its original acceptance. For previously counted returned deliveries, reverse/restatement of the original Q and carried burden is required before subsequent acceptance; reinspection, repacking and rework add real burdens but create no second production or duplicated delivery. Disclose the cross-period correction. |  |
| a_no_credit | mother_liquor, offspec_salt, warehouse_api_discard | Recycled mother liquor and reworked salt carry existing burdens internally. No avoided-production credit for recovery, no co-product status for rejected drug, and no assumed treatment removal. Any genuinely saleable co-product requires separately verified identity, yield and disclosed allocation; CO2 venting is not such a product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The aggregation_rule below labels the final basis of the same reporting operation, not a collector-side calculation. Each owner retains unnormalized raw-period numerators, conversion evidence and complete burden carry. Reconcile stock assignment first; normalize_delivery alone performs A_i/Q. Cards and aggregation labels do not divide again.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_salt_records | salt | Precursors reaction separation | supplier receipts and batch records | lot; supplier; origin route; grade; received and consumed kg; assay; water; inventory change; reaction batch times; fresh and recycled water; electricity kWh; wet cake kg; whole mother liquor kg; species analysis; failed and zero-output runs | Owner: salt-conversion operator and procurement custodian. Collect calibrated weighings, meters and supplier records for the complete interval including cleaning and failures; retain whole purchased wet supply and constituent subledgers without duplicate purchases. Keep raw numerators and stock changes only. | kg; kWh | each receipt and batch | complete reporting interval including failed runs | declared conversion site and provider chain | per 1 kg reference flow | weigh tickets; calibrations; CoA; batch ledger; supplier route coverage |
| cp_finish_records | finish | Separation wash drying release | batch and quality records | wet cake receipt kg; wash and rinse kg; effluent kg; electricity kWh; steam kg and enthalpies; condensate; rejected kg; recovered kg; R kg; water result and method; crystallinity; particle form; release signature | Owner: isolation operator, utilities engineer and quality-release owner. Reconcile cake transfers, actual wash/drying/cleaning and tested release mass R for the complete interval. Keep raw numerator records, failure/rework history and inherited WIP burdens; perform no division by Q at collection. | kg; kWh; MJ | each batch and release | same full interval with traceable WIP carry | declared isolation and drying site | per 1 kg reference flow | transfer tickets; meters; CoA; hydrate identity and quality decision |
| cp_dispatch_records | dispatch | Finished stocks packing and Q | warehouse and dispatch records | opening and closing finished kg and carried burden vector; R receipts; net dispatch kg; carrier signature; rejected delivery kg; returned/reaccepted quantity with original lot id; packaged tare; each packaging material kg; electricity kWh; residence time; destruction mass and treatment | Owner: warehouse/dispatch custodian with quality owner. Weigh net product independently of packaging, match signed accepted handovers and returns by unique lot/quantity and reconcile opening + new release + returns = dispatch + destruction + closing with internal rework movements. Collect raw packing, storage, handling and dispatch loads and stock burden vectors only; unresolved older delivery corrections require restatement before Q. | kg; kWh; hours | each movement plus period close | same reporting interval plus opening-stock provenance | declared factory handover and actual warehouse | per 1 kg reference flow | stock cards; tare records; signed handovers; returns trail; packaging BOM |
| cp_species_records | salt | Mass elements water and species | analytical and vent records | separate whole-stream masses; C H O Ca analyses; precursor and carbonate assay; reacted extent; unreacted carbonate; dissolved inorganic carbon; aqueous API; gas flow and duration or integrated volume; pressure temperature water basis; CO2 concentration; water vapour; condensate; structural and free water | Owner: analytical laboratory and environmental engineer. Independently measure stream masses, aqueous/gas species and reaction extent; use formula stoichiometry as a bounded consistency relation, not a fitted outlet. Retain raw integrated volumes without a second time multiplier and raw rate logs where integration is needed. Do not infer water or API species from COD. | kg; mol; m3; hours | each batch and representative verified vent tests | same full interval and analytical coverage | reaction vents drying outlet and actual treatment interfaces | per 1 kg reference flow | lab methods and detection limits; speciation; calibrated meters; uncertainty |
| cp_stock_burdens | dispatch | WIP and finished burden carry | physical stock and inherited inventory ledger | opening and closing WIP by stage; whole mass and component masses; opening and closing finished salt; inherited exchange numerator vectors; matched interval inputs; failed run burdens; internal transfer ids; return corrections; documented FIFO or weighted-average rule | Owner: production accountant with all process owners. Reconcile physical stocks and original unnormalized burden vectors by the same product/route/form cohort and declared FIFO or weighted average. Closing WIP and finished stock retain their attributable burdens for the next interval. Retain real rework and loss burdens; no unrecorded stock assumed zero. | kg; original exchange units | each transfer and period closure | opening provenance plus complete current interval | all included sites and internal interfaces | per 1 kg reference flow | stock counts; inherited vectors; reconciled internal edges; correction ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversions | all inventory rows | Convert raw records to the declared numerator units first: MJ = 3.6 × kWh; mass = integrated volume × independently justified density at stated conditions. Rate × duration is used only for a rate record. Retain originals and uncertainties. | cp_salt_records; cp_finish_records; cp_dispatch_records; cp_species_records | converted raw exchange numerators |  |
| assigned_numerators | all inventory rows | For each exchange i, A_i = opening inherited numerator + attributable current-period raw numerator - closing inherited numerator - independently documented transfers to other cohorts. Eliminate matched internal cake/salt edges and repeated inherited transfers once, retaining their original external burdens. Include all assigned failures, losses, cleaning, rework and stock services. Withhold results when opening or closing burden vectors are unknown. | cp_stock_burdens; cp_salt_records; cp_finish_records; cp_dispatch_records | A_i in original numerator units |  |
| normalize_delivery | all inventory rows | v_i = A_i / Q exactly once after raw conversions and stock assignment; Q is unique positive accepted net kg actually delivered at the declared handover, corrected for returns and earlier counted deliveries. Zero Q produces no per-kg inventory. Collection, cards and aggregation labels describe this same report operation and never divide it again. | A_i; Q; cp_stock_burdens; cp_dispatch_records | one inventory per 1 kg reference flow |  |
| reaction_water_check | carbonate_co2, water_vapour | Let HA denote C26H44O9 and A its singly deprotonated anion. Formula-derived check: 2 HA + CaCO3 + H2O → CaA2·2H2O + CO2. Neutralization generates one mole H2O per mole reacted carbonate and dihydrate formation binds two: net one mole water consumed for this ideal pathway. Actual extent, excess carbonate, impurities, dissolved species, free-water evaporation and hydrolysis/degradation require independent records; this equation determines no purchased feed rate, reaction yield or emitted gas amount. | cp_species_records; cp_salt_records; cp_finish_records | independent species and water consistency finding | `pliva-2009-carbonate-route`; `pmda-jpxvii-mupirocin` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | reference_product | Reference native limitations: MUPIROCIN CALCIUM / 莫匹罗星钙; CAS 115074-43-6; Product flow; production mix, at plant; route/grade/form name components absent; geography/locationOfSupply absent; one reference property Mass only, coefficient 1, with kg reference unit. The native comments identify the calcium salt, Pseudomonas fluorescens origin, protein-synthesis inhibition and antibiotic role, but the English fusidic-acid-derivative statement conflicts with the Chinese crotonic-acid-derivative description and the independent monograph. Do not use that English chemical-family assertion as route or identity evidence. CAS, calcium-salt name and organism agree with the independent dihydrate identity; no fixed contrary CAS, manufacturing route or grade is adopted. Native identity is not a provider, quantity, approved grade, particle size or specific geographic inventory. | Exact native record plus independent monograph; specification and provider declaration |
| q_water | reaction_water, wash_water | Water native limitations: Deionised water / 去离子水; CAS 7732-18-5; Product flow; production mix, at plant; ion exchange or reverse osmosis, pure substance; no extra form/grade component and no supply geography. Its comment also mentions distillation, production/consumption mixes and plant/consumer supply generically and sets no compliance standard. Apply the narrower name route only after provider verification; neither the UUID nor that comment establishes sterile or pharmacopoeial water, a universal density or actual supplier technology. One Mass property with coefficient 1 is available; no density property exists. | Native direct record, actual treatment train and water test |
| q_stocks | all inventory rows | Require complete matched physical and burden ledgers, including opening/closing WIP and finished goods, failed batches, zero output, rework, losses and returns. No negative hidden adjustment or stock-free assumption. | stock_burdens and signed period reconciliation |
| q_species | salt, finish | Retain independent C/H/O/Ca and whole-mass balances alongside identified species and structural/free-water balance. Never use COD, a generic neutralization-water template, or simultaneous residual fitting to invent reaction water or an outlet. | species_records; methods; uncertainty and unexplained residual |
| q_case | all processes | The patent scale case establishes a real route and unit operations, not default yield, consumption, reaction time, vacuum, grade or water ratio. The JP XVII monograph is historical identity/assay-basis evidence, not evidence that every manufactured lot meets current approval. Require the actual approved specification and lot tests. | Original patent and monograph with lot-specific release evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | delivered_salt | Reject a reference based on pure free acid, anhydrous salt, medicinal formulation, activity, dose, gross drum mass, mere release R or unsent stock. Require the stated dihydrate physical identity, specification and signed corrected positive Q. | `pmda-jpxvii-mupirocin` |
| v_inventory | all inventory rows | Verify atomic exchanges, complete raw-period and stock-burden coverage, internal elimination, one normalization, actual treatment, phase-specific emissions and independent species/water evidence. Any unknown balance, unmatched transfer or absent inherited burden remains an explicit data gap. |  |
| v_native | reference_product, reaction_water, wash_water | Recheck native name components, CAS, route, grade, geography, Product medium and all exact property/unit references before provider use. Retain the disclosed comment contradiction and water limitations. Ordinary unresolved auxiliary UUIDs require future identity/provider verification and are not zero amounts or waived exchanges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Ingredient supply for the same physical salt and route at the declared factory handover. |
| allowed_use | Cradle-to-dispatch inventory with complete precursor backgrounds and disclosed stocks, specifications, geography and service scope. |
| excluded_use | Clinical equivalence, therapeutic comparison, free-acid substitution, full cream inventory, unverified alternative route, or an approval claim. |
| required_metadata | CAS and formula; dihydrate crystallinity and particle form; as-supplied assay and assay basis; structural versus free water and impurities; actual route and starting-material origin; actual site geography and suppliers; complete reporting interval and cohort; signed net delivery Q and unique lot/return history; release R and finished-stock reconciliation; WIP and finished-stock opening/closing carried burdens; actual packaging and storage/dispatch boundary |
| required_quality_disclosure | Inventory gaps, whole input composition, all native restrictions in q_identity and q_water, independent reaction-water evidence, period stock/burden attribution, provider compatibility, treatment endpoints, uncertainties and any return restatement. |
| update_trigger | Change in molecule/salt/hydrate, route, grade, provider geography, delivery gate, stock accounting, analytical method or material operating conditions. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| pliva-2009-carbonate-route | literature | PLIVA, WO2009092991A1 (2009-07-30), paragraphs 0008, 0011, 0019, 0022, 0044 and Example 1.19; https://patents.google.com/patent/WO2009092991A1/en | Inventor primary aqueous heterogeneous conversion/isolation/washing/drying case and CO2 species evidence; no transfer of charges, vacuum, temperature, duration, yield, size or purity as defaults, and no claim that all plants use this route. |
| pmda-jpxvii-mupirocin | standard | PMDA, Japanese Pharmacopoeia XVII (2016), Mupirocin Calcium Hydrate, printed pp.1279-1280, PDF pp.151-152; https://www.pmda.go.jp/files/000217654.pdf | Independent official CAS/formula/organism/hydrate identity, distinction between potency and physical mass, and tight-container evidence; historical monograph does not replace current approved batch specification. The monograph expresses potency in micrograms per milligram on an anhydrous basis; potency is not an inventory denominator. |
| jrc-ilcd-2010-allocation | handbook | European Commission JRC, ILCD Handbook General guide Detailed guidance, first edition March 2010, section 7.9.3, PDF pp277–278 / printed pp257–258; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Virtual subdivision and determining physical causality for attributional shared-service burden assignment only. No product-specific route, composition, yield, emission or utility factor, fixed allocation share, substitution credit or full PEF conformity is supplied. Stock and normalization rules remain PCR-specific consistency reasoning. |
