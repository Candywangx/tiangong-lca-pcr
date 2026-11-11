---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.uv-finished-jute-backed-linoleum-rolls
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# UV-finished jute-backed linoleum flooring rolls

## 1. Scope and Applicability

This manufacturing PCR covers complete compact linoleum flooring rolls with a traditional oxidized linseed-oil/rosin binder, wood flour (and separately declared cork flour only when actually used), evidenced mineral filler and individual pigments, woven jute backing and a factory waterborne UV-cured acrylate-hybrid protective finish. Start with actual separate purchased oils/rosin or a fully evidenced supplier-prepared cement, fillers, backing and whole coating preparations. Include binder oxidation and maturation at their real owner, mixing/granulation, calendering and backing consolidation, oxidative curing to the required mechanical state, surface preparation/coating/drying/UV cure, trim/cut/roll, actual tests and first quality release. Keep actual rework, failed and zero-output runs, start/stop, idle, cleanup, extraction, utilities and treatment. [forbo-marmoleum-2018; tarkett-linoleum-2018]

This is a transparent technology synthesis, not one SKU, recipe, plant or contemporary order. Forbo provides the selected finished jute-backed double-coated roll route and the separate linoleum body/intermediate/backing construction. Tarkett independently supports traditional oxidation/calendering/curing and identifies cork-containing, foam-backed and customer-finished exceptions. Those exceptions are not proof for this selected compact factory-finished endpoint. Exclude PVC/vinyl floors, bitumen linoleum/roofing or waterproof felt, loose cement, separate fabric, acoustic foam/composite click panels, furniture linoleum, installed floors and repacking bought finished rolls. A different construction needs explicit applicability review. No source recipe fraction, oxidation rate, time/temperature, dimensions, mass/area, density, yield, emissions, lifespan, carbon uptake or credit is adopted as a default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.uv-finished-jute-backed-linoleum-rolls |
| classification_refs | CPC 3.0 38930; narrower product and route boundary |
| covered_products | Complete compact woven-jute-backed linoleum flooring rolls with fully factory-cured waterborne UV finish |
| excluded_products | PVC/vinyl; bitumen/roofing/waterproof felt; unfinished binder; separate backing; foam/acoustic/click composites; furniture linoleum; installed floor; purchased-finished-roll repacking |
| representative_product | One specified compact roll grade with oxidized linseed-oil/rosin binder; actual declared tall oil and each flour/filler/pigment; woven jute and a double-layer whole waterborne UV formulation system; no fixed recipe or size |
| production_route | Receipt → actual-owner cement oxidation/maturation → mixing/granulation → calender/backing consolidation → curing → factory finish and cure → trim/cut/roll/test → first quality release; separately observed FG services |
| market_state | Complete conditioned factory-finished rolls at first quality release; detachable cores and transport packaging excluded from net product mass |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture specified resilient linoleum flooring for separately modelled installation |
| How much | 1 kg net newly first-quality-released complete linoleum |
| How well | Actual declared binder/body/backing/finish construction; conditioned dimensions and net mass; grade-specific thickness, indentation, dimensional stability, adhesion, cure and declared fire/slip/emission test evidence; no universal threshold or certification |
| How long or cycle | One unique first-release cohort and disclosed observed FG service interval; no assumed installed service life |
| reference_flow_link | released_roll |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Linoleum `83e269ce-00ce-4001-9743-9d51aa62a406` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | binder oil identity and supply/preoxidation state; rosin type and tall-oil composition where used; each whole supplier formulation and its upstream owner; separate wood/cork species and flour particle/moisture state; filler mineral/assay/route and each pigment; woven jute composition and sizing/finish; body and intermediate/backing construction; primer/topcoat SKU and water/solids/photoinitiator chemistry and complete cure; process ownership and oxidation/curing conditions; net conditioned mass and actual roll geometry and independently measured mass/area; grade acceptance and unique first-release Q; raw/WIP/nonWIP/FG physical stocks and each inherited exchange vector; original Qc and observed service H; site/period/geography and voltage/utility supply; actual gas/water/thermal states and return agreement; species/oxygen/water/biogenic-carbon observations and uncertainty; each packaging gross movement and external return; native family restrictions and supplying Process compatibility |


Declare every qualifier in metadata, process notes, reference comments or equivalent dataset fields. The native manufactured Linoleum family positively covers this complete finished article but supplies no recipe, performance or supplier inventory. Its complete identity restrictions also govern released_roll and fg_dispatch descriptions. A missing core terminal/route is an applicability hold; ordinary supplier/auxiliary gaps are separately disclosed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of unique new first-quality-release net masses after conditioning, including body, woven backing and retained cured finish, excluding detachable core/packages. Retain actual gross/tare calibration, conditioning and cohort records under cp_release. Closing FG already released belongs in Q; it is not added again as another production output. |
| geometry_bridge | reference product | Measured net mass and geometry | kg; m2; m3 | Measure net mass and finished usable width/length/profile on the same conditioned complete rolls or representative traceable samples. Derive mass/area from independent measurements; record actual thickness profile if a volume bridge is needed. Roll count or nominal catalogue thickness cannot supply kg. Never infer measured density or mass/area from a native secondary conversion. |
| raw_units | all physical exchanges | Actual native physical property | actual unit | Preserve original quantity units and independent state-specific conversion data before attribution. Convert measured kWh to MJ with 3.6 MJ/kWh only as an exact unit conversion. Integrate genuine rates once; an integrated gas/liquid volume is already a quantity. Density is measured for that substance at the stated composition, pressure and temperature, never borrowed from water. |
| one_division | all inventory rows | Attributed raw numerator and reference mass | native unit/kg | Protocols collect unnormalised raw quantities. Convert units, reconcile stock/inherited vectors and determine attribution first. Section8 contains the sole A/Q (or service A/Qc) division; every card and protocol aggregation references that same result, not another division. Q=0 keeps real burdens/flows and pending attribution, without a unit result. H is an observed interval and is not a second divisor. |
| wet_bridge | wet formulations and complete articles | Whole quantity OR exclusive constituents | kg | Use a whole wet supply/article mass OR a mutually exclusive constituent bridge on that same side of the same physical gate. Assay/active/solids/carrier water and coating layers are subaccounts, not additive purchases. X removes only an independently observed OTHER same-side duplicate already represented by another quantity there; real independent material/water/reaction interfaces remain explicit and are never fitted or subtracted as X. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual separately supplied linseed oil, rosin/tall oil, each flour/filler/pigment, woven backing and complete wet coatings; or traceable supplier-preoxidized complete cement with full upstream |
| starting_condition_role | Physical purchased product inputs before complete flooring manufacture; never bought finished flooring packaging only |
| product_classification_scope | CPC 3.0:38930, selected complete compact jute-backed factory-finished linoleum rolls |
| recursive_input_rule | Internal cement, granulate, sheet and clean trim handoffs cancel with measured inherited exchange vectors; external preoxidized cement/recovered linoleum carries one explicit supplier boundary and upstream owner |
| upstream_dataset_requirement | Complete state/route/geography-compatible extraction/refining/resin recovery, flour production, filler/pigment manufacture, woven-jute supply, coating preparation, utilities, packaging and treatment; identify actual owner and exclude duplicate unit operations |
| disclosure | Site and time, recipe/grade, supplier/onsite ownership, full route/operation coverage, gross physical and attributed-burden gates, stocks/cohorts, utilities and returns, packaging service interval, uncertainty and actual omissions |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_route | all manufacture | Include receipt and handling, actual-owner oxidative cement preparation and maturation, flour/mineral/pigment batching and mixing, granulation, jute calendering/consolidation, oxidative curing, complete surface coating/drying/UV cure, trim/cut/roll, conditioning/tests and first quality release. Count actual test/destructive samples and unsuccessful runs. Finished-roll repacking cannot replace these operations. | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| owner_once | supplier and onsite operations | For supplier-prepared cement/coating/backing/flour, require full upstream activity and state and one owner. Do not repeat supplier oxidation, ingredient manufacture or formulation already embedded in a purchased whole preparation; separately include all actual further onsite processing, utilities and losses. Supplier data missing is a disclosed dataset gap, not permission to omit burdens or invent a plant route. | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| first_gate | Q and FG service gates | Q ends at unique first quality release. Closing released FG is already in Q; shipping, authorization, retesting and customer returns never create a new Q. Retain actual packaging/storage/handling/dispatch and return/rework over observed H against original release Qc, including opening and closing FG. Carry historical burden vectors; only real incremental rework is added, and any reversal of an original delivery is explicitly linked. Do not annualize H or divide it again. Consolidated gates cancel the internal released-Q transfer. | forbo-marmoleum-2018; jrc-ilcd-2010 |
| stocks_and_events | all operations and exchanges | Retain every failed/start-stop/idle/cleanup/test/treatment event including Q=0. Separate unused raw stock and genuine nonWIP entities from actual opening/closing WIP and released FG. Transfer each physical stock with its own historical exchange vector; do not deduct stock twice from an already net numerator or substitute current recipe for old WIP. A release/acceptance flag cannot erase a physical event or burden. | forbo-marmoleum-2018; jrc-ilcd-2010 |
| atomic_extension | all actual materials and destinations | Cards are individually conditional atomic exchanges. Add each actual unlisted raw ingredient, full formulation, pigment, coating component purchased onsite, fuel, refrigerant, water supply, package, waste, molecule and destination as its own card before modelling. Demonstrated absence permits not_applicable, never a default zero. No other-material/energy/VOC aggregate may conceal real manufacture. Actual surface recipes and any catalysts/driers need supplier identity and separate procurement ownership. | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| physical_gates | manufacturing, FG and consolidated physical ledgers | Reconcile each gate independently with real gross quantities, disjoint constituent masses, inventory and external returns; cancel only matching internal transfers. Physical V/native-unit/Q or original Qc is independent of burden A, stock valuation and economic allocation. Supplier heat-water agreements define external Product steam/hot-water carriers and actual condensate/circuit returns with inlet/return enthalpy; do not assume an absent boiler, steam loop or water return. External waste retains one provider per actual consignment. | forbo-marmoleum-2018; tarkett-linoleum-2018; jrc-ilcd-2010 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_linoleum | Complete factory-finished jute-backed linoleum flooring rolls | required | Complete selected route; conditional cards apply only to actual operations and supplies | Integrated manufacture with separate stage/FG/support ledgers | 1 kg reference flow |


The integrated inventory retains the following stage and gate ledger. Internal cement/granulate/sheet/trim handoffs are measured and carry full inherited vectors; they cancel on consolidation, never create new purchases. Utility and molecular cards collect each actual operation separately under their row_id before summing attributable raw amounts.

| stage_id | stage_name | accounting_gate |
| --- | --- | --- |
| s_receipt | Receipt, storage and actual input preparation | Unused raw and genuine nonWIP separated from WIP |
| s_binder | Actual-owner oil/rosin/tall-oil oxidation and cement maturation | Supplier/onsite ownership and O2/water/species observations |
| s_compound | Separate flour/filler/pigment mixing and granulation | Real internal recovered trim and WIP vectors |
| s_calender | Calendering and woven-jute backing consolidation | Complete body/intermediate/backing construction |
| s_cure | Oxidative curing to actual mechanical requirements | Actual thermal/air route and independent chemistry |
| s_finish | Surface preparation, each coating layer, drying and UV cure | Whole wet formulation and retained coating mass |
| s_release | Trim/cut/roll, conditioning, tests and unique first release | Q includes closing first-released FG; failure/zero/test loads remain |
| s_service | Actual packaging, storage, handling, dispatch and returns | Original Qc; observed H; full FG and packaging ledgers |
| s_support | Real utilities, extraction, cleanup, rework and treatment | Actual owner; full event and species accounting |


### Process: Complete linoleum manufacture and observed services (`p_linoleum`)

All non-reference card amounts and protocol aggregations display the already normalized result of the sole normalize_once calculation in §8. Protocols collect only unnormalised raw data. Gross physical V and attributed burden A are separate alternative views; service rows use original cohort Qc over observed H. Conditional absent streams require evidence and not_applicable; no amount is implicitly zero. Add actual unlisted atomic flows rather than using a residual category.

#### Inputs

##### Product flows

###### Actual Complete linoleum cement oxidation vessel receipt and service (`asset_oxidizer`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete linoleum cement oxidation vessel
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum paste mixer receipt and service (`asset_mixer`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete linoleum paste mixer
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum granulating machine receipt and service (`asset_granulator`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete linoleum granulating machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete jute-backed linoleum calender receipt and service (`asset_calender`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete jute-backed linoleum calender
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum curing chamber receipt and service (`asset_curing_room`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete linoleum curing chamber
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum surface coating machine receipt and service (`asset_coater`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete linoleum surface coating machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete coating drying chamber receipt and service (`asset_dryer`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete coating drying chamber
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete UV curing unit receipt and service (`asset_uv_unit`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete UV curing unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum trimming and rewinding machine receipt and service (`asset_trimmer`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete linoleum trimming and rewinding machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum trim regrinding machine receipt and service (`asset_grinder`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete linoleum trim regrinding machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete process dust collector receipt and service (`asset_dust_collector`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete process dust collector
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete process gas fired heating unit receipt and service (`asset_burner`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete process gas fired heating unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete exhaust thermal oxidation unit receipt and service (`asset_thermal_control`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete exhaust thermal oxidation unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete extractive FTIR gas analyser receipt and service (`asset_ftir_analyser`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete extractive FTIR gas analyser
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method320`

###### Actual Complete permanent gas chromatographic analyser receipt and service (`asset_gc_analyser`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete permanent gas chromatographic analyser
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method3c`; `cgsb-argon-2017`; `agilent-argon-2022`

###### Actual Complete stack particulate sampling train receipt and service (`asset_stack_sampler`)

One actual complete configured system only at its real own foreground owner. cp_fleet separates full physical receipt/stock/return/retirement from attributed provider-equivalent service; retain full upstream, original own/provider history, configuration and supporting equipment. Supplier-owned systems remain in the real complete provider inventory, not a second purchase. No mass, lifetime, fuel choice or presence is assumed.

- Selected flow: Complete stack particulate sampling train
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method5`; `epa-method1`; `epa-method2`; `epa-method3`


###### Binder oil (`linseed`)

Liquid linseed/flaxseed oil received into storage at plant, before oxidation; whole purchased oil mass, not its fatty-acid assay. Native Product family specifies receiving/storage; no fixed grade, geography or conversion. Verify supplier oil state and full extraction/refining upstream; internal tank issues do not repurchase it.

- Selected flow: Linseed oil `f9a0f272-3f42-4051-9483-d3f8bcb9260f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Pine gum rosin (`rosin`)

Separately purchased solid pine gum rosin for the oxidative binder. Distinguish tall-oil rosin, esterified resins and solder flux. Supplier grade, softening condition, moisture and upstream distillation are required; no oxidation rate or recipe fraction is supplied.

- Selected flow: Pine gum rosin
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Tall-oil binder ingredient (`tall`)

Use only for an actual separately supplied tall-oil ingredient in the selected declared binder. Native Product identity is tall oil with Mass/kg; no grade, refining route or geographic restriction is specified. Record actual pulp-derived supply/composition and upstream owner; do not infer zero burden from an EPD waste label or replace it with mined crude oil.

- Selected flow: tall oil `923fd725-d53a-438c-af51-24064c0778f5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`

###### Purchased complete linoleum cement (`bought_cement`)

Conditional supply-location branch for the same traditional binder chemistry. Purchase the whole supplied preoxidized preparation once and require supplier oxidation, maturation, utilities, losses, oxygen/water/species and inherited upstream inventory. Suppress only the raw ingredients and operations actually owned by that supplier; retain any further onsite maturation. A manual does not prove that all oxidation is onsite.

- Selected flow: Preoxidized linseed-oil linoleum cement
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Wood flour filler (`wood`)

Actual separately purchased milled wood flour for the body; declare species, clean wood origin, particle size, moisture and supplier milling/drying. Chips, resin-coated particles, particleboard and hog fuel do not establish this identity. No fixed wood fraction or moisture is adopted.

- Selected flow: Unbound untreated softwood flour
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Cork flour filler (`cork`)

Conditional only where the actual selected compact roll recipe includes cork flour and compatible product evidence; record its own weighed supply, particle size, moisture and upstream milling. Do not combine wood/cork as a single exchange or silently transfer Tarkett composition to a Forbo SKU.

- Selected flow: Unbound natural cork flour
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `tarkett-linoleum-2018`

###### Ground mineral filler (`calcium`)

Actual ground calcium-carbonate filler, supplied as one declared powder; native Product is Calcium carbonate with no fixed grade/route/geography and Mass/kg. Confirm mineral assay, milling/particle specification, moisture, any treatment and supplier upstream. The retained generic classification does not establish pigment grade. Reject any binding with a conflicting CAS or incompatible mineral/form; do not count assay calcium carbonate a second time.

- Selected flow: Calcium carbonate `699cf1be-0ca2-4c34-af60-fd58a8e9d549`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### White pigment (`titanium`)

Conditional actual TiO2 pigment; declare crystal form, coating/treatment, particle specification, whole supply and production route. Ore rutile resources are not manufactured pigment. Do not infer a pigment recipe or transfer unverified native synonyms into a chemical identity.

- Selected flow: Industrial titanium dioxide pigment
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Iron-oxide colourant (`red`)

Conditional actual Fe2O3 red pigment; distinguish hydrated yellow oxides, magnetite, ore and adhesive emulsions. Whole pigment supply may have disclosed surface treatment; record every different actual pigment as its own added card.

- Selected flow: Ferric oxide red pigment
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Woven backing (`jute`)

One supplied woven jute backing cloth qualified within the native finished manufactured woven-jute/bast-fabric Product family; this dataset uses jute, excluding flax/hemp/ramie and nonwoven/knitted substitutes. Declare weave, yarn/sizing/finish, moisture, width and measured mass/area. Native Mass/kg specifies no site or grade; upstream includes fibre/yarn/weaving and actual finishing, owned once by supplier. This input is not the finished linoleum reference.

- Selected flow: Woven fabrics of jute and other textile bast fibres (except flax, true hemp and ramie) `97e92077-1caf-4f27-9d87-9b49e9d6a4e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Whole waterborne UV primer formulation (`primer`)

Actual whole supplied waterborne UV-curable acrylate-hybrid dispersion for this layer, within the native waterborne-UV coating Product family used for wood/flooring; Mass/kg, production mix at plant, no fixed SKU, geography or grade. Verify binder chemistry, photoinitiators, solids, carrier water and cure compatibility. Count the wet formulation once; solids/assay/water are non-additive subledgers. If layers use one SKU, both withdrawal records reconcile to one stock/procurement owner; do not buy its constituents again. Factory-mixed coating instead requires separate actual purchases and mixing energy/loss records. Solvent-free optical coating is not a substitute.

- Selected flow: Waterborne Coating (Water-based UV) `7f25f26b-e7ba-4abe-8fce-a34cfd5b7dac`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`

###### Whole waterborne UV topcoat formulation (`topcoat`)

Actual whole supplied waterborne UV-curable acrylate-hybrid dispersion for this layer, within the native waterborne-UV coating Product family used for wood/flooring; Mass/kg, production mix at plant, no fixed SKU, geography or grade. Verify binder chemistry, photoinitiators, solids, carrier water and cure compatibility. Count the wet formulation once; solids/assay/water are non-additive subledgers. If layers use one SKU, both withdrawal records reconcile to one stock/procurement owner; do not buy its constituents again. Factory-mixed coating instead requires separate actual purchases and mixing energy/loss records. Solvent-free optical coating is not a substitute.

- Selected flow: Waterborne Coating (Water-based UV) `7f25f26b-e7ba-4abe-8fce-a34cfd5b7dac`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`

###### Externally recovered linoleum granulate (`recovered`)

Conditional physical external input with contamination, composition, previous coating, moisture, waste/product status and supplier treatment known. Internal trimmings/reject grinding are matched internal handoffs, not this purchase. Require explicit upstream ownership and recycling method; no free input or avoided-product credit.

- Selected flow: Recovered clean linoleum granulate
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Purchased alternating-current electricity (`electricity`)

Record voltage, geography, provider and actual meter-stage coverage for oxidation, mixing, calendering, curing, thermal/UV finishing, cutting, testing, grinding, extraction and services. Supply identity must match the actual voltage and geography; electricity for a different delivery network cannot represent an unspecified supply. Self-generated electricity needs its own complete generation inventory; do not duplicate its fuel and purchased output.

- Selected flow: Metered alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Natural-gas fuel (`gas`)

Conditional actual direct fuel for heating/curing or an owned utility conversion. Record physical gas, composition, measured state-specific volume/mass and LHV, burner/heat-transfer route and complete combustion species. A boiler-only fuel identity cannot represent direct oven fuel; bind only an actual matching burner/supply route and state. Do not invent steam generation from a curing-room description.

- Selected flow: Supplied gaseous natural gas
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Externally purchased heat (`heat`)

Conditional external heat measured at the actual delivered/returned thermal states; specify metering, enthalpy and supplier coverage of carrier water and energy. An owned burner instead uses its actual fuel and emissions, not a second purchased-heat burden. Internal heat recovery cancels internally without an automatic credit.

- Selected flow: Purchased process heat
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Supplied tap water (`water`)

Actual liquid tap-water Product input for cleaning, cooling makeup or coating dilution only if separately added. Native Water, tap uses Mass/kg and has no grade, route or geographic restriction; an isolated historical other-goods classification is preserved rather than used as identity proof. Require actual quality/provider and independent same-state density for a metered volume conversion. Bought coating carrier water is already in its whole wet formulation.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Purchased steam-water carrier (`steam`)

Only an actual external steam supply: carrier mass separate from separately metered heat with a single supplier coverage agreement; declare pressure, temperature, dryness and enthalpy.

- Selected flow: Purchased water steam
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Purchased hot-water carrier (`hotwater`)

Only an actual external hot-water heat-transfer supply; record mass and inlet/return temperature and pressure with supplier water/energy agreement. Never copy a steam loop into a hot-water circuit.

- Selected flow: Purchased hot liquid water
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Machine lubricant (`lubricant`)

Conditional whole supplied lubricant; actual grade, use, leakage and disposal tracked independently of binder oil.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Cleaning chemical (`cleaner`)

Conditional actual separately purchased sodium carbonate. Whole proprietary cleaner would replace this with its own preparation, not be added as a second purchase.

- Selected flow: Sodium carbonate cleaning powder
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Cleaning wipe (`wipe`)

Conditional actual cloth used in cleaning or coating application; record reuse, contamination and eventual discard.

- Selected flow: Unimpregnated cotton wiping cloth
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Dust extraction filter (`filter`)

Conditional one specified cartridge; record replacements and actual retained powder separately, not an entire extraction system as one material.

- Selected flow: Polyester dust-filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Paperboard roll core (`pack_core`)

Conditional actual one packaging article/material, weighed separately with supplier/composition and tare. Keep empty, WIP-attached, FG-attached and reusable opening/closing stocks, external returns and every gross physical shipment; actual manufacture upstream once. Internal reuse is neither repurchase nor product Q.

- Selected flow: Paperboard winding core
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Polyethylene wrapping film (`pack_film`)

Conditional actual one packaging article/material, weighed separately with supplier/composition and tare. Keep empty, WIP-attached, FG-attached and reusable opening/closing stocks, external returns and every gross physical shipment; actual manufacture upstream once. Internal reuse is neither repurchase nor product Q.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Kraft-paper wrapper (`pack_sleeve`)

Conditional actual one packaging article/material, weighed separately with supplier/composition and tare. Keep empty, WIP-attached, FG-attached and reusable opening/closing stocks, external returns and every gross physical shipment; actual manufacture upstream once. Internal reuse is neither repurchase nor product Q.

- Selected flow: Kraft-paper roll wrapper
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Polypropylene strap (`pack_strap`)

Conditional actual one packaging article/material, weighed separately with supplier/composition and tare. Keep empty, WIP-attached, FG-attached and reusable opening/closing stocks, external returns and every gross physical shipment; actual manufacture upstream once. Internal reuse is neither repurchase nor product Q.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Wood pallet (`pack_pallet`)

Conditional actual one packaging article/material, weighed separately with supplier/composition and tare. Keep empty, WIP-attached, FG-attached and reusable opening/closing stocks, external returns and every gross physical shipment; actual manufacture upstream once. Internal reuse is neither repurchase nor product Q.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

##### Elementary flows

###### Oxygen in atmospheric air (`oxygen_in`)

Gross actual O2 entering oxidation/curing/combustion, distinguished by operation; use independently measured air flow and composition. Separate oxygen consumption from unreacted O2 exhaust. Purchased oxygen requires a Product supply and its own upstream; never count both whole air and constituent mass.

- Selected flow: Oxygen in atmospheric air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_gc`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method3c`

###### Nitrogen in atmospheric air (`nitrogen_in`)

Actual N2 inlet for the same gross air balance; not total nitrogen excluding N2. Retain bypass/pass-through separately from chemically formed NO/NO2.

- Selected flow: Nitrogen in atmospheric air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_gc`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method3c`

###### Water vapour in atmospheric air (`humidity_in`)

Independently measured inlet humidity, not an invented repair input for water imbalance. Preserve physical phase and actual air state.

- Selected flow: Water vapour in atmospheric air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Argon in atmospheric air (`argon_in`)

Actual measured argon inlet in a gross constituent-air ledger; a full-air measurement and its constituent bridge are mutually exclusive additive views.

- Selected flow: Argon in atmospheric air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_gc`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `agilent-argon-2022`

###### Carbon dioxide in inlet air (`ambient_co2_in`)

Physical inlet CO2 concentration/flow for background subtraction and independent carbon closure; no photosynthetic uptake or carbon credit.

- Selected flow: Carbon dioxide in inlet air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

#### Outputs

##### Product flows

###### Actual Complete linoleum cement oxidation vessel external return (`asset_oxidizer_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete linoleum cement oxidation vessel
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum paste mixer external return (`asset_mixer_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete linoleum paste mixer
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum granulating machine external return (`asset_granulator_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete linoleum granulating machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete jute-backed linoleum calender external return (`asset_calender_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete jute-backed linoleum calender
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum curing chamber external return (`asset_curing_room_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete linoleum curing chamber
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum surface coating machine external return (`asset_coater_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete linoleum surface coating machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete coating drying chamber external return (`asset_dryer_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete coating drying chamber
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete UV curing unit external return (`asset_uv_unit_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete UV curing unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum trimming and rewinding machine external return (`asset_trimmer_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete linoleum trimming and rewinding machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete linoleum trim regrinding machine external return (`asset_grinder_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete linoleum trim regrinding machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete process dust collector external return (`asset_dust_collector_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete process dust collector
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete process gas fired heating unit external return (`asset_burner_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete process gas fired heating unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete exhaust thermal oxidation unit external return (`asset_thermal_control_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete exhaust thermal oxidation unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual Complete extractive FTIR gas analyser external return (`asset_ftir_analyser_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete extractive FTIR gas analyser
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method320`

###### Actual Complete permanent gas chromatographic analyser external return (`asset_gc_analyser_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete permanent gas chromatographic analyser
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method3c`; `cgsb-argon-2017`; `agilent-argon-2022`

###### Actual Complete stack particulate sampling train external return (`asset_stack_sampler_return`)

Actual entire external return of the same configuration, with full mass/state and original vector; a service share never shrinks this physical transfer or creates new manufacture/credit.

- Selected flow: Complete stack particulate sampling train
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fleet`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method5`; `epa-method1`; `epa-method2`; `epa-method3`


###### New first-released complete flooring (`released_roll`)

One complete manufactured linoleum roll article within the native Linoleum Product family, production mix at plant and finished manufactured state, Mass/kg. Positively narrowed here to oxidized linseed-oil/rosin binder with declared tall oil where used, wood/cork flour as declared, mineral/pigment specification, woven jute backing and fully cured factory waterborne UV finish; actual roll conditioning and acceptance required. Exclude PVC, bitumen roofing felt, loose binder, separate backing and installed buildings. Native family fixes no density, dimensions, mass/area, coating SKU, geography, lifespan or supplier dataset. Q counts unique new first-release net mass once, including closing FG already released, excluding cores/packages and duplicate retests/dispatch.

- Selected flow: Linoleum `83e269ce-00ce-4001-9743-9d51aa62a406`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### External condensate return (`condensate`)

Actual external Product return to steam supplier with mass, contamination, temperature, pressure and enthalpy; supplier water/energy treatment agreement required. It is neither unobserved wastewater nor an automatic co-product credit.

- Selected flow: Returned liquid water condensate
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### External hot-water circuit return (`cooling_return`)

Actual external heat-transfer water return, measured at its own thermal state. Internal cooling recirculation cancels; bleed/makeup and disposal remain separately measured.

- Selected flow: Returned heat-transfer liquid water
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Gross dispatched complete flooring (`fg_dispatch`)

One complete finished manufactured Linoleum Product family article; production mix at plant, Mass/kg, no fixed grade, geography, dimensions, density, mass/area, lifespan or supplying Process. This role is restricted to a conditioned complete compact roll with traditional oxidized linseed-oil/rosin binder and declared tall oil where used, actual wood/cork flour and individual mineral/pigment specifications, woven jute backing and fully cured factory waterborne UV acrylate-hybrid finish. Actual grade/state/site/acceptance and upstream compatibility are required; exclude PVC, bitumen/roofing felt, separate cement/backing and installed building systems. Gross physical dispatch V and external returns are recorded against original cohort Qc over observed service interval H, including opening/closing FG; dispatch is not new production Q and no allocation share reduces V. Reinspection does not issue a new production reference.

- Selected flow: Linoleum `83e269ce-00ce-4001-9743-9d51aa62a406`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Gross outgoing Paperboard roll core (`shipped_core`)

Actual packaging physically leaving attached to gross shipped rolls, including each repeat physical shipment; keep returns in their own ledger and do not subtract them from gross output.

- Selected flow: Paperboard winding core
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Externally returned Paperboard roll core (`returned_core`)

Actual empty reusable/supplier packaging returned externally, separately from attached gross shipment and waste. No automatic co-product value/credit; internal circulation cancels.

- Selected flow: Paperboard winding core
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Gross outgoing Polyethylene wrapping film (`shipped_film`)

Actual packaging physically leaving attached to gross shipped rolls, including each repeat physical shipment; keep returns in their own ledger and do not subtract them from gross output.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Externally returned Polyethylene wrapping film (`returned_film`)

Actual empty reusable/supplier packaging returned externally, separately from attached gross shipment and waste. No automatic co-product value/credit; internal circulation cancels.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Gross outgoing Kraft-paper wrapper (`shipped_sleeve`)

Actual packaging physically leaving attached to gross shipped rolls, including each repeat physical shipment; keep returns in their own ledger and do not subtract them from gross output.

- Selected flow: Kraft-paper roll wrapper
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Externally returned Kraft-paper wrapper (`returned_sleeve`)

Actual empty reusable/supplier packaging returned externally, separately from attached gross shipment and waste. No automatic co-product value/credit; internal circulation cancels.

- Selected flow: Kraft-paper roll wrapper
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Gross outgoing Polypropylene strap (`shipped_strap`)

Actual packaging physically leaving attached to gross shipped rolls, including each repeat physical shipment; keep returns in their own ledger and do not subtract them from gross output.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Externally returned Polypropylene strap (`returned_strap`)

Actual empty reusable/supplier packaging returned externally, separately from attached gross shipment and waste. No automatic co-product value/credit; internal circulation cancels.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Gross outgoing Wood pallet (`shipped_pallet`)

Actual packaging physically leaving attached to gross shipped rolls, including each repeat physical shipment; keep returns in their own ledger and do not subtract them from gross output.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Externally returned Wood pallet (`returned_pallet`)

Actual empty reusable/supplier packaging returned externally, separately from attached gross shipment and waste. No automatic co-product value/credit; internal circulation cancels.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

##### Waste flows

###### Actual retired Complete linoleum cement oxidation vessel (`asset_oxidizer_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete linoleum cement oxidation vessel
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete linoleum paste mixer (`asset_mixer_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete linoleum paste mixer
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete linoleum granulating machine (`asset_granulator_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete linoleum granulating machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete jute-backed linoleum calender (`asset_calender_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete jute-backed linoleum calender
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete linoleum curing chamber (`asset_curing_room_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete linoleum curing chamber
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete linoleum surface coating machine (`asset_coater_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete linoleum surface coating machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete coating drying chamber (`asset_dryer_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete coating drying chamber
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete UV curing unit (`asset_uv_unit_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete UV curing unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete linoleum trimming and rewinding machine (`asset_trimmer_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete linoleum trimming and rewinding machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete linoleum trim regrinding machine (`asset_grinder_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete linoleum trim regrinding machine
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete process dust collector (`asset_dust_collector_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete process dust collector
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete process gas fired heating unit (`asset_burner_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete process gas fired heating unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete exhaust thermal oxidation unit (`asset_thermal_control_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete exhaust thermal oxidation unit
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`

###### Actual retired Complete extractive FTIR gas analyser (`asset_ftir_analyser_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete extractive FTIR gas analyser
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method320`

###### Actual retired Complete permanent gas chromatographic analyser (`asset_gc_analyser_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete permanent gas chromatographic analyser
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method3c`; `cgsb-argon-2017`; `agilent-argon-2022`

###### Actual retired Complete stack particulate sampling train (`asset_stack_sampler_waste`)

One actual retired whole system consignment including retained components/contamination; full wet Qt stays separate from all cohort A/service burdens. Physically separated parts have their own real consignment, not duplicate whole waste.

- Selected flow: Discarded Complete stack particulate sampling train
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `jrc-ilcd-2010`; `epa-method5`; `epa-method1`; `epa-method2`; `epa-method3`


###### Discarded manufactured linoleum (`floor_waste`)

One actually commingled linoleum waste consignment, with provider and treatment status; internal reground trim is excluded from external waste. Use measured total W OR non-additive originW subaccounts summing to W; never send both totals and origins to the provider. Split physically separate wastes.

- Selected flow: Discarded linoleum trim and rejected sheet
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Captured wood flour (`dust_waste`)

Conditional separate captured untreated wood flour before binder mixing. Binder-coated mixed dust is a different waste requiring its own card; do not double-count captured material as atmospheric emission.

- Selected flow: Captured wood-flour dust
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Spent coating (`wet_coat_waste`)

Whole actual wet coating waste, supplier formula and water/solids subledger retained. Do not add dry solids and carrier water to its total again.

- Selected flow: Discarded waterborne UV coating dispersion
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Cleaning wastewater (`washwater`)

Whole actual wastewater to one external provider, including measured entrainment and cleaning chemistry; OR use mutually exclusive component accounting with independent analyses. COD is an indicator, not molecular carbon or a named dissolved compound. Onsite treatment requires actual additional reagents, energy, sludge and species.

- Selected flow: Linoleum-line cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Treatment sludge (`sludge`)

Conditional actual separated sludge from owned treatment, with wet mass and independent solids/moisture. If wastewater leaves untreated, supplier treatment sludge stays in that supplier model and is not duplicated here.

- Selected flow: Linoleum-line wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Spent lubricant (`spent_oil`)

Actual separate maintenance oil waste; record leakage destinations independently.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Contaminated wipe (`spent_wipe`)

Actual discarded cloth with coating/cleaner/water contamination measured as whole article OR exclusive constituents, not both.

- Selected flow: Coating-contaminated cotton wiping cloth
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Spent filter (`spent_filter`)

Whole actual discarded cartridge with retained dust; do not also dispose that same captured mass as separate dust waste.

- Selected flow: Dust-loaded polyester filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Paperboard roll core waste (`discard_core`)

Actual discarded separate packaging material with treatment provider and contamination; packaging shipped out or externally returned is not also this waste. Non-destructive internal reuse cancels internally.

- Selected flow: Paperboard winding core waste
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Polyethylene wrapping film waste (`discard_film`)

Actual discarded separate packaging material with treatment provider and contamination; packaging shipped out or externally returned is not also this waste. Non-destructive internal reuse cancels internally.

- Selected flow: Polyethylene packaging film waste
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Kraft-paper wrapper waste (`discard_sleeve`)

Actual discarded separate packaging material with treatment provider and contamination; packaging shipped out or externally returned is not also this waste. Non-destructive internal reuse cancels internally.

- Selected flow: Kraft-paper roll wrapper waste
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Polypropylene strap waste (`discard_strap`)

Actual discarded separate packaging material with treatment provider and contamination; packaging shipped out or externally returned is not also this waste. Non-destructive internal reuse cancels internally.

- Selected flow: Polypropylene strapping band waste
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

###### Wood pallet waste (`discard_pallet`)

Actual discarded separate packaging material with treatment provider and contamination; packaging shipped out or externally returned is not also this waste. Non-destructive internal reuse cancels internally.

- Selected flow: Wooden transport pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_qt`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`

##### Elementary flows

###### Unreacted oxygen to air (`oxygen_out`)

Measured unreacted O2 exhaust/by-pass matched to inlet; oxygen incorporation and oxidative losses are independently evidenced, not inferred from net mass gain alone.

- Selected flow: Unreacted oxygen to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_gc`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method3c`

###### Dinitrogen to air (`nitrogen_out`)

Actual N2 pass-through and any independently evidenced generation/consumption, separate from NO, NO2 and nitrogen indicators.

- Selected flow: Dinitrogen to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_gc`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method3c`

###### Water vapour to air (`vapour`)

Gross measured vapour outlet minus separately retained inlet in a disclosed exchange convention; track incoming natural humidity, coating carrier, wood/jute moisture, free/phase/structural/reaction water independently. Do not fit O2 uptake and reaction water with one residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Hexanal to air (`hexanal`)

Conditional actual GC-identified C6H12O aldehyde measured for oxidation, curing, finishing or treatment; retain method, blank, detection limit, flux/flow and actual medium. No linseed-oil-paint or chamber-test result is a factory emission factor.

- Selected flow: Hexanal to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Propanal to air (`propanal`)

Conditional independently identified/measured C3H6O; do not infer from hexanal or total VOC.

- Selected flow: Propanal to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Nonanal to air (`nonanal`)

Conditional independently identified/measured C9H18O; no allocation of a VOC total to assumed species. Add every other actual molecule separately.

- Selected flow: Nonanal to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Fossil carbon dioxide to air (`fossil_co2`)

Actual fossil-source CO2 from owned fuel conversion or treatment; source-resolved independently from biogenic and mineral carbon. No fixed gas emission factor is adopted.

- Selected flow: Fossil carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Biogenic carbon dioxide to air (`bio_co2`)

Only actual evidenced biogenic CO2 formation/release. Incoming oil/wood/jute biogenic carbon is inherited upstream material carbon, not a second onsite photosynthetic uptake. No EPD carbon-negative result, storage credit or assumed release of all retained carbon.

- Selected flow: Biogenic carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Mineral carbon dioxide to air (`mineral_co2`)

Conditional independently evidenced carbonate reaction/decomposition; do not assume calcium carbonate calcination during ordinary linoleum processing.

- Selected flow: Mineral carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Carbon monoxide to air (`co`)

Conditional actual CO species from owned combustion/treatment; do not substitute aggregate flue gas.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Nitrogen monoxide to air (`no`)

Conditional actual NO mass; combined NOx-as-NO2 measurements need measured/specifically supported speciation before molecular assignment.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Nitrogen dioxide to air (`no2`)

Conditional actual NO2 mass; retain its own chemistry and measurement basis.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Sulfur dioxide to air (`so2`)

Conditional actual SO2 from demonstrated sulfur-containing fuel/input and measurements; absence requires evidence, not a universal zero.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Methane to air (`methane`)

Conditional actual CH4 fugitive/combustion emission; separate leakage from purchased gas supply and stack emissions.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Uncaptured wood-flour particulate to air (`wood_air`)

Actual unmixed wood dust escaping capture, with measured particle-size/non-overlap basis; mixed binder dust and pigment dust require their own named physical material rows. PM indicator alone is not a chemical species.

- Selected flow: Uncaptured wood-flour particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method5`

###### Argon to air (`argon_out`)

Measured pass-through argon for the same air boundary, not a residual used to force oxygen/water closure.

- Selected flow: Argon to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_gc`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `agilent-argon-2022`

###### Pass-through carbon dioxide to air (`ambient_co2_out`)

Measured background/pass-through CO2, disjoint from generated fossil, biogenic and mineral CO2. Total measured stack CO2 is an alternative control total, not a fifth additive stream.

- Selected flow: Pass-through carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ftir`
- Sources: `forbo-marmoleum-2018`; `tarkett-linoleum-2018`; `epa-method320`

###### Actual linoleum-body particulate outlet (`linoleum_body_pm`)

One actual identified body-dust mixture after the last real control, separate from unmixed wood flour and retained dust already inside exported filters. Method5 measures only its defined heated-filterable fraction with separate actual composition/phase characterization; no bulk recipe or wet-mist inference.

- Selected flow: Complete cured linoleum body particulate
- Flow property / unit: Mass / kg
- Amount rule: Use the sole already normalized §8 result from the linked raw protocol; keep separate actual gross physical and attributed views.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack`
- Sources: `epa-method1`; `epa-method2`; `epa-method3`; `epa-method5`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| attributional_context | multifunctional unit processes | Apply this hierarchy only for an attributional study context requiring allocation; document that context and the actual multifunctionality. Industrial process evidence does not authorize allocation. Do not freely switch physical/economic rules or import a source EPD substitution/energy-credit formula. | jrc-ilcd-2010 |
| subdivide_first | each non-functional exchange | Assign dedicated lines, batch materials, test and finishing burdens directly; first attempt actual subdivision, then partial/virtual subdivision from quantified technological relationships. Separate embodiment from genuinely joint residual burdens; document why unavailable subdivision matters. | jrc-ilcd-2010 |
| determining_causality | remaining exchange-specific joint burdens | Identify the determining physical causal relationship for each individual exchange, explaining how changed functions change its quantity. Storage may depend on observed occupied area/volume and time; heating material may depend on its actual heat capacity/state; coating may depend on actual treated area. These are hypotheses to test, not universal mass/area/time allocation keys. Different exchanges can need different relationships. | jrc-ilcd-2010 |
| residual_value | only demonstrably unresolved common process burdens | Only after justified absence of a determining physical relationship, apportion the actual remaining common process burden with contemporaneous market values at the same process exit/entry gate and actual supplied state, quality and quantity. Derive net gate value where downstream transport/conditioning/packaging is included in a quoted price; document periods, shares and sensitivity. No fixed ratio, retail-price shortcut or automatic saleable-waste credit. | jrc-ilcd-2010 |
| physical_no_credit | internal loops, waste and service quantities | Keep unallocated physical material/species/packaging ledgers separate from attributed burdens. Grinding/reuse cancels internal handoffs without new purchased material or automatic avoided-product/heat credit. A sale is not itself evidence of co-product allocation or recycling approval. Identify true joint process and waste/product status; any separate recycling method needs applicable evidence. Never multiply physical output, waste consignment or gross service movement by an allocation share. | jrc-ilcd-2010 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

Record original raw values, units, conditions and coverage without dividing by Q or Qc. The aggregation_rule column names the final reporting basis only and references the single normalize_once result, not an additional operation. All quantities remain future foreground requirements; no concrete factory measurements are fabricated here.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_linoleum | released_roll | weighing and release | cohort_id; roll_id; grade; conditioning; gross_mass; core_tare; package_tare; net_mass; first_release_time; test_id; duplicate_release_flag; Q; Qc; original Q0 lock; disjoint remaining delivery/on-site accepted/loss/other terminal fates on original basis; current wet mass/state; all gross loops; historical own/provider A vectors; net-delivery bridge | Use calibrated scales and traceable tare for the same complete conditioned rolls. Record actual grade-specific mechanical/dimensional/adhesion/cure and claimed fire/slip/emission acceptance tests. Deduplicate unique first release; exclude destructive samples from Q and include their real burdens. Record closing released FG within Q once. | kg | each roll and release event | complete release cohort and period | factory release gate | per 1 kg reference flow | calibration; tare records; acceptance and serial register |
| cp_geometry | p_linoleum | released_roll | geometry and mass bridge | roll_id; grade; conditioning; sample_plan; measured_width; measured_length; thickness_profile; independently_weighed_mass; excluded_tare; measurement_uncertainty | Measure the same finished conditioned construction; integrate actual usable profile where nonuniform. Independently weigh matching samples for mass/area or density, without adopting catalogue or native secondary coefficients. Record measurement coverage and representativeness. | kg; m; m2; m3 | each grade and representative lot | same release cohort | same complete finished rolls | per 1 kg reference flow | dimension instruments; scale calibration; sample linkage |
| cp_material | p_linoleum | each material card | purchases and issues | event_id; operation; cohort_id; row_id; supplier_lot; whole_formula; supplied_state; receipt; actual_issue; unused_open; unused_close; unused_external_return; assay; water; solids; upstream_owner; already_net_flag | Weigh actual whole receipts and issues in original units; reconcile unused stock once. Keep supplier specifications and process inventories. Separate each flour/pigment and each supplied formulation; dry assay/carrier water are non-additive. Internal trim/cement/sheet transfer uses cp_stock and no second procurement. | actual raw unit | each purchase/issue/batch | full production period including failures | receipt and actual manufacturing owner | per 1 kg reference flow | weigh tickets; supplier specification; upstream boundary; stock reconciliation |
| cp_utilities | p_linoleum | each utility and auxiliary card | meters and utility states | event_id; cohort_id; operation; row_id; meter_open; meter_close; raw_unit; rate_flag; integrated_volume; interval; composition; temperature; pressure; density_measurement; LHV; inlet_enthalpy; return_enthalpy; supplier_water_energy_agreement; direct_or_purchased; idle; cleanup | Read bounded real meters for every actual stage and utility conversion, including start/stop, idle, ventilation, grinding, tests, cleaning and FG services. Collect raw unnormalised quantities, calibration and independent density/thermal measurements. Keep fuel and purchased heat ownership exclusive; distinguish steam, liquid water and genuine external Product returns. | actual raw unit | meter interval and every event | full period plus observed service H | each owned utility and delivery/return gate | per 1 kg reference flow | meter calibration; time/state records; supplier coverage; raw invoices |
| cp_stock | p_linoleum | all physical gates | stock and inherited vectors | entity_id; cohort_id; row_id; operation; gate; actual_state; raw_or_WIP_or_nonWIP_or_FG; opening_quantity; closing_quantity; internal_handoff_id; external_return_id; historical_exchange_vector; already_net_flag; rework_event; destructive_test; failure; Q_zero | Physically count/weigh stocks at matched gates and times; preserve each inherited exchange vector and reconcile actual WIP handoffs, recovery loops and incremental rework. Separate unused raw/nonWIP entities. No current recipe may replace historical WIP/FG burdens; no event disappears on acceptance. | actual raw unit | every stock boundary and transfer | opening through closing and historical cohorts | manufacturing; FG; consolidated gates | per 1 kg reference flow | physical counts; historical vector provenance; matching IDs |
| cp_species | p_linoleum | each air and water species | independent physical and species measurements | event_id; operation; cohort_id; molecule; CAS; medium; phase; carbon_origin; inlet_or_outlet; raw_concentration; raw_flow; rate_or_integral; interval; sample_blank; detection_limit; oxygen_uptake_observation; water_observation; independent_element_analysis; capture_destination; uncertainty | Measure actual inlet/outlet air composition/flow/humidity and identify molecular species with appropriate calibrated sampling/speciation, including treatment. Separate chemical reaction water from feed/structural/free water and evaporation/condensation with independent evidence; separately analyse carbon/hydrogen/oxygen and retained composition. Record measured absence/LOD and unknowns explicitly. No one residual estimates two unknowns; no VOC/PM/COD indicator is assigned to a molecule. | actual raw unit | representative event-integrated samples and continuous meters | full production and observed treatment/service periods | each physical gas/liquid/species gate | per 1 kg reference flow | analytical calibration; blanks; chromatograms; state/flow records; carbon-source evidence |
| cp_waste | p_linoleum | each waste card | external consignment and treatment | consignment_id; operation; cohort_id; row_id; waste_or_product_status; wet_mass; independent_dry_mass; moisture; originW; W_control_total; internal_reuse_id; external_provider; treatment_boundary; measured_species; contamination | Weigh each actual separated external waste with one provider. Where genuinely commingled linoleum waste exists, use one measured W OR measured originW subaccounts, not both as additive provider feeds. Include actual onsite treatment inputs/outputs; otherwise supplier owns downstream treatment. Sale never proves credit. | actual raw unit | every waste transfer and treatment event | complete period including Q=0 | actual waste/treatment boundary | per 1 kg reference flow | weigh tickets; provider receipt; status evidence; treatment records |
| cp_service | p_linoleum | each original released cohort | observed FG service | cohort_id; Qc; original_release_id; observed_H_start; observed_H_end; opening_FG; closing_FG; gross_dispatch_V; external_return; original_delivery_reversal; incremental_rework; physical_unit; distance; occupied_space; actual_duration; raw_service_meter | Link actual warehouse/handling/dispatch/return records and raw services to original cohort Qc and observed H. Carry historical FG vectors without adding original manufacture again. Measure real gross movements independently of burden allocation or price; H is not divided a second time. | actual raw unit | every service event and observed stock interval | actual H only | released FG service gate | per 1 kg reference flow | release linkage; time/space logs; shipment and return records |
| cp_pack | p_linoleum | each packaging card | separate physical package ledger | article_id; cohort_id; row_id; composition; tare; opening_empty; opening_WIP_attached; opening_FG_attached; opening_reusable; purchase; external_return_received; closing_empty; closing_WIP_attached; closing_FG_attached; closing_reusable; gross_attached_shipped; external_return_sent; waste; internal_reuse; provider; F_open; P; I; ER_in; J_in; H2O_in; C_in; X_in; F_close; S_gross; EO_out; W_whole; J_out; H2O_out; C_out; X_out; nested_component_ids; same_side_duplicate_record_ids; O_in; O_out; OTHER_atomic_row_ids; observed_overlap_links | Count/weigh each packaging material separately and convert count with independently weighed actual article tare. Reconcile all empty/attached/reusable states and every gross physical movement, including repeats; internal reuse cancels. No package mass enters net Q; upstream purchases are unique. | actual raw unit | every package movement and stock boundary | production plus actual observed service H | each package and manufacturing/FG/consolidated gate | per 1 kg reference flow | stock counts; tare tests; supplier invoices; return and waste receipts |
| cp_fleet | p_linoleum | fleet_history | foreground_record | asset ID; complete measured configuration/M; original provider/reference unit; original own/provider vectors; all physical opening/receipt/return/repair/replacement/retirement/closing; measured use and capacity; service-driver denominator; retained contamination; original cohorts; unassigned service | Inventory the complete actual production, handling, storage, control, maintenance, test and measurement fleet, not only the main machine. For each actual configured asset or reusable cloth/filter article, independently collect complete physical mass M and all real constituents/attachments, opening/closing stock, receipts, returns, repairs, replacement parts, retirement, retained contamination and actual use/capacity. M is measured, never a numeric default or camera/machine count. Conserve that full physical fleet separately from attributed service burdens; repeated use is not repeated purchase and a burden share never shrinks physical returns or retirement. The provider may reference kg, item, operating hour or another real unit: retain its exact unit/period/configuration and use actual measured count-mass or service-capacity conversion with a demonstrated denominator. No universal lifetime or capacity fraction is assumed. Original provider/own history stays with every transfer once. Add every real supporting device and identified replacement/maintenance consumable atomically; a bare main-asset UUID cannot stand for a different full fleet. | kg; actual provider unit | Each actual event/measured interval | Complete original cohorts/observed H including failed/zero-output | Actual owner/final outlet/receiver gate | per 1 kg reference flow | Raw calibration/custody/full programme/provider unit and uncertainty |
| cp_ftir | p_linoleum | ftir_programme | foreground_record | target/CAS/phase; interferants; reference spectrum/certificate; original interferograms; path/resolution/T/P; background/CTS/noise/MAU; heated line/filter/conditioning; native/spike/tracer background and raw flows; leaks/response; 12 paired validation samples when applicable; recovery/bias/uncertainty; actual final gas flow; original cohort | For actual infrared-active vapor-phase aldehydes and other identified target gases, Method320 and its complete FTIR Protocol provide a real procedure, not merely a method title. Establish target/interferant reference spectra (Protocol4.6 if absent), instrument resolution/path/temperature/pressure and spectral regions, background/CTS checks, RMS noise/MAU/analytical uncertainty, heated inert probe/line/cell and actual particulate exclusion, leaks, response time and preserved raw interferograms. Water/CO2 overlap, adsorption, reaction and unintended condensation must be checked. Use Method320 pre-test QA spikes and the full 12-spiked/12-unspiked validation branch with bias/precision evaluation where required; recondition/retest or reject failing data. A condenser/dilution is permitted only with the actual through-train recovery and sample-conditioning validation, or a valid parallel conditioned/unconditioned comparison; do not discard captured analyte and still claim original whole-gas concentration. The Protocol and all appendices in the complete 50-page original remain part of this method. Actual spectra, calibration and matrix tests are study qualification, not evidence that no analytical programme exists. No site is asserted already qualified. | actual concentration; measured gas quantity; kg | Each actual event/measured interval | Complete original cohorts/observed H including failed/zero-output | Actual owner/final outlet/receiver gate | per 1 kg reference flow | Raw calibration/custody/full programme/provider unit and uncertainty |
| cp_stack | p_linoleum | flow_and_PM | foreground_record | duct geometry/traverse/cyclonic condition; pitot/meter calibration; gas composition/moisture/T/P; nozzle/isokinetic series; leaks; front-half/filter raw tare/recovered mass; blanks; actual dry standard volume; particulate material/phase characterization; whole receiver Qt; final controls; original cohort | Actual stack-flow/PM work must include the complete Methods1–3 and5 dependencies: suitable actual traverse geometry and cyclonic/small-duct exclusions; calibrated pitot/meter and measured temperature/pressure, gas composition and moisture; leak checks, nozzle/isokinetic conditions, blanks, complete front-half/filter recovery, gravimetry and actual dry-standard-volume calculations. Method5 measures its defined heated-filterable particulate fraction; it is not a molecular assay or proof for wet mist/condensable aerosol or all PM sizes. Retain actual total collected whole particulate and the separate supported material/species characterization; bulk linoleum recipe is not emitted dust composition. Method3's restricted dry-molecular-weight calculation and residual N2+CO fraction do not establish pure N2 or Ar; its assumed gas weight is not a measured factory value. No generic VOC/PM/COD indicator or one residual is assigned to a molecule. If actual droplets, wet aerosol or condensables matter and an applicable complete collection/phase/analysis procedure is not established, preserve that specific essential hold rather than claim total-PM closure. | kg; actual gas volume and flow unit | Each actual event/measured interval | Complete original cohorts/observed H including failed/zero-output | Actual owner/final outlet/receiver gate | per 1 kg reference flow | Raw calibration/custody/full programme/provider unit and uncertainty |
| cp_gas_gc | p_linoleum | non_IR_gases | foreground_record | original inlet/final outlet sample ID and phase; native/background; probe/container/loop; actual T/P/collection/storage time; conditioning and separate water receiver; gas volume/flow/dilution; certified Ar/O2/N2 component concentrations spanning samples; multipoint calibration/raw areas/regression; baseline separation/interference; blank/carryover; duplicates; direct/full-path/before-after conditioning/holding paired recoveries; independent introduced Ar amount; uncertainty and failure decision; original cohort | Do not use FTIR for homonuclear N2/O2 or monatomic Ar. For the actual carrier-air inlet/outlet account, the following is an independent combined GC-TCD measurement programme, not a claim of a published Ar stack validation or regulatory Method3C conformity. First define actual final outlet, inlet/background, wet/dry measurand, target gas range, phases and uncertainty objectives; the EPDs do not establish additional Ar generation or a fixed air composition. (1) Use the complete Method3 inert probe, representative sample, purge, leak-checked constant-flow collection and sealed identified gas-container procedure. Record actual T/P, flow/volume and elapsed collection/storage; choose inert materials that do not remove the target gases. Preserve simultaneous unconditioned and conditioned sample provenance; document every condenser/filter/dryer and actual separated receiver mass. (2) Use actual GC-TCD columns with measured Ar/O2 separation under the real sample matrix. The Agilent2022 Molsieve/backflush configuration is a demonstrated separation starting point, not a default setting or proof at every loading. Verify actual Ar and O2 standards separately and together with N2/CO2/H2O and every real interferant; dilute only with measured certified gas and preserved mole-amount basis, never atmospheric ratios. (3) Extend Method3C's explicit per-compound calibration framework to Ar: traceable certified Ar standards at at least three actual concentrations bracketing the final measured range, matrix/zero blanks, calibrated loop/sample T/P and identical gas-state basis, component-specific response regression, triplicate check standard and duplicate sample injections. Apply the source Method3C calibration-verification/recalibration and duplicate-agreement conditions to the declared composite programme; label that choice as author synthesis, not a reported Ar result. Retain standard certificates, slopes/intercepts, residuals, range, spectra/chromatograms and uncertainty. (4) Challenge the complete actual probe/transport/conditioning path with a traceable known Ar addition upstream and matched no-addition samples, and compare a direct standard bypass with the same standard through the full path. Perform separate before/after-conditioning comparisons on the same original-gas basis; account for measured added gas, collection pressure/temperature, water removal and actual dilution. Net Ar recovery is the difference in reconstructed downstream Ar mole amounts between matched spiked and unspiked runs divided by independently introduced Ar moles; use the measured native background and actual time/flow, not a single concentration subtraction at unequal flow. Retain blank/container carryover, repeated path recoveries and holding-time paired samples; never copy the note's single-standard LOD or recoveries for other gases. (5) Before testing fix the uncertainty-based acceptance plan, full-path/background controls and repeatability/calibration checks. Reject or repair/retest when Ar/O2 cannot be resolved, the actual range is uncalibrated, blanks/carryover invalidate identity, drift/duplicates fail the adopted Method3C conditions, or unexplained loss/enrichment exceeds the declared combined uncertainty. No generic recovery percentage is invented. (6) Only accepted data provide separately measured dry/wet mole fractions and measured total gas amount/flow on the same state basis; convert each molecule using its own molar mass and actual state/dilution, reconcile inlet/pass-through separately from generated/consumed species. This gives a specified procedure and failure path. Its independent scientific applicability and actual site QA remain separate; absence of actual execution alone does not mean there is no programme. If an actual necessary original-phase capture or conditioning branch cannot be specified or fails these tests, hold that dependent result, preserve all real physical air legs and unknowns, and do not claim Ar closure or remove the source by paper outsourcing. | actual gas concentration; measured gas amount; kg | Each actual event/measured interval | Complete original cohorts/observed H including failed/zero-output | Actual owner/final outlet/receiver gate | per 1 kg reference flow | Raw calibration/custody/full programme/provider unit and uncertainty |
| cp_qt | p_linoleum | whole_waste_Qt | foreground_record | consignment ID; entire wet physical Qt; receiver measured quantity; nested dry tare and retained powder/liquor/water; actual receiver and provider reference unit; transport; actual own/provider complete treatment; original and old cohort Q0; disjoint service demands and inherited A vectors; unassigned residual; no double provider feed | For each actual receiver consignment t record full physical wet Qt independently of any allocation or original cohort. It includes the entire contaminated substrate/cartridge/cloth/package and its retained dust, liquor and water once; dry tare and retained constituents are nested assays unless physically separated before that gate. Keep its measured receipt, actual receiver, transport and complete treatment boundary/reference unit. One whole mixed Qt OR mutually exclusive origin masses reconciled to Qt feeds the physical provider once. Independently assign nonoverlapping treatment-service/burden demands to all real original cohorts, old cohorts and non-product causes, retaining their original Q0,c and inherited A_e vectors; undistributed demand stays explicit. A 10 kg consignment with a 25% cohort burden share remains 10 kg physical transfer, not 2.5 kg, and is not charged 10 kg again to each cohort. If the provider reference is volume, item or treatment service, establish actual composition/state or service conversion; do not assume kg-provider compatibility. Include own treatment inputs, controls and outputs once, or the complete external treatment inventory once; never provider-embedded history plus the same decomposed treatment again. | kg wet; actual provider unit | Each actual event/measured interval | Complete original cohorts/observed H including failed/zero-output | Actual owner/final outlet/receiver gate | per 1 kg reference flow | Raw calibration/custody/full programme/provider unit and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_convert | all inventory rows | Convert raw records to each actual native quantity before attribution. For a rate integrate over measured time once; for an integrated volume retain that volume. Use independent substance/state density for mass conversion and real inlet/return enthalpy for heat. No native non-reference meanValue creates a measured factory property. | raw_quantity; raw_unit; rate_flag; interval; independently_measured_state_property | V_native | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| raw_stock_attribution | all inventory rows | For an unused raw-stock balance, use actual opening plus receipts plus external returns received minus actual closing minus unused external returns sent to derive issues, unless already net measured. For each exchange vector, combine real assigned new activity with inherited opening WIP minus inherited closing WIP and measured transfers at the same gate; do not subtract stock again from a net numerator. Separate dedicated/virtual subdivisions, exchange-specific causality and justified residual allocation to produce A. Losses, failure, idle, cleanup and Q=0 remain assigned or explicitly pending. | V_native; unused_stock; already_net_flag; opening_WIP_vector; closing_WIP_vector; actual_transfers; attribution_evidence | A | jrc-ilcd-2010 |
| normalize_once | all inventory rows | a = A / Q for manufacture; a_service = A_service / Qc for the original released cohort over observed H. This is the sole division after conversion, stock-vector reconciliation and attribution. Cards and collection aggregation display this result directly. For Q or Qc zero, retain the real raw/attributed ledger with no unit result. Q excludes packaging and repeat release; closing first-released FG is already in Q. | A; Q; A_service; Qc; H | a; a_service | jrc-ilcd-2010 |
| physical_gross | all inventory rows | p = V_native / Q for manufacture or V_native / Qc for original-cohort services, using real gross physical movement, separately from A-based burden results. Do not multiply by a stock-value/economic allocation share, subtract returns from gross shipments, or divide observed H again. This physical view is not added to the burden view. | V_native; Q; Qc; H | p | jrc-ilcd-2010 |
| article_geometry | released_roll | A_roll is independently measured usable width-length/profile area; m_roll is independently weighed conditioned net complete-roll mass. Derive mass_per_area = m_roll / A_roll only for the matched construction/sample. For a volume bridge integrate measured thickness over the actual same profile and measure matched mass/state independently. No catalogue size, recipe density or native secondary factor is a measurement. | measured_profile; measured_thickness; independent_net_mass; conditioning | A_roll; mass_per_area; measured_volume_bridge | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| physical_closure | all inventory rows | At each manufacturing, FG and consolidated gate, total actual opening stock plus gross external inputs equals actual closing stock plus gross external outputs; cancel paired internal handoffs only in the consolidated view. Whole wet articles OR mutually exclusive measured constituents form the mass bridge. X removes only observed OTHER same-side duplication, never an independent flow, real chemical increment, stock or opposite-side event. Run independent relevant-element balances and separate molecule/water/oxygen/biogenic-carbon ledgers with actual reaction/speciation evidence. Never fit two unknowns from one residual or treat evaporation as reaction/repair. Unknown closure remains inconclusive. | opening_stock; gross_inputs; closing_stock; gross_outputs; wet_or_constituent_bridge; independent_elements; species_observations | gate_residuals; independent_species_residuals | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| fg_cohort_closure | fg_dispatch | For each original cohort independently close the complete actual wet FG ledger: opening FG + actual new first-release transfers + actual external returns + actual rework returns + real independent non-water additions + water uptake = closing FG + gross physical dispatch + actual discard/destructive tests + actual rework issues + real independent non-water removals + water loss. Keep every leg mutually exclusive and on its actual wet state; material already inside a whole receipt/exit/stock is nested, never another addition/removal. Record real additional matter as specific atomic exchanges; do not fit a water/material residual. A new first-release transfer is the actual physical handoff linked to its unique acceptance event and origin-basis bridge, not the denominator Q0 added again. An old cohort with opening already accepted FG has no new release merely because it is observed, dried, returned or dispatched; current-period new manufacture may be zero while original Qc=Q0,c remains positive. Keep paired transfer states and actual later transformations independently; all original acceptance-basis fates reconcile separately under v_ext_cohort_acceptance. Reinspection/authorization makes no new Q. Carry each historical vector once through real transfers and any justified original-delivery reversal, and add only actual incremental service/rework. Full physical movements remain distinct from attributed A; observed services use original Qc and H is never a divisor. | opening_FG; Q; external_returns; rework_returns; closing_FG; gross_dispatch; discard; tests; rework_issues; historical_vector; Qc; actual_new_first_release_transfer; independent_wet_additions; independent_wet_removals; original_basis_bridges | FG_residual; cohort_service_assignment | forbo-marmoleum-2018; jrc-ilcd-2010 |
| package_closure | all inventory rows | For each actual packaging material pool use the literal wet physical equation F_open + P + I + ER_in + J_in + H2O_in + C_in + O_in - X_in = F_close + S_gross + EO_out + W_whole + J_out + H2O_out + C_out + O_out - X_out. F_open/F_close include all empty, WIP-attached, FG-attached and reusable wet stocks. P is actual new separate purchased package supply, I actual packaging arriving with supplied materials, ER_in actual external returns received, S_gross the entire package physically accompanying every gross shipment including repeat shipments, EO_out actual external returns sent, and W_whole the whole exported waste. These transfer masses include their measured retained contents once. J_in/out are real independently crossing non-water additions/removals not already inside those whole legs; H2O_in/out are separately observed water exchanges not already included there. C_in/out preserve any real matched conversion/transfer between defined pool classes, cancelled only in the consolidated boundary; they are never invented mass creation. Moisture/adhesive/ink/retained product already contained in a weighed package is a nested component, not another J or water input. X may remove only a specifically observed OTHER same-side quantity already represented elsewhere on that same side; identify the overlap and both underlying records. X cannot subtract named independent P/I/ER/S/EO/W/J/water/C events, stock/opposite-side quantities, real chemical increments or an amount merely because a card exists. No residual is fitted. This replaces the historical use of X as an unidentified real OTHER flow: a real new material requires its own identified atomic interface, not X. O_in/out are sums of individually identified observed OTHER interfaces, each with its actual atomic card and raw record; they are not unidentified baskets or fitted balancing flows. Only a documented overlapping part of an O term can be X, linked to its already represented same-side record; every nonoverlapping O part remains a real physical flow. | F_open; P; I; ER_in; J_in; H2O_in; C_in; X_in; F_close; S_gross; EO_out; W_whole; J_out; H2O_out; C_out; X_out; nested_components; overlap_ids; O_in; O_out; OTHER_atomic_row_ids; observed_overlap_links | per_material_package_residual | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| mixed_waste_once | floor_waste | For one real commingled linoleum consignment choose measured W OR disjoint measured originW whose sum reconciles W; W is then a control total, not another additive waste. Keep one treatment provider and correct waste/product status; internal reuse is a separate matched handoff. Species/assay indicators are subledgers, not extra physical waste. | W; originW; consignment_id; provider; status; internal_handoff | single_provider_feed | tarkett-linoleum-2018; jrc-ilcd-2010 |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all UUID and supplier bindings | Check whole native object: every basename/synonym/comment, CAS, route/grade/form/state, geography, type/media and all properties. Preserve reference-property and unit-group chains and supplier compatibility. Generic family identity does not establish a specific supplier, formulation or measurement. Contradictions cannot be waived by a matching CPC/name. | Native identity chain; supplier specification; restriction disclosure in every consuming card |
| dq_primary | every method/source and quantity | Retain complete primary context, figures, composition tables and variant footnotes. The two industrial sources are different producers/editions; no source number or EPD result is a factory default. Actual site data and independent chemistry/measurement support all quantitative results. | Full source and figure context; actual owner/recipe/measurement records |
| dq_complete | all operations and states | Reconcile unused raw, actual nonWIP, WIP and released FG separately, with every inherited exchange vector and real failed/zero-output/idle/rework/treatment event. Unknowns and coverage gaps remain explicit; do not assert a passing balance or zero emission from missing data. | cp_stock; cp_species; cp_release; cp_waste |
| dq_uncertainty | future data package | Disclose calibration, sample coverage, detection limits, blanks, temporal/site representativeness, stock-vector provenance, allocation sensitivity and unresolved identity/provider support. Ordinary auxiliary/provider gaps do not redefine the complete linoleum method; missing core finished-product/route/endpoint support blocks applicability. | Measurement reports; provenance; uncertainty and separate gap ledger |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference and complete route | Confirm complete traditional linoleum with oxidized oil binder, actual flour/mineral/pigments, woven jute and full cured factory finish through unique first release. Reject PVC, bitumen, unfinished cement/backing and excluded composite/installed routes. A generic family must have positive product/form/state fit and all native hard restrictions in the full consuming description. | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| validate_quantity | all inventory rows and protocols | Reference amount and finished output are 1 kg net complete first-released product in both languages; original-unit conversion and attribution precede the single A/Q or original-cohort service A/Qc division. Cards and protocol aggregation reference the same result. H is not another divisor. Q=0 retains actual flows/loads with no unit result. Closing released FG is already included; no dispatch/retest double production. | forbo-marmoleum-2018; jrc-ilcd-2010 |
| validate_physical | manufacturing, FG, species and consolidated ledgers | Independently close gross total mass and relevant elements using whole wet articles OR disjoint constituents. Independently support oxidation, O2 uptake, water formation/release and carbon-source/species ledgers. One residual cannot solve multiple unknowns. Preserve real air/water phases and state-specific density; VOC/COD/PM totals do not establish molecules. All actual unlisted flows must be added atomically. Unknown core chemistry or measurement prevents dependent dataset closure from passing. | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| validate_stocks | all cohorts and events | Check physical unused/raw/nonWIP/WIP/FG states and per-exchange inherited vectors; do not deduct already-net stock twice. Preserve every failed/startstop/idle/cleanup/rework/test/return/treatment event including zero output. FG gross movements, returns, original-delivery reversals and incremental rework use original Qc and historical burden; acceptance cannot remove actual events. | forbo-marmoleum-2018; jrc-ilcd-2010 |
| validate_pack_waste | each material and consignment | Require full per-package opening/closing empty/attached/reusable stock balance, actual external inflows/returns, gross shipped packaging, external returns sent and waste; internal reuse cancels and packaging is outside Q. One actual mixed waste W OR disjoint originW feeds one provider, never both. Keep waste/product status and physical totals independent of allocation or sale/credit assumptions. | forbo-marmoleum-2018; tarkett-linoleum-2018; jrc-ilcd-2010 |
| validate_owner_utilities | each purchased preparation and utility conversion | Verify one supplier/onsite owner for the full upstream preparation, real site/grade/route and exact native property-to-unit chain. Reject hard CAS/route/media/geography contradictions. Require actual complete thermal/air/treatment route and external Product condensate/circuit returns with thermal states and water/energy agreement where they exist. Do not create absent boilers, arbitrary density or copied source recipes. | forbo-marmoleum-2018; tarkett-linoleum-2018; jrc-ilcd-2010 |


### Complete retained admission and collection conditions

This manufacturing PCR covers complete compact linoleum flooring rolls with a traditional oxidized linseed-oil/rosin binder, wood flour (and separately declared cork flour only when actually used), evidenced mineral filler and individual pigments, woven jute backing and a factory waterborne UV-cured acrylate-hybrid protective finish. Start with actual separate purchased oils/rosin or a fully evidenced supplier-prepared cement, fillers, backing and whole coating preparations. Include binder oxidation and maturation at their real owner, mixing/granulation, calendering and backing consolidation, oxidative curing to the required mechanical state, surface preparation/coating/drying/UV cure, trim/cut/roll, actual tests and first quality release. Keep actual rework, failed and zero-output runs, start/stop, idle, cleanup, extraction, utilities and treatment. [forbo-marmoleum-2018; tarkett-linoleum-2018]

This is a transparent technology synthesis, not one SKU, recipe, plant or contemporary order. Forbo provides the selected finished jute-backed double-coated roll route and the separate linoleum body/intermediate/backing construction. Tarkett independently supports traditional oxidation/calendering/curing and identifies cork-containing, foam-backed and customer-finished exceptions. Those exceptions are not proof for this selected compact factory-finished endpoint. Exclude PVC/vinyl floors, bitumen linoleum/roofing or waterproof felt, loose cement, separate fabric, acoustic foam/composite click panels, furniture linoleum, installed floors and repacking bought finished rolls. A different construction needs explicit applicability review. No source recipe fraction, oxidation rate, time/temperature, dimensions, mass/area, density, yield, emissions, lifespan, carbon uptake or credit is adopted as a default.

Declare every qualifier in metadata, process notes, reference comments or equivalent dataset fields. The native manufactured Linoleum family positively covers this complete finished article but supplies no recipe, performance or supplier inventory. Its complete identity restrictions also govern released_roll and fg_dispatch descriptions. A missing core terminal/route is an applicability hold; ordinary supplier/auxiliary gaps are separately disclosed.

Record original raw values, units, conditions and coverage without dividing by Q or Qc. The aggregation_rule column names the final reporting basis only and references the single normalize_once result, not an additional operation. All quantities remain future foreground requirements; no concrete factory measurements are fabricated here.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_ext_cohort_acceptance | all inventory rows | Lock Q0,c as the independently summed unique first-acceptance event masses of complete conditioned rolls at the fixed manufacturing gate, excluding detachable packages and test/reject samples. Q0,c is never reconstructed from survivors or reset on dispatch, return, reinspection or incremental rework. At the observation cut-off reconcile Q0,c = D_remaining,c^0 + S_accepted,c^0 + L_irreversible,c^0 + T_other,c^0, where these are disjoint original-acceptance-basis allocations: net remaining delivered material, every on-site accepted state including held/quarantined/rework material, irreversible losses/destructive tests, and other actual terminal dispositions. Gross shipments, returns and recirculation are event legs, not additive terminal fates. Independently record each fate's actual current wet mass and its measured transformation from the original basis. Never restore lost water/material into a survivor and also count that same loss. Unknown fate or conversion keeps the bridge unresolved. Already accepted closing FG belongs to original Q0,c, not a second external production flow. Manufacturing A/Q0,c, observed later-service A_service/Q0,c and actual physical V/Q0,c are distinct reports; only one division is performed and observed H is never another divisor. For a reporting period, manufacturing Q is the sum of Q0,c over exactly the newly accepted cohorts included in that manufacturing report; for one cohort Q=Q0,c. Historical service Qc is always its original Q0,c, never the current-period manufacturing Q. Keep new manufacturing and old-cohort service numerators disjoint. | jrc-ilcd-2010 |
| v_ext_three_ledgers | all inventory rows | Keep three separate accounts before normalization: actual full physical receipts, issues, transformations, transfers and stocks; attributable exchange/burden vectors with their real own or provider provenance; and fixed original-cohort acceptance/fates. Raw unused stock, real WIP, genuinely non-WIP items and accepted FG are distinct physical states, with wet mass, composition and opening/closing ownership. Each own foreground WIP transfer carries its inherited vector once, plus only real incremental operations. A purchased whole cement, coating, backing, recovered material or utility carries its complete actual provider inventory once: choose embedded whole-provider burdens OR a documented nonoverlapping decomposition, never both. Old provider burdens are not recreated with current recipe or energy intensity. Already-net issues are not stock-corrected twice. Zero-output, failed, start/stop, idle, cleaning, control and treatment events retain all their raw quantities and vectors; zero/unknown Q0,c retains totals and unresolved attribution rather than a fabricated unit result. | jrc-ilcd-2010 |
| v_ext_wet_pack_literal | all inventory rows | For each actual packaging material pool use the literal wet physical equation F_open + P + I + ER_in + J_in + H2O_in + C_in + O_in - X_in = F_close + S_gross + EO_out + W_whole + J_out + H2O_out + C_out + O_out - X_out. F_open/F_close include all empty, WIP-attached, FG-attached and reusable wet stocks. P is actual new separate purchased package supply, I actual packaging arriving with supplied materials, ER_in actual external returns received, S_gross the entire package physically accompanying every gross shipment including repeat shipments, EO_out actual external returns sent, and W_whole the whole exported waste. These transfer masses include their measured retained contents once. J_in/out are real independently crossing non-water additions/removals not already inside those whole legs; H2O_in/out are separately observed water exchanges not already included there. C_in/out preserve any real matched conversion/transfer between defined pool classes, cancelled only in the consolidated boundary; they are never invented mass creation. Moisture/adhesive/ink/retained product already contained in a weighed package is a nested component, not another J or water input. X may remove only a specifically observed OTHER same-side quantity already represented elsewhere on that same side; identify the overlap and both underlying records. X cannot subtract named independent P/I/ER/S/EO/W/J/water/C events, stock/opposite-side quantities, real chemical increments or an amount merely because a card exists. No residual is fitted. This replaces the historical use of X as an unidentified real OTHER flow: a real new material requires its own identified atomic interface, not X. O_in/out are sums of individually identified observed OTHER interfaces, each with its actual atomic card and raw record; they are not unidentified baskets or fitted balancing flows. Only a documented overlapping part of an O term can be X, linked to its already represented same-side record; every nonoverlapping O part remains a real physical flow. | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| v_ext_fleet_history | all inventory rows | Inventory the complete actual production, handling, storage, control, maintenance, test and measurement fleet, not only the main machine. For each actual configured asset or reusable cloth/filter article, independently collect complete physical mass M and all real constituents/attachments, opening/closing stock, receipts, returns, repairs, replacement parts, retirement, retained contamination and actual use/capacity. M is measured, never a numeric default or camera/machine count. Conserve that full physical fleet separately from attributed service burdens; repeated use is not repeated purchase and a burden share never shrinks physical returns or retirement. The provider may reference kg, item, operating hour or another real unit: retain its exact unit/period/configuration and use actual measured count-mass or service-capacity conversion with a demonstrated denominator. No universal lifetime or capacity fraction is assumed. Original provider/own history stays with every transfer once. Add every real supporting device and identified replacement/maintenance consumable atomically; a bare main-asset UUID cannot stand for a different full fleet. | jrc-ilcd-2010 |
| v_ext_whole_waste_qt | all inventory rows | For each actual receiver consignment t record full physical wet Qt independently of any allocation or original cohort. It includes the entire contaminated substrate/cartridge/cloth/package and its retained dust, liquor and water once; dry tare and retained constituents are nested assays unless physically separated before that gate. Keep its measured receipt, actual receiver, transport and complete treatment boundary/reference unit. One whole mixed Qt OR mutually exclusive origin masses reconciled to Qt feeds the physical provider once. Independently assign nonoverlapping treatment-service/burden demands to all real original cohorts, old cohorts and non-product causes, retaining their original Q0,c and inherited A_e vectors; undistributed demand stays explicit. In a synthetic illustration only, a 10 kg consignment with a 25% cohort burden share remains 10 kg physical transfer, not 2.5 kg, and is not charged 10 kg again to each cohort. If the provider reference is volume, item or treatment service, establish actual composition/state or service conversion; do not assume kg-provider compatibility. Include own treatment inputs, controls and outputs once, or the complete external treatment inventory once; never provider-embedded history plus the same decomposed treatment again. | jrc-ilcd-2010 |
| v_ext_utility_and_controls | all inventory rows | Retain actual oxidation, heating, curing, drying, ventilation, mixing, calendering, UV curing, trimming, regrinding and pollution-control producers at their real owners. An actual purchased-heat/steam boundary requires the complete matched upstream producer, delivered physical carrier/enthalpy and actual return/water convention; a paper receipt cannot remove an on-site burner or its air, fuel, reaction water, emissions and residues. Actual internal air recirculation and recovery transfers cancel only after matched physical/state records; final releases are measured after the last real control. Incoming atmospheric background and pass-through gases are not created emissions or carbon credits. Measure each actual fuel composition/state and real reactive G_i and C_i separately; total elemental/wet mass closure neither identifies a missing molecule nor proves a reactive species conserved. Whole collected condensate/sludge/dust to a real receiver is a physical mixture, not the same as residual individual chemical species released to air or water. | forbo-marmoleum-2018; tarkett-linoleum-2018 |
| v_ext_ftir_programme | all inventory rows | For actual infrared-active vapor-phase aldehydes and other identified target gases, Method320 and its complete FTIR Protocol provide a real procedure, not merely a method title. Establish target/interferant reference spectra (Protocol4.6 if absent), instrument resolution/path/temperature/pressure and spectral regions, background/CTS checks, RMS noise/MAU/analytical uncertainty, heated inert probe/line/cell and actual particulate exclusion, leaks, response time and preserved raw interferograms. Water/CO2 overlap, adsorption, reaction and unintended condensation must be checked. Use Method320 pre-test QA spikes and the full 12-spiked/12-unspiked validation branch with bias/precision evaluation where required; recondition/retest or reject failing data. A condenser/dilution is permitted only with the actual through-train recovery and sample-conditioning validation, or a valid parallel conditioned/unconditioned comparison; do not discard captured analyte and still claim original whole-gas concentration. The Protocol and all appendices in the complete 50-page original remain part of this method. Actual spectra, calibration and matrix tests are study qualification, not evidence that no analytical programme exists. No site is asserted already qualified. | epa-method320 |
| v_ext_source_equation_repair | all inventory rows | Retain the source defect: Method320 printed Eq3 gives tracer_spiked/tracer_direct, a spike fraction, while the following definition calls DF at least10; printed Eq4 uses that fraction as a mixture weight. Do not use an inverse dilution factor as that weight. On one measured common gas amount/temperature/pressure/wet-dry basis define r_sp = q_sp/(q_native+q_sp), d_sp=1/r_sp, and C_mix=r_sp*C_sp+(1-r_sp)*C_native. If the native tracer is not zero, obtain r_sp=(T_mix-T_native)/(T_sp-T_native) from measured tracer concentrations and valid separation, not an assumed background. Recover native analyte only with the corresponding actual mixture equation; retain independently measured flows, zero/span, recovery and uncertainty. The original printed page and this explicit mass-mixture correction must both be retained; it is an author mathematical clarification, not a claimed EPA erratum or new site validation. No source spike concentration or dilution becomes a factory default. | epa-method320 |
| v_ext_flow_and_pm | all inventory rows | Actual stack-flow/PM work must include the complete Methods1–3 and5 dependencies: suitable actual traverse geometry and cyclonic/small-duct exclusions; calibrated pitot/meter and measured temperature/pressure, gas composition and moisture; leak checks, nozzle/isokinetic conditions, blanks, complete front-half/filter recovery, gravimetry and actual dry-standard-volume calculations. Method5 measures its defined heated-filterable particulate fraction; it is not a molecular assay or proof for wet mist/condensable aerosol or all PM sizes. Retain actual total collected whole particulate and the separate supported material/species characterization; bulk linoleum recipe is not emitted dust composition. Method3's restricted dry-molecular-weight calculation and residual N2+CO fraction do not establish pure N2 or Ar; its assumed gas weight is not a measured factory value. No generic VOC/PM/COD indicator or one residual is assigned to a molecule. If actual droplets, wet aerosol or condensables matter and an applicable complete collection/phase/analysis procedure is not established, preserve that specific essential hold rather than claim total-PM closure. | epa-method1; epa-method2; epa-method3; epa-method5 |
| v_ext_water_phase | all inventory rows | Method4's full reference condenser/desiccant, measured volumes/masses, blanks, leaks and gas-state calculations support stack moisture only within its applicability and actual dependencies. Its approximation branch is not automatically a reference emission measurement. Saturated gas or entrained droplets can positively bias recovered water; apply its simultaneous saturation/temperature/pressure comparison and retain any unresolved phase distinction. FTIR water is gas-phase H2O only within the Method320 spectral/transport validation. Neither total condenser gain, a wet-minus-dry residual nor Method4 alone gives chemically generated water, a dissolved individual chemical or the original wet-mist species distribution. Use actual separately collected liquid/solid receiver mass, sample provenance and complete applicable phase/matrix analytical procedure for any required dissolved/retained analyte; otherwise that dependent result stays unresolved. Do not invent that such a phase exists solely from this conditional rule. | epa-method4; epa-method320 |
| v_ext_non_ir_gases | all inventory rows | Do not use FTIR for homonuclear N2/O2 or monatomic Ar. For the actual carrier-air inlet/outlet account, the following is an independent combined GC-TCD measurement programme, not a claim of a published Ar stack validation or regulatory Method3C conformity. First define actual final outlet, inlet/background, wet/dry measurand, target gas range, phases and uncertainty objectives; the EPDs do not establish additional Ar generation or a fixed air composition. (1) Use the complete Method3 inert probe, representative sample, purge, leak-checked constant-flow collection and sealed identified gas-container procedure. Record actual T/P, flow/volume and elapsed collection/storage; choose inert materials that do not remove the target gases. Preserve simultaneous unconditioned and conditioned sample provenance; document every condenser/filter/dryer and actual separated receiver mass. (2) Use actual GC-TCD columns with measured Ar/O2 separation under the real sample matrix. The Agilent2022 Molsieve/backflush configuration is a demonstrated separation starting point, not a default setting or proof at every loading. Verify actual Ar and O2 standards separately and together with N2/CO2/H2O and every real interferant; dilute only with measured certified gas and preserved mole-amount basis, never atmospheric ratios. (3) Extend Method3C's explicit per-compound calibration framework to Ar: traceable certified Ar standards at at least three actual concentrations bracketing the final measured range, matrix/zero blanks, calibrated loop/sample T/P and identical gas-state basis, component-specific response regression, triplicate check standard and duplicate sample injections. Apply the source Method3C calibration-verification/recalibration and duplicate-agreement conditions to the declared composite programme; label that choice as author synthesis, not a reported Ar result. Retain standard certificates, slopes/intercepts, residuals, range, spectra/chromatograms and uncertainty. (4) Challenge the complete actual probe/transport/conditioning path with a traceable known Ar addition upstream and matched no-addition samples, and compare a direct standard bypass with the same standard through the full path. Perform separate before/after-conditioning comparisons on the same original-gas basis; account for measured added gas, collection pressure/temperature, water removal and actual dilution. Net Ar recovery is the difference in reconstructed downstream Ar mole amounts between matched spiked and unspiked runs divided by independently introduced Ar moles; use the measured native background and actual time/flow, not a single concentration subtraction at unequal flow. Retain blank/container carryover, repeated path recoveries and holding-time paired samples; never copy the note's single-standard LOD or recoveries for other gases. (5) Before testing fix the uncertainty-based acceptance plan, full-path/background controls and repeatability/calibration checks. Reject or repair/retest when Ar/O2 cannot be resolved, the actual range is uncalibrated, blanks/carryover invalidate identity, drift/duplicates fail the adopted Method3C conditions, or unexplained loss/enrichment exceeds the declared combined uncertainty. No generic recovery percentage is invented. (6) Only accepted data provide separately measured dry/wet mole fractions and measured total gas amount/flow on the same state basis; convert each molecule using its own molar mass and actual state/dilution, reconcile inlet/pass-through separately from generated/consumed species. This gives a specified procedure and failure path. Its independent scientific applicability and actual site QA remain separate; absence of actual execution alone does not mean there is no programme. If an actual necessary original-phase capture or conditioning branch cannot be specified or fails these tests, hold that dependent result, preserve all real physical air legs and unknowns, and do not claim Ar closure or remove the source by paper outsourcing. CAN/CGSB-12.8-2017 AnnexB supplies an additional full Ar/O2/N2 separation-and-quantification procedure: gas-tight identified sampling, baseline-separated peaks, certified mixtures of known similar composition whose component ranges encompass the samples, actual standard/sample corresponding peak areas, daily or changed-condition standardization and reference repeatability. Its complete B.1–B.5 and footnotes are retained. In this independent programme calculate Ar from its own measured area-response calibration on matched actual sample/reference gas amounts, not by closing Ar/O2/N2 to100% or using air fractions; preserve measured dilution and all other actual components. AnnexB concerns sealed IG gas, so its septum sampling, example instrument settings and observed range do not replace Method3 industrial sampling and the full original-phase preservation/conditioning/recovery steps above; no conformity or samefactory validation is claimed. | epa-method3c; agilent-argon-2022; epa-method3; cgsb-argon-2017 |
| v_ext_scope_and_qualification | all inventory rows | The EPDs establish meaningful whole-product manufacture and distinct source variants, not a universally measured factory inventory or one combined SKU. The exposed chemical/phase protocol limitations above remain real admission conditions. Actual method selection, collected records, calibration and supported analytical recovery can be completed in a study where the full applicable programme exists; their unperformed state alone is not a new barrier requiring identical source factory/SKU. Conversely, an unspecified essential original-matrix sampling/speciation procedure cannot be converted into ordinary QA by writing future SOP or by finite checkpass. Candidate/draft or authored status, projection integrity, translation alignment and database identity establish neither scientific acceptance nor an actual site's study qualification. | forbo-marmoleum-2018; tarkett-linoleum-2018; epa-method320 |
| v_ext_validation_statistics | all inventory rows | For the Method320 validation branch retain the complete Method301(2017) dependency, including reference-material certification, collocated/paired sampling, sample stability, actual sample topology, bias and precision calculations and failure requirements. Method320 references old Method301 section numbers6.3.2.2/6.3.3; these are not the bias/correction sections in the retained2017 version. Do not blindly follow that numbering or the carried-over VS validated-method label in Method301's analyte-spiking subsection when no validated-method comparator exists. For this explicit independent treatment, each independent matched group uses the actual spike-fraction-corrected expected mixed concentration E_i and observed spiked mean S_i on the same original gas basis; d_i=S_i-E_i. Compute B=mean(d_i), s_d from the n actual independent group differences with denominator n-1, and t=abs(B)/(s_d/sqrt(n)); use the actual n-1 degrees of freedom and applicable two-sided source confidence criterion, not an assumed twelve degrees of freedom from twenty-four individual measurements. Retain all raw duplicate/pair observations and evaluate actual sampling precision under the applicable Method301 branch as well as bias; standard certificate/flow uncertainties remain separate inputs. For the Method320 batch two-native/two-spiked repeated pattern, six independent groups contain twelve native and twelve spiked samples; variable streams require its actual parallel or synchronized branch. A zero/undefined variance or invalid reference does not make a pass. Where a demonstrably multiplicative significant bias is correctable, the transparent concentration-ratio CF=mean(E_i)/mean(S_i) must be justified on matched conditions, remain inside the Method320 correction-factor limits and meet the applicable Method301 bias/precision requirements; otherwise reject/repair/retest. This ratio is an explicit mathematical clarification, not a claim the old cross-reference supplies a missing formula. For stored samples preserve Method301's source storage/sampling distinctions and minimum-versus-maximum-time paired tests; shorten/retest a holding interval that changes results significantly. Its paragraph/table timing differences are not a default holding life. Validation statistics cannot invent a missing extraction, molecular identity or original-phase sampling procedure, and no regulatory approval or actual-site pass is asserted. | epa-method320; epa-method301 |

### Complete retained stage and gate ledger

The integrated inventory retains the following stage and gate ledger. Internal cement/granulate/sheet/trim handoffs are measured and carry full inherited vectors; they cancel on consolidation, never create new purchases. Utility and molecular cards collect each actual operation separately under their row_id before summing attributable raw amounts.

| stage_id | stage_name | accounting_gate |
| --- | --- | --- |
| s_receipt | Receipt, storage and actual input preparation | Unused raw and genuine nonWIP separated from WIP |
| s_binder | Actual-owner oil/rosin/tall-oil oxidation and cement maturation | Supplier/onsite ownership and O2/water/species observations |
| s_compound | Separate flour/filler/pigment mixing and granulation | Real internal recovered trim and WIP vectors |
| s_calender | Calendering and woven-jute backing consolidation | Complete body/intermediate/backing construction |
| s_cure | Oxidative curing to actual mechanical requirements | Actual thermal/air route and independent chemistry |
| s_finish | Surface preparation, each coating layer, drying and UV cure | Whole wet formulation and retained coating mass |
| s_release | Trim/cut/roll, conditioning, tests and unique first release | Q includes closing first-released FG; failure/zero/test loads remain |
| s_service | Actual packaging, storage, handling, dispatch and returns | Original Qc; observed H; full FG and packaging ledgers |
| s_support | Real utilities, extraction, cleanup, rework and treatment | Actual owner; full event and species accounting |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Measured linoleum manufacture and separately bounded observed FG services; secondary_dataset or background_dataset only after actual-data validation |
| downstream_use | Installation studies with explicit upstream links and separately evidenced installation/use/end-of-life scenarios |
| allowed_use | Matched complete compact jute-backed oxidized-oil linoleum roll construction, cure and first-release gate, with original-cohort service disclosure |
| excluded_use | PVC/bitumen/binder/backing substitution; incomplete manufacturing; assumed installed life; fixed recipe/density/yield/emission/carbon benefit; unobserved future services |
| required_metadata | All reference qualifiers; PCR identity; native restrictions; site/period and actual owner; whole supplies/upstream links; all raw/physical/attributed views; stock vectors; unique Q/Qc/H; sources and uncertainty |
| required_quality_disclosure | Actual operational and measurement coverage; supplier/auxiliary gaps separately from core holds; unsupported chemistry/speciation/closure; allocation and source-variant limitations; no scientific or translation approval inferred from engineering checks |
| update_trigger | Change of binder supply/oxidation route, flour/filler/pigment, backing, layer/coating/curing construction, gate/stock method, geography/utility/provider, waste treatment, packaging/services or primary evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| forbo-marmoleum-2018 | dataset | Forbo Flooring Systems, Marmoleum 2.0 and 2.5 mm, UL EPD 12CA64879.101.1, issued 2018-01-05; first declaration in combined publisher PDF, pp.3–7 and manufacturing figure2 p.6. https://www.forbo.com/media/document/c302148e-7b46-44a8-9bd2-00f5ac3646d1 | Primary historical complete product/layer/ingredient and oxidation→calendering→curing→factory finish→inspection/roll route; actual waste/packaging context. Qualitative use only; no recipe, dimensions, density, time, carbon result, cut-off, allocation or credit transfer. |
| tarkett-linoleum-2018 | dataset | Tarkett, Linoleum EPD (2018), materials tables1–3 with variant footnotes pp.4–5; §2.5–2.6 and process figure1 pp.5–6; lifecycle and data context pp.8–10. https://media.tarkett.com/docs/2018-EPD_Linoleum_Tarkett_EN.pdf | Independent primary traditional binder/wood/cork/jute route and actual counterexamples: foam and customer-finished products. No combined powder/pigment bundles, recipe ranges, heat-system choice, lifetime, output allocation or EPD results adopted. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printed pp.255–272 (PDF275–292), including applicability provisions and counterexamples. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Only attributional contexts requiring allocation: dedicated/actual/virtual subdivision, exchange-specific determining physical causality and justified residual common-process actual gate/state market value. No automatic Annex14 recycling, substitution, fixed shares or factory chemistry evidence. |
| epa-method320 | official_guidance | EPA Method320Measurement ofVaporPhaseOrganicAndInorganicEmissionsByExtractiveFTIR; 2019-01-14 publisherPDF. https://www.epa.gov/sites/default/files/2019-06/documents/method_320.pdf | Complete programme/applicability/counterevidence and explicitly identified independent method synthesis; no copied plant conditions, emissions, atmospheric fractions or LOD; no actual-site validation claimed. Full conditions/limits are in section9. |
| epa-method5 | official_guidance | US EPA Method5 Determination of Particulate Matter Emissions from Stationary Sources; 2August2017. https://www.epa.gov/sites/default/files/2017-08/documents/method_5.pdf | Complete programme/applicability/counterevidence and explicitly identified independent method synthesis; no copied plant conditions, emissions, atmospheric fractions or LOD; no actual-site validation claimed. Full conditions/limits are in section9. |
| epa-method3 | official_guidance | US EPA Method 3 full dependency document; 3August2017. https://www.epa.gov/sites/default/files/2017-08/documents/method_3.pdf | Complete programme/applicability/counterevidence and explicitly identified independent method synthesis; no copied plant conditions, emissions, atmospheric fractions or LOD; no actual-site validation claimed. Full conditions/limits are in section9. |
| epa-method2 | official_guidance | US EPA Method 2 full dependency document; 2August2017. https://www.epa.gov/sites/default/files/2017-08/documents/method_2.pdf | Complete programme/applicability/counterevidence and explicitly identified independent method synthesis; no copied plant conditions, emissions, atmospheric fractions or LOD; no actual-site validation claimed. Full conditions/limits are in section9. |
| epa-method1 | official_guidance | US EPA Method 1 full dependency document; 28April2020. https://www.epa.gov/sites/production/files/2017-08/documents/method_1_3.pdf | Complete programme/applicability/counterevidence and explicitly identified independent method synthesis; no copied plant conditions, emissions, atmospheric fractions or LOD; no actual-site validation claimed. Full conditions/limits are in section9. |
| epa-method4 | official_guidance | US EPA Method4 Determination of Moisture Content in Stack Gases; 2August2017 historical Internet copy. https://www.epa.gov/sites/default/files/2017-08/documents/method_4_0.pdf | Complete programme/applicability/counterevidence and explicitly identified independent method synthesis; no copied plant conditions, emissions, atmospheric fractions or LOD; no actual-site validation claimed. Full conditions/limits are in section9. |
| epa-method3c | official_guidance | EPA Method3C CO2 methane nitrogen oxygen byGC-TCD; 8/2/2017 internet copy. https://www.epa.gov/sites/default/files/2017-08/documents/method_3c.pdf | Complete programme/applicability/counterevidence and explicitly identified independent method synthesis; no copied plant conditions, emissions, atmospheric fractions or LOD; no actual-site validation claimed. Full conditions/limits are in section9. |
| agilent-argon-2022 | literature | Noble Gases Analysis Using the Agilent990 Micro GC; 5994-4552EN;18 January2022. https://www.agilent.com.cn/cs/library/applications/an-noble-ga-990-micro-gc-5994-4552en-agilent.pdf | Complete programme/applicability/counterevidence and explicitly identified independent method synthesis; no copied plant conditions, emissions, atmospheric fractions or LOD; no actual-site validation claimed. Full conditions/limits are in section9. |
| cgsb-argon-2017 | standard | CAN/CGSB-12.8-2017, Insulating glass units, publishedMay2017, complete27pageoriginal, scopeprinted1/PDF6 andAnnexBprinted17–18/PDF22–23. https://publications.gc.ca/collections/collection_2017/ongc-cgsb/P29-0012-008-2017-eng.pdf | Full AnnexB/necessaryancestor scope andfootnotes for actualAr/O2/N2 separation, certifiedsample-encompassingmixtures andarea-basedquantification. SealedIGcontextretained; independentindustrialsampling/conditioning/recoveryadaptationisexplicit, notsourcevalidatedhotwetmatrix orfactorydefaults. |
| epa-method6 | official_guidance | US EPA Method6, 2017-08-03 Internet copy, complete18pageoriginal; scopePDF1, actualmeterPDF3 andcalibrationPDF7–8. https://www.epa.gov/sites/default/files/2017-08/documents/method_6.pdf | Actual full dry-gas-meter/volume, temperature/barometer and post-test calibration dependency, §§6.1.1.10 and10.1–10.4; SO2 absorption/titration scope/counters retained separately, not asserted aqueous analysis or wholeMethod6 regulatory conformity. |
| epa-method301 | official_guidance | US EPA Method301, Field Validation of Pollutant Measurement Methods from Various Waste Media, 2017-08-04 Internetcopy, complete17-pageoriginal. https://www.epa.gov/sites/default/files/2017-08/documents/method_301.pdf | Complete actual Method320 statistical dependency, §§5–12 andTables1–3, sourceversion/cross-reference andreference-label limitations retained. Independent mixed-basis bias/precision clarification, notlegalapprovaloractualsiteQA. |
