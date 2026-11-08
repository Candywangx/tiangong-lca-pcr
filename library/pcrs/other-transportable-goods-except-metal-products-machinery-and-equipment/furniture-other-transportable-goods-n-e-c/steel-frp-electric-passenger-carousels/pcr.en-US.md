---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.steel-frp-electric-passenger-carousels
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Fairground amusements: complete steel/FRP electric carousel manufacture

## 1. Scope and Applicability

This method covers one complete new electrically driven passenger carousel manufactured from actual structural/deck stock and FRP or their disclosed finished intermediates through first whole-machine quality release. The supported route uses an aluminium chequered deck; the source alternative of treated wood is not silently combined. Dinis provides a complete manufacture account; independent Sartori material supports metal/FRP manufacture, mechanical/electrical assembly and factory tests. These qualitative technical examples are not one SKU/site, recipes, inventory rates or proof of any particular approval. The original classification is broader: other fairground ride architectures require evidence and method assessment within this same record. `dinis-carousel-manufacture-2022`; `sartori-ride-manufacture`; `un-cpc-3-2025`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.steel-frp-electric-passenger-carousels |
| classification_refs | CPC 3.0 38600; narrower product and route boundary |
| covered_products | Complete new steel/FRP electric passenger carousel with actual aluminium deck and declared whole-ride supply. |
| excluded_products | Ordinary furniture or playground seat alone; motor/steel frame/track alone; toys; shooting-gallery, coaster, swing, hydraulic or unpowered architectures without route evidence; treated-wood deck route; foundations, field construction/installation, operation and admission services. |
| representative_product | One configuration-declared complete carousel with measured net M, serial identity and actual first-release criteria. No nominal rider capacity or power is imposed. |
| production_route | Receipt → actual steel/deck cutting/forming/welding → FRP lay-up/cure/trim → surface preparation/coating/drying → mechanical/electrical/safety integration → actual test/rework → unique first release → separate observed packing/storage/dispatch. Make/buy stages are disjoint. |
| market_state | New first-quality-released complete net ride at manufacturing gate, possibly disassembled for transport with all matching modules retained. Packaging, ballast and transport fixtures are separate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured passenger-carrying electric carousel |
| How much | 1 kg of newly first-quality-released complete net ride |
| How well | Actual complete BOM, frame/deck and passenger-body integrity, drive/control/safety configuration and recorded acceptance tests/results; no universal certification or threshold. |
| How long or cycle | One manufacture/first-release cohort; actual later service horizon H retains original Qc. No operating life or maintenance interval is prescribed. |
| reference_flow_link | finished_ride |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Roundabouts, swings, shooting galleries and other fairground amusements `45d82429-98ee-4e8b-ab85-8708a78a8e27` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual model configuration and serial identity; Complete released BOM and included transport modules; Frame deck passenger bodies drive motor controls and installed safety boundary; Actual steel grade and aluminium alloy supply forms; FRP reinforcement resin chemistry whole formulations and make-buy boundary; Actual coating cure cleaning and utilities route; Measured net M by configuration and unique first-release Q; Packaging excluded and each article pool legs; Actual test criteria load media energy outcomes and permissions; Site production interval observed service H and original Qc; Raw WIP non-WIP wet stocks and inherited exchange vectors; Native provider grade route voltage geography type media and exact unit compatibility; Waste receiver actual molecules water and carbon origins |

Declare every qualifier in the data package. A broad finished-product family neither supplies a factory inventory nor equates different ride functions by kg.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| release_mass | reference product | Mass | kg | Q sums actual first-release complete net ride masses, with each retained component/fluid/water once and packaging excluded. A physical 1 kg is a normalized fraction of a complete ride, not a standalone usable ride part. |
| native_units | all inventory rows | Actual native extensive property | native | Native quantities remain mass, energy, volume, count or service as actually measured. Convert kWh to MJ once with 3.6 MJ/kWh. Item(s) and item are identical count with factor 1, never a kg conversion. Count-to-mass uses actual configuration-specific calibrated M; never infer kg or density from secondary coefficients. Integrated volumes are not multiplied by time; only true rates are integrated. Whole-ride M applies only to the same complete ride configuration. Other part/package counts remain native count where appropriate; a needed mass bridge uses independently weighed same-article mass and actual state, never whole-ride M. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Structural/deck stock, reinforcement and actual whole formulations with disclosed purchased finished modules at receiving; upstream metal/polymer/module production remains required. |
| starting_condition_role | Material and unfinished/intermediate supply handoff for complete ride manufacture |
| product_classification_scope | Supported electric steel/FRP carousel with aluminium deck within the broader original CPC38600 class |
| recursive_input_rule | Matched internal intermediates cancel; externally supplied modules retain full compatible upstream burden once. Already finished/returned rides retain original history and do not create a recursive purchase or new Q. |
| upstream_dataset_requirement | Actual compatible raw materials, whole preparations, finished modules, tools/assets, utilities, packaging, transport and waste treatment with explicit ownership, native quantities and limitations. |
| disclosure | Actual make/buy route, gates, cohort and H, physical and inherited-vector stocks, supply/test/acceptance conditions, provider scope, unknown identities and quantities. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | all processes | Cover actual raw steel/deck and reinforcement/formulation receipt through cutting/forming/welding, FRP lay-up/cure/trim, surface preparation/coating/actual drying, mechanical/electrical/safety assembly, actual functional/load tests and first whole-ride quality release. Include actual pre-release rework and all failure/cleanup loads. Purchased finished modules replace their own manufacture once with complete upstream coverage. | `dinis-carousel-manufacture-2022`; `sartori-ride-manufacture` |
| b_q | finished_ride | Q is the sum of measured net complete-ride kg uniquely first quality-released in the production cohort. Include actual retained components, coatings, fluids and water once; exclude packaging, test ballast and unreleased/failed machines. Released closing FG already belongs to Q and is neither a second production output nor manufacturing Bclose. Delivery/reinspection/dismantling/reassembly never creates new production. | `dinis-carousel-manufacture-2022`; `sartori-ride-manufacture` |
| b_scope | whole ride | This bounded method is new steel/FRP electric carousel manufacture with an actual aluminium deck, not the full technology range of the classification. Complete ride supply is established by actual released BOM, structural and passenger-body complements, drive, controls and installed safety items; separate foundations, civil/site construction, field installation and customer operation from first factory release. Retain actual factory tests without importing customer running duty or nominal ratings as measured factory demand. | `dinis-carousel-manufacture-2022`; `sartori-ride-manufacture`; `un-cpc-3-2025` |
| b_supply | all product inputs | Record each whole supplied preparation/article once; assay, active ingredient and carrier water are nonadditive composition children. Onsite preparation instead records each actually purchased component, mixing energy and loss. Purchased motor, cabinet, bearing and finished body do not also procure their embedded metals, polymers or prior operations. Use disjoint supply or a reconciled constituent bridge with internal handoffs cancelled. | `dinis-carousel-manufacture-2022`; `sartori-ride-manufacture` |
| b_stock | all inventory rows | Preserve physical wet quantities and each inherited exchange vector for every opening/closing raw, WIP and unused/unassigned non-WIP store. Cohort burden uses brought-forward vectors plus actual work; carry forward only genuinely unassigned raw/WIP/service charges. Ordinary rejects, cleanup, samples and scrap are not other-function transfers. A real other cohort/function requires justified allocation and a single documented vector handover. Do not subtract consumption already net of stores a second time. | `ilcd-detailed-2010` |
| b_zero | all processes | Keep failed zero-output lots, startup/shutdown, idle, cleaning, extraction, testing, rework and treatment. Q=0 retains complete raw physical and burden ledgers and produces no unit result. Unknown is never zero or not_applicable. Add every actually present unlisted atomic exchange explicitly. | `ilcd-detailed-2010` |
| b_physical | all physical legs | Every external material, component, asset, fluid, Waste and heat-carrier Product leg retains full gross V in its actual native extensive unit. Allocation, burden shares, inventory changes or service fractions cannot scale logistics. Reconcile manufacturing, FG/service and consolidated physical gates with internal transfers cancelled once. Full wet closing stock and a real retained influx coexist. | `ilcd-detailed-2010` |
| b_pack | pack | For each actual same-unit whole-wet packaging article pool: O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, released-FG-attached and reusable whole-wet stocks. P independent new supply and I supplier-included ingress are disjoint; ER is actual inward return. S_filled includes actual filled outward shipments/returns; EO_empty is only empty outward return; these legs are mutually exclusive. W_whole includes substrate, retained material and water once. J_in/J_out are actual disjoint non-water repair/retained matter increments/departures, and H2O_in/H2O_out are actual water increments/departures including sorption/desorption, without double-counting water already in whole P/I/ER or other actual streams. X only reconciles duplicate OTHER same-side component entries before balancing: it is no extra physical flow and cannot cancel true influx, whole-wet C or opposite-side flows. Substrate-only ledgers bridge to whole-wet stocks/exports by actual composition. Internal reuse cancels without repurchase, new Q or co-product credit; no invented repair. | `ilcd-detailed-2010` |
| b_x | all physical balances | X removes duplicate constituents only from another actual term on the same incoming or outgoing side. It cannot cancel stocks, the opposite side or a card merely because present. Whole wet articles and separately supplied components must be disjoint or explicitly bridged. Never use one mass residual to fit two unknown quantities. | `ilcd-detailed-2010` |
| b_species | waste; fabricate; frp; coat | Independently reconcile total wet mass, relevant elements and each actual molecular species. Distinguish free/carrier/sorbed/phase/structural water and reaction water supported by actual chemistry. CO2 origins, N2/O2/Ar/H2O and each real solvent remain distinct. VOC/COD/NOx/PM and total-element indicators are not molecules. Actual separate wastes remain separate; one actual mixed Waste stays one receiver/total with nonadditive measured origin_W. | `ilcd-detailed-2010` |
| b_service | service; assets; pack | For each already released original cohort observe actual horizon H and original measured Qc. Keep performed warehouse/packing/handling/dispatch, returned ride/parts, dismantling/reassembly/reinspection and actual later work with original history. Do not deduct performed service for retained FG; carry only unused/unassigned service. Future work remains unknown. Permission/test/acceptance governs authorization and qualification only: all unauthorized, failed, rejected or held real work/logistics/loads remain. No presumed restoration or new Q. | `ilcd-detailed-2010` |
| b_heat | coat; all utilities | Record actual thermal supply agreement, each true heat-carrier Product return and its kg, phase, T/P and enthalpy, together with actual heat MJ. One provider owns the energy once. Neither a boiler/steam loop nor condensate is presumed. Integrated gas/liquid volume is already cumulative; integrate only actual rates and use independently measured substance-specific density/state. | `ilcd-detailed-2010` |

### Complete applicability and physical/burden context

This method covers one complete new electrically driven passenger carousel manufactured from actual structural/deck stock and FRP or their disclosed finished intermediates through first whole-machine quality release. The supported route uses an aluminium chequered deck; the source alternative of treated wood is not silently combined. Dinis provides a complete manufacture account; independent Sartori material supports metal/FRP manufacture, mechanical/electrical assembly and factory tests. These qualitative technical examples are not one SKU/site, recipes, inventory rates or proof of any particular approval. The original classification is broader: other fairground ride architectures require evidence and method assessment within this same record. `dinis-carousel-manufacture-2022`; `sartori-ride-manufacture`; `un-cpc-3-2025`

Declare every qualifier in the data package. A broad finished-product family neither supplies a factory inventory nor equates different ride functions by kg.

Each card is one conditional actual exchange. Unknown is not absent. Add every real additional specific material, whole formulation, utility, separately supplied safety part, packaging article, actual species and waste before using the method. Chemistry candidates do not prescribe a recipe. Raw physical V and burden A are distinct ledgers; all flow-card results refer to the same single final calculation in section 8.

Aggregation fields declare final reporting basis only: collection retains undivided raw totals. The following single calculation executes each final division; cards and aggregation fields reference that same result without dividing again.

Preserve the entire native counterevidence: the whole Product basename is Roundabouts, swings, shooting galleries and other fairground amusements / 旋转木马、秋千、射击场及其他游乐场用娱乐设备; type Product flow, finished manufactured production mix at plant, Mass/kg. Its general comments literally read “387 Prefabricated buildings” / “387 预制建筑”. In the complete official CPC3.0 structure CSV, line1820 is38600 and line1821 is the bare387 Prefabricated buildings heading, followed by3870/38701–38704. The isolated native heading exactly matches the next source category. Admission of this positive complete physical carousel is an explicit inference from that adjacency, full names/type/state/reference and real primary manufacture evidence; it is not established knowledge of how database data were formed, not a correction to native fields and not CPC metadata alone. Any genuine material/phase/route hard conflict still blocks fit; independent review remains pending. Sources: un-cpc-3-2025;dinis-carousel-manufacture-2022;sartori-ride-manufacture.

Dinis actually describes design, laser-cut/welded steel frame, a choice of aluminium chequered plate or treated-wood platform, layered glass fibre with resin adhesive, polishing with dust removal, varnish/primer/paint and a paint baking room, followed by bearing/centre pole/motor/horse/LED assembly and running the complete ride before shipment. This method selects the aluminium branch, not both deck alternatives. Sartori explicitly describes its own metal/fibreglass/painting/mechanical and electrical work and tests before factory exit; duplicated layout card order does not prove a test-before-manufacture chronology. Retain the real in-house laminate, dust removal and heated paint-room work; do not hide them in an arbitrary receiving or external-utility gate. These manufacturer statements are qualitative route evidence, not a common SKU/factory, recipe or independent safety approval. Sources: dinis-carousel-manufacture-2022;sartori-ride-manufacture.

Measure M for one actual complete accepted serial/configuration at the fixed reference gate and recorded physical state using calibrated full-ride weighing. Include actual permanent components/coatings/installed fluids/water once, independently exclude real transport packaging, temporary shipping fixtures and test ballast. If complete transport modules must be weighed separately, use actual calibrated module records at matched state, unique module identities and a nonoverlapping complete released-BOM reconciliation; never add whole-ride weighing and its included modules twice or use drawings/density, nameplate, rider capacity or a nominal per-machine weight. A kg reference is a normalized fraction of the complete accepted ride, not a usable spare part. Whole-ride M cannot convert another part/package count; use its own actual mass bridge only when needed. No numeric M is supplied by this PCR.

Lock Q (original Q0) as the positive sum of unique complete-ride first-acceptance event net masses at one fixed actual gate/state, each linked to original serial/BOM. Preserve original M/event/date and a disjoint original-basis bridge of remaining net deliveries, every actual on-site accepted state including FG/holds/accepted samples/repair WIP, irreversible material/fluid/water losses and other terminal dispositions. Already accepted later destroyed or partly lost rides remain in original Q0; never-accepted destroyed specimens are excluded. Dismantling/reassembly/retest/return/redispatch and moisture change create no second event. Never restore lost matter into survivors and count the loss again. Q0 is an event account, not another external physical output; Q=0 or unknown positive basis preserves raw totals without a unit result.

For each exchange vector A=B_open+U_new-B_close-T_other. U_new is actual new material/service/provider/work/treatment burden addition BEFORE stock correction; B covers raw/WIP or genuinely unused/unassigned non-WIP stores/service charges, never already accepted FG or performed services. Already stock-corrected consumption uses the reconciled equivalent ledger without another opening/closing correction. Own inherited foreground/WIP and provider aggregate versus included expanded histories are not added twice. Ordinary scrap/reject/sample/waste sale is not a true independent other function permitting a burden handover. Physical raw/WIP/FG/asset/ballast/package fleets and stocks remain independent and complete.

Use three ledgers for a shared waste, asset or ballast-service event: one actual full physical receiver Qt and full actual provider quantity recorded once; independently known component/physical-cohort provenance; and distinct evidenced nonoverlapping environmental/treatment-service vectors per original served cohort in compatible provider units. Qt/Qanalysis is only raw physical disclosure on a declared positive observation basis; linked modeled demand uses attributable A/original Q0 or A_h/original Qc. Unknown assignment stays unresolved. Never recharge the full shared receiver/provider quantity to every cohort, shrink actual physical waste by allocation shares or infer a fixed life/load/cycle count.

Whole contaminated crate/film/strap/cloth/filter or collection-container waste includes actual substrate, retained resin/paint/grease/dust/liquor and water once. Dry substrate and retained constituents are nested nonadditive accounts, not extra attached-material/water exports or repeated treatment demand unless truly separated before the boundary. Separate actual steel/aluminium/FRP/paint/effluent outlets stay separate; mixed-only origins are children of the one real mixed receiver. Full physical waste and actual fleets/stocks/receiver/provider quantities remain unchanged by service attribution.

For each actual same-unit whole-wet packaging pool use O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. P separate purchase and I supplier-included ingress are disjoint. ER is actual inward returned article with empty/filled state; for filled returns reconcile net contents and packaging component inside one full receipt. S is true outward filled shipment including genuine returned material or complete modules; EO only empty outward. J and water are disjoint actual repair/retained increments and departures. X only reconciles duplicate OTHER same-side component terms before this balance, never another added physical flow or deduction of actual P/I/ER, wet C, opposite legs or true retained influx. Substrate-only balances bridge explicitly to whole W by composition. Return/reuse gives no new Q/cofunction/credit.

Synthetic checks only, never empirical/default ride mass/life/duty/load factors: one10kg contaminated filter consists of8kg substrate+2kg retained material and serves old/new cohorts; receiver/provider quantity10kg occurs once. Hypothetically independently evidenced25%/75% compatible-unit treatment service gives2.5/7.5kg-equivalent modeled vectors; originalQnew100kg/Qold200kg gives0.025/0.0375kg-equivalent per kg reference. Not2.5kg physical export or full10kg demand again for both. A separate pool test O2+P3+I1+ER4+retained1=C3+S4+EO2+wholeW2=11kg has Wsubstrate1+retained1 nested once. Count and mass records stay independent; no actual filter, M, number of riders or operation energy inferred.

The manufacturer sources establish layered glass/resin bonding and actual primer/paint/baking operations, but do not identify an unsaturated-polyester/MEKP, epoxy/amine or acrylic supplier recipe. Those specific conditional cards are not a compulsory simultaneously used ingredient set or proof that Dinis/Sartori uses them. Activate only actual independently evidenced whole supplies and chemistry; other real formulations require their own atomic rows. Whole resins/hardeners/coatings include carrier/active ingredients once; source glass-layer count, chemical dosage, yield, cure schedule and emissions are not defaults. Actual reaction/retention/evaporation/water and species evidence remain independent, never conservation of reacting monomer by assumption or a VOC/COD/element residual inventing molecules. Unestablished essential matrix identification/quantification remains a concrete-study hold.

Native electricity retains exact Net calorific value / 净热值, 低位热值 and its MJ energy-unit group. Measured kWh times3.6 is electrical unit conversion only, not a fuel calorific-value or burner premise. The chosen electricity flow is CN grid-average below1kV to user; another actual supply requires its own compatible identity/provider, not an Italian factory proxy. Retain every real paint-baking/thermal producer, actual on-site combustion/voltage conversion/treatment and full materials/air/water/species/fuel/heat/return interfaces and losses. Outsourcing or a supplied heat label does not erase a known real operation or allow duplicate carrier/energy/provider histories.

Dinis reports a pre-shipment run and Sartori tests depending on requirements before factory exit. These are actual manufacturing/test stages, not a published universal structural-fatigue procedure, independent safety certification or operation-duty factor. Use actual engineering specification, test media/ballast, energy, permissions, results, failure/rework and release records. Test ballast is an independent reusable fleet/stock or actual waste; never permanent ride mass or a new full block per kg output by default. If actual required final packing/disassembly checks precede approval, retain that pre-release work in manufacturing; after accepted release only actual increments belong to original cohort service. Operation passenger-hours/nameplate power/lifetime are not measured factory testing demand. Unknown essential test/matrix/producer evidence cannot close through a future SOP or finite check. Sources: dinis-carousel-manufacture-2022;sartori-ride-manufacture.

ILCD principles apply only in a justified attributional allocation-needed study context: dedicated subdivision/virtual subdivision, exchange-specific determining physical causality, then genuinely residual contemporaneous values at the same real common-process gate and state. No arbitrary allocation menu, recycling credit, QFD functional equivalence or fixed service share is adopted. Preserve the complete primary qualifications and actual source/provider editions; engineering source/body/fingerprint checks do not establish scientific, translation, study, mapping or publication acceptance. Sources: ilcd-detailed-2010.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receive | Receipt and supply ownership | required | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| fabricate | Steel and deck fabrication | required | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| frp | FRP moulding and trimming | required | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| coat | Surface preparation coating and drying | required | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| assemble | Mechanical electrical and safety integration | required | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| test | Whole-ride testing and first release | required | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| pack | Separate packaging article pools | required | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| assets | Actual tooling and asset services | conditional | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| waste | Waste and molecular environmental exchanges | conditional | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |
| service | Observed original-cohort services | conditional | Actual owned operation or compatible linked upstream coverage; actual observed service only | Foreground or disjoint linked upstream | finished_ride |

Each card is one conditional actual exchange. Unknown is not absent. Add every real additional specific material, whole formulation, utility, separately supplied safety part, packaging article, actual species and waste before using the method. Chemistry candidates do not prescribe a recipe. Raw physical V and burden A are distinct ledgers; all flow-card results refer to the same single final calculation in section 8.

### Process: Receipt and supply ownership (`receive`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_receive`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receive`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_receive`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receive`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Steel and deck fabrication (`fabricate`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy carbon steel plate (`steel_plate`)

Actual structural plate before cutting; verify grade including Q235 only when supported by the actual certificate. No assumed steel mass, yield or thickness. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Hot-rolled non-alloy carbon steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Welded carbon steel structural tube (`steel_tube`)

Only actual separate purchased tube; section, steel grade, weld condition and amount from BOM and receipt. Do not also charge plate used by its supplier. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Welded carbon steel structural tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Aluminium chequered plate (`aluminium_deck`)

Selected deck route uses actually specified aluminium plate cut to fit. Alloy, surface, thickness and slip-related specification are recorded, not assumed. Treated-wood deck is an adjacent source alternative outside this bounded route. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Aluminium chequered plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Solid carbon steel welding wire (`welding_wire`)

Conditional actual solid wire supply, with deposited mass and fume/spatter measured independently. Flux-cored wire requires its own whole preparation card and replaces this card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Solid carbon steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Argon (`argon`)

Only independently supplied argon for the evidenced welding or laser route. A purchased premix is one separately identified whole gas preparation, not this plus constituent repurchases. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Carbon dioxide (`co2_gas`)

Conditional independently supplied welding carbon dioxide; physical phase, delivery state, fossil/biogenic origin and actual venting are distinct records. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Oxygen (`oxygen`)

Only actual cutting assist oxygen, never inferred from the existence of laser cutting. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Nitrogen (`nitrogen`)

Only actual supplied cutting assist nitrogen; purity and gas state from actual supply records. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Nitrogen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Aluminium oxide abrasive grinding disc (`abrasive`)

Conditional purchased complete grinding article, including its bonded matrix once. Other abrasive chemistry or tool form requires a specific separate card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Aluminium oxide abrasive grinding disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Alternating current (`electricity_fabricate`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_fabricate`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot-rolled non-alloy carbon steel plate (`steel_plate_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual structural plate before cutting; verify grade including Q235 only when supported by the actual certificate. No assumed steel mass, yield or thickness. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Hot-rolled non-alloy carbon steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Welded carbon steel structural tube (`steel_tube_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual separate purchased tube; section, steel grade, weld condition and amount from BOM and receipt. Do not also charge plate used by its supplier. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Welded carbon steel structural tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Aluminium chequered plate (`aluminium_deck_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Selected deck route uses actually specified aluminium plate cut to fit. Alloy, surface, thickness and slip-related specification are recorded, not assumed. Treated-wood deck is an adjacent source alternative outside this bounded route. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Aluminium chequered plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Solid carbon steel welding wire (`welding_wire_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional actual solid wire supply, with deposited mass and fume/spatter measured independently. Flux-cored wire requires its own whole preparation card and replaces this card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Solid carbon steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Argon (`argon_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only independently supplied argon for the evidenced welding or laser route. A purchased premix is one separately identified whole gas preparation, not this plus constituent repurchases. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Carbon dioxide (`co2_gas_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional independently supplied welding carbon dioxide; physical phase, delivery state, fossil/biogenic origin and actual venting are distinct records. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Oxygen (`oxygen_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual cutting assist oxygen, never inferred from the existence of laser cutting. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Nitrogen (`nitrogen_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual supplied cutting assist nitrogen; purity and gas state from actual supply records. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Nitrogen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Aluminium oxide abrasive grinding disc (`abrasive_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional purchased complete grinding article, including its bonded matrix once. Other abrasive chemistry or tool form requires a specific separate card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Aluminium oxide abrasive grinding disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

###### Welded carousel steel frame (`frame_wip_out`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Welded carousel steel frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricate`
- Sources: `dinis-carousel-manufacture-2022`

##### Waste flows

##### Elementary flows

### Process: FRP moulding and trimming (`frp`)

#### Inputs

##### Product flows

###### Chopped strand glass fibre mat (`glass_mat`)

Actual reinforcement supply form for onsite lay-up only; grade, sizing, moisture and binder remain actual. If a different fabric or roving is used, add that specific exchange. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Chopped strand glass fibre mat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Unsaturated polyester laminating resin preparation (`resin`)

Conditional whole purchased preparation only if actual formulation records establish this polymer and reactive-diluent route. Supplier article includes its actual carrier/monomer once; no assumed styrene fraction. Dinis establishes resin bonding, not this chemistry. Another resin replaces this candidate with its own exact card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Unsaturated polyester laminating resin preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Methyl ethyl ketone peroxide curing preparation (`peroxide`)

Only actual separately purchased curing preparation for a verified compatible resin system; whole supplied formulation, not pure active peroxide mass. No assumed dose, cure temperature or cure time. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Methyl ethyl ketone peroxide curing preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Paraffin mould-release wax preparation (`release_wax`)

Conditional actual whole release preparation with specified supply composition. It is not a default required ingredient. Reusable mould and actual replacement/cleaning are separately tracked. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Paraffin mould-release wax preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Acetone (`acetone`)

Only actual separately supplied acetone used in evidenced tool cleaning; concentration, water and emissions independently known. A whole purchased cleaner of another composition needs its own card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Acetone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Alternating current (`electricity_frp`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_frp`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chopped strand glass fibre mat (`glass_mat_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual reinforcement supply form for onsite lay-up only; grade, sizing, moisture and binder remain actual. If a different fabric or roving is used, add that specific exchange. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Chopped strand glass fibre mat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Unsaturated polyester laminating resin preparation (`resin_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional whole purchased preparation only if actual formulation records establish this polymer and reactive-diluent route. Supplier article includes its actual carrier/monomer once; no assumed styrene fraction. Dinis establishes resin bonding, not this chemistry. Another resin replaces this candidate with its own exact card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Unsaturated polyester laminating resin preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Methyl ethyl ketone peroxide curing preparation (`peroxide_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual separately purchased curing preparation for a verified compatible resin system; whole supplied formulation, not pure active peroxide mass. No assumed dose, cure temperature or cure time. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Methyl ethyl ketone peroxide curing preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Paraffin mould-release wax preparation (`release_wax_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional actual whole release preparation with specified supply composition. It is not a default required ingredient. Reusable mould and actual replacement/cleaning are separately tracked. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Paraffin mould-release wax preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Acetone (`acetone_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual separately supplied acetone used in evidenced tool cleaning; concentration, water and emissions independently known. A whole purchased cleaner of another composition needs its own card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Acetone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

###### Uncoated cured FRP carousel horse body (`frp_wip_out`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Uncoated cured FRP carousel horse body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frp`
- Sources: `dinis-carousel-manufacture-2022`

##### Waste flows

##### Elementary flows

### Process: Surface preparation coating and drying (`coat`)

#### Inputs

##### Product flows

###### Epoxy primer base preparation (`primer`)

Conditional complete separately purchased epoxy primer base only if actual route confirms it. A separately bought hardener is separate; a factory-premixed one-part formulation replaces both. Source painting does not establish epoxy chemistry. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Epoxy primer base preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Amine epoxy-primer hardener preparation (`primer_hardener`)

Conditional whole supplied amine preparation, matched to actual base by supplier records; no invented mixing ratio or reaction water. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Amine epoxy-primer hardener preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Acrylic topcoat preparation (`topcoat`)

Conditional whole actual acrylic topcoat; solvent-borne or water-borne supply and all separately purchased reducers must be specified. No generic source supports a universal binder, solvent fraction or emission factor. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Acrylic topcoat preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Acrylic clear varnish preparation (`varnish`)

Only actual distinct whole clear finish not already within supplied topcoat. Other chemistry needs its own card; do not infer a varnish layer from a decorative finish. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Acrylic clear varnish preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Alternating current (`electricity_coat`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_coat`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `ilcd-detailed-2010`

###### Liquid cooling water (`cooling_water_in`)

Only an actual external heat-exchange water leg. Record kg, liquid phase, composition, temperature, pressure and enthalpy on the supply/return interfaces; reconcile actual enthalpy difference with any separately reported heat service under one provider agreement. Do not buy the same energy twice or invent steam, condensate or a boiler. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Liquid cooling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `ilcd-detailed-2010`

###### Welded carousel steel frame (`frame_wip_in`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Welded carousel steel frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Uncoated cured FRP carousel horse body (`frp_wip_in`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Uncoated cured FRP carousel horse body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Supplied sensible process heat (`sensible_heat`)

Only a true purchased sensible-heat service established by actual supply/return enthalpy and provider agreement. Heat MJ is the energy accounting view of that same supply, not a second energy purchase on top of carrier-water mass. Retain actual carrier Product legs independently, with no invented boiler, phase change or default source. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Supplied sensible process heat
- Flow property / unit: Energy / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Epoxy primer base preparation (`primer_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional complete separately purchased epoxy primer base only if actual route confirms it. A separately bought hardener is separate; a factory-premixed one-part formulation replaces both. Source painting does not establish epoxy chemistry. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Epoxy primer base preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Amine epoxy-primer hardener preparation (`primer_hardener_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional whole supplied amine preparation, matched to actual base by supplier records; no invented mixing ratio or reaction water. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Amine epoxy-primer hardener preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Acrylic topcoat preparation (`topcoat_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional whole actual acrylic topcoat; solvent-borne or water-borne supply and all separately purchased reducers must be specified. No generic source supports a universal binder, solvent fraction or emission factor. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Acrylic topcoat preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Acrylic clear varnish preparation (`varnish_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual distinct whole clear finish not already within supplied topcoat. Other chemistry needs its own card; do not infer a varnish layer from a decorative finish. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Acrylic clear varnish preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Liquid cooling water (`cooling_water_return`)

Only an actual external heat-exchange water leg. Record kg, liquid phase, composition, temperature, pressure and enthalpy on the supply/return interfaces; reconcile actual enthalpy difference with any separately reported heat service under one provider agreement. Do not buy the same energy twice or invent steam, condensate or a boiler. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Liquid cooling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `ilcd-detailed-2010`

###### Coated FRP carousel horse body (`coated_body_out`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Coated FRP carousel horse body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

###### Coated carousel steel frame (`coated_frame_out`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Coated carousel steel frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coat`
- Sources: `dinis-carousel-manufacture-2022`

##### Waste flows

##### Elementary flows

### Process: Mechanical electrical and safety integration (`assemble`)

#### Inputs

##### Product flows

###### AC electric drive motor (`motor`)

Actual purchased complete motor, voltage, duty, cooling, configuration and provider boundaries recorded. Its copper, steel and insulation are nonadditive composition children, not new purchases. No default power or speed. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: AC electric drive motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Mechanical reduction gearbox (`gearbox`)

Actual separately purchased reduction gearbox only when not included within the complete motor drive unit; retain contained lubricant once. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Mechanical reduction gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Main slewing bearing (`bearing`)

Actual complete main bearing supplied for the measured configuration; no generic small motor bearing substitution. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Main slewing bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Carousel electrical control cabinet (`control`)

Actual supplied whole configuration-specific control cabinet including installed drives, switching and internal wiring once; onsite individual-component manufacture instead uses disjoint specific component cards. Installed control architecture and actual safety functions must be declared, not inferred from a marketing approval claim. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carousel electrical control cabinet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Insulated copper electrical cable (`cable`)

Only actual independently supplied site interconnection cable outside purchased motor/cabinet modules; conductor, insulation, connectors and installed/returned lengths reconciled. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Insulated copper electrical cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### LED lighting assembly (`lighting`)

Actual supplied whole lighting assembly installed on the ride; count its integrated wiring and driver once. Separate driver/cable is added only outside that supply. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: LED lighting assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Carbon steel bolt (`bolt`)

Actual separately procured fastener of specified steel/coating; nuts and washers require their own specific cards if separately supplied, not an unspecified fastener bundle. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carbon steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Finished FRP carousel horse body (`seat_module`)

Only actual externally finished body as alternative to matching onsite glass/resin/moulding/coating for that quantity. Preserve complete provider; a shell alone is not a complete ride or new reference product. Internal matched FRP handoff cancels. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Finished FRP carousel horse body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Carousel passenger restraint assembly (`restraint`)

Conditional actual complete restraint article when included in released BOM; actual test and permission criteria, no assumed universal architecture or certification. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carousel passenger restraint assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Steel machinery guard panel (`guard`)

Actual independently supplied guard panel outside fabricated structural steel; installed safety boundary declared from actual BOM. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Steel machinery guard panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Lithium-soap lubricating grease preparation (`grease`)

Only actual separately supplied whole grease preparation for onsite fill/service; retain initial module fill once and track leakage, returns and spent grease. Other thickener/base oil requires its own card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Lithium-soap lubricating grease preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Alternating current (`electricity_assemble`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_assemble`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `ilcd-detailed-2010`

###### Coated FRP carousel horse body (`coated_body_in`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Coated FRP carousel horse body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Coated carousel steel frame (`coated_frame_in`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Coated carousel steel frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### AC electric drive motor (`motor_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual purchased complete motor, voltage, duty, cooling, configuration and provider boundaries recorded. Its copper, steel and insulation are nonadditive composition children, not new purchases. No default power or speed. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: AC electric drive motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Mechanical reduction gearbox (`gearbox_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual separately purchased reduction gearbox only when not included within the complete motor drive unit; retain contained lubricant once. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Mechanical reduction gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Main slewing bearing (`bearing_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual complete main bearing supplied for the measured configuration; no generic small motor bearing substitution. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Main slewing bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Carousel electrical control cabinet (`control_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual supplied whole configuration-specific control cabinet including installed drives, switching and internal wiring once; onsite individual-component manufacture instead uses disjoint specific component cards. Installed control architecture and actual safety functions must be declared, not inferred from a marketing approval claim. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carousel electrical control cabinet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Insulated copper electrical cable (`cable_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual independently supplied site interconnection cable outside purchased motor/cabinet modules; conductor, insulation, connectors and installed/returned lengths reconciled. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Insulated copper electrical cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### LED lighting assembly (`lighting_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual supplied whole lighting assembly installed on the ride; count its integrated wiring and driver once. Separate driver/cable is added only outside that supply. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: LED lighting assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Carbon steel bolt (`bolt_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual separately procured fastener of specified steel/coating; nuts and washers require their own specific cards if separately supplied, not an unspecified fastener bundle. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carbon steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Finished FRP carousel horse body (`seat_module_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual externally finished body as alternative to matching onsite glass/resin/moulding/coating for that quantity. Preserve complete provider; a shell alone is not a complete ride or new reference product. Internal matched FRP handoff cancels. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Finished FRP carousel horse body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

###### Carousel passenger restraint assembly (`restraint_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Conditional actual complete restraint article when included in released BOM; actual test and permission criteria, no assumed universal architecture or certification. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carousel passenger restraint assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Steel machinery guard panel (`guard_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual independently supplied guard panel outside fabricated structural steel; installed safety boundary declared from actual BOM. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Steel machinery guard panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Lithium-soap lubricating grease preparation (`grease_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual separately supplied whole grease preparation for onsite fill/service; retain initial module fill once and track leakage, returns and spent grease. Other thickener/base oil requires its own card. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Lithium-soap lubricating grease preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `sartori-ride-manufacture`

###### Assembled carousel pending first release (`pending_ride_out`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Assembled carousel pending first release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assemble`
- Sources: `dinis-carousel-manufacture-2022`

##### Waste flows

##### Elementary flows

### Process: Whole-ride testing and first release (`test`)

#### Inputs

##### Product flows

###### Steel test ballast block (`test_ballast`)

Only actual test load article; reusable opening/closing stock and receipts/returns/waste separately measured. Its full physical movement is distinct from its attributable asset service. No assumed passenger equivalent or test load. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Steel test ballast block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `sartori-ride-manufacture`

###### Alternating current (`electricity_test`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_test`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `ilcd-detailed-2010`

###### Assembled carousel pending first release (`pending_ride_in`)

Actual internal handoff with the same configuration/lot, full wet physical mass and inherited exchange vector on both sides. Reconcile actual retained components/water/fluids and all losses. This WIP has not generated first-release Q; internal output/input cancel once in consolidated inventory and do not trigger another purchase or upstream manufacture. An external supplied article instead needs disjoint whole-provider coverage. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Assembled carousel pending first release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `dinis-carousel-manufacture-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Steel test ballast block (`test_ballast_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Only actual test load article; reusable opening/closing stock and receipts/returns/waste separately measured. Its full physical movement is distinct from its attributable asset service. No assumed passenger equivalent or test load. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Steel test ballast block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `sartori-ride-manufacture`

###### Roundabouts, swings, shooting galleries and other fairground amusements (`finished_ride`)

Preserve literal native comment387 Prefabricated buildings / 387预制建筑. OfficialCPC3.0CSV38600line1820 is immediately followed by bare387heading atline1821. Whole-ride admission is an explicit inference from that source adjacency together with fullnames/Producttype/finishedatplant/Massreference and actual primary carousel evidence, not known database-formation cause or a silent field repair. Use only an actual complete accepted ride or reconciled full transport-module complement; incomplete/damaged modules require their own specific atomic Product/Waste identity and real history/disposition, never forced finishedwhole binding or presumed restoration.

Use only the complete new steel/FRP electrically driven carousel configured and first-quality-released as one whole ride. Reconcile platform, structural frame, passenger-bearing bodies, actual drive/motor, controls, installed lighting and required safety fittings against the released BOM and shipment split. The native Product family is manufactured production mix at plant with Mass reference; an isolated general comment says prefabricated buildings and is inconsistent with its complete names, manufactured state and category. Retain that anomaly; do not use the comment to model a building or silently broaden to a seat, frame, motor or operating service. No SKU, capacity, power, life or approval is supplied by the native row. Native chain: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Roundabouts, swings, shooting galleries and other fairground amusements `45d82429-98ee-4e8b-ab85-8708a78a8e27`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `dinis-carousel-manufacture-2022`

##### Waste flows

###### Discarded steel test ballast block (`test_ballast_waste`)

Only actual separate discarded whole article; opening/closing and full external leg reconciled. If already in mixed_waste, its independently measured origin is nonadditive and this outlet is absent. No automatic credit. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Discarded steel test ballast block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `ilcd-detailed-2010`

##### Elementary flows

### Process: Separate packaging article pools (`pack`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_pack`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_pack`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Wooden transport crate (`crate_p`)

New independent purchase. Conditional actual wooden transport crate only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Wooden transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Wooden transport crate (`crate_i`)

Supplier-included inbound article. Conditional actual wooden transport crate only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Wooden transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Wooden transport crate (`crate_er`)

ER is actual inward returned packaging with real empty/filled state. For filled receipt record actual net contents and packaging component inside one whole transfer, disjoint from P/I and outward events.

External return received. Conditional actual wooden transport crate only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Wooden transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyethylene stretch film (`film_p`)

New independent purchase. Conditional actual polyethylene stretch film only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyethylene stretch film (`film_i`)

Supplier-included inbound article. Conditional actual polyethylene stretch film only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyethylene stretch film (`film_er`)

ER is actual inward returned packaging with real empty/filled state. For filled receipt record actual net contents and packaging component inside one whole transfer, disjoint from P/I and outward events.

External return received. Conditional actual polyethylene stretch film only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyester transport strapping (`strap_p`)

New independent purchase. Conditional actual polyester transport strapping only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyester transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyester transport strapping (`strap_i`)

Supplier-included inbound article. Conditional actual polyester transport strapping only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyester transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyester transport strapping (`strap_er`)

ER is actual inward returned packaging with real empty/filled state. For filled receipt record actual net contents and packaging component inside one whole transfer, disjoint from P/I and outward events.

External return received. Conditional actual polyester transport strapping only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyester transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wooden transport crate (`crate_s`)

S is packaging component of a genuine outward filled shipment, including actual returned contents/modules; reconcile net contents and full shipment once, disjoint from empty outward EO and inward ER.

Gross physically shipped article. Conditional actual wooden transport crate only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Wooden transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Wooden transport crate (`crate_eo`)

EO is actual empty packaging outward to supplier/other recipient, excluding filled S and inward ER. Empty does not mean no measured retained residue/water.

Outward external return. Conditional actual wooden transport crate only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Wooden transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyethylene stretch film (`film_s`)

S is packaging component of a genuine outward filled shipment, including actual returned contents/modules; reconcile net contents and full shipment once, disjoint from empty outward EO and inward ER.

Gross physically shipped article. Conditional actual polyethylene stretch film only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyethylene stretch film (`film_eo`)

EO is actual empty packaging outward to supplier/other recipient, excluding filled S and inward ER. Empty does not mean no measured retained residue/water.

Outward external return. Conditional actual polyethylene stretch film only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyester transport strapping (`strap_s`)

S is packaging component of a genuine outward filled shipment, including actual returned contents/modules; reconcile net contents and full shipment once, disjoint from empty outward EO and inward ER.

Gross physically shipped article. Conditional actual polyester transport strapping only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyester transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Polyester transport strapping (`strap_eo`)

EO is actual empty packaging outward to supplier/other recipient, excluding filled S and inward ER. Empty does not mean no measured retained residue/water.

Outward external return. Conditional actual polyester transport strapping only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Polyester transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

##### Waste flows

###### Discarded wooden transport crate (`crate_w`)

W is the actual one whole contaminated wet waste receiver transfer including substrate and retained resin/paint/grease/liquor/water once, nested components not extra exports or repeat full provider demand.

Discarded article. Conditional actual wooden transport crate only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Discarded wooden transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Discarded polyethylene stretch film (`film_w`)

W is the actual one whole contaminated wet waste receiver transfer including substrate and retained resin/paint/grease/liquor/water once, nested components not extra exports or repeat full provider demand.

Discarded article. Conditional actual polyethylene stretch film only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Discarded polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

###### Discarded polyester transport strapping (`strap_w`)

W is the actual one whole contaminated wet waste receiver transfer including substrate and retained resin/paint/grease/liquor/water once, nested components not extra exports or repeat full provider demand.

Discarded article. Conditional actual polyester transport strapping only. Measure wet gross quantity, composition, pool and custody; opening/closing empty, WIP-attached, released-FG-attached and reusable stocks all remain. P and I are disjoint; internal reuse cancels without new purchase. Complete article and constituent supply are disjoint or explicitly bridged with internal handoff cancellation. Waste leg is Waste, not a saleable Product. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Discarded polyester transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-detailed-2010`

##### Elementary flows

### Process: Actual tooling and asset services (`assets`)

#### Inputs

##### Product flows

###### Reusable FRP horse mould (`tool_mould`)

Actual whole tool with its actual construction and service history; document new/used receipt, opening/closing, loan return and waste, not an assumed lifetime. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Reusable FRP horse mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `dinis-carousel-manufacture-2022`

###### Steel welding fixture (`steel_jig`)

Actual fixture article and measured service; full asset legs and component replacement are retained independently of allocated burden. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Steel welding fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `sartori-ride-manufacture`

###### Alternating current (`electricity_assets`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_assets`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reusable FRP horse mould (`tool_mould_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual whole tool with its actual construction and service history; document new/used receipt, opening/closing, loan return and waste, not an assumed lifetime. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Reusable FRP horse mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `dinis-carousel-manufacture-2022`

###### Steel welding fixture (`steel_jig_return`)

Only an actual outward supplier/loan return of this same article; preserve full gross quantity, original lot and burden lineage. No automatic credit. Actual fixture article and measured service; full asset legs and component replacement are retained independently of allocated burden. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Steel welding fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `sartori-ride-manufacture`

##### Waste flows

###### Discarded FRP horse mould (`tool_mould_waste`)

Only actual separate discarded whole article; opening/closing and full external leg reconciled. If already in mixed_waste, its independently measured origin is nonadditive and this outlet is absent. No automatic credit. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Discarded FRP horse mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-detailed-2010`

###### Discarded steel welding fixture (`steel_jig_waste`)

Only actual separate discarded whole article; opening/closing and full external leg reconciled. If already in mixed_waste, its independently measured origin is nonadditive and this outlet is absent. No automatic credit. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Discarded steel welding fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-detailed-2010`

##### Elementary flows

### Process: Waste and molecular environmental exchanges (`waste`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_waste`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_waste`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

###### Water vapour (`ambient_water`)

Only actual independently measured atmospheric species crossing the consolidated gate; record medium, state and sign. Ventilation recirculation is internal and cancels; no presumed reaction or dry-air composition. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### oxygen (`ambient_o2`)

Only actual independently measured atmospheric species crossing the consolidated gate; record medium, state and sign. Ventilation recirculation is internal and cancels; no presumed reaction or dry-air composition. Native Elementary renewable resource from air: ordinary molecular O2 CAS 7782-44-7 only. Not a purchased oxygen Product, oxygen emission, dissolved oxygen, ions or an alternate spin/isotope merely listed in broad synonyms. Native Mass → mass unit group → kg: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Nitrogen (`ambient_n2`)

Only actual independently measured atmospheric species crossing the consolidated gate; record medium, state and sign. Ventilation recirculation is internal and cancels; no presumed reaction or dry-air composition. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Nitrogen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Argon (`ambient_ar`)

Only actual independently measured atmospheric species crossing the consolidated gate; record medium, state and sign. Ventilation recirculation is internal and cancels; no presumed reaction or dry-air composition. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

#### Outputs

##### Product flows

##### Waste flows

###### Mixed manufacturing waste (`mixed_waste`)

One actual mixed receiver consignment only, measured wet total once with independently measured nonadditive origin_W subaccounts for contributing processes/materials. Do not invent chemically separated outlet streams or duplicate total plus components/providers. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Mixed manufacturing waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Carbon steel scrap (`steel_scrap`)

Only actually separately collected steel offcut/spatter; not a default coproduct or avoided virgin-steel credit. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carbon steel scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Cured glass-fibre-reinforced resin waste (`frp_offcut`)

Only actual separately collected cured FRP trimming/reject dust, with exact polymer and receiver; uncured resin waste is separate. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Cured glass-fibre-reinforced resin waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Waste paint preparation (`paint_waste`)

Only actual independently collected paint waste batch; binder, solvent, water and contamination evidence required. If included in mixed_waste, do not charge this as another outlet. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Waste paint preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Manufacturing wastewater (`wastewater`)

Actual wet effluent sent to a treatment receiver, composition and water mass measured; COD/TOC is not an invented molecule or a second wastewater mass. Post-treatment water to environment is a separate actual gate with its own medium/species. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Manufacturing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Spent lubricating grease (`spent_grease`)

Actual separately captured grease, supply-specific thickener/base-oil composition and receiver. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Spent lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Rejected complete carousel for treatment (`rejected_ride`)

Actual whole rejected/destroyed machine consignment; record every incorporated material and its prior burden lineage. Never label it new first-release Q or assume recovery. If physically in mixed waste, use that outlet once. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Rejected complete carousel for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Aluminium plate offcut waste (`aluminium_scrap`)

Only actual separately collected deck offcuts. Do not duplicate material included in mixed_waste; no assumed recovery or avoided aluminium credit. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Aluminium plate offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `dinis-carousel-manufacture-2022`

###### Uncured polyester laminating resin waste (`uncured_resin_waste`)

Only actual separately collected uncured waste for a verified polyester preparation; whole wet resin waste, not pure polymer or cured FRP. Other chemistry requires its own specific card and real treatment. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Uncured polyester laminating resin waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `dinis-carousel-manufacture-2022`

##### Elementary flows

###### Styrene (`styrene_air`)

Only independently identified measured post-control styrene to outdoor air when actual resin/cleaner chemistry establishes it. Total VOC and purchased resin do not establish styrene mass. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Styrene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Acetone (`acetone_air`)

Only actual independently measured post-control acetone to outdoor air; recovered/captured cleaner is not this emission. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Acetone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Carbon dioxide (`carbon_dioxide_air`)

Actual outdoor-air molecular CO2 with separately evidenced fossil, biogenic and supplied-gas origins; carbon balance alone cannot select an unknown source. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Argon (`argon_air`)

Actual released argon to outdoor air; inlet supply and gas-state measurements reconciled, never a presumed total weld-gas emission. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### dinitrogen (`nitrogen_air`)

Actual molecular nitrogen to outdoor air, independent of nitrogen-oxide indicators or elemental nitrogen content. Native Elementary emission to air, unspecified: molecular N2 CAS 7727-37-9 only; not nitrogen oxides, elemental N proxy, purchased nitrogen Product or atmospheric resource uptake. Broad synonyms do not authorize a different chemical state. Native Mass → mass unit group → kg: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### Oxygen (`oxygen_air`)

Actual outdoor-air O2 release only, recorded with gas state; atmospheric O2 uptake is the separate ambient_o2 input. No inferred combustion or stoichiometry. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

###### water vapour (`water_vapour_air`)

Actual atmospheric molecular H2O; distinguish supply/carrier/free/sorbed water, curing reaction water only with independent chemistry evidence, and atmospheric humidity exchange. One residual cannot solve multiple unknowns. Native Elementary emission to air, unspecified, ordinary molecular H2O vapour CAS 7732-18-5; not purchased steam, liquid discharge, ice, heavy/tritiated water or atmospheric resource uptake despite overbroad synonyms. Native Mass → mass unit group → kg: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilcd-detailed-2010`

### Process: Observed original-cohort services (`service`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_service`)

Actual metered operation including attributable startup, shutdown, idle, cleanup, ventilation and failed/rework/test demand. Match delivered voltage, geography, year and losses; no duplicate total and submeter charges. Purchased heat/fuel or onsite generation requires its own actual supply cards and disjoint electricity coverage. Native Product is CN low-voltage AC below 1 kV, grid-average consumption mix delivered to user including generation and transmission. Use only that actual supply interface; other voltage, geography or generator-only supply needs a compatible separate identity/provider. Native reference is Net calorific value, energy unit group and MJ, not Mass. Chain: 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `dinis-carousel-manufacture-2022`

###### Tap water (`water_service`)

Conditional actual supplied water; record composition, state, temperature and pressure. Distinguish process/cleaning water, carrier water already in preparations and actual cooling interface. No presumed boiler or steam circuit. Use only actual treated potable pipeline-supplied tap water at consumer/plant, not deionized water, untreated abstraction, steam, coolant solution or wastewater. Actual local treatment/source/provider must match; native reference is Mass/kg, and its secondary Volume coefficient supplies no measured density. Chain: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `ilcd-detailed-2010`

###### Roundabouts, swings, shooting galleries and other fairground amusements (`ride_return_received`)

Preserve literal native comment387 Prefabricated buildings / 387预制建筑. OfficialCPC3.0CSV38600line1820 is immediately followed by bare387heading atline1821. Whole-ride admission is an explicit inference from that source adjacency together with fullnames/Producttype/finishedatplant/Massreference and actual primary carousel evidence, not known database-formation cause or a silent field repair. Use only an actual complete accepted ride or reconciled full transport-module complement; incomplete/damaged modules require their own specific atomic Product/Waste identity and real history/disposition, never forced finishedwhole binding or presumed restoration.

Only the actual gross external leg of the original already-first-released complete ride, including split transport modules reconciled to its serial identity. Original production Qc and original burden history remain; dismantling, delivery, reassembly, reinspection and postrelease work do not create Q. Use only the complete new steel/FRP electrically driven carousel configured and first-quality-released as one whole ride. Reconcile platform, structural frame, passenger-bearing bodies, actual drive/motor, controls, installed lighting and required safety fittings against the released BOM and shipment split. The native Product family is manufactured production mix at plant with Mass reference; an isolated general comment says prefabricated buildings and is inconsistent with its complete names, manufactured state and category. Retain that anomaly; do not use the comment to model a building or silently broaden to a seat, frame, motor or operating service. No SKU, capacity, power, life or approval is supplied by the native row. Native chain: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Roundabouts, swings, shooting galleries and other fairground amusements `45d82429-98ee-4e8b-ab85-8708a78a8e27`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Roundabouts, swings, shooting galleries and other fairground amusements (`ride_dispatched`)

Preserve literal native comment387 Prefabricated buildings / 387预制建筑. OfficialCPC3.0CSV38600line1820 is immediately followed by bare387heading atline1821. Whole-ride admission is an explicit inference from that source adjacency together with fullnames/Producttype/finishedatplant/Massreference and actual primary carousel evidence, not known database-formation cause or a silent field repair. Use only an actual complete accepted ride or reconciled full transport-module complement; incomplete/damaged modules require their own specific atomic Product/Waste identity and real history/disposition, never forced finishedwhole binding or presumed restoration.

Only the actual gross external leg of the original already-first-released complete ride, including split transport modules reconciled to its serial identity. Original production Qc and original burden history remain; dismantling, delivery, reassembly, reinspection and postrelease work do not create Q. Use only the complete new steel/FRP electrically driven carousel configured and first-quality-released as one whole ride. Reconcile platform, structural frame, passenger-bearing bodies, actual drive/motor, controls, installed lighting and required safety fittings against the released BOM and shipment split. The native Product family is manufactured production mix at plant with Mass reference; an isolated general comment says prefabricated buildings and is inconsistent with its complete names, manufactured state and category. Retain that anomaly; do not use the comment to model a building or silently broaden to a seat, frame, motor or operating service. No SKU, capacity, power, life or approval is supplied by the native row. Native chain: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Roundabouts, swings, shooting galleries and other fairground amusements `45d82429-98ee-4e8b-ab85-8708a78a8e27`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `ilcd-detailed-2010`

###### Roundabouts, swings, shooting galleries and other fairground amusements (`ride_outward_return`)

Preserve literal native comment387 Prefabricated buildings / 387预制建筑. OfficialCPC3.0CSV38600line1820 is immediately followed by bare387heading atline1821. Whole-ride admission is an explicit inference from that source adjacency together with fullnames/Producttype/finishedatplant/Massreference and actual primary carousel evidence, not known database-formation cause or a silent field repair. Use only an actual complete accepted ride or reconciled full transport-module complement; incomplete/damaged modules require their own specific atomic Product/Waste identity and real history/disposition, never forced finishedwhole binding or presumed restoration.

Only the actual gross external leg of the original already-first-released complete ride, including split transport modules reconciled to its serial identity. Original production Qc and original burden history remain; dismantling, delivery, reassembly, reinspection and postrelease work do not create Q. Use only the complete new steel/FRP electrically driven carousel configured and first-quality-released as one whole ride. Reconcile platform, structural frame, passenger-bearing bodies, actual drive/motor, controls, installed lighting and required safety fittings against the released BOM and shipment split. The native Product family is manufactured production mix at plant with Mass reference; an isolated general comment says prefabricated buildings and is inconsistent with its complete names, manufactured state and category. Retain that anomaly; do not use the comment to model a building or silently broaden to a seat, frame, motor or operating service. No SKU, capacity, power, life or approval is supplied by the native row. Native chain: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. Preserve actual full gross native V, original stock/custody and provider lineage independently of burden attribution.

- Selected flow: Roundabouts, swings, shooting galleries and other fairground amusements `45d82429-98ee-4e8b-ab85-8708a78a8e27`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `ilcd-detailed-2010`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

Use this hierarchy only within the stated attributional decision context and actual need for allocation. Goods/services retain distinct functions; this is not a comparison of multifunctional consumer functions or automatic system expansion.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | actual shared burdens | Apply only to attributional cases genuinely requiring allocation; no free choice between physical/economic approaches. Manufacturer process descriptions establish no LCA allocation. | `ilcd-detailed-2010` |
| a_subdivide | actual shared burdens | First separate dedicated lines, actual meters, work orders, batches, tooling and tests; use justified virtual subdivision to assign embodied specific components and exclusive exchanges. Preserve all failed and ancillary burdens within their actual function. | `ilcd-detailed-2010` |
| a_causal | actual shared burdens | For every remaining shared exchange establish its determining physical causality with measured evidence. Steel cutting, weld work, mould service, coating/cure, station testing and storage may have different causal constraints; convenient machine count, product mass, rated power or correlation alone is not proof. | `ilcd-detailed-2010` |
| a_residual | actual shared burdens | Only genuinely residual common-process burdens after subdivision/causality may use contemporaneous market values for actual state at the same process gate. Document prices, currency/time, co-functions, residual scope, conservation and sensitivity. Ordinary waste sales/reuse do not automatically receive coproduct status or avoided-production credit. Physical gross legs remain full. | `ilcd-detailed-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receive | receive | Receipt and supply ownership | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_fabricate | fabricate | Steel and deck fabrication | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_frp | frp | FRP moulding and trimming | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_coat | coat | Surface preparation coating and drying | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_assemble | assemble | Mechanical electrical and safety integration | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_test | test | Whole-ride testing and first release | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_pack | pack | Separate packaging article pools | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service; actual_full_receiver_Qt_once; actual_full_provider_quantity_once; nested_composition; physical_cohort_provenance; evidenced_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; actual_disjoint_repair_retained_water_increments; actual_disjoint_departures | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. Record actual whole contaminated physical receiver/provider quantity once; component origin and each served original-cohort service vector have distinct evidence and compatible provider units. Full fleet/stocks/waste stay unchanged, X only deduplicates OTHER same-side constituent terms. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_assets | assets | Actual tooling and asset services | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service; actual_full_receiver_Qt_once; actual_full_provider_quantity_once; nested_composition; physical_cohort_provenance; evidenced_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; actual_disjoint_repair_retained_water_increments; actual_disjoint_departures | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. Record actual whole contaminated physical receiver/provider quantity once; component origin and each served original-cohort service vector have distinct evidence and compatible provider units. Full fleet/stocks/waste stay unchanged, X only deduplicates OTHER same-side constituent terms. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_waste | waste | Waste and molecular environmental exchanges | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service; actual_full_receiver_Qt_once; actual_full_provider_quantity_once; nested_composition; physical_cohort_provenance; evidenced_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; actual_disjoint_repair_retained_water_increments; actual_disjoint_departures | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. Record actual whole contaminated physical receiver/provider quantity once; component origin and each served original-cohort service vector have distinct evidence and compatible provider units. Full fleet/stocks/waste stay unchanged, X only deduplicates OTHER same-side constituent terms. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_service | service | Observed original-cohort services | foreground_record | row_id; lot or serial; configuration; raw meter/weighing records; native unit and state; opening/closing raw WIP non-WIP and wet stocks; per-exchange inherited vectors; provider scope; true gross external legs; failure idle startup cleanup rework; permissions and dispositions; actual H and original Qc where service | Capture undivided raw observations and actual stock/custody for each named atomic card. Use calibrated scales, submetered native demand, BOM/supply certificates, receiver manifests and actual test/service logs. Package protocol includes separate P/I/ER/S/EO/W for each article; species/mass/element and heat-carrier state observations are independent. Never store a predivided inventory intensity as raw numerator. | Each card native extensive unit | Each lot operation and external event | Complete production cohort and actual observed H | Actual site and disjoint supplier interface | per 1 kg reference flow | Calibration; raw originals; complete BOM; supply and custody reconciliation; actual tests; independent balances; recorded missingness |
| cp_mass | test | reference product | foreground_record | model; configuration; serial number; accepted net mass M; accepted_state; installed_fluids_water; actual_tare; excluded_test_ballast; unique_module_ids; disjoint_module_weighing_if_used; complete_BOM_reconciliation | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Every configuration and released serial | Actual first-release cohort | Whole ride including disjoint transport modules | per 1 kg reference flow | Calibrated weighing and complete supplied-BOM reconciliation |
| cp_release | test | finished_ride | foreground_record | serial; complete BOM; configuration; raw measured net M; first acceptance timestamp; test results; actual failure hold/rework disposition; released Q cohort | Retain each actual whole-ride acceptance and measured M once. Sum first-release net kg only after complete BOM/serial verification; no new count from shipping or retest. Preserve raw observations, not intensities. | kg | Each actual first release | Complete production cohort | Factory first-release gate | per 1 kg reference flow | Complete mass and acceptance lineage; all failed/Q=0 loads retained |
| cp_allocation_receive | receive | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only receive stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_fabricate | fabricate | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only fabricate stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_frp | frp | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only frp stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_coat | coat | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only coat stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_assemble | assemble | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only assemble stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_test | test | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only test stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_pack | pack | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only pack stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_assets | assets | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only assets stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_waste | waste | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only waste stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_allocation_service | service | Actual common-process attribution | foreground_record | exchange_id; dedicated/virtual subdivision; function and cohort; measured physical causal driver; original total and all attributed shares; residual reason; actual process gate and state; contemporaneous market price currency time and quantity; sensitivity; original vector lineage | Collect raw meters and evidence for each exchange-specific causal relationship, real functions and residual gate-matched prices. Retain totals before division; justify every residual and reconcile all shares. No uniform fixed ratio or physical/economic selector. This protocol records only service stage allocation evidence; shared original records and matched interstage interfaces are traced once without duplicating quantities/history. | native quantity; actual price and currency | Every shared exchange and interval | Same cohort/process period and actual H | Same process gate and actual state | per 1 kg reference flow | Raw direct/virtual subdivision evidence; causal demonstration; all-function conservation; price originals |
| cp_species | waste | Independent wet-mass element and species accounts | foreground_record | species CAS; matrix/medium; original wet mass and independent component/element results; actual phase T P humidity density; cumulative volume or true rate and intervals; water free/carrier/sorbed/reaction evidence; carbon origins; before/after-control sample; receiver; mixed total and independent origin_W | Use matched calibrated weighing/meters and independently identified laboratory species/element/water measurements with original methods, detection limits and uncertainty. Distinguish analytical indicators from molecules; retain actual gas inflow/outflow and media, no residual-fitted chemistry or water density assumption. | Native kg volume rate and elemental/species units | Each actual stream and representative measured interval | Complete cohort and actual H | Manufacturing FG and consolidated physical gates | per 1 kg reference flow | Independent total/species/element constraints; sampling originals; detection limits; no double count |

Aggregation fields declare final reporting basis only: collection retains undivided raw totals. The following single calculation executes each final division; cards and aggregation fields reference that same result without dividing again.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_accounts | all inventory rows | Convert actual raw extensive units once and reconcile full physical V separately. For each exchange A_i=B_open_i+U_new_i-B_close_i-T_other_i, with U_new actual new material/service/provider/work/treatment burden addition BEFORE stock correction. B only raw/WIP/genuinely unused-unassigned stores/charges, never already released FG/performed service; already stock-corrected consumption uses its reconciled equivalent account without another stock correction or repeated own/provider history. True other cohort/function requires evidenced once-only handover. Physical disclosure v_i=V_i/Qanalysis uses a declared positive observation basis for the full actual event once; it is not linked full shared provider demand per cohort. Modeled demand a_i=A_i/originalQ0_i or a_i_h=A_i_h/originalQc in compatible provider units is attributed separately to each served original cohort exactly once. Never reduce physical transfers by service shares or recharge full receiver/provider Qt to every cohort. Q0 is locked unique first-acceptance mass; Q=0/unknown basis retains raw totals without unit result. Actual H and internal matched transfers remain explicit. | V_i; Qanalysis; A_i; Q0_i; A_i_h; originalQc; U_new_i; raw_stocks; inherited_vectors; native_conversions; causal_evidence; cp_allocation_receive; cp_allocation_fabricate; cp_allocation_frp; cp_allocation_coat; cp_allocation_assemble; cp_allocation_test; cp_allocation_pack; cp_allocation_assets; cp_allocation_waste; cp_allocation_service; cp_species | v_i; a_i; v_i_h; a_i_h | `ilcd-detailed-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Use only fully facet-compatible native flow and provider: every basename, synonym/comment, CAS, grade, polymer/particle structure, route, geography, type/media and all properties. An isolated class/comment anomaly is disclosed; a hard physical/chemical contradiction blocks that binding. Exact reference-property → unit-group versions and reference unit must be verified, never substituted with latest or Mass for energy. | Original raw records and independent reconciliations |
| dq_scope | whole ride | Retain complete route, original-source context, make/buy scope, actual configuration and acceptance; no invented recipe, yield, rating, lifetime, certification or plant observation. | Original raw records and independent reconciliations |
| dq_balance | all accounts | Require complete raw and vector stocks, gross packaging/asset/fluid legs and independent wet-mass/element/species constraints; mixed Waste total or components once with one provider. Unknown remains a quantified evidence gap. | Original raw records and independent reconciliations |
| dq_time | service | Preserve original measured cohort Qc, observed H, actual delivered/returned and performed work including unauthorized failures; future service remains unknown and never supplies retrospective new production. | Original raw records and independent reconciliations |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_complete | complete data package | Verify whole-ride BOM, make/buy ownership and all required actually installed safety/control items; positive complete manufactured Product identity cannot be replaced by a component or attraction-operation service. Preserve all native identity restrictions in consumed descriptions. | `dinis-carousel-manufacture-2022`; `sartori-ride-manufacture` |
| v_q | complete data package | Reconcile serial/configuration-specific measured M and Q, first-release acceptance and failed/held dispositions; closing released FG remains within Q. One unique finished_ride reference row is 1 kg; no re-release through delivery or test. | `ilcd-detailed-2010` |
| v_balance | complete data package | Independently close every raw/WIP/non-WIP exchange vector, manufacturing/FG/consolidated gross physical balance, each packaging pool and actual asset/fluid/heat-return leg. Check X only on actual same-side duplication, retain wet closing stocks and reject unfounded reaction/species or two-unknown residuals. | `ilcd-detailed-2010` |
| v_normalize | complete data package | Raw protocols preserve undivided native observations. Verify native conversion, justified burden attribution and a single final division by actual Q or original Qc. Reconcile meter total with disjoint process shares; Q=0 has retained loads and no unit result. | `ilcd-detailed-2010` |
| v_evidence | complete data package | Record unknown formulations/species/providers and identity support as unresolved rather than zero; all conditional actual flows need their own atomic rows before use. Actual permissions/acceptance do not erase failed/unauthorized activities. No universal capacity, rpm, kW, temperature/time, dimensions, mass, life, maintenance or certification is inferred. | `ilcd-detailed-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared complete-carousel manufacturing input after actual compatibility and completeness assessment |
| allowed_use | Same physical configuration/gate and route with actual metadata and verified upstream ownership |
| excluded_use | Automatic safety approval, operation/admission service, lifespan comparison, all ride technologies, a bare motor/frame/seat, or negative-burden recycling claim |
| required_metadata | All reference qualifiers, complete BOM and release boundary, each native provider restriction, cohort/time/site, make/buy, stocks, service H and original Qc |
| required_quality_disclosure | Actual evidence and measurements, unresolved UUID/support/provider/formulation/species gaps, performed and omitted checks, uncertainty and unreviewed scope |
| update_trigger | Changed construction, deck/resin/coating chemistry, drive/control/safety supply, test route, gate, measurement/provider identity or contrary source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UN Statistics Division. CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Original category and adjacent class boundaries; not manufacturing recipes or mapping approval |
| dinis-carousel-manufacture-2022 | literature | Dinis. How is Our Carousel Produced In Dinis? 9 November 2022. https://jsamusementrides.com/2022/11/09/how-is-our-carousel-produced-in-dinis/ | Complete carousel fabrication/FRP/finishing/assembly and run-test sequence; aluminium versus wood deck alternative; qualitative only, no universal chemical recipe or inventory |
| sartori-ride-manufacture | literature | Sartori Rides. The Manufacturing. https://www.sartoriamusement.com/the-manufacturing/ | Independent manufacture/FRP/painting/mechanical and electrical assembly/factory test context; no claim of a common SKU/site or any actual authorization |
| ilcd-detailed-2010 | handbook | European Commission JRC. ILCD Handbook General guide for LCA - Detailed guidance. First edition March 2010, sections 7.9.2–7.9.3 (printed pp.255–272). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality hierarchy and exchange-specific causal/gate-value principles; synthesized explicit foreground stock/physical/collection rules apply those principles, not source-supplied ride numbers |
