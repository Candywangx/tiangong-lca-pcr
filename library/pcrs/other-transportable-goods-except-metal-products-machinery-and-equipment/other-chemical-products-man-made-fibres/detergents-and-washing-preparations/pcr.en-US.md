---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.detergents-and-washing-preparations
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Liquid laundry detergent by purchased-blend formulation

## 1. Scope and Applicability

This PCR covers one aqueous liquid laundry detergent made by physically blending a purchased complete anionic/nonionic surfactant mixture of BIO-SOFT LD-190 grade, purchased STEPANATE SXS sodium xylene sulfonate liquid, separately acquired sodium chloride and urea, and deionised water. Supplier formulation 297 establishes an actual route and ingredient roles, not an industry recipe. No ingredient proportions, temperature, mixing time, yield, energy intensity, density, dose, performance or stability default is adopted. Actual approved formula and assays define each dataset.

Exclude soap saponification, surfactant synthesis/ethoxylation/sulfation/sulfonation or acid neutralization in the foreground, spray-dried powder, detergent bars or unit-dose pods, dishwashing products, toilet/personal-care preparations and disinfectants. A changed use label alone does not establish a new PCR. SLES is not non-ethoxylated SDS; chain/EO distribution, active content, carrier water, salts and powder/paste/liquid state are not interchangeable. An alternate blend or route requires physical identity and boundary reassessment before reuse.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.detergents-and-washing-preparations |
| classification_refs | CPC 3.0 35322; narrower semantic scope; mapping acceptance is separate |
| covered_products | Aqueous liquid laundry detergent from the declared purchased-blend route |
| excluded_products | Exclude soap saponification, surfactant synthesis/ethoxylation/sulfation/sulfonation or acid neutralization in the foreground, spray-dried powder, detergent bars or unit-dose pods, dishwashing products, toilet/personal-care preparations and disinfectants. A changed use label alone does not establish a new PCR. SLES is not non-ethoxylated SDS; chain/EO distribution, active content, carrier water, salts and powder/paste/liquid state are not interchangeable. An alternate blend or route requires physical identity and boundary reassessment before reuse. |
| representative_product | Formulation-297-type liquid laundry detergent; actual supplier lots and approved formulation required |
| production_route | Receive whole commercial preparations and solids; dose and blend in water; dissolve; inspect and adjust only within approved formula; hold/rework; fill; store and dispatch |
| market_state | Homogeneous aqueous liquid, supplied net detergent mass excluding packaging, at factory dispatch gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the specified liquid laundry detergent at the factory net-delivery gate |
| How much | 1 kg net supplied detergent |
| How well | Meets the actual declared formulation, active/solids/water profile, pH and release tests; no fixed cleaning efficacy or equivalence per wash |
| How long or cycle | One matched reporting period and supplied-product cohort; storage and shelf-life claims must have their own evidence |
| reference_flow_link | detergent_delivered |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Liquid Detergent `c1214ed0-28a4-4273-a8c9-a4f29351747a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | approved formula and supplier grades; anionic/nonionic composition and solvent information; active matter and water/salt assay with method; liquid state and temperature; net delivery gate and Q ledger; lot and period; opening/closing WIP and finished stock with carried burdens; packaging and warehouse/dispatch scope; site and provider geography; quality acceptance and label instructions; density method if volume is converted |

All required qualifiers must appear in dataset metadata, process notes, reference-flow comment or equivalent fields; missing qualifiers leave the dataset incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg net supplied whole liquid detergent, not dry solids, surfactant active mass, gross package mass or a wash service. Q is actual net delivered mass of the same approved liquid formulation and cohort, not newly released production P. |
| stock_gate | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Maintain signed dispatch/return events, opening/closing finished stock and WIP and their carried burdens. P is a distinct internal production-release quantity. Cancel P transfers when combining production and warehouse ledgers. Undelivered stock is excluded from Q and retains its burdens; repeat acceptance of returned/reworked material is not new production. |
| whole_preparation | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each whole purchased wet preparation once; active matter, ethanol, salt and carrier water are composition subledgers, not duplicate purchases. Use lot-specific validated density for volume-to-mass conversion at actual temperature. An integrated volume is never multiplied by time again. Preserve numerator units for electricity and steam. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased complete LD-190-grade surfactant blend and SXS liquid, sodium chloride and urea at site receipt; purchased DI water at supplier plant plus actual delivery; disclosed opening WIP/finished-stock carry-ins |
| starting_condition_role | foreground formulation-to-net-delivery gate with burdened stock continuity |
| product_classification_scope | Only the specified liquid laundry formulation; not all CPC 35322 products |
| recursive_input_rule | Returned or internally reworked detergent retains identity and burdens; cancel internal transfers. Purchased detergent premix is one external preparation with its own upstream provider, never free recursive feed. |
| upstream_dataset_requirement | Link supplier- and state-compatible datasets for whole purchased preparations, chemicals, water, utilities, packaging and transport; foreground-only data are not automatically cradle-to-gate. Retain actual geography, technology and representativeness limits. |
| disclosure | Disclose ingredient and final-product specifications, supplier-boundary mismatch, process split, packaging, warehousing/dispatch, returns, zero-output runs, stock balances and uncertainty. Declare any excluded downstream distribution/use separately. |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | all processes | Include receipt, dosing, dissolution/blending, actual heating/cooling, quality control, rejects/rework, cleaning, wastewater collection, filling, product storage and factory dispatch. Add every actual omitted chemical, package component, fuel, refrigerant, waste or identified emission as a separate atomic row before dataset completion; absence requires evidence. | stepan297; epa-detergents |
| b_upstream | purchased inputs | Keep synthesis of purchased complete surfactants/blends upstream; do not add upstream sulfation or neutralization reactants again as foreground purchases. Any actual onsite synthesis changes applicability and requires an explicit route review. | stepan297; stepan-ld190 |
| b_stock | production and dispatch | Use Q at actual net dispatch, with unique accepted supplied lots and signed returns. Reconcile P, opening/closing WIP and finished stock, internal handoffs, sampling, losses and returns. Assign carrying manufacturing and warehouse burdens by traced lots; do not discard failed/zero-output batch burdens or make closing stock an additional delivery. Keep stock burden transfers outside the external-exchange total. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| formulate | Purchased-blend formulation through factory net delivery | required | The specified aqueous liquid route | foreground | 1 kg net delivered liquid detergent |

One process envelope contains production and a separately reconciled finished-goods warehouse/dispatch ledger. Internal release P and warehouse handoffs cancel; only detergent_delivered is the external terminal Product output. Stock quantities and burden transfers remain explicit subledgers, not additional external outputs. All included operations and extra actual atomic exchanges remain required.

### Process: Purchased-blend formulation and net delivery (`formulate`)

#### Inputs

##### Product flows

###### Purchased surfactant blend (`blend`)

One whole commercial formulation. Supplier describes an anionic/nonionic liquid blend; US SDS identifies proprietary blend and ethanol CAS64-17-5, with withheld exact composition. The web solids figure and SDS hazard-disclosure percentages are different quantities and cannot be equated to active fraction. Obtain current lot CoA/SDS and water/active/solvent/salt assay; no universal recipe, water remainder or ethanol release fraction.

- Selected flow: Liquid anionic/nonionic surfactant blend, BIO-SOFT LD-190 grade
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: stepan297; stepan-ld190; stepan-ld190-sds

###### Purchased hydrotrope solution (`sxs`)

Record the entire supplied liquid preparation with actual grade and lot assay. Supplier distinguishes active matter from solids; neither is a universal purity or water-by-difference value. Its water and salts are already inside this purchase. Dry SXS and other sulfonates do not substitute without reassessment.

- Selected flow: STEPANATE SXS liquid sodium xylene sulfonate preparation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: stepan297; stepan-sxs

###### Separately acquired sodium chloride (`salt`)

Separate physical purchase with actual moisture and purity. Excludes salt already carried by commercial preparations. The source recipe is not a dosing target.

- Selected flow: Sodium chloride solid for detergent formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: stepan297

###### Separately acquired urea (`urea`)

Record actual technical grade and assay, not fertilizer nutrient-equivalent kg or coated granules. Retain nitrogen in full mass/element balances and actual wastewater analysis; do not infer ammonia generation or an air emission from nitrogen closure.

- Selected flow: Uncoated technical urea solid for liquid detergent formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: stepan297

###### Formulation and cleaning DI water (`water`)

CAS7732-18-5; native name components specify production mix at plant and ion exchange or reverse osmosis, pure substance. Native comment additionally mentions distillation and consumer supply but does not override the narrower name-route/gate. Geography and numerical quality specification are absent; no CN/HK origin, supplier delivery or density is established. Add actual delivery/provider burdens once. Only actual compatible DI water qualifies; onsite water production must be inventoried explicitly.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water
- Sources: stepan297

###### Electricity for formulation and dispatch (`electricity`)

Meter blending, pumping, testing, cleaning, filling, ventilation, warehouse and electric handling. Allocate shared loads from complete records, including idle and zero-output runs. Specify grid/location/voltage and transmission boundary; do not turn the supplier blend sequence into a zero-energy assumption.

- Selected flow: Purchased electricity at detergent-site meter
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_energy
- Sources: stepan297; epa-detergents

###### Purchased process steam when used (`steam`)

Conditional actual heating/cleaning duty; collect delivered heat or steam mass with enthalpy/condensate basis and losses. No supplier recipe temperature or generic steam intensity. If absent, retain documented non-applicability. Onsite fuel/boiler inventory must replace purchased steam with actual atomic inputs and emissions, without counting heat twice.

- Selected flow: Purchased saturated process steam
- Flow property / unit: Energy / MJ
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_energy
- Sources:

###### HDPE detergent bottle body (`bottle`)

Actual filled-pack configuration; exclude cap, label and detergent mass. Include attributable fill rejects and actual packaging inventories; bulk delivery may mark absent with evidence.

- Selected flow: Empty HDPE liquid-detergent bottle body
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources:

###### Polypropylene closure (`cap`)

One actual cap component; liner or seal and any other supplied component require their own rows if present.

- Selected flow: Polypropylene detergent-bottle screw cap
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources:

###### Printed bottle label (`label`)

One supplied composite label, with supplier composition and adhesive/ink boundary disclosed. Do not also buy its embodied ink or adhesive in the foreground.

- Selected flow: Printed self-adhesive paper detergent-bottle label
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources:

###### Corrugated transport carton (`carton`)

One complete supplied carton; actual board composition, losses and warehouse/dispatch use. Pallet, stretch film or other actual components must have additional separate rows.

- Selected flow: Finished corrugated cardboard transport carton
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net supplied liquid laundry detergent (`detergent_delivered`)

Terminal net-delivered detergent, selected uniquely by reference_flow_link. Native Product flow basename Liquid Detergent / 液体洗涤剂 and English comment describe laundry liquid; CN comment confusingly calls it liquid washing powder. Treat that wording as metadata debt, not permission for powder substitution. All other native name components, CAS, grade, route and geography are unspecified; only Mass is provided, reference factor 1. The record does not verify formula, density, provider, cold-water/oily-stain/hard-water performance or sensitive-skin claims. Dataset qualifiers and actual tests must supply these; no universal performance assumption.

- Selected flow: Liquid Detergent `c1214ed0-28a4-4273-a8c9-a4f29351747a`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_delivery
- Sources: stepan297; stepan-ld190

##### Waste flows

###### Contained detergent washwater (`washwater`)

One contained waste-liquid transfer, including actual dissolved ingredients/solvent; specify composition, receiver and treatment route. No simultaneous elementary discharge of this same load. COD/BOD are analytical indicators, not invented molecular species or reaction-water evidence.

- Selected flow: Contained aqueous liquid-laundry-detergent equipment washwater for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste
- Sources: epa-detergents

###### Discarded off-spec liquid detergent (`reject`)

Only physical discard, including actual scrapped returned lots and line heels; retained WIP/internal rework is not this external waste. Trace treatment and retained water/organics/salts once.

- Selected flow: Off-spec liquid laundry detergent sent for disposal
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste
- Sources:

###### Discarded surfactant-blend drum (`empty_blend_drum`)

One actual discarded incoming container including retained residue, weighed and characterized. Separate drum polymer and liquid only when physically separated; do not repeat retained detergent in another waste row. Returned reusable drums retain actual return transport and cleaning burdens rather than invented disposal.

- Selected flow: Empty HDPE surfactant-blend drum with retained residue for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste
- Sources:

##### Elementary flows

###### Water vapour to air (`water_vapour`)

Only independently measured or supported physical evaporation from the actual boundary. No assumed reaction-water generation for dissolution/blending and no closure-residual fit. Condensed/recovered water and liquid in waste are not this atmospheric exchange.

- Selected flow: Water vapour released to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources:

###### Identified ethanol emission to air (`ethanol_air`)

Ethanol CAS64-17-5 is disclosed in LD-190 SDS, but presence does not establish emission quantity. Require actual species-specific measurement or independently supported solvent balance, compartment and capture efficiency. Do not identify all total VOC as ethanol or all purchased ethanol as emitted. Other detected species require separate rows.

- Selected flow: Ethanol released to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: stepan-ld190-sds

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_separate | all processes | Separate other products by actual submeter/batch/line records first. For shared utilities and warehouse operations use documented causal drivers such as occupied tank-hours, metered machine-hours and pallet-days; reconcile allocated totals to the full raw-period record. No equal split, negative waste credit or cleaning-performance allocation default. |  |
| a_rework | returns and stock | Carry actual burdens with WIP and finished stock into the next ledger and retain incremental rework, storage and transport. Internal rework is not a co-product, an external purchase or a second accepted output. Treat discarded detergent as waste with actual treatment; no assumed market value or avoided production. |  |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

Each collection_method retains raw-period numerators and complete WIP/finished-stock carry-in/out burdens without A/Q. aggregation_rule declares only the final reporting basis. It does not perform a division during collection or after the card expression; normalize_delivery alone owns the single reporting division. Each listed owner is accountable for its protocol, with joint quality/warehouse ownership for cp_delivery.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | formulate | ingredient receiving and dosing | purchase and batch records | lot; supplier grade/SDS/CoA; whole preparation wet mass; active/water/ethanol/salt assay and method; solid moisture/purity; receipt/dose/return events; raw opening/closing stock and carried burdens | Production materials owner reconciles calibrated scales, tank inventories, invoices and actual dosing for every run, including failed batches, rework and zero-output runs. Preserve complete raw period numerators and carry-in/out burdens; do not divide by Q here. | kg | each receipt and batch | complete actual matched period plus opening/closing carryover | declared production site and finished-goods warehouse through dispatch | per 1 kg reference flow | signed source records; calibration; full lot and burden reconciliation |
| cp_water | formulate | separately supplied DI water | meter and supply record | source and route; meter start/end; integrated volume or mass; temperature/density if converted; formulation/cleaning split; supplier gate/delivery | Water-system owner retains calibrated meter differences and delivery invoices as raw quantities, excluding water already purchased inside preparations. Record actual treatment and delivery boundary; do not divide by Q. | kg; m3 | each batch and period | complete actual matched period plus opening/closing carryover | declared production site and finished-goods warehouse through dispatch | per 1 kg reference flow | signed source records; calibration; full lot and burden reconciliation |
| cp_energy | formulate | electricity and steam separately | meter and operating logs | meter readings; kWh; steam MJ or mass/enthalpy; actual rates and duration if not integrated; grid/voltage; heating/cooling; test/cleaning/warehouse/handling allocation; idle/rework/failed-run loads; carrying stock burdens | Utilities owner collects full raw-period meters and causal allocation records independently for each energy carrier. Distinguish rate times duration from already integrated quantities. Retain stock-attributed burdens and actual operations; do not divide by Q. | kWh; MJ | continuous and each period | complete actual matched period plus opening/closing carryover | declared production site and finished-goods warehouse through dispatch | per 1 kg reference flow | signed source records; calibration; full lot and burden reconciliation |
| cp_pack | formulate | each supplied packaging component | packaging ledger | component and configuration; supplier bill of materials; empty/gross/net mass; received/used/rejected/returned components; opening/closing packaging stock; filling losses; reuse and dispatch records | Packaging owner weighs each component and reconciles actual packaging consumed with fills, rejects and stock. Include real warehousing/handling/return burdens and assigned carry-ins; keep detergent Q free of packaging mass; do not divide by Q. | kg | each configuration and period | complete actual matched period plus opening/closing carryover | declared production site and finished-goods warehouse through dispatch | per 1 kg reference flow | signed source records; calibration; full lot and burden reconciliation |
| cp_delivery | formulate | reference gate and stock continuity | release warehouse and signed dispatch ledger | lot/cohort and formulation; P unique first positive release; signed dispatch and return masses; net Q; tare; opening/closing WIP and finished mass and full burden vectors; failed/zero-output runs; rework histories; stock age and pallet-days; internal transfers; sample/heel/loss events | Quality and warehouse owners jointly reconcile calibrated net weights with unique release, acceptance, dispatch and return events. Select actual net factory delivery Q, distinguish P, reverse returned dispatches and prevent duplicate reacceptance. Trace cross-period returns and retained stock with original burdens; never reset their burden to zero. Keep Q and all raw carry records, without normalizing exchanges. | kg; pallet-day | each event and period close | complete actual matched period plus opening/closing carryover | declared production site and finished-goods warehouse through dispatch | per 1 kg reference flow | signed source records; calibration; full lot and burden reconciliation |
| cp_waste | formulate | each waste transfer separately | weighing analytical and treatment manifest | individual stream; mass/volume/density; actual composition including water/ethanol/urea/salts; COD/BOD method; sampler; treatment receiver; retained drum residues; internal recovery; stock changes | Waste owner reconciles full raw-period waste weights, representative analyses and transfer manifests, with boundaries excluding internal recycle and avoiding duplicate elementary loads. Keep uncertainty and failed-run wastes; do not divide by Q. | kg | each transfer and representative sample | complete actual matched period plus opening/closing carryover | declared production site and finished-goods warehouse through dispatch | per 1 kg reference flow | signed source records; calibration; full lot and burden reconciliation |
| cp_emission | formulate | each identified atmospheric species | species-specific measurement and balance | species/CAS; air compartment; source and capture device; actual integrated gas volume and conditions or rate/duration; concentration and blank; solvent inventory; condensate; uncertainty; water evaporation evidence | Environmental owner retains raw full-period species tests and supported solvent/water balances across blending, filling and storage. An SDS constituent, total VOC, COD or closure residual cannot establish a species emission. Already integrated gas volume has no extra time factor. Collect raw quantities and carried burden evidence; do not divide by Q. | kg; m3 | representative operations and each period | complete actual matched period plus opening/closing carryover | declared production site and finished-goods warehouse through dispatch | per 1 kg reference flow | signed source records; calibration; full lot and burden reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert each raw numerator to its declared unit once using actual calibrated factors: mass = integrated liquid volume times lot/temperature-specific density; a genuine rate is integrated over its actual duration. Already integrated volume has no additional time multiplier. Keep each stream and uncertainty separate; no manufacturer density default. | raw_numerators; actual_conversion_factors | unit-consistent raw amounts |  |
| reconcile_stock | all inventory rows | For each traced product cohort, assign full converted period burdens plus opening WIP/finished-stock burdens, then transfer closing WIP/finished-stock burdens to their own continuing ledger with causal storage/rework attribution. Cancel internal P/handoffs. The delivered burden numerator A_j retains the matched delivered cohort share of failed/zero-output production, rework, rejects, cleaning, filling, storage and factory dispatch. Reconcile all vector components to the complete ledger; no burden disappears. Do not divide by Q in this step. | converted_raw_amounts; opening_burden_vectors; closing_burden_vectors; signed_dispatch_events; cp_delivery | A_j and Q; stock burden continuity |  |
| normalize_delivery | all inventory rows | Report a_j = A_j / Q once for the same net-delivered liquid formulation and cohort, Q > 0 kg; terminal output = 1 kg. Collection protocols preserve raw numerators. This is the sole division by Q: card amount rules and protocol aggregation references describe this same reporting operation, not additional divisions. A zero-delivery cohort retains burdens and cannot yield a per-kg dataset. | A_j; Q; cp_delivery | a_j per 1 kg net delivered detergent |  |
| physical_balance | all inventory rows | Reconcile complete physical mass and relevant C/N/S/Na/Cl elements across all whole inputs, opening/closing WIP/finished stock, actual deliveries/returns, samples, waste and independently identified emissions. Keep active matter, carrier water, free water and dissolved solids as composition subledgers; no double procurement. Dissolution and physical mixing imply no assumed net reaction water. Actual reaction/species/water changes require independent chemical evidence; do not fit unknown water and an unknown outlet to a common residual or infer species from COD/total VOC. Retain unexplained imbalance for review. | whole_input_masses; stock_masses; composition_assays; delivery_and_return_masses; measured_waste; identified_emissions | physical and element reconciliation with independent species evidence | stepan297; stepan-ld190-sds |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | Verify complete supplied formulation/grade, state, medium, provider, geography and boundary. Native UUID establishes broad physical identity only; keep all native limitations in descriptions and dataset metadata. No unsupported equivalence of grades, actives, solids or powder/liquid. | CoA/SDS; lot/formula approval; provider match; native identity review |
| q_complete | all inventory rows | Use a complete actual matched period with all runs, inventories and burden carryovers. Meter calibration, detection limits, shared allocation, sample representativeness and uncertainty remain explicit; missing measurements are not zero. | Full raw ledgers; calibration; signed inventory and delivery reconciliation |
| q_source | all processes | Manufacturer starter formulation and product/SDS documents provide a bounded route and identity, not cross-site quantitative defaults. SDS disclosure is incomplete and partly proprietary; solids, active matter and hazardous-ingredient percentages have different bases. Validate actual matrix-specific assays, formulation suitability and packaging stability. | Actual qualification tests and current supplier documents |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | reference product | Require all qualifiers and one terminal Product output detergent_delivered with the declared reference UUID and 1 kg whole liquid basis. Reject unverified powder/SDS/SLES substitution, active-kg normalization, packaging-in-Q or unmatched cohorts. |  |
| v_ledger | all inventory rows | Require positive actual net-delivery Q, distinct P, full signed stock/return events and all carrying burdens; one normalize_delivery operation only. Reject doubled internal output, discarded closing-stock burden, omitted zero-output/rework/storage/dispatch load and manufactured new output from repeated acceptance. |  |
| v_species | all inventory rows | Require whole-preparation purchases, separate real atomic exchanges, physical/element reconciliation and independent species evidence. Do not treat total VOC, COD, SDS ranges or closure residuals as emission species, reaction water, yield or density. A waste transfer and its downstream discharge must not repeat the same load. | stepan-ld190-sds; epa-detergents |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Input of the declared net-delivered liquid laundry formulation to a downstream model |
| allowed_use | Same formulation family, supply state, gate and evidenced geography/technology with explicit provider match |
| excluded_use | Generic industry recipe; powder/SLES/SDS manufacture; washing service per load; universal efficacy, safety or regulatory claim; automatic cradle-to-gate claim |
| required_metadata | approved formula and supplier grades; anionic/nonionic composition and solvent information; active matter and water/salt assay with method; liquid state and temperature; net delivery gate and Q ledger; lot and period; opening/closing WIP and finished stock with carried burdens; packaging and warehouse/dispatch scope; site and provider geography; quality acceptance and label instructions; density method if volume is converted |
| required_quality_disclosure | Foreground scope; complete carry-in/out burden ledger; provider and geography gaps; calibration and matrix assay limitations; missing auxiliary UUIDs and quantitative ranges |
| update_trigger | Formula/grade/state/route/gate/provider or packaging change; revised assay or new compatible primary evidence; stock/burden reconciliation defect |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| stepan297 | handbook | Economy Liquid Laundry Detergent with BIO-SOFT LD-190, No.297; revision 2020-04-22; https://www.stepan.com/content/dam/stepan-dot-com/webdam/website-product-documents/starter-formulations/StepanFormulation297.pdf; accessed 2026-10-16 | pp1-2: actual ingredient roles and blending order only. Manufacturer starter formulation; no proportions, physical-property values, dose, stability, scale-up, yield or energy default. Own-study and no-warranty limitations retained. |
| stepan-ld190 | handbook | BIO-SOFT LD-190 manufacturer product page; https://www.stepan.com/content/stepan-dot-com/en/products-markets/product/BIOSOFTLD190.html; accessed 2026-10-16 | Liquid anionic/nonionic commercial blend identity, not exact composition or industry active fraction. Solids and RVOC entries do not establish recipe water or actual emissions. |
| stepan-sxs | handbook | STEPANATE SXS manufacturer product page; https://www.stepan.com/content/stepan-dot-com/en/products-markets/product/STEPANATESXS.html; accessed 2026-10-16 | Liquid sodium xylene sulfonate preparation role; active and solids are distinct product descriptors. No purity, density, carrier-water or use-rate default. |
| stepan-ld190-sds | handbook | BIO-SOFT LD-190 US SDS v1.0, revision 2023-10-24; https://www.stepan.com/content/dam/stepan-dot-com/webdam/website-product-documents/safety-data-sheets/sds/US01_PJ113_BIO-SOFT_LD-190_US_English_US.pdf; accessed 2026-10-16 | Sections1/3 identify industrial surfactant mixture and ethanol; proprietary/incomplete composition and US hazard scope. Not an emission factor, active assay or universal geographic/plant/process specification. |
| basf-surfactants | handbook | BASF Standard Surfactant & Alcohol; https://promo.basf.com/campaign/qrcode-emo/Standard%20Surfactants%201.pdf; accessed 2026-10-16 | p10 counterevidence: SLS/SLES and commercial powder/granule/liquid/paste grades differ. No adoption of BASF grade percentages or substitution into the declared LD-190 recipe. |
| epa-detergents | official_guidance | US EPA Soap and Detergent Manufacturing Effluent Guidelines; updated 2026-05-08; https://www.epa.gov/eg/soap-and-detergent-manufacturing-effluent-guidelines; accessed 2026-10-16 | Industrial process distinctions and wastewater from cleanouts, reclamation, leaks and spills. US regulatory overview only; no present non-US legal applicability, emission factor or wastewater-zero assumption. |
