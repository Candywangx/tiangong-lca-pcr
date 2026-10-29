---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.non-refractory-ceramic-pipes-conduits-guttering-and-pipe-fittings
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Loam-glazed vitrified-clay drainage pipe body manufacture

## 1. Scope and Applicability

This attributional method covers one declared specification of dense non-refractory loam-glazed vitrified clay drainage pipe body, made by plastic vacuum extrusion and conventional gas-fired tunnel-kiln processing. The terminal is the complete cooled ceramic body after actual end finishing and required first body-quality acceptance, with integral fired mineral glaze but without fitted polymer seals, couplings or adhesive assembly. Include all actual unfired feed preparation, manufacture, controls, losses and capital services, then separately observe original-cohort packing and FG services. This is a transparent technical synthesis of primary route and terminal evidence, not one factory recipe, same SKU or a claim that one current order demonstrates every generic operation.

Exclude plastic or cement/concrete pipes, refractory kiln tubes, porous unfired bodies, mined clay, building/refractory/moler bricks, unglazed or salt-glazed variants, mounted drainage systems, pressure or jacking assemblies, and factory-fitted seal/coupling products. BREF shows conventional and fast firing alternatives and optional seal end treatment; this method selects conventional loam glazing and the bare-body terminal. Hepworth demonstrates separately supplied plain/unjoined bodies and couplings but its proprietary calcination/roller route is an adjacent case, not this recipe. An actual calcination or added component requires renewed route/terminal coverage rather than omission. NCPI body and joint tests remain distinct. No source numerical recipe, wall thickness, item weight, service life, temperature or test rating becomes a default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.non-refractory-ceramic-pipes-conduits-guttering-and-pipe-fittings |
| classification_refs | CPC 3.0 37360; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | One declared grade of loam-glazed dense vitrified drainage pipe body without fitted seals |
| excluded_products | Polymer and cement pipes; refractories; green bodies; unglazed/salt-glazed variants; joint assemblies; installed sewer |
| representative_product | Complete fired and cooled bare ceramic drainage body at first body-quality release |
| production_route | Unfired clay and actual chamotte/glaze supplies; complete preparation; vacuum extrusion/end forming; drying; loam glazing/re-drying; conventional gas tunnel firing/cooling; actual end finishing and body tests |
| market_state | Dense complete bare body with integral fired glaze; packaging and fitted seals excluded; downstream coupling/installation still required |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide complete dense glazed ceramic drainage pipe bodies of one declared specification for downstream jointing |
| How much | 1 kg mass-equivalent of complete qualified pipe bodies |
| How well | Actual specified body geometry and strength/impermeability acceptance; no universal performance class or installed system equivalence |
| How long or cycle | One unique first-release production cohort; disclose observed original-cohort H/Qc services separately; no pipe lifetime |
| reference_flow_link | finished_pipe |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Non-refractory ceramic pipes, conduits, guttering and pipe fittings `53673d02-977a-4106-a54f-062fc9a197e8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual clay deposit and whole supplied preparation state; whole body recipe with each real purchased addition; mineral phases and carbonate and organic carbon origin; free water and structural water and reaction evidence; non-refractory dense vitrified drainage pipe body; vacuum extrusion and actual socket or plain-end geometry; actual length and diameter and wall and end configuration; loam-slip glaze formulation and fired coverage; no fitted polymer seal or coupling or adhesive; controlled drying and conventional gas tunnel firing; actual firing atmosphere and thermal history and cooling; actual end finishing and required body quality tests; declared strength and dimensional and impermeability acceptance; unique first quality-release cohort and net Q; calibrated mass and declared moisture basis; all failed and idle and rework events and inherited exchange vectors; actual utility state and native extensive-property restrictions; individual species and destination and carbon origin; physical asset and in-machine fluid custody separate from service burden; each packaging gross custody balance; original-cohort service horizon H and denominator Qc; attributional allocation decision and source-specific evidence; no installed-sewer performance or lifetime equivalence |

Declare every qualifier in consumable dataset metadata, reference-flow comment or equivalent context. Complete-body mass equivalence needs calibrated actual net mass at declared moisture; it asserts no count-to-kg, area-to-kg or length-to-kg factor. Any optional length/count report must use actual traceable body configuration and measured net mass/length; nominal diameter or bounding geometry supplies no density or wall thickness. The broad native manufactured Product family is positively restricted to this primary-supported narrow finished body; it has no fixed CAS, composition, geometry, geography or grade. It does not make raw clay or pre-fired pipe billets into finished Product.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect unique first-body-release net Q with cp_release calibrated weighing excluding packages and fitted seals; closing released FG is already included in Q. |
| native_numerator | all inventory rows | row-declared extensive property | row native unit | Preserve each native extensive numerator; Mass/kg does not govern MJ/kWh/m3/t km. Convert raw state/units before actual assignment and use the single final quotient in Section 8. |
| electricity_units | electricity; service_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain original kWh and multiply by 3.6 once. The adopted identity requires CN grid-average consumption below 1 kV. |
| fuel_hhv | natural_gas | Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` | MJ | Collect same-state actual gas volume and independently measured HHV plus carrier mass/composition in cp_energy; convert gross MJ before attribution. No invented density, fixed HHV or HHV/LHV ratio. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual unfired clay mine-gate supply plus every true chamotte/glaze/ingredient supply; actual haulage and complete site manufacture |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | CPC 3.0:37360; narrow loam-glazed dense extruded pipe-body route |
| recursive_input_rule | Record actual same-category purchased fired ware for grog/tooling by supplied state and inherited burden without duplicating manufacture or replacing the reference terminal. Internal recycle remains transfer. |
| upstream_dataset_requirement | Actual extraction/supplier preparation and delivered forms; compatible utility providers and real freight; UUID identity alone supplies no quantities or provider approval |
| disclosure | First-release Q; physical raw/WIP/FG gates and original inherited vectors; gross asset/package custody; all modes/species; actual H/Qc; uncertainty and unknown observations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete_route | manufacture | Include actual receipt and upstream supply, haulage, storage, body crushing/milling/screening/blending/ageing, water kneading, vacuum extrusion and pipe-end formation, controlled drying, loam glazing and re-drying, gas tunnel firing, controlled cooling, real ceramic finishing and specified body-quality tests through unique first release. Keep stage-specific meters and WIP. | `jrc-ceramic-bref-2007` |
| b_terminal | reference product | Use the dense loam-glazed bare ceramic body only. Integral fired glaze remains part of it. Any actually fitted seal, coupling, adhesive, composite reinforcement, installation or pressure/jacking system changes the terminal and requires renewed methodology and atomic component coverage before use. Purchased finished-pipe packing cannot replace manufacture. | `jrc-ceramic-bref-2007`; `hepworth-clay-guide` |
| b_formulation | each material | Purchase each whole supplied formulation once. Clay mineral assay, glaze solids, active fraction and carrier water are subaccounts, not extra purchases. On-site glaze preparation instead requires each real purchased ingredient, water, milling/mixing energy and loss. Never assume the six illustrated ingredients or a fixed composition; add each actual distinct additive as one specific card. | `jrc-ceramic-bref-2007` |
| b_manufacture_stocks | manufacture | Keep each exchange inherited vector in opening/closing raw supply, each physical WIP stage and not-yet-assigned non-WIP stores. Bclose for manufacturing excludes already-first-released FG because its manufacturing load is already in Q; never deduct that closing FG load from this first-release numerator. Include failures, Q=0, start/stop, idle, hot hold, cleanup and genuine rework without erasing them. | `jrc-ceramic-bref-2007` |
| b_first_release | manufacture; service; combined | Q is unique newly body-quality-released net kg of complete pipe bodies, not green mass, fired charge, dispatch, reinspection or an area/count estimate. Q includes released closing FG. Transfer Q once from manufacture to FG services, cancel it on consolidation and never add Q plus its closing FG as two production outputs. | `jrc-ceramic-bref-2007` |
| b_service_cohort | service | Retain actual packing, storage, handling, dispatch, external returns, retest and incremental rework over observed H, assigned to original first-release cohort Qc. Keep opening and closing FG original manufacturing vectors outside current manufacturing reassignment. Retest/delivery creates no new production. Disclose unobserved future services; neither assume them zero nor invent them. | `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010` |
| b_delivery_alternative | denominator | Do not replace Q with net delivery. Such another model needs gross dispatch G and physical returns R, original delivery-specific burden reversal D_rev, actual changed return mass/water/loss and incremental rework; returned kg alone never establishes original delivered burden or reversal. | `jrc-ceramic-bref-2007` |
| b_mass_species | physical gates | Independently reconcile gross physical mass and relevant C/H/O/N/S/F/Cl/mineral elements using measured composition and chemical/phase evidence. Distinguish free water, structural water released or retained, reaction water, vapour and liquid condensate. One residual cannot fit two unknowns. NOx/SOx as equivalents, VOC/COD/TOC, total elements and particle size are not identified chemical species masses. | `jrc-ceramic-bref-2007` |
| b_utilities | each utility | Record complete fuel mixture once, electricity separately, and every real heat supply and carrier mass/state separately with explicit provider conventions. Native extensive units govern each row. Integrate actual rates once; accumulated volumes are already totals. Internal recovered heat and water transfers cancel. Actual external steam/hot-water Product returns retain mass, temperature, pressure and enthalpy reference; never invent a boiler or steam supply. | `jrc-ceramic-bref-2007` |
| b_packaging | each package design and ownership | For each packaging item: opening empty + attached-WIP + attached-FG + reusable stock + purchases + packaging received with supplies + external returns received = corresponding closing stocks + packaging leaving on gross physical shipments + external returns sent + waste. Record each destination and wet/attached residuals separately. Internal reuse cancels; no extra purchase, pipe Q, coproduct or automatic credit. Never scale gross custody by economic shares. Add measured repair material Radd, removed old material Rremove, absorbed/added water H2Oin and water release H2Oout per article: disjoint opening pools+P+I+ER+Radd+H2Oin = closing pools+G+EO+W+Rremove+H2Oout. Deduplicate the same water/material only against another same-side flow term of this bridge, never cancel real influx because closing wet stock includes it, an opposite-direction term exists or another atomic card is present. Dry wood/material and free/absorbed water are independent; one residual cannot fit two unknowns. Every real repair/cleaning water/material destination needs a specific atomic row with manufacture-Q or original-Qc/H ownership; repair is not assumed. | `jrc-ceramic-bref-2007` |
| b_assets | each capital article and replacement | Separate physical asset custody from current service burden. Keep complete kiln, extruder, dryer, kiln car, die, cutting wire, lining and forklift stocks, new/used additions, genuine repairs and removals, material/moisture and in-machine fluid ledgers. Use measured service history and demand for the burden vector; no fixed lifetime or one whole machine per kg. Components already in a purchased article are subaccounts; real separate replacements and outputs each need their own exchange. | `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010` |
| b_atomic_completeness | all inventory | A card names one actual supplied material/article, waste stream or real elementary species and destination. Add each genuinely present unlisted input/output; unresolved identity stays a specific unbound name and never becomes a generic bucket, hidden zero or claimed absence. Each card description and complete ancestor rules remain consumable applicability context. | `jrc-ceramic-bref-2007` |
| b_packaging_receipt_identity | each packaging component and physical boundary | In the existing packaging bridge, P includes both separately paid and bundled paid acquisitions. I is N_ext: an actual first external non-purchased receipt, including a first free receipt with goods; it is an incoming leg, not an outgoing flow or a generic first-supply burden. ER is only the same identified article returning after its recorded prior outward crossing of this boundary; an article first received from another party is not ER. EO is an actual outward return to its identified counterparty. Record item/design, ownership, event, boundary, period, prior outward ID and actual condition to make these categories disjoint. Use the appropriate existing purchase or with-supply card for a bundled paid receipt once, never both. Retain every gross incoming/outgoing leg and disjoint empty, attached-WIP, attached-FG and reusable stocks; match internal stage transfers. The provider convention carries each actual acquisition/service burden once, independently of these gross custody quantities. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Full raw-to-bare-glazed-body manufacture | required | All actual stages and operating modes | manufacturing | finished_pipe; unique first-release Q |
| service | Original-cohort packing and FG services | required | All actual post-release events over observed H | original_cohort_service | original Qc; no new Q |

Manufacture is a composite process retaining separately observed substeps: receipt/storage → crushing/milling/screening/ageing and actual chamotte preparation → body blending/water kneading/vacuum de-airing → pipe extrusion/cutting/end forming → controlled drying → mineral loam glazing/re-drying → setting/gas tunnel firing/controlled cooling → unloading and actual ceramic finishing/grading/body tests → first release. Keep physical WIP states, stage meters and inherited per-exchange vectors. The service process starts at that internal Q transfer. Pre-release package exchanges belong to the manufacturing package ledger; matched internal package transfers to services carry inherited vectors and cancel without a new purchase. Whole clay and glaze supplies and their analyses must not be duplicated. Each card description plus complete Sections 5/7/8 is its applicability context; prove conditional absence and add each actually present missing exchange by its specific identity.

### Process: Complete pipe-body manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Unfired common clay for drainage pipe body (`clay`)

One actual purchased clay deposit grade delivered before site crushing, screening, ageing, blending and tempering. Record whole wet supply, mineralogy, free moisture, structural water, carbonates, organic carbon, sulfur, chlorine and fluorine independently; assay components are subaccounts, not additional purchases. Separate different delivered clays and provider preparation boundaries. The delivered clay must support vitrification and pipe-body plastic forming; natural supplier uncertainty alone does not make the methodology draft. Native natural hydrous-aluminosilicate clay mixture at mining site, without fixed CAS, deposit, geography or recipe. Retain actual extraction and provider preparation upstream and all real haulage and site preparation; a supplied green body or calcined chamotte is not this clay.

- Selected flow: Clay `226972bf-eeed-4ec4-a22e-f227e582ca18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `ncpi-vcp-manual-2017`

###### Quartz sand for pipe body (`sand`)

Conditional actual separately purchased tempering sand. Retain mineral composition, grain distribution and wet supply; quartz assay is not another purchase. No sand dose is required by this PCR. Only if actually added to the body; mineral quartz already assayed in whole clay is not a new purchase.

- Selected flow: Quartz sand for pipe body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Crushed vitrified clay pipe chamotte (`grog`)

One external supplied fired vitrified clay pipe chamotte grade; weigh its whole supply and assay mineral phases and moisture. Internal fired rejects crushed back to the body are tracked as transfers with inherited burdens and never purchased again. A porous refractory fireclay, magnesia brick or unfired clay is not the same supply.

- Selected flow: Crushed vitrified clay pipe chamotte
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Liquid municipal process water (`process_water`)

Meter actual liquid water for tempering, washing and cooling by use. Match real supply geography and treatment; a Hong Kong Volume-reference tap-water row or its screening density does not establish another plant supply. Water within wet clay is a subaccount, not this purchase. Native treated municipal/public tap-water Product from water production/supply, with Mass as reference and Volume as a secondary property. No fixed geography or CAS. Use only actual compatible treated supply; raw abstraction, reservoir rainwater, steam and wastewater need their own identity. Secondary volume coefficient is not measured density and is not used.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `ncpi-vcp-manual-2017`

###### Alternating current (`electricity`)

This Product identity is restricted to CN grid-average consumption mix delivered to user below 1 kV. Reference extensive property is Net calorific value in MJ; preserve raw kWh and use 3.6 MJ/kWh. Meter feed preparation, extrusion/vacuum/cutting, drying/kiln fans, cooling, finishing/testing and utilities including all failed and nonproductive modes. Other voltage/geography/generation requires separately qualified supply. Native Product is CN grid-average customer consumption mix below 1 kV with Net calorific value reference in MJ and no CAS. Binding is conditional on this voltage/geographic/provider scope; a different grid or voltage requires a newly verified matching identity rather than silently extending this one. Meter original kWh and convert once by 3.6; never count an additional generation inventory over the complete provider.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramic-bref-2007`

###### Gaseous pipeline natural gas mixture (`natural_gas`)

Whole delivered gas mixture for actual kiln and any supplemental dryer burners. Keep composition, actual/standard volume state, carrier mass, independent density and net heating value. A methane CAS with pressurised-CH4 aliases does not bind this mixture. Internal recovered kiln heat is a transfer, not another purchased fuel or automatic credit. Native Product is natural gas burned in an industrial furnace, production mix at plant GLO, without CAS or fixed composition; its reference is Gross calorific value in MJ. Use only the complete actual gaseous natural-gas fuel mixture for this industrial firing route. Measure raw volume state, carrier mass, composition and HHV independently; convert to gross MJ before attribution. Do not substitute the Jiangsu-project gas, pure methane, delivered heat, an HHV/LHV ratio or the native name for a qualified provider.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramic-bref-2007`

###### Externally purchased water steam (`steam`)

Only actual external steam for clay preparation or utilities: retain gross carrier kg, pressure, temperature, dryness and heat MJ at agreed reference state. One provider purchase, not duplicate water plus heat inventories. No steam system is assumed.

- Selected flow: Externally purchased water steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramic-bref-2007`

###### Externally purchased liquid heating water (`hot_water`)

Only actual external hot-liquid water supply with measured carrier mass, supply/return temperature and enthalpy. Internal circulation cancels; no boiler is invented.

- Selected flow: Externally purchased liquid heating water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramic-bref-2007`

###### Road freight transport service (`freight`)

Actual purchased inbound haulage, with shipment payload, distance, vehicle/load condition and empty-return treatment. Tonnes times kilometres are service, not additional pipe mass. Quarry burdens remain upstream unless mining is truly performed inside the declared foreground.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t km
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`
- Sources: `jrc-ceramic-bref-2007`

###### Complete gas-fired tunnel kiln (`kiln`)

Track new/existing whole kiln physical stocks separately from attributable service burden and actual operating fuel. No fixed lifetime or one whole kiln per kg of pipe.

- Selected flow: Complete gas-fired tunnel kiln
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Complete clay vacuum extruder (`extruder`)

Track actual machine additions, installed stocks, maintenance and retirements; separately retain operating electricity. Each actual purchased replacement part has its own identity and mass.

- Selected flow: Complete clay vacuum extruder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Complete controlled-humidity pipe dryer (`dryer`)

Conditional actual chamber dryer construction and stock; a tunnel dryer needs its own specific row. Heat recovery and fans remain actual operations, not implied fixed asset burdens.

- Selected flow: Complete controlled-humidity pipe dryer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Complete ceramic pipe kiln car (`kiln_car`)

Actual car structure, refractory deck and any installed fluid are reconciled by component subaccounts. Do not purchase the deck twice if included in the whole car; separately purchased repairs are separate atomic exchanges.

- Selected flow: Complete ceramic pipe kiln car
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Steel pipe extrusion die (`die`)

One actual steel die construction and configuration, with stocks, replacements, wear and disposal. Tool service attribution never scales down gross physical additions or waste.

- Selected flow: Steel pipe extrusion die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Steel green-pipe cutting wire (`cutting_wire`)

Record actual complete supplied cutting wire, new/spent stocks and replacement events; do not model raw steel again when a whole supplied wire is purchased.

- Selected flow: Steel green-pipe cutting wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Aluminosilicate kiln lining brick (`lining`)

Only the actual refractory lining grade: composition, free/structural moisture, installed stock, new/used repairs and removals are separate. This consumable is not the non-refractory saleable output.

- Selected flow: Aluminosilicate kiln lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Mineral lubricating oil formulation (`lubricant`)

One whole actual supplied oil grade used for extrusion or maintenance. Assay is a subaccount; retain opening/closing in-machine oil, top-ups, leaks and recovered oil by destination. Do not assume all oil is burned.

- Selected flow: Mineral lubricating oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Polyester dust filter bag (`filter`)

One actual complete filter bag; captured mineral dust is distinct from filter polymer. Other actual filter construction needs its own row.

- Selected flow: Polyester dust filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Calcium hydroxide dry sorbent (`lime`)

Conditional actual dry flue-gas treatment sorbent. Whole supplied formulation once; moisture and active assay are subaccounts. Do not infer scrubber existence or removal efficiency from source diagrams.

- Selected flow: Calcium hydroxide dry sorbent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Purchased loam-clay glaze slip (`glaze_slip`)

One whole purchased aqueous loam-clay mineral glaze formulation applied by dip or spray then co-fired. Record supplier identity, all constituents, solids, carrier water, actual applied/recovered/retained/lost mass. Purchase the complete formulation once; assay water, clay and oxides are subaccounts. This route is not salt glazing, polymer coating or a generic frit; provider compatibility must be assessed. If mixed on site do not purchase this slip again: use each actual raw ingredient, process water and preparation energy with linked internal slip transfer.

- Selected flow: Purchased loam-clay glaze slip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Loam for in-house clay glaze (`glaze_loam`)

Only if this individual material is actually purchased for on-site glaze preparation. Whole actual supply once with grade, physical form, assay and moisture; not an additional purchase if present solely as an assay constituent of bought glaze slip. Add each actual different metal oxide or additive as its own named exchange rather than assuming this oxide or hiding a mixture. Retain milling/screening/mixing losses and energy.

- Selected flow: Loam for in-house clay glaze
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Clay for in-house loam glaze (`glaze_clay`)

Only if this individual material is actually purchased for on-site glaze preparation. Whole actual supply once with grade, physical form, assay and moisture; not an additional purchase if present solely as an assay constituent of bought glaze slip. Add each actual different metal oxide or additive as its own named exchange rather than assuming this oxide or hiding a mixture. Retain milling/screening/mixing losses and energy.

- Selected flow: Clay for in-house loam glaze
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Natural chalk for in-house loam glaze (`glaze_chalk`)

Only if this individual material is actually purchased for on-site glaze preparation. Whole actual supply once with grade, physical form, assay and moisture; not an additional purchase if present solely as an assay constituent of bought glaze slip. Add each actual different metal oxide or additive as its own named exchange rather than assuming this oxide or hiding a mixture. Retain milling/screening/mixing losses and energy.

- Selected flow: Natural chalk for in-house loam glaze
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Dolomite for in-house loam glaze (`glaze_dolomite`)

Only if this individual material is actually purchased for on-site glaze preparation. Whole actual supply once with grade, physical form, assay and moisture; not an additional purchase if present solely as an assay constituent of bought glaze slip. Add each actual different metal oxide or additive as its own named exchange rather than assuming this oxide or hiding a mixture. Retain milling/screening/mixing losses and energy.

- Selected flow: Dolomite for in-house loam glaze
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Quartz for in-house loam glaze (`glaze_quartz`)

Only if this individual material is actually purchased for on-site glaze preparation. Whole actual supply once with grade, physical form, assay and moisture; not an additional purchase if present solely as an assay constituent of bought glaze slip. Add each actual different metal oxide or additive as its own named exchange rather than assuming this oxide or hiding a mixture. Retain milling/screening/mixing losses and energy.

- Selected flow: Quartz for in-house loam glaze
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Iron(III) oxide for in-house loam glaze (`glaze_ironoxide`)

Only if this individual material is actually purchased for on-site glaze preparation. Whole actual supply once with grade, physical form, assay and moisture; not an additional purchase if present solely as an assay constituent of bought glaze slip. Add each actual different metal oxide or additive as its own named exchange rather than assuming this oxide or hiding a mixture. Retain milling/screening/mixing losses and energy.

- Selected flow: Iron(III) oxide for in-house loam glaze
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Paraffin wax glaze masking material (`paraffin`)

Only actual pre-glaze masking of an area that must remain unglazed. Whole purchased wax formulation once; track application, recovered wax and carbon/species fate during firing. This is not an assumed universal input.

- Selected flow: Paraffin wax glaze masking material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Purchased useful heat at heat-exchanger boundary (`purchased_heat`)

Only a real separately purchased thermal-energy service at the declared boundary and supply/return thermal states. Collect MJ with carrier mass/state and supplier agreement. If the complete steam/hot-water provider already represents this same service do not add this row again; choose the actual provider convention. Internal recovered kiln heat is an internal transfer rather than another purchase.

- Selected flow: Purchased useful heat at heat-exchanger boundary
- Flow property / unit: Thermal energy / MJ
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramic-bref-2007`

###### Pre-release Reusable wooden pipe transport pallet (`mfg_pallet`)

Only this actual packaging article exchanged before first body-quality release, including receipt with raw supplies and attached WIP custody. One actual whole wooden pallet, owned/pool convention and dry/wet mass stated. Track new purchase, external return received, attached stock, shipment, external return and waste. Internal reuse does not create another purchase. Keep it in the manufacturing packaging ledger; match actual internal package transfer to service without a new purchase or lost inherited burden. Gross physical custody remains separate from the attributed vector. This input card is new purchased packaging only. Packaging received with another supplied good and externally returned packaging have separate positive physical-receipt cards; match internal stage transfers without another purchase. All quantities keep actual ownership and one destination/custodian. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Pre-release Polypropylene pipe strapping band (`mfg_strap`)

Only this actual packaging article exchanged before first body-quality release, including receipt with raw supplies and attached WIP custody. One actual supplied PP band, complete grade and mass per observed pack. Do not count resin pellets again; other real strap materials need separate rows. Keep it in the manufacturing packaging ledger; match actual internal package transfer to service without a new purchase or lost inherited burden. Gross physical custody remains separate from the attributed vector. This input card is new purchased packaging only. Packaging received with another supplied good and externally returned packaging have separate positive physical-receipt cards; match internal stage transfers without another purchase. All quantities keep actual ownership and one destination/custodian.

- Selected flow: Pre-release Polypropylene pipe strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Pre-release Polyethylene pipe wrapping film (`mfg_film`)

Only this actual packaging article exchanged before first body-quality release, including receipt with raw supplies and attached WIP custody. One actual PE film grade, mass and observed unit coverage, not an area-to-mass assumption or generic packaging total. Keep it in the manufacturing packaging ledger; match actual internal package transfer to service without a new purchase or lost inherited burden. Gross physical custody remains separate from the attributed vector. This input card is new purchased packaging only. Packaging received with another supplied good and externally returned packaging have separate positive physical-receipt cards; match internal stage transfers without another purchase. All quantities keep actual ownership and one destination/custodian. Native polyethylene film Product is factory production mix with CAS 9002-88-4 and Mass/kg; no fixed grade or geography. Restrict to one actual PE film sheet, not PET, multilayer film, bulk PE resin or waste. The native luggage/leather taxonomy is inconsistent with the coherent PE-film name/CAS/comment/physical form and is disclosed rather than used to waive a material conflict. Its PET comparison does not change PE identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Pre-release Corrugated cardboard pipe separator pad (`mfg_pad`)

Only this actual packaging article exchanged before first body-quality release, including receipt with raw supplies and attached WIP custody. Conditional actual single corrugated pad construction and moisture. Do not adopt a fixed recycled-fibre recipe without matching supplier evidence. Keep it in the manufacturing packaging ledger; match actual internal package transfer to service without a new purchase or lost inherited burden. Gross physical custody remains separate from the attributed vector. This input card is new purchased packaging only. Packaging received with another supplied good and externally returned packaging have separate positive physical-receipt cards; match internal stage transfers without another purchase. All quantities keep actual ownership and one destination/custodian.

- Selected flow: Pre-release Corrugated cardboard pipe separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Reusable wooden transport pallet received with supplied goods (`mfg_pallet_with_supply`)

Actual packaging received attached to another externally supplied good at this stage, recorded once by material and ownership. Its physical receipt is retained even when its upstream burden is included in the whole supplied-good provider; do not purchase the package a second time or add duplicate provider burden. Match package/subaccount conventions explicitly. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Reusable wooden transport pallet external return received (`mfg_pallet_return_received`)

Actual intact package externally returned to this stage, with one real counterparty, date, ownership, moisture and condition. Retain original burden and actual incremental cleaning/repair; no negative purchase, new manufacture, repeated whole-original package burden or automatic credit. Damaged waste returned as waste must use its actual waste identity instead. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene strapping band received with supplied goods (`mfg_strap_with_supply`)

Actual packaging received attached to another externally supplied good at this stage, recorded once by material and ownership. Its physical receipt is retained even when its upstream burden is included in the whole supplied-good provider; do not purchase the package a second time or add duplicate provider burden. Match package/subaccount conventions explicitly.

- Selected flow: Polypropylene strapping band received with supplied goods
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene strapping band external return received (`mfg_strap_return_received`)

Actual intact package externally returned to this stage, with one real counterparty, date, ownership, moisture and condition. Retain original burden and actual incremental cleaning/repair; no negative purchase, new manufacture, repeated whole-original package burden or automatic credit. Damaged waste returned as waste must use its actual waste identity instead.

- Selected flow: Polypropylene strapping band external return received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Polyethylene wrapping film received with supplied goods (`mfg_film_with_supply`)

Actual packaging received attached to another externally supplied good at this stage, recorded once by material and ownership. Its physical receipt is retained even when its upstream burden is included in the whole supplied-good provider; do not purchase the package a second time or add duplicate provider burden. Match package/subaccount conventions explicitly. Native actual PE film Product CAS9002-88-4, production mix at plant, Mass/kg, without fixed grade or geography. Only one compatible measured polyethylene film, not PET, multilayer assembly, bulk resin or waste. Native PET discussion describes a competing material; luggage/leather classification is isolated metadata debt, not a physical constraint waiver. Qualify actual supply/return integrity, moisture, ownership and provider; carried whole-supply material/water is counted once and original burden is not recreated on return.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Polyethylene wrapping film external return received (`mfg_film_return_received`)

Actual intact package externally returned to this stage, with one real counterparty, date, ownership, moisture and condition. Retain original burden and actual incremental cleaning/repair; no negative purchase, new manufacture, repeated whole-original package burden or automatic credit. Damaged waste returned as waste must use its actual waste identity instead. Native actual PE film Product CAS9002-88-4, production mix at plant, Mass/kg, without fixed grade or geography. Only one compatible measured polyethylene film, not PET, multilayer assembly, bulk resin or waste. Native PET discussion describes a competing material; luggage/leather classification is isolated metadata debt, not a physical constraint waiver. Qualify actual supply/return integrity, moisture, ownership and provider; carried whole-supply material/water is counted once and original burden is not recreated on return.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated cardboard separator pad received with supplied goods (`mfg_pad_with_supply`)

Actual packaging received attached to another externally supplied good at this stage, recorded once by material and ownership. Its physical receipt is retained even when its upstream burden is included in the whole supplied-good provider; do not purchase the package a second time or add duplicate provider burden. Match package/subaccount conventions explicitly.

- Selected flow: Corrugated cardboard separator pad received with supplied goods
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated cardboard separator pad external return received (`mfg_pad_return_received`)

Actual intact package externally returned to this stage, with one real counterparty, date, ownership, moisture and condition. Retain original burden and actual incremental cleaning/repair; no negative purchase, new manufacture, repeated whole-original package burden or automatic credit. Damaged waste returned as waste must use its actual waste identity instead.

- Selected flow: Corrugated cardboard separator pad external return received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

###### Molecular nitrogen in ambient intake air (`nitrogen_in`)

Actual N2 intake for combustion/ventilation, with gas composition and state; not purchased nitrogen or total nitrogen as N. No aggregate air input is added to its species. Native ordinary neutral gaseous N2 CAS7727-37-9 resource from air, Mass/kg. Liquefied, nitrogen-14 or total-nitrogen aliases do not authorize liquid/isotope/element-total substitution. Independently measure actual gross inlet composition/state, not a fixed air fraction or purchased gas Product.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Molecular oxygen in ambient intake air (`oxygen_in`)

Actual O2 intake, measured independently of combustion consumption and exhaust. Do not infer one gas species from an NOx indicator. Native neutral ordinary O2 gas CAS7782-44-7 resource from air, Mass/kg. Liquid/medical/ionic/excited/isotope aliases do not authorize those states or a purchased oxygen Product. Measure gross inlet independently of consumption and outlet without fixed air fractions.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Natural non-radioactive argon in intake air (`argon_in`)

Actual natural Ar in incoming air; no radioactive-isotope gas surrogate. Native neutral natural Ar gas CAS7440-37-1 resource from air, Mass/kg. Ar41/Ar40 alias noise establishes no isotope/activity or radioactive gas. Measure actual gross atmospheric inlet; no fixed air fraction or air-separation Product.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Water vapour in intake air (`humidity_in`)

Actual gaseous H2O intake from measured humidity/dewpoint and gas-state records; separate from purchased liquid water and structural clay water.

- Selected flow: Water vapour in intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Atmospheric carbon dioxide in intake air (`ambient_co2`)

Record actual incoming atmospheric CO2 separately from newly generated fossil/mineral/biogenic carbon.

- Selected flow: Atmospheric carbon dioxide in intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### Loam-glazed vitrified clay drainage pipe body (`finished_pipe`)

One finished non-refractory dense vitrified clay drainage pipe body after wet body preparation, vacuum extrusion and end forming, controlled drying, loam-slip glazing, gas firing, controlled cooling, actual ceramic end finishing and required body-quality acceptance. Integral fired glaze is included; polymer seals, couplings, adhesives, installed sewer, refractory kiln tube and porous unfired body are excluded. The native Product family is manufactured at plant with no fixed CAS, geometry, grade, recipe or geography; the primary-supported terminal qualifies this member without treating every ceramic product as equivalent. Q is unique first quality-released net kg, including measured declared moisture, excluding all packaging and fitted seals. Use only this physical terminal and agreed specification; no geometric, life or mass defaults.

- Selected flow: Non-refractory ceramic pipes, conduits, guttering and pipe fittings `53673d02-977a-4106-a54f-062fc9a197e8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `jrc-ceramic-bref-2007`; `ncpi-vcp-manual-2017`; `hepworth-clay-guide`

###### Liquid condensate returned to steam supplier (`condensate`)

Only actual external Product return at measured mass, temperature, pressure and agreed enthalpy reference. Never assume environmental discharge, a second water purchase or automatic credit.

- Selected flow: Liquid condensate returned to steam supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramic-bref-2007`

###### Liquid heating water returned to supplier (`heatwater_return`)

Only actual external hot-water carrier return; internal heat-exchanger circulation cancels. Keep supplier water/energy convention explicit.

- Selected flow: Liquid heating water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramic-bref-2007`

###### Reusable wooden transport pallet on gross physical shipments (`mfg_pallet_out`)

Only this actual packaging article leaving attached to gross physical product shipments, by one real destination/custodian and ownership. External returns sent have their own card. Packaging stays outside pipe Q and is never reduced by an economic share. Internal package transfers cancel with inherited vectors; do not count them as external shipment. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene strapping band on gross physical shipments (`mfg_strap_out`)

Only this actual packaging article leaving attached to gross physical product shipments, by one real destination/custodian and ownership. External returns sent have their own card. Packaging stays outside pipe Q and is never reduced by an economic share. Internal package transfers cancel with inherited vectors; do not count them as external shipment.

- Selected flow: Polypropylene strapping band on gross physical shipments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Polyethylene wrapping film on gross physical shipments (`mfg_film_out`)

Only this actual packaging article leaving attached to gross physical product shipments, by one real destination/custodian and ownership. External returns sent have their own card. Packaging stays outside pipe Q and is never reduced by an economic share. Internal package transfers cancel with inherited vectors; do not count them as external shipment. Native polyethylene film Product is factory production mix with CAS 9002-88-4 and Mass/kg; no fixed grade or geography. Restrict to one actual PE film sheet, not PET, multilayer film, bulk PE resin or waste. The native luggage/leather taxonomy is inconsistent with the coherent PE-film name/CAS/comment/physical form and is disclosed rather than used to waive a material conflict. Its PET comparison does not change PE identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated cardboard separator pad on gross physical shipments (`mfg_pad_out`)

Only this actual packaging article leaving attached to gross physical product shipments, by one real destination/custodian and ownership. External returns sent have their own card. Packaging stays outside pipe Q and is never reduced by an economic share. Internal package transfers cancel with inherited vectors; do not count them as external shipment.

- Selected flow: Corrugated cardboard separator pad on gross physical shipments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Reusable wooden transport pallet external return sent (`mfg_pallet_return_sent`)

Actual intact package sent back externally from this stage, with one real recipient/ownership and measured wet/net state. It is distinct from a package shipped with product or discarded as waste. An external return is physical custody transfer, not automatic coproduct, recovered-material credit or new pipe production. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene strapping band external return sent (`mfg_strap_return_sent`)

Actual intact package sent back externally from this stage, with one real recipient/ownership and measured wet/net state. It is distinct from a package shipped with product or discarded as waste. An external return is physical custody transfer, not automatic coproduct, recovered-material credit or new pipe production.

- Selected flow: Polypropylene strapping band external return sent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Polyethylene wrapping film external return sent (`mfg_film_return_sent`)

Actual intact package sent back externally from this stage, with one real recipient/ownership and measured wet/net state. It is distinct from a package shipped with product or discarded as waste. An external return is physical custody transfer, not automatic coproduct, recovered-material credit or new pipe production. Native actual PE film Product CAS9002-88-4, production mix at plant, Mass/kg, without fixed grade or geography. Only one compatible measured polyethylene film, not PET, multilayer assembly, bulk resin or waste. Native PET discussion describes a competing material; luggage/leather classification is isolated metadata debt, not a physical constraint waiver. Qualify actual supply/return integrity, moisture, ownership and provider; carried whole-supply material/water is counted once and original burden is not recreated on return.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated cardboard separator pad external return sent (`mfg_pad_return_sent`)

Actual intact package sent back externally from this stage, with one real recipient/ownership and measured wet/net state. It is distinct from a package shipped with product or discarded as waste. An external return is physical custody transfer, not automatic coproduct, recovered-material credit or new pipe production.

- Selected flow: Corrugated cardboard separator pad external return sent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

##### Waste flows

###### Wet unfired clay pipe reject (`unfired_reject`)

Actual external green reject after collection of internal trim/rework transfers; retain measured moisture and inherited per-exchange burden. Internal return is not a coproduct or new raw purchase.

- Selected flow: Wet unfired clay pipe reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Rejected fired clay pipe (`fired_reject`)

Actual rejected fired ware after kiln/cooling/finishing, including failed and zero-output batches. Sale as a distinct qualified coproduct requires explicit output and allocation evidence, not an automatic credit.

- Selected flow: Rejected fired clay pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Captured unfired clay dust (`captured_clay`)

One actual collected raw-preparation dust stream, moisture and composition measured. Internal reuse cancels as transfer; external disposal stays waste. Do not also emit captured material to air.

- Selected flow: Captured unfired clay dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Captured fired-clay grinding dust (`captured_fired`)

Only actual fired-pipe calibration/finishing dust. Keep this phase and chemistry separate from unfired clay dust and refractory wear.

- Selected flow: Captured fired-clay grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Clay-bearing wastewater treatment sludge (`sludge`)

One actual dewatered clay sludge stream. Retain gross wet mass, independent dry solids, composition and water; do not balance unknown solids and water with one residual.

- Selected flow: Clay-bearing wastewater treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Clay-process liquid wastewater (`wastewater`)

One actual transferred process wastewater mixture with measured volume and independent density/composition; COD and total elements are indicators, not invented chemical exchanges. Separate different destinations and real streams.

- Selected flow: Clay-process liquid wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Spent calcium hydroxide flue-gas sorbent (`spent_sorbent`)

Only actual spent sorbent mixture: retain reacted/unreacted phases, captured species, moisture and destination. This is a measured waste mixture, not the virgin reagent identity.

- Selected flow: Spent calcium hydroxide flue-gas sorbent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Spent polyester dust filter bag (`spent_filter`)

Actual spent bag polymer after separating attached dust subaccount; avoid duplicating whole loaded bag and its captured dust.

- Selected flow: Spent polyester dust filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Spent mineral lubricating oil (`spent_oil`)

Actual collected oil destination, including water/contamination and retained in-machine stock. Leaks to environment require separate actual substance/compartment rows.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Spent aluminosilicate kiln lining brick (`spent_lining`)

Actual removed refractory composition, water and entrained fired-clay deposits separately measured. Physical removal is not multiplied by the service allocation share.

- Selected flow: Spent aluminosilicate kiln lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Spent steel cutting wire (`steel_scrap`)

Actual retired cutting wire, separate from discarded dies or whole machines. Add each actual other part as its own waste row with component and service records.

- Selected flow: Spent steel cutting wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Loam glaze-bearing liquid residue (`glaze_waste`)

Actual external liquid glaze residue kept separate from body wastewater and dewatered sludge, with measured water, solids and each relevant element; internal glaze return cancels without repeated purchase.

- Selected flow: Loam glaze-bearing liquid residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Retired complete gas-fired tunnel kiln (`kiln_scrap`)

Conditional actual physical retirement. Record complete old article and attached water, fluid and material by separate measured subaccounts, original and repair history, incoming/new and outgoing/old masses and each destination. Service burden is an independent vector; never shrink gross retired mass by an allocation share. If dismantled, replace this complete-article transfer with each actual outgoing material instead of counting both.

- Selected flow: Retired complete gas-fired tunnel kiln
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Retired complete clay vacuum extruder (`extruder_scrap`)

Conditional actual physical retirement. Record complete old article and attached water, fluid and material by separate measured subaccounts, original and repair history, incoming/new and outgoing/old masses and each destination. Service burden is an independent vector; never shrink gross retired mass by an allocation share. If dismantled, replace this complete-article transfer with each actual outgoing material instead of counting both.

- Selected flow: Retired complete clay vacuum extruder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Retired complete pipe dryer (`dryer_scrap`)

Conditional actual physical retirement. Record complete old article and attached water, fluid and material by separate measured subaccounts, original and repair history, incoming/new and outgoing/old masses and each destination. Service burden is an independent vector; never shrink gross retired mass by an allocation share. If dismantled, replace this complete-article transfer with each actual outgoing material instead of counting both.

- Selected flow: Retired complete pipe dryer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Retired complete ceramic pipe kiln car (`car_scrap`)

Conditional actual physical retirement. Record complete old article and attached water, fluid and material by separate measured subaccounts, original and repair history, incoming/new and outgoing/old masses and each destination. Service burden is an independent vector; never shrink gross retired mass by an allocation share. If dismantled, replace this complete-article transfer with each actual outgoing material instead of counting both.

- Selected flow: Retired complete ceramic pipe kiln car
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Retired steel pipe extrusion die (`die_scrap`)

Conditional actual physical retirement. Record complete old article and attached water, fluid and material by separate measured subaccounts, original and repair history, incoming/new and outgoing/old masses and each destination. Service burden is an independent vector; never shrink gross retired mass by an allocation share. If dismantled, replace this complete-article transfer with each actual outgoing material instead of counting both.

- Selected flow: Retired steel pipe extrusion die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Captured loam-glaze spray solids (`glaze_dust_captured`)

Conditional actual collected glaze overspray/filter deposit from spraying. Separately measure whole wet captured stream, dry solids, mineral/oxide composition and water. Internal return to glaze cancels with inherited vectors; external captured material is not also emitted to air. Distinguish from unfired body dust and fired finishing dust.

- Selected flow: Captured loam-glaze spray solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Pre-release Waste wooden transport pallet (`mfg_pallet_waste`)

Only this actual packaging article exchanged before first body-quality release, including receipt with raw supplies and attached WIP custody. Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting. Keep it in the manufacturing packaging ledger; match actual internal package transfer to service without a new purchase or lost inherited burden. Gross physical custody remains separate from the attributed vector.

- Selected flow: Pre-release Waste wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Pre-release Waste polypropylene strapping band (`mfg_strap_waste`)

Only this actual packaging article exchanged before first body-quality release, including receipt with raw supplies and attached WIP custody. Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting. Keep it in the manufacturing packaging ledger; match actual internal package transfer to service without a new purchase or lost inherited burden. Gross physical custody remains separate from the attributed vector.

- Selected flow: Pre-release Waste polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Pre-release Waste polyethylene wrapping film (`mfg_film_waste`)

Only this actual packaging article exchanged before first body-quality release, including receipt with raw supplies and attached WIP custody. Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting. Keep it in the manufacturing packaging ledger; match actual internal package transfer to service without a new purchase or lost inherited burden. Gross physical custody remains separate from the attributed vector.

- Selected flow: Pre-release Waste polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

###### Pre-release Waste corrugated cardboard separator pad (`mfg_pad_waste`)

Only this actual packaging article exchanged before first body-quality release, including receipt with raw supplies and attached WIP custody. Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting. Keep it in the manufacturing packaging ledger; match actual internal package transfer to service without a new purchase or lost inherited burden. Gross physical custody remains separate from the attributed vector.

- Selected flow: Pre-release Waste corrugated cardboard separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_mfg`
- Sources: `jrc-ceramic-bref-2007`

##### Elementary flows

###### Carbon dioxide from fossil fuel oxidation (`co2_fossil`)

Actual molecular CO2 to current air from fossil fuel and actual fossil lubricant carbon; exclude atmospheric passthrough and mineral-carbonate CO2. Native Elementary fossil carbon dioxide emission to current unspecified air, CAS 124-38-9, Mass/kg. Use natural molecular gas from independently verified fossil carbon only, excluding mineral-carbonate and biogenic generation and incoming atmospheric passthrough. Broad dry-ice/ion/radioisotope synonyms do not change this state/origin restriction. No fixed geography or release-height subclass is supplied.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Carbon dioxide from mineral carbonate decomposition (`co2_mineral`)

Actual carbonate-derived CO2 from independently measured mineral carbon and reaction/retention evidence; not all ignition loss and not another fossil-fuel emission.

- Selected flow: Carbon dioxide from mineral carbonate decomposition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Carbon dioxide from biogenic feed carbon oxidation (`co2_biogenic`)

Only independently substantiated actual biogenic carbon; clay organic carbon is not automatically biogenic. No assumed pore former or credit. Native CO2 CAS124-38-9, biogenic-origin contemporary unspecified-air Mass/kg. Independently establish the actual organic carbon origin and reaction extent; mineral-carbonate, fossil-fuel and atmospheric pass-through CO2 remain separate. Dry-ice, ionic or 14C aliases do not authorize these phases/isotopes or total-carbon/stack-CO2 origin assignment.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Molecular nitrogen in exhaust air (`nitrogen_out`)

Gross actual N2 exhaust including passthrough, distinct from NO, NO2 and total N indicators. Ambient passthrough is reconciled separately for impact reporting. Native ordinary neutral gaseous N2 CAS7727-37-9, contemporary unspecified-air emission Mass/kg. Retain actual gross outlet/pass-through separately from inlet and nitrogen reactions; no fixed air composition, liquid/isotope/total-N, long-term or indoor substitution.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Molecular oxygen in exhaust air (`oxygen_out`)

Measured residual molecular O2 with dry/wet gas-state basis; do not infer from theoretical total air alone. Native neutral ordinary O2 gas CAS7782-44-7, contemporary unspecified-air emission Mass/kg. Keep actual gross residual outlet distinct from resource inlet and reaction consumption; no liquid/ionic/excited/isotope, indoor or long-term alias substitution.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Natural non-radioactive argon in exhaust air (`argon_out`)

Actual Ar passthrough at measured conditions; no radioactive isotope substitution. Native neutral natural Ar gas CAS7440-37-1 contemporary unspecified-air emission, Mass/kg. Gross pass-through is independently observed, separate from resource inlet; Ar41/Ar40 aliases do not authorize isotope/activity, indoor or long-term substitution.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Unreacted atmospheric carbon dioxide passthrough (`ambient_co2_out`)

Matched actual atmospheric CO2 intake and output at the physical gate, separate from newly generated CO2 source accounts. Do not characterize it as new fossil emission.

- Selected flow: Unreacted atmospheric carbon dioxide passthrough
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Water vapour in dryer and kiln exhaust (`vapour_out`)

Actual gaseous H2O: independently distinguish free feed water, ambient humidity, released structural water and combustion reaction water. Retained/free/liquid condensate states stay separate. One residual cannot fit both reaction extent and unknown water. Native Elementary emission to current unspecified air is water vapour, CAS 7732-18-5, Mass/kg. Use natural non-radioactive gaseous H2O only; broad water/ice/heavy-water/tritium synonyms do not permit liquid, structural water retained in solids or radioactive isotope substitution. Input ambient humidity and external Product condensate have separate identities and balances.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Carbon monoxide to current air (`co`)

Actual molecular CO mass and stack/fugitive destination, not CO2 equivalent or a generic incomplete-combustion total.

- Selected flow: Carbon monoxide to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Nitrogen monoxide to current air (`no`)

Only actual species-resolved NO; NOx expressed as NO2 equivalent does not prove NO mass. Preserve analytical detection limit and destination. Native Elementary emission to current unspecified air, CAS 10102-43-9, Mass/kg, without fixed geography. Only independently resolved molecular NO; misleading HNO/nitroxyl synonyms do not override the NO basename and CAS. Not total NOx, NO2 or purchased gas; a different destination/time needs its own identity.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Nitrogen dioxide to current air (`no2`)

Only independently resolved molecular NO2, no automatic splitting of total NOx.

- Selected flow: Nitrogen dioxide to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Sulfur dioxide to current air (`so2`)

Measured SO2 with raw sulfur, fuel sulfur and retained mineral phases reconciled; SOx indicator is not this exchange amount. Native Elementary emission to current unspecified air, CAS 7446-09-5, Mass/kg, no fixed geography. Apply only independently measured molecular SO2; broad sulfur-oxide/liquid synonyms do not establish total SOx, SO3 or aerosol mass. Preserve actual dry/wet sampling state and destination; no later native version is assumed equivalent.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Sulfur trioxide to current air (`so3`)

Only actual SO3 evidence distinct from SO2 and sulfate aerosol; no allocation of total sulfur by arbitrary shares.

- Selected flow: Sulfur trioxide to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Hydrogen fluoride gas to current air (`hf`)

Only resolved gaseous HF; total F, fluoride particulate or another fluorine species cannot be relabelled HF.

- Selected flow: Hydrogen fluoride gas to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Hydrogen chloride gas to current air (`hcl`)

Only measured gas-state HCl, not aqueous hydrochloric acid or total chloride. Keep moisture and sampling state. Native Elementary emission to current unspecified air, CAS 7647-01-0, Mass/kg. Limit to independently resolved natural gaseous HCl here, excluding purchased hydrochloric solution, aqueous effluent chloride, cleaning formulations and radioisotopes despite those broad synonyms.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Methane to current air (`methane`)

Only actual CH4 from incomplete combustion, feed organics or leak evidence. Whole fuel gas purchase is not duplicated as methane purchase.

- Selected flow: Methane to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Ethane to current air (`ethane`)

Only independently measured actual C2H6; TOC/VOC values do not establish this molecule or its mass.

- Selected flow: Ethane to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Uncaptured unfired clay particulate to air (`raw_dust_air`)

One actual uncaptured mineral particulate stream with measured composition, destination and nonoverlapping particle fractions. PM2.5 is nested in PM10; do not sum overlapping totals. Do not infer a pure chemical from particle size.

- Selected flow: Uncaptured unfired clay particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Uncaptured fired-clay particulate to air (`fired_dust_air`)

Only actual kiln/finishing fired-clay particulate, separate from captured dust, raw-clay dust and refractory wear. Add measured metal-bearing species as individual real exchanges, never infer them from total metal.

- Selected flow: Uncaptured fired-clay particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Uncaptured loam-glaze spray aerosol to current air (`glaze_aerosol_air`)

Only actual uncaptured wet glaze aerosol at the physical air gate with independently measured droplet water/solids and composition. It is a real particulate/droplet mixture, not one guessed oxide, VOC chemical or gas equivalent. Captured solids are excluded; add actual independent chemical species only where analytically resolved without duplicating whole aerosol.

- Selected flow: Uncaptured loam-glaze spray aerosol to current air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Waste heat to ambient air (`heat_air`)

Actual thermal-energy export to ambient air at measured thermal state/enthalpy reference, separate from material species and internal heat recovery. Keep exhaust species mass and sensible/latent heat as different physical quantities; do not create a second fuel/provider inventory.

- Selected flow: Waste heat to ambient air
- Flow property / unit: Thermal energy / MJ
- Amount rule: Use only the single final manufacturing quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-ceramic-bref-2007`

### Process: Original-cohort FG services (`service`)

#### Inputs

##### Product flows

###### Reusable wooden pipe transport pallet (`pallet`)

One actual whole wooden pallet, owned/pool convention and dry/wet mass stated. Track new purchase, external return received, attached stock, shipment, external return and waste. Internal reuse does not create another purchase. This input card is new purchased packaging only. Packaging received with another supplied good and externally returned packaging have separate positive physical-receipt cards; match internal stage transfers without another purchase. All quantities keep actual ownership and one destination/custodian. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polypropylene pipe strapping band (`strap`)

One actual supplied PP band, complete grade and mass per observed pack. Do not count resin pellets again; other real strap materials need separate rows. This input card is new purchased packaging only. Packaging received with another supplied good and externally returned packaging have separate positive physical-receipt cards; match internal stage transfers without another purchase. All quantities keep actual ownership and one destination/custodian.

- Selected flow: Polypropylene pipe strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polyethylene pipe wrapping film (`film`)

One actual PE film grade, mass and observed unit coverage, not an area-to-mass assumption or generic packaging total. This input card is new purchased packaging only. Packaging received with another supplied good and externally returned packaging have separate positive physical-receipt cards; match internal stage transfers without another purchase. All quantities keep actual ownership and one destination/custodian. Native polyethylene film Product is factory production mix with CAS 9002-88-4 and Mass/kg; no fixed grade or geography. Restrict to one actual PE film sheet, not PET, multilayer film, bulk PE resin or waste. The native luggage/leather taxonomy is inconsistent with the coherent PE-film name/CAS/comment/physical form and is disclosed rather than used to waive a material conflict. Its PET comparison does not change PE identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Corrugated cardboard pipe separator pad (`pad`)

Conditional actual single corrugated pad construction and moisture. Do not adopt a fixed recycled-fibre recipe without matching supplier evidence. This input card is new purchased packaging only. Packaging received with another supplied good and externally returned packaging have separate positive physical-receipt cards; match internal stage transfers without another purchase. All quantities keep actual ownership and one destination/custodian.

- Selected flow: Corrugated cardboard pipe separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Alternating current (`service_electricity`)

Only incremental post-first-release storage, packing, handling, loading, retesting and return/rework electricity, attributed to original released cohort Q over the stated observed service horizon. Same native restriction as manufacturing: CN grid-average consumption mix to user below 1 kV, Net calorific value/MJ with raw kWh times 3.6. Closing FG manufacturing burden is not removed from first-release Q. Native Product is CN grid-average customer consumption mix below 1 kV with Net calorific value reference in MJ and no CAS. Binding is conditional on this voltage/geographic/provider scope; a different grid or voltage requires a newly verified matching identity rather than silently extending this one. Meter original kWh and convert once by 3.6; never count an additional generation inventory over the complete provider.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Complete electric pipe handling forklift (`forklift`)

Actual handling asset, service and physical stock separate. Installed battery is a whole-asset subaccount unless actually purchased as a replacement; real battery, tyre and fluid replacements each require distinct exchanges.

- Selected flow: Complete electric pipe handling forklift
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Reusable wooden transport pallet received with supplied goods (`pallet_with_supply`)

Actual packaging received attached to another externally supplied good at this stage, recorded once by material and ownership. Its physical receipt is retained even when its upstream burden is included in the whole supplied-good provider; do not purchase the package a second time or add duplicate provider burden. Match package/subaccount conventions explicitly. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Reusable wooden transport pallet external return received (`pallet_return_received`)

Actual intact package externally returned to this stage, with one real counterparty, date, ownership, moisture and condition. Retain original burden and actual incremental cleaning/repair; no negative purchase, new manufacture, repeated whole-original package burden or automatic credit. Damaged waste returned as waste must use its actual waste identity instead. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polypropylene strapping band received with supplied goods (`strap_with_supply`)

Actual packaging received attached to another externally supplied good at this stage, recorded once by material and ownership. Its physical receipt is retained even when its upstream burden is included in the whole supplied-good provider; do not purchase the package a second time or add duplicate provider burden. Match package/subaccount conventions explicitly.

- Selected flow: Polypropylene strapping band received with supplied goods
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polypropylene strapping band external return received (`strap_return_received`)

Actual intact package externally returned to this stage, with one real counterparty, date, ownership, moisture and condition. Retain original burden and actual incremental cleaning/repair; no negative purchase, new manufacture, repeated whole-original package burden or automatic credit. Damaged waste returned as waste must use its actual waste identity instead.

- Selected flow: Polypropylene strapping band external return received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polyethylene wrapping film received with supplied goods (`film_with_supply`)

Actual packaging received attached to another externally supplied good at this stage, recorded once by material and ownership. Its physical receipt is retained even when its upstream burden is included in the whole supplied-good provider; do not purchase the package a second time or add duplicate provider burden. Match package/subaccount conventions explicitly. Native actual PE film Product CAS9002-88-4, production mix at plant, Mass/kg, without fixed grade or geography. Only one compatible measured polyethylene film, not PET, multilayer assembly, bulk resin or waste. Native PET discussion describes a competing material; luggage/leather classification is isolated metadata debt, not a physical constraint waiver. Qualify actual supply/return integrity, moisture, ownership and provider; carried whole-supply material/water is counted once and original burden is not recreated on return.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polyethylene wrapping film external return received (`film_return_received`)

Actual intact package externally returned to this stage, with one real counterparty, date, ownership, moisture and condition. Retain original burden and actual incremental cleaning/repair; no negative purchase, new manufacture, repeated whole-original package burden or automatic credit. Damaged waste returned as waste must use its actual waste identity instead. Native actual PE film Product CAS9002-88-4, production mix at plant, Mass/kg, without fixed grade or geography. Only one compatible measured polyethylene film, not PET, multilayer assembly, bulk resin or waste. Native PET discussion describes a competing material; luggage/leather classification is isolated metadata debt, not a physical constraint waiver. Qualify actual supply/return integrity, moisture, ownership and provider; carried whole-supply material/water is counted once and original burden is not recreated on return.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Corrugated cardboard separator pad received with supplied goods (`pad_with_supply`)

Actual packaging received attached to another externally supplied good at this stage, recorded once by material and ownership. Its physical receipt is retained even when its upstream burden is included in the whole supplied-good provider; do not purchase the package a second time or add duplicate provider burden. Match package/subaccount conventions explicitly.

- Selected flow: Corrugated cardboard separator pad received with supplied goods
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Corrugated cardboard separator pad external return received (`pad_return_received`)

Actual intact package externally returned to this stage, with one real counterparty, date, ownership, moisture and condition. Retain original burden and actual incremental cleaning/repair; no negative purchase, new manufacture, repeated whole-original package burden or automatic credit. Damaged waste returned as waste must use its actual waste identity instead.

- Selected flow: Corrugated cardboard separator pad external return received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Wooden pallet repair board (`pallet_repair_wood`)

Only actual separate repair-board receipts with measured wood species/treatment, dry material and free/absorbed water, ownership and provider. Not a whole pallet; separately bought fasteners/glue require specific cards. Original Qc/H incremental service only; no assumed repair or life. Closing retention never cancels actual added material/water.

- Selected flow: Wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Tap water (`pack_repair_water`)

Only actual external treated municipal tap water for packaging cleaning/repair, native Product Mass/kg without fixed geography/CAS; qualify actual treatment/provider. Not raw abstraction, steam, wastewater or duplicate water already carried in a whole supply. Independently measure state and additions, retained moisture and liquid/vapour exits; native secondary Volume coefficient is not measured density. Original Qc/H incremental service only. Match the actual municipal potable-water treatment boundary; supplier quality and any independent volume-to-mass conversion remain observed requirements.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

##### Waste flows

##### Elementary flows

##### Elementary flows

###### Atmospheric water vapour absorbed by packaging (`pack_humidity_in`)

Only actual observed ambient H2O-vapour uptake, CAS7732-18-5, for original Qc/H packaging service. Independently measure humidity/state and uptake mass; no fixed air fraction or inferred density. Distinct from water in received packages/wood/liquid purchases. Real uptake retained in closing wet stock remains an influx, not cancelled by that stock or another atomic card.

- Selected flow: Atmospheric water vapour absorbed by packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### Reusable wooden transport pallet on gross physical shipments (`pallet_out`)

Only this actual packaging article leaving attached to gross physical product shipments, by one real destination/custodian and ownership. External returns sent have their own card. Packaging stays outside pipe Q and is never reduced by an economic share. Internal package transfers cancel with inherited vectors; do not count them as external shipment. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polypropylene strapping band on gross physical shipments (`strap_out`)

Only this actual packaging article leaving attached to gross physical product shipments, by one real destination/custodian and ownership. External returns sent have their own card. Packaging stays outside pipe Q and is never reduced by an economic share. Internal package transfers cancel with inherited vectors; do not count them as external shipment.

- Selected flow: Polypropylene strapping band on gross physical shipments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polyethylene wrapping film on gross physical shipments (`film_out`)

Only this actual packaging article leaving attached to gross physical product shipments, by one real destination/custodian and ownership. External returns sent have their own card. Packaging stays outside pipe Q and is never reduced by an economic share. Internal package transfers cancel with inherited vectors; do not count them as external shipment. Native polyethylene film Product is factory production mix with CAS 9002-88-4 and Mass/kg; no fixed grade or geography. Restrict to one actual PE film sheet, not PET, multilayer film, bulk PE resin or waste. The native luggage/leather taxonomy is inconsistent with the coherent PE-film name/CAS/comment/physical form and is disclosed rather than used to waive a material conflict. Its PET comparison does not change PE identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Corrugated cardboard separator pad on gross physical shipments (`pad_out`)

Only this actual packaging article leaving attached to gross physical product shipments, by one real destination/custodian and ownership. External returns sent have their own card. Packaging stays outside pipe Q and is never reduced by an economic share. Internal package transfers cancel with inherited vectors; do not count them as external shipment.

- Selected flow: Corrugated cardboard separator pad on gross physical shipments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Reusable wooden transport pallet external return sent (`pallet_return_sent`)

Actual intact package sent back externally from this stage, with one real recipient/ownership and measured wet/net state. It is distinct from a package shipped with product or discarded as waste. An external return is physical custody transfer, not automatic coproduct, recovered-material credit or new pipe production. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg; no fixed geography/CAS. Other family members include post/collar/side-rail/end-rail platforms and separate hinged wooden collars; this row selects only the actual whole transport pallet, with measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, item weight or life inferred. Whole purchased contents counted once; actual repair boards are separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polypropylene strapping band external return sent (`strap_return_sent`)

Actual intact package sent back externally from this stage, with one real recipient/ownership and measured wet/net state. It is distinct from a package shipped with product or discarded as waste. An external return is physical custody transfer, not automatic coproduct, recovered-material credit or new pipe production.

- Selected flow: Polypropylene strapping band external return sent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Polyethylene wrapping film external return sent (`film_return_sent`)

Actual intact package sent back externally from this stage, with one real recipient/ownership and measured wet/net state. It is distinct from a package shipped with product or discarded as waste. An external return is physical custody transfer, not automatic coproduct, recovered-material credit or new pipe production. Native actual PE film Product CAS9002-88-4, production mix at plant, Mass/kg, without fixed grade or geography. Only one compatible measured polyethylene film, not PET, multilayer assembly, bulk resin or waste. Native PET discussion describes a competing material; luggage/leather classification is isolated metadata debt, not a physical constraint waiver. Qualify actual supply/return integrity, moisture, ownership and provider; carried whole-supply material/water is counted once and original burden is not recreated on return.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Corrugated cardboard separator pad external return sent (`pad_return_sent`)

Actual intact package sent back externally from this stage, with one real recipient/ownership and measured wet/net state. It is distinct from a package shipped with product or discarded as waste. An external return is physical custody transfer, not automatic coproduct, recovered-material credit or new pipe production.

- Selected flow: Corrugated cardboard separator pad external return sent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

##### Waste flows

###### Waste wooden transport pallet (`pallet_waste`)

Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Waste polypropylene strapping band (`strap_waste`)

Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting.

- Selected flow: Waste polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Waste polyethylene wrapping film (`film_waste`)

Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Waste corrugated cardboard separator pad (`pad_waste`)

Actual separate waste of this one packaging material, including offcuts, damaged returns and cleaning losses. Retain whole-pack versus component accounting and moisture to prevent double counting.

- Selected flow: Waste corrugated cardboard separator pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Retired complete electric pipe-handling forklift (`forklift_scrap`)

Actual full-article external retirement only; separately measure attached fluids and excluded loose payload. Keep gross stock/return/waste balance separate from its measured service-burden allocation. Dismantled material exports replace rather than duplicate this transfer.

- Selected flow: Retired complete electric pipe-handling forklift
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Discarded wooden pallet repair board (`removed_pallet_wood`)

Actual old board removed during packaging repair, independently weighed dry wood/water/contamination and real destination. Not whole-pallet waste and no duplicate W/other exit. A sale does not automatically subtract manufacture or treatment burdens or establish a coproduct/credit.

- Selected flow: Discarded wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

###### Packaging cleaning and repair wastewater (`pack_repair_wastewater`)

Only actual packaging cleaning/repair wastewater sent for treatment, retaining measured liquid mass, wood/other contaminants and destination. Not direct environmental liquid water. Separate from retained wet-package/wood water and vapour/other exits; no COD/element total interpreted as chemical species. Original Qc/H actual incremental service.

- Selected flow: Packaging cleaning and repair wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010`

##### Elementary flows

##### Elementary flows

###### water vapour (`pack_water_vapour`)

Only actual package-repair/storage gaseous H2O CAS7732-18-5, contemporary unspecified-air Mass/kg, over original Qc/H. Native ice/heavy-water/ionic aliases do not authorize those states. Measure evaporation independently of dry-material loss; one wet residual cannot fit both. No duplicate water in other outgoing flow terms; actual incoming moisture retained in closing stocks stays an influx.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single final original-cohort service quotient in Section 8 for this row; raw protocol records remain undivided and no second quotient is applied.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_service`
- Sources: `jrc-ceramic-bref-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | attributional manufacture and services | Use this allocation sequence only for the declared attributional decision context in which allocation is appropriate. Consequential substitution/system expansion and comparisons of multifunctional products are different cases and require a separate method. Industrial manufacturing diagrams establish no allocation rule. | `ilcd-general-guide-2010` |
| a_subdivide | each exchange | First isolate dedicated operations and actual separately metered lines. Use actual or virtual subdivision to assign exclusive ingredients, glaze, identified parts, losses and utility demands to their physical receiving functions. Shared kiln presence alone does not justify a plant-wide mass or revenue split. | `ilcd-general-guide-2010` |
| a_causality | remaining exchange | For each remaining exchange independently identify the determining physical cause that changes its quantity with each function. Demonstrate heating demand from actual ware/water/thermal history and time or equipment service from measured capacity constraint and duration when these really determine demand. Candidate mass/area/time keys require evidence; no universal key or fixed share. | `ilcd-general-guide-2010` |
| a_residual_market | only genuinely residual joint-process exchanges | Only after documented failure of subdivision and determining physical causality may the actual remaining common-process exchanges use contemporaneous market value at the same process gate and actual output state/quality/quantity. Remove downstream packing/transport margins where needed to recover that gate value; disclose derivation, uncertainty and sensitivity. Never freely choose economic versus physical allocation. | `ilcd-general-guide-2010` |
| a_loss_reuse | rejects and transfers | Carry failed ware, genuine rework, startup and cleanup burdens with their causal cohorts. Internal trim/chamotte/glaze return is a transfer with inherited per-exchange vectors, not new production or negative consumption. Actual waste remains separately identified; selling scrap does not establish an automatic co-product or avoided-production credit. New co-function status needs evidence and the same sequence. | `ilcd-general-guide-2010` |
| a_physical_ledgers | each physical gate | Keep original gross material, return, waste, packaging and capital custody balances separate from the attributional exchange vector. Economic or service-burden shares never shrink observed gross physical masses. Reconcile assigned exchange shares completely without duplicating the original shared inventory. | `ilcd-general-guide-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Every protocol collects undivided raw records only. The aggregation_rule field states the final target basis; it performs no normalization. Raw units and state conversion, inheritance and actual allocation remain required before the single final equation in this section.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | material receipts and actual consumption | collected_record | lot; supplied grade; whole wet mass; moisture; mineral assay; opening and closing raw/WIP/store vectors; transfer IDs; glaze purchased or site-mixed state; receipt_or_net_consumption_basis; stock_adjustments_already_applied; consumed_opening_history | Use calibrated net scales and actual invoices, assays and recipe issue/return records at every physical stage; whole supply once. | kg | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_energy | manufacture | electricity and fuel and real external heat/carriers | collected_record | meter start and end; kWh; gas integrated m3 or rate; pressure; temperature; wet/dry basis; independent density and composition; measured HHV/LHV; carrier kg; enthalpy states; substep and operating mode | Retain original energy/volume/mass records separately; apply actual gas-state and calorific conversions before assignment. Measure genuine external returns separately. | row native units | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_species | manufacture | each intake or emitted species | collected_record | species CAS; origin; compartment; phase; sampling state; integrated volume or actual rate and time; analytical concentration; detection limit; independent density; reaction and retained-element evidence | Use species-resolved analyses and measured flow states; integrated concentration times accumulated volume needs no second time multiplier. Measure water phases and element balances independently. | kg | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_waste | manufacture | each rejected body or liquid or solid residue | collected_record | stream ID; destination; wet mass; independent dry solids and composition; sampled density; source stage; internal reuse; inherited vector; failure and cleanup events | Weigh each external waste transfer separately; sample liquid density at recorded temperature and solids/composition independently; do not infer absence from missing data. | kg | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_asset | manufacture | each equipment or replacement service and physical article | collected_record | asset serial; complete-article and component inventory; new and old additions; repair/removal mass; water and in-machine fluid; actual service history; capacity constraint; opening/closing custody; inherited service vector | Keep gross calibrated article/part/fluid custody and real history separately from current attributable service-burden vector; no invented lifetime. Separately reconcile each physical article: opening+actual gross receipts+new material/water = closing+outward returns+retirement+wear into other recorded streams+actual water loss/other exits, with disjoint terms. Whole-asset included parts/fluids are subaccounts; separately supplied repair new/old material/water has its own exchange. Closing retention does not cancel influx and service shares do not shrink physical custody. | kg and measured service units | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_release | manufacture | first-quality-released bare pipe body | collected_record | unique body and cohort IDs; net released mass Q; moisture basis; measured geometry; glaze coverage; no-fitted-seal state; actual test specification and result; first-release time; failure record | Weigh complete qualified bodies on calibrated scales excluding packages and fitted accessories; join unique first acceptance with dimensions, straightness, impermeability and strength requirements of the declared product specification. No guessed item kg. | kg | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_pack_service | service | each packaging material and ownership | collected_record | design and ownership ID; opening empty/attached-WIP/attached-FG/reusable; purchases; packages with supplied goods; external returns received; corresponding closing stocks; gross-shipment attachment; external return sent; waste; moisture and residual; actual_Radd_Rremove; independent_H2Oin_H2Oout; dry_material; free_absorbed_water; same_side_flow_ownership | Reconcile independent custody for each package design and material at both physical gates; separate every actual destination. Internal reuse is a transfer only. Add measured repair material Radd, removed old material Rremove, absorbed/added water H2Oin and water release H2Oout per article: disjoint opening pools+P+I+ER+Radd+H2Oin = closing pools+G+EO+W+Rremove+H2Oout. Deduplicate the same water/material only against another same-side flow term of this bridge, never cancel real influx because closing wet stock includes it, an opposite-direction term exists or another atomic card is present. Dry wood/material and free/absorbed water are independent; one residual cannot fit two unknowns. Every real repair/cleaning water/material destination needs a specific atomic row with manufacture-Q or original-Qc/H ownership; repair is not assumed. | kg | Every lot/event with continuous meters where applicable | Original cohort and full observed H including opening/closing events | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_service | service | original-cohort post-release electricity and incremental operations | collected_record | original cohort c; original Qc; observation horizon H; event timestamps; stage meter original units; storage occupancy and duration; gross dispatch and actual returned mass; retest and incremental rework; opening/closing service-material vectors | Collect actual post-release events and energy at original units without reassigning original FG manufacture; track rework moisture/material change and no new production. Add actual separate service fuel/water/species rows when present. | MJ and original kWh | Every lot/event with continuous meters where applicable | Original cohort and full observed H including opening/closing events | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_asset_service | service | forklift article and service | collected_record | asset and cohort IDs; gross additions and removals; opening/closing asset and fluid custody; service demand and duration; actual shared capacity limit; original asset/repair burden | Measure true electric-handling equipment service and gross custody independently; new batteries, tyres or fluids bought separately require their own specific row and query. Separately reconcile each physical article: opening+actual gross receipts+new material/water = closing+outward returns+retirement+wear into other recorded streams+actual water loss/other exits, with disjoint terms. Whole-asset included parts/fluids are subaccounts; separately supplied repair new/old material/water has its own exchange. Closing retention does not cancel influx and service shares do not shrink physical custody. | kg and measured service units | Every lot/event with continuous meters where applicable | Original cohort and full observed H including opening/closing events | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_freight | manufacture | actual upstream transport service | collected_record | shipment ID; actual cargo net/gross mass; route and distance; carrier type; load constraint; supplier delivery boundary; packaging custody | Use actual freight records and documented mass/distance conversion; separate freight service from payload and from an already transport-inclusive provider. | t km | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_cohort | manufacture | opening and closing raw/WIP and unassigned-store inheritance | collected_record | cohort and physical state; raw/WIP/store quantities; per-exchange inherited vectors Bopen/Bclose; real internal transfers; actual modes and failed Q0; released FG separated | Audit original inventory history per exchange at each stage; exclude already-first-released FG from manufacture Bclose but retain its physical stock and original vectors in cp_fg. | exchange native units | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_fg | service | FG physical and original burden bridge | collected_record | FG_open and FG_close by original cohort; Q received once; G_phys; R_phys; independent returned composition/moisture; actual incremental additions and losses; original manufacturing vectors; external shipment/return IDs; actual_manufacturer_permission; terminal_grade_compatibility; actual_rework_route; post_rework_body_acceptance; disposition; new_material_water; removed_old_material; independent_water_loss | Reconcile gross physical FG separately from service and manufacturing burden ledgers. Observe changed return mass instead of equating it to an old shipment. Preserve original burden metadata; do not recalculate manufacture at current rates. Real rework requires manufacturer permission and compatibility with the same bare-pipe grade/terminal, recording actual route, material/water additions, removed old material, independent water losses and actual post-rework specified dimensional, crack/integrity, strength/impermeability reacceptance and disposition. Do not assume cracked pipe repair, refiring or retest automatically passes. Failed articles need actual-state/destination waste or another method, retaining original Qc/H and manufacturing history. | kg and exchange native units | Every lot/event with continuous meters where applicable | Original cohort and full observed H including opening/closing events | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |
| cp_pack_mfg | manufacture | each packaging material and ownership | collected_record | design and ownership ID; opening empty/attached-WIP/attached-FG/reusable; purchases; packages with supplied goods; external returns received; corresponding closing stocks; gross-shipment attachment; external return sent; waste; moisture and residual; actual_Radd_Rremove; independent_H2Oin_H2Oout; dry_material; free_absorbed_water; same_side_flow_ownership | Reconcile independent custody for each package design and material at both physical gates; separate every actual destination. Internal reuse is a transfer only. Add measured repair material Radd, removed old material Rremove, absorbed/added water H2Oin and water release H2Oout per article: disjoint opening pools+P+I+ER+Radd+H2Oin = closing pools+G+EO+W+Rremove+H2Oout. Deduplicate the same water/material only against another same-side flow term of this bridge, never cancel real influx because closing wet stock includes it, an opposite-direction term exists or another atomic card is present. Dry wood/material and free/absorbed water are independent; one residual cannot fit two unknowns. Every real repair/cleaning water/material destination needs a specific atomic row with manufacture-Q or original-Qc/H ownership; repair is not assumed. | kg | Every lot/event with continuous meters where applicable | Complete declared manufacture period including failures and idle | Actual facility and declared stages/providers | per reference flow | Original records and calibration; actual test/analysis scope and uncertainty; missingness explicitly marked |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_units | each original raw record | Convert original units/state before attribution: electricity_MJ = electricity_kWh * 3.6; fuel_MJ_HHV = measured gas volume at declared state * independent measured HHV per same-state volume; carrier_mass = measured same-state volume * independent measured density. Integrate only actual rates once. Never use secondary-property factors as measured mass/density or multiply an accumulated volume by time. For actual external thermal carriers, multiply each independently measured supply/return mass in kg by its own same-reference specific enthalpy in kJ/kg to obtain that leg's kJ, then divide by 1000 once to obtain MJ. Unequal supply/return masses require their separate enthalpy legs and actual loss/storage terms on the same boundary, period and energy basis; use m times delta-h only for a demonstrated matched carrier mass and boundary. This conversion invents neither efficiency nor a second provider purchase. | cp_energy; cp_species; cp_material | Unnormalized unit-consistent raw exchange U_i | `jrc-ceramic-bref-2007` |
| calc_manufacture | all manufacturing rows | For each exchange i form C_i = Bopen_i + U_i - Bclose_i, keeping signed real input/output quantities and inherited vectors; Bclose excludes released FG. Assign C_i to target cohort by Section 7 subdivision then determining causality then only genuine residual market value to obtain A_i. The single final quotient is q_i = A_i / Q for Q > 0; finished_pipe output is 1 kg. Cards and protocol aggregation cite this same result without further division. If Q = 0 retain actual load and disposition but produce no unit result. Declare receipt/occurrence versus already-stock-adjusted actual net-consumption basis per exchange; never correct net consumption for the same stock a second time. Consumed opening material retains complete upstream vectors; unreleased WIP/non-WIP use consistent bases, with physical quantity and every inherited exchange history separate. Ordinary waste transfer/sale does not automatically subtract original manufacture/treatment burden; apply Section7 actual function/attribution without implicit credit. For a package, FG or asset custody-only physical movement card, override the burden-stock assignment for that physical disclosure: A_i is the actual full gross leg V_i in its native extensive unit, not Bopen_i + U_i - Bclose_i, an inherited burden or an economically allocated quantity. The same final q_i = V_i / Q reports that gross leg once, separately from the manufacturing burden vector, without another purchase, provider load or credit. This exception does not alter actual separately attributable supply, treatment or service burdens and does not stock-correct already measured gross movements. This same physical-only override also covers actual gross thermal-carrier ingress and external Product returns, including the carrier kg of steam, condensate and heatwater_return where actually present. Use independently measured gross carrier mass and its pressure, temperature, phase/dryness and agreed enthalpy reference; keep actual heat MJ as a separate dimension of the chosen one whole-provider supply/service, not an additional carrier-water or heat purchase. Internal circulation cancels rather than becoming an external gross leg. An actual return alone creates no credit and does not remove separately attributable real supply, conditioning, treatment or service burdens. | cp_cohort; cp_material; cp_energy; cp_species; cp_waste; cp_asset; cp_freight; cp_pack_mfg; cp_release | Per-reference-flow manufacturing inventory | `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010` |
| calc_service | all service rows | For original cohort c over observed H, A_icH is actual incremental service exchange after unit conversion, service-material stock inheritance and Section 7 assignment. The single final quotient is q_icH = A_icH / Qc for original Qc > 0. Keep original FG manufacturing vectors separately; no subtraction of released closing FG manufacture, no current manufacturing recount, no new Q and no second quotient in a card. If Qc = 0 report no unit result. For package, FG or asset custody-only physical movement cards, A_icH is instead the actual full gross leg V_icH in its native extensive unit; report q_icH = V_icH / Qc using this same single quotient. Do not add inherited manufacture, correct this gross leg for stocks, replace it with a service-burden vector or scale it by an economic share. Keep the gross physical view separate from actual attributable incremental service burdens, with no additional supply purchase, provider load or credit. Actual performed services remain assigned to original Qc/H even if serviced FG stays held at closing; only genuinely unconsumed and unassigned service-material stores may carry forward. This same physical-only override also covers actual gross thermal-carrier ingress and external Product returns, including the carrier kg of steam, condensate and heatwater_return where actually present. Use independently measured gross carrier mass and its pressure, temperature, phase/dryness and agreed enthalpy reference; keep actual heat MJ as a separate dimension of the chosen one whole-provider supply/service, not an additional carrier-water or heat purchase. Internal circulation cancels rather than becoming an external gross leg. An actual return alone creates no credit and does not remove separately attributable real supply, conditioning, treatment or service burdens. | cp_service; cp_pack_service; cp_asset_service; cp_fg | Observed original-cohort service inventory | `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010` |
| calc_fg_bridge | physical FG and consolidation | At consistent gates FG_open + Q + R_phys + actual added mass = FG_close + G_phys + FG_waste + actual mass lost. Use measured return composition/water and separate product/packaging/species. Q is an internal manufacture-to-FG transfer: cancel it on consolidation, never add Q and closing FG as external production. Keep each original cohort burden and actual service vector independently. Net-delivery accounting is unavailable without original D_rev bridge and cannot replace this Q. | cp_release; cp_fg; cp_service | Physical FG and original-burden bridge without new output | `jrc-ceramic-bref-2007` |
| calc_physical | manufacture; FG; combined; packages; assets | At each physical gate reconcile opening stocks + gross external inputs + actual received transfers = closing stocks + gross external outputs + actual sent transfers, including air species, vapour/liquid and material phases. Cancel internal transfers in the combined gate. Independently check relevant element and reaction balances; never use an allocation share on this gross balance or fit two unknowns with one residual. Capital custody and each package obey the same independent conservation with their specific terms in Section 5. | cp_cohort; cp_fg; cp_species; cp_pack_mfg; cp_pack_service; cp_asset; cp_asset_service | Independent mass and element and phase closure | `jrc-ceramic-bref-2007` |
| calc_assets | equipment and components | Determine current service-burden vectors from actual article/repair inherited inventories and measured service-demand/capacity/duration evidence using Section 7. Physical complete-article and part additions/removals, stored fluids and moisture remain gross custody, not multiplied by economic shares. Never invent life, annual output, utilization or a per-kg whole-machine dose. Do not double count capital components or raw physical articles as another consumed service inventory. | cp_asset; cp_asset_service | Attributable capital service vector and separate gross custody | `ilcd-general-guide-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_terminal | identity and applicability | Match actual supplied form and complete body terminal, exact native restrictions, independent primary context and required qualifiers; ordinary provider uncertainty is disclosed rather than substituted by another product. | Product specification; full provider/native records; actual body tests |
| dq_measurement | all observed records | Retain calibration, raw units/state, detection limits, missingness and actual route/configuration/time/site scope; no fabricated numerical defaults or implied whole-plant pass. | Original scales/meters/analyses and uncertainty |
| dq_completeness | all stages and modes | Include every real atomic exchange, all operating modes, raw/WIP/FG/asset/package stocks and inherited vectors, actual returns/rework and observed services; expose each unbound or unmeasured relationship. | Independent stock/species/custody ledgers and source-specific gap register |
| dq_method | assignment and downstream use | Document decision context, exchange-specific allocation sequence, contemporaneous common-gate prices only where residual, actual H/Qc and uncertainty. No installation, pressure class or service-life equivalence is established by kg. | Attribution evidence and original cohort traceability |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference and bound rows | Require physically compatible finished Product identity and each exact native extensive-property/unit chain. Retain all material/form/route/CAS/geography/media/type restrictions and provider conditions in the card. A wrong family, unreconciled hard conflict or unresolved reference identity blocks use; ordinary unresolved auxiliaries remain explicit collection/identity gaps. | `jrc-ceramic-bref-2007` |
| v_gate | reference product; manufacture; service | Verify complete route and true bare-glazed terminal, specification and unique first-release records. Reject manufacturing Q deduction for released closing FG, double Q/FG output, net-delivery substitution, reinspection production and omission of original-cohort H/Qc services. | `jrc-ceramic-bref-2007`; `ncpi-vcp-manual-2017`; `hepworth-clay-guide` |
| v_raw_once | all quantities | Require undivided raw collection, state-specific conversion and supported attribution before the single calc_manufacture or calc_service quotient. Cards and aggregation only reference its result. Missing density, gas state, calorific basis or denominator evidence is unknown, never pass. For Q or Qc zero preserve actual loads and report no unit result. | `jrc-ceramic-bref-2007` |
| v_closure | manufacture; FG; combined; packages; assets | Verify independent gross mass and relevant element/species/water/reaction balances at all consistent physical gates, original inherited exchange vectors, each package custody balance, capital/parts/fluid custody and separate service burden. One residual for two unknowns, provider duplication or converting a total indicator into a species fails completeness. | `jrc-ceramic-bref-2007` |
| v_allocation | each joint exchange | Audit subdivision, determining physical cause and only residual common-gate market value in that order, with actual evidence and uncertainty. Engineering/schema/finite-measurement checks establish neither scientific/translation approval nor accepted classification mapping/publication. | `ilcd-general-guide-2010` |
| v_sources | complete input package | Source-specific applicable primary context and actual foreground observations must support the intended claim. A historical case diagram, source registry status, tool exit zero or metadata match supplies no numerical plant coverage. Expose unavailable observations, unresolved flows, exclusions and uncertainty; do not label a draft or unmeasured plant as covered. | `jrc-ceramic-bref-2007`; `ilcd-general-guide-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Attributed complete-pipe-body manufacture and separately disclosed observed cohort services at matched terminal |
| allowed_use | Actual qualified bare loam-glazed pipe-body supply with applicable upstream and service contexts |
| excluded_use | Installed sewer comparison; pressure/jacking service; generic life/strength claims; polymer/cement/refractory substitution; fitting/seal assembly; unverified provider or missing core identity |
| required_metadata | All Section 3 qualifiers; full original raw/WIP/FG and physical custody context; source-specific evidence; exact native restrictions; Q and original H/Qc |
| required_quality_disclosure | Actual scope and missingness; unbound specific exchanges; calibration and uncertainty; source age and counterexamples; scientific/translation/mapping state |
| update_trigger | Changed clay/glaze supplied form or route; fitted seal/component terminal; kiln/utility/provider or native restrictions; new actual emissions or stock/service basis |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-ceramic-bref-2007 | official_guidance | European Commission JRC, Ceramic Manufacturing Industry BREF, August 2007, §§1.5.2 and 2.3.2 and 3.3.2; Figures 2.14/2.15 and 3.5; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | Primary conventional pipe raw preparation, extrusion, drying, loam glazing, firing, optional end treatment and process emissions/losses; tables/diagrams are conditional historical examples rather than recipe, emission, energy, allocation or quality defaults. |
| ncpi-vcp-manual-2017 | handbook | National Clay Pipe Institute, Vitrified Clay Pipe Engineering Manual, 2017, Foreword and Chapter 1 pp.1-1–1-5; https://www.ncpi.org/assets/ncpi-engineering-manual.pdf | Independent primary dense vitrified clay body qualification and principal raw-to-extrusion/drying/firing/cooling/body-testing context; joint, perforated and installed-sewer cases are distinct. No numeric test, life, temperature or strength default adopted. |
| hepworth-clay-guide | handbook | Hepworth Clay, Product Design Guide, publisher PDF snapshot, pp.4 and 8–9 and 11 and 15–17; https://blog.wavin.com/hubfs/UK/Hepworth%20Clay/Hepworth%20Clay%20Product%20Design%20Guide.pdf | Primary plain-ended/unjoined pipe and separately fitted coupling state. Proprietary calcination/roller firing, water source, recipe, moisture, geometry, performance and life are counterexamples, not transferred into the conventional loam-glazed tunnel route or claimed same SKU. |
| ilcd-general-guide-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA Detailed Guidance, first edition March 2010, §§7.9.2–7.9.3 pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctional-process subdivision/virtual subdivision, exchange-specific determining physical causality and only residual common-gate contemporaneous market value. Product QFD/consequential and waste-fee research examples do not establish this pipe method. |
