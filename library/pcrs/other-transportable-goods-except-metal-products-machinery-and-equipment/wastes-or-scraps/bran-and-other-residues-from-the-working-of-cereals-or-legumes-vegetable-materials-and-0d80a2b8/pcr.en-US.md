---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.bran-and-other-residues-from-the-working-of-cereals-or-legumes-vegetable-materials-and-0d80a2b8
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unpelleted feed-grade wheat bran from dry roller milling

## 1. Scope and Applicability

This method covers a narrower single feed material: unpelleted, unmixed and unfermented wheat bran from dry roller flour milling. The primary industrial route is separated raw bran through actual finer rolls/bran finishing, necessary screening or foreign-matter removal, bran bins, weighing, sampling and first feed-grade quality release. Bran then undergoes actual bulk loadout or bag supply and custody services. Modern Mills documents the separate flour/bran/feed sequence and its bulk/bag bran terminal; the industry sources explain roller-mill separation and contrasting wholemeal streams. This is a transparent technical synthesis, not a same-SKU or same-factory quantitative inventory. No fixed yield, moisture, particle size, composition, density, power, market price, bag mass or animal-nutrition function is supplied.

The foreground starts at the measured separated-raw-bran handoff before finishing, with complete upstream wheat supply, cleaning, conditioning and joint milling carried once through a required supplier physical/burden interface. It does not treat the flour mill as a dedicated intentional bran-only operation. The output gate is first feed-grade quality release, not net sales; subsequent actual storage, packing and dispatch remain in original-cohort service accounts. Exclude edible retail bran, whole grain, compound feed, wet starch residues, brewing/distilling or sugar residues, fermented material and pelleting. Source identities: modern-mills-2023; nzfma-milling; ukfm-milling; un-cpc3-2025; kahl-bran-pelleting.

Engelke independently documents flour-sieved wheat bran sold loose for feed, while also mentioning food use; only the declared feed lot is eligible here. Cefetra identifies dry-milling bran as a feed material and distinguishes meal from pellets. Its example composition values are explicitly noncontractual and are not PCR ranges. These sources do not identify the same factory or SKU as Modern Mills. Source identities: engelke-feed-bran; cefetra-wheat-bran-2025.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.bran-and-other-residues-from-the-working-of-cereals-or-legumes-vegetable-materials-and-0d80a2b8 |
| classification_refs | CPC 3.0:39120, loose feed wheat bran under the maintained narrower classification decision |
| covered_products | One declared wheat-species/lot feed-grade bran from dry roller flour milling before pelleting or formulation |
| excluded_products | Edible retail bran; whole grain; compound feed; starch wet residue; brewing/distilling and sugar residues; fermentation; pellets; other botanical residues |
| representative_product | Unpelleted feed-grade wheat bran at first batch release |
| production_route | Required upstream joint dry roller milling handoff; actual bran finishing and screening; bins and quality release; original-cohort bulk or bag supply services |
| market_state | Unmixed unfermented unpelleted bran; net as-released wet mass; measured dry matter and feed quality; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one physical feed material for further animal-feed manufacture or feeding under a declared feed specification; no nutritional equivalence claim |
| How much | 1 kg net wheat bran at release, including its measured moisture and excluding packaging |
| How well | Actual lot meets declared feed-grade release criteria with measured moisture/dry matter and particle-size/foreign-matter evidence |
| How long or cycle | One first-release cohort; declared original-cohort services observed through H; no animal lifetime or nutrition duration |
| reference_flow_link | released_bran |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wheat bran `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual wheat botanical species and grain lot; dry roller flour-milling origin and precursor handoff; unpelleted physical form; unmixed and unfermented state; actual feed-grade release criteria and destination; unique first-release lot and timestamp; net as-released wet mass and packaging tare; independently measured moisture fraction and wet basis; independent dry-matter observation and sampling method; particle-size distribution and sampling method; foreign matter and contamination result; finishing and screening actually performed; bulk or bag supply configuration; site geography and provider boundary; upstream joint milling outputs and original cohort; exchange-specific inherited burden vectors; upstream and foreground allocation justification; opening and closing raw WIP and FG stocks; service observation H and original cohort Qc; real waste recipients and emission media; native generic wheat-bran identity and independently verified feed state; ordinary UUID and provider gaps |

The historical public ILCD Product flow identifies Wheat bran / 麦麸 as the outer wheat-kernel fraction removed during milling. Its classification is Materials production / Food and renewable raw materials; it specifies neither CPC 01112 nor feed-grade or plant-production-mix status. Nutrition prose establishes no animal-performance equivalence or fixed composition. The reference property at index 0 is Mass with meanValue 1, linked through the declared mass unit group to reference kg. This generic identity alone does not prove a particular lot is unpelleted, unmixed, unfermented or feed-grade. Independently verify those PCR qualifiers, species, moisture, particle size, contamination, provider and release gate. Do not bind pre-release intermediates, flour, intact grain, starch residue, distillers grains, compound feed or wood pellets to the released reference product. Historical identity evidence does not establish current platform availability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net as-released moist product mass for the 1 kg reference flow. Weigh unique first releases through cp_release; include accepted closing FG once. Keep measured water/dry matter as a non-additive bridge and do not replace Q with dry mass, dispatch mass or price. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Measured separated wheat-bran fraction with adhering endosperm at the actual sifter-to-finisher handoff; not finished purchased feed bran for repacking |
| starting_condition_role | received_intermediate |
| product_classification_scope | CPC 3.0:39120; narrower |
| recursive_input_rule | An externally received same-category bran fraction is recorded once at its true stage with linked upstream grain/joint-mill burden and complete physical handoff; no repeated full milling and no zero-burden residue assumption |
| upstream_dataset_requirement | Supplier grain supply and transport plus cleaning conditioning joint milling and separation inventory; full coproduct/waste balance; exact inherited vector and original denominator; reviewed applicable allocation reasoning |
| disclosure | Wheat identity; actual source stage; all Q and Qc gates; native restrictions; stocks/history; actual equipment and services; all ordinary gaps and true dataset holds |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_handoff | raw_bran_fraction; bran_finishing | Begin at the physically documented separated raw-bran handoff before finishing. Include actual finer rolls/bran finisher, necessary screens or contaminant removal, bins, weighing, sampling and first feed release. Carry wheat supply, cleaning, tempering, all actual joint milling and separation upstream once with a reconciled mass and burden handoff. A mere finished-product purchase and repacking dataset does not meet this route. | modern-mills-2023; nzfma-milling |
| b_upstream | cp_upstream | Require the supplier whole-mill physical gate: opening grain/WIP plus actual received wheat and water and real additional materials equals closing grain/WIP plus flour, separated bran, any actual germ/pollard/semolina, screenings, returns, waste and measured moisture/species exchanges. Distinguish mutually exclusive streams and internal recycles. Retain actual farm/grain-supply and transport burdens and original upstream cohort denominator; the bran fraction cannot arrive burden-free because it is cheap or called waste. | modern-mills-2023; ukfm-milling; ilcd-2010-allocation |
| b_q | released_bran; fg_service | Q is the measured net moist mass of unique newly first-released feed-grade bran lots. Accepted closing FG is already in Q and is not added again as production output. Trace all subsequent storage, packing, handling, dispatch, retesting, returns and real rework to original cohort Qc in a separate service ledger through H. At the combined gate cancel the internal Q transfer. | modern-mills-2023 |
| b_actual | all processes | Retain every failed batch, zero-output event, startup, shutdown, idle interval, trial, cleanup and actual rejected or unauthorized rework. An eligibility decision never erases physical flows. Before issuing a dataset add each actual omitted chemical formulation, energy carrier, fuel, material, replacement, package, waste stream and real emission species as an individual exchange; never hide them in zero or an other bundle. | modern-mills-2023 |
| b_physics | all physical gates | Reconcile gross physical wet mass separately from dry matter, relevant elements and actual species. Whole moist bran is the primary mass account; moisture, nutrient assays and solids are non-additive bridges. Use independent observations for moisture uptake and release, contaminants and reaction/free/phase/structural water where relevant. Do not fit two unknowns to one residual. COD/TOC/total nitrogen and total dust do not establish one molecular mass. | modern-mills-2023; nzfma-milling |
| b_utilities | actual utility extensions | Do not assume every mill has a boiler, dryer, pelletizer, pneumatic transport or gaseous reaction. Where real purchased heat or steam exists, retain measured MJ and actual carrier mass, pressure/temperature, enthalpy and supply/return convention. Record real external condensate or heat-transfer-water return as a separate Product return. Use one principal energy account with a non-additive carrier bridge; do not invent boiler fuel or a nonexistent return. | modern-mills-2023; kahl-bran-pelleting |
| b_package | packaging_pool | For every actual package separately, reconcile opening empty plus attached WIP/FG plus reusable stock plus purchases plus external returns received against all closing stocks plus packages leaving with gross shipments plus external returns sent plus waste. Internal reuse cancels and does not create product Q, another purchase or an automatic coproduct. Bag material and closing method are verified site facts, not primary-source defaults. | modern-mills-2023 |
| b_feed_state | released_bran | Confirm a loose or meal unpelleted feed-material lot against its actual receiving-party specification and release test results. Food use mentioned by a mill is not proof of feed suitability for every lot. Do not transfer Cefetra example composition values, listed legal references or disposal advice into universal PCR limits or actual waste destinations. | engelke-feed-bran; cefetra-wheat-bran-2025 |
| b_scope | all processes | This is a narrower unpelleted dry wheat-bran method within CPC39120, not all feed residues. Exclude edible retail bran, whole grain, compound recipes, wet starch residues39130, sugar residues39141/39149, cocoa/coffee waste39150, brewing/distilling residues39160, fermented bran and wood pellets. Pelleting is an additional evidenced route, not a harmless change of package. Classification does not decide LCA Product/Waste status. | un-cpc3-2025; modern-mills-2023; kahl-bran-pelleting |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bran_finishing | Raw-bran handoff through finishing and first feed release | required | Actual dry unpelleted route with required upstream handoff | foreground | per 1 kg reference flow |
| fg_service | Original-cohort storage and bulk/bag supply services | conditional | Every actual service including held FG and returns | foreground | per 1 kg reference flow |
| packaging_pool | Individual packaging custody | conditional | Each verified actual packaging article | foreground | per 1 kg reference flow |

Each card is one atomic exchange. Conditional rows mean actual presence must be established, not a zero default. Unlisted real flows must be added individually. The attributional inventory and gross physical ledger are separate non-additive views; supplier audits keep their original cohort denominator. All cards use the single section 8 normalization result, while collection preserves raw quantities.

### Process: Bran finishing and release (`bran_finishing`)

#### Inputs

##### Product flows

###### Received separated wheat-bran fraction (`raw_bran_fraction`)

One whole moist physical intermediate at the sifter-to-finisher handoff, not purchased finished bran ready only for packing. Retain its entire supplied state once; assays of water, protein, starch, fibre and minerals are non-additive subledgers. Link the actual wheat supply, grain cleaning, conditioning and joint roller milling/sifting inventory and its exchange-specific attributed burden once. This intermediate has no verified UUID binding; never borrow the finished feed-grade UUID before feed status and stage compatibility are established. Independently weigh this stream and retain upstream whole-mill coproduct balances and original upstream cohort denominator.

- Selected flow: Separated wheat-bran fraction with adhering endosperm before bran finishing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_upstream`
- Sources: `modern-mills-2023`; `nzfma-milling`; `ilcd-2010-allocation`

###### Finisher and screening electricity (`finisher_electricity`)

Meter actual finisher rolls, sifters, conveyors, aspiration and bin equipment that operate, including idle, failed, start/stop and cleanup loads. Declare supply voltage, grid/geography/provider and actual electrical boundary; an own compressor is included here only for its real power and not again as a purchased compressed-air service. No machinery nameplate power or generic milling intensity is activity data.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `modern-mills-2023`

###### Externally supplied compressed air (`external_compressed_air`)

Conditional on actual external air supply for the finishing boundary. Record measured mass or an independently verified density and matching gas state for metered volume. Preserve pressure, temperature, composition, provider and supply convention; an integrated volume is not multiplied by time. Internal air generation and transfer cancel as appropriate and cannot create a second purchased input.

- Selected flow: Compressed air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `modern-mills-2023`

###### Actual cleaning water (`cleaning_water`)

Conditional actual wet-cleaning or sanitation water only. Water added in upstream wheat conditioning is already inside the intermediate and upstream supply account and is not bought again here. Record a genuine new cleaning or repair-water addition as F even when no product is released; water is not an adjustment residual.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `modern-mills-2023`

###### Separately purchased mineral lubricant (`mineral_lubricant`)

Conditional on this actual formulated lubricant being separately supplied for the finishing equipment. Purchase the whole formulation once; base oil, additives and assay constituents are a non-additive composition bridge. Declare supplier, grade, contact control, retained stock, leakage and drained destination. A different actual lubricant requires its own specific card.

- Selected flow: Mineral lubricating oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `modern-mills-2023`

###### Replacement stainless-steel screen (`replacement_screen`)

Conditional separately supplied replacement screen for the actual finisher/sifter. Record complete supplied screen mass, grade, mesh and fittings boundary; do not add embedded alloy elements as purchases. Retain every real repair replacement and removed part even for failed or unauthorized work. Do not impose this material on equipment using a different screen.

- Selected flow: Stainless-steel screen mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `modern-mills-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First feed-grade release (`released_bran`)

One kg net as-released moist bran after actual finishing, necessary screening/foreign-matter removal, bin custody, weighing and batch feed-quality release. Q is the sum of unique newly released lot net masses and already includes accepted closing FG. Packaging is excluded from net product mass. The historical public ILCD Product flow identifies Wheat bran / 麦麸 as the outer wheat-kernel fraction removed during milling. Its classification is Materials production / Food and renewable raw materials; it specifies neither CPC 01112 nor feed-grade or plant-production-mix status. Nutrition prose establishes no animal-performance equivalence or fixed composition. The reference property at index 0 is Mass with meanValue 1, linked through the declared mass unit group to reference kg. This generic identity alone does not prove a particular lot is unpelleted, unmixed, unfermented or feed-grade. Independently verify those PCR qualifiers, species, moisture, particle size, contamination, provider and release gate. Do not bind pre-release intermediates, flour, intact grain, starch residue, distillers grains, compound feed or wood pellets to the released reference product. Historical identity evidence does not establish current platform availability.

- Selected flow: Wheat bran `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_release`
- Sources: `modern-mills-2023`; `un-cpc3-2025`; `ukfm-milling`

###### Recovered wheat endosperm flour (`recovered_flour`)

Record only an actual separately recoverable usable Product output from the finisher, with recipient, wet mass, quality and moisture. Weigh it independently rather than applying a fixed flour/bran split. Keep its gross physical quantity in the joint gate and its own burden assignment; it is not bran Q and receives no assumed feed-substitution credit. If truly discarded, record the actual waste route instead and do not duplicate this output.

- Selected flow: Wheat endosperm flour recovered by bran finishing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_products`
- Sources: `modern-mills-2023`; `ilcd-2010-allocation`

##### Waste flows

###### Discarded dry bran sweepings (`discarded_sweepings`)

One actual collected waste stream from failed batches, foreign-matter removal or floor cleanup, with measured whole wet mass and contamination. Do not assign Product status merely because another bran batch is sold as feed. Retain one treatment recipient and an origin-W partition; the whole collected waste and its measured constituent partitions must not be added together.

- Selected flow: Dry discarded wheat-bran sweepings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `modern-mills-2023`

###### Discarded captured bran dust (`captured_bran_dust`)

Conditional actual segregated captured dust dispatched as waste. Weigh at the collector and reconcile capture, internal recovery, external Product recovery and disposal as exclusive destinations. A recovered usable fraction needs a separate actual Product output; it is neither a negative dust emission nor automatically a saleable coproduct.

- Selected flow: Captured wheat-bran dust sent for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `modern-mills-2023`

###### Actual cleaning effluent (`cleaning_effluent`)

Conditional whole cleaning effluent with real water, suspended-solids and destination evidence. Retain measured gross discharge and one actual treatment provider. COD, total nitrogen, TOC and suspended solids are indicators, not named molecular species; separately measured dissolved or gaseous species require their own cards and a non-additive whole-effluent bridge.

- Selected flow: Wheat-bran equipment cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `modern-mills-2023`

###### Drained lubricant waste (`drained_oil`)

Conditional actual drained oil from the separately recorded formulation. Preserve whole waste mass, water/solid contamination, recipient and inherited event history; actual leakage to an environmental medium is a different specific exchange. Neither drain volume nor density is assumed from fresh water or fresh oil.

- Selected flow: Used mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `modern-mills-2023`

###### Removed stainless-steel screen (`removed_screen`)

Conditional actual removed screen with net mass, grade/contamination and destination. Keep it distinct from new replacement-screen input and actual wear particles in product, captured waste or air. No automatic recycling credit and no deletion of a real replacement when the repair failed.

- Selected flow: Discarded stainless-steel screen mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `modern-mills-2023`

##### Elementary flows

###### Actual uncaptured bran particulate to air (`airborne_bran_dust`)

Record actual source/medium-specific particulate mass by independent sampling or supported emission measurement; do not turn equipment capacity or the full captured-dust mass into an emission. Whole dust and PM size fractions are alternative non-additive views. This physical particulate mixture is not pure carbon, starch, protein or a single molecular emission. Unmeasured is unknown rather than zero.

- Selected flow: Wheat-bran particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `modern-mills-2023`

###### Actual water-vapour exchange (`water_vapour`)

Conditional actual moisture release, with independently observed intake/output moisture or vapor measurement and state. Keep gross release and actual uptake distinct; neither reaction water nor chemical drying is implied by dry mechanical finishing. Do not solve two unknown water quantities from one mass residual or convert total dust to water.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `modern-mills-2023`

### Process: Original-cohort finished-goods services (`fg_service`)

#### Inputs

##### Product flows

###### Original released bran received into custody (`released_bran_to_custody`)

Track internal Q, opening released FG and actual returned bran by their original lot/cohort Qc. This is physical custody of an already burdened product, not another purchase or new production; match and cancel the internal manufacturing Q at the combined gate. External returns retain the original delivery reversal and any real new service. The historical public ILCD Product flow identifies Wheat bran / 麦麸 as the outer wheat-kernel fraction removed during milling. Its classification is Materials production / Food and renewable raw materials; it specifies neither CPC 01112 nor feed-grade or plant-production-mix status. Nutrition prose establishes no animal-performance equivalence or fixed composition. The reference property at index 0 is Mass with meanValue 1, linked through the declared mass unit group to reference kg. This generic identity alone does not prove a particular lot is unpelleted, unmixed, unfermented or feed-grade. Independently verify those PCR qualifiers, species, moisture, particle size, contamination, provider and release gate. Do not bind pre-release intermediates, flour, intact grain, starch residue, distillers grains, compound feed or wood pellets to the released reference product. Historical identity evidence does not establish current platform availability.

- Selected flow: Wheat bran `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `modern-mills-2023`

###### Custody and loadout electricity (`custody_electricity`)

Measure actual bin storage, bagging/loadout, handling, cleaning, failed dispatch and rework service electricity through declared H. Assign actual new events to the original released cohort Qc rather than net sales. H defines observation coverage and is not a second divisor. Do not charge the same meter interval again to finishing.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `modern-mills-2023`

###### New custody cleaning or rework water (`service_water`)

Conditional real water added during post-release cleaning or rework. Treat it as F with mass/state and resulting destinations, never as X removing a duplicate of earlier conditioning water. Any treatment that changes the bran route or feed condition requires reassessment, while all actually performed work remains in the factual ledger.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `modern-mills-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross physical dispatch of original bran (`gross_bran_dispatch`)

Measure actual gross dispatched product net of its separate packaging for each original cohort. Dispatch, retesting and return/redelivery create no new Q. Keep opening/closing released FG, external returns received/sent, sample withdrawals, losses and historical burden vectors in the service balance; do not replace gross physical shipments with net invoiced sales. The historical public ILCD Product flow identifies Wheat bran / 麦麸 as the outer wheat-kernel fraction removed during milling. Its classification is Materials production / Food and renewable raw materials; it specifies neither CPC 01112 nor feed-grade or plant-production-mix status. Nutrition prose establishes no animal-performance equivalence or fixed composition. The reference property at index 0 is Mass with meanValue 1, linked through the declared mass unit group to reference kg. This generic identity alone does not prove a particular lot is unpelleted, unmixed, unfermented or feed-grade. Independently verify those PCR qualifiers, species, moisture, particle size, contamination, provider and release gate. Do not bind pre-release intermediates, flour, intact grain, starch residue, distillers grains, compound feed or wood pellets to the released reference product. Historical identity evidence does not establish current platform availability.

- Selected flow: Wheat bran `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `modern-mills-2023`

##### Waste flows

###### Discarded bran from custody (`service_discarded_bran`)

Record each real spoilage, failed handling, returned-batch disposal or sample disposal, with original cohort, measured mass, moisture, contamination and one actual recipient. Keep gross waste even when old FG bears historical burdens or current Q is zero. This stream is exclusive of finishing sweepings and actual Product dispatch.

- Selected flow: Discarded wheat bran from finished-goods custody
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `modern-mills-2023`

###### Custody cleaning effluent (`service_effluent`)

Conditional actual effluent from the separately recorded new service water, with measured whole stream, suspended material and recipient. Report actual molecular species or treatment services at their true boundary without adding them twice to the whole stream or pretending COD or total nitrogen is one substance.

- Selected flow: Wheat-bran storage and loadout cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `modern-mills-2023`

##### Elementary flows

###### Actual loadout dust to air (`service_dust`)

Conditional separately measured storage/bagging/bulk-loadout particulate emission for original cohort Qc. Keep its source and receiving air compartment distinct from finishing dust and captured waste. Add any actual chemical species separately; none is inferred from bulk bran composition or a total-pollutant indicator.

- Selected flow: Wheat-bran particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `modern-mills-2023`

### Process: Packaging article pool (`packaging_pool`)

#### Inputs

##### Product flows

###### Purchased Woven polypropylene bran sack (`pp_sack_purchase`)

Only actual newly purchased external article mass enters purchase burden; opening stocks and internal reuse are not purchases. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

###### External return received: Woven polypropylene bran sack (`pp_sack_return_in`)

Track real external empty-article returns with original article identity and attached/reusable stock; internal reuse cancels. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

###### Purchased Polyester sack-closing thread (`sewing_thread_purchase`)

Only actual newly purchased external article mass enters purchase burden; opening stocks and internal reuse are not purchases. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

###### External return received: Polyester sack-closing thread (`sewing_thread_return_in`)

Track real external empty-article returns with original article identity and attached/reusable stock; internal reuse cancels. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross-shipment outflow: Woven polypropylene bran sack (`pp_sack_shipment`)

Record this article leaving with gross physical shipments separately from net bran mass and net invoiced sales; retained closing-FG packaging remains stock. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

###### External return sent: Woven polypropylene bran sack (`pp_sack_return_out`)

Track actual separate external article returns; do not repeat the same article already counted leaving with a gross shipment. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

###### Gross-shipment outflow: Polyester sack-closing thread (`sewing_thread_shipment`)

Record this article leaving with gross physical shipments separately from net bran mass and net invoiced sales; retained closing-FG packaging remains stock. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

###### External return sent: Polyester sack-closing thread (`sewing_thread_return_out`)

Track actual separate external article returns; do not repeat the same article already counted leaving with a gross shipment. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

##### Waste flows

###### Discarded Woven polypropylene bran sack (`pp_sack_waste`)

One actual packaging-waste stream with mass and recipient; internal reuse is neither waste nor a coproduct or credit. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Discarded Woven polypropylene sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

###### Discarded Polyester sack-closing thread (`sewing_thread_waste`)

One actual packaging-waste stream with mass and recipient; internal reuse is neither waste nor a coproduct or credit. Conditional on this exact packaging article actually being used and its composition verified by the supplier. The primary source proves bags exist, not that every bag is polypropylene or sewn with polyester. If another bag, liner, label, closure, pallet or wrapping is actually used, add each concrete supplied article separately before issuing a dataset. Use measured mass or a verified same-specification piece/length bridge; no default bag mass.

- Selected flow: Discarded Polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use the single section 8 normalization result for this atomic exchange; preserve raw quantity and make no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `modern-mills-2023`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_scope | attributional studies requiring allocation | Use this hierarchy only when attributional modelling actually requires allocation. Independently assign dedicated bran collection/finishing/packing operations and physically or virtually subdivide the joint mill and residual finisher wherever evidence permits. Upstream supplier allocation is inspected and carried once, not silently repeated or accepted without its gate and assumptions. | ilcd-2010-allocation |
| a_causality | each remaining exchange | For each non-functional exchange separately determine whether a physical causal relationship actually determines its quantity for a co-function. Document physical embodiment, equipment function, measured material/state relation and evidence; use distinct causal drivers when reality differs. Bran or flour mass, dry matter, protein, calories or sales value are not freely interchangeable choices and no universal physical ratio is prescribed. | ilcd-2010-allocation |
| a_residual | genuinely unresolved common process flows | Only the actual remainder after subdivision and determining physical causality may use contemporaneous market values of the real coproducts in their actual condition at the common process gate. Match period, geography, currency and gate; remove downstream services from price comparisons. Explain missing or distorted prices and sensitivity. Do not substitute a fixed price, cheap-bran zero burden, generic mass split or automatic physical/economic selector. | ilcd-2010-allocation |
| a_conservation | all coproduct and stock ledgers | Reconcile the complete burden vector across all real coproducts, retained WIP/FG and actual loss/service destinations. Economic assignment changes attributed A, never gross V, Q, waste, water or elemental closure. Internal transfers preserve inherited vectors. Failed/Q0 work and real rework inputs remain; no substitution credit, waste-label exemption or animal-nutrition functional equivalence is supplied by this method. | ilcd-2010-allocation; modern-mills-2023 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | bran_finishing | released_bran | lot weighing and feed release | wheat species; raw lot; finished lot; first-release timestamp; net wet mass; tare; moisture fraction; independent dry matter; particle-size distribution; foreign matter; feed status; closing accepted FG | Weigh net released bran on calibrated equipment and retain representative sampling, moisture method and independent dry-matter/quality observations. Aggregate unique first releases only. Aggregation semantics: retain raw undivided lot masses; section 8 alone normalizes. | kg | each lot and first release | entire declared cohort including held and failed batches | one declared finishing site and wheat supply state | per 1 kg reference flow | calibration; tare; samples; release signature; quality results |
| cp_upstream | bran_finishing | raw_bran_fraction | supplier handoff and stock register | upstream cohort; grain species; received wheat; cleaning and tempering steps; water; joint mill outputs; original Qc; intermediate wet mass; composition bridge; allocation rationale; inherited exchange vector; opening and closing raw/WIP | Independently weigh the actual sifter-to-finisher stream. Obtain supplier joint physical balance, linked wheat supply and transport, original denominator and complete allocation records. Separate physical stock mass from inherited environmental vectors; carry the upstream vector once. Aggregation semantics: retain raw observations and supplier vectors undivided. | kg | each handoff and stock close | whole upstream cohort and foreground cohort with history | upstream whole mill and precise finishing handoff | per 1 kg reference flow | weighbridge; flow diagram; supplier inventory; stock and allocation reconciliation |
| cp_utilities | bran_finishing | individual utility | meter and supply record | meter id; provider; voltage; gas composition; pressure; temperature; density evidence; integrated quantity or actual rate; idle and cleanup time; thermal mass and enthalpy; real returns | Use calibrated differences for actual electricity/water/air or added utility. Keep original kWh or raw mass/volume before conversion; integrate only a true rate once. Independently measure the same-substance same-state density if needed. Heat extensions retain one MJ account and non-additive carrier bridge. Aggregation semantics: raw sums and real allocation drivers are undivided; section 8 normalizes once. | kWh; kg; MJ | each meter interval and real event | all real work including failed Q0 idle and cleanup | exact metered supply and receiving gate | per 1 kg reference flow | calibration; invoices; state and supply convention |
| cp_maintenance | bran_finishing | individual material replacement | material receipt and repair record | article or whole formulation; supplier; grade; mass; part boundary; retained stock; real replacement event; failed repair; removed destination; inherited vector | Weigh each separately supplied material or article, preserve whole-formulation/component inclusions and actual repair chronology. Do not infer alloy quantities or purchase embedded constituents again. Aggregation semantics: retain real raw purchases and stocks undivided. | kg | each receipt repair and inventory close | whole cohort and actual failed work | actual finishing equipment and supplier gate | per 1 kg reference flow | supplier composition; weighing; work orders; waste receipt |
| cp_products | bran_finishing | recovered_flour | coproduct weighing and quality | actual flour lot; net wet mass; moisture; recipient; quality; original common gate; allocation driver; first release; opening and closing stock | Independently weigh the actual recovered flour Product and verify usability and destination. Keep its raw gross physical quantity and full share of inherited/new burdens; no fixed powder split or deduction from bran physical waste. Aggregation semantics: retain undivided coproduct quantities and vectors. | kg | each actual recovery lot | same common process period and stock history | actual finisher recovery gate | per 1 kg reference flow | weighing; quality; recipient and reconciliation |
| cp_waste | bran_finishing | each actual waste stream | waste transfer record | origin-W; whole stream; wet mass; contamination; component partitions; phase; recipient; treatment boundary; opening and closing custody; original cohort | Weigh every actual waste output independently and retain one real recipient/provider per event. Distinguish discarded captured dust from Product recovery and air release. Whole waste or measured origin-W partitions are non-additive alternatives; do not infer molecular mass from pollution indicators. Aggregation semantics: preserve raw gross waste V undivided. | kg | each real waste event | all failure cleanup repair and stock history | actual waste and treatment handoff | per 1 kg reference flow | weighbridge; analysis; recipient receipt |
| cp_species | bran_finishing | individual actual environmental exchange | independent measurement and balance | species or defined particulate mixture; source; CAS where meaningful; phase; receiving medium; mass; concentration; volume or true rate; state; independent moisture data; gross uptake and release | Use actual source-specific sampling with sufficiently independent observations to reconcile mass and species. Retain whole-dust/size-fraction and whole-effluent/species bridges without addition; distinguish free/phase/structural/reaction water only with evidence. Aggregation semantics: retain undivided gross V and original units; no Q division in collection. | kg | each actual discharge or uptake interval | complete actual finishing cohort | actual source and receiving environmental compartment | per 1 kg reference flow | sampling; calibration; independent states and assays |
| cp_fg | fg_service | original-cohort custody and real service | lot custody service and reversal record | original lot Qc; opening and closing FG; original burden vector; internal Q; gross dispatch; external returns; original delivery reversal; actual new water energy and material F; waste; species; H | Trace each real service and physical transfer to original lot Qc including historical opening FG. Weigh actual returns, samples, losses and new inputs; preserve original burden and reversal without manufacturing new product. Actual service effluent/species require independent measurements. Aggregation semantics: retain raw gross events and inherited vectors; section 8 uses original Qc once; H is observation only. | kg; kWh | each transfer service and stock close | declared H and all relevant original cohort history | actual bins storage bagging and loadout gate | per 1 kg reference flow | lot ledger; original release; reverse transactions; service meters |
| cp_packaging | packaging_pool | each actual packaging article | article custody and stock record | article id; supplier composition; verified unit mass; opening empty stock; opening attached WIP/FG; reusable stock; new purchases; external returns received; closing stocks; gross-shipment outflow; external returns sent; waste; internal reuse | Weigh each actual package/closure separately or use a verified same-article count/length bridge. Keep attached and reusable states and each recipient distinct. Internal reuse cancels; no package mass contributes to bran Q. Aggregation semantics: collect the complete raw undivided physical article ledger; section 8 normalizes once. | kg | each receipt shipment return and stock close | cohort production and all service H | actual packaging custody | per 1 kg reference flow | supplier specification; weighing; stock ledger; gross shipment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_total | released_bran | Q = sum(q_lot) for unique first feed-grade releases measured net as-released wet mass. Include accepted closing FG once. Dispatch, reinspection, historical opening FG, returns and redelivery add no new Q. Rejected unreleased material is not Q. | q_lot; unique release registry; cp_release | Q | modern-mills-2023 |
| moisture_bridge | released_bran; raw_bran_fraction; recovered_flour | For an independently measured wet-basis water mass fraction w, dry mass = wet mass times (1-w). Keep independent dry-matter results and sampling uncertainty as a reconciliation check. Whole moist flow is primary; water/nutrient assays are non-additive. No fixed moisture, density or composition is supplied. | wet mass; independent w; independent dry matter; cp_release; cp_upstream | non-additive dry matter bridge | modern-mills-2023; nzfma-milling |
| raw_units | all inventory rows | Convert actual raw observations to each row unit before allocation: electricity kWh to MJ by 3.6; direct weighed mass or matching substance/state density times measured volume. Integrate only an actual rate once; do not multiply an integrated volume by time. A complete purchased formulation enters once and assays remain subledgers. | raw observations; conversion evidence; cp_utilities; cp_species | native raw V_i | modern-mills-2023 |
| upstream_handoff | raw_bran_fraction | Retain supplier raw whole-mill physical events and original upstream denominator Qc. Link the bran-bound inherited exchange vector once after the evidenced allocation hierarchy. Do not repeat wheat cultivation, grain conditioning water or mill power inside finishing, and do not discard any real upstream loss or coproduct burden. Supplier normalized burdens are converted back to the actual received lot vector before foreground accounting. | supplier whole-mill balance; original Qc; received lot mass; supplier burden vector; cp_upstream | received inherited vector and upstream gross audit | ilcd-2010-allocation; modern-mills-2023 |
| physical_manufacture | bran_finishing | Opening raw and WIP mass + actual external F + actual incoming physical transfers + real environmental uptake = closing raw and WIP mass + first-released Q + actual recovered flour + other actual external returns/Product transfers + gross waste + actual elementary releases. Exclude energy units from mass. Retain all whole moist flows and separate relevant dry-matter/element/species balances; internal recycle cancels. | opening and closing raw/WIP; F; transfers; Q; recovered flour; gross waste and species | unallocated manufacturing physical closure | modern-mills-2023; nzfma-milling |
| inherited_vectors | all inventory rows | For each exchange retain opening WIP inherited vector plus actual new converted and attributed events minus closing WIP inherited vector, and reconcile all coproduct and actual destination vectors. Apply subdivision then exchange-specific determining physical causality and only genuine residual common-gate market values. Physical stocks and gross V remain separate. Failed/idle/cleanup/rework and Q0 loads persist; Q0 yields no unit result. | opening inherited vectors; actual new events; closing inherited vectors; allocation evidence | attributable A_i and retained history | ilcd-2010-allocation |
| physical_fg | fg_service | Opening FG + internal Q + actual gross external returned bran + new repair/rework material or water F + real uptake = closing FG + gross physical dispatch + actual separate external returns sent + service waste + service elementary release. Preserve original delivery reversal and per-lot inherited vectors. Retesting does not create mass or first release. | FG stocks; internal Q; gross transfers; new F; service waste and species; cp_fg | unallocated FG physical closure | modern-mills-2023 |
| combined_gate | bran_finishing; fg_service | Add manufacturing and FG physical gates then cancel the identical internal Q and any other matched internal transfer. Accepted closing FG remains on the stock side. Preserve gross waste, water, replacements and species regardless of economic assignment, historical burden ownership or net sales. | manufacturing closure; FG closure; matched internal transfers | combined physical closure | modern-mills-2023 |
| duplicate_guard | all inventory rows | F is an actual new external event. X removes only a proved duplicate representation of that identical event on the same side of the same account. Genuine new repair, cleaning water, energy and replacements are F rather than X. Whole wet material/formulation and constituent assays use one principal account and a non-additive bridge. | event ids; receipt evidence; same-side duplicate proof | deduplicated raw events | ilcd-2010-allocation |
| normalize_once | all inventory rows | For a positive actual cohort denominator, the only normalization is n_i = A_i / Q for the attributed inventory and g_i = V_i / Q for the separate non-additive gross physical view. Original-cohort services use their original Qc in this same operation; original supplier gross audits retain original supplier Qc. Convert units and form genuine allocation/inherited A_i first. Cards and protocol aggregation reuse this result without another division. H is not a divisor; Q0 retains events and yields no unit result. | A_i; V_i; Q; original Qc | n_i; g_i | ilcd-2010-allocation |
| package_balance | packaging_pool | For each article separately: opening empty + opening attached WIP/FG + opening reusable + new purchases + external returns received = all closing stocks + attached gross-shipment outflow + external returns sent + waste. Internal reuse cancels. Packaging never contributes to net bran Q. Keep burden attribution and physical custody non-additive and normalize once by proper original cohort Q/Qc. | article-specific raw stocks and transfers; cp_packaging | individual package closure | modern-mills-2023 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all processes | Lock real wheat species/lot, raw handoff, final feed status, dry roller route and unpelleted unmixed unfermented state. Source technical synthesis is not a claim that the sources describe one SKU or one factory inventory. | supplier records; process map; actual lot quality |
| dq_native | UUID-bearing bran rows | Preserve native names/comments, Product type, ILCD classification and exact property/unit chain. The generic original supplies no feed-grade or site-provider qualification; verify actual lot compatibility independently. No CAS or nutritional equivalence is inferred. Intermediate, waste and packaging UUID gaps remain explicit; do not borrow the finished binding. | historical public native object; linked property and unit objects; actual lot quality evidence |
| dq_measurement | reference lot and physical gates | Independently measured wet mass, moisture/dry matter, size and foreign matter with calibrated sampling/measurement support Q and mass reconciliation. No fixed yield, composition, density, energy, price, ingredient recipe or per-bag mass is prescribed. | scale and sampling calibration; laboratory methods |
| dq_history | all ledgers | Separate physical raw/WIP/FG stocks from per-exchange inherited environmental vectors. Preserve complete upstream handoff, first-release registry, failed Q0 operations, actual services and gross packaging movements by cohort. | raw events; stock/lot ledgers; burden reconciliation |
| dq_gaps | all dataset uses | Unknown activity/provider or an auxiliary UUID gap is not zero and does not automatically invalidate the product method. Actual core product/terminal mismatch, missing upstream joint burdens, unsupported causal allocation or unresolved material balance holds the affected dataset. Disclose measured versus unknown and do not call a draft covered. | gap register; supplier and physical evidence |
| dq_sources | all method evidence | Original manufacturing sources support qualitative process/terminal facts; ILCD supports only the applicable conditional attributional allocation method. Keep source-specific scope and preserve contrary pelleting/compound-feed examples; do not transfer factory observations or noncontractual product composition into default values. | source applicability; independent originals; review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_product | released_bran | Verify feed-grade wheat bran with actual unpelleted dry roller-milling origin and complete finishing-to-release terminal. Exclude food-only retail bran, whole grain, starch wet residue, compound feed, fermentation and pellets. Match the generic Product identity and all independently evidenced required qualifiers to the same real lot. | modern-mills-2023; un-cpc3-2025; kahl-bran-pelleting |
| v_handoff | raw_bran_fraction | Require the real upstream wheat/cleaning/conditioning/joint-milling mass and attributed-burden handoff once. Retain main flour and every real coproduct/waste destination and original upstream denominator. Missing upstream burdens are a genuine core dataset hold, not a zero-burden residue convention. | modern-mills-2023; ilcd-2010-allocation |
| v_q | all processes | The explicit reference link selects released_bran only. First release Q includes accepted closing FG once. Internal custody/dispatch rows never create Q. Preserve historical opening FG burden and original delivery reversals. Q0 prevents a unit result while retaining real events. | modern-mills-2023 |
| v_balance | all physical gates | Verify upstream handoff, manufacturing, FG and combined gross physical gates plus separate packaging-article balances. Cancel internal Q and actual recycles exactly. Independently check dry matter, relevant elements and real species; no economic shrinking of waste/water/physical flows or multiple-unknown residual fitting. | modern-mills-2023; nzfma-milling |
| v_normalize | all inventory rows | Raw collection remains undivided. Native conversion, justified exchange-specific allocation and inherited-vector reconciliation precede the single A/Q operation; cards reuse that result. Gross V/Q is separate and non-additive. Original services/audits use actual original Qc; H is never another divisor. | ilcd-2010-allocation |
| v_atomic | all processes | Every actual supply, whole formulation, individual package, replacement, energy carrier, waste stream and environmental species is atomic and source/medium bound. Unsupported UUIDs stay absent with specific names; generic collections and hidden other/zero flows are rejected. Check every native restriction in typed consumable context. | modern-mills-2023 |
| v_allocation | multifunctional stages | Independently inspect dedicated/subdivided operations, exchange-specific determining physical causality and only real residual common-gate actual-state contemporaneous market value. Reconcile the complete burden vector and disclose sensitivity. Do not award cheap/waste-labelled bran zero burden or displaced feed credit. | ilcd-2010-allocation |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared unpelleted feed-grade wheat bran supply with disclosed upstream and finishing gate |
| allowed_use | Compatible species/lot and feed condition with verified raw handoff and complete burden/physical history |
| excluded_use | Automatic coverage of all CPC39120; food retail or compound feed inventory; animal nutrition equivalence; wet starch/distillery residues; pellet manufacture; zero-burden or substitution defaults |
| required_metadata | All reference qualifiers; raw sifter-to-finisher handoff; upstream joint physical/burden evidence; Q/Qc/H; native restrictions; individual packages and actual waste/species destinations |
| required_quality_disclosure | Actual measurements versus unknown activity; auxiliary/provider gaps; true core holds; allocation and stock assumptions; scientific and translation review status |
| update_trigger | Wheat/route/state change; pelleting fermentation or formulation; changed raw handoff; provider/native changes; actual process extension; Q gate or cohort history change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD. CPC Ver.3.0 Explanatory Notes, 30 June 2025, complete PDF pp102/104/199–200. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39120 and adjacent flour/compound-feed/starch/sugar/brewing classification titles only; no LCA waste or manufacturing assumption |
| modern-mills-2023 | literature | Modern Mills Company. Prospectus dated 31 December 2023; PDF pp129–135, printed76–82; sections4.9.2.3–4.9.3.2.1. https://www.saudiexchange.sa/Resources/IPO/PDF/IPO_ENG_2024-02-12_10-59-00_1.pdf | Primary wheat supply and joint flour-milling sequence; bran finisher/bins and bulk/bag feed-bran terminal; separate downstream feed recipes and pellets as counterexamples; no default quantities or LCA allocation |
| nzfma-milling | extension_guidance | New Zealand Flour Millers Association. Flour Milling Process, undated publisher page and linked process diagram. https://flourinfo.co.nz/learn/flour-milling-process | Cleaning conditioning roller/sifter sequence and distinct bran/germ/flour/pollard outputs; industry explanation only; no universal machine count or quantity |
| ukfm-milling | extension_guidance | UK Flour Millers. The milling process, undated publisher page and linked simplified diagram. https://www.ukflourmillers.org/flour-milling/the-milling-process | Joint separation of endosperm/bran/germ and contrasting reconstituted wholemeal; qualitative process diagram; not a bran packing specification or a watched video |
| kahl-bran-pelleting | literature | AMANDUS KAHL. Bran & husk, undated publisher technical page. https://www.akahl.com/en/industries/by-products-processing/bran-husk/ | Separate added bran-compaction/pelleting route and changed physical form; counterevidence against assuming all bran is supplied as pellets |
| ilcd-2010-allocation | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, sections7.9.2–7.9.3; complete original PDF. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Conditional attributional subdivision/virtual subdivision; exchange-specific determining physical causality; actual residual common-gate market value and burden reconciliation; no fixed ratio or automatic feed credit |
| engelke-feed-bran | literature | Gebr. Engelke. Animal feed, undated mill page. https://www.gebr-engelke.de/en/animal-feed/ | Independent primary example of flour-sieved wheat bran sold loose for animal feed; also mentions food use, so lot-specific feed status is required; no site activity or composition default |
| cefetra-wheat-bran-2025 | literature | Cefetra Ltd. R7-04A Product Data Sheet – Animal Feeds, Wheat Bran, Rev4 effective Aug2025, pp1–2. https://cefetra.co.uk/wp-content/uploads/2025/08/Wheat-Bran-Africa-MSDS-Rev-4-Aug-2025.pdf | Dry-milling feed-material origin; meal/pellet state distinction and bulk supply; explicitly noncontractual example composition not reused; no universal legal, safety or disposal prescription |
