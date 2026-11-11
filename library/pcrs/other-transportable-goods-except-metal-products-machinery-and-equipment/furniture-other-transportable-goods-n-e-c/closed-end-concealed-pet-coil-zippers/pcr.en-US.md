---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.closed-end-concealed-pet-coil-zippers
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Closed-end PET coil zipper manufacture through first quality release

## 1. Scope and Applicability

This method covers a complete closed-end concealed PET coil zipper for woven men’s or boys’ trouser trim in China. It begins with actual purchased continuous PET yarn, solid PET monofilament, separate PET core cord and supplied components and includes tape manufacture and separately supplied core-cord feeding, coil forming and sewing, actual aqueous dyeing/clearing/rinsing/drying/setting, gapping, a compatible complete purchased slider, welded PET top and bottom stops, cutting, testing and first quality release. It does not stop at purchased finished-product packing. Realised storage, packing, handling, returns and dispatch remain a separate service account attributed to the original release cohort. [rey-coil-catalogue; kee-zipper-production-2010; primo-coil-line]

REY distinguishes a polyester tape/coil family and an actual closed-end concealed product with polyester monofilament coils and welded stops. KEE and Primo independently establish the architecture from tape and monofilament through chain to complete zipper, but use “nylon” trade terminology. These documents support a transparent technical synthesis, not a claim that they describe one SKU, factory or contemporary order. PET is the selected polymer; PA6/PA66 is not an interchangeable second purchase. The chosen tape fibre, concealed orientation and PET stops must be confirmed by the actual article specification. No source provides a universal article mass, tooth density, recipe, energy use, yield or life. [rey-coil-catalogue; kee-zipper-production-2010; primo-coil-line]

Exclude buttons, snap/press fasteners, loose slider or stop parts, continuous chain sold without the complete end construction, open-end pin/box systems, metal teeth, injection-moulded POM teeth, coated/waterproof or fire-retardant variants, polymerisation and purchased-yarn/slider manufacture upstream of the declared gate. Existing textile-yarn, fabric, PA6-monofilament, footwear, garment and metal-clasp methods end at different articles and do not supply this complete-zipper assembly/quality-release method. If actual onsite manufacture includes an excluded upstream operation, expand and review its full atomic inventory before calling the dataset complete.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.closed-end-concealed-pet-coil-zippers |
| classification_refs | CPC 3.0 38923; narrower product and route boundary |
| covered_products | Uncoated closed-end concealed coil zipper with woven PET tapes, PET coil elements, one complete compatible zinc-alloy slider and ultrasonically welded PET top and bottom stops; first accepted complete article |
| excluded_products | 38924 parts and blanks; separate sliders/stops/tape/chain; buttons/snaps; open end; PA coil; metal or POM teeth; waterproof coatings; polymer/yarn/slider production before purchased supply gate |
| representative_product | One configured complete concealed closed-end PET coil zipper for a woven trouser pocket, after full construction and acceptance; measured actual gauge and length, not a fixed nominal weight |
| production_route | Purchased PET filament yarn and solid PET monofilament plus separate PET core cord, sewing thread and complete slider; weave paired tapes; feed separately purchased PET core cord inside coils; form and sew coils; actual wet finishing; gap and install slider and weld PET stops; cut inspect first release; retain realised FG services separately |
| market_state | Net complete first-released garment-trim zipper at plant CN, declared conditioning and supply moisture; detachable packaging excluded; no use-life equivalence |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete operable garment closure with matching tape, interlocking PET coils, slider and both end stops |
| How much | 1 kg net complete zipper at unique first quality release Q for the same configuration and cohort |
| How well | Accepted finished length, gauge, slider/stop retention, closure operation, stitching, shade and conditioning under the declared customer/product specification; no universal limits inferred from old standards |
| How long or cycle | One first-release production cohort; later services are actual observed events through H assigned to originating Q_c; H is not a divisor and is not product life |
| reference_flow_link | released_zipper |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Zipper `88c13278-ba18-4daa-a4b4-94bb5c14ace6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete paired woven PET tapes sewn PET coils compatible single complete slider and welded PET top and bottom stops; closed end concealed construction garment trim for woven mens or boys trousers in China; PET identity actual continuous solid monofilament and separate multifilament yarn supply routes and complete formulations; measured size gauge finished length slider lock and puller coating stop geometry and acceptance specification; shade whole purchased dye preparation assay limitations wet finish route and retained moisture conditioning; unique first quality release cohort Q including closing accepted FG and excluding prior released goods packaging and rejected product; calibrated net complete article mass actual count length and configuration specific measured conversion; raw stock WIP nonWIP physical states and separate inherited exchange burden vectors with event IDs; actual site production period release dates originating Q_c service cohort and observation H; native flow type reference property supply route geography grade phase and media compatibility; electricity below 1 kV China grid mix provider water treatment route and actual utility and return conventions; whole wet article or exclusive constituent representation with physical and burden bridge; each packaging kind opening empty attached WIP FG reusable stocks purchases external returns gross shipment and waste balance; actual species outlets and one measured mixed waste stream or measured origin shares with one treatment provider |


Declare every qualifier in dataset metadata or an equivalent field and retain it with the selected reference row. The broad native Product Zipper at plant CN is a garment-trim identity, not an approval of the narrower construction or an upstream factory inventory. It has a mass reference, no item/length conversion. Do not import its garment-mass proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the calibrated net mass of unique newly first-released complete articles. Include accepted closing FG once; exclude detachable packaging, earlier released FG, raw material and WIP. Record tare, moisture conditioning, length, gauge, complete slider/stops and release IDs. Reinspection or redispatch is not new release. |
| mass_length_count | count and length records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calibrated weighing of the complete configured zipper establishes actual net article mass for each matched size/length/slider/finish/moisture stratum. Counts or lengths may be converted only by that measured configuration-specific relationship and sampling uncertainty; never guess kg per zipper, tooth density, resin density or service life. An item is the same physical count as Item(s) at factor 1 if a native count property is actually used; that does not supply a kg conversion. |
| raw_conversion | all raw exchanges | Actual row property | kg; MJ; m3 | Preserve original unit and whether the observation is an amount, integrated volume or rate. Apply exact unit factors once before stock attribution: electricity kWh to MJ uses 3.6. Integrate only an actual rate over its observed time. Convert liquid/gas volume to mass using independently established density at that substance composition, temperature and pressure, or preserve verified native volume; integrated V is not multiplied by time again. Do not infer density from a secondary flow-property coefficient or substitute water density for another material. |
| whole_supply | purchased solutions and articles | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | One whole supplied formulation or slider is one purchase; assays and carrier water/embedded components are subledgers. Onsite preparation uses each actual purchased feed with real mixing utilities and losses. Never count a whole wet article plus its included dry constituents/water as simultaneous exchanges. |
| single_normalisation | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collection stores undivided raw records. Stock conversion, carried-vector transfer and justified allocation produce one A_i,c in the original exchange unit. The sole section 8 calculation divides by Q_c once; cards and aggregation descriptors only refer to its reporting basis. Q_c is first-release mass, including closing accepted FG, and is not gross volume V, a stock movement, observation H, sales value or a second stage denominator. If Q_c is zero preserve loads and withhold a unit result. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased continuous PET yarn and solid monofilament, separate PET core cord and sewing thread, complete compatible slider and actual wet-process reagents/utilities at the plant gate; no purchased finished zipper substitution |
| starting_condition_role | manufacturing inputs with explicit supplied physical and chemical state |
| product_classification_scope | Narrow complete-product scope within CPC 3.0 38923; CPC 38924 components/parts are outside the finished reference object |
| recursive_input_rule | An actual complete purchased zipper or returned previously released article keeps its supplier/original cohort burden and is not recreated by this foreground manufacturing method. Internal tape/chain/WIP transfers carry their own per-exchange vector and cancel only as paired transfers |
| upstream_dataset_requirement | Match whole article/formulation state, PET upstream route, reference property, supplier, year, geography, voltage, actual waste provider and steam/water-return convention independently; physical UUID identity is not a provider inventory |
| disclosure | Manufacturing gate-to-first-release Q plus separately observed FG services through H assigned to original Q_c. Upstream supply and inbound transport are linked separately; outbound customer transport, use and end-of-life require separate modules. Disclose actual owned utilities and omitted operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | manufacture | Follow actual tape preparation and separate core-cord feeding, coil forming/setting/sewing, wet processing and full finishing through the sole complete-article release gate. Include every failed run, start/stop, idle, cleanup, test destruction and incremental rework load. Chain-only cut-and-slider machines without stops do not reach this endpoint. | kee-zipper-production-2010; primo-coil-line; rey-coil-catalogue |
| boundary_actual_inputs | all processes | Every actually present external material, complete formulation, utility, fuel, gas, cleaning chemical, refrigerant, packaging component, waste or real emitted species needs its own specific atomic card and provider/medium. Listed conditional cards are active only on actual occurrence; unknown is not zero or not_applicable. Add actual unlisted exchanges before completeness. Do not hide them in “other”, a generic collection or a purchased finished-article shortcut. | jrc-textiles-bref-2023; kee-zipper-production-2010 |
| boundary_stock_vectors | manufacturing and service gates | Keep physical raw stock, WIP, nonWIP objects (quarantine, returns, rejects and released FG) and the inherited vector for every exchange separate. Preserve lot, status, moisture, origin and dates; raw-stock consumption and carried burdens are different ledgers. An already net withdrawal record is not stock-corrected a second time. WIP/other objects entering or leaving carry actual history, not zero or current-average fabricated burdens. Failed loads cannot disappear into closing stock without an actual traced physical transfer. |  |
| boundary_release_fg | first release and FG services | Q counts unique newly first quality-released complete net product once, including the same cohort in closing accepted FG. Do not add closing FG again as production or subtract it from first-release production. Retain packaging, warehousing, handling, reinspection, return and dispatch events separately with historical Q_c, actual observation H and every inherited burden. Internal release Q receipt/export cancels on consolidation; service events are not cancelled. Acceptance authorisation does not erase a real failed event. |  |
| boundary_water_heat | wet processing and utilities | Purchased water/steam, condensate or heat-exchanger water returned externally, retained free/phase/structural water and real emission species keep separate measured states and provider conventions. Physical drying or PET coil setting does not establish reaction water. A chemistry/stoichiometry claim needs independent reaction/species evidence and measured state; never fit two unknowns from one residual. Actual boilers/compressors are fully inventoried if owned, with no duplicate purchased utility. | jrc-textiles-bref-2023 |
| boundary_raw_collection | complete manufacturing and service accounting | Raw collection and physical attribution are distinct from reporting normalization. Each protocol below stores original unnormalised event values, original units and instrument state, with status/time/cohort provenance. Its aggregation_rule cell is only the final reporting-basis descriptor. It does not instruct the collector to divide raw values. Preserve failures and zero-output periods. | jrc-ilcd-allocation-2010 |
| boundary_gate_balance | complete manufacturing and service accounting | For each physical gate use opening + external receipts + actual internal transfers in = closing + actual transfers out + actual external exports + observed losses, with every term in a consistent measured state. Raw stock, WIP and nonWIP objects have separate equations; the per-exchange inherited vector is not their physical mass. For raw supplies derive net issue from the complete stock equation only if the source record is gross; a measured already-net issue is not corrected twice. Process stages must reconcile with the manufacturing gate, the FG gate and their consolidation. Matching internal physical and vector transfers cancel; complete product Q is counted once even if the same accepted pieces remain in closing FG. Actual nonoverlapping additional nonwater J_in/out and H2O_in/out explicitly enter the corresponding wet sides when not already included in transfers/stocks; neither X nor closing wet inventory cancels true increments. Physical/elemental/molecular accounts distinct. |  |
| boundary_carried_vector | complete manufacturing and service accounting | For each cohort c, build A_i,c from converted original exchange events, demonstrated attribution and actual opening/closing WIP and nonWIP historical vectors. The manufacturing burden ledger is opening unreleased carried vector + current attributable vector = newly first-released product vector + closing unreleased carried vector + other actual burden transfers. The closing unreleased term includes only physically evidenced WIP or quarantined objects not yet first released. Newly released closing FG is already in that cohort’s Q product vector and carries forward only in the separate FG physical/history/service account; it is not added again as manufacturing closing carry. Raw-stock net issues reconcile in their separate physical ledger. Routine reject/waste export is not a reason to transfer its manufacturing burden away from the Q cohort: related failed/reject manufacture and treatment burdens remain assigned to the responsible cohort without automatic coproduct allocation or credit. Any other actual burden transfer needs independent origin/receipt records demonstrating that it is not such removal of failed loads. Do not use one blanket stock ratio for different exchanges or use a current average for unknown history. Retain every physical object’s status transitions and vector; true transfer, quarantine, rejection, release correction and return have distinct events. A failed run with Q_c = 0 retains its full burden record and has no unit result; later inclusion requires a real traced cohort relation, not erasure. |  |
| boundary_fg_events | complete manufacturing and service accounting | FG_open+first_release_receipt+actual_returns+J_in+H2O_in=FG_close+gross_dispatch+whole_waste+other_actual_outlets+J_out+H2O_out in fullactualwetstate, with true mutuallyexclusive increments notalreadyinwholetransfers. OriginalQ0 eventdispositions remain independent; all originalhistory/deliveryreversals and actualservices assignedonce tooriginalcohort. Repair/retest/return notnewQ. No cumulativeincrementalservice overlap or invented reversal/credit. |  |
| boundary_wet_representation | complete manufacturing and service accounting | For each wet article or wet waste choose the measured whole OR mutually exclusive measured constituents (dry PET/textile, retained dye/finish, free/phase water and any independently evidenced chemically/structurally bound water). Keep a bridge identifying how the same object changes representation/state at each gate; these are not simultaneous procurement/exports. Physical total mass and relevant measured elemental balances are independent of true species/reaction-water evidence. COD, BOD, TOC, colour and total VOC are indicators, not a fabricated specific chemical mass. Never solve two unknown species/water quantities from one residual. X only removes identified OTHER same-side duplicate child entries; never true J/water or fullwetclosingstock, opposite term, missingflow or measurementresidual. Unexplained mass/species discrepancies remain gaps with uncertainty, no fitted closure. Whole Qt and full providerquantity once, measured components nested and service A/originalQ0 independent. |  |
| boundary_packaging_events | complete manufacturing and service accounting | P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained. |  |
| boundary_classification | complete product scope | One independent semantic complete concealed closed-end PETcoil zipper method within frozenCPC38923; classification alone is not manufacturing or mapping acceptance. Parts/blanks38924 and unrelatedfastener terminals remain outside this whole reference. | unsd-cpc3-2025 |
| boundary_core_placement | coiling and sewing | Feed separately supplied PET core cord inside the monofilament coil before sewing to the woven tape. Do not import the cord-in-tape route for metal/plastic zippers into this coil route. Product and supplier evidence define PET and the complete concealed closed-end article; machinery trade terminology does not determine polymer identity. | qlq-core-placement-2019; rey-coil-catalogue |


### Complete native, source and accounting conditions

This method covers a complete closed-end concealed PET coil zipper for woven men’s or boys’ trouser trim in China. It begins with actual purchased continuous PET yarn, solid PET monofilament, separate PET core cord and supplied components and includes tape manufacture and separately supplied core-cord feeding, coil forming and sewing, actual aqueous dyeing/clearing/rinsing/drying/setting, gapping, a compatible complete purchased slider, welded PET top and bottom stops, cutting, testing and first quality release. It does not stop at purchased finished-product packing. Realised storage, packing, handling, returns and dispatch remain a separate service account attributed to the original release cohort. [rey-coil-catalogue; kee-zipper-production-2010; primo-coil-line]

REY distinguishes a polyester tape/coil family and an actual closed-end concealed product with polyester monofilament coils and welded stops. KEE and Primo independently establish the architecture from tape and monofilament through chain to complete zipper, but use “nylon” trade terminology. These documents support a transparent technical synthesis, not a claim that they describe one SKU, factory or contemporary order. PET is the selected polymer; PA6/PA66 is not an interchangeable second purchase. The chosen tape fibre, concealed orientation and PET stops must be confirmed by the actual article specification. No source provides a universal article mass, tooth density, recipe, energy use, yield or life. [rey-coil-catalogue; kee-zipper-production-2010; primo-coil-line]

Exclude buttons, snap/press fasteners, loose slider or stop parts, continuous chain sold without the complete end construction, open-end pin/box systems, metal teeth, injection-moulded POM teeth, coated/waterproof or fire-retardant variants, polymerisation and purchased-yarn/slider manufacture upstream of the declared gate. Existing textile-yarn, fabric, PA6-monofilament, footwear, garment and metal-clasp methods end at different articles and do not supply this complete-zipper assembly/quality-release method. If actual onsite manufacture includes an excluded upstream operation, expand and review its full atomic inventory before calling the dataset complete.

Q=Q0 is locked to the positive original sum of unique first whole-zipper acceptance events at the same configuration and net wet reference state. Every original cohort is reconciled by disjoint original-basis net remaining external deliveries, all real on-site accepted FG/hold/repair states, irreversible original material and water losses, and other terminal dispositions. Gross returns/redeliveries/retests/repeated internal handoffs do not create another acceptance or Q. Preserve event IDs, original measured mass, actual later full wet stocks and independent post-acceptance matter/water increments. Do not restore lost water to survivors and also count the loss, use dispatch as Q, add accepted closing FG again, or subtract already accepted FG as unreleased carry. Actual Q=0 or unknown basis retains raw activity and unresolved unit result; it is distinct from an older cohort positive Q0.

For each exchange e, actual U_new,e is genuine new activity before any stock correction, including failed, zero-output, start-stop, idle, cleanup, test and rework work. A_e=B_open,e+U_new,e−B_close,e−T_other,e applies only to genuinely unused/unassigned raw/WIP histories and supported nonoverlapping transfers. Accepted FG or already performed services are not unused carry; already stock-corrected consumption is not corrected twice. Physical raw/WIP/FG/non-WIP/tool/dye/oil/carbon stocks and mass remain independently complete. Carry own inherited foreground/WIP history once, and explicitly choose a compatible provider aggregate or decomposed upstream history without re-adding already embedded operations, supplied formulation constituents or transport.

Keep three ledgers: (1) each actual whole wet receiver transfer Qt and the full actual treatment-provider quantity, recorded once; (2) measured nonadditive substrate/retained PET/dye/oil/adsorbate/water components and actual known physical cohort provenance; (3) independently evidenced nonoverlapping compatible-provider-unit service/burden vectors A_h,c divided by each served original positive Q0,c. Qt/Q_analysis is a labelled physical observation quotient, not a modeled repeated full provider demand. Allocation never shrinks a real waste export or fleet, nor charges full Qt to every cohort. Unknown physical provenance or service shares remain unresolved; one cannot infer them from mass, grade, lifetime or revenue by default.

Post-acceptance observed H services keep original positive cohort Q0,c, actual original manufacturing/delivery history and exact evidenced original-delivery reversals; do not manufacture a negative shipment or credit by assertion. Actual later repair material/water increases wet state but never resets original Q0. Unknown future use, lifetime, closure-cycle count, washing, customer care and disposal remain unknown outside observed scope. A new actual first acceptance after real included manufacture is distinct from a return/reinspection of an already accepted zipper. Physical gross service flows remain complete while per-cohort environmental demand uses only its nonoverlapping evidenced A_h,c/Q0,c.

The selected native reference is the complete Product Zipper/拉链, at plant CN, auxiliary trim input for woven men’s/boys’ garment CMT, finishing and packaging. It does not explicitly state a manufactured-finished route or supply a zipper-production inventory; its garment-mass proxy is not an article mass, conversion, recipe or reference Q. The actual complete physical closure, PET construction, intended garment-trim use and China context must fit. A use-side input label alone neither proves manufacturing nor excludes the same real whole article; complete primary manufacturing and genuine fixed first-acceptance gates are required. Do not substitute a chain, loose slider/stop, garment, receiving/packing-only service or unrelated supply state. Actual supplier/production availability or physical-state conflicts remain holds, not qualifiers that override native hardfields.

REY’s complete catalogue distinguishes woven and reverse coil families, concealed closed-end articles, polyester tape/coil and polyester-monofilament welded top/bottom stops, with distinct compatible sliders. Its nylon trade wording is not evidence for PA6/PA66 purchase. KEE’s 2010 primary prospectus separately shows tape weaving, monofilament coiling/stitching, wet processing, ultrasonic thin-wire stops, complete slider assembly and actual quality testing; its own zinc die-casting/painting and outsourced electroplating are real operations, not the selected purchased-slider factory recipe. Purchased compatible complete sliders inherit all actual alloy/puller/locking/coating producers once; any actually local casting/plating must be fully modeled rather than papered upstream. No REY/KEE/Primo/QLQ common SKU or factory is asserted.

QLQ explicitly feeds separately supplied center cord inside the coil before sewing to the tape; cord sewn into metal/plastic tape is a different route. Its direct teeth-melting bottom-stop option is different from REY/KEE welded separate monofilament, so do not consume both for one stop. Primo distinguishes full chain manufacture/finishing from the PM711 cut-and-one-slider application that does not install stops; that machine alone does not reach this complete reference. Maintain actual paired tapes, coil, separate core cord, sewing thread, one complete matching slider and both actual stops as a reconciled complete BOM. Part counts are not complete zipper counts; matched gapping and trimming losses remain real, not a second output or hidden yield.

PET filament/yarn, solid coil monofilament, transformed core cord and sewing thread are distinct actual supply forms. Each requires real whole-supply grade, composition, moisture/finish and complete upstream route/provider; no pure polymer or generic filament proxy supplies a transformed cord or thread. Esterification of PTA/MEG and ester exchange/transesterification are not synonyms, nor are virgin direct spinning, chip remelting and recycled routes automatically equivalent. Conflicting native bilingual chemistry cannot be repaired by a supplier promise. Sodium dithionite is also a different molecule from bisulphite; no molecular substitution follows from a similar common name. Specific PET feed and dithionite cards remain unbound unless an unambiguous full compatible identity is established, while their actual quantities and complete upstream burdens cannot be omitted.

BREF’s pure-PES disperse-dyeing context is distinct from PA and blends, high-temperature acidic dyeing from alkaline stable-dye alternatives and thermosol, light-shade rinsing from actual dark-shade reductive clearing. No source temperature, pH, time, liquor ratio or chemical dose is a factory default. Whole commercial Blue56/Blue2BLN preparation is received once; actual colourant, dispersant, salts, oil and water are nonadditive supplier-assay children. Extra dispersant/cleaner/reducing agent is only actual separately supplied feed, not a second purchase of formulation additives. The Blue56 original has a contradictory drawn structure versus brominated formula and rough estimated physical properties; no chemical UUID, molar balance, density or bath recipe is adopted from it. Actual essential dye/preparation matrix characterization remains unresolved until evidenced, not a future-SOP closure.

Preserve BREF’s complete formulation-additive context, including source-specific non-toxicity wording alongside poor biodegradability/removal and possible low-quality-naphthalene quinoline contamination. These are not universal safety, pollutant-removal or LCI factors. Table COD/BOD/TOC/colour values are indicators, not masses of a chemical; table powder/liquid component ranges are not this preparation’s assay. Dithionite may react to sulphite and further sulphate, and oxygen present in partly flooded machinery consumes reducing agent. Measure actual inlets, retained chemicals/water, true reaction products, elemental and independent molecular balances; never conserve a reacting reagent or infer fixed SO2, AOX, oxygen or reaction-water from a residual. Carrier already in a formulation and later retained/volatilised species need their real fates, not double purchase or assumed complete discharge.

KEE’s complete original printed112–113 explicitly reports operated on-site sewage treatment at Guangdong and Zhejiang; some Guangdong treated water is reused while the rest and Zhejiang treated water are discharged. This known operation cannot be deleted or relabeled as automatically off-site disposal. A separately modeled real complete on-site treatment producer is permitted only with measured matched whole wastewater/return-water interfaces and all genuine chemicals, utilities, air, sludge, emissions and stocks, with no dummy generic provider or zero burden. Other independently evidenced real treatment configurations are distinct source cases, not an invented KEE variant. Historical 2010 licences/compliance and unspecified reuse amounts are not current qualification, fixed shares or environmental advantages. Missing actual essential complete treatment method remains a concrete-study hold.

All real weaving/coiling/sewing/wet-processing/ultrasonic machines, tools, needles, wiping articles, filters and treatment assets retain full physical opening/purchase/return/installed/closing/waste fleet histories separately from original-cohort service/burden vectors in compatible provider units. No per-machine mass, lifetime, capacity factor or use share is guessed. New specific needle and cloth cards activate only where actually used; their complete suppliers and service attribution are not evidence that an unobserved filter or tool exists. Whole discarded wet articles contain substrate, retained oil/dye/PET and water once; those are nested components, not extra attached-residue exports or duplicate treatment demand unless physically separated.

Each actual PE bag and corrugated carton is a separate article pool with P independent purchases, I actual supplier-included/other inward packaging, ER empty returns inward, gross S_filled with actual goods/filled returns outward, EO_empty empty outward and W_whole whole contaminated wet receiver waste. Keep full empty/attached raw-WIP-FG/reusable O and C stocks and counterparties; filled returns in S are not EO, I is not P, ER is not outward. Packaging remains outside net zipper Q0 and internal reuse is not repurchase, newQ, cofunction or credit. Actual mandatory final packing/QC before first acceptance stays real manufacturing work with its phase, not automatically later service.

The full wet identity for each pool is O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. Real mutually exclusive nonwater J and H2O inward/outward increments exclude matter already inside whole transfers. Item counts and nested water/material assays are not additive extra masses. Full wet C retains all actual uptake/repair matter and moisture. X only removes identified OTHER same-side duplicate child entries, never true J/water, fullwetC, opposite-side terms, a missing card or a measurement residual. One filled shipment has nested goods/packaging components, and one whole waste Qt has substrate/retained matter/water once. Allocation never shrinks actual transfers/fleet or charges full receiver treatment again for each original cohort.

Reference Q0 sums actual complete paired zipper first-acceptance net masses only, using calibrated configuration-stratified lot/individual weighing, measured length and complete slider/stop construction at the same conditioning state. Count/length conversions require actual matched observations and uncertainty, never garment-mass proxy, catalogue tooth density or a default M. Internal tape/chain/dyed-chain components are not completeQ; their matched physical transfers and inherited histories cancel once on consolidation, not another external purchase. Actual accepted destructive tests remain in originalQ0 dispositions, never-accepted test pieces do not become reference output.

Illustrative counterexamples only, never empirical defaults: one 10kg contaminated cloth/filter event containing8kg substrate and2kg retained matter is physically received/treated as10kg once. If independently evidenced hypothetical treatment service is25%new originalQ0=100kg and75%old originalQ0=200kg, model compatible vectors2.5/7.5kg-equivalent yield0.025/0.0375kg-equivalent perkg reference, not physical2.5/7.5kg or10kg provider demand for both cohorts. Unknown shares stay unknown. A real0.10kg dry package+0.02kg retained dye/oil+0.01kg water is one0.13kg wet waste with nested components, not tare plus extra attached exports.

A source-backed complete manufacturing route, actual calibrated article-mass method and real staged quality checks give a substantive candidate. Actual batch QA not yet done does not establish method nonexistence. Conversely, an unknown essential formulation/matrix assay, reaction/species analysis, compatible full treatment/utility producer or whole gate cannot be closed by demanding a future SOP, generic provider, finite check or translation alignment. Report the exact missing procedure/sampling/recovery/calibration and actual scope; no publication/scientific/translation/study/mapping acceptance is self-issued. Ordinary actualgrade/provider/quantity/UUID/range gaps remain explicit rather than zero.



Declare every qualifier in dataset metadata or an equivalent field and retain it with the selected reference row. The broad native Product Zipper at plant CN is a garment-trim identity, not an approval of the narrower construction or an upstream factory inventory. It has a mass reference, no item/length conversion. Do not import its garment-mass proxy.

Each card is one physical exchange. Unresolved UUID cells retain a specific article/chemical name; they do not authorise dropping its actual amount. Transfers preserve mass/condition and per-exchange burden vectors. The normalization basis and protocol aggregation text describe the final reporting unit only; collection contains unnormalised raw events.


Excluding polymer/yarn/cord/thread/slider manufacture from the local purchased-input foreground does not exclude its environmental inventory from the product supply chain. Every actual supplied whole article/preparation must link a genuine complete upstream producer, with real raw materials, shaping/spinning/finishing/coating/plating, utilities, treatment, transport and physical interfaces as applicable, aggregated or decomposed once without double counting. Any such operation actually performed locally stays in its real foreground or a fully linked complete on-site producer; it cannot be hidden by a purchasing label. Unknown essential producer/matrix method is a hold, not an unspecified background placeholder.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tape_make | Yarn preparation and tape weaving | required | Required manufacturing from purchased yarn; actual preparation and weaving included | foreground stage with raw and WIP carry | per 1 kg reference flow |
| chain_make | Coil forming and sewing | required | Required with actual coiling heat-setting and sewing operations | foreground stage with paired internal transfer | per 1 kg reference flow |
| wet_finish | Aqueous dyeing, clearing, rinsing, drying and setting | required | Actual wet-processing route including unsuccessful baths; each conditional reagent follows real issue records | foreground wet process and water species ledger | per 1 kg reference flow |
| assemble_release | Gapping, slider installation, PET stop welding, cutting and first release | required | Required complete finished article with matched slider and both stops | sole first quality-release production gate | per 1 kg reference flow |
| fg_service | Realised released-goods storage, packing, handling and dispatch | required | All actually performed services including for closing FG and returns during H; no forecast | separate service burden ledger assigned to originating release cohort | per 1 kg reference flow |
| packaging | Actual packaging physical custody and history | conditional | actual pre/postfirstacceptance movements/requiredQC | foreground | original positive Q0,c; no newQ |


Each card is one physical exchange. Unresolved UUID cells retain a specific article/chemical name; they do not authorise dropping its actual amount. Transfers preserve mass/condition and per-exchange burden vectors. The normalization basis and protocol aggregation text describe the final reporting unit only; collection contains unnormalised raw events.

### Process: Yarn preparation and tape weaving (`tape_make`)

#### Inputs

##### Product flows

###### Complete purchased PET filament yarn (`tape_yarn`)

One actual separately purchased whole PET continuous-filament tape-weaving yarn. Record actual grade, supplied form, moisture/finish/additives, complete upstream producer and real issue/return/stock histories. Whole-supply constituents are nested, never bought twice. Actual polymer route/chemical identity must be unambiguous; incompatible or conflicting bilingual native chemistry is not repaired by a supplier assertion. No guessed recipe, density or default quantity. Use only for its actual separate tape, coil or PET-stop feed role, not interchangeable sewing/corecord or a second wholechain purchase.

- Selected flow: PET continuous-filament tape-weaving yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_tape_make`
- Sources: `kee-zipper-production-2010`; `rey-coil-catalogue`

###### Tape-weaving electricity (`tape_electricity`)

Native Product flow: customer-side consumption mix in CN below 1 kV with grid-average supply. Its actual reference property is Net calorific value in MJ; the label is retained for this electricity quantity and is not a fuel combustion instruction. Convert metered kWh to MJ by 3.6 once before attribution. No hydropower-only supply or higher-voltage input substitution. Match reporting year and provider independently; include actual idle, start/stop, auxiliaries, cleaning and rework and all controlled local utility generation without purchasing its internal electricity again.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_tape_make`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Internal greige woven tape transfer (`tape_out`)

One specifically configured greige woven PET tape supply moves to chain forming with matched quantities for both sides. Core cord is a separate supplied article fed inside the coil, not already attached to this tape. Record physical mass and moisture state separately from every inherited exchange vector. Its paired downstream receipt is the same transfer; cancel both on consolidation. This tape is not a complete zipper and carries no complete-product UUID.

- Selected flow: Greige woven PET zipper tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual matched internal physical transfer / its traced original positive Q0,c once, with actual history vectors transferred once; cancel the paired interface on consolidation. No new purchase or acceptance; unknown cohort attribution unresolved.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wip_tape_make`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

##### Waste flows

###### Separated clean PET yarn scrap (`tape_scrap`)

Native Waste flow identifies PET waste at plant and explicitly includes textile uses; it gives no recycling credit, treatment or yield. Use only separately weighed PET yarn/tape scrap with declared spin finish and moisture; do not put metal-slider composite rejects or PE packaging into this row.

Full actual receiver Qt/provider quantity once, nested retained matter/water and known physicalprovenance separate from independent compatible original-cohort A/Q0 service vectors. Actual linked complete on-site/offsite treatment producer must retain all real operations/reuse/emissions/sludge and burdens; known KEE onsite treatment cannot be deleted or automatically assumed external.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_tape_make`
- Sources: `kee-zipper-production-2010`

##### Elementary flows

### Process: Coil forming and sewing (`chain_make`)

#### Inputs

##### Product flows

###### Internal greige woven tape receipt (`tape_in`)

Receipt paired exactly to tape_out, retaining the same physical quantity and inherited vector; do not repeat upstream purchases or count receipt as new production.

- Selected flow: Greige woven PET zipper tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual matched internal physical transfer / its traced original positive Q0,c once, with actual history vectors transferred once; cancel the paired interface on consolidation. No new purchase or acceptance; unknown cohort attribution unresolved.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wip_chain_make`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

###### Separately purchased PET core cord (`core_cord`)

One separately supplied PET filament core cord is purchased whole once with actual twist, linear mass, spin finish and moisture; it is fed inside the monofilament coil before sewing to the woven tape. QLQ explicitly distinguishes this coil-core placement from cord incorporated in metal/plastic zipper tape; its nylon trade name supports process position only, while the selected product and actual supplier assay establish PET. This cord is not already attached to tape_in, and its embedded filament, finish or water is not purchased again. This transformed core cord requires a matching Product identity for its actual twist and supplied form; do not inherit a PFY classification that excludes multiple or cabled yarn. If core making is actually onsite, replace this purchase with each real yarn input, cord-making energy and losses, retaining paired internal transfers.

- Selected flow: PET filament zipper core cord
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_chain_make`
- Sources: `qlq-core-placement-2019`; `rey-coil-catalogue`

###### Complete PET coil monofilament supply (`coil_monofilament`)

One actual separately purchased whole Solid PET zipper-coil monofilament. Record actual grade, supplied form, moisture/finish/additives, complete upstream producer and real issue/return/stock histories. Whole-supply constituents are nested, never bought twice. Actual polymer route/chemical identity must be unambiguous; incompatible or conflicting bilingual native chemistry is not repaired by a supplier assertion. No guessed recipe, density or default quantity. Use only for its actual separate tape, coil or PET-stop feed role, not interchangeable sewing/corecord or a second wholechain purchase.

- Selected flow: Solid PET zipper-coil monofilament
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_chain_make`
- Sources: `rey-coil-catalogue`; `kee-zipper-production-2010`

###### Complete purchased PET sewing thread (`sewing_thread`)

One continuous-filament polyester sewing-thread article with its actual twist, finish and supplied moisture; one external purchase. This transformed sewing-thread form is not bound to the native PFY row whose classification excludes sewing thread. Retain a specific article and seek provider identity, not cotton blend or a fabric substitute.

- Selected flow: PET continuous-filament sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_chain_make`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

###### Coiling, thermal setting and sewing electricity (`chain_electricity`)

Native Product flow: customer-side consumption mix in CN below 1 kV with grid-average supply. Its actual reference property is Net calorific value in MJ; the label is retained for this electricity quantity and is not a fuel combustion instruction. Convert metered kWh to MJ by 3.6 once before attribution. No hydropower-only supply or higher-voltage input substitution. Match reporting year and provider independently; include actual idle, start/stop, auxiliaries, cleaning and rework and all controlled local utility generation without purchasing its internal electricity again.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_chain_make`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

##### Waste flows

##### Elementary flows

##### Product flows

###### Coil-sewing machine needle article (`sewing_needle`)

Only where actually used/purchased, with whole actual construction/provider, calibrated mass/count and full fleet purchase/return/installed/opening/closing/waste history. No material, replacementlife or allocation fraction assumed. Entire contaminated wet discarded article includes retained oil/dye/PET and water once; substrate/components nested, no fictitious attached exports. Physical fleet and receiverQt/providerquantity stay full while distinct compatible-unit service A_c/originalQ0,c vectors require independent evidence.

- Selected flow: Coil-sewing machine needle article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets_chain_make`
- Sources: `primo-coil-line`

#### Outputs

##### Product flows

###### Internal sewn chain transfer (`chain_out`)

Coil teeth sewn onto both matching tapes form one continuous chain for wet finishing. This semi-finished physical transfer carries its measured moisture and complete inherited vector; it is not a quality-released complete zipper.

- Selected flow: Greige sewn PET coil zipper chain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual matched internal physical transfer / its traced original positive Q0,c once, with actual history vectors transferred once; cancel the paired interface on consolidation. No new purchase or acceptance; unknown cohort attribution unresolved.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wip_chain_make`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

##### Waste flows

###### Whole wet discarded coil-sewing machine needle article (`sewing_needle_waste`)

Only where actually used/purchased, with whole actual construction/provider, calibrated mass/count and full fleet purchase/return/installed/opening/closing/waste history. No material, replacementlife or allocation fraction assumed. Entire contaminated wet discarded article includes retained oil/dye/PET and water once; substrate/components nested, no fictitious attached exports. Physical fleet and receiverQt/providerquantity stay full while distinct compatible-unit service A_c/originalQ0,c vectors require independent evidence.

- Selected flow: Contaminated coil-sewing machine needle article waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets_chain_make`
- Sources: `primo-coil-line`



###### Separated PET coil-forming scrap (`coil_scrap`)

Native PET Waste identity only for separately collected PET monofilament or sewing-stage PET scrap at plant. Distinguish actual waste export from internally re-fed material; do not invent recycling credit or a nominal waste rate.

Full actual receiver Qt/provider quantity once, nested retained matter/water and known physicalprovenance separate from independent compatible original-cohort A/Q0 service vectors. Actual linked complete on-site/offsite treatment producer must retain all real operations/reuse/emissions/sludge and burdens; known KEE onsite treatment cannot be deleted or automatically assumed external.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_chain_make`
- Sources: `kee-zipper-production-2010`

##### Elementary flows

### Process: Aqueous dyeing, clearing, rinsing, drying and setting (`wet_finish`)

#### Inputs

##### Product flows

###### Internal greige chain receipt (`chain_in`)

Exact paired receipt of chain_out with original cohort and every carried exchange burden. Record the wet-article representation and conditioning bridge before adding bath chemicals.

- Selected flow: Greige sewn PET coil zipper chain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual matched internal physical transfer / its traced original positive Q0,c once, with actual history vectors transferred once; cancel the paired interface on consolidation. No new purchase or acceptance; unknown cohort attribution unresolved.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wip_wet_finish`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

###### One complete Blue 2BLN dye preparation (`dye_blue56`)

Use only when this named commercial Disperse Blue 56 / Blue 2BLN preparation is actually issued. The supplier TDS supports a polyester-dye application and supplied product name, but its drawn structure is not consistent with its brominated formula text and it provides no full formulation assay. No CAS-bound chemical UUID, density, molecular balance or numerical recipe is adopted from that sheet. Purchase the entire preparation once; identify its actual colourant, dispersant, salts and water from supplier assay as subledgers. If another shade or supply is used, replace this card with separate named whole preparations before inventory closure.

- Selected flow: Disperse Blue 56 (Blue 2BLN) commercial dye preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_wet_finish`
- Sources: `unilong-blue56-tds`; `jrc-textiles-bref-2023`

###### Purchased 98% acetic acid solution (`acid_solution`)

Conditional actual acidic bath adjustment or neutralisation input. Native Product is whole 98% aqueous solution, production mix at plant in China, auxiliary for wet processing; no CAS or provider recipe stated. Keep solution mass once; active-acid and included water only form constituent subledgers. Another concentration or a premixed bath is a different supplied exchange requiring its own binding.

- Selected flow: Acetic acid aqueous solution `c6e01ce4-9d24-4064-867b-88b430700840`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_wet_finish`
- Sources: `jrc-textiles-bref-2023`

###### Purchased 50% sodium hydroxide solution (`caustic_solution`)

Only for actual separate alkali clearing or cleaning issue. Native whole 50% solution is an at-plant industrial reagent; its source-specific comments preserve a solution-mass basis and do not license transferring source-paper doses. No pure-NaOH procurement is added for its included active content. If prepared onsite, replace the purchase with each actual feed and measured preparation utilities and losses.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_wet_finish`
- Sources: `jrc-textiles-bref-2023`

###### Purchased sodium dithionite powder (`dithionite_powder`)

One actual separately purchased whole Sodium dithionite reducing powder. Record actual grade, supplied form, moisture/finish/additives, complete upstream producer and real issue/return/stock histories. Whole-supply constituents are nested, never bought twice. Actual polymer route/chemical identity must be unambiguous; incompatible or conflicting bilingual native chemistry is not repaired by a supplier assertion. No guessed recipe, density or default quantity. Actual reductive clearing only: retain consumedO2 and actual sulphite/sulphate or other products; do not conserve reacting dithionite or inventSO2/reactionwater.

- Selected flow: Sodium dithionite reducing powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_wet_finish`
- Sources: `jrc-textiles-bref-2023`

###### Separately purchased dispersant powder (`extra_dispersant`)

Conditional additional purchased sodium naphthalenesulfonate-formaldehyde condensate powder only if issued beyond the dispersant already in the whole dye preparation. Retain whole supplied composition, salts and moisture. No elementary naphthalene/formaldehyde flow can substitute for this polymeric Product formulation. Other actual dispersants require separate atomic cards.

- Selected flow: Sodium naphthalenesulfonate-formaldehyde condensate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_wet_finish`
- Sources: `jrc-textiles-bref-2023`

###### One aqueous scouring and levelling formulation (`nonionic_cleaner`)

Conditional actual separately purchased C12-C14 fatty-alcohol ethoxylate aqueous formulation for scouring/levelling. Specify chain distribution, ethoxylation, assay, carrier water and supplier grade without guessing a molecular CAS. One full formulation purchase, not a repeated purchase of its active substance and water; record any separate onsite dilution water independently.

- Selected flow: C12-C14 fatty-alcohol ethoxylate aqueous formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_wet_finish`
- Sources: `jrc-textiles-bref-2023`

###### Actual municipal process-water makeup (`process_water`)

Native Product is treated municipal potable water at factory, supplied through a public network; treatment route varies by local supplier and geography is not fixed. Reference is Mass/kg; the secondary volume coefficient is not an independently measured factory density. For integrated m3 readings multiply by actual water density at measured conditions once, not by time again. Include washing, rinsing, vessel cleanup and cooling makeup when present, excluding internal recirculation and carrier water already bought in formulations.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-textiles-bref-2023`

###### Wet-processing and electric heating electricity (`wet_electricity`)

Native Product flow: customer-side consumption mix in CN below 1 kV with grid-average supply. Its actual reference property is Net calorific value in MJ; the label is retained for this electricity quantity and is not a fuel combustion instruction. Convert metered kWh to MJ by 3.6 once before attribution. No hydropower-only supply or higher-voltage input substitution. Match reporting year and provider independently; include actual idle, start/stop, auxiliaries, cleaning and rework and all controlled local utility generation without purchasing its internal electricity again.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_wet_finish`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

###### Actual externally supplied process steam (`purchased_steam`)

Conditional only if real external steam crosses this foreground boundary; an electrically heated installation has no invented steam purchase or boiler. Use steam mass kg with measured pressure, temperature, dryness and enthalpy; provider contract must declare whether steam water and heat are included, condensate return state and thermal convention. A steam-heat identity with a calorific-energy reference cannot replace this water-bearing mass exchange. Reconcile supplied steam, condensate returned, actual leakage and retained water; no extra purchase of the same heat or water. If an owned boiler exists, include its actual separate fuel, feedwater, electricity, blowdown and species cards before closure.

- Selected flow: Externally supplied process steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

##### Product flows

###### Wet-process equipment wiping-cloth article (`wiping_cloth`)

Only where actually used/purchased, with whole actual construction/provider, calibrated mass/count and full fleet purchase/return/installed/opening/closing/waste history. No material, replacementlife or allocation fraction assumed. Entire contaminated wet discarded article includes retained oil/dye/PET and water once; substrate/components nested, no fictitious attached exports. Physical fleet and receiverQt/providerquantity stay full while distinct compatible-unit service A_c/originalQ0,c vectors require independent evidence.

- Selected flow: Wet-process equipment wiping-cloth article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets_wet_finish`
- Sources: `jrc-textiles-bref-2023`

#### Outputs

##### Product flows

###### Internal conditioned dyed chain transfer (`dyed_chain_out`)

Actual dyed, rinsed, dried and thermally set chain moves to assembly with retained moisture and constituent assays plus every exchange burden. Whole wet article and exclusive dry constituents plus water are alternative physical representations connected by a bridge, not additive purchases or outputs.

- Selected flow: Conditioned dyed PET coil zipper chain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual matched internal physical transfer / its traced original positive Q0,c once, with actual history vectors transferred once; cancel the paired interface on consolidation. No new purchase or acceptance; unknown cohort attribution unresolved.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wip_wet_finish`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

###### Actual external condensate return (`condensate_return`)

Only actual recovered steam condensate physically returned to the same steam provider; Product return in kg with measured temperature, contamination and enthalpy. It is neither an elementary emission nor an automatic coproduct/credit. A provider heat-only dataset and a steam-plus-water dataset require different ledgers; agree the convention before linking and avoid double water/heat credit. Other heat-exchanger water returned externally needs its own specific row and state.

- Selected flow: Steam condensate returned to provider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Whole wet discarded wet-process equipment wiping-cloth article (`wiping_cloth_waste`)

Only where actually used/purchased, with whole actual construction/provider, calibrated mass/count and full fleet purchase/return/installed/opening/closing/waste history. No material, replacementlife or allocation fraction assumed. Entire contaminated wet discarded article includes retained oil/dye/PET and water once; substrate/components nested, no fictitious attached exports. Physical fleet and receiverQt/providerquantity stay full while distinct compatible-unit service A_c/originalQ0,c vectors require independent evidence.

- Selected flow: Contaminated wet-process equipment wiping-cloth article waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets_wet_finish`
- Sources: `jrc-textiles-bref-2023`



###### One collected aqueous dyeing effluent stream (`wet_effluent`)

One actually mixed aqueous PET-chain dyeing/rinsing/cleaning effluent tank sent to one external treatment provider. Record measured whole wet waste W once OR independently measured origin portions W_o whose sum equals W; source labels do not create extra treatment providers. Water, dye and auxiliary assays and COD/colour are constituent or indicator subledgers, not additional complete wastewater exchanges. No native to-water identity is used for a treatment-bound waste. Any genuinely separate sludge or liquid stream requires its own atomic row and actual transport/treatment.

Full actual receiver Qt/provider quantity once, nested retained matter/water and known physicalprovenance separate from independent compatible original-cohort A/Q0 service vectors. Actual linked complete on-site/offsite treatment producer must retain all real operations/reuse/emissions/sludge and burdens; known KEE onsite treatment cannot be deleted or automatically assumed external.

- Selected flow: Aqueous PET zipper-chain dyeing effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_wet_finish`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

###### Measured process water vapour to air (`water_to_air`)

Native Elementary flow is H2O, CAS 7732-18-5, Emissions to air unspecified, Mass/kg. Its broad noisy synonym list includes isotopic and other names; it does not make ordinary exhaust H2O heavy/tritiated water. Use only real process-water vapour released to the matching air compartment, not a wastewater or steam-supply product. Establish net source-attributable H2O from inlet/outlet humidity and dry-air mass with conditioning; natural humidity is not a repair emission. Actual known different media or species require the corresponding separate identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-textiles-bref-2023`

### Process: Gapping, slider installation, PET stop welding, cutting and first release (`assemble_release`)

#### Inputs

##### Product flows

###### Internal dyed chain receipt (`dyed_chain_in`)

Pair to dyed_chain_out with measured wet/dry bridge and inherited exchange vector; check same orientation, gauge, shade and coil/tape compatibility before cutting.

- Selected flow: Conditioned dyed PET coil zipper chain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual matched internal physical transfer / its traced original positive Q0,c once, with actual history vectors transferred once; cancel the paired interface on consolidation. No new purchase or acceptance; unknown cohort attribution unresolved.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wip_assemble_release`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

###### One complete purchased zinc-alloy slider (`complete_slider`)

A physically complete compatible zinc-alloy slider supplied with pull tab, actual locking mechanism and already included coating. Count the whole supplied slider once; do not separately purchase its casting alloy, puller, spring or plating chemicals. Native complete zipper cannot stand in for a slider-only input. Match the concealed-coil orientation and actual supplier article by fit and tests; KEE supports a zinc-alloy assembly architecture, not this supplier quantity. Onsite casting, coating or plating would require full additional foreground exchanges and is outside this purchased-slider starting condition.

- Selected flow: Complete zinc-alloy zipper slider with pull tab
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_assemble_release`
- Sources: `kee-zipper-production-2010`; `rey-coil-catalogue`; `primo-coil-line`

###### PET monofilament for both welded stops (`stop_monofilament`)

One actual separately purchased whole Solid PET ultrasonic stop-welding monofilament. Record actual grade, supplied form, moisture/finish/additives, complete upstream producer and real issue/return/stock histories. Whole-supply constituents are nested, never bought twice. Actual polymer route/chemical identity must be unambiguous; incompatible or conflicting bilingual native chemistry is not repaired by a supplier assertion. No guessed recipe, density or default quantity. Use only for its actual separate tape, coil or PET-stop feed role, not interchangeable sewing/corecord or a second wholechain purchase.

- Selected flow: Solid PET ultrasonic stop-welding monofilament
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_assemble_release`
- Sources: `rey-coil-catalogue`; `kee-zipper-production-2010`

###### Actual neat PDMS lubricating oil (`pdms_oil`)

Conditional separately purchased neat polydimethylsiloxane oil used on this article or equipment, with viscosity, supplier assay and delivered form recorded. A broad organic-silicone family spanning resins/elastomers and an aerosol spray do not establish this neat-oil binding. Leave UUID open; do not invent a spray propellant or buy oil again when supplied in a complete formulation. Capture real retained oil, waste oil, cleaning and any measured species losses separately.

- Selected flow: Neat polydimethylsiloxane lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_assemble_release`
- Sources: `primo-coil-line`

###### Actual externally supplied dry compressed air (`purchased_air`)

Conditional only when purchased across the selected boundary. Native Product is point-of-use onsite air after filtering, compression, oil separation, cooling and drying, Volume/m3. Preserve actual pressure, temperature, humidity and measurement volume basis; no unlabelled normal-volume conversion. If an owned compressor supplies it, keep the internal air transfer only in the service ledger and include actual compressor electricity, cooling, oil and condensate before closure, without a second external air purchase.

- Selected flow: Compressed air `1880a13a-8e72-4fce-8791-23cc99ee0bbb`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_assemble_release`
- Sources: `primo-coil-line`

###### Finishing, testing and rework electricity (`assembly_electricity`)

Native Product flow: customer-side consumption mix in CN below 1 kV with grid-average supply. Its actual reference property is Net calorific value in MJ; the label is retained for this electricity quantity and is not a fuel combustion instruction. Convert metered kWh to MJ by 3.6 once before attribution. No hydropower-only supply or higher-voltage input substitution. Match reporting year and provider independently; include actual idle, start/stop, auxiliaries, cleaning and rework and all controlled local utility generation without purchasing its internal electricity again.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_assemble_release`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-released complete PET coil zipper (`released_zipper`)

The one declared finished reference object is paired PET tape, PET coil teeth, one compatible complete slider and both welded PET stops, cut to accepted length and first quality released. Native Zipper is a Product family at plant CN, auxiliary trim for woven mens/boys garment CMT; it supplies neither construction, per-piece weight nor a zipper-production inventory. The garment-mass proxy in its comment is not used. Scope is that garment-trim context and this narrower complete product, not slider, chain, tape or a fastener collection. Q includes accepted closing FG once and is internal to the subsequent service ledger; cancel that paired transfer on consolidation.

- Selected flow: Zipper `88c13278-ba18-4daa-a4b4-94bb5c14ace6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `rey-coil-catalogue`; `kee-zipper-production-2010`; `primo-coil-line`

##### Waste flows

###### Separated dyed chain offcut (`dyed_chain_offcut`)

One actual separately collected dyed PET chain offcut includes its PET sewing thread, retained dye/finish and measured moisture, distinct from metal-bearing rejects and PE packaging. Native Waste Polyethylene terephthalate is an at-plant PET waste family whose comment explicitly includes textiles, with no fixed purity or treatment route. That positive physical identity covers this actual PET textile offcut without claiming pure resin or absence of dye. Record complete composition, destination and inherited burden; the identity supplies no yield or recovery credit and must not absorb zinc-alloy-slider composite waste.

Full actual receiver Qt/provider quantity once, nested retained matter/water and known physicalprovenance separate from independent compatible original-cohort A/Q0 service vectors. Actual linked complete on-site/offsite treatment producer must retain all real operations/reuse/emissions/sludge and burdens; known KEE onsite treatment cannot be deleted or automatically assumed external.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_assemble_release`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

###### Actual complete-zipper reject stream (`zipper_reject`)

One actually discarded PET-coil zipper containing its zinc-alloy slider and PET stops. Wet mass and constituents are alternatives linked by a bridge. If components are actually dismantled and enter separate waste streams, replace the whole article export with non-overlapping measured outputs and actual dismantling loads; do not also export the complete reject. Quarantine or supplier-returned slider is not automatically waste.

Full actual receiver Qt/provider quantity once, nested retained matter/water and known physicalprovenance separate from independent compatible original-cohort A/Q0 service vectors. Actual linked complete on-site/offsite treatment producer must retain all real operations/reuse/emissions/sludge and burdens; known KEE onsite treatment cannot be deleted or automatically assumed external.

- Selected flow: Rejected PET-coil zipper containing zinc-alloy slider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_assemble_release`
- Sources: `kee-zipper-production-2010`

##### Elementary flows

### Process: Realised released-goods storage, packing, handling and dispatch (`fg_service`)

#### Inputs

##### Product flows

###### Paired released-goods receipt (`released_fg_in`)

Same physical internal first-release transfer as released_zipper, with matching cohort, supply condition and vector. This warehouse receipt is not new output and does not change Q. Opening FG retains its own historical release Q_c and burden; do not allocate an old product manufacturing burden to newly released pieces. Native binding remains Product Zipper at plant CN for woven men’s/boys’ garment CMT auxiliary trim, Mass/kg; no count/length or construction coefficient. Its garment-mass proxy is not used. Supplier and configuration matching remain independent.

- Selected flow: Zipper `88c13278-ba18-4daa-a4b4-94bb5c14ace6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual matched internal physical transfer / its traced original positive Q0,c once, with actual history vectors transferred once; cancel the paired interface on consolidation. No new purchase or acceptance; unknown cohort attribution unresolved.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `kee-zipper-production-2010`

###### Realised storage, packing and handling electricity (`fg_electricity`)

Native Product flow: customer-side consumption mix in CN below 1 kV with grid-average supply. Its actual reference property is Net calorific value in MJ; the label is retained for this electricity quantity and is not a fuel combustion instruction. Convert metered kWh to MJ by 3.6 once before attribution. No hydropower-only supply or higher-voltage input substitution. Match reporting year and provider independently; include actual idle, start/stop, auxiliaries, cleaning and rework and all controlled local utility generation without purchasing its internal electricity again.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `kee-zipper-production-2010`; `primo-coil-line`

##### Waste flows

##### Elementary flows

##### Product flows

###### Actual original-cohort whole zipper return (`returned_zipper`)

Actual previously firstaccepted complete zipper return, with exact original event/Q0 and full wet condition, original delivery/reversal and all actual service/repair increments retained. The native whole Product atplantCNauxiliarytrim/CMTuse is not manufacture evidence alone; actual same complete configuration/supplypurpose/geography and firstgate must fit. A return or inspection is not newQ.

- Selected flow: Zipper `88c13278-ba18-4daa-a4b4-94bb5c14ace6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `rey-coil-catalogue`

#### Outputs

##### Product flows

###### Actual gross physical zipper dispatch (`gross_zipper_dispatch`)

Actual physically dispatched complete zipper mass, reported by consignment and originating cohort; retain native CN garment-trim family restrictions from released_zipper. Returns, reinspection and redispatch never create a new first release. Gross physical dispatch is a warehouse movement, not a second Q or net-delivery production denominator; its paired service result belongs to Q_c. Native binding remains Product Zipper at plant CN for woven men’s/boys’ garment CMT auxiliary trim, Mass/kg; no count/length or construction coefficient. Its garment-mass proxy is not used. Supplier and configuration matching remain independent.

- Selected flow: Zipper `88c13278-ba18-4daa-a4b4-94bb5c14ace6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event in native unit recorded once; V or Qt / positive Q_analysis is labelled observation. Linked modeled demand uses distinct evidenced compatible-unit A_i,c/original positive Q0,c, never shared fullQt recharged to eachcohort or shrunken physical export. Convert/normalize once; zero/unknown basis keeps raw without unitresult.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `kee-zipper-production-2010`

##### Waste flows

##### Elementary flows

##### Waste flows

###### Whole wet discarded accepted zipper (`fg_zipper_waste`)

Actual previously firstaccepted complete zipper return, with exact original event/Q0 and full wet condition, original delivery/reversal and all actual service/repair increments retained. The native whole Product atplantCNauxiliarytrim/CMTuse is not manufacture evidence alone; actual same complete configuration/supplypurpose/geography and firstgate must fit. A return or inspection is not newQ. One actual whole contaminated wet receiver event includes PET/textile/slider/retainedmatter/water components once; fullactualQt and treatmentquantity distinct from service A/originalQ0, no separate attached residues or invented destinations.

- Selected flow: Discarded PET-coil zipper with complete zinc-alloy slider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `rey-coil-catalogue`

### Process: Actual packaging custody (`packaging`)

#### Inputs

##### Product flows

###### One complete PE inner bag (`pe_bag`)

Actual purchased polyethylene bag, Product at plant, CAS 9002-88-4, Mass/kg. Native grade, thickness, sealing and recycling content are not fixed; qualify the actual whole supplied bag and count it once, not again as film or resin. Use actual PE identity only; a PET bag cannot inherit this binding. Packaging mass stays outside Q and follows its own complete stock/attachment/return balance.

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Whole actual physical transfer once; Qt/Q_analysis observation only, linked compatible-unit A_c/originalQ0,c demand distinct, no repeated full treatment or tare-only waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `kee-zipper-production-2010`

###### Corrugated shipping carton (`shipping_carton`)

One actual whole corrugated shipping carton supplied in its measured state, with its specific UUID unresolved. Disclose liner/fluting, adhesives, print, coating, supplier and recycled content; no default material proportions. Do not extend the article identity to bags, pallets, labels, tape or waste. Count the whole carton once and retain its complete individual packaging balance outside net zipper Q0.

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained.

This row represents one actual corrugated carton only; native identity remains unbound, not an unspecified packaging basket. Preserve actual supplier grade/whole construction and complete provider, no substitute fibre/adhesive recipe.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Whole actual physical transfer once; Qt/Q_analysis observation only, linked compatible-unit A_c/originalQ0,c demand distinct, no repeated full treatment or tare-only waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `kee-zipper-production-2010`

###### PE bag included (`pe_bag_included`)

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained. Actual supplier-included inward package I; not independentpurchaseP or emptyreturnER.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `rey-coil-catalogue`

###### PE bag empty_return_received (`pe_bag_empty_return_received`)

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained. Actual empty packaging ER received inward from customer/pool; not EOout, not newpurchaseQ.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `rey-coil-catalogue`

###### Corrugated shipping carton included (`carton_included`)

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained. Actual supplier-included inward package I; not independentpurchaseP or emptyreturnER.

This row represents one actual corrugated carton only; native identity remains unbound, not an unspecified packaging basket. Preserve actual supplier grade/whole construction and complete provider, no substitute fibre/adhesive recipe.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `rey-coil-catalogue`

###### Corrugated shipping carton empty_return_received (`carton_empty_return_received`)

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained. Actual empty packaging ER received inward from customer/pool; not EOout, not newpurchaseQ.

This row represents one actual corrugated carton only; native identity remains unbound, not an unspecified packaging basket. Preserve actual supplier grade/whole construction and complete provider, no substitute fibre/adhesive recipe.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `rey-coil-catalogue`

#### Outputs

##### Product flows

###### PE bag leaving with gross consignments (`pe_bag_dispatch`)

Physical export of the same qualified whole PE bag as pe_bag with gross consignments, including redispatch. It is packaging transfer, not product kg, new packaging procurement or an automatic coproduct. Link attachment IDs and count external returns separately.

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Whole actual physical transfer once; Qt/Q_analysis observation only, linked compatible-unit A_c/originalQ0,c demand distinct, no repeated full treatment or tare-only waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `kee-zipper-production-2010`

###### Corrugated shipping carton (`carton_dispatch`)

Physical export of the same actual single whole corrugated shipping carton as shipping_carton, with actual composition, measured condition, complete provider and its unresolved specific identity retained. Record gross outward packaging with goods or actual filled returns even when products later return; empty outward cartons use EO separately. Do not net physical exports against Q0, purchases or service shares, or impose an unselected generic-native geography/family default.

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained.

This row represents one actual corrugated carton only; native identity remains unbound, not an unspecified packaging basket. Preserve actual supplier grade/whole construction and complete provider, no substitute fibre/adhesive recipe.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Whole actual physical transfer once; Qt/Q_analysis observation only, linked compatible-unit A_c/originalQ0,c demand distinct, no repeated full treatment or tare-only waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `kee-zipper-production-2010`

###### PE bag empty_return_out (`pe_bag_empty_return_out`)

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained. Actual empty packaging EO outward to supplier/pool; filledreturnpackaging remains grossS_filled, not duplicatedEO.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `rey-coil-catalogue`

###### Corrugated shipping carton empty_return_out (`carton_empty_return_out`)

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained. Actual empty packaging EO outward to supplier/pool; filledreturnpackaging remains grossS_filled, not duplicatedEO.

This row represents one actual corrugated carton only; native identity remains unbound, not an unspecified packaging basket. Preserve actual supplier grade/whole construction and complete provider, no substitute fibre/adhesive recipe.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual physical event once; V/Qt per positive Q_analysis observation only; linked model uses separate evidenced compatible A_c/original positive Q0,c, no duplicate full treatment or second division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `rey-coil-catalogue`

##### Waste flows

###### Actual cardboard carton waste (`cardboard_waste`)

Native Waste flow at plant GLO, packing-generated cardboard scraps/damaged boxes, treatment unspecified, Mass/kg. Its comment contains an expert nominal packaging-loss estimate; do not use that percentage. Weigh actual carton waste by origin and provider and do not additionally export its paper constituents.

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Whole actual physical transfer once; Qt/Q_analysis observation only, linked compatible-unit A_c/originalQ0,c demand distinct, no repeated full treatment or tare-only waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `kee-zipper-production-2010`

###### Actual separated PE bag waste (`pe_bag_waste`)

One separated polyethylene bag waste stream with actual moisture/contamination and treatment provider; no Product plastic-film identity is substituted for this waste. Record whole wet stream OR exclusive dry PE and included water with a bridge, not both. Any genuinely distinct ink/adhesive residue or mixed waste goes to its own measured physical stream.

P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained.

- Selected flow: Separated polyethylene bag waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Whole actual physical transfer once; Qt/Q_analysis observation only, linked compatible-unit A_c/originalQ0,c demand distinct, no repeated full treatment or tare-only waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `kee-zipper-production-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | attributional cases requiring allocation | Use this hierarchy only after the study goal establishes an attributional case in which allocation is required under the relevant ILCD situation. Industrial process documents do not determine LCA allocation. Keep the decision context and any remaining uncertainty explicit; do not freely choose physical/economic allocation or add avoided-production credit. | jrc-ilcd-allocation-2010 |
| allocation_subdivide | each exchange and shared process | First identify dedicated processes and actual or virtual subdivision, including material incorporated in one product and separately metered utilities. Assign an exchange exclusively where its function is demonstrated. Preserve failed/start-stop/idle/cleanup loads within the responsible cohort; a good-output-only allocation may not silently delete them. | jrc-ilcd-allocation-2010 |
| allocation_physical | remaining shared exchanges | For each remaining exchange establish the determining physical causal relation; mass is not universal. A material balance, actual machine occupancy, wet-bath loading, energy/enthalpy or limiting mass/volume together with service duration may explain different exchanges only where measured and causally justified. Record the actual function, driver and uncertainty, with no fixed allocation fraction. For each exchange the amounts allocated to all destinations must sum to that complete pre-allocation burden, without dropping failed loads or cancelling different species. | jrc-ilcd-allocation-2010 |
| allocation_residual_value | genuinely unresolved common-process remainder | Only after documenting why subdivision and exchange-specific determining physical causality leave a real remainder use contemporaneous market values at the common process gate and actual output state, quality, quantity and packaging condition. Do not use a finished-zipper selling price for an intermediate or import a nominal material price. Keep physical amounts, stock flows, gross volume and economic shares separate and disclose sensitivity. Scrap revenue or condensate return does not automatically create a coproduct or substitution credit. | jrc-ilcd-allocation-2010 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

Raw collection and physical attribution are distinct from reporting normalization. Each protocol below stores original unnormalised event values, original units and instrument state, with status/time/cohort provenance. Its aggregation_rule cell is only the final reporting-basis descriptor. It does not instruct the collector to divide raw values. Preserve failures and zero-output periods. [jrc-ilcd-allocation-2010]

Complete physical-gate, inherited-vector, FG-event, wet-representation and per-kind packaging equations are retained in section 5 rules boundary_gate_balance through boundary_packaging_events and are required context for every following protocol and calculation.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | assemble_release | complete article and Q | weighing_and_acceptance | cohort; article ID; gauge; finished length; configuration; slider and stops; gross mass; tare; net mass; conditioning and moisture; first-release timestamp; acceptance or rejection; previous-release link; closing accepted FG; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh the complete conditioned article or reconciled configuration-stratified lot on calibrated scales excluding transport packaging. Reconcile construction and first-acceptance test/serial records; distinguish prior release and test-destroyed pieces. Store raw masses without division. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. OriginalQ0 fullypartitions netremainingdeliveries/allon-siteacceptedstates/irreversibleoriginalmatterwaterlosses/otherdispositions; actualwetstock and laterincrements separate, no restoredlossplusloss. | kg | each release event | production cohort and all historical release links | same configured article and plant | per 1 kg reference flow | scale calibration; tare/conditioning logs; BOM; acceptance signatures; unique-event reconciliation |
| cp_materials_tape_make | tape_make | each external material formulation and component | supply_stock_issue | row_id; supplier and lot; whole supplied article/formulation; actual composition and assay; native route state and unit; opening and closing raw stock; receipts; supplier returns; net/gross flag; actual issue and return event; setup failed cleanup rework issue; cohort; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Use invoices, SDS/assay and weighed non-overlapping issue/return events, retaining supplied water and embedded parts once. Validate native route/form/CAS and reference unit; do not treat a result name as supplier proof. Add preparation utilities/losses for onsite mixing. Store undivided original records; measured already-net issues retain their net flag. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg | each lot and issue/return event | whole production cohort including failed and nonproductive events | each actual process and supplier gate | per 1 kg reference flow | supply certificate; chemical assay; supplier route; stock reconciliation; issue IDs; unresolved identity disclosure |
| cp_materials_chain_make | chain_make | each external material formulation and component | supply_stock_issue | row_id; supplier and lot; whole supplied article/formulation; actual composition and assay; native route state and unit; opening and closing raw stock; receipts; supplier returns; net/gross flag; actual issue and return event; setup failed cleanup rework issue; cohort; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Use invoices, SDS/assay and weighed non-overlapping issue/return events, retaining supplied water and embedded parts once. Validate native route/form/CAS and reference unit; do not treat a result name as supplier proof. Add preparation utilities/losses for onsite mixing. Store undivided original records; measured already-net issues retain their net flag. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg | each lot and issue/return event | whole production cohort including failed and nonproductive events | each actual process and supplier gate | per 1 kg reference flow | supply certificate; chemical assay; supplier route; stock reconciliation; issue IDs; unresolved identity disclosure |
| cp_materials_wet_finish | wet_finish | each external material formulation and component | supply_stock_issue | row_id; supplier and lot; whole supplied article/formulation; actual composition and assay; native route state and unit; opening and closing raw stock; receipts; supplier returns; net/gross flag; actual issue and return event; setup failed cleanup rework issue; cohort; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Use invoices, SDS/assay and weighed non-overlapping issue/return events, retaining supplied water and embedded parts once. Validate native route/form/CAS and reference unit; do not treat a result name as supplier proof. Add preparation utilities/losses for onsite mixing. Store undivided original records; measured already-net issues retain their net flag. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg | each lot and issue/return event | whole production cohort including failed and nonproductive events | each actual process and supplier gate | per 1 kg reference flow | supply certificate; chemical assay; supplier route; stock reconciliation; issue IDs; unresolved identity disclosure |
| cp_materials_assemble_release | assemble_release | each external material formulation and component | supply_stock_issue | row_id; supplier and lot; whole supplied article/formulation; actual composition and assay; native route state and unit; opening and closing raw stock; receipts; supplier returns; net/gross flag; actual issue and return event; setup failed cleanup rework issue; cohort; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Use invoices, SDS/assay and weighed non-overlapping issue/return events, retaining supplied water and embedded parts once. Validate native route/form/CAS and reference unit; do not treat a result name as supplier proof. Add preparation utilities/losses for onsite mixing. Store undivided original records; measured already-net issues retain their net flag. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg | each lot and issue/return event | whole production cohort including failed and nonproductive events | each actual process and supplier gate | per 1 kg reference flow | supply certificate; chemical assay; supplier route; stock reconciliation; issue IDs; unresolved identity disclosure |
| cp_energy_tape_make | tape_make | each electricity and actual gas/air utility exchange | meter_and_operation_events | row_id; meter and submeter; original unit; integrated amount or true rate; time; process state; cohort; voltage; supplier geography and year; own utility boundary; pressure temperature moisture and volume basis for air; allocation driver; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Record complete meter intervals and operating states for productive, failed, idle, start/stop, cleanup and rework events. Convert original units before demonstrated attribution, keeping raw totals undivided. Reconcile total/submeters and owned utility equipment once; do not use machine nameplate power or rated throughput as consumption. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | MJ; m3 | each meter interval and operational event | complete cohort including nonproductive time | all included machines and controlled utilities | per 1 kg reference flow | meter calibration and total/submeter closure; voltage and provider certificate; allocation justification |
| cp_energy_chain_make | chain_make | each electricity and actual gas/air utility exchange | meter_and_operation_events | row_id; meter and submeter; original unit; integrated amount or true rate; time; process state; cohort; voltage; supplier geography and year; own utility boundary; pressure temperature moisture and volume basis for air; allocation driver; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Record complete meter intervals and operating states for productive, failed, idle, start/stop, cleanup and rework events. Convert original units before demonstrated attribution, keeping raw totals undivided. Reconcile total/submeters and owned utility equipment once; do not use machine nameplate power or rated throughput as consumption. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | MJ; m3 | each meter interval and operational event | complete cohort including nonproductive time | all included machines and controlled utilities | per 1 kg reference flow | meter calibration and total/submeter closure; voltage and provider certificate; allocation justification |
| cp_energy_wet_finish | wet_finish | each electricity and actual gas/air utility exchange | meter_and_operation_events | row_id; meter and submeter; original unit; integrated amount or true rate; time; process state; cohort; voltage; supplier geography and year; own utility boundary; pressure temperature moisture and volume basis for air; allocation driver; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Record complete meter intervals and operating states for productive, failed, idle, start/stop, cleanup and rework events. Convert original units before demonstrated attribution, keeping raw totals undivided. Reconcile total/submeters and owned utility equipment once; do not use machine nameplate power or rated throughput as consumption. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | MJ; m3 | each meter interval and operational event | complete cohort including nonproductive time | all included machines and controlled utilities | per 1 kg reference flow | meter calibration and total/submeter closure; voltage and provider certificate; allocation justification |
| cp_energy_assemble_release | assemble_release | each electricity and actual gas/air utility exchange | meter_and_operation_events | row_id; meter and submeter; original unit; integrated amount or true rate; time; process state; cohort; voltage; supplier geography and year; own utility boundary; pressure temperature moisture and volume basis for air; allocation driver; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Record complete meter intervals and operating states for productive, failed, idle, start/stop, cleanup and rework events. Convert original units before demonstrated attribution, keeping raw totals undivided. Reconcile total/submeters and owned utility equipment once; do not use machine nameplate power or rated throughput as consumption. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | MJ; m3 | each meter interval and operational event | complete cohort including nonproductive time | all included machines and controlled utilities | per 1 kg reference flow | meter calibration and total/submeter closure; voltage and provider certificate; allocation justification |
| cp_wip_tape_make | tape_make | internal article transfers and inherited vectors | physical_state_and_vector_register | object and transfer ID; source and receiving process; raw WIP nonWIP status; origin cohort; date; wet gross tare net mass; mutually exclusive constituents; retained water; representation bridge; each inherited exchange vector; opening closing actual transfer or disposition; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh and status-track each matched physical transfer and independent exchange vector. Bridge wet and constituent representations with measurements and uncertainty. Reconcile both process gates and consolidation; never infer historical vectors from current average mass. Store raw undivided values. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg; original exchange units | each transfer/status event and period boundary | full manufacturing history carried across periods | paired source/receiving process gates | per 1 kg reference flow | paired IDs; physical state measurements; complete vector ledger; no duplicate representation |
| cp_wip_chain_make | chain_make | internal article transfers and inherited vectors | physical_state_and_vector_register | object and transfer ID; source and receiving process; raw WIP nonWIP status; origin cohort; date; wet gross tare net mass; mutually exclusive constituents; retained water; representation bridge; each inherited exchange vector; opening closing actual transfer or disposition; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh and status-track each matched physical transfer and independent exchange vector. Bridge wet and constituent representations with measurements and uncertainty. Reconcile both process gates and consolidation; never infer historical vectors from current average mass. Store raw undivided values. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg; original exchange units | each transfer/status event and period boundary | full manufacturing history carried across periods | paired source/receiving process gates | per 1 kg reference flow | paired IDs; physical state measurements; complete vector ledger; no duplicate representation |
| cp_wip_wet_finish | wet_finish | internal article transfers and inherited vectors | physical_state_and_vector_register | object and transfer ID; source and receiving process; raw WIP nonWIP status; origin cohort; date; wet gross tare net mass; mutually exclusive constituents; retained water; representation bridge; each inherited exchange vector; opening closing actual transfer or disposition; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh and status-track each matched physical transfer and independent exchange vector. Bridge wet and constituent representations with measurements and uncertainty. Reconcile both process gates and consolidation; never infer historical vectors from current average mass. Store raw undivided values. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg; original exchange units | each transfer/status event and period boundary | full manufacturing history carried across periods | paired source/receiving process gates | per 1 kg reference flow | paired IDs; physical state measurements; complete vector ledger; no duplicate representation |
| cp_wip_assemble_release | assemble_release | internal article transfers and inherited vectors | physical_state_and_vector_register | object and transfer ID; source and receiving process; raw WIP nonWIP status; origin cohort; date; wet gross tare net mass; mutually exclusive constituents; retained water; representation bridge; each inherited exchange vector; opening closing actual transfer or disposition; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh and status-track each matched physical transfer and independent exchange vector. Bridge wet and constituent representations with measurements and uncertainty. Reconcile both process gates and consolidation; never infer historical vectors from current average mass. Store raw undivided values. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg; original exchange units | each transfer/status event and period boundary | full manufacturing history carried across periods | paired source/receiving process gates | per 1 kg reference flow | paired IDs; physical state measurements; complete vector ledger; no duplicate representation |
| cp_water | wet_finish | water steam condensate vapour and species states | mass_volume_heat_and_species | each row_id; original integrated V or rate; substance and composition; measured density temperature pressure humidity; steam dryness; supplied returned retained or emitted water; inlet/outlet dry-air mass and humidity; actual heat/enthalpy convention; actual species measurements; uncertainty; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Use calibrated meters or weights and independent substance-state density/enthalpy. Account for actual carrier water, recirculation, physical returns and source-attributable vapour once. Require independent reaction/species evidence for chemical transformations and indicators separate from species. Keep undivided raw amounts with integrated/rate flags. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg; m3; MJ | each bath meter interval and return/emission measurement | all wet-processing and cleanup events | wet process and actual external provider/media gates | per 1 kg reference flow | water/heat contract; instrument state; measured uncertainty; elemental/species evidence; physical gate closure |
| cp_waste_tape_make | tape_make | each real physical waste stream | waste_weighing_and_provider | row_id; stream and origin IDs; whole wet W OR measured W_o origin portions; mutually exclusive dry constituents and water; provider; destination; opening/closing waste stock; dispatch receipt; failed/run/rework source; actual species or indicator assay; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh each actual stream, reconcile origins only when portions independently measured, bind one provider to the one physical shipment and keep treatment boundary distinct from air/water emission. Preserve whole/constituent bridge and do not issue duplicate treatment or credits. Store unnormalised data. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg | each waste generation/dispatch and stock boundary | full cohort including failed and cleanup waste | each process and actual waste-provider gate | per 1 kg reference flow | weighbridge and transfer notes; origin balance; assays; provider single-count reconciliation |
| cp_waste_chain_make | chain_make | each real physical waste stream | waste_weighing_and_provider | row_id; stream and origin IDs; whole wet W OR measured W_o origin portions; mutually exclusive dry constituents and water; provider; destination; opening/closing waste stock; dispatch receipt; failed/run/rework source; actual species or indicator assay; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh each actual stream, reconcile origins only when portions independently measured, bind one provider to the one physical shipment and keep treatment boundary distinct from air/water emission. Preserve whole/constituent bridge and do not issue duplicate treatment or credits. Store unnormalised data. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg | each waste generation/dispatch and stock boundary | full cohort including failed and cleanup waste | each process and actual waste-provider gate | per 1 kg reference flow | weighbridge and transfer notes; origin balance; assays; provider single-count reconciliation |
| cp_waste_wet_finish | wet_finish | each real physical waste stream | waste_weighing_and_provider | row_id; stream and origin IDs; whole wet W OR measured W_o origin portions; mutually exclusive dry constituents and water; provider; destination; opening/closing waste stock; dispatch receipt; failed/run/rework source; actual species or indicator assay; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh each actual stream, reconcile origins only when portions independently measured, bind one provider to the one physical shipment and keep treatment boundary distinct from air/water emission. Preserve whole/constituent bridge and do not issue duplicate treatment or credits. Store unnormalised data. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg | each waste generation/dispatch and stock boundary | full cohort including failed and cleanup waste | each process and actual waste-provider gate | per 1 kg reference flow | weighbridge and transfer notes; origin balance; assays; provider single-count reconciliation |
| cp_waste_assemble_release | assemble_release | each real physical waste stream | waste_weighing_and_provider | row_id; stream and origin IDs; whole wet W OR measured W_o origin portions; mutually exclusive dry constituents and water; provider; destination; opening/closing waste stock; dispatch receipt; failed/run/rework source; actual species or indicator assay; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Weigh each actual stream, reconcile origins only when portions independently measured, bind one provider to the one physical shipment and keep treatment boundary distinct from air/water emission. Preserve whole/constituent bridge and do not issue duplicate treatment or credits. Store unnormalised data. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg | each waste generation/dispatch and stock boundary | full cohort including failed and cleanup waste | each process and actual waste-provider gate | per 1 kg reference flow | weighbridge and transfer notes; origin balance; assays; provider single-count reconciliation |
| cp_fg | fg_service | released-goods movements and realised service burdens | cohort_service_and_FG_register | origin c; historical Q_c and release record; opening/closing FG; internal release receipt; gross dispatch; original delivery/reverse links; actual returns; quarantine and scrap; repack/retest/rework events; each service raw exchange; observation H; incremental/cumulative flag; carried vector; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis | Reconcile each physical warehouse event and original cohort. Meter actual services including closing FG storage and idle/cleanup/handling; assign every raw service exchange to original Q_c, with time as observation/causal driver only. Keep manufacturing history separate from incremental service. Store raw undivided values and never regard reinspection as production. Keep full physical stocks/receiver transfers distinct from nonoverlapping compatible A/originalQ0 vectors; no embeddedproviderhistorydoubleadd or stockcorrectiontwice. Unknownessentialmatrix/producer method hold, notfutureSOP; actualQA notdonealone notnomethod. | kg; MJ; original exchange units | each movement/service event and observation update | release history and non-overlapping realised intervals through H | actual warehouse packing handling dispatch and return gates | per 1 kg reference flow | historic Q proof; physical FG balance; meter totals; original and reverse consignment links; update deduplication |
| cp_packaging | packaging | each packaging kind and its actual stocks/movements | individual_packaging_balance | kind k; whole article composition; supplier; empty attached-WIP attached-FG reusable opening and closing states; purchases; external returns received; gross shipments leaving; external returns sent; waste; internal reuse; attachment IDs; origin c; observation H; actual_stage; original_Q0; unique_event_dispositions; later_wetstocks; trueJ_H2O; Unew_before_stockcorrection; own_vs_provider_aggregate_history; receiver_Qt_once; full_actual_provider_quantity; known_component_provenance; independent_compatible_service_vectors; Q_analysis; O; P; I; ER; C; S_filled; EO_empty; W_whole; J_in; J_out; H2O_in; H2O_out; OTHER_duplicate_children; X | P independentpurchase/I actualsupplierincluded inward/ER empty inward/grossS_filled outwardwithgoodsorfilledreturns/EO_empty outwardempty/W_whole fullwetreceiver. O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. ActualJnonwater/H2O legs disjointnotalreadyintransfers;XonlyOTHERsame-sideduplicatechildren,nevertrueinflux/fullwetC/opposite. Wholesubstrate+retainedmatter+water nestedonce. PhysicalQt/providerquantityonce and distinct evidenced compatible A/originalQ0 vectors. Actual pre/postfirstacceptancephase and fullwetstock retained. Each PEbag/cartonpool retains actual O/C empty/attachedrawWIPFG/reusable mass and count. Mandatory finalpackQC belongs to realpreacceptancephase, no duplicated stageenergy. Additional actual packages require full separate pools. | kg | each purchase attachment shipment return waste and stock boundary | actual entire pre/postacceptance custody with originalcohort links | real packaging gate including all empty/attachedrawWIPFG/reusable stocks | per 1 kg reference flow | per-kind physical closure; supplier article assay; gross movement and return records; no product-Q contamination |
| cp_assets_chain_make | chain_make | one actual needle or wipingcloth article percard | full physical fleet and separate servicevector records | articleID; actualconstruction; purchase_return; installed_opening_closing_counts_mass; wet_dry_condition; retainedoil_dye_PET_water; origin_Q0; receiverQt_once; fullproviderquantity; provenance; compatibleunits; independentservicevectors | Weigh each actualwhole article/fleet and retain allphysicalstocks/transfers/wetwaste once. Substrate/retainedmatter/water nested; onlyphysicallyseparatedresiduesget separateexports. No lifetime/material/sharedefault. Actual compatible A_c/originalQ0,c servicevectors distinct, unknownessentialmethodhold. | kg; actualcount | eachactualmovement/replacement andstocktake | fullactualstage/cohort includingfailures | actual chain_make toolboundary | per 1 kg reference flow | supplierconstruction; calibration; fleet/wetreceiverrecords; independentserviceattribution |
| cp_assets_wet_finish | wet_finish | one actual needle or wipingcloth article percard | full physical fleet and separate servicevector records | articleID; actualconstruction; purchase_return; installed_opening_closing_counts_mass; wet_dry_condition; retainedoil_dye_PET_water; origin_Q0; receiverQt_once; fullproviderquantity; provenance; compatibleunits; independentservicevectors | Weigh each actualwhole article/fleet and retain allphysicalstocks/transfers/wetwaste once. Substrate/retainedmatter/water nested; onlyphysicallyseparatedresiduesget separateexports. No lifetime/material/sharedefault. Actual compatible A_c/originalQ0,c servicevectors distinct, unknownessentialmethodhold. | kg; actualcount | eachactualmovement/replacement andstocktake | fullactualstage/cohort includingfailures | actual wet_finish toolboundary | per 1 kg reference flow | supplierconstruction; calibration; fleet/wetreceiverrecords; independentserviceattribution |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | For each raw event convert its original amount unit once; integrate only true rates. Derive substance mass from integrated V and independent state-specific density only where needed; electricity MJ = original kWh * 3.6. Preserve originals and identify measured already-net stock issues. This step contains no Q or H division. | raw_event; original_unit; observation_type; measured_state; density; cp_materials_tape_make; cp_materials_chain_make; cp_materials_wet_finish; cp_materials_assemble_release; cp_energy_tape_make; cp_energy_chain_make; cp_energy_wet_finish; cp_energy_assemble_release; cp_water | converted_raw_events |  |
| attribute_stock | all inventory rows | Apply the complete normative physical-stock and inherited-vector balances in section 5 together with section 8 protocols plus the section 7 exchange-specific allocation hierarchy. For each row and originating cohort create A_i,c in that exchange original/reference numerator unit, or A_i,c(H) for actual services. Historical released FG never creates new production. Preserve full failed/zero-output loads and eliminate only actual paired internal transfers on consolidation. This step contains no normalization division. U_new is actual addition BEFORE stockcorrection; A=Bopen+Unew−Bclose−Tother only truly unused/unassigned raw/WIPvectors. AcceptedFG/performedservice not unused. Ownhistory versus aggregate/decomposedproviders nonoverlap, fullphysicalstocks independent. | converted_raw_events; stock_net_flag; physical_raw_WIP_nonWIP; inherited_exchange_vectors; allocation_evidence; origin_cohort; cp_wip_tape_make; cp_wip_chain_make; cp_wip_wet_finish; cp_wip_assemble_release; cp_fg; cp_waste_tape_make; cp_waste_chain_make; cp_waste_wet_finish; cp_waste_assemble_release; cp_packaging | A_i_c; A_i_c_H | jrc-ilcd-allocation-2010 |
| normalize_cohort | all inventory rows | x_i,c=A_i,c/original positiveQ0,c once for evidenced compatible-unit modeled demands; physical V/Qt perpositiveQ_analysis labelled observationonly. Matched internal producttransfers use actual traced material quantity/originalQ0,c, paired cancellationonce, no purchase. Fullactualreceiver/treatmentquantityonce; nestedprovenance and distinct nonoverlapping servicevectors cannotshrinkphysical orrechargefullQt eachcohort. ActualQ=0/unknownbasis keepsraw withoutunitresult; H notdivisor. | A_i_c; original_Q0_c; actual_physical_transfer; Qt; Q_analysis; compatible_provider_units; cp_release | x_i_c; x_i_c_H |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each reference and exchange | Retain complete positive product/type/material/form/route/phase/geography/media restrictions in the consumed context; provider match is separate. A hard mismatch cannot be waived by a similar name or classification. Unresolved auxiliary identity is a recorded gap, not a fabricated UUID or a reason to erase its exchange. | supplier certificates; actual flow object; property and unit-chain evidence; source applicability |
| dq_complete | all operations and event states | Close every real input/outlet and stage/gate with failed/start-stop/idle/cleanup/rework and actual utilities. Unknown identity/amount is explicit; demonstrate absence before not_applicable. No implicit zero, fixed losses, factory-averaged history or nominal nameplate consumption. | full event ledger; original raw observations; gate reconciliation; missing-field register |
| dq_physical_species | wet materials utilities and waste | Verify physical total mass and relevant measured elements independently of species and reaction-water claims. Preserve whole OR exclusive-constituent bridge and density/thermal state. Source TDS estimates or inconsistent molecular drawings do not establish dye composition or reaction stoichiometry; actual assay remains required. | calibrated weights/state measurements; composition and species assays; uncertainty; provider water/heat agreement |
| dq_cohort | production FG returns and packaging | Preserve original release Q_c, closing accepted FG counted once, raw/WIP/nonWIP vectors, gross physical movements, actual service H and all packaging-kind states. Deduplicate original/reverse/update events without deleting real incremental loads. | unique origin IDs; historical Q records; vectors; FG/packaging balances; cumulative/incremental flags |
| dq_sources | source-derived rules and limits | Use primary originals with relevant complete context and counterexamples; industrial architecture is not allocation evidence. No doses, energy, yield, lifetime, density or supplier ratios are inferred from catalogue samples, nameplate data, comment proxies or tables from a different route. Disclose evidence limitations, measured uncertainty and all missing site quantities. | source originals and stated scopes; collection methods; quality and unresolved-evidence register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_endpoint | reference product and dataset | Verify complete closed-end construction, selected PET tape/coil/stops, correct concealed slider, finished length and first-release tests. The selected row is released_zipper with Mass/kg and the declared native garment-trim CN context. A core whole-product or reference-property incompatibility makes applicability unresolved and prevents usable methodology selection; a component or chain is not the terminal object. | rey-coil-catalogue; primo-coil-line |
| validation_measurement | all exchanges and protocols | Verify source/property/unit compatibility, raw original conversion, stock/net flags, attribution then the unique A_i,c/Q_c normalization. Q_c includes accepted closing FG once; actual services use historical Q_c and H only as observation. Retain zero-output load records with no unit result. Unknown or unsupported relationships require review, not a pass. |  |
| validation_physical | all manufacturing FG and consolidated gates | Require separate physical mass, relevant elements, real species/reaction water, wet-representation bridges, raw/WIP/nonWIP vector closure, steam/condensate state and provider convention, packaging-kind equation and one-provider mixed-waste accounting. Disclose measured uncertainty; one residual cannot fit two unknowns and an indicator is not a chemical mass. X only removes identified OTHER same-side duplicate child entries, never trueJ/water/fullwetC/opposite or a measurement residual. | jrc-textiles-bref-2023 |
| validation_completeness | whole collected dataset | Every source row retains id/type/reference/used_for and each citing rule/card retains source_ids and complete heading/ancestor conditions. Verify all required qualifiers, cards and protocol fields and both languages. Missing measurements, actual unlisted exchanges, supplier assays, provider/route conflicts or unknown history remain explicit incomplete dataset scope; do not turn engineering checks into scientific approval, translation review, classification acceptance or publication. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | secondary_dataset; background_dataset after applicability and data-quality review |
| allowed_use | Configured uncoated closed-end concealed PET coil garment zipper supply on first-release net kg with declared cohort and actual service H; link independently matched upstream providers |
| excluded_use | Universal fastener or all-38923 coverage; 38924 part guidance; chain-only or slider-only output; PA substitution; kg-to-item equivalence without measurement; complete lifetime footprint or methodology approval from inspection |
| required_metadata | all section 3 qualifiers; complete actual operations and event coverage; native restrictions; raw units and exact conversion; Q_c and H; independent vectors and physical states; providers; external transport/waste links |
| required_quality_disclosure | measured and missing quantities; uncertainty and allocation decisions; dye formulation/structure limitations; source age and route scope; auxiliary UUID gaps; scientific and translation review state; actual cumulative or incremental service envelope |
| update_trigger | product polymer/construction/slider/stop/route or supply change; measured count/mass relationship change; utility/provider/media change; new actual exchange or service interval; corrected release/history/species evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| rey-coil-catalogue | handbook | REY, General Catalogue, printed pp. 60–67, 72–77 and 82–87; https://www.rey.com.pe/assets/uploads/catalogs/REY_GENERAL_CATALOGUE_ENGLISH_LOW_web.pdf | PET tape/coil family; actual concealed closed-end product with PET monofilament coils and welded stops; complete-product and reverse-slider counterexamples. No universal mass or life. |
| kee-zipper-production-2010 | literature | KEE Holdings Company Limited, Prospectus 31 December 2010, printed pp. 92, 97–107 and 112–113; https://www.hkexnews.hk/listedco/listconews/sehk/2010/1231/ltn20101231033.pdf | Historical primary factory architecture from purchased yarn/monofilament to tape, chain, wet processing, slider/stop assembly and testing; distinguish metal/POM and purchased complete-slider boundary. Nylon trade name does not establish PET chemistry or current coefficients.  Actual printed112–113on-site sewage treatment/reuse and complete producer/interface countercontext; no historical compliance, amount or reuse-share default. |
| primo-coil-line | handbook | Wenzhou Primo, Nylon Zipper Production Line: From Monofilament to Finishing; https://www.primozippermachine.com/guide/nylon-zipper-production-line.html | Independent machinery route and complete finishing/acceptance boundary; PM711 no-stop counterexample. No nameplate energy/throughput or polymer identity inferred. |
| jrc-textiles-bref-2023 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, EUR 31316 EN (2023), §§2.7.6.2 and 2.7.8 with adjacent alternatives; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Qualitative pure-PET disperse wet-processing, actual conditional auxiliaries and clearing, complete supplied-formulation accounting, real species versus indicators and adjacent PA/blend/other-route exclusions. No recipe, dye percentages or consumption range adopted. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp. 255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Only attributional contexts requiring allocation: dedicated/virtual subdivision, exchange-specific determining physical causality and genuinely remaining common-gate market values with actual state; no arbitrary fraction or automatic credit. |
| unilong-blue56-tds | literature | Unilong Industry Co., Ltd., Disperse Blue 56 Technical Data Sheet, complete 2 pages; https://unilongindustry.com/wp-content/uploads/2024/08/TDS-Disperse-Blue-56.pdf | Named commercial dye and polyester application only. Structural drawing and brominated formula text are inconsistent, full formulation assay absent and density/boiling values labelled estimates; none establishes a chemical UUID, composition factor or dose. |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure 30 June 2025, codes 3892–38924; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification boundary only, separating finished slide fasteners from 38924 parts/blanks; classification does not prescribe manufacture or accept a mapping. |
| qlq-core-placement-2019 | handbook | Guangzhou QLQ, Coil Forming factory and Invisible Zipper Product, 22 March 2019; https://www.qlqcompany.com/en/news/1224.html | Independent core-cord feed inside coils, adjacent metal/plastic cord-in-tape counterexample and invisible closed-end finishing. No rated quantities/power or polymer identity inferred from nylon trade terminology. |
