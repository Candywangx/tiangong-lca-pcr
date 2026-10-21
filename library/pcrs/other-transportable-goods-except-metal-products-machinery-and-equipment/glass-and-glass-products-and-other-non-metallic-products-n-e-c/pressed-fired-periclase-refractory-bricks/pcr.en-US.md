---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.pressed-fired-periclase-refractory-bricks
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Pressed and fired periclase refractory bricks

## 1. Scope and Applicability

Applies to dense bare uncoated periclase refractory constructional bricks from natural-magnesite-derived dead-burned aggregate and aqueous magnesium sulfate temporary binder through raw fraction preparation pressing deaeration drying ceramic firing cooling necessary dimensional finishing cleaning tests and first final quality release. The product is a fired basic lining brick with periclase as the major phase and actual minor phases such as calcium silicates; bulk oxide assay is not proof of pure MgO. The representative primary route is UNIDO M-A with natural DBM-A. BREF supplies industrial operation variants and required finishing/protection context. This is a transparent category-level synthesis without a claim that a current factory or one SKU performs every conditional operation. No recipe dose energy yield strength firing schedule or lifetime is prescribed from one trial.

Excludes raw MgO/magnesite powder unfired shapes monolithic castables carbon/resin-bonded heat-treated shapes pitch-impregnated ware siliceous-earth/diatomite insulation products oxide crucibles and ordinary non-refractory clay bricks. Deliberate magnesia-chromite doloma or magnesia-spinel formulations metal-cased/reinforced bricks and other fundamentally different binding routes require separate applicability review; this narrow PCR does not claim the entire classification leaf. Receiving already fired bricks for wrapping alone is outside manufacturing. First-release manufacture and original-cohort post-release services remain separate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.pressed-fired-periclase-refractory-bricks |
| classification_refs | CPC 3.0:37320; narrower; accepted narrower association is governed by classifications/mappings/cpc-3.0-to-pcr.yaml and its decision record; scientific review remains pending |
| covered_products | Dense bare uncoated natural-magnesite-derived periclase constructional refractory bricks with aqueous magnesium sulfate temporary binder and ceramic firing |
| excluded_products | Raw powder; unfired/monolithic goods; carbon-bonded or pitch-impregnated shapes; siliceous-earth insulation; crucibles; non-refractory bricks; deliberate chromite/doloma/spinel routes; metal-cased/reinforced ware |
| representative_product | UNIDO chapterVI M-A natural DBM-A periclase/calcium-silicate brick; a 1986 primary trial with actual terminal/phase tests rather than a current SKU default |
| production_route | supplied dense dead-burned periclase aggregate; coarse/fine preparation; actual sulfate aqueous binder; hydraulic pressing/deaeration; drying; ceramic firing/cooling; necessary finishing and first final acceptance |
| market_state | Fired dense basic refractory constructional brick at plant; bare dry net mass; actual dimensional mechanical/thermal and phase specification; packaging and service life outside reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A dense fired periclase brick for the declared high-temperature industrial lining duty |
| How much | 1 kg dry bare brick at first final quality release |
| How well | Actual grade chemistry periclase/minor phases dimensions defects porosity and mechanical/thermal acceptance suitable for the declared lining duty; trial tests are not guaranteed specifications |
| How long or cycle | Factory first-release gate; no universal service lifetime; downstream use and end-of-life are outside manufacturing Q |
| reference_flow_link | finished_brick |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual site period region provider and starting supply state; natural magnesite derived dead-burned periclase aggregate grade assay phase and minor calcium-silicate chemistry; whole magnesium sulfate aqueous formulation or actual in-house salt hydrate and solvent route; coarse/fine grading and pressing deaeration drying ceramic firing cooling and finishing configuration; dense bare uncoated non-carbon-bonded non-chromite constructional brick geometry and measured net dry mass; actual final defect dimensional phase porosity mechanical and thermal acceptance tests; unique first-release identifiers Q including already-released closing FG and unreleased WIP distinction; opening/closing raw WIP and unassigned-store per-exchange inherited burden vectors; failed zero-output trial start/stop idle cleanup rework and abatement operation records; original service cohort Qc observed horizon H and actual FG gross dispatch return and state-change bridge; each packaging empty attached-WIP attached-FG reusable pool gross receipts purchases returns departures and wastes; equipment mould lining setter and installed-fluid physical stocks versus current service burden; actual species CAS phase origin medium native-property restrictions and independent mass/element evidence; carrier mass energy supply/return enthalpy supplier water convention and actual conversion evidence; unresolved identities quantities providers reaction fates uncertainty and coverage limits |

The native identity is a Product flow for manufactured high-temperature-fired refractory bricks at plant; it covers high-alumina or silica or magnesia families and fixes no SKU or supplier. This card narrows it exclusively to a bare dense uncoated natural-magnesite-derived periclase brick made with aqueous magnesium sulfate binder by pressing drying ceramic firing cooling and required finishing. It does not identify loose magnesia powder unfired shapes carbon-bonded ware siliceous-earth insulation bricks or crucibles. Actual chemistry phase grade geometry kiln schedule and final acceptance must match; no native family name establishes a recipe or service life. Reference property is Mass/kg.

All qualifier elements and every card description below are mandatory consumed applicability context. Neither a source title a matching taxonomy nor an engineering check establishes a concrete supplier or a scientific approval.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual cp_release dry bare net mass; Q counts unique first final release including already-released closing FG. No assumed piece mass geometric density or shipment denominator. |
| native_extensive | all inventory rows | each row native extensive property | each row declared unit | Mass/kg does not constrain energy MJ volume m3 or freight t*km. Preserve actual carrier mass and heat as linked dimensions; independent state-specific density is required for volume-to-mass. |
| one_final_result | all inventory rows | row property | row unit per reference flow | Protocols collect raw undivided records; calc_unit_result alone produces the final unit result once. Services use original Qc and observed H rather than current Q or net delivery. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | actual supplied natural-magnesite-derived dense dead-burned aggregate and whole aqueous magnesium sulfate binder or separately bought actual in-house binder ingredients |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC3.0:37320 narrower fired periclase constructional refractory brick scope |
| recursive_input_rule | internally recovered material cancels as transfer with its vector; externally bought same-category finished bodies cannot replace this raw-to-fired manufacturing route |
| upstream_dataset_requirement | one compatible upstream burden per actual whole supplied state including aggregate calcination/dead-burning; no ingredient or delivered freight duplication; unknown provider is declared |
| disclosure | actual recipe state phase grade operations acceptance first-release Q raw/WIP vectors service Qc/H all FG movements packaging/asset pools conversion and source/native limits |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | Begin with actual natural-magnesite-derived dead-burned periclase aggregate and actual whole aqueous magnesium sulfate binder supplies. Include receiving transport storage crushing screening fraction control fine milling mixing pressing deaeration drying ceramic firing cooling required grinding/cleaning inspection destructive tests reject handling emissions control and first final release. Upstream aggregate calcination and dead-burning must be represented in the compatible supplier dataset; in-house versions require their real inputs fuels reaction gases losses and outputs rather than a duplicate bought aggregate. Bought finished-brick wrapping is a different route. | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| b_primary | route applicability | The narrow route is a transparent technical synthesis: UNIDO chapterVI M-A demonstrates natural DBM-A periclase with minor calcium silicates aqueous sulfate binder hydraulic pressing drying industrial tunnel firing and actual fired brick tests; BREF sections2.3.3.1–2.3.3.8 support industrial operation variants and necessary finishing. Trial amounts temperatures porosity and strengths are case observations not universal defaults. M-BF/M-BS modified feed and chapterVII chromium-bearing bricks are distinct cases. BREF Fig2.16 includes chromite and is not an instruction to add chromium; its carbon-bonded curing/pitch impregnation route is excluded. No single contemporary SKU/factory is claimed to implement all conditional rows. | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| b_stocks | manufacturing numerator | Keep each exchange in its native extensive unit with its own opening/closing inherited burden vector for raw stores unreleased WIP and unassigned non-WIP stores. Retain all failed zero-output trial start/stop idle cleanup rework kiln-furniture maintenance and abatement burdens. Already first-released closing FG is inside Q: neither subtract its manufacturing burden as Bclose nor add its mass to Q again. Unreleased fired ware remains WIP until actual final acceptance. Use actual cohort/operation attribution rather than a blanket production-volume percentage. | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| b_service | post-release service | Preserve first-release manufacturing history by original cohort c. Storage packing handling dispatch returns retest and actual finishing rework after that gate are observed incremental services with original Qc and horizon H; current-period output and net deliveries are not their denominators. Dispatch retest and returned reinspection do not create production. Retain actual FG opening/closing states gross G external returns R moisture/fragment changes and real incremental rework; cancel the internal released-brick handoff on consolidation. This PCR does not use a net-delivery Q; a switch requires a reviewed full G/R/original-delivery reversal and inherited FG burden bridge. Actual post-release work requires manufacturer/procedure or governing-specification permission, defined post-work tests and recorded acceptance/disposition while remaining the same bare uncoated fired periclase brick and declared grade/dimensions/duty. A broken or failed brick is not restored by accounting; hold/reject remains unless eligibility is independently demonstrated. Retain actual new/removed material water fragments and phase transfers; repair-held custody is an FG substate OR disjoint repair-WIP once, never new Q. | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| b_atomic | all exchanges | Every actually present purchased formulation ingredient fuel energy carrier water packaging article replacement part asset receipt waste and real emitted species needs one physically/chemically specific row. Add each actual unlisted exchange before modelling. Not applicable requires evidence of absence; zero below detection missing and unknown are distinct. Keep whole purchased formulations once; assay active ions solvent/crystal water and minor phases are subledgers. For true in-house preparation record each actual purchased feed and energy/loss stream instead. No other collection or assumed-zero manufacturing input is allowed. | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| b_physical | physical gates | Close gross mass and relevant element balances independently of LCA burden allocation at manufacturing service and consolidated gates. Actual air intake/exhaust species phases water fuel carrier mass steam/hot-water carrier returns solids liquid wastes and inventories must reconcile. Do not add total air or an effluent aggregate to its constituent exchanges at the same boundary. Bulk oxide-equivalent assay COD VOC total boron total carbon NOx or PM is not a named chemical species. Sulfate conversion residual carbonate hydration/dehydroxylation and free/crystal/reaction water require independent evidence; one residual cannot fit two unknown reactions/species. | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| b_pack | each packaging pool | For each actually used film pallet and strap and every additional real article retain separate empty-stock attached-WIP attached-FG and reusable opening/closing subpools plus new purchases inbound supplier articles externally returned articles gross shipment departures outward supplier/owner returns and waste. Internal reuse/transfers cancel; use actual gross physical movements without economic-share scaling. Packaging is outside dry bare-brick Q; repeated reuse is not repeated procurement and no automatic coproduct credit applies. Each pool also retains actual material/water X_in and X_out not already counted in another flow term, including new/removed repair parts wood residues and moisture uptake/release. Deduplicate X only against other flow terms; actual retained ingress and its measured closing stock mass must both remain. | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| b_assets | equipment and fluids | Keep each actual press kiln die lining setter maintenance part and installed fluid stock as physical receipts/returns/installations/removals/retirements independently from its period service burden. No fixed lifetime one complete machine per kilogram or physical stock multiplied by economic burden share is allowed. Separate drained fluids new/refurbished parts moisture and contamination from dry metal/refractory article mass; actual maintenance electricity fuel water dust and waste remain foreground. | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Aggregate receipt through fired-brick first final acceptance | required | actual declared periclase/sulfate route | aggregate foreground with mandatory operation-resolved receipt/preparation/pressing/drying/firing/cooling/finishing/testing/abatement/asset subledgers; cancel internal transfers | finished_brick; Q |
| service | Original-cohort post-release services | required | only actually observed operations over H | separate incremental burden and gross physical FG/packaging ledgers; original manufacturing history retained | Qc; H |

The manufacture aggregate is not a packing-only process: cp_route resolves every listed operation and real operating mode. Coarse/fine fraction and green/dry/fired-unreleased handoffs remain internal paired physical/vector subledgers. No undeclared unit operation or actual exchange is silently omitted. A conditional card is not_applicable only on evidence of absence.

### Process: Pressed and fired periclase manufacture (`manufacture`)

Preserve complete raw-to-fired route and operation-resolved balances including all unreleased stocks and failures.

#### Inputs

##### Product flows

###### Natural-magnesite-derived dead-burned aggregate (`dbm`)

Receive actual dense refractory-grade DBM including coarse and fine fractions; identify each independently purchased grade separately. UNIDO M-A used natural DBM-A with periclase and minor calcium silicates; do not turn bulk oxide assays into pure component purchases. Coarse crushing screening fine milling and internal fractions are operation subledgers; count whole incoming material once. Require upstream calcination/dead-burning burden in the actual supply state; seawater MgO caustic light-burned magnesia and medicinal powder are not interchangeable.

- Selected flow: Natural-magnesite-derived dead-burned periclase aggregate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007`

###### Whole supplied temporary binder solution (`sulfate_solution`)

Use only the complete purchased aqueous MgSO4 formulation including actual solvent water and declared additives; weigh whole solution once and retain concentration hydration-equivalent solids and water as subledgers. No concentration dose or sulfate reaction fate is supplied by the UNIDO trial. If made here the internal solution transfer cancels and the actual separately purchased salt water energy losses and vessel cleaning replace its purchase; do not count both routes.

- Selected flow: Aqueous magnesium sulfate binder solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007`

###### Conditional in-house binder salt (`sulfate_crystal`)

Only when this exact hydrate is actually bought for the declared aqueous binder; the trial proves a solution binder but does not prove its salt supply form. No fixed salt fraction is assumed. Conditional purchased solid MgSO4·7H2O only for real in-house dissolution with verified hydrate and CAS10034-99-8; native Product at plant is preparation of magnesium sulfate heptahydrate with Mass/kg. Medical/bath examples do not establish an industrial supplier grade; qualify actual purity additives and supply burden. This crystal is not a whole purchased solution anhydrous sulfate another hydrate or a second purchase of sulfate already inside bought solution. Crystal water is a subledger of this whole crystal mass; added solvent water and actual dissolution energy are separate.

- Selected flow: Magnesium Sulfate Heptahydrate `099ef12e-1a6c-4cfc-a320-fe42bd363a91`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `unido-magnesite-brick-trials-1986`

###### Separately supplied dissolution water (`binder_water`)

Only additional actual separately supplied water for in-house dissolution. Water inside a bought solution or crystal hydrate is already in that purchase. Record source treatment delivery and independent density at the measured temperature; the Hong Kong volume-reference tap-water row and Sheyang paper-mill water are not generic supplies.

- Selected flow: Water for magnesium sulfate dissolution
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007`

###### Manufacturing electricity (`electricity`)

Meter all receipt milling screening mixing pressing air compression dryer/kiln fans controls finishing tests cleaning abatement and maintenance operation states. All actual start/stop idle failure and zero-output use remains. The supply identity below is conditional; do not infer the UNIDO plant uses it. Native Product identity is CN user-side consumption-mix grid-average alternating current below 1 kV with energy reference MJ. Use only a matching Chinese low-voltage interface; it is not hydropower generation a voltage-transformation service or a foreign/high-voltage supply. An incompatible supply requires its own specific identity and provider before use. Meter kWh becomes MJ by 3.6 once; preserve the native Net calorific value reference-property label without treating electricity as fuel mass.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### Kiln natural-gas fuel (`kiln_gas`)

Conditional actual furnace fuel including warm-up hold cooling support re-firing and failed loads. Oil/gas alternatives are recorded separately in their actual periods; simultaneous zero is not a substitute for missing records. Native Product identity is natural gas burned in an industrial furnace with Mass/kg reference; there is no native fixed geography composition pressure density or LHV. Use only actual kiln natural-gas fuel and a compatible supply provider; exclude boiler-only fuel identities LNG carrier phases pure methane and a project-specific gas assay. Record integrated gas volume and state composition independent density and LHV to obtain carrier kg and heat MJ as linked dimensions of one purchase. Do not purchase the heat again.

- Selected flow: Natural gas `c536902d-9d84-4984-8504-ab88cdbe8b7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007`

###### Kiln light fuel oil (`kiln_oil`)

Conditional actual oil firing in the industrial kiln. Collect exact supplied grade sulfur composition integrated volume temperature independent density and measured LHV. A candidate fixed catalytic-cracking route and 42000kJ/kg specification is not adopted without an actual match; do not borrow its density range. Carrier mass and thermal energy are linked physical/energy subledgers of this single purchase.

- Selected flow: Light fuel oil for the kiln
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007`

###### Manufacturing washing or wet-finishing water (`process_water`)

Actual distinct purchased process water for cleaning wet machining or abatement where present. The core brick route does not imply wet grinding or a scrubber. Declare supplier treatment gross intake returns blowdown evaporation and source-specific density; recirculation is an internal transfer. Exclude binder solution water already bought.

- Selected flow: Process cleaning water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ceramic-bref-2007`

###### External process steam (`steam`)

Only an actual external dryer/utility steam interface. Measure carrier kg pressure temperature dryness and supply/return enthalpy and supplier water convention; heat MJ is a linked dimension of one steam purchase. Trace each condensate return separately. Do not invent steam use a boiler or recovered heat import from a generic industry diagram.

- Selected flow: Purchased process steam
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### External hot-water heat (`hot_water_heat`)

Only a real external hot-water circuit. Record gross carrier water supply and return temperature pressure enthalpy and actual supplier water ownership convention. Keep returned carrier as its own physical Product exchange; do not count heat and carrier as two providers. Internal kiln heat recovery cancels and is not a sale or negative purchase.

- Selected flow: Purchased hot-water heat
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### Whole hydraulic fluid replenishment (`hydraulic_oil`)

Record new fluid actual top-ups removed fluid spills and in-machine opening/closing contents independently from press mass. Whole formulation assay is not a second purchase. Native Product identity is hydraulic fluid produced by vacuum distillation hydrogenation and refining at plant; the commentary permits base oil plus performance additives. Use the complete supplied formulation once only when its actual supply route matches; a differently made synthetic or aqueous fluid needs a separate identity. Native reference property is internal property1 Mass/kg; secondary property0 Volume has mean1 and is not evidence of a density or one m3 per kg. Measure actual fluid density/state independently if converting volume. Track fluid inside assets independently of metal assets.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Diamond grinding wheel (`diamond_wheel`)

Only when real final dimensional grinding uses this complete supplied abrasive article. Include bond backing and diamond in the whole purchase and its actual wear/replacement record. Loose HPHT diamond or a sanding belt is not this wheel; identify any different actual tool separately.

- Selected flow: Bonded diamond grinding wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Polyester dust-filter bag (`filter_bag`)

Conditional actual polyester bag article with exact coating frame/fastener boundary and installed pool. Whole bag replacement and captured dust are separate exchanges; a generic textile record does not prove finished filter compatibility. A different real filter medium requires its own named card.

- Selected flow: Polyester dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Hydrated-lime sorbent (`hydrated_lime`)

Only an actual Ca(OH)2 supply used in real acid-gas abatement; do not infer scrubber lime use from a possible SOx emission. Record complete purchased grade moisture carrier and measured utilization; CaO quicklime and sulfate waste are different materials.

- Selected flow: Calcium hydroxide sorbent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Hydraulic powder press received (`press_asset`)

Physical new or refurbished complete press receipts belong to the asset stock ledger. Allocate only evidenced service burden for actual operation; never assign a whole press to each kilogram. Separate fluids die replacements maintenance modules and returned/retired assets. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Hydraulic ceramic powder press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Tunnel kiln equipment received (`kiln_asset`)

Physical new or refurbished kiln equipment is separate from current fuel and from replaceable lining furniture burner parts and in-machine fluids. Retain actual configuration scope installations removals maintenance and service records; no assumed fixed lifetime or annual replacement. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Refractory-brick tunnel kiln equipment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Steel press die received (`steel_die`)

One complete actually supplied steel die is the exchange. Keep new/refurbished receipt installed stock resurfacing actual wear and retired steel distinct; do not use a metal-forming blank or whole powder press as its identity. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement. Native Product is one finished manufactured mould for mineral materials, Mass/kg; the broad official family also names other mould applications, which are not combined in this exchange. Only the actual complete steel refractory-brick press die is selected here, with evidenced steel/configuration/supply and manufacturing burden. No fixed alloy geometry mass supplier region or life is established. It is not a metal blank an ingot mould the entire press or a bundle of moulds; retain actual physical purchase/installed history separately from service burden.

- Selected flow: Moulding boxes for metal foundry, mould bases, moulding patterns, moulds for metal (except ingot moulds), metal carbides, glass, mineral materials, rubber or plastics `da241301-584e-4c9c-baa7-2208878acd1d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Kiln lining magnesia brick received (`lining_brick`)

Only actual supplied magnesia lining replacement bricks of an evidenced grade; do not assume a periclase product kiln is lined entirely in its own product. Lining receipts installed stock removed brick and current service burden are separate; new lining is not a coproduct or product output. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement. Native Product is a whole manufactured high-temperature-fired refractory-brick family, Mass/kg, including magnesia-based bricks with actual minor phases. This row is only an actual supplied fired magnesia kiln-lining replacement brick of evidenced grade and kiln duty; it is not loose MgO raw aggregate an unfired shape a setter or a second purchase of the manufactured reference output. No inference that the kiln uses this factory own brick, no fixed supplier chemistry temperature schedule lifetime or item mass. Keep actual physical purchase/installed history separately from service burden.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Refractory kiln setter received (`kiln_setter`)

Only an actual supplied refractory setter of declared phase composition geometry and moisture; no universal ceramic composition is assumed. Count actual new/refurbished receipts returns breakage and installed stock; allocate evidenced service and keep physical mass unscaled by economic shares. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Refractory ceramic kiln setter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Inbound road freight (`inbound_freight`)

Only actual road freight not already included in delivered upstream supply. Keep each vehicle payload distance empty-return convention and route; tonne-km uses actual tonnes and distance. Mass-limited and volume-limited service allocation require determining physical causality; no universal payload density.

- Selected flow: Inbound road freight service
- Flow property / unit: Mass*distance / t*km
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_logistics`
- Sources: `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### Inbound supplier packaging film (`pack_film_inbound`)

Actual packaging attached to raw-material or binder deliveries; record ownership and burden already included in upstream supply so no second provider is purchased. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is manufactured polyethylene film at plant with CAS9002-88-4 and Mass/kg; molecular form name and CAS are coherent although its luggage classification is an isolated taxonomy defect. The commentary contrasts PET as a competing material; PET is not this PE film. Use one actual homogeneous PE transport film with declared branching thickness additives supply and conversion burden; not resin pellets laminate PET film or a whole packaging bundle. Preserve this taxonomy/provenance limitation; provider compatibility is not established by the UUID. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

###### Inbound supplier packaging pallet (`pack_pallet_inbound`)

Actual packaging attached to raw-material or binder deliveries; record ownership and burden already included in upstream supply so no second provider is purchased. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is wooden pallets made from boards/slats at the lumber mill with Mass/kg; its electrical-energy taxonomy conflicts with its coherent physical article identity and the preserved source packaging classification. Use one actual complete wooden pallet and declare timber moisture treatments fasteners repairs ownership and reuse history; do not silently apply EURO geometry a photovoltaic area-reference pallet or one kilogram per pallet. Weigh actual net pallet mass; separately supplied wrapping/straps are separate exchanges while integral fasteners remain subledgers of the whole bought pallet; only separately bought replacement fasteners are new inputs. The taxonomy defect remains disclosed. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

###### Inbound supplier packaging strap (`pack_strap_inbound`)

Actual packaging attached to raw-material or binder deliveries; record ownership and burden already included in upstream supply so no second provider is purchased. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. This is one finished PP strap with actual cross-section additives closure and supply; resin baler twine cable ties and PET strap are not substituted. The inspected farm-gate PP twine is not a factory strap. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

##### Elementary flows

###### Atmospheric oxygen intake (`air_o2`)

Gross molecular oxygen entering actual combustion ventilation or drying air; quantify from actual state and composition. Consumed oxygen and emitted excess are separately reconciled. Native Elementary flow is ordinary molecular O2 CAS7782-44-7 with Mass/kg and renewable element resource from air; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Atmospheric dinitrogen intake (`air_n2`)

Gross N2 in the actual intake; do not use total nitrogen excluding N2. Thermal NO formation must have independent species evidence rather than an assumed N2 conversion. Native Elementary flow is ordinary molecular N2 CAS7727-37-9 with Mass/kg and renewable element resource from air; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Atmospheric argon intake (`air_ar`)

Gross ordinary argon in actual intake; no bottled argon production burden or isotope identity is implied. Native Elementary flow is ordinary elemental argon gas CAS7440-37-1 with Mass/kg and renewable element resource from air; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Inlet humidity water (`air_humidity`)

Measure actual inlet humidity and gas-state basis. This physical intake is distinct from purchased water fuel hydrogen reaction water and crystal water; record ordinary H2O only.

- Selected flow: Atmospheric water vapour entering the plant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Inlet carbon dioxide (`air_co2`)

Measure real background CO2 brought in with the air separately from newly generated fossil or mineral carbon emissions. Passthrough cannot be counted as new fossil production.

- Selected flow: Atmospheric carbon dioxide entering the plant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### First quality-released periclase refractory brick (`finished_brick`)

1 kg dry bare finished brick at its first final release after firing cooling required machining surface/edge inspection chemistry phase and mechanical/thermal acceptance. Exclude rejected ware destructively tested specimens and packaging from reference mass. Q counts each first-release identifier once including already-released closing FG; neither dispatch nor retest creates a second Q. The native identity is a Product flow for manufactured high-temperature-fired refractory bricks at plant; it covers high-alumina or silica or magnesia families and fixes no SKU or supplier. This card narrows it exclusively to a bare dense uncoated natural-magnesite-derived periclase brick made with aqueous magnesium sulfate binder by pressing drying ceramic firing cooling and required finishing. It does not identify loose magnesia powder unfired shapes carbon-bonded ware siliceous-earth insulation bricks or crucibles. Actual chemistry phase grade geometry kiln schedule and final acceptance must match; no native family name establishes a recipe or service life. Reference property is Mass/kg.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007`

###### External steam condensate returned (`condensate_return`)

Only actual condensate returned to an external supplier. Record gross carrier kg quality temperature pressure enthalpy and ownership agreement; distinguish discharged condensate and fresh process water. The return is not an automatic coproduct or negative water purchase. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### External heat-transfer water returned (`hotwater_return`)

Only actual external hot-water carrier return at its measured state. Preserve gross mass enthalpy and supplier water/energy convention; it is not the same flow as an effluent. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Returned heat-transfer water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging returned to raw supplier film (`pack_film_supplier_return`)

Actual gross return to raw supplier from the manufacturing packaging pool, with returned physical state and no automatic allocation credit. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is manufactured polyethylene film at plant with CAS9002-88-4 and Mass/kg; molecular form name and CAS are coherent although its luggage classification is an isolated taxonomy defect. The commentary contrasts PET as a competing material; PET is not this PE film. Use one actual homogeneous PE transport film with declared branching thickness additives supply and conversion burden; not resin pellets laminate PET film or a whole packaging bundle. Preserve this taxonomy/provenance limitation; provider compatibility is not established by the UUID. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging returned to raw supplier pallet (`pack_pallet_supplier_return`)

Actual gross return to raw supplier from the manufacturing packaging pool, with returned physical state and no automatic allocation credit. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is wooden pallets made from boards/slats at the lumber mill with Mass/kg; its electrical-energy taxonomy conflicts with its coherent physical article identity and the preserved source packaging classification. Use one actual complete wooden pallet and declare timber moisture treatments fasteners repairs ownership and reuse history; do not silently apply EURO geometry a photovoltaic area-reference pallet or one kilogram per pallet. Weigh actual net pallet mass; separately supplied wrapping/straps are separate exchanges while integral fasteners remain subledgers of the whole bought pallet; only separately bought replacement fasteners are new inputs. The taxonomy defect remains disclosed. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging returned to raw supplier strap (`pack_strap_supplier_return`)

Actual gross return to raw supplier from the manufacturing packaging pool, with returned physical state and no automatic allocation credit. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. This is one finished PP strap with actual cross-section additives closure and supply; resin baler twine cable ties and PET strap are not substituted. The inspected farm-gate PP twine is not a factory strap. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

##### Waste flows

###### Unfired magnesia compact rejected (`green_reject`)

Actual unrecoverable whole wet compact including binder solids and water. Internal recoverable returns cancel; extra mixing drying treatment and losses do not. Do not turn a wet reject into dry MgO mass without measurement.

- Selected flow: Unfired magnesia compact waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Rejected fired magnesia brick (`fired_reject`)

Actual rejected body or destructively tested specimen before first release. Include composition moisture fragments and treatment destination. It is not saleable Q or an automatic secondary-material credit.

- Selected flow: Rejected fired periclase brick waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Captured refractory-process dust (`captured_dust`)

One actually collected dust stream with measured composition size water and destination; segregate incompatible streams. Capture and internal recycle are not air emissions; actual external waste remains. Bulk MgO assay does not prove every particle is MgO.

- Selected flow: Captured magnesia-process dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Wet-finishing magnesia sludge (`grinding_sludge`)

Only real wet machining or treatment sludge. Weigh whole wet sludge and independently measure water mineral solids and any abrasive contamination; filter cake is distinct from discharged liquid.

- Selected flow: Magnesia-brick grinding sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Manufacturing process wastewater (`wastewater`)

One actual liquid stream to external treatment with volume state density dissolved species and suspended solids. COD and total boron remain indicators until real species are established; no wastewater aggregate plus constituent emissions from the same boundary. Actual direct discharge instead requires each measured species and receiving medium separately.

- Selected flow: Magnesia-process wastewater for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-ceramic-bref-2007`

###### Spent polyester filter bag (`spent_filter`)

Actual removed contaminated bag separate from contained removable dust and reusable frame. Weigh whole removed article and disclose water and contamination; do not assume recovery credit.

- Selected flow: Spent polyester dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Spent hydraulic fluid (`spent_oil`)

Actual drained fluid separately from press or metal scrap; retain composition water contamination waste contractor and spills. No fixed waste-oil 50/25/15 mixture is imposed.

- Selected flow: Spent hydraulic fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Spent diamond wheel (`spent_wheel`)

Actual spent complete tool with retained abrasive bond/backing moisture and destination. Abrasive loss entering sludge or dust is separately traced and not a second whole tool.

- Selected flow: Spent bonded diamond grinding wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Retired steel press die (`spent_die`)

Record actual retired die after cleaning/draining with removed coating coolant and steel wear separately. New/refurbished die returns and scrap sale require actual destination/state; no fictitious fixed lifespan. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Retired steel refractory-brick press die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Removed kiln-lining magnesia brick (`spent_lining`)

Actual removed lining at measured contamination and moisture; do not identify the complete kiln as refractory waste. Current maintenance energy dust water and replacement losses remain. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Removed kiln-lining magnesia brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Broken refractory setter (`spent_setter`)

Actual broken or retired setter of its declared composition. Reusable returned pieces remain assets rather than waste; all physical installed stocks and losses reconcile. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Broken refractory ceramic kiln setter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Retired hydraulic ceramic press (`retired_press`)

Actual external retirement of one drained press assembly; maintain removed oil dies and other detachable components as separate flows with no duplicate mass. Physical retirement does not equal service burden for the period. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Retired hydraulic ceramic powder press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Retired tunnel kiln equipment (`retired_kiln`)

Actual external removed equipment with lining furniture burner parts and fluids boundary explicit. Match receipts repair returns installed stock and retirement; no product-mass-scaled physical removal. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Retired refractory-brick tunnel kiln equipment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Spent lime-based acid-gas sorbent (`spent_sorbent`)

Only an actual spent stream from real lime abatement. Preserve measured calcium sulfate/sulfite residual lime water and contaminants as composition subledgers; do not assume pure gypsum or fixed sulfur removal.

- Selected flow: Spent calcium-hydroxide acid-gas sorbent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Manufacturing packaging waste film (`pack_film_inbound_waste`)

Actual discarded inbound packaging after contents removal; residues water and treatment are separately characterized. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Waste Polyethylene transport film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

###### Manufacturing packaging waste pallet (`pack_pallet_inbound_waste`)

Actual discarded inbound packaging after contents removal; residues water and treatment are separately characterized. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Waste Complete wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

###### Manufacturing packaging waste strap (`pack_strap_inbound_waste`)

Actual discarded inbound packaging after contents removal; residues water and treatment are separately characterized. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. This is one finished PP strap with actual cross-section additives closure and supply; resin baler twine cable ties and PET strap are not substituted. The inspected farm-gate PP twine is not a factory strap. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Waste Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_m`
- Sources: `jrc-ceramic-bref-2007`

##### Elementary flows

###### New fossil carbon dioxide (`co2_fossil`)

Actual fossil-fuel oxidation CO2 separately from carbonate and inlet background. Reconcile carbon origin and incomplete combustion independently. Native Elementary flow is fossil-source CO2 CAS124-38-9 with Mass/kg and emission to air unspecified; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Fossil carbon monoxide (`co_fossil`)

Only actually measured molecular CO from fossil fuel incomplete combustion; it is not a purchased carbon monoxide Product nor all flue gas named in legacy synonyms. Native Elementary flow is fossil-source CO CAS630-08-0 with Mass/kg and emission to air unspecified; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Sulfur dioxide emitted (`so2`)

Only actual SO2 from measured fuel or binder sulfur fate. Total sulfur SOx or sulfate mass does not determine SO2; sulfur retained in brick wastes or sorbent remains in those streams. Native Elementary flow is molecular SO2 CAS7446-09-5 with Mass/kg and emission to air unspecified; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Water vapour emitted (`water_vapour`)

Separate free/binder-water evaporation inlet humidity passthrough fuel reaction water and demonstrated hydrate/dehydroxylation water in linked source-origin subledgers; they sum only to this actually emitted H2O exchange. Do not count condensed external water as vapour. Native Elementary flow is ordinary unlabelled gaseous H2O CAS7732-18-5 with Mass/kg and emission to air unspecified; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Exhaust oxygen (`o2_exhaust`)

Actual residual molecular O2 at the exhaust state; reconcile intake consumed oxygen and any independently demonstrated sulfate-decomposition oxygen. No inferred O2 balance may fit an unknown sulfur reaction at the same time. Native Elementary flow is ordinary molecular O2 CAS7782-44-7 with Mass/kg and emission to air unspecified; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Exhaust dinitrogen (`n2_exhaust`)

Actual N2 exhaust distinct from NO NO2 N2O and total-N indicators; no nitrogen species is assumed from total air mass. Native Elementary flow is ordinary molecular N2 CAS7727-37-9 with Mass/kg and emission to air unspecified; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Exhaust argon (`ar_exhaust`)

Actual ordinary argon pass-through at measured exhaust state; no isotope or purchased-gas substitution. Native Elementary flow is ordinary elemental argon gas CAS7440-37-1 with Mass/kg and emission to air unspecified; it has no supplier or fixed geography. Use the actual measured species phase origin and receiving medium; select a different native medium when actually known. Broad legacy synonyms mentioning liquid cryogenic material mixtures isotopes ions heavy water or other compounds do not authorize those identities. It is not a purchased gas total air total pollutant or another species. Preserve actual physical gross gas amounts before any burden allocation; resource inputs and emitted outputs are distinct. No duplicated aggregate air and constituent exchanges.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Nitrogen monoxide emitted (`no`)

Only independently measured gas-phase NO in its actual receiving air medium; NOx reported as NO2 equivalent is a monitoring indicator, not molecular NO mass. Native canonical identity is ordinary nitrogen monoxide, CAS10102-43-9, Elementary flow, Mass/kg, emission to air unspecified. Use only independently measured actual gas-phase species in that receiving medium; a known different air subcompartment needs its own native record. Canonical name and CAS distinguish the ordinary species from noisy legacy synonyms, which do not authorize HNO nitrosyl hydride nitroxyl ions or aggregate NOx. No fixed geography supplier concentration emission factor or gas composition is established. Preserve gross physical amount and actual origin independently of allocated burden; total monitoring indicators cannot supply this molecular mass.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Nitrogen dioxide emitted (`no2`)

Only independently measured gas-phase NO2; NO N2O N2O4 nitrite or total NOx cannot supply its mass. Native canonical identity is ordinary nitrogen dioxide, CAS10102-44-0, Elementary flow, Mass/kg, emission to air unspecified. Use only independently measured actual gas-phase species in that receiving medium; a known different air subcompartment needs its own native record. Canonical name and CAS distinguish the ordinary species from noisy legacy synonyms, which do not authorize N2O4 nitrite N2O NO or aggregate NOx. No fixed geography supplier concentration emission factor or gas composition is established. Preserve gross physical amount and actual origin independently of allocated burden; total monitoring indicators cannot supply this molecular mass.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Sulfur trioxide emitted (`so3`)

Only independently evidenced gas-phase SO3; distinguish sulfuric-acid aerosol sulfate dust and total sulfur. A sulfate binder does not prove an SO3 fraction or complete decomposition.

- Selected flow: Molecular sulfur trioxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Unburned fossil methane emitted (`methane`)

Only independently quantified CH4 from real fossil-gas leakage or incomplete combustion with actual medium; no total VOC or unburned-hydrocarbon proxy. Native canonical identity is ordinary fossil methane, CAS74-82-8, Elementary flow, Mass/kg, emission to air unspecified. Use only independently measured actual gas-phase species in that receiving medium; a known different air subcompartment needs its own native record. Canonical name and CAS distinguish the ordinary species from noisy legacy synonyms, which do not authorize isotopically labelled methane biogenic CH4 carbon black graphite or other organics. No fixed geography supplier concentration emission factor or gas composition is established. Preserve gross physical amount and actual origin independently of allocated burden; total monitoring indicators cannot supply this molecular mass.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Mineral-source carbon dioxide (`co2_mineral`)

Only independent residual-carbonate assay reaction evidence and actual mineral carbon fate. Dead-burned aggregate is not assumed to release the full upstream magnesite CO2 again. Keep this distinct from fossil fuel carbon and measured background; no invented full-decarbonation factor.

- Selected flow: Mineral-source carbon dioxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Inlet carbon dioxide passthrough (`co2_passthrough`)

Actual inlet-background CO2 leaving in exhaust remains a paired physical passthrough rather than a new generated emission or carbon-removal credit.

- Selected flow: Passthrough atmospheric carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Hydrogen fluoride emitted (`hf`)

Conditional independently measured molecular HF from actual impurities; no F2 elemental fluorine or total-fluorine-to-HF assumption. Retain particulate fluoride separately when real. Native canonical identity is ordinary hydrogen fluoride, CAS7664-39-3, Elementary flow, Mass/kg, emission to air unspecified. Use only independently measured actual gas-phase species in that receiving medium; a known different air subcompartment needs its own native record. Canonical name and CAS distinguish the ordinary species from noisy legacy synonyms, which do not authorize F2 particulate fluoride isotope labels aqueous reagent or total fluorine. No fixed geography supplier concentration emission factor or gas composition is established. Preserve gross physical amount and actual origin independently of allocated burden; total monitoring indicators cannot supply this molecular mass.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Hydrogen chloride emitted (`hcl`)

Conditional actual molecular HCl and stack/air medium; total chloride does not establish HCl emission or a fixed capture percentage. Native canonical identity is ordinary hydrogen chloride, CAS7647-01-0, Elementary flow, Mass/kg, emission to air unspecified. Use only independently measured actual gas-phase species in that receiving medium; a known different air subcompartment needs its own native record. Canonical name and CAS distinguish the ordinary species from noisy legacy synonyms, which do not authorize chloride salts aqueous hydrochloric-acid solution aerosols isotope labels or formulated cleaners. No fixed geography supplier concentration emission factor or gas composition is established. Preserve gross physical amount and actual origin independently of allocated burden; total monitoring indicators cannot supply this molecular mass.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Airborne periclase particles (`periclase_pm`)

Only actual emitted MgO phase particles proven independently by phase/particle evidence. Whole particulate mass and Mg expressed as MgO-equivalent cannot both determine MgO particle mass without further evidence. A Product medicinal MgO powder is not this Elementary exchange.

- Selected flow: Airborne periclase particles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

###### Unspeciated refractory-process airborne dust (`unresolved_pm`)

Actual residual emitted dust whose phase/species is not yet resolved is retained as its single measured physical stream with explicit characterization uncertainty. Do not label it MgO Ca2SiO4 boron oxide or a fixed PM fraction. Resolve actual constituents and size classes without duplicating parent mass before completing a species-resolved dataset.

- Selected flow: Unspeciated airborne refractory-process dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final manufacturing unit result in Section8; retain this row raw records and actual state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-ceramic-bref-2007`

### Process: Original-cohort services (`service`)

Only actual post-release increments use original Qc and observed H; historical manufacturing is carried and no new production is created.

#### Inputs

##### Product flows

###### Released-brick handoff to service (`released_handoff`)

Actual internal handoff of already-released bodies by original cohort c. Historical manufacturing vectors remain attached; the handoff cancels against manufacturing Q in consolidation and is never a fresh external purchase. Opening/closing FG and returns preserve their measured state and history. The native identity is a Product flow for manufactured high-temperature-fired refractory bricks at plant; it covers high-alumina or silica or magnesia families and fixes no SKU or supplier. This card narrows it exclusively to a bare dense uncoated natural-magnesite-derived periclase brick made with aqueous magnesium sulfate binder by pressing drying ceramic firing cooling and required finishing. It does not identify loose magnesia powder unfired shapes carbon-bonded ware siliceous-earth insulation bricks or crucibles. Actual chemistry phase grade geometry kiln schedule and final acceptance must match; no native family name establishes a recipe or service life. Reference property is Mass/kg. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### External previously released brick returned (`service_return`)

Only actual external returned bricks from a traceable previous release cohort. Measure moisture added water losses contamination missing fragments and condition; returned mass need not equal original dispatched mass. Restore the attached original burden vector and reverse only the documented original service/delivery entries actually reversed; no new manufacturing Q. The native identity is a Product flow for manufactured high-temperature-fired refractory bricks at plant; it covers high-alumina or silica or magnesia families and fixes no SKU or supplier. This card narrows it exclusively to a bare dense uncoated natural-magnesite-derived periclase brick made with aqueous magnesium sulfate binder by pressing drying ceramic firing cooling and required finishing. It does not identify loose magnesia powder unfired shapes carbon-bonded ware siliceous-earth insulation bricks or crucibles. Actual chemistry phase grade geometry kiln schedule and final acceptance must match; no native family name establishes a recipe or service life. Reference property is Mass/kg. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Post-release service electricity (`service_electricity`)

Only actual incremental storage packing handling retest cleaning or permitted finishing rework electricity over declared horizon H allocated to original cohort c. Keep lighting idle and losses; use original Qc once rather than current-period output. Native Product identity is CN user-side consumption-mix grid-average alternating current below 1 kV with energy reference MJ. Use only a matching Chinese low-voltage interface; it is not hydropower generation a voltage-transformation service or a foreign/high-voltage supply. An incompatible supply requires its own specific identity and provider before use. Meter kWh becomes MJ by 3.6 once; preserve the native Net calorific value reference-property label without treating electricity as fuel mass.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Post-release rework water (`service_water`)

Only actual additional separately supplied water for permitted post-release cleaning/wet finishing; original moisture and returned added water are physical-state subledgers. Trace actual losses sludge effluent and evaporation separately; no presumed water-free return.

- Selected flow: Water for released-brick rework
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### New post-release packaging purchased film (`pack_film_new`)

Only actual new whole article purchase for the service pool; reuse does not become another purchase. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is manufactured polyethylene film at plant with CAS9002-88-4 and Mass/kg; molecular form name and CAS are coherent although its luggage classification is an isolated taxonomy defect. The commentary contrasts PET as a competing material; PET is not this PE film. Use one actual homogeneous PE transport film with declared branching thickness additives supply and conversion burden; not resin pellets laminate PET film or a whole packaging bundle. Preserve this taxonomy/provenance limitation; provider compatibility is not established by the UUID. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### External packaging return received film (`pack_film_return_received`)

Only actually externally returned article from its traced pool; retain ownership condition repairs moisture and historical burden rather than booking it as new procurement. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is manufactured polyethylene film at plant with CAS9002-88-4 and Mass/kg; molecular form name and CAS are coherent although its luggage classification is an isolated taxonomy defect. The commentary contrasts PET as a competing material; PET is not this PE film. Use one actual homogeneous PE transport film with declared branching thickness additives supply and conversion burden; not resin pellets laminate PET film or a whole packaging bundle. Preserve this taxonomy/provenance limitation; provider compatibility is not established by the UUID. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### New post-release packaging purchased pallet (`pack_pallet_new`)

Only actual new whole article purchase for the service pool; reuse does not become another purchase. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is wooden pallets made from boards/slats at the lumber mill with Mass/kg; its electrical-energy taxonomy conflicts with its coherent physical article identity and the preserved source packaging classification. Use one actual complete wooden pallet and declare timber moisture treatments fasteners repairs ownership and reuse history; do not silently apply EURO geometry a photovoltaic area-reference pallet or one kilogram per pallet. Weigh actual net pallet mass; separately supplied wrapping/straps are separate exchanges while integral fasteners remain subledgers of the whole bought pallet; only separately bought replacement fasteners are new inputs. The taxonomy defect remains disclosed. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### External packaging return received pallet (`pack_pallet_return_received`)

Only actually externally returned article from its traced pool; retain ownership condition repairs moisture and historical burden rather than booking it as new procurement. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is wooden pallets made from boards/slats at the lumber mill with Mass/kg; its electrical-energy taxonomy conflicts with its coherent physical article identity and the preserved source packaging classification. Use one actual complete wooden pallet and declare timber moisture treatments fasteners repairs ownership and reuse history; do not silently apply EURO geometry a photovoltaic area-reference pallet or one kilogram per pallet. Weigh actual net pallet mass; separately supplied wrapping/straps are separate exchanges while integral fasteners remain subledgers of the whole bought pallet; only separately bought replacement fasteners are new inputs. The taxonomy defect remains disclosed. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### New post-release packaging purchased strap (`pack_strap_new`)

Only actual new whole article purchase for the service pool; reuse does not become another purchase. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. This is one finished PP strap with actual cross-section additives closure and supply; resin baler twine cable ties and PET strap are not substituted. The inspected farm-gate PP twine is not a factory strap. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### External packaging return received strap (`pack_strap_return_received`)

Only actually externally returned article from its traced pool; retain ownership condition repairs moisture and historical burden rather than booking it as new procurement. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. This is one finished PP strap with actual cross-section additives closure and supply; resin baler twine cable ties and PET strap are not substituted. The inspected farm-gate PP twine is not a factory strap. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### Gross physical released bricks dispatched (`gross_dispatch`)

Actual gross outbound bare-brick mass by cohort and observed state, not Q plus closing FG and not net deliveries. Include repeated real dispatches as physical movements without making new production. Record paired service input opening/closing FG returned bodies and real incremental rework; consolidation cancels internal Q. The native identity is a Product flow for manufactured high-temperature-fired refractory bricks at plant; it covers high-alumina or silica or magnesia families and fixes no SKU or supplier. This card narrows it exclusively to a bare dense uncoated natural-magnesite-derived periclase brick made with aqueous magnesium sulfate binder by pressing drying ceramic firing cooling and required finishing. It does not identify loose magnesia powder unfired shapes carbon-bonded ware siliceous-earth insulation bricks or crucibles. Actual chemistry phase grade geometry kiln schedule and final acceptance must match; no native family name establishes a recipe or service life. Reference property is Mass/kg. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging on gross physical dispatch film (`pack_film_shipped`)

Actual article accompanying gross dispatched bricks including repeated dispatches; it is not scaled by net deliveries or economic burden shares. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is manufactured polyethylene film at plant with CAS9002-88-4 and Mass/kg; molecular form name and CAS are coherent although its luggage classification is an isolated taxonomy defect. The commentary contrasts PET as a competing material; PET is not this PE film. Use one actual homogeneous PE transport film with declared branching thickness additives supply and conversion burden; not resin pellets laminate PET film or a whole packaging bundle. Preserve this taxonomy/provenance limitation; provider compatibility is not established by the UUID. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging returned externally film (`pack_film_external_return`)

Actual outward return to its external owner/supplier; not a second dispatched-brick output or a negative purchase. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is manufactured polyethylene film at plant with CAS9002-88-4 and Mass/kg; molecular form name and CAS are coherent although its luggage classification is an isolated taxonomy defect. The commentary contrasts PET as a competing material; PET is not this PE film. Use one actual homogeneous PE transport film with declared branching thickness additives supply and conversion burden; not resin pellets laminate PET film or a whole packaging bundle. Preserve this taxonomy/provenance limitation; provider compatibility is not established by the UUID. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging on gross physical dispatch pallet (`pack_pallet_shipped`)

Actual article accompanying gross dispatched bricks including repeated dispatches; it is not scaled by net deliveries or economic burden shares. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is wooden pallets made from boards/slats at the lumber mill with Mass/kg; its electrical-energy taxonomy conflicts with its coherent physical article identity and the preserved source packaging classification. Use one actual complete wooden pallet and declare timber moisture treatments fasteners repairs ownership and reuse history; do not silently apply EURO geometry a photovoltaic area-reference pallet or one kilogram per pallet. Weigh actual net pallet mass; separately supplied wrapping/straps are separate exchanges while integral fasteners remain subledgers of the whole bought pallet; only separately bought replacement fasteners are new inputs. The taxonomy defect remains disclosed. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging returned externally pallet (`pack_pallet_external_return`)

Actual outward return to its external owner/supplier; not a second dispatched-brick output or a negative purchase. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. Native Product identity is wooden pallets made from boards/slats at the lumber mill with Mass/kg; its electrical-energy taxonomy conflicts with its coherent physical article identity and the preserved source packaging classification. Use one actual complete wooden pallet and declare timber moisture treatments fasteners repairs ownership and reuse history; do not silently apply EURO geometry a photovoltaic area-reference pallet or one kilogram per pallet. Weigh actual net pallet mass; separately supplied wrapping/straps are separate exchanges while integral fasteners remain subledgers of the whole bought pallet; only separately bought replacement fasteners are new inputs. The taxonomy defect remains disclosed. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging on gross physical dispatch strap (`pack_strap_shipped`)

Actual article accompanying gross dispatched bricks including repeated dispatches; it is not scaled by net deliveries or economic burden shares. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. This is one finished PP strap with actual cross-section additives closure and supply; resin baler twine cable ties and PET strap are not substituted. The inspected farm-gate PP twine is not a factory strap. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### Packaging returned externally strap (`pack_strap_external_return`)

Actual outward return to its external owner/supplier; not a second dispatched-brick output or a negative purchase. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. This is one finished PP strap with actual cross-section additives closure and supply; resin baler twine cable ties and PET strap are not substituted. The inspected farm-gate PP twine is not a factory strap. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

##### Waste flows

###### Post-release broken brick waste (`service_brick_waste`)

Actual broken or scrapped released body retains its original manufacturing history; incremental handling/rework is charged only once to its original cohort. No negative production or automatic recycling credit.

- Selected flow: Post-release broken periclase brick waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Post-release wet-finishing sludge (`service_sludge`)

Only actual whole wet sludge from permitted service rework with independent water mineral solids abrasive and destination records.

- Selected flow: Post-release magnesia-brick finishing sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Post-release liquid effluent (`service_effluent`)

Actual service liquid sent for treatment with volume density composition and destination; do not normalize it by current first-release Q or double count its constituents as direct emissions.

- Selected flow: Post-release magnesia-brick rework effluent
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Service packaging waste film (`pack_film_waste`)

Actual damaged/discarded article from the service pool; wet/attached residues and treatment destination remain explicit. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Waste Polyethylene transport film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### Service packaging waste pallet (`pack_pallet_waste`)

Actual damaged/discarded article from the service pool; wet/attached residues and treatment destination remain explicit. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Waste Complete wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

###### Service packaging waste strap (`pack_strap_waste`)

Actual damaged/discarded article from the service pool; wet/attached residues and treatment destination remain explicit. Keep empty stores packaging attached to WIP and FG and reusable stock as separate opening/closing subpools. Internal reuse cancels; packaging never enters bare-product Q. Weigh actual whole article or use independently measured item mass; do not infer mass from secondary properties. This is one finished PP strap with actual cross-section additives closure and supply; resin baler twine cable ties and PET strap are not substituted. The inspected farm-gate PP twine is not a factory strap. The gross physical stock/movement ledger remains complete and unallocated. A per-reference physical diagnostic is not a new procurement or the period LCI burden: retain historical burden separately and include only independently evidenced new purchase or current incremental service in the LCI vector. No allocated share rescales this actual physical movement.

- Selected flow: Waste Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_s`
- Sources: `jrc-ceramic-bref-2007`

##### Elementary flows

###### Post-release airborne brick dust (`service_dust`)

Only actual emitted service dust with composition/particle evidence; its unresolved species are explicit and cannot be replaced with elemental Mg or bulk MgO assay. Retain additional actual species separately before complete species-resolved use.

- Selected flow: Post-release airborne periclase-brick dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Post-release water vapour (`service_evaporation`)

Actual service-only evaporation independent of manufacturing gas records and measured return moisture; no fixed dry-out assumption. Native canonical identity is ordinary water vapour, CAS7732-18-5, Elementary flow, Mass/kg, emission to air unspecified. Use only independently measured actual gas-phase species in that receiving medium; a known different air subcompartment needs its own native record. Canonical name and CAS distinguish the ordinary species from noisy legacy synonyms, which do not authorize liquid droplets heavy/tritiated water solid ice or an emission to fresh water. No fixed geography supplier concentration emission factor or gas composition is established. Preserve gross physical amount and actual origin independently of allocated burden; total monitoring indicators cannot supply this molecular mass.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the final original-cohort service unit result in Section8; retain this row raw records original Qc and observed H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_framework | goal and modelling framework | Use attributional modelling only where the study goal justifies allocation; do not freely choose allocation versus substitution. Keep waste treatment and internal reprocessing responsibilities explicit. Industrial manufacturing documents establish route facts and do not establish allocation policy. | `jrc-ilcd-allocation-2010` |
| a_dedicate | each exchange | First collect dedicated operation/recipe/lot data or physically subdivide the system. If that is infeasible use supported virtual subdivision to assign each actually dedicated input emission service and waste to the receiving product/cohort before any residual allocation. Record why subdivision cannot remove each remaining common item. | `jrc-ilcd-allocation-2010` |
| a_causal | each remaining inventory exchange | Identify and quantify the exchange-specific determining physical causal relationship; material incorporated process heat actual moisture removal kiln load/hot-face heat loss pressing work and shared transport/storage services can have different causal drivers. A mass ratio energy ratio occupied area or time alone is not automatically causal. Use measured engineering relationships with counterchecks; no one blanket physical allocation applies to all flows. | `jrc-ilcd-allocation-2010` |
| a_residual | genuinely unresolved common process items | Only after documenting the lack of a determining physical causal relationship for a specific residual common item may contemporaneous representative market value be used at the actual common-process exit/entry gate and actual quantity quality moisture packaging and technical state. Use prices for those same states/time/geography; strip later product-specific finishing packaging freight and storage values where outside that gate. Quantify sensitivities; unknown prices are not zero or permission for a fixed share. | `jrc-ilcd-allocation-2010` |
| a_scrap | rejects recycling and co-products | Internal recovered powder or green scrap cancels as transfer with its inherited vector; actual extra processing and losses remain. A sale of waste does not by itself establish a co-product or avoided-production credit. For an actual externally traded secondary product verify state quality receiving process and allocation responsibility at its true common gate; never reduce gross material/packaging/asset masses by the burden share. | `jrc-ilcd-allocation-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

These are requirements for future real-site collection rather than measured factory quantities. Every protocol retains undivided raw records. Its aggregation_rule labels the eventual reference-flow reporting basis only; collection_method retains the full raw aggregation instructions. Only calc_unit_result divides once after conversion stocks and attribution; services always retain original Qc and observed H.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first final release | quality-release and weighing records | lot and unique release IDs; grade and dimensions; as-weighed bare mass; packaging tare; free moisture; dry bare mass; acceptance time; phase chemistry defects porosity and strength/thermal results; rejected/test specimens; closing released FG | Use calibrated traceable scales and validated representative moisture sampling of actual bare bricks at first final acceptance; bind dimensions/grade and tests to the same batch. Keep reported test conditions and actual acceptance specification; no copied test-piece guarantees. Collect undivided unique release mass records and reconcile once into Q under calc_release; no exchange normalization here. | kg | each lot and release | whole period including failures and carryover lots | declared site and final acceptance gate | per reference flow | calibration chain moisture method traceable lot tests first-release registry |
| cp_material | manufacture | each whole supplied ingredient | receipt recipe assay and consumption ledgers | row_id; supplied grade route form hydrate; complete formulation mass; concentration assay and impurity/phase records; free/crystal water; receipts issues spills returns; raw/WIP opening and closing; inherited vector by native exchange; supplier boundary | Weigh whole deliveries/issues on calibrated systems; obtain actual supplier SDS/phase/assay evidence and site inventory checks. For in-house binder record separately bought salt water energy losses and cleaning; external formulation constituents remain subledgers. Collect raw undivided per-row totals; state conversion and real attribution precede calc_unit_result; do not divide here. | kg | each delivery lot and period reconciliation | full manufacturing period and carryover | receipt preparation mixing and stores | per reference flow | scale assay phase supplier documents counts and vector provenance |
| cp_route | manufacture | operation-resolved manufacturing | batch travellers machine/kiln and quality logs | lot and operation IDs; coarse/fine masses and grading; binder addition; press configuration pressure cycles deaeration; drying humidity and time; firing temperature atmosphere schedule loads cooling; grinding tools stock removal; quality gates; every failure idle cleaning start/stop and rework mode | Trace each real operation and lot with synchronized logs and meters; use actual scale and sensor calibrations. Record deviations and rejected/zero-output loads rather than excluding them. The historic trial demonstrates route not universal settings. Raw operation totals only; retain internal transfer pairing and inherited vectors; use calc_attribution before calc_unit_result once. | row native unit; kg; degC; h; cycle | continuous plus each batch/event | full period all operating modes | all included operations and shared equipment | per reference flow | time synchronization calibration batch genealogy deviations and controls |
| cp_utility | manufacture | each actual utility fuel or external heat | meters fuel invoices state analysis and balances | row_id and meter; start/end integrated readings; actual rate timebase where relevant; kWh or MJ; gas/oil volume and state; composition independent density LHV; steam kg pressure temperature dryness supply/return enthalpy; supplier water-energy convention; interval operation/cohort allocation; failures and idle use | Read calibrated meter differences; integrate genuine rates only. Measure each fluid composition/density at stated pressure temperature moisture and independent calorific/enthalpy evidence. Pair external carriers and returns; include actual fan compressor treatment and maintenance use. Raw undivided readings; calc_convert then calc_attribution then final unit result under calc_unit_result; no division in collection. | each row native unit; MJ; kWh; m3; kg | meter interval event and billing reconciliation | full period including start/stop and Q0 | actual utility interfaces and submeters | per reference flow | calibration fuel assay state LHV/enthalpy supplier boundary and meter closure |
| cp_water | manufacture | each actual liquid water/effluent | water meters weighings analyses and destination records | row_id; integrated volume; true rates and time; measured temperature pressure density; actual intake treatment quality; internal circulation; independent free/bound water solids dissolved species and indicators; returns effluent sludge evaporation; stock vectors | Measure actual gross liquid streams with calibrated meters/scales and representative analyses; keep water source and receiving/treatment boundary. Density belongs to this liquid at this state; do not use a default water density for a salt solution oil sludge or gas. Collect raw undivided streams; no per-Q division; calc_convert and calc_physical precede the one final unit-result rule. | each row native unit; m3; kg | interval and discharge/treatment batch | complete period and water stocks | actual wet operations utilities and treatment | per reference flow | meter closure sampling state density destination and detection limits |
| cp_gas | manufacture | each inlet/exhaust species | gas monitoring speciation phase and material balances | row_id; chemical/CAS phase origin medium; inlet and outlet state humidity composition; integrated dry/wet gas volume or genuine rate time series; species concentrations units detection limits; fossil/mineral/background carbon; sulfur/hydrate reaction evidence; dust mass size and independent phase; abatement capture stock and destination | Use actual calibrated gas volume/state and species-specific monitoring; integrate rates only and correct concentration and gas volume to the same dry/wet pressure-temperature basis. Independently characterize actual particle phase/size and reaction-water sources. NOx/VOC/COD total indicators do not establish component masses. Raw species totals only with separate physical origins and no aggregate duplication; use calc_convert/calc_physical/calc_attribution before calc_unit_result once. | kg; m3; native concentration and state units | continuous plus representative events/operating modes | full period all startup shutdown failures and treatment | actual inlet process fugitive and stack locations | per reference flow | calibration speciation phase medium source origin state limits and independent closure |
| cp_waste | manufacture | each specific waste stream | weighbridge waste transfer recovery and analysis | row_id; wet gross and dry solids; water and real phases/species; operation and lot; internal recycle external dispatch; destination treatment; rejects destructive samples dust sludge sorbent; stocks inherited vectors | Weigh each segregated actual stream and sample moisture/composition independently; reconcile internal recycle pairs and retain added processing burdens. Document actual external treatment/secondary-product status rather than assume a credit. Raw undivided wet/dry stream records and vector attribution; do not divide or credit here. | kg | each waste batch plus period closure | complete period including failures cleanup | actual manufacturing and waste gates | per reference flow | scale sampling transfer permits destination and recovery records |
| cp_asset | manufacture | each asset part tool filter or fluid | asset service maintenance and physical stock ledger | row_id; actual configuration material moisture and installed fluid; new/refurbished receipt return; opening and closing installed/store stock; issue remove wear breakage retirement; maintenance inputs and waste; actual operation/service driver inherited and remaining burden | Use traceable inventory weighings supplier configurations and maintenance logs; measure actual fluid and article separately. Derive service burden only from actual usage/remaining service evidence and actual repair/replacement; unknown lifetime is not an invented amortization. Raw physical movements are not economically scaled; current service vector enters calc_attribution/calc_unit_result only once; no whole-asset-per-kg shortcut. | kg; actual service-driver units | each receipt installation repair and retirement | period plus traceable historical service | actual equipment tools abatement and fluid pools | per reference flow | configuration weighings stock service-driver evidence maintenance and fluid reconciliation |
| cp_logistics | manufacture | each actual freight service | shipment vehicle payload route and delivered-supply records | row_id; actual shipment mass; vehicle payload; route distance; empty returns; supplier delivery convention; product/cohort assignment; service limiting factor | Use real transport records and payload weighings; establish whether mass volume or another actual factor determines the service. Do not add a second freight provider if already supplied. Raw payload and distance; calc_convert and actual allocation before final result; no division here. | t*km | each trip and reconciled period | actual included trips | real supply-to-site legs | per reference flow | waybill weighbridge distance evidence supplier boundary and causal allocation |
| cp_packaging_m | manufacture | each actual packaging article pool | physical packaging pool and purchase/return ledger | row_id and article specification; ownership moisture attached residues; measured item mass if counting; opening/closing empty attached-WIP attached-FG reusable stocks; new purchase inbound supplier pack external return received; gross shipment departures outward supplier/owner return waste; internal reuse and pool transfer; inherited burden history ; actual new/old repair parts wood residues and phase-specific water X_in/X_out; duplicate-flow-term register; actual retained ingress and measured closing composition/moisture | Weigh actual complete article or calibrate item mass for the actual configuration/moisture; trace every gross movement and stock subpool. Reconcile separately for each material and process/cohort; reused/returned objects are not automatically new purchases. Raw gross physical movements only; calc_packaging closes stocks; attributable burdens or service increments reference calc_unit_result once with the correct Q or original Qc. Record all real material/water additions and removals per pool. Retained actual ingress and measured closing mass coexist; X is deduplicated only against other flow terms, not stock attachment. | kg; measured item counts as raw subledger | each purchase receipt dispatch return and stocktake | complete period plus linked service horizon | manufacturing inbound and post-release service pools | per reference flow | article specification weighings purchase invoices transfer/return logs moisture and historical ownership |
| cp_packaging_s | service | each actual packaging article pool | physical packaging pool and purchase/return ledger | row_id and article specification; ownership moisture attached residues; measured item mass if counting; opening/closing empty attached-WIP attached-FG reusable stocks; new purchase inbound supplier pack external return received; gross shipment departures outward supplier/owner return waste; internal reuse and pool transfer; inherited burden history; original cohort c; original first-release Qc; actual observed horizon H ; actual new/old repair parts wood residues and phase-specific water X_in/X_out; duplicate-flow-term register; actual retained ingress and measured closing composition/moisture | Weigh actual complete article or calibrate item mass for the actual configuration/moisture; trace every gross movement and stock subpool. Reconcile separately for each material and process/cohort; reused/returned objects are not automatically new purchases. Bind each service movement and incremental burden to cp_service original cohort/Qc/H records. Raw gross physical movements only; calc_packaging closes stocks; attributable burdens or service increments reference calc_unit_result once with the correct Q or original Qc. Record all real material/water additions and removals per pool. Retained actual ingress and measured closing mass coexist; X is deduplicated only against other flow terms, not stock attachment. | kg; measured item counts as raw subledger | each purchase receipt dispatch return and stocktake | complete period plus linked service horizon | manufacturing inbound and post-release service pools | per reference flow | article specification weighings purchase invoices transfer/return logs moisture and historical ownership |
| cp_service | service | each original-cohort service exchange | observed FG logistics retest and incremental rework | row_id; original cohort c original first-release dry Qc and release IDs; observation horizon H; opening/closing FG physical state and historical vector; actual handoff gross G external R; original dispatched identities and entries actually reversed; added/removed water fragments losses; actual incremental electricity water finishing tools dust sludge effluent evaporation; dedicated/causal allocation ; actual manufacturer/procedure/specification work permission; post-work tests and acceptance/disposition; repair-held FG substate or disjoint repair-WIP; actual new/old parts material water and phase additions/removals | Observe actual operations and state-resolved weighings for the declared horizon; retrieve historical first-release evidence and bind every movement to its cohort. Do not assume return mass equals original shipment; preserve actual state changes and charge only real incremental operations. Add atomic fuel/species/tool rows for any additional actual rework before modelling. Collect raw S_i_c_H and gross physical movements only; no predivision. The unique calc_unit_result uses original Qc once; current Q or net deliveries never replace Qc. Confirm b_service permission, post-work tests, acceptance/disposition and unchanged applicable article grade/dimensions/duty for every actual event; never assume broken-brick restoration. Retain unaccepted stocks repair custody and actual material/water changes without loss or double count. | each row native unit; kg; MJ; m3 | each movement service interval return and retest | explicit observed H and complete original cohort trace | actual post-release site/storage/handling gates | per reference flow | historic release registry calibrated state weighings service logs return/reversal evidence and coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_release | finished_brick | Q = sum of independently measured dry bare mass of unique first-final-release bricks in the declared period; include released closing FG once and exclude unreleased WIP packaging rejects and destructive test specimens. If Q=0 retain actual burdens and provide no unit result. No count-to-kg value is assumed. | cp_release; unique_release_ids; measured_dry_bare_mass | Q | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| calc_convert | all inventory rows | Convert actual raw units/state before attribution: MJ_elec = 3.6 * measured_kWh; integrated gas/liquid volumes are totals and are never multiplied by time again; only true rates are integrated. m_i = independently_measured_density_i_at_state * actual_volume_i_at_same_state. Heat/carrier mass use actual LHV or supply/return enthalpy and supplier convention as linked dimensions of one provider. A native secondary mass coefficient is not independent density evidence. Actual item counts need measured net article mass for the same configuration/moisture; Item(s) and item are the same physical count with factor1 but never establish kg. This PCR has no area Q and no assumed rectangle or two-face area. | cp_utility; cp_water; cp_gas; cp_material; cp_packaging_m; cp_packaging_s; cp_asset; cp_logistics; raw_state_records | converted_raw_i | `jrc-ceramic-bref-2007` |
| calc_attribution | all inventory rows | For each exchange native extensive unit construct A_i = Bopen_i + E_i - Bclose_i after real dedicated/subdivided and exchange-specific causal attribution and only justified residual common-item allocation. E_i includes all actual failures start/stop idle cleanup rework treatment and maintenance. Bopen/Bclose are inherited vectors of raw stores unreleased WIP and unassigned non-WIP stores; already-released FG is excluded from Bclose because its manufacture is in Q. Do not sum unlike units or economically scale physical stocks. For service keep raw incremental S_i_c_H for original cohort c and observed H with its own actual attribution; historical FG manufacturing vectors remain attached but are not newly incurred service burdens. Ordinary manufacturing waste breakage samples export or sale do not automatically remove caused manufacturing/treatment burden. Assignment to a real other cohort/function requires justified allocation or burden handover with per-vector evidence once. Distinguish receipts/purchases from already corrected actual consumption; no second stock correction. Actually performed original-cohort services remain assigned under original Qc/H even when FG stays in stock; only genuinely unconsumed and unassigned charge/service inventories carry, without deducting completed service. | converted_raw_i; opening_vectors; closing_vectors; allocation_evidence; cp_route; cp_material; cp_service | A_i; S_i_c_H | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| calc_unit_result | all inventory rows | I_i = A_i / Q for manufacture; J_i_c_H = S_i_c_H / Qc for original-cohort service. This is the only per-reference division and is performed once after conversion and attribution; Qc is the original cohort first-release dry mass and H the actually observed service horizon. Cards and aggregation reference these final results without dividing again. Q=0 or Qc=0 retains raw burdens with no corresponding unit result; no net-delivery denominator. Gross physical FG packaging asset and carrier movements remain complete raw closure ledgers; any diagnostic per-reference display is derived once here on the same Q/Qc and is not new procurement or current LCI burden. Historical burdens travel separately and only real current increments enter the service vector. | A_i; Q; S_i_c_H; Qc; H; cp_release; cp_service | I_i; J_i_c_H | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| calc_physical | physical balances | For manufacturing and service separately: opening physical stocks + actual external receipts + actual physical internal handoffs = closing physical stocks + actual gross physical external outputs + counterpart internal handoffs. Consolidation cancels internal handoffs including first-release Q; use actual wet/dry/phase state bridges. Run total mass and relevant Mg Ca Si Fe Al S B C H O balances independently using actual species/carrier and test/waste evidence. Mineral assays expressed as oxides are not phase/species inventories. Free moisture crystal/hydroxyl water and reaction water are independent; a total mass residual is a diagnostic not a fit for two unknowns. Physically reconcile all actual air constituents without a duplicate air total exchange. Retain unresolved residuals and missing evidence; no assumed closed balance. | cp_material; cp_release; cp_gas; cp_water; cp_waste; cp_asset; cp_packaging_m; cp_packaging_s; cp_service; independent_species_and_state_evidence | gross_mass_and_element_ledgers | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| calc_packaging | each packaging article | For each article/process/cohort pool: opening_empty + opening_attached_WIP + opening_attached_FG + opening_reusable + new_purchases + inbound_supplier_pack + external_returns_received + X_in_material_water = closing_empty + closing_attached_WIP + closing_attached_FG + closing_reusable + with_gross_dispatch_out + external_supplier_owner_returns + waste + X_out_material_water. Pair actual inter-pool transfers and cancel internal reuse; moisture/residue/component changes need measured bridges. Keep all physical terms gross and independent of economic burden shares; article mass never enters bare-brick Q. Only actual new purchase and evidenced incremental repair/service burden enter attribution, without duplicate delivered-supply burden. X_in_material_water and X_out_material_water are actual new/removed repair material water wood and residues only when not already recorded in another flow term. Deduplicate only against other flow terms; retaining actual ingress in closing stock does not cancel that ingress or the measured closing composition/moisture mass. No assumed restoration or fixed moisture content. | cp_packaging_m; cp_packaging_s; article_pool_records; measured_article_state | article_stock_closure | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| calc_assets | each physical asset and installed fluid | Opening equipment/part/fluid stock + actual new/refurbished external receipts + external repair returns = closing stock + actual outward returns/retirements + measured wear/loss/waste; pair internal installation/removal transfers. Separate fluid water and retained contaminants from article dry mass. Actual period service burden is evidenced independently by usage service capacity maintenance and remaining-history records and then attributed; it is not the physical stock movement itself or an invented fixed-life fraction. | cp_asset; physical_asset_records; actual_service_evidence | physical_asset_closure; period_service_vector | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| calc_service_bridge | service | For each original cohort and observed state reconcile opening_FG + actual_released_handoff + actual_external_returns_received + actual_measured_added_material_or_water = closing_FG + gross_G + actual_brick_waste + measured_removed_water_and_separately_named_fragments. Retain the full corresponding historical manufacturing vector ledger and document actual original entries reversed for a return. Return mass is measured rather than equated to its original dispatch; delivery/retest do not create new Q. Service increments S_i_c_H alone feed calc_unit_result with original Qc; internal handoff Q cancels on consolidation. closing_FG includes repair-held substates OR adds disjoint repair-WIP once, without lost or double custody. Actual material/water ingress retained at closing remains; deduplicate against other flow terms, not closing attachment. Apply b_service permission post-work test and acceptance/disposition gates. | cp_service; original_Qc; H; historical_FG_vectors; actual_state_changes; reversal_records | cohort_gross_and_burden_bridge | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all selected identities | Every used UUID requires actual native family form route CAS state geography medium type and reference-property compatibility; supplier/grade gaps remain declared. Wrong-identity candidates do not fill blanks. | full native records exact chains actual supplier/phase evidence and complete consumed descriptions |
| dq_primary | route and terminal | Retain complete source context actual product states neighboring counterexamples and trial limitations; historic tests are not contemporary factory measurements or universal ranges. Full source acquisition and current extraction are distinct provenance events. | UNIDO trial with actual phase/terminal tests; BREF context; actual future plant release records |
| dq_measure | all measured extensive records | Keep calibration raw units exact state timestamps operating coverage uncertainty detection limits and independent conversion evidence; no assumed density item mass recipe yield or zero burden. | calibration trace time/state-matched analyses and raw-to-result audit |
| dq_cohorts | stocks release services | Preserve every native-unit inherited vector and physical lot history; explain raw/WIP deferral closing released FG manufacture service horizon and original Qc; quantify unresolved closure instead of inventing a fit. | stocktake release registry raw vector lineage original return/reversal and service records |
| dq_completeness | all operations and species | Add each actual unlisted input output maintenance part gas phase and packaging article. Preserve failures Q0 idle cleanup treatment and unresolved species; actual missing quantities are incomplete data and no scientific pass is inferred from a mechanical check. | mode/event and full atomic exchange register physical/element diagnostics provider and source coverage |
| dq_allocation | multifunctionality | Document study framework dedication/subdivision each determining physical cause and only genuine residual common-item market values with actual gate/state/time and sensitivity; no fixed shares or automatic credits. | ILCD allocation rationale exchange-level evidence same-state market records and sensitivity |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_core | reference product | Require a proper query member and full public direct native record for one physically compatible manufactured Product family plus the exact reference-property/unit-group/unit chain. The selected generic fired-refractory-brick family is narrowed by the complete card context. Wrong mineral powder unfired ware siliceous-earth insulation crucible or incompatible native route cannot fill core identity. A finite check does not approve applicability or science. | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| v_reference | reference and release | Reference amount is1kg dry bare first-release brick; one explicit finished_brick row links the functional unit. Verify unique first-release IDs and actual chemistry phase grade geometry defect/porosity mechanical/thermal criteria and final cooling/finishing state. Q includes already-released closing FG once; destructive tests rejects delivery and retest do not add Q. | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| v_units | all inventories | Use the native extensive property for each row; kg is not a requirement for MJ m3 or t*km. Raw records precede state/rate conversion and real attribution; exactly one calculation rule produces A_i/Q or S_i_c_H/Qc once. Cards and aggregation only reference that result. Q0 retains actual burdens and produces no per-unit result. Unsupported/unknown conversions remain explicit and cannot be claimed passing. | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| v_physical | mass element species and heat | Independently reconcile real gross mass and relevant elements using inlet/outlet water air species residual carbonate sulfate/hydrate state actual solids liquid wastes inventories and external carrier returns. Phase/spatial/media evidence is required for each species; total indicators cannot substitute. Do not fit multiple unknowns from one mass residual or copy a water density to oil solution or gas. State/enthalpy and supplier convention must support any purchased heat. | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007` |
| v_pools | manufacture service packaging and assets | Verify every exchange inherited raw/WIP/unassigned-store vector; do not subtract closing released FG manufacturing burden. Service records bind original Qc and H plus historical FG vectors gross G/R actual moisture and fragment changes and documented original entry reversals. For each packaging article and asset/installed-fluid pool verify complete gross receipts issues returns stocks and waste; internal transfers cancel on consolidation. | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| v_evidence | coverage and uncertainty | Require all qualifier elements full card descriptions collection fields source_ids and source records in the consumed projection. Verify actual provider/route/form/CAS/geography/media/type and all native property restrictions before selecting UUIDs. A blank auxiliary UUID or future factory quantity is an ordinary collection gap rather than automatic draft; a real core terminal/identity/method gap is a hold. Zero below detection absent unmeasured and unresolved species remain different. Engineering status neither approves science translation accepted mapping nor publication. | `unido-magnesite-brick-trials-1986`; `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual compatible fired periclase-brick supply in a downstream lining construction or industrial-equipment model; separately declared observed services may be attached with original Qc/H |
| allowed_use | Use only matching declared chemistry phase dense bare fired state route site/time/provider and native unit; disclose complete measured inventory quality uncertainty and service horizon |
| excluded_use | No general coverage claim for all refractory goods; no unfired castable diatomite crucible carbon-bonded chromite/spinel/doloma proxy; no fixed lifetime performance guarantee industry numeric default automatic credit or net-delivery denominator |
| required_metadata | actual site period region provider and starting supply state; natural magnesite derived dead-burned periclase aggregate grade assay phase and minor calcium-silicate chemistry; whole magnesium sulfate aqueous formulation or actual in-house salt hydrate and solvent route; coarse/fine grading and pressing deaeration drying ceramic firing cooling and finishing configuration; dense bare uncoated non-carbon-bonded non-chromite constructional brick geometry and measured net dry mass; actual final defect dimensional phase porosity mechanical and thermal acceptance tests; unique first-release identifiers Q including already-released closing FG and unreleased WIP distinction; opening/closing raw WIP and unassigned-store per-exchange inherited burden vectors; failed zero-output trial start/stop idle cleanup rework and abatement operation records; original service cohort Qc observed horizon H and actual FG gross dispatch return and state-change bridge; each packaging empty attached-WIP attached-FG reusable pool gross receipts purchases returns departures and wastes; equipment mould lining setter and installed-fluid physical stocks versus current service burden; actual species CAS phase origin medium native-property restrictions and independent mass/element evidence; carrier mass energy supply/return enthalpy supplier water convention and actual conversion evidence; unresolved identities quantities providers reaction fates uncertainty and coverage limits |
| required_quality_disclosure | actual primary measurements data/provider completeness all operating modes raw/WIP/FG vectors species/state evidence allocation rationale native restrictions and all unresolved fields; engineering qualification is distinct from scientific/translation review |
| update_trigger | changed aggregate origin chemistry binder supplied state hydrate forming/firing/finishing route terminal specification fuel/utility/provider native reference versions emissions control stocks cohort service horizon or evidence revealing an identity/method contradiction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unido-magnesite-brick-trials-1986 | official_guidance | UNIDO / Research Institute Magnohrom. Assistance in Laboratory Scale Investigation on Magnesite Ore and Magnesite Bricks — Zimbabwe Final Report UC/ZIM/85/199; 30 June1986; https://downloads.unido.org/ot/48/13/4813041/15001-20000_15961.pdf | Complete primary trial report; chapterVI printed pp58–76 establishes natural DBM-A to M-A aqueous sulfate-bound pressed dried industrially fired brick chemistry physical tests and periclase/calcium-silicate phase evidence. Printed p59 image1720degC overrides erroneous existing text layer1120. M-BF/M-BS and chapterVII chromium routes are distinct counterexamples. Not a universal recipe/dose/energy range or allocation rule. |
| jrc-ceramic-bref-2007 | official_guidance | European Commission JRC. Reference Document on Best Available Techniques in the Ceramic Manufacturing Industry; August2007; sections2.3.3.1–2.3.3.8 and general processing/finishing context; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | Raw preparation shaping drying ceramic firing finishing sorting packaging protection industrial utility/waste/emission candidates and route exclusions. Fig2.16 is chromium-bearing; tables2.9–2.12 are case data rather than defaults; carbon-bonded tempering/pitch impregnation does not establish this fired periclase route. Foreground protocols specify future real measurement; no copied factory values or allocation policy. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC. ILCD Handbook — General guide for Life Cycle Assessment — Detailed guidance; first edition2010; chapter7.9 especially7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality only where allocation is justified: dedicated and physical/virtual subdivision then exchange-specific determining physical causality then only genuinely residual common-process items using representative contemporaneous market value at actual process gate and technical state. Supports explicit service/cohort responsibility and sensitivity; does not establish industrial materials firing recipes or scientific approval. |
