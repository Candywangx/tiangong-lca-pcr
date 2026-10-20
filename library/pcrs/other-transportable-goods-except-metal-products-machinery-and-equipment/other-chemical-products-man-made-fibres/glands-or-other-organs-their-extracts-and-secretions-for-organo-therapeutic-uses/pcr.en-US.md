---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.glands-or-other-organs-their-extracts-and-secretions-for-organo-therapeutic-uses
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Desiccated porcine thyroid extract API at net delivery gate

## 1. Scope and Applicability

This methodology covers the environmental inventory of a segregated whole desiccated extract from porcine thyroid glands, supplied as a bulk pharmaceutical ingredient at the manufacturer loading/acceptance gate. Bioiberica demonstrates a real desiccated porcine thyroid API supply; the independent Armour label establishes medicinal use of the same animal/tissue-origin material class, without establishing a shared supplier. No pharmacological equivalence is inferred. Sources: `bioiberica-thyroid-api`; `dailymed-armour-thyroid`.

Other animal species, organs, wet glands, secretions, purified T3/T4, synthetic hormones, whole tablets and finished mixed formulations are excluded. The physical identity is animal + tissue + whole extract + desiccated supply state; organotherapy alone is not an identity. The method collects public civilian material, energy, water, waste and quality-boundary records; it provides no biological processing parameters, enrichment or activity-enhancement protocol.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.glands-or-other-organs-their-extracts-and-secretions-for-organo-therapeutic-uses |
| classification_refs | CPC 3.0 35271; narrower |
| covered_products | Whole desiccated porcine thyroid extract API of one declared composition and supply state |
| excluded_products | Other species/tissues; wet organs; purified or synthetic hormones; tablets; mixed preparations |
| representative_product | Desiccated porcine thyroid extract API at net delivery gate |
| production_route | Animal-origin manufacture to desiccated whole API, or explicitly separate purchase/packing of that already manufactured API; actual route must be evidenced |
| market_state | Bulk desiccated API, net product mass excluding packaging, at manufacturer loading gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared whole desiccated porcine thyroid extract API |
| How much | 1 kg actual net delivered API, not new quality-release output |
| How well | Accepted against the actual API specification and batch identity; no inferred potency, clinical dose or equivalence |
| How long or cycle | One declared delivery/accounting period and matched product-route-state cohort; no clinical service duration |
| reference_flow_link | delivered_api |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Glands or other organs, their extracts and secretions, for organo-therapeutic uses `78482d47-aacf-4a25-9229-23e12b5c4b18` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal species and thyroid tissue; whole-extract identity; desiccated as-supplied composition and moisture; actual route; quality specification; batch cohort and period; net delivery gate and returns; opening/closing WIP and finished stocks with carried burdens; supplier and site geography; cold-chain and losses; upstream allocation; packaging and shipment scope |

The native reference is a broad Product flow: basename as displayed; name-property component empty; route “Finished product, manufactured”; mix “Production mix, at plant”; comment repeats the category description; CAS and supply geography are absent. Its only property is reference Mass, coefficient 1. This does not specify animal, tissue, grade, dry state or supplier. Reuse is conditional on all qualifiers above and the one physical delivered row; it supplies no animal-origin evidence, density, clinical quality or background quantities. Exact property → unit-group versions were checked; the reference unit is kg.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | delivered_api | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated gross-minus-tare net extract mass in the declared as-supplied dry state. Q is actual net accepted delivery after returned mass, counted once by lot; unreleased and undelivered stocks are excluded. Moisture and assayed constituents are subledgers, not reference-mass substitutes. |
| raw_units | all inventory rows | Recorded physical property | declared unit | Retain unnormalised period records. Convert mass, integrated energy and volumes using independently supported factors and actual state; rate times duration only for a rate, never multiply an integrated volume by time. No secondary native-property factor is a density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of segregated porcine thyroid tissue with upstream burdens, or receipt of traceable already manufactured whole desiccated API with its complete upstream chain |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | Physical porcine thyroid desiccated API subset; classification does not select tissue or grade |
| recursive_input_rule | Book purchased whole API once as upstream input and only incremental foreground work thereafter; do not recursively rebuild its already included organs or utilities |
| upstream_dataset_requirement | Animal species/tissue, supplied state, farming/slaughter allocation, route, site and geography, transport/cold-chain and losses must be evidenced; no automatic zero-burden organ |
| disclosure | Declare actual start, plant loading acceptance gate, all stages and treatment interfaces, real included storage/packing/handling/dispatch and rework, any omitted stage with reason |

### boundary_complete

Include actual receipt, animal-origin manufacture when foreground, quality testing, refrigeration, cleaning, finishing, packaging, finished storage and dispatch through the stated loading gate. Record each real extra material, fuel, refrigerant, packaging component, waste and emission as a separate atomic exchange with a protocol. No processing sequence or operating setting is prescribed. Beyond-gate transport is a separately disclosed extension, never silently imposed by the at-plant flow.

### inventory_carry

Maintain separate production-release and finished-warehouse/dispatch subledgers. Cancel equal internal transfers when combining them. Closing finished stock is neither another production output nor part of delivered Q. Carry opening and closing WIP/finished-product burdens by the actual matched cohort; retain burdens associated with failed/zero-output runs, rework, losses and returned goods. A returned item reaccepted later is not a second new product or duplicate delivery.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| api_supply | Porcine thyroid API supply environmental ledger | required | All actual stages within declared route and loading gate; upstream purchased API and organ-origin manufacturing are alternatives, not duplicate procurement | foreground | 1 kg net delivered API |

### Process: Porcine thyroid API supply environmental ledger (`api_supply`)

#### Inputs

##### Product flows

###### Segregated porcine thyroid gland feedstock (`thyroid_glands`)

Only the organ-origin manufacturing route uses this input. Record actual tissue, animal origin, supplied wet state and cold-chain losses. Tissue identity and upstream burden cannot be inferred from a food-offal label.

- Selected flow: Porcine thyroid glands
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources: bioiberica-thyroid-api; dailymed-armour-thyroid

###### Purchased whole desiccated API (`purchased_api`)

Only receipt/packing of an already manufactured whole API uses this alternative input. Its supplier dataset must include the animal-origin manufacturing chain; do not also book its embodied glands as another purchase.

- Selected flow: Desiccated porcine thyroid extract
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources: bioiberica-thyroid-api; dailymed-armour-thyroid

###### Metered electricity (`electricity`)

Use actual site electricity for manufacture, refrigeration, storage, handling and dispatch in the declared boundary. No voltage, national mix or supplier is assumed. The inspected CN 1–35 kV consumption-mix identity is not a default for European or unspecified sites.

- Selected flow: Alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

###### Purchased process heat (`purchased_heat`)

Conditional on actual purchased heat. Reconcile the thermal meter and upstream heat supply; onsite fuels and their actual combustion emissions require separate atomic rows, not another count of the same purchased heat.

- Selected flow: Purchased thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

###### Purchased process water (`process_water`)

Record separately acquired water, including documented cleaning use. Water already in purchased tissue, API or a formulation is a composition subledger, not a second water purchase.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

###### Sodium hydroxide cleaning solution (`cleaner`)

Conditional example only when this exact cleaner is acquired. Measure the whole supplied solution and retain its declared composition as a subledger. This card specifies no concentration, sanitation procedure or processing setting. Other actual cleaners require their own cards.

- Selected flow: Sodium hydroxide aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

###### HDPE supply container (`hdpe_container`)

Conditional on this actual container. Record the physical article and reuse life if applicable. Do not assume the supplier uses HDPE; each other real packaging component has its own material row and burden. Packaging mass is outside API Q.

- Selected flow: High-density polyethylene container
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net delivered whole desiccated porcine thyroid API (`delivered_api`)

This single row is exclusively the declared porcine thyroid whole desiccated extract, not other glands, wet tissue, concentrated solution or purified hormone. The broad native basename is retained without treating the covered articles as interchangeable.

- Selected flow: Glands or other organs, their extracts and secretions, for organo-therapeutic uses `78482d47-aacf-4a25-9229-23e12b5c4b18`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_delivery
- Sources: bioiberica-thyroid-api; dailymed-armour-thyroid

##### Waste flows

###### Discarded porcine thyroid tissue residue (`tissue_residue`)

Weigh the actual segregated discarded residue and document its treatment interface. Do not infer yield or reuse suitability. Internal rework remains internal; it is not both this disposal and another purchased organ.

- Selected flow: Porcine thyroid tissue residue
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

###### Discarded desiccated API (`discarded_api`)

Track failed, expired and returned discarded API separately from successful delivery. Include its actual production, holding and treatment burdens according to the matched cohort ledger; no positive Q is created.

- Selected flow: Discarded desiccated porcine thyroid extract
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

###### Aqueous process effluent (`effluent`)

Use measured effluent mass and independently analysed constituents with destination and treatment boundary. COD is a quality indicator, not a species, elemental closure or reaction-water surrogate.

- Selected flow: Aqueous thyroid-processing effluent
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

##### Elementary flows

###### Water evaporated to air (`water_vapour`)

When evaporation crosses the boundary, determine actual removed water from independent measurements. Phase change is not reaction-water formation. Do not fit this amount and unknown reaction water to the same balance residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Report the matched raw-period numerator on the per reference flow basis, using the single reporting calculation in section 8; do not divide during collection.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_environment
- Sources:

## 7. Allocation and Co-product Handling

### animal_upstream_allocation

Do not assign zero upstream burdens to thyroid merely because it is a small slaughter output. Obtain animal-origin and output-class evidence and the actual upstream dataset allocation method. Attribute organ-specific collection, cold-chain, losses and transport directly; document joint-output quantities and allocation drivers without inferring value or yield. The EC method distinguishes farming and slaughterhouse allocations and has binding pig defaults in its own scope; they are not thyroid-specific coefficients and are not imported here. Preserve that distinction when a study chooses a full PEF method. Source: ec-pef-2021.

### foreground_allocation

For shared foreground services first separate attributable operations/meters; justify any remaining allocation by a measured causal relationship, or a disclosed alternative if no causal basis is supported. Keep the unallocated physical ledger and all co-products visible. No clinical-dose, activity or hormone-equivalent allocation is allowed by this mass-based method. Source: ec-pef-2021.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule column declares only the final reporting basis; collection does not perform A/Q. The sole division belongs to the reporting calculation below; cards and this column never divide again.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | api_supply | Net delivery and inventory | weighing_and_stock_ledger | lot; species; tissue; route; state; period; gross; tare; accepted_dispatch; returns; opening_WIP; closing_WIP; opening_finished; closing_finished; carried_burdens; internal_transfer; failed_runs | Owner: site quality and warehouse custodians jointly. Preserve raw unnormalised weights, lot acceptance and return identifiers, quality-release and delivery records, and both stock/burden ledgers. Reconcile unique delivered lots against opening stocks, current receipts/releases, losses and closing stocks. No A/Q during collection. | kg | Every lot and period close | Complete actual period and carried cohorts | Named site and loading acceptance gate | per reference flow | Calibration, stock reconciliation, signed acceptance/returns, composition and supplier origin |
| cp_environment | api_supply | Atomic environmental exchanges and carried burdens | meter_invoice_and_waste_ledger | row_id; lot; period; raw_amount; original_unit; conversions; starting_condition; incoming_composition; opening_WIP_burden; closing_WIP_burden; opening_finished_burden; closing_finished_burden; failed_zero_output; rework; shared_service; allocation_driver; destination | Owner: site environmental data custodian, with meter, production and waste owners. Retain full undivided period numerators, conversion evidence and complete WIP/finished-stock burden carry. Include zero-output/failed runs, real cold-chain/storage/packing/handling/dispatch and rework. Separate each acquired whole formulation from its component subledger; preserve each actual elementary species and receiving medium. No division by delivery or release during collection. | kg; kWh; MJ by atomic row | Each batch/meter interval and period close | Full matched period, including opening carry and failed runs | Declared site, actual upstream interface and destination | per reference flow | Invoices, meters, assays, treatment manifests, loss and burden reconciliation; explicit missing versus zero |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| net_delivery_basis | all inventory rows | Q = sum of unique accepted gross-minus-tare dispatched API mass minus returned mass in the declared cohort; require Q > 0. For each exchange j, assemble the attributable numerator A_j from unnormalised full-period records and opening carried burdens, less supported closing WIP and finished-stock carry, with actual allocation and internal-transfer cancellation. Report A_j / Q once per 1 kg net delivered reference. The card instruction and aggregation basis describe this same reporting operation, never sequential divisions. Retain excluded closing burdens for the next period, and retain failed/zero-output/rework burdens in their documented cohorts; zero-output periods carry burdens and do not yield a normalized product dataset. | cp_delivery; cp_environment | Exchange amount per 1 kg net delivered API |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| origin_state | all inventory rows | Keep animal/tissue, actual route, whole formulation, moisture and supplied state distinct. Supplier example European origin cannot establish every producer geography or batch origin; the medicinal label is not a supply-chain identity link. | bioiberica-thyroid-api; dailymed-armour-thyroid; cp_delivery |
| physical_balance | all inventory rows | Reconcile full unallocated physical mass and relevant elements over opening inventory + external inputs = actual outputs + closing inventory; internal transfers cancel. Establish actual species, water formation/consumption and phase/structural/free-water changes independently. Neither COD nor a closure residual supplies unknown species or reaction water. Disclose residual uncertainty rather than invent a missing outlet. | cp_delivery; cp_environment |
| identity_limits | delivered_api | Broad native reference is not a species, organ, desiccated-state or grade specification. Use it only with the full porcine thyroid qualifiers and one finished physical row. Other actual exchanges require compatible local identities and providers; auxiliary UUID gaps do not erase measured burdens. | cp_delivery; cp_environment |

## 9. Validation Rules

### validate_identity

Reject interchange of tissues, animal species, purified actives and whole extracts, or omission of the native flow limitations. The explicit reference link must select the unique terminal Product output with the same UUID in both languages; real co-products or intermediates cannot be hidden or renamed to bypass that check.

### validate_ledger

Require positive unique net delivered Q, complete raw numerators and carried WIP/finished-stock burdens. Reject inventory counted in delivery Q, duplicate reacceptance, omission of failed/zero-output burdens, repeated A/Q, integrated-volume times time, and duplicate component purchases. Unknown values remain gaps, never zero.

### validate_boundary

Check all actually included storage, packing, handling, dispatch, cold-chain, rework, waste destinations and actual elementary media. Require independent physical/element balances and species/water evidence. Missing site measurements or provider matches require explicit uncertainty and completion before a concrete dataset is accepted; this method establishes no scientific approval, clinical claim or publication permission.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Traceable environmental modelling of this declared whole API supply |
| allowed_use | Only matched animal/tissue, whole extract, dry supply state, route, geography and net delivery gate |
| excluded_use | Clinical efficacy, dosing, hormone equivalence, other organs/species, unspecified mixtures and unverified biotechnology operation |
| required_metadata | All reference qualifiers, protocol owners, period/cohort, allocation, upstream datasets, stock and carried-burden reconciliation, supplier geography and actual boundary |
| required_quality_disclosure | Native broad-identity limits, auxiliary UUID/provider gaps, missing measurements, balance uncertainty and unreviewed scope |
| update_trigger | Change of species/tissue, whole-extract composition, state, route, gate, supplier/upstream allocation or inventory carry method |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| bioiberica-thyroid-api | handbook | Bioiberica, Thyroid API; https://www.bioiberica.com/en/products/human-health/thyroid-api | Manufacturer identity example: porcine thyroid origin and desiccated API; its European-origin claim is supplier-specific. No inventory, universal process route or yield is supplied. |
| dailymed-armour-thyroid | official_guidance | DailyMed, Armour Thyroid label, setid 56b41079-60db-4256-9695-202b3a65d13d; https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=56b41079-60db-4256-9695-202b3a65d13d | Label evidence of actual medicinal use and porcine thyroid from food-chain pigs; tablet excipients are outside the bulk API identity. Label states unapproved drug and is not FDA efficacy approval; no dose, potency, API mass fraction or plant performance is inferred. |
| ec-pef-2021 | official_guidance | European Commission C(2021) 9332 final, Annex I, pp. 63–64, 68, 70; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General multifunctionality and animal/slaughterhouse scope. Pig table is not a thyroid-specific coefficient; no numerical factors are transplanted. A study claiming full PEF must retain its binding defaults and classify its actual output correctly; this PCR alone does not establish full PEF conformity. |
