---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.pile-fabrics-and-terry-fabrics-knitted-or-crocheted
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pile fabrics and terry fabrics, knitted or crocheted

## 1. Scope and Applicability

This PCR covers the manufacture of knitted or crocheted pile fabrics and terry fabrics classified to CPC 3.0 code 28110. It applies to greige or finished fabric sold by mass at the manufacturing gate when the pile or loop construction, fibre composition, fabric state, and included processing route are declared.

It excludes woven pile and chenille fabrics, woven terry towelling, narrow fabrics, tufted fabrics, nonwovens, carpets, garments, made-up textile articles, and ordinary knitted or crocheted fabrics without a pile or terry structure. Fibre and yarn production are linked upstream datasets rather than foreground operations unless explicitly brought into scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.pile-fabrics-and-terry-fabrics-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28110 |
| covered_products | Pile fabrics and terry fabrics formed by knitting or crocheting, in greige, bleached, dyed, printed, or otherwise finished state as declared. |
| excluded_products | Woven pile, chenille, and terry fabrics; narrow fabrics; tufted and nonwoven fabrics; carpets; garments; made-up articles; and knitted or crocheted fabrics without pile or terry construction. |
| representative_product | Production mix, at plant, of saleable knitted or crocheted pile or terry fabric meeting the declared construction and quality specification. |
| production_route | Yarn receipt and verification; yarn preparation; pile or terry knitting/crocheting; conditional wet treatment; drying and finishing; inspection and trimming. |
| market_state | Saleable fabric at the manufacturing gate, with greige or finished state explicitly declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable pile fabric or terry fabric formed by knitting or crocheting and meeting the declared product specification. |
| How much | 1 kg of saleable fabric on the declared dry or conditioned mass basis at the manufacturing gate. |
| How well | Meets the declared pile or loop construction, fibre composition, usable width, mass per unit area, colour/finish, and lot acceptance criteria. |
| How long or cycle | One completed manufacturing batch or reporting-period production mix; no use-stage service life is assigned. |
| reference_flow_link | The reference flow is the net mass of conforming saleable fabric required to provide the functional unit. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pile fabrics and terry fabrics, knitted or crocheted `19330422-9245-41a2-9f99-a7c599c7c427` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pile or terry construction; knitting or crocheting route; fibre type and mass fraction; dry or conditioned mass basis; reference moisture or conditioning method; mass per unit area; usable width; greige/bleached/dyed/printed/finished state; pile or loop height/density where specified; mill geography; reporting period; included and outsourced operations |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | Reference product and textile inputs/outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or convert all textile masses to one declared dry or conditioned basis; retain the conditioning method or measured moisture used for conversion. |
| `composition_balance` | Ground, pile, and loop yarns and reference fabric | Mass fraction | kg/kg | Determine fibre fractions from bill of materials, lot specification, or test record; declared fractions shall sum to 1 within the stated rounding tolerance. |
| `area_mass_conversion` | Fabric records measured by area or length | Mass, area, usable width | kg, m2, m | Convert using measurements from the same lot and retain raw roll length, usable width, mass per unit area, and calculated mass. |
| `utility_separation` | Electricity, steam, water, and each fuel or chemical | Row-specific property | Row-specific unit | Keep every supplied utility, fuel, and chemical as a separate exchange; do not merge carriers or recipe substances. |
| `normalization` | All inventory rows | Row-specific property | Row-specific unit per kg | Normalize reporting-period quantities to 1 kg conforming saleable fabric after stock change, rework, rejects, and intermediate transfers are reconciled. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | Foreground manufacture | Include all on-site operations that transform received yarn into declared fabric, including yarn preparation, pile/terry fabric formation, inspection, attributable utilities, wastes, and direct emissions. | `eu-pef-2021` |
| `boundary_rule_2` | Conditional wet and finishing operations | Include every on-site pre-treatment, bleaching, dyeing, printing, washing, drying, heat setting, and finishing operation used for the declared product; identify outsourced operations and link their upstream datasets. | `eu-textiles-bat-2022` |
| `boundary_rule_3` | Upstream materials | Keep fibre, yarn, purchased chemicals, electricity, heat, water supply, and off-site treatment outside the foreground transformation boundary while linking representative upstream datasets. | `eu-pef-2021` |
| `boundary_rule_4` | Data gaps and cut-offs | Record all identified material and energy exchanges; disclose unavailable minor exchanges as data gaps rather than silently omitting them. | `eu-pef-2021` |
| `boundary_rule_5` | Downstream stages | Exclude distribution, garment or article conversion, use, and end-of-life unless the study explicitly extends the boundary and reports the extension separately. | `eu-pef-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ground and pile/loop yarns received at the fabric manufacturing site, with supplier, fibre composition, yarn specification, conditioning basis, and upstream dataset references declared. |
| starting_condition_role | Gate-to-gate foreground starting point for pile or terry fabric manufacture. |
| product_classification_scope | Knitted or crocheted pile fabrics and terry fabrics corresponding exactly to CPC 3.0 code 28110. |
| recursive_input_rule | If fabric in the same category enters for rework or finishing, record it as a separate input with origin, condition, mass, and upstream dataset; do not recreate its earlier manufacture recursively. |
| upstream_dataset_requirement | Link composition-, technology-, geography-, and supplier-representative datasets for each yarn, chemical, utility, and off-site treatment input. |
| disclosure | Declare fabric construction and state, included/outsourced operations, shared-utility allocation, internal recycling, wastewater route, direct emissions, allocation choices, and every data gap or cut-off. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pile_terry_formation` | Yarn preparation and pile/terry fabric formation | `required` | Always included. | Transform ground and pile/loop yarns into greige pile or terry fabric. | kg greige fabric |
| `wet_processing` | Wet pre-treatment, coloration, or washing | `conditional` | Include when any wet operation is performed at the reporting site. | Produce the declared washed, bleached, dyed, printed, or chemically finished state. | kg wet-processed fabric |
| `finishing_inspection` | Drying, physical finishing, inspection, and trimming | `required` | Always include inspection; include drying and finishing equipment only when used. | Produce and verify conforming saleable reference fabric. | kg saleable fabric |

### Process: Yarn preparation and pile/terry fabric formation (`pile_terry_formation`)

#### Inputs

##### Product flows

###### Ground yarn input (`ground_yarn_input`)

Record the measured mass of the yarn that forms the ground structure, matched to the declared fibre composition and yarn specification.

- Selected flow: Ground yarn for knitted or crocheted pile or terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured lot issues adjusted for opening stock, closing stock, and returned yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg greige pile or terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_records`
- Sources:

###### Pile or loop yarn input (`pile_loop_yarn_input`)

Record separately the measured yarn forming pile, plush, or terry loops; do not combine it with ground yarn.

- Selected flow: Pile or loop yarn for knitted or crocheted pile or terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured lot issues adjusted for opening stock, closing stock, and returned yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg greige pile or terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_records`
- Sources:

###### Electricity for fabric formation (`formation_electricity`)

Record electricity supplied to yarn preparation, knitting/crocheting, compressed air, controls, and attributable room conditioning.

- Selected flow: Electricity supplied to knitting or crocheting equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or physically allocated main-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg greige pile or terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige pile or terry fabric (`greige_pile_terry_fabric`)

Record the measured mass transferred from fabric formation to wet processing or final finishing.

- Selected flow: Greige knitted or crocheted pile or terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured conforming and reworkable greige fabric output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg greige pile or terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_records`
- Sources:

##### Waste flows

###### Yarn waste from fabric formation (`formation_yarn_waste`)

Record waste ground, pile, or loop yarn by measured mass and declared treatment route. The actual dataset shall keep different fibre compositions separate.

- Selected flow: Waste yarn from pile or terry fabric formation
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass, separately reconciled by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg greige pile or terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_records`
- Sources:

###### Greige fabric waste from formation (`formation_greige_fabric_waste`)

Record startup fabric, trimmings, and rejected greige fabric separately from yarn waste, by measured mass and declared treatment route.

- Selected flow: Waste greige knitted or crocheted pile or terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass, separately reconciled by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg greige pile or terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_records`
- Sources:

##### Elementary flows

### Process: Wet pre-treatment, coloration, or washing (`wet_processing`)

#### Inputs

##### Product flows

###### Greige fabric entering wet processing (`wet_process_fabric_input`)

Record the measured mass and incoming state of CPC 28110 fabric entering the included wet route.

- Selected flow: Greige knitted or crocheted pile or terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured batch input on the common declared mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources:

###### Process water (`wet_process_water`)

Record supplied water crossing the process boundary; record internally reused water separately in operating records and avoid double counting.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered supply volume allocated to the declared batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: `eu-textiles-bat-2022`

###### Electricity for wet processing (`wet_process_electricity`)

Record electricity supplied to wet-process machinery, pumps, dosing, controls, and attributable extraction.

- Selected flow: Electricity supplied to wet-processing equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or physically allocated main-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: `eu-textiles-bat-2022`

###### Purchased process steam (`wet_process_steam`)

Record purchased steam only when it crosses the process boundary; preserve the supplied pressure and temperature as qualifiers.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: steam-meter mass or condensate-corrected measured balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide for wet treatment (`sodium_hydroxide_input`)

Record sodium hydroxide separately when used for the declared pre-treatment or finishing recipe, with concentration and supply form declared.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoiced solution mass multiplied by the recorded active concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: `eu-textiles-bat-2022`

###### Hydrogen peroxide for bleaching (`hydrogen_peroxide_input`)

Record hydrogen peroxide separately only when used in the declared bleaching route, with concentration and supply form declared.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoiced solution mass multiplied by the recorded active concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-processed pile or terry fabric (`wet_processed_fabric`)

Record the measured fabric mass transferred to drying, finishing, or inspection and retain its wet-process state.

- Selected flow: Wet-processed knitted or crocheted pile or terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured batch output on the common declared mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

###### Textile wet-processing wastewater (`textile_wastewater`)

Record wastewater leaving the wet-process boundary by measured volume, with treatment destination and internal reuse disclosed.

- Selected flow: Textile wet-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or documented tank/batch volume balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_process_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Drying, physical finishing, inspection, and trimming (`finishing_inspection`)

#### Inputs

##### Product flows

###### Fabric entering final finishing (`finishing_fabric_input`)

Record greige or wet-processed CPC 28110 fabric entering the final route, including moisture and prior state.

- Selected flow: Knitted or crocheted pile or terry fabric before final finishing
- Flow property / unit: Mass / kg
- Amount rule: measured batch transfer mass on the common declared basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022`

###### Electricity for finishing and inspection (`finishing_electricity`)

Record electricity supplied to dryers, mechanical finishing, inspection, winding, controls, and attributable extraction.

- Selected flow: Electricity supplied to drying, finishing, and inspection equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or physically allocated main-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022`

###### Purchased steam for drying or finishing (`finishing_steam`)

Record purchased steam only when used by the actual drying or finishing route and preserve pressure and temperature qualifiers.

- Selected flow: Purchased process steam for drying or finishing
- Flow property / unit: Mass / kg
- Amount rule: steam-meter mass or condensate-corrected measured balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming saleable pile or terry fabric (`finished_pile_terry_fabric`)

Record net conforming CPC 28110 fabric after inspection; this is the declared reference product output.

- Selected flow: Pile fabrics and terry fabrics, knitted or crocheted `19330422-9245-41a2-9f99-a7c599c7c427`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net conforming fabric mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `un-cpc-3-0`

##### Waste flows

###### Finishing trim waste (`finishing_trim_waste`)

Record edge trim and test-piece fabric by measured mass and treatment destination.

- Selected flow: Knitted or crocheted pile or terry fabric trim waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass, separately reconciled by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Rejected finished fabric (`finishing_rejected_fabric`)

Record inspected finished fabric rejected from sale separately from trim and test pieces.

- Selected flow: Rejected finished knitted or crocheted pile or terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured rejected-fabric mass, separately reconciled by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Product-specific meters and records | Prefer direct assignment of yarns, chemicals, utilities, wastes, and emissions to the declared product batch or line. | `eu-pef-2021` |
| `allocation_rule_2` | Shared equipment and utilities | Where direct assignment is impossible, allocate using a documented physical driver that reflects use, such as machine time, metered energy, liquor volume, or processed dry mass; disclose the driver and result. | `eu-pef-2021` |
| `allocation_rule_3` | Rework and internal recycling | Keep internal rework within the foreground balance and avoid counting the same intermediate output twice. Record exported residues as outputs with destination. | `eu-pef-2021` |
| `allocation_rule_4` | Multiple saleable fabric products | Avoid economic allocation where product-specific physical records are available; if allocation remains unavoidable, report unallocated totals, chosen basis, shares, and sensitivity. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_formation_records` | `pile_terry_formation` | yarns, electricity, greige output, textile waste | lot issues, stock records, meters, scales, production and waste logs | lot_id; yarn_role; fibre_spec; opening_stock; issued_mass; returned_mass; closing_stock; meter_start; meter_end; greige_mass; waste_mass; waste_route | Calibrated scales and meters reconciled to lot and reporting-period records. | kg; kWh | Per lot with monthly reconciliation | At least one representative reporting year or the full shorter campaign | All included formation lines at the reporting site | Sum valid records by row, adjust stock change, then divide by conforming greige output. | Calibration, invoices, batch tickets, meter extracts, stock reconciliation, and waste transfer records. |
| `cp_wet_process_records` | `wet_processing` | fabric, water, electricity, steam, sodium hydroxide, hydrogen peroxide, wastewater | batch sheets, recipe/dosing logs, meters, invoices, laboratory and discharge records | batch_id; input_mass; output_mass; water_meter; electricity_meter; steam_mass; chemical_name; solution_mass; active_fraction; wastewater_volume; reuse_volume; treatment_route | Reconcile batch recipes and metered utilities to physical batch outputs; retain each chemical as a separate record. | kg; m3; kWh | Per batch with monthly reconciliation | Same period as reference-product production | Every included on-site wet-processing line | Sum each atomic exchange, convert solutions to active mass where required, and normalize to wet-processed output. | Meter calibration, recipe authorization, dosing logs, invoices, laboratory records, and discharge permits/records. |
| `cp_finishing_records` | `finishing_inspection` | incoming fabric, electricity, steam, finished output, rejects | transfer tickets, meters, inspection logs, roll measurements, scales, waste records | batch_id; incoming_mass; moisture_basis; electricity_meter; steam_mass; roll_length; usable_width; mass_per_area; conforming_mass; reject_mass; waste_route | Reconcile incoming mass, conforming output, rework, rejects, and stock changes for each lot. | kg; m; m2; kWh | Per lot with monthly reconciliation | Same period as reference-product production | All included finishing and inspection lines | Sum atomic exchanges and divide by net conforming reference fabric mass. | Meter and scale calibration, roll inspection reports, test reports, stock reconciliation, and waste transfer records. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_yarn_consumption` | Each yarn row | issued mass + opening attributable stock - returned mass - closing attributable stock | yarn issue and stock records | net yarn consumption by yarn role | |
| `calc_active_chemical` | Supplied chemical solutions | supplied solution mass × measured or certificate active fraction | solution mass; active fraction | active chemical mass | `eu-textiles-bat-2022` |
| `calc_mass_normalization` | Every inventory exchange | reconciled reporting-period exchange ÷ net conforming reference fabric mass | exchange total; conforming output; stock/rework adjustment | exchange per kg reference fabric | `eu-pef-2021` |
| `calc_area_to_mass` | Roll records | measured area × measured mass per unit area, checked against scale mass | usable width; roll length; mass per unit area; scale mass | fabric mass and discrepancy | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and textile intermediates | Preserve CPC 28110 scope, pile/terry construction, knitting/crocheting route, fibre composition, product state, and lot identity. | Product specifications, bills of materials, lot cards, and inspection/test records. |
| `dq_completeness` | Foreground inventory | Reconcile textile mass inputs with saleable output, stock change, rework, and waste; reconcile all identified chemicals and utilities without collection rows. | Signed mass balance, recipe ledger, meters, invoices, and waste records. |
| `dq_temporal` | Foreground records | Use a consistent representative period and disclose shutdowns, campaigns, abnormal production, and missing intervals. | Production calendar and coverage report. |
| `dq_measurement` | Mass, area, water, energy, and chemical records | Use calibrated or verified instruments and retain conversion factors, active concentrations, and uncertainty or discrepancy checks. | Calibration certificates, method records, certificates of analysis, and reconciliation reports. |
| `dq_geography_technology` | Upstream and foreground data | Match supplier geography, electricity system, steam conditions, water route, machinery, fabric construction, and wet-processing technology. | Supplier declarations, equipment list, contracts, and dataset metadata. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Reference identity | The product flow UUID, Product flow type, Mass property, kg unit, and exact CPC 28110 classification shall be present and mutually consistent. | `un-cpc-3-0` |
| `validation_rule_2` | Product scope | Reject datasets for woven, tufted, nonwoven, narrow, carpet, garment, made-up, or non-pile/non-terry products. | `un-cpc-3-0` |
| `validation_rule_3` | Bilingual structure | English and Chinese shall preserve identical ordered process_ids, row_ids, rule_ids, source_ids, machine tokens, and UUIDs. | |
| `validation_rule_4` | Atomic exchanges | Every inventory card shall name one concrete exchange; combined utilities, chemicals, wastes, packaging, or selectors are invalid. | `eu-textiles-bat-2022` |
| `validation_rule_5` | Mass and record completeness | The fabric mass balance and reporting-period coverage shall reconcile within the declared measurement tolerance; gaps shall be disclosed and shall not be silently replaced with AI values. | `eu-pef-2021` |
| `validation_rule_6` | Conditional routes | Wet processing and each recipe chemical, steam supply, wastewater route, and finishing operation shall be included only when used and shall be supported by route-specific records. | `eu-textiles-bat-2022` |
| `validation_rule_7` | UUID use | A non-reference UUID may be published only after a semantically matching state-100 Tiangong row is confirmed by both hybrid discovery and deterministic direct read. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset that may be published as a `secondary_dataset` or `background_dataset` after review. |
| downstream_use | Process and lifecyclemodel projections for products using knitted or crocheted pile or terry fabric. |
| allowed_use | Studies whose fabric construction, fibre composition, product state, geography, technology, and boundary match the declared dataset. |
| excluded_use | Woven, tufted, nonwoven, narrow, carpet, garment, made-up, non-pile/non-terry, or materially different fibre/finish routes without documented adaptation. |
| required_metadata | CPC 28110; product flow UUID; construction; knitting/crocheting route; fibre composition; mass basis; fabric state; width and mass per area; pile/loop specification; site geography; technology; reporting period; included/outsourced operations; allocation; wastewater and waste routes. |
| required_quality_disclosure | Data coverage, meter and scale quality, mass-balance result, recipe completeness, allocation drivers, upstream representativeness, uncertainty/data gaps, and unresolved UUID identities. |
| update_trigger | Material change in construction, fibre composition, machinery, wet route, finish, supplier system, energy/water system, allocation, boundary, or reference identity; or expiration of temporal representativeness. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, CPC 28110. https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml (retrieved 2026-08-13). | Exact product scope and exclusions; classification validation. |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-13). | Textile process decomposition; chemical, water, energy, wastewater, emissions, monitoring, and management requirements. |
| `eu-pef-2021` | `method_factor` | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-13). | Boundary, inventory completeness, allocation hierarchy, data quality, and reporting rules. |
