---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-of-pig-and-poultry-unrendered
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fats, of pig and poultry, unrendered

## 1. Scope and Applicability

This PCR governs foreground data packages for unrendered fat tissue or raw fat material separated from pigs or poultry after slaughter, dressing, post-mortem disposition, cutting, or trimming. A conforming data package represents exactly one declared animal source, `pig` or `poultry`, and declares the species and anatomical tissue or commercial product form. It may cover fresh, chilled, or frozen material and may include separation, hygienic handling, cooling or freezing, packaging, storage, loading, and transport to the declared handover point.

The product remains tissue or raw fat material. Rendering, fat melting, extraction, cooking for fat recovery, refining, fractionation, hydrogenation, interesterification, and manufacture of lard, rendered pork fat, rendered poultry fat, tallow, animal oil, or fat fractions are outside the default foreground boundary. The CPC boundary places this product in subclass 21511 and places rendered pig and poultry fats in subclasses 21521 and 21522. CXS 211-1999 describes named rendered fats; it is used here only to prevent a rendered-fat name, composition range, or formula from being applied to unrendered material.

This PCR does not provide a cross-species average. Pig and poultry datasets, and datasets for materially different tissue forms or physical states, shall remain separately parameterized. A physical mixture or an inventory average that cannot retain those distinctions is not a conforming single-product data package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-of-pig-and-poultry-unrendered |
| classification_refs | UNSD CPC Version 3.0 subclass 21511, Fats, of pig and poultry, unrendered |
| covered_products | Unrendered pig fat tissue or unrendered poultry fat tissue/raw fat material separated after slaughter or cutting; fresh, chilled, or frozen; edible, feed-grade, or technical destination only when the destination and disposition are declared |
| excluded_products | Rendered pig fat or lard (CPC 21521); rendered poultry fat (CPC 21522); tallow and other rendered animal fats or oils in CPC 21523-21529; refined, fractionated, hydrogenated, or otherwise chemically modified fat; unspecified pig-poultry averages or inseparable mixtures |
| representative_product | 1 kg net mass of one declared pig or poultry unrendered fat tissue/product form at a declared handover point |
| production_route | Slaughter or cutting co-product identification -> hygienic separation/trimming and sorting -> weighing -> conditional chilling/freezing -> conditional packaging and storage -> declared transport handover; no rendering or refining |
| market_state | Fresh, chilled, or frozen unrendered fat tissue/raw fat material, in bulk or declared packaging, before any rendering operation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide unrendered fat tissue/raw fat material from one declared animal source, pig or poultry, for subsequent use or processing. |
| How much | 1 kg net product mass at the declared handover point. |
| How well | Animal source, species, anatomical tissue/product form, physical state, disposition/grade, packaging, handover temperature or condition, and absence of rendering are declared. |
| How long or cycle | One product handover; any cold-storage duration and transport leg included before handover are declared. |
| reference_flow_link | The reference flow is the net mass required to provide the declared 1 kg intermediate-product function. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fats, of pig and poultry, unrendered `0ba97549-7663-496e-8451-8396d31d2bcf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal_source (`pig` or `poultry`, exactly one); species; anatomical_tissue_or_product_form; physical_state (`fresh`, `chilled`, or `frozen`); disposition_or_grade; rendering_status (`unrendered`); packaging_form; handover_point; handover_temperature_or_condition; storage_duration_if_any; included_transport_if_any |

When constructing a foreground data package, every required qualifier shall be present in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A generic CPC flow UUID does not authorize an unspecified animal source or an average of pig and poultry operating parameters.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product at handover | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net unrendered fat at the declared physical state and handover point; exclude packaging and transport equipment tare. |
| `gross_to_net_mass` | packaged or containerized product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If only gross mass is recorded, subtract measured container and packaging tare for the same packaging type or lot and retain both records. |
| `animal_and_form_segregation` | all reference and inventory quantities | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure and normalize pig and poultry separately and retain separate records for materially different tissue forms and fresh/chilled/frozen states; do not use an undocumented combined average. |
| `handover_state_mass` | moisture, drip, blood, lean-tissue, or trim differences | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Do not apply a dry-fat or rendered-fat conversion. Report mass as handed over and record drained liquid, rejected trim, or other mass change as a separate flow. |
| `transport_work` | included outbound transport | Mass and distance | tonne-kilometre | Calculate each leg as loaded product mass in tonnes multiplied by loaded distance in kilometres; state whether return travel or capacity utilization is included in the selected transport dataset. |
| `cold_storage_normalization` | cooling, freezing, and cold storage | Energy and time | kWh and h | Record energy by declared physical state and storage period and normalize to the net mass passing through that operation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fatty tissue or raw fat material from a declared pig or poultry species has been identified after slaughter/dressing/post-mortem disposition and/or cutting, has not been rendered, and is available for separation or has just been separated as a co-product. |
| starting_condition_role | Co-product/raw-material handover from a slaughter or cutting system into the unrendered-fat foreground; the exact burden-transfer point is declared. |
| product_classification_scope | CPC 3.0 21511 only; rendered pig fat 21521, rendered poultry fat 21522, and other rendered fats/oils 21523-21529 are excluded. |
| recursive_input_rule | Purchased CPC 21511 material entering a foreground operation is recorded as a separate product input with its own upstream dataset and qualifiers; it is not absorbed recursively into the reference output. A single dataset shall not merge pig and poultry inputs into an unspecified reference product. |
| upstream_dataset_requirement | When slaughter, dressing, or cutting occurs before the declared starting point, use a separately documented upstream dataset and its co-product allocation. When those operations are inside the foreground, collect the joint-process inputs and all co-product/waste outputs needed for allocation. |
| disclosure | Declare animal source, species, tissue/product form, disposition/grade, fresh/chilled/frozen state, separation point, included operations, packaging, cold-storage duration, handover point, included transport, and whether upstream slaughter/cutting burdens are included. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_unrendered_identity` | product identity and process list | The reference product shall remain unrendered tissue/raw fat. Any rendering, fat melting, extraction, refining, fractionation, hydrogenation, or manufacture of named rendered fat is excluded and requires another product system. | unsd-cpc-3-0-2025; codex-cxs-211-1999 |
| `boundary_foreground_operations` | foreground system | Include attributable separation/trimming, sorting, hygienic handling, weighing, conditional chilling/freezing, packaging, storage, loading, and transport controlled before the declared handover. | codex-cxc-58-2005; eu-pef-2021-2279 |
| `boundary_cold_chain` | chilled or frozen product | Record cooling/freezing, cold-storage duration, temperature control, losses, and any included refrigerated transport; do not infer a universal temperature or holding time from this PCR. | codex-cxc-58-2005 |
| `boundary_transport_handover` | outbound logistics | Include transport only to the declared contractual or physical handover point and identify every included leg; downstream transport after handover is excluded unless explicitly brought into the study scope. | codex-cxc-58-2005; eu-pef-2021-2279 |
| `boundary_upstream_coproduct` | slaughter and cutting joint processes | Identify the point at which fat becomes a co-product and keep separately attributable post-separation burdens with the fat; jointly incurred slaughter/cutting burdens require the allocation rules in section 7. | eu-pef-2021-2279 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `separation_preparation` | Co-product identification, separation, trimming, sorting, and weighing | required | Always; the exact starting point and already-completed operations are declared. | Establish unrendered product identity and net mass while retaining joint-process allocation evidence. | kg net separated unrendered fat |
| `temperature_management` | Cooling, chilling, freezing, and cold storage | conditional | Include when any temperature reduction or controlled cold storage occurs before handover. | Preserve declared physical state and record energy, duration, refrigerant, and losses. | kg product through operation and storage hours |
| `packaging_handover` | Packaging, final weighing, storage, loading, and handover | required | Packaging inputs are conditional for unpackaged bulk transfer; weighing and handover records are always required. | Produce the reference flow at the declared gate. | kg net reference product |
| `outbound_transport` | Outbound transport to declared handover | conditional | Include only when the reporting entity controls or includes transport before handover. | Connect dispatch to the declared delivered gate without extending into downstream rendering. | tonne-kilometre by leg and kg delivered |

### Process: Co-product identification, separation, trimming, sorting, and weighing (`separation_preparation`)

#### Inputs

##### Product flows

###### Eligible pig or poultry fatty tissue/parts (`eligible_fatty_material_input`)

Record the mass entering the foreground separation step and its linkage to the slaughter or cutting batch.

- Selected flow: Declared pig or poultry carcass part, fatty tissue, or cutting material; facility-specific product input
- Flow property / unit: Mass / kg
- Amount rule: measured input mass by batch and animal source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net unrendered fat output from separation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_identity_mass`
- Sources: `codex-cxc-58-2005`

###### Cleaning and process water (`separation_water`)

Record water that crosses the process boundary for equipment or product-contact cleaning attributable to this step.

- Selected flow: Facility-specific water supply
- Flow property / unit: Volume / m3
- Amount rule: metered or reconciled water use attributable to separation and hygiene operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net unrendered fat output from separation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_water_records`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### Separation electricity, measured (`separation_electricity_measured`)

Use sub-meter, meter reconciliation, or utility records when electricity can be attributed to trimming, conveying, sorting, weighing, and sanitation.

- Selected flow: Facility-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity attributable to the process over the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net unrendered fat output from separation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_water_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Separation electricity, provisional fallback (`separation_electricity_provisional`)

Use only in a candidate dataset when measured electricity is unavailable. Estimate equipment electricity from rated power, recorded operating time, and a documented site-specific load factor; never use one pig-poultry average. Replace this row as soon as representative sub-meter, reconciled utility, or equipment-test records become available.

- Selected flow: Facility-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: sum of rated power multiplied by recorded operating time and documented load factor for included equipment
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net unrendered fat output from separation
- Basis kind: Process output (`process_output`)
- Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Collection protocol: `cp_utility_and_water_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unrendered pig or poultry fat after separation (`separated_unrendered_fat`)

Record the net output mass before any rendering, retaining the declared animal and tissue/form qualifiers.

- Selected flow: Fats, of pig and poultry, unrendered `0ba97549-7663-496e-8451-8396d31d2bcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass after separation and trimming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output mass before downstream included operations
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_identity_mass`
- Sources: `unsd-cpc-3-0-2025`

###### Other saleable slaughter or cutting co-products (`other_coproducts`)

Record all other saleable outputs at a joint-process boundary when slaughter or cutting burdens are allocated in this data package.

- Selected flow: Facility-specific co-product records by product identity
- Flow property / unit: Mass / kg
- Amount rule: measured mass and disposition by co-product over the allocation period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: joint slaughter or cutting process output period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_allocation_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Rejected or condemned material (`rejected_material`)

Record material rejected from the reference product and its documented disposition; do not silently count it as product or co-product.

- Selected flow: Facility-specific rejected or condemned animal material
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net unrendered fat output from separation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_identity_mass`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Separation wastewater (`separation_wastewater`)

Record wastewater leaving the foreground and identify whether treatment occurs on-site or downstream.

- Selected flow: Facility-specific wastewater to declared treatment route
- Flow property / unit: Volume / m3
- Amount rule: metered or water-balance-derived wastewater volume attributable to the process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net unrendered fat output from separation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_and_water_records`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Cooling, chilling, freezing, and cold storage (`temperature_management`)

#### Inputs

##### Product flows

###### Separated unrendered fat entering temperature control (`fat_to_temperature_management`)

Record the mass and product qualifiers entering the included cooling, freezing, or storage operation.

- Selected flow: Fats, of pig and poultry, unrendered `0ba97549-7663-496e-8451-8396d31d2bcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass entering the cooling, freezing, or storage operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg temperature-managed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_storage_records`
- Sources: `codex-cxc-58-2005`

###### Refrigeration electricity (`temperature_electricity`)

Record electricity for the included temperature-management operation and its declared storage period.

- Selected flow: Facility-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered or reconciled electricity for cooling/freezing and storage, allocated by a documented causal driver when shared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg temperature-managed output and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_storage_records`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Refrigerant make-up (`refrigerant_makeup`)

Record substance-specific additions to the refrigeration system so releases can be reconciled without a generic refrigerant assumption.

- Selected flow: Refrigerant identified by substance and facility record
- Flow property / unit: Mass / kg
- Amount rule: purchased or charged refrigerant attributable to the included refrigeration system over the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg temperature-managed output over the same reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_storage_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled or frozen unrendered fat (`temperature_managed_fat`)

Record the product mass and physical state leaving temperature management, still before rendering.

- Selected flow: Fats, of pig and poultry, unrendered `0ba97549-7663-496e-8451-8396d31d2bcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass at declared exit temperature and physical state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_storage_records`
- Sources: `codex-cxc-58-2005`

##### Waste flows

###### Drip, purge, or rejected material during temperature management (`temperature_management_loss`)

Record all product mass not retained in the temperature-managed output and its disposition.

- Selected flow: Facility-specific organic loss to declared treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-derived loss, reported separately by type and disposition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg temperature-managed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_temperature_storage_records`
- Sources: `codex-cxc-58-2005`

##### Elementary flows

###### Refrigerant emitted to air (`refrigerant_emission`)

Calculate substance-specific releases from refrigeration service and stock records for the included system.

- Selected flow: Declared refrigerant substance emitted to air; substance-specific flow to be selected by dataset author
- Flow property / unit: Mass / kg
- Amount rule: refrigerant balance from additions, removals, recovery, and stock change for the included system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg temperature-managed output over the reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_temperature_storage_records`
- Sources: `eu-pef-2021-2279`

### Process: Packaging, final weighing, storage, loading, and handover (`packaging_handover`)

#### Inputs

##### Product flows

###### Unrendered fat entering handover preparation (`fat_to_handover`)

Record the product mass entering packaging or bulk handover preparation with its batch identity intact.

- Selected flow: Fats, of pig and poultry, unrendered `0ba97549-7663-496e-8451-8396d31d2bcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass entering packaging or bulk handover preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net reference product at handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_handover_records`
- Sources: `codex-cxc-58-2005`

###### Packaging materials (`packaging_materials`)

Record each material placed on the market with the product, net of documented return or reuse within the boundary.

- Selected flow: Each primary, secondary, pallet, liner, container, or reusable packaging material separately identified
- Flow property / unit: Mass / kg; count converted using measured unit mass when necessary
- Amount rule: issued minus returned/reused packaging attributable to dispatched reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net reference product at handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_handover_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product at declared handover (`reference_product_output`)

This is the sole quantitative reference output. It remains unrendered and carries all required qualifiers.

- Selected flow: Fats, of pig and poultry, unrendered `0ba97549-7663-496e-8451-8396d31d2bcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net handover mass after subtracting tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_handover_records`
- Sources: `unsd-cpc-3-0-2025`; `codex-cxc-58-2005`

##### Waste flows

###### Packaging loss and discarded packaging (`packaging_waste`)

Record packaging discarded within the foreground rather than included with the handed-over product.

- Selected flow: Each packaging waste material and treatment route separately identified
- Flow property / unit: Mass / kg
- Amount rule: measured discarded packaging attributable to the dispatch period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net reference product at handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_handover_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

### Process: Outbound transport to declared handover (`outbound_transport`)

#### Inputs

##### Product flows

###### Dispatched unrendered fat (`dispatched_product`)

Record the net product mass loaded for each included transport leg.

- Selected flow: Fats, of pig and poultry, unrendered `0ba97549-7663-496e-8451-8396d31d2bcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured loaded net mass by shipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg delivered at the declared handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport_records`
- Sources: `codex-cxc-58-2005`

###### Freight transport service (`outbound_freight_service`)

Record route-specific transport work to the declared handover without double counting a separate direct-fleet model.

- Selected flow: Route-, mode-, vehicle-, payload-, and refrigeration-specific transport service selected by dataset author
- Flow property / unit: Transport work / tonne-kilometre
- Amount rule: measured loaded product tonnes multiplied by actual loaded distance for each included leg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg delivered at the declared handover
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Delivered unrendered fat (`delivered_product`)

Record the accepted product mass at the delivered handover point, retaining all reference-product qualifiers.

- Selected flow: Fats, of pig and poultry, unrendered `0ba97549-7663-496e-8451-8396d31d2bcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted net mass at the declared delivered handover point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg delivered reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport_records`
- Sources: `codex-cxc-58-2005`

##### Waste flows

###### Transport loss or rejected delivery (`transport_loss`)

Record the reconciled difference between dispatch and acceptance and its documented disposition.

- Selected flow: Product loss or rejected load to declared destination
- Flow property / unit: Mass / kg
- Amount rule: dispatch mass minus accepted delivered mass, reconciled for documented measurement differences
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg accepted delivered product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `codex-cxc-58-2005`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_subdivision` | separation, cooling, packaging, and transport burdens | Assign directly metered or otherwise directly attributable inputs, emissions, and wastes to the unrendered-fat operations before allocating any joint burden. | eu-pef-2021-2279 |
| `allocation_joint_slaughter_cutting` | upstream slaughter or cutting joint process | If subdivision is not possible, document the selected PEF-compatible hierarchy. For a PEF pig study, apply the current pig-specific slaughterhouse provisions of Recommendation (EU) 2021/2279. For poultry, do not reuse pig factors: apply a justified causal physical relation where demonstrated, otherwise use economic allocation from contemporaneous prices at the joint production stage. | eu-pef-2021-2279 |
| `allocation_no_cross_species_default` | any generic or multi-site result | Never average pig and poultry allocation factors, yields, prices, utility intensities, or tissue compositions into an undocumented category default. Publish separate datasets or separately parameterized scenarios. | eu-pef-2021-2279 |
| `allocation_output_status` | products, co-products, residues, and wastes | Record mass, disposition, and economic status for all relevant joint-process outputs. A material treated as waste receives the applicable waste-treatment modelling; a saleable unrendered fat reference product shall not be relabelled as burden-free waste. | eu-pef-2021-2279 |
| `allocation_rendering_excluded` | downstream rendering | Do not assign rendering, melting, refining, or rendered-fat treatment burdens to this reference product. The handover to a downstream renderer is the end of this foreground unless transport to that handover is explicitly included. | unsd-cpc-3-0-2025; codex-cxs-211-1999 |
| `allocation_disclosure` | allocated datasets | Report joint-process boundary, allocation hierarchy, variables, prices and price period where economic allocation is used, outputs receiving burdens, and sensitivity or limitation relevant to interpretation. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_identity_mass` | `separation_preparation` | identity, input, product, reject | batch record and scale record | batch_id; animal_source; species; tissue_or_product_form; slaughter_or_cutting_lot; post_mortem_disposition; intended_grade; rendering_status; input_mass; output_mass; rejected_mass; tare; timestamp; scale_id | trace batch to source lot and record calibrated scale readings before and after separation | kg | each batch or lot | all batches in the reporting period or a documented representative sampling frame | each slaughter/cutting site and line | aggregate only within identical animal source, species, tissue/form, state, and boundary; production-weight by net output mass | calibration record; lot trace; disposition record; mass reconciliation |
| `cp_utility_and_water_records` | `separation_preparation` | electricity, water, wastewater | meter, invoice, runtime, and water-balance record | meter_start; meter_end; invoice_quantity; equipment_id; rated_power; runtime; load_factor_basis; water_input; water_to_product_if_any; wastewater_output; allocation_driver; production_mass | use sub-meter first, then documented meter or invoice reconciliation; retain equipment runtime inputs for provisional estimation | kWh; m3; h; kg output | each production period used by the source records | representative operating period covering declared product and site | each facility and declared utility-meter boundary | separate pig and poultry and materially different process routes; normalize by net process output | meter identifiers; invoices; production logs; reconciliation; documented estimate assumptions |
| `cp_coproduct_allocation_records` | `separation_preparation` | joint products, co-products, residues, wastes | joint-process mass and value ledger | allocation_period; process_boundary; output_id; output_status; mass; price; currency; price_date; destination; directly_attributable_burden; allocation_method | reconcile production, sales, waste, and disposition records at one joint-process boundary | kg; currency/kg | each allocation period | same period as included joint-process burdens | each site and animal source separately | do not aggregate pig and poultry; apply one documented allocation hierarchy per boundary | mass balance; sales invoices; disposition records; allocation workbook |
| `cp_temperature_storage_records` | `temperature_management` | product mass, temperature, energy, refrigerant, loss | batch temperature log, meter, refrigeration service record | batch_id; entry_mass; exit_mass; entry_temperature; exit_temperature; physical_state; storage_start; storage_end; electricity; refrigerant_type; opening_stock; additions; recovery; closing_stock; loss_mass | link temperature and storage records to batch; reconcile refrigeration meters and service logs | kg; degree C; h; kWh | each batch for identity/temperature and each reporting period for shared utilities | all included cooling/freezing/storage before handover | each facility, refrigeration system, and declared storage boundary | separate by animal source, state, route, and storage regime; allocate shared energy using a documented causal driver | continuous or periodic temperature records; meter record; service invoice; mass reconciliation |
| `cp_packaging_handover_records` | `packaging_handover` | packaging, tare, reference output, packaging waste | packaging issue/return, scale, and dispatch record | batch_id; packaging_material; units_issued; units_returned; unit_mass; reusable_cycles_if_known; gross_mass; tare_mass; net_mass; handover_point; handover_time; condition; waste_mass | reconcile packaging stock and dispatch weights; use measured packaging unit mass | kg; count | each dispatch with period stock reconciliation | all dispatches in reporting period | each packing line, bulk-loading point, and declared handover gate | aggregate only matching product qualifiers and packaging form; normalize to net product mass | scale calibration; packaging specification; stock ledger; dispatch acceptance |
| `cp_transport_records` | `outbound_transport` | shipment mass, distance, mode, refrigeration, accepted mass | carrier, dispatch, route, and receiving record | shipment_id; dispatch_mass; accepted_mass; origin; destination; actual_distance; mode; vehicle_class; payload; capacity_utilization; refrigeration; return_trip_treatment; temperature_log; rejection_or_loss | obtain carrier/telematics distance and receiving acceptance; model each leg separately | kg; km; tonne-kilometre | each shipment | all included shipments in reporting period | each origin-destination route and declared handover gate | sum leg-specific tonne-kilometres and losses; do not merge routes before calculation | bill of lading; carrier record; route evidence; receiving record; temperature record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_handover_mass` | reference product | net_mass_kg = gross_mass_kg - measured_tare_mass_kg | gross mass; tare mass | net kg at handover | codex-cxc-58-2005 |
| `calc_reference_normalization` | all inventory rows | normalized_quantity = period_or_batch_quantity / net_reference_product_kg over the same boundary and period | flow quantity; matched net output mass | quantity per kg reference product | eu-pef-2021-2279 |
| `calc_provisional_separation_electricity` | `separation_electricity_provisional` | estimated_kWh = sum(rated_power_kW x operating_time_h x documented_load_factor); use only when measured electricity is absent and replace when representative measured or reconciled records become available | equipment rating; operating time; site-specific load-factor basis; net output mass | provisional kWh/kg tagged `reasoned_estimate` |  |
| `calc_wastewater_balance` | separation wastewater | wastewater = metered discharge, or water inputs minus documented water retained in product, evaporation, and separately routed streams | water meter records; retained water; other outlets | m3 wastewater per kg output | eu-fdm-bat-2019-2031 |
| `calc_refrigerant_balance` | refrigerant emission | emitted_mass = opening_stock + additions - recovered_or_returned - closing_stock, adjusted only for documented transfers | refrigerant stock and service records | kg substance emitted per kg output | eu-pef-2021-2279 |
| `calc_transport_work` | each included transport leg | tonne_km = loaded_net_mass_kg / 1000 x actual_loaded_distance_km | shipment mass; distance | tonne-kilometre by leg per kg delivered | eu-pef-2021-2279 |
| `calc_mass_balance` | each foreground process | input_mass = product_outputs + co_products + wastes + measured_or_explained_stock_change and losses, using consistent wet-state mass | input, output, waste, and stock records | reconciled mass balance and unexplained residual | eu-pef-2021-2279 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_product_identity` | reference product and all product rows | Declare exactly one animal source, pig or poultry, plus species, tissue/product form, physical state, disposition/grade, and unrendered status; keep lot linkage through handover. | batch, inspection/disposition, and handover records |
| `dqr_measurement` | mass, energy, water, temperature, and time | Use calibrated or controlled instruments and retain meter/scale identity, date, method, and unit conversions. | calibration, meter, scale, and operating records |
| `dqr_temporal` | all foreground data | Align flow records, production mass, prices, allocation period, and handover records to the same representative period; disclose gaps and seasonality. | timestamped records and coverage statement |
| `dqr_completeness` | process inventory | Reconcile product, co-product, waste, energy, water/wastewater, packaging, refrigerant, storage, and included transport records; explain every omitted applicable process. | process flow diagram, ledgers, balances, and omission statement |
| `dqr_allocation` | slaughter/cutting co-product burdens | Preserve direct attribution before allocation and retain the joint-process outputs, selected hierarchy, variables, and price evidence where applicable. | allocation workbook, output ledger, invoices, and method statement |
| `dqr_reasoned_estimate_replacement` | provisional electricity fallback | Mark the row as `reasoned_estimate`, disclose equipment, runtime, and load-factor assumptions, and replace it when representative sub-meter, reconciled utility, or equipment-test evidence becomes available or reviewed product-specific evidence supersedes it. | estimate worksheet, data-gap statement, and replacement review trigger |
| `dqr_source_limits` | use of external standards | Do not convert CXC hygiene guidance into universal temperature limits, CXS rendered-fat composition into unrendered-fat specifications, PEF pig allocation values into poultry defaults, or FDM BAT applicability/performance statements into generic legal limits. | source-use and limitation statement |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The product-flow UUID shall be `0ba97549-7663-496e-8451-8396d31d2bcf`, reference property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and reference unit kg. |  |
| `validate_required_qualifiers` | dataset metadata | Fail if animal_source is absent, is not exactly `pig` or `poultry`, or if species, anatomical tissue/product form, physical state, disposition/grade, rendering status, packaging, or handover condition is missing. | unsd-cpc-3-0-2025 |
| `validate_unrendered_boundary` | process map and product description | Fail if rendering, fat melting/extraction, refining, fractionation, or manufacture of a CPC 21521-21529 rendered fat is included as a foreground production step for the reference product. | unsd-cpc-3-0-2025; codex-cxs-211-1999 |
| `validate_species_separation` | foreground records and published result | Fail if actual pig and poultry parameters are averaged or combined without separate datasets/scenarios and retained disaggregated records. | eu-pef-2021-2279 |
| `validate_mass_and_tare` | reference amount and process balances | Confirm net mass excludes packaging tare and that each included process has a reconciled input/output/co-product/waste/stock-change balance or a disclosed residual. | eu-pef-2021-2279 |
| `validate_cold_chain` | chilled or frozen product | When temperature management applies, confirm physical state, temperature records, storage duration, energy, losses, and refrigerated transport treatment are present; otherwise report the check as skipped with reason. | codex-cxc-58-2005 |
| `validate_allocation` | slaughter or cutting joint burdens | When upstream joint burdens are included, confirm direct subdivision is applied first, animal-specific allocation is documented, and no pig-specific factor is applied to poultry. | eu-pef-2021-2279 |
| `validate_transport_gate` | outbound transport | Confirm included legs terminate at the declared handover, shipment mass and distance support tonne-kilometres, and downstream rendering transport is excluded unless explicitly part of the handover. | codex-cxc-58-2005; eu-pef-2021-2279 |
| `validate_reasoned_estimate` | provisional electricity fallback | Accept the fallback only when measured electricity is unavailable, assumptions are documented, it is not used together with the measured row, and a replacement trigger is recorded; otherwise issue an error finding. |  |
| `validate_completeness` | validation result | Report accepted inputs, checks performed, checks skipped, findings, and completeness. Missing identity, boundary, allocation, or measurement evidence makes validation inconclusive or failing rather than silently complete. | eu-pef-2021-2279 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for one declared pig or poultry unrendered fat tissue/product form at a declared handover gate. |
| downstream_use | May become a `secondary_dataset` or `background_dataset` after methodology review, source/measurement QA, and validation; supports downstream `process` and `lifecyclemodel` projections. |
| allowed_use | Modelling fresh, chilled, or frozen unrendered pig or poultry fat before rendering, with matching animal source, species, tissue/form, state, geography, technology, allocation boundary, and handover conditions. |
| excluded_use | Rendered or refined fats and oils; lard or rendered poultry fat; unspecified pig-poultry averages; mixed animal material without separate parameterization; claims of food safety compliance; substitution for jurisdiction-specific legal requirements or product specifications. |
| required_metadata | PCR id/version; product-flow, property, and unit UUIDs; animal source; species; anatomical tissue/product form; disposition/grade; rendering status; physical state; net mass/tare method; site/geography; technology; period; separation point; included processes; cold-storage duration; packaging; handover point; transport legs; allocation method; source ids. |
| required_quality_disclosure | Record coverage and representativeness; calibration and reconciliation; mass-balance residual; direct versus allocated burdens; allocation variables and price period; data gaps; skipped checks; uncertainty; every `reasoned_estimate`; and source limitations. |
| update_trigger | New measured site or species/tissue evidence; availability of sub-meter data replacing the provisional energy estimate; change in animal source, product form, physical state, slaughter/cutting boundary, allocation method or prices, cooling/freezing route, packaging, storage duration, transport handover, Tiangong identity, CPC scope, or governing source revision. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Category identity and the unrendered/rendered boundary: 21511 versus rendered pig fat 21521, rendered poultry fat 21522, and other rendered fats 21523-21529. Limitation: classification defines scope, not LCA quantities, hygiene limits, or composition. |
| `codex-cxc-58-2005` | standard | Codex Alimentarius, *Code of Hygienic Practice for Meat (CXC 58-2005)*. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf (retrieved 2026-08-11) | Process-control completeness for post-mortem handling, trimming/cutting, cooling/freezing, packaging, storage, transport, temperature records, segregation, and trace-back. Limitation: used as hygiene/process context only; this PCR does not promote its provisions into universal legal thresholds or LCA performance values. |
| `codex-cxs-211-1999` | standard | Codex Alimentarius, *Standard for Named Animal Fats (CXS 211-1999)*, current official text amended 2024. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf (retrieved 2026-08-11) | Negative boundary evidence: its named products include rendered lard and rendered pork fat. Limitation: it does not define unrendered pig/poultry fat as a category recipe, and none of its composition or quality values are used as defaults here. |
| `eu-pef-2021-2279` | official_guidance | European Commission, *Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, Annex I PEF method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-11) | Functional/declared unit, reference flow, system boundary, company-specific data, process inventory, data quality, allocation hierarchy, and slaughterhouse co-product handling. Limitation: pig-specific slaughterhouse provisions are not poultry evidence and shall not be averaged or transferred to poultry; EF-specific defaults apply only in the EF context for which they are prescribed. |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission, *Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries*. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng (retrieved 2026-08-11) | Conditional checklist for process flow sheets and inventories of water, energy, raw materials, wastewater, waste gas, and monitoring parameters where the facility/activity is within scope. Limitation: no legal applicability threshold, BAT-associated performance level, emission limit, or sector value is generalized by this PCR; slaughterhouse applicability must be determined separately. |
