---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.dry-industrial-ammonium-pentaborate
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Dry industrial ammonium pentaborate production


## 1. Scope and Applicability

This PCR covers industrial dry crystalline ammonium pentaborate supplied as granules or powder, produced from boric acid, ammonia and water, through actual solid recovery and conditioning to first accepted factory product. The representative supplied chemical state is NH4B5O8·4H2O, also expressed as diammonium decaborate octahydrate. Its whole-product content must satisfy the selected flow’s ≥99% condition on a documented product mass basis. The source SDS reports >99.0% tetrahydrate; an oxide-equivalent analysis by itself does not prove that content. [borax-pentaborate-pds-2024; borax-pentaborate-sds-2025; borax-pentaborate-spec-v3]

The native flow records inventory CAS 12007-89-5, while the supplied tetrahydrate uses CAS 12046-04-7. The same manufacturer SDS explicitly distinguishes supplied composition from anhydrous inventory listing. Preserve both identifiers with their different roles; this is not a declaration that the CAS numbers are interchangeable or that hydrate mass equals anhydrous salt mass. Do not use this PCR for a hard anhydrous-only flow record or an unqualified different hydrate. Its native classification differs from the requested classification coordinate; product identity and mapping acceptance require separate assessment.

Excluded: aqueous ammonium-borate solutions, mixed fire-retardant formulations, other ammonium borates, boric acid, sodium/potassium borates, silicates, perborates and cyanide-family products. Ore/methanol routes, triborate routes and downstream treatment or flame-retardant performance require separate applicability assessment. No operating recipe, temperature, dosing, yield or emission factor is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.dry-industrial-ammonium-pentaborate |
| classification_refs | CPC 3.0 34270; narrower product and route boundary |
| covered_products | Dry industrial crystalline ammonium pentaborate, qualified tetrahydrate whole product, ≥99% content on declared product basis |
| excluded_products | Solutions; blends; other borates; hard anhydrous-only products; unrelated CPC family species |
| representative_product | Technical crystalline tetrahydrate powder; packaging excluded from reference net mass |
| production_route | Boric acid + ammonia + water; actual solid recovery, conditioning and packing |
| market_state | Dry powder or granules, first acceptance at plant; actual site and grade declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide industrial ammonium pentaborate as a dry technical chemical input |
| How much | 1 kg accepted complete supplied product |
| How well | Declared tetrahydrate state and content, grade, particle form and acceptance specification; no downstream function equivalence |
| How long or cycle | One production and first-acceptance cycle; no service lifetime assumed |
| reference_flow_link | pentaborate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ammonium Pentaborate `540f5f8d-53a6-48a1-97f9-9376cf0f951a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Whole tetrahydrate product mass; actual hydrate formula/CAS; separate inventory CAS; ≥99% product-content basis and method; residual moisture; particle form; grade/SKU; route; site/period; first-acceptance gate; cohort id; package exclusion; upstream quantity convention; utility interface/provider coverage; steam-condensate paired basis; whole-bag directional stock/dispatch/return basis |

Declare all required qualifiers in the data package. A product label, inventory listing or oxide-equivalent assay cannot substitute for the complete supplied-state definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use whole net supplied tetrahydrate product mass, including bound crystal water and measured residual moisture; exclude packaging. No dry-salt normalization. |
| assay_basis | pentaborate | Mass fraction | kg/kg | Keep physical product-content fraction, water, oxide equivalents and equivalent assay distinct. Values above 100% in equivalent analysis are not physical mass fractions. |
| pool_basis | all inventory rows | Exchange-specific property | native unit | Use per 1 kg reference flow after one positive independently measured cohort Q normalization. Preserve each numerator unit and physical pool separately from LCI burden attribution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased qualified boric acid, ammonia and treated water at site receipt, with their upstream datasets; actual external utility supply and complete linked utility producers |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | One dry ammonium pentaborate subset; no whole-family coverage inferred |
| recursive_input_rule | Purchased same-category product is a separately measured upstream input. Internal recycle retains original identity/cohort and burden; neither is a new production credit. |
| upstream_dataset_requirement | Actual supplied state, route, geography, period and quantity basis; no use of an anhydrous dataset as whole hydrated product without supported conversion |
| disclosure | Site and stages, input state, utilities, internal links, all stock pools, treatment, acceptance gate, packaging and excluded downstream uses |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_boundary | manufacture | Include receipt/storage, actual chemical production, solid recovery and conditioning, packing, failed batches, cleaning and actual environmental controls through first acceptance, with later dispatch/return services tracked to original cohorts. The process receives only actual externally supplied electricity or thermal services under the utility_interface rule; this does not establish positive steam, heat or drying demand. Extend the inventory with individually named actual chemicals and packaging before claiming completeness. | borax-pentaborate-pds-2024; borax-pentaborate-sds-2025 |
| state_boundary | pentaborate | Keep supplied tetrahydrate, inventory registry number and native flow conditions separate. Do not promote a classifier match into chemical identity or silently change anhydrous/hydrated quantity bases. | borax-pentaborate-sds-2025 |
| treatment_boundary | residual outlets | Track treatment transfers and final releases separately. Include actual ammonia, boron and particulate controls; absence or a zero result requires operational and detection evidence, not an SDS example. | borax-pentaborate-sds-2025 |
| utility_interface | utility supply and actual combustion | This restricted process profile receives actual electricity, indirect heat or steam across identified interfaces. An actual on-site boiler or combustion-based utility must remain a separately linked and fully represented producer, including fuel, combustion air/O2, chemically formed water, heat/mass interfaces and actual pollutant outlets; preserve its burdens once in the supplied service. Do not move a paper gate to omit the physical operation. Direct firing within the chemical unit is outside this profile until a complete source-supported unit inventory and actual interfaces are established. No positive heat/steam demand is inferred from dry product state or PDS. Match actual provider output and consumer input, ownership and state. Provider-embedded burdens are not duplicated as new foreground combustion; own raw/WIP carryover is a separate inherited inventory, not a deduction from an unrelated provider dataset. | ec-pef-multifunctionality-2021; borax-pentaborate-pds-2024 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pentaborate_plant | Boric-acid/ammonia route to dry accepted product | required | Actual declared site, hydrate state and grade | foreground | 1 kg accepted whole product |

Boric acid, actual ammonia supply and water → declared chemical-production stage → actual solid recovery/conditioning → dry-product handling and packing → first final acceptance. Preserve stage-level records and equal internal links, including mother liquor and recovered dust. This map names environmental inventory stages; it is not an operating recipe.

### Process: Industrial pentaborate manufacture (`pentaborate_plant`)

#### Inputs

##### Product flows

###### Boric acid (`boric_acid`)

Record actual primary-production orthoboric-acid input as received, including moisture and assay. This identity is not boron trioxide, ore or a boric-acid solution. Preserve its supplied mass and upstream production burden.

- Selected flow：Boric acid `5afb91cd-b49f-481a-9364-ad3100c47f2a`
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_inputs
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_inputs`
- Sources：`borax-pentaborate-pds-2024`

###### Ammonia, anhydrous, liquid (`ammonia`)

Use this identity only for actual anhydrous liquid ammonia received at the foreground boundary. Meter supplied mass and losses before use. If aqueous ammonia is supplied, add a separate whole-solution exchange with verified identity, concentration and carrier water; do not use this pure feed identity for the solution.

- Selected flow：Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_inputs
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_inputs`
- Sources：`borax-pentaborate-pds-2024`

###### Process Water (`process_water`)

Treated process-water product input only. Record reaction medium, wash and makeup water separately in the raw ledger, using mass; a volume meter requires measured density at its recorded conditions. Internal mother liquor is not a new water purchase.

- Selected flow：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_inputs
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_inputs`
- Sources：`borax-pentaborate-pds-2024`

###### Purchased electricity (`electricity`)

Meter actual reaction, solid recovery, drying/conditioning, handling, exhaust control and wastewater treatment demand. Record region, voltage, supplier and loss boundary. A case-specific Korean soil-washing electricity record is not compatible; identity remains open for the actual site.

- Selected flow：Purchased electricity
- Flow property / unit：Energy / kWh
- Amount rule：Collected attributable exchange amount; cp_energy
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_energy`
- Sources：`borax-pentaborate-pds-2024`

###### Supplied process steam (`steam`)

Include only actual steam entering across a metered interface from an identified external or separately linked on-site utility producer. Record whole delivered steam mass, pressure, temperature, quality, enthalpy reference, meter/event and provider-side sent mass. Pair any actual condensate return with condensate_return and the receiving provider record. Direct-contact steam retained in product or released here stays in this unit water account. Do not create positive steam demand from a product data sheet or default enthalpy.

- Selected flow：Supplied process steam
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_energy
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_energy`
- Sources：`borax-pentaborate-pds-2024`

###### Supplied process heat (`supplied_heat`)

Conditional actual metered indirect heat crossing the chemical-unit boundary without a carrier material crossing that boundary. Identify sender and receiver, heat meter, interval and delivery losses. A real heating-fluid mass transfer instead needs its own individually named inlet and return cards and paired measurements; this energy-only card cannot hide carrier water or fuel combustion. This card must represent a distinct supplied thermal service; do not book the same steam service again as supplied heat. No positive heat demand or provider technology is assumed.

- Selected flow：Supplied process heat
- Flow property / unit：Energy / MJ
- Amount rule：Collected attributable exchange amount; cp_energy
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_energy`
- Sources：`borax-pentaborate-pds-2024`

###### High-density polyethylene product bag (`hdpe_bag`)

Record actual newly received whole HDPE bags, including purchases or identifiable supplier-consigned receipts, supplier sending quantities, empty-bag mass and whole-bag provider burdens, including forming where represented. Do not add the provider-embedded resin/forming burden a second time; own empty/packed stock vectors remain separate. Distinguish these receipts from returned_hdpe_bag, own empty/packed stocks and internal issues. Pair bag deliveries, supplier returns and disposal with their explicit output cards and recipient records. Nominal product fill is not bag mass; resin or air-stripper packing does not identify a whole bag. Other actual packaging components need separate atomic cards.

- Selected flow：High-density polyethylene product bag
- Flow property / unit：Mass / kg
- Amount rule：Collected attributable exchange amount; cp_packaging
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_packaging`
- Sources：`dmcc-pentaborate-product`

###### Returned high-density polyethylene product bag (`returned_hdpe_bag`)

Record actual whole bags received back from a customer or receiver, with sending/receiving records, condition, empty mass and original delivery/cohort. A return or refill is not a new bag purchase or a new accepted product event. Later cleaning, repair or repacking attributable to an already accepted product attaches to that original product cohort and its locked original Q; do not recharge the inherited original bag manufacturing burden. A documented subsequent use for another product cohort requires separate actual service attribution while preserving the same bag history; it does not create another bag manufacture.

- Selected flow：Returned high-density polyethylene product bag
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_packaging
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_packaging`
- Sources：`dmcc-pentaborate-product`

#### Outputs

##### Product flows

###### Ammonium Pentaborate (`pentaborate`)

The reference output is the complete dry technical crystalline tetrahydrate product at first final acceptance, including its chemically bound water and measured residual moisture. Exclude transport packaging. Preserve actual hydrate CAS 12046-04-7 separately from the flow record inventory CAS 12007-89-5; no pure anhydrous-salt mass conversion.

- Selected flow：Ammonium Pentaborate `540f5f8d-53a6-48a1-97f9-9376cf0f951a`
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：1 kg
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_acceptance`
- Sources：`borax-pentaborate-sds-2025`; `borax-pentaborate-spec-v3`

###### Steam condensate returned to utility producer (`condensate_return`)

One actual whole condensate-water return stream only. Measure sent mass and state/enthalpy at this process outlet and the identified producer receiving end, with interval and losses reconciled. No full steam return fraction is assumed: water incorporated in product, residual streams or vapour stays in the measured chemical-unit account. Returning condensate is a utility interface, not another product reference or an avoided-production credit.

- Selected flow：Steam condensate returned to utility producer
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_energy
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_energy`
- Sources：`borax-pentaborate-pds-2024`

###### High-density polyethylene product bag delivered with product (`delivered_hdpe_bag`)

Record the actual whole-bag mass leaving with product at each delivery and the customer/receiver matched quantity. This physical packaging transfer is excluded from the net chemical reference mass, is not a new quantitative reference, co-function or sold co-product, and earns no bag-manufacturing credit. Accepted packed FG remaining on site retains its bag physical stock and inherited vector; later dispatch is a traced transfer, not a second manufacture or new Q. Physical quantities are never reduced by environmental allocation shares.

- Selected flow：High-density polyethylene product bag delivered with product
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_packaging
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_packaging`
- Sources：`dmcc-pentaborate-product`

###### High-density polyethylene product bag returned to supplier (`hdpe_bag_return_to_supplier`)

Record actual whole empty bags returned externally to the supplier or owner, with source lot, condition, outgoing mass and receiver acknowledgment. Distinguish this outward movement from bags delivered with product, internal reuse, customer returns and disposal. Carry inherited ownership/service records without an automatic avoided-bag credit.

- Selected flow：High-density polyethylene product bag returned to supplier
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_packaging
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_packaging`
- Sources：`dmcc-pentaborate-product`

##### Waste flows

###### Ammonium-borate mother-liquor purge for off-site treatment (`purged_mother_liquor`)

One aqueous waste stream only when it leaves for treatment. Measure whole stream, dissolved boron/nitrogen, moisture and destination. A recycled internal mother liquor retains its physical inventory and inherited burden, and is not this external waste exchange.

- Selected flow：Ammonium-borate mother-liquor purge for off-site treatment
- Flow property / unit：Mass / kg
- Amount rule：Collected attributable exchange amount; cp_residues
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_residues`
- Sources：`borax-pentaborate-sds-2025`

###### Off-specification ammonium pentaborate solid for disposal (`offspec_solid`)

Record only the actual solid sent to disposal, including assay and hydration state. Reworked or returned material is tracked once through its original cohort instead of generating a new accepted output or an avoided-product credit.

- Selected flow：Off-specification ammonium pentaborate solid for disposal
- Flow property / unit：Mass / kg
- Amount rule：Collected attributable exchange amount; cp_residues
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_residues`
- Sources：`borax-pentaborate-sds-2025`

###### Captured ammonium pentaborate dust for off-site treatment (`captured_dust`)

Measure the actual captured solid leaving for treatment. Dust returned to production is an internal link with equal sending/receiving quantities and inherited burden. Neither returned nor captured dust is the stack emission.

- Selected flow：Captured ammonium pentaborate dust for off-site treatment
- Flow property / unit：Mass / kg
- Amount rule：Collected attributable exchange amount; cp_residues
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_residues`
- Sources：`borax-pentaborate-sds-2025`

###### Equipment-wash effluent for off-site treatment (`wash_effluent`)

Keep this cleaning-origin wastewater separate from mother-liquor purge. Record water, boron and nitrogen loads and receiver; do not additionally count its contents as a direct environmental discharge. Any on-site treatment chemical is a separate atomic input.

- Selected flow：Equipment-wash effluent for off-site treatment
- Flow property / unit：Mass / kg
- Amount rule：Collected attributable exchange amount; cp_residues
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_residues`
- Sources：`borax-pentaborate-sds-2025`

###### Discarded high-density polyethylene product bag (`hdpe_bag_waste`)

Record actual whole-bag rejects or damaged bags sent for recycling/treatment/disposal, including the receiver and any associated contamination. Do not report the same mass as product delivery or supplier return. Unrecovered loss is a separately investigated stock residual until its actual fate is known; an actual environmental release needs its own identified atomic outlet, not a fictitious disposal destination.

- Selected flow：Discarded high-density polyethylene product bag
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_packaging
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_packaging`
- Sources：`dmcc-pentaborate-product`

##### Elementary flows

###### Ammonia emitted to outdoor air (`ammonia_air`)

Measure actual final vent and fugitive ammonia after included control, including storage and conditioning. Quantify NH3 mass, not NH3-N; a conversion requires explicit atomic masses and analyte basis. A material ammonia input is not an emission flow identity.

- Selected flow：Ammonia emitted to outdoor air
- Flow property / unit：Mass / kg
- Amount rule：Collected attributable exchange amount; cp_emissions
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_emissions`
- Sources：`borax-pentaborate-sds-2025`

###### Ammonium pentaborate particulate emitted to outdoor air (`pentaborate_air`)

Measure final emitted particulate product mass with source and particle-size definition. Use either total particulate or disjoint fractions, never total plus overlapping PM fractions. If a sample reports only boron, keep that analyte basis until actual composition supports conversion.

- Selected flow：Ammonium pentaborate particulate emitted to outdoor air
- Flow property / unit：Mass / kg
- Amount rule：Collected attributable exchange amount; cp_emissions
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_emissions`
- Sources：`borax-pentaborate-sds-2025`

###### Boron released to the actual receiving water (`boron_water`)

Only actual direct release after included treatment. Declare receptor, total/dissolved boron convention and analysis uncertainty. Do not identify total boron mass as a molecular ammonium pentaborate flow or infer borate species from a closure residual. Off-site effluent is excluded from this row.

- Selected flow：Boron released to the actual receiving water
- Flow property / unit：Mass / kg
- Amount rule：Collected attributable exchange amount; cp_emissions
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_emissions`
- Sources：`borax-pentaborate-sds-2025`

###### water vapour (`water_vapour`)

Record actual water-vapour species leaving this chemical unit to outdoor air, whether originating from supplied process water, direct-contact steam or supported chemical water formation. Determine origin in the separate species/water account; an emitted-water measurement alone cannot establish reaction-water formation. Bound crystal water remaining in product and measured returned condensate are not this emission. Combustion-generated water belongs to the fully represented linked utility producer.

- Selected flow：water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule：Collected attributable exchange amount; cp_emissions
- Value mode：`foreground_record`
- Specificity：`site_specific`
- Normalization basis：per 1 kg reference flow
- Basis kind：`reference_flow`
- Evidence kind：`collected_record`
- Collection protocol：`cp_emissions`
- Sources：`borax-pentaborate-pds-2024`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | shared operations | Separate sites, grades, hydrate states, periods and dedicated stages. Investigate subdivision or expanded-system reporting first; if allocation remains necessary, justify a causal physical relation, then another documented basis and sensitivity. No default mass/economic percentage is supplied. | ec-pef-multifunctionality-2021 |
| physical_not_allocated | all physical flows | Keep measured product, residual and emission quantities unallocated. Allocation partitions the LCI burden vector only. Internal recycle is neither a co-product credit nor a new purchased feed; a saleable residual requires declared function, destination and the same allocation account. | ec-pef-multifunctionality-2021 |
| stock_burden | raw WIP FG and original cohorts | Track raw materials, work in progress and finished goods by cohort as both physical stock/composition and inherited LCI vector. Carry opening raw/WIP burdens into consumption and unconsumed raw/WIP burdens forward. First-accepted closing FG carries its already assigned production vector; never deduct that FG vector from the first-gate cohort numerator whose Q includes the same FG. Match equal internal links without erasing prior burdens. Later storage, retesting, repacking and return services attach to the original cohort and its locked original Q; do not divide them by new current-period Q. | ec-pef-multifunctionality-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | pentaborate_plant | pentaborate | foreground_record | gate event id; original cohort; first acceptance time; independently weighed net mass; gross/tare; formula/CAS; inventory number; content method/basis; moisture; opening/closing FG; dispatches; other exits; returns/regrades | Use calibrated weighing and actual QC release records; deduplicate each first-acceptance event and freeze total Q. Measure Q independently before reconciling all disjoint FG movements; old FG dispatches, returns and retests create no new Q. | kg | Each event and reconciled reporting period | Full declared period including startup, shutdown, failed batches and stocks | One declared site, route, grade and original cohort | per 1 kg reference flow | Calibration; original records; samples; receiver evidence; uncertainty; cohort ledger |
| cp_inputs | pentaborate_plant | chemical and water inputs | foreground_record | receipt/issue lot; supplier; supplied state; mass; assay; water; density conditions; raw/WIP opening/closing composition and inherited vectors; internal links | Use receipts, calibrated meters, actual issue and stock records; distinguish received, consumed and internally transferred amounts and retain failed-batch consumption. | kg | Each event and reconciled reporting period | Full declared period including startup, shutdown, failed batches and stocks | One declared site, route, grade and original cohort | per 1 kg reference flow | Calibration; original records; samples; receiver evidence; uncertainty; cohort ledger |
| cp_energy | pentaborate_plant | one external utility interface | foreground_record | provider and consumer ids; ownership; paired meter/event; supply sent/received; electricity region/voltage/loss boundary; actual indirect heat; steam mass/P/T/quality/enthalpy reference; condensate sent/received mass/state; interval; interface losses; retained/vented steam water; provider inventory coverage; shared driver | Measure each actual carrier separately and match the supplying-unit sent quantity to consuming-unit received quantity, with measured transport/interface losses and the same interval/state. Pair actual steam inlet and condensate outlet to both provider ends; reconcile steam water retained in product, residuals, stocks or vapour. Derive net thermal energy only from actual supply/return mass and validated state-specific enthalpies on one common reference, or a suitable actual heat meter; retain enthalpy-source evidence and no universal coefficient. If no heat/steam is supplied, document absence without creating a positive flow. Include a real on-site utility as a complete linked unit, never as unaccounted gas/CO2 rows or an omitted physical boiler. | kWh; MJ; kg | Each matched interface/stock event and reconciled reporting period | Full declared period including startup, shutdown, failed batches and stocks | Actual producing/consuming units and original product/packaging cohort | per 1 kg reference flow | Calibration; paired sending/receiving records; original stock logs; uncertainty; cohort vectors |
| cp_packaging | pentaborate_plant | whole HDPE bag receipts stocks dispatch and returns | foreground_record | bag lot/serial; original and actually serviced product cohort/Q; bag count and weighed empty mass in each direction; matched sending/receiving empty tare; supplier/owner; purchase or consigned receipts with sender pair; customer-return receipts with sender pair; opening/closing empty and packed bag stocks; internal issues/refills; delivered bags and receiver pair; supplier-return bags and receiver pair; rejects/disposal and receiver; unrecovered loss and investigation; inherited manufacturing/service vector; later storage/repacking | Count and weigh whole empty bags in every direction, retain sending and receiving tare/condition records, and reconcile all external directions and both empty/packed stocks. Distinguish new purchases/consignment, customer returns, internal reuse, delivered bags, supplier returns and final waste as disjoint events with paired counterparty records; do not treat filling as a new external bag receipt. Retain complete physical bag quantities independently of allocation shares. Carry original manufacturing burdens once; assign later storage, return, cleaning or repacking increments to the original product cohort and its locked original Q, never a new product acceptance. | kg | Each matched interface/stock event and reconciled reporting period | Full declared period including startup, shutdown, failed batches and stocks | Actual producing/consuming units and original product/packaging cohort | per 1 kg reference flow | Calibration; paired sending/receiving records; original stock logs; uncertainty; cohort vectors |
| cp_residues | pentaborate_plant | one external waste stream | foreground_record | origin; whole mass; water/solids; B/N assay; receiver; route; event; internal recycle quantities; zero-output events | Use weighed transfer and receiver records and representative sampling. Reconcile individual mother-liquor, dust, solid-reject and wash-water streams separately from internal recovery and final direct releases. | kg | Each event and reconciled reporting period | Full declared period including startup, shutdown, failed batches and stocks | One declared site, route, grade and original cohort | per 1 kg reference flow | Calibration; original records; samples; receiver evidence; uncertainty; cohort ledger |
| cp_emissions | pentaborate_plant | one actual species or particulate fraction | foreground_record | source/outfall; receptor; analyte; mass or concentration; integrated flow or flow rate/time; gas dry/wet T/P; moisture; abatement; detection limit; composition/size cut | Use actual representative source monitoring and matched physical flows after included treatment. Preserve NH3 versus N, total/dissolved B, particulate and water-species definitions; monitor additional actual emissions individually. | kg | Each event and reconciled reporting period | Full declared period including startup, shutdown, failed batches and stocks | One declared site, route, grade and original cohort | per 1 kg reference flow | Calibration; original records; samples; receiver evidence; uncertainty; cohort ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_normalization | all inventory rows | Attributable first-gate exchange = cohort-linked measured new exchanges plus consumed opening raw/WIP inherited vectors, minus unconsumed closing raw/WIP vectors and burdens assigned to other outputs/cohorts, using a documented non-overlapping attribution ledger. Production burdens of first-accepted closing FG stay in this original cohort numerator because that FG is already included in Q; FG retains its assigned vector for later tracking, without another production charge on dispatch. Divide that attributed numerator once by the independently measured positive first-acceptance Q of the same original cohort. Keep all physical totals before allocation and failed/zero-output events. Q=0 gives no normalized result; retain its burdens for traced later disposition rather than silently dropping the event. | actual exchanges; Q; raw/WIP/FG vectors; cp_acceptance | per 1 kg reference flow | ec-pef-multifunctionality-2021 |
| gate_reconciliation | pentaborate | Q is the locked sum of uniquely identified measured first-acceptance events, not a value inferred from dispatch or stock closure. For each reporting period and cohort reconcile opening FG + measured first acceptances within that period + external returns/imports/regrade-in = closing FG + dispatch + separately classified other post-gate exits + regrade-out. First acceptances within a later period are zero for an already accepted old cohort; its locked original Q is never added again to that period balance. Other post-gate exits include separately measured disposal/destructive tests, samples/donations and interplant transfers; these categories and dispatch/regrade-out must be disjoint. Define distinct directional incoming counterparts and prevent return/dispatch double counting. Q = new-cohort dispatch + new-cohort closing FG is only a conditional bridge when that new cohort has no opening FG, returns, imports, regrades or other post-gate exits; it never defines Q. | first-acceptance events; all FG movements; cp_acceptance | independent Q and reconciliation residual | borax-pentaborate-sds-2025 |
| chemistry_accounts | pentaborate_plant | Maintain separate unallocated total mass, B/N/H/O elemental, molecular-species/water and energy accounts for this chemical/product unit, with raw/WIP/FG and empty/packed-bag opening and closing stocks, whole external streams and equal internal links. Steam input and condensate return use actual two-end mass and state records; retained or vented steam water remains in this unit water account. For any species, net formation/consumption equals outputs + closing stock minus inputs minus opening stock only when actual reaction/speciation evidence supports the account; do not impose zero on chemically transformed boric acid, ammonia or molecular water. Elemental conservation does not identify reaction products. Track crystal water, free moisture, chemically formed/consumed molecular water, released water vapour and condensate separately; do not count chemically bound hydroxyl as supplied water or invent reaction water to force closure. Fuel/combustion-air/reaction-water/emission/energy accounts belong to the actual linked utility producer, not an omitted boiler or an unsupported one-row combustion branch. | whole streams; assays; reaction evidence; all stocks; paired utility interfaces; cp_energy; cp_packaging | separate physical balance accounts | borax-pentaborate-pds-2024; borax-pentaborate-sds-2025 |
| measured_release | ammonia_air, pentaborate_air, boron_water, water_vapour | For each matched interval, multiply measured concentration by already integrated compatible gas/discharge volume with explicit unit conversion. Only a flow rate is integrated with time; never multiply integrated volume by time again. Keep analyte/species and dry/wet/reference gas basis identical. Report detection uncertainty, actual receptors and mutually exclusive particulate fractions. | matched monitoring; volume or rate/time; cp_emissions | actual emitted mass | borax-pentaborate-sds-2025 |
| utility_pairs | steam, condensate_return, supplied_heat | Preserve actual delivered steam mass and actual returned condensate mass as separate physical exchanges with matched provider/consumer ends. Net steam thermal transfer is supplied mass times supported supplied-state specific enthalpy minus returned mass times supported returned-state specific enthalpy, using one common enthalpy reference and explicit unit conversion; separately account for measured interface losses and any retained/vented water. An indirect heat-meter amount is not an extra steam mass. Do not force equal inlet/return mass, invent makeup/formation water or assume a positive duty. | actual paired mass and state; validated enthalpies; cp_energy | actual utility mass/energy interface | ec-pef-multifunctionality-2021 |
| bag_reconciliation | hdpe_bag, returned_hdpe_bag, delivered_hdpe_bag, hdpe_bag_return_to_supplier, hdpe_bag_waste | Within each actual period/cohort, opening empty + opening packed bag mass + new purchase/consigned receipts + external customer returns = closing empty + closing packed bag mass + whole bags delivered with product + whole bags returned to supplier + measured bag waste + separately investigated actual unrecovered loss. Use disjoint directional events, matched counterpart quantities and internal filling/reuse transfers that cancel. Never multiply a measured bag outlet by an environmental allocation share. First-accepted closing packed FG retains its bag vector within original Q; later dispatch moves that inherited physical/vector stock without a second manufacture charge, and later incremental services use original Q. | actual whole-bag movements; empty/packed stocks; original Q; cp_packaging | full physical packaging bridge and cohort service attribution | dmcc-pentaborate-product; ec-pef-multifunctionality-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | pentaborate | Require full supplied-state, ≥99% whole-product content method, actual hydrate/CAS, separate inventory number, route and provider mass compatibility. Equivalent assay and theoretical oxide contents alone are insufficient. | cp_acceptance; borax-pentaborate-sds-2025 |
| denominator | all inventory rows | Require independently weighed unique first acceptance, complete directional FG exits and old-cohort services; no stock-derived or dispatch-derived new production. | cp_acceptance |
| balance | pentaborate_plant | Set tolerances from actual measurement uncertainty. Investigate mass, element, species/water and energy residuals separately. No empirical closure factor or assumed unmeasured yield. | cp_inputs; cp_residues; cp_energy; cp_emissions |
| coverage | pentaborate_plant | Report each unresolved flow identity, missing measurement, absent stage and extra actual substance. Do not convert producer specifications, solubility charts or worker exposure recommendations to site inventory factors. | borax-pentaborate-spec-v3; borax-pentaborate-sds-2025 |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| check_identity | pentaborate | Require one complete dry whole-product output with the selected flow conditions and declared chemical versus registry identifiers. A hard contradictory formula, hydration state, purity denominator or route makes the link unavailable until resolved. Do not fix the native record by interpretation. | borax-pentaborate-sds-2025 |
| check_q | all inventory rows | Require 1 kg reference output, common positive original-cohort Q and one normalization. Old FG, reacceptance, returns and retests cannot enlarge Q. Check other post-gate exits before any dispatch/closing-stock bridge. | borax-pentaborate-sds-2025 |
| check_conservation | pentaborate_plant | Check this chemical unit total/element conservation, supported species formation/consumption and separate thermal/energy accounting with raw/WIP/FG and packaging physical and inherited-burden vectors. Verify the complete actual linked utility producer and matched steam/condensate interfaces. Verify both external packaging ends without scaling physical exits by environmental burden shares. | ec-pef-multifunctionality-2021; borax-pentaborate-sds-2025 |
| check_releases | all residuals and emissions | Require final destination, actual species/analyte basis, compatible units and distinct captured/recycled/emitted pathways. Utility combustion is supplied by an explicitly linked fully represented producer; direct combustion inside this chemical unit is outside the restricted interface profile until a complete supported unit inventory is established. Add actual chemicals, packaging and pollutants as atomic rows; no unmeasured zero or generic collection flow. | borax-pentaborate-sds-2025 |
| check_limits | data package | Structural, measurement and projection checks do not approve scientific applicability or fill unresolved UUID/provider evidence. Disclose remaining gaps and restrict use until the actual dataset is complete. | borax-pentaborate-pds-2024 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual qualified industrial dry tetrahydrate product from the declared boric-acid/ammonia site route and supplied mass basis |
| excluded_use | Whole CPC-family equivalence; aqueous blend; anhydrous-salt substitution; universal recipe; performance or safety approval |
| required_metadata | Site/period; route/stages; formula/hydrate and distinct CAS roles; content method; moisture; grade/form; gate/cohort/Q; stocks/vectors; packaging; upstream basis; allocation; receivers |
| required_quality_disclosure | Unresolved identities; native classification difference; source-specific limitations; actual measurement uncertainties; unmeasured stages; residuals and omitted checks |
| update_trigger | Changed hydrate/content method, route, supplier, energy region, packaging, acceptance gate, treatment or receptor |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| borax-pentaborate-pds-2024 | handbook | U.S. Borax, Ammonium Pentaborate Product Data Sheet, September 2024. https://www.borax.com/BoraxCorp/media/Borax-Main/Resources/Data-Sheets/ammonium-pentaborate.pdf?ext=.pdf | Pages 1–3: whole tetrahydrate product, ammonia/water/boric-acid reaction, crystalline supply state, moisture sensitivity, decomposition and container examples. Theoretical oxide composition, solubility and producer examples are not inventory factors or operating instructions. |
| borax-pentaborate-spec-v3 | handbook | Borax Français S.A.S., Ammonium Pentaborate Technical Powder, BFC31-v.3, undated. https://www.borax.com/BoraxCorp/media/Borax-Main/Resources/Specifications-Sheets/ammonium-pentaborate-technical-powder.pdf?ext=.pdf | Complete single page: manufactured crystalline tetrahydrate and producer analytical specifications. Equivalent tetrahydrate assay can exceed 100%; it is not a physical constituent mass fraction, yield, dry-salt fraction or universal grade. |
| borax-pentaborate-sds-2025 | handbook | Rio Tinto Borates / Borax Français S.A.S., Ammonium Pentaborate SDS AP-BF-AP-EN, January 2025. https://sds.riotinto.com/display/rtm/FileName-502775 | Complete 7-page SDS: sections 1, 3, 9 and 15 connect the named whole tetrahydrate product, CAS 12046-04-7, >99.0% content and the separate anhydrous inventory number 12007-89-5. Sections 6–13 support dust, moisture, ammonia and water-release assessment. No occupational limit, toxicity endpoint or theoretical conversion is an LCI default. |
| dmcc-pentaborate-product | handbook | DMCC Speciality Chemicals, Ammonium Pentaborate product page, undated. https://dmcc.com/product/boron-chemicals/ammonium-pentaborate | Independent producer product context: CAS 12046-04-7, diammonium decaborate octahydrate formula and HDPE-bag supply. The doubled formula denotes the same hydrate composition; no double product mass. The displayed ammonium-oxide label contains a Na4 typo and is not used quantitatively. No factory recipe, yield or fuel mix is established. |
| ec-pef-multifunctionality-2021 | official_guidance | European Commission, Recommendation C(2021) 9332 final, Annexes 1–2, 2021. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Section 4.5, PDF pages 63–64: investigate subdivision/system expansion, then relevant physical relationships and justified alternatives for multifunctionality. General method only; no borate-specific allocation percentage or substitution credit. |
