---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.dry-premixed-red-black-iron-oxide-brown-pigment
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dry-premixed red/black iron-oxide brown pigment

## 1. Scope and Applicability

This PCR covers a prepared brown colouring powder made by physical dry premixing of purchased synthetic Pigment Red 101 (Fe2O3, CAS1309-37-1) and Pigment Black 11 (Fe3O4, CAS1317-61-9), followed by enclosed homogenisation, dry dust collection, sampling, packing and first finished-lot acceptance. Both colour components must actually be present. This is a mixture preparation, not an individual iron oxide described as pigment grade. LANXESS documents premixed brown powder shades; the separately published Kremer48350 product sheet identifies a real red101/black11 powder mixture. These are existence and route evidence, not a prescribed formulation or qualification of any current supplier.

Exclude synthesis, precipitation, calcination, oxidation, thermal colour conversion, wet milling/washing, spray drying, granulation, solvent or aqueous dispersions, organic binders, carbon black, yellow pigment and other added colourants or fillers. Exclude natural earth colours, pure oxides, mixed-metal oxide pigments made by chemical reaction, retail artists’ colour packs, paints, polymer masterbatches and luminophores. This bounded purchased-powder route requires compatible upstream synthesis burdens; it cannot hide onsite synthesis or treatment. The declared starting condition is an interface, not a claim of burden-free production.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.dry-premixed-red-black-iron-oxide-brown-pigment |
| classification_refs | CPC 3.0 34340; narrower product and route boundary |
| covered_products | Dry physical mixture of synthetic red101 and black11 as one brown powder product |
| excluded_products | Single oxides; yellow-containing blends; reacted pigments; dispersions; paints; luminophores |
| representative_product | Supplier-declared brown red101/black11 preparation; no universal blend ratio |
| production_route | Purchased synthetic powders; weigh, dry premix/homogenise, dry capture, sample, pack and accept |
| market_state | Bulk industrial powder at first accepted finished-lot gate; net powder excludes packaging |


Classification interpretation distinguishes chapter28 individual chemically defined oxides from chapter32 preparations based on colouring matter: Census chapter32 notes1(a)/3 and 3206.49.2000 provide supporting context. CPC34340 is broader than this product. A brown label alone is insufficient: require two actual components and preparation records. The native reference’s 35120 classification is conflicting metadata retained for source clarification, not evidence that this industrial powder is an artists’ colour or that a34340 edge is accepted.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared brown inorganic colouring preparation |
| How much | 1 kg reference flow |
| How well | Actual grade and composition, moisture, homogeneous shade/tinting specification and acceptance method; no default numerical performance |
| How long or cycle | One first finished-lot acceptance; downstream service life outside this production unit |
| reference_flow_link | finished_brown |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | inorganic pigment `4b5eadd2-816c-420c-b382-5e0a975b53a6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | synthetic red101 and black11 mixture; actual composition and grade; dry uncoated powder; physical dry-premixing route; first-acceptance event gate and cohort; net powder mass and moisture; shade and homogeneity acceptance method; site and continuous interval; upstream provider basis; actual utilities and controls; packaging composition and tare; stock and rework genealogy |


The reference is the whole prepared powder. The broad native inorganic-pigment definition expressly includes chemical formulations and imposes no hard CAS, synthesis route, phase or geographic restriction; actual two-component powder admission and provider compatibility remain compulsory. Its general non-toxicity language is not a product safety or environmental benefit claim. A pure component, electricity service or background process cannot replace the reference. Required qualifiers must all be declared in the data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | 1 kg net whole powder at the fixed first finished-lot acceptance gate; calibrated gross weighing minus measured tare; moisture measured at that gate. Do not substitute dry oxide, iron content or later dispatch mass. |
| ingredient_mass | red_feed, black_feed | Mass | kg | Weigh each actual purchased synthetic pigment separately; retain wet/dry assay and impurities. Red101 and black11 quantities cannot be inferred from colour or a source example. |
| energy_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The selected native AC flow uses the Net calorific value property on an electrical MJ basis. Retain kWh meter readings and convert by 1 kWh = 3.6 MJ; this is an electrical unit conversion, not a fuel, combustion or heating-value premise. Align actual provider voltage, delivery boundary and losses. |
| packaging_basis | sack_input, sack_delivered, sack_returned | Mass | kg | Only measured empty sack tare, with count-to-mass based on actual representative sacks of the same configuration. Product and adherent pigment are separately weighed. |
| waste_whole_mass | sack_scrap, spent_filter | Mass | kg | Weigh actual whole contaminated transfer Qt once, including substrate, retained pigment and water, with the full actual receiver/provider quantity once. Components and known physical-cohort provenance are nested subledgers. Neither physical Qt nor the total actual receiver quantity is reduced by service shares. Separately label compatible modeled cohort treatment demand A_c and A_c / original Q_c; Qt / Q_c is an analytical ratio only. |
| dust_basis | dust_air | Mass | kg | Actual particulate mass emitted to outdoor air, unspecified particle size; do not invent size fractions, chemical speciation or a characterization factor. Captured dust is separate. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received synthetic red101/black11 powders at the premixing site; upstream pigment manufacture and inbound transport explicitly linked |
| starting_condition_role | Foreground entry interface; no chemical synthesis is conducted inside this scope |
| product_classification_scope | One prepared brown powder subset of34340; individual purchased oxide inputs do not expand the product scope |
| recursive_input_rule | Internal rework/captured powder is an internal transfer with inherited burdens once; purchased same-category preparation needs a compatible upstream dataset and is outside the two-feed route unless separately reviewed |
| upstream_dataset_requirement | Actual pigment synthesis, electricity, sacks, filter components and treatment providers must match composition, route, time/geography, property/unit and delivery interface; UUID identity supplies no burden vector |
| disclosure | Plant diagram, equipment, shifts/interval, dust control, cleaning, all stocks/transfers, absent operations, provider gaps and collection uncertainty |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | blend_finish | Include weighing, enclosed electric premixing/homogenisation, dry capture, dry cleaning, QA samples, packing and acceptance. A site using heat, chemical reaction, water washing or solvent processing needs another reviewed route; do not delete its operations to fit this scope. | lanxess-premix-2004; kremer-brown-preparation |
| boundary_burdens | all inventory rows | Retain real upstream synthesis and logistics burdens through compatible providers, including genuine external-utility generation. Never add provider aggregates and their already embedded decomposed history twice. |  |
| boundary_emissions | dust_air | Only actual post-control air release crosses the environmental interface. Capture/recycle is not emission; recipient treatment transfer is waste, not direct release. Sampling reagents and wastes of onsite tests need separate actual rows when included. | epa-pm5-2017 |
| boundary_atomic | blend_finish | Each listed row is one physical exchange; add each actual lubricant, cleaning agent, packaging component, waste, water or emitted species as a separate card. Establish non-applicability by records, never missing measurement. |  |
| boundary_gate | finished_brown | End at first accepted finished powder and associated included storage/delivery handling; downstream concrete formulation, installed performance, use and disposal are excluded. | lanxess-premix-2004 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blend_finish | Dry premixing and finished-powder acceptance | required | Actual two-component dry route | foreground production | 1 kg reference flow |


Receipt/stock → separate powder weighing → enclosed premix/homogenisation → sampling and packing → first acceptance → accepted stocks/dispatch. A separately metered extraction fan and dry filter return compatible caught powder to its identified batch or export it as measured waste. Dry vacuum cleaning belongs to this unit. No synthesis, burner or wet effluent is assumed; supplier synthesis stays in the upstream linked boundary. Ambient ventilation air is a carrier, not a purchased oxygen product or a reaction source. Record actual moisture uptake/evaporation separately if present.

### Process: Dry premixing and finishing (`blend_finish`)

#### Inputs

##### Product flows

###### Synthetic red pigment input (`red_feed`)

Actual purchased red101 powder; synthetic origin and grade must be evidenced, not inferred from a mined hematite record.

- Selected flow: Synthetic Pigment Red101 Fe2O3 powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable row numerator / positive Q; cp_product; cp_material. Retain complete actual physical transfers separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: kremer-brown-preparation

###### Synthetic black pigment input (`black_feed`)

Actual purchased magnetite black11 powder; no FeO, carbon black or whole brown mixture substitution.

- Selected flow: Synthetic Pigment Black11 Fe3O4 powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable row numerator / positive Q; cp_product; cp_material. Retain complete actual physical transfers separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: kremer-brown-preparation

###### Electric drive and extraction (`electricity`)

Meter mixing, extraction, dry vacuum, packing, QA and attributable idle/rework states; source voltage and provider are actual data requirements.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable row numerator / positive Q; cp_product; cp_power. Retain complete actual physical transfers separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_power
- Sources:

###### Empty kraft paper sack (`sack_input`)

Conditional actual unlined kraft sack; verify construction and mass. Each real liner, closure, pallet or wrap requires another individual row and transfer bridge.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable row numerator / positive Q; cp_product; cp_pack. Retain complete actual physical transfers separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

###### Polyester filter sleeve service (`filter_sleeve`)

Conditional actual polyester sleeve; record installed physical fleet and replacement history separately from attributable provider demand. No synthetic lifetime or constant replacement rate.

- Selected flow: Polyester dust-filter sleeve
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable row numerator / positive Q; cp_product; cp_asset. Retain complete actual physical transfers separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources:


#### Outputs

##### Product flows

###### Accepted brown preparation (`finished_brown`)

Exactly 1 kg whole net powder per reference flow at its unique first acceptance event; Q is a reference-event account and is not an extra external dispatch mass.

- Selected flow: inorganic pigment `4b5eadd2-816c-420c-b382-5e0a975b53a6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_product
- Sources: kremer-brown-preparation; lanxess-premix-2004

###### Sack delivered with product (`sack_delivered`)

Actual delivered empty-equivalent tare excluding contained powder; packaging transfer only, no second reference product or co-product credit.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable row numerator / positive Q; cp_product; cp_pack. Retain complete actual physical transfers separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

###### Reusable sack returned to supplier (`sack_returned`)

Only actual serviceable sack returned outside the site, with genealogy; an internal reuse is not a new purchase and scrapped sack is waste.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable row numerator / positive Q; cp_product; cp_pack. Retain complete actual physical transfers separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

##### Waste flows

###### Exported brown powder residue (`brown_dust_waste`)

Physically separate exported incompatible caught powder or off-spec brown batch; identify source and composition. Powder still attached to a sack or sleeve belongs within its whole contaminated waste card, not this independent stream. Internal recycled powder is not an exported waste.

- Selected flow: Dry red101/black11 brown pigment residue
- Flow property / unit: Mass / kg
- Amount rule: Modeled attributed whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_product; cp_waste. Raw physical Qt and full actual receiver quantity are recorded once; Qt / Q_c is analytical only, not an additional modeled exchange. Unknown attribution or provider-unit compatibility leaves modeled demand unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources:

###### Scrapped kraft sack (`sack_scrap`)

Actual whole contaminated discarded sack crossing the receiver boundary, including paper substrate, retained pigment and water. Record component subledgers nested within that one physical waste transfer; no burden-free recovery or avoided-production credit.

- Selected flow: Contaminated discarded kraft paper sack with retained brown pigment
- Flow property / unit: Mass / kg
- Amount rule: Modeled attributed whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_product; cp_pack. Raw physical Qt and full actual receiver quantity are recorded once; Qt / Q_c is analytical only, not an additional modeled exchange. Unknown attribution or provider-unit compatibility leaves modeled demand unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

###### Spent polyester sleeve (`spent_filter`)

Actual whole contaminated spent polyester sleeve export includes substrate, retained brown pigment and water. Weigh these nested components and reconcile their sum to the one whole receiver transfer; reconcile substrate fleet separately.

- Selected flow: Contaminated spent polyester dust-filter sleeve with retained brown pigment
- Flow property / unit: Mass / kg
- Amount rule: Modeled attributed whole-mixture treatment demand A_c in verified compatible provider kg-equivalent / positive original Q_c; cp_product; cp_asset. Raw physical Qt and full actual receiver quantity are recorded once; Qt / Q_c is analytical only, not an additional modeled exchange. Unknown attribution or provider-unit compatibility leaves modeled demand unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_asset
- Sources:

##### Elementary flows

###### Post-control particulate release (`dust_air`)

Outdoor air, unspecified subcompartment. Report measured total filterable powder dust; assess fugitive/bypass and condensable coverage separately; no assumed particulate factor or size distribution.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable row numerator / positive Q; cp_product; cp_air. Retain complete actual physical transfers separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-pm5-2017


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_single | blend_finish | Only brown preparation is the reference output. Separate actual physical waste, packaging transfers and reference events from environmental allocation. A sack or retained dust does not become a co-function merely because it leaves the plant. |  |
| allocation_cohorts | blend_finish | Use actual batch/submeter tracing before shared-service allocation. Document causal equipment-time, throughput or measured dust-load drivers and their coverage. Each burden vector is assigned once; retain unresolved shared burdens when no supported driver exists. |  |
| allocation_inheritance | blend_finish | Own opening WIP carries its actual inherited foreground vector once. Do not re-add charges/meters already included in that vector. Purchased provider aggregates retain embedded history; either use that aggregate or its verified disjoint decomposition, never both. Physical mass is conserved independently of burden shares. |  |
| allocation_returns | blend_finish | Rework, customer return, retest and internal dust recycling preserve original lot identity and original Q0. Later handling/service uses the original reference basis; it cannot create a new accepted-product denominator or new upstream manufacture. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

Select one continuous representative production interval covering receipts, batches, rejected material, cleaning, filter service, idle time, acceptance and stock changes; record actual timestamps and grade changes. No source recipe, yield, concentration, purity, particle size, mixing time, power intensity or tolerance is adopted. Colour-test binder, titanium dioxide and barytes in the Kremer laboratory test are not constituents of this powder: if actual onsite tests use them, add their individual inputs/wastes and avoid calling the prepared product a resin dispersion.

Maintain three linked accounts. The physical ledger contains all actual external receipts, supplier/customer returns, dispatches, waste/releases and opening/closing raw powder, WIP, accepted/rejected FG, caught dust, samples, packaging and filter assets; equal internal transfers cancel only at the aggregate site boundary. The reference-event ledger independently sums unique first-acceptance events Q = sum(m_e), with event ID, original cohort, net mass and gate moisture locked once. The attributed burden ledger retains opening inherited WIP, new inputs/services, closing carried inventories and terminal assignments without overlap. Q is not an extra external physical outflow.

For each original accepted cohort, bridge Q0 to disjoint net remaining deliveries, every actual onsite accepted state, irreversible losses and other terminal dispositions, all reconciled to the original acceptance basis. Returns and loops are transfers, not a second terminal fate. Use delivered-only plus closing-new-FG only if records prove every other postgate state/exit is absent. Distinguish new acceptance from dispatch of opening FG. Do not restore lost pigment/water into surviving product and also count that loss. Any later water uptake is separately physical incoming water and is removed from original-cohort equivalents; record actual survivors and water losses separately, without manufacturing a closure term. Q zero or unknown retains raw totals and an unresolved normalized result.

Reconcile total mass and Fe/O element accounts, red/black component masses and water phases separately. In this nonreacting route no Fe oxide conversion is assumed; any oxidation or thermal alteration invalidates that assumption and requires a different reviewed process. Moisture loss is not missing oxide. Retain dust, sample and retained-on-filter quantities and uncertainties; no yield, oxide stoichiometry, dust factor or allocation share may force physical closure. Analyse actual impurity components where material.

The packaging ledger weighs incoming empty sacks, delivered tare, serviceable external returns, customer-returned sacks, scrap and opening/closing empty/filled sacks separately. Original sack genealogy prevents reused sack mass from becoming another manufacturing demand. Pigment remaining on exported packaging is a separately identified powder terminal quantity; it is not part of empty tare. Include supplier manufacture and attributable packaging service once, without giving packaging a co-product credit.

Track each polyester sleeve by actual substrate mass/count, dimensions, installation, replacement, cleaning, retained pigment, physical opening/closing fleet and export receiver. Provider demand and service share require real history and compatible provider units. Preserve original served production cohorts for later replacements; one new sleeve can remain installed across intervals without all its mass becoming current powder loss. No guessed mass, lifetime, annualization or replacement frequency is permitted. Other actual media require their own cards.

For stationary powder-dust outlets, EPA Method5 provides an isokinetic filterable-PM gravimetric procedure with probe/filter recovery, blanks, leakage checks, calibrated gas measurement, moisture/temperature conventions, constant weighing and flow/traverse dependencies (Methods1/2/3). The retained 2017 Internet copy is methodological evidence, not a current legal-compliance determination. Implement the complete applicable procedure with a competent laboratory and documented matrix/recovery checks. It does not measure fugitive emissions or all condensable PM. Assess every outlet, bypass, dry-cleaning release and fugitive pathway with actual capture/measurement evidence; an unmeasured pathway remains incomplete. No wet scrubber or sulfur-speciation protocol is imported into this nonreacting route.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | blend_finish | finished_brown | acceptance/event ledger | event_id; cohort_id; lot; gross; tare; net m_e; moisture; grade; two-component composition; acceptance method/time; opening FG; later states/returns/losses | Calibrated whole-powder net weighing and approved batch tests at one fixed gate; lock original event once, reconcile every later state without duplicate acceptance. Aggregation procedure: per 1 kg reference flow; sum unique first-acceptance net masses Q | kg | each first acceptance and subsequent state transfer | same continuous interval and original cohorts | same grade, site and dry route | per 1 kg reference flow | Calibration; original batch/transfer records; traceable uncertainty, stock/genealogy and provider checks |
| cp_material | blend_finish | red_feed, black_feed | separate pigment ledger | row_id; supplier; synthetic origin; batch; PR101/PBk11; CAS; composition; charged mass; moisture; receipts; returns; raw/WIP stocks; inherited burden provenance | Calibrated separate weighing, composition/COA and receipt-charge-stock reconciliation; preserve full physical records and disjoint attributed demand. Aggregation procedure: per 1 kg reference flow; each attributed numerator / Q | kg | each receipt, charge, return and stock boundary | same continuous interval and original cohorts | premix site and actual upstream interfaces | per 1 kg reference flow | Calibration; original batch/transfer records; traceable uncertainty, stock/genealogy and provider checks |
| cp_power | blend_finish | electricity | submetered electricity | meter_id; equipment; kWh; timestamps; rework/idle states; source provider; voltage; delivery losses; shared drivers | Submeter mixer, fan, vacuum, packing and QA; reconcile total meters and justified shared drivers; retain original units. Aggregation procedure: per 1 kg reference flow; attributable MJ / Q | MJ | continuous or bounded meter interval | same continuous interval and original cohorts | actual included equipment and utility boundary | per 1 kg reference flow | Calibration; original batch/transfer records; traceable uncertainty, stock/genealogy and provider checks |
| cp_pack | blend_finish | sack_input, sack_delivered, sack_returned, sack_scrap | packaging transfer ledger | row_id; sack_id; construction; tare; count; incoming; delivered; serviceable return; customer return; whole contaminated scrap mass; paper substrate; retained pigment; water; opening/closing empty and filled stocks; receiver; provider; transfer_id; whole physical Qt; full actual receiver/provider demand and unit; observed component/cohort provenance; actual served-cohort history; evidenced non-overlapping treatment shares; modeled A_c or burden vector; original Q_c; unresolved scope | Weigh actual empty/product sacks and every transfer by row. For sack_scrap weigh the whole contaminated exported sack; substrate/tare, pigment and water sum to that whole transfer as nested subledgers. Reconcile count/mass, genealogy, stocks and receiver treatment demand independently of attributable manufacture. Record one actual whole transfer and full actual total receiver/provider quantity by transfer_id. Keep physical component/cohort provenance only where observed. Separately derive non-overlapping modeled treatment demand or burden vectors for each actually served cohort from supported drivers and compatible provider units; normalize each assigned numerator with that cohort’s original Q_c, never recharge Qt in full to each cohort. Shared-history rules apply to sack waste only when its actual recipient/service history is shared. Unknown shares stay unresolved; no physical output is reduced. Aggregation procedure: per 1 kg reference flow; modeled attributed A_c / original Q_c only; raw Qt and full actual receiver quantity are recorded once outside this normalization. | kg | each packing, return, disposal and stock boundary | same continuous interval and original cohorts | actual packaging configuration and interfaces | per 1 kg reference flow | Calibration; original batch/transfer records; traceable uncertainty, stock/genealogy and provider checks |
| cp_asset | blend_finish | filter_sleeve, spent_filter | physical fleet/service ledger | row_id; component_id; polyester substrate mass/count; dimensions; install/removal dates; opening/closing fleet; cleaning; whole contaminated spent-sleeve export; nested retained pigment and water; receiver; actual service history; original served cohorts; provider unit; transfer_id; whole physical Qt; full actual receiver/provider demand and unit; observed component/cohort provenance; actual served-cohort history; evidenced non-overlapping treatment shares; modeled A_c or burden vector; original Q_c; unresolved scope | Weigh new substrate and actual whole contaminated removed sleeve exports. Reconcile dry substrate fleet separately; nest substrate, retained pigment and water within each one receiver transfer, without another attached-powder exchange or duplicate treatment demand. Attribute supplier service from real history and original served cohorts independently of physical waste mass. Record one actual whole transfer and full actual total receiver/provider quantity by transfer_id. Keep physical component/cohort provenance only where observed. Separately derive non-overlapping modeled treatment demand or burden vectors for each actually served cohort from supported drivers and compatible provider units; normalize each assigned numerator with that cohort’s original Q_c, never recharge Qt in full to each cohort. Shared-history rules apply to sack waste only when its actual recipient/service history is shared. Unknown shares stay unresolved; no physical output is reduced. Aggregation procedure: per 1 kg reference flow; modeled attributed A_c / original Q_c only; raw Qt and full actual receiver quantity are recorded once outside this normalization. | kg | each installation, service, removal and interval boundary | complete actual service history spanning the interval | actual filter and its served production cohorts | per 1 kg reference flow | Calibration; original batch/transfer records; traceable uncertainty, stock/genealogy and provider checks |
| cp_waste | blend_finish | brown_dust_waste | powder-residue transfer | lot; source; red/black composition; wet/dry mass; retained water; receiver; weigh ticket; disposal; internal recycle; stocks; transfer_id; whole physical Qt; full actual receiver/provider demand and unit; observed component/cohort provenance; actual served-cohort history; evidenced non-overlapping treatment shares; modeled A_c or burden vector; original Q_c; unresolved scope | Weigh each exported powder mixture and establish destination and composition; keep internal caught/recycled powder and stock changes distinct. Record one actual whole transfer and full actual total receiver/provider quantity by transfer_id. Keep physical component/cohort provenance only where observed. Separately derive non-overlapping modeled treatment demand or burden vectors for each actually served cohort from supported drivers and compatible provider units; normalize each assigned numerator with that cohort’s original Q_c, never recharge Qt in full to each cohort. Shared-history rules apply to sack waste only when its actual recipient/service history is shared. Unknown shares stay unresolved; no physical output is reduced. Aggregation procedure: per 1 kg reference flow; modeled attributed A_c / original Q_c only; raw Qt and full actual receiver quantity are recorded once outside this normalization. | kg | each transfer and stock boundary | same continuous interval and original cohorts | actual residue and receiver interfaces | per 1 kg reference flow | Calibration; original batch/transfer records; traceable uncertainty, stock/genealogy and provider checks |
| cp_air | blend_finish | dust_air | post-control particulate test | outlet; composition; sample/filter/rinse/blank masses; gas flow; duration; dry/wet basis; pressure; temperature; traverse; isokinetic ratio; leaks; calibration; operating state; bypass; fugitive capture; detection limit; completeness | Apply complete applicable Method5 with dependency records and QA; integrate actual compatible concentration and flow over operating states; separately substantiate fugitive and condensable coverage, never derive emissions from capture mass alone. Aggregation procedure: per 1 kg reference flow; integrated non-overlapping actual PM release / Q | kg | representative tests and operating-state records | same continuous interval including actual bypass and cleaning | all actual stationary outlets and fugitive pathways | per 1 kg reference flow | Calibration; original batch/transfer records; traceable uncertainty, stock/genealogy and provider checks |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance_events | finished_brown | Q = sum of measured net m_e over unique first-acceptance event IDs in the new cohort; original IDs, moisture and mass locked once. Opening FG dispatch, loops, returns, retests and rework add zero new events. | event_id; m_e; cp_product | Q in kg |  |
| normalize_cohort | all inventory rows | Row modeled normalized exchange = its non-overlapping attributable numerator / the linked positive original cohort Q_c. For waste treatment the numerator is A_c in verified compatible provider units or a separately assigned burden vector, not the full shared raw Qt for every cohort. Physical Qt and full actual receiver/provider quantity remain recorded once; later services keep original Q_c. | row attributed numerator; original Q_c; cp_product | original row unit per 1 kg reference flow |  |
| cohort_bridge | cp_product | Q0 = disjoint net remaining deliveries + all onsite accepted states + irreversible losses + other terminal dispositions on original acceptance basis, after separately removing later external additions. Every actual postgate fate is included exactly once. | Q0; genealogy; physical states; additions and losses | original-cohort bridge and residual |  |
| physical_balances | blend_finish | For each physical material/element: opening stock + external inputs = closing stock + actual external outputs, with all internal links equal and cancelling at aggregate boundary. Water phase changes are separate; no assumed chemical reaction or invented closure. | actual raw/WIP/FG/dust/packaging/filter ledgers; composition | total, Fe/O, component and water residuals |  |
| burden_bridge | all inventory rows | Opening own-WIP vector + non-overlapping new foreground and upstream vectors = closing carried vectors + terminal attributed vectors; identify all period/cohort cuts. Never add provider aggregates to their embedded decomposition. | inherited vectors; new drivers; provider basis; closing vectors | auditable burden assignment separate from physical quantities |  |
| electricity_conversion | electricity | Energy in MJ = measured kWh × 3.6; a unit conversion only, not a default intensity or upstream production assumption. | kWh; cp_power | electricity MJ |  |
| pm_load | dust_air | Stationary PM load = integral of measured concentration × actual gas volume flow × time with compatible dry/wet, pressure and temperature bases, using blank-corrected gravimetric observations and validated recovery. Add only independent actually measured fugitive loads, without double counting captured dust or overlapping totals. | cp_air; compatible concentration and gas flow; duration | actual particulate release kg | epa-pm5-2017 |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify whole product versus component, type, composition, CAS, phase, route, geography, actual provider, property and unit. Broad native family identity is not a compatible process background. | Full native records, grade/COA and provider documentation |
| dq_acceptance | finished_brown | Require actual approved grade/homogeneity testing and two-component admission; no colour-to-recipe inference or borrowed numerical grade. | Acceptance records and declared actual test methods |
| dq_ledgers | blend_finish | Reconcile unique events, every physical fate, total/component/element/water residuals and disjoint burden vectors; allocation cannot repair mass imbalance. | Stock snapshots, genealogy and independent balance calculations |
| dq_air | dust_air | Identify actual outdoor compartment, all outlets/pathways, recovery, blanks, detection limits, condensable/fugitive scope and uncertainty. Unmeasured is not zero; unspecified size does not create LCIA coverage. | Complete test plan, calibration and coverage assessment |
| dq_pack_assets | cp_pack, cp_asset | Preserve actual whole-transfer and full total receiver quantities once, separately from nested physical provenance and non-overlapping modeled service/burden assignment by served cohort. Verify actual provider units/composition and each original Q_c. No guessed shares, lifetime, provenance, recovery credit or full-transfer recharge to multiple cohorts. | Tare, component history and compatible provider unit records |
| dq_scope | blend_finish | Prove the dry nonreacting route; retain upstream synthesis and every actual utility/material exchange, with gaps exposed. Publication requires independent methodology and translation review, plus study qualification. | Plant diagram, continuous records, upstream boundaries and gap log |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_product | finished_brown | Require one finished-brown reference output with whole mixture identity, 1 kg net acceptance basis and all ordered qualifiers; no pure oxide or adjacent chemical qualifies by use label alone. | kremer-brown-preparation; census-preparations-2022 |
| validate_route | blend_finish | Check actual purchased synthetic red101 and black11 plus dry physical premixing; unknown core composition, synthesis, wet or thermal operations prevent applicability. | lanxess-premix-2004 |
| validate_events | cp_product | Check event deduplication and general original-cohort bridge, including returns, losses, all stocks and terminal fates; opening-FG dispatch is not new output. |  |
| validate_basis | all inventory rows | Require common bilingual reference/collection basis and linked positive Q; retain raw units and unresolved normalization when Q is unknown or zero. Packaging, dry mass and provider service are not substitute denominators. |  |
| validate_physical_burden | blend_finish | Independently check physical mass/components/Fe/O/water/packaging/filter ledgers and burden inheritance. Do not double-add provider embedded history or original reworked material. |  |
| validate_completeness | dataset | Finite measurement/schema success does not establish scientific approval or a qualified study. Close actual identity/provider gaps and unmeasured air paths before claiming complete LCI; report missing scopes and characterization coverage explicitly. | epa-pm5-2017 |



### Complete scope, admission and operational context

This PCR covers a prepared brown colouring powder made by physical dry premixing of purchased synthetic Pigment Red 101 (Fe2O3, CAS1309-37-1) and Pigment Black 11 (Fe3O4, CAS1317-61-9), followed by enclosed homogenisation, dry dust collection, sampling, packing and first finished-lot acceptance. Both colour components must actually be present. This is a mixture preparation, not an individual iron oxide described as pigment grade. LANXESS documents premixed brown powder shades; the separately published Kremer48350 product sheet identifies a real red101/black11 powder mixture. These are existence and route evidence, not a prescribed formulation or qualification of any current supplier.

Exclude synthesis, precipitation, calcination, oxidation, thermal colour conversion, wet milling/washing, spray drying, granulation, solvent or aqueous dispersions, organic binders, carbon black, yellow pigment and other added colourants or fillers. Exclude natural earth colours, pure oxides, mixed-metal oxide pigments made by chemical reaction, retail artists’ colour packs, paints, polymer masterbatches and luminophores. This bounded purchased-powder route requires compatible upstream synthesis burdens; it cannot hide onsite synthesis or treatment. The declared starting condition is an interface, not a claim of burden-free production.

Classification interpretation distinguishes chapter28 individual chemically defined oxides from chapter32 preparations based on colouring matter: Census chapter32 notes1(a)/3 and 3206.49.2000 provide supporting context. CPC34340 is broader than this product. A brown label alone is insufficient: require two actual components and preparation records. The native reference’s 35120 classification is conflicting metadata retained for source clarification, not evidence that this industrial powder is an artists’ colour or that a34340 edge is accepted.

The reference is the whole prepared powder. The broad native inorganic-pigment definition expressly includes chemical formulations and imposes no hard CAS, synthesis route, phase or geographic restriction; actual two-component powder admission and provider compatibility remain compulsory. Its general non-toxicity language is not a product safety or environmental benefit claim. A pure component, electricity service or background process cannot replace the reference. Required qualifiers must all be declared in the data package.

Receipt/stock → separate powder weighing → enclosed premix/homogenisation → sampling and packing → first acceptance → accepted stocks/dispatch. A separately metered extraction fan and dry filter return compatible caught powder to its identified batch or export it as measured waste. Dry vacuum cleaning belongs to this unit. No synthesis, burner or wet effluent is assumed; supplier synthesis stays in the upstream linked boundary. Ambient ventilation air is a carrier, not a purchased oxygen product or a reaction source. Record actual moisture uptake/evaporation separately if present.

Select one continuous representative production interval covering receipts, batches, rejected material, cleaning, filter service, idle time, acceptance and stock changes; record actual timestamps and grade changes. No source recipe, yield, concentration, purity, particle size, mixing time, power intensity or tolerance is adopted. Colour-test binder, titanium dioxide and barytes in the Kremer laboratory test are not constituents of this powder: if actual onsite tests use them, add their individual inputs/wastes and avoid calling the prepared product a resin dispersion.

Maintain three linked accounts. The physical ledger contains all actual external receipts, supplier/customer returns, dispatches, waste/releases and opening/closing raw powder, WIP, accepted/rejected FG, caught dust, samples, packaging and filter assets; equal internal transfers cancel only at the aggregate site boundary. The reference-event ledger independently sums unique first-acceptance events Q = sum(m_e), with event ID, original cohort, net mass and gate moisture locked once. The attributed burden ledger retains opening inherited WIP, new inputs/services, closing carried inventories and terminal assignments without overlap. Q is not an extra external physical outflow.

For each original accepted cohort, bridge Q0 to disjoint net remaining deliveries, every actual onsite accepted state, irreversible losses and other terminal dispositions, all reconciled to the original acceptance basis. Returns and loops are transfers, not a second terminal fate. Use delivered-only plus closing-new-FG only if records prove every other postgate state/exit is absent. Distinguish new acceptance from dispatch of opening FG. Do not restore lost pigment/water into surviving product and also count that loss. Any later water uptake is separately physical incoming water and is removed from original-cohort equivalents; record actual survivors and water losses separately, without manufacturing a closure term. Q zero or unknown retains raw totals and an unresolved normalized result.

Reconcile total mass and Fe/O element accounts, red/black component masses and water phases separately. In this nonreacting route no Fe oxide conversion is assumed; any oxidation or thermal alteration invalidates that assumption and requires a different reviewed process. Moisture loss is not missing oxide. Retain dust, sample and retained-on-filter quantities and uncertainties; no yield, oxide stoichiometry, dust factor or allocation share may force physical closure. Analyse actual impurity components where material.

The packaging ledger weighs incoming empty sacks, delivered tare, serviceable external returns, customer-returned sacks, scrap and opening/closing empty/filled sacks separately. Original sack genealogy prevents reused sack mass from becoming another manufacturing demand. Pigment remaining on exported packaging is a separately identified powder terminal quantity; it is not part of empty tare. Include supplier manufacture and attributable packaging service once, without giving packaging a co-product credit.

Track each polyester sleeve by actual substrate mass/count, dimensions, installation, replacement, cleaning, retained pigment, physical opening/closing fleet and export receiver. Provider demand and service share require real history and compatible provider units. Preserve original served production cohorts for later replacements; one new sleeve can remain installed across intervals without all its mass becoming current powder loss. No guessed mass, lifetime, annualization or replacement frequency is permitted. Other actual media require their own cards.

For stationary powder-dust outlets, EPA Method5 provides an isokinetic filterable-PM gravimetric procedure with probe/filter recovery, blanks, leakage checks, calibrated gas measurement, moisture/temperature conventions, constant weighing and flow/traverse dependencies (Methods1/2/3). The retained 2017 Internet copy is methodological evidence, not a current legal-compliance determination. Implement the complete applicable procedure with a competent laboratory and documented matrix/recovery checks. It does not measure fugitive emissions or all condensable PM. Assess every outlet, bypass, dry-cleaning release and fugitive pathway with actual capture/measurement evidence; an unmeasured pathway remains incomplete. No wet scrubber or sulfur-speciation protocol is imported into this nonreacting route.

### Whole contaminated waste and electrical-property clarification

For sack_scrap and spent_filter, a separately identified retained-powder terminal quantity means a nested component of the actual whole contaminated waste transfer, not another physical exchange. Weigh whole exported waste = actual dry substrate + retained pigment + water + any other measured constituent. Substrate-only fleet/service accounting never replaces whole-waste mass. Record receiver treatment demand on the whole accepted mixture and compatible provider basis. No attached-powder exchange or extra treatment demand is added unless powder is physically separated before crossing the boundary; then record the distinct separated streams and reconcile their sum without duplicate transfer. The brown_dust_waste card represents only a physically independent caught/off-spec powder stream. Actual packaging and filter waste quantities remain complete regardless of service allocation, burden shares, later replacement or original-cohort attribution. The selected AC flow uses the native Net calorific value property (reference MJ); kWh × 3.6 expresses electrical energy only and does not add an onsite fuel, burner, combustion heat or assumed upstream generation route.



### Shared waste: physical transfer, provenance and modeled cohort treatment

For a shared spent filter or an actually shared sack-waste history, distinguish three linked records within the foregoing accounts. First, the physical transfer ledger records one whole actual contaminated export Qt, its component composition, transfer_id, receiver and the full actual provider treatment quantity and unit once. Neither that physical Qt nor the full actual receiver/provider quantity is divided into fictitious smaller physical exports by service allocation. Second, nested physical provenance records measured substrate, pigment, water and actual cohort origins only where known; an environmental service share does not prove a physical component share. Unknown physical provenance remains explicit. Third, a separate modeled treatment-demand or environmental-burden ledger assigns supported, non-overlapping amounts to the actually served original cohorts, using actual service/recipient history and compatible provider units. Only the assigned amount A_c, or its distinct assigned burden vector, is divided by that cohort’s original Q_c. The whole actual Qt/Q_c ratio may be retained for analysis but is not another modeled exchange and must not recharge the full transfer to every cohort.

If the provider accepts the actual whole mixture on a compatible mass basis and evidence supports treatment shares s_c, modeled demand may be A_c = s_c × the once-recorded total provider quantity, expressed in explicitly labelled provider kg-equivalent rather than as a claim of a physically split export. For complete covered scope, supported non-overlapping shares and assigned demands or vectors reconcile to the one actual total; retain any unassigned residual separately instead of inventing a share. If a verified provider uses another unit, preserve its conversion evidence and unit or keep a separately assigned burden vector; do not relabel it as kg. Unknown shares, served history, total provider basis or original Q_c leave the relevant modeled result unresolved while retaining all raw Qt and receiver records. Never infer a default share from cohort mass, elapsed time, replacement count, lifetime or this methodological example. A single evidenced cohort may receive its own documented demand once; this is not a default assignment. Sack waste uses shared-cohort attribution only when its actual recipient/service history establishes sharing. Physical stock, component and elemental ledgers remain independent of every modeled share.


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground dry-premixing process after independent qualification |
| downstream_use | secondary_dataset or background_dataset only with compatible grade/provider/basis |
| allowed_use | Upstream supply of the declared brown red101/black11 preparation |
| excluded_use | All34340 coverage; individual oxide synthesis; luminophores; default recipe, emission factor or product performance |
| required_metadata | Whole mixture composition; site/route/interval; event/cohort gate; net mass/moisture; real test methods; control; provider units; packaging/assets; stocks; inheritance |
| required_quality_disclosure | Identity/background and measurement gaps; complete physical and attributed accounts; airborne/fugitive/condensable and LCIA coverage; review/scientific/study states |
| update_trigger | New component, route, thermal/wet step, powder state, grade, acceptance gate, provider, packaging, control or material native-record change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| kremer-brown-preparation | literature | Kremer Pigmente, 48350 Iron Oxide Brown660 dark, product information, undated; snapshot2026-11-08, PDF pp1–3. https://shop.kremerpigments.com/elements/resources/products/files/48350e.pdf | Actual synthetic red101/black11 powder-mixture identity, CAS and storage context; grade-specific limits and internal test numbers are not generic methods, recipes or LCI quantities. |
| lanxess-premix-2004 | handbook | LANXESS, Your Guide to Using Bayferrox Pigments to Color Concrete Products, November2004,04961 10/04 BFRX; PDF p8/printed7 and p12 limitations. https://www.kyminpalokarki.com/files/tuotetiedot/guide_to_pigmenting_concrete_02.pdf | Manufacturer evidence of prepared brown dry-premixing and mass metering; concrete dosing, blending percentages, tolerances and performance claims not adopted. Historical guide, not a current factory study. |
| census-preparations-2022 | official_guidance | US Census, ScheduleB2022 Chapter32, notes1(a)/3 and3206.49.2000. https://www.census.gov/foreign-trade/schedules/b/2022/c32.html | Prepared-colouring boundary versus individual chemically defined oxide; supporting classification context, not legal advice or accepted CPC mapping. |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025, PDF pp160–163. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 34340 and34220 labels and neighbouring scope; narrower semantic relation remains subject to acceptance. |
| epa-pm5-2017 | official_guidance | US EPA Method5,2August2017, §§1–2,8–12 and referenced method dependencies. https://www.epa.gov/sites/default/files/2017-08/documents/method_5.pdf | Stationary filterable-PM gravimetric sampling, recovery and QA basis; full original retained; no fugitive/condensable factor, size assignment or current regulatory-compliance claim. |
