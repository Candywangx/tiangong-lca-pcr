---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.plastic-extruded-fired-clay-building-bricks
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Plastic-extruded fired-clay building brick manufacture

## 1. Scope and Applicability

This attributional method covers one declared grade of complete non-refractory unglazed clay building brick without applied engobe or surface coating. Start with actual unfired supplied raw materials and retain site crushing/screening/blending/ageing, water tempering/kneading, actual vacuum de-airing, plastic extrusion and cutting, loading/drying, gas-fired tunnel-kiln firing and controlled cooling, unloading, actual mechanical finishing, grading and required tests through unique first quality release. Include actual inbound haulage, controls, utilities, tool/refractory service, failed/zero-output runs, start/stop/idle/cleanup and rework; attribute later packing/FG services separately to original cohorts. This is a transparent technical synthesis, not one SKU/factory recipe or a single contemporary order record.

Exclude refractory silica/magnesia/aluminosilicate bricks, resin-bonded unfired goods, diatomaceous-earth insulation goods, cement/concrete/autoclaved blocks, glazed tableware, wall/floor ceramic tiles, roof tiles, pipes/special flue fittings, green bodies and mined clay as reference terminals. Applied glaze/engobe/water-repellent coatings, deliberate pore-former recipes, soft-mud moulding and dry pressing require renewed applicability assessment. Bought-fired-brick packing cannot replace complete manufacture. Source roof-tile and alternative-kiln examples are counterevidence, not transferable recipes, firing temperatures, heat demand, emissions, strength or life values.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.plastic-extruded-fired-clay-building-bricks |
| classification_refs | CPC 3.0 37350; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | One grade of complete unglazed plastic-extruded fired-clay building brick |
| excluded_products | Refractories; unfired resin-bonded bricks; concrete bricks; ceramic tiles; tableware; roof tiles; green bodies; mined clay |
| representative_product | Complete non-refractory clay building-brick grade at first quality release |
| production_route | Unfired incoming materials; complete feed preparation; water kneading/de-airing; extrusion/cutting; drying; gas-fired tunnel firing; cooling; finishing/tests |
| market_state | Complete manufactured fired brick with declared geometry/coring; packaging excluded; no installed functional-life equivalence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide complete building-brick units of one declared specification for downstream masonry |
| How much | 1 kg mass-equivalent of complete brick units |
| How well | Released against actual material/geometry/coring and quality-test specification; no universal class |
| How long or cycle | One unique first-release production cohort; disclose original-cohort service H separately; no masonry lifetime |
| reference_flow_link | finished_bricks |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fired brick `aedc2027-2154-4b0e-95fd-9baeb46d4153` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual clay deposit and whole supplied form; mineral composition and carbonate/organic carbon origin; free and structural water evidence; body recipe and actual separate additives; non-refractory building-brick terminal; plastic extrusion and cutting configuration; actual fired geometry and coring; unglazed and without applied engobe or surface coating; drying and gas-fired tunnel-kiln route; actual heat recovery and supplemental burner boundary; firing atmosphere and measured thermal history; actual finishing and quality test specification; actual strength and water absorption results; unique first quality release ID and cohort Q; calibrated net product mass and moisture basis; complete failed/idle/rework and WIP inherited vectors; actual supplier and every native flow restriction; all actual species and external destinations; asset service basis separate from physical stocks; packaging gross custody balances; original-cohort service horizon H and Qc; allocation purpose and source-specific evidence; no installation/use-life performance equivalence |

Declare every qualifier in dataset metadata, reference-flow comment or equivalent consumable context. Q is calibrated net mass at a declared moisture basis excluding packaging; complete-unit mass equivalence asserts no item weight, density, area or lifetime. The native manufactured Product family is factory production mix after moulding/firing/cooling, brick-firing route, without CAS or fixed formulation/geography/class. Distinguish its siliceous-earth taxonomy discrepancy from physical fields. Primary evidence restricts it to this complete non-refractory clay building-brick terminal; native identity proves no supplier quantity or performance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect complete-unit first-release Q using cp_release calibrated net weighing excluding packaging; no count/volume-derived guessed mass and no deduction of closing released FG. |
| native_numerator | all inventory rows | row-declared extensive property | row-declared native unit | Preserve each row native extensive quantity; kg rules do not apply to MJ/kWh/m3/t km. Integrate actual rates once and never re-integrate accumulated totals. |
| electricity_units | electricity; service_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain original kWh and multiply by exact unit conversion 3.6 to MJ; do not express electricity as mass. Native identity is CN grid-average consumption mix to user below 1 kV. |
| gas_state | natural_gas | Volume | m3 | Declare actual/standard state; independently measure carrier mass, density, composition and heat. Do not replace the mixture by methane CAS or infer density from secondary properties. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual mine-gate unfired clay supply; actual haulage and all site manufacture |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | CPC 3.0:37350; narrower complete clay building-brick route |
| recursive_input_rule | Record any same-category purchased brick used as tooling/grog by actual role and inherited burden without recursively duplicating manufacture or replacing the reference terminal. |
| upstream_dataset_requirement | Actual supplied forms, extraction/preparation, transport and utility provider data; identity UUIDs imply no quantities or provider compatibility |
| disclosure | First-release Q; separate raw/WIP/FG; all operating modes; per-flow physical gates; package/asset service; original-cohort H/Qc; actual missingness and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | Include actual clay receipt/haulage, storage, crushing/screening/blending/ageing, water tempering and kneading, vacuum de-airing where used, plastic extrusion/cutting, loading, drying, gas-fired tunnel firing/cooling, unloading, actual mechanical finishing and tests through first quality release. Sources describe routes, not one factory recipe. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_supply | each incoming product | Retain extraction and supplier preparation upstream for actual incoming clay and every other Product. Disclose mine-gate versus delivered supply, actual freight and actual on-site work; supplier crushing never removes real on-site crushing. Do not replace manufacturing with bought-fired-brick packing. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_manufacture_stock | manufacture | Carry an inherited burden vector for every exchange in opening/closing raw material, WIP at each physical stage and not-yet-assigned non-WIP material stores. Include all failures, zero-output runs, start/stop, hot hold, idle, cleanup and genuine rework. Bclose for manufacture excludes already-first-released FG; its manufacturing burden remains with Q. Physical mass stocks still include all FG. Independently measure each opening/closing raw/WIP/non-WIP physical quantity separately from its full inherited exchange vector. Distinguish gross receipts/pool entries before stock correction from already stock-adjusted consumption; retain corrections included and never correct the same raw stock twice. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_service | service; combined | Retain actual post-release packaging, storage, handling, shipping, returns, retesting and incremental rework over observed H, assigned to each original cohort Qc. Delivery/retest/re-release never creates new Q. Cancel the internal manufacture-to-service Q transfer once on consolidation; do not add Q and its closing FG as two production outputs. Historical opening FG retains original manufacture, not current-manufacture reassignment. Unobserved future service is disclosed. Actual post-release repair/regrinding/refiring requires documented governing manufacturer/specification permission, continued declared brick-grade/route applicability, actual added/removed parts/material and free/bound water, required post-work tests and acceptance or waste disposition. Original forming/reject recycling evidence is not permission to restore a failed released brick. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_atoms | all inventory rows | One card is one actual supplied material/formulation/article, one waste stream or one real environmental species/physical particulate stream. Whole formulations are purchased once; assay, carrier water and active content are subaccounts. Actual on-site formulation retains each purchased ingredient, energy and loss separately. Add individually identified real missing exchanges; no generic other bucket, hidden zero or inferred absence. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_species | manufacture; physical gates | Reconcile total physical mass and relevant C/H/O/N/S/Cl/F/mineral elements independently from actual species and reaction evidence. Measure free water, released/retained structural water, combustion reaction water, condensate and vapour separately. Ignition loss, COD, TOC, VOC, NOx, total metal and particle size do not identify molecular masses; one residual cannot solve two unknowns. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_energy | each utility | Keep electricity, whole fuel mixture, heat and carrier mass distinct. Record original extensive units and actual meter state; integrate only genuine rates. External steam/hot-water/returns require actual mass and thermodynamic states plus provider water/energy convention. Internal recovered heat and carrier transfers cancel; do not create a nonexistent boiler or duplicate a whole provider inventory with its attributes. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_pack | each packaging material; manufacture; service | For each material/design/ownership, opening empty + attached-WIP + attached-FG + reusable stock + purchases P + first independent external nonpurchase entries N_ext + packages received with supplies I + genuine external return received ER + X_in = corresponding closing stocks + packaging leaving on gross physical shipments + external return sent + waste + X_out. Separate every destination, moisture and attached residual. Internal reuse cancels, without another purchase, brick Q, automatic coproduct or credit. Physical custody totals are never reduced by economic allocation. When actual repair or moisture changes occur beyond other measured receipt/removal flow terms, include independently measured X_in and X_out on their respective incoming/outgoing sides. Identify each real added/removed material/component and water phase as a specific atomic exchange before dataset completion. Deduplicate ONLY against other flow terms, never opening/closing stocks: actual retained water/repair material remains in BOTH its real inflow and full closing wet physical mass, and actual removal remains in its real outflow and full opening stock. Material/water already inside a measured whole-article receipt or exit is counted there once, not again X. Independently reconcile dry matter/water, sources/phases/destinations and every inherited burden vector, without residual-fitting unknowns, assuming uptake/repair, dry wood/species or shrinking physical quantity by allocation. Supplier-included packaging burden is not purchased again. P is an actual paid acquisition of this whole packaging article, new or used, including a documented bundled-paid acquisition; N_ext is its first independent external borrowed, rented or entrusted whole-article receipt without a purchase of the article. A rental/service fee is not an article purchase. Classify each actual entry once: P and N_ext use the same material-specific independent-entry card with separate event subledgers, I uses its attached-supply card, and ER uses its return card. Supplier-included packaging attached to another supplied good stays I with one upstream burden owner; do not split out another P merely because the delivered supply price is bundled. ER requires evidence that this same identified item previously left this custody pool on S or EO, with linked owner, custodian, original cohort and prior outward event; a first independent loan without that history is N_ext, never ER, opening stock, internal reuse or X. Preserve for every exchange its complete prior V/A/provider vector, original native extensive amount/unit, whole-article/component inclusion, gate, state, phase, medium, period and original history. Unknown prior burden remains unknown, not zero; identify the actual provider convention before quantitative use. Keep full gross S, EO, W and stocks; count actual freight and incremental service once under original Qc/H, with original manufacture and supplier-included burden once. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_assets | each asset and component | Reconcile complete machine/kiln/car/die/refractory physical stock, new and used additions, repairs, removals, moisture and in-machine fluid independently from current service burden. Collect genuine service history and attributable demand; never prescribe fixed life or charge one whole asset per kg. Whole-asset components remain subaccounts unless separately purchased; actual replacements and spent parts each get their own exchange. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_output_gate | manufacture; service | Q is newly first quality-released net kg of complete conforming building bricks only, never dispatch net of returns, area, green ware or total fired charge. Net delivery would require a different method with gross G/R and original delivery-specific burden reversal D_rev plus independent changed mass/water/loss and incremental rework; do not substitute it into this first-release denominator. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete feed preparation through first quality release | required | All actual stages and modes | manufacturing | finished_bricks; unique first-release Q |
| service | Original released-cohort packaging and FG services | required | All real post-release events over observed H | original_cohort_service | original Qc; no new output Q |

Manufacture is a composite boundary with separate measured substeps: receipt/storage → crushing/screening and actual ageing/blending → water kneading/actual de-airing → extrusion/cutting → drying → setting/firing/cooling → unloading and actual finishing/grading/tests → first release. Preserve stage submeters, physical WIP states and per-exchange inherited vectors. Internal green/dry/unreleased-fired ware transfers are not additional reference production. Each card description together with Sections 5/7/8 is its complete applicability context. Conditional absence needs evidence. This is not a fixed recipe list; every real additional ingredient/component/service/species/destination needs an atomic row, never an other bucket.

### Process: Complete building-brick manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Unfired common clay for building brick (`clay`)

One actual purchased clay deposit grade delivered before site crushing, screening, ageing, blending and tempering. Record whole wet supply, mineralogy, free moisture, structural water, carbonates, organic carbon, sulfur, chlorine and fluorine independently; assay components are subaccounts, not additional purchases. Separate different delivered clays and provider preparation boundaries. Native natural clay mix at mining site, with hydrous aluminosilicate identity and no fixed deposit/geography, CAS or firing recipe. Link the actual mine-gate material and separately model transport and all site preparation; do not treat a finished purchased body as this feed.

- Selected flow: Clay `226972bf-eeed-4ec4-a22e-f227e582ca18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_material retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Quartz sand for brick body (`sand`)

Conditional actual separately purchased tempering sand. Retain mineral composition, grain distribution and wet supply; quartz assay is not another purchase. No sand dose is required by this PCR.

- Selected flow: Quartz sand for brick body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_material retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Crushed fired clay brick grog (`grog`)

Conditional externally supplied crushed fired clay brick temper. Distinguish from unfired clay, concrete aggregate and refractory grog. Internal crushed rejects cancel as transfers while crushing energy, loss and inherited burden remain.

- Selected flow: Crushed fired clay brick grog
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_material retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Liquid municipal process water (`process_water`)

Meter actual liquid water for tempering, washing and cooling by use. Match real supply geography and treatment; a Hong Kong Volume-reference tap-water row or its screening density does not establish another plant supply. Water within wet clay is a subaccount, not this purchase. Native treated industrial Process Water is a Mass-reference Product with no fixed geography, grade, CAS or treatment technology. Verify actual liquid supply and supplier treatment; internal recirculation is not a fresh purchase. Do not import the Hong Kong Volume-reference tap-water screening density.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_material retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Alternating current (`electricity`)

This Product identity is restricted to CN grid-average consumption mix delivered to user below 1 kV. Reference extensive property is Net calorific value in MJ; preserve raw kWh and use 3.6 MJ/kWh. Meter feed preparation, extrusion/vacuum/cutting, drying/kiln fans, cooling, finishing/testing and utilities including all failed and nonproductive modes. Other voltage/geography/generation requires separately qualified supply.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row single final quotient for its process in Section 8; cp_energy retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Gaseous pipeline natural gas mixture (`natural_gas`)

Whole delivered gas mixture for actual kiln and any supplemental dryer burners. Keep composition, actual/standard volume state, carrier mass, independent density and net heating value. A methane CAS with pressurised-CH4 aliases does not bind this mixture. Internal recovered kiln heat is a transfer, not another purchased fuel or automatic credit.

- Selected flow: Gaseous pipeline natural gas mixture
- Flow property / unit: Volume / m3
- Amount rule: Use this row single final quotient for its process in Section 8; cp_energy retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Externally purchased water steam (`steam`)

Only actual external steam for clay preparation or utilities: retain gross carrier kg, pressure, temperature, dryness and heat MJ at agreed reference state. One provider purchase, not duplicate water plus heat inventories. No steam system is assumed.

- Selected flow: Externally purchased water steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_energy retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Externally purchased liquid heating water (`hot_water`)

Only actual external hot-liquid water supply with measured carrier mass, supply/return temperature and enthalpy. Internal circulation cancels; no boiler is invented.

- Selected flow: Externally purchased liquid heating water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_energy retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Road freight transport service (`freight`)

Actual purchased inbound haulage, with shipment payload, distance, vehicle/load condition and empty-return treatment. Tonnes times kilometres are service, not additional brick mass. Quarry burdens remain upstream unless mining is truly performed inside the declared foreground.

- Selected flow: Road freight transport service
- Flow property / unit: Freight transport service / t km
- Amount rule: Use this row single final quotient for its process in Section 8; cp_transport retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Complete gas-fired tunnel kiln (`kiln`)

Track new/existing whole kiln physical stocks separately from attributable service burden and actual operating fuel. No fixed lifetime or one whole kiln per kg of brick.

- Selected flow: Complete gas-fired tunnel kiln
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Complete clay vacuum extruder (`extruder`)

Track actual machine additions, installed stocks, maintenance and retirements; separately retain operating electricity. Each actual purchased replacement part has its own identity and mass.

- Selected flow: Complete clay vacuum extruder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Complete chamber brick dryer (`dryer`)

Conditional actual chamber dryer construction and stock; a tunnel dryer needs its own specific row. Heat recovery and fans remain actual operations, not implied fixed asset burdens.

- Selected flow: Complete chamber brick dryer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Complete brick kiln car (`kiln_car`)

Actual car structure, refractory deck and any installed fluid are reconciled by component subaccounts. Do not purchase the deck twice if included in the whole car; separately purchased repairs are separate atomic exchanges.

- Selected flow: Complete brick kiln car
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Steel extrusion die for clay brick (`die`)

One actual steel die construction and configuration, with stocks, replacements, wear and disposal. Tool service attribution never scales down gross physical additions or waste.

- Selected flow: Steel extrusion die for clay brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Steel brick cutting wire (`cutting_wire`)

Record actual complete supplied cutting wire, new/spent stocks and replacement events; do not model raw steel again when a whole supplied wire is purchased.

- Selected flow: Steel brick cutting wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Aluminosilicate kiln lining brick (`lining`)

Only the actual refractory lining grade: composition, free/structural moisture, installed stock, new/used repairs and removals are separate. This consumable is not the non-refractory saleable output.

- Selected flow: Aluminosilicate kiln lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Mineral lubricating oil formulation (`lubricant`)

One whole actual supplied oil grade used for extrusion or maintenance. Assay is a subaccount; retain opening/closing in-machine oil, top-ups, leaks and recovered oil by destination. Do not assume all oil is burned.

- Selected flow: Mineral lubricating oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Polyester dust filter bag (`filter`)

One actual complete filter bag; captured mineral dust is distinct from filter polymer. Other actual filter construction needs its own row.

- Selected flow: Polyester dust filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_m retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_m`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Calcium hydroxide dry sorbent (`lime`)

Conditional actual dry flue-gas treatment sorbent. Whole supplied formulation once; moisture and active assay are subaccounts. Do not infer scrubber existence or removal efficiency from source diagrams.

- Selected flow: Calcium hydroxide dry sorbent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_material retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### Elementary flows

###### Molecular nitrogen in ambient intake air (`nitrogen_in`)

Actual N2 intake for combustion/ventilation, with gas composition and state; not purchased nitrogen or total nitrogen as N. No aggregate air input is added to its species. Native Elementary molecular N2, CAS 7727-37-9, Resources from air, Mass/kg. Use only actual measured gaseous molecular N2 at this inlet/outlet; exclude industrial Product gas, liquid/ion/isotope-specific aliases and total-nitrogen/NOx indicators. Keep independently measured gross inlet/outlet and actual conversion separate, without an extra aggregate air exchange or assumed composition/density.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Molecular oxygen in ambient intake air (`oxygen_in`)

Actual O2 intake, measured independently of combustion consumption and exhaust. Do not infer one gas species from an NOx indicator. Native Elementary molecular O2, CAS 7782-44-7, Resources from air, Mass/kg. Use only actual measured gaseous molecular O2 at this inlet/outlet; exclude industrial Product gas, liquid/ion/isotope-specific aliases and total-nitrogen/NOx indicators. Keep independently measured gross inlet/outlet and actual conversion separate, without an extra aggregate air exchange or assumed composition/density.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Natural non-radioactive argon in intake air (`argon_in`)

Actual natural Ar in incoming air; no radioactive-isotope gas surrogate.

- Selected flow: Natural non-radioactive argon in intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Water vapour in intake air (`humidity_in`)

Actual gaseous H2O intake from measured humidity/dewpoint and gas-state records; separate from purchased liquid water and structural clay water.

- Selected flow: Water vapour in intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Atmospheric carbon dioxide in intake air (`ambient_co2`)

Record actual incoming atmospheric CO2 separately from newly generated fossil/mineral/biogenic carbon.

- Selected flow: Atmospheric carbon dioxide in intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

#### Outputs

##### Product flows

###### Fired brick (`finished_bricks`)

One complete non-refractory unglazed clay building brick grade after plastic extrusion, cutting, drying, firing, cooling, actual finishing and required quality tests. Native identity is a manufactured Product after moulding/firing/cooling, no CAS, fixed geography or recipe; it is not an unfired body, refractory brick, roof tile or concrete brick. Restrict this physically compatible family to the stated terminal and actual material/specification. Q is unique first quality-released net kg including its declared moisture and excluding every packaging item. Native Product is factory production mix, brick firing route, after moulding/firing/cooling; synonyms are fired/kiln-fired brick, without CAS, fixed mineral formulation, geography, performance class or mass per item. Its siliceous-earth classification is a taxonomy discrepancy: physical fields do not specify diatomite or a refractory composition. Use only the primary-qualified complete clay building-brick terminal; never infer the route or suitability from classification alone.

- Selected flow: Fired brick `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Liquid condensate returned to steam supplier (`condensate`)

Only actual external Product return at measured mass, temperature, pressure and agreed enthalpy reference. Never assume environmental discharge, a second water purchase or automatic credit.

- Selected flow: Liquid condensate returned to steam supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_energy retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Liquid heating water returned to supplier (`heatwater_return`)

Only actual external hot-water carrier return; internal heat-exchanger circulation cancels. Keep supplier water/energy convention explicit.

- Selected flow: Liquid heating water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_energy retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### Waste flows

###### Wet unfired clay brick reject (`unfired_reject`)

Actual external green reject after collection of internal trim/rework transfers; retain measured moisture and inherited per-exchange burden. Internal return is not a coproduct or new raw purchase.

- Selected flow: Wet unfired clay brick reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Rejected fired clay brick (`fired_reject`)

Actual rejected fired ware after kiln/cooling/finishing, including failed and zero-output batches. Sale as a distinct qualified coproduct requires explicit output and allocation evidence, not an automatic credit.

- Selected flow: Rejected fired clay brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Captured unfired clay dust (`captured_clay`)

One actual collected raw-preparation dust stream, moisture and composition measured. Internal reuse cancels as transfer; external disposal stays waste. Do not also emit captured material to air.

- Selected flow: Captured unfired clay dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Captured fired-clay grinding dust (`captured_fired`)

Only actual fired-brick calibration/finishing dust. Keep this phase and chemistry separate from unfired clay dust and refractory wear.

- Selected flow: Captured fired-clay grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Clay-bearing wastewater treatment sludge (`sludge`)

One actual dewatered clay sludge stream. Retain gross wet mass, independent dry solids, composition and water; do not balance unknown solids and water with one residual.

- Selected flow: Clay-bearing wastewater treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Clay-process liquid wastewater (`wastewater`)

One actual transferred process wastewater mixture with measured volume and independent density/composition; COD and total elements are indicators, not invented chemical exchanges. Separate different destinations and real streams.

- Selected flow: Clay-process liquid wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Spent calcium hydroxide flue-gas sorbent (`spent_sorbent`)

Only actual spent sorbent mixture: retain reacted/unreacted phases, captured species, moisture and destination. This is a measured waste mixture, not the virgin reagent identity.

- Selected flow: Spent calcium hydroxide flue-gas sorbent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Spent polyester dust filter bag (`spent_filter`)

Actual spent bag polymer after separating attached dust subaccount; avoid duplicating whole loaded bag and its captured dust.

- Selected flow: Spent polyester dust filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Spent mineral lubricating oil (`spent_oil`)

Actual collected oil destination, including water/contamination and retained in-machine stock. Leaks to environment require separate actual substance/compartment rows.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Spent aluminosilicate kiln lining brick (`spent_lining`)

Actual removed refractory composition, water and entrained fired-clay deposits separately measured. Physical removal is not multiplied by the service allocation share.

- Selected flow: Spent aluminosilicate kiln lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Spent steel cutting wire (`steel_scrap`)

Actual retired cutting wire, separate from discarded dies or whole machines. Add each actual other part as its own waste row with component and service records.

- Selected flow: Spent steel cutting wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_waste retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### Elementary flows

###### Carbon dioxide from fossil fuel oxidation (`co2_fossil`)

Actual molecular CO2 to current air from fossil fuel and actual fossil lubricant carbon; exclude atmospheric passthrough and mineral-carbonate CO2.

- Selected flow: Carbon dioxide from fossil fuel oxidation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Carbon dioxide from mineral carbonate decomposition (`co2_mineral`)

Actual carbonate-derived CO2 from independently measured mineral carbon and reaction/retention evidence; not all ignition loss and not another fossil-fuel emission.

- Selected flow: Carbon dioxide from mineral carbonate decomposition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Carbon dioxide from biogenic feed carbon oxidation (`co2_biogenic`)

Only independently substantiated actual biogenic carbon; clay organic carbon is not automatically biogenic. No assumed pore former or credit.

- Selected flow: Carbon dioxide from biogenic feed carbon oxidation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Molecular nitrogen in exhaust air (`nitrogen_out`)

Gross actual N2 exhaust including passthrough, distinct from NO, NO2 and total N indicators. Ambient passthrough is reconciled separately for impact reporting. Native Elementary molecular N2, CAS 7727-37-9, Emissions to air, unspecified, Mass/kg. Use only actual measured gaseous molecular N2 at this inlet/outlet; exclude industrial Product gas, liquid/ion/isotope-specific aliases and total-nitrogen/NOx indicators. Keep independently measured gross inlet/outlet and actual conversion separate, without an extra aggregate air exchange or assumed composition/density.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Molecular oxygen in exhaust air (`oxygen_out`)

Measured residual molecular O2 with dry/wet gas-state basis; do not infer from theoretical total air alone. Native Elementary molecular O2, CAS 7782-44-7, Emissions to air, unspecified, Mass/kg. Use only actual measured gaseous molecular O2 at this inlet/outlet; exclude industrial Product gas, liquid/ion/isotope-specific aliases and total-nitrogen/NOx indicators. Keep independently measured gross inlet/outlet and actual conversion separate, without an extra aggregate air exchange or assumed composition/density.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Natural non-radioactive argon in exhaust air (`argon_out`)

Actual Ar passthrough at measured conditions; no radioactive isotope substitution.

- Selected flow: Natural non-radioactive argon in exhaust air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Unreacted atmospheric carbon dioxide passthrough (`ambient_co2_out`)

Matched actual atmospheric CO2 intake and output at the physical gate, separate from newly generated CO2 source accounts. Do not characterize it as new fossil emission.

- Selected flow: Unreacted atmospheric carbon dioxide passthrough
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Water vapour in dryer and kiln exhaust (`vapour_out`)

Actual gaseous H2O: independently distinguish free feed water, ambient humidity, released structural water and combustion reaction water. Retained/free/liquid condensate states stay separate. One residual cannot fit both reaction extent and unknown water.

- Selected flow: Water vapour in dryer and kiln exhaust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Carbon monoxide to current air (`co`)

Actual molecular CO mass and stack/fugitive destination, not CO2 equivalent or a generic incomplete-combustion total.

- Selected flow: Carbon monoxide to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Nitrogen monoxide to current air (`no`)

Only actual species-resolved NO; NOx expressed as NO2 equivalent does not prove NO mass. Preserve analytical detection limit and destination.

- Selected flow: Nitrogen monoxide to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Nitrogen dioxide to current air (`no2`)

Only independently resolved molecular NO2, no automatic splitting of total NOx.

- Selected flow: Nitrogen dioxide to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Sulfur dioxide to current air (`so2`)

Measured SO2 with raw sulfur, fuel sulfur and retained mineral phases reconciled; SOx indicator is not this exchange amount.

- Selected flow: Sulfur dioxide to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Sulfur trioxide to current air (`so3`)

Only actual SO3 evidence distinct from SO2 and sulfate aerosol; no allocation of total sulfur by arbitrary shares.

- Selected flow: Sulfur trioxide to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Hydrogen fluoride gas to current air (`hf`)

Only resolved gaseous HF; total F, fluoride particulate or another fluorine species cannot be relabelled HF.

- Selected flow: Hydrogen fluoride gas to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Hydrogen chloride gas to current air (`hcl`)

Only measured gas-state HCl, not aqueous hydrochloric acid or total chloride. Keep moisture and sampling state.

- Selected flow: Hydrogen chloride gas to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Methane to current air (`methane`)

Only actual CH4 from incomplete combustion, feed organics or leak evidence. Whole fuel gas purchase is not duplicated as methane purchase.

- Selected flow: Methane to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Ethane to current air (`ethane`)

Only independently measured actual C2H6; TOC/VOC values do not establish this molecule or its mass.

- Selected flow: Ethane to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Uncaptured unfired clay particulate to air (`raw_dust_air`)

One actual uncaptured mineral particulate stream with measured composition, destination and nonoverlapping particle fractions. PM2.5 is nested in PM10; do not sum overlapping totals. Do not infer a pure chemical from particle size.

- Selected flow: Uncaptured unfired clay particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Uncaptured fired-clay particulate to air (`fired_dust_air`)

Only actual kiln/finishing fired-clay particulate, separate from captured dust, raw-clay dust and refractory wear. Add measured metal-bearing species as individual real exchanges, never infer them from total metal.

- Selected flow: Uncaptured fired-clay particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_species retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

### Process: Original-cohort packaging and FG services (`service`)

#### Inputs

##### Product flows

###### Reusable wooden brick transport pallet (`pallet`)

This material-specific independent-entry packaging card records actual paid whole-article acquisition P (new or used, including documented bundled-paid acquisition) and separately tagged first independent external nonpurchase receipt N_ext (borrowed, rented or entrusted article, not an article purchase). Each event belongs to exactly one subledger; a rental/service fee does not convert N_ext into P. Exclude I, genuine same-item ER, opening stock and internal reuse. Record each complete wet article once, with its own gross native V and complete prior A/provider/history vector under b_pack and cp_pack; do not add P and N_ext for the same event. The physical custody amount is a gross-leg disclosure, separate from actual allocated supply/service burden. One actual whole wooden pallet, owned/pool convention and dry/wet mass stated. Track new purchase, external return received, attached stock, shipment, external return and waste. Internal reuse does not create another purchase. Native whole Wooden pallets Product is a lumber-mill production mix made of boards/slats, with Mass reference, no CAS, dimensions, fixed geography or service life. Verify one actual assembled wood pallet and its repair materials. Its active electricity classification is inconsistent with physical identity and preserved wood-packaging source classification; no electricity or raw-board substitution is allowed.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Polypropylene brick strapping band (`strap`)

This material-specific independent-entry packaging card records actual paid whole-article acquisition P (new or used, including documented bundled-paid acquisition) and separately tagged first independent external nonpurchase receipt N_ext (borrowed, rented or entrusted article, not an article purchase). Each event belongs to exactly one subledger; a rental/service fee does not convert N_ext into P. Exclude I, genuine same-item ER, opening stock and internal reuse. Record each complete wet article once, with its own gross native V and complete prior A/provider/history vector under b_pack and cp_pack; do not add P and N_ext for the same event. The physical custody amount is a gross-leg disclosure, separate from actual allocated supply/service burden. One actual supplied PP band, complete grade and mass per observed pack. Do not count resin pellets again; other real strap materials need separate rows.

- Selected flow: Polypropylene brick strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Polyethylene brick wrapping film (`film`)

This material-specific independent-entry packaging card records actual paid whole-article acquisition P (new or used, including documented bundled-paid acquisition) and separately tagged first independent external nonpurchase receipt N_ext (borrowed, rented or entrusted article, not an article purchase). Each event belongs to exactly one subledger; a rental/service fee does not convert N_ext into P. Exclude I, genuine same-item ER, opening stock and internal reuse. Record each complete wet article once, with its own gross native V and complete prior A/provider/history vector under b_pack and cp_pack; do not add P and N_ext for the same event. The physical custody amount is a gross-leg disclosure, separate from actual allocated supply/service burden. One actual PE film grade, mass and observed unit coverage, not an area-to-mass assumption or generic packaging total. Native whole PE film Product at plant, CAS9002-88-4, with Mass reference and no fixed thickness, grade, recycling share or geography. Its comment contrasts PET as a competing polyester; PET is excluded here. The luggage classification is a taxonomy discrepancy, not evidence that this is a bag or finished luggage. Qualify the actual single PE wrapping film and measured mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Corrugated cardboard brick separator pad (`pad`)

This material-specific independent-entry packaging card records actual paid whole-article acquisition P (new or used, including documented bundled-paid acquisition) and separately tagged first independent external nonpurchase receipt N_ext (borrowed, rented or entrusted article, not an article purchase). Each event belongs to exactly one subledger; a rental/service fee does not convert N_ext into P. Exclude I, genuine same-item ER, opening stock and internal reuse. Record each complete wet article once, with its own gross native V and complete prior A/provider/history vector under b_pack and cp_pack; do not add P and N_ext for the same event. The physical custody amount is a gross-leg disclosure, separate from actual allocated supply/service burden. Conditional actual single corrugated pad construction and moisture. Do not adopt a fixed recycled-fibre recipe without matching supplier evidence.

- Selected flow: Corrugated cardboard brick separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Alternating current (`service_electricity`)

Only incremental post-first-release storage, packing, handling, loading, retesting and return/rework electricity, attributed to original released cohort Q over the stated observed service horizon. Same native restriction as manufacturing: CN grid-average consumption mix to user below 1 kV, Net calorific value/MJ with raw kWh times 3.6. Closing FG manufacturing burden is not removed from first-release Q.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row single final quotient for its process in Section 8; cp_service retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Complete electric brick handling forklift (`forklift`)

Actual handling asset, service and physical stock separate. Installed battery is a whole-asset subaccount unless actually purchased as a replacement; real battery, tyre and fluid replacements each require distinct exchanges.

- Selected flow: Complete electric brick handling forklift
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_asset_s retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_s`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Inbound attached wooden transport pallet (`pallet_inbound`)

Actual packaging received attached to a separately supplied good is I, disjoint from independent P/N_ext and genuine same-item ER. A bundled delivered price does not make supplier-included I a second paid packaging acquisition. Preserve its gross native receipt and complete prior vector/history even when the original provider already includes its burden; keep that provider burden once, with no second packaging purchase. One actual whole wooden pallet, owned/pool convention and dry/wet mass stated. Track new purchase, external return received, attached stock, shipment, external return and waste. Internal reuse does not create another purchase. Native whole Wooden pallets Product is a lumber-mill production mix made of boards/slats, with Mass reference, no CAS, dimensions, fixed geography or service life. Verify one actual assembled wood pallet and its repair materials. Its active electricity classification is inconsistent with physical identity and preserved wood-packaging source classification; no electricity or raw-board substitution is allowed. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Externally returned received wooden transport pallet (`pallet_return_received`)

Actual intact packaging returned externally into this custody pool is ER only with evidence of the same identified item previously leaving on S or EO, linked prior outward event, owner/custodian and original cohort. Preserve the complete prior V/A/provider/native-unit/whole-component/gate/state/phase/medium/period/history vector, actual state and incremental service; unknown prior burden is not zero. First independent nonpurchase entry without that prior outward history is N_ext on this material independent-entry card, never ER. Neither event is internal reuse or a negative/new purchase. One actual whole wooden pallet, owned/pool convention and dry/wet mass stated. Track new purchase, external return received, attached stock, shipment, external return and waste. Internal reuse does not create another purchase. Native whole Wooden pallets Product is a lumber-mill production mix made of boards/slats, with Mass reference, no CAS, dimensions, fixed geography or service life. Verify one actual assembled wood pallet and its repair materials. Its active electricity classification is inconsistent with physical identity and preserved wood-packaging source classification; no electricity or raw-board substitution is allowed. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Inbound attached polypropylene strapping band (`strap_inbound`)

Actual packaging received attached to a separately supplied good is I, disjoint from independent P/N_ext and genuine same-item ER. A bundled delivered price does not make supplier-included I a second paid packaging acquisition. Preserve its gross native receipt and complete prior vector/history even when the original provider already includes its burden; keep that provider burden once, with no second packaging purchase. One actual supplied PP band, complete grade and mass per observed pack. Do not count resin pellets again; other real strap materials need separate rows. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Actual polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Externally returned received polypropylene strapping band (`strap_return_received`)

Actual intact packaging returned externally into this custody pool is ER only with evidence of the same identified item previously leaving on S or EO, linked prior outward event, owner/custodian and original cohort. Preserve the complete prior V/A/provider/native-unit/whole-component/gate/state/phase/medium/period/history vector, actual state and incremental service; unknown prior burden is not zero. First independent nonpurchase entry without that prior outward history is N_ext on this material independent-entry card, never ER. Neither event is internal reuse or a negative/new purchase. One actual supplied PP band, complete grade and mass per observed pack. Do not count resin pellets again; other real strap materials need separate rows. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Actual polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Inbound attached polyethylene wrapping film (`film_inbound`)

Actual packaging received attached to a separately supplied good is I, disjoint from independent P/N_ext and genuine same-item ER. A bundled delivered price does not make supplier-included I a second paid packaging acquisition. Preserve its gross native receipt and complete prior vector/history even when the original provider already includes its burden; keep that provider burden once, with no second packaging purchase. One actual PE film grade, mass and observed unit coverage, not an area-to-mass assumption or generic packaging total. Native whole PE film Product at plant, CAS9002-88-4, with Mass reference and no fixed thickness, grade, recycling share or geography. Its comment contrasts PET as a competing polyester; PET is excluded here. The luggage classification is a taxonomy discrepancy, not evidence that this is a bag or finished luggage. Qualify the actual single PE wrapping film and measured mass. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Externally returned received polyethylene wrapping film (`film_return_received`)

Actual intact packaging returned externally into this custody pool is ER only with evidence of the same identified item previously leaving on S or EO, linked prior outward event, owner/custodian and original cohort. Preserve the complete prior V/A/provider/native-unit/whole-component/gate/state/phase/medium/period/history vector, actual state and incremental service; unknown prior burden is not zero. First independent nonpurchase entry without that prior outward history is N_ext on this material independent-entry card, never ER. Neither event is internal reuse or a negative/new purchase. One actual PE film grade, mass and observed unit coverage, not an area-to-mass assumption or generic packaging total. Native whole PE film Product at plant, CAS9002-88-4, with Mass reference and no fixed thickness, grade, recycling share or geography. Its comment contrasts PET as a competing polyester; PET is excluded here. The luggage classification is a taxonomy discrepancy, not evidence that this is a bag or finished luggage. Qualify the actual single PE wrapping film and measured mass. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Inbound attached corrugated cardboard separator pad (`pad_inbound`)

Actual packaging received attached to a separately supplied good is I, disjoint from independent P/N_ext and genuine same-item ER. A bundled delivered price does not make supplier-included I a second paid packaging acquisition. Preserve its gross native receipt and complete prior vector/history even when the original provider already includes its burden; keep that provider burden once, with no second packaging purchase. Conditional actual single corrugated pad construction and moisture. Do not adopt a fixed recycled-fibre recipe without matching supplier evidence. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Actual corrugated cardboard separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Externally returned received corrugated cardboard separator pad (`pad_return_received`)

Actual intact packaging returned externally into this custody pool is ER only with evidence of the same identified item previously leaving on S or EO, linked prior outward event, owner/custodian and original cohort. Preserve the complete prior V/A/provider/native-unit/whole-component/gate/state/phase/medium/period/history vector, actual state and incremental service; unknown prior burden is not zero. First independent nonpurchase entry without that prior outward history is N_ext on this material independent-entry card, never ER. Neither event is internal reuse or a negative/new purchase. Conditional actual single corrugated pad construction and moisture. Do not adopt a fixed recycled-fibre recipe without matching supplier evidence. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Actual corrugated cardboard separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Actual separately purchased sawn pallet repair board (`pallet_repair_board`)

Conditional only for actual permitted packaging repair/cleaning within original cohort Qc and observed H; no operation is presumed. Require governing maker/spec permission, continued configuration, actual additions/removals, post-work checks and recorded acceptance or disposal. Repair-held FG or disjoint repair WIP has one custodian. One actual sawn wood board with measured species, treatment, dimensions and moisture. It is not a complete new pallet, fibreboard, sawdust or a guessed dry/green hardwood grade. Qualify its actual supplied state and upstream provider before binding; any separate real fastener, adhesive or coating needs its own atomic row. Deduplicate this actual material/water leg only against another corresponding same-side flow term; never cancel it against stocks, an opposite-direction flow or a merely existing card. Actual retained influx and full measured closing wet stock both remain. Whole wet P/I enters once, without duplicate X or supplier burden.

- Selected flow: Actual separately purchased sawn pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Actual purchased liquid tap water for packaging work (`pallet_repair_water`)

Conditional only for actual permitted packaging repair/cleaning within original cohort Qc and observed H; no operation is presumed. Require governing maker/spec permission, continued configuration, actual additions/removals, post-work checks and recorded acceptance or disposal. Repair-held FG or disjoint repair WIP has one custodian. Native Product is treated municipal tap water, ready for industrial or direct use, with no fixed geography or treatment technology. Use only actual matching potable-quality liquid supply and one supplier boundary. Mass/kg is the reference; the secondary Volume coefficient is not a measured site density. Carried water in an already measured wet package, internal recirculation and atmospheric uptake are not another purchase. Deduplicate this actual material/water leg only against another corresponding same-side flow term; never cancel it against stocks, an opposite-direction flow or a merely existing card. Actual retained influx and full measured closing wet stock both remain. Whole wet P/I enters once, without duplicate X or supplier burden.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### Elementary flows

###### Actual atmospheric water-vapour uptake by packaging (`pack_humidity_in`)

Conditional on actual packaging moisture exchange during observed storage/handling or actual repair/cleaning within original cohort Qc and observed H; no uptake, release or operation is presumed. For actual repair/cleaning work require governing maker/spec permission, continued configuration, actual additions/removals, post-work checks and recorded acceptance or disposal. Repair-held FG or disjoint repair WIP has one custodian. Only independently measured ordinary atmospheric H2O vapour entering this package boundary, not purchased liquid, rain, emitted vapour, emergy or water-equivalent indicator. Preserve actual vapour phase and gross kg H2O independently from dry board mass; one residual cannot determine both unknowns. No air fraction, density or uptake is assumed. The unresolved resource identity must match actual phase/type and native extensive property before binding. Deduplicate this actual material/water leg only against another corresponding same-side flow term; never cancel it against stocks, an opposite-direction flow or a merely existing card. Actual retained influx and full measured closing wet stock both remain. Whole wet P/I enters once, without duplicate X or supplier burden.

- Selected flow: Actual atmospheric water-vapour uptake by packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

#### Outputs

##### Product flows

###### wooden transport pallet accompanying gross brick dispatch (`pallet_out`)

Actual packaging accompanying every gross physical brick dispatch S only, including repeated shipments. External return sent EO is a different card; external return received ER is a different positive receipt. Internal transfers cancel. Retain actual moisture, attached residuals, ownership and destination, without new brick Q, repeated provider burden or economic scaling. One actual whole wooden pallet, owned/pool convention and dry/wet mass stated. Track new purchase, external return received, attached stock, shipment, external return and waste. Internal reuse does not create another purchase. Native whole Wooden pallets Product is a lumber-mill production mix made of boards/slats, with Mass reference, no CAS, dimensions, fixed geography or service life. Verify one actual assembled wood pallet and its repair materials. Its active electricity classification is inconsistent with physical identity and preserved wood-packaging source classification; no electricity or raw-board substitution is allowed.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### polypropylene strapping band accompanying gross brick dispatch (`strap_out`)

Actual packaging accompanying every gross physical brick dispatch S only, including repeated shipments. External return sent EO is a different card; external return received ER is a different positive receipt. Internal transfers cancel. Retain actual moisture, attached residuals, ownership and destination, without new brick Q, repeated provider burden or economic scaling.

- Selected flow: polypropylene strapping band accompanying gross brick dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### polyethylene wrapping film accompanying gross brick dispatch (`film_out`)

Actual packaging accompanying every gross physical brick dispatch S only, including repeated shipments. External return sent EO is a different card; external return received ER is a different positive receipt. Internal transfers cancel. Retain actual moisture, attached residuals, ownership and destination, without new brick Q, repeated provider burden or economic scaling. One actual PE film grade, mass and observed unit coverage, not an area-to-mass assumption or generic packaging total. Native whole PE film Product at plant, CAS9002-88-4, with Mass reference and no fixed thickness, grade, recycling share or geography. Its comment contrasts PET as a competing polyester; PET is excluded here. The luggage classification is a taxonomy discrepancy, not evidence that this is a bag or finished luggage. Qualify the actual single PE wrapping film and measured mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### corrugated cardboard separator pad accompanying gross brick dispatch (`pad_out`)

Actual packaging accompanying every gross physical brick dispatch S only, including repeated shipments. External return sent EO is a different card; external return received ER is a different positive receipt. Internal transfers cancel. Retain actual moisture, attached residuals, ownership and destination, without new brick Q, repeated provider burden or economic scaling.

- Selected flow: corrugated cardboard separator pad accompanying gross brick dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### External return sent wooden transport pallet (`pallet_external_return`)

Actual packaging returned externally to its supplier or pool. Keep its gross physical amount and distinct destination; this is not packaging accompanying product dispatch, internal reuse or an automatic coproduct/credit. One actual whole wooden pallet, owned/pool convention and dry/wet mass stated. Track new purchase, external return received, attached stock, shipment, external return and waste. Internal reuse does not create another purchase. Native whole Wooden pallets Product is a lumber-mill production mix made of boards/slats, with Mass reference, no CAS, dimensions, fixed geography or service life. Verify one actual assembled wood pallet and its repair materials. Its active electricity classification is inconsistent with physical identity and preserved wood-packaging source classification; no electricity or raw-board substitution is allowed. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### External return sent polypropylene strapping band (`strap_external_return`)

Actual packaging returned externally to its supplier or pool. Keep its gross physical amount and distinct destination; this is not packaging accompanying product dispatch, internal reuse or an automatic coproduct/credit. One actual supplied PP band, complete grade and mass per observed pack. Do not count resin pellets again; other real strap materials need separate rows. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Actual polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### External return sent polyethylene wrapping film (`film_external_return`)

Actual packaging returned externally to its supplier or pool. Keep its gross physical amount and distinct destination; this is not packaging accompanying product dispatch, internal reuse or an automatic coproduct/credit. One actual PE film grade, mass and observed unit coverage, not an area-to-mass assumption or generic packaging total. Native whole PE film Product at plant, CAS9002-88-4, with Mass reference and no fixed thickness, grade, recycling share or geography. Its comment contrasts PET as a competing polyester; PET is excluded here. The luggage classification is a taxonomy discrepancy, not evidence that this is a bag or finished luggage. Qualify the actual single PE wrapping film and measured mass. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### External return sent corrugated cardboard separator pad (`pad_external_return`)

Actual packaging returned externally to its supplier or pool. Keep its gross physical amount and distinct destination; this is not packaging accompanying product dispatch, internal reuse or an automatic coproduct/credit. Conditional actual single corrugated pad construction and moisture. Do not adopt a fixed recycled-fibre recipe without matching supplier evidence. Reconcile this conditional leg separately under P/N_ext/I/ER/S/EO/W, disjoint empty/attached-WIP/attached-FG/reusable stocks, actual cohort Qc/H and the single gross V/Qc disclosure. Damaged waste requires a separately qualified actual waste identity.

- Selected flow: Actual corrugated cardboard separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### Waste flows

###### Waste wooden transport pallet (`pallet_waste`)

Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Waste polypropylene strapping band (`strap_waste`)

Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting.

- Selected flow: Waste polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Waste polyethylene wrapping film (`film_waste`)

Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Waste corrugated cardboard separator pad (`pad_waste`)

Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting.

- Selected flow: Waste corrugated cardboard separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Actual separately removed waste pallet board (`removed_pallet_board`)

Conditional only for actual permitted packaging repair/cleaning within original cohort Qc and observed H; no operation is presumed. Require governing maker/spec permission, continued configuration, actual additions/removals, post-work checks and recorded acceptance or disposal. Repair-held FG or disjoint repair WIP has one custodian. Native Waste flow is wood waste at plant from wood products including packaging, Mass/kg, without a fixed species, treatment, contamination grade or receiver. Its agglomerated-waste taxonomy is a discrepancy, not a physical briquette requirement; use only the actual separately removed wood board stream after matching coatings, preservatives and hazards. Do not substitute complete mixed municipal waste, sawdust, bark, a new Product board or a fixed landfill treatment. No recycling share, energy value or credit is inferred from generic commentary. Use only when this separately measured board stream is not already counted in the whole-pallet W removal; otherwise retain it as that same W event subaccount without another waste or treatment burden. No ordinary sale/export subtracts caused manufacture/treatment burden. Deduplicate this actual material/water leg only against another corresponding same-side flow term; never cancel it against stocks, an opposite-direction flow or a merely existing card. Actual retained influx and full measured closing wet stock both remain. Whole wet P/I enters once, without duplicate X or supplier burden.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### Actual separately collected liquid packaging-work wastewater (`pack_repair_wastewater`)

Conditional only for actual permitted packaging repair/cleaning within original cohort Qc and observed H; no operation is presumed. Require governing maker/spec permission, continued configuration, actual additions/removals, post-work checks and recorded acceptance or disposal. Repair-held FG or disjoint repair WIP has one custodian. One actual aqueous wastewater stream with independently measured liquid mass, wood fines, coating/preservative contamination and destination. It is not alkaline liquor of a fixed concentration, dry wood waste, water to river or an unspecified treatment service. Solids/water and provider treatment ownership are reconciled without a guessed composition or credit. Deduplicate this actual material/water leg only against another corresponding same-side flow term; never cancel it against stocks, an opposite-direction flow or a merely existing card. Actual retained influx and full measured closing wet stock both remain. Whole wet P/I enters once, without duplicate X or supplier burden.

- Selected flow: Actual separately collected liquid packaging-work wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### Elementary flows

###### Actual packaging water vapour to current air (`pack_water_vapour_out`)

Conditional on actual packaging moisture exchange during observed storage/handling or actual repair/cleaning within original cohort Qc and observed H; no uptake, release or operation is presumed. For actual repair/cleaning work require governing maker/spec permission, continued configuration, actual additions/removals, post-work checks and recorded acceptance or disposal. Repair-held FG or disjoint repair WIP has one custodian. Native canonical identity is ordinary molecular water vapour CAS7732-18-5, Elementary emission to current unspecified air, Mass/kg. Use actual independently speciated vapour and the matching receiving compartment only; liquid aerosol, ice, heavy/tritiated water and ether aliases are not adopted. A known different air subcompartment needs its matching identity. No humidity fraction, density, evaporation yield or gas conversion is assumed. Deduplicate this actual material/water leg only against another corresponding same-side flow term; never cancel it against stocks, an opposite-direction flow or a merely existing card. Actual retained influx and full measured closing wet stock both remain. Whole wet P/I enters once, without duplicate X or supplier burden.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row single final quotient for its process in Section 8; cp_pack retains undivided raw records, without another quotient.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all assigned loads | Use this attributional inventory only where its allocation context and goal/scope justify allocation. The industrial route references do not establish LCA allocation. Do not impose substitution, avoided-production credit or a fixed allocation ratio. | `jrc-ilcd-detailed-2010` |
| a_subdivide | each exchange | First assign dedicated stages, meters and actual material/energy demands exclusively; then use documented subdivision or feasible virtual subdivision. A shared kiln does not make all clay, heat, emissions, tooling or downstream services one common burden. | `jrc-ilcd-detailed-2010` |
| a_causality | each remaining joint exchange | For genuinely remaining joint exchange i, establish the determining physical causal relationship to actual products/services using measured response and relevant thermal state, processing demand or material reaction. A convenient mass/time/volume proxy alone is insufficient; different exchanges may need different demonstrated relationships. Preserve gross mass/species/pack/asset balances before any burden allocation. | `jrc-ilcd-detailed-2010` |
| a_residual | residual common-process burden only | Only after documenting why physical causality cannot resolve a specific residual, use contemporaneous market values of all real co-functions at the same common-process gate in their actual condition/quality/bulk state. Derive that gate value transparently if only downstream prices exist, removing later processing/packing/transport. Handle zero/negative prices and waste treatment explicitly; do not clip them into arbitrary positive values. Dedicated later service remains separate; internal rework or a recyclable waste is not automatically a coproduct. | `jrc-ilcd-detailed-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule below declares the final per-reference-flow target without performing division. Every protocol collects undivided original records; only the calculation rule performs one final quotient. Machine headers and ASCII-semicolon list separators preserve complete fields.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first quality release | release and weighing record | cohort ID; grade; original release ID; first-release timestamp; calibrated gross tare net mass; product moisture; actual fired geometry; coring; quality tests and disposition; failed mass; opening closing FG; gross dispatch G; returned R; original shipment link | Weigh complete accepted units on a calibrated scale with actual tare and packaging excluded; retain specification-specific dimensions, coring, strength/absorption and other real tests. Sum unique first releases only. | kg | each release and stock boundary | complete actual manufacturing cohort | all manufacturing and FG gates | per reference flow | calibration; tare checks; quality decision; unique-release reconciliation |
| cp_material | manufacture | each supplied material | receipt and stage records | exchange ID; supplier; whole preparation; material mineralogy; supplied form; raw wet dry amounts; independent moisture; carbonate and organic carbon; structural water; supplier boundary; opening closing raw and stage WIP; unassigned stores; inherited vector by exchange; internal transfer IDs; every physical opening/closing raw/WIP/non-WIP pool quantity; gross-entry or already stock-adjusted consumption basis and corrections included | Retain raw receiving/weighing, assay and actual stage-use records for every supply; separately sample free/structural water and carbon origin. Receipts and internal issues are not two purchases. | kg | each receipt and batch boundary | complete cohort including failures | supplier gate through site stages | per reference flow | weighbridge; sample design; assay; stocks; transfer reconciliation |
| cp_energy | manufacture | each utility and actual return | meter and operating-mode record | exchange ID; original readings and unit; kWh; true rates and interval or integrated amount; composition; actual standard gas state; independent density; LHV; carrier kg; supply return temperature pressure dryness enthalpy; provider water energy convention; startup idle cleanup failed modes; actual allocation evidence | Meter every real electrical/thermal/fuel input and external carrier return separately. Retain original states; do not multiply accumulated volume by time or derive unknown density from another substance. | MJ; m3; kg | each operating interval | complete cohort including zero output | all actual plant utility gates | per reference flow | calibration; meter states; gas assays; heat and enthalpy records; mode logs |
| cp_transport | manufacture | inbound freight | consignment record | shipment ID; material; payload; distance; vehicle; load state; empty return boundary; original service unit | Record actual payload and supported route distance for undivided t km; keep freight separate from carried material mass. | t km | each actual shipment | actual incoming material cohort | mine supplier to site | per reference flow | tickets; payload; route evidence |
| cp_waste | manufacture | each actual waste stream | removal and analysis record | waste ID; origin stage; wet mass; independent solids water composition; actual species; retained amount; internal reuse; destination; treatment receipt; rework energy | Weigh each actual stream, independently sample water/solids/species and reconcile origin, retention and destination including failed batches. | kg | each removal and representative sample | all batch and stock intervals | actual waste transfer gates | per reference flow | tickets; calibration; lab limits; wet dry reconciliation |
| cp_species | manufacture | each actual environmental species | speciated inlet outlet sampling | species; formula; phase; source origin; compartment; gross inlet outlet; dry wet gas conditions; measured concentration; actual rate and interval or integrated volume; independent density; free structural reaction water; relevant element assay; detection limit; uncertainty | Use independent actual species and state evidence, with source-specific carbon and water analysis. Retain indicators separately and distinguish unmeasured, below-limit and evidenced absent; no total-to-species invention. | kg | representative intervals across all modes | complete cohort with sampling limits | each intake stack fugitive and water boundary | per reference flow | method; limits; state; independent mass and element reconciliation |
| cp_pack | service | each packaging material and destination | gross custody ledger | material design ownership ID; measured mass moisture; opening closing empty WIP-attached FG-attached reusable stocks; purchase; inbound supply packaging; external return received; gross dispatch packaging; external return sent; waste; internal reuse; attached residues; supplier burden convention; original cohort; actual new/removed repair-component identities and masses; measured X_in/X_out by material/water phase and source/destination; independent dry matter/water and full wet stock quantities; other-flow dedup; independent repair-board identity and wet/dry mass; liquid-water supplier and actual supply mass; atmospheric water phase and measured uptake; separately removed board; liquid wastewater assay/destination; speciated current-air H2O; actual permission postchecks acceptance/disposition; disjoint repair custody; original Qc/H; P paid acquisition and bundled-paid evidence; first independent N_ext nonpurchase receipt and contract/fee basis; same-item prior S/EO ID for ER; owner and custodian chain; original cohort/history; each exchange prior V/A/provider and native extensive unit; whole/component inclusion; gate/state/phase/medium/period | Count and independently weigh each package type, retain each raw movement and execute b_pack at manufacturing/service/combined gates. A return receipt is physical ingress, not a new manufacturing purchase; reconcile external receipts individually. Measure actual repair and water changes independently, retaining complete wet stocks and real ingress/egress together. Add each actually needed specific material/water row before numeric use; do not deduplicate against stock retention or invent a repair event. Resolve P/N_ext/I/ER/S/EO/W by actual event: P and N_ext are disjoint tagged subledgers on the same material-specific independent-entry card; I/ER/S/EO/W retain their distinct atomic cards. Evidence ER against that same item prior S/EO, owner/custodian and original cohort history; first independent nonpurchase receipt is N_ext, not a fabricated ER or stock. Retain every original native V/A/provider vector and b_pack context, without zero-filling unknown history. Obtain independent dry-material/moisture and gas/liquid phase evidence; measure actual totals, integrate only genuine rates and use independent same-state density only when needed, never a secondary property as measured density. Keep whole wet receipts once and actual completed original-cohort service burden even if FG stays held. Record every actual packaging movement and caused work load, including unapproved, failed or rejected work. Card-level permission, configuration, post-work checks and acceptance conditions govern work authorization and continued qualifying-stock eligibility only, not data capture: they never erase actual material/water ingress or egress, energy, waste or treatment. Record actual hold, disjoint repair-WIP or waste disposition once, without assumed restoration or new Q. | kg | each movement and stock boundary | actual manufacture and cohort service H | plant and external packaging pool | per reference flow | tare; moisture; material counts; dispatch return and ownership evidence |
| cp_service | service | original released-cohort incremental service | original-cohort event record | original release ID; Qc; observed H; opening closing FG; original inherited manufacturing vector; gross G; returned R; original shipment link; changed water mass; actual loss; damage; retest; actual incremental rework; all actual energy materials waste; service attribution; actual repair permission/specification scope; new/removed parts/material and water phase; required post-work tests; acceptance/disposition | Observe post-release events and gross physical movements with original cohort links. Preserve actual changed mass/moisture/loss; returns need not equal original delivered mass. Do not reverse first-release manufacture or generate new Q. Add any real extra service input/output as an atomic row. Verify governing permission and actual post-work acceptance/disposition before returning a worked brick to accepted stock; do not assume restorability or zero new water/loss. | MJ; kg; m3 | each service event and stock boundary | declared observed H for original Qc | packing storage handling dispatch returns | per reference flow | cohort links; metering; loss records; physical bridge; horizon disclosure |
| cp_allocation | manufacture | each assigned or genuinely joint exchange | subdivision causality and residual-price evidence | exchange ID; goal allocation context; dedicated meter or stage; virtual subdivision inputs; actual response to product change; thermal and reaction state; co-function quantity; common-process exit condition; contemporaneous gate market price and period; downstream price and removed later processing packing transport costs; zero negative price treatment; selected share and uncertainty | Collect dedicated measurements first, then documented subdivision or feasible virtual subdivision. Independently observe exchange-specific determining physical response; only for a justified unresolved residual collect contemporaneous actual common-gate values with condition and downstream-cost evidence. Preserve original raw extensive quantities before burden shares. | row-native unit; price per actual gate quantity | each relevant operation and valuation period | actual manufacturing and original-cohort service periods | actual common-process gate and separately assigned service | per reference flow | meter and subdivision workpaper; measured response; original dated prices; grade/state proof; removed-cost bridge; uncertainty |
| cp_asset_m | manufacture | each actual asset tool component and fluid | physical stock and service record | asset ID; complete configuration; actual measured net mass; opening installed stock; new and used additions; components included in whole supply; separate replacements; repair; moisture; installed fluid; service events and demand; closing stock; retirement; inherited service vector; allocation evidence | Reconcile gross physical stock by actual component and measured configuration; determine only attributable asset-service equivalent demand from real service history. Impact vectors are not asset kg; service shares never shrink gross physical changes. | kg | each install repair service and stock boundary | observed asset and cohort service records | actual machinery and fluid gates | per reference flow | asset register; scale; configuration; repair history; service basis; fluid balance |
| cp_asset_s | service | each actual asset tool component and fluid | physical stock and service record | asset ID; complete configuration; actual measured net mass; opening installed stock; new and used additions; components included in whole supply; separate replacements; repair; moisture; installed fluid; service events and demand; closing stock; retirement; inherited service vector; allocation evidence | Reconcile gross physical stock by actual component and measured configuration; determine only attributable asset-service equivalent demand from real service history. Impact vectors are not asset kg; service shares never shrink gross physical changes. | kg | each install repair service and stock boundary | observed asset and cohort service records | actual machinery and fluid gates | per reference flow | asset register; scale; configuration; repair history; service basis; fluid balance |

### Calculation Rules

raw_i is actual external material receipt or operating exchange before normalization; internal issues/stage transfers do not add another external purchase. Carry opening/closing raw/WIP vectors separately by exchange. Bclose contains only unreleased raw/WIP/unassigned material stores; released-FG manufacture remains with Q. Asset-input card amounts are attributable asset-service-equivalent demands supported by genuine service records, never simply whole new machine mass/Q; physical stocks and impact vectors are separate. Package cards keep gross custody separate from one supply/service burden, without crediting outbound attached packages as another manufactured product.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_units | all inventory rows | Convert original units before attribution. Integrate genuine rates over measured intervals once; accumulated volumes are already integrated. Preserve row-specific extensive property. Independently evidence gas composition/density/state, LHV, enthalpy and measured mass; retain undivided raw_i. | original_reading; original_unit; actual_state; conversion_evidence; cp_material; cp_energy; cp_species | raw_i | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| calc_manufacture | manufacture | q_i = A_i / Q; A_i = dedicated assigned raw_i plus exchange-specific shares of genuinely joint raw_i plus opening raw/WIP/unassigned-store inherited burden_i minus corresponding closing raw/WIP/unassigned-store inherited burden_i. Preserve failure/idle/cleanup/rework. Closing already-released FG is excluded from Bclose. Q = unique first-release net kg from cp_release. Each numerator keeps its own native unit; q_i is per 1 kg reference flow. Perform this quotient once for Q>0. Current raw_i entering the stock bridge uses gross entry before the stated corrections. If the source already reports stock-adjusted consumption, preserve its included corrections and reconcile only unincluded remaining WIP/non-WIP or other vectors, not the same raw stock again. For custody-only physical movement disclosures, including an actual thermal-carrier Product return, replace this burden-stock numerator by the actual full gross leg V_i in its native extensive unit and use the same final q_i = V_i / Q once. Do not add inherited burden, stock-correct a measured gross leg, economically scale it or create another supply/provider/credit. Keep actual attributable manufacturing burdens in their separate vector; this exception is not permission to delete real supply or treatment loads. | raw_i; opening_vector_i; closing_vector_i; allocation_evidence_i; Q; cp_release; cp_allocation | q_i | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| calc_service | service | s_i = deltaA_i / Qc; deltaA_i is actual incremental post-release service load attributable to original cohort c over observed H. Qc is its original unique first-release net kg. Keep original inherited manufacturing vector with cohort c, never charge it again as service. Preserve package gross custody and count its original supply burden once. s_i is per 1 kg reference flow of that original cohort; no new Q, no second quotient and no future-service extrapolation. For every custody-only packaging/FG/asset movement card, the numerator is instead its actual full gross native leg V_i,c,H, reported by this same sole quotient V_i,c,H / Qc, not an allocated service-burden vector or Bopen + U - Bclose. Keep P/N_ext/I/ER/gross S/EO/W and actual material/water changes independently; no extra provider purchase, repeated historical burden, credit or economic scaling. Actual attributable supply/cleaning/repair/treatment burdens remain in deltaA_i separately with one original provider owner. Actually performed original-cohort services stay under original Qc/H even when serviced FG remains held at closing; only genuine unconsumed/unassigned service stores may carry forward. | original_release_id; Qc; H; deltaA_i; inherited_manufacture_vector; cp_service; cp_pack | s_i | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| calc_zero | manufacture; service | For Q=0 or Qc=0 retain actual loads and stocks in the zero-output ledger and issue no unit result. Never remove failed batches or fabricate a denominator. | Q; Qc; raw_i; cp_release; cp_service | zero_output_ledger | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| calc_physical | manufacture; service; combined | Opening physical stock plus every actual ingress equals closing stock plus every actual egress at each gate; consolidate by cancelling internal transfers once. Independently reconcile relevant elements and actual species/water phases using independent measured evidence and uncertainty. Gross FG movements include G/R, historical opening stock, actual changed water/loss and original cohort. Do not scale physical totals by economic shares or solve two unknowns from one residual. | physical_open; physical_in; physical_close; physical_out; species_assay; element_assay; state_evidence; cp_release; cp_service | physical_gate_reconciliation | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| calc_pack | each packaging material | Execute the complete b_pack physical equation for every material/design/ownership at each gate. Keep P paid acquisition (including documented bundled-paid), N_ext first independent external nonpurchase receipt, I attached supply, genuine same-item ER, each stock class, gross S, EO and W separate. Aggregate the P and N_ext tagged subledgers of each existing material independent-entry card once, retaining separate gross native legs and complete prior vectors. Require same-item prior S/EO, owner/custodian/original cohort history for ER and the full b_pack context for all entries; unknown history is not zero. Count freight and actual service increments once, supplier-included burden and original manufacture once under original Qc/H. Cancel only internal reuse. No additional purchase, brick Q or automatic coproduct credit is generated. Include the actual separately measured material/water X_in/X_out required by b_pack, disjoint from other flow terms but never cancelled against retained stock. No extra X duplicates a wet article already measured in another receipt/exit. | pack_open; pack_purchase; external_nonpurchase_entry; inbound_pack; external_return_received; pack_close; gross_pack_dispatch; external_return_sent; pack_waste; cp_pack | packaging_custody_reconciliation | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each product and species | Verify actual material/form/terminal/native restrictions and supplier boundary; distinguish compatible family from a quantified provider process. | exact native identity; supplier specification; drawings; route; acceptance |
| dq_raw | each raw record | Preserve original units, calibration, sampling representativeness, uncertainty and detection limits across all productive/nonproductive modes. Unknown is not zero. | raw meter; lab method; calibration; mode log |
| dq_stocks | each cohort and physical gate | Require per-exchange inherited raw/WIP vectors, physical released FG bridge and original-cohort services; separate asset stocks from services and preserve full package custody. Audit disjoint P/N_ext/I/ER event labels, bundled-paid versus upstream-included evidence, same-item prior S/EO for ER, owner/custodian/original cohort chain and complete prior V/A/provider/native-unit/whole-component/gate/state/phase/medium/period/history; unresolved history remains explicit. | stock counts; original release links; packaging and asset ledger |
| dq_sources | each method or quantitative claim | Industrial evidence supports qualitative route and counterexamples only. Quantities and chemistry require real foreground evidence; ILCD alone supports the allocation hierarchy and its scope. | source locators; direct identity; actual measurements; allocation justification |
| dq_service_horizon | post-release services | Disclose observed H and original Qc and any unobserved future logistics/returns; do not claim lifetime completeness or infer a new release from delivery. | cohort service events; H; actual G/R and loss bridge |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference product; each adopted UUID | Verify complete native physical identity, every basename/synonym/comment/grade/route/form/geography/media/type and all property/unit chains. Match actual clay building-brick terminal and supplier conditions. A taxonomy discrepancy cannot waive a hard material/CAS/phase/route/state conflict. An unconfirmed core reference identity blocks usable methodology. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| v_qualifiers | reference flow | Declare every required qualifier and actual quality acceptance evidence. No universal recipe, kiln temperature, energy demand, strength class, density, mass per item or service life is supplied by this PCR. A mass-equivalent kg of complete units does not mean one brick weighs one kg. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| v_denominator | all inventory rows | Retain undivided original records; convert units/rates and assign real exchange loads and stock vectors before exactly one A/Q or deltaA/Qc calculation. Cards and collection aggregation reference that single result. Q=0 retains loads and yields no unit result. Both languages use first release, not net delivery. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| v_stocks | manufacture; service; combined | Verify complete raw/WIP inherited vectors and released FG physical bridge, retaining original FG manufacture. Check original-cohort H/Qc service attribution, gross shipments/returns, no second release Q and one cancellation of internal Q. Do not subtract closing released-FG manufacturing burden. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| v_physical | each physical gate | Reconcile actual masses and relevant elements at manufacture, service and combined gates independently from species/reaction-water evidence. Account for air species without a second aggregate air exchange, real heat-carrier returns and material-specific packaging/asset/fluid stocks. Explain measured uncertainty and unknowns, never force residual closure. Verify each real independent P/N_ext entry, I and ER is recorded once with same-item prior S/EO evidence for ER and the complete b_pack prior vector/context. Reject omission of a first independent loan or its relabeling as ER, opening, internal reuse or repair/moisture X; preserve gross stocks/S/EO/W and actual incremental transport/service with one provider burden owner. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| v_completeness | each process and row | Every actual material, fuel, utility, package, waste and species needs an atomic identity, native numerator unit, raw collection, calculation, source link and destination. Conditional absence requires evidence; unknown is not zero. Add real missing flows. Generic family identity is not a quantitative provider dataset; unresolved auxiliary bindings require later qualified lookup. | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Downstream LCA of declared building-brick grade and manufacturing route |
| allowed_use | Attributional manufacturing inventory for actually compatible terminal/supply; original-cohort H services disclosed separately |
| excluded_use | Whole 37350-leaf coverage; refractory/concrete/tile/tableware routes; universal recipe/factors; lifetime or installed-performance equivalence; science/mapping approval |
| required_metadata | actual clay deposit and whole supplied form; mineral composition and carbonate/organic carbon origin; free and structural water evidence; body recipe and actual separate additives; non-refractory building-brick terminal; plastic extrusion and cutting configuration; actual fired geometry and coring; unglazed and without applied engobe or surface coating; drying and gas-fired tunnel-kiln route; actual heat recovery and supplemental burner boundary; firing atmosphere and measured thermal history; actual finishing and quality test specification; actual strength and water absorption results; unique first quality release ID and cohort Q; calibrated net product mass and moisture basis; complete failed/idle/rework and WIP inherited vectors; actual supplier and every native flow restriction; all actual species and external destinations; asset service basis separate from physical stocks; packaging gross custody balances; original-cohort service horizon H and Qc; allocation purpose and source-specific evidence; no installation/use-life performance equivalence |
| required_quality_disclosure | Raw measurements/missingness; native restrictions; source applicability; species/reaction water; stocks/failures; allocation; assets/packages; future service beyond H; uncertainty |
| update_trigger | Actual route/material/terminal/quality/supply change; new species; native identity/evidence change; real data refresh; science and translation review |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bia-brick-manufacturing-2006 | extension_guidance | https://www.gobrick.com/media/file/9-manufacturing-of-brick.pdf — BIA Technical Note 9; December 2006; complete 7-page document | Complete clay-brick stages and three forming-route comparisons; firing/cooling/sorting, quality and package context. Qualitative only; no numerical values or universal only-evaporation/zero-waste claims. Does not support LCA allocation. |
| jrc-ceramic-bref-2007 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf — Ceramic Manufacturing Industry BREF; August 2007; §2.3.1 printed34–44; adjacent §2.3.3/2.3.5 | Brick feed preparation/extrusion/drying/firing/finishing and physical flows; Figures2.8/2.13, Tables2.1–2.4 and adjacent refractory/tile counterexamples. No recipe, temperature, energy or roof-tile ratio adopted; no LCA allocation support. |
| epa-brick-structural-clay-1997 | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c11s03.pdf — AP-42 §11.3; August 1997; §§11.3.1–11.3.3 and Figure11.3-1; Tables11.3-1/2 footnotes | Supply/extrusion/tunnel-kiln/dryer source boundaries; actual potential species, raw-material sulfur/fluorine/chlorine, organics, controls and gas destinations. Source/table-footnote limitations only; no emission factors or TOC/NOx-to-molecule conversion; no LCA allocation support. |
| jrc-ilcd-detailed-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf — First edition March 2010; §§7.9.2–7.9.3; printed255–272 | Only the applicable attributional allocation context: dedicated/virtual subdivision, exchange-specific determining physical causality and genuine residual common-gate/current-condition/contemporaneous market value. No industrial recipe, equipment or quantitative-result evidence. |
