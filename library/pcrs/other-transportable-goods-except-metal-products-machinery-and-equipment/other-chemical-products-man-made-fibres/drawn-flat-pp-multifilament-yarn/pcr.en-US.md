---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.drawn-flat-pp-multifilament-yarn
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Virgin PP flat drawn intermingled multifilament yarn manufacture

## 1. Scope and Applicability

This method covers manufacture from purchased virgin PP granulate to newly quality-released packed flat drawn, air-intermingled single-bundle continuous filament yarn for industrial textile conversion. It fixes the separate spinning/winding → drawing → sorted/packed flat-yarn branch, with internal as-spun bobbins, not a sold POY or a texturing/twisting branch [chemosvit-pp-2016]. The representative industrial HP specification and package support a supply gate, not measured factory consumption or a universal product specification [chemosvit-pp-list-2024]. Independent machine evidence confirms industrial PP FDY spinning/drawing capability; its integrated spin-draw-wind configuration is not asserted to be the separate-stage Chemosvit branch and is not substituted into this route [lohia-pp-sdw].

Exclude sewing thread, multiple/cabled yarn and retail packing, and all other exclusions in §2. Gas intermingling of filaments within one bundle is distinguished from bulk air texturing and combining independent yarns. Actual lots require order/TDS and tests; no energy, yield, finish dose, density or regain is supplied as a default. Native broad identity supports the physical PP filament only; full limitations are in the output card and boundary rules.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.drawn-flat-pp-multifilament-yarn |
| classification_refs | CPC 3.0: 35520, narrower semantic subset; no accepted mapping established |
| covered_products | Virgin PP mass-coloured full-circular flat drawn continuous multifilament yarn; one yarn bundle, untwisted, air-intermingled; industrial bobbins |
| excluded_products | POY, textured/bulked yarn, twisted yarn, multiple/cabled yarn, sewing thread, retail yarn, monofilament, slit/fibrillated tape, staple yarn, recycled polymer, hollow/profiled filaments, functional additive speciality grades and polymer blends |
| representative_product | Flat intermingled PP FDY, represented by the industrial PROLEN HP 330 dtex / 66-filament full-circular option; actual colour and acceptance specification declared per lot |
| production_route | Virgin PP granulate and colour masterbatch receipt → melting/filtering → spinneret spinning, quenching, finish application and initial winding → separate unwinding/drawing and air intermingling with final take-up → sorting, weighing, packing and first quality release; no downstream texturing or twisting |
| market_state | Newly quality-released packed industrial bobbin at production release gate; not the quantity actually shipped |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared flat drawn PP filament intermediate for knitting/weaving conversion |
| How much | 1 kg newly accepted net supplied-state yarn |
| How well | Single untwisted full-circular PP multifilament bundle with actual dtex, filament count, colour, intermingling points, tenacity, elongation, shrinkage, finish and moisture tested to the order/TDS; lot sorting and package identity passed |
| How long or cycle | One matched production accounting period and same-product/route/state cohort; no service lifetime claim |
| reference_flow_link | `released_yarn` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Polypropylene filament yarn `26f0ce1c-fd85-402c-8993-4e843df4f762` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | virgin PP grade and supplier lot; single bundle and no ply/cabling/sewing/retail use; full-circular cross-section and actual colour masterbatch formulation; separate spinning/winding then drawing route with no sold POY or texturing substitution; dtex and filament count with test methods; intermingling and no applied twist with acceptance tests; tenacity elongation shrinkage and lot disposition; finish assay moisture conditioning and supplied-state mass basis; measured bobbin bag box pallet and wrap tares; unique first release identifiers and exclusion of returned reacceptance; production-release Q and separate finished-stock/shipment ledger; factory geography period utility supply and provider limits; opening/closing WIP with carried burdens and failed/rework runs; native broad production-mix identity and classification/route wording debt |

Declare every qualifier in the concrete data package; this mass declared unit establishes no equivalent fabric service or lifetime.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_release weighs accepted net supplied-state yarn using calibrated scales, subtracting measured bobbin and all transport packaging tares; record conditioning, finish and moisture separately. Q contains only unique first quality releases of the declared cohort |
| `linear_density` | yarn identity and length conversion | Linear density | dtex; den; m | Measure linear density and filament count independently: dtex is g/10000 m and den is g/9000 m; matched measured length and dtex may cross-check mass but never replace calibrated net release weighing. Linear density is not kg/m3 material density; nominal cone size and catalogue maximum bobbin mass are not Q |
| `finish_water` | resin finish yarn and water | Mass | kg | Retain as-received wet mass and separately assayed dry solids/active fraction/free water. State assay denominators. Yarn finish and moisture remain in supplied-state net yarn mass where present; never apply generic regain or remove them without a separately declared conversion. Do not purchase formulation constituents twice |
| `meter_units` | utilities and species | Energy; volume; mass | kWh; m3; kg | Retain meter units; 1 kWh = 3.6 MJ. A measured integrated water/gas volume is already a period total and receives no extra time factor. A measured rate uses its matched duration once; gas mass needs independently specified pressure, temperature, composition and conversion. Preserve each measured emission species and medium |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased virgin fibre-grade PP granulate already polymerised and stabilised, a single specified PP-carrier colour masterbatch and whole supplied finish at the filament factory receipt |
| starting_condition_role | Polymer conversion foreground; upstream propylene chain-growth polymerisation remains in resin supply |
| product_classification_scope | Only the declared nonretail nonsewing single-bundle PP flat filament subset of 35520 |
| recursive_input_rule | Internal melt, as-spun yarn, drawn yarn, returns and rework are lot transfers, not new procurement or extra accepted output. External purchased yarn requires a separately scoped conversion route; do not substitute its mass for PP granulate |
| upstream_dataset_requirement | Link compatible virgin PP polymerisation/granulate, actual masterbatch and finish formulation, electricity and each packaging supply once; native yarn identity is not a background provider or quantity |
| disclosure | Gate-to-gate conversion through packed first quality release; disclose actual site, interval, process configuration, upstream links, storage/dispatch inclusion and omissions. Native PP yarn has no locationOfSupply or CAS; its erroneous knitted-fabric classification 28190 does not establish textile construction. The route label is aggregation/spinning/stretching (CN polymerisation/spinning/drawing); polymerisation is upstream here, not an on-site reaction |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `route_gate` | manufacture | Include feed receipt, dosing, melt homogenisation/filtering, spinneret spinning, quench-air conditioning, finish preparation/application, initial winding, separate unwinding/drawing, air intermingling, final take-up, sorting, weighing, packing and first acceptance. Intermingling entangles filaments of one bundle; it does not authorize texturing or combining independent yarns | `chemosvit-pp-2016`; `lohia-pp-sdw` |
| `supply_gate` | terminal gate | Q is unique newly positive quality-released packed net yarn kg of this cohort, before any repeated warehouse issue. Unaccepted as-spun or drawn bobbins are WIP, not independent sold POY by assumption; later drawing/texturing cannot be silently added, omitted or counted twice | `chemosvit-pp-2016`; `chemosvit-pp-list-2024` |
| `stock_services` | WIP and finished stores | Retain raw burdens of failed/zero-output periods, start-up, cleaning, rework, returns and all actually included packing, storage, handling and dispatch. Retain opening/closing WIP and their carried burdens. A new-release production account records Q once and never adds closing stock of the same released Q as another product output. Track finished stores and shipments separately with opening/closing kg and carried burdens; cancel internal transfers when accounts are combined. Reaccepted returns never create new Q; an eventual delivery dataset needs its own delivered denominator and undelivered stock burden carryover |  |
| `external_internal` | formulations and utilities | Count whole purchased colour masterbatch and whole finish formulation once. Their pigment/polymer/active/carrier-water assays are subledgers, not extra procurement. Count only separately acquired dilution water as an external water input. Count on-site blending losses/energy. On-site compressed air and recirculating cooling water are internal utility transfers; include their measured electricity, make-up, purge and losses once. Add each actually present fuel, purchased heat, cleaner, refrigerant leak, filter consumable or waste as a separate atomic exchange and protocol before dataset completion | `goulston-filament-finish` |
| `physical_chemistry` | mass and release accounting | Melting/solidification and molecular orientation do not create polymerisation water. PP chain growth belongs upstream. Conserve total physical mass and polymer/pigment/finish/water subledgers separately; document actual degradation, oxidation, hydrolysis or other side reactions with independent species evidence when present. Do not infer reaction water, VOC species or an outlet mass from a closure residual or COD. Measure actual species and media; no default zero or generic emission factor |  |
| `native_limits` | reference identity | The UUID is a broad PP filament Product flow, production mix at plant, with upstream polymerisation/spinning/drawing wording; no POY/FDY, colour, denier, filament count, supplier, measured yield, recipe, specific country or delivery scope is certified. It has no CAS and an empty geography object. The English aggregation wording and the knitted-fabric class 28190 are disclosed metadata debts; physical PP filament identity agrees across baseNames and comments. Use only this declared narrower flat drawn route, independently verify the virgin resin supply, and review each eventual background provider for actual grade, route, site, period and system boundary |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | PP melt spinning, drawing, intermingling and packed release | required | Declared virgin PP flat drawn industrial route | One connected foreground including measured internal stages and services | per 1 kg reference flow |

The fixed route uses separate spinning/winding then drawing, with unaccepted as-spun bobbins as internal WIP. An integrated spin-draw-wind line requires a separately declared route review; do not merge its utility or yield records by the FDY label. Internal melt/as-spun/drawn transfers remain in the lot/WIP ledger. No intermediate positive product output is implied. Every applicable additional supply, waste or species needs its own atomic row and measurement; missing data is not zero.

### Process: PP filament manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Virgin PP spinning granulate (`pp_granulate`)

Already polymerised purchased PP; record resin grade, melt-flow test, stabilisation, supplier lot, moisture and actual issued net mass. Preincorporated stabilisers are part of this supply, not duplicate external ingredients

- Selected flow: Virgin fibre-grade polypropylene granulate
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_material; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemosvit-pp-2016`

###### PP-carrier colour masterbatch (`colour_masterbatch`)

One identified whole commercial colour-masterbatch formulation for the actual shade; retain pigment and PP-carrier assays as subledgers. No separately purchased pigment or carrier is implied. Added speciality functionality and polymer-blend grades are outside scope

- Selected flow: PP-carrier pigment masterbatch
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_material; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemosvit-pp-2016`

###### PP flat-filament spin finish (`spin_finish`)

One actual purchased compatible finish formulation, including any supplied carrier water. Require supplier formulation/SDS, active/nonvolatile and water assays and batch acceptance; general finish evidence does not establish a supplier recipe, PP compatibility or application dose. Any on-site dilution uses the separately metered dilution-water row

- Selected flow: PP flat-filament spin-finish formulation
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_material; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `goulston-filament-finish`

###### Finish dilution water (`dilution_water`)

Only independently supplied water actually used for finish dilution; exclude water already inside purchased finish and internal recycled emulsion. Prove absence when no dilution occurs

- Selected flow: Demineralised water
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_material; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Cooling-loop make-up water (`cooling_makeup`)

External make-up for the actual cooling system, not total circulating flow. Track purge, evaporation, leakage and opening/closing water stock; use measured density only when converting volume to mass

- Selected flow: Cooling make-up water
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_material; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Foreground electricity (`electricity`)

Measure feed/melt/spin/draw/wind/pack electricity and attributable compressor, quench-air conditioning, cooling, finish blending, ventilation, start-up, failed runs and rework. For on-site air include compressor power once; do not also add purchased compressed air for that same service. Record actual voltage/site/provider and metering allocations

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_energy; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `lohia-pp-sdw`

###### Paper bobbin tube (`paper_tube`)

Actual paper tube mass, separately tared; catalogue type 3 dimensions do not establish tare. Reuse/returns need measured issue/return and lifetime attribution; do not charge full reused tube on every turn

- Selected flow: Paper winding tube
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_pack; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `chemosvit-pp-list-2024`

###### Individual bobbin bag (`pe_bag`)

One actual individual PE bag supply; measure count and representative tare for this exact bag

- Selected flow: Polyethylene bobbin bag
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_pack; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `chemosvit-pp-list-2024`

###### Transport box (`corrugated_box`)

Actual identified corrugated box construction; verify supplier composition and measured tare, including the catalogue double-box option only if used. Do not infer box mass from dimensions

- Selected flow: Corrugated transport box
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_pack; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `chemosvit-pp-list-2024`

###### Transport pallet (`wood_pallet`)

Actual wooden pallet only if chosen; the term europallet does not by itself prove wood, tare or reuse burden. A different pallet material requires its own atomic row, not this one

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_pack; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `chemosvit-pp-list-2024`

###### Pallet wrap (`stretch_film`)

Actual pallet wrap roll issue minus verified residual returns; keep film tare separate from yarn mass

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_pack; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `chemosvit-pp-list-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First quality-released flat drawn yarn (`released_yarn`)

Terminal Product output is newly released packed single-bundle full-circular virgin PP flat intermingled yarn, with no applied twist, no texturing, no ply/cabling and no sewing/retail specification. Native identity is broader: production mix at plant; route aggregation/spinning/stretching (CN polymerisation/spinning/drawing); no CAS, no geography/locationOfSupply, no exact grade, FDY state, recipe, colour, supplier or delivery basis. Its knitted-fabric class 28190 and English aggregation wording are disclosed metadata debts, not evidence of a fabric or an on-site polymerisation step. Link actual upstream virgin PP supply and independently verify every eventual provider. Q excludes tube/packaging and includes actual retained finish/moisture on the declared supplied-state basis; unique first release only

- Selected flow: Polypropylene filament yarn `26f0ce1c-fd85-402c-8993-4e843df4f762`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `chemosvit-pp-2016`; `chemosvit-pp-list-2024`

##### Waste flows

###### Discarded PP purge and filament (`pp_scrap`)

One polymer-rich waste stream from the same declared disposal/recovery route, with measured pigment/finish/water content. Keep materially different treatment routes as separate rows. Internal returns/remelt are not external waste and carry their burdens through WIP; saleable coproduct needs separate product identity and allocation

- Selected flow: Waste polypropylene
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_balance; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources:

###### Discarded finish emulsion (`spent_finish`)

Actual discarded finish emulsion measured with its water/active composition; do not also count this entire waste mass as water effluent or an emission

- Selected flow: Spent spin-finish emulsion
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_balance; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources:

###### Cooling-loop wastewater (`cooling_purge`)

Actual wastewater leaving foreground for identified treatment; not an elementary water release and not the whole internal cooling circulation. Keep finish emulsion separate

- Selected flow: Cooling blowdown wastewater
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_balance; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources:

##### Elementary flows

###### Water evaporation to air (`water_vapour`)

Actual water vapour from finish drying, feed moisture or cooling; retain independently supported sources and atmospheric medium. Physical evaporation is not chemical reaction water. Do not use an unexplained balance residual as an emission measurement

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_emission; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### PP particulate release to air (`pp_dust`)

Only measured uncaptured PP particulate released to air; captured PP dust belongs to the actual waste ledger. Colour-bearing or chemically different particulate requires the correct separate species identity

- Selected flow: Polypropylene particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Matched raw A_e / Q after unit conversion and cohort/WIP attribution under cp_emission; use the one reporting division in section 8
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | manufacture and internal loops | Prefer lot/submeter subdivision; retain start-up failures, internal rework and WIP carried burdens. Internal returns are not coproduct sales. Actual marketable off-grade products require separate identities and measured quantities. Where attributional allocation rather than substitution is justified, apply exchange-specific determining physical causality and virtual subdivision first, then residual process-gate market value; document actual drivers, matched quantities/values and sensitivity. No default fractions or automatic avoided-product credit for waste treatment | `ilcd-attributional-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Each collection_method retains undivided raw-period numerators and complete stock/carried burdens. The aggregation_rule column states the final reporting basis only. Card A_e/Q, aggregation basis and normalize_once refer to the same single calculation after conversions and cohort_burden, never sequential divisions. The first-release owner alone defines Q.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first released yarn | acceptance and weighing | lot and unique bobbin ID; first acceptance/rejection/return status; gross kg; tube/bag/box/pallet/wrap tare kg; conditioning; finish and moisture assays; dtex; filament count; twist/IPM; tensile elongation shrinkage tests; Q | Production quality owner signs first positive lot acceptance to actual order/TDS and calibrated net weighing, before identifying unique released kg. Record full-gate supplied-state water/finish condition and all packaging tares independently; reconcile duplicate IDs, withdrawals, returns and unaccepted WIP. Retain raw net kg; no input numerator is divided here | kg | each bobbin and lot | complete matched accounting period | declared factory and same grade/route/state cohort | per 1 kg reference flow | scale calibration; tare tests; lot TDS; acceptance and return log |
| cp_material | manufacture | purchased material and water | receipts issues and stocks | individual supply ID; whole received/issued/returned kg; resin/masterbatch/finish assays; water meter; formulation lot; opening/closing raw stock; internal transfers | Material-store and preparation owner retains gross raw-period supply records and measured issue/return/stock values, including failed runs and on-site blending losses. Assay constituent ledgers separately; separately acquired dilution water alone is external. Preserve measured volume/temperature/density conversions before any reporting division; no A/Q here | kg | each supply issue and meter interval | same full period including downtime and rework | declared factory manufacture | per 1 kg reference flow | invoices; calibrated balances/meters; SDS/assays; batch reconciliation |
| cp_energy | manufacture | foreground electricity | meters and service attribution | kWh opening/closing meters; submeter periods; compressor/quench/cooling/melt/draw/pack loads; start-up/zero-output/rework hours; shared service allocation driver | Utilities owner retains full undivided meter differences and justified shared-service allocations for all actual operations including idle/failed/rework, mixing and pack-out. Record only one acquisition of each internal compressed-air/cooling service burden. Keep stock/carried-burden links; never divide by Q in collection | kWh | meter interval and period close | complete matched period | manufacture and attributed utilities at declared factory | per 1 kg reference flow | calibration; meter timestamps; service allocation evidence |
| cp_pack | manufacture | each packaging article | weighed packaging issue/return | separate tube/bag/box/pallet/wrap identity; gross/tare kg; count; returns; reuse cycles; damaged packaging; opening/closing packaging inventory | Packing owner weighs each actual article or verifies a representative tare for the exact article/lot and measured count; retains complete raw mass and reuse attribution with rejects, rework and returns. This is procurement/consumption evidence separate from cp_release net-yarn tare; no A/Q here | kg | each lot and package issue | complete matched period | manufacture pack-out boundary | per 1 kg reference flow | tare study; procurement; reuse and damage log; package IDs |
| cp_balance | manufacture | physical mass WIP waste and carried burdens | lot balance and work-content ledger | opening/closing WIP by material state kg and accumulated exchange burdens; internal melt/as-spun/drawn transfers; failures; returns/rework; waste kg/composition/treatment; product kg; water/finish/pigment ledgers | Production accounting owner retains complete raw mass/element balances and supported work-content burdens with each opening/closing WIP state; no zero-output run is removed. Track actual waste dispositions and independent outlet/species measurements; unresolved closure is investigated and disclosed, never assigned to invented species or reaction water. Retain original undivided records | kg | lot transfer and each period boundary | complete period plus provenance of opening burdens | same connected manufacture cohort | per 1 kg reference flow | state-resolved stock counts; transfer receipts; independent mass/element/species checks |
| cp_emission | manufacture | each elementary release | species and medium monitoring | species identity; medium; concentration and basis; integrated gas/liquid volume or actual rate/duration; temperature/pressure; capture; collected water; blanks; detection limits | Environmental owner retains full-period measured releases, control/capture performance and uncertainty, including failed/rework periods. Convert measured species at documented conditions before normalization; integrated volume is not multiplied by time again. General polymer or finish descriptions do not establish actual chemical species. Add a separate atomic card for every additional observed species/medium; no generic VOC/COD or unknown-water residual | kg | monitoring interval and period | complete matched period | actual manufacture releases | per 1 kg reference flow | calibration; lab methods; raw monitoring data; independent species evidence |
| cp_stock | manufacture | finished store handling and dispatch bridge | separate warehouse ledger | opening released stock kg and carried burdens; new-release receipt IDs; shipments and returns IDs/kg; closing released stock kg and burdens; storage duration; actual packing/handling/dispatch burdens; internal transfers | Warehouse owner records finished-stock opening/closing and carried burdens separately from production WIP and first-release Q. Preserve every actually included storage, pack-out, handling and dispatch service with lot attribution. Reconcile receipt/issue/return without treating reacceptance as new manufacture. Combining accounts cancels internal product transfers; collection retains all undivided values | kg; kWh; tonne-km | each movement and period boundary | matched cohort through disclosed store/dispatch interval | declared factory and any included stores/dispatch | per 1 kg reference flow | inventory counts; burden provenance; shipment/return IDs; service records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cohort_burden` | all inventory rows | For exchange e, A_e = opening-WIP carried burden_e + complete current-period burden_e - closing-WIP carried burden_e - separately assigned coproduct burden_e. Use state-resolved work content and lot links; preserve failures/rework. Physical waste outlet quantities remain measured quantities, not burden residuals. Add only the separately justified store/dispatch service share of this newly released cohort; carry other released-stock burdens in cp_stock. Cancel internal transfers before reporting | opening_WIP_burden_e; period_burden_e; closing_WIP_burden_e; coproduct_burden_e; cp_balance; cp_stock | A_e |  |
| `normalize_once` | all inventory rows | q_e = A_e / Q; Q is positive unique first quality-released packed net supplied-state yarn kg under cp_release. This is the single reporting division after raw unit conversion and cohort/WIP attribution; card amounts and protocol aggregation refer to this same operation, never a second division. Released reference output is 1 kg. If Q is zero, retain the full burdens and justified WIP/later-cohort carryover; do not create a per-kg result | A_e; Q; cp_release | q_e |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | reference and suppliers | Verify virgin PP, single-bundle flat drawn state, circular shape, colour, no twisting/texturing and no sewing/retail gate against actual orders/tests. Source catalogue maximum bobbin mass, dtex and typical polymer properties are not measured batch mass, density, yield or process energy | order/TDS; lot acceptance; supply records; native-limit disclosure |
| `measurement` | raw data and denominator | Independently measure yarn kg, tares, finish/moisture and line density/filament count. Declare instrument uncertainty, sampling and conditioning. Keep all raw numerators before the one normalization; no default yield, consumption, energy, density or regain | calibrations; assays; raw data; once-only calculation trail |
| `completeness` | period and stocks | Match actual full period, factory, route and cohort. Retain failed/zero-output/rework burdens, WIP opening/closing work content and finished-stock carryovers separately. Independently close physical and element ledgers without inventing species. Every applicable missing measurement/provider link is disclosed and resolved before claiming a complete dataset | cp_balance and cp_stock; source/assay/monitoring records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `scope_match` | reference flow | Require all declared qualifiers and actual order/TDS acceptance. Reject substitution of POY, DTY, twisted/plied yarn, sewing thread, retail packages, monofilament, tape or another polymer. Air intermingling alone does not imply bulk texturing or multiple yarns | `chemosvit-pp-2016`; `chemosvit-pp-list-2024` |
| `basis_and_stock` | inventory | Require Q > 0 unique new-release net kg and once-only A_e/Q after conversions; no period-ending finished stock added to Q output, no shipped-Q substitution and no new output from reacceptance. Reconcile full WIP/finished-stock kg and burden ledgers and cancel internal transfers. Flag missing failed/zero-output/rework or actually included service burdens |  |
| `chemistry_and_units` | mass utilities and emissions | Require separate whole-formulation procurement and constituent subledgers, independent yarn mass/linear density/tare/conditioning, physical and element checks, and independently supported species/reaction water. Reject density inferred from dtex, integrated-volume times duration, guessed reaction water or COD/residual-derived species. Measure additional applicable atomic exchanges before final dataset completeness |  |
| `native_and_evidence` | identity and downstream use | Preserve the broad native identity limitations and classification/wording debts in the reference card and normative context. Exact flow identity does not certify a supplier inventory, geography, emission factor or method approval. Retain source originals, actual supplier/measurement evidence and unresolved matching separately |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Mass-based input of the same flat drawn PP filament grade/state into subsequent textile conversion |
| allowed_use | Same declared virgin PP flat intermingled single-bundle industrial yarn with matched grade, colour, site, period, supplied-state kg and upstream links |
| excluded_use | Universal CPC coverage, POY/DTY/sewing/retail or plied yarn, other polymers, functional/recycled grades, cradle-to-gate without upstream completion, actual delivery claims based solely on production Q |
| required_metadata | All reference qualifiers; process/boundary; raw/cohort normalization; source/measurement/provider links; WIP and finished-stock burden provenance |
| required_quality_disclosure | Uncertainty, full-period coverage, mass/element/species closure, raw formulation accounting, native metadata debts, missing quantities/UUID/provider matches and excluded stages |
| update_trigger | Change in polymer origin, recipe, shape, draw/texturing/twist/ply state, acceptance, packaging, inventory gate, site, utilities, provider or source evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| chemosvit-pp-2016 | handbook | Chemosvit Fibrochem, Polypropylene Multifilament Yarn PROLEN Technical Information, June 2016, pp. 1–2; https://prolen.sk/wp-content/uploads/2020/01/Technical-Information-about-PP-Yarn.pdf | Granulate/masterbatch melt and drawn-flat H/HP branch, distinct textured/twisted branches, sorting/packing; descriptive portfolio only, not batch quantities or acceptance thresholds |
| chemosvit-pp-list-2024 | handbook | Chemosvit Fibrochem, PROLEN Yarns Product List and Functionalities, 03/2024 Issue 4, pp. 1–2; https://prolen.sk/wp-content/uploads/2024/04/Prolen%C2%AE-Yarns-Product-ListFunctionalities-2024-1.pdf | Industrial HP 330 dtex/66 full-circular option, FDY/intermingling identity, bobbin/PE bag/box/pallet wrap and storage; 6000 g is catalogue maximum only; TDS and lot tests needed; portfolio locations are not batch origin or delivery proof |
| lohia-pp-sdw | handbook | Lohia Corp, Multifilament – Spin-Draw-Wind Lines for PP Multifilament Yarn; https://www.lohiagroup.com/products/multifilament | Independent industrial PP FDY spinning/drawing and filament/intermingling control; integrated equipment capability only, not evidence for the selected separate-stage route, Chemosvit equipment, actual speed, energy or yield |
| goulston-filament-finish | handbook | Goulston Technologies, Filament Spin Finishes; https://www.goulston.com/fiber-filament.php | Topical filament finish and common aqueous-emulsion application/evaporation; qualitative only, not a selected PP supplier recipe, compatibility certificate, active fraction or dose |
| ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment - Detailed guidance, first edition March 2010, section 7.9.3, printed pp.257-258 (PDF pp.277-278); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation methodology only: determining physical causality, virtual subdivision and residual process-gate market value. No PP recipe, factor, fixed share, substitution credit or universal waste cutoff. |
