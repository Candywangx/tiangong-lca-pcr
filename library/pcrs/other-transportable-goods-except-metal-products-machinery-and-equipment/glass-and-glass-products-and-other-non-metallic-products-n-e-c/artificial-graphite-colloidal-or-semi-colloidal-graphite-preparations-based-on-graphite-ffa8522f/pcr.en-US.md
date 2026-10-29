---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.artificial-graphite-colloidal-or-semi-colloidal-graphite-preparations-based-on-graphite-ffa8522f
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Uncoated coke-derived artificial graphite powder

## 1. Scope and Applicability

This PCR describes the manufacture of a whole industrial artificial graphite powder semi-manufacture from received graphitizable calcined petroleum coke through actual preparation and electrically heated particulate-batch graphitization and cooling and conductive-filler separation and actual grinding/classification and clean-up to first supply-quality release. No surface carbon-coating or intentional catalyst doping or binder-forming step is included. The charge is particulate; an apparent core or layered region in a furnace drawing is not a pressed product body. The sources support a transparent technical synthesis rather than one claimed contemporary factory or SKU. The patent distinguishes coke conversion from heat treatment of already graphitic feed and from container and mixed-filler alternatives; do not mix those alternatives into this reference route. Actual site configuration must independently establish the selected route. A mill that buys already graphitized blocks or finished powder and merely resizes or packages them does not satisfy this manufacturing boundary. Natural graphite extraction or flotation, colloidal dispersions, pitch-bound shaped articles, carbon-black products, deliberately carbon-coated/spherical battery anode powders, finished electrodes and non-electrical graphite articles require different applicability decisions. Downstream compounding and device assembly and use are outside the reference gate. Packing and actual storage/handling/dispatch remain separately observed services of the original released cohort; they do not alter Q. No process temperature or duration or electrical-current recipe or particle-size target or energy intensity or yield or density or equipment life or certification is prescribed. unsd-cpc-structure-2025; imerys-graphite-powder-patent-2015; asbury-synthetic-graphite-2006; asbury-graphite-introduction-2026

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.artificial-graphite-colloidal-or-semi-colloidal-graphite-preparations-based-on-graphite-ffa8522f |
| classification_refs | CPC 3.0 37950; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-37950.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Whole uncoated coke-derived industrial artificial graphite powder at first release from the stated particulate route |
| excluded_products | Natural mined graphite; colloidal graphite; carbon black; intentionally coated or catalyst-doped powder; binder-formed carbon articles; finished electrodes; non-electrical worked graphite articles; purchased finished-powder repackaging |
| representative_product | One declared industrial artificial graphite powder grade and moisture state; no promised end-use performance |
| production_route | Calcined coke receipt; actual particle preparation; particulate-batch electrical graphitization; cooling; filler separation; actual size finishing and clean-up; testing and first release |
| market_state | Whole uncoated powder semi-manufacture for external supply; packaging excluded from powder mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an uncoated artificial graphite powder semi-manufacture with declared whole-product quality |
| How much | 1 kg net whole powder at first supply-quality release |
| How well | Declared artificial coke route and actual powder grade and phase/ash/moisture plus every required qualifier; no generic end-use performance guarantee |
| How long or cycle | One original manufacturing cohort and its separately observed service horizon H; no use lifetime is asserted |
| reference_flow_link | released_powder |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Graphite powder `642a19a2-c6c5-4c76-bc4f-84e3b8d7a67f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Whole uncoated artificial graphite powder with actual graphitic phase minor phases ash and moisture; Graphitizable calcined petroleum-coke provenance and complete upstream refining coking and calcination coverage; Actual binder-free particulate Acheson batch route and charge segregation and filler recovery; No natural mining route no pitch forming no intentional coating no catalyst doping and no finished electrode function; Actual pre-grinding and post-grinding classification and dust-control operations and all losses; Site reporting period supply geography and actual electricity voltage and provider; Whole-powder first-release net mass Q unique release IDs actual moisture and declared product grade; Reference amount includes closing released FG and excludes removable packaging and repeat inspection; Per-flow opening and closing raw WIP and unassigned-store inherited burden vectors; Original released cohort Qc and observed service horizon H for packing storage dispatch and permitted rework; Full gross molecular species by phase origin and receiving compartment with independent mass and element balances; Each packaging P I ER S EO W leg plus empty attached-WIP attached-FG and reusable stocks and one upstream owner; Complete installed assets new and old repair parts and actual fluids with measured physical masses and separate current service burden; Manufacturer or specification rework permission postwork tests acceptance and disposition; Every adopted card native restriction actual compatible provider and all unresolved data disclosures |

All required qualifiers belong in the actual dataset metadata and process notes and reference-product description or equivalent fields. A missing qualifier leaves that dataset incomplete. Whole supply mass includes real minor phases and water; it is not replaced by graphitic-carbon assay mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = sum of calibrated net whole-powder masses at unique first supply-quality release; actual moisture and grade and configuration are recorded. Removable packaging is excluded. Released closing FG is already in Q. No density or per-item mass is inferred. |
| native_units | all inventory rows | Each native extensive property | native unit | Keep each original extensive numerator unit and convert only with independent physical evidence. Energy remains MJ; actual mass remains kg; measured cumulative m3 is used once. A true rate is integrated over its observed interval. Count-to-mass requires independently weighed same-configuration material and actual count; secondary native coefficients and patent densities are not measured conversion evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received graphitizable calcined petroleum coke plus separately owned actual conductive graphite and insulation coke and utilities; upstream refining/coking/calcination retained |
| starting_condition_role | Explicit foreground collection start; not permission to truncate upstream burdens |
| product_classification_scope | CPC 3.0:37950; narrower |
| recursive_input_rule | Externally purchased graphite filler uses a compatible upstream provider once; internal recovered filler carries its inherited vector and paired transfers cancel. Reference powder is not recursively purchased as its own feed. |
| upstream_dataset_requirement | Actual whole received product state and route and geography and ownership; avoid duplication of supplier-included preparation constituents and packaging |
| disclosure | Actual charge configuration and coke history and physical gates and stocks and cohort vectors and supply interfaces and observed service horizon; technical synthesis rather than a claimed single factory recipe |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | The declared start is purchased calcined coke at its received condition; preserve upstream refining/coking/calcination and transport in matched providers. No green-coke calcination may be silently omitted or added a second time. Only actual particle preparation and particulate furnace conversion and cooling/separation and actual finishing/testing count as the selected foreground route. A changed feed or binder/coating route requires renewed applicability and atomic inventories. | imerys-graphite-powder-patent-2015; asbury-synthetic-graphite-2006 |
| b_gate | manufacture and service | Q is the sum of uniquely identified net whole-powder masses at first quality release in the cohort including released closing FG. Retesting and dispatch and returns do not create production. Keep a separate released-FG physical account: opening FG + internal first-release Q + gross received returns R + true new material/water X_in = closing FG + gross physical dispatch G + real external removals + X_out. X terms exclude only quantities already present in another flow term; a real addition retained in closing stock remains both influx and full wet closing mass. Carry complete per-exchange opening/closing FG historical manufacturing vectors with the original cohort and match returns to that cohort without a new purchase. Combine gates by cancelling internal Q once. | jrc-ilcd-attributional-allocation-2010 |
| b_stocks | all processes | Preserve complete per-exchange historical burden vectors for opening and closing raw/WIP/unassigned material and filler stores. Manufacturing closing burden excludes already released FG because it is already in Q. Include failed/zero-output runs and start-stop/idle/clean-up and pre-release rework. An already stock-corrected consumption is not stock-corrected again. All performed original-cohort service remains charged; only unused/unassigned service or charge can carry forward. Recovered conductive filler or insulation retained as physical closing stock cannot retract service already performed. Only its genuinely unassigned material or unused charge vector may enter Bclose; keep that vector separate from full recovered physical mass. | jrc-ilcd-attributional-allocation-2010 |
| b_physical | all physical gates | For each manufacturing and FG/service and combined gate reconcile full wet opening stock + gross real external input = full wet closing stock + gross real external output. Pair and cancel only internal transfers. Separate product coke from conductive graphite and insulation coke and installed electrode/refractory material. Each added repair part or water phase remains a real input even when retained in closing equipment. Economic and service burden shares never scale gross physical legs. Independently reconcile relevant C/H/O/N/S and actual metal/mineral phases; do not solve two unknown species with one total residual or infer emissions from total carbon or VOC/PAH/NOx/SOx indicators. | imerys-graphite-powder-patent-2015; jrc-ilcd-attributional-allocation-2010 |
| b_pack | each packaging material | Maintain opening empty/attached-WIP/attached-FG/reusable stock + purchases P + first non-purchased external ingress I + external return received ER = closing stock + gross shipment out S + external return outward EO + waste W. Deduplicate P/I/ER only against other already included inflow terms and S/EO/W only against other outflow terms. Never remove true new ingress because it remains in closing stock. An upstream owner is assigned once for supplier-included packaging or a purchased whole article. Internal reuse cancels; no new powder Q or purchase or automatic coproduct follows. | jrc-ilcd-attributional-allocation-2010 |
| b_assets | support and service | Track actual complete furnace and transfer electrodes and each refractory and repair and in-installed fluid as physical assets/stocks distinct from current service burden. Record original asset vectors and actual current service and replacement evidence without default lifetime or per-kg whole-machine factors. Preserve full new/old removed parts and retained moisture. Actual post-release work requires manufacturer/specification permission and postwork tests and acceptance/disposition; add each real work input and output. | imerys-graphite-powder-patent-2015; asbury-synthetic-graphite-2006; jrc-ilcd-attributional-allocation-2010 |
| b_completeness | all processes | Every actual fuel and electricity and separated gas and water source and chemical preparation and packaging and waste and molecular/particulate emission is a separate physical identity with its own native extensive unit. Add missing actual exchanges before completing a dataset. One whole purchased preparation is purchased once; assay and carrier and additives are subledgers. No unlisted manufacture input may be hidden as zero or an unspecified other-input bundle. A dry line does not imply a steam supply or wet purification recipe. | imerys-graphite-powder-patent-2015; jrc-ilcd-attributional-allocation-2010 |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | jrc-ilcd-attributional-allocation-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Coke conversion and powder release | required | Actual received calcined coke through preparation and particulate electrical graphitization and cooling and separation and real finishing/testing with emission and water controls | Original-cohort attributable manufacturing or actual service | 1 kg reference flow |
| support | Assets and maintenance service | required | Actual furnace and electrodes and individual refractory and maintenance fluids with separately assigned current service | Original-cohort attributable manufacturing or actual service | 1 kg reference flow |
| service | Released-cohort packing and observed services | required | Actual packaging and storage/handling/dispatch and permitted post-release work over original-cohort horizon H | Original-cohort attributable manufacturing or actual service | 1 kg reference flow |

The cards are a conditional collection design rather than measured factory observations. Resolve each actual supply and release independently. No amount is set to zero merely because its UUID or quantity is not yet known. Distinct physical gross ledgers remain available alongside normalized burden-bearing model exchanges. Do not hide a real input or outlet behind a service receipt; expand every actual missing flow before the dataset is complete.

### Process: Coke conversion and powder release (`manufacture`)

Actual received calcined coke through preparation and particulate electrical graphitization and cooling and separation and real finishing/testing with emission and water controls.

#### Inputs

##### Product flows

###### Calcined petroleum coke feed (`coke_feed`)

Receive whole purchased calcined petroleum coke for conversion to graphite. Keep supplier moisture and ash and volatile constituents as subledgers within this one purchase; identify graphitizable coke provenance and the actual received granulation. Retain upstream oil refining and coking and calcination burdens and inbound transport. Screening or grinding before loading is included only where actually performed. Native Product identity is calcined petroleum coke with CAS 64743-05-1 at plant production mix. It is not raw green coke or metallurgical coke or graphite. The native general comment describes calcination of green petroleum coke and a typical delayed-coking history; declare the actual supplier route and ash and moisture and graphitizability rather than assuming a pure elemental carbon purchase.

- Selected flow: Calcined petroleum coke `5456a1e2-1a41-43f4-b49c-48e851727684`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coke_feed`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Artificial graphite particulate conductive filler (`conductive_fill`)

Use this powder identity only for a supplied or internally recovered artificial graphite powder that is physically compatible with the powder family. Coarser granules require another verified physical form. Separate new purchase and opening recovered stock and actual charge and recovered closing stock; include the remaining unassigned material/charge vector on recovered stock while preserving already performed service on its original cohort. Conductive filler is not free carbon and is not the newly manufactured reference output. Native Product family: processed graphite powder; CAS 7782-42-5; no fixed natural origin or grade or purity or supply geography is declared. Its mineral classification is an isolated taxonomy limitation and does not prove natural origin. Here primary evidence and actual coke-to-graphite history restrict use to whole artificial uncoated powder after size preparation. Exclude natural mined graphite and carbon black and colloidal liquids and coated spherical anode material and shaped electrodes. No synthetic origin is inferred from CAS alone.

- Selected flow: Graphite powder `642a19a2-c6c5-4c76-bc4f-84e3b8d7a67f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conductive_fill`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Petroleum coke bulk insulation (`insulation_coke`)

Where the actual batch furnace uses petroleum coke as a low-conductivity bulk insulation charge record this whole material separately from coke converted to product and from graphitic conductive filler. Identify green versus calcined condition and actual losses and segregation; do not assume the same grade or zero oxidation. No binder or carbon-coating purchase belongs to this selected binder-free route. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Petroleum coke insulation granules
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_insulation_coke`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Manufacturing electricity (`process_power`)

Meter this named load at its actual incoming electricity interface; retain transformer and rectifier and cooling losses within the selected meter boundary exactly once. A submeter total already contained in the main meter is not an additional purchase. Include failed batches and start-up and idle and clean-up. Native Product is Chinese CN grid-average alternating current delivered to the user at 1–35 kV with energy reference Net calorific value in MJ. Bind only an actually matching supply interface; another country or voltage or generation-specific contract requires its own verified flow and provider. Preserve original kWh metering and convert by the dimensional identity 1 kWh = 3.6 MJ once; do not add a second provider for rectified current or count native energy as kg.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_power`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Dust control and cooling electricity (`control_power`)

Meter this named load at its actual incoming electricity interface; retain transformer and rectifier and cooling losses within the selected meter boundary exactly once. A submeter total already contained in the main meter is not an additional purchase. Include failed batches and start-up and idle and clean-up. Native Product is Chinese CN grid-average alternating current delivered to the user at 1–35 kV with energy reference Net calorific value in MJ. Bind only an actually matching supply interface; another country or voltage or generation-specific contract requires its own verified flow and provider. Preserve original kWh metering and convert by the dimensional identity 1 kWh = 3.6 MJ once; do not add a second provider for rectified current or count native energy as kg.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_control_power`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Cooling-loop make-up water (`cooling_makeup`)

Use only actual municipal treated water added to the cooling circuit. Keep initial charge and top-ups and leaks and evaporation and final in-circuit water separate. Real added water remains an influx even when retained in the full wet closing asset stock. Internal circulation is not repeated freshwater purchase. Native Product is treated municipal tap water supplied to consumers or at plant; Mass/kg is the reference. Its secondary volume coefficient is not evidence of actual-fluid density. Distinguish freshwater supply from circulating water and raw abstraction and deionized water; another real supply needs its own identity. Measure actual water mass or independently establish its density at measured temperature and pressure.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_makeup`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Equipment clean-up water (`cleaning_water`)

Include actual municipal treated water used in cleaning and dust-control wet operations when present. Keep each real water phase and its origin and wet-stock amount; do not impose wet scrubbing or chemical purification on a dry dust-collection line. Native Product is treated municipal tap water supplied to consumers or at plant; Mass/kg is the reference. Its secondary volume coefficient is not evidence of actual-fluid density. Distinguish freshwater supply from circulating water and raw abstraction and deionized water; another real supply needs its own identity. Measure actual water mass or independently establish its density at measured temperature and pressure.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_water`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

##### Elementary flows

###### Atmospheric molecular oxygen intake (`air_oxygen`)

Record this actual molecular species in gross incoming ventilation or process air from independent composition and flow-state evidence. Use an integrated volume once; integrate only a true rate. Retain gas pressure and temperature and humidity basis and composition. Do not also add an aggregate air exchange. Ambient carbon dioxide is not automatically fossil or biogenic sequestration; inlet water vapour is not purchased liquid water. Native candidate aliases do not consistently preserve this exact molecular/phase identity; no UUID is adopted until a compatible native identity is verified. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Atmospheric molecular oxygen intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_oxygen`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Atmospheric dinitrogen intake (`air_nitrogen`)

Record this actual molecular species in gross incoming ventilation or process air from independent composition and flow-state evidence. Use an integrated volume once; integrate only a true rate. Retain gas pressure and temperature and humidity basis and composition. Do not also add an aggregate air exchange. Ambient carbon dioxide is not automatically fossil or biogenic sequestration; inlet water vapour is not purchased liquid water. Native Elementary identity is dinitrogen with CAS 7727-37-9 as a renewable element resource from air and Mass/kg reference. Use only actual atmospheric intake; purchased compressed or separated gas is a Product input with its own upstream provider. This resource row cannot identify an exhaust release. Only neutral molecular N2 is admitted; no nitrogen-atom or total-nitrogen substitution.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_nitrogen`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Atmospheric argon intake (`air_argon`)

Record this actual molecular species in gross incoming ventilation or process air from independent composition and flow-state evidence. Use an integrated volume once; integrate only a true rate. Retain gas pressure and temperature and humidity basis and composition. Do not also add an aggregate air exchange. Ambient carbon dioxide is not automatically fossil or biogenic sequestration; inlet water vapour is not purchased liquid water. Native Elementary identity is argon with CAS 7440-37-1 as a renewable element resource from air and Mass/kg reference. Use only actual atmospheric intake; purchased compressed or separated gas is a Product input with its own upstream provider. This resource row cannot identify an exhaust release. Use bulk neutral atmospheric argon; the loose Ar-41 synonym is not permission to bind a radioactive isotope-specific exchange.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_argon`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Ambient carbon dioxide intake (`air_co2`)

Record this actual molecular species in gross incoming ventilation or process air from independent composition and flow-state evidence. Use an integrated volume once; integrate only a true rate. Retain gas pressure and temperature and humidity basis and composition. Do not also add an aggregate air exchange. Ambient carbon dioxide is not automatically fossil or biogenic sequestration; inlet water vapour is not purchased liquid water. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Carbon dioxide in ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_co2`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Ambient water-vapour intake (`air_vapour`)

Record this actual molecular species in gross incoming ventilation or process air from independent composition and flow-state evidence. Use an integrated volume once; integrate only a true rate. Retain gas pressure and temperature and humidity basis and composition. Do not also add an aggregate air exchange. Ambient carbon dioxide is not automatically fossil or biogenic sequestration; inlet water vapour is not purchased liquid water. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Water vapour in ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_vapour`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

#### Outputs

##### Product flows

###### First-release whole artificial graphite powder (`released_powder`)

This is the unique reference output: whole net uncoated artificial graphite powder newly passing its first supply-quality release after coke graphitization and cooling and separation and actual size finishing and clean-up. Keep actual graphitic and minor non-graphitic phases and ash and moisture inside whole delivered powder mass; the graphite assay is only a subledger. Q includes all newly released material retained in closing finished goods. Reinspection or dispatch or return is never a new first release. Native Product family: processed graphite powder; CAS 7782-42-5; no fixed natural origin or grade or purity or supply geography is declared. Its mineral classification is an isolated taxonomy limitation and does not prove natural origin. Here primary evidence and actual coke-to-graphite history restrict use to whole artificial uncoated powder after size preparation. Exclude natural mined graphite and carbon black and colloidal liquids and coated spherical anode material and shaped electrodes. No synthetic origin is inferred from CAS alone.

- Selected flow: Graphite powder `642a19a2-c6c5-4c76-bc4f-84e3b8d7a67f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed reference (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_released_powder`
- Sources: `imerys-graphite-powder-patent-2015`; `asbury-synthetic-graphite-2006`; `asbury-graphite-introduction-2026`

###### External transfer of recovered conductive graphite (`external_fill`)

Include only an actual external transfer with measured form and contamination and destination. Keep internal furnace reuse paired and cancelled. Independently decide whether the transfer supplies a genuine separate function or remains a manufacturing discard; sale or a positive price alone does not move manufacturing or treatment burden out of this cohort. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Recovered artificial graphite conductive granules
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_external_fill`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### External transfer of recovered insulation coke (`external_insulation`)

Retain gross external mass and inherited vector for the actual recovered coke. Its received moisture and ash and used condition must be compatible with the recipient. Do not treat all removed furnace packing as a co-product or assign a displacement credit. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Recovered petroleum coke insulation granules
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_external_insulation`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Warm cooling water returned to supplier (`cooling_return`)

When an external cooling-water contract actually returns water to the supplier retain a Product return with actual mass and temperature and pressure and enthalpy and quality. Reconcile supplier ownership of water and heat. Do not copy a steam boiler or condensate loop that does not exist; actual purchased steam would need separate carrier-mass and heat exchanges and its real condensate return. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Warm cooling water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_return`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

##### Waste flows

###### Rejected calcined-coke fines (`coke_waste`)

Keep unconverted fines and samples and spills separately from graphite waste; actual wet mass includes its water and contaminants. Include treatment burdens attributable to making the reference powder even if the material is sent away. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Rejected calcined petroleum coke fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coke_waste`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Rejected artificial graphite powder (`powder_waste`)

Record failed product and test samples with their real disposition and treatment. A sale of these manufacturing losses is not an automatic other-function burden transfer. Include treatment burdens attributable to making the reference powder even if the material is sent away. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Rejected artificial graphite powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_powder_waste`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Captured graphitic dust (`captured_dust`)

Measure separately collected dust from the coke-conversion and powder-finishing line with actual phase and residual coke and impurity content. Dust in an external waste receiver is distinct from dust emitted to air and from verified internally reused material. Include treatment burdens attributable to making the reference powder even if the material is sent away. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Captured graphitic dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_captured_dust`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Discarded petroleum-coke insulation (`spent_insulation`)

Keep discarded furnace packing separately from internal recovered stock and any genuine external product transfer. Include treatment burdens attributable to making the reference powder even if the material is sent away. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Discarded petroleum coke insulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_insulation`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Carbon-powder clean-up wastewater (`process_wastewater`)

Include only the actual single collected wastewater stream with full water and suspended and dissolved constituents and real treatment destination. COD and total carbon are indicators rather than named molecular mass; constituents remain subledgers of this whole waste stream until an environmental release crosses the treatment boundary. Include treatment burdens attributable to making the reference powder even if the material is sent away. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Carbon-powder clean-up wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_wastewater`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

##### Elementary flows

###### Fossil carbon dioxide release (`fossil_co2`)

Use only independently attributed fossil carbon converted to molecular CO2. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native candidate aliases do not consistently preserve this exact molecular/phase identity; no UUID is adopted until a compatible native identity is verified. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Molecular fossil carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fossil_co2`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Fossil carbon monoxide release (`fossil_co`)

Use only independently attributed fossil molecular CO; never derive it as the balance remainder after CO2. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native Elementary identity is molecular carbon monoxide (fossil); CAS 630-08-0; emission to air with unspecified subcompartment and Mass/kg reference. It is neither an air resource input nor a water/soil release nor an indoor or long-term emission. If an actual stack or urban/non-urban compartment is known verify that more specific native flow; keep physical origin attribution separate from chemical assay.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fossil_co`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Sulfur dioxide release (`sulfur_dioxide`)

SOx or total sulfur cannot establish a mass of SO2. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native candidate aliases do not consistently preserve this exact molecular/phase identity; no UUID is adopted until a compatible native identity is verified. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sulfur_dioxide`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Nitrogen monoxide release (`nitric_oxide`)

Separate NO from NO2 and N2O and any NOx-equivalent report. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native candidate aliases do not consistently preserve this exact molecular/phase identity; no UUID is adopted until a compatible native identity is verified. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nitric_oxide`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Nitrogen dioxide release (`nitrogen_dioxide`)

Separate measured NO2 from NO and from NOx reported as NO2 equivalents. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native candidate aliases do not consistently preserve this exact molecular/phase identity; no UUID is adopted until a compatible native identity is verified. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nitrogen_dioxide`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Fossil methane release (`fossil_methane`)

A measured fossil CH4 release is not total hydrocarbons or VOC or PAH. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native candidate aliases do not consistently preserve this exact molecular/phase identity; no UUID is adopted until a compatible native identity is verified. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Molecular fossil methane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fossil_methane`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Exhaust molecular oxygen (`oxygen_out`)

Retain gross residual molecular O2 independently of the incoming air species and actual reactions. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native candidate aliases do not consistently preserve this exact molecular/phase identity; no UUID is adopted until a compatible native identity is verified. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Molecular oxygen to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oxygen_out`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Exhaust dinitrogen (`nitrogen_out`)

Retain gross molecular N2; do not create NOx by balancing total nitrogen. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native Elementary identity is molecular dinitrogen; CAS 7727-37-9; emission to air with unspecified subcompartment and Mass/kg reference. It is neither an air resource input nor a water/soil release nor an indoor or long-term emission. If an actual stack or urban/non-urban compartment is known verify that more specific native flow; keep physical origin attribution separate from chemical assay. Only neutral molecular N2 is admitted; loose total-nitrogen or isotope-specific aliases do not identify another accepted species.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nitrogen_out`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Exhaust argon (`argon_out`)

Retain the real gross argon outlet without adding a second aggregate air outlet. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native Elementary identity is molecular argon; CAS 7440-37-1; emission to air with unspecified subcompartment and Mass/kg reference. It is neither an air resource input nor a water/soil release nor an indoor or long-term emission. If an actual stack or urban/non-urban compartment is known verify that more specific native flow; keep physical origin attribution separate from chemical assay. Use bulk neutral atmospheric argon; the loose Ar-41 synonym is not permission to bind a radioactive isotope-specific exchange.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_argon_out`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Exhaust water vapour (`vapour_out`)

Distinguish actual evaporated water and independently evidenced reaction water and incoming humidity; no structural water or stoichiometric factor is invented. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. Native candidate aliases do not consistently preserve this exact molecular/phase identity; no UUID is adopted until a compatible native identity is verified. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vapour_out`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Airborne particulate graphitic carbon (`graphite_air`)

Resolve actual graphitic particulate phase and particle-size measurement. PM totals and soot or carbon-black identities do not establish this graphite species. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Particulate graphitic carbon to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_graphite_air`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Untransformed ambient carbon dioxide return (`ambient_co2_out`)

Retain independently traced ambient inlet carbon dioxide returning to air. It is not a biogenic removal credit and is not relabelled as fossil coke oxidation. Quantify each actual species and phase and origin from representative sampling with flow-state evidence. Preserve gas and particulate capture and release destinations; unknown is not zero. Add every other actually identified species as its own card before dataset completion. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Untransformed ambient carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_co2_out`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

### Process: Assets and maintenance service (`support`)

Actual furnace and electrodes and individual refractory and maintenance fluids with separately assigned current service.

#### Inputs

##### Product flows

###### Electric-resistance graphitization furnace service (`furnace_service`)

Retain the complete real furnace configuration and new versus used acquisition and installed and uninstalled physical stocks. Independently measure net equipment mass for this configuration if kg is used; no assumed machine mass or density or fixed lifetime. Carry the original asset burden vector and charge only its evidenced current service once; preserve the full gross physical asset legs separately even where burden is shared. Do not charge an entire new furnace per kg powder or subtract already performed cohort service because released powder remains in stock. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Electric-resistance Acheson graphitization furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_furnace_service`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Graphite current-transfer electrode service (`electrode_service`)

Include actual current-transfer graphite electrodes in the furnace equipment circuit. Record complete new and installed old stock and replacements and erosion and removed material; partition current service burden from physical acquisition. No fixed electrode loss per kg is prescribed; graphite lost to another phase is measured independently. Native Product is graphite electrode made through electrode-material preparation and described as consumed in production. It is a component input for actual current transfer only and not the reference powder. Do not substitute the other native electrode family fixed to a mechanical recycling route or battery slurry. Declare actual supplier and grade and electrode configuration; no performance claim is inferred.

- Selected flow: Graphite electrode `c2c70bef-5b23-4f7c-8fc8-ae4b5a844396`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electrode_service`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Silicon-carbide refractory liner service (`sic_liner`)

Conditional on a real SiC refractory lining; record the whole supplied bonded article and its matrix and actual condition rather than semiconductor SiC feedstock. Keep full new and removed wet masses and actual installed stock and current service allocation. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Silicon carbide refractory liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sic_liner`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Fired aluminosilicate furnace brick service (`aluminosilicate_brick`)

Conditional on actual fired aluminosilicate refractory bricks compatible with this broad fired lining family. Declare the whole brick grade and matrix and water and contamination. A material repair retained at closing remains a full incoming physical leg and part of the full closing mass; exclude it only from another already counted incoming term. Native Product family is fired refractory lining bricks based primarily on high-alumina or silica or magnesia materials. This card selects only the actual aluminosilicate fired brick; it does not identify a SiC liner or an unfired repair compound or ordinary construction brick.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aluminosilicate_brick`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Petroleum-based formulated lubricating oil (`lubricant`)

For actual mechanical drive maintenance receive the whole formulated lubricant once; base oil and additives remain subledgers. Keep initial in-machine oil and top-ups and draining and leakage and closing installed fluid. No fixed calorific value or purity or PAO synthesis route is assumed from an incompatible native candidate. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Petroleum-based formulated lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lubricant`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

#### Outputs

##### Waste flows

###### Used lubricating oil from maintenance (`used_oil`)

Record the full actual contaminated lubricant waste at generation with its real water and solids; retain treatment and any external transfer with no assumed recovery credit. Distinguish this from a clean regenerated oil product. Native Waste is petroleum-based or synthetic lubricating oil contaminated by use at its generation point; treatment route is explicitly unspecified. This identifies the actual generated waste only; it does not establish receiver compatibility or recovery yield.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_used_oil`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Discarded graphite current-transfer electrode (`spent_electrode`)

Measure the actual removed article in full wet condition with contamination and remaining material identity. Its physical gross outflow is not scaled by a service or economic allocation fraction. Separate measured erosion to dust or gas from this removed stock; no fixed life or per-kg loss is imposed. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Discarded graphite current-transfer electrode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_electrode`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Discarded silicon-carbide refractory liner (`spent_sic`)

Measure the actual removed article in full wet condition with contamination and remaining material identity. Its physical gross outflow is not scaled by a service or economic allocation fraction. Separate measured erosion to dust or gas from this removed stock; no fixed life or per-kg loss is imposed. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Discarded silicon carbide refractory liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_sic`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### Discarded aluminosilicate furnace brick (`spent_brick`)

Measure the actual removed article in full wet condition with contamination and remaining material identity. Its physical gross outflow is not scaled by a service or economic allocation fraction. Separate measured erosion to dust or gas from this removed stock; no fixed life or per-kg loss is imposed. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Discarded aluminosilicate refractory brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_brick`
- Sources: `imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

### Process: Released-cohort packing and observed services (`service`)

Actual packaging and storage/handling/dispatch and permitted post-release work over original-cohort horizon H.

#### Inputs

##### Product flows

###### Kraft paper powder bag (`paperbag`)

For this same qualified physical article, apply packaging_receipt_basis to the P/I/ER raw subledgers; standalone non-purchased receipt is I, even when retained unused at closing. Keep this card's original physical-versus-burden role and denominator. Include this one actual packaging material or supplied article when its actual receipt or custody event occurs; actual use is recorded separately. Record purchases P and first non-purchased external ingress I and externally returned receipts ER separately with opening and closing empty and attached-WIP and attached-FG and reusable stocks. P or I already inside a complete supplied article is counted once with one upstream burden owner. Real new ingress stays even if retained in closing stock; internal reuse is not a new purchase. Native Product is a manufactured paper bag commonly made from kraft paper with virgin or recycled fibres and open-mouth or valve form. Confirm actual powder-supply bag construction and strength specification without importing a universal bag size or mass or certification. Any real separately supplied liner is a different exchange; a liner already included in a purchased whole bag has one procurement owner and a composition subledger.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paperbag`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### LDPE powder-bag inner liner (`ldpe_liner`)

For this same qualified physical article, apply packaging_receipt_basis to the P/I/ER raw subledgers; standalone non-purchased receipt is I, even when retained unused at closing. Keep this card's original physical-versus-burden role and denominator. Include this one actual packaging material or supplied article when its actual receipt or custody event occurs; actual use is recorded separately. Record purchases P and first non-purchased external ingress I and externally returned receipts ER separately with opening and closing empty and attached-WIP and attached-FG and reusable stocks. P or I already inside a complete supplied article is counted once with one upstream burden owner. Real new ingress stays even if retained in closing stock; internal reuse is not a new purchase. Native Product is manufactured low-density polyethylene foil with Mass/kg reference and no fixed route or geography declared. Only compatible PE-LD film belongs here; do not substitute polyethylene resin or HDPE or PET. Confirm actual additives and film construction and whether it is already included in a whole supplied bag.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ldpe_liner`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### Wooden powder-shipment pallet (`wood_pallet`)

For this same qualified physical article, apply packaging_receipt_basis to the P/I/ER raw subledgers; standalone non-purchased receipt is I, even when retained unused at closing. Keep this card's original physical-versus-burden role and denominator. Include this one actual packaging material or supplied article when its actual receipt or custody event occurs; actual use is recorded separately. Record purchases P and first non-purchased external ingress I and externally returned receipts ER separately with opening and closing empty and attached-WIP and attached-FG and reusable stocks. P or I already inside a complete supplied article is counted once with one upstream burden owner. Real new ingress stays even if retained in closing stock; internal reuse is not a new purchase. Native Product is a wooden pallet manufactured from boards or slats at a lumber-mill production mix with Mass/kg reference. Qualify one actual pallet configuration and measured mass and wet condition; no EURO dimensions or fixed trip count or lifetime or fumigation certification is inferred.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wood_pallet`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### Packing and storage and dispatch electricity (`service_power`)

Retain actual incremental service electricity over observed horizon H for the original released cohort. Link each service event to original cohort Qc and state which operations have occurred by the reporting cutoff. Performed service is not deferred because powder remains in stock; only genuinely unused or unassigned service charges may carry over. Native Product is Chinese CN grid-average alternating current delivered to the user at 1–35 kV with energy reference Net calorific value in MJ. Bind only an actually matching supply interface; another country or voltage or generation-specific contract requires its own verified flow and provider. Preserve original kWh metering and convert by the dimensional identity 1 kWh = 3.6 MJ once; do not add a second provider for rectified current or count native energy as kg.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_power`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### Permitted post-release powder rework (`service_work`)

Only include an actual reprocessing service supported by manufacturer or product-specification permission and postwork tests and acceptance and disposition. Collect each real material and energy and waste exchange of the work as additional atomic cards before use; this service receipt never hides those physical flows or grants universal recyclability. Keep its incremental burden on the original cohort and never create new Q from retesting or returned powder. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Post-release artificial graphite powder reprocessing service
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_work`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

#### Outputs

##### Product flows

###### Kraft paper powder bag outward legs (`paperbag_out`)

Keep this material accompanying gross physical shipment S separately from material returned outward EO to an external owner. Use real gross product movement and packaging condition and original owner; these physical masses are not reduced by a burden share or product returns netting. Packaging is excluded from powder Q. Native Product is a manufactured paper bag commonly made from kraft paper with virgin or recycled fibres and open-mouth or valve form. Confirm actual powder-supply bag construction and strength specification without importing a universal bag size or mass or certification. Any real separately supplied liner is a different exchange; a liner already included in a purchased whole bag has one procurement owner and a composition subledger.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paperbag_out`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### LDPE powder-bag inner liner outward legs (`ldpe_liner_out`)

Keep this material accompanying gross physical shipment S separately from material returned outward EO to an external owner. Use real gross product movement and packaging condition and original owner; these physical masses are not reduced by a burden share or product returns netting. Packaging is excluded from powder Q. Native Product is manufactured low-density polyethylene foil with Mass/kg reference and no fixed route or geography declared. Only compatible PE-LD film belongs here; do not substitute polyethylene resin or HDPE or PET. Confirm actual additives and film construction and whether it is already included in a whole supplied bag.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ldpe_liner_out`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### Wooden powder-shipment pallet outward legs (`wood_pallet_out`)

Keep this material accompanying gross physical shipment S separately from material returned outward EO to an external owner. Use real gross product movement and packaging condition and original owner; these physical masses are not reduced by a burden share or product returns netting. Packaging is excluded from powder Q. Native Product is a wooden pallet manufactured from boards or slats at a lumber-mill production mix with Mass/kg reference. Qualify one actual pallet configuration and measured mass and wet condition; no EURO dimensions or fixed trip count or lifetime or fumigation certification is inferred.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wood_pallet_out`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

##### Waste flows

###### Kraft paper powder bag discard (`paperbag_waste`)

Record full actual waste leg W with residues and wet condition and the real receiver and treatment. Do not add a second embedded residue mass to the whole waste; retain that composition as a subledger. No automatic co-product or recycling credit follows from waste sale. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Discarded kraft paper powder bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paperbag_waste`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### LDPE powder-bag inner liner discard (`ldpe_liner_waste`)

Record full actual waste leg W with residues and wet condition and the real receiver and treatment. Do not add a second embedded residue mass to the whole waste; retain that composition as a subledger. No automatic co-product or recycling credit follows from waste sale. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Discarded LDPE powder-bag liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ldpe_liner_waste`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### Wooden powder-shipment pallet discard (`wood_pallet_waste`)

Record full actual waste leg W with residues and wet condition and the real receiver and treatment. Do not add a second embedded residue mass to the whole waste; retain that composition as a subledger. No automatic co-product or recycling credit follows from waste sale. A compatible exact flow UUID is unresolved for this specific physical identity; do not replace it with a collective category or a conflicting generic candidate.

- Selected flow: Discarded wooden powder-shipment pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this exchange and original cohort; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wood_pallet_waste`
- Sources: `asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | multifunctional attributional processes | Use this hierarchy only in an attributional scenario in which multifunctionality actually remains. First assign dedicated exchanges and subdivide actual or virtual processes. Next justify each remaining exchange by the determining physical causal relationship to its real co-function. A common physical share for all exchanges is not presumed. | jrc-ilcd-attributional-allocation-2010 |
| a_residual | remaining common-process burden | Only genuinely residual common-process burden uses contemporaneous market value at the actual split gate and condition after the preceding causal steps. Record quantities and prices and adjustments for any later conditioning/packing/transport. A missing price is not zero; document sensitivity. No fixed allocation ratio or automatic substitution credit is provided. | jrc-ilcd-attributional-allocation-2010 |
| a_discard | losses and recovered filler | Ordinary failed powder and samples and dust and discarded furnace packing retain their manufacturing and treatment burdens even if sent out or sold. Transfer a burden vector once only for a documented genuine other cohort/function under justified allocation/handover. Recovered internal filler carries its measured inherited vector and is not credited or repurchased on reuse. Gross physical transfers remain complete regardless of burden ownership. | jrc-ilcd-attributional-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coke_feed | manufacture | coke_feed | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_conductive_fill | manufacture | conductive_fill | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_insulation_coke | manufacture | insulation_coke | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_process_power | manufacture | process_power | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. Read actual energy meters; record original kWh and apply the dimensional kWh-to-MJ conversion once with meter-boundary reconciliation. | MJ | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_control_power | manufacture | control_power | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. Read actual energy meters; record original kWh and apply the dimensional kWh-to-MJ conversion once with meter-boundary reconciliation. | MJ | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_cooling_makeup | manufacture | cooling_makeup | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_cleaning_water | manufacture | cleaning_water | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_air_oxygen | manufacture | air_oxygen | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_air_nitrogen | manufacture | air_nitrogen | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_air_argon | manufacture | air_argon | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_air_co2 | manufacture | air_co2 | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_air_vapour | manufacture | air_vapour | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_released_powder | manufacture | released_powder | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Weigh the whole first-release powder on a calibrated scale excluding removable packaging; match unique batch release and actual grade and moisture and phase tests and configuration range. Keep all failed runs and released closing FG. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_external_fill | manufacture | external_fill | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_external_insulation | manufacture | external_insulation | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_cooling_return | manufacture | cooling_return | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_coke_waste | manufacture | coke_waste | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_powder_waste | manufacture | powder_waste | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_captured_dust | manufacture | captured_dust | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_spent_insulation | manufacture | spent_insulation | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_process_wastewater | manufacture | process_wastewater | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_fossil_co2 | manufacture | fossil_co2 | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_fossil_co | manufacture | fossil_co | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_sulfur_dioxide | manufacture | sulfur_dioxide | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_nitric_oxide | manufacture | nitric_oxide | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_nitrogen_dioxide | manufacture | nitrogen_dioxide | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_fossil_methane | manufacture | fossil_methane | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_oxygen_out | manufacture | oxygen_out | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_nitrogen_out | manufacture | nitrogen_out | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_argon_out | manufacture | argon_out | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_vapour_out | manufacture | vapour_out | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_graphite_air | manufacture | graphite_air | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_ambient_co2_out | manufacture | ambient_co2_out | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_furnace_service | support | furnace_service | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_electrode_service | support | electrode_service | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_sic_liner | support | sic_liner | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_aluminosilicate_brick | support | aluminosilicate_brick | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_lubricant | support | lubricant | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_used_oil | support | used_oil | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_spent_electrode | support | spent_electrode | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_spent_sic | support | spent_sic | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_spent_brick | support | spent_brick | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_paperbag | service | paperbag | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_paperbag_out | service | paperbag_out | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_paperbag_waste | service | paperbag_waste | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_ldpe_liner | service | ldpe_liner | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_ldpe_liner_out | service | ldpe_liner_out | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_ldpe_liner_waste | service | ldpe_liner_waste | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_wood_pallet | service | wood_pallet | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_wood_pallet_out | service | wood_pallet_out | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_wood_pallet_waste | service | wood_pallet_waste | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | kg | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_service_power | service | service_power | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. Read actual energy meters; record original kWh and apply the dimensional kWh-to-MJ conversion once with meter-boundary reconciliation. | MJ | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_service_work | service | service_work | foreground_record | cohort ID; event time; original reading and unit; total-or-rate flag; interval; net/gross and wet/dry basis; actual composition and phase; opening/closing stocks; gross receipt and removal legs; upstream owner; inherited exchange vector; attribution evidence; original Qc and H | Collect undivided original measurements and receipt/dispatch and stock records for this one physical exchange with calibrated weighing/meters and actual composition/phase tests. Keep total versus rate and wet versus dry and supplier-included ownership. For service retain original cohort and actual observation horizon; quantify current service separately from full gross asset/material legs. | item | Every event or continuous measurement | Full reporting period including failure/zero output and start-stop/idle/clean-up/rework plus actual H | Named site and operation and actual external interface and original cohort | per reference flow | Raw logs; calibrations; sampling; supplier/receiver records; release tests; uncertainty and compatibility evidence |
| cp_release | manufacture | cohort first release and FG bridge | foreground_record | unique first-release ID; accepted net whole powder mass; actual grade/phase/moisture; rejected and sample masses; Q; opening/closing FG; gross G and R; true X_in and X_out; rework permission and posttests; original cohort Qc; H | Reconcile calibrated first-release weighing and unique batch acceptance and full FG movements; do not treat dispatch or returns as new production. | kg | Each release and physical movement | Full cohort and observed H | manufacture and service | Retain undivided raw release records; calc_normalize is the only normalization. | Release/quality ledger; wet mass and physical movement reconciliation |
| cp_vectors | support | gross stocks and inheritance and services | foreground_record | each flow historical vector; raw/WIP/unassigned store opening/closing; full wet asset and new/old repair/fluid stocks; packaging P I ER S EO W and opening/closing attachments; one upstream owner; current service evidence; Qc; H; genuine Tother decision | Independently close physical and burden gates; retain real additions even when held in closing stocks. Record original asset vector and actual service separately; never scale gross physical legs by a burden fraction. | native extensive unit | Each event and period opening/closing | Full reporting period and actual service H | all actual gates | Keep undivided physical legs and historical vectors; normalization only in calc_normalize. | Matched transfers and stocktakes; actual service and valid allocation/handover records |

The per-reference aggregation label identifies the target reporting basis only. Protocols collect raw undivided values; conversion and attribution precede the single calc_normalize operation. No future unknown quantity is described as an observed pass.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Convert original readings to each row native extensive unit; use cumulative volume once and integrate only true rates. Establish whole-preparation and supplier-included packaging ownership once. Directly assign dedicated flows and apply exchange-specific determining physical causality before residual allocation. Keep undivided raw activity I_e and incremental service S_e and all physical gross legs g_e. Do not re-correct an already stock-corrected consumption. | raw observations; cp_vectors; cp_release | I_e; S_e; g_e; Q | jrc-ilcd-attributional-allocation-2010 |
| calc_burden | all inventory rows | For manufacturing use A_e = I_e + Bopen_e - Bclose_e - Tother_e only when I_e is not already stock-corrected; otherwise use the documented equivalent without a second stock correction. Bopen/Bclose include raw/WIP and genuinely unassigned stores; Bclose excludes released FG. Tother is a once-only justified genuine other-cohort/function transfer and never an automatic deduction for ordinary losses or sale. Current asset service comes from the inherited asset vector and actual service assignment separately from full physical asset mass. Post-release A_e uses actual original-cohort service S_e plus inherited unassigned charge less only truly unused/unassigned closing charge or justified transfer; never subtract already performed service due to retained FG. | I_e; S_e; Bopen_e; Bclose_e; Tother_e; cp_vectors | A_e | jrc-ilcd-attributional-allocation-2010 |
| calc_physical | all physical gates | Reconcile gross wet stocks and actual inputs/outputs independently at manufacturing and FG/service and combined gates under b_physical and b_pack. Cancel internal first-release Q and paired internal recoveries only when combining gates. Preserve real new repair/water ingress simultaneously with full wet closing stock. Independently test mass and relevant elements and each actual species; a balance residual cannot specify several missing gases or reaction water. | g_e; opening wet stocks; closing wet stocks; cp_vectors | physical gate balances; element balances | imerys-graphite-powder-patent-2015; jrc-ilcd-attributional-allocation-2010 |
| calc_normalize | all inventory rows | q_e = A_e / Qc exactly once when Qc>0. For manufacture Qc is the original cohort first-release Q; for observed post-release services Qc remains that same original cohort Q with horizon H declared. Qc=0 retains actual burdens and inherited physical records without a unit result. Cards and protocol aggregation reference this result without further division. The reference output is 1 kg whole uncoated powder. | A_e; Qc; H; cp_release; cp_vectors | q_e | jrc-ilcd-attributional-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Check whole supplied state and actual artificial route and every native restriction together with the real provider. Compatible broad manufactured powder is not proof of a specific grade or plant. Unresolved auxiliary UUID or unknown quantity remains explicit; no fabricated observation. | Supply and route history; native records; grade and phase tests |
| dq_measure | all inventory rows | Retain original units and total/rate status and meter boundary and calibration and sampling uncertainty. Mass/kg does not govern electricity MJ or independently measured fluid volume. No catalogue density or patent table factor substitutes for current site measurements. | Raw logs and calibrations; actual-fluid state and laboratory reports |
| dq_cohort | release and stocks and services | Keep unique release events and all-flow inheritance vectors for failures and WIP and released FG; retain original service cohort and H. Do not normalize quantities in collection. | Release ledger; matched physical transfers; service records |
| dq_complete | manufacture and support and service | Each actual chemical/fuel/water/packaging/waste/species and repair/asset leg has its own identity and owner. Record evidenced absence separately from unknown. All actual omitted exchanges must be added before a dataset is declared complete. | Site walkthrough; supply balance; emission speciation; receiver evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference product | Confirm actual coke conversion and uncoated powder semi-manufacture gate; reject natural mined graphite or repackage-only routes or finished electrodes and incompatible native form. Whole mass and actual minor phases/moisture must be declared. | imerys-graphite-powder-patent-2015; asbury-synthetic-graphite-2006; asbury-graphite-introduction-2026 |
| v_identity | all inventory rows | Verify the selected flow against all native names/synonyms/comments/CAS and grade/route/form/geography/media/type and every property. Use the exact reference-property to unit-group to reference-unit chain. An unspecified air compartment must not hide a known specific compartment. Reject hard conflicts rather than excusing them through CAS or classification. | imerys-graphite-powder-patent-2015 |
| v_quantity | release and all inventory rows | Verify Q from unique first-release whole net masses including closing FG; every input and output and protocol uses the same declared reference basis. Raw collection remains undivided. Check one calc_normalize only with original Qc and observed H; Q0 has no unit result. The finite relationship check does not establish measured site values or physical plausibility. | jrc-ilcd-attributional-allocation-2010 |
| v_balance | all physical and burden gates | Close full wet mass and independent relevant-element/species balances at manufacture and FG/service and combined gates. Verify packaging six legs and supplier-included owner and complete asset/repair/fluid physical stocks. Real new ingress retained in closing stock remains. No burden share scales gross mass and no ordinary discard/sale automatically creates Tother. Unsupported or quantitatively unknown relationships remain open. | imerys-graphite-powder-patent-2015; jrc-ilcd-attributional-allocation-2010 |
| v_work | post-release rework | Require actual manufacturer/specification permission and postwork tests/acceptance/disposition and original-cohort traceability; do not infer that every rejected powder or broken asset can be restored. Add all actual incremental physical exchanges and retain treatment burdens. | jrc-ilcd-attributional-allocation-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input to industrial powder-consuming processes with independently compatible quality and gate |
| allowed_use | The declared coke-derived uncoated powder route and actual geography/year/provider and measured whole-product basis |
| excluded_use | Generic natural graphite or coated battery powder or electrodes/articles; regulatory certification; operational furnace instructions; unreviewed proxying of unresolved identities |
| required_metadata | Whole uncoated artificial graphite powder with actual graphitic phase minor phases ash and moisture; Graphitizable calcined petroleum-coke provenance and complete upstream refining coking and calcination coverage; Actual binder-free particulate Acheson batch route and charge segregation and filler recovery; No natural mining route no pitch forming no intentional coating no catalyst doping and no finished electrode function; Actual pre-grinding and post-grinding classification and dust-control operations and all losses; Site reporting period supply geography and actual electricity voltage and provider; Whole-powder first-release net mass Q unique release IDs actual moisture and declared product grade; Reference amount includes closing released FG and excludes removable packaging and repeat inspection; Per-flow opening and closing raw WIP and unassigned-store inherited burden vectors; Original released cohort Qc and observed service horizon H for packing storage dispatch and permitted rework; Full gross molecular species by phase origin and receiving compartment with independent mass and element balances; Each packaging P I ER S EO W leg plus empty attached-WIP attached-FG and reusable stocks and one upstream owner; Complete installed assets new and old repair parts and actual fluids with measured physical masses and separate current service burden; Manufacturer or specification rework permission postwork tests acceptance and disposition; Every adopted card native restriction actual compatible provider and all unresolved data disclosures |
| required_quality_disclosure | Actual primary observations versus technical synthesis; every native restriction and unknown; single Q normalization; all physical/burden balances; original-cohort service H; allocation sensitivity; unreviewed scope |
| update_trigger | Changed coke history or binder/coating/additive route or powder gate or grade/phase/moisture or provider/voltage/geography or service/stock/allocation practice or source/native identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-structure-2025 | official_guidance | UN Statistics Division. CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification-only scope of 37950 versus non-electrical articles in 37990 and electrical articles in 46950; no automatic mapping or full-leaf coverage |
| imerys-graphite-powder-patent-2015 | literature | Rota et al. US9102539B2, Process for the production and treatment of graphite powders, 11 August 2015. https://patents.google.com/patent/US9102539B2/en | Primary technical route for particulate coke conversion and graphite-filler separation; drawings 3–7 and examples 1–3 retain alternative configuration and already-graphitic-feed counterexamples; no example quantities or operating settings adopted |
| asbury-synthetic-graphite-2006 | handbook | Asbury Graphite Mills, A. V. Tamashausky. An Introduction to Synthetic Graphite, 2006, pp. 3–12. https://www.asbury.com/wp-content/uploads/An-Introduction-to-Synthetic-Graphite.pdf | Artificial versus natural route and calcined-coke upstream history; electrode mixing/forming/baking/impregnation example is a distinct route and supplies no universal powder recipe |
| asbury-graphite-introduction-2026 | handbook | Asbury Advanced Materials. Graphite 101: Introduction, 1 January 2026. https://www.asbury.com/resources/graphite-101-introduction/ | Manufacturer qualitative evidence for natural/synthetic distinctions and grinding/size-classification of industrial graphite powders; no supplier-specific grade or current plant inventory inferred |
| jrc-ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC. ILCD Handbook, General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, sections 7.9.2–7.9.3, especially PDF pp. 275–288. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Only attributional cases requiring allocation: subdivision/virtual subdivision and exchange-specific determining physical causality then genuinely residual actual-gate market value; no industrial operating-factor support |
