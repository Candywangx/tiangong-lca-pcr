---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.armament-parts-environmental-manufacturing
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Inert armament component final-cleaning environmental account

## 1. Scope and Applicability

Environmental foreground account for the final aqueous cleaning, environmental acceptance and packaging of one individually supplied complete inert metal armament component. A dataset represents one actual supplier item and environmental configuration, not an assorted parts pool. Earlier technical fabrication is entirely upstream. Record the actual procurement gate, water, single supplied detergent formulation, environmental electricity, separately identified cleaning wastes, accepted component count and independent dry net part mass. This account provides no weapon design, technical manufacturing parameters, geometry, functional details, optimization, operating or assembly tutorial. Applicability requires current records confirming this non-energetic single-component route; an industry label does not establish it.

Exclude whole weapons or vehicles, live/energetic components, ammunition, assemblies of multiple functional parts, customer operation or firing, technical manufacture including machining/thermal processing/coating, weapon integration, functional testing, repair/refurbishment and dismantling. This boundary starts with a physically complete supplied inert component; earlier manufacture remains upstream. Not all component manufacture or complete cradle-to-gate. Cleaning settings, formulation recipes, performance criteria and functional acceptance are outside this methodology. External packaging, removable fixtures, unused cleaning liquids and reusable handling equipment excluded from product M.

Current-worktree material manifest scan and scope reads found no exact inert armament-component final-cleaning method; old44760 remains empty scaffold. Safe general material/metrology rules are reusable. The previously completed own44710 environmental method addresses supplied whole non-live vehicles and coating formulations; it is prior methodology, but component-level accepted-count/independent dry part M, batch cleaning-stock and collected-liquid/filter/textile waste closure are a different procurement/output boundary. This candidate adds no weapon construction method; actual single supplier item, inert state and final-cleaning gate define the bounded refinement, not the classification code. Independent overlap/applicability scientific review remains pending; no other author unfrozen canonical read or accepted mapping claimed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.armament-parts-environmental-manufacturing |
| classification_refs | CPC:3.0:44760; narrower; no accepted mapping claimed |
| covered_products | Environmental foreground account for the final aqueous cleaning, environmental acceptance and packaging of one individually supplied complete inert metal armament component. A dataset represents one actual supplier item and environmental configuration, not an assorted parts pool. Earlier technical fabrication is entirely upstream. Record the actual procurement gate, water, single supplied detergent formulation, environmental electricity, separately identified cleaning wastes, accepted component count and independent dry net part mass. This account provides no weapon design, technical manufacturing parameters, geometry, functional details, optimization, operating or assembly tutorial. Applicability requires current records confirming this non-energetic single-component route; an industry label does not establish it. |
| excluded_products | Exclude whole weapons or vehicles, live/energetic components, ammunition, assemblies of multiple functional parts, customer operation or firing, technical manufacture including machining/thermal processing/coating, weapon integration, functional testing, repair/refurbishment and dismantling. This boundary starts with a physically complete supplied inert component; earlier manufacture remains upstream. Not all component manufacture or complete cradle-to-gate. Cleaning settings, formulation recipes, performance criteria and functional acceptance are outside this methodology. External packaging, removable fixtures, unused cleaning liquids and reusable handling equipment excluded from product M. |
| representative_product | One individually supplied physically complete inert metal component, traceable supplier item and environmental revision, accepted after actual final cleaning. Functional geometry and use instructions withheld. |
| production_route | Supplied inert-component environmental verification; Actual final aqueous-cleaning environmental ledger; Environmental stock and quality acceptance; Independent net-part weighing and separate packaging |
| market_state | New complete dry inert single component at the factory gate, external packaging independent. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Final-cleaning manufacturing-stage environmental account for one supplied complete inert component. |
| How much | 1kg accepted complete dry net component output from independently measured M kg per one same-configuration part. One unit is one supplier item, not part kit, whole weapon or batch. |
| How well | Confirmed complete inert single item and supplier gate, actual clean/dry delivery state, formulation/stock/waste/meter identity and independent original net weighing accepted under current environmental quality plan. No functional or weapon performance criterion. |
| How long or cycle | One final-cleaning acceptance and delivery cycle, no service life. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Single accepted complete inert metal armament component after final aqueous cleaning |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | single supplier item/environmental revision/lot and traceable physical unit ID; confirmed complete inert non-energetic metal component state; actual upstream supplier gate and content, withheld functional geometry; current final aqueous-cleaning environmental work order and one supplied formulation SDS/lot/state; actual water/utility/waste recipient; same-configuration accepted count/reject/rework; original calibrated complete dry net part M kg, independent received/finished mass closure; site/period/allocation/uncertainty; identity/upstream/transport/treatment/scientific applicability gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_energy | prepare_power; clean_power; acceptance_power; dispatch_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual kWh and multiply by3.6MJ/kWh. Preserve original metrology and attribution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Environmental foreground account for the final aqueous cleaning, environmental acceptance and packaging of one individually supplied complete inert metal armament component. A dataset represents one actual supplier item and environmental configuration, not an assorted parts pool. Earlier technical fabrication is entirely upstream. Record the actual procurement gate, water, single supplied detergent formulation, environmental electricity, separately identified cleaning wastes, accepted component count and independent dry net part mass. This account provides no weapon design, technical manufacturing parameters, geometry, functional details, optimization, operating or assembly tutorial. Applicability requires current records confirming this non-energetic single-component route; an industry label does not establish it. |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:44760; single complete inert metal component only |
| recursive_input_rule | Earlier supplied component fabrication remains upstream. No raw alloy plus finished-part double counting and no technical fabrication or weapon assembly inferred locally. Use actual single supplier content/gate; do not assume incoming mass equals finished mass. |
| upstream_dataset_requirement | Boundary extension requires original actual supplier single-item state and upstream scope, actual detergent/medium supply and utility voltage, transport and treatment records. Unknowns disclosed, no full cradle-to-gate assertion. |
| disclosure | Exclude whole weapons or vehicles, live/energetic components, ammunition, assemblies of multiple functional parts, customer operation or firing, technical manufacture including machining/thermal processing/coating, weapon integration, functional testing, repair/refurbishment and dismantling. This boundary starts with a physically complete supplied inert component; earlier manufacture remains upstream. Not all component manufacture or complete cradle-to-gate. Cleaning settings, formulation recipes, performance criteria and functional acceptance are outside this methodology. External packaging, removable fixtures, unused cleaning liquids and reusable handling equipment excluded from product M. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_safe | all processes | Record only environmental procurement, actual utilities, chemicals/wastes and general metrology. Functional/technical fabrication and weapon use excluded; no process settings or protective-performance instructions. Existing supplier records can confirm inert complete state without publishing technical design. |  |
| boundary_water | water; cleaning_effluent | Technosphere supplied municipal water, collected contaminated liquid and actual environmental releases are distinct. EPA includes ordnance context but applicability depends on actual route/direct discharge; no universal legal limit adopted. | epa-environment |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Supplied inert-component environmental verification | required | Confirm one physically complete supplied inert item and environmental configuration; record supplier gate and original received net kg. No technical fabrication or functional characteristics prescribed. | foreground_manufacturing | 1kg complete accepted single component; conditional rows only when actual |
| `clean` | Actual final aqueous-cleaning environmental ledger | required | Account for actual supplied water/detergent, environmental utility meters and distinct liquid/sludge/filter waste records. Filter/sludge rows only when actual; no cleaning recipe or operation settings. | foreground_manufacturing | 1kg complete accepted single component; conditional rows only when actual |
| `acceptance` | Environmental stock and quality acceptance | required | Reconcile actual environmental ledger, clean/dry delivery state and same-item accepted/rejected counts; actual wiping media only if used. No weapon functional acceptance or performance threshold. | foreground_manufacturing | 1kg complete accepted single component; conditional rows only when actual |
| `dispatch` | Independent net-part weighing and separate packaging | required | Original calibrated net M for one complete accepted same-configuration component before external packaging; trace each weighed physical unit and accepted count. | foreground_manufacturing | 1kg complete accepted single component; conditional rows only when actual |

### Process: Supplied inert-component environmental verification (`prepare`)

Confirm one physically complete supplied inert item and environmental configuration; record supplier gate and original received net kg. No technical fabrication or functional characteristics prescribed.

#### Inputs

##### Product flows

###### Single supplied complete inert metal armament component before final cleaning (`incoming_component`)

One actual supplier item/configuration only, physically complete non-energetic metal component. Prior fabrication entirely upstream; environmental inventory identifier and original kg without functional geometry or technical instructions.

- Selected flow: Single supplied complete inert metal armament component before final cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Alternating current (`prepare_power`)

Actual below1kV metered environmental handling/cleaning/metrology/packing demand, original period attribution only. No machining, thermal manufacture or functional weapon test demand invented.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual final aqueous-cleaning environmental ledger (`clean`)

Account for actual supplied water/detergent, environmental utility meters and distinct liquid/sludge/filter waste records. Filter/sludge rows only when actual; no cleaning recipe or operation settings.

#### Inputs

##### Product flows

###### Tap water (`water`)

Actual municipal aqueous-cleaning makeup measured kg with traceable water metrology. Supply not abstraction, wastewater or pollutant release.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_clean`
- Sources:

###### Single supplied aqueous synthetic industrial detergent formulation (`cleaner`)

One actual supplier batch/SDS synthetic formulation received kg; actual concentration/supply state privately recorded for environmental identity, no composition, dilution recipe or cleaning settings prescribed.

- Selected flow: Single supplied aqueous synthetic industrial detergent formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_clean`
- Sources:

###### Finished polypropylene aqueous-cleaning cartridge filter (`filter`)

Conditional only if actual specified polypropylene filter is consumed in environmental cleaning; one finished supplier cartridge type, dry received kg. No equipment/filter installation instructions.

- Selected flow: Finished polypropylene aqueous-cleaning cartridge filter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_clean`
- Sources:

###### Alternating current (`clean_power`)

Actual below1kV metered environmental handling/cleaning/metrology/packing demand, original period attribution only. No machining, thermal manufacture or functional weapon test demand invented.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_clean`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected aqueous component-cleaning effluent sent to treatment (`cleaning_effluent`)

One actual measured contaminated aqueous-liquid stream, wet kg, analytical identity and treatment recipient; direct discharge not assumed.

- Selected flow: Collected aqueous component-cleaning effluent sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_clean`
- Sources:

###### Oily sludge from the aqueous component-cleaning tank (`cleaning_sludge`)

Conditional one actual separated wet sludge stream with measured oil/water/solid composition, kg and treatment destination. Not pooled liquid or wastewater; no composition ranges assumed.

- Selected flow: Oily sludge from the aqueous component-cleaning tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_clean`
- Sources:

###### Oil-contaminated spent polypropylene cleaning cartridge filter (`spent_filter`)

Conditional one actual discarded cartridge including retained contaminant, outgoing kg and waste qualification; cannot use fresh Product-type membrane identity.

- Selected flow: Oil-contaminated spent polypropylene cleaning cartridge filter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_clean.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_clean`
- Sources:

##### Elementary flows

### Process: Environmental stock and quality acceptance (`acceptance`)

Reconcile actual environmental ledger, clean/dry delivery state and same-item accepted/rejected counts; actual wiping media only if used. No weapon functional acceptance or performance threshold.

#### Inputs

##### Product flows

###### Plain woven cotton wiping fabric (`wipe_cloth`)

Conditional actual separately supplied plain cotton woven fabric measured dry kg; identified fibre composition and wet-use returns/waste. No chemical inferred from appearance.

- Selected flow: Plain woven cotton wiping fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### Alternating current (`acceptance_power`)

Actual below1kV metered environmental handling/cleaning/metrology/packing demand, original period attribution only. No machining, thermal manufacture or functional weapon test demand invented.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Detergent-and-oil-contaminated spent cotton wiping cloth (`spent_cloth`)

Conditional one physical spent cotton wiping medium including its actual contamination, wet outgoing kg and recipient. Single waste stream, not two chemical emissions or ordinary fresh cloth.

- Selected flow: Detergent-and-oil-contaminated spent cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### Rejected single inert metal armament component sent to external recovery (`rejected_component`)

Conditional one rejected actual same supplier component type, metal qualification and outgoing kg, recipient; non-energetic state confirmed. No fixed recycling credit or useful coproduct assumed.

- Selected flow: Rejected single inert metal armament component sent to external recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

##### Elementary flows

### Process: Independent net-part weighing and separate packaging (`dispatch`)

Original calibrated net M for one complete accepted same-configuration component before external packaging; trace each weighed physical unit and accepted count.

#### Inputs

##### Product flows

###### Alternating current (`dispatch_power`)

Actual below1kV metered environmental handling/cleaning/metrology/packing demand, original period attribution only. No machining, thermal manufacture or functional weapon test demand invented.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_dispatch`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`film`)

Conditional actual noncellular nonadhesive PE-LD external protective film kg; outside product M. Other actually used packaging each separate.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_dispatch`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Single accepted complete inert metal armament component after final aqueous cleaning (`finished_machine`)

Exactly one actual supplier item/configuration, physically complete non-energetic component after documented environmental final cleaning, original dry net M kg. Not assorted parts, whole weapon, live/energetic assembly, pressure/functional or dimensional performance claim.

- Selected flow: Single accepted complete inert metal armament component after final aqueous cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | First separate actual item/configuration work orders, cleaning batches, meters and issue/return/stock/waste records. Same-item accepted count receives actual rejection/recleaning environmental burden; produced/ordered count is not accepted count. No prior component manufacture duplicated. | ghg-allocation |
| allocation_shared | shared environmental utilities | When separation unavailable use measured causal cleaning-time/load or submetered environmental demand. Actual rack occupancy/accepted item counts and batch rejects must close; mass alone not automatically causal for shared demand. Justify economic/other allocation only after physical relationship cannot be established, with sensitivity. No fixed credit or generic ratio. | ghg-allocation |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted complete single component | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | each accepted physical part; declared representative weighing only with validated same-item evidence | matched final-cleaning acceptance period | actual suitable calibrated part-weighing facility | accepted net mass per unit | individual dry complete-component kg, tare/calibration/traceable physical ID and uncertainty; incoming-finished balance |
| cp_prepare | prepare | independent atomic exchanges | foreground_record | single supplier item/environmental configuration; physical-unit or batch trace IDs; supplier SDS/lot/supply state; kg issues/returns/waste; original water/electricity meters; same-configuration accepted count | Record actual one-item batch and each separate received formulation/physical exchange, calibrated utility meters, issue/return/stock/waste recipient and accepted/reject/reclean count. No part-function, weapon engineering or process-setting detail. | kg; MJ | per unit/batch and full actual period | same-configuration final-cleaning cycle | actual environmental factory gate | attributable process exchange / accepted units | item-state/stock/count closure, calibrated original uncertainty and waste qualification |
| cp_clean | clean | independent atomic exchanges | foreground_record | single supplier item/environmental configuration; physical-unit or batch trace IDs; supplier SDS/lot/supply state; kg issues/returns/waste; original water/electricity meters; same-configuration accepted count | Record actual one-item batch and each separate received formulation/physical exchange, calibrated utility meters, issue/return/stock/waste recipient and accepted/reject/reclean count. No part-function, weapon engineering or process-setting detail. | kg; MJ | per unit/batch and full actual period | same-configuration final-cleaning cycle | actual environmental factory gate | attributable process exchange / accepted units | item-state/stock/count closure, calibrated original uncertainty and waste qualification |
| cp_acceptance | acceptance | independent atomic exchanges | foreground_record | single supplier item/environmental configuration; physical-unit or batch trace IDs; supplier SDS/lot/supply state; kg issues/returns/waste; original water/electricity meters; same-configuration accepted count | Record actual one-item batch and each separate received formulation/physical exchange, calibrated utility meters, issue/return/stock/waste recipient and accepted/reject/reclean count. No part-function, weapon engineering or process-setting detail. | kg; MJ | per unit/batch and full actual period | same-configuration final-cleaning cycle | actual environmental factory gate | attributable process exchange / accepted units | item-state/stock/count closure, calibrated original uncertainty and waste qualification |
| cp_dispatch | dispatch | independent atomic exchanges | foreground_record | single supplier item/environmental configuration; physical-unit or batch trace IDs; supplier SDS/lot/supply state; kg issues/returns/waste; original water/electricity meters; same-configuration accepted count | Record actual one-item batch and each separate received formulation/physical exchange, calibrated utility meters, issue/return/stock/waste recipient and accepted/reject/reclean count. No part-function, weapon engineering or process-setting detail. | kg; MJ | per unit/batch and full actual period | same-configuration final-cleaning cycle | actual environmental factory gate | attributable process exchange / accepted units | item-state/stock/count closure, calibrated original uncertainty and waste qualification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | incoming_component; water; cleaner; filter; cleaning_effluent; cleaning_sludge; spent_filter; wipe_cloth; spent_cloth; rejected_component; prepare_power; clean_power; acceptance_power; dispatch_power; film | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

One unit in the bounded collection interface means one complete single component, never whole weapon or kit. q_item is the actual attributed exchange balance divided by actual accepted count for the same supplier item/configuration. Collect M independently from the same dry delivered component. Preserve kg/MJ numerators; batch/kit gross mass or part count cannot replace net weighing. Public count/area/volume property is not automatically unsuitable, but any conversion requires same-item original measurement; never rewrite reference property to Mass.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_mass | finished_machine | Use actual calibrated suitable part balance, original tare/readings/date/physical ID/configuration/repeats/uncertainty. M is one complete accepted dry inert component only; exclude cleaning/rinse liquid not retained in delivery, racks/fixtures, loose additions, external packaging and test loads. Independently reconcile received individual component net mass and measured removal/retained addition with output M, no assumed1:1. Same-item batch sampling requires validated homogeneity, actual weighed population and uncertainty; otherwise weigh each part. Serial field may be a traceable internal physical weighing-record ID, not an invented manufacturer serial. No catalogue weight or invented per-part mass. | actual original individual-part net metrology and independent received/finished balance |
| quality_supply | incoming_component; cleaner; filter; wipe_cloth | Supplier records confirm one physically complete inert non-energetic metal item, environmental revision and gate without publishing its function or geometry. Separate actual formulation/SDS/lot/supplied state and each filter/textile identity. Thermal-route intermediate public identity is not proof of this supplied finished state; do not add processing to match UUID. Raw cotton or water-treatment fabric is not actual wiping cloth. A fresh membrane is not finished cartridge or spent waste. | actual supplier qualification and original supply-state records |
| quality_water_waste | water; cleaning_effluent; cleaning_sludge; spent_filter; spent_cloth; rejected_component | Actual incoming treated municipal water metrology separate from collected spent bath/rinse, oily sludge and physical filters/textiles. Preserve wet versus dry mass and measured composition, recipient and treatment gate; no assumed polluted-liquid density1kg/L or oil/water ranges. Direct-release and transfer-to-treatment differ. Waste quantities include actual retained contamination once, not duplicated captured material as an environmental emission. Rejected item is waste not useful output, no automatic recovery credit. | epa-environment; actual original waste transfer/composition records |
| quality_emissions | dataset | No air pollutant or water resource is assumed from final aqueous cleaning. Actual elementary releases, if present, require distinct post-control species, measured amount/time, CAS and exact environmental medium/submedium with uncertainty; add separate identified rows. Collected effluent and captured sludge/filter solids are technosphere waste, not freshwater or airborne emissions. No unmeasured release reported as zero; disclose monitoring coverage/gaps. | actual current environmental monitoring and waste records |
| quality_complete | dataset | Close actual supplier-item accepted/reject/reclean/batch counts, water/electricity meters, formulation issues/returns/stock, waste transfers and packaging. Add each real additional input/waste/species separately; missing UUID is not a reason to omit a real flow. Optional filter/sludge/wiping rows not assertions of mandatory equipment or process. Current safe one-item supply and physical/environmental originals required before actual data use, with scientific review pending. | actual complete current environmental ledger and applicability records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Exactly1kg complete accepted dry single-component output; precise reference product name equals finished_machine. Candidate unresolved reference registered exact row_id. Actual independent M/physical single-item scope required; check pass not scientific approval. |  |
| validation_basis | inventory | Stable lowercase row/rule/protocol IDs, same-item accepted count and independent complete dry M with kg/MJ numerator agree in both languages. No batch/kit/weapon mixed denominator. |  |
| validation_safe | dataset | Safe environmental final-cleaning account only; technical manufacture/integration and energetic material excluded. Current actual inert supplied-item and local-route evidence gaps remain scientific review, not invented process facts. |  |
| validation_atomic | all flows | One actual item/formulation/physical waste/species per row, exact official Chinese UUID names and actual property/unit/state. No pool or forced reference identity. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Environmental foreground account for the final aqueous cleaning, environmental acceptance and packaging of one individually supplied complete inert metal armament component. A dataset represents one actual supplier item and environmental configuration, not an assorted parts pool. Earlier technical fabrication is entirely upstream. Record the actual procurement gate, water, single supplied detergent formulation, environmental electricity, separately identified cleaning wastes, accepted component count and independent dry net part mass. This account provides no weapon design, technical manufacturing parameters, geometry, functional details, optimization, operating or assembly tutorial. Applicability requires current records confirming this non-energetic single-component route; an industry label does not establish it. |
| excluded_use | Exclude whole weapons or vehicles, live/energetic components, ammunition, assemblies of multiple functional parts, customer operation or firing, technical manufacture including machining/thermal processing/coating, weapon integration, functional testing, repair/refurbishment and dismantling. This boundary starts with a physically complete supplied inert component; earlier manufacture remains upstream. Not all component manufacture or complete cradle-to-gate. Cleaning settings, formulation recipes, performance criteria and functional acceptance are outside this methodology. External packaging, removable fixtures, unused cleaning liquids and reusable handling equipment excluded from product M. |
| required_metadata | single supplier item/environmental revision/lot and traceable physical unit ID; confirmed complete inert non-energetic metal component state; actual upstream supplier gate and content, withheld functional geometry; current final aqueous-cleaning environmental work order and one supplied formulation SDS/lot/state; actual water/utility/waste recipient; same-configuration accepted count/reject/rework; original calibrated complete dry net part M kg, independent received/finished mass closure; site/period/allocation/uncertainty; identity/upstream/transport/treatment/scientific applicability gaps |
| required_quality_disclosure | Candidate scientific review pending; actual one-item inert gate/local route, independent dry M/uncertainty/accepted count and received-finished balance, formulation/waste/meters/site/period/reclean/shared allocation originals, all missing IDs/upstream/transport/treatment and monitoring gaps. Per-kg component final-cleaning account is not whole-weapon manufacture, use, performance comparison or full cradle-to-gate. |
| update_trigger | Actual supplier item/environmental configuration/inert state/gate, formulation or filter/textile identity, utility/waste route/site/period, mass collection/batch allocation, identity/evidence or scientific overlap decision changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-environment | handbook | U.S. EPA, Metal Products and Machinery Effluent Guidelines, official HTML updated May13,2026, unpaginated overview/Facilities Covered/Related Categories/direct oily discharge sections. https://www.epa.gov/eg/metal-products-and-machinery-effluent-guidelines | Ordnance is within broad sector context; supplied metal-part industrial water/treatment/direct-discharge distinction only. No universal limit or proof of actual factory cleaning route, machinery or current quantity. |
| ghg-allocation | handbook | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapter9 printedp63 / PDFpage65, Tables9.1 and9.2 and physical-relationship paragraph. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Published2011 allocation hierarchy guidance: first avoid/subdivide then physical relationship and justified alternatives. Not weapon engineering evidence, current legal mandate, life-cycle approval or quantitative emission/recycling factor. |
