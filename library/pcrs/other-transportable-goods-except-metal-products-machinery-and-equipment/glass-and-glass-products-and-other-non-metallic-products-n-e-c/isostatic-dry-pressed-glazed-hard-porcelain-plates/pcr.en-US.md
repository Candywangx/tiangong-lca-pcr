---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.isostatic-dry-pressed-glazed-hard-porcelain-plates
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Isostatic dry-pressed glazed hard-porcelain plates

## 1. Scope and Applicability

This attributional production method covers one declared design and quality grade of undecorated transparent-glazed hard-porcelain plate manufactured from unfired raw mineral ingredients by onsite wet preparation, spray granulation and isostatic dry pressing, followed by drying/dressing, biscuit firing, onsite glaze preparation/application, glost firing/cooling, foot grinding/polishing and sorting/tests through unique first quality release. Real gas firing, controls, failures, rework, assets and subsequent cohort services are retained. Sources support a transparent technical synthesis, not one SKU/factory recipe or one contemporary production order.

Exclude stoneware, earthenware, bone china, black body, technical/electrical ceramics, sanitary basins, decorative statuettes, grinding media as reference product, unglazed reference ware, hollow ware/tea sets, plastic jiggering, slip/pressure casting, bought granulate instead of onsite spray drying, one-fire ware, artistic under/over/in-glaze decoration and extra decoration firing, precious metals, matt/black/surface-coating routes, installation/use washing and end-of-life. A small real factory mark is a separately measured complete ink; it implies no artistic-decoration scope. Do not turn this manufacturing method into bought-fired-plate packaging. No food-contact/performance/size/weight/life claim is inferred.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.isostatic-dry-pressed-glazed-hard-porcelain-plates |
| classification_refs | CPC 3.0:37221 |
| covered_products | Isostatic dry-pressed glazed hard-porcelain plates |
| excluded_products | Other ceramic body/forming/firing/decoration families and downstream service functions listed in Section 1 |
| representative_product | One actual undecorated hard-porcelain plate design and selected quality grade |
| production_route | Whole unfired raw materials → wet body preparation/spray granulation → isostatic dry pressing/drying → biscuit firing → onsite glaze preparation/application → glost firing/cooling → foot grinding/polishing → inspection/first release; observed cohort services separate |
| market_state | First-quality-released finished bare glazed plate, with actual later packaging/FG services separately disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce the specified ceramic plate for later food-serving use subject to actual product approval |
| How much | 1 kg net finished bare plate at unique first quality release |
| How well | Actual declared design/grade/glaze/surface and required quality-test records; no generic compliance or equal-service assertion |
| How long or cycle | Declared production cohort; actual later service horizon H separate, no assumed use life |
| reference_flow_link | finished_plate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ceramic Ware for Daily Use `13201762-198b-406a-8596-e66564114ff1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site region period and actual provider; one actual plate design material and quality grade; hard porcelain body and transparent glaze chemistry; whole supplied raw materials formulations and moisture; on-site wet preparation spray granulation isostatic dry pressing and two-stage gas firing; drying atmosphere surface finishing and acceptance tests; unique first-release net mass Q and no inferred kg per item; opening closing raw WIP non-WIP stores and each inherited burden vector; original released FG cohort and gross shipment return state bridge; observed service horizon H and original cohort Qc; each packaging identity ownership empty attached reusable stocks and gross returns; actual species phase compartment CAS origin and analytical detection basis; independent full physical mass and element balance; native extensive units carrier mass thermal state enthalpy and provider water energy convention; machine mould refractory fluid physical stocks versus period service burden; dedicated subdivision physical causality residual common-gate value evidence; uncertainty unresolved auxiliaries and downstream limits |

Every qualifier must be declared in dataset metadata or equivalent complete reference-flow context. This is a production declared mass unit, not equivalent food-serving service. Count-to-mass conversion requires independently calibrated same-design net measurements; no secondary property, catalogue typical mass, geometry or assumed density provides kg/item.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net released bare plate; sum calibrated actual first-release mass Q once via cp_release. Released closing FG remains included. Counts/areas and packaging are excluded from Q. |
| native_units | each inventory exchange | Preserve row native property | native unit | Each numerator keeps its own Mass/kg, Volume/m3, energy/MJ or freight/t km. Convert kWh to MJ by3.6. Do not apply Mass/kg to energy/volume/service rows or infer density from secondary coefficients. |
| physical_chemistry | mass element and species gates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Independent calibrated physical wet/dry mass and analytical chemistry are required. Free/adsorbed water, structural hydroxyl, generated reaction water and liquid/vapour phases differ; do not use one residual to fit water and CO2 simultaneously. |
| carrier_state | utilities air and water quantities | Preserve row property | native unit | Only genuine rates are integrated over recorded time; totalised volumes are already integrated. Use independent substance/state density and heat-value/enthalpy. External steam/heat water returns retain actual state and supplier water-energy convention without duplicate provider purchase. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole purchased unfired raw mineral ingredients and actual specific auxiliaries, with supplier preparation/moisture; no fired plates or substituted granulate |
| starting_condition_role | foreground_material_receipt |
| product_classification_scope | Only selected hard-porcelain plate subset of CPC37221; no accepted mapping implied |
| recursive_input_rule | Bought same-category finished ceramics need compatible upstream burden and a new scope decision; they cannot stand in for this raw-to-product route |
| upstream_dataset_requirement | Match each real complete material/formulation, physical/chemical identity, supplied state/grade/route/geography and extensive unit without duplicate children/providers |
| disclosure | Raw-to-first-release foreground manufacture plus explicitly separate original-cohort service account; cradle-to-gate requires verified upstream links and disclosed consolidation |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | Only the declared undecorated glazed hard-porcelain plate design/grade and isostatic dry-press/two-firing route are applicable. Begin with whole supplied unfired raw ingredients and include all actual receipt/transport, wet milling, mixing, screening/iron removal, spray drying, isostatic pressing, edge dressing/pre-drying, biscuit firing, onsite glaze preparation/application/foot cleaning, glost firing/cooling, foot grinding/polishing, sorting/tests and controls to unique first release. Purchased granulate or fired plates cannot replace this declared route. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| b_supply | all inputs | Record each full supplied formulation once; constituent assays/carrier water are child ledgers. Onsite formulation records each bought ingredient plus actual water/energy/emissions/losses. Actual ingredients/cleaners/refrigerants/control chemicals not named here require a specific added atomic exchange; no other/zero bundle conceals them. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| b_cohort | manufacturing burden | Preserve failed and zero-output runs, startup/shutdown, idle/hot hold, cleanup and pre-release rework/refiring. Carry each exchange inherited opening/closing raw, WIP and unassigned non-WIP-store burden vector. Closing already-released FG is already in Q: neither subtract its manufacture burden nor add it again as production. Internal loops cancel once while real reprocessing remains. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| b_service | post-release services | Keep original manufacture with each unique released cohort. Separately collect actual packing, FG storage, handling, dispatch, external returns, cleaning/retest/rework and losses by original cohort Qc and observed horizon H; no later movement creates Q. Physical gross shipments/returns have independent states/masses. Consolidation cancels the internal released-plate handoff and retains external movements. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| b_physical | manufacture service combined | Reconcile full wet/dry physical mass and relevant elements separately at manufacture, FG-service and consolidated gates, including all gas constituents, free/structural/reaction water, oxygen uptake, carrier Product returns, WIP, FG, waste and assets. Independent species evidence is separate from elemental closure; a residual cannot solve two unknowns. No gross air aggregate is added beside its constituents; no economic share reduces physical stocks or shipments. | `jrc-ceramic-bref-2007` |
| b_identity | each bound exchange | All card restrictions are mandatory when using the suggested UUID. Verify complete native names, synonyms, comments, CAS, fixed grade/route/form/geography/media/type and every property. Compatible broad physical families require actual primary terminal qualifiers; isolated classification error is disclosed separately. A hard conflict needs a different identity; no core-reference workaround. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete plate manufacture | required | Declared raw-to-first-release dry-pressed hard-porcelain route | Aggregate foreground retains separate receipt/body-milling/spray-drying/pressing-drying/biscuit/glaze/glost/finishing-test/control/asset subledgers; internal transfers cancel | finished_plate; Q |
| service | Observed original-cohort services | required | Actual post-release operations through H only | Separate incremental burden and gross FG/packaging ledger with original Qc | Qc; H |

Each card except the finished reference is conditional on real presence; missing data is not absence. These are individually named exchanges, not selection menus. Preserve stage subledgers through every actual operation and add actual unlisted atomic materials/species before dataset use. Card amount and protocol aggregation reference the single Section 8 unit result; raw collection is never pre-divided.

### Process: Complete plate manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Uncalcined china clay (`kaolin`)

Whole supplied uncalcined kaolin-bearing china clay for body or glaze. Record source mineralogy, beneficiation, moisture, particle form and assay. A mine name alone does not establish this whole supplied clay; natural-resource extraction is not a purchased product.

- Selected flow: Uncalcined china clay
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Feldspar flux raw material (`feldspar`)

Whole supplied potash/soda feldspar mineral, production mix at plant GLO, as-received raw material. Native provenance mentions electrical-porcelain body preparation without an amount; compatible mineral identity does not carry that application or any recipe/provider into this plate. Record alkali/mineral composition, particle state, moisture and actual provider separately.

- Selected flow: Feldspar `093a520f-0386-4da6-bcb1-16928df4efbf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Crystalline quartz flour (`quartz`)

Whole purchased crystalline quartz flour for body/glaze; document particle size and respirable fraction independently. Do not bind quartz crucibles, fused silica, precipitated silica, resource sand or a nanopowder route to this purchase.

- Selected flow: Crystalline quartz flour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polyvinyl alcohol binder (`pva`)

Conditional actual PVOH polymer supply. Native Product is polyvinyl alcohol, not polyvinyl acetate glue or monomer. Record grade, hydrolysis, supplied dry/solution state and full purchased formulation; child polymer/water assays are not second purchases. Site-made solution consumes separately purchased dry polymer and actual water/energy/losses.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Stearic acid pressing lubricant (`stearic`)

Only actual stearic acid purchased as one full grade/formulation. Cadmium distearate is a chemically different salt and cannot stand in for it. Track retained and thermally decomposed fractions by independent evidence.

- Selected flow: Stearic acid pressing lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Cellulose gum glaze binder (`cmc`)

Conditional actual CMC free-flowing powder of purity at least 95%, production mix at plant and chemically modified cellulose route. Native synonyms include sodium CMC; establish actual salt, degree of substitution, moisture and supplier chemistry before binding. No pharmaceutical/food approval follows from the native comment. A dilute solution not meeting the fixed powder/purity identity stays unresolved as a full supply.

- Selected flow: Carboxymethyl cellulose `ab3e2bac-18e0-427b-ad88-91499c3bc367`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Sodium silicate solution deflocculant (`silicate`)

Actual whole purchased waterglass solution with measured modulus, solids and carrier water. Use the actual supplied solution identity without assuming a pure solid or active-only mass. Onsite mixing records separate real bought solids/water rather than a second full solution purchase.

- Selected flow: Sodium silicate solution deflocculant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Transparent porcelain glaze frit (`frit`)

Conditional real bought glassy glaze frit component, with its whole chemistry and upstream frit production. Onsite glaze preparation remains in scope; do not treat a full supplied glaze as frit or duplicate its constituent purchases. Actual non-frit raw glaze ingredients are recorded individually.

- Selected flow: Transparent porcelain glaze frit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Fired ceramic factory-mark ink (`marking_ink`)

Only an actual small factory mark accompanying otherwise undecorated ware. Purchase the complete ink including pigment/frit/binder/vehicle once and retain child species balances. UV-curing paper-printing ink is incompatible. Decorative patterns, under/overglaze artistic decoration and decoration firing are excluded; reassess if present.

- Selected flow: Fired ceramic factory-mark ink
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Treated process water supply (`water`)

Native treated industrial Process Water Product; record real treatment, supply point, quality and provider. Only external make-up is purchased; internal recovered slurry/wash water cancels as a transfer. Carrier water already in a full formulation is a child ledger, not a second supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Metered grid electricity (`electricity`)

Bind the native AC only for CN grid-average consumption mix to user at 1–35 kV; an actual other geography/voltage/supply needs its own identity. Preserve Net calorific value extensive energy/MJ and convert measured kWh by 3.6. This identity does not supply a grid year, provider or amount. Include milling, spray drying drives, compressed air, forming, finishing, controls and actual idle loads once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Supplied gaseous natural-gas fuel mixture (`natural_gas`)

Actual natural gas for spray dryer, pre-drying and both firings. Preserve metered integrated volume at declared T/P/composition in m3 and an independently established mass/heat child ledger. Do not substitute pure methane, fixed gas composition from another plant, or an assumed purchased-heat interface for the whole actual fuel. Combustion energy and species belong to actual site records; no pure methane or default heat value.

- Selected flow: Supplied gaseous natural-gas fuel mixture
- Flow property / unit: Volume / m3
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### External process steam supply (`steam`)

Conditional only if real steam crosses the plant gate. Record actual steam state, pressure, dryness, carrier mass, inlet/return enthalpy and provider water/energy convention; purchase the agreed provider once. It is not a default kiln fuel or an invented boiler.

- Selected flow: External process steam supply
- Flow property / unit: Energy / MJ
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### External hot-water heat supply (`heat`)

Conditional actual external heat delivered by hot water, with separate measured carrier mass and return temperature/enthalpy. Internal recovered kiln heat cancels rather than creating a second provider purchase.

- Selected flow: External hot-water heat supply
- Flow property / unit: Energy / MJ
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### External cooling-water make-up (`cooling_water`)

Only actual separately metered treated liquid make-up for heat exchange, not total internal circulation. Keep the external Product return and provider water convention explicit.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Flint grinding pebbles (`flint_media`)

Specific whole flint grinding pebbles if actually used. A generic naturally occurring pebble does not establish selected silica mineralogy and wear suitability. Record new/old physical stock, replacement, wear into slip and rejected media separately.

- Selected flow: Flint grinding pebbles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polyurethane isostatic press membrane (`press_membrane`)

Actual moulded elastic membrane geometry/chemistry and installed hydraulic boundary; cast thermoplastic PU film is not this formed component. New/retired membrane stocks and period service burden are distinct.

- Selected flow: Polyurethane isostatic press membrane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Machined steel press die (`steel_die`)

Actual complete machined tool, not raw steel sheet. Record steel grade, finished geometry, repairs, received/installed/retired stock and actual deployment; do not prescribe a service life.

- Selected flow: Machined steel press die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Cordierite kiln setter (`kiln_furniture`)

Only actual cordierite setter; distinguish full supplied shaped ceramic from its mineral ingredients, other kiln furniture and wear deposits. Record replacement/retirement and usage without assumed cycles.

- Selected flow: Cordierite kiln setter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Natural-gas ceramic firing kiln (`kiln_asset`)

Actual complete kiln asset or separately identified repair component. Maintain physical stock and installed fluids separately from a documented period share of its inherited service burden; no full kiln per kg.

- Selected flow: Natural-gas ceramic firing kiln
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Isostatic ceramic powder press (`press_asset`)

Actual complete press with declared component/fluid scope and usage. Separate received/retained/repaired/retired physical mass from period service attribution; no fixed lifespan or assumed machine weight.

- Selected flow: Isostatic ceramic powder press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Ceramic slip spray dryer (`dryer_asset`)

Actual spray-dryer equipment physical stocks and verified period service burden; its operation fuel/electricity remains separate. Record actual repairs and deposits/water, not an entire dryer per kg.

- Selected flow: Ceramic slip spray dryer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Bonded diamond grinding wheel (`diamond_wheel`)

Actual finished wheel with bond and abrasive composition for foot grinding; do not substitute loose diamond or a steel part. Record replacement/wear and wet grinding transfers.

- Selected flow: Bonded diamond grinding wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polyester dust-filter bag (`filter_bag`)

Actual fabricated bag for dust control with filter medium/finish; textile fibre or PE packaging bag alone cannot identify it. Track retained dust, worn media and disposal separately without double counting.

- Selected flow: Polyester dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Cellulose wiping sponge (`sponge`)

Actual separately supplied sponge used to clean glaze from the foot; account for retained glaze/water and worn or discarded sponge. Cleaning water and actual cleaning chemicals are distinct.

- Selected flow: Cellulose wiping sponge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Shaped high-alumina refractory brick (`refractory`)

Only actual sintered shaped aluminosilicate brick, Al2O3 above 48%, bauxite/kaolinitic feed and native firing range 1350–1450 C; not raw clay or alumina-carbon brick. Native clay classification is a metadata defect, not a changed manufactured identity. Physical receipt/repair/retirement and period service are separate; no default kiln life.

- Selected flow: high alumina refractory brick `773fbca7-3575-483c-b38d-c017771979b3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Hydraulic system fluid (`hydraulic_oil`)

Whole real mineral/synthetic-base hydraulic fluid with additives. Native reference is Volume/m3; preserve actual metered volume and independently measured fluid-specific density at stated temperature for mass closure. Retained in-machine fluid is stock, not loss; a whole supplied machine with included fluid cannot purchase it again.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_asset. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Hydrated lime sorbent (`lime`)

Conditional actual complete calcium-hydroxide sorbent grade for off-gas or wastewater control. Keep supplied moisture, chemical consumption, reaction products and spent sorbent physical mass separate; total fluorine does not prove HF.

- Selected flow: Hydrated lime sorbent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Solid polyaluminium chloride coagulant (`pacl`)

Conditional actual water-treatment solid PAC, CAS1327-41-9, yellow water-soluble aluminium chloride hydroxide Product at plant. Record full purchased grade/basicity/moisture and real dosing/retention/sludge; a dilute commercial solution needs its compatible whole-supply identity, not an assumed active-only quantity.

- Selected flow: Polyaluminium Chloride `f1b285a5-2733-450c-af08-69e960b671ee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Cationic polyacrylamide flocculant (`pam`)

Conditional actual cationic PAM water/sludge-treatment Product, factory production blending, specific upstream process unspecified. Record full supplied form/concentration and charge/grade/provider; nonionic or anionic PAM is different. Onsite dilution retains its real water/energy and losses.

- Selected flow: cationic polyacrylamide (CPAM) `ccf600a4-35af-45d6-95b3-cb58590a579f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_material. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Inbound road freight (`inbound_freight`)

Only native 30-ton diesel road freight service when the actual shipment matches; keep actual route/load/empty return and tonne-km. Native reference kg*km and selected t*km obey 1 t*km = 1000 kg*km; t km is the same spelling without the multiplication sign. Other vehicle/mode needs its own flow. Avoid a second transport burden if already included by the supplied provider.

- Selected flow: Road freight transport service `9425f2bf-e734-4884-be1b-645473a3e82d`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t km
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

##### Elementary flows

###### Dinitrogen in atmospheric air (`air_in_n2`)

Actual gross constituent of combustion/drying/ventilation air, CAS 7727-37-9, with independent humidity/composition/volume/state. No purchased industrial gas is assumed and no air aggregate is added beside these constituents. Native identity is molecular dinitrogen N2 CAS7727-37-9, Elementary Mass/kg, renewable element resource from atmospheric air. The liquefied synonym does not make this a purchased liquid nitrogen product; no total nitrogen excluding N2, nitrous oxide or reactive nitrogen substitution.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### oxygen (`air_in_o2`)

Actual gross constituent of combustion/drying/ventilation air, CAS 7782-44-7, with independent humidity/composition/volume/state. No purchased industrial gas is assumed and no air aggregate is added beside these constituents. Native CAS7782-44-7 molecular O2 is a renewable-element resource from air, Mass/kg; actual gaseous ambient constituent only. Liquid/ionic/isotope aliases do not authorize those forms, purchased industrial gas or a fixed air fraction.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### argon (`air_in_ar`)

Actual gross constituent of combustion/drying/ventilation air, CAS 7440-37-1, with independent humidity/composition/volume/state. No purchased industrial gas is assumed and no air aggregate is added beside these constituents. Native CAS7440-37-1 natural non-radioactive argon is a renewable-element resource from air, Mass/kg. Ar41/Ar40 synonym noise establishes neither isotope nor activity; actual atmospheric gas/state/composition must be independently measured. Not purchased separated gas, a default air fraction or a fitted residual.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Atmospheric water vapour (`air_in_h2o`)

Actual gross constituent of combustion/drying/ventilation air, CAS 7732-18-5, with independent humidity/composition/volume/state. No purchased industrial gas is assumed and no air aggregate is added beside these constituents.

- Selected flow: Atmospheric water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Carbon dioxide in atmospheric air (`air_in_co2`)

Actual gross constituent of combustion/drying/ventilation air, CAS 124-38-9, with independent humidity/composition/volume/state. No purchased industrial gas is assumed and no air aggregate is added beside these constituents.

- Selected flow: Carbon dioxide in atmospheric air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### First-quality-released glazed plate (`finished_plate`)

Native daily-use ceramic Product includes dinnerware-set synonym, production mix at plant, Mass/kg; no CAS, fixed grade, named forming route or supply geography is declared. It is used only for the primary-supported undecorated glazed hard-porcelain plate of one actual design, dry-pressed from spray granulate, dried, biscuit fired, glazed, glost fired, foot-ground/polished and sorted through unique first quality release. Native CPC37299 does not override the physical dinnerware identity. Native cookware marketing and conditional food-contact prose proves no food-contact approval, non-stick performance, dimensions, mass per item or service life. No tea set, decorative art, sanitaryware, bone china, stoneware, earthenware or bought-fired-product packing substitution.

- Selected flow: Ceramic Ware for Daily Use `13201762-198b-406a-8596-e66564114ff1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_release`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Separately accepted lower-grade porcelain plate (`lower_grade_plate`)

Native daily-use ceramic Product includes dinnerware-set synonym, production mix at plant, Mass/kg; no CAS, fixed grade, named forming route or supply geography is declared. It is used only for the primary-supported undecorated glazed hard-porcelain plate of one actual design, dry-pressed from spray granulate, dried, biscuit fired, glazed, glost fired, foot-ground/polished and sorted through unique first quality release. Native CPC37299 does not override the physical dinnerware identity. Native cookware marketing and conditional food-contact prose proves no food-contact approval, non-stick performance, dimensions, mass per item or service life. No tea set, decorative art, sanitaryware, bone china, stoneware, earthenware or bought-fired-product packing substitution. Conditional real saleable lower grade in the same physical daily-ceramic family; native restrictions of finished_plate also apply in full. Its distinct actual quality/status is not the selected reference and never enters Q. Independently identify the common gate and attribution; neither defect nor sales receipt automatically makes a coproduct.

- Selected flow: Ceramic Ware for Daily Use `13201762-198b-406a-8596-e66564114ff1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_release. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Returned liquid steam condensate (`condensate_return`)

Only actual external Product return with its measured carrier mass, temperature, pressure/enthalpy and contamination. Do not label it wastewater by default or duplicate a steam provider water convention; no steam implies no assumed return.

- Selected flow: Returned liquid steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Returned heat-exchange water (`cooling_return`)

Actual external liquid cooling/hot-water Product return at measured state. Retain carrier mass and enthalpy without inventing an absent circuit; internal recirculation cancels.

- Selected flow: Returned heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

##### Waste flows

###### Unfired porcelain body scrap (`green_reject`)

Actual unfired trim/reject crossing to an external receiver, wet/dry composition measured; internal reclaimed trim cancels but actual reprocessing burden remains.

- Selected flow: Unfired porcelain body scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Biscuit-fired porcelain reject (`biscuit_reject`)

Real rejected biscuit after first firing, separately from green scrap and glaze-fired rejects; retained dry/free/structural water and chemical state are measured.

- Selected flow: Biscuit-fired porcelain reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Glaze-fired porcelain reject (`glost_reject`)

Real broken/rejected glazed ware before first release; no Q. Record full glaze/body and receiver; reuse or recycling does not create automatic credit.

- Selected flow: Glaze-fired porcelain reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Captured porcelain body dust (`body_dust`)

Actual separately captured dry body dust exported, not ambient dust emission or internally returned granulate. Assay/mineralogy and moisture accompany gross mass.

- Selected flow: Captured porcelain body dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Glaze preparation sludge (`glaze_sludge`)

Whole actual externally treated glaze sludge, with solids/water/chemistry and destination; child species in the same transferred sludge are not duplicated as direct releases.

- Selected flow: Glaze preparation sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Wet porcelain-foot grinding slurry (`grinding_slurry`)

Whole actual external wet grinding slurry, with abrasive/body/glaze/retained water measured independently; different treatment/contamination streams stay separate.

- Selected flow: Wet porcelain-foot grinding slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Ceramic wastewater-treatment filter cake (`treatment_sludge`)

Actual final treatment cake, including real coagulant/solid/retained water, with own receiver. Upstream glaze/grinding sludge sent to this onsite treatment is an internal transfer and not a second external waste.

- Selected flow: Ceramic wastewater-treatment filter cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Ceramic process wastewater for external treatment (`wastewater`)

Whole actual external wastewater with real receiver, wet mass/volume/density, dissolved/suspended assays and uncertainty. Do not add its entire water/species again as direct discharge. COD/AOX or total boron is not a named molecule.

- Selected flow: Ceramic process wastewater for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Spent hydrated-lime sorbent (`spent_sorbent`)

Actual separately removed sorbent with reacted salts, moisture and dust measured, not one generic sum of all wastes; no presumed CaF2 from total F alone.

- Selected flow: Spent hydrated-lime sorbent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Spent polyester filter bag (`spent_filter`)

Actual complete spent bag with retained solids/moisture separately tracked; no second disposal of dust still attached.

- Selected flow: Spent polyester filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Spent polyurethane press membrane (`spent_membrane`)

Actual retired moulded component with fluid/deposits; do not substitute PU production film or raw polymer.

- Selected flow: Spent polyurethane press membrane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Spent hydraulic system oil (`spent_oil`)

Actual contaminated oil leaving the machine/site; preserve fluid-specific density, water/solid contamination and installed closing fluid; no default zero loss.

- Selected flow: Spent hydraulic system oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Spent high-alumina refractory brick (`spent_refractory`)

Actual retired brick with retained glaze/dust/water; separate disjoint kiln/asset mass from current service-burden attribution.

- Selected flow: Spent high-alumina refractory brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Spent cordierite kiln setter (`spent_setter`)

Actual retired setter with contamination and receiver, not mixed refractory and metal scrap.

- Selected flow: Spent cordierite kiln setter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Spent bonded diamond grinding wheel (`spent_wheel`)

Actual retired wheel and residual abrasive/bond; worn fraction already in grinding slurry is not disposed twice.

- Selected flow: Spent bonded diamond grinding wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Scrapped steel press die (`scrap_die`)

Actual retired fabricated die with contamination, measured gross physical mass and downstream recovery; not an economic fraction of asset stock.

- Selected flow: Scrapped steel press die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

###### Spent cellulose wiping sponge (`spent_sponge`)

Actual contaminated whole sponge with retained glaze/water as child quantities; keep receiving treatment explicit.

- Selected flow: Spent cellulose wiping sponge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_residue. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-ceramic-bref-2007`

##### Elementary flows

###### Carbon dioxide (`air_co2`)

Conditional actual gaseous Carbon dioxide, CAS 124-38-9, discharge to air at the real stack/fugitive compartment: actual fossil fuel and carbonate/organic origins separately constrained; not a carbon residual. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Carbon monoxide (`air_co`)

Conditional actual gaseous Carbon monoxide, CAS 630-08-0, discharge to air at the real stack/fugitive compartment: actual post-control CO measurement; not total organic carbon. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### nitrogen monoxide (`air_no`)

Conditional actual gaseous Nitrogen monoxide, CAS 10102-43-9, discharge to air at the real stack/fugitive compartment: independent NO speciation; NOx-as-NO2 alone is insufficient. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native CAS10102-43-9 NO gas, air unspecified, Mass/kg only. HNO/nitrosyl-hydride aliases are not adopted chemistry; no NO2, nitrite or NOx-as-NO2 equivalence. Actual independent molecular speciation is mandatory; no source factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Nitrogen dioxide (`air_no2`)

Conditional actual gaseous Nitrogen dioxide, CAS 10102-44-0, discharge to air at the real stack/fugitive compartment: independent NO2 speciation; do not assign all NOx to it. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Sulfur dioxide (`air_so2`)

Conditional actual gaseous Sulfur dioxide, CAS 7446-09-5, discharge to air at the real stack/fugitive compartment: independent SO2 species, not total SOx-equivalent. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native Elementary flow is CAS7446-09-5 sulfur dioxide to air unspecified, Mass/kg. Use only this molecule and matching unspecified subcompartment, not SOx, a supplied chemical, liquid sulfite, a different air compartment or a long-term release.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### hydrogen fluoride (`air_hf`)

Conditional actual gaseous Hydrogen fluoride, CAS 7664-39-3, discharge to air at the real stack/fugitive compartment: independent actual gaseous HF; total gaseous fluorine reported as HF is only an equivalent. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native CAS7664-39-3 HF, air unspecified, Mass/kg only. Acid/solution/isotope/element aliases do not authorize whole scrubber liquid, fluoride salts or total fluorine-as-HF equivalence; preserve actual measured HF gas/phase and moisture independently.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### hydrogen chloride (`air_hcl`)

Conditional actual gaseous Hydrogen chloride, CAS 7647-01-0, discharge to air at the real stack/fugitive compartment: actual gaseous HCl, not total chloride or chlorine equivalent. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native CAS7647-01-0 HCl, air unspecified, Mass/kg only. Aqueous-acid/cleaner/reagent/isotope aliases do not authorize their full formulation, chlorine totals, salt or delayed/long-term compartment. Export independently measured HCl molecular mass and actual phase, not accompanying water.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### benzene (`air_benzene`)

Conditional actual gaseous Benzene, CAS 71-43-2, discharge to air at the real stack/fugitive compartment: specific observed binder-decomposition benzene; VOC/COD/TOC does not establish benzene. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native CAS71-43-2 molecular benzene gas, contemporary air unspecified, Mass/kg only. Actual identified benzene is not total VOC/TOC, another aromatic compound, supplied solvent formulation or indoor/long-term release. Synonyms do not establish a pure benzene purchase or emission factor.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Methane (`air_methane`)

Conditional actual gaseous Methane, CAS 74-82-8, discharge to air at the real stack/fugitive compartment: specific actual unburned methane and origin; not whole natural-gas fuel or total hydrocarbons. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity.

- Selected flow: Methane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### water vapour (`air_h2o`)

Conditional actual gaseous Water vapour, CAS 7732-18-5, discharge to air at the real stack/fugitive compartment: one total actual vapour species with separate inlet humidity, free water, dehydroxylation and combustion-reaction child origins; do not duplicate those as independent gross outputs. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native CAS7732-18-5 H2O vapour, contemporary air unspecified, Mass/kg. Ice/liquid/heavy-water/ion aliases do not authorize those forms. Retain one measured total vapour with independent ambient/free/structural/reaction origin subledgers; no duplicated children, LOI-as-water factor or fitted two-unknown water/carbonate residual.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Dinitrogen (`air_n2`)

Conditional actual gaseous Dinitrogen, CAS 7727-37-9, discharge to air at the real stack/fugitive compartment: actual gross exhausted N2, not NOx, with dry/wet state and flow independently constrained. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native identity is molecular dinitrogen N2 CAS7727-37-9, Elementary Mass/kg, emission to air unspecified. The liquefied synonym does not make this a purchased liquid nitrogen product; no total nitrogen excluding N2, nitrous oxide or reactive nitrogen substitution.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### oxygen (`air_o2`)

Conditional actual gaseous Dioxygen, CAS 7782-44-7, discharge to air at the real stack/fugitive compartment: actual gross unreacted O2 and measured uptake, not only an O2-correction percentage. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native CAS7782-44-7 molecular O2 is an actual contemporary air-unspecified emission, Mass/kg; gross physical outlet independent of the resource inlet. Liquid/ion/isotope aliases do not authorize those forms; no long-term/indoor compartment or economic scaling of gas mass.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### argon (`air_ar`)

Conditional actual gaseous Argon, CAS 7440-37-1, discharge to air at the real stack/fugitive compartment: actual gross exhausted argon supported by gas composition and integrated volume. No species or zero is inferred from a historical BREF case. Preserve phase, compartment and origin before selecting any native identity. Native CAS7440-37-1 natural non-radioactive Ar is a contemporary air-unspecified emission, Mass/kg. Keep gross pass-through outlet separate from resource inlet. Ar41/Ar40 aliases do not authorize isotope/activity assumptions, radioactive-noble-gas flow, long-term/indoor release or aggregate-air duplication.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Unspeciated ceramic particulate matter to air (`air_dust`)

Actual measured non-overlapping particulate fraction to stated air compartment/size cut. It is a physical dust exchange with unresolved composition, not molecular quartz or metal inferred from total dust. Any separately identified particulate species replaces its share and is not added again. Native Elementary identity is particulate matter with particle size and air subcompartment unspecified; no fixed chemical composition, stack height, size distribution, control technology or LCIA factor. Clinker-source example and its numerical amount are not adopted. Use an appropriate different native identity if an actual specified size/compartment is being reported.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_air. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ceramic-bref-2007`

###### Waste heat to air (`heat_air`)

Actual unrecovered sensible/latent heat to air with explicit enthalpy reference and measured thermal states. Energy is MJ; carrier/species masses remain independent and are not added again as heat mass.

- Selected flow: Waste heat to air
- Flow property / unit: Energy / MJ
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_utility. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### Liquid water to receiving freshwater (`water_water`)

Only actual separate direct discharge to a named receiving freshwater with independent Liquid water to receiving freshwater analytical identity, phase/compartment and integrated water quantity. Not an external whole wastewater treatment transfer; elemental-total assays cannot automatically become an ion or salt, and chemical CAS must be verified before binding.

- Selected flow: Liquid water to receiving freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_water. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-ceramic-bref-2007`

###### Dissolved calcium ion to freshwater (`water_calcium`)

Only actual separate direct discharge to a named receiving freshwater with independent Dissolved calcium ion to freshwater analytical identity, phase/compartment and integrated water quantity. Not an external whole wastewater treatment transfer; elemental-total assays cannot automatically become an ion or salt, and chemical CAS must be verified before binding.

- Selected flow: Dissolved calcium ion to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_water. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-ceramic-bref-2007`

###### Dissolved sulfate to freshwater (`water_sulfate`)

Only actual separate direct discharge to a named receiving freshwater with independent Dissolved sulfate to freshwater analytical identity, phase/compartment and integrated water quantity. Not an external whole wastewater treatment transfer; elemental-total assays cannot automatically become an ion or salt, and chemical CAS must be verified before binding.

- Selected flow: Dissolved sulfate to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_water. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-ceramic-bref-2007`

###### Dissolved chloride to freshwater (`water_chloride`)

Only actual separate direct discharge to a named receiving freshwater with independent Dissolved chloride to freshwater analytical identity, phase/compartment and integrated water quantity. Not an external whole wastewater treatment transfer; elemental-total assays cannot automatically become an ion or salt, and chemical CAS must be verified before binding.

- Selected flow: Dissolved chloride to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_water. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-ceramic-bref-2007`

###### Dissolved fluoride to freshwater (`water_fluoride`)

Only actual separate direct discharge to a named receiving freshwater with independent Dissolved fluoride to freshwater analytical identity, phase/compartment and integrated water quantity. Not an external whole wastewater treatment transfer; elemental-total assays cannot automatically become an ion or salt, and chemical CAS must be verified before binding.

- Selected flow: Dissolved fluoride to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_water. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-ceramic-bref-2007`

### Process: Original-cohort services (`service`)

#### Inputs

##### Product flows

###### Cohort packing and storage electricity (`service_electricity`)

Actual incremental packing/warehouse/handling/return service over declared H for original cohort Qc; CN 1–35 kV grid-average AC consumption to user only. Preserve energy/MJ, kWh conversion 3.6 and actual provider/year; other geography/voltage requires a different identity. No current-period manufacturing denominator or second charge for a shared meter.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_service. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Cohort cleaning water (`service_water`)

Only actual external treated industrial Process Water make-up for post-release cleaning/returns. Original manufacturing stays with cohort; no new Q and no duplicated formulation/recirculation water. Record quality/treatment/supply point/provider.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_service. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Cohort dispatch and return road freight (`service_freight`)

Actual separately declared logistics service over H for Qc; adopt only native 30-ton diesel road freight, actual loaded/empty legs and tonne-km (1 t*km=1000 native kg*km; t km is an equivalent spelling), no double-counted provider freight. Other transport needs its own row. Gross shipments and returns are not net production.

- Selected flow: Road freight transport service `9425f2bf-e734-4884-be1b-645473a3e82d`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t km
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_service. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Corrugated shipping carton (`pack_carton`)

One complete corrugated transport carton, not a folding paperboard box declared non-reusable in transit. Confirm the finished carton physical form, durability and actual transport role. Include supplier manufacture/printing/adhesive once with actual carton composition. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Solid-paperboard plate divider (`pack_divider`)

One actual paperboard divider of known composition, not electrical separator paper or a bundle of converted components. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs.

- Selected flow: Solid-paperboard plate divider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polyethylene wrapping film (`pack_film`)

Whole actual PE film, CAS9002-88-4, production mix at plant; confirm film grade/thickness/additives and supplier. Native luggage classification is isolated metadata error; physical PE film identity and CAS are consistent. PET polyester, PU film or raw resin is different. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Wooden transport pallet (`pack_pallet`)

One actual complete manufactured wooden portable load platform from native pallet family, at plant. Specify real pallet design/wood/treatment/fasteners/moisture/ownership and included manufacture once; do not assume EURO form or wooden collar mass. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polypropylene packaging strap (`pack_strap`)

One actual PP transport strap; resin chips, woven bags, twine and PP waste do not establish the finished strap. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Starch-based sealing adhesive (`pack_glue`)

Actual complete natural-starch packaging adhesive Product at plant, real solids/water/chemistry and supplier; child starch and water assays are not second purchases. Exclude synthetic hot melt/PSA. Supplier-included carton glue is already in carton and not purchased again. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Externally returned wooden pallet (`pallet_return_received`)

One actual complete manufactured wooden portable load platform from native pallet family, at plant. Specify real pallet design/wood/treatment/fasteners/moisture/ownership and included manufacture once; do not assume EURO form or wooden collar mass. Actual external return received, ownership and historical burden distinct from new purchase; retained water/damage and repair increments explicit. Internal reuse is cancelled.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Returned porcelain plates (`plates_returned`)

Native daily-use ceramic Product includes dinnerware-set synonym, production mix at plant, Mass/kg; no CAS, fixed grade, named forming route or supply geography is declared. It is used only for the primary-supported undecorated glazed hard-porcelain plate of one actual design, dry-pressed from spray granulate, dried, biscuit fired, glazed, glost fired, foot-ground/polished and sorted through unique first quality release. Native CPC37299 does not override the physical dinnerware identity. Native cookware marketing and conditional food-contact prose proves no food-contact approval, non-stick performance, dimensions, mass per item or service life. No tea set, decorative art, sanitaryware, bone china, stoneware, earthenware or bought-fired-product packing substitution. Actual gross cohort movement over H only; not a second first release. Record measured return state/water/contamination/loss and the original manufacturing-burden vector. Shipment/return masses cannot be presumed identical.

- Selected flow: Ceramic Ware for Daily Use `13201762-198b-406a-8596-e66564114ff1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_service. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Wooden pallet repair board (`pallet_repair_wood`)

Only actual independently purchased specific wood board used to repair a pallet; record measured species/treatment/dry-wood and free/absorbed water, separately supplied fasteners/glue, provider and ownership. Not a complete pallet or its UUID; contents already in another whole supplied package remain child ledgers. Physical repair influx is separate from original-cohort service burden; no repair or life assumed.

- Selected flow: Wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Corrugated shipping carton (`inbound_carton`)

One complete corrugated transport carton, not a folding paperboard box declared non-reusable in transit. Confirm the finished carton physical form, durability and actual transport role. Include supplier manufacture/printing/adhesive once with actual carton composition. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual supplier-attached inbound I with other supplies, including packaging already priced in the supply; included cost or retention in closing stock never removes the real influx. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Corrugated shipping carton (`returned_in_carton`)

One complete corrugated transport carton, not a folding paperboard box declared non-reusable in transit. Confirm the finished carton physical form, durability and actual transport role. Include supplier manufacture/printing/adhesive once with actual carton composition. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return received ER, separate from new purchase and attached inbound I. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Solid-paperboard plate divider (`inbound_divider`)

One actual paperboard divider of known composition, not electrical separator paper or a bundle of converted components. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual supplier-attached inbound I with other supplies, including packaging already priced in the supply; included cost or retention in closing stock never removes the real influx. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Solid-paperboard plate divider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Solid-paperboard plate divider (`returned_in_divider`)

One actual paperboard divider of known composition, not electrical separator paper or a bundle of converted components. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return received ER, separate from new purchase and attached inbound I. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Solid-paperboard plate divider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polyethylene wrapping film (`inbound_film`)

Whole actual PE film, CAS9002-88-4, production mix at plant; confirm film grade/thickness/additives and supplier. Native luggage classification is isolated metadata error; physical PE film identity and CAS are consistent. PET polyester, PU film or raw resin is different. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual supplier-attached inbound I with other supplies, including packaging already priced in the supply; included cost or retention in closing stock never removes the real influx. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polyethylene wrapping film (`returned_in_film`)

Whole actual PE film, CAS9002-88-4, production mix at plant; confirm film grade/thickness/additives and supplier. Native luggage classification is isolated metadata error; physical PE film identity and CAS are consistent. PET polyester, PU film or raw resin is different. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return received ER, separate from new purchase and attached inbound I. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Wooden transport pallet (`inbound_pallet`)

One actual complete manufactured wooden portable load platform from native pallet family, at plant. Specify real pallet design/wood/treatment/fasteners/moisture/ownership and included manufacture once; do not assume EURO form or wooden collar mass. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual supplier-attached inbound I with other supplies, including packaging already priced in the supply; included cost or retention in closing stock never removes the real influx. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polypropylene packaging strap (`inbound_strap`)

One actual PP transport strap; resin chips, woven bags, twine and PP waste do not establish the finished strap. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual supplier-attached inbound I with other supplies, including packaging already priced in the supply; included cost or retention in closing stock never removes the real influx. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polypropylene packaging strap (`returned_in_strap`)

One actual PP transport strap; resin chips, woven bags, twine and PP waste do not establish the finished strap. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return received ER, separate from new purchase and attached inbound I. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Starch-based sealing adhesive (`inbound_glue`)

Actual complete natural-starch packaging adhesive Product at plant, real solids/water/chemistry and supplier; child starch and water assays are not second purchases. Exclude synthetic hot melt/PSA. Supplier-included carton glue is already in carton and not purchased again. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual supplier-attached inbound I with other supplies, including packaging already priced in the supply; included cost or retention in closing stock never removes the real influx. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Starch-based sealing adhesive (`returned_in_glue`)

Actual complete natural-starch packaging adhesive Product at plant, real solids/water/chemistry and supplier; child starch and water assays are not second purchases. Exclude synthetic hot melt/PSA. Supplier-included carton glue is already in carton and not purchased again. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return received ER, separate from new purchase and attached inbound I. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

##### Elementary flows

###### Atmospheric water vapour absorbed by packaging (`service_humidity_in`)

Only actual ambient-air H2O-vapour resource absorbed by packaging during storage, CAS7732-18-5; independently measure humidity/state and water uptake mass, without fixed air fractions or secondary density. Disjoint from water already in received packs/repair wood/external process make-up; closing retention never cancels a real influx.

- Selected flow: Atmospheric water vapour absorbed by packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

#### Outputs

##### Product flows

###### Corrugated shipping carton (`shipped_carton`)

One complete corrugated transport carton, not a folding paperboard box declared non-reusable in transit. Confirm the finished carton physical form, durability and actual transport role. Include supplier manufacture/printing/adhesive once with actual carton composition. This card records only actual gross attached/empty outbound packaging for the Qc/H physical reconciliation; it is not net product Q, a new saleable coproduct or a second provider purchase. Inherited packaging burden and actual cohort service attribution remain separate.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Solid-paperboard plate divider (`shipped_divider`)

One actual paperboard divider of known composition, not electrical separator paper or a bundle of converted components. This card records only actual gross attached/empty outbound packaging for the Qc/H physical reconciliation; it is not net product Q, a new saleable coproduct or a second provider purchase. Inherited packaging burden and actual cohort service attribution remain separate.

- Selected flow: Solid-paperboard plate divider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polyethylene wrapping film (`shipped_film`)

Whole actual PE film, CAS9002-88-4, production mix at plant; confirm film grade/thickness/additives and supplier. Native luggage classification is isolated metadata error; physical PE film identity and CAS are consistent. PET polyester, PU film or raw resin is different. This card records only actual gross attached/empty outbound packaging for the Qc/H physical reconciliation; it is not net product Q, a new saleable coproduct or a second provider purchase. Inherited packaging burden and actual cohort service attribution remain separate.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Wooden transport pallet (`shipped_pallet`)

One actual complete manufactured wooden portable load platform from native pallet family, at plant. Specify real pallet design/wood/treatment/fasteners/moisture/ownership and included manufacture once; do not assume EURO form or wooden collar mass. This card records only actual gross attached/empty outbound packaging for the Qc/H physical reconciliation; it is not net product Q, a new saleable coproduct or a second provider purchase. Inherited packaging burden and actual cohort service attribution remain separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polypropylene packaging strap (`shipped_strap`)

One actual PP transport strap; resin chips, woven bags, twine and PP waste do not establish the finished strap. This card records only actual gross attached/empty outbound packaging for the Qc/H physical reconciliation; it is not net product Q, a new saleable coproduct or a second provider purchase. Inherited packaging burden and actual cohort service attribution remain separate.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Starch-based sealing adhesive (`shipped_glue`)

Actual complete natural-starch packaging adhesive Product at plant, real solids/water/chemistry and supplier; child starch and water assays are not second purchases. Exclude synthetic hot melt/PSA. Supplier-included carton glue is already in carton and not purchased again. This card records only actual gross attached/empty outbound packaging for the Qc/H physical reconciliation; it is not net product Q, a new saleable coproduct or a second provider purchase. Inherited packaging burden and actual cohort service attribution remain separate.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Externally returned wooden pallet (`pallet_return_sent`)

One actual complete manufactured wooden portable load platform from native pallet family, at plant. Specify real pallet design/wood/treatment/fasteners/moisture/ownership and included manufacture once; do not assume EURO form or wooden collar mass. Actual external return sent, ownership and historical burden distinct from new purchase; retained water/damage and repair increments explicit. Internal reuse is cancelled.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Gross dispatched porcelain plates (`gross_plates_shipped`)

Native daily-use ceramic Product includes dinnerware-set synonym, production mix at plant, Mass/kg; no CAS, fixed grade, named forming route or supply geography is declared. It is used only for the primary-supported undecorated glazed hard-porcelain plate of one actual design, dry-pressed from spray granulate, dried, biscuit fired, glazed, glost fired, foot-ground/polished and sorted through unique first quality release. Native CPC37299 does not override the physical dinnerware identity. Native cookware marketing and conditional food-contact prose proves no food-contact approval, non-stick performance, dimensions, mass per item or service life. No tea set, decorative art, sanitaryware, bone china, stoneware, earthenware or bought-fired-product packing substitution. Actual gross cohort movement over H only; not a second first release. Record measured return state/water/contamination/loss and the original manufacturing-burden vector. Shipment/return masses cannot be presumed identical.

- Selected flow: Ceramic Ware for Daily Use `13201762-198b-406a-8596-e66564114ff1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_service. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Corrugated shipping carton (`returned_out_carton`)

One complete corrugated transport carton, not a folding paperboard box declared non-reusable in transit. Confirm the finished carton physical form, durability and actual transport role. Include supplier manufacture/printing/adhesive once with actual carton composition. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return sent EO, separate from gross shipment S and waste W. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Solid-paperboard plate divider (`returned_out_divider`)

One actual paperboard divider of known composition, not electrical separator paper or a bundle of converted components. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return sent EO, separate from gross shipment S and waste W. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Solid-paperboard plate divider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polyethylene wrapping film (`returned_out_film`)

Whole actual PE film, CAS9002-88-4, production mix at plant; confirm film grade/thickness/additives and supplier. Native luggage classification is isolated metadata error; physical PE film identity and CAS are consistent. PET polyester, PU film or raw resin is different. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return sent EO, separate from gross shipment S and waste W. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Polypropylene packaging strap (`returned_out_strap`)

One actual PP transport strap; resin chips, woven bags, twine and PP waste do not establish the finished strap. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return sent EO, separate from gross shipment S and waste W. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### Starch-based sealing adhesive (`returned_out_glue`)

Actual complete natural-starch packaging adhesive Product at plant, real solids/water/chemistry and supplier; child starch and water assays are not second purchases. Exclude synthetic hot melt/PSA. Supplier-included carton glue is already in carton and not purchased again. For this exact material keep disjoint opening/closing empty, WIP-attached, FG-attached and reusable stocks, purchases, external returns received, gross physical shipments, external returns sent and waste. Internal reuse cancels; gross physical quantities are never reduced by economic shares. Add a distinct pool/row if configuration or physical identity differs. Actual external return sent EO, separate from gross shipment S and waste W. Only this specific material actual gross physical movement, retaining ownership and original Qc/H; not a new purchase, net shipment or new coproduct. Supplier-included glue/print/water is a whole-package child ledger, not another purchase or duplicate mass; separately supplied components and whole-package parent/child masses/burdens are disjoint.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

##### Waste flows

###### Discarded corrugated shipping carton (`waste_carton`)

Actual whole discarded corrugated shipping carton of the recorded composition/contamination, receiver and retained moisture; not the gross shipped portion or internally reused packaging.

- Selected flow: Discarded corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Discarded solid-paperboard plate divider (`waste_divider`)

Actual whole discarded solid-paperboard plate divider of the recorded composition/contamination, receiver and retained moisture; not the gross shipped portion or internally reused packaging.

- Selected flow: Discarded solid-paperboard plate divider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Discarded polyethylene wrapping film (`waste_film`)

Actual whole discarded polyethylene wrapping film of the recorded composition/contamination, receiver and retained moisture; not the gross shipped portion or internally reused packaging.

- Selected flow: Discarded polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Discarded wooden transport pallet (`waste_pallet`)

Actual whole discarded wooden transport pallet of the recorded composition/contamination, receiver and retained moisture; not the gross shipped portion or internally reused packaging.

- Selected flow: Discarded wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Discarded polypropylene packaging strap (`waste_strap`)

Actual whole discarded polypropylene packaging strap of the recorded composition/contamination, receiver and retained moisture; not the gross shipped portion or internally reused packaging.

- Selected flow: Discarded polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Discarded starch-based sealing adhesive (`waste_glue`)

Actual whole discarded starch-based sealing adhesive of the recorded composition/contamination, receiver and retained moisture; not the gross shipped portion or internally reused packaging.

- Selected flow: Discarded starch-based sealing adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Post-release broken glazed porcelain plate (`service_breakage`)

Actual broken ware in cohort H, including returned/reworked histories. Remains in physical service balance and original cohort burden; does not retrospectively erase Q or create a new manufacture unit.

- Selected flow: Post-release broken glazed porcelain plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_service. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Post-release cleaning wastewater for external treatment (`service_wastewater`)

Actual whole external cleaning wastewater with real carrier/contaminants and receiver; added water and losses are measured. Do not copy a factory waste factor or direct-discharge dissolved species to this transfer.

- Selected flow: Post-release cleaning wastewater for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_service. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ceramic-bref-2007`

###### Discarded wooden pallet repair board (`removed_pallet_wood`)

Actual old wooden board removed during repair, independently weighed by water/contamination/dry wood and real destination. Not whole-pallet retirement; no duplicate of W or another recorded outlet. Actual reuse/sale requires correct Product status, never automatic waste or credit.

- Selected flow: Discarded wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

##### Elementary flows

###### water vapour (`service_vapour_out`)

Only actual molecular H2O vapour released by packaging repair/storage, CAS7732-18-5, native contemporary air-unspecified Mass/kg. Measure evaporated water independently; one wet residual cannot also determine dry-wood loss. No duplicate water carried in another outlet and no ice/liquid/heavy-water alias substitution. Separate from manufacturing kiln vapour; actual original-Qc/H service.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single final quotient for this row in Section 8; retain raw numerator through cp_pack. Do not divide the result again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_goal | attributional inventory | Use this hierarchy only for the declared undecorated dry-pressed hard-porcelain plate manufacture and separately observed original-cohort services in a justified attributional study where allocation is required. First identify dedicated independent operations, physical subdivision and justified virtual subdivision; directly assign design-specific materials, shaping, grinding/tests and cohort services. | `jrc-ilcd-allocation-2010` |
| a_cause | each shared exchange | For each remaining exchange establish determining physical causality with independent actual operations. Kiln occupancy/time/heat capacity or load may matter differently for each exchange; simple measured mass/count/volume is not automatically causal. Failure, idle, cleanup and support loads remain assigned and documented. | `jrc-ilcd-allocation-2010` |
| a_residual | irreducible common process | Only genuine residual multifunctionality uses contemporaneous market value at one real common-process gate and actual state/quality/quantity, correcting further conditioning/packing/transport with evidence. Preserve nonpositive/unavailable value and unresolved attribution; no arbitrary physical/economic choice, fixed share, waste exemption or avoided-production credit. For each exchange the sum assigned to every co-function must equal the complete pre-allocation inventory, including failures and support loads. Different lower grades are not equal reference function. | `jrc-ilcd-allocation-2010` |
| a_asset | recovery packaging assets | Internal recovery is not new purchase or coproduct; retain actual recovery burdens and inherited vectors. Asset/mould/refractory/fluid and packaging gross physical balances remain unallocated. Period capital service uses actual deployment/use and supported inherited burden, without fixed lifetime, full machine per kg or automatic scrap credit. Recycling/recovery beyond this gate needs its own documented method and receiver. | `jrc-ilcd-allocation-2010`; `jrc-ceramic-bref-2007` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | unique first quality release | raw_records | unique piece/lot ID; design and grade; accepted net plate mass; release timestamp/status; calibrated scale; sampled count and same-configuration net mass; opening/closing raw WIP FG identities | Reconcile quality and production registers; calibrated net weighing of real released bare plates excludes all packaging. Q is the sum of first-release net kg once, including closing released FG; count is a separate measured ledger, not an assumed kg/item. | kg; item | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |
| cp_material | manufacture | each whole material/formulation | raw_records | row ID; batch/stage; supplier form and grade; whole supplied quantity; independent solids/assay/free structural water; recipe issue; opening/closing raw WIP non-WIP stores; each inherited burden vector; recovery and losses; operating mode; receipt_or_consumption_basis; already_applied_raw_stock_adjustment; consumed_opening_material_history | Use calibrated weigh/tank records and real issue/receipt/stock reconciliations with independent assays. Preserve unnormalised raw data for all successful/failed/cleanup/rework modes; whole bought formulations and measured child contents stay distinct. | kg | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |
| cp_utility | manufacture | each carrier and transport service | raw_records | row ID; meter integrated start/end or actual rate and interval; native unit; T P humidity; independent composition density calorific basis; steam dryness carrier mass inlet/return enthalpy; water-energy provider agreement; real loaded/empty freight legs; idle demand | Use stage meters and supply bills; integrate only rates, not already integrated volume. Establish substance/state-specific density and energy independently; preserve physical carrier mass beside energy without a duplicate provider. Onsite compressed-air electricity is not a purchased second air service. | kg; m3; MJ; kWh; t km | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |
| cp_asset | manufacture | individual tool asset and fluid | raw_records | asset/component ID; actual complete material/form fluid scope; opening/closing physical stock; new old repairs return retirement wear moisture and deposits; installed oil; actual deployment/usage; inherited embodied burden vectors; period service rule; gross_receipts_returns; measured_new_material_water; removed_old_material; independent_water_loss; parent_child_disjoint_scope | Balance each physical asset/component/fluid independently. Keep gross receipts/stocks/retirements separate from the documented current-period service inventory and actual usage attribution. Include repairs and new materials without duplicating a supplied complete asset or assuming fixed life. | kg; m3; actual usage unit | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |
| cp_residue | manufacture | each external residue | raw_records | row ID; stage batch; wet mass; independent dry solids moisture chemical contamination; internal/external destination; receiver treatment; inherited burden; retained child species; stock transfers | Weigh and characterize every compatible stream separately with actual transfer/treatment notes. Internal treatment/recovery transfers cancel; do not duplicate whole waste/wastewater treatment and its contained direct releases. | kg | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |
| cp_air | manufacture | each actual atmospheric species | raw_records | row ID; CAS and phase; source origin; dry wet basis; gas T P humidity O2 correction; real rate/time or totalised gas volume; species concentration; detection limits; control inlet/outlet; independent raw mineral phase carbonate organic composition; water and oxygen origins | Match species assays with gas quantity on the same actual state/period and boundary. Measure free/adsorbed water without silently including structural OH; use independently characterized mineral phases and validated evolved-gas H2O/CO2 analysis or equivalent to separate dehydroxylation/combustion/carbonate contributions. Keep equivalent indicators separately. Gross inlet and outlet air constituents close physically without adding an air aggregate. | kg; measured concentration and gas volume | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |
| cp_water | manufacture | each actual direct water discharge | raw_records | row ID; actual receiver; integrated flow or real rate/time; state density; dissolved/suspended identity and detection limit; independent chemistry; separate whole offsite wastewater transfer | Match actual discharge sampling and water quantity. Record specific ions only with analytical evidence; total elements/COD/AOX do not identify a salt or molecule. Direct discharge and external treatment transfer are disjoint boundaries. | kg; actual analytical units | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |
| cp_pack | service | each exact packaging material | raw_records | material/configuration ownership; opening/closing empty WIP-attached FG-attached reusable stock; new purchase P; external returned-in ER; gross physical shipped S; external returned-out EO; waste W; internal reuse; supplier-included glue/print; inherited burden; cohort Qc and H; supplier_attached_inbound_I; repair_material_Radd_Rremove; independently_measured_water_H2Oin_H2Oout; dry_wood; free_absorbed_water; actual_repair_identity_destination | Weigh each actual material/stock pool and trace receipts, gross dispatches and returns; empty/attached/reusable pools are disjoint and packaging-only. Keep whole supplied components and their children distinct. Assign actual incremental and inherited packaging burdens by original cohort without reducing gross physical quantities by economic shares. Explicitly retain I, independent repair additions/removals and water uptake/release. Water/material already in another measured flow direction is not duplicated, but closing retention never cancels a receipt. Add a specific atomic row for every additional actual repair material/water/removed outlet; unknown is not zero. | kg | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |
| cp_service | service | original cohort observed services | raw_records | original first-release cohort; original Qc net kg; manufacture burden vector; horizon H; opening/closing FG; gross G shipments and R returns with measured water contamination and losses; return/retest/rework increments; meters; physical residual; manufacturer_permission; body_glaze_compatibility; actual_rework_route; reacceptance; measured_new_material_water; removed_old_material; independent_mass_bridge | Collect actual incremental operations for the named cohort through observed H. Preserve original manufacture separately from new water/energy/materials/losses; returned plate mass need not equal its original delivered mass. No retest/re-delivery creates production; do not replace Qc by current manufacturing Q or net shipments. Rework applies only with actual manufacturer permission, body/glaze/mark compatibility, restoration to the original plate terminal and actual reacceptance; do not assume repairability, a pass or organic restoration. Incompatible adhesive/coating/decoration requires separate scope. Independently reconcile physical mass: actual opening+first-release receipt+returns+added material/water = closing+gross dispatch+destruction+removed old material+independent water loss+other actual exits. Terms are disjoint with species/phase checks and original Qc/H retained. | kg; m3; MJ; t km | each batch receipt interval and stock close | declared representative period with inherited stocks and observed H | actual site design and traceable cohort | per 1 kg reference flow | original calibrated records independent assays and reconciliation |

Collection protocols acquire raw unnormalised values only. Their aggregation label identifies the final reporting basis; the final_exchange rule performs the sole division after conversion, stock/history and attribution. Service rows use original cohort Qc/H, not current manufacturing Q.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert raw records to each own declared extensive unit and physical state before stock or allocation calculations. Integrate true rates once; use independent material/state density and calorific/enthalpy evidence. kWh to MJ uses 3.6. Whole formulations and carrier children remain disjoint; no secondary Flow factor supplies a density, chemistry or kg/item. | cp_material; cp_utility; cp_asset; cp_air; cp_water; cp_pack; cp_service | raw_native_totals | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| manufacturing_stock | manufacture | For each exchange j obtain attributable raw numerator A_j from inherited opening raw/WIP/unassigned non-WIP-store burden plus actual current operations after justified dedicated/subdivision/causal/residual attribution, less corresponding closing uncompleted raw/WIP/unassigned stores. Keep each vector and all failed/start-stop/idle/cleanup/rework loads. Do not subtract already-released closing FG, which is in Q. Internal recoveries cancel once; physical gross stocks are reconciled separately. Declare for each exchange whether its raw basis is gross receipts/occurrence or actual consumption already adjusted for stock. A net-consumption material reading is not corrected by the same raw-material stock a second time. Consumed opening material still carries its real upstream history; unreleased WIP and unassigned non-WIP inherited vectors use their own consistent basis, with unknowns retained. | raw_native_totals; cp_release; inherited_vectors; allocation_evidence | A_j | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`; `jrc-ilcd-allocation-2010` |
| service_increment | service | For each original cohort retain original first-release Qc and manufacture vector. Determine Aservice_j as actual assigned incremental services through H, retaining opening/closing FG and packaging history and true return/rework additions/losses. Goods returned/redispatched do not create Q or reverse original manufacture. Gross physical G/R and packaging movements are separate from burden attribution. For physical movement/output cards Aservice_j is the actual gross quantity of that specific movement, never its economic burden share; inherited manufacturing is not a second service consumption. | cp_service; cp_pack; Qc; H; inherited_vectors | Aservice_j | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| final_exchange | all inventory rows | The only unit-result operation is a_j = A_j / Q for manufacture and aservice_j = Aservice_j / Qc for explicitly separate original-cohort services over H. Apply once after raw conversion, stock/history and justified attribution. Protocol collection remains raw; cards/aggregation reference this same result without division again. Q is first-release net kg; Qc is original cohort first-release net kg. If either denominator is zero retain actual burden and issue no unit result. Finished reference amount is 1 kg. Consolidation cancels internal first-release transfer and retains actually observed services. | A_j; Q; Aservice_j; Qc; cp_release; cp_service | a_j; aservice_j | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`; `jrc-ilcd-allocation-2010` |
| packaging_stock | cp_pack | For each actual material/configuration: opening empty+WIP-attached+FG-attached+reusable packaging + P + I + ER + Radd + H2Oin = closing corresponding disjoint stocks + S + EO + W + Rremove + H2Oout. I is actual external packaging attached to other supplies; Radd/Rremove are actual repair material additions/removals outside the existing whole-package directions; H2Oin/H2Oout are independently measured uptake/release outside water already carried in those measured streams. All flow terms are disjoint: a child already in another measured direction is counted once, but retaining added mass in closing stock never cancels its real influx. Dry wood and water have independent subledgers, not two unknowns fitted from one wet residual. Every actual wood/glue/fastener/water/removed material needs a specific atomic exchange and status/destination. Internal reuse/component handoffs cancel once; gross physical mass is unallocated and packaging never enters Q. Original-cohort inherited burden and actual incremental service remain separate and assigned once. | cp_pack; P; ER; S; EO; W; I; Radd; Rremove; H2Oin; H2Oout | packaging_residuals | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| physical_balance | manufacture and service gates | Independently reconcile wet/dry physical mass and relevant elements across manufacturing, FG-service and combined gates. Include raw/WIP/FG, full supplies, assets/fluids, all actual inlet/outlet gas species, water phase/chemical changes, external Product returns and waste. Measure free/structural/reaction water and actual chemistry independently; no one residual determines two unknown species. Physical residuals remain disclosed before any burden shares. | cp_material; cp_release; cp_asset; cp_residue; cp_air; cp_water; cp_utility; cp_service; cp_pack | physical_element_species_residuals | `jrc-ceramic-bref-2007` |
| asset_service | cp_asset | Keep actual new/old/repair/retired equipment, moulds, media, refractory, deposited solids and in-machine fluids in a disjoint gross stock balance. Separately derive current service burden from verified inherited embodied inventory and actual deployment/usage. Do not assign one full machine per kg, guess mass or fix a life; materials worn into another recorded stream are not disposed again. Separately reconcile each physical asset/component/fluid: opening + actual gross receipts + independently measured added material/water = closing + outward returns + retirement/waste + wear entering other recorded streams + actual water loss/other exits. Terms are disjoint; included whole-machine components/fluids are child ledgers and worn material is not disposed twice. Closing retention never cancels an actual influx, and physical mass is not scaled by period-service burden shares. | cp_asset; inherited_asset_vectors; actual_usage | period_asset_service | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each exchange | Check exact native identity/property chain and every card restriction. Unresolved specific auxiliary identities/providers remain visible, with no false collection UUID or generic substitution. | native full records and real supplier specifications |
| dq_time | all modes and stocks | Declare representative period/site/design/cohort, all nonproducing modes and inherited stock vectors; services only through observed H with original Qc. | raw operation release stock and dispatch records |
| dq_measure | amounts and chemistry | Preserve calibration/sampling/detection uncertainty, independent assays/speciation/density/heat evidence and unresolved physical residuals. No published case becomes a plant measurement. | laboratory reports meters mass and element reconciliations |
| dq_scope | completeness and use | Differentiate missing/unknown, measured zero, below detection and demonstrated absence. Complete real materials/formulations/packaging/species/assets/control flows before asserting a data package; no engineering check certifies science, food contact or equivalent service. | gap register actual provider data and independent applicability review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | data package | Verify one declared undecorated transparent-glazed hard-porcelain plate design/grade, real raw-to-spray-granulate isostatic dry pressing and biscuit/glost two-firing route, finishing/testing and first-release gate; exclude incompatible material/route/component states. Core UUID and complete restrictions must hold; scientific applicability is reviewed separately from engineering. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| v_q | quantity and history | Reconcile unique first-release Q including released closing FG; all raw/WIP/store inherited exchange vectors, actual failed/zero-output/idle/cleanup loads and original Qc/H service accounts remain. No retest/reship creates Q, no double unit division. Zero denominators retain loads without a unit result. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| v_species | mass elements species | Check independent physical and relevant Si/Al/Na/K/C/H/O/S/F/Cl balances and phase/species evidence. NOx-as-NO2, SOx/HF equivalents, total metals/boron/carbon, VOC, AOX and COD are indicators, not identified chemical species. Unclosed residuals and detection limits remain explicit; do not fit reaction water and carbon dioxide from one loss-on-ignition number. | `jrc-ceramic-bref-2007` |
| v_stock | all packaging assets and carriers | Verify each packaging opening/closing empty/WIP/FG/reusable pool, whole purchases/external returns/gross shipments/waste, and asset/fluid physical stocks versus period service burden. Match actual steam/hot-water/condensate states and provider water-energy convention without duplicate full supplies. | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| v_complete | every applicable row | Require raw records, native extensive numerator unit, one final quotient, actual conditions/provider and all card qualifiers, uncertainty and source-role limits. Unknown, below detection, measured zero and demonstrated absence differ. Add every real missing atomic exchange. UUID/provider/data gaps in auxiliaries remain disclosed and cannot be hidden by a collection flow. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`; `jrc-ilcd-allocation-2010` |
| v_use | allocation downstream claims | Review dedicated/subdivided operations, exchange-specific causal evidence and any residual common-gate values. No food-contact certification, functional equivalence, dimensions, per-item mass or lifetime is inferred from names/typical recipes/native marketing. Engineering checks approve neither methodology nor translation, accepted mapping or publication. | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`; `jrc-ilcd-allocation-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Design/grade-specific ceramic plate production input to a separately specified product/service study |
| allowed_use | Declared raw-to-first-release manufacture with verified upstream supplies and separately labelled actually observed Qc/H services |
| excluded_use | All-CPC coverage, generic ceramic substitute, equal food-serving/food-contact/life comparison, alternate body/forming/firing/decoration, unobserved future services and automatic recovery credit |
| required_metadata | site region period and actual provider; one actual plate design material and quality grade; hard porcelain body and transparent glaze chemistry; whole supplied raw materials formulations and moisture; on-site wet preparation spray granulation isostatic dry pressing and two-stage gas firing; drying atmosphere surface finishing and acceptance tests; unique first-release net mass Q and no inferred kg per item; opening closing raw WIP non-WIP stores and each inherited burden vector; original released FG cohort and gross shipment return state bridge; observed service horizon H and original cohort Qc; each packaging identity ownership empty attached reusable stocks and gross returns; actual species phase compartment CAS origin and analytical detection basis; independent full physical mass and element balance; native extensive units carrier mass thermal state enthalpy and provider water energy convention; machine mould refractory fluid physical stocks versus period service burden; dedicated subdivision physical causality residual common-gate value evidence; uncertainty unresolved auxiliaries and downstream limits |
| required_quality_disclosure | Candidate scientific status and aligned unreviewed translation; source scope/time limits; actual raw observations versus requirements; unresolved auxiliary/provider/species and stock/physical residuals; allocation evidence; horizon completeness |
| update_trigger | Changed body/glaze/formulation, supplied state, granulation/forming/firing route, finish/mark/decor, quality gate, native restriction/provider, stock attribution or service boundary |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-ceramic-bref-2007 | official_guidance | European Commission, Ceramic Manufacturing Industry BREF, August 2007, §§2.3.6 and3.3.6; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | Qualitative whole tableware route, actual input/output and environmental-control families, finishing and adjacent material/forming/firing counterexamples. Historical tables and jiggering mass-flow example are not recipes, factors or this dry-press plant records. |
| rosenthal-porcelain-production | literature | Rosenthal, The fascinating world of porcelain production; https://www.rosenthal.de/en-de/porzellan-herstellung.html | Manufacturer primary qualitative evidence for hard porcelain, spray-granulate dry pressing, two firings/glazing, grinding/sorting and finished white-ware terminal, with casting/decor counterexamples. No universal recipe/temperature/pressure/shrinkage/food-contact/performance/life inference. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, First edition March 2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation scenario only: dedicated/subdivision/virtual subdivision, exchange-specific determining physical causality, residual common-process actual-state market value and explicit limits. No industry process proof, fixed share, QFD product-function method or recovery credit. |
