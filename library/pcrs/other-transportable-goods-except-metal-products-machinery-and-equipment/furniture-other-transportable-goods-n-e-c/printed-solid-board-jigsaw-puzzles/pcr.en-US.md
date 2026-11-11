---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.printed-solid-board-jigsaw-puzzles
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Puzzles: complete printed-cardboard jigsaw manufacture

## 1. Scope and Applicability

This method covers the complete flat printed-paper/solid-board jigsaw manufacturing route, not merely packaging purchased finished puzzles. The whole product terminal is an accepted complete set; actual net pieces include retained ink, glue, finish and water once, while every packaging article is separate. The producer report supports this positive construction and route; the independent FAQ warns that nominal piece counts and listed dimensions can differ from actual sets. These are qualitative examples, not one common SKU/factory, recipes or rates. The original CPC category is broader than this supported route. Other puzzle technologies require their own evidence and method assessment within this record. [Sources: `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq`; `un-cpc-3-2025`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.printed-solid-board-jigsaw-puzzles |
| classification_refs | CPC 3.0 38550; narrower product and route boundary |
| covered_products | Complete non-electronic flat printed-paper/solid-cellulosic-board jigsaw puzzle sets manufactured through the stated route. One semantic whole-puzzle record; actual piece complements and constructions must be declared. |
| excluded_products | Loose puzzle parts as final reference; printed board sheets alone; adhesives; packaging; wooden laser-cut puzzles; moulded plastic or 3D puzzles; mechanical/electronic logic toys; books and construction sets. Evidence for this route does not establish methods for every puzzle kind. |
| representative_product | One actual complete flat paper-mounted cardboard jigsaw set with measured net mass and verified complete piece complement; no nominal piece count is a mass conversion. |
| production_route | Actual prepared paper/board and formulations → offset printing and protective finishing/drying → paper-to-board mounting and actual drying/conditioning → format cutting → steel-rule die cutting → separation and actual pre-release bagging/required retail packing plus count/integrity/final packed-line acceptance → complete-set first release → actual later packing changes/storage/handling/dispatch. Purchased finished intermediates replace their upstream operations once and retain complete providers. |
| market_state | New complete first-quality-released sets at actual net moisture; inner bags and boxes remain separately inventoried packaging. No fixed lifetime or service equivalence is inferred from kg. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete flat interlocking image puzzle set for its declared assembling activity |
| How much | 1 kg of net newly first-quality-released complete sets |
| How well | Actual specification for image/registration and finish; interlocking cut and clean edges; complete piece complement; physical integrity and applicable purchaser/manufacturer acceptance. State actual tests and results; no universal thresholds or certification claims. |
| How long or cycle | One defined production cohort through first quality release. Observed later services belong to the original cohort and actual horizon H; unknown future activities remain unknown. No player lifetime is prescribed. |
| reference_flow_link | finished_puzzles |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Puzzles `471d8d3c-43fd-4a44-8044-ca7f36377491` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual product and complete-set specification; Actual accepted piece complement and counting method; Paper and solid-board construction; Ink adhesive varnish and retained constituents; Actual moisture and conditioning state; First-release cohort and measured net Q; Measured net mass of each actual set configuration; Actual print mount dry cut and release route; Make-buy ownership and complete provider boundaries; Separate packaging composition pools and wet stocks; Site production interval and service observation horizon; Utility interfaces voltage media and native units; Acceptance tests permissions and actual dispositions; Waste receiver species and carbon-origin evidence; Opening and closing physical stocks and inherited exchange vectors |

All qualifiers must be declared in the actual data package. A broad native finished-product family does not supply site measurements or replace complete-set acceptance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use Q newly first-quality-released complete net puzzle-set mass measured by cp_output_release; retained constituents and moisture once, packaging separate. Every normalized result refers to 1 kg of that same actual complete product. |
| native_numerator | all inventory rows | Actual native extensive property | Row native unit | Mass/kg constrains the reference denominator and actual mass exchanges only; energy remains MJ/kWh, gas/volume remains actual native volume, and time remains actual time. Physical V and burden A retain separate dimensions and a single final division. |
| unit_conversion | electricity and measured mass/volume | Native extensive property | native | Convert kWh to MJ once with 3.6 MJ/kWh. Volume-to-mass uses independently measured density for that substance and phase/T/P; cumulative volume is already integrated. Count-to-kg requires measured net set mass by actual configuration/conditioning; no fixed count, density, dimensions or secondary-property inference. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared unprinted paper and solid puzzle board with actual formulations at receiving; actual plate/die supplies. Linked upstream papermaking/board manufacture/embossing/chemical production and actual prepress remain required; externally completed printed-mounted sheets are a disclosed alternative handoff. |
| starting_condition_role | Material/unfinished-intermediate handoff; not purchase of complete finished puzzles for mere repacking |
| product_classification_scope | Printed solid-board flat jigsaw route inside CPC 3.0:38550; original classification includes puzzles of all kinds |
| recursive_input_rule | Internal paper/board/part transfers are matched and cancelled in the consolidated foreground; supplied unfinished intermediates carry complete upstream burdens once. Previously finished/returned sets keep original production history and do not generate a recursive purchase or new Q. |
| upstream_dataset_requirement | Actual amount-compatible raw paper/board/embossing, plate imaging/development/rinsing where performed, each formulation, die/part/asset service, packaging, utilities, transport and waste treatment. Supplied whole articles/formulations and constituent bridges must be disjoint or reconciled, never additive overlapping providers. |
| disclosure | Actual make/buy stages and complete receiving/terminal gates; production cohort and service H; Q/wet-mass/stock conventions; every provider basis and native limitation; foreground/backdrop transport/treatment ownership; unresolved identity/measurement/route limits. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | all processes | Include receipt, prepress where performed, printing, actual varnish setting/drying, mounting/drying, format cutting, die making/service, die cutting, separation/counting, complete-set release, cleanup/rework, packaging and observed service. Outsourcing changes ownership, not coverage of the product route. | `ravensburger-puzzle-manufacture-2025` |
| `b_first_release` | finished_puzzles | Define Q as newly first-quality-released complete net sets once, including actual retained constituents and H2O. Exclude packaging and samples destroyed before first acceptance; already accepted later destroyed samples remain in original Q with actual loss/disposition. Already released closing FG is included in Q; never add it as another output or deduct its manufacturing burden as Bclose. Later delivery, reinspection or natural moisture change creates no Q. | `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq` |
| `b_raw_wip` | all inventory rows | Keep opening/closing raw stock, every WIP physical state, and unused/unassigned non-WIP stores with per-exchange inherited vectors. Attributable manufacturing burden includes brought-forward vectors and actual use/work; carry forward only unassigned raw/WIP/store vectors. Ordinary manufacturing rejects, waste, samples, offsite transfer or scrap sales do not qualify as other-function transfers. Only a real distinct cohort/function plus justified allocation/handover permits one vector transfer. Never subtract consumption twice after stock correction. | `ilcd-detailed-2010` |
| `b_zero` | all processes | Retain startup, shutdown, idle, cleaning, sampling, failed zero-output lots, rework and actual treatment. Q=0 retains raw physical and burden ledgers; no unit result or invented zero intensity. | `ilcd-detailed-2010` |
| `b_supply` | all product inputs | Procure a whole supplied preparation/article once. Assay constituents and carrier water are nonadditive children; actual onsite mixing instead lists each purchased material and real mixing energy/loss. External mounted board replaces overlapping upstream paper/board/ink/glue/varnish charges for that quantity; internal handoffs cancel without another purchase or Q. | `ravensburger-puzzle-manufacture-2025` |
| `b_physical` | all physical legs | Every physical leg retains actual gross quantity V in its native extensive unit. Do not scale it by an economic, burden, service, inventory-change or allocation share. The matching burden vector is owned/attributed independently once. One physical mixed Waste outlet remains one atomic Waste exchange with independently measured nonadditive origin subaccounts. | `ilcd-detailed-2010` |
| `b_pack` | pack | Each actual packaging article has separate conditional P/I/ER/S/EO/W cards and a full wet stock balance: opening empty plus WIP-attached plus FG-attached plus reusable stocks + new external P + supplier-included I + external-return-received ER + actual disjoint retained/repair/water increments = closing same stocks + gross filled shipped S + outward empty return EO + whole discarded W + actual disjoint departures. Natural/repair water and added repair matter cross the same gate explicitly. Internal reuse cancels; exclude packages from Q. P/I do not overlap. One gross leg is disclosed once; upstream owner once. | `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010` |
| `b_x` | pack; assets; service | Material/water X_in and X_out remove duplicates only from other actual same-side incoming/outgoing terms already containing that constituent. Never use X to cancel closing stock, the opposite side, or a real retained influx. New repair material/water and full wet closing stock coexist. Whole article plus components require disjoint coverage or a reconciled bridge with internal transfers cancelled. | `ilcd-detailed-2010` |
| `b_service` | service | Observe actual H for each original first-release cohort with original measured Qc. Retain all performed storage/handling/packing/shipping, natural sorption/desorption, returns and postrelease work. Do not deduct performed services because FG remains in closing stock; carry only unused/unassigned service/charge. Future work is unknown. Actual rework requires documented manufacturer/spec permission plus postwork tests/acceptance/disposition for continued qualification; unauthorized, failed or rejected work and its real logistics/loads are still retained with hold/waste state. Never assume damaged pieces recover. Natural humidity exchange is not invented repair. | `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq` |
| `b_water_species` | all processes | Keep full wet physical mass and independently measured H2O plus relevant elemental/actual-species balances. Separate free/carrier/sorbed/condensed/reaction water and actual chemical state; no default reaction or one residual solving two unknowns. COD/VOC/NOx/PM/total-element indicators are not molecule identities. Integrated volumes are not multiplied by duration again; actual rates are integrated over matching intervals, with substance-specific measured density/state for conversion. | `epa-printing-eiip-2002`; `ilcd-detailed-2010` |
| `b_heat_assets` | assets; mount | Keep full physical machines/dies/plates/parts/fluids and new/used/returned/discarded stocks distinct from actual service burdens; no default lifetime or whole machine per kg. Actual heat-carrier Product returns retain gross kg, phase, T/P, enthalpy and supplier water-energy agreement. One thermal provider owns carrier/energy coverage once; never invent steam, condensate, boiler or recovery credit. | `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010` |

### Complete applicability and physical/service accounting context

This method covers the complete flat printed-paper/solid-board jigsaw manufacturing route, not merely packaging purchased finished puzzles. The whole product terminal is an accepted complete set; actual net pieces include retained ink, glue, finish and water once, while every packaging article is separate. The producer report supports this positive construction and route; the independent FAQ warns that nominal piece counts and listed dimensions can differ from actual sets. These are qualitative examples, not one common SKU/factory, recipes or rates. The original CPC category is broader than this supported route. Other puzzle technologies require their own evidence and method assessment within this record. [Sources: `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq`; `un-cpc-3-2025`]

All qualifiers must be declared in the actual data package. A broad native finished-product family does not supply site measurements or replace complete-set acceptance.

Every physical-card amount is a gross leg, not a provider-charge instruction. Raw physical V and environmental burden A are independent accounts. First-release production and later original-cohort services use the same complete-product identity but their own measured cohort denominator. Conditional absence requires actual evidence; unknown is not not_applicable. Additional real exchanges must be explicitly added rather than hidden.

Collection is raw: protocols collect unnormalized original-unit quantities and independently measured stocks/assays. The aggregation_rule column declares the final result target only; it does not divide during collection. Convert original units, reconcile disjoint ownership, assign actual burden vectors, then execute one final quotient for each separate dimension. Cards and aggregation refer to that same quotient, never another division.

The reference binds the complete manufactured Product family Puzzles / 智力玩具 at plant through its actual Mass reference. The complete accepted interlocking printed solid-board set is a positive narrower member; raw paper, solid board, printed mounted sheets, loose pieces and an incoming aggregate of component materials cannot serve as its terminal. The broad native comment includes puzzles of all kinds, but does not establish every construction or technology. Complete current native identity and versioned property/unit records do not provide a factory inventory, safety claim or qualified background producer. Sources: `un-cpc-3-2025`; `ravensburger-puzzle-manufacture-2025`.

Ravensburger reports bagging immediately after die cutting, bag/cut checks and piece-count spot checks, then box manufacture and assembly, sealing labels and a final packed-line check before pallet storage. Preserve that sequence and actual release requirements. No intermediate cutting approval alone is whole-set first acceptance. Actual bagging/retail packing needed before final acceptance and every manufacturing failure remains in the manufacturing account even though removable package mass is excluded from net Q. Later genuine packing changes/storage/handling/dispatch are original-cohort service increments. The process called pack can cover actual pre-release and later events but must separate their timestamps, physical stocks and burden ownership; listing a process after release is not permission to relocate performed pre-release work. Sources: `ravensburger-puzzle-manufacture-2025`.

Lock Q (original Q0) as the positive sum of unique complete-set first-acceptance net masses at one fixed actual gate and measured state. Preserve every original event mass/date and a nonoverlapping bridge of remaining net deliveries, all actual on-site accepted states including holds/accepted samples/repair WIP, irreversible material and water loss, and other terminal dispositions on the original acceptance basis. Already accepted later destroyed samples remain in Q0; never-accepted destroyed specimens are excluded. Returns/retests/rework and later moisture changes create no new Q. Do not restore lost water/material into surviving pieces and add the same loss again. Q0 is an event account rather than another external physical output; Q=0 or unknown basis keeps raw totals without a unit result.

Keep three distinct ledgers for each actual shared outlet or asset: one full physical receiver transfer Qt and complete actual provider quantity recorded once; independently known component/physical-cohort provenance; and separately evidenced nonoverlapping environmental/treatment-service vectors attributed to each original served cohort in compatible provider units. Qt/Qanalysis is only physical disclosure using a declared positive observation basis. Linked model demand is actual attributable A/original Q0, never the full shared Qt recharged to every cohort and never physical Qt reduced by a service share. Original manufacturing/WIP/provider histories stay disjoint; provider aggregate inventories and their already included expanded components are alternative reconciled views, not additive loads. Unknown service shares remain unresolved.

One actual contaminated bag, pail, can, cloth or filter discard is the full whole wet receiver stream including substrate, retained ink/glue/cleaner and water once. Dry substrate and retained contents are nested nonadditive subledgers. No attached material/water export or extra treatment demand is fabricated unless genuinely separated before the boundary with actual matched outlets. A measured independent dust/trim/ink/effluent outlet stays separate; mixed-only origins are children of one real mixed receiver stream. Actual full fleets/stocks/receiver/provider quantities remain unchanged by service attribution.

For every actual packaging pool use O+P+I+ER+actual disjoint retained/repair/water increments=C+S+EO+whole W+actual disjoint departures in consistent units. P is separate external purchase, I supplier-included ingress, ER actual external returned article received from customer/reuse pool with its actual empty or filled state, S actual filled shipment outward including a real returned-contents shipment, EO actual empty outward to supplier/other recipient. Empty means without usable delivered contents, not assumed zero residue/water. All six legs are mutually exclusive actual events. A filled shipment is recorded once; net contents and packaging article are disjoint component accounts, not two copies of whole shipment. Whole contaminated W links to substrate balances by nested composition; new retained increments coexist with full wet closing stocks, X cancels only duplicate other same-side terms. Returns and reuse create no new Q or automatic credit.

Synthetic accounting test only, not empirical data or a fraction/lifetime/default: one actual 10kg contaminated filter containing 8kg substrate and 2kg retained material serves two original cohorts. The receiver gets 10kg once. An independently evidenced hypothetical25%/75% compatible-unit treatment-service attribution gives 2.5/7.5kg-equivalent modeled vectors; original Qnew100kg/Qold200kg gives0.025/0.0375kg-equivalent per kg reference. Neither a2.5kg physical export nor full10kg provider demand again for both is valid. A separate packaging test O2+P3+I1+ER4+retained1=C3+S4+EO2+wholeW2=11kg uses Wsubstrate1+retained1 nested once. Actual article counts need independent records; these examples imply no kg/item conversion or actual installed filter.

The bound electricity retains exact native Net calorific value / 净热值, 低位热值 and its MJ unit group. kWh times3.6 is only an electrical unit conversion, not fuel combustion or calorific-value evidence. Actual water, humidity, gases and thermal carriers preserve native extensive units, independent phase/state/density and matching producer interfaces. A bounded purchased utility or finished-intermediate supply retains every genuine upstream operation and loss; real on-site printing, prepress development/rinse, board mounting/drying, tool manufacture, combustion or treatment cannot be removed on paper. Missing actual complete provider or essential method remains a study hold, not solved by a Flow UUID or future SOP.

Ravensburger is a real manufacturer example, not a universal SKU, recipe, water/solid fraction, drying technology, throughput or force default; its case count, dimensions, time, forestry and packaging-benefit claims are not transferred. Paper/plastic bag alternatives and adhesive labels versus exceptional shrink wrapping remain actual options, not all simultaneously mandatory. Clementoni supports independent whole-set replacement and nominal/actual-count/dimension counterevidence; its consumer-applied puzzle glue guidance is not factory mounting adhesive dosage or composition. Actual qualification uses actual whole-set specification and release records, not a nominal piece-count-to-mass conversion. Sources: `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq`.

EPA sheetfed offset uses a plate-to-blanket-to-sheet image transfer and describes fountain solution and a distinct waterless alternative. Sheetfed penetration/oxidative setting is not web heatset evaporation. Its historical material-balance formulas require actual pollutant content, retention and capture/control evidence; no100% release, retention factor or control efficiency is adopted here. Unchanged molecular species, reactive binders, total VOC/HAP indicators and identified emitted molecules are different accounts; one bulk VOC or carbon residual does not determine every molecular species. ILCD is attributional allocation-needed guidance, with subdivision/virtual subdivision then determining physical causality before residual actual common-gate values; it is not factory chemistry, QFD product-function equivalence or a recycling credit. Sources: `epa-printing-eiip-2002`; `ilcd-detailed-2010`.

For each exchange-vector dimension use A_i=B_open_i+U_new_i-B_close_i-T_other_i. U_new_i is the actual new material/service/provider/work/treatment burden addition before stock-consumption correction, not a measured consumption already reduced for stocks. Opening and closing B cover only raw/WIP or genuinely unused/unassigned stores/service charges; already first-accepted FG is never a manufacturing carry deduction. If collection already gives stock-corrected consumption, use that reconciled equivalent account and do not subtract the same closing inventory again or add the same opening history twice. T_other requires an actually distinct cohort/function and evidenced once-only handover; ordinary waste/sample sales do not qualify. Preserve physical quantities independently and never add a provider aggregate to its already included decomposed history. Sources: `ilcd-detailed-2010`.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receive | Receipt and unfinished-material ownership | required | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |
| print | Offset print and actual protective finish/drying | required | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |
| mount | Paper-to-board mounting and actual drying/conditioning | required | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |
| cut | Format cut and steel-rule die-cut separation | required | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |
| release | Count verification and whole-set first quality release | required | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |
| pack | Separate packaging pools and external physical legs | required | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |
| assets | Actual tooling and asset/component service | conditional | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |
| waste | Actual captured waste and identified molecular exchanges | conditional | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |
| service | Observed original-cohort storage handling dispatch and work | conditional | Actual owned or linked upstream operation; actual service H only | foreground or linked upstream with disjoint ownership | finished_puzzles |

Every physical-card amount is a gross leg, not a provider-charge instruction. Raw physical V and environmental burden A are independent accounts. First-release production and later original-cohort services use the same complete-product identity but their own measured cohort denominator. Conditional absence requires actual evidence; unknown is not not_applicable. Additional real exchanges must be explicitly added rather than hidden.

### Process: Receipt and unfinished-material ownership (`receive`)

#### Inputs

##### Product flows

###### Linen-embossed printing paper sheets / face_paper (`face_paper`)

Received unprinted face-paper sheets for actual offset printing and later mounting. Record actual coating, furnish, embossing, moisture and lot; no default paper grade or grammage. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Linen-embossed printing paper sheets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_receive`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Solid cellulosic puzzle backing board / solid_board (`solid_board`)

Received solid puzzle board before mounting, including actual retained dye/filler/water within supplied board mass. Not corrugated transport carton, wood particleboard or an optical-assembly-specific flow. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Solid cellulosic puzzle backing board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_receive`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Printed paper mounted on solid puzzle board / mounted_board (`mounted_board`)

Conditional external intermediate after actual printing/varnishing/drying and paper-to-board mounting. Complete provider must include those upstream steps and every retained constituent; disable overlapping face paper, board, inks, glue, varnish and energy purchases for that same supplied quantity. An internal matched handoff cancels at consolidation and is not another purchase. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Printed paper mounted on solid puzzle board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_receive`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Alternating current / electricity_receive (`electricity_receive`)

Actual submetered operation and attributable startup, failed run, idle, cleanup, extraction and handling electricity. In-house compressed-air electricity is included only once; no purchased-air duplication. Product low-voltage alternating current below 1 kV; grid-average consumption mix delivered to user, covering production and transmission. Match actual region, year, losses and supply interface; not generation-only hydropower, voltage transformation alone, heat or steam. Native reference is Net calorific value with energy unit group and MJ; use 3.6 MJ per metered kWh, not a Mass unit group. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_receive`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Linen-embossed printing paper sheets / face_paper_supplier_return (`face_paper_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. Received unprinted face-paper sheets for actual offset printing and later mounting. Record actual coating, furnish, embossing, moisture and lot; no default paper grade or grammage. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Linen-embossed printing paper sheets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_receive`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Solid cellulosic puzzle backing board / solid_board_supplier_return (`solid_board_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. Received solid puzzle board before mounting, including actual retained dye/filler/water within supplied board mass. Not corrugated transport carton, wood particleboard or an optical-assembly-specific flow. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Solid cellulosic puzzle backing board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_receive`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Printed paper mounted on solid puzzle board / mounted_board_supplier_return (`mounted_board_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. Conditional external intermediate after actual printing/varnishing/drying and paper-to-board mounting. Complete provider must include those upstream steps and every retained constituent; disable overlapping face paper, board, inks, glue, varnish and energy purchases for that same supplied quantity. An internal matched handoff cancels at consolidation and is not another purchase. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Printed paper mounted on solid puzzle board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_receive`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

### Process: Offset print and actual protective finish/drying (`print`)

#### Inputs

##### Product flows

###### Cyan sheetfed offset ink preparation / ink_cyan (`ink_cyan`)

One whole supplied cyan ink formulation used on this job; oil/solvent/resin/pigment/carrier assays are nonadditive subaccounts. Separate supplier SKU and actual press compatibility; do not purchase pigment and complete ink again. No optical-assembly route or flexographic ink UUID is substituted. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Cyan sheetfed offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Magenta sheetfed offset ink preparation / ink_magenta (`ink_magenta`)

One whole supplied magenta ink formulation used on this job; oil/solvent/resin/pigment/carrier assays are nonadditive subaccounts. Separate supplier SKU and actual press compatibility; do not purchase pigment and complete ink again. No optical-assembly route or flexographic ink UUID is substituted. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Magenta sheetfed offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Yellow sheetfed offset ink preparation / ink_yellow (`ink_yellow`)

One whole supplied yellow ink formulation used on this job; oil/solvent/resin/pigment/carrier assays are nonadditive subaccounts. Separate supplier SKU and actual press compatibility; do not purchase pigment and complete ink again. No optical-assembly route or flexographic ink UUID is substituted. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Yellow sheetfed offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Black sheetfed offset ink preparation / ink_black (`ink_black`)

One whole supplied black ink formulation used on this job; oil/solvent/resin/pigment/carrier assays are nonadditive subaccounts. Separate supplier SKU and actual press compatibility; do not purchase pigment and complete ink again. No optical-assembly route or flexographic ink UUID is substituted. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Black sheetfed offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Puzzle overprint varnish preparation / varnish (`varnish`)

Whole actual supplied protective varnish; chemistry, carrier and curing/drying mechanism are supplier-specific. No water-based recipe or universal drying time inferred from the producer example. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Puzzle overprint varnish preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Offset dampening solution preparation / fountain (`fountain`)

Actual whole external press-ready dampening preparation, if used. If mixed on site record each separately purchased concentrate, water and chemical atom instead; no duplicate complete bath purchase. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Offset dampening solution preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Propan-2-ol / ipa (`ipa`)

Conditional independently purchased IPA, CAS 67-63-0, only when actually added; not presumed in dampening or cleaner and not charged again if already in whole preparation. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Propan-2-ol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Offset blanket and roller wash preparation / cleaner (`cleaner`)

One actual complete offset-compatible wash preparation, with supplied composition and residual recovery measured. Inkjet-printhead cleaner is a conflicting route. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Offset blanket and roller wash preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Starch anti-setoff printing powder / powder (`powder`)

Only actual starch anti-setoff powder; verify polymer/grade and retained/deposited/collected/released masses. If a different actual chemical is used create its own card; no dust or polymer guess from PM. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Starch anti-setoff printing powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Cotton wiping cloth / wipe (`wipe`)

Actual separately supplied cotton cleaning cloth; no forced printed apparel or water-treatment identity. Reused cloth and washing/retired contamination are recorded without a new cloth purchase each use. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Alternating current / electricity_print (`electricity_print`)

Actual submetered operation and attributable startup, failed run, idle, cleanup, extraction and handling electricity. In-house compressed-air electricity is included only once; no purchased-air duplication. Product low-voltage alternating current below 1 kV; grid-average consumption mix delivered to user, covering production and transmission. Match actual region, year, losses and supply interface; not generation-only hydropower, voltage transformation alone, heat or steam. Native reference is Net calorific value with energy unit group and MJ; use 3.6 MJ per metered kWh, not a Mass unit group. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Tap water / process_water (`process_water`)

Only actual separately added piped water; exclude water already inside supplied formulations or articles and distinguish every measured receiving phase. New water retained in closing wet stock remains both a true incoming leg and part of full closing mass. Product treated municipal/public piped water; production mix at plant and water production/supply. Verify actual treatment, source, quality and delivery boundary; not raw water or an untreated viscose-specific process-water record. Native reference Mass/kg; its secondary Volume coefficient is not a measured density. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

###### oxygen / oxygen_uptake (`oxygen_uptake`)

Separate actual molecular uptake from gross ventilation passage and from oxidation products; no default uptake factor. Elementary molecular O2 resource from air; renewable element resource, CAS 7782-44-7, Mass/kg. Use actual gas uptake including oxidative setting only with independent reaction/element evidence. Native aliases mention liquid and excited states; these do not turn ordinary atmospheric O2 into purchased liquid oxygen or another molecule. Not an emission-to-air UUID. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

#### Outputs

##### Product flows

###### Cyan sheetfed offset ink preparation / ink_cyan_supplier_return (`ink_cyan_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. One whole supplied cyan ink formulation used on this job; oil/solvent/resin/pigment/carrier assays are nonadditive subaccounts. Separate supplier SKU and actual press compatibility; do not purchase pigment and complete ink again. No optical-assembly route or flexographic ink UUID is substituted. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Cyan sheetfed offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Magenta sheetfed offset ink preparation / ink_magenta_supplier_return (`ink_magenta_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. One whole supplied magenta ink formulation used on this job; oil/solvent/resin/pigment/carrier assays are nonadditive subaccounts. Separate supplier SKU and actual press compatibility; do not purchase pigment and complete ink again. No optical-assembly route or flexographic ink UUID is substituted. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Magenta sheetfed offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Yellow sheetfed offset ink preparation / ink_yellow_supplier_return (`ink_yellow_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. One whole supplied yellow ink formulation used on this job; oil/solvent/resin/pigment/carrier assays are nonadditive subaccounts. Separate supplier SKU and actual press compatibility; do not purchase pigment and complete ink again. No optical-assembly route or flexographic ink UUID is substituted. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Yellow sheetfed offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Black sheetfed offset ink preparation / ink_black_supplier_return (`ink_black_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. One whole supplied black ink formulation used on this job; oil/solvent/resin/pigment/carrier assays are nonadditive subaccounts. Separate supplier SKU and actual press compatibility; do not purchase pigment and complete ink again. No optical-assembly route or flexographic ink UUID is substituted. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Black sheetfed offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Puzzle overprint varnish preparation / varnish_supplier_return (`varnish_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. Whole actual supplied protective varnish; chemistry, carrier and curing/drying mechanism are supplier-specific. No water-based recipe or universal drying time inferred from the producer example. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Puzzle overprint varnish preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Offset dampening solution preparation / fountain_supplier_return (`fountain_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. Actual whole external press-ready dampening preparation, if used. If mixed on site record each separately purchased concentrate, water and chemical atom instead; no duplicate complete bath purchase. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Offset dampening solution preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Propan-2-ol / ipa_supplier_return (`ipa_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. Conditional independently purchased IPA, CAS 67-63-0, only when actually added; not presumed in dampening or cleaner and not charged again if already in whole preparation. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Propan-2-ol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Offset blanket and roller wash preparation / cleaner_supplier_return (`cleaner_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. One actual complete offset-compatible wash preparation, with supplied composition and residual recovery measured. Inkjet-printhead cleaner is a conflicting route. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Offset blanket and roller wash preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Starch anti-setoff printing powder / powder_supplier_return (`powder_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. Only actual starch anti-setoff powder; verify polymer/grade and retained/deposited/collected/released masses. If a different actual chemical is used create its own card; no dust or polymer guess from PM. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Starch anti-setoff printing powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Cotton wiping cloth / wipe_supplier_return (`wipe_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. Actual separately supplied cotton cleaning cloth; no forced printed apparel or water-treatment identity. Reused cloth and washing/retired contamination are recorded without a new cloth purchase each use. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_print`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

### Process: Paper-to-board mounting and actual drying/conditioning (`mount`)

#### Inputs

##### Product flows

###### Paper-to-board mounting adhesive preparation / mount_glue (`mount_glue`)

One actual whole supplied paper-mounting adhesive at its delivered wet composition. Measure retained solids, carrier water and losses; no assumed PVAc/starch chemistry, solvent fraction or glue coat rate. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Paper-to-board mounting adhesive preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Alternating current / electricity_mount (`electricity_mount`)

Actual submetered operation and attributable startup, failed run, idle, cleanup, extraction and handling electricity. In-house compressed-air electricity is included only once; no purchased-air duplication. Product low-voltage alternating current below 1 kV; grid-average consumption mix delivered to user, covering production and transmission. Match actual region, year, losses and supply interface; not generation-only hydropower, voltage transformation alone, heat or steam. Native reference is Net calorific value with energy unit group and MJ; use 3.6 MJ per metered kWh, not a Mass unit group. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Tap water / mount_water (`mount_water`)

Only actual separately added piped water; exclude water already inside supplied formulations or articles and distinguish every measured receiving phase. New water retained in closing wet stock remains both a true incoming leg and part of full closing mass. Product treated municipal/public piped water; production mix at plant and water production/supply. Verify actual treatment, source, quality and delivery boundary; not raw water or an untreated viscose-specific process-water record. Native reference Mass/kg; its secondary Volume coefficient is not a measured density. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Natural gas fuel / natural_gas (`natural_gas`)

Only actual fuel used for drying or utilities; measured reference T/P/composition and lower-heating basis required; no automatic boiler. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Natural gas fuel
- Flow property / unit: Volume / m3
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Purchased process heat / purchased_heat (`purchased_heat`)

Only actual delivered heat. Supplier carrier mass/state and energy ownership must be reconciled with actual steam/hot-water legs; no double purchase of carrier and thermal MJ. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Water vapour thermal carrier / steam_carrier (`steam_carrier`)

Conditional true incoming steam carrier, measured kg/phase/T/P/enthalpy and provider water-energy convention. Not created because electricity has a calorific property. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Water vapour thermal carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Liquid water thermal carrier / hot_water_carrier (`hot_water_carrier`)

Conditional actual hot-water carrier; record supply enthalpy and full mass separate from heat service. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Liquid water thermal carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

###### Atmospheric water vapour uptake / humidity_in_manufacture (`humidity_in_manufacture`)

Actual gaseous H2O entering wet formulations, paper, board, packaging, assets or stored/handled FG, including natural sorption; no invented repair activity. Measure inlet/outlet humidity and material water independently. Volume-based native candidate cannot be silently used as kg or total humid-air volume. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`

#### Outputs

##### Product flows

###### Condensate returned to heat supplier / condensate_return (`condensate_return`)

Only an actual external supplier-return leg; gross kg and actual phase/T/P/enthalpy, received provider convention and original ownership are required; no second product Q, water purchase, co-product or credit. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Condensate returned to heat supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Liquid heat-carrier water returned to supplier / hot_water_return (`hot_water_return`)

Only an actual external supplier-return leg; gross kg and actual phase/T/P/enthalpy, received provider convention and original ownership are required; no second product Q, water purchase, co-product or credit. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Liquid heat-carrier water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper-to-board mounting adhesive preparation / mount_glue_supplier_return (`mount_glue_supplier_return`)

Only an actual outward supplier return of this specific supplied article or preparation; full wet gross V and original lot/provider ownership, including stock and original burden lineage. A documented procurement reversal or handover is separate and never an automatic credit. One actual whole supplied paper-mounting adhesive at its delivered wet composition. Measure retained solids, carrier water and losses; no assumed PVAc/starch chemistry, solvent fraction or glue coat rate. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Paper-to-board mounting adhesive preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

###### water vapour / water_out_manufacture (`water_out_manufacture`)

Actual outward H2O from drying or ordinary storage/handling desorption, with distinct material/cohort and horizon. Keep inward humidity independently; report both gross legs and net environmental result without adding both twice. Elementary ordinary gaseous H2O emission to unspecified outdoor air, CAS 7732-18-5, Mass/kg. Native isotope/liquid/ice aliases are not permission to represent heavy/tritiated water, liquid effluent or purchased steam. Measure the actual outward leg and maintain ambient ingress independently; no residual fitted to multiple unknowns. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_mount`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`

### Process: Format cut and steel-rule die-cut separation (`cut`)

#### Inputs

##### Product flows

###### Alternating current / electricity_cut (`electricity_cut`)

Actual submetered operation and attributable startup, failed run, idle, cleanup, extraction and handling electricity. In-house compressed-air electricity is included only once; no purchased-air duplication. Product low-voltage alternating current below 1 kV; grid-average consumption mix delivered to user, covering production and transmission. Match actual region, year, losses and supply interface; not generation-only hydropower, voltage transformation alone, heat or steam. Native reference is Net calorific value with energy unit group and MJ; use 3.6 MJ per metered kWh, not a Mass unit group. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_cut`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Count verification and whole-set first quality release (`release`)

#### Inputs

##### Product flows

###### Alternating current / electricity_release (`electricity_release`)

Actual submetered operation and attributable startup, failed run, idle, cleanup, extraction and handling electricity. In-house compressed-air electricity is included only once; no purchased-air duplication. Product low-voltage alternating current below 1 kV; grid-average consumption mix delivered to user, covering production and transmission. Match actual region, year, losses and supply interface; not generation-only hydropower, voltage transformation alone, heat or steam. Native reference is Net calorific value with energy unit group and MJ; use 3.6 MJ per metered kWh, not a Mass unit group. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_release`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Puzzles / finished_puzzles (`finished_puzzles`)

Q is sum of newly first-quality-released complete sets net of every bag, retail box, label, outer carton and pallet. Retained paper, board, ink, adhesive, varnish and actual moisture are included once. Count verification and final complete-set acceptance are separate from printing, mounting and die cutting; a passed cutting-stage check alone is not release. Include every actual required final line/packed-set acceptance before first release, even if packaging is already applied; subtract measured packaging tare. Never-accepted destroyed/rejected sets are not Q; already first-accepted later destroyed sets remain in original Q with actual loss/disposition. First-released sets still in closing finished stock are already in Q, not another manufacturing output. Product flow; finished manufactured production mix at plant; native family covers puzzles of all kinds. Here select only a complete physical flat printed-paper/solid-board jigsaw set with its actual configuration and accepted piece complement. Not puzzle component material or loose part output. No fixed species CAS, grade, geography, piece count or mass coefficient is declared; supplier data must match the actual site and net product basis. Mass is the sole native property. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Puzzles `471d8d3c-43fd-4a44-8044-ca7f36377491`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_release`
- Sources: `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq`

##### Waste flows

##### Elementary flows

### Process: Separate packaging pools and external physical legs (`pack`)

#### Inputs

##### Product flows

###### Paper bag / paper_bag_p (`paper_bag_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product paper bag; production mix at plant; native synonyms include kraft/carrier/open-mouth/valve bags and paper grades, while the actual exchange must be one whole paper puzzle bag of verified composition and seal construction. Do not substitute bare paper or PE; supplier additives and moisture stay inside the whole article once. No recyclability or reuse credit is adopted from native descriptive claims. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper bag / paper_bag_i (`paper_bag_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product paper bag; production mix at plant; native synonyms include kraft/carrier/open-mouth/valve bags and paper grades, while the actual exchange must be one whole paper puzzle bag of verified composition and seal construction. Do not substitute bare paper or PE; supplier additives and moisture stay inside the whole article once. No recyclability or reuse credit is adopted from native descriptive claims. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper bag / paper_bag_er (`paper_bag_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product paper bag; production mix at plant; native synonyms include kraft/carrier/open-mouth/valve bags and paper grades, while the actual exchange must be one whole paper puzzle bag of verified composition and seal construction. Do not substitute bare paper or PE; supplier additives and moisture stay inside the whole article once. No recyclability or reuse credit is adopted from native descriptive claims. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene bag / pe_bag_p (`pe_bag_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product whole polyethylene bag; production mix at plant; PE CAS 9002-88-4. Verify actual PE grade and complete bag including actual additives/seal; exclude PET, PP, metallised laminate and bare film substitutes. Whole wet article mass once; no fixed recycled fraction, thickness or bag mass. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene bag / pe_bag_i (`pe_bag_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product whole polyethylene bag; production mix at plant; PE CAS 9002-88-4. Verify actual PE grade and complete bag including actual additives/seal; exclude PET, PP, metallised laminate and bare film substitutes. Whole wet article mass once; no fixed recycled fraction, thickness or bag mass. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene bag / pe_bag_er (`pe_bag_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product whole polyethylene bag; production mix at plant; PE CAS 9002-88-4. Verify actual PE grade and complete bag including actual additives/seal; exclude PET, PP, metallised laminate and bare film substitutes. Whole wet article mass once; no fixed recycled fraction, thickness or bag mass. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Rigid paperboard puzzle retail box / retail_box_p (`retail_box_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Rigid paperboard puzzle retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Rigid paperboard puzzle retail box / retail_box_i (`retail_box_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Rigid paperboard puzzle retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Rigid paperboard puzzle retail box / retail_box_er (`retail_box_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Rigid paperboard puzzle retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper adhesive sealing label / seal_label_p (`seal_label_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Paper adhesive sealing label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper adhesive sealing label / seal_label_i (`seal_label_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Paper adhesive sealing label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper adhesive sealing label / seal_label_er (`seal_label_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Paper adhesive sealing label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Corrugated transport carton / outer_carton_p (`outer_carton_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Corrugated transport carton / outer_carton_i (`outer_carton_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Corrugated transport carton / outer_carton_er (`outer_carton_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood / wood_pallet_p (`wood_pallet_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product finished manufactured wooden load-platform family; production mix at plant. This card is one actual whole wooden pallet for mechanical unit-load handling/storage, not the entire listed family. Verify wood species, treatment, nails, moisture and construction; native family includes collars and box platforms but these are separate actual articles if supplied. No wood-service lifetime, EURO conformity or reuse count is assumed. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood / wood_pallet_i (`wood_pallet_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product finished manufactured wooden load-platform family; production mix at plant. This card is one actual whole wooden pallet for mechanical unit-load handling/storage, not the entire listed family. Verify wood species, treatment, nails, moisture and construction; native family includes collars and box platforms but these are separate actual articles if supplied. No wood-service lifetime, EURO conformity or reuse count is assumed. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood / wood_pallet_er (`wood_pallet_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product finished manufactured wooden load-platform family; production mix at plant. This card is one actual whole wooden pallet for mechanical unit-load handling/storage, not the entire listed family. Verify wood species, treatment, nails, moisture and construction; native family includes collars and box platforms but these are separate actual articles if supplied. No wood-service lifetime, EURO conformity or reuse count is assumed. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene formulation pail / pail_p (`pail_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene formulation pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene formulation pail / pail_i (`pail_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene formulation pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene formulation pail / pail_er (`pail_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene formulation pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Steel formulation drum / steel_drum_p (`steel_drum_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel formulation drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Steel formulation drum / steel_drum_i (`steel_drum_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel formulation drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Steel formulation drum / steel_drum_er (`steel_drum_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel formulation drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene ingress wrapping film / ingress_film_p (`ingress_film_p`)

Conditional new external purchase of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene ingress wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene ingress wrapping film / ingress_film_i (`ingress_film_i`)

Conditional supplier-included article ingress of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene ingress wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene ingress wrapping film / ingress_film_er (`ingress_film_er`)
ER is an actual inward returned packaging article. Preserve actual empty/filled state; if filled, record this packaging component and actual net contents separately inside one full receipt. It is neither P/I nor an outward S/EO event.


Conditional external return received of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene ingress wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Paper bag / paper_bag_s (`paper_bag_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product paper bag; production mix at plant; native synonyms include kraft/carrier/open-mouth/valve bags and paper grades, while the actual exchange must be one whole paper puzzle bag of verified composition and seal construction. Do not substitute bare paper or PE; supplier additives and moisture stay inside the whole article once. No recyclability or reuse credit is adopted from native descriptive claims. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper bag / paper_bag_eo (`paper_bag_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product paper bag; production mix at plant; native synonyms include kraft/carrier/open-mouth/valve bags and paper grades, while the actual exchange must be one whole paper puzzle bag of verified composition and seal construction. Do not substitute bare paper or PE; supplier additives and moisture stay inside the whole article once. No recyclability or reuse credit is adopted from native descriptive claims. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene bag / pe_bag_s (`pe_bag_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product whole polyethylene bag; production mix at plant; PE CAS 9002-88-4. Verify actual PE grade and complete bag including actual additives/seal; exclude PET, PP, metallised laminate and bare film substitutes. Whole wet article mass once; no fixed recycled fraction, thickness or bag mass. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene bag / pe_bag_eo (`pe_bag_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product whole polyethylene bag; production mix at plant; PE CAS 9002-88-4. Verify actual PE grade and complete bag including actual additives/seal; exclude PET, PP, metallised laminate and bare film substitutes. Whole wet article mass once; no fixed recycled fraction, thickness or bag mass. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Rigid paperboard puzzle retail box / retail_box_s (`retail_box_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Rigid paperboard puzzle retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Rigid paperboard puzzle retail box / retail_box_eo (`retail_box_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Rigid paperboard puzzle retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper adhesive sealing label / seal_label_s (`seal_label_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Paper adhesive sealing label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Paper adhesive sealing label / seal_label_eo (`seal_label_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Paper adhesive sealing label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Corrugated transport carton / outer_carton_s (`outer_carton_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Corrugated transport carton / outer_carton_eo (`outer_carton_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood / wood_pallet_s (`wood_pallet_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product finished manufactured wooden load-platform family; production mix at plant. This card is one actual whole wooden pallet for mechanical unit-load handling/storage, not the entire listed family. Verify wood species, treatment, nails, moisture and construction; native family includes collars and box platforms but these are separate actual articles if supplied. No wood-service lifetime, EURO conformity or reuse count is assumed. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood / wood_pallet_eo (`wood_pallet_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Product finished manufactured wooden load-platform family; production mix at plant. This card is one actual whole wooden pallet for mechanical unit-load handling/storage, not the entire listed family. Verify wood species, treatment, nails, moisture and construction; native family includes collars and box platforms but these are separate actual articles if supplied. No wood-service lifetime, EURO conformity or reuse count is assumed. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene formulation pail / pail_s (`pail_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene formulation pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene formulation pail / pail_eo (`pail_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene formulation pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Steel formulation drum / steel_drum_s (`steel_drum_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel formulation drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Steel formulation drum / steel_drum_eo (`steel_drum_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel formulation drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene ingress wrapping film / ingress_film_s (`ingress_film_s`)
S is the packaging-article component within a genuine outward filled shipment, including actual returned feed contents or complete sets. It excludes empty-article outward EO and inward ER; net contents and whole shipment are matched once with one burden owner.


Conditional gross physically shipped article of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene ingress wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Polyethylene ingress wrapping film / ingress_film_eo (`ingress_film_eo`)
EO is only an actual outward empty article to supplier or another recipient, disjoint from S filled shipments and ER inward receipts. Empty does not mean no measured retained residue/water.


Conditional outward external return of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Polyethylene ingress wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Waste flows

###### Discarded paper puzzle bag / paper_bag_w (`paper_bag_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded paper puzzle bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Discarded polyethylene puzzle bag / pe_bag_w (`pe_bag_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded polyethylene puzzle bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Discarded rigid paperboard puzzle retail box / retail_box_w (`retail_box_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded rigid paperboard puzzle retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Discarded paper adhesive sealing label / seal_label_w (`seal_label_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded paper adhesive sealing label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Discarded corrugated transport carton / outer_carton_w (`outer_carton_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Discarded whole wooden handling pallet / wood_pallet_w (`wood_pallet_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded whole wooden handling pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Discarded polyethylene formulation pail / pail_w (`pail_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded polyethylene formulation pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Discarded steel formulation drum / steel_drum_w (`steel_drum_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded steel formulation drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Discarded polyethylene ingress wrapping film / ingress_film_w (`ingress_film_w`)
W is one actual whole contaminated wet waste receipt including substrate, retained ink/glue/cleaner/residue and water once. Components are nested; no extra attached-material export or full treatment demand per cohort is created.


Conditional separately discharged waste of exactly this article. One physical pool and external direction per card; full wet article including actual adhesive/coating/additives/seal/nails once as applicable. P and I are disjoint ingress owners; ER is not a new purchase. S is gross shipment including returned shipments, never net delivery. Opening/closing empty, WIP-attached, FG-attached and reusable stocks remain fully wet. Internal reuse cancels within the pool. This gross numerator is full V, never stock-corrected consumption or an economic/service share. Burden ownership is linked separately once; no Q, purchase or credit is created by gross disclosure. Activate only for one actually segregated Waste outlet of this article. If discharged in one physical mixed-waste stream, retain independently measured origin W in the pool and link nonadditively to mixed_waste instead; do not manufacture a second outlet or duplicate treatment. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Discarded polyethylene ingress wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pack`
- Sources: `ravensburger-puzzle-manufacture-2025`

##### Elementary flows

### Process: Actual tooling and asset/component service (`assets`)

#### Inputs

##### Product flows

###### Prepared aluminium offset printing plate / printing_plate_new (`printing_plate_new`)

Only an actual new leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Prepared aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Prepared aluminium offset printing plate / printing_plate_used_in (`printing_plate_used_in`)

Only an actual used_in leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Prepared aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel-rule puzzle die on wooden base / cutting_die_new (`cutting_die_new`)

Only an actual new leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel-rule puzzle die on wooden base
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel-rule puzzle die on wooden base / cutting_die_used_in (`cutting_die_used_in`)

Only an actual used_in leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel-rule puzzle die on wooden base
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel die-cutting rule / replacement_rule_new (`replacement_rule_new`)

Only an actual new leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel die-cutting rule
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel die-cutting rule / replacement_rule_used_in (`replacement_rule_used_in`)

Only an actual used_in leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel die-cutting rule
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Wooden die-base board / die_wood_new (`die_wood_new`)

Only an actual new leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Wooden die-base board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Wooden die-base board / die_wood_used_in (`die_wood_used_in`)

Only an actual used_in leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Wooden die-base board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Wooden pallet repair plank / pallet_plank_new (`pallet_plank_new`)

Only an actual new leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Wooden pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Wooden pallet repair plank / pallet_plank_used_in (`pallet_plank_used_in`)

Only an actual used_in leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Wooden pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel pallet repair nail / pallet_nail_new (`pallet_nail_new`)

Only an actual new leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel pallet repair nail / pallet_nail_used_in (`pallet_nail_used_in`)

Only an actual used_in leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Machine lubricating oil preparation / lubricating_oil_new (`lubricating_oil_new`)

Only an actual new leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Machine lubricating oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Machine lubricating oil preparation / lubricating_oil_used_in (`lubricating_oil_used_in`)

Only an actual used_in leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Machine lubricating oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Machine lubricating grease preparation / lubricating_grease_new (`lubricating_grease_new`)

Only an actual new leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Machine lubricating grease preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Machine lubricating grease preparation / lubricating_grease_used_in (`lubricating_grease_used_in`)

Only an actual used_in leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Machine lubricating grease preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared aluminium offset printing plate / printing_plate_return (`printing_plate_return`)

Only an actual return leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Prepared aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel-rule puzzle die on wooden base / cutting_die_return (`cutting_die_return`)

Only an actual return leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel-rule puzzle die on wooden base
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel die-cutting rule / replacement_rule_return (`replacement_rule_return`)

Only an actual return leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel die-cutting rule
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Wooden die-base board / die_wood_return (`die_wood_return`)

Only an actual return leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Wooden die-base board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Wooden pallet repair plank / pallet_plank_return (`pallet_plank_return`)

Only an actual return leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Wooden pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Steel pallet repair nail / pallet_nail_return (`pallet_nail_return`)

Only an actual return leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Machine lubricating oil preparation / lubricating_oil_return (`lubricating_oil_return`)

Only an actual return leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Machine lubricating oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Machine lubricating grease preparation / lubricating_grease_return (`lubricating_grease_return`)

Only an actual return leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Machine lubricating grease preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

##### Waste flows

###### Spent prepared aluminium offset printing plate / printing_plate_discard (`printing_plate_discard`)

Only an actual discard leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Spent prepared aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Spent steel-rule puzzle die on wooden base / cutting_die_discard (`cutting_die_discard`)

Only an actual discard leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Spent steel-rule puzzle die on wooden base
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Spent steel die-cutting rule / replacement_rule_discard (`replacement_rule_discard`)

Only an actual discard leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Spent steel die-cutting rule
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Spent wooden die-base board / die_wood_discard (`die_wood_discard`)

Only an actual discard leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Spent wooden die-base board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Spent wooden pallet repair plank / pallet_plank_discard (`pallet_plank_discard`)

Only an actual discard leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Spent wooden pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Spent steel pallet repair nail / pallet_nail_discard (`pallet_nail_discard`)

Only an actual discard leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Spent steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Spent machine lubricating oil preparation / lubricating_oil_discard (`lubricating_oil_discard`)

Only an actual discard leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Spent machine lubricating oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

###### Spent machine lubricating grease preparation / lubricating_grease_discard (`lubricating_grease_discard`)

Only an actual discard leg of this specific article. Collect new/used condition, material, phase, complete wet mass and actual stock/service history. Whole die/plate/pallet and included components use disjoint supply ownership or a reconciled constituent bridge; cancel internal installation/removal and do not add component mass to whole article twice. Repair materials retained in closing stocks still have real incoming mass. Used-service burden and unused/unassigned stock charge are separate; no fixed life, wear fraction or one whole asset per kg. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Spent machine lubricating grease preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets_assets`
- Sources: `ravensburger-puzzle-manufacture-2025`; `ilcd-detailed-2010`

##### Elementary flows

### Process: Actual captured waste and identified molecular exchanges (`waste`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Atmospheric dinitrogen / n2_in (`n2_in`)

Only independently identified actual molecular species and receiving medium; preserve phase, origin and measured gross inlet/outlet separately from true net generation/uptake. Never derive one molecule from NOx/VOC/COD/PM/total C/N indicator or one residual for multiple unknowns. Ambient pass-through is not purchased gas and no second total-air exchange is added. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Atmospheric dinitrogen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_waste`
- Sources: `epa-printing-eiip-2002`

###### Atmospheric argon / ar_in (`ar_in`)

Only independently identified actual molecular species and receiving medium; preserve phase, origin and measured gross inlet/outlet separately from true net generation/uptake. Never derive one molecule from NOx/VOC/COD/PM/total C/N indicator or one residual for multiple unknowns. Ambient pass-through is not purchased gas and no second total-air exchange is added. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Atmospheric argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_waste`
- Sources: `epa-printing-eiip-2002`

#### Outputs

##### Product flows

##### Waste flows

###### Printed laminated paperboard trim waste / trim (`trim`)

Actual separately collected trim with ink, glue, varnish and moisture included. Conditional independent Waste outlet; if physically mixed link to one measured mixed outlet nonadditively. Full gross V once; actual treatment loads assigned once, not avoided by transfer or sale. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Printed laminated paperboard trim waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010`

###### Rejected printed-cardboard puzzle waste / reject (`reject`)

Actual rejected/failed/sampled puzzle stream; loss or sale does not remove its production and handling burden. Conditional independent Waste outlet; if physically mixed link to one measured mixed outlet nonadditively. Full gross V once; actual treatment loads assigned once, not avoided by transfer or sale. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Rejected printed-cardboard puzzle waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010`

###### Collected puzzle-board cutting dust waste / dust (`dust`)

Captured solid cutting dust is not outdoor PM emission. Characterize actual board/coating/ink composition. Conditional independent Waste outlet; if physically mixed link to one measured mixed outlet nonadditively. Full gross V once; actual treatment loads assigned once, not avoided by transfer or sale. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Collected puzzle-board cutting dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010`

###### Mixed puzzle-manufacturing solid waste / mixed_waste (`mixed_waste`)

Use one Waste exchange for one real mixed outlet. Measured origin pools including packaging W are independent nonadditive subaccounts; total or actual segregated outlets once, one treatment/provider owner, no Product substitution. Conditional independent Waste outlet; if physically mixed link to one measured mixed outlet nonadditively. Full gross V once; actual treatment loads assigned once, not avoided by transfer or sale. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Mixed puzzle-manufacturing solid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010`

###### Waste offset ink preparation / ink_waste (`ink_waste`)

Whole actual wet ink residue; each separately discharged colour/chemistry becomes its own card; do not add carrier components to total residue. Conditional independent Waste outlet; if physically mixed link to one measured mixed outlet nonadditively. Full gross V once; actual treatment loads assigned once, not avoided by transfer or sale. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Waste offset ink preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010`

###### Waste paper-mounting adhesive preparation / adhesive_waste (`adhesive_waste`)

Whole actual adhesive residue, distinct from product-retained adhesive and washwater. Conditional independent Waste outlet; if physically mixed link to one measured mixed outlet nonadditively. Full gross V once; actual treatment loads assigned once, not avoided by transfer or sale. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Waste paper-mounting adhesive preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010`

###### Offset-printing and mounting washwater / washwater (`washwater`)

Only one actual combined liquid stream if physically combined; independently measure total wet mass and H2O/nonwater composition. Otherwise split actual outlets. COD is an indicator not chemical mass. Conditional independent Waste outlet; if physically mixed link to one measured mixed outlet nonadditively. Full gross V once; actual treatment loads assigned once, not avoided by transfer or sale. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Offset-printing and mounting washwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010`

###### Contaminated cotton wiping-cloth waste / spent_wipe (`spent_wipe`)

Actual worn cloth with retained cleaners/ink/water measured once; external laundering service is separately linked if real. Conditional independent Waste outlet; if physically mixed link to one measured mixed outlet nonadditively. Full gross V once; actual treatment loads assigned once, not avoided by transfer or sale. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Contaminated cotton wiping-cloth waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010`

##### Elementary flows

###### dinitrogen / n2_out (`n2_out`)

Only independently identified actual molecular species and receiving medium; preserve phase, origin and measured gross inlet/outlet separately from true net generation/uptake. Never derive one molecule from NOx/VOC/COD/PM/total C/N indicator or one residual for multiple unknowns. Ambient pass-through is not purchased gas and no second total-air exchange is added. Elementary dinitrogen N2 emission to unspecified outdoor air; CAS 7727-37-9; Mass/kg. Record actual gross outward gas separately from inlet gas and from purchased air-separation nitrogen. No NOx, NH3 or total-nitrogen indicator substitution; no net chemical generation inferred from ventilation throughput. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_waste`
- Sources: `epa-printing-eiip-2002`

###### Argon released to outdoor air / ar_out (`ar_out`)

Only independently identified actual molecular species and receiving medium; preserve phase, origin and measured gross inlet/outlet separately from true net generation/uptake. Never derive one molecule from NOx/VOC/COD/PM/total C/N indicator or one residual for multiple unknowns. Ambient pass-through is not purchased gas and no second total-air exchange is added. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Argon released to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_waste`
- Sources: `epa-printing-eiip-2002`

###### Molecular oxygen released to outdoor air / o2_out (`o2_out`)

Only independently identified actual molecular species and receiving medium; preserve phase, origin and measured gross inlet/outlet separately from true net generation/uptake. Never derive one molecule from NOx/VOC/COD/PM/total C/N indicator or one residual for multiple unknowns. Ambient pass-through is not purchased gas and no second total-air exchange is added. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Molecular oxygen released to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_waste`
- Sources: `epa-printing-eiip-2002`

###### carbon dioxide (fossil) / co2_fossil (`co2_fossil`)

Only independently identified actual molecular species and receiving medium; preserve phase, origin and measured gross inlet/outlet separately from true net generation/uptake. Never derive one molecule from NOx/VOC/COD/PM/total C/N indicator or one residual for multiple unknowns. Ambient pass-through is not purchased gas and no second total-air exchange is added. Elementary fossil-origin molecular CO2 to unspecified outdoor air; CAS 124-38-9; Mass/kg. Actual carbon origin and species must be measured or independently supported; not biogenic CO2, total carbon, COD or VOC. Background grid emissions are not duplicated as foreground stack emissions. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_waste`
- Sources: `epa-printing-eiip-2002`

###### Biogenic carbon dioxide released to outdoor air / co2_biogenic (`co2_biogenic`)

Only independently identified actual molecular species and receiving medium; preserve phase, origin and measured gross inlet/outlet separately from true net generation/uptake. Never derive one molecule from NOx/VOC/COD/PM/total C/N indicator or one residual for multiple unknowns. Ambient pass-through is not purchased gas and no second total-air exchange is added. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Biogenic carbon dioxide released to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_waste`
- Sources: `epa-printing-eiip-2002`

###### Propan-2-ol released to outdoor air / ipa_air (`ipa_air`)

Only independently identified actual molecular species and receiving medium; preserve phase, origin and measured gross inlet/outlet separately from true net generation/uptake. Never derive one molecule from NOx/VOC/COD/PM/total C/N indicator or one residual for multiple unknowns. Ambient pass-through is not purchased gas and no second total-air exchange is added. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Propan-2-ol released to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_waste`
- Sources: `epa-printing-eiip-2002`

### Process: Observed original-cohort storage handling dispatch and work (`service`)

#### Inputs

##### Product flows

###### Alternating current / electricity_service (`electricity_service`)

Actual submetered operation and attributable startup, failed run, idle, cleanup, extraction and handling electricity. In-house compressed-air electricity is included only once; no purchased-air duplication. Product low-voltage alternating current below 1 kV; grid-average consumption mix delivered to user, covering production and transmission. Match actual region, year, losses and supply interface; not generation-only hydropower, voltage transformation alone, heat or steam. Native reference is Net calorific value with energy unit group and MJ; use 3.6 MJ per metered kWh, not a Mass unit group. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_service`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Tap water / service_water (`service_water`)

Only actual separately added piped water; exclude water already inside supplied formulations or articles and distinguish every measured receiving phase. New water retained in closing wet stock remains both a true incoming leg and part of full closing mass. Product treated municipal/public piped water; production mix at plant and water production/supply. Verify actual treatment, source, quality and delivery boundary; not raw water or an untreated viscose-specific process-water record. Native reference Mass/kg; its secondary Volume coefficient is not a measured density. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_service`
- Sources: `ravensburger-puzzle-manufacture-2025`

###### Returned complete printed-cardboard puzzle set / fg_return (`fg_return`)
This selected complete Product is only a genuinely complete manufactured set at the recorded actual state. Damaged/incomplete loose-piece returns or rejected postwork material require their own specific atomic Product/Waste identity and actual disposition; retain their full physical and original-cohort histories without forcing them into the complete reference or assuming restored completeness.


Actual full physical leg with original cohort and first-release receipt. Retain added/lost moisture, components and actual acceptance/disposition; no assumed equality of return mass and original delivery, no new production Q and no repeated upstream purchase. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Returned complete printed-cardboard puzzle set
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service_service`
- Sources: `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq`

##### Waste flows

##### Elementary flows

###### Atmospheric water vapour uptake / humidity_in_storage (`humidity_in_storage`)

Actual gaseous H2O entering wet formulations, paper, board, packaging, assets or stored/handled FG, including natural sorption; no invented repair activity. Measure inlet/outlet humidity and material water independently. Volume-based native candidate cannot be silently used as kg or total humid-air volume. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`

#### Outputs

##### Product flows

###### Complete printed-cardboard puzzle set dispatched / fg_dispatch (`fg_dispatch`)
This selected complete Product is only a genuinely complete manufactured set at the recorded actual state. Damaged/incomplete loose-piece returns or rejected postwork material require their own specific atomic Product/Waste identity and actual disposition; retain their full physical and original-cohort histories without forcing them into the complete reference or assuming restored completeness.


Actual full physical leg with original cohort and first-release receipt. Retain added/lost moisture, components and actual acceptance/disposition; no assumed equality of return mass and original delivery, no new production Q and no repeated upstream purchase. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Complete printed-cardboard puzzle set dispatched
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service_service`
- Sources: `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq`

###### Complete printed-cardboard puzzle set returned to owner / fg_owner_return (`fg_owner_return`)
This selected complete Product is only a genuinely complete manufactured set at the recorded actual state. Damaged/incomplete loose-piece returns or rejected postwork material require their own specific atomic Product/Waste identity and actual disposition; retain their full physical and original-cohort histories without forcing them into the complete reference or assuming restored completeness.


Actual full physical leg with original cohort and first-release receipt. Retain added/lost moisture, components and actual acceptance/disposition; no assumed equality of return mass and original delivery, no new production Q and no repeated upstream purchase. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share.

- Selected flow: Complete printed-cardboard puzzle set returned to owner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service_service`
- Sources: `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq`

##### Waste flows

##### Elementary flows

###### water vapour / water_out_storage (`water_out_storage`)

Actual outward H2O from drying or ordinary storage/handling desorption, with distinct material/cohort and horizon. Keep inward humidity independently; report both gross legs and net environmental result without adding both twice. Elementary ordinary gaseous H2O emission to unspecified outdoor air, CAS 7732-18-5, Mass/kg. Native isotope/liquid/ice aliases are not permission to represent heavy/tritiated water, liquid effluent or purchased steam. Measure the actual outward leg and maintain ambient ingress independently; no residual fitted to multiple unknowns. Preserve this leg at full physical quantity; its actual upstream or treatment burden is assigned in the separate exchange-vector account exactly once. No physical amount is multiplied by a burden share. Native reference chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared transfer recorded once. Linked model demand uses the separately evidenced attributable vector per original positive cohort reference mass. Preserve raw physical and burden ledgers, no duplicate division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_context` | all burden vectors | Use attributional modelling only where partitioning is appropriate to the declared study decision context; do not claim consequential substitution. Industrial manufacturing evidence is not allocation guidance. | `ilcd-detailed-2010` |
| `a_subdivide` | all burden vectors | First identify dedicated operations, direct meters and exclusive materials. Subdivide or virtually subdivide every separable contribution, including print jobs, preparation, cleanup, failure and postrelease cohort services, before any residual allocation. | `ilcd-detailed-2010` |
| `a_causality` | shared residual burdens | For genuinely inseparable remaining exchange vectors test an exchange-specific determining physical causal relationship using actual conditions, measured drivers and sensitivity. Do not select mass, area, pieces or machine time merely because available. | `ilcd-detailed-2010` |
| `a_value` | remaining multifunctional common process | Only for the justified residual after the preceding hierarchy use actual contemporaneous market values for co-functions in their real common-process exit states, quantities, geography and period. Declare prices, currency, valuation boundary and conversions, complete value denominator and sensitivity; do not value a finished product against a different-state intermediate. No fixed shares or arbitrary physical/economic choice. | `ilcd-detailed-2010` |
| `a_waste` | waste and gross exchanges | No automatic co-product, sale credit, avoided production or burden subtraction for packaging reuse, manufacturing rejects, scrap or external waste dispatch. A true independent function/cohort and defensible allocation/handover are required for one burden transfer; actual waste/treatment remains owned once and all physical gross legs remain unchanged. | `ilcd-detailed-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection is raw: protocols collect unnormalized original-unit quantities and independently measured stocks/assays. The aggregation_rule column declares the final result target only; it does not divide during collection. Convert original units, reconcile disjoint ownership, assign actual burden vectors, then execute one final quotient for each separate dimension. Cards and aggregation refer to that same quotient, never another division.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assets_assets | assets | assets parts fluids and service history | collected_record | whole asset and component IDs; new used received installed removed returned retired; full wet stocks; each fluid phase; service intervals; jobs served; unused unassigned charge; provider; no assumed life; actual_whole_receiver_Qt_once; actual_full_provider_quantity_once; nested_component_bridge; actual_physical_cohort_provenance; evidenced_service_vectors; provider_unit_basis; original_Q0_each_cohort; Qanalysis; actual_disjoint_retained_repair_water_increments; actual_disjoint_departures | Record full physical machinery/die/plate/part/repair/fluid stock and actual external receipts/returns/discards. Add separately named actual press, laminator, cutter, die-press, separator, bag-sealer and other physical assets if transacted during the horizon; no invented asset purchase when already installed. Whole/component supply coverage is disjoint or bridged/reconciled and internal installation/removal cancels. Attribute only the actual observed service burden through the hierarchy, retain unused charge; no fixed lifetime, wear fraction or one whole machine per kg. Actual whole contaminated waste is one full receiver transfer with nested substrate/residue/water; treatment service vectors are evidenced separately for served original cohorts and compatible provider units. P/I/ER are distinct inward; S actual filled dispatch and EO empty outward are distinct. Use the complete wet bridge with actual disjoint repair/water increments and departures. | kg; h | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_energy_cut | cut | actual electricity heat and fuel | collected_record | meter interval; process; cohort; startup idle failure cleanup; voltage; supply region year; kWh; MJ; fuel reference T/P and composition; genuine rate or integrated volume; thermal carrier kg phase T/P enthalpy; provider coverage | Collect original meter readings and units before normalization; integrate only actual rates, never multiply an already integrated volume by time. Convert kWh to MJ once before attribution. Separate jobs/operations using direct meters then the declared hierarchy. Actual purchased heat and carrier legs must share one documented provider convention; in-house compressor/boiler work is measured only when real, never duplicated through both whole service and ingredients. Keep energy balance and actual losses with uncertainty. | kWh; MJ; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_energy_mount | mount | actual electricity heat and fuel | collected_record | meter interval; process; cohort; startup idle failure cleanup; voltage; supply region year; kWh; MJ; fuel reference T/P and composition; genuine rate or integrated volume; thermal carrier kg phase T/P enthalpy; provider coverage | Collect original meter readings and units before normalization; integrate only actual rates, never multiply an already integrated volume by time. Convert kWh to MJ once before attribution. Separate jobs/operations using direct meters then the declared hierarchy. Actual purchased heat and carrier legs must share one documented provider convention; in-house compressor/boiler work is measured only when real, never duplicated through both whole service and ingredients. Keep energy balance and actual losses with uncertainty. | kWh; MJ; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_energy_print | print | actual electricity heat and fuel | collected_record | meter interval; process; cohort; startup idle failure cleanup; voltage; supply region year; kWh; MJ; fuel reference T/P and composition; genuine rate or integrated volume; thermal carrier kg phase T/P enthalpy; provider coverage | Collect original meter readings and units before normalization; integrate only actual rates, never multiply an already integrated volume by time. Convert kWh to MJ once before attribution. Separate jobs/operations using direct meters then the declared hierarchy. Actual purchased heat and carrier legs must share one documented provider convention; in-house compressor/boiler work is measured only when real, never duplicated through both whole service and ingredients. Keep energy balance and actual losses with uncertainty. | kWh; MJ; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_energy_receive | receive | actual electricity heat and fuel | collected_record | meter interval; process; cohort; startup idle failure cleanup; voltage; supply region year; kWh; MJ; fuel reference T/P and composition; genuine rate or integrated volume; thermal carrier kg phase T/P enthalpy; provider coverage | Collect original meter readings and units before normalization; integrate only actual rates, never multiply an already integrated volume by time. Convert kWh to MJ once before attribution. Separate jobs/operations using direct meters then the declared hierarchy. Actual purchased heat and carrier legs must share one documented provider convention; in-house compressor/boiler work is measured only when real, never duplicated through both whole service and ingredients. Keep energy balance and actual losses with uncertainty. | kWh; MJ; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_energy_release | release | actual electricity heat and fuel | collected_record | meter interval; process; cohort; startup idle failure cleanup; voltage; supply region year; kWh; MJ; fuel reference T/P and composition; genuine rate or integrated volume; thermal carrier kg phase T/P enthalpy; provider coverage | Collect original meter readings and units before normalization; integrate only actual rates, never multiply an already integrated volume by time. Convert kWh to MJ once before attribution. Separate jobs/operations using direct meters then the declared hierarchy. Actual purchased heat and carrier legs must share one documented provider convention; in-house compressor/boiler work is measured only when real, never duplicated through both whole service and ingredients. Keep energy balance and actual losses with uncertainty. | kWh; MJ; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_energy_service | service | actual electricity heat and fuel | collected_record | meter interval; process; cohort; startup idle failure cleanup; voltage; supply region year; kWh; MJ; fuel reference T/P and composition; genuine rate or integrated volume; thermal carrier kg phase T/P enthalpy; provider coverage | Collect original meter readings and units before normalization; integrate only actual rates, never multiply an already integrated volume by time. Convert kWh to MJ once before attribution. Separate jobs/operations using direct meters then the declared hierarchy. Actual purchased heat and carrier legs must share one documented provider convention; in-house compressor/boiler work is measured only when real, never duplicated through both whole service and ingredients. Keep energy balance and actual losses with uncertainty. | kWh; MJ; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_materials_mount | mount | whole supplies and stock vectors | collected_record | row_id; supplier lot and wet formulation; grade and route; receipts; issues; returns; every opening and closing raw WIP and unassigned store state; mass; assay; provider; inherited exchange vector; transfer pair | Calibrated weighing and reconciled stock/issue/return records for each physical article or preparation. Keep full wet ingress V even when retained in closing stock. Obtain every actual formulation component/assay and moisture without summing children with whole purchases. Separate onsite ingredients or externally completed intermediate ownership. Record each actual intermediate state and its inherited per-exchange vectors; match internal outgoing/incoming handoffs before cancellation. Record raw material returns as separate full physical directions where actual. | kg | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_materials_print | print | whole supplies and stock vectors | collected_record | row_id; supplier lot and wet formulation; grade and route; receipts; issues; returns; every opening and closing raw WIP and unassigned store state; mass; assay; provider; inherited exchange vector; transfer pair | Calibrated weighing and reconciled stock/issue/return records for each physical article or preparation. Keep full wet ingress V even when retained in closing stock. Obtain every actual formulation component/assay and moisture without summing children with whole purchases. Separate onsite ingredients or externally completed intermediate ownership. Record each actual intermediate state and its inherited per-exchange vectors; match internal outgoing/incoming handoffs before cancellation. Record raw material returns as separate full physical directions where actual. | kg | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_materials_receive | receive | whole supplies and stock vectors | collected_record | row_id; supplier lot and wet formulation; grade and route; receipts; issues; returns; every opening and closing raw WIP and unassigned store state; mass; assay; provider; inherited exchange vector; transfer pair | Calibrated weighing and reconciled stock/issue/return records for each physical article or preparation. Keep full wet ingress V even when retained in closing stock. Obtain every actual formulation component/assay and moisture without summing children with whole purchases. Separate onsite ingredients or externally completed intermediate ownership. Record each actual intermediate state and its inherited per-exchange vectors; match internal outgoing/incoming handoffs before cancellation. Record raw material returns as separate full physical directions where actual. | kg | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_output_release | release | complete net set first release | collected_record | cohort; configuration; actual piece complement; count check; gross set weight; measured packaging tare; net accepted mass; moisture; first release time; rejects; samples; FG opening and closing | Weigh complete sets or traceable whole lots on calibrated scales and subtract actual separately weighed packaging. Pair counting-board or validated count-control records with cut/interlock/image/integrity tests and final whole-set acceptance, including actual required final packed-line checks; do not treat an intermediate cutting approval as first release. Track destructive samples and prior release IDs. Sum only newly released net mass Q, including retained constituents/water once; do not infer kg from nominal pieces, dimensions, thickness or retail weight. | kg | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_pack_pack | pack | each physical package pool and direction | collected_record | pool; material grade; complete wet article; empty stock; WIP attachment; FG attachment; reusable stock; opening; closing; P; I; ER; gross S; EO; measured origin W; internal reuse; repair X_in and X_out; water legs; upstream owner; actual_whole_receiver_Qt_once; actual_full_provider_quantity_once; nested_component_bridge; actual_physical_cohort_provenance; evidenced_service_vectors; provider_unit_basis; original_Q0_each_cohort; Qanalysis; actual_disjoint_retained_repair_water_increments; actual_disjoint_departures | Weigh each actual article and every actual external leg separately. P/I ownership is disjoint and supplier-included ingress stays physically visible with one upstream owner. Trace each of six pool legs; internal reuse cancels. Repair wood, nails and each water phase retain new influx even if kept in full wet closing stock. X removes only same-side duplicate other flow terms, not stock or the opposite side. An actually mixed waste outlet remains one Waste exchange; independently measured pool-origin W is a nonadditive tracing subaccount, not another outlet or provider. No allocation/stock-consumption correction is applied to physical V. Actual whole contaminated waste is one full receiver transfer with nested substrate/residue/water; treatment service vectors are evidenced separately for served original cohorts and compatible provider units. P/I/ER are distinct inward; S actual filled dispatch and EO empty outward are distinct. Use the complete wet bridge with actual disjoint repair/water increments and departures. | kg | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_service_service | service | performed services of original cohort | collected_record | original cohort receipt; original Qc; H start and end; opening closing FG; gross dispatch return owner return; original delivery ID and actual mass; added lost water and parts; authorization; work; tests; acceptance; hold and disposal; actual loads | Collect all performed service events and raw quantities in H for original Qc; retained FG does not erase performed burden. Record external physical legs at full gross quantity with their actual added/lost matter; do not assume return equals old delivery or reverse a guessed mass. Use documented permission/postwork tests/acceptance for qualification, but retain unauthorized/failed/rejected actual work and outcome. Do not create new manufacturing output from delivery/retest/rework or natural sorption. | kg; kWh; MJ; m3; h | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_species_mount | mount | actual species and independent material water | collected_record | species; CAS; origin; phase; medium; inlet and outlet; actual volume or rate; interval; T/P/RH; density; H2O assay; actual reaction evidence; fossil/biogenic C; retained constituents; capture; detection limit; uncertainty | Measure matched inlet/outlet flow and humidity/concentrations with actual state/density and independent material moisture/elemental assays. Keep gross N2/O2/Ar/H2O and every identified actual molecule apart; net generation/uptake is a distinct nonadditive result. One whole-air throughput is not added to the same constituent flows. Record actual oxidative setting and real reaction water only when supported; no single residual fitted to multiple unknowns, no speciation from VOC/COD/NOx/PM indicators, no copied source rates or factors. | kg; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_species_print | print | actual species and independent material water | collected_record | species; CAS; origin; phase; medium; inlet and outlet; actual volume or rate; interval; T/P/RH; density; H2O assay; actual reaction evidence; fossil/biogenic C; retained constituents; capture; detection limit; uncertainty | Measure matched inlet/outlet flow and humidity/concentrations with actual state/density and independent material moisture/elemental assays. Keep gross N2/O2/Ar/H2O and every identified actual molecule apart; net generation/uptake is a distinct nonadditive result. One whole-air throughput is not added to the same constituent flows. Record actual oxidative setting and real reaction water only when supported; no single residual fitted to multiple unknowns, no speciation from VOC/COD/NOx/PM indicators, no copied source rates or factors. | kg; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_species_service | service | actual species and independent material water | collected_record | species; CAS; origin; phase; medium; inlet and outlet; actual volume or rate; interval; T/P/RH; density; H2O assay; actual reaction evidence; fossil/biogenic C; retained constituents; capture; detection limit; uncertainty | Measure matched inlet/outlet flow and humidity/concentrations with actual state/density and independent material moisture/elemental assays. Keep gross N2/O2/Ar/H2O and every identified actual molecule apart; net generation/uptake is a distinct nonadditive result. One whole-air throughput is not added to the same constituent flows. Record actual oxidative setting and real reaction water only when supported; no single residual fitted to multiple unknowns, no speciation from VOC/COD/NOx/PM indicators, no copied source rates or factors. | kg; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_species_waste | waste | actual species and independent material water | collected_record | species; CAS; origin; phase; medium; inlet and outlet; actual volume or rate; interval; T/P/RH; density; H2O assay; actual reaction evidence; fossil/biogenic C; retained constituents; capture; detection limit; uncertainty | Measure matched inlet/outlet flow and humidity/concentrations with actual state/density and independent material moisture/elemental assays. Keep gross N2/O2/Ar/H2O and every identified actual molecule apart; net generation/uptake is a distinct nonadditive result. One whole-air throughput is not added to the same constituent flows. Record actual oxidative setting and real reaction water only when supported; no single residual fitted to multiple unknowns, no speciation from VOC/COD/NOx/PM indicators, no copied source rates or factors. | kg; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_waste_waste | waste | actual outlet and treatment ownership | collected_record | outlet; origin pool; wet kg; moisture and composition; contamination; receiver and treatment; opening and closing; actual external sale or return; disposal; measured origin W; original cohort; burden owner; actual_whole_receiver_Qt_once; actual_full_provider_quantity_once; nested_component_bridge; actual_physical_cohort_provenance; evidenced_service_vectors; provider_unit_basis; original_Q0_each_cohort; Qanalysis; actual_disjoint_retained_repair_water_increments; actual_disjoint_departures | Calibrated actual segregated-bin and dispatch weighing with receiver documents; one physically mixed outlet uses one total Waste quantity and independently measured nonadditive origin pools. No total-plus-parts double count, no Product UUID for Waste, no treatment duplication and no automatic manufacturing/handling burden subtraction for sale or export. Retain actual liquid/solid/species states and emission/capture gates. Actual whole contaminated waste is one full receiver transfer with nested substrate/residue/water; treatment service vectors are evidenced separately for served original cohorts and compatible provider units. P/I/ER are distinct inward; S actual filled dispatch and EO empty outward are distinct. Use the complete wet bridge with actual disjoint repair/water increments and departures. | kg | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_water_mount | mount | separate actual water phases | collected_record | supply and return legs; stock water by state; carrier water; each material moisture; liquid kg and volume; density at measured T/P; reaction/free/sorbed water; condensate; actual receiver | Measure independently added supply and every actual liquid/steam/condensate leg at the declared gate; obtain actual substance-specific density/state for volume conversion. Retain complete wet stocks and new influx together. Reconcile formulation/product/packing/asset/repair/waste water independently, including ordinary storage/handling sorption/desorption; no assumed pure-water density for an ink/adhesive/waste mixture. No reaction-water inference without chemical evidence. | kg; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_water_print | print | separate actual water phases | collected_record | supply and return legs; stock water by state; carrier water; each material moisture; liquid kg and volume; density at measured T/P; reaction/free/sorbed water; condensate; actual receiver | Measure independently added supply and every actual liquid/steam/condensate leg at the declared gate; obtain actual substance-specific density/state for volume conversion. Retain complete wet stocks and new influx together. Reconcile formulation/product/packing/asset/repair/waste water independently, including ordinary storage/handling sorption/desorption; no assumed pure-water density for an ink/adhesive/waste mixture. No reaction-water inference without chemical evidence. | kg; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |
| cp_water_service | service | separate actual water phases | collected_record | supply and return legs; stock water by state; carrier water; each material moisture; liquid kg and volume; density at measured T/P; reaction/free/sorbed water; condensate; actual receiver | Measure independently added supply and every actual liquid/steam/condensate leg at the declared gate; obtain actual substance-specific density/state for volume conversion. Retain complete wet stocks and new influx together. Reconcile formulation/product/packing/asset/repair/waste water independently, including ordinary storage/handling sorption/desorption; no assumed pure-water density for an ink/adhesive/waste mixture. No reaction-water inference without chemical evidence. | kg; m3 | Each actual lot/event plus matched meter interval | Complete production interval including failures; original-cohort service H explicitly separate | One declared site/configuration and matched upstream/receiver gates | per 1 kg reference flow | Calibration; original receipts/logs; independent assays; acceptance; uncertainty and gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net_release | finished_puzzles | Q = sum of measured net mass of newly first-quality-released complete sets; keep actual complete-set count and configuration masses as independent reconciliation. No packaging, prior FG or never-accepted rejected/destroyed samples in Q; already first-accepted later destroyed sets remain in original Q and their actual loss/disposition bridge. | accepted_net_mass; release_id; cp_output_release | Q | `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq` |
| c_manufacturing_vector | burden dimensions only | For each exchange i: A_i = inherited assigned opening raw/WIP/unassigned-store vector + actual new attributable material/service/provider/work/treatment burden-addition vector before stock correction - genuinely unused/unassigned closing raw/WIP/store vector - justified transfer to a distinct other cohort/function. First-released closing FG is not a subtractable vector. Already stock-corrected consumption is not corrected again; ordinary scrap/sale/waste is not that other function. | opening_vectors; actual_new_burden_additions; closing_unassigned_vectors; justified_handover; cp_materials_receive; cp_materials_print; cp_materials_mount | A_i | `ilcd-detailed-2010` |
| c_final_burden | manufacturing and service burden dimensions | b_i = A_i / Q exactly once after original-unit conversion and actual attribution. For performed original-cohort services use b_i_h = A_i_h / Qc exactly once with original measured Qc and observed H; only unused/unassigned service charge carries forward. Collection/aggregation/card descriptions refer to this single division and do not divide again. Q or Qc zero/missing yields no corresponding unit result, while actual raw loads remain. | A_i; Q; A_i_h; Qc; H | b_i; b_i_h | `ilcd-detailed-2010` |
| c_final_gross | all physical gross cards | g_i=V_i/Qanalysis is a diagnostic of the full actual physical event recorded once with declared positive observation basis. Actual linked model demand uses separate evidenced A_i/Q0_i or A_i_h/Qc for each original cohort in compatible provider units. Never repeat the full shared receiver/provider quantity for every cohort or shrink physical V by service shares; zero or unknown basis has no unit result. | V_i; Qanalysis; A_i; Q0_i; A_i_h; Qc; cp_pack_pack; cp_service_service | g_i; g_i_h | `ilcd-detailed-2010` |
| c_wet_gates | all physical stock and flow ledgers | For each consistent gate: full wet opening stock + actual gross incoming = full wet closing stock + actual gross outgoing, including actual retained new repair matter/water; internal matched transfers cancel only after pair reconciliation. At manufacture Q already includes first-released closing FG, so FG stock belongs to the distinct service/FG gate, never add Q and its same closing FG twice. For each packaging pool include actual P/I/ER and S/EO/W plus separately measured water/repair legs; X_in/out removes same-side other duplicate terms only. Whole/constituent totals are disjoint or reconciled nonadditive views. | wet_opening; actual_in; wet_closing; actual_out; transfer_pairs; X_in; X_out | gate residual and uncertainty | `ilcd-detailed-2010` |
| c_units | native numerator conversions | Convert raw units before attribution: 1 kWh = 3.6 MJ; mass/volume requires the actual substance measured density at recorded phase/T/P, not a secondary-property coefficient or water default. Integrate actual rates over their measured interval once; cumulative volume is already integrated. Keep elemental and H2O balances independent of actual-species accounting and reaction evidence. | raw_quantity; native_unit; measured_density; phase; T; P; interval | converted_raw_quantity | `epa-printing-eiip-2002`; `ilcd-detailed-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all selected flows | Verify actual complete product/stock/preparation/phase/route/grade/type/media and native restrictions. UUID absence for ordinary auxiliary/provider data is tracked, while a contradictory or unconfirmed complete reference identity blocks use. | Full supplier BOM/SDS and native identity |
| dq_measured | all physical and burden quantities | Calibrated scales/meters, independent moisture/assays/density/species, matched periods and documented uncertainty; no guessed formulation/mass/yield/time/lifetime/performance. | Calibration; original logs; lab methods; custody |
| dq_lineage | raw WIP stores FG and services | Retain each state and every inherited exchange vector, raw failed/zero-output periods, actual source/recipient and performed H; gaps remain explicit and never zero. | Stock vector ledger; cohort release receipts; service events |
| dq_scope | evidence and provider coverage | Producer case supports physical route only; no single SKU/factory universalization. Check all inputs/backgrounds and actual limits; scientific and translation approvals remain separate. | Complete source context; supplier coverage matrix; uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_core` | finished_puzzles | Verify one complete whole puzzle Product reference and its actual construction/state; components, substrate sheets, adhesive and boxes cannot replace it. Native compatibility includes full names/comments/CAS/route/form/grade/geography/type/media and every property/group/reference unit. A broad compatible manufactured family may be positively restricted to this terminal; a hard identity conflict is not waived by classification. | `ravensburger-puzzle-manufacture-2025`; `un-cpc-3-2025` |
| `v_q` | reference and every row | Reconcile same Q/cohort/site/configuration in reference, inventory, raw protocols and one final quotient. Q includes released closing FG once. Production, FG/service and consolidated gates must agree; gross legs use V and burden dimensions use A independently. Missing or Q=0 blocks a unit result; missing data is not zero. | `ilcd-detailed-2010` |
| `v_completeness` | all processes | Retain every actual startup/idle/failed/rework/cleanup/treatment load and raw/WIP/non-WIP inherited vector. Screen every route and receipt for additional actual chemicals, fuels, refrigerants, packaging, components, liquids, Waste outlets and molecules; add one specific atomic card per real new exchange before claiming completeness. Do not hide unlisted real terms in other or zero. | `ravensburger-puzzle-manufacture-2025`; `epa-printing-eiip-2002`; `ilcd-detailed-2010` |
| `v_balance` | materials; packaging; assets; species | Independently close whole wet mass, water and relevant elements with measurement uncertainty and every gross leg/stock. Match nonadditive formulation/whole-article bridges, each actual package P/I/ER/S/EO/W, repairs and water X same-side de-duplication, no lost retained influx and no invented split of one mixed Waste stream. | `ilcd-detailed-2010`; `epa-printing-eiip-2002` |
| `v_source` | all rule evidence | Primary producer examples support route/terminal context only within their actual scope; no source supplies a universal recipe, yield, piece mass, drying schedule, lifetime or emission factor here. Retain actual supplier activity, measured density/assay, acceptance and complete backgrounds before data-package completeness. | `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq` |
| `v_units` | all inventory rows | Preserve each exchange native extensive numerator, including kg, MJ, kWh, m3 and actual time if applicable; Mass/kg requirements apply only to the net reference denominator and mass exchanges. No count-to-kg factor, density or geometrical yield is derived from nominal pieces, box size, thickness, retail weight or a secondary flow-property coefficient. | `clementoni-puzzle-faq`; `ilcd-detailed-2010` |
| `v_rework` | service | Only actual documented postrelease work is modelled; qualification requires manufacturer/spec permission, postwork tests, acceptance and disposition. Unauthorized/failed/rejected real work and logistics remain in raw ledgers with actual hold/waste outcome; no new first-release Q or assumed repaired product. Natural humidity exchange remains a physical event without invented work. | `ravensburger-puzzle-manufacture-2025`; `clementoni-puzzle-faq` |
| `v_separate` | all inventories | Keep scientific review, translation review, dataset verification and product identity claims distinct. Usable site data requires all applicable gates and truthful gaps; source documentation alone establishes none of those approvals. | `ilcd-detailed-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A completed cohort-specific attributable cradle-to-gate puzzle-production dataset with separately linked observed original-cohort services and full physical ledgers. |
| allowed_use | Only the declared flat printed solid-board complete puzzle construction/route and actual compatible providers; downstream studies separately define use/end-of-life and transport. |
| excluded_use | No automatic all-puzzle technology coverage; no equal service from kg, universal piece mass, lifetime, safety/age/certification claim, mapping decision or scientific approval. |
| required_metadata | All required qualifiers; actual cohort/Q/Qc/H; source/receiver/provider coverage; complete raw and inherited vectors; route/test/packaging/species records; uncertainty. |
| required_quality_disclosure | Applicability, real unresolved identities and values, failed/zero-output histories, excluded future services, allocation reasoning, physical closure and unit-result completeness. |
| update_trigger | Changed complete-set construction, route, formulation, supplier boundary, release gate, native restriction, observation H or actual waste/utility/species condition. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | United Nations Statistics Division. CPC Version 3.0 Structure and Explanatory Notes (30 June 2025), p.193: 38550 and adjacent 38540/38560. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification product scope only; not manufacturing or mapping approval. |
| ravensburger-puzzle-manufacture-2025 | literature | Ravensburger AG newsroom. Photo report: How is a Ravensburger puzzle made? (14 May 2025), complete 2D production report, steps 1–23. https://myconvento.com/public/newsroom/data/plugin/news/run/show_news/news_id/6652288/lang/25/id/634 | Primary qualitative manufacture/whole-set context: print and actual finishing; paper-board mounting; die/format cut; separation/count checks; distinct packaging and storage. Case quantities are not defaults. |
| clementoni-puzzle-faq | literature | Clementoni. FAQs, Jigsaw puzzles: complete-set replacement, nominal versus actual pieces and finished-size caveats. https://en.clementoni.com/pages/faqs | Independent complete-set and count/dimension counterevidence; not a factory glue recipe or numeric mass conversion. |
| epa-printing-eiip-2002 | official_guidance | US EPA/EIIP. Volume II Chapter 15: Printing, Packaging, and Graphic Arts (May 2002), sections 2.1.1 and material-balance discussion; sheetfed/web/waterless distinctions retained. https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Printing/chemical-species and raw-unit context only; no generic speciation, factor, heatset assumption or puzzle formulation. |
| ilcd-detailed-2010 | official_guidance | European Commission JRC. ILCD Handbook: General guide for LCA, Detailed guidance, first edition March 2010, §§7.9.2–7.9.3 including attributional scope and all preceding hierarchy conditions. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Study-context conditional attributional hierarchy; subdivision/virtual subdivision; exchange-specific determining causality; remaining common-process-exit market value. Not industrial process or formulation evidence. |
