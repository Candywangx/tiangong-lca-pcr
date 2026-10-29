---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.natural-gypsum-hemihydrate-building-plaster
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Natural-gypsum hemihydrate building plaster manufacture

## 1. Scope and Applicability

Cradle-to-first-quality-release manufacture of bagged unhydrated hemihydrate-dominant building gypsum binder from delivered quarried natural gypsum at a China plant. Include receiving and actual crushing/screening, metered feeding, natural-gas hot-gas generation, simultaneous grinding/drying/calcining, dynamic classification with coarse returns, filtering, controlled cooling, any actually required final grinding, silo homogenization, bag filling and first acceptance. The declared representative route has no separately dosed admixture. It is not a purchased-plaster repackaging dataset. Exclude FGD/phosphogypsum/recycled-board feed, wet-autoclave alpha manufacture, deliberately anhydrous binder, hydrated/cured mortar, plasterboard and finished gypsum articles. An actual change to these identities requires applicability review and compatible evidence rather than substitution of a familiar UUID. Industrial technology, historical process descriptions and a bagged-binder specification are a transparent technical synthesis, not proof of one SKU, order or factory. Sources support operation/product distinctions, not a universal recipe, firing temperature, yield, phase fraction, consumption, emission factor or service life. `epa-gypsum-1993`, `grenzebach-gypsum-solutions`, `grenzebach-hammer-mill`, `knauf-stuckgips-2023`, `bvg-stuckgips-2022`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.natural-gypsum-hemihydrate-building-plaster |
| classification_refs | CPC 3.0 37410; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Unformulated natural-gypsum dry-calcined hemihydrate-dominant building binder powder at first bagged quality release |
| excluded_products | Uncalcined ore; FGD or recycled feed; alpha-autoclave product; deliberately anhydrous binder; factory-admixtured mortar; board; set plaster; packaging-only supply |
| representative_product | Natural-gypsum hemihydrate building plaster manufacture |
| production_route | Receipt/preparation → direct natural-gas hammer-mill drying/calcining → classification/filtering/cooling → bagging/test/first release; controls and asset services included |
| market_state | Unhydrated bagged powder at China plant; packaging excluded from net reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a dry calcined gypsum binder for its declared building use, with actual manufacturer-permitted grade and hydration performance; no functional equivalence across ore, phase or finished articles |
| How much | 1 kg |
| How well | site and reporting period; natural quarried gypsum origin and delivered-China boundary; dry direct natural-gas hot-gas-generator and hammer-mill route; unhydrated powder state; hemihydrate-dominant measured phase assay including actual AIII/AII and residual dihydrate; free moisture separately from crystal water; impurities and actual product grade; fineness and declared setting/strength tests; absence of factory-added admixtures for this scope; actual bag configuration and net contents; unique first quality release and lot traceability; Q excludes packaging and all repeat releases; raw/WIP inherited vectors and released-FG stock history; after-release service cohort and observation horizon; all actual utilities and water phases; emissions species and receiving subcompartments; actual supplier/upstream burden ownership; physical asset and packaging stock balances |
| How long or cycle | One first quality release for the actual production cohort; no assumed building service life |
| reference_flow_link | `first_release_plaster` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Stucco (calcined gypsum, hemihydrate), at plant `e984f1ce-5697-4303-8627-5d7e0a3a5e1b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and reporting period; natural quarried gypsum origin and delivered-China boundary; dry direct natural-gas hot-gas-generator and hammer-mill route; unhydrated powder state; hemihydrate-dominant measured phase assay including actual AIII/AII and residual dihydrate; free moisture separately from crystal water; impurities and actual product grade; fineness and declared setting/strength tests; absence of factory-added admixtures for this scope; actual bag configuration and net contents; unique first quality release and lot traceability; Q excludes packaging and all repeat releases; raw/WIP inherited vectors and released-FG stock history; after-release service cohort and observation horizon; all actual utilities and water phases; emissions species and receiving subcompartments; actual supplier/upstream burden ownership; physical asset and packaging stock balances |

Every qualifier must be declared in dataset metadata, process notes, product description or reference-flow comments. The UUID identifies calcined hemihydrate at a China plant; supplier, phase assay, bagging and release specification remain additional actual qualifications. No reference UUID is assigned to the raw-mineral, board or set-paste alternatives.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is total independently weighed uniquely first-accepted net powder in the declared production cohort; cp_release supplies Q. All cards use per 1 kg reference flow; first_release_plaster = 1 kg. Packaging and repeat releases are excluded. Closing released FG is included once in Q. |
| numerator_units | each inventory exchange | Actual native extensive property | row-specific kg or MJ or m3 or item | Preserve each native extensive unit; Mass/kg does not apply to electricity MJ, hydraulic-fluid m3 or asset count. The calculation stage converts raw units and attributes actual amounts before the sole normalization. Density and per-item mass require independent measurement at actual state/configuration. |
| phase_basis | gypsum solid and water subledgers | Mass | kg | Keep free water, bound water by actual phase, impurities and whole wet mass separately; measure each at the same lot/state. Cooling or storage rehydration changes phase and mass and must be observed, not assumed away. No fixed recipe, yield or hydrate fraction. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Burden-bearing quarried natural gypsum delivered to the China plaster plant, with actual moisture/phase and upstream supply including transport ownership |
| starting_condition_role | supplied_material |
| product_classification_scope | CPC 3.0:37410 (narrower) |
| recursive_input_rule | No purchased finished-plaster replacement for the manufacture route. Actual same-category supplier inputs need distinct phase/form, supplier burden and an applicability review; internal returns are not new procurement. |
| upstream_dataset_requirement | One compatible provider per supplied exchange and actual waste treatment; match grade, route, place, year, packaging and gate ownership. Disclose incomplete upstream data. |
| disclosure | site and reporting period; natural quarried gypsum origin and delivered-China boundary; dry direct natural-gas hot-gas-generator and hammer-mill route; unhydrated powder state; hemihydrate-dominant measured phase assay including actual AIII/AII and residual dihydrate; free moisture separately from crystal water; impurities and actual product grade; fineness and declared setting/strength tests; absence of factory-added admixtures for this scope; actual bag configuration and net contents; unique first quality release and lot traceability; Q excludes packaging and all repeat releases; raw/WIP inherited vectors and released-FG stock history; after-release service cohort and observation horizon; all actual utilities and water phases; emissions species and receiving subcompartments; actual supplier/upstream burden ownership; physical asset and packaging stock balances |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| route_boundary | all processes | Carry supplier burdens of natural gypsum, utilities, packaging, maintenance and assets into the complete manufacture route. The delivered natural-gypsum identity already includes quarry-to-plant delivery; any additional delivery must identify its uncovered leg. Do not add a rotary dryer, kettle, autoclave, boiler or steam system merely because it appears in another route. Keep actual controls, all failures, zero-output intervals, startup/shutdown, idling, cleaning, spills, samples and permitted rework. Add each real omitted material, energy carrier, water phase, waste and emitted species as an atomic row with actual property/unit and supplier/fate. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill` |
| first_release_gate | release; services | Q is the independently weighed total net powder in uniquely first-accepted bagged lots during the production cohort. First testing and bagging precede Q. A first-released lot in closing FG is already in Q; never subtract its manufacturing burden as closing WIP or add closing FG again as production output. Delivery, stock transfer, return and retest do not generate new Q. Retain after-release warehousing, handling, repacking and dispatch as actual incremental services attributed to original cohort Q_c over a disclosed horizon h; no new manufacture burden or guessed service for an unobserved future. A combined dataset cancels the internal Q transfer. This is not a net-delivery denominator. | `knauf-stuckgips-2023`; `jrc-ilcd-2010` |
| stocks_vectors | all inventory rows | Retain per-exchange inherited vectors for opening/closing raw materials, WIP and unassigned non-WIP stores. Manufacturing A_i carries opening inherited burdens plus current attributable loads and real inward burden transfers, less closing still-unreleased stocks and justified once-only outward transfers to a genuinely different cohort/function. Released FG never enters that manufacturing closing subtraction. Failed products, samples, broken bags, wastes, sale and removal retain originating manufacturing and treatment burdens unless an independently justified transfer applies; a physical output is not itself that justification. Do not subtract a mass scalar from a burden vector. Independently retain opening/closing physical quantities for each raw, WIP and unassigned non-WIP store as well as every inherited exchange vector. Declare whether each source quantity is gross receipt/pool entry before stock adjustment or already net consumed; identify each correction already included and never apply the same raw-stock correction twice. | `jrc-ilcd-2010` |
| mass_phase_energy | receipt; calcine; finish; controls; release; services | Close gross physical mass and relevant Ca/S/H/O/C/N balances at manufacture, FG service and combined gates independently of LCI allocation. Measure as-received feed and phase/free-moisture assays, all wet stocks, dry powder and true species separately. Pure ideal dihydrate-to-hemihydrate stoichiometry is only a phase check when independently justified, not a yield or two-unknown residual solver. Separately observe free-water evaporation, crystal-water release/uptake, combustion water, ambient humidity, condensate, liquid purge and water retained in solids. Gypsum dehydration is not invented chemical reaction water or automatic exported steam. Measure natural-gas carrier mass/composition and thermal MJ separately without two upstream purchases; electricity keeps its energy property. Actual steam/heat contracts, if introduced, require separate atomic carriers, true states, enthalpies and actual liquid returns; never copy an absent boiler. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill` |
| packaging_assets | release; maintenance; services | For each real packaging article/material retain opening empty + attached WIP/FG + reusable stock + paid purchases + first non-purchased external receipts + external returns received = closing corresponding stocks + packaging on gross physical shipments + outward returns + waste, with internal reuse cancelling. first non-purchased external ingress packaging is still real physical ingress and has one upstream burden owner; no extra purchase of already supplied components. Packaging is not net product Q or an automatic coproduct. For each asset, wear part and installed fluid retain opening + real inward supply + X_in = closing wet/in-place/spare stock + outward retirement/waste + X_out, counting X only when absent from another actual inward/outward term. Keeping new wet material in closing stock never deletes its actual ingress. Separate physical asset stocks from the current measured service-burden share; no fixed life or complete machine per kg. In the packaging bridge distinguish actual purchases P, first non-purchased external ingress I and external returns received ER from gross shipments S, outward returns EO and waste W. Add actual separately measured material/water changes X_in on the ingress side and X_out on the egress side: opening full wet stocks + P + I + ER + X_in = closing full wet stocks + S + EO + W + X_out. Internal first-release packaging transfers are reconciled once between manufacture and FG gates, not additional external receipts. Deduplicate X only against other actual incoming/outgoing FLOW terms, never opening or closing stocks: retained new water/material remains both real ingress and full closing wet mass. The same applies to actual removal and full opening mass. Water/material already included in a whole wet receipt or outflow is counted once there without duplicate X. Independently record dry components, free/bound water, source, phase, destination, actual repair permission/tests/disposition and burden histories. Before completing data, add a specific atomic exchange for every real added/removed material or water phase not already represented; no assumed repair, uptake, dry wood, wood species or residual-fitted quantity. X_in/X_out deduplicates only the same measured material/water already in another same-side incoming/outgoing FLOW term of this same bridge, never stock, opposite-direction flow or the mere existence of an atomic card. Retained new material/water remains actual influx AND full closing wet stock. Whole wet P/I includes its integral matter and water once. For assembly choose a disjoint component basis or a reconciled whole-article basis: the bought whole sack already contains supplier-integral liner/seam/glue/print; only actual separately supplied onsite additions are distinct components. The empty assembled tare equals the measured whole-bought-sack contribution plus actual added liner/thread/other matter and retained water minus actual removed/lost matter, excluding powder contents. In component mode keep each unique contribution once in stocks and S/EO/W; never use the full assembled tare as paper_sack and also add its separate liner/thread. In article mode transfer components into that article using paired measured internal handoff IDs, replace their same-gate stock/shipment figures by the reconciled article figure and cancel matched internal transfers. Integral chemical/component assays are memo subaccounts, not additional exchanges. For a single real mixed PE collection outlet, pe_waste is the one actual Waste exchange: independently measured liner and wrap source-W quantities are disjoint original subaccounts/pool withdrawals which sum to the matched outlet, with other real sources identified separately. Use total OR its disjoint partition at the same boundary, never both; no invented second outlet or duplicated treatment/provider. A genuinely separate actual outlet instead requires its own specific card before completion.  Apply packaging_receipt_basis to distinguish each actual P/I/ER receipt. | `grenzebach-hammer-mill`; `jrc-ilcd-2010` |
| supplier_ownership | all supplied exchanges | Whole purchased preparations and supplied articles carry their complete mass and one upstream provider burden. Assays, active components, carrier water and installed-fluid content are subledgers, not second purchases. Actual onsite blending requires each purchased ingredient, real mixing energy and losses separately. Do not silently add admixtures to this unformulated-binder scope or treat substrate, pure component or raw ore identity as the complete finished product. Substantiate raw origin, native route/form/geography/type and all relevant properties before binding any later UUID. | `bvg-stuckgips-2022`; `jrc-ilcd-2010` |
| packaging_receipt_basis | each packaging receipt | For every actual packaging article, classify each whole external receipt once. P is paid procurement, including paid packaging bundled with another supply without a separate invoice. I is all first non-purchased external ingress: standalone gifts, loans, rental or pool receipts and non-purchased supplier-attached packaging; supplier attachment is only an I subset. ER requires this same item or an auditable configuration-matched batch linked to this site's own prior outward record; custody or another party's use alone does not prove a return. P, I and ER are disjoint. Existing I cards and their raw protocols cover the same physical article for every such I origin; no new material, UUID or quantity is presumed. X_in/X_out remain disjoint material/water-change terms, never a substitute for whole-article receipt. Retain gross physical quantity, owner/custodian, payment or non-purchase basis, origin, prior-outward link where required, native state/unit and inherited manufacturing/service vector. Non-purchase is neither a new manufacture nor automatic zero burden: attribute actual used service and incremental transport/handling once to its proper original cohort and denominator, retaining unused service separately without a default lifetime or credit. This is the declared conserving foreground accounting implementation, not a claim that the cited source prescribes these variable names. | `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Receiving and raw-mineral preparation | required | Actual route; individual conditional exchanges require observed presence | Foreground manufacture | per 1 kg reference flow |
| calcine | Hot-gas generation and dry mill calcination | required | Actual route; individual conditional exchanges require observed presence | Foreground manufacture | per 1 kg reference flow |
| finish | Classification and controlled cooling | required | Actual route; individual conditional exchanges require observed presence | Foreground manufacture | per 1 kg reference flow |
| release | Bagging and first quality acceptance | required | Actual route; individual conditional exchanges require observed presence | Foreground manufacture | per 1 kg reference flow |
| controls | Emission control and real outlet accounting | required | Actual route; individual conditional exchanges require observed presence | Foreground manufacture | per 1 kg reference flow |
| maintenance | Maintenance and asset service | required | Actual route; individual conditional exchanges require observed presence | Foreground manufacture | per 1 kg reference flow |
| services | After-release stock and dispatch services | required | Actual route; individual conditional exchanges require observed presence | Original-cohort incremental services | per 1 kg reference flow |

Descriptions below are part of each consumer-facing exchange. A conditional row is neither an assertion of presence nor permission to insert zero for an unknown. Flows not physically present require an absence record; actual unlisted materials, carrier phases, emission species, wastewater treatments and replacement articles must be added separately. Preserve full manufactured supplied articles, not only their raw components.

### Process: Receiving and raw-mineral preparation (`receipt`)

#### Inputs

##### Product flows

###### Quarried natural gypsum feed (`gypsum_feed`)

Delivered quarried natural gypsum at a plaster-product plant gate in China. Use its whole as-received mass including actual free and crystal water and impurities. Link quarrying and included inbound delivery once; no FGD, anhydrite or calcined feed substitution. Upstream delivery already covered by the supplier is not purchased twice. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Natural gypsum `a4be0b17-8763-439c-a818-30b9b4afeed3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_gypsum_feed; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gypsum_feed`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Metered electricity (`receipt_power`)

Only grid-average alternating current at the user-side 1–35 kV interface. Select the actual China regional provider/year; account for transformation below this voltage separately when needed. This is consumption supply, not generation or a voltage-transformation service. Submeters and reconciliation assign this process once. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_receipt_power; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receipt_power`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Onsite handling diesel (`handling_diesel`)

Conditional on real diesel equipment. Whole fuel mass; native grade, formulation, density, heating value, refinery route, geography and provider are unspecified and must be supplied by the data producer. Keep fuel carbon, hydrogen, sulfur, moisture and heat subledgers; supply and combustion are distinct burdens. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_handling_diesel; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handling_diesel`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

### Process: Hot-gas generation and dry mill calcination (`calcine`)

#### Inputs

##### Product flows

###### Metered electricity (`calcine_power`)

Only grid-average alternating current at the user-side 1–35 kV interface. Select the actual China regional provider/year; account for transformation below this voltage separately when needed. This is consumption supply, not generation or a voltage-transformation service. Submeters and reconciliation assign this process once. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_calcine_power; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_calcine_power`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Hot-gas-generator natural gas (`natural_gas`)

Natural gas burned in an industrial furnace/hot-gas generator. Meter the complete supplied mixture, not methane alone; record composition, pressure, temperature, density and LHV independently. The native record has no fixed supplier, gas assay or heating value. Preserved source taxonomy does not override its gaseous fuel identity. Include ignition, shutdown, standby and unsuccessful runs. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Natural gas `c536902d-9d84-4984-8504-ab88cdbe8b7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_natural_gas; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_natural_gas`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

##### Elementary flows

###### Atmospheric oxygen inlet (`air_o2`)

Oxygen CAS 7782-44-7, renewable elemental resource from air. Actual oxygen within combustion, conveying and cooling air, not a purchased oxygen product. Internal recirculated air/gas cancels; do not add aggregate air on top of these species. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_air_o2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_o2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Atmospheric dinitrogen inlet (`air_n2`)

Dinitrogen CAS 7727-37-9, resource from air; measure gross intake independently of combustion-gas nitrogen output. Internal recirculated air/gas cancels; do not add aggregate air on top of these species. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_air_n2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_n2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Atmospheric argon inlet (`air_ar`)

Argon CAS 7440-37-1, resource from air; inlet composition and total air quantity must share the same measured state. Internal recirculated air/gas cancels; do not add aggregate air on top of these species. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_air_ar; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_ar`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Atmospheric carbon dioxide inlet (`air_co2`)

Actual atmospheric CO2 CAS 124-38-9 in sweep/combustion/cooling air, without assigning it an invented fossil/biogenic origin. A photosynthetic uptake or fossil resource record does not establish this mixed physical intake. Internal recirculated air/gas cancels; do not add aggregate air on top of these species. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Atmospheric carbon dioxide inlet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_air_co2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_co2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Atmospheric water-vapour inlet (`air_h2o`)

Atmospheric H2O vapour CAS 7732-18-5. Measure humidity, dry/wet basis, air amount, pressure and temperature; not liquid cooling-water resource or an air-emission flow used backwards. Internal recirculated air/gas cancels; do not add aggregate air on top of these species. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Atmospheric water-vapour inlet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_air_h2o; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h2o`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

#### Outputs

##### Product flows

###### Hot calcined gypsum powder (`hot_stucco`)

Actual unreleased intermediate transferred to cooling/classification; record mass, temperature, phase assay and inherited exchange vector. Not first-release Q and not an additional external reference output. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Hot calcined gypsum powder
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_hot_stucco; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hot_stucco`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

### Process: Classification and controlled cooling (`finish`)

#### Inputs

##### Product flows

###### Metered electricity (`finish_power`)

Only grid-average alternating current at the user-side 1–35 kV interface. Select the actual China regional provider/year; account for transformation below this voltage separately when needed. This is consumption supply, not generation or a voltage-transformation service. Submeters and reconciliation assign this process once. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_finish_power; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_power`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Received hot calcined gypsum powder (`hot_stucco_received`)

Counterpart of hot_stucco with the same lot and inherited burden; internal quantity cancels once. Record true hold-up and cooling/rehydration change independently; no fresh upstream procurement. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Received hot calcined gypsum powder
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_hot_stucco_received; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hot_stucco_received`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

### Process: Bagging and first quality acceptance (`release`)

#### Inputs

##### Product flows

###### Metered electricity (`release_power`)

Only grid-average alternating current at the user-side 1–35 kV interface. Select the actual China regional provider/year; account for transformation below this voltage separately when needed. This is consumption supply, not generation or a voltage-transformation service. Submeters and reconciliation assign this process once. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_release_power; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release_power`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Whole finished kraft-paper plaster sack (`paper_sack`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Only the actual paid standalone or bundled P input leg is reported by this card; I/ER/S/EO are separate direction cards. One manufactured open-mouth or valve paper sack, at plant, with actual composition, dimensions, moisture and supplier. Native paper-bag family includes kraft/virgin/recycled paper; no fixed sack weight is given. Supplier-included seams, adhesive or liner belong to the whole purchased article once, with nested composition and one upstream owner; do not purchase their ingredients again. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paper_sack`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Separately supplied polyethylene sack liner (`separate_liner`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Only the actual paid standalone or bundled P input leg is reported by this card; I/ER/S/EO are separate direction cards. Only separately supplied PE-LD film physically used as a liner and not already owned by the whole purchased sack. Native reference is Mass/kg; thickness, forming and supplier require actual records. A film identity cannot represent a woven polypropylene bag. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_separate_liner; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_separate_liner`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Separately supplied polyethylene pallet wrap (`stretch_film`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Only the actual paid standalone or bundled P input leg is reported by this card; I/ER/S/EO are separate direction cards. Only actual separate PE-LD wrapping film; share the supplier lot with a liner only through separately measured uses, not duplicate purchases. Complete film stays in the packaging stock ledger; no default kg per pallet. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_stretch_film; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stretch_film`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Manufactured wood-board pallet (`pallet`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Only the actual paid standalone or bundled P input leg is reported by this card; I/ER/S/EO are separate direction cards. One actual whole finished manufactured wooden portable load platform, restricted to the declared transport pallet; the wider family also contains other platform/collar forms which are not an included bundle. Record design, wood species, fasteners, treatment/coatings, wet mass, reused/new status and one supplier boundary. Integral whole-supplied materials are composition subledgers, not another procurement. No standard dimension, mass, load rating or reuse life is supplied. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pallet; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pallet`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Separately supplied polypropylene sack-sewing thread (`sewing_thread`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Only the actual paid standalone or bundled P input leg is reported by this card; I/ER/S/EO are separate direction cards. Only real onsite bag closing using separately supplied PP sewing thread; whole supplier-sewn sacks already own their seam. A filament yarn explicitly excluding sewing thread is incompatible. Record polymer, finish formulation and mass as supplied. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Separately supplied polypropylene sack-sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_sewing_thread; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_sewing_thread`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Whole finished kraft-paper plaster sack I (`paper_sack_included_ingress`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Only a real separately identifiable first non-purchased external article/component ingress, with one upstream owner and no second purchase. An integral whole-bag liner/seam/glue/print is only its composition subaccount, not this separate I leg. One manufactured open-mouth or valve paper sack, at plant, with actual composition, dimensions, moisture and supplier. Native paper-bag family includes kraft/virgin/recycled paper; no fixed sack weight is given. Supplier-integral seams, adhesive or liner belong to the whole purchased article once, with nested composition and one upstream owner; do not purchase their ingredients again. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_paper_sack
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Whole finished kraft-paper plaster sack ER (`paper_sack_external_return_received`)

Only actual external return received; distinguish internal reuse and original delivery/state, no negative shipment or new manufacture. One manufactured open-mouth or valve paper sack, at plant, with actual composition, dimensions, moisture and supplier. Native paper-bag family includes kraft/virgin/recycled paper; no fixed sack weight is given. Supplier-included seams, adhesive or liner belong to the whole purchased article once, with nested composition and one upstream owner; do not purchase their ingredients again. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_paper_sack
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polyethylene sack liner I (`separate_liner_included_ingress`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Only a real separately identifiable first non-purchased external article/component ingress, with one upstream owner and no second purchase. An integral whole-bag liner/seam/glue/print is only its composition subaccount, not this separate I leg. Only separately supplied PE-LD film physically used as a liner and not already owned by the whole purchased sack. Native reference is Mass/kg; thickness, forming and supplier require actual records. A film identity cannot represent a woven polypropylene bag. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_separate_liner; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_separate_liner
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polyethylene sack liner ER (`separate_liner_external_return_received`)

Only actual external return received; distinguish internal reuse and original delivery/state, no negative shipment or new manufacture. Only separately supplied PE-LD film physically used as a liner and not already owned by the whole purchased sack. Native reference is Mass/kg; thickness, forming and supplier require actual records. A film identity cannot represent a woven polypropylene bag. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_separate_liner; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_separate_liner
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polyethylene pallet wrap I (`stretch_film_included_ingress`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Only a real separately identifiable first non-purchased external article/component ingress, with one upstream owner and no second purchase. An integral whole-bag liner/seam/glue/print is only its composition subaccount, not this separate I leg. Only actual separate PE-LD wrapping film; share the supplier lot with a liner only through separately measured uses, not duplicate purchases. Complete film stays in the packaging stock ledger; no default kg per pallet. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_stretch_film; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_stretch_film
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polyethylene pallet wrap ER (`stretch_film_external_return_received`)

Only actual external return received; distinguish internal reuse and original delivery/state, no negative shipment or new manufacture. Only actual separate PE-LD wrapping film; share the supplier lot with a liner only through separately measured uses, not duplicate purchases. Complete film stays in the packaging stock ledger; no default kg per pallet. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_stretch_film; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_stretch_film
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Manufactured wood-board pallet I (`pallet_included_ingress`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Only a real separately identifiable first non-purchased external article/component ingress, with one upstream owner and no second purchase. An integral whole-bag liner/seam/glue/print is only its composition subaccount, not this separate I leg. One actual whole finished manufactured wooden portable load platform, restricted to the declared transport pallet; the wider family also contains other platform/collar forms which are not an included bundle. Record design, wood species, fasteners, treatment/coatings, wet mass, reused/new status and one supplier boundary. Integral whole-supplied materials are composition subledgers, not another procurement. No standard dimension, mass, load rating or reuse life is supplied. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pallet; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pallet
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Manufactured wood-board pallet ER (`pallet_external_return_received`)

Only actual external return received; distinguish internal reuse and original delivery/state, no negative shipment or new manufacture. One actual whole finished manufactured wooden portable load platform, restricted to the declared transport pallet; the wider family also contains other platform/collar forms which are not an included bundle. Record design, wood species, fasteners, treatment/coatings, wet mass, reused/new status and one supplier boundary. Integral whole-supplied materials are composition subledgers, not another procurement. No standard dimension, mass, load rating or reuse life is supplied. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pallet; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pallet
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polypropylene sack-sewing thread I (`sewing_thread_included_ingress`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Only a real separately identifiable first non-purchased external article/component ingress, with one upstream owner and no second purchase. An integral whole-bag liner/seam/glue/print is only its composition subaccount, not this separate I leg. Only real onsite bag closing using separately supplied PP sewing thread; whole supplier-sewn sacks already own their seam. A filament yarn explicitly excluding sewing thread is incompatible. Record polymer, finish formulation and mass as supplied. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Separately supplied polypropylene sack-sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_sewing_thread; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_sewing_thread
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polypropylene sack-sewing thread ER (`sewing_thread_external_return_received`)

Only actual external return received; distinguish internal reuse and original delivery/state, no negative shipment or new manufacture. Only real onsite bag closing using separately supplied PP sewing thread; whole supplier-sewn sacks already own their seam. A filament yarn explicitly excluding sewing thread is incompatible. Record polymer, finish formulation and mass as supplied. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Separately supplied polypropylene sack-sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_sewing_thread; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_sewing_thread
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### First quality-released bagged building plaster (`first_release_plaster`)

Unhydrated dry calcined hemihydrate-dominant gypsum binder at a China plant. Use the native full display unchanged; the native downstream-slurry-mixer naming note requires exact upstream/downstream identity matching, and does not make this a cured board/paste. Restrict use to the actual natural-gypsum dry-calcination route, measured phase composition including any real anhydrite/residual dihydrate, grade and factory release specification. No inferred purity or exact brand equivalence. Bag and first acceptance occur before Q; net as-bagged powder retains actual residual free water and phase-bound water, while packaging mass is excluded. All native qualifiers and section 3 qualifiers remain attached to this card. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits. Required qualifiers: site and reporting period; natural quarried gypsum origin and delivered-China boundary; dry direct natural-gas hot-gas-generator and hammer-mill route; unhydrated powder state; hemihydrate-dominant measured phase assay including actual AIII/AII and residual dihydrate; free moisture separately from crystal water; impurities and actual product grade; fineness and declared setting/strength tests; absence of factory-added admixtures for this scope; actual bag configuration and net contents; unique first quality release and lot traceability; Q excludes packaging and all repeat releases; raw/WIP inherited vectors and released-FG stock history; after-release service cohort and observation horizon; all actual utilities and water phases; emissions species and receiving subcompartments; actual supplier/upstream burden ownership; physical asset and packaging stock balances

- Selected flow: Stucco (calcined gypsum, hemihydrate), at plant `e984f1ce-5697-4303-8627-5d7e0a3a5e1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `epa-gypsum-1993`; `grenzebach-hammer-mill`; `knauf-stuckgips-2023`; `bvg-stuckgips-2022`

### Process: Emission control and real outlet accounting (`controls`)

#### Inputs

##### Product flows

###### Metered electricity (`controls_power`)

Only grid-average alternating current at the user-side 1–35 kV interface. Select the actual China regional provider/year; account for transformation below this voltage separately when needed. This is consumption supply, not generation or a voltage-transformation service. Submeters and reconciliation assign this process once. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_controls_power; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_controls_power`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Cleaning, laboratory and bearing-cooling makeup water (`tap_water`)

Treated tap-water supply at the actual plant. Separate cleaning, laboratory-test and bearing-cooling submeter uses without duplicating one supply. Native reference is Mass/kg; the secondary Volume coefficient is not a measured plant density. Keep liquid stock, blowdown and evaporation independently; no default steam or boiler. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_tap_water; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_tap_water`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Supplier-owned liquid cooling water (`cooling_water_supply`)

Only a real external heat-exchange-water contract; not ordinary internal circulation. Record incoming liquid mass and thermal state plus the supplier energy/water ownership convention, paired with cooling_water_return. Do not count the same tap-water supply again. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Supplier-owned liquid cooling water
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_cooling_water_supply; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cooling_water_supply`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

#### Outputs

##### Product flows

###### Liquid cooling water returned to supplier (`cooling_water_return`)

Only actual external Product return under the same water/energy contract. Measure outgoing mass, temperature, pressure and enthalpy relative to the agreed datum; distinguish contamination and losses. Return mass need not equal supply and is not an automatic heat credit. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Liquid cooling water returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_cooling_water_return; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cooling_water_return`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Recovered liquid gypsum-process condensate (`condensate_export`)

Conditional on actual gas condensation and verified recipient acceptance. Record liquid phase, assay, net mass and enthalpy; not milk condensate, not steam and not all crystal water. Internal condensate reuse cancels in the combined balance; a real external export remains gross with one justified burden-transfer decision. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Recovered liquid gypsum-process condensate
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_condensate_export; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condensate_export`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

##### Waste flows

###### Rejected uncalcined natural gypsum (`raw_reject`)

Separate mineral feed rejects and contamination by actual phase and moisture; do not call them FGD residue or sodium-sulfate waste. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Rejected uncalcined natural gypsum
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_raw_reject; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_raw_reject`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Unreleased calcined gypsum powder waste (`failed_plaster`)

Failed batches, purges and unrecoverable filter fines before Q; record each disposition and phase. Captured compatible fines returned internally are balances, not waste and fresh feed together. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Unreleased calcined gypsum powder waste
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_failed_plaster; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failed_plaster`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Consumed gypsum quality-test sample (`quality_sample`)

Actual net consumed specimens including water added in setting/strength tests; record powder withdrawal, added test water and wet waste separately from Q and product phase water. Reusable or retained samples remain stocks. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Consumed gypsum quality-test sample
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_quality_sample; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_quality_sample`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Gypsum-contaminated cleaning wastewater (`cleaning_water_waste`)

Actual wet whole wastewater sent to the named external treatment receiver; measure water, suspended solids and dissolved species without inventing sulfate/COD species from one residual. A native degreasing-water emission record is not this waste transfer. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Gypsum-contaminated cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_cleaning_water_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cleaning_water_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Liquid cooling-circuit blowdown waste (`cooling_blowdown`)

Only actual externally treated blowdown; separate whole water mass, dissolved additives and suspended solids. A return to the water supplier is cooling_water_return instead, never a second waste fate. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Liquid cooling-circuit blowdown waste
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_cooling_blowdown; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cooling_blowdown`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Waste paper sack (`paper_waste`)

One actual paper packaging waste at plant, global identity. Preserve moisture and contamination; native identity prescribes no disposal or recovery credit. Attached plaster is a nested material balance and cannot also be counted as a second whole waste mass. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paper_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Waste polyethylene film (`pe_waste`)

One real PE film waste at the generating plant, with actual dirt/water and receiver; a cleaned mechanical-recycling-plant material is a different gate. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed. If liner and stretch-film sources share this one real PE collection outlet, their W amounts are independently measured disjoint source/pool subaccounts of this card, not two extra Waste exchanges. Reconcile their sum to this outlet and keep one treatment/provider owner; never add total and components at the same boundary.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pe_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pe_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Waste polypropylene sewing thread (`pp_thread_waste`)

Actual separately discarded PP sewing thread; do not duplicate it within whole paper-sack waste. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Waste polypropylene sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pp_thread_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pp_thread_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Discarded wood pallet (`pallet_waste`)

Whole discarded pallet with wet wood, metal fittings and contamination subledgers; retained repairable/reusable pallets remain stocks. No generic primary-production wood-waste route is assumed. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Discarded wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pallet_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pallet_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Used bearing lubricating oil (`used_oil`)

Whole used contaminated lubricating oil at generation; petroleum or synthetic oil is allowed by the native waste family. Measure water/solids and actual receiver. Treatment is unspecified, never assumed recycling, burning or credit. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_used_oil; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_used_oil`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Used hydraulic fluid (`used_hydraulic`)

One whole actual hydraulic waste fluid, with native extensive unit to be resolved independently. Keep formulation/water and the physical mass even when recorded in volume. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Used hydraulic fluid
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_used_hydraulic; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_used_hydraulic`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Spent lithium-soap bearing grease (`used_grease`)

Actual complete spent grease with contamination; not used liquid oil or wax-solvent lubricant. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Spent lithium-soap bearing grease
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_used_grease; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_used_grease`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Worn alloy-steel mill hammer (`worn_hammer`)

Removed whole worn part with actual moisture/coatings and destination. Machining turnings, fit-up offcuts and unprocessed steel-production scrap are not automatically worn equipment. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Worn alloy-steel mill hammer
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_worn_hammer; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_worn_hammer`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Spent polyester filter bag (`spent_filter`)

Actual complete used bag and attached mineral/water as subledgers; filtered dust removed separately must not be counted again in attached mass. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Spent polyester filter bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_spent_filter; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_spent_filter`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Spent fired refractory lining brick (`spent_refractory`)

Removed whole lining brick at actual wet state; keep still-installed and reusable old bricks in stocks. Record dust/wear losses as real destinations and avoid a fictitious universal lifetime. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Spent fired refractory lining brick
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_spent_refractory; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_spent_refractory`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

##### Elementary flows

###### Residual oxygen to air (`stack_o2`)

Oxygen CAS 7782-44-7; emissions to air, unspecified subcompartment. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_stack_o2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stack_o2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Dinitrogen to air (`stack_n2`)

Dinitrogen CAS 7727-37-9; emissions to air, unspecified subcompartment. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_stack_n2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stack_n2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Argon to air (`stack_ar`)

Argon CAS 7440-37-1; emissions to air, unspecified subcompartment, not the long-term alternative. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_stack_ar; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stack_ar`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### New fossil carbon dioxide to air (`fossil_co2`)

Fossil CO2 CAS 124-38-9; emissions to air, unspecified subcompartment. Separate newly generated fuel/mineral-origin carbon from atmospheric CO2 passthrough. Phase dehydration alone produces no CO2. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_fossil_co2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fossil_co2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Atmospheric carbon dioxide passthrough outlet (`passthrough_co2`)

Unchanged atmospheric CO2 CAS 124-38-9, matched to its separate inlet; no carbon sequestration or fossil-emission credit. Measure real changes rather than forcing inlet = outlet. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Atmospheric carbon dioxide passthrough outlet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_passthrough_co2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_passthrough_co2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Fossil carbon monoxide to air (`co`)

Fossil CO CAS 630-08-0; emissions to air, unspecified subcompartment. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_co; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_co`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Nitrogen monoxide to air (`no`)

NO CAS 10102-43-9; emissions to air, unspecified subcompartment. Not N2O or total NOx. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_no; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_no`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Nitrogen dioxide to air (`no2`)

NO2 CAS 10102-44-0; emissions to air, unspecified subcompartment. NOx reported as NO2-equivalent is an indicator, not this species mass. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_no2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_no2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Sulfur dioxide to air (`so2`)

SO2 CAS 7446-09-5; emissions to air, unspecified subcompartment. Sulfate assay or total sulfur oxide does not establish SO2 emission mass. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_so2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_so2`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Unburned fossil methane to air (`methane`)

Fossil CH4 CAS 74-82-8; emissions to air, unspecified subcompartment. Count actual combustion slip and local leakage only once, excluding upstream leakage already in the supplier. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_methane; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_methane`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Water vapour to air (`water_vapour`)

H2O vapour CAS 7732-18-5; emissions to air, unspecified subcompartment. Independently observe vapour, liquid condensate and retained water; separate ambient moisture, free-water drying, crystal dehydration, fuel hydrogen oxidation and rehydration subledgers without duplicate H2O flows. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_water_vapour; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_vapour`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Residual mineral particulate to air (`pm`)

Particle-size-unspecified PM to air, unspecified subcompartment. Preserve the real mineral/phase and size evidence; no conversion into a particular sulfate molecule. This UUID neither states a PM10 fraction nor allows total PM plus overlapping size fractions. Captured product is not emitted PM. Gross species quantity requires matching sampling state, time coverage and actual outlet; resolve a different UUID when a known receiving subcompartment conflicts. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pm; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pm`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Nitrous oxide to air (`nitrous_oxide`)

Only actual independently quantified N2O CAS 10024-97-2; emissions to air, unspecified subcompartment. Not NO or NO2-equivalent NOx. Include real combustion emission at the measured outlet; an unmeasured species is unknown, not automatically zero. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_nitrous_oxide; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nitrous_oxide`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

### Process: Maintenance and asset service (`maintenance`)

#### Inputs

##### Product flows

###### Metered electricity (`maintenance_power`)

Only grid-average alternating current at the user-side 1–35 kV interface. Select the actual China regional provider/year; account for transformation below this voltage separately when needed. This is consumption supply, not generation or a voltage-transformation service. Submeters and reconciliation assign this process once. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_maintenance_power; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance_power`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Mineral-oil bearing lubricant (`bearing_oil`)

Only if the actual purchased whole bearing-oil formulation is mineral-oil based; retain all additives within its procurement mass and supplier burden. PAO-only oil is a different identity. Measure opening, closing and in-equipment oil plus actual replacement and leakage. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Mineral-oil bearing lubricant
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_bearing_oil; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bearing_oil`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Mineral-oil lithium-soap bearing grease (`bearing_grease`)

Conditional on actual documented grease of this formulation. A wax/solvent lubricant is incompatible. Purchase the entire preparation once; ingredient assays are subledgers. Add a distinct row if the real grease chemistry differs. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Mineral-oil lithium-soap bearing grease
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_bearing_grease; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bearing_grease`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Finished alloy-steel mill hammer (`steel_hammer`)

Actual new or refurbished complete hammer with alloy, hardfacing, dimensions, supplier and measured wet/as-installed mass. Do not bind steel balls or raw steel as the whole article. Preserve in-place and spare stocks separately from attributable wear/service burden. Add baffle plates or belts as distinct actual exchanges. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Finished alloy-steel mill hammer
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_steel_hammer; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steel_hammer`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Finished polyester dust-filter bag (`filter_bag`)

Conditional on a real complete polyester filter bag and its temperature/chemical suitability. Nonwoven substrate UUID does not cover a purchased finished bag with seams and fittings. Keep the complete supply once; fabric and fittings remain composition subledgers. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Finished polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_filter_bag; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_filter_bag`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Whole purchased hydraulic fluid (`hydraulic_fluid`)

Only actual hydraulic equipment and compatible oil-based complete fluid. Native reference is Volume/m3, and the formulation may be mineral or synthetic with performance additives; no density is supplied. Keep measured volume at recorded temperature and independent mass/density, including installed fluid, stock and losses. Native reference property `93a60a56-a3c8-22da-a746-0800200c9a66` → unit group `93a60a57-a3c8-12da-a746-0800200c9a66` → reference unit m3; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Reuse the single section 8 normalized result associated with cp_hydraulic_fluid; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hydraulic_fluid`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Fired refractory lining brick (`refractory_brick`)

One real fired refractory brick grade for the hot-gas-generator lining. Native manufactured refractory family permits high-alumina/silica/magnesia materials, not ordinary fired building brick. Match actual composition, moisture, supplier and use condition; do not infer a universal refractory recipe or lifetime. New, refurbished, in-place and removed masses remain separate. Native reference property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_refractory_brick; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refractory_brick`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Complete gypsum hammer-mill calciner (`calciner_asset`)

Physical acquisition and retirement are recorded as asset stocks with configuration and serial numbers; the LCI quantity is only the documented service share attributable to the production cohort. No fixed lifetime, assumed kg per asset or complete asset per kg plaster. Record measured installed mass separately if required; item and Item(s) are the same count with factor 1. Do not derive mass from a secondary property. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Complete gypsum hammer-mill calciner
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result associated with cp_calciner_asset; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_calciner_asset`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Complete gypsum crusher (`crusher_asset`)

Physical acquisition and retirement are recorded as asset stocks with configuration and serial numbers; the LCI quantity is only the documented service share attributable to the production cohort. No fixed lifetime, assumed kg per asset or complete asset per kg plaster. Record measured installed mass separately if required; item and Item(s) are the same count with factor 1. Do not derive mass from a secondary property. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Complete gypsum crusher
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result associated with cp_crusher_asset; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_crusher_asset`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Complete dynamic gypsum classifier (`classifier_asset`)

Physical acquisition and retirement are recorded as asset stocks with configuration and serial numbers; the LCI quantity is only the documented service share attributable to the production cohort. No fixed lifetime, assumed kg per asset or complete asset per kg plaster. Record measured installed mass separately if required; item and Item(s) are the same count with factor 1. Do not derive mass from a secondary property. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Complete dynamic gypsum classifier
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result associated with cp_classifier_asset; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_classifier_asset`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Complete indirect tubular stucco cooler (`cooler_asset`)

Physical acquisition and retirement are recorded as asset stocks with configuration and serial numbers; the LCI quantity is only the documented service share attributable to the production cohort. No fixed lifetime, assumed kg per asset or complete asset per kg plaster. Record measured installed mass separately if required; item and Item(s) are the same count with factor 1. Do not derive mass from a secondary property. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Complete indirect tubular stucco cooler
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result associated with cp_cooler_asset; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cooler_asset`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Complete plaster bag-filling machine (`bagger_asset`)

Physical acquisition and retirement are recorded as asset stocks with configuration and serial numbers; the LCI quantity is only the documented service share attributable to the production cohort. No fixed lifetime, assumed kg per asset or complete asset per kg plaster. Record measured installed mass separately if required; item and Item(s) are the same count with factor 1. Do not derive mass from a secondary property. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Complete plaster bag-filling machine
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result associated with cp_bagger_asset; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bagger_asset`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

### Process: After-release stock and dispatch services (`services`)

#### Inputs

##### Product flows

###### Metered electricity (`services_power`)

Only grid-average alternating current at the user-side 1–35 kV interface. Select the actual China regional provider/year; account for transformation below this voltage separately when needed. This is consumption supply, not generation or a voltage-transformation service. Submeters and reconciliation assign this process once. Native reference property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_services_power; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services_power`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Actual packaging repair wood (`pack_repair_wood`)

Conditional actual new wood or wooden replacement part for the declared packaging article, not an assumed pallet recipe or second whole pallet. Record species, treatment, fasteners as separate actual materials where needed, dry matter, free water and complete wet physical mass, custody and provider ownership. Include actual retained new material on the input side and in closing wet stock. Deduplicate only the same-side whole-provider component already counted in another incoming flow term; no subtraction merely because a stock or atomic card exists. Only an actual separately quantified nonoverlapping physical leg is an exchange here. If already included in an existing supply meter or collection outlet, keep its disjoint original source-use subaccount instead of another additive LCA exchange/provider.

- Selected flow: Actual packaging repair wood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_package_repair; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_package_repair
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Process Water (`pack_repair_water`)

Conditional actual municipal potable water supplied for packaging repair or cleaning, independently measured in native Mass/kg at actual state and supplier scope. Keep formulation-carried water and whole wet wood once; internal circulation is not a new supply. Record water retained, removed in wastewater or evaporated independently. This is a disjoint child leg of actual tap_water where that meter already includes it, with one provider and no second purchase or added burden. Only an actual separately quantified nonoverlapping physical leg is an exchange here. If already included in an existing supply meter or collection outlet, keep its disjoint original source-use subaccount instead of another additive LCA exchange/provider.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_package_repair; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_package_repair
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

##### Elementary flows

###### Actual packaging moisture intake from air (`pack_repair_humidity`)

Conditional independently measured ordinary water transferred from ambient air into packaging over actual h; distinguish this resource leg from purchased process water and water already contained in whole wet packaging or wood. No fixed air fraction or humidity uptake is assumed. Declare phase, air resource compartment, actual article/time/state and the corresponding wet-stock change. Only an actual separately quantified nonoverlapping physical leg is an exchange here. If already included in an existing supply meter or collection outlet, keep its disjoint original source-use subaccount instead of another additive LCA exchange/provider. This same measured uptake covers ordinary packaging storage and handling as well as any actual work; no repair event is required or inferred.

- Selected flow: Actual packaging moisture intake from air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_package_repair; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_package_repair
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Whole finished kraft-paper plaster sack S (`paper_sack_gross_shipped`)

Only actual gross outward shipment with goods, including redelivery, on original Q_c/h. Use one disjoint component contribution or matched whole-article view; never assembled tare plus its separately added liner/thread. No new Q, supplier purchase or automatic credit. One manufactured open-mouth or valve paper sack, at plant, with actual composition, dimensions, moisture and supplier. Native paper-bag family includes kraft/virgin/recycled paper; no fixed sack weight is given. Supplier-included seams, adhesive or liner belong to the whole purchased article once, with nested composition and one upstream owner; do not purchase their ingredients again. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_paper_sack; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_paper_sack
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Whole finished kraft-paper plaster sack EO (`paper_sack_external_return_out`)

Only real external return outward; separate from gross S, Waste and internal paired transfers, preserving actual state and original Q_c/h. One manufactured open-mouth or valve paper sack, at plant, with actual composition, dimensions, moisture and supplier. Native paper-bag family includes kraft/virgin/recycled paper; no fixed sack weight is given. Supplier-included seams, adhesive or liner belong to the whole purchased article once, with nested composition and one upstream owner; do not purchase their ingredients again. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_paper_sack; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_paper_sack
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polyethylene sack liner S (`separate_liner_gross_shipped`)

Only actual gross outward shipment with goods, including redelivery, on original Q_c/h. Use one disjoint component contribution or matched whole-article view; never assembled tare plus its separately added liner/thread. No new Q, supplier purchase or automatic credit. Only separately supplied PE-LD film physically used as a liner and not already owned by the whole purchased sack. Native reference is Mass/kg; thickness, forming and supplier require actual records. A film identity cannot represent a woven polypropylene bag. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_separate_liner; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_separate_liner
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polyethylene sack liner EO (`separate_liner_external_return_out`)

Only real external return outward; separate from gross S, Waste and internal paired transfers, preserving actual state and original Q_c/h. Only separately supplied PE-LD film physically used as a liner and not already owned by the whole purchased sack. Native reference is Mass/kg; thickness, forming and supplier require actual records. A film identity cannot represent a woven polypropylene bag. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_separate_liner; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_separate_liner
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polyethylene pallet wrap S (`stretch_film_gross_shipped`)

Only actual gross outward shipment with goods, including redelivery, on original Q_c/h. Use one disjoint component contribution or matched whole-article view; never assembled tare plus its separately added liner/thread. No new Q, supplier purchase or automatic credit. Only actual separate PE-LD wrapping film; share the supplier lot with a liner only through separately measured uses, not duplicate purchases. Complete film stays in the packaging stock ledger; no default kg per pallet. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_stretch_film; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_stretch_film
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polyethylene pallet wrap EO (`stretch_film_external_return_out`)

Only real external return outward; separate from gross S, Waste and internal paired transfers, preserving actual state and original Q_c/h. Only actual separate PE-LD wrapping film; share the supplier lot with a liner only through separately measured uses, not duplicate purchases. Complete film stays in the packaging stock ledger; no default kg per pallet. Native reference property 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → reference unit kg; preserve this extensive basis, actual form and the stated supplier/route/media limits.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_stretch_film; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_stretch_film
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Manufactured wood-board pallet S (`pallet_gross_shipped`)

Only actual gross outward shipment with goods, including redelivery, on original Q_c/h. Use one disjoint component contribution or matched whole-article view; never assembled tare plus its separately added liner/thread. No new Q, supplier purchase or automatic credit. One actual whole finished manufactured wooden portable load platform, restricted to the declared transport pallet; the wider family also contains other platform/collar forms which are not an included bundle. Record design, wood species, fasteners, treatment/coatings, wet mass, reused/new status and one supplier boundary. Integral whole-supplied materials are composition subledgers, not another procurement. No standard dimension, mass, load rating or reuse life is supplied. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_pallet; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_pallet
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Manufactured wood-board pallet EO (`pallet_external_return_out`)

Only real external return outward; separate from gross S, Waste and internal paired transfers, preserving actual state and original Q_c/h. One actual whole finished manufactured wooden portable load platform, restricted to the declared transport pallet; the wider family also contains other platform/collar forms which are not an included bundle. Record design, wood species, fasteners, treatment/coatings, wet mass, reused/new status and one supplier boundary. Integral whole-supplied materials are composition subledgers, not another procurement. No standard dimension, mass, load rating or reuse life is supplied. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_pallet; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_pallet
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polypropylene sack-sewing thread S (`sewing_thread_gross_shipped`)

Only actual gross outward shipment with goods, including redelivery, on original Q_c/h. Use one disjoint component contribution or matched whole-article view; never assembled tare plus its separately added liner/thread. No new Q, supplier purchase or automatic credit. Only real onsite bag closing using separately supplied PP sewing thread; whole supplier-sewn sacks already own their seam. A filament yarn explicitly excluding sewing thread is incompatible. Record polymer, finish formulation and mass as supplied. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Separately supplied polypropylene sack-sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_sewing_thread; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_sewing_thread
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Separately supplied polypropylene sack-sewing thread EO (`sewing_thread_external_return_out`)

Only real external return outward; separate from gross S, Waste and internal paired transfers, preserving actual state and original Q_c/h. Only real onsite bag closing using separately supplied PP sewing thread; whole supplier-sewn sacks already own their seam. A filament yarn explicitly excluding sewing thread is incompatible. Record polymer, finish formulation and mass as supplied. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Separately supplied polypropylene sack-sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_pack_sewing_thread; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_service_pack_sewing_thread
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

##### Waste flows

###### Discarded previously released plaster (`released_plaster_waste`)

Expired, wetted, returned or damaged original-cohort product, retaining manufacture history. Rebagging, redrying or recalcining is permitted only with manufacturer/spec permission and postwork tests; prior release is not a new Q. Physical gross and treatment burdens remain; sale or external removal alone does not remove the originating manufacture burden. The physically named exchange remains without a bound UUID until a compatible native identity is confirmed.

- Selected flow: Discarded previously released plaster
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_released_plaster_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_released_plaster_waste`
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`

###### Actual removed packaging repair wood (`pack_repair_removed_wood`)

Conditional separate gross wet old wood/part removed during actual packaging repair, with independently measured dry matter, water, custody, waste status and treatment destination. Do not also count the same material in whole packaging W or another same-side outlet. Ordinary disposal or sale is not an automatic transfer of manufacturing burden or negative credit. Only an actual separately quantified nonoverlapping physical leg is an exchange here. If already included in an existing supply meter or collection outlet, keep its disjoint original source-use subaccount instead of another additive LCA exchange/provider.

- Selected flow: Actual removed packaging repair wood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_package_repair; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_package_repair
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

###### Actual packaging repair wastewater (`pack_repair_wastewater`)

Conditional separately measured gross repair/cleaning wastewater with actual water and dissolved/suspended species, wet mass and treatment owner. Keep collected liquid distinct from water retained in stock and vapour. Use a disjoint child leg if an existing service wastewater total already includes it, never add two purchases/treatments or infer water from COD/VOC. Only an actual separately quantified nonoverlapping physical leg is an exchange here. If already included in an existing supply meter or collection outlet, keep its disjoint original source-use subaccount instead of another additive LCA exchange/provider.

- Selected flow: Actual packaging repair wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_package_repair; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_package_repair
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

##### Elementary flows

###### Actual packaging repair water vapour to air (`pack_repair_vapour`)

Conditional independently measured ordinary molecular H2O vapour, CAS7732-18-5, emitted from actual packaging repair/drying over h into the declared air compartment. Distinguish incoming air moisture, retained water and collected wastewater. No reaction source, fixed evaporation fraction, heavy-water identity or duplicate same-side emission is assumed. Only an actual separately quantified nonoverlapping physical leg is an exchange here. If already included in an existing supply meter or collection outlet, keep its disjoint original source-use subaccount instead of another additive LCA exchange/provider. Ordinary H2O CAS7732-18-5, current unspecified-air only; no heavy-water/isotope/ice/ether substitution. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. This same measured release also covers ordinary packaging storage and handling humidity desorption or evaporation, even with no repair or drying operation; no repair event is required or inferred.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_package_repair; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_package_repair
- Sources: `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill`; `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all shared burdens | Use this hierarchy only for an attributional study whose goal requires allocation rather than substitution. First assign dedicated operations and exchange vectors to their real product/cohort/function; perform physical or virtual subdivision as far as technically possible. Demonstrate and disclose residual multifunctionality and any accuracy loss when subdivision is infeasible. Industrial equipment evidence does not establish an LCA allocation rule. | `jrc-ilcd-2010` |
| allocation_causality | each residual exchange | For each genuinely residual exchange identify its determining physical causal relation to the co-functions and justify the measured criterion. Do not apply one convenient mass, heat, duration or revenue percentage to every exchange; physical presence alone does not prove determining causality. Only the remaining unresolved common-process vector may use contemporary market values at the same common-process exit state, grade, moisture, quantity and gate. Document prices, period, adjustments and sensitivity. There is no free physical/economic choice, fixed split or automatic avoided-product credit. | `jrc-ilcd-2010` |
| allocation_losses | waste; services; packaging; returns | Keep complete physical gross, waste handling and originating manufacturing loads independently of burden sharing. Waste sale, ordinary breakage, rejects, samples or dispatch to treatment do not alone justify allocating away their burden. A real independent other cohort/function requires documented once-only vector transfer and separate physical quantities. Track after-release returns to original cohorts, actual extra water/materials, losses and rework permission/tests/disposition; no repeated production or implicit recovery credit. Attributional recycling decisions require their actual system boundary, not an unreviewed module-D credit. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Protocols collect and sum only original unnormalized observations. In the aggregation_rule column, “per 1 kg reference flow” is solely the association label of the result produced once by the calculation stage, not a collection-time division or another calculation. Service protocols keep original cohort Q_c and horizon h; raw masses, volumes, energy and asset counts retain their own units. The sole denominator operation is the normalization rule below.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gypsum_feed | receipt | Quarried natural gypsum feed | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; wet mass; free water; actual sulfate phase/impurity assay; internal returns; particle-size tests; temperature ; independent raw/WIP/non-WIP opening/closing physical quantities and each inherited exchange vector; gross receipt versus already-net-consumption basis; every stock correction already included | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_receipt_power | receipt | Metered electricity | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; original kWh meter; voltage; supply region/year; process submeter and master-meter reconciliation | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | MJ | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_calcine_power | calcine | Metered electricity | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; original kWh meter; voltage; supply region/year; process submeter and master-meter reconciliation | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | MJ | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_finish_power | finish | Metered electricity | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; original kWh meter; voltage; supply region/year; process submeter and master-meter reconciliation | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | MJ | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_release_power | release | Metered electricity | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; original kWh meter; voltage; supply region/year; process submeter and master-meter reconciliation | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | MJ | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_controls_power | controls | Metered electricity | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; original kWh meter; voltage; supply region/year; process submeter and master-meter reconciliation | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | MJ | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_maintenance_power | maintenance | Metered electricity | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; original kWh meter; voltage; supply region/year; process submeter and master-meter reconciliation | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | MJ | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_services_power | services | Metered electricity | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; original kWh meter; voltage; supply region/year; process submeter and master-meter reconciliation | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | MJ | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_handling_diesel | receipt | Onsite handling diesel | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_natural_gas | calcine | Hot-gas-generator natural gas | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_tap_water | controls | Cleaning, laboratory and bearing-cooling makeup water | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_cooling_water_supply | controls | Supplier-owned liquid cooling water | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_cooling_water_return | controls | Liquid cooling water returned to supplier | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_condensate_export | controls | Recovered liquid gypsum-process condensate | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_bearing_oil | maintenance | Mineral-oil bearing lubricant | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_bearing_grease | maintenance | Mineral-oil lithium-soap bearing grease | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_steel_hammer | maintenance | Finished alloy-steel mill hammer | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_filter_bag | maintenance | Finished polyester dust-filter bag | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_hydraulic_fluid | maintenance | Whole purchased hydraulic fluid | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; whole fluid volume; measurement temperature; independent density/mass; installed liquid and leakage | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | m3 | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_refractory_brick | maintenance | Fired refractory lining brick | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_calciner_asset | maintenance | Complete gypsum hammer-mill calciner | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; configuration/serial; physical count; measured wet installed mass if available; real capacity/service hours; acquisition/retirement; repair and asset-provider inventory; measured service denominator | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | item | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_crusher_asset | maintenance | Complete gypsum crusher | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; configuration/serial; physical count; measured wet installed mass if available; real capacity/service hours; acquisition/retirement; repair and asset-provider inventory; measured service denominator | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | item | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_classifier_asset | maintenance | Complete dynamic gypsum classifier | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; configuration/serial; physical count; measured wet installed mass if available; real capacity/service hours; acquisition/retirement; repair and asset-provider inventory; measured service denominator | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | item | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_cooler_asset | maintenance | Complete indirect tubular stucco cooler | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; configuration/serial; physical count; measured wet installed mass if available; real capacity/service hours; acquisition/retirement; repair and asset-provider inventory; measured service denominator | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | item | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_bagger_asset | maintenance | Complete plaster bag-filling machine | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; configuration/serial; physical count; measured wet installed mass if available; real capacity/service hours; acquisition/retirement; repair and asset-provider inventory; measured service denominator | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | item | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_air_o2 | calcine | Atmospheric oxygen inlet | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_air_n2 | calcine | Atmospheric dinitrogen inlet | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_air_ar | calcine | Atmospheric argon inlet | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_air_co2 | calcine | Atmospheric carbon dioxide inlet | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_air_h2o | calcine | Atmospheric water-vapour inlet | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_stack_o2 | controls | Residual oxygen to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_stack_n2 | controls | Dinitrogen to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_stack_ar | controls | Argon to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_fossil_co2 | controls | New fossil carbon dioxide to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_passthrough_co2 | controls | Atmospheric carbon dioxide passthrough outlet | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_co | controls | Fossil carbon monoxide to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_no | controls | Nitrogen monoxide to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_no2 | controls | Nitrogen dioxide to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_so2 | controls | Sulfur dioxide to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_methane | controls | Unburned fossil methane to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_water_vapour | controls | Water vapour to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_pm | controls | Residual mineral particulate to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_nitrous_oxide | controls | Nitrous oxide to air | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; exact species/CAS or measured PM size basis; inlet/outlet; dry/wet and standard/actual gas volume; integrated volume or real flow rate and intervals; concentration/speciation; humidity; temperature; pressure; liquid carryover; calibration/detection limits | Synchronize species measurement and gas sampling state with independently measured integrated volume or actual time-resolved rate; retain detection limits. Use actual inlet and outlet streams, excluding matched internal circulation. Raw volumes are not species mass until the separate documented conversion. Do not infer species from NOx/VOC/COD or a closure residual. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_hot_stucco | calcine | Hot calcined gypsum powder | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; wet mass; free water; actual sulfate phase/impurity assay; internal returns; particle-size tests; temperature | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_hot_stucco_received | finish | Received hot calcined gypsum powder | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; wet mass; free water; actual sulfate phase/impurity assay; internal returns; particle-size tests; temperature | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_paper_sack | release | Whole finished kraft-paper plaster sack | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector; exact P/I/ER direction and unique article/lot; whole-as-bought versus separately added component IDs; source origin/stage/cohort; assembly tare and independent component contributions; paired internal transfers; complete empty/WIP/FG/reusable wet stocks; each source-pool W and matching collection total ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. For this card family keep P/I/ER distinct. Integral bought liner/thread/glue/print stays only in its whole-bag ledger; actual separately supplied bundles/components enter once, with no extra whole supplier charge. Use disjoint components or the matched transferred article, never their sum.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_separate_liner | release | Separately supplied polyethylene sack liner | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector; exact P/I/ER direction and unique article/lot; whole-as-bought versus separately added component IDs; source origin/stage/cohort; assembly tare and independent component contributions; paired internal transfers; complete empty/WIP/FG/reusable wet stocks; each source-pool W and matching collection total ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. For this card family keep P/I/ER distinct. Integral bought liner/thread/glue/print stays only in its whole-bag ledger; actual separately supplied bundles/components enter once, with no extra whole supplier charge. Use disjoint components or the matched transferred article, never their sum.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_stretch_film | release | Separately supplied polyethylene pallet wrap | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector; exact P/I/ER direction and unique article/lot; whole-as-bought versus separately added component IDs; source origin/stage/cohort; assembly tare and independent component contributions; paired internal transfers; complete empty/WIP/FG/reusable wet stocks; each source-pool W and matching collection total ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. For this card family keep P/I/ER distinct. Integral bought liner/thread/glue/print stays only in its whole-bag ledger; actual separately supplied bundles/components enter once, with no extra whole supplier charge. Use disjoint components or the matched transferred article, never their sum.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_pallet | release | Manufactured wood-board pallet | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector; exact P/I/ER direction and unique article/lot; whole-as-bought versus separately added component IDs; source origin/stage/cohort; assembly tare and independent component contributions; paired internal transfers; complete empty/WIP/FG/reusable wet stocks; each source-pool W and matching collection total ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. For this card family keep P/I/ER distinct. Integral bought liner/thread/glue/print stays only in its whole-bag ledger; actual separately supplied bundles/components enter once, with no extra whole supplier charge. Use disjoint components or the matched transferred article, never their sum.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_sewing_thread | release | Separately supplied polypropylene sack-sewing thread | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector; exact P/I/ER direction and unique article/lot; whole-as-bought versus separately added component IDs; source origin/stage/cohort; assembly tare and independent component contributions; paired internal transfers; complete empty/WIP/FG/reusable wet stocks; each source-pool W and matching collection total ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. For this card family keep P/I/ER distinct. Integral bought liner/thread/glue/print stays only in its whole-bag ledger; actual separately supplied bundles/components enter once, with no extra whole supplier charge. Use disjoint components or the matched transferred article, never their sum.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_release | release | First quality-released bagged building plaster | raw_foreground_record | unique lot; first acceptance time; bag count; actual filled gross mass; separately measured packaging tare; net accepted powder Q; grade; phase/free-moisture assays; original cohort; repeat-release flags; test results | Calibrated filled-bag weighing and separate traceable tare for that real bag configuration, or independently calibrated net-powder weighing with reconciliation. Sum only uniquely first-accepted lots; retain rejected/sample masses and all stocks separately. No nominal bag weight or repeated release as Q. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_raw_reject | controls | Rejected uncalcined natural gypsum | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; wet mass; free water; actual sulfate phase/impurity assay; internal returns; particle-size tests; temperature | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_failed_plaster | controls | Unreleased calcined gypsum powder waste | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty; wet mass; free water; actual sulfate phase/impurity assay; internal returns; particle-size tests; temperature | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_released_plaster_waste | services | Discarded previously released plaster | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; original first-release Q_c and observed horizon h; actual new/removed parts/materials and free/bound-water quantities/phases; governing rework permission/specification; required postwork tests; acceptance or waste disposition; actual additional atomic exchanges | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_quality_sample | controls | Consumed gypsum quality-test sample | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_cleaning_water_waste | controls | Gypsum-contaminated cleaning wastewater | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_cooling_blowdown | controls | Liquid cooling-circuit blowdown waste | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_paper_waste | controls | Waste paper sack | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_pe_waste | controls | Waste polyethylene film | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector; independently measured W_liner and W_stretchfilm source/pool withdrawals before mixing; unique collection outlet/period/cohort; other actual PE sources; measured moisture/soil/plaster residues and wet mass; disjoint sum-to-total bridge | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. One actual mixed outlet remains one Waste exchange and one treatment/provider load. Its source-W fractions are original disclosure subaccounts only, not additional LCA exchanges; no fixed split, and unknown origin quantities stay unknown. Actual independently separate outlets require separate cards. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_pp_thread_waste | controls | Waste polypropylene sewing thread | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_pallet_waste | controls | Discarded wood pallet | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty ; P/I/ER/S/EO/W gross directions and full wet opening/closing stocks; actual disjoint X_in/X_out changes in dry material and free/bound water; source/phase/destination; other-flow-only deduplication; no stock cancellation; real repair permission/tests/disposition; whole-supplier burden ownership and every inherited vector | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_used_oil | controls | Used bearing lubricating oil | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_used_hydraulic | controls | Used hydraulic fluid | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_used_grease | controls | Spent lithium-soap bearing grease | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_worn_hammer | controls | Worn alloy-steel mill hammer | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_spent_filter | controls | Spent polyester filter bag | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_spent_refractory | controls | Spent fired refractory lining brick | raw_foreground_record | timestamp; lot/cohort; direction; original meter/weighing unit; opening/closing quantity; whole supplied quantity; state and moisture; provider/receiver; inherited exchange vector; stock/transfer ID; measured uncertainty | Keep unnormalized raw receipts, stock/transfer and activity records in original units; calibrate meters/scales; sum raw observations only. Convert and attribute at the separate calculation stage; do not divide during collection. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_service_pack_paper_sack | services | Actual S/EO physical legs for paper_sack | raw_foreground_record | original Q_c and h; unique article/lot; actual gross S including redelivery and EO external return; actual state/wet mass and origin; matched manufacturing P_Q/internal transfers; disjoint components or assembled tare; full physical stocks; one actual provider; source-W versus collection total | Independently weigh/trace each physical gross direction over actual original-cohort h; no extra supply purchase, stock adjustment or economic scaling. Maintain article/component and source-W/collection reconciliation. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_service_pack_separate_liner | services | Actual S/EO physical legs for separate_liner | raw_foreground_record | original Q_c and h; unique article/lot; actual gross S including redelivery and EO external return; actual state/wet mass and origin; matched manufacturing P_Q/internal transfers; disjoint components or assembled tare; full physical stocks; one actual provider; source-W versus collection total | Independently weigh/trace each physical gross direction over actual original-cohort h; no extra supply purchase, stock adjustment or economic scaling. Maintain article/component and source-W/collection reconciliation. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_service_pack_stretch_film | services | Actual S/EO physical legs for stretch_film | raw_foreground_record | original Q_c and h; unique article/lot; actual gross S including redelivery and EO external return; actual state/wet mass and origin; matched manufacturing P_Q/internal transfers; disjoint components or assembled tare; full physical stocks; one actual provider; source-W versus collection total | Independently weigh/trace each physical gross direction over actual original-cohort h; no extra supply purchase, stock adjustment or economic scaling. Maintain article/component and source-W/collection reconciliation. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_service_pack_pallet | services | Actual S/EO physical legs for pallet | raw_foreground_record | original Q_c and h; unique article/lot; actual gross S including redelivery and EO external return; actual state/wet mass and origin; matched manufacturing P_Q/internal transfers; disjoint components or assembled tare; full physical stocks; one actual provider; source-W versus collection total | Independently weigh/trace each physical gross direction over actual original-cohort h; no extra supply purchase, stock adjustment or economic scaling. Maintain article/component and source-W/collection reconciliation. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_service_pack_sewing_thread | services | Actual S/EO physical legs for sewing_thread | raw_foreground_record | original Q_c and h; unique article/lot; actual gross S including redelivery and EO external return; actual state/wet mass and origin; matched manufacturing P_Q/internal transfers; disjoint components or assembled tare; full physical stocks; one actual provider; source-W versus collection total | Independently weigh/trace each physical gross direction over actual original-cohort h; no extra supply purchase, stock adjustment or economic scaling. Maintain article/component and source-W/collection reconciliation. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |
| cp_package_repair | services | Actual separate repair material/water directions; ordinary packaging storage/handling humidity uptake and release | raw_foreground_record | original Q_c/h; repair custody/permission/event; actual separately supplied wood/water and removed old matter; gross wet/dry mass; ambient ordinary H2O; retained water; distinct wastewater/vapour; actual outlets and provider; same-side overlaps; existing meter/collection totals and nonadditive child uses; ordinary storage/handling observation interval; actual work performed regardless of authorization or success; maker/spec permission and posttests; acceptance/failure/disposition; actual new/old material/water and custody; original Q_c/h for performed service | Measure actual conditional repair quantities/phase/source independently; if already in another same-side actual supply or collection total, retain only its source-use subaccount and do not add a second exchange/provider. Retained additions stay input plus full wet stock. No assumed repair/uptake. Ordinary storage/handling humidity uptake and release require no invented repair event. For all actual work in the declared manufacture/service ledgers, record actual material/water/energy/emissions, waste, custody and attributable burdens whether authorized, unauthorized, failed or rejected. Manufacturer/specification permission and posttests govern authorization and continued product qualification; they never erase actual flows or burdens from unapproved or failed work. Keep original cohort Q_c/h, actual acceptance/disposition and actual new/old material/water; no assumed restoration, new first release, extra provider or credit. | kg | each lot/meter interval and stock boundary | full declared cohort including failed/zero-output intervals; original-cohort horizon for services | actual China plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; phase/species tests; ownership and stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert each original reading to its row extensive unit before allocation: sum integrated readings once; integrate actual rates over their real intervals once. Electricity kWh * 3.6 gives MJ. Gas/liquid mass = measured integrated volume * independently applicable density at the recorded state, with explicit standard/actual-volume corrections. No generic water density for gas/oil, no extra time factor for integrated volume, and no secondary-property density. Keep mass, energy and volume subledgers rather than adding unlike units. | raw_readings; actual_state; independent_density; meter_intervals | converted_raw | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill` |
| manufacture_vector | all inventory rows | For exchange i: A_i = B_open_i + C_i + T_in_i - B_close_i - T_out_i. Each term is the same-unit inherited exchange vector after justified dedicated assignment/subdivision and exchange-specific allocation; C_i retains all actual current production/failed/idle/cleanup/rework and associated treatment loads. B_close_i covers only raw, WIP and still-unassigned non-WIP stores, never released FG. T_out_i needs a genuine distinct receiving cohort/function and once-only transfer decision, never ordinary waste/sales deduction. Gross physical measurements stay unallocated. Record links to opening/closing lots and every transfer. Define C_i on the gross current acquisition/load basis before these same stock corrections. When a source already reports stock-adjusted net consumption, reconstruct the compatible gross pool from independent receipt/stock/transfer evidence and explicitly retain its included corrections; never stock-correct that net quantity again. For a custody-only gross physical disclosure card, including packaging/FG/asset movement and actual thermal-carrier supply/return or accepted process-condensate export, override this burden-stock assignment for that physical view: A_i is its independently measured full gross leg V_i in the row native unit. It is not B_open+C+T_in-B_close-T_out, an inherited burden, net consumption or an economic fraction. Actual separate supply/treatment/service burden vectors remain attributed once under their real owner. Do not charge another provider or create credit from the physical view. | B_open_i; C_i; T_in_i; B_close_i; T_out_i | A_i | `jrc-ilcd-2010` |
| service_vector | services | For original released cohort c and observation horizon h, A_service_i_c_h includes actual incremental storage/handling/dispatch/repacking and every actually performed postrelease rework/treatment load attributable to that cohort, whether authorized, unapproved, unauthorized, failed or rejected, with its original manufacture vector retained separately. Use original first-release Q_c, not current shipments or repeated acceptance, as its basis. Assign remaining service stores and genuine intercohort transfers once with inherited vectors. No observed service means no claimed future service result; unresolved service records stay disclosed. For any actual postrelease rebagging, redrying or recalcining, retain governing manufacturer/specification permission, continued route/grade applicability, independently measured added/removed materials and free/bound-water phases, required postwork tests, and accepted return or waste disposition. Retain the original cohort and all actual service loads; storage guidance or application-stage drying is not permission to restore a failed powder. Performed service stays with original Q_c/h even if serviced FG is held at closing; only genuinely unused and unassigned service-material stores carry. Trace repair/rebagging custody, actual responsible provider, new and removed matter/water, unchanged applicable powder grade and native phase, postwork tests and acceptance/rejection/disposition. Damp, set or hydrated plaster is not assumed recoverable as the same supplied dry hemihydrate powder. | original_cohort; Q_c; h; actual_service_records; service_stock_vectors | A_service_i_c_h | `jrc-ilcd-2010` |
| normalize_once | all inventory rows | u_i = A_i / Q; u_i is the exchange amount per 1 kg reference flow. For a separately reported service result replace A_i and Q by A_service_i_c_h and Q_c in this same operation. Q must be positive; if Q = 0 retain all raw burdens and report no unit result. This is the only division by the product denominator. Cards reuse u_i, and collection aggregation labels refer to this same result rather than executing a second division. first_release_plaster is exactly 1 kg net powder. For the custody-only physical view use this same operation with A_i=V_i, or A_service_i_c_h=V_i_c_h and original Q_c for actual original-cohort services; do not stock-correct or economically scale a measured gross leg, add inherited manufacture to it, or divide twice. Thermal-carrier gross kg/state/enthalpy and actual heat MJ are separate dimensions of one agreed whole-provider supply/service; actual carrier/process-condensate return alone creates no extra water/heat purchase or credit. Internal circulation and matched article/component handoffs cancel. | A_i; Q; A_service_i_c_h; Q_c; cp_release | u_i | `jrc-ilcd-2010` |
| physical_gates | manufacture; services; combined | Manufacturing total wet physical mass: opening raw/WIP/unreleased stores/packaging/assets/installed fluid + real external ingress + FG material sent for actual rework, whether authorized, unapproved, failed or rejected = closing corresponding unreleased and in-place stocks + unique first-released net powder Q + actual packaging transferred with that first release P_Q + reworked original-cohort material and its actual packaging returned to FG + all other external solid/liquid/gas exits. Count every real wet article/fluid ingress even if retained at closing. Track material-species subledgers separately; asset service shares never replace physical mass. Separately the FG powder-material ledger (packaging follows its own full ledger): opening FG + Q + physical customer returns R + rework backflow F_back + X_in = closing FG + gross shipments G + rework withdrawal F_to + FG waste + consumed samples + X_out. X includes only measured material/water not already in another term. Returned mass is not assumed equal to any original shipment. Combine gates by cancelling Q, P_Q and matched F_to/F_back and associated packaging internal transfers, not external returns or real added water/losses. Use source phase/element assays and independent gas/liquid observations; mismatch is an open balance, not fabricated closure. X_in/X_out deduplicates only the same measured material/water already in another same-side incoming/outgoing FLOW term of this same bridge, never stock, opposite-direction flow or the mere existence of an atomic card. Retained new material/water remains actual influx AND full closing wet stock. Whole wet P/I includes its integral matter and water once. For assembly choose a disjoint component basis or a reconciled whole-article basis: the bought whole sack already contains supplier-integral liner/seam/glue/print; only actual separately supplied onsite additions are distinct components. The empty assembled tare equals the measured whole-bought-sack contribution plus actual added liner/thread/other matter and retained water minus actual removed/lost matter, excluding powder contents. In component mode keep each unique contribution once in stocks and S/EO/W; never use the full assembled tare as paper_sack and also add its separate liner/thread. In article mode transfer components into that article using paired measured internal handoff IDs, replace their same-gate stock/shipment figures by the reconciled article figure and cancel matched internal transfers. Integral chemical/component assays are memo subaccounts, not additional exchanges. For a single real mixed PE collection outlet, pe_waste is the one actual Waste exchange: independently measured liner and wrap source-W quantities are disjoint original subaccounts/pool withdrawals which sum to the matched outlet, with other real sources identified separately. Use total OR its disjoint partition at the same boundary, never both; no invented second outlet or duplicated treatment/provider. A genuinely separate actual outlet instead requires its own specific card before completion. | opening_stocks; closing_stocks; Q; R; G; F_to; F_back; P_Q; X_in; X_out; phase_assays; species_measurements | gross_gate_balances | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill` |
| phase_water_check | gypsum_feed; hot_stucco; first_release_plaster; water_vapour; condensate_export | Partition measured solid mass into actual sulfate phases, impurities and free moisture. Infer bound-water change only from independently validated phase amounts and chemically appropriate formula masses, allowing actual residual dihydrate and anhydrite and measured uptake during cooling. Check it against separately measured vapour/condensate/retained free water plus fuel-derived and ambient water. One residual cannot determine both phase conversion and evaporated water. No default total-water-to-steam conversion, fixed phase fraction or source-case yield. | independent_phase_amounts; free_moisture; fuel_water; ambient_water; vapour; condensate | water_phase_check | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill` |
| asset_service | maintenance | Keep actual physical asset/part/fluid receipts, installed stocks, spare stocks, wear, returns and disposal in native units plus measured wet masses. For capital manufacture burdens only, assign measured service capacity/use to the actual cohort using justified service logs and exchange-specific causality; record the resulting fraction and its measured denominator. Maintenance consumables and replacements are separately supplied whole articles and actual current burdens, with inherited unused-stock vectors; never charge a new complete machine per kg or delete new physical ingress because it remains installed at closing. | asset_register; wet_mass_measurements; actual_service_logs; unused_stock_vectors | asset_service_share | `grenzebach-hammer-mill`; `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference; all inventory | Retain origin, phase, form, supplier, native restrictions, qualifiers, unit chain and real direction/compartment. A broad compatible manufactured family does not assert brand or provider equivalence. | Assays and specifications; exact identity support; supplier records |
| dq_measurement | each raw field | Keep raw records before conversion/allocation/normalization, calibration, detection limits, uncertainty, sampling timing and dry/wet/standard-state basis. No invented numerical recipe, phase ratio, mass per item or service life. | Meter and scale calibration; laboratory methods; timestamps |
| dq_completeness | all processes | Retain failed and zero-output periods, startup/shutdown, idle/cleaning, actual fugitive leaks, controls, samples, rework and stocks. Add each real omitted exchange; unknown is not zero or absent. Treatment, upstream and future service coverage are separately disclosed. | Full period logs; discrepancy register; stock and service ledgers |
| dq_sources | all source-dependent claims | EPA is historic route/control context, not current China plant emission data. Grenzebach describes technology options, not this factory recipe. Knauf is a German bagged-binder quality example, not the selected China SKU. BVG covers German industry and an unpackaged reference; transfer only qualitative phase/product distinctions, not German inventory/results, packaging exclusion, module-D credit, service life or application rates. ILCD applies only to the justified attributional allocation question. | Source scope and counterexamples; actual foreground representativeness |
| dq_translation | both renderings | Preserve ordered rule IDs, atomic row IDs, official Chinese UUID displays, reference gate, all qualifiers, formulas, source lists and actual units. Aligned is not independent scientific or translation review. | Bilingual full-field audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_gate | first_release_plaster; all bound rows | Check hemihydrate powder rather than dihydrate ore, anhydrous binder, board or cured paste. Verify the native Product reference and every adopted UUID restriction with complete reference-property and unit-group chain; family permission never overrides a hard phase/CAS/route/form/media/type conflict. Confirm China at-plant reference and exact official Chinese names. Ordinary unresolved auxiliaries remain named and disclosed; unresolved core reference identity blocks usable methodology. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill` |
| denominator_gate | all inventory rows | Q must be unique independently measured first-release net powder, consistent with first_release_plaster, cp_release and both language bases. Audit stocks/vectors, no closing-FG manufacture subtraction, no Q plus closing-FG production sum, no return/retest production, one normalization and all zero-output loads. A zero Q retains raw burdens and yields no unit result. A new net-delivery dataset needs a different documented denominator and full original-delivery reversals; it is not validated here. | `jrc-ilcd-2010` |
| balance_gate | manufacture; FG; combined | Reconcile all three physical gates, packaging articles, assets, in-place fluids, gas species, water phases and relevant elements with independent measurements and uncertainty. Do not close two unknowns with one residual or force density/phase/condensate from a secondary factor. Preserve known versus unknown, absence versus measured zero and tested versus untested. Integrated gas/liquid volumes are not multiplied by time; real rates are integrated once. Confirm postwork permission/test/disposition before accepting reworked product. | `epa-gypsum-1993`; `grenzebach-gypsum-solutions`; `grenzebach-hammer-mill` |
| coverage_gate | foreground package | Each applicable card needs actual numerator units, period/lot matching, inherited vectors, provider/fate, data quality and source applicability. Add all real omitted exchanges atomically; not_applicable requires evidence of absence. Unknown amounts remain unknown; no recipe, yield, phase proportion, emission factor, price or lifetime is fabricated. Mechanical projection/measurement checks establish neither scientific/translation approval nor completeness of a future factory inventory. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared China natural-gypsum hemihydrate building-binder supply with full route and first-release basis |
| allowed_use | Only the measured unhydrated product grade and gate; separately disclose any original-cohort after-release service increment |
| excluded_use | Raw dihydrate, FGD equivalence, alpha/anhydrous substitution, cured mortar/board/article performance, packaging-only manufacture, unmeasured net-delivery result, universal recipe/factors or assumed lifetime |
| required_metadata | site and reporting period; natural quarried gypsum origin and delivered-China boundary; dry direct natural-gas hot-gas-generator and hammer-mill route; unhydrated powder state; hemihydrate-dominant measured phase assay including actual AIII/AII and residual dihydrate; free moisture separately from crystal water; impurities and actual product grade; fineness and declared setting/strength tests; absence of factory-added admixtures for this scope; actual bag configuration and net contents; unique first quality release and lot traceability; Q excludes packaging and all repeat releases; raw/WIP inherited vectors and released-FG stock history; after-release service cohort and observation horizon; all actual utilities and water phases; emissions species and receiving subcompartments; actual supplier/upstream burden ownership; physical asset and packaging stock balances; physical disclosure versus actual burden/provider inventory; component/article and PE-source-W/oneoutlet basis; actual paired handoff and meter/collection IDs; source-use totals never additive to their children |
| required_quality_disclosure | Source scope, supplier gaps, native restrictions, unresolved auxiliary identities, stock/burden ownership, actual phase/water/element closure, uncertainty and unobserved service scope; mechanical checks are not scientific or translation approval |
| update_trigger | Change of feed origin, phase, additives, route, fuel, utility interface, grade, package, gate, stock/service model, provider, control or evidence applicability |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-gypsum-1993 | official_guidance | US EPA, AP-42 §11.16 Gypsum Manufacturing, July 1993 (reformatted January 1995), https://www.epa.gov/sites/default/files/2020-10/documents/c11s16.pdf | Complete nine-page primary PDF; §11.16.1, Fig.11.16-1, §11.16.2 and adjacent control-table footnotes distinguish raw mineral, calcined stucco, bagged plaster and board, with actual control and gas sources. No quantitative factors, yields or temperatures adopted. |
| grenzebach-gypsum-solutions | literature | Grenzebach, Gypsum Solutions, edition unspecified, https://www.grenzebach.com/fileadmin/Grenzebach_Group/Gips/Grenzebach_Gypsum_Solutions_EN.pdf | Complete primary brochure; pp.3–6 distinguish bag-plaster processing, drying/calcining alternatives and wet-autoclave alpha route. The alpha steam/condensate/additive diagram is a counterexample, not this dry-route inventory. |
| grenzebach-hammer-mill | literature | Grenzebach, Stucco Production with Hammer Mill, edition unspecified, https://www.grenzebach.com/fileadmin/Grenzebach_Group/Gips/Gipsputz_Kalzinierung/Grenzebach_Data_Sheet_Stucco_Production_with_Hammer_Mill_en.pdf | Both complete primary pages and diagrams; natural-gypsum eligibility, simultaneous grinding/drying/calcining, classifier/coarse returns, filter, natural-gas hot-gas generator, indirect cooling, real vapour contact, bearings/cooling/wear. No throughput, recirculation percentage or default plant recipe adopted. |
| knauf-stuckgips-2023 | literature | Knauf, P155.de Stuckgips – Schnell abbindender Baugips, March 2023, https://knauf.com/api/download-center/v1/assets/cc62c8ac-8c8e-4191-84c2-db8d7ec74567?country=de&download=true | Complete two-page primary native PDF text obtained through the web tool; bag supply and factory testing/control as a product-state/quality example. No locally acquired publisher PDF or OCR claimed; no German SKU performance, setting time, bag weight or storage life imposed on the China representative. |
| bvg-stuckgips-2022 | dataset | Bundesverband der Gipsindustrie e.V./IBU, Stuckgips EPD-BVG-20210318-IBE1-DE, 2022-04-04, §§2.1–2.9 and 3, https://knauf.com/api/download-center/v1/assets/c6496b24-b984-475d-8a4c-ffc46be9e686?country=de&download=true | Complete 12-page native PDF tool text, including neighboring uses, hydrate phases, powder/sack/bulk supply, optional admixtures and unpackaged German EPD boundary. Qualitative product distinction only; no numerical inventory, phase proportion, application water, lifetime, regulatory conclusion or module-D result adopted. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Justified attributional multifunctionality: dedicated assignment, subdivision/virtual subdivision, exchange-specific determining physical causality and only residual common-process market value at the actual exit state. Not industrial process or quantity evidence. |
