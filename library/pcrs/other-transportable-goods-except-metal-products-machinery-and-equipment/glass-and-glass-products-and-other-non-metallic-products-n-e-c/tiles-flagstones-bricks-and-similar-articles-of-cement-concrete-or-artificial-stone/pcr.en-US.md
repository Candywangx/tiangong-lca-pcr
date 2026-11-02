---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.tiles-flagstones-bricks-and-similar-articles-of-cement-concrete-or-artificial-stone
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Single-layer unreinforced vibropressed concrete paving blocks

## 1. Scope and Applicability

This attributional method covers one declared grade of complete single-layer unreinforced concrete paving block made from incoming unfabricated supplies by semi-dry mixing and vibrocompression, followed by actual controlled curing, demoulded-product handling, specified mechanical edge finishing, tests and unique first quality release. Include all manufacturing operations, controls, failures, samples, start/stop, idle, cleanup, genuine rework and capital services. Original-cohort packing, storage, handling, dispatch and returns are observed separately over H. A concrete dataset declares its plant and geography; the electricity identity below is limited to a China 1–35 kV user-side grid supply. This is a transparent technical synthesis of primary industrial route and product evidence, not one factory recipe or proof of one current SKU or order.

Exclude ready-mixed wet concrete, cement/clinker, natural stone, fired ceramic paving, resin-dominant artificial stone, reinforced articles, AAC/autoclaved products, wet-cast slabs, separate face-mix layers, deliberately CO2-cured products and installed pavement systems. The selected terminal is a bare through-mix paver without coating or sealer. Integral mineral pigment and one qualified whole admixture are individually recorded when present. Actual washing, blasting, polishing, coating, a new binder/aggregate chemistry or another curing route requires renewed applicability and all added atomic exchanges; it cannot disappear into zero or an unspecified residual. Purchased finished-paver packing cannot replace manufacture.

Masa distinguishes products with and without face mix, curing-zone ventilation and optional surface treatments. CMHA independently describes cement/aggregate mixes shaped by pressure and vibration. The Marshalls EPD provides a through-mix semi-dry example and a separate packaging stage. Its statements about negligible waste, recycled water, heating frequency, average products, mass/area, depth scaling, life and downstream carbonation are case-specific and are not defaults here. Its mass/volume allocation table is not the allocation rule of this PCR. Actual paver specification and release evidence determine conformity; no default water/cement ratio, slump, pressure, vibration program, temperature, curing time, hydration degree, density, strength, dimensions, service life or CO2 credit is supplied. `masa-concrete-block-production`; `marshalls-through-mix-2023`; `cmha-pav-tec-010`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.tiles-flagstones-bricks-and-similar-articles-of-cement-concrete-or-artificial-stone |
| classification_refs | CPC 3.0 37540; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Complete bare single-layer unreinforced vibropressed and cured concrete paving block of one declared through-mix grade |
| excluded_products | Exclude ready-mixed wet concrete, cement/clinker, natural stone, fired ceramic paving, resin-dominant artificial stone, reinforced articles, AAC/autoclaved products, wet-cast slabs, separate face-mix layers, deliberately CO2-cured products and installed pavement systems. The selected terminal is a bare through-mix paver without coating or sealer. Integral mineral pigment and one qualified whole admixture are individually recorded when present. Actual washing, blasting, polishing, coating, a new binder/aggregate chemistry or another curing route requires renewed applicability and all added atomic exchanges; it cannot disappear into zero or an unspecified residual. Purchased finished-paver packing cannot replace manufacture. |
| representative_product | Uninstalled concrete pavement block at unique first quality release |
| production_route | Actual unfabricated supplies → preparation/mixing → vibrocompression → controlled curing → required mechanical edge finishing/tests → first release |
| market_state | Bare complete hardened unit; no coating or separate face layer; packaging outside net reference |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of the declared complete concrete paving block; this declared unit is not installed-pavement functional equivalence |
| How much | 1 m2 |
| How well | Actual specification, drawing, grade and required tests met at first release; native high-strength pavement-brick family is qualified by actual results, without a universal threshold |
| How long or cycle | One declared manufacturing cohort and reporting period; separate original-cohort service horizon H; no assumed service life |
| reference_flow_link | `accepted_paver` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | brick `24c495b7-b9f4-4187-93ea-327a9e6f1037` |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | declared through-mix grade and intended paving use; cement binder and actual aggregate mineralogy and grading; absence of reinforcement and separate face layer; actual pigment and complete admixture formulation; semi-dry forming route and machine configuration; actual curing temperature humidity and time history; finishing condition and absence of applied coating; drawing-specific single-face projected geometry; net bare mass and retained water state at first release; test methods specification and lot acceptance; unique first-release cohort ledger Q_c; opening and closing raw and curing WIP exchange histories; original-cohort Q_H and observed service horizon H; gross shipments returns and original delivery references; supply form packaging ownership and actual geography; native identity restrictions and provider compatibility |

Declare every Required qualifier in the concrete dataset metadata, reference-flow comment, process notes or equivalent field. Read the complete accepted_paver card and its ancestors with this table; the full native concrete identity qualifies the isolated taxonomy defect.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_area | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Q_c is the sum of actual single-face projected areas of uniquely first-released bare units. Use calibrated dimension measurements and traceable design-specific drawings. L × W is valid only for a verified rectangle; exclude inter-unit joints and do not use a bounding box, both faces or an installed pavement area. The output row is exactly 1 m2. |
| one_normalization | all inventory rows | native extensive property | row-specific | Collect unnormalized raw records; convert original units and actual rates, assign and reconcile cohort ownership, then use normalize_once exactly once. Cards and protocol aggregation refer to that result. Q_c includes closing FG of newly released cohorts; it is not net deliveries. For service rows use the original cohort Q_H. Q=0 retains actual loads without a unit result. |
| moisture_and_mass | material and bare-product mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net wet/as-received material and bare paver masses with calibrated balances and documented sampling. Keep free water, absorbed water and chemically/structurally bound water independently determined by suitable tests and phase evidence. Total wet stock and real influx both remain. Mass/area is measured for the same drawing, thickness, batch, moisture and release age; no secondary native factor, assumed item mass or density is a conversion. |
| electricity_conversion | m_electricity; s_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the native extensive energy property. Convert measured kWh to MJ using 3.6 MJ/kWh, without interpreting electrical energy as a measured fuel calorific value. Verify China 1–35 kV grid-average supply; keep transformer and provider boundaries explicit. |
| volume_state | m_gas; m_hydraulic | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Native Volume is retained. State pressure, temperature, gas composition and dry/wet convention for natural gas, and temperature/formulation for hydraulic fluid. Integrated volumes are not multiplied by time again. Convert a true rate by integration once. Use independently measured material-specific density for mass and actual lower heating value for fuel heat; native secondary coefficients do not establish either. |
| carrier_heat | m_purchased_heat; m_steam; m_condensate; m_return_water; m_heat_carrier_water; s_heat_carrier_water | actual heat and carrier mass | MJ; kg | Do not invent steam, boilers or heat exchange circuits. If actually used, record purchased heat once, steam carrier mass/quality/enthalpy, returned condensate or heat-exchange water and supplier water/energy ownership independently. Do not double count the same whole heat provider and its fuel/steam subledger. For the actual external carrier/return legs m_steam, m_heat_carrier_water, s_heat_carrier_water, m_condensate and m_return_water, A_e denotes the independently measured full gross physical V_e in that native row unit, not an attributed burden vector, net consumption, stock difference or economic share. Apply normalize_once to V_e once using Q_c for the manufacturing leg or its linked original Q_H for a service leg over observed H. Keep the absolute gross inlet and return separately, even when equal; measure actual temperature, pressure, phase/quality and enthalpy independently of delivered thermal MJ. One agreed water/heat provider owns the supply burden once; this physical carrier/return is not an additional whole purchase, export credit or assumed boiler/circuit. Only an identical OTHER same-side physical flow/event can deduplicate a leg; no stock, opposite flow or merely present card cancels it. A true return not yet listed requires its own qualified actual atomic card before use; no return or route is presumed. |
| species_balance | all elementary rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep physical mass and relevant C/H/O/Ca/N/S balances separate from species/phase evidence. Determine hydration and carbonation independently; one residual cannot fit two unknowns. NOx as NO2-equivalent, COD, VOC, total carbon and PM size bins are indicators rather than proof of a particular chemical species. Do not add a gross air total to the same included species. |
| asset_service | m_vibropress; m_mould; m_board; s_forklift | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the complete configured asset mass from calibrated weighing or traceable compatible manufacturer records. Record physical purchases, installed stock, retirement and repair separately from the assigned embodied service vector. Only evidenced service/capacity allocation is permitted; no fixed lifetime or one whole machine per kg/m2. Unknown service capacity remains a concrete dataset gap. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual whole cement powder; wet-washed medium sand; natural rounded coarse gravel; water; each real supplied formulation and utility at supplier gate |
| starting_condition_role | Complete cradle-to-first-release manufacture with separate observed original-cohort services |
| product_classification_scope | CPC 3.0:37540 narrower single-layer unreinforced vibropressed concrete paver |
| recursive_input_rule | External concrete aggregate or paver-derived feed needs its own qualified upstream input and real transformation; internal returns cancel once with inherited vectors. No purchased finished-paver recursion replaces manufacture. |
| upstream_dataset_requirement | Match actual material/form/route/provider/geography/period and complete whole supply. Reuse no whole provider plus duplicated constituent or energy supply. |
| disclosure | Cohorts; actual wet/phase states; full physical and burden histories; Q_c/Q_H/H; gross returns; six packaging legs; capital service; gaps and allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | product system | Include upstream production and actual inbound transport of every whole supplied material, fuel, water and package; receiving/preparation, mixing, forming, curing, all required finishing/tests and controls through first release, then separately all performed original-cohort services. Foreground begins with actual supplied cement, aggregates and complete formulations, never purchased finished pavers. | `masa-concrete-block-production`; `marshalls-through-mix-2023`; `cmha-pav-tec-010` |
| boundary_supplies | purchased formulations | A whole purchased cement, pigment preparation, admixture or release formulation crosses the boundary once, with supplier-included packaging and one upstream owner. Assay constituents, carrier water and active solids are composition subledgers, not duplicate purchases. Actual in-house compounding requires each purchased constituent and real mixing energy/losses. Add each actually present flow not listed below as its own atomic card; none is concealed by zero or an other-material total. | `cmha-pav-tec-010`; `marshalls-through-mix-2023` |
| boundary_first_release | manufacturing cohorts | Q_c records a unit once at its first specified quality release after actual curing, finishing and tests. Newly released closing FG is already inside Q_c; never add it as a second production output or remove its manufacturing burden. Reinspection, storage, dispatch, returns and sale do not create new output. Unreleased curing stock remains WIP with its full per-exchange inherited history. | `masa-concrete-block-production`; `marshalls-through-mix-2023` |
| boundary_burden_stocks | manufacturing inventory vectors | For each exchange e and cohort c reconcile A_m,e = B_open,e + X_owned,e + T_in,e - B_close,e - T_other,e. B_open/B_close contain raw materials, unreleased WIP and genuinely unused/unassigned stores or service charges only; exclude already released FG. X_owned contains real operating loads and influx owned once. Keep all failed/zero-output/start-stop/idle/cleanup/rework loads and waste treatment. Ordinary rejects, samples, externally sold waste and disposal do not justify T_other. That term requires a real independent cohort/function and a justified allocation/handover with one vector transfer. A consumption record already corrected for stock is not corrected a second time. | `jrc-ilcd-2010` |
| boundary_service | original released cohorts | Services use A_s,e for actual incremental work over observed H and the original cohort first-release area Q_H. Include service of FG still in store; only genuinely unused/unassigned service or charges may carry forward. Keep historical manufacturing and performed service vectors, gross shipment G, physical return R and original delivery reversal D_rev separately: gross returned mass need not equal original delivered mass because water, loss, damage or genuine rework may change it. This first-release method never replaces Q by G-R. A net-delivery dataset requires a separately reviewed complete opening/closing FG historical-burden and original-delivery reversal bridge. | `jrc-ilcd-2010`; `marshalls-through-mix-2023` |
| boundary_physical | manufacturing FG and combined physical gates | Reconcile full wet opening stock plus every actual gross incoming material/water/fuel/atmospheric-species/repair/asset leg against full wet closing stock plus unique new-Q bare mass, every gross waste/sample/reject/release/return/retired-asset leg and installed-asset change. FG separately reconciles opening + first release + physical returns with closing + gross shipments + actual waste and transfers; combined gates cancel only internal first-release/FG and other identical transfers. Do not scale gross physical legs by burden shares. Water and repair X_in/X_out deduplicate only identical other inflow/outflow terms: a real new influx retained in closing wet stock remains an influx together with full closing mass. In the displayed stock equation M_open/M_close exclude installed asset bodies and contained fluids already represented in delta_installed; retain their complete separate wet installed-stock ledger. FG stocks belong to the FG gate, raw/WIP stocks to manufacturing; consolidation includes each once. | `jrc-ilcd-2010` |
| boundary_rework | unreleased and released rework | Trace actual stage, original cohort, condition, added materials/water/energy, emissions, losses, tests and disposition of each rework pass. Post-release work requires manufacturer/specification permission and postwork tests/acceptance/disposition. Broken hydraulic-cement units are not assumed to regain their original function. Crushing a reject to aggregate is not another accepted paver or automatic credit. Independently record each actual new/old material or part added and removed and each free/carrier/absorbed/structural/reaction-water phase. Repair-held FG is one labelled FG substate or a disjoint repair-WIP state, never both. Trace actual maker/specification permission, postwork tests, acceptance or rejection and final destination; neither a broken/hardened/rewetted paver nor its restoration is assumed, and no work creates another Q. Manufacturer/specification permission and postwork tests govern authorization, continued conformity and acceptance/rejection/disposition only. Independently record every actually performed unauthorized, unapproved, failed or rejected operation and all its material/part/water/energy inputs, emissions, losses, waste and burdens on the proper original Q_c or Q_H/H, even when permission or tests fail. This neither authorizes that operation nor assumes a damaged hydraulic-cement body is restored; no new Q arises. | `masa-concrete-block-production`; `cmha-pav-tec-010` |
| boundary_packaging | each packaging article | For each material/article independently reconcile opening empty + opening attached WIP/FG + opening reusable + P + I + ER + X_in = closing empty + closing attached WIP/FG + closing reusable + S + EO + W + X_out. P is paid procurement (standalone or bundled)d; I is first non-purchased external ingress; ER external return received; S accompanies gross physical shipments; EO other external return/output; W waste. Count P/I whole articles once with one upstream owner; internal reuse cancels. Six legs deduplicate only identical other physical incoming/outgoing terms. New packaging retained at closing is still real ingress. Do not put packaging into bare Q, re-purchase it on every reuse, or create an automatic co-product.  Independently weigh actual repair material and water additions/removals; X only covers matter absent from another same-direction flow term, never opening/closing stocks. Whole wet P/I articles enter once with one upstream owner; retained actual influx remains alongside complete wet closing mass. A whole wet article receipt already includes its integral wood/fasteners/coating and contained water once. Separately added on-site components or water are independent real influxes only when disjoint from the whole receipt; retain an article/component bridge and paired internal handoff so consolidation never counts a whole assembled tare plus its same components twice. For a real single mixed packaging-waste outlet, independently measure each source-material W in a nonadditive raw origin ledger, reconcile sum(origin W) to the one measured mixed total, and use one qualified actual Waste exchange/treatment owner. Report the total OR its disjoint partition, never both additively. A material W card is an actual separate outlet only if physically separated; otherwise it is that origin subledger, not an invented separated outlet. Add/qualify a single mixed-outlet card only if that outlet actually occurs; no mixed stream is presumed.  Apply packaging_receipt_basis to distinguish each actual P/I/ER receipt. | `marshalls-through-mix-2023`; `jrc-ilcd-2010` |
| packaging_receipt_basis | each packaging receipt | For every actual packaging article, classify each whole external receipt once. P is paid procurement, including paid packaging bundled with another supply without a separate invoice. I is all first non-purchased external ingress: standalone gifts, loans, rental or pool receipts and non-purchased supplier-attached packaging; supplier attachment is only an I subset. ER requires this same item or an auditable configuration-matched batch linked to this site's own prior outward record; custody or another party's use alone does not prove a return. P, I and ER are disjoint. Existing I cards and their raw protocols cover the same physical article for every such I origin; no new material, UUID or quantity is presumed. X_in/X_out remain disjoint material/water-change terms, never a substitute for whole-article receipt. Retain gross physical quantity, owner/custodian, payment or non-purchase basis, origin, prior-outward link where required, native state/unit and inherited manufacturing/service vector. Non-purchase is neither a new manufacture nor automatic zero burden: attribute actual used service and incremental transport/handling once to its proper original cohort and denominator, retaining unused service separately without a default lifetime or credit. This is the declared conserving foreground accounting implementation, not a claim that the cited source prescribes these variable names. | `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mix_form | Receipt preparation mixing and vibrocompression | required | Actual unfabricated supplies and complete semi-dry shaping route | Receipt preparation mixing and vibrocompression | Q_H over H for services; Q_c for manufacturing |
| cure_release | Curing handling finishing and first release | required | Unreleased curing WIP through required tests and unique acceptance | Curing handling finishing and first release | Q_H over H for services; Q_c for manufacturing |
| manufacturing_controls | Manufacturing utilities controls cleaning and asset service | required | All actually performed manufacturing support including zero-output intervals | Manufacturing utilities controls cleaning and asset service | Q_H over H for services; Q_c for manufacturing |
| cohort_services | Original-cohort packing storage dispatch and returns | required | Separate service observation H with original first-release area Q_H | Original-cohort packing storage dispatch and returns | Q_H over H for services; Q_c for manufacturing |

All cards are atomic. An actual absence must be justified; an unmeasured amount is not zero. Add individual real flows when the declared actual route requires them. Collections retain raw numerator quantities, actual gross physical legs and histories; the card amount is the single normalized inventory contribution from normalize_once. Physical gross ledgers remain unscaled by allocation. Internal material transfers between forming/curing and recovered water/dust are reconciled with per-exchange inherited vectors and cancelled only on consolidation.

### Process: Receipt preparation mixing and vibrocompression (`mix_form`)

Actual unfabricated supplies and complete semi-dry shaping route. Read the boundary, measurement, allocation and linked collection context for every row; service records retain original Q_H and H.

#### Inputs

##### Product flows

###### Portland cement powder (`cement`)

One whole supplied gray hydraulic Portland cement powder at plant; native OPC/Type I family. Qualify actual standard, grade, composition and supplier; exclude clinker lumps and do not add constituent clinker/gypsum again. Retain incoming delivery packaging separately. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_raw`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

###### Washed medium sand (`washed_sand`)

One supplied sand grading made by wet sand production and washing of coarse/medium sand, matching the native route; use the actual medium-sand fraction as fine aggregate. The broad native basename does not permit simultaneous bundled gravel. Record grading, mineralogy, as-received moisture and wet mass; no assumed silica purity or dry-state conversion. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Native locationOfSupply is CN-HN-CSX; verify the actual supplying location and delivery/provider boundary against that constraint. A different actual supply location requires a compatible reselected native/provider, not relabelling this identity as global.

- Selected flow: Sand and gravel (product sand) `ade95caf-2a0c-4fc3-8aa9-14ac536502da`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_raw`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

###### Natural rounded coarse gravel (`coarse_gravel`)

One natural more-or-less rounded coarse gravel aggregate supply, generally coarser than sand and above 2 mm in the native description. It is not the fine sand row, crushed stone of another fixed class or soil-remediation-site gravel. Verify actual grading/mineralogy/moisture and paving compatibility before provider use. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Gravel Sand `73f1241c-e77d-4e9e-b290-e755a40acf81`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_raw`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

###### Aqueous polycarboxylate water-reducing formulation (`admixture`)

Conditional on one actual purchased aqueous polycarboxylate concrete water-reducer formulation; native water-reducer family is physically compatible but does not certify this formulation or its site performance. Purchase the entire supplied preparation once. Active polymer, carrier water and preservatives are assay subledgers. Any other independently supplied chemical needs a separate row. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Water reducer `d13b6302-2c5a-4d75-a18b-020b61e7ca60`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_raw`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

###### Red iron(III) oxide concrete pigment powder (`pigment`)

Conditional on one actual red iron(III)-oxide pigment powder supply. The native iron-oxide pigment family explicitly includes concrete and several oxide colours; qualify actual Fe2O3 phase/assay and powder form, not mined ore for metal extraction, resin dispersion or an assumed universal colour recipe. A supplied blended preparation is a whole different formulation and needs its own qualified card. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Iron oxide pigment `6a04e79b-6699-4502-8fde-188df47058c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_raw`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

###### Mixing water (`mix_water`)

Meter actual treated industrial process water added to the mix. Subtract no water solely because it remains in wet WIP; keep water already in whole admixture or wet sand only in composition subledgers. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

###### Mixer cleaning water (`clean_water`)

Meter actual treated process water used for mixing/forming cleanup, including failed and zero-output runs. Track recovery, evaporation and off-site aqueous waste independently. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

#### Outputs

##### Waste flows

###### Fresh concrete forming reject (`green_reject`)

One actual unreleased green concrete reject stream, measured wet with free/bound water and composition subledgers. Internal recovery cancels physically and retains history once; external sale/disposal does not remove ordinary manufacturing burden. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Fresh concrete forming reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

### Process: Curing handling finishing and first release (`cure_release`)

Unreleased curing WIP through required tests and unique acceptance. Read the boundary, measurement, allocation and linked collection context for every row; service records retain original Q_H and H.

#### Inputs

##### Product flows

###### Curing make-up water (`curing_water`)

Record actual treated process-water make-up for the real curing system, separately from retained mix water, ambient humidity, internal condensate and unprovided steam. Track temperature and phase and all real external return/discharge legs. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

#### Outputs

##### Product flows

###### Complete first-released bare paver (`accepted_paver`)

Native brick is explicitly a concrete pavement brick/high-strength brick made from cement, sand/gravel and water, available as production mix at plant, with Area as its sole reference property; no fixed geometry, CAS, geography or item mass is declared. Its 37310 ceramic/siliceous-earth classification is an isolated taxonomy defect and is not followed: the full concrete material/use description governs this limited adoption. Restrict to the declared complete bare single-layer unreinforced vibropressed and actually cured paver after required finishing/tests. No wet ready-mix, clinker, natural stone, fired ceramic, resin-dominant stone, added face layer or installed pavement substitution. Q_c includes same-cohort closing FG once.  The native high-strength pavement-brick descriptor requires an actually compatible declared paving grade and manufacturer specification/test evidence; it provides no universal strength threshold or service life. Retain the declared single-face net projection convention rather than an installed-pavement area.  Declare the single projection plane and measured net outline, including interlocks and actual holes/cut-outs. Exclude installation joints/gaps, neighbouring units and summing both faces or all surfaces. L*W requires a verified solid rectangle without openings; no EPD size, thickness, density or mass/area coefficient is a measured conversion.

- Selected flow: brick `24c495b7-b9f4-4187-93ea-327a9e6f1037`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: 1 m2
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`; `cmha-pav-tec-010`

###### Liquid water condensate returned to supplier (`m_condensate`)

Conditional on a real external Product return. Measure mass, temperature and enthalpy relative to the declared reference; identify supplier water/energy ownership and counterflow. Internal condensation or recirculation is not an external exchange. No steam or water circuit is presumed. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. For the actual external carrier/return legs m_steam, m_heat_carrier_water, s_heat_carrier_water, m_condensate and m_return_water, A_e denotes the independently measured full gross physical V_e in that native row unit, not an attributed burden vector, net consumption, stock difference or economic share. Apply normalize_once to V_e once using Q_c for the manufacturing leg or its linked original Q_H for a service leg over observed H. Keep the absolute gross inlet and return separately, even when equal; measure actual temperature, pressure, phase/quality and enthalpy independently of delivered thermal MJ. One agreed water/heat provider owns the supply burden once; this physical carrier/return is not an additional whole purchase, export credit or assumed boiler/circuit. Only an identical OTHER same-side physical flow/event can deduplicate a leg; no stock, opposite flow or merely present card cancels it. A true return not yet listed requires its own qualified actual atomic card before use; no return or route is presumed.

- Selected flow: Liquid water condensate returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `marshalls-through-mix-2023`

###### Liquid heat-exchange water returned to supplier (`m_return_water`)

Conditional on a real external Product return. Measure mass, temperature and enthalpy relative to the declared reference; identify supplier water/energy ownership and counterflow. Internal condensation or recirculation is not an external exchange. No steam or water circuit is presumed. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. For the actual external carrier/return legs m_steam, m_heat_carrier_water, s_heat_carrier_water, m_condensate and m_return_water, A_e denotes the independently measured full gross physical V_e in that native row unit, not an attributed burden vector, net consumption, stock difference or economic share. Apply normalize_once to V_e once using Q_c for the manufacturing leg or its linked original Q_H for a service leg over observed H. Keep the absolute gross inlet and return separately, even when equal; measure actual temperature, pressure, phase/quality and enthalpy independently of delivered thermal MJ. One agreed water/heat provider owns the supply burden once; this physical carrier/return is not an additional whole purchase, export credit or assumed boiler/circuit. Only an identical OTHER same-side physical flow/event can deduplicate a leg; no stock, opposite flow or merely present card cancels it. A true return not yet listed requires its own qualified actual atomic card before use; no return or route is presumed.

- Selected flow: Liquid heat-exchange water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `marshalls-through-mix-2023`

##### Waste flows

###### Rejected cured concrete paver (`broken_paver`)

Record actual broken/rejected cured units and destructive samples with net bare wet mass and disposition. No assumed safe restoration of a broken hydraulic-cement body and no automatic burden deduction on sale. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Rejected cured concrete paver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

###### Concrete curing and finishing sludge (`curing_slurry`)

One real wet concrete sludge stream from actual cleanup or edge finishing, including actually performed unauthorized, failed or rejected work. Preserve solids, liquid and assay separately, whole wet mass and treatment ownership; do not infer chemistry from COD or mass residual. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Manufacturer/specification permission and postwork tests govern authorization, continued conformity and acceptance/rejection/disposition only. Independently record every actually performed unauthorized, unapproved, failed or rejected operation and all its material/part/water/energy inputs, emissions, losses, waste and burdens on the proper original Q_c or Q_H/H, even when permission or tests fail. This neither authorizes that operation nor assumes a damaged hydraulic-cement body is restored; no new Q arises.

- Selected flow: Concrete curing and finishing sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `masa-concrete-block-production`; `cmha-pav-tec-010`

### Process: Manufacturing utilities controls cleaning and asset service (`manufacturing_controls`)

All actually performed manufacturing support including zero-output intervals. Read the boundary, measurement, allocation and linked collection context for every row; service records retain original Q_H and H.

#### Inputs

##### Product flows

###### Manufacturing grid electricity (`m_electricity`)

China user-side grid-average alternating current at 1–35 kV only. Use actual meters for mixing/forming, curing ventilation, handling, testing, dust control, cleanup and idle intervals. The native energy property does not mean a measured fuel heating value; convert kWh using 3.6 once and qualify actual supplier/time mix. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Gaseous natural gas (`m_gas`)

Only actual compressed/pipeline gaseous natural gas delivered to consumption, native methane CAS 74-82-8 and Volume reference. Verify composition and state; this is not LNG, bottled LPG or a universal gas energy factor. Conditional actual curing assistance or heat generation is included, with real emissions. The candidate fixes methane CAS 74-82-8 while an actual pipeline formulation/composition is not established. It remains unbound; retain a single concrete gaseous natural-gas exchange and Volume/m3, with actual state/composition rather than assuming chemical equivalence. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Gaseous natural gas
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Diesel for manufacturing mobile equipment (`m_diesel`)

One actual diesel fuel supply on native Mass basis. Grade, blend/biogenic content, density, lower heating value, refinery route, geography and provider are unspecified natively and must be collected; no pure-compound CAS or default LHV is inferred. Record actual loader/forklift transport and idle fuel only once. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Hydraulic fluid charge and top-up (`m_hydraulic`)

One whole formulated hydraulic fluid; native mineral or synthetic base oil with additives, Volume reference. Qualify actual formulation and temperature. Record each real new charge/top-up and old fluid outflow plus full in-place closing fluid; no native mass coefficient is an actual density. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Mineral machinery lubricating oil (`m_lubricant`)

Conditional one whole petroleum-derived lubricating-oil formulation. The inspected PAO synthetic record conflicts and the alternative record fixes 40.5 MJ/kg without foreground confirmation; neither is adopted. Keep new oil, retained installed oil and used oil separately; assay and water are not duplicate products. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Mineral machinery lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Mineral-oil concrete mould-release formulation (`m_release_oil`)

Only one real supplied mineral-oil mould-release formulation when applied. Record the complete supply once, actual overspray, carry-over and waste; add independently purchased components only for genuine on-site compounding. No VOC total is a chemical species. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Mineral-oil concrete mould-release formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Purchased hot-water heat (`m_purchased_heat`)

Conditional actual purchased heat transfer; record delivered thermal energy from actual mass/temperature/enthalpy and provider agreement. A source-specific natural-gas heat record is not assumed. Do not also purchase its whole fuel/steam provider. Keep hot-water carrier mass/return legs explicit. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Purchased hot-water heat
- Flow property / unit: Energy / MJ
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Purchased water steam (`m_steam`)

Only actual external steam. The inspected 11 MPaG chemical-industry steam record does not establish this curing supply and is not adopted. Collect real carrier mass, pressure, temperature, dryness, enthalpy, return and water/heat ownership; avoid a second whole energy provider. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. For the actual external carrier/return legs m_steam, m_heat_carrier_water, s_heat_carrier_water, m_condensate and m_return_water, A_e denotes the independently measured full gross physical V_e in that native row unit, not an attributed burden vector, net consumption, stock difference or economic share. Apply normalize_once to V_e once using Q_c for the manufacturing leg or its linked original Q_H for a service leg over observed H. Keep the absolute gross inlet and return separately, even when equal; measure actual temperature, pressure, phase/quality and enthalpy independently of delivered thermal MJ. One agreed water/heat provider owns the supply burden once; this physical carrier/return is not an additional whole purchase, export credit or assumed boiler/circuit. Only an identical OTHER same-side physical flow/event can deduplicate a leg; no stock, opposite flow or merely present card cancels it. A true return not yet listed requires its own qualified actual atomic card before use; no return or route is presumed.

- Selected flow: Purchased water steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Steel mixer wear plate (`m_wear_plate`)

One actual steel replacement wear plate with drawing, alloy, delivered processing and measured mass; not a generic metal bundle or a different fixed sheet gauge. Retain new-part influx and old-part removal plus closing installed part mass. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Steel mixer wear plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Polyester dust-collector filter bag (`m_filter`)

One actual supplied polyester filter bag with compatible material and construction. Record installation, replacement, captured dust and disposal separately; do not call a filter polymer resin its finished bag. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Polyester dust-collector filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`

###### Configured concrete-block vibropress (`m_vibropress`)

One configured physical asset. Preserve complete measured net mass, actual manufacture/acquisition boundary, opening/in-use/closing stock, repair and retirement. The inventory contribution is only its evidenced assigned embodied service, with no fixed life or whole-asset charge per unit product; physical gross acquisition/removal remains unscaled. Retain real old/new parts and in-place fluids separately. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Configured concrete-block vibropress
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `masa-concrete-block-production`; `jrc-ilcd-2010`

###### Steel concrete-paver mould (`m_mould`)

One configured physical asset. Preserve complete measured net mass, actual manufacture/acquisition boundary, opening/in-use/closing stock, repair and retirement. The inventory contribution is only its evidenced assigned embodied service, with no fixed life or whole-asset charge per unit product; physical gross acquisition/removal remains unscaled. Retain real old/new parts and in-place fluids separately. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Steel concrete-paver mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `masa-concrete-block-production`; `jrc-ilcd-2010`

###### Steel concrete production board (`m_board`)

One configured physical asset. Preserve complete measured net mass, actual manufacture/acquisition boundary, opening/in-use/closing stock, repair and retirement. The inventory contribution is only its evidenced assigned embodied service, with no fixed life or whole-asset charge per unit product; physical gross acquisition/removal remains unscaled. Retain real old/new parts and in-place fluids separately. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Steel concrete production board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `masa-concrete-block-production`; `jrc-ilcd-2010`

###### Purchased hot-water carrier (`m_heat_carrier_water`)

Conditional actual external hot-water carrier, with full mass, temperature, water ownership and matched return. Deduplicate only an identical water inflow already inside an owned whole supply; do not cancel a real new influx simply because it remains in closing stock. Heat MJ and water kg describe different physical/accounting quantities. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. For the actual external carrier/return legs m_steam, m_heat_carrier_water, s_heat_carrier_water, m_condensate and m_return_water, A_e denotes the independently measured full gross physical V_e in that native row unit, not an attributed burden vector, net consumption, stock difference or economic share. Apply normalize_once to V_e once using Q_c for the manufacturing leg or its linked original Q_H for a service leg over observed H. Keep the absolute gross inlet and return separately, even when equal; measure actual temperature, pressure, phase/quality and enthalpy independently of delivered thermal MJ. One agreed water/heat provider owns the supply burden once; this physical carrier/return is not an additional whole purchase, export credit or assumed boiler/circuit. Only an identical OTHER same-side physical flow/event can deduplicate a leg; no stock, opposite flow or merely present card cancels it. A true return not yet listed requires its own qualified actual atomic card before use; no return or route is presumed.

- Selected flow: Purchased hot-water carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-ilcd-2010`

##### Elementary flows

###### Atmospheric dioxygen intake (`m_oxygen_in`)

Native O2 CAS 7782-44-7; renewable element resource from air. Actual atmospheric intake only, not purchased compressed oxygen. Record gross O2 and do not add a whole-air mass to its component masses. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ilcd-2010`

###### Atmospheric dinitrogen intake (`m_nitrogen_in`)

Native N2 CAS 7727-37-9; renewable element resource from air. Keep actual intake separate from NO/NO2 formation and exhaust N2; no nitrogen-total indicator substitutes. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ilcd-2010`

###### Atmospheric argon intake (`m_argon_in`)

Actual independently quantified atmospheric Ar for physical balance only; do not duplicate aggregate air. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Resources from air / renewable element resource identity only; not purchased compressed gas or an emission used backwards. Actual ordinary argon CAS 7440-37-1 and measured air composition are required.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ilcd-2010`

###### Atmospheric water vapour intake (`m_humidity_in`)

Actual humidity intake at measured gas state; not the water-vapour emission UUID or supplier process water. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Atmospheric water vapour intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ilcd-2010`

###### Atmospheric carbon dioxide intake (`m_co2_in`)

Actual atmospheric CO2 intake/uptake with independently measured carbon/species evidence. Do not bind a fossil-only input or delayed-emission correction, assume carbonation or claim automatic credit. Distinguish ventilating throughflow from real retention and keep all gross legs. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Atmospheric carbon dioxide intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ilcd-2010`

###### Liquid rainwater entering actual stocks (`m_rain_water`)

Conditional actual rainwater entering exposed raw/WIP/FG or packaging, measured independently with real wet-stock/collection evidence. No default rainfall capture fraction. Keep actual influx even when retained in closing stock; do not count it again in purchased water or atmospheric humidity. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Liquid rainwater entering actual stocks
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-ilcd-2010`

#### Outputs

##### Waste flows

###### Concrete batching filter dust (`m_dust_cake`)

One actual stream with independently measured whole wet mass, composition, source, destination and treatment ownership. Separate old part/body, water and retained fluid in subledgers without counting them twice. Do not substitute an unrelated fishing-vessel oil, treated recycling input, machining scrap or other fixed-route waste UUID. Export or sale alone never removes ordinary manufacturing/treatment loads. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Concrete batching filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Concrete equipment cleaning wastewater (`m_washwater`)

One actual stream with independently measured whole wet mass, composition, source, destination and treatment ownership. Separate old part/body, water and retained fluid in subledgers without counting them twice. Do not substitute an unrelated fishing-vessel oil, treated recycling input, machining scrap or other fixed-route waste UUID. Export or sale alone never removes ordinary manufacturing/treatment loads. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Concrete equipment cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Spent mineral machinery lubricating oil (`m_used_oil`)

One actual stream with independently measured whole wet mass, composition, source, destination and treatment ownership. Separate old part/body, water and retained fluid in subledgers without counting them twice. Do not substitute an unrelated fishing-vessel oil, treated recycling input, machining scrap or other fixed-route waste UUID. Export or sale alone never removes ordinary manufacturing/treatment loads. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Spent mineral machinery lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Spent hydraulic fluid (`m_used_hydraulic`)

One actual stream with independently measured whole wet mass, composition, source, destination and treatment ownership. Separate old part/body, water and retained fluid in subledgers without counting them twice. Do not substitute an unrelated fishing-vessel oil, treated recycling input, machining scrap or other fixed-route waste UUID. Export or sale alone never removes ordinary manufacturing/treatment loads. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Spent hydraulic fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Removed steel mixer wear plate (`m_old_plate`)

One actual stream with independently measured whole wet mass, composition, source, destination and treatment ownership. Separate old part/body, water and retained fluid in subledgers without counting them twice. Do not substitute an unrelated fishing-vessel oil, treated recycling input, machining scrap or other fixed-route waste UUID. Export or sale alone never removes ordinary manufacturing/treatment loads. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Removed steel mixer wear plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Spent polyester dust-filter bag (`m_spent_filter`)

One actual stream with independently measured whole wet mass, composition, source, destination and treatment ownership. Separate old part/body, water and retained fluid in subledgers without counting them twice. Do not substitute an unrelated fishing-vessel oil, treated recycling input, machining scrap or other fixed-route waste UUID. Export or sale alone never removes ordinary manufacturing/treatment loads. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Spent polyester dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Spent oil-filter cartridge (`m_oil_filter`)

One actual stream with independently measured whole wet mass, composition, source, destination and treatment ownership. Separate old part/body, water and retained fluid in subledgers without counting them twice. Do not substitute an unrelated fishing-vessel oil, treated recycling input, machining scrap or other fixed-route waste UUID. Export or sale alone never removes ordinary manufacturing/treatment loads. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Spent oil-filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Retired complete concrete-block vibropress (`m_retired_vibropress`)

One actually retired whole asset, with wet/net body mass, old parts and contained fluids traced individually. Physical gross removal is not its remaining embodied burden. Real onward reuse as an independent product/function requires a separate qualified Product exchange and one justified burden handover, not an automatic credit. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Retired complete concrete-block vibropress
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-ilcd-2010`

###### Retired steel paver mould (`m_retired_mould`)

One actually retired whole asset, with wet/net body mass, old parts and contained fluids traced individually. Physical gross removal is not its remaining embodied burden. Real onward reuse as an independent product/function requires a separate qualified Product exchange and one justified burden handover, not an automatic credit. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Retired steel paver mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-ilcd-2010`

###### Retired steel production board (`m_retired_board`)

One actually retired whole asset, with wet/net body mass, old parts and contained fluids traced individually. Physical gross removal is not its remaining embodied burden. Real onward reuse as an independent product/function requires a separate qualified Product exchange and one justified burden handover, not an automatic credit. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Retired steel production board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-ilcd-2010`

##### Elementary flows

###### Fossil carbon dioxide to air (`m_co2`)

Native CAS 124-38-9; fossil CO2; emission to air unspecified, not long-term/indoor/high-stack. Use actual fossil combustion/speciation records; upstream cement calcination already owned by supplied cement is not emitted again at this plant. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Fossil carbon monoxide to air (`m_co`)

Native CAS 630-08-0; fossil CO; emission to air unspecified only. Require actual species/basis and fossil attribution; total carbon is not CO. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Nitrogen monoxide to air (`m_no`)

Native CAS 10102-43-9; NO emission to air unspecified. Unrelated synonym strings do not change the canonical NO identity; actual measured NO is required. NOx reported as NO2 equivalent cannot be copied here.  The actual selected species and phase above remain required. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Nitrogen dioxide to air (`m_no2`)

Native CAS 10102-44-0; NO2 emission to air unspecified. The synonym list includes tetroxide wording; adoption is restricted to the main NO2/CAS identity with actual speciation, not N2O4 or N2O, and not unspeciated NOx equivalents.  The actual selected species and phase above remain required. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Sulfur dioxide to air (`m_so2`)

Native CAS 7446-09-5; SO2 emission to air unspecified. Confirm actual SO2, not sulfur-oxides totals, sulfur content or water/soil release; no default fuel factor. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Water vapour to air (`m_water_vapour`)

Native CAS 7732-18-5; water-vapour emission to air unspecified. Determine actual vapour phase independently of bound water, liquid aerosols and internal condensate. Includes real evaporation and combustion water only in the owned scope.  The actual selected species and phase above remain required. The physical gross vapour outflow also retains independently measured atmospheric-humidity throughflow; distinguish that from newly evaporated/formed water and avoid duplicate total air. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Gaseous dioxygen to air (`m_oxygen_out`)

Actual exhaust O2 mass; do not use the inspected resource-from-air UUID for an emission. Keep excess air and independently measured gas composition, not oxygen inferred by fitting water and carbonation simultaneously. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Gaseous dinitrogen to air (`m_nitrogen_out`)

Actual exhaust N2 mass.  Retain gross N2 independently without re-adding total air. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Gaseous argon to air (`m_argon_out`)

Actual exhaust argon if present in measured air balance; not a missing gas fitted from a common residual. Its mass is not also counted in an aggregate air flow. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Airborne mineral particulate matter below 2.5 um (`m_pm_small`)

Actual disjoint aerodynamic size bin measured after controls; a physical particulate bin is not evidence of a specific chemical species. Keep filter-captured dust as a different waste and do not add PM10 as an overlapping total. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Airborne mineral particulate matter below 2.5 um
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Airborne mineral particulate matter from 2.5 to 10 um (`m_pm_mid`)

Actual disjoint size-bin mass and measured composition/media. No inference of silica, NOx, VOC or other species from this size mass. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Airborne mineral particulate matter from 2.5 to 10 um
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Airborne mineral particulate matter above 10 um (`m_pm_large`)

Actual disjoint coarse airborne mineral particulate mass; the queried PM10 flow cannot stand for >10 um. Retain actual dust-control efficiency evidence without a default factor. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Airborne mineral particulate matter above 10 um
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### Atmospheric-origin carbon dioxide throughflow to air (`m_ambient_co2_out`)

Actual atmospheric-origin CO2 leaving with ventilation/exhaust, distinct from newly formed fossil combustion CO2 and independently evidenced retention. Do not duplicate it in the fossil CO2 row, infer carbonation by a shared residual, or use a delayed-emission/credit flow. Keep actual gas state and receiving air compartment. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Atmospheric-origin carbon dioxide throughflow to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ilcd-2010`

###### Liquid water released to river (`m_liquid_water_to_river`)

Conditional actual direct liquid-water release to a verified river compartment, with independently measured water mass/state and each actual solute/species separately evidenced. Not an off-site wastewater-treatment handover or internal return. Do not double count whole wet wastewater and its carrier water at the same gate. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Liquid water released to river
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-ilcd-2010`

### Process: Original-cohort packing storage dispatch and returns (`cohort_services`)

Separate service observation H with original first-release area Q_H. Read the boundary, measurement, allocation and linked collection context for every row; service records retain original Q_H and H.

#### Inputs

##### Product flows

###### Wood transport pallet (`s_wood_pallet`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. One actual whole manufactured portable wooden load-handling pallet. Native finished-product family explicitly describes complete platforms and also includes box platforms/collars; this card selects an actual pallet, not loose sawn boards/slats or a collar. Qualify wood, construction, fasteners, treatment, tare, actual supplier and new/used/reuse ownership; no EURO size, item mass or lifetime is implied. Keep the six independent physical packaging directions and complete wet attached/empty/reusable stocks with one upstream owner.  This original input card is paid standalone or bundled P only; supplier-included I, external return received ER, gross shipment S and external return out EO have disjoint cards. The original waste card is W. These are actual unallocated gross physical directions, not new procurement on reuse or allocated service burden.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Low-density polyethylene protective hood (`s_ldpe_hood`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. One actual PE-LD foil/film hood, native finished foil with Mass reference, not PE resin or PET. Qualify film grade/thickness and shrink process if present. Record the six physical legs and all attached/empty stocks; heat for actual shrinking belongs to performed service. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  This original input card is paid standalone or bundled P only; supplier-included I, external return received ER, gross shipment S and external return out EO have disjoint cards. The original waste card is W. These are actual unallocated gross physical directions, not new procurement on reuse or allocated service burden. Preserve the native foil form: non-self-adhesive, non-cellular, not reinforced, laminated, supported or similarly combined with another material. An adhesive, foam, reinforced or multilayer-composite hood requires its own compatible identity; no film thickness, shrink temperature or supplied article mass is inferred.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Polypropylene strapping band (`s_pp_strap`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. One actual finished PP strapping band. Queried PP resin/chips/yarn and mixed packaging do not establish a finished strap and are not bound. Qualify polymer, dimensions and material mass and reconcile six legs and attached stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  This original input card is paid standalone or bundled P only; supplier-included I, external return received ER, gross shipment S and external return out EO have disjoint cards. The original waste card is W. These are actual unallocated gross physical directions, not new procurement on reuse or allocated service burden.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Kraft-paper interlayer sheet (`s_kraft_sheet`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. One actual kraft-paper separator sheet, not battery separator paper or kraft pulp. Include supplier-included ingress and one upstream owner, all six legs and attached WIP/FG/empty/reusable stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  This original input card is paid standalone or bundled P only; supplier-included I, external return received ER, gross shipment S and external return out EO have disjoint cards. The original waste card is W. These are actual unallocated gross physical directions, not new procurement on reuse or allocated service burden.

- Selected flow: Kraft-paper interlayer sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Original-cohort manufacturing grid electricity (`s_electricity`)

China user-side grid-average alternating current at 1–35 kV only. Use actual meters for mixing/forming, curing ventilation, handling, testing, dust control, cleanup and idle intervals. The native energy property does not mean a measured fuel heating value; convert kWh using 3.6 once and qualify actual supplier/time mix. This row contains only actual original-cohort service over H and uses Q_H, including stored FG; it is distinct from m_electricity. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Original-cohort gaseous natural gas (`s_gas`)

Only actual compressed/pipeline gaseous natural gas delivered to consumption, native methane CAS 74-82-8 and Volume reference. Verify composition and state; this is not LNG, bottled LPG or a universal gas energy factor. Conditional actual curing assistance or heat generation is included, with real emissions. This row contains only actual original-cohort service over H and uses Q_H, including stored FG; it is distinct from m_gas. The candidate fixes methane CAS 74-82-8 while an actual pipeline formulation/composition is not established. It remains unbound; retain a single concrete gaseous natural-gas exchange and Volume/m3, with actual state/composition rather than assuming chemical equivalence. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Original-cohort gaseous natural gas
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Original-cohort diesel for manufacturing mobile equipment (`s_diesel`)

One actual diesel fuel supply on native Mass basis. Grade, blend/biogenic content, density, lower heating value, refinery route, geography and provider are unspecified natively and must be collected; no pure-compound CAS or default LHV is inferred. Record actual loader/forklift transport and idle fuel only once. This row contains only actual original-cohort service over H and uses Q_H, including stored FG; it is distinct from m_diesel. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Original-cohort service water (`s_water`)

Actual treated process water for post-release handling/cleanup, including actually performed unauthorized, failed or rejected work. Keep original service cohort, fresh influx, full closing wet stock and actual discharge/retention; only duplicate flow terms cancel. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Manufacturer/specification permission and postwork tests govern authorization, continued conformity and acceptance/rejection/disposition only. Independently record every actually performed unauthorized, unapproved, failed or rejected operation and all its material/part/water/energy inputs, emissions, losses, waste and burdens on the proper original Q_c or Q_H/H, even when permission or tests fail. This neither authorizes that operation nor assumes a damaged hydraulic-cement body is restored; no new Q arises.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Configured diesel forklift (`s_forklift`)

One complete configured forklift with measured net mass and real service records. Keep physical full asset purchases/stock/removal and new/old repairs/fluid separately from assigned embodied service over H; no fixed life or whole forklift per unit. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Configured diesel forklift
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-ilcd-2010`; `marshalls-through-mix-2023`

###### Purchased hot-water carrier (`s_heat_carrier_water`)

Conditional actual external hot-water carrier, with full mass, temperature, water ownership and matched return. Deduplicate only an identical water inflow already inside an owned whole supply; do not cancel a real new influx simply because it remains in closing stock. Heat MJ and water kg describe different physical/accounting quantities. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. For the actual external carrier/return legs m_steam, m_heat_carrier_water, s_heat_carrier_water, m_condensate and m_return_water, A_e denotes the independently measured full gross physical V_e in that native row unit, not an attributed burden vector, net consumption, stock difference or economic share. Apply normalize_once to V_e once using Q_c for the manufacturing leg or its linked original Q_H for a service leg over observed H. Keep the absolute gross inlet and return separately, even when equal; measure actual temperature, pressure, phase/quality and enthalpy independently of delivered thermal MJ. One agreed water/heat provider owns the supply burden once; this physical carrier/return is not an additional whole purchase, export credit or assumed boiler/circuit. Only an identical OTHER same-side physical flow/event can deduplicate a leg; no stock, opposite flow or merely present card cancels it. A true return not yet listed requires its own qualified actual atomic card before use; no return or route is presumed.

- Selected flow: Purchased hot-water carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-ilcd-2010`

###### Supplier-included Wooden pallet (`s_wood_pallet_supplier_in`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. One actual whole manufactured portable wooden load-handling pallet. Native finished-product family explicitly describes complete platforms and also includes box platforms/collars; this card selects an actual pallet, not loose sawn boards/slats or a collar. Qualify wood, construction, fasteners, treatment, tare, actual supplier and new/used/reuse ownership; no EURO size, item mass or lifetime is implied. Keep the six independent physical packaging directions and complete wet attached/empty/reusable stocks with one upstream owner. Actual first non-purchased external I ingress with a separately received whole article; retain full wet mass and one upstream owner, even when supplier data already owns its burden. Not another paid standalone or bundled P.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External return received: Wooden pallet (`s_wood_pallet_external_return_in`)

One actual whole manufactured portable wooden load-handling pallet. Native finished-product family explicitly describes complete platforms and also includes box platforms/collars; this card selects an actual pallet, not loose sawn boards/slats or a collar. Qualify wood, construction, fasteners, treatment, tare, actual supplier and new/used/reuse ownership; no EURO size, item mass or lifetime is implied. Keep the six independent physical packaging directions and complete wet attached/empty/reusable stocks with one upstream owner. Actual ER received from an external party, with condition/moisture/new-used state and previous ownership. Internal reuse is not this external receipt. Use this Product only while the same physical article identity remains compatible; damaged/different material requires its own actual Waste identity.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### Supplier-included PE-LD film hood (`s_ldpe_hood_supplier_in`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. One actual PE-LD foil/film hood, native finished foil with Mass reference, not PE resin or PET. Qualify film grade/thickness and shrink process if present. Record the six physical legs and all attached/empty stocks; heat for actual shrinking belongs to performed service. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual first non-purchased external I ingress with a separately received whole article; retain full wet mass and one upstream owner, even when supplier data already owns its burden. Not another paid standalone or bundled P. Preserve the native foil form: non-self-adhesive, non-cellular, not reinforced, laminated, supported or similarly combined with another material. An adhesive, foam, reinforced or multilayer-composite hood requires its own compatible identity; no film thickness, shrink temperature or supplied article mass is inferred.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External return received: PE-LD film hood (`s_ldpe_hood_external_return_in`)

One actual PE-LD foil/film hood, native finished foil with Mass reference, not PE resin or PET. Qualify film grade/thickness and shrink process if present. Record the six physical legs and all attached/empty stocks; heat for actual shrinking belongs to performed service. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual ER received from an external party, with condition/moisture/new-used state and previous ownership. Internal reuse is not this external receipt. Use this Product only while the same physical article identity remains compatible; damaged/different material requires its own actual Waste identity. Preserve the native foil form: non-self-adhesive, non-cellular, not reinforced, laminated, supported or similarly combined with another material. An adhesive, foam, reinforced or multilayer-composite hood requires its own compatible identity; no film thickness, shrink temperature or supplied article mass is inferred.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### Supplier-included PP strapping band (`s_pp_strap_supplier_in`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. One actual finished PP strapping band. Queried PP resin/chips/yarn and mixed packaging do not establish a finished strap and are not bound. Qualify polymer, dimensions and material mass and reconcile six legs and attached stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual first non-purchased external I ingress with a separately received whole article; retain full wet mass and one upstream owner, even when supplier data already owns its burden. Not another paid standalone or bundled P.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External return received: PP strapping band (`s_pp_strap_external_return_in`)

One actual finished PP strapping band. Queried PP resin/chips/yarn and mixed packaging do not establish a finished strap and are not bound. Qualify polymer, dimensions and material mass and reconcile six legs and attached stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual ER received from an external party, with condition/moisture/new-used state and previous ownership. Internal reuse is not this external receipt. Use this Product only while the same physical article identity remains compatible; damaged/different material requires its own actual Waste identity.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### Supplier-included Kraft-paper interlayer (`s_kraft_sheet_supplier_in`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. One actual kraft-paper separator sheet, not battery separator paper or kraft pulp. Include first non-purchased external ingress and one upstream owner, all six legs and attached WIP/FG/empty/reusable stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual first non-purchased external I ingress with a separately received whole article; retain full wet mass and one upstream owner, even when supplier data already owns its burden. Not another paid standalone or bundled P.

- Selected flow: Kraft-paper interlayer sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External return received: Kraft-paper interlayer (`s_kraft_sheet_external_return_in`)

One actual kraft-paper separator sheet, not battery separator paper or kraft pulp. Include supplier-included ingress and one upstream owner, all six legs and attached WIP/FG/empty/reusable stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual ER received from an external party, with condition/moisture/new-used state and previous ownership. Internal reuse is not this external receipt. Use this Product only while the same physical article identity remains compatible; damaged/different material requires its own actual Waste identity.

- Selected flow: Kraft-paper interlayer sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### Internal first-release custody receipt (`s_first_release_received`)

Actual documented first-release-to-warehouse handover across the declared process gate, paired by unit/cohort to the manufacturing accepted_paver output. This is an internal custody ledger row, not an additional environmental exchange, external purchase, second Q or manufacturing burden. Cancel the paired internal transfer once on consolidation; retain independently observed wet-state changes and original Q_H/H. Native Area is the actual single-face net projection of the same compatible whole paver; wet mass is independently measured. Native brick is explicitly a concrete pavement brick/high-strength brick made from cement, sand/gravel and water, available as production mix at plant, with Area as its sole reference property; no fixed geometry, CAS, geography or item mass is declared. Its 37310 ceramic/siliceous-earth classification is an isolated taxonomy defect and is not followed: the full concrete material/use description governs this limited adoption. Restrict to the declared complete bare single-layer unreinforced vibropressed and actually cured paver after required finishing/tests. No wet ready-mix, clinker, natural stone, fired ceramic, resin-dominant stone, added face layer or installed pavement substitution. Q_c includes same-cohort closing FG once.  The native high-strength pavement-brick descriptor requires an actually compatible declared paving grade and manufacturer specification/test evidence; it provides no universal strength threshold or service life. Retain the declared single-face net projection convention rather than an installed-pavement area.

- Selected flow: brick `24c495b7-b9f4-4187-93ea-327a9e6f1037`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External intact paver return received (`s_intact_paver_return`)

Actual external return of an intact whole bare paver that still meets the same declared material/form/quality-state identity. Record its actual single-face projected area and wet mass independently and link original shipment/reversal evidence and original Q_H/H. Return does not create new manufacture, Q, purchase or credit. Damaged/nonconforming incoming material is the separate Waste return row, not forced into this high-strength Product. Native brick is explicitly a concrete pavement brick/high-strength brick made from cement, sand/gravel and water, available as production mix at plant, with Area as its sole reference property; no fixed geometry, CAS, geography or item mass is declared. Its 37310 ceramic/siliceous-earth classification is an isolated taxonomy defect and is not followed: the full concrete material/use description governs this limited adoption. Restrict to the declared complete bare single-layer unreinforced vibropressed and actually cured paver after required finishing/tests. No wet ready-mix, clinker, natural stone, fired ceramic, resin-dominant stone, added face layer or installed pavement substitution. Q_c includes same-cohort closing FG once.  The native high-strength pavement-brick descriptor requires an actually compatible declared paving grade and manufacturer specification/test evidence; it provides no universal strength threshold or service life. Retain the declared single-face net projection convention rather than an installed-pavement area.

- Selected flow: brick `24c495b7-b9f4-4187-93ea-327a9e6f1037`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`; `jrc-ilcd-2010`

##### Waste flows

###### External damaged paver return received (`s_damaged_paver_return`)

Conditional actual incoming broken/nonconforming previously released concrete paver and its physical fragments, as one whole wet Waste stream before actual inspection/treatment/disposition. Independently weigh moisture/phase/composition; trace original release, original shipment/reversal and observed return state. Do not assert intact high-strength Product conformity, repairability, a kg/m2 conversion, new Q, automatic manufacture reversal or credit. Real subsequent parts/material/water additions/removals, permission/tests/acceptance/disposition and repair custody remain explicit.

- Selected flow: Damaged returned cured concrete paver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`; `jrc-ilcd-2010`

##### Elementary flows

###### Atmospheric dioxygen intake (`s_oxygen_in`)

Native O2 CAS 7782-44-7; renewable element resource from air. Actual atmospheric intake only, not purchased compressed oxygen. Record gross O2 and do not add a whole-air mass to its component masses. This is actual intake during original-cohort services over H; keep its physical gross leg separately from output and use original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Atmospheric dinitrogen intake (`s_nitrogen_in`)

Native N2 CAS 7727-37-9; renewable element resource from air. Keep actual intake separate from NO/NO2 formation and exhaust N2; no nitrogen-total indicator substitutes. This is actual intake during original-cohort services over H; keep its physical gross leg separately from output and use original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Atmospheric argon intake (`s_argon_in`)

Actual independently quantified atmospheric Ar for physical balance only; do not duplicate aggregate air. This is actual intake during original-cohort services over H; keep its physical gross leg separately from output and use original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Resources from air / renewable element resource identity only; not purchased compressed gas or an emission used backwards. Actual ordinary argon CAS 7440-37-1 and measured air composition are required.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Atmospheric water vapour intake (`s_humidity_in`)

Actual humidity intake at measured gas state; not the water-vapour emission UUID or supplier process water. This is actual intake during original-cohort services over H; keep its physical gross leg separately from output and use original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Atmospheric water vapour intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Atmospheric carbon dioxide intake (`s_co2_in`)

Actual atmospheric CO2 intake/uptake with independently measured carbon/species evidence. Do not bind a fossil-only input or delayed-emission correction, assume carbonation or claim automatic credit. Distinguish ventilating throughflow from real retention and keep all gross legs. This is actual intake during original-cohort services over H; keep its physical gross leg separately from output and use original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Atmospheric carbon dioxide intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Liquid rainwater entering actual stocks (`s_rain_water`)

Conditional actual rainwater entering exposed raw/WIP/FG or packaging, measured independently with real wet-stock/collection evidence. No default rainfall capture fraction. Keep actual influx even when retained in closing stock; do not count it again in purchased water or atmospheric humidity. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Liquid rainwater entering actual stocks
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### With gross shipment: Wooden pallet (`s_wood_pallet_gross_shipped`)

One actual whole manufactured portable wooden load-handling pallet. Native finished-product family explicitly describes complete platforms and also includes box platforms/collars; this card selects an actual pallet, not loose sawn boards/slats or a collar. Qualify wood, construction, fasteners, treatment, tare, actual supplier and new/used/reuse ownership; no EURO size, item mass or lifetime is implied. Keep the six independent physical packaging directions and complete wet attached/empty/reusable stocks with one upstream owner. Actual S leaving attached to gross physical shipments. This custody output is not new packaging production or an upstream-burden credit; keep its actual full wet mass and stock history.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External return sent: Wooden pallet (`s_wood_pallet_external_return_out`)

One actual whole manufactured portable wooden load-handling pallet. Native finished-product family explicitly describes complete platforms and also includes box platforms/collars; this card selects an actual pallet, not loose sawn boards/slats or a collar. Qualify wood, construction, fasteners, treatment, tare, actual supplier and new/used/reuse ownership; no EURO size, item mass or lifetime is implied. Keep the six independent physical packaging directions and complete wet attached/empty/reusable stocks with one upstream owner. Actual EO sent to an external party independently of S. Keep recipient, original return/exchange records, condition and wet mass; do not merge with shipment or cancel against a stock.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### With gross shipment: PE-LD film hood (`s_ldpe_hood_gross_shipped`)

One actual PE-LD foil/film hood, native finished foil with Mass reference, not PE resin or PET. Qualify film grade/thickness and shrink process if present. Record the six physical legs and all attached/empty stocks; heat for actual shrinking belongs to performed service. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual S leaving attached to gross physical shipments. This custody output is not new packaging production or an upstream-burden credit; keep its actual full wet mass and stock history. Preserve the native foil form: non-self-adhesive, non-cellular, not reinforced, laminated, supported or similarly combined with another material. An adhesive, foam, reinforced or multilayer-composite hood requires its own compatible identity; no film thickness, shrink temperature or supplied article mass is inferred.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External return sent: PE-LD film hood (`s_ldpe_hood_external_return_out`)

One actual PE-LD foil/film hood, native finished foil with Mass reference, not PE resin or PET. Qualify film grade/thickness and shrink process if present. Record the six physical legs and all attached/empty stocks; heat for actual shrinking belongs to performed service. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual EO sent to an external party independently of S. Keep recipient, original return/exchange records, condition and wet mass; do not merge with shipment or cancel against a stock. Preserve the native foil form: non-self-adhesive, non-cellular, not reinforced, laminated, supported or similarly combined with another material. An adhesive, foam, reinforced or multilayer-composite hood requires its own compatible identity; no film thickness, shrink temperature or supplied article mass is inferred.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### With gross shipment: PP strapping band (`s_pp_strap_gross_shipped`)

One actual finished PP strapping band. Queried PP resin/chips/yarn and mixed packaging do not establish a finished strap and are not bound. Qualify polymer, dimensions and material mass and reconcile six legs and attached stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual S leaving attached to gross physical shipments. This custody output is not new packaging production or an upstream-burden credit; keep its actual full wet mass and stock history.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External return sent: PP strapping band (`s_pp_strap_external_return_out`)

One actual finished PP strapping band. Queried PP resin/chips/yarn and mixed packaging do not establish a finished strap and are not bound. Qualify polymer, dimensions and material mass and reconcile six legs and attached stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual EO sent to an external party independently of S. Keep recipient, original return/exchange records, condition and wet mass; do not merge with shipment or cancel against a stock.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### With gross shipment: Kraft-paper interlayer (`s_kraft_sheet_gross_shipped`)

One actual kraft-paper separator sheet, not battery separator paper or kraft pulp. Include supplier-included ingress and one upstream owner, all six legs and attached WIP/FG/empty/reusable stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual S leaving attached to gross physical shipments. This custody output is not new packaging production or an upstream-burden credit; keep its actual full wet mass and stock history.

- Selected flow: Kraft-paper interlayer sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### External return sent: Kraft-paper interlayer (`s_kraft_sheet_external_return_out`)

One actual kraft-paper separator sheet, not battery separator paper or kraft pulp. Include supplier-included ingress and one upstream owner, all six legs and attached WIP/FG/empty/reusable stocks. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. Actual EO sent to an external party independently of S. Keep recipient, original return/exchange records, condition and wet mass; do not merge with shipment or cancel against a stock.

- Selected flow: Kraft-paper interlayer sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### Gross paver dispatch custody (`s_gross_paver_dispatch`)

Actual gross dispatch of the same compatible whole bare paver over observed H, measured by actual projected area and independent wet mass, linked to original Q_H and original delivery records. This is custody only, not another first-release reference or manufacturing output. Preserve original manufacturing/performed-service history and do not normalize by net deliveries. Native brick is explicitly a concrete pavement brick/high-strength brick made from cement, sand/gravel and water, available as production mix at plant, with Area as its sole reference property; no fixed geometry, CAS, geography or item mass is declared. Its 37310 ceramic/siliceous-earth classification is an isolated taxonomy defect and is not followed: the full concrete material/use description governs this limited adoption. Restrict to the declared complete bare single-layer unreinforced vibropressed and actually cured paver after required finishing/tests. No wet ready-mix, clinker, natural stone, fired ceramic, resin-dominant stone, added face layer or installed pavement substitution. Q_c includes same-cohort closing FG once.  The native high-strength pavement-brick descriptor requires an actually compatible declared paving grade and manufacturer specification/test evidence; it provides no universal strength threshold or service life. Retain the declared single-face net projection convention rather than an installed-pavement area.

- Selected flow: brick `24c495b7-b9f4-4187-93ea-327a9e6f1037`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `masa-concrete-block-production`; `marshalls-through-mix-2023`; `jrc-ilcd-2010`


##### Waste flows

###### Discarded wood transport pallet (`s_waste_wood`)

Actual original-cohort service waste over H, with whole wet mass, composition, gross destination and treatment. Preserve original manufacturing history and any legitimate one-time handover independently; no automatic manufacturing reversal, recovered-product credit or new Q. Packaging waste closes its own six-leg material balance. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. A whole wet article receipt already includes its integral wood/fasteners/coating and contained water once. Separately added on-site components or water are independent real influxes only when disjoint from the whole receipt; retain an article/component bridge and paired internal handoff so consolidation never counts a whole assembled tare plus its same components twice. For a real single mixed packaging-waste outlet, independently measure each source-material W in a nonadditive raw origin ledger, reconcile sum(origin W) to the one measured mixed total, and use one qualified actual Waste exchange/treatment owner. Report the total OR its disjoint partition, never both additively. A material W card is an actual separate outlet only if physically separated; otherwise it is that origin subledger, not an invented separated outlet. Add/qualify a single mixed-outlet card only if that outlet actually occurs; no mixed stream is presumed.

- Selected flow: Discarded wood transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Discarded LDPE protective hood (`s_waste_ldpe`)

Actual original-cohort service waste over H, with whole wet mass, composition, gross destination and treatment. Preserve original manufacturing history and any legitimate one-time handover independently; no automatic manufacturing reversal, recovered-product credit or new Q. Packaging waste closes its own six-leg material balance. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. A whole wet article receipt already includes its integral wood/fasteners/coating and contained water once. Separately added on-site components or water are independent real influxes only when disjoint from the whole receipt; retain an article/component bridge and paired internal handoff so consolidation never counts a whole assembled tare plus its same components twice. For a real single mixed packaging-waste outlet, independently measure each source-material W in a nonadditive raw origin ledger, reconcile sum(origin W) to the one measured mixed total, and use one qualified actual Waste exchange/treatment owner. Report the total OR its disjoint partition, never both additively. A material W card is an actual separate outlet only if physically separated; otherwise it is that origin subledger, not an invented separated outlet. Add/qualify a single mixed-outlet card only if that outlet actually occurs; no mixed stream is presumed.

- Selected flow: Discarded LDPE protective hood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Discarded PP strapping band (`s_waste_pp`)

Actual original-cohort service waste over H, with whole wet mass, composition, gross destination and treatment. Preserve original manufacturing history and any legitimate one-time handover independently; no automatic manufacturing reversal, recovered-product credit or new Q. Packaging waste closes its own six-leg material balance. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. A whole wet article receipt already includes its integral wood/fasteners/coating and contained water once. Separately added on-site components or water are independent real influxes only when disjoint from the whole receipt; retain an article/component bridge and paired internal handoff so consolidation never counts a whole assembled tare plus its same components twice. For a real single mixed packaging-waste outlet, independently measure each source-material W in a nonadditive raw origin ledger, reconcile sum(origin W) to the one measured mixed total, and use one qualified actual Waste exchange/treatment owner. Report the total OR its disjoint partition, never both additively. A material W card is an actual separate outlet only if physically separated; otherwise it is that origin subledger, not an invented separated outlet. Add/qualify a single mixed-outlet card only if that outlet actually occurs; no mixed stream is presumed.

- Selected flow: Discarded PP strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Discarded kraft-paper interlayer sheet (`s_waste_kraft`)

Actual original-cohort service waste over H, with whole wet mass, composition, gross destination and treatment. Preserve original manufacturing history and any legitimate one-time handover independently; no automatic manufacturing reversal, recovered-product credit or new Q. Packaging waste closes its own six-leg material balance. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division. A whole wet article receipt already includes its integral wood/fasteners/coating and contained water once. Separately added on-site components or water are independent real influxes only when disjoint from the whole receipt; retain an article/component bridge and paired internal handoff so consolidation never counts a whole assembled tare plus its same components twice. For a real single mixed packaging-waste outlet, independently measure each source-material W in a nonadditive raw origin ledger, reconcile sum(origin W) to the one measured mixed total, and use one qualified actual Waste exchange/treatment owner. Report the total OR its disjoint partition, never both additively. A material W card is an actual separate outlet only if physically separated; otherwise it is that origin subledger, not an invented separated outlet. Add/qualify a single mixed-outlet card only if that outlet actually occurs; no mixed stream is presumed.

- Selected flow: Discarded kraft-paper interlayer sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Discarded previously released concrete paver (`s_waste_paver`)

Actual original-cohort service waste over H, with whole wet mass, composition, gross destination and treatment. Preserve original manufacturing history and any legitimate one-time handover independently; no automatic manufacturing reversal, recovered-product credit or new Q. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Discarded previously released concrete paver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### Original-cohort service wastewater (`s_waste_water`)

Actual original-cohort service waste over H, with whole wet mass, composition, gross destination and treatment. Preserve original manufacturing history and any legitimate one-time handover independently; no automatic manufacturing reversal, recovered-product credit or new Q. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Original-cohort service wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `marshalls-through-mix-2023`; `jrc-ilcd-2010`

##### Elementary flows

###### Fossil carbon dioxide to air (`s_co2`)

Native CAS 124-38-9; fossil CO2; emission to air unspecified, not long-term/indoor/high-stack. Use actual fossil combustion/speciation records; upstream cement calcination already owned by supplied cement is not emitted again at this plant. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Fossil carbon monoxide to air (`s_co`)

Native CAS 630-08-0; fossil CO; emission to air unspecified only. Require actual species/basis and fossil attribution; total carbon is not CO. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Nitrogen monoxide to air (`s_no`)

Native CAS 10102-43-9; NO emission to air unspecified. Unrelated synonym strings do not change the canonical NO identity; actual measured NO is required. NOx reported as NO2 equivalent cannot be copied here. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H.  The actual selected species and phase above remain required. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Nitrogen dioxide to air (`s_no2`)

Native CAS 10102-44-0; NO2 emission to air unspecified. The synonym list includes tetroxide wording; adoption is restricted to the main NO2/CAS identity with actual speciation, not N2O4 or N2O, and not unspeciated NOx equivalents. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H.  The actual selected species and phase above remain required. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Sulfur dioxide to air (`s_so2`)

Native CAS 7446-09-5; SO2 emission to air unspecified. Confirm actual SO2, not sulfur-oxides totals, sulfur content or water/soil release; no default fuel factor. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Water vapour to air (`s_water_vapour`)

Native CAS 7732-18-5; water-vapour emission to air unspecified. Determine actual vapour phase independently of bound water, liquid aerosols and internal condensate. Includes real evaporation and combustion water only in the owned scope. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H.  The actual selected species and phase above remain required. The physical gross vapour outflow also retains independently measured atmospheric-humidity throughflow; distinguish that from newly evaporated/formed water and avoid duplicate total air. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Gaseous dioxygen to air (`s_oxygen_out`)

Actual exhaust O2 mass; do not use the inspected resource-from-air UUID for an emission. Keep excess air and independently measured gas composition, not oxygen inferred by fitting water and carbonation simultaneously. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Gaseous dinitrogen to air (`s_nitrogen_out`)

Actual exhaust N2 mass.  Retain gross N2 independently without re-adding total air. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Gaseous argon to air (`s_argon_out`)

Actual exhaust argon if present in measured air balance; not a missing gas fitted from a common residual. Its mass is not also counted in an aggregate air flow. Only actual original-cohort service emissions over H, independent of manufacturing emissions; retain original Q_H. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.  Positive canonical ordinary molecule/CAS, actual phase and exact native category govern this conditional identity; noisy ion/isotope/HNO/N2O4 aliases do not redefine it. Verify actual species, receiving compartment and gross gas state/amount; no aggregate NOx, total nitrogen, isotope water or liquid/bound water substitutes. No factor or default air fraction is supplied. Native Elementary emission to air, unspecified, non-long-term only. Declare the actual unresolved air subcompartment; if the receiving subcompartment is known, select its compatible occurrence instead. Not indoor, high-atmosphere, long-term, water/soil or a purchased gas.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Atmospheric-origin carbon dioxide throughflow to air (`s_ambient_co2_out`)

Actual atmospheric-origin CO2 leaving with ventilation/exhaust, distinct from newly formed fossil combustion CO2 and independently evidenced retention. Do not duplicate it in the fossil CO2 row, infer carbonation by a shared residual, or use a delayed-emission/credit flow. Keep actual gas state and receiving air compartment. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Atmospheric-origin carbon dioxide throughflow to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `jrc-ilcd-2010`

###### Liquid water released to river (`s_liquid_water_to_river`)

Conditional actual direct liquid-water release to a verified river compartment, with independently measured water mass/state and each actual solute/species separately evidenced. Not an off-site wastewater-treatment handover or internal return. Do not double count whole wet wastewater and its carrier water at the same gate. The card quantity a_e is the one result defined by normalize_once in section 8, using this row’s unnormalized records; this card adds no division.

- Selected flow: Liquid water released to river
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_e
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 m2 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | attributional multifunctionality | Define the real co-functions and common gate. First assign exclusive flows and subdivide, including virtual subdivision with reviewable technical evidence. For each remaining exchange determine and quantify the physical causality that actually determines that exchange; do not apply mass, area, time or energy to all exchanges merely because it is available. Only the genuinely residual indivisible process uses contemporaneous market value of each function at the same gate and actual supplied state/amount, correcting downstream transport/conditioning/packing costs. Document alternatives and sensitivity. No arbitrary physical/economic choice, fixed share, substitution or automatic avoided-product credit. | `jrc-ilcd-2010` |
| allocation_loss | rejects samples and waste treatment | Normal manufacturing failures, tests, rejects and ordinary waste management remain loads of the paver cohort, even when shipped away or sold. A real separate function or other cohort needs a documented causal/subdivision/handover decision before exactly one burden vector can move; physical gross legs always remain intact. Internal recovered concrete, dust or water carries its inherited vector once and cannot be both a new purchase and an avoided virgin input. | `jrc-ilcd-2010` |
| allocation_assets | capital repair and original-cohort services | Keep each new/old part, in-place fluid and repair water physically visible. Assign embodied asset burdens using evidenced actual service and the justified capacity/usage convention; direct repairs belong to actual receiving operations/cohorts. Retain performed service on stored FG. Do not subtract closing FG from manufacturing or already performed service and do not deduct stocks twice. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Protocol raw_fields and methods collect unnormalized raw activity, not values already divided by Q. The aggregation cells specify the final supported basis; they reference the one normalize_once result and do not perform another division. Calculation Inputs use ASCII semicolon separators; all human text remains part of the complete rule context.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | cure_release | accepted_paver | measured | unique unit and lot IDs; drawing revision; shape-specific projected area; actual net bare wet mass; curing/finishing/test records; unique first-release time; Q_c; original Q_H; projection plane; net outline/void records; actual declared grade and manufacturer tests | Calibrated dimensions and independently checked drawing geometry; count each conforming unit once at the actual first release. Weigh complete bare same-design/configuration units with calibrated balances and representative moisture/age sampling. Trace any area/mass conversion to this measured population.  Declare the single projection plane and measured net outline, including interlocks and actual holes/cut-outs. Exclude installation joints/gaps, neighbouring units and summing both faces or all surfaces. L*W requires a verified solid rectangle without openings; no EPD size, thickness, density or mass/area coefficient is a measured conversion.  The native high-strength pavement-brick descriptor requires an actually compatible declared paving grade and manufacturer specification/test evidence; it provides no universal strength threshold or service life. Retain the declared single-face net projection convention rather than an installed-pavement area. | m2; kg | each lot and release event | full reporting period and inherited unreleased cohorts | declared paver line and actual quality gate | per 1 m2 reference flow | drawings; calibration; unique acceptance ledger; moisture tests; rejected sample disposition |
| cp_raw | mix_form | raw materials | measured | row_id; supplier and supply form; gross receipts; P/I ingress packaging owner; wet mass; moisture/assay; dosing; internal transfers; opening/closing raw/WIP; inherited exchange vector | Calibrated balances and actual supplier/delivery/dosing records per whole supply. Reconcile as-received water and composition independently. Sample retained WIP through actual curing state and keep its accumulated per-exchange vector; do not subtract newly released FG. | kg | each receipt batch and stocktake | opening history plus all reporting-period activity including zero-output intervals | supplier gate to mixing/forming and curing WIP | per 1 m2 reference flow | delivery records; balances; assay; wet-stock reconciliation; complete original units |
| cp_water | cure_release | each water phase and return | measured | water row_id; supply owner; meter readings or actual rate; integrated volume; temperature; pressure; density independently measured for this substance/state; wet stocks; carrier water; condensate/heat-water return; discharge; retained free and bound water; species evidence; gross V_e per actual carrier/return row and native unit; Q_c or original Q_H/H; actual T/P/phase/enthalpy; unique provider owner; same-side OTHER flow overlap links | Meter and sample each real water stream and phase. Independently determine total wet mass, free/absorbed water and hydration/structural phases with suitable laboratory methods and controls; separate carbonation evidence and gas measurements. Read integrated volume once; integrate actual rates once; no water-density assumption for another liquid. Keep real influx plus full closing wet mass. For the actual external carrier/return legs m_steam, m_heat_carrier_water, s_heat_carrier_water, m_condensate and m_return_water, A_e denotes the independently measured full gross physical V_e in that native row unit, not an attributed burden vector, net consumption, stock difference or economic share. Apply normalize_once to V_e once using Q_c for the manufacturing leg or its linked original Q_H for a service leg over observed H. Keep the absolute gross inlet and return separately, even when equal; measure actual temperature, pressure, phase/quality and enthalpy independently of delivered thermal MJ. One agreed water/heat provider owns the supply burden once; this physical carrier/return is not an additional whole purchase, export credit or assumed boiler/circuit. Only an identical OTHER same-side physical flow/event can deduplicate a leg; no stock, opposite flow or merely present card cancels it. A true return not yet listed requires its own qualified actual atomic card before use; no return or route is presumed. | kg; m3; MJ | continuous actual records and each sample/return | all curing residence across periods and observed service H | actual water system and external return gate; cohort tag required | per 1 m2 reference flow | calibration; independent density and phase tests; supplier energy/water agreement; uncertainty |
| cp_utilities | manufacturing_controls | each utility | measured | row_id; meter/batch; actual stage; original unit or rate; state; fuel composition and LHV; density; gas pressure/temperature; electricity voltage/supply geography; opening/closing unassigned charge; zero-output/start-stop/idle/cleanup loads; cohort ownership | Read calibrated submeter/counter and supply records. Convert native extensive units before assigning inventory; independently measure gas/liquid state and LHV when needed. Separate purchased whole heat providers and all real internal heat-carrier subledgers. Keep all actual load even when production is zero. | MJ; kg; m3 | meter interval each fuel receipt and operation | complete manufacturing observation plus inherited charges | declared site and actual manufacturing stages | per 1 m2 reference flow | meter calibration; supply invoice; independent state/LHV tests; allocation evidence |
| cp_species | manufacturing_controls | individual atmospheric or emitted species | measured | row_id; real chemical species/CAS and phase; compartment; fossil/biogenic origin where relevant; sampling state; integrated gas volume or rate/time; independently measured composition; separate gross air species; liquid water; PM disjoint sizes; C/H/O/Ca/N/S evidence; controls and blank tests | Use species-specific calibrated monitoring/laboratory methods and actual documented process balances with independent constraints. Distinguish direct measurement from calculation. Sampling must cover load changes and real controls; keep indicator totals separately and never invent species or two reaction extents from one residual. | kg; actual gas-state m3 | continuous or justified representative event sampling | manufacturing failures and service events identified separately | actual intake/release points and receiving compartments | per 1 m2 reference flow | raw instrument records; detection limits; independent water/carbonation phases; specimen identity; uncertainty |
| cp_waste | manufacturing_controls | each real waste stream | measured | row_id; stage/cohort; wet whole mass; solids/water and retained fluid subledger; opening/closing waste; samples/failures; internal reuse; gross external shipment/sale; treatment owner; any justified separate-function handover | Weigh actual separated streams and retained stock, sample composition and verify destination/treatment records. Avoid duplicating removed parts/fluid and refuse automatic burden removal for rejects or sold waste. Record actual postwork permission, tests, acceptance and disposition. A whole wet article receipt already includes its integral wood/fasteners/coating and contained water once. Separately added on-site components or water are independent real influxes only when disjoint from the whole receipt; retain an article/component bridge and paired internal handoff so consolidation never counts a whole assembled tare plus its same components twice. For a real single mixed packaging-waste outlet, independently measure each source-material W in a nonadditive raw origin ledger, reconcile sum(origin W) to the one measured mixed total, and use one qualified actual Waste exchange/treatment owner. Report the total OR its disjoint partition, never both additively. A material W card is an actual separate outlet only if physically separated; otherwise it is that origin subledger, not an invented separated outlet. Add/qualify a single mixed-outlet card only if that outlet actually occurs; no mixed stream is presumed. | kg | each disposal/rework/test event and stocktake | whole reporting period including all failures | actual generation and treatment gates | per 1 m2 reference flow | weigh tickets; laboratory tests; destination and treatment receipts; handover justification |
| cp_assets | manufacturing_controls | each asset part and contained fluid | measured | asset/part row_id; complete configured measured mass; opening/in-use/closing body and contained fluid; real new influx X_in; old removal X_out; repair water; actual service counters; supported capacity and burden vector; unused/unassigned charges; receiving operation/cohort | Use actual configuration drawings, calibrated weighing or compatible traceable manufacturer mass records and maintenance/service logs. Quantify justified embodied service from actual use and evidenced capacity; carry only unused/unassigned service, with no fixed lifetime. New repair material/water influx remains even when installed at closing; whole parts/fluids are not duplicated in subledgers. | kg; m3; service-counter original units | each acquisition repair retirement and service interval | full asset histories and current actual service | each declared asset and receiving cohort including FG services | per 1 m2 reference flow | configuration; calibrated mass; maintained service capacity evidence; stock and repair records |
| cp_packaging | cohort_services | each whole packaging article | measured | material/article row_id; upstream owner; opening/closing empty; opening/closing attached WIP/FG; opening/closing reusable; P; I; ER; S; EO; W; actual tare and condition; internal reuse; original Q_H and H; separate actual repair new/old parts and materials; absorbed/retained/released water phases; X_in/X_out; same-direction other-flow overlap links; complete independent wet stocks; each of the six atomic directional row IDs; integral article components/water; disjoint on-site additions; paired article/component bridge; independently measured origin W and single mixed total; total-or-partition flag; one treatment owner ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Count and weigh each actual article/material and attached stock with compatible moisture/condition. Verify supplier-included ingress and one upstream owner. Independently close the full six-leg equation; internal reuse cancels and real new ingress remains even when closing attached/empty stock rises. Retain gross physical quantities without burden-share scaling.  Independently weigh actual repair material and water additions/removals; X only covers matter absent from another same-direction flow term, never opening/closing stocks. Whole wet P/I articles enter once with one upstream owner; retained actual influx remains alongside complete wet closing mass. A whole wet article receipt already includes its integral wood/fasteners/coating and contained water once. Separately added on-site components or water are independent real influxes only when disjoint from the whole receipt; retain an article/component bridge and paired internal handoff so consolidation never counts a whole assembled tare plus its same components twice. For a real single mixed packaging-waste outlet, independently measure each source-material W in a nonadditive raw origin ledger, reconcile sum(origin W) to the one measured mixed total, and use one qualified actual Waste exchange/treatment owner. Report the total OR its disjoint partition, never both additively. A material W card is an actual separate outlet only if physically separated; otherwise it is that origin subledger, not an invented separated outlet. Add/qualify a single mixed-outlet card only if that outlet actually occurs; no mixed stream is presumed.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg; actual counts with measured tare | each receipt pack shipment return waste event and stocktake | opening histories and complete original-cohort horizon H | packaging storage WIP/FG and all external gates | per 1 m2 reference flow | tare measurements; all six-leg receipts; supplier ownership; attached stock records |
| cp_services | cohort_services | each original-cohort incremental service exchange | measured | row_id; original unit/cohort; original first-release area Q_H; observed H; opening/closing FG and inherited manufacturing/performed-service vectors; actual new service raw units; gross G; physical R; original delivery D_rev; new water/loss; postwork permission/tests/acceptance/disposition; actual added/removed new/old materials and parts; independent water phases; labelled repair-held FG or disjoint repair-WIP; actual maker/specification permission; postwork tests; acceptance/rejection and final destination; intact Product and damaged Waste returns separately; native projected areas and independent wet masses | Trace real stored, handled, packed, shipped and returned units to original release/delivery events. Meter and measure incremental work by actual service type and native extensive unit; retain performed service on stored FG. No reinspection or redelivery creates Q. Compare actual return mass/state with original delivery rather than assuming equality.  Actual cross-process first-release handover is paired to manufacturing output by unit/cohort and cancels on consolidation; it is custody only, not an extra environmental input or purchase. Measure gross dispatch and compatible intact returns independently in native Area and wet mass, and damaged returns independently as whole wet Waste mass; do not force a kg/m2 or original-delivery equality. Record real postwork additions/removals and repair custody once, with performed service of held FG retained over original Q_H/H. Existing packaging-W cards keep this service-event protocol and link their row-specific gross wet discarded-article record to cp_packaging W; measure actual physical disposal, destination and treatment separately from incremental service burden. Manufacturer/specification permission and postwork tests govern authorization, continued conformity and acceptance/rejection/disposition only. Independently record every actually performed unauthorized, unapproved, failed or rejected operation and all its material/part/water/energy inputs, emissions, losses, waste and burdens on the proper original Q_c or Q_H/H, even when permission or tests fail. This neither authorizes that operation nor assumes a damaged hydraulic-cement body is restored; no new Q arises. | MJ; kg; m3; m2 | each service interval and gross leg | observed H bound to original cohort records | actual original-cohort FG service gates | per 1 m2 reference flow | original release/delivery links; gross-leg records; submeter; revised moisture; permission/tests and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_area | accepted_paver | Q_c = sum(n_j * a_j); a_j = independently measured or traceable drawing-specific single-face projected area; n_j = unique first-released conforming units. Use L*W only for verified rectangles. Closing FG newly released in c is already in n_j.  Declare the single projection plane and measured net outline, including interlocks and actual holes/cut-outs. Exclude installation joints/gaps, neighbouring units and summing both faces or all surfaces. L*W requires a verified solid rectangle without openings; no EPD size, thickness, density or mass/area coefficient is a measured conversion. | n_j; a_j; cp_release | Q_c | `masa-concrete-block-production`; `marshalls-through-mix-2023` |
| raw_conversion | all inventory rows | Convert each original raw extensive quantity to that row unit before attribution. Integrate genuine rates once; do not multiply an integrated volume by time. Apply measured material-specific density/state and actual LHV only where needed. Electrical MJ = measured kWh * 3.6. Preserve original records and independent physical/species ledgers. | raw_records; state_measurements; cp_utilities; cp_water | converted_raw | `jrc-ilcd-2010` |
| manufacturing_vector | manufacturing rows | A_m,e = B_open,e + X_owned,e + T_in,e - B_close,e - T_other,e. Apply boundary_burden_stocks and allocation_hierarchy before normalization; B_close excludes released FG. Already stock-corrected consumption is not corrected again. Ordinary waste/sale is not T_other. | B_open; X_owned; T_in; B_close; T_other; cp_raw; cp_assets | A_m | `jrc-ilcd-2010` |
| service_vector | service rows | A_s,e is the actual incremental original-cohort service over observed H after exclusive assignment/subdivision and justified residual allocation. Retain already performed service of stored FG. Q_H is the original cohort first-release area, not gross shipments minus returns; maintain separate G/R/D_rev and inherited burden bridge. | raw_service; original_cohort; Q_H; H; cp_services | A_s | `jrc-ilcd-2010` |
| normalize_once | all inventory rows | a_e = A_e / Q_b; A_e is the reconciled assigned unnormalized extensive numerator in the row unit; Q_b = Q_c for manufacturing or the linked original Q_H for service. Perform this division once only when Q_b > 0. The reference product output is exactly 1 m2. For Q_b = 0 preserve A_e without a unit result. For the explicitly identified physical-custody rows, including each P/I/ER/S/EO/W packaging direction, actual FG gate movements and physical asset acquisitions/removals, A_e instead denotes that independently measured unallocated gross movement in the native row unit. Label this physical basis and divide only by the same original Q_c/Q_H; do not stock-correct or economically scale a gross leg. It is not an attributable LCI burden vector, new production/purchase, or automatic burden export/credit. Keep the absolute gross ledger and original manufacturing/service vectors separately; an asset-service row retains only its documented service burden, never a whole physical asset charge. For the actual external carrier/return legs m_steam, m_heat_carrier_water, s_heat_carrier_water, m_condensate and m_return_water, A_e denotes the independently measured full gross physical V_e in that native row unit, not an attributed burden vector, net consumption, stock difference or economic share. Apply normalize_once to V_e once using Q_c for the manufacturing leg or its linked original Q_H for a service leg over observed H. Keep the absolute gross inlet and return separately, even when equal; measure actual temperature, pressure, phase/quality and enthalpy independently of delivered thermal MJ. One agreed water/heat provider owns the supply burden once; this physical carrier/return is not an additional whole purchase, export credit or assumed boiler/circuit. Only an identical OTHER same-side physical flow/event can deduplicate a leg; no stock, opposite flow or merely present card cancels it. A true return not yet listed requires its own qualified actual atomic card before use; no return or route is presumed. | A_e; Q_b; Q_c; Q_H; cp_release | a_e | `jrc-ilcd-2010` |
| physical_gates | all physical records | M_open + sum(X_in) = M_close + sum(X_out) + delta_installed. Apply boundary_physical separately to manufacturing, FG and combined gates with actual wet states and unique new-Q mass; cancel only identical internal transfers. Keep gross legs intact regardless of burden allocation. Check relevant elemental balances independently of species and hydration/carbonation extents. | physical_raw; wet_stocks; installed_change; phase_species_tests | physical_balance | `jrc-ilcd-2010` |
| packaging_six_legs | each packaging material | O_empty + O_attached + O_reusable + P + I + ER + X_in = C_empty + C_attached + C_reusable + S + EO + W + X_out. Apply boundary_packaging per article/material; preserve both real ingress and full closing stock and cancel internal reuse only.  Independently weigh actual repair material and water additions/removals; X only covers matter absent from another same-direction flow term, never opening/closing stocks. Whole wet P/I articles enter once with one upstream owner; retained actual influx remains alongside complete wet closing mass.  Apply packaging_receipt_basis to distinguish each actual P/I/ER receipt. | O_empty; O_attached; O_reusable; P; I; ER; C_empty; C_attached; C_reusable; S; EO; W; cp_packaging; X_in; X_out; actual_repair_material_water; same_direction_overlap_evidence | package_balance | `marshalls-through-mix-2023`; `jrc-ilcd-2010` |
| measured_mass_area | actual mass-area conversion only | m_bare_per_m2 = measured_net_bare_mass / independently determined projected_area for the same actual drawing/configuration/moisture/age population. Never use an EPD example, secondary native factor or assumed density/item weight. No conversion is needed to establish the native Area reference itself. | measured_net_bare_mass; projected_area; cp_release | m_bare_per_m2 | `marshalls-through-mix-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each bound or unbound row | Retain every native material/form/route/grade/geography/media/type and property restriction in the complete card context. Supplier/grade/amount absence is a collection requirement rather than permission to use another family. No source query success establishes applicability. | full identity and provider compatibility evidence |
| dq_completeness | entire observed route | Keep failures, zero output, start/stop, idle, cleanup, retained curing WIP, full wet stocks and every real atomic flow including conditional additions. Distinguish absent from unmeasured and zero from unknown. | coverage ledger and full stock/service histories |
| dq_sources | method and site evidence | Retain original source context and contrary routes. Industrial evidence does not approve LCA allocation. Use actual site/period data with calibration, uncertainty, representativeness and separate measured/calculated/provisional status; transfer no source numerical recipe or credit. | sources plus original foreground records and uncertainty assessment |
| dq_translation | bilingual units and native displays | Keep the same first-release/area/service bases, qualifiers, process/row/rule/source IDs, formulas and actual native Chinese basenames. Alignment and engineering checks do not approve science or translation. | paired full-field review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product | Require confirmed whole concrete-paver Product/Area identity, traceable actual geometry, cure/finish/test/acceptance and all Required qualifiers. An unresolved or incompatible core final identity is a true hold: no usable/authored coverage claim may be inferred from a mechanical check. | `masa-concrete-block-production`; `cmha-pav-tec-010` |
| validate_units | each inventory and calculation | Check each row native extensive property, exact compatible unit/state and all actual conversions; execute normalize_once once only. Verify unique reference row accepted_paver and 1 m2, all raw collection links and explicit Q=0 behavior. A unit/schema pass does not solve an unknown method relationship. | `jrc-ilcd-2010` |
| validate_history | cohorts physical and burden vectors | Reconcile opening/closing curing WIP and every inherited exchange, first-release Q including closing FG once, actual original-cohort service/Q_H/H and gross G/R/D_rev. Do not subtract FG manufacturing or performed service. Independently close manufacturing/FG/combined wet mass, elements and the six packaging legs without fitting multiple unknowns or scaling physical legs. | `jrc-ilcd-2010` |
| validate_allocation | each attribution and burden transfer | Verify exclusive assignment/subdivision, exchange-specific determining physical causality and only genuine residual same-gate/state contemporary market value. Keep ordinary losses and waste treatment owned; require independent function/cohort plus justified once-only handover for any T_other. | `jrc-ilcd-2010` |
| validate_rework | actual post-release work | Require manufacturer/spec permission, actual added inputs/outputs/water/losses, postwork tests/acceptance/disposition and original-cohort trace. A broken paver is not assumed restored, and reinspection or delivery creates no new Q. | `cmha-pav-tec-010` |
| validate_gap_reporting | concrete foreground dataset | Report unresolved auxiliary UUIDs, incompatible providers, missing raw activity, sampling and uncertain conversions as explicit completeness limitations. Do not invent defaults, mark unknown as zero, call draft a covered leaf, or interpret engineering evidence as scientific/translation/mapping/publication approval. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified upstream concrete paving block input with the same terminal/geometry/moisture and observed service scope |
| allowed_use | Declared actual grade/site/period and explicitly matching whole bare paver; original-cohort service only over observed H |
| excluded_use | Installed pavement functional equivalence; all CPC37540 coverage; another material/route; unmeasured lifetime; automatic carbonation/recycling credit |
| required_metadata | All Required qualifiers; provider/native limits; process/source IDs; physical and burden boundaries; original units and calculations |
| required_quality_disclosure | Unknowns and unresolved non-core identities; calibration/representativeness/uncertainty; actual wet phases and histories; independent review state |
| update_trigger | Real binder/aggregate/formulation/geometry/route/gate/supply change; new evidence or phase test; provider replacement; scientific or translation review |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| masa-concrete-block-production | handbook | Masa, Concrete Block and Paver Production; https://www.masa-group.com/Dokumente/Prospekte/Masa_concrete-block-paver-production_EN_ma-0000026y.pdf | Complete equipment/route context; dosing; vibrocompression; curing; QA; board loops; optional face/surface counterexamples. Output/cycle/size examples are not defaults. |
| marshalls-through-mix-2023 | dataset | Marshalls, HUB-0305, Concrete Block Paving - Pigmented Semi Dry Mix, 24 February 2023; https://media.marshalls.co.uk/image/upload/v1678718418/EPD-Marshalls-Pigmented-Concrete-Block-Paving.pdf | Historical eight-site through-mix semi-dry manufacturing and market-state example; curing and packing distinctions. No transfer of recipe; mass/area; depth factors; service life; carbon uptake; negligible waste or mass/volume allocation. |
| cmha-pav-tec-010 | extension_guidance | Concrete Masonry and Hardscapes Association, Application Guide for Interlocking Concrete Pavements, PAV-TEC-010; https://www.cmha.org/resource/pav-tec-010/ | Independent material/pressure-vibration/paver function context; actual specification and test evidence required. Application dimensions and ratings are not defaults. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA - Detailed Guidance, first edition March 2010, sections 7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision; exchange-specific determining physical causality; residual actual-state process-gate market value and counterexamples. Foreground accounting rules are explicit operationalization, not claims of paver chemistry or an industry ratio. |
| epa-concrete-batching-2012 | official_guidance | US EPA, AP-42 section 11.12 Concrete Batching, June 2006 with January 2012 editorial corrections; https://www.epa.gov/sites/default/files/2020-10/documents/c11s12.pdf | Batching raw handling/dust-control context and distinction between ready-mix and concrete products. No emission factor or curing/chemistry/allocation claim adopted. |
