---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.additive-free-compacted-urea-fertilizer-round-tablets
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Additive-free mechanically compacted urea fertilizer round tablets

## 1. Scope and Applicability

This PCR covers the specific whole round-tablet agricultural urea product and additive-free physical compaction route established by IFDC. Complete scope, identity/classification inference, stage and accounting conditions are retained in Sections5 and9, which must be read together with every inventory row.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.additive-free-compacted-urea-fertilizer-round-tablets |
| classification_refs | CPC 3.0 34659; narrower product and route boundary |
| covered_products | Whole additive-free agricultural urea round tablets from mechanical compaction |
| excluded_products | Loose final prills/granules; unproven-form briquettes; NPK; added binder/coating/fortifier; wet/thermal synthesis; field use |
| representative_product | One actual documented round-tablet grade; no prescribed ratio, size or mass |
| production_route | Purchased virgin agricultural urea; actual preparation, feeding, mechanical compaction, screening/recycle, dry control and packing/acceptance |
| market_state | Whole supplied solid round tablets at first accepted finished-lot gate; actual bulk/packaging declared separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply whole agricultural urea round tablets for subsequent use |
| How much | 1 kg accepted net supplied product |
| How well | Actual agricultural grade, composition/water/traces, round form and complete acceptance methods; no default performance |
| How long or cycle | One manufacturing cohort at first acceptance; no field response or service-life claim |
| reference_flow_link | accepted_tablets |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual round-tablet form; additive-free agricultural urea grade; whole composition/water/traces; virgin NH3/CO2 upstream provider; actual mechanical route/stages; fixed first gate and original Q; raw/WIP/FG and postgate genealogy; material/utility provider units; actual air/moisture methods and coverage; packaging and whole contaminated wastes; part/fleet service history; site and continuous interval |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_reference | accepted_tablets | Mass | kg | Use 1 kg whole supplied net actual round tablets; exclude tare and collect cp_product once at the fixed first acceptance gate. No N-equivalent, dry-urea or dispatch denominator. |
| mass_phases | urea_feed; accepted_tablets; urea_reject; ambient_water_in; water_vapour | Mass | kg | Record supplied wet whole material, actual urea/water/traces and each real phase separately. Volume/count conversion uses measured same-grade density/state or representative item mass; no source tablet weight or size default. |
| electric_reference | electricity | Net calorific value | MJ | Preserve the actual native electricity reference property and unit; convert measured electrical kWh by3.6 MJ/kWh only. Match actual provider, voltage, delivery and losses; no fuel or intensity inference. |
| whole_component_waste | sack_waste; spent_sleeve; spent_roll | Mass | kg | Weigh one actual whole contaminated export, including retained urea/water/lubricant; substrate/tare is nested and reconciled independently, not the whole waste amount or an extra companion exchange. |
| common_denominator | all inventory rows | Row-declared property | kg; MJ | All amounts are per 1 kg reference flow. Divide each non-overlapping attributable numerator by positive locked Q; keep full physical totals separately and use original Q0 for later cohort services. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased virgin NH3/CO2 agricultural urea and external electricity/materials at receipt |
| starting_condition_role | Foreground entry interface, not an upstream burden cutoff |
| product_classification_scope | Specific additive-free round tablets; labelled inferred34659 continuity, not a full-leaf ruling |
| recursive_input_rule | Pair own recycle/WIP and inherit once; purchased urea retains its real synthesis/provider; purchased finished tablets are outside this manufacturing route |
| upstream_dataset_requirement | Genuine actual urea manufacture/transport, electricity, maintenance, parts, packaging and receiver-treatment providers with compatible state/unit/history |
| disclosure | Actual grade/form, operation/equipment, supplier and conditional non-use evidence; all stocks/fates, thermal/wet exclusions, methods and unresolved scope |

The product is the whole supplied agricultural urea round tablet made by mechanical compaction of purchased granular or prilled urea without any intentional binder, coating, fortifier or other ingredient. IFDC, Urea Deep Placement Trainer Manual, June2014, printed page2, explicitly describes additive-free physical briquetting and calls this specific product round tablets; its photographs show feed, machine and output. Do not infer that every briquette, supergranule, pillow or large prill is a tablet. Admit only actual documented round-tablet form and its actual acceptance specification. Loose prills/granules are inputs, not this finished product. Exclude wet dissolution/recrystallisation, thermal synthesis/conversion, coated or mixed fertilizers, field placement and agronomic-performance claims. No IFDC tablet size/weight, pack weight, yield, dose, field loss or benefit is a default.

Classification is an explicit continuity inference, not an official current product ruling. Current CPC3 introduction paragraphs26,50–51 and55–56 apply HS headings/notes to transportable goods; paragraph93 and the current Family state unchanged application principles. The official CPC2.1 explanatory note defines34659 through HS2007 3105.10, and the HS2017/CPC2.1 correspondence links3105.10→34659 with both partial flags0. Current34659 retains the title Fertilizers n.e.c., without an added scope note. HS2022 Chapter31 note2 applies nitrogenous heading31.02, including urea, only when not in31.05 forms/packages;3105.10 explicitly covers chapter31 goods in tablets/similar forms OR packages of gross weight not exceeding10kg. The specific IFDC round-tablet form supports the tablet branch independently of package size. The unchanged Urea34611 title, new34647 NK split and absence of a current detailed crosswalk remain contrary/limiting evidence; neither an automatic current mapping nor all-urea coverage follows. A later authoritative correction or contrary actual form requires review.

The selected native whole Urea Product flow has CAS57-13-6, a white crystalline urea identity and an agricultural-grade virgin industrial NH3/CO2 synthesis restriction. It has no granule-only form or geography restriction. Physical compaction into additive-free tablets does not replace it with a nutrient or a different formulated mixture. Require actual agricultural grade, supplied composition including traces/water, tablet evidence and a genuine upstream provider retaining that synthesis restriction. Native34611 metadata is disclosed as classification counterevidence; the exact whole-product hardfields, current rules and physical case—not that tag alone—govern this conditional admission. Generic favourable soil language supplies no safety, environmental benefit, yield or burden. A urea-as-N flow, feed-grade fertilizer, NPK mixture or unqualified provider cannot substitute.

One foreground aggregate retains stage ledgers: receive and net-weigh actual urea; condition/sieve and, only when installed, mill feed or recycle; meter feeding and the actual press/roll cavities; compact without added ingredients; separate and screen actual intact tablets, fines and rejects; return compatible fines to their parent batches; capture dust, dry-clean, sample, pack or bulk-load, accept and handle accepted stock. IFDC establishes the actual urea operation; SAHUT-CONREUR separately lists urea briquetting and describes conditional preparation plus complete-line screening, packing, utilities and dust removal. Its general binder, hot treatment and flake-granulation options are not this route. Do not crush accepted tablets into loose granules and still call the outlet tablets. Actual hardware/auxiliary choices need evidence; no machine type, pressure, speed, electricity, density, yield or life is prescribed. Actual omitted stages, chemicals or heat cannot be hidden to fit the scope.

The physical ledger covers all external receipts/returns/deliveries, sampled and rejected material, releases, and opening/closing raw urea, WIP, accepted/quarantined FG, fines, dust, containers, oil and asset stocks. Pair every internal transfer at equal physical quantity and preserve actual composition; internal loops cancel only at the aggregate boundary. The burden ledger separately carries own inherited foreground work, new work, upstream supplies, closing carried stocks and terminal assignments. An opening WIP vector is inherited once, not recreated from already included charges/meters. A provider aggregate and its embedded decomposition are alternatives, never additive histories. Rework and old accepted stock retain original genealogy and do not become burden-free feed.

Lock Q as the sum of whole supplied net kg at unique actual first round-tablet acceptance events at one fixed gate for the original cohort. Gross press throughput, internal fines, retests, returns, rework/reacceptance and dispatch of opening FG create no new event. Q is not an additional external physical output. Reconcile original Q0 into disjoint net remaining external deliveries, all actual onsite accepted states including held/quarantine/rework/WIP, irreversible losses, samples and other terminal dispositions on the original acceptance basis. Returns and loops are transfers, not a second fate. Keep later external additions separately. Never restore lost urea/water into the survivor and also count that loss. Only if every other postgate state/exit/loss is demonstrably absent may a delivery-plus-new-FG simplification be used. Later storage, repair/rework, packaging and asset service retain original Q0. Zero/unknown Q retains raw totals and unresolved normalization.

Before allocation conserve whole wet material and actual C/H/N/O plus material impurity/metal ledgers, not nitrogen-equivalent mass. Follow urea, water and each actual transformed species separately. Physical compaction assumes no chemical conversion only while actual records support that condition; hydrolysis, degradation, oxidation or thermal conversion needs actual generation/consumption and a reviewed extension, not a conservation assumption for reacting species. Moisture uptake is a real separate incoming water transfer; water loss is a real outgoing phase. Use measured phase/stock composition and original-cohort genealogy, not artificial dry-mass restoration. Captured urea, samples, rejects and emitted PM are disjoint. PM whole mass and its urea/N/water constituents are nested evidence, not additional elementary emissions for the same particles. Unmeasured residuals stay unresolved; no yield, purity, species remainder or allocation share forces closure.

Record physical empty sack receipts, delivered tare, serviceable external returns, customer returns, scrap and opening/closing empty/filled stock by original sack ID, separately from net tablets. Attribute actual manufacture/reuse service once; reuse creates no new manufacture or cofunction. Each actual contaminated sack or filter/roll export is ONE whole receiver waste mass including retained urea, water, oil or grease as present. Substrate/tare, contamination and moisture are nested subledgers; they are not extra powder/water waste exchanges or duplicate treatment. Only a physically documented separation before the boundary permits a separate residue stream. The whole-waste total must equal its nested constituents, while packaging/fleet bridges conserve their own substrate basis. Do not omit contamination from the receiver load.

Trace actual polyester filter sleeves and alloy-steel roll segments individually by measured mass/count, dimensions, configuration, installation/removal, maintenance, retained urea and original served cohorts. Preserve complete physical fleet stocks and transfers independently of provider manufacture/service demand. New or replacement parts may remain installed across intervals; do not export their whole mass as current powder loss. Derive service demand only from actual compatible provider units and real history, with inherited cohorts and later services retained once. No assumed machine mass, life, annualized replacement or recovery credit is allowed. Other real part materials require their own cards.

Electricity is external actual AC at the user interface. Preserve the native Net calorific value property/MJ reference convention; measured electrical kWh ×3.6 is a unit conversion, not combustion, heat supply or an intensity. Link a real compatible generation/delivery provider and its losses once. This mechanical route includes no intentional steam, burner, thermal dryer or added process water; installed heat/wet processing requires scope review and complete actual interfaces rather than an anonymous utility. Meter real drives, milling, feeding, extraction, vacuum, screening, packing, QA, idle and rework. Reconcile actual energy/work, material enthalpy/state, retained energy and separately evidenced heat rejection with uncertainty; never invent a heat or water output merely to close a residual.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | tablet_compaction | Include every actual stage and auxiliary in the complete source-qualified route above; non-use requires records, and added actual materials/species need atomic rows before a complete dataset. | ifdc-urea-tablets-2014; sahut-briquetting-2026 |
| boundary_identity | accepted_tablets | Apply complete round-form, agricultural whole-urea and upstream synthesis restrictions, with native34611 countermetadata and explicit current continuity-inference limits retained. | ifdc-urea-tablets-2014; wco-fertilizers-2022; unsd-cpc3-2025; unsd-cpc21-continuity |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tablet_compaction | Physical urea round-tablet manufacturing aggregate | required | Actual additive-free round-tablet route with complete Section5 conditions | foreground | per 1 kg reference flow |

### Process: Urea round-tablet compaction (`tablet_compaction`)

#### Inputs

##### Product flows

###### Purchased granular/prilled urea (`urea_feed`)

Whole actual agricultural urea feed, including measured moisture and traces. Require virgin NH3/CO2 synthesis, real grade/provider and net receipt/charge/stock history. No as-N conversion, free upstream manufacture or purchased finished-tablet substitution.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_material; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: ifdc-urea-tablets-2014

###### Electric drives and auxiliaries (`electricity`)

Actual metered mixer/feeder/press/mill/screen/fan/vacuum/packer/QA and attributable idle/rework electricity. Preserve measured kWh and native MJ conversion, with actual voltage, provider geography/time and delivery-loss boundary.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_power; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_power
- Sources: sahut-briquetting-2026

###### Mineral hydraulic oil makeup (`hydraulic_oil`)

Conditional actual mineral-oil hydraulic circuit only: measure the supplied formulation/grade, makeup, returns and fluid stocks. It is equipment service, never an intentional tablet binder. A different real fluid needs its own identity/card.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_maintenance; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_maintenance
- Sources: sahut-briquetting-2026

###### Bearing grease (`grease`)

Conditional actually installed lithium-soap grease, whole formulation and measured service use. Record containment, residue and actual supplier; contamination is nested in its real destination, not automatically product content. Other grease chemistry requires a separate card.

- Selected flow: Lithium-soap lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_maintenance; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_maintenance
- Sources: sahut-briquetting-2026

###### Empty unlined kraft sack (`sack_input`)

Conditional actual unlined paper sack; verify construction and tare. Each actual liner, closure, label, pallet or wrap requires its own atomic input and transfer bridge; a generic bag identity proves none of them. Bulk delivery still requires real handling/custody records.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: sahut-briquetting-2026

###### Polyester filter sleeve service (`filter_sleeve`)

Conditional actual polyester sleeve substrate; separately conserve entering material/fleet and attributable manufacture/service demand, using measured configuration and real history. No default life or current-period export of still-installed cloth.

- Selected flow: Polyester dust-filter sleeve
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_asset; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources: sahut-briquetting-2026

###### Alloy-steel roll segment service (`roll_segment`)

Conditional actual replaceable alloy-steel roll/cavity segment only. Measure material, dimensions and mass/count; retain new/refurbished/installed history and actual provider unit. Other installed tooling requires its own specific row.

- Selected flow: Alloy-steel briquetting roll segment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_asset; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources: sahut-briquetting-2026

##### Elementary flows

###### Actual absorbed atmospheric water (`ambient_water_in`)

Only independently established net water uptake by actual urea/stock/equipment at the declared air interface, from compatible measured moisture and phase records. This is not bought process water or a balancing fiction; unchanged carrier air is not a purchased oxygen product.

- Selected flow: Water vapour absorbed from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: ifdc-urea-tablets-2014

#### Outputs

##### Product flows

###### First accepted round tablets (`accepted_tablets`)

1 kg whole supplied net actual additive-free agricultural urea round tablets at the fixed first acceptance gate, with measured water/traces and declared shape/grade. Q is the independent event basis, not an extra physical shipment alongside actual stock/delivery transfers.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_product
- Sources: ifdc-urea-tablets-2014; wco-fertilizers-2022

###### Delivered sack tare (`sack_delivered`)

Actual intact empty-equivalent paper tare leaving with tablets; exclude contents and retain original sack ownership/genealogy. Packaging is not a second reference product, cofunction or avoided manufacture.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: sahut-briquetting-2026

###### Serviceable sack returned externally (`sack_returned`)

Only real serviceable empty sacks returned to an identified external owner; internal reuse stays in stock/transfers. Damaged contaminated exports belong to whole waste, not this product-return row.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: sahut-briquetting-2026

##### Waste flows

###### Separately exported urea reject residue (`urea_reject`)

One actually segregated external urea reject/cleaning-powder stream with measured wet mass, composition and receiver. Internal fines are not waste exports. No attached material already inside exported bags/parts is repeated here; separate destinations require separate cards.

- Selected flow: Additive-free urea reject residue
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_residue; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_residue
- Sources: ifdc-urea-tablets-2014

###### Whole contaminated discarded sack (`sack_waste`)

ONE whole physical export to the actual receiver: paper substrate plus attached urea/water and any measured contamination. Tare, urea and water are nested subledgers, never extra simultaneous external streams unless actually separated before export.

- Selected flow: Discarded kraft sack with retained urea
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: sahut-briquetting-2026

###### Whole spent contaminated filter sleeve (`spent_sleeve`)

One actually exported whole sleeve including substrate, retained urea, water and other measured contamination. Reconcile substrate fleet separately; retained material is nested and is not added again to urea_reject or PM.

- Selected flow: Spent polyester sleeve with retained urea
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_asset; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources: sahut-briquetting-2026

###### Whole discarded roll segment (`spent_roll`)

Conditional actual whole discarded segment with measured steel, adhering urea, lubricant and water subledgers and real receiver. A serviceable part sent for refurbishment needs its actual product/service status and reviewed interface, not an automatic scrap or credit assumption.

- Selected flow: Discarded alloy-steel roll segment with retained residue
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_asset; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources: sahut-briquetting-2026

###### Exported used hydraulic oil (`used_oil`)

Conditional actual separately collected spent fluid with whole measured composition and receiver. Oil retained on a discarded part or another whole waste is not also this fluid export.

- Selected flow: Used mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_maintenance; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_maintenance
- Sources: sahut-briquetting-2026

###### Separately collected spent bearing grease (`spent_grease`)

Only an actual separate external spent-grease stream; include its measured contamination. Grease already nested in whole parts or cleaning waste cannot be exported a second time under this row.

- Selected flow: Spent lithium-soap lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_maintenance; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_maintenance
- Sources: sahut-briquetting-2026

##### Elementary flows

###### Actual urea-bearing PM release (`dust_air`)

Actual airborne particulate mass crossing the outdoor-air unspecified-subcompartment boundary after actual control, with separately substantiated bypass/fugitive coverage. No size split, source-example factor or LCIA characterization is implied. Urea/N/water content is nested analytical evidence, not an extra emission.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_air; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-pm17-2017; epa-pm5-2017

###### Actual water vapour release (`water_vapour`)

Only actual measured/independently supported net water leaving urea, stocks or controls to outdoor air. Separate retained water and free water from dry particulate mass; no invented drying yield or default evaporation.

- Selected flow: Water vapour released to ambient air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: ifdc-urea-tablets-2014

###### Independently established heat rejection (`heat_air`)

Conditional actual evidenced thermal transfer from drives/press/controls, with state, measurement/model and uncertainty. An unexplained energy residual is not a measured heat exchange; retain it unresolved rather than forcing this row.

- Selected flow: Heat rejected to ambient air
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_power; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_power
- Sources: sahut-briquetting-2026

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_function | tablet_compaction | The actual round-tablet product is the sole reference function. Waste, retained dust, component returns and packaging transfers are physical fates, not automatic cofunctions or avoided-production credits. Any genuine additional sold function requires reviewed allocation with all actual physical quantities preserved. |  |
| cohort_services | all inventory rows | Trace batches/submeters before allocating shared services using demonstrated actual causal drivers. Preserve own inherited vectors and original served cohorts; provider aggregate versus disjoint decomposition is exclusive. Allocation changes burden shares, never physical mass, Q or actual waste/PM quantities. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | tablet_compaction | accepted_tablets | acceptance_record | event id/time; parent/cohort; actual round-tablet form; agricultural grade; composition; gross/tare/net; water; raw/WIP/FG boundaries; later delivery/return/rework/quarantine/sample/loss; original basis | Calibrated net weighing or traceable volume with actual density/state; lock first acceptance once and follow every later state. Preserve full parent history and measured composition, not dry/N-equivalent reconstruction. | kg | each acceptance and state change | continuous production interval and full original cohort history | one actual round-tablet grade, site and fixed gate | per 1 kg reference flow | scale calibration; actual acceptance methods/COA; form photographs/dimensions; event uniqueness; original-basis stock/disposition closure |
| cp_material | tablet_compaction | urea_feed | receipt_charge_stock | supplier/SKU; CAS; agricultural grade; virgin NH3/CO2 synthesis; net wet mass; water/traces; receipt/return/charge; raw/WIP stocks; actual upstream reference/unit/history | Weigh whole supplied urea separately and reconcile stock/charge/return by batch. Obtain real supplier composition and complete applicable sampling/assay procedures, uncertainty and compatible manufacturing/transport inventories. | kg | each receipt/charge/return and stock survey | same production interval plus inherited supply/WIP history | actual feed receipts and contributing virgin-synthesis provider | per 1 kg reference flow | weigh tickets; actual grade/method/version/sample basis; provider unit/route; stock reconciliation; no embedded-history duplication |
| cp_power | tablet_compaction | electricity; heat_air | meter_state_energy | meter/equipment; kWh and MJ; timestamps; voltage/provider; supply/loss boundary; batch/idle/rework driver; actual material/air temperatures and enthalpy basis; evidenced heat transfer; unresolved residual | Submeter actual drives/auxiliaries and reconcile whole-site totals with justified shared drivers. Preserve kWh×3.6 and actual native NCV/MJ reference. Determine heat only from independently evidenced metering or a documented validated state model, not a forced residual. | MJ | continuous or bounded meter intervals; actual heat observations | whole campaign including idle/rework and later cohort services | actual user electricity and real thermal transfer interfaces | per 1 kg reference flow | calibration; native conversion; actual provider losses; stage/time drivers; enthalpy/model evidence; raw energy residual disclosed |
| cp_pack | tablet_compaction | sack_input; sack_delivered; sack_returned; sack_waste | container_transfer | sack id/material/construction; tare/count; contents; receipts/delivery/return/customer return; empty/filled stock; whole contaminated waste; nested paper/urea/water/oil; actual receiver; manufacture/reuse service | Weigh matching empty/full sacks and each external transfer. Conserve paper tare independently; weigh each contaminated export whole and reconcile its nested constituents. Count no simultaneous companion powder exchange unless actual preboundary separation is proven. | kg | every packing/return/scrap transfer and stock boundary | full production and inherited sack genealogy | actual sack configuration; bulk handling remains separately evidenced | per 1 kg reference flow | paired tare/gross tickets; ownership/reuse; whole-waste versus substrate closure; receiver/provider scope; no cofunction credit |
| cp_asset | tablet_compaction | filter_sleeve; roll_segment; spent_sleeve; spent_roll | asset_cohort_history | component id/material; measured mass/count/dimensions; configuration; install/remove/refurbish; physical opening/closing fleet and transfers; original served cohorts; retained urea/water/lubricant; whole export and nested substrate; provider unit/history | Weigh actual parts and separately reconcile fleet substrate, whole contaminated exports and retained material. Allocate compatible supplier manufacture/service only from real history; preserve original served cohorts through later replacement and no assumed lifetime. | kg | each installation/service/removal and fleet survey | complete actual service history across the campaign | actual sleeves and alloy-steel tooling; other components separately admitted | per 1 kg reference flow | measured dimensions/mass; work orders; original cohorts; compatible provider unit; substrate and contamination mass closure |
| cp_maintenance | tablet_compaction | hydraulic_oil; grease; used_oil; spent_grease | fluid_grease_history | individual formulation/grade; supplied amount; water/contamination; equipment location; receipts/returns; opening/closing fluid/grease stocks; leaks/retention; real separate waste export and receiver; embedded service | Weigh each actual formulation and its separate external spent stream. Track material retained on whole parts/waste only as nested contamination; reconcile stock and real provider demand once. Actual other lubricants/cleaning materials require their own cards. | kg | each charge/service/drain and stock boundary | whole campaign with inherited circuit/stock history | actual hydraulic/bearing interfaces, with explicit non-use evidence | per 1 kg reference flow | supplier grade; weighings; service records; stock/contamination closure; actual receiver and no repeated export |
| cp_residue | tablet_compaction | urea_reject | segregated_residue | source/parent batch; whole wet mass; urea/water/traces; actual free stream; capture/recycle/sample/reject state; stock; receiver; destination status | Weigh each actual physically separate exported residue; sample its real composition and fate. Internal recycled or still-held dust remains in stock/paired transfers. Never repeat contamination already inside bag/filter/part exports. | kg | each export and stock/quality state change | whole campaign including startup/cleaning/rework | actual segregated reject and receiver interfaces | per 1 kg reference flow | weigh tickets; representative samples and complete applicable assay methods; receiver proof; constituent and stock closure |
| cp_air | tablet_compaction | dust_air | particulate_test | outlet/fugitive/bypass; actual urea/water/traces; concentration; gas flow and duration; filter/rinse/blank masses; temperature independence evidence; gas T/P/humidity; recovery/transformation tests; leakage/calibration; operating mode; detection limit; uncertainty | Apply a complete independently supported matrix-valid procedure. Method17 is conditional on its full temperature/gas/geometry scope and Methods1/2/3/5 dependencies; substantiate actual urea recovery/water basis and no induced change. Integrate compatible concentration×volume-flow over time; separately establish fugitive/bypass/condensable coverage. | kg | representative monitored runs and all abnormal operating states | production, idle storage, cleaning and loading in the campaign | all actual environmental outlets; capture is separate | per 1 kg reference flow | complete method/version/dependencies; urea recovery and phase tests; blanks/calibration/leaks; coverage; actual compartment; no PM/constituent double counting |
| cp_water | tablet_compaction | ambient_water_in; water_vapour | moisture_phase_ledger | interface and direction; measured moisture/time/state; raw/WIP/FG/parts residue water; actual air humidity/T/P and gas flow; absorbed/released water; uncertainty; original-cohort attribution | Use representative sealed samples and a complete actual matrix-valid moisture procedure with blanks/recovery and uncertainty; reconcile phase/stock evidence with independently established air-water exchange. Preserve residuals without creating absorbed or evaporated water to close them. | kg | each batch/state and representative environmental period | same campaign and original acceptance cohorts | actual raw/WIP/FG/dust/part and atmospheric interfaces | per 1 kg reference flow | sample preservation; method scope/version; calibration/recovery; humidity/state evidence; no hidden water or dry-mass restoration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_inventory | all inventory rows | Divide each non-overlapping attributable campaign exchange by positive locked Q to report per 1 kg reference flow; retain actual physical totals and original Q0 for later services. | individual measured exchange; Q; cp_product; applicable row protocol | individual original row unit per 1 kg reference flow |  |
| acceptance_bridge | accepted_tablets | Q is the sum of unique first-acceptance net masses; original Q0 equals disjoint net remaining deliveries plus all onsite accepted states, irreversible losses and other terminal dispositions on original basis, with later additions separately removed. No loop or restored loss increases Q. | unique events; original net mass/water; parent/state/return/loss history; cp_product | locked Q and original-cohort disposition residual |  |
| physical_closure | all inventory rows | Opening physical stocks + actual external inputs = closing stocks + actual physical external outputs; paired internal transfers cancel. Conserve whole wet material, actual C/H/N/O, impurities/metal and water phases independently of burden allocation; use actual G/C for any real transformation and require route review. Whole-waste components and PM constituents remain nested, not extra flows. | actual stocks/transfers; representative compositions; cp_material; cp_residue; cp_water; cp_pack; cp_asset | unallocated whole/component/element/phase residuals with uncertainty | ifdc-urea-tablets-2014 |
| burden_history | all inventory rows | Own inherited foreground/WIP vector + disjoint new work/upstream vectors = closing carried vectors + terminal attributed vectors. Preserve cohort cuts; either a provider aggregate or its verified non-overlapping decomposition, never both. | inherited vectors; new actual services; provider scope; closing inventories; original cohorts | nonduplicate attributable burden ledger |  |
| energy_conversion | electricity | Electrical MJ = measured kWh ×3.6; this only matches the selected native NCV/MJ reference. Reconcile actual material-state/work/stock energy and independently supported heat, without forcing an unknown residual into heat_air. | meter kWh; actual reference units; states/enthalpy; cp_power | matched electricity and separately evidenced energy balance | sahut-briquetting-2026 |
| pm_integral | dust_air | Integrate actual compatible concentration multiplied by gas volume-flow rate over time; use complete blank/recovery/leak/gas-state corrections from the applicable method. Sum only disjoint actual outlets and independently established fugitive loads. PM mass and its measured urea/N/water remain one exchange plus nested analytical evidence. | cp_air; concentration; volume-flow rate; time; actual matrix and scope tests | actual atmospheric particulate kg and coverage gaps | epa-pm17-2017; epa-pm5-2017 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify actual whole-product/component type, CAS, form, composition, native restriction and genuine provider property/unit. Actual additive-free round-tablet admission and classification-inference limits are mandatory; a category tag is insufficient. | full native records; supplier synthesis/grade and actual form/acceptance evidence |
| basis_cohort | all inventory rows | Require positive locked Q with unique events and complete original-basis postgate closure; raw/WIP/FG/returns/assets and inherited burden records cover the same declared scope. Unknown Q preserves raw totals without a complete normalized result. | cp_product; all physical and burden ledgers; parent/event audit |
| matrix_methods | all inventory rows | Retain complete actual sampling, sample preservation and method/version/units with calibration, blanks, recovery and uncertainty for the actual urea/moisture/residue matrix. Do not infer grade, a dry-mass conversion or PM applicability from the IFDC example, native formula or a finite check. Unknown essential procedure blocks complete applicable data. | actual complete lab procedure/results; representative samples; matrix and method-scope evidence |
| whole_waste_assets | sack_waste; spent_sleeve; spent_roll; filter_sleeve; roll_segment | Preserve whole actual exports and nested contamination independently from substrate fleet/tare and supplier service demand. No phantom separated powder stream, default life, double treatment or automatic recovery credit. | cp_pack; cp_asset; whole-versus-nested mass and receiver audit |
| air_and_energy | dust_air; electricity; heat_air; ambient_water_in; water_vapour | Prove actual source/matrix applicability and complete outlet coverage; actual provider and state/units must match. Temperature, droplets/saturation, induced change or gas-geometry conflicts require another reviewed suitable procedure; unmeasured water/energy/air pathways are not zero or forced closure. | cp_air; cp_power; cp_water; full methods/dependencies and actual meter/state tests |
| coverage | all inventory rows | Cover startup, normal production, idle, rework, sampling, cleaning, maintenance, packing/loading and actual abnormal losses throughout one continuous representative interval. Missing actual UUID/provider/amount remains disclosed; source-method defects and scientific/study qualification cannot be replaced by a successful mechanical check. | all nine protocols; complete actual PFD; operating and sampling coverage; explicit non-use and gap records |

## 9. Validation Rules

Stationary dry-powder sampling must retain a complete matrix-valid procedure, rather than assume all PM methods are interchangeable. EPA Method17 samples isokinetically with an in-stack filter at actual stack temperature and gravimetry after removal of uncombined water. Its stated scope requires temperature-independent PM over the actual source range, no liquid droplets or saturated gas, acceptable probe blockage, and complete Methods1/2/3/5 dependencies, blanks, leakage/calibration, recovery, weighing and gas-state calculations. It is methodological evidence, not a current regulatory-compliance claim. Demonstrate urea recovery, sorption/moisture basis and absence of sampling/analysis-induced transformation; heated Method5 or oven treatment is not automatically valid for urea. Inapplicable conditions or an unknown essential procedure prevent complete applicable results; obtain an independently reviewed suitable procedure, do not impose an empirical correction. Evaluate fugitive, bypass, cleaning and condensable coverage separately; unmeasured is not zero. Any included onsite test reagents/materials and wastes need their actual individual cards, or a complete actual laboratory-provider boundary.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | accepted_tablets | Require the complete specific product/form/route and native synthesis/provider admission of Section5, all ordered qualifiers and the explicitly inferred classification limits. Pure nutrient basis, loose prills or unproven briquette form cannot qualify by a fertilizer label alone. | ifdc-urea-tablets-2014; wco-fertilizers-2022; unsd-cpc3-2025; unsd-cpc21-continuity |
| validate_cohort | accepted_tablets | Check the complete original first-event and disjoint postgate bridge, with no restored loss or second loop fate, including all stocks/returns and later additions. Unknown/zero Q prevents normalized completeness. |  |
| validate_physical | all inventory rows | Independently reconcile whole wet mass, actual elements/species/phases, complete packaging/asset substrate stocks and whole contaminated receiver exports with nested components. Do not invent closure exchanges or duplicate constituent PM/waste loads. |  |
| validate_history | all inventory rows | Check own-WIP inheritance, original served asset/cohort services, complete external providers and non-overlapping embedded history before normalization/allocation. Missing actual operations or supplies are not zero. |  |
| validate_methods | dust_air; ambient_water_in; water_vapour | Apply the complete matrix/method/source limits above. A finite consistency pass is not actual sampling applicability, scientific approval or study qualification. Unqualified essential procedures, unmeasured pathways or unmatched providers remain explicit barriers to complete applicable data. | epa-pm17-2017; epa-pm5-2017 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual round-tablet supply background only with matching form/grade/provider and qualified inventory |
| allowed_use | Collect an actual site/interval/cohort additive-free round-tablet physical manufacturing inventory |
| excluded_use | All34659 coverage; allurea/briquette mapping; nutrient equivalents; field dose/performance; default recipes/yields/factors; unqualified matrices |
| required_metadata | All ordered qualifiers; complete Section5/9 conditions; actual providers/units; original Q/genealogy; raw physical and burden ledgers; method evidence and uncertainty |
| required_quality_disclosure | Actual identity/method/provider/quantity gaps, classification-inference limits and historical source scope; no mechanical-check promotion to scientific/study readiness |
| update_trigger | Actual form/ingredient/grade, thermal/wet step, equipment/provider, sampling matrix, gate/cohort, package/part or authoritative classification change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ifdc-urea-tablets-2014 | handbook | IFDC, Urea Deep Placement Trainer Manual (June2014), PDF5/printed2; cover/backcover. https://api.hub.ifdc.org/server/api/core/bitstreams/c68c2573-f0ba-4f8e-8921-48e03cf538b5/content | Actual additive-free physical compaction and round-tablet product, with feed/machine/product images. Source dimensions, weights, yield, doses, agronomic performance and environmental claims are not defaults. |
| sahut-briquetting-2026 | handbook | SAHUT-CONREUR, Briquetting Process; Fields of Application; complete lines, undated web documents, snapshot2026-11-08. https://sahutconreur.com/en/equipment-briquetting-process.html ; https://sahutconreur.com/en/equipment-briquetting-fields.html ; https://sahutconreur.com/en/ | Independent OEM context: urea briquetting exists; preparation, utilities, dust collection and finishing are actual configurable interfaces. Hot iron, binders, numerical operating/benefit claims and flake-granulation conditions do not establish this urea tablet route. |
| wco-fertilizers-2022 | official_guidance | WCO HS Nomenclature2022 Chapter31, complete pp1-3, note2(a)(viii), notes3-6 and31.05/3105.10. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0631_2022e.pdf?la=en | Actual tablet/similar-form OR small-package condition and the nitrogenous-fertilizer form exception; qualitative classification context, not a current individual legal ruling or a net-product/packaging mass conversion. |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Introduction §§26,50-56,72-74,93,105 and Explanatory Notes (30June2025) PDF164-167; current Family detail. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Introduction.pdf ; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; https://unstats.un.org/unsd/classifications/Family/Detail/2100 | Current HS-based application/continuity rules, unchanged34659 title and all relevant fertilizer neighbours; the new NK split and absent detailed current correspondence limit the explicitly inferred narrow interpretation. |
| unsd-cpc21-continuity | official_guidance | UNSD CPC Version2.1 complete publication, PDF81/printed67 andPDF297-299/printed283-285; official CPC2.1–HS2017 CSV header and fertilizer rows2059-2082. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPCv2.1_complete(PDF)_English.pdf ; https://unstats.un.org/unsd/classifications/Econ/tables/CPC/CPCv21_HS2017/CPC21-HS2017.csv | Historical explicit34659 definition throughHS2007 3105.10 and completeHS2017 link with partial flags0/0; edition-specific evidence only, not a current official CPC3 correspondence. |
| epa-pm17-2017 | official_guidance | US EPA Method17,3August2017 Internet version, complete pp1-7 including §§1-2,6-12 and Figures17-1/2. https://www.epa.gov/sites/default/files/2017-08/documents/method_17.pdf | Conditional unheated in-stack isokinetic filterable-PM gravimetry, scope/temperature/gas/geometry limits and Methods1/2/3/5 dependencies. Not blanket urea-matrix validation, fugitive/condensable coverage, size assignment or current legal compliance. |
| epa-pm5-2017 | official_guidance | US EPA Method5,2August2017 Internet version, complete dependent sampling/recovery/calibration/analysis/calculation sections. https://www.epa.gov/sites/default/files/2017-08/documents/method_5.pdf | Retained Method17 dependency and full gravimetric QA/recovery/gas-state framework; heated or oven variants are not automatically transferred to urea, and actual matrix-preserving qualified procedures remain required. |
