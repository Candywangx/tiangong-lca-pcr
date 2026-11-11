---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-transportable-timber-frame-building
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Factory-assembled transportable timber-frame building

## 1. Scope and Applicability

This PCR covers one terminal product: a complete single transportable timber-frame building assembled and first quality-released inside the factory. The building includes its floor, load-bearing timber frame, insulated walls and roof, weather enclosure, doors/windows and the interior finish and fixed services specified in its unique supply configuration. It is not a wall panel, a stack of CLT boards, furniture or a building-site service. Progressive House format 02 provides positive evidence of a whole timber-frame house assembled at the factory; its other formats supply separate elements or leave finishing to the partner. PrefabEU independently documents cutting, frame/sheathing manufacture, insulation, sealing, fit-out and weather wrapping while also offering separate elements. These are transparent technical synthesis sources, not one SKU, one factory or a common bill of materials. [prg-timber-building; prefabeu-factory.]

CPC 3.0 class 3870 includes assembled and unassembled buildings and incomplete buildings with their essential character; subclass 38701 requires predominantly wooden buildings. This selected methodology covers a narrower complete factory-assembled terminal, not every classified product. Exclude bare structural kits, separate wall/floor/roof elements, multi-module site-completed buildings, steel/concrete-dominant buildings, foundations, site craning/connection/commissioning and use/end-of-life. A trailer used only for delivery is a separately accounted transport asset; a permanently supplied road chassis changes the declared configuration and requires its own article and asset reconciliation. No density, dimensions, storey height, component mass, yield, recipe, heat-transfer value, certification, emission factor or life is prescribed. [unsd-cpc3-buildings.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-transportable-timber-frame-building |
| classification_refs | CPC 3.0 38701; narrower product and route boundary |
| covered_products | Complete predominantly wooden single-unit timber-frame buildings at first factory quality release; one configuration and complete bill of supplied items |
| excluded_products | Bare frame or panel kits; isolated components; furniture; site-completed multi-unit buildings; site construction services |
| representative_product | One complete insulated timber-frame building with installed roof/façade/windows/doors and declared interior and fixed-service completion |
| production_route | Receive actual timber and purchased boards/articles → inspect/cut/machine → fabricate floor/wall/roof framing → install sheathing/insulation/membranes → combine complete building → install declared fit-out/services → finish/seal/test → first quality release → actual storage/packing/dispatch service |
| market_state | Complete factory product awaiting disclosed foundation and utility connection; no assertion of installed occupancy approval |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete factory-assembled timber-frame building in its declared supply configuration |
| How much | 1 kg net complete first-released building; packaging and delivery equipment excluded |
| How well | Actual approved configuration and component schedule; documented geometry and quality tests; only supported structural/fire/thermal/electrical/plumbing claims |
| How long or cycle | One identified manufacturing cohort with observed service horizon H; no assumed occupancy duration or service life |
| reference_flow_link | finished_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Prefabricated buildings, of wood `b4ed2c82-9824-4fd6-b529-536923caef47` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Complete-building configuration and unique serial ID; Wood predominance and structural route; Floor wall and roof completion schedule; Declared doors windows finishes and fixed-service inclusion; Drawing revision and actual geometry; Floor area survey convention and each included storey; Actual species grade supplier treatment and board/article supply state; Formulation identity and retained solids water and volatiles; Net release mass and measurement uncertainty; Wood moisture and each material water state; Separate biogenic and fossil carbon ledger; First release event and nonduplicated cohort denominator; Opening closing raw WIP finished-goods and asset ledgers; Each inherited exchange burden vector; Observed service horizon and original released cohort links; Physical flow native units and provider gate reconciliation; Site period energy source voltage and geography; Actual acceptance results and failed/rejected work; Packaging pools and gross shipment/return destinations; Excluded foundation site connections and later stages |

Declare every qualifier in the concrete package. This is a manufacturing mass declared unit, not a square-metre/year functional equivalence. The native Product is a manufactured predominantly wooden prefabricated building at plant with Mass/kg. Its whole-product name, descriptive comment and finished manufacturing state positively support the qualified complete factory-assembled subset; no native fixed grade, dimensions, geography or incompatible route is overridden. Its physical identity does not establish a matching factory/background provider or scientific approval. Establish predominantly wooden construction from the actual whole-building material/construction schedule and the classification context; a timber-frame label alone cannot override contrary whole-product material facts. No fixed wood mass/volume percentage is invented.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of individually traceable complete buildings first quality-released in the cohort, at their measured net release mass. Use cp_reference: calibrated whole-unit weighing with tare subtraction or independently weighed disjoint supplied-item reconciliation with uncertainty. Include actual retained components and water once. Exclude packaging, transport trailer, rejected units and internal modules. Count only the first release; neither dispatch nor reinspection creates production. |
| native_basis | reference and every database binding | Verified native reference property | kg; item; m2; m3 | The selected manufactured wooden-prefabricated-building Product has a verified Mass/kg reference chain. Its broad family is narrowed to the complete single-unit configuration throughout the reference and finished-row description. Recheck the complete native reference-property → exact unit-group → reference-unit chain for any future alternative binding. If native Count or Area is selected, preserve that native property and derive any kg bridge from the same complete configuration measured under cp_reference. Item(s) and item are the same count with factor 1; they give no kg per building. Never infer mass or density from a secondary property coefficient. |
| area_geometry | area and dimensional conversions | Measured geometry | m2; m3; kg | Survey floor area from the actual floor plan: identify each storey, single counted horizontal floor face, exclusions, openings and perimeter convention. Do not substitute bounding-box area, façade area, double-sided board area or an invented storey height. For sheet or timber conversions use actual thickness/net geometry and independently measured matched-state mass/density; do not assume timber density or count-to-mass factors. |
| water_carbon | each wood article formulation and stock | Measured mass and composition | kg | Collect dry-basis wood moisture u=(wet-oven_dry)/oven_dry separately for each species/stock state, and wet-basis fraction w=(wet-oven_dry)/wet; convert percentages to fractions. No numeric moisture is prescribed. Retained whole-article water and subcomponents are nonadditive subledgers. Track atmospheric sorption/desorption separately; it is not repair. Independently measure biogenic/fossil C and actual chemical species. Free water, structural water and any evidenced reaction water are distinct; one residual cannot fit two unknowns. |
| raw_units | all measured exchanges | Actual flow property | native unit | Retain original readings and conversions before attribution: kWh×3.6 gives MJ; fuel uses actual mass or measured volume/density and batch heating value. Integrate a genuine rate over its recorded time; an already integrated volume is not multiplied by time again. Gas volume requires actual species/state/T/P and moisture convention. Density is independently measured for that material and state, never borrowed from water. Purchased heat/steam is not implied by an electrical workshop. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual delivered structural timber, manufactured boards, insulation and separate purchased articles/formulations; no purchased complete building substituted for manufacture |
| starting_condition_role | Component receiving gate through complete-building first release; actual subsequent factory service ledger retained |
| product_classification_scope | Predominantly wooden complete single transportable timber-frame building |
| recursive_input_rule | A purchased partly fabricated element carries its actual prior fabrication once; perform and meter only real remaining work. Returned released buildings retain original IDs/burdens and receive only incremental work without new Q |
| upstream_dataset_requirement | State/grade/formulation/region/time/gate-compatible upstream manufacturing and delivery for each disjoint supplied item; separate background from foreground work |
| disclosure | Supply completion schedule and site exclusions; received treatment/drying states; outsourced operations; full failed work and stocks; packing and observed service horizon; missing identities/providers and uncertainty |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_terminal | complete building | Include actual receipt inspection, cutting/woodworking joints, floor/wall/roof-frame manufacture, sheathing, insulation, membranes, connection, treatment/coating where actually performed, declared fit-out, sealing, quality tests and first release. Resolve internal transfers without a second finished building or panel output. A complete module cannot be mixed with a bare structural kit under this reference. | prg-timber-building; prefabeu-factory |
| supply_bridge | purchased articles and formulations | Each purchased whole article or complete supplied formulation is charged once including its contained adhesive/coating/solvent/water and installed hardware. BOM component analysis is a nonadditive subledger, not another purchase. Select disjoint receipts or a reconciled whole/component bridge; cancel exact internal transfers. Actual onsite mixture manufacture instead records every separately purchased ingredient, energy and losses with its own atomic row. Distinguish supplied treated wood from onsite treatment/touch-up; a fire/bio treatment claim supplies neither chemistry nor emission factors. | prg-timber-building |
| first_release_stocks | manufacture and released stock | Q counts only new complete first quality releases at release-state net mass. Closing released finished goods are already in Q and are not subtracted again as manufacturing output. Keep opening/closing raw, WIP, non-WIP and released FG mass/composition, stage status and every inherited exchange vector. Preserve all failed/zero-output/start-stop/idle/cleanup/test/rework loads. Do not turn delivery, reinspection, permission, rejection reversal or moisture change into new output. | prg-timber-building |
| service_horizon | post-release work and returns | Keep storage, wrapping, handling, dispatch and actual returns/rework services in their own observed-horizon H ledger linked to original cohort Qc. Include only services actually performed by H; future services are unknown, never assumed zero or fabricated now. Retain the original delivered item and any required reversal with its original burden, plus real incremental work. Combine manufacture and service by cancelling the internal release transfer once; original Qc is not counted again as new production. | prg-timber-building; ilcd-allocation-2010 |
| physical_gates | physical mass and element balances | Manufacturing, FG-service and combined gates must reconcile independently as detailed in section 8. Preserve every actual gross boundary crossing, including failed/refused/unauthorised movements and external returns; permissions control acceptance, not the existence of physical movements. X only deduplicates the same independently identified OTHER_actual flow on the same side. It never erases inventories, opposite-side movements or a card. Keep retained water and sorption in whole wet closure; carbon/species evidence is independent of physical closure. | ilcd-allocation-2010 |
| packaging_gate | each packaging article | For each separate packaging pool record opening empty and attached WIP/FG and reusable stock, purchases, external returns received, closing pools, gross physical shipments, external returns sent and waste. Internal reuse cancels and creates no repurchase, Q or automatic coproduct. Preserve every present P/I_sup/ERin/S_gross/EOout/W_whole channel as an atomic exchange or identified stock observation; do not replace physical gross material with an environmental allocation/service/asset-use share. | prefabeu-factory; ilcd-allocation-2010 |
| water_heat_species | utilities treatment and releases | Screen actual heating, combustion, test water, coatings and treatments without assuming their presence. Add missing actual fuels, fluid species, waste routes or ingredients as individual cards before claiming completeness. A real purchased heat carrier requires kg, phase, T/P and enthalpy and supplier return-water/energy convention; one supplier heat+carrier bundle is bought once. Record actual external condensate/hot-water Product returns at gross native amount. Do not invent a boiler, steam loop, reaction water or CO2 uptake in building assembly. VOC/COD/NOx indicators are not molecular amounts. A measured phase-defined whole particulate mixture may be one physical-mass flow with nested actual composition, never a pure elemental-carbon surrogate; unresolved chemical species or phase stays unknown. | prefabeu-factory |
| separate_site | excluded later work | Keep foundations, transport/site lifting, site joints/connections/commissioning, occupancy, maintenance, replacement and end-of-life separately declared. Factory testing is retained; factory completion does not imply site connection or installed building approval. Upstream article manufacture, inbound transport and foreground processing must be linked once at nonoverlapping gates. Assess/disclose capital and personnel boundaries instead of assuming an exemption. | prg-timber-building; prefabeu-factory |
| cohort_full_partition | actual declared configuration | Q0 is independently fixed from unique first quality-release events for complete same-configuration buildings after every required factory operation and test, ready for the declared factory supply gate. It includes all actual retained articles and water at release and excludes transport packaging/trailer tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result. | prg-timber-building |
| burden_provider_history | actual declared configuration | Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. | ilcd-allocation-2010; prg-timber-building |
| actual_physical_transfer | actual declared configuration | T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted. | ilcd-allocation-2010 |
| whole_wet_packaging | actual declared configuration | For each actual whole wet PE-film, wooden-skid or steel-rack pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These three specific article pools are conditional on actual configuration; the source proves wrapping/packing but no universal material, tare, repair, water uptake or mass. | prefabeu-factory; ilcd-allocation-2010 |
| whole_receiver_service | actual declared configuration | One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy. | ilcd-allocation-2010 |
| actual_capital_fleets | actual declared configuration | Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. | prefabeu-factory; ilcd-allocation-2010 |
| wood_moisture_programme | actual declared configuration | USDA FPL2021 Chapters4/13 provide an actual wood-moisture programme: representative matched-state specimens, immediate weighing or moisture-protected storage, oven drying to constant mass and the stated dry-mass convention, plus electrical-meter calibration/species/temperature/depth/gradient limitations. Use u=(wet-dry)/dry and w=(wet-dry)/wet on actual compatible specimens, converting percentages to fractions; w=u/(1+u). The source warns that volatile extractives can make oven loss exceed true water. Do not equate whole coated/resin-containing/treated article loss with H2O or apply a timber meter to a complete house. Keep gypsum structural water, membrane/coating carriers, free/bound wood water and actual atmospheric sorption distinct. Whole supplied wet mass remains independently weighed even if a water subdivision is unresolved. An actually necessary untreated/treated-matrix or water-phase procedure not established remains a specific method hold; routine actual calibration/sampling/recovery of an established applicable programme is an unperformed study obligation. No climate EMC, density, moisture target, drying time, empirical range or source numerical performance becomes a PCR default. The retained handbook text is the procedure source here; its references to ASTM D4442/D4444 do not mean those complete standards were acquired or that ASTM conformity is claimed. | usda-wood-moisture-2021 |
| real_analytical_programme | actual declared configuration | Use complete EPA320 only for actual identified IR-active vapor species and its real extractive heated-transport/reference-spectrum/interference/analyte-spike recovery programme. It is not total-VOC chemistry, a dust method, or FTIR measurement of homonuclear O2/N2/monatomic Ar. EPA5 supplies filterable particulate sampling/recovery/gravimetry only within its stated phase and source conditions; actual wood/OSB/mineral/coating particulate is a measured whole physical mixture, not elemental C or a fictitious pure resin. Captured dust is Waste and is separate from the actual final air release. Actual collected condensate/mist goes whole to its real receiver; final released species/medium require their own applicable procedure, not a dry-PM assertion about all phases. Do not infer actual formulation constituents or release from a generic supplier label. Actual on-site combustion needs its complete producer/fuel/air/O2/water-generation/each real species/ash/energy/control unit, not CO2 alone or a purchased-heat stub; add those specific interfaces and actual procedures before data completeness. This source set does not establish a full programme for every unidentified formulation, reacting species or condensable/other phase: a genuinely necessary unestablished procedure remains hold. Actual-site calibration/lot QA within an established applicable programme remains study qualification, not proof no method exists; finite check never approves science, performance or study results. The retained Method5 explicitly incorporates Methods1–3; the full originals are also retained here for actual duct geometry/traverse, calibrated velocity/pressure/temperature/flow and dry-gas-density procedure. Respect non-cyclonic/size/location limits rather than claiming every room or duct is covered. An actual uncontained fugitive release is not automatically represented by one duct or personal-exposure result. Method3 discloses its restricted gas matrix, interferences and unabsorbed N2/CO remainder and its argon omission: no nominal air composition/dry molecular weight, pure N2 flow or measured Ar is inferred. Method320 PDF16 prints a tracer spiked/direct fraction in Eq3 and a fraction-mixing Eq4 but labels DF>=10; preserve that actual inconsistency, not a numerical default. On a common corrected mole basis, use the actual conserved mixture fraction phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), with a nonzero denominator, representative matched samples and the stated no-unaccounted-loss mixing conditions; expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Distinguish phi from its reciprocal dilution ratio, validate actual recovery and retain failed/negative results and uncertainty. This mathematical identity supplies no source concentration, acceptance tolerance, emission factor or factory QA success. These are dated EPA Internet copies, not an assertion of current regulatory conformity. | epa-method320; epa-method5; epa-method1; epa-method2; epa-method3 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| building_manufacture | Complete-building factory manufacture and observed services | required | Complete single-unit timber-frame terminal; each utility/article conditional on actual configuration | foreground_production | finished_building |
| factory_assets | Actual whole factory equipment fleets and service | required | Only actual configured separate machines; included whole-line units not purchased twice | foreground_production | finished_building |

Stage-code receiving/cutting, timber-joint/frame manufacture, sheathing/insulation/membranes, complete-unit assembly, configured fit-out/services, finishing/sealing/testing, first release and observed storage/packing/dispatch separately inside this one foreground unit. Keep unallocated raw stage totals and every inherited stock vector. Conditional cards are measured if present; demonstrated absence is not_applicable; unknown is pending. Add any actual unlisted atomic exchange before complete data delivery; do not hide it in zero, other or a collection label. No factory quantity is invented.

### Process: Complete-building factory manufacture and observed services (`building_manufacture`)

#### Inputs

##### Product flows

###### C24 sawn structural timber (`structural_timber`)

Receive actual sawn timber before factory cutting and frame manufacture. Declare species, moisture, grading, supplier machining/drying and fire/biological treatment status; inherited treatment is not repurchased. No untreated/kiln-dried database family is presumed compatible with supplied treated stock. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: C24 sawn structural timber
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Oriented strand board (OSB) (`osb_board`)

Purchased manufactured OSB-3 sheathing, before local cutting/fixing. Native Product family is manufactured finished OSB at plant with Mass/kg, not wood strands or prepress mat; actual grade/layup/resin/moisture and supplier gate remain required. Its resin/wax/water are already inside the whole supplied board and are nonadditive subledgers; OSB production is upstream once. Native manufactured finished OSB at plant, Mass/kg, with no geography or fixed recipe/grade. Select the actual purchased OSB-3 board only, not a formed prepress mat, strands or CLT. Verify supplier grade/resin/moisture and upstream gate; retain supplied whole-article constituents once. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Oriented strand board (OSB) `3291d1cf-a318-4271-9435-39534fa45e67`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Mineral-wool insulation batt, supplied article (`mineral_wool`)

One actual supplied batt grade with its binder, facing and moisture included. Confirm glass/stone fibre, grade and form before binding; no source insulation density, thickness or thermal value is a universal input. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Mineral-wool insulation batt, supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Vapour-control membrane sheet, supplied article (`vapour_membrane`)

One actual membrane sheet product installed on the declared inner face. Collect polymer/laminate/facing, adhesive inclusion, roll grade and supplied mass; do not identify an unspecified membrane as PE merely from its function. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Vapour-control membrane sheet, supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Weather-barrier membrane sheet, supplied article (`weather_membrane`)

One actual outer weather-barrier sheet, distinct from the inner vapour layer and shipping wrap. Include its supplied coatings once and collect actual composition and laying losses. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Weather-barrier membrane sheet, supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Gypsum Board (`gypsum_board`)

Only if gypsum board is in the actual completed interior. Include board paper, binders and structural water once; offcuts and dust retain their actual state and are not pure gypsum by assumption. Native Product is manufactured gypsum-core board with paper or glass-fibre surface sheets at plant, Mass/kg and no geographic restriction. Select only the actual paper-faced interior plasterboard article; retain its facing, additives and structural/free water once. No area-based board record or paste is substituted; actual thickness/grade/provider remains declared. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Gypsum Board `0cf61f85-2df7-4f65-be58-257d4252fb02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Timber façade board, supplied article (`timber_cladding`)

Actual supplied exterior board with species, profile, treatment and any supplier finish recorded. Local cutting/fixing/finishing is included only where performed; no thermowood route is inferred for all cladding. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Timber façade board, supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Metal roof sheet, supplied article (`roof_sheet`)

Only for the selected actual finished metal roof. Specify alloy, coatings, profile and supplied form; all bought-in coatings are included once. Other roofing requires a separate evidenced atomic article before use. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Metal roof sheet, supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Exterior Window (`window`)

One purchased complete window with frame, glazing, spacer/gas, hardware, gaskets and supplier coating already included. Its whole measured mass is not added again to its pane/frame subledger; installation consumables remain separate. Native exterior-window Product at factory, Mass/kg, does not prescribe frame material, glazing count, shutters or performance. Select one actual complete glazed exterior-window assembly with its supplier inclusions; comments on shutter/trim/caulk alternatives do not assert they are supplied or permit duplicate purchases. Actual configuration/provider/gate and installation consumables remain explicit. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Exterior Window `7a7a325e-e8b3-4497-bf32-fca70491694a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Exterior door assembly (`exterior_door`)

One purchased complete door-set article including the declared frame, threshold, leaf and factory hardware. Disclose actual completeness; a bare door leaf is not the same supplied assembly. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Exterior door assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Interior door assembly (`interior_door`)

Conditional on actual fitted internal doors. Specify frame/leaf/hardware inclusions and retain a disjoint supplied article list. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Interior door assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Steel screw (`steel_screw`)

One actual screw grade/finish and size family used in timber connections. Record whole supplied coated screw mass and actual wastage; nails or brackets are separate exchanges. Native Product is a steel screw with Mass/kg, no fixed alloy/coating/size/geography/route. Only one actual steel wood-screw article is selected; no nail/bracket or fixed screw weight is inferred. Disclose actual grade, finish, geometry and provider before quantity/background binding. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Steel screw `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Steel framing nail (`steel_nail`)

Conditional actual framing nails; specify material/coating and supplied form. Count-to-mass conversion needs weighed same-specification samples, not an assumed nail weight. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Steel framing nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Steel timber-connection bracket (`steel_bracket`)

Conditional actual bracket supplied as one formed/finished article; include coating once and trace location in the released configuration. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Steel timber-connection bracket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Laminate (`floor_covering`)

Only for actual laminate floor covering; declare core, wear layer, backing and supplied state. Another finish is a separate article; a whole plank is not repurchased as its layers. Native Product comment identifies laminated flooring with wood particle/fibreboard core, printed image and transparent wear layer, Mass/kg at plant. Select only the actual dry-area laminate plank of that construction; no bamboo/parquet/solid-wood, wet-room permission, fixed thickness or performance is implied. Retain all supplied layers once and verify actual provider/state. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Laminate `e4902745-9f04-4128-ad0e-40e8a0c8d23e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Cable (`electrical_cable`)

Conditional actual cable installed within the factory supply schedule. Record conductor, insulation, sheath and all included components once; convert length to mass only with actual measured construction. Native Product is copper/aluminium cable manufactured, packed and delivered at cable factory, Mass/kg; it also describes power/data/coaxial families. This card selects only actual insulated power cable with a documented copper or aluminium conductor. Exclude optical-only cable, bare conductor and other supply forms; document insulation/sheath, voltage, inclusions and supplier packing/delivery gate so neither cable constituents nor logistics are purchased twice. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Cable `5c181eb6-3cb7-4fc5-89cf-9924cb08d3e0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V (`socket`)

Conditional actual complete socket with its purchased housing and contacts; do not substitute all electrical equipment with one collective flow. Native manufactured Product is circuit switching/protection/connection apparatus at voltage not exceeding 1000 V, Mass/kg and no fixed geography/grade. This card selects one actual complete socket outlet in that connection-apparatus subset, not a whole electrical system or bare connector housing. Verify actual voltage, contacts, housing, configuration and provider inclusions. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V `13907748-8b4f-4da3-8108-c81720ca7799`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V (`distribution_board`)

Conditional actual purchased board with its fitted protection/switching devices and enclosure. Separately purchased site-installed devices are disjoint additions, not duplicate assembled contents. Native manufactured Product at plant is an equipped electrical-control/distribution base for voltage not exceeding 1000 V, Mass/kg. Select only one actual complete low-voltage distribution-board assembly with enclosure and fitted apparatus. A bare enclosure or higher-voltage board is excluded; actual circuit/voltage/configuration and provider inclusions remain required. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Potable-water pipe, supplied article (`water_pipe`)

Conditional actual pipe of one documented material/grade. Preserve polymer/metal identity and pipe geometry; fittings of a different supplied article need separate rows. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Potable-water pipe, supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Drainage pipe, supplied article (`drain_pipe`)

Conditional actual drainage pipe of one documented material and supplied form; installation offcuts and tests are retained. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Drainage pipe, supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Washbasin, supplied article (`washbasin`)

Only if in the complete supplied fit-out; purchased basin includes its actual fired/finished body once. Faucet/trap included by supplier is not independently charged; separately bought fittings require disjoint cards. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Washbasin, supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Ventilation fan assembly (`ventilation_fan`)

Conditional complete purchased fan of the actual configuration. Its motor/electronics are inherited once; installation/testing energy is collected separately. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_material; section 8 supplies the only normalisation.

- Selected flow: Ventilation fan assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `prg-timber-building`

###### Wood fire-retardant formulation, complete supply (`fire_formulation`)

Conditional actual onsite fire treatment or touch-up; retain each product TDS/SDS and actual entire formulation. No chemistry, carrier water, uptake, drying temperature or performance is assumed. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_formulation; section 8 supplies the only normalisation.

- Selected flow: Wood fire-retardant formulation, complete supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_formulation`
- Sources: `prg-timber-building`

###### Wood-preservative formulation, complete supply (`biocide_formulation`)

Conditional actual onsite biological protection. If one purchased combination formulation performs both fire and biological functions, reconcile one receipt instead of buying the same formulation twice. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_formulation; section 8 supplies the only normalisation.

- Selected flow: Wood-preservative formulation, complete supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_formulation`
- Sources: `prg-timber-building`

###### Joint-sealing sealant, complete supply (`joint_sealant`)

Conditional actual joint sealant grade; record supplied formulation including fillers/carrier and retained fraction. Emissions require independent species measurements; no silicone/PU chemistry is assumed. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_formulation; section 8 supplies the only normalisation.

- Selected flow: Joint-sealing sealant, complete supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_formulation`
- Sources: `prg-timber-building`

###### Assembly adhesive, complete supply (`assembly_adhesive`)

Conditional actual separately purchased assembly adhesive; prebonded boards are not glued upstream again. For in-house mixing add each true purchased ingredient with actual energy/losses instead of using this purchased-mixture route. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_formulation; section 8 supplies the only normalisation.

- Selected flow: Assembly adhesive, complete supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_formulation`
- Sources: `prg-timber-building`

###### Building finish coating, complete supply (`finish_coating`)

Conditional actual coating of one formulation/layer, with supplied solvent/water/solids and retained film reconciled. Each additional primer/topcoat/cleaner is a separate concrete formulation row; no default recipe or emission factor. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_formulation; section 8 supplies the only normalisation.

- Selected flow: Building finish coating, complete supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_formulation`
- Sources: `prg-timber-building`

###### Electricity at actual factory meter (`electricity`)

Meter cutting, woodworking, extraction, assembly tools, ventilation, finishing, tests and observed storage/handling with actual supply voltage, mix, region and period. The frozen Chinese LV grid candidate is not bound to Ukrainian/Estonian or other factories; no geographical exemption is made. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_utility; section 8 supplies the only normalisation.

- Selected flow: Electricity at actual factory meter
- Flow property / unit: Energy / MJ
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `prg-timber-building`; `prefabeu-factory`

###### Tap water (`supplied_water`)

Only actual purchased water for declared testing/cleanup; specify quality and delivery gate. Water within a purchased coating/board is not an extra water input; product test water retained/drained/evaporated is reconciled separately. Native treated tap-water Product describes drinking-standard water supplied at plant/to consumer with no fixed geography, Mass/kg reference plus non-reference Volume coefficient 0.001. Use only actual compatible treated supplied water at the documented delivery gate. The secondary coefficient is not an independently measured density and supplies no water/mixture conversion; use actual state-specific measurement. No Hong Kong, viscose-process or CTUe-reference water record is substituted. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_utility; section 8 supplies the only normalisation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `prg-timber-building`

###### Diesel (`diesel`)

Only actual combustion in handling/test plant; collect batch composition, mass, carbon origin and fuel gate before use. Preserve failed/start/idle work and record real exhaust species; do not infer a boiler or emission factor. Native Product is distilled/refined compression-ignition diesel at plant. Its quantitative reference selects Net calorific value/MJ, not the other Mass property: both native coefficients are 1 and neither is an empirical batch heating value or density. Its comment permits crude-oil/biomass origin and varying sulfur. Preserve actual gross physical fuel kg independently and obtain native energy MJ from measured batch quantity and its actual net heating value before the one division by Q. Never treat the coefficient 1 as MJ/kg, fossil fraction, blend or emission factor. Actual origin/grade/provider and real combustion must be evidenced. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_utility; section 8 supplies the only normalisation.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Purchased heat (`purchased_heat`)

Conditional real purchased heat; bind actual carrier/supplier convention and enthalpy ledger. This thermal-service amount is distinct from gross carrier mass and is not a second purchase if one supply bundle already includes the carrier. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_utility; section 8 supplies the only normalisation.

- Selected flow: Purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Hot-water heat carrier (`hot_water_carrier`)

Conditional actual external Product water carrier; retain gross kg, liquid state, actual T/P and enthalpy. Reconcile purchased heat and carrier once under the supplier convention; no assumed return loop. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_utility; section 8 supplies the only normalisation.

- Selected flow: Hot-water heat carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Prefabricated buildings, of wood (`returned_building`)

Only an actual external returned unit, with original serial/cohort/Qc, release state and burden vector; measure gross returned mass and condition. A returned building is not a purchased new module and never adds Q on reacceptance. The native Product is a manufactured finished predominantly wooden prefabricated building at plant with Mass/kg and no fixed SKU, construction route, dimensions, species, geography or service-life facet. This card selects only the positively evidenced complete single factory-assembled timber-frame building subset, never a board, frame-only kit, furniture or site-construction service. The native family does not approve actual structural/fire/thermal performance or provider compatibility. On return/shipment cards this is only the original complete physical article; retain original burden and condition without a virgin repurchase, new Q or duplicate additive finished output. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_service; section 8 supplies the only normalisation.

- Selected flow: Prefabricated buildings, of wood `b4ed2c82-9824-4fd6-b529-536923caef47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `prg-timber-building`

###### Polyethylene film (`pe_wrap_purchase`)

Record this actual purchase channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. Only an actual PE film with CAS 9002-88-4 and film supply form. Native Product is production mix at plant with no geographic restriction; branching/grade/additives and provider gate must match. Native CPC29220 is isolated inconsistent classification debt; basename/CAS/comment describe PE and expressly distinguish rival PET, which is excluded. Do not use for PET, unknown membrane, multilayer laminate or Waste. Only one actual PE-film Product article with CAS9002-88-4, production mix at plant, Mass/kg and no fixed geography. All native names, synonyms/comment, branching discussion and film supply form were read; PET is mentioned as a rival polymer, not the adopted composition. Exclude PET, unknown membrane, multilayer laminate and Waste. Native CPC29220 is isolated inconsistent classification debt. Actual grade/additives, condition, pool identity, full gross channel and provider gate remain required. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Polyethylene film (`pe_wrap_supplier_included`)

This is only actual disjoint supplier-included packaging I_sup, not a second purchase or an internal reuse. For each actual whole wet PE-film, wooden-skid or steel-rack pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These three specific article pools are conditional on actual configuration; the source proves wrapping/packing but no universal material, tare, repair, water uptake or mass.

Record this actual supplier-included I_sup physical channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. Only an actual PE film with CAS 9002-88-4 and film supply form. Native Product is production mix at plant with no geographic restriction; branching/grade/additives and provider gate must match. Native CPC29220 is isolated inconsistent classification debt; basename/CAS/comment describe PE and expressly distinguish rival PET, which is excluded. Do not use for PET, unknown membrane, multilayer laminate or Waste. Only one actual PE-film Product article with CAS9002-88-4, production mix at plant, Mass/kg and no fixed geography. All native names, synonyms/comment, branching discussion and film supply form were read; PET is mentioned as a rival polymer, not the adopted composition. Exclude PET, unknown membrane, multilayer laminate and Waste. Native CPC29220 is isolated inconsistent classification debt. Actual grade/additives, condition, pool identity, full gross channel and provider gate remain required. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Polyethylene film (`pe_wrap_return_received`)

Record this actual return_received channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. Only an actual PE film with CAS 9002-88-4 and film supply form. Native Product is production mix at plant with no geographic restriction; branching/grade/additives and provider gate must match. Native CPC29220 is isolated inconsistent classification debt; basename/CAS/comment describe PE and expressly distinguish rival PET, which is excluded. Do not use for PET, unknown membrane, multilayer laminate or Waste. Only one actual PE-film Product article with CAS9002-88-4, production mix at plant, Mass/kg and no fixed geography. All native names, synonyms/comment, branching discussion and film supply form were read; PET is mentioned as a rival polymer, not the adopted composition. Exclude PET, unknown membrane, multilayer laminate and Waste. Native CPC29220 is isolated inconsistent classification debt. Actual grade/additives, condition, pool identity, full gross channel and provider gate remain required. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_skid_purchase`)

Record this actual purchase channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual solid-wood skid article with fasteners already included; disclose species/treatment/moisture and reusable condition. It is packaging, not building structure or counted floor area. Native manufactured wooden pallet/load-board Product is a portable platform for mechanically handled transport/storage, Mass/kg without a fixed EURO dimension, geography, treatment or species. This card selects one actual solid-wood load platform/skid, not a collar-only item, building component or steel rack. Confirm actual construction/treatment/moisture and included fasteners; retain each gross channel and pool, not a fractional physical pallet based on environmental use share. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_skid_supplier_included`)

This is only actual disjoint supplier-included packaging I_sup, not a second purchase or an internal reuse. For each actual whole wet PE-film, wooden-skid or steel-rack pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These three specific article pools are conditional on actual configuration; the source proves wrapping/packing but no universal material, tare, repair, water uptake or mass.

Record this actual supplier-included I_sup physical channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual solid-wood skid article with fasteners already included; disclose species/treatment/moisture and reusable condition. It is packaging, not building structure or counted floor area. Native manufactured wooden pallet/load-board Product is a portable platform for mechanically handled transport/storage, Mass/kg without a fixed EURO dimension, geography, treatment or species. This card selects one actual solid-wood load platform/skid, not a collar-only item, building component or steel rack. Confirm actual construction/treatment/moisture and included fasteners; retain each gross channel and pool, not a fractional physical pallet based on environmental use share. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_skid_return_received`)

Record this actual return_received channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual solid-wood skid article with fasteners already included; disclose species/treatment/moisture and reusable condition. It is packaging, not building structure or counted floor area. Native manufactured wooden pallet/load-board Product is a portable platform for mechanically handled transport/storage, Mass/kg without a fixed EURO dimension, geography, treatment or species. This card selects one actual solid-wood load platform/skid, not a collar-only item, building component or steel rack. Confirm actual construction/treatment/moisture and included fasteners; retain each gross channel and pool, not a fractional physical pallet based on environmental use share. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Reusable steel transport rack (`steel_rack_purchase`)

Record this actual purchase channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual reusable rack with permanent fittings included. Track its unique asset ID and all gross return movements; distinguish environmental manufacture/use shares from full transported mass. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Reusable steel transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Reusable steel transport rack (`steel_rack_supplier_included`)

This is only actual disjoint supplier-included packaging I_sup, not a second purchase or an internal reuse. For each actual whole wet PE-film, wooden-skid or steel-rack pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These three specific article pools are conditional on actual configuration; the source proves wrapping/packing but no universal material, tare, repair, water uptake or mass.

Record this actual supplier-included I_sup physical channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual reusable rack with permanent fittings included. Track its unique asset ID and all gross return movements; distinguish environmental manufacture/use shares from full transported mass. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Reusable steel transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Reusable steel transport rack (`steel_rack_return_received`)

Record this actual return_received channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual reusable rack with permanent fittings included. Track its unique asset ID and all gross return movements; distinguish environmental manufacture/use shares from full transported mass. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Reusable steel transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

##### Waste flows

No universal exchange is prescribed here; any actually present exchange requires its own specific row.

##### Elementary flows

###### Water vapour in atmospheric sorption (`atmospheric_water_uptake`)

Only measured natural moisture uptake from air across the defined gate; preserve species H2O, air compartment, cohort and time. It is not purchased process water, reaction water, repair or new building output. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_species; section 8 supplies the only normalisation.

- Selected flow: Water vapour in atmospheric sorption
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources:

#### Outputs

##### Product flows

###### Returned hot-water heat carrier (`hot_water_return`)

Only actual external Product return; measure gross kg and actual liquid T/P/enthalpy and original supply contract. Neither heat allocation nor net utility consumption shrinks this physical return; no nonexistent condensate is fabricated. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_utility; section 8 supplies the only normalisation.

- Selected flow: Returned hot-water heat carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Prefabricated buildings, of wood (`finished_building`)

The only new finished reference output: first quality release of a complete configuration. Net mass includes all actually retained articles and water once, excludes packing/transport plant and has no board/furniture surrogate UUID. Released closing FG is already included; later shipment/retest does not create new manufacture. The native Product is a manufactured finished predominantly wooden prefabricated building at plant with Mass/kg and no fixed SKU, construction route, dimensions, species, geography or service-life facet. This card selects only the positively evidenced complete single factory-assembled timber-frame building subset, never a board, frame-only kit, furniture or site-construction service. The native family does not approve actual structural/fire/thermal performance or provider compatibility. On return/shipment cards this is only the original complete physical article; retain original burden and condition without a virgin repurchase, new Q or duplicate additive finished output. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_reference; section 8 supplies the only normalisation.

- Selected flow: Prefabricated buildings, of wood `b4ed2c82-9824-4fd6-b529-536923caef47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_reference`
- Sources: `prg-timber-building`

###### Prefabricated buildings, of wood (`external_building_shipment`)

Actual gross physical shipment in kg, linked to new or historical released FG. This is a service-gate-only card and cannot be emitted alongside the internal first-release transfer as another additive output of a combined foreground unit. This service-gate movement is not a second quantitative reference and is not reduced by customer returns, service allocation or inventory change; reconcile original delivered reversals separately. The native Product is a manufactured finished predominantly wooden prefabricated building at plant with Mass/kg and no fixed SKU, construction route, dimensions, species, geography or service-life facet. This card selects only the positively evidenced complete single factory-assembled timber-frame building subset, never a board, frame-only kit, furniture or site-construction service. The native family does not approve actual structural/fire/thermal performance or provider compatibility. On return/shipment cards this is only the original complete physical article; retain original burden and condition without a virgin repurchase, new Q or duplicate additive finished output. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_service; section 8 supplies the only normalisation.

- Selected flow: Prefabricated buildings, of wood `b4ed2c82-9824-4fd6-b529-536923caef47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `prg-timber-building`

###### Polyethylene film (`pe_wrap_gross_shipped`)

Record this actual gross_shipped channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. Only an actual PE film with CAS 9002-88-4 and film supply form. Native Product is production mix at plant with no geographic restriction; branching/grade/additives and provider gate must match. Native CPC29220 is isolated inconsistent classification debt; basename/CAS/comment describe PE and expressly distinguish rival PET, which is excluded. Do not use for PET, unknown membrane, multilayer laminate or Waste. Only one actual PE-film Product article with CAS9002-88-4, production mix at plant, Mass/kg and no fixed geography. All native names, synonyms/comment, branching discussion and film supply form were read; PET is mentioned as a rival polymer, not the adopted composition. Exclude PET, unknown membrane, multilayer laminate and Waste. Native CPC29220 is isolated inconsistent classification debt. Actual grade/additives, condition, pool identity, full gross channel and provider gate remain required. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Polyethylene film (`pe_wrap_external_return`)

Record this actual external_return channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. Only an actual PE film with CAS 9002-88-4 and film supply form. Native Product is production mix at plant with no geographic restriction; branching/grade/additives and provider gate must match. Native CPC29220 is isolated inconsistent classification debt; basename/CAS/comment describe PE and expressly distinguish rival PET, which is excluded. Do not use for PET, unknown membrane, multilayer laminate or Waste. Only one actual PE-film Product article with CAS9002-88-4, production mix at plant, Mass/kg and no fixed geography. All native names, synonyms/comment, branching discussion and film supply form were read; PET is mentioned as a rival polymer, not the adopted composition. Exclude PET, unknown membrane, multilayer laminate and Waste. Native CPC29220 is isolated inconsistent classification debt. Actual grade/additives, condition, pool identity, full gross channel and provider gate remain required. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_skid_gross_shipped`)

Record this actual gross_shipped channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual solid-wood skid article with fasteners already included; disclose species/treatment/moisture and reusable condition. It is packaging, not building structure or counted floor area. Native manufactured wooden pallet/load-board Product is a portable platform for mechanically handled transport/storage, Mass/kg without a fixed EURO dimension, geography, treatment or species. This card selects one actual solid-wood load platform/skid, not a collar-only item, building component or steel rack. Confirm actual construction/treatment/moisture and included fasteners; retain each gross channel and pool, not a fractional physical pallet based on environmental use share. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_skid_external_return`)

Record this actual external_return channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual solid-wood skid article with fasteners already included; disclose species/treatment/moisture and reusable condition. It is packaging, not building structure or counted floor area. Native manufactured wooden pallet/load-board Product is a portable platform for mechanically handled transport/storage, Mass/kg without a fixed EURO dimension, geography, treatment or species. This card selects one actual solid-wood load platform/skid, not a collar-only item, building component or steel rack. Confirm actual construction/treatment/moisture and included fasteners; retain each gross channel and pool, not a fractional physical pallet based on environmental use share. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Reusable steel transport rack (`steel_rack_gross_shipped`)

Record this actual gross_shipped channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual reusable rack with permanent fittings included. Track its unique asset ID and all gross return movements; distinguish environmental manufacture/use shares from full transported mass. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Reusable steel transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Reusable steel transport rack (`steel_rack_external_return`)

Record this actual external_return channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. One actual reusable rack with permanent fittings included. Track its unique asset ID and all gross return movements; distinguish environmental manufacture/use shares from full transported mass. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Reusable steel transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

##### Waste flows

###### Treated timber offcut waste (`timber_offcut_waste`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Only separately collected timber offcuts from the declared treatment state, with actual moisture, additives and destination. Do not bind untreated clean sawdust/offcut waste to treated wood or OSB mixtures. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_waste; section 8 supplies the only normalisation.

- Selected flow: Treated timber offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `prg-timber-building`

###### OSB offcut waste (`osb_offcut_waste`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Only actual separately collected resin-containing board offcuts with retained water and resin; no pure wood-waste substitution. If these enter one real mixed-waste consignment use its total once and retain nonadditive originW. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_waste; section 8 supplies the only normalisation.

- Selected flow: OSB offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `prg-timber-building`

###### Dust (`captured_dust`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

One actual separately contained extraction-dust consignment; measure actual timber/OSB/coating origins independently as nonadditive originW. It is Waste, not elementary escaped dust, and its total is not added to its component subledger. Native Dust is Waste, Mass/kg, with industrial-dust generation and capture context, no chemical/pure-wood/treatment/geographic restriction. Select the actual captured mixed woodworking-dust consignment only; retain independently measured timber/OSB/coating originW and treatment state. Do not use this Waste UUID for fugitive elementary air emissions or clean untreated-only sawdust; preserve one gross consignment and one provider. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_waste; section 8 supplies the only normalisation.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `prg-timber-building`

###### Mixed building-fabrication waste (`mixed_waste`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Only a real mixed-waste consignment with one measured gross total and one treatment provider; retain independently measured originW by material, condition and gate without inventing separate exports. Separate waste rows apply only to physically separate consignments. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_waste; section 8 supplies the only normalisation.

- Selected flow: Mixed building-fabrication waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `prg-timber-building`

###### Factory test and cleaning wastewater (`test_wastewater`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Actual separately collected wastewater at disclosed treatment gate; retain gross water plus measured dissolved/suspended substances once. COD is not a compound mass; direct waterborne emissions after onsite treatment need their own substance/media rows. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_waste; section 8 supplies the only normalisation.

- Selected flow: Factory test and cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `prg-timber-building`

###### Polyethylene film waste (`pe_wrap_waste`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Record this actual waste channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. This is the separately discarded waste state; do not copy the Product UUID. If physically in one mixed consignment, keep its packaging-origin subledger without an extra additive export. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Polyethylene film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Solid-wood transport skid waste (`wood_skid_waste`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Record this actual waste channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. This is the separately discarded waste state; do not copy the Product UUID. If physically in one mixed consignment, keep its packaging-origin subledger without an extra additive export. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Solid-wood transport skid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Reusable steel transport rack waste (`steel_rack_waste`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Record this actual waste channel independently for this packaging pool, at full gross material kg. Retain opening empty/attached-WIP/attached-FG/reusable pools, purchases, external returns received, closing pools, shipments, external returns sent and waste under cp_packaging; internal reuse cancels. No new Q, repurchase or automatic coproduct. This is the separately discarded waste state; do not copy the Product UUID. If physically in one mixed consignment, keep its packaging-origin subledger without an extra additive export. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_packaging; section 8 supplies the only normalisation.

- Selected flow: Reusable steel transport rack waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

##### Elementary flows

###### water vapour (`water_vapour_air`)

Actual measured evaporation/desorption/combustion H2O to air, with separate independently evidenced origins and gross/net convention. Do not infer water release from a dry-mass residual or assume reaction water in assembly. Native Elementary water vapour, CAS7732-18-5, is Emissions to air unspecified, Mass/kg. Use actual gaseous H2O released to this air compartment only. Do not select same-named freshwater/sea-water/soil/stratospheric/long-term or high-stack/urban records by name alone, and do not reuse this emission identity for atmospheric-resource uptake. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_species; section 8 supplies the only normalisation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-method320`

###### formaldehyde (`formaldehyde_air`)

Conditional independently measured formaldehyde CAS 50-00-0 after actual controls, including real processing/storage emissions from supplied articles. Do not infer from resin content, an emission class, total VOC or a mass residual. Native Elementary formaldehyde, CAS50-00-0, is Emissions to air unspecified with Mass/kg. Use actual measured formaldehyde only in that compartment, after real controls; it is not an input formulation, water emission, total VOC or resin-content factor. If a more specific urban/high-stack/long-term compartment is established, select and verify that exact native record separately. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_species; section 8 supplies the only normalisation.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-method320`

###### carbon dioxide (fossil) (`fossil_co2_air`)

Conditional actual CO2 CAS 124-38-9 from evidenced fossil carbon and real release route; not a total-carbon balancing plug. Biogenic CO2 and every actual other gas require their own separate carbon-origin/media rows; no assumed carbon neutrality or uptake credit. Native Elementary carbon dioxide (fossil), CAS124-38-9, is Emissions to air unspecified with Mass/kg. Use independently evidenced fossil-origin CO2 only, with actual medium and release. Biogenic CO2 is a separate identity; no neutralisation, uptake credit or residual-fit carbon is implied. More specific/long-term air media require their separately verified native record. Keep full undivided raw native-unit records and inherited stock/cohort vectors under cp_species; section 8 supplies the only normalisation.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-method320`

###### Woodworking particulate matter to air (`woodworking_pm_air`)

Use complete EPA320 only for actual identified IR-active vapor species and its real extractive heated-transport/reference-spectrum/interference/analyte-spike recovery programme. It is not total-VOC chemistry, a dust method, or FTIR measurement of homonuclear O2/N2/monatomic Ar. EPA5 supplies filterable particulate sampling/recovery/gravimetry only within its stated phase and source conditions; actual wood/OSB/mineral/coating particulate is a measured whole physical mixture, not elemental C or a fictitious pure resin. Captured dust is Waste and is separate from the actual final air release. Actual collected condensate/mist goes whole to its real receiver; final released species/medium require their own applicable procedure, not a dry-PM assertion about all phases. Do not infer actual formulation constituents or release from a generic supplier label. Actual on-site combustion needs its complete producer/fuel/air/O2/water-generation/each real species/ash/energy/control unit, not CO2 alone or a purchased-heat stub; add those specific interfaces and actual procedures before data completeness. This source set does not establish a full programme for every unidentified formulation, reacting species or condensable/other phase: a genuinely necessary unestablished procedure remains hold. Actual-site calibration/lot QA within an established applicable programme remains study qualification, not proof no method exists; finite check never approves science, performance or study results. The retained Method5 explicitly incorporates Methods1–3; the full originals are also retained here for actual duct geometry/traverse, calibrated velocity/pressure/temperature/flow and dry-gas-density procedure. Respect non-cyclonic/size/location limits rather than claiming every room or duct is covered. An actual uncontained fugitive release is not automatically represented by one duct or personal-exposure result. Method3 discloses its restricted gas matrix, interferences and unabsorbed N2/CO remainder and its argon omission: no nominal air composition/dry molecular weight, pure N2 flow or measured Ar is inferred. Method320 PDF16 prints a tracer spiked/direct fraction in Eq3 and a fraction-mixing Eq4 but labels DF>=10; preserve that actual inconsistency, not a numerical default. On a common corrected mole basis, use the actual conserved mixture fraction phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), with a nonzero denominator, representative matched samples and the stated no-unaccounted-loss mixing conditions; expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Distinguish phi from its reciprocal dilution ratio, validate actual recovery and retain failed/negative results and uncertainty. This mathematical identity supplies no source concentration, acceptance tolerance, emission factor or factory QA success. These are dated EPA Internet copies, not an assertion of current regulatory conformity.

- Selected flow: Woodworking particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `epa-method5`; `epa-method1`; `epa-method2`; `epa-method3`


### Process: Actual factory equipment fleets and service (`factory_assets`)

#### Inputs

##### Product flows

###### Timber machining line (`asset_machining_line_receipt`)

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual receipt for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Timber machining line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Timber machining line (`asset_machining_line_erin`)

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual erin for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Timber machining line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Timber machining line service (`asset_machining_line_service`)

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual service for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Timber machining line service
- Flow property / unit: Time / h
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Timber roof-truss press (`asset_truss_press_receipt`)

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual receipt for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Timber roof-truss press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Timber roof-truss press (`asset_truss_press_erin`)

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual erin for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Timber roof-truss press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Timber roof-truss press service (`asset_truss_press_service`)

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual service for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Timber roof-truss press service
- Flow property / unit: Time / h
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

#### Outputs

##### Product flows

###### Timber machining line (`asset_machining_line_eoout`)

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual eoout for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Timber machining line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Timber roof-truss press (`asset_truss_press_eoout`)

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual eoout for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Timber roof-truss press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

##### Waste flows

###### Retired whole timber machining line (`asset_machining_line_w`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual w for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Retired whole timber machining line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`

###### Retired whole timber roof-truss press (`asset_truss_press_w`)

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. Actual w for this one specific unit only; physical legs are full gross kg, while the service card is only actual compatible h with a complete provider and original cohorts.

- Selected flow: Retired whole timber roof-truss press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result V/Q for the gross physical exchange or A/Q for its separately attributed environmental layer, once; retain each native numerator and actual cohort.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `prefabeu-factory`; `ilcd-allocation-2010`


## 7. Allocation and Co-product Handling

Apply the following rules to attributional multifunctional processes only when allocation is required. Preserve the distinction between process co-products and functions of a multifunctional consumer product.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| attributional_scope | attributional systems requiring allocation | Use this hierarchy only for attributional modelling where allocation is methodologically required. Industrial manufacturer descriptions do not establish an allocation method. Do not choose freely between physical and economic allocation or substitute avoided-product credits. | ilcd-allocation-2010 |
| subdivide_first | each stage and inherited exchange | First assign dedicated operations/materials and use physical subdivision or justified virtual subdivision from exact BOMs, stage meters and product-specific records. Trace each exchange vector through raw/WIP/FG, returns, failed work and services. Reconcile all product systems to the original unallocated inventory; do not discard idle or reject burdens. | ilcd-allocation-2010 |
| exchange_causality | remaining common exchanges | For each still-common exchange identify and quantify the determining physical causality to each co-function; justify whether cutting extent, processing time, material incorporation or actual constrained capacity causes that exchange. Different exchanges can require different drivers. Whole-building mass or floor area is not an automatic universal driver. Keep actual gross physical exchanges independent of burden partitioning. | ilcd-allocation-2010 |
| residual_market | genuinely residual common process | Only after the preceding tests fail with reasons, allocate residual common-process burdens using actual contemporaneous market values at the true common-process gate and real condition/quality/packaging state. Remove subsequent product-specific transport, finishing or packaging from downstream prices. Preserve unallocated totals and sensitivity/uncertainty; use no fixed percentages. Conserve each allocation vector so all receiving product/service systems sum to its original total. Product multifunctionality/QFD is a separate problem and figure 24 is no building allocation factor. | ilcd-allocation-2010 |
| waste_no_credit | residues reuse and assets | Waste remains Waste under its actual acceptance/destination. Sale or return does not automatically create a coproduct, zero burden or credit. A real mixed-waste consignment has one measured gross Waste exchange and independently measured originW subledgers that are nonadditive, with one provider linkage. Reusable racks/trailers retain full gross physical movements; any upstream manufacture/use share is separately justified from conserved actual service history and does not shrink material movement. No hypothetical future reuse credit or infinite-cycle default is adopted. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect only undivided raw records. Their aggregation_rule names the final result basis produced by the single normalization below; it is not an instruction to divide during collection. Keep physical V distinct from environmental A: gross receipts/shipments/returns/waste/carriers/packaging are never scaled by load allocation, inventory change or service/asset-use shares. Select one physical boundary layer and reconcile its environmental burden vector without inventing a second purchase.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | building_manufacture | complete first-release reference | foreground_record | serial ID; configuration; first release timestamp; acceptance result; gross scale mass; tare; net release kg; calibration; uncertainty; disjoint BOM; geometry; floor area convention; actual moisture; original_Q0; unique_first_acceptance_ID; original_configuration_water_basis; net_remaining_delivery; all_onsite_accepted_states; irreversible_loss; terminal_disposition; | Weigh each complete configured building on calibrated whole-unit scales and independently determine packaging/transport tare; or reconcile independently weighed disjoint components actually incorporated with moisture/retained-formulation checks and propagated uncertainty. Verify complete assembly and first acceptance once; retain raw masses and IDs without dividing.  Q0 is independently fixed from unique first quality-release events for complete same-configuration buildings after every required factory operation and test, ready for the declared factory supply gate. It includes all actual retained articles and water at release and excludes transport packaging/trailer tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result.| kg | every release and stock cut | whole manufacturing cohort and first-release event register | one factory and one declared complete configuration | per 1 kg reference flow | calibration/tare records; drawings; complete item checklist; signed tests; uncertainty |
| cp_material | building_manufacture | actual article/material receipts and use | foreground_record | each row ID; supplier; native unit; batch; actual gross receipts; raw/WIP/FG opening and closing; external returns; cuts; rejected articles; wet/dry mass; independent composition; inherited exchange vector | Record individual delivery tickets and calibrated weighing with complete supplier article/formulation inclusions. Reconcile supplied whole-article wet mass to nonadditive BOM subledgers; log stock and failed-work movements by stage. Retain undivided raw numerator and independent physical mass closure; record only measured conversions. | kg; actual article native unit | every receipt/use/return and stock cut | full cohort including failed and zero-output periods | receiving through first release plus identified real service additions | per 1 kg reference flow | supplier originals; scales; state/grade/moisture records; disjoint BOM; stock ledger |
| cp_formulation | building_manufacture | actual treatment adhesive and coating | foreground_record | supplier product/lot; complete formulation kg; TDS/SDS; solids; carrier water; individual volatile species; actual mixed ingredients; treated area; retained mass; waste; stocks; drying/cleanup/failed work; inherited vectors | Weigh the whole purchased formulation once. Keep assay/carrier/solids as nonadditive analysis, independent retained-film/water and measured emission/waste evidence. Where genuinely mixed onsite, weigh each separately purchased ingredient and actual energy/loss rather than also charging an imaginary purchased mixture. Retain unnormalised records. | kg | each lot and operation | actual treatment/finish horizon including failures and cleanup | actual factory work; supplier-contained treatment remains upstream | per 1 kg reference flow | TDS/SDS; weighing; actual retained fraction; species tests; independently closed water/carbon |
| cp_utility | building_manufacture | each utility/fuel/heat carrier | foreground_record | row ID; meter start/end; original units; actual rate/integrated flag; time; voltage; supply mix; geography; fuel batch/density/heating value; carrier kg/phase/T/P/enthalpy; supplier returns convention; run/idle/test/cleanup codes | Retain actual meter/tank/scale readings before conversion, attribution and normalisation. Distinguish actual electric/fuel/heat supply; do not invent steam or combustion. Keep supplier heat+carrier purchase reconciliation and each gross external return, including rejected tests and zero-output work. | original unit; kg; MJ; actual state units | continuous/event readings and cohort cuts | manufacture plus only actually observed H services | actual meter/service gates with nonoverlapping upstream combustion boundary | per 1 kg reference flow | meter calibration; invoices; state-specific density/enthalpy; fuel analysis; stage time log |
| cp_waste | building_manufacture | each actual waste consignment | foreground_record | consignment ID; origin stage/row; gross kg; waste classification; treatment state; destination/provider; wet mass/water; independent originW fractions; route; refusal/return; stock changes; burden vector; whole_Qt; nested_substrate_retained_matter_water; original_Q0_Qc; disjoint_compatible_service_A; | Weigh each real consignment once at its gate and preserve independent measured originW subaccounts without invented separate exports. One mixed total or its genuinely disjoint consignments enters the physical LCI once with one provider link; returned/refused wastes stay in the ledger.  One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.| kg | each transfer and stock cut | all production/service failures and actual disposal transfers | actual waste/control outlet and treatment gates | per 1 kg reference flow | weighbridge; manifests; independent composition/moisture; provider receipt |
| cp_species | building_manufacture | each actual species and medium | foreground_record | actual substance/CAS; phase; air/water medium; gross/net convention; sample/time; concentration; actual integrated volume or rate; T/P/humidity; control outlet; biogenic/fossil origin; independent sorption/moisture; detection limits; applicable_complete_method; actual_phase_preservation_matrix; analyte_spike_recovery; unknown_essential_procedure_status; | Use real species-resolved measurements and matched flow/time/state records; separate each substance/medium and carbon origin. Natural H2O uptake/desorption is measured independently. For any real combustion/air throughput, separately measure N2/O2/Ar/H2O and each actual reaction/exhaust species in and out using explicit gross/net scope before complete closure; no assumed air composition or residual-fit species. Indicators remain nonadditive observations.  Use complete EPA320 only for actual identified IR-active vapor species and its real extractive heated-transport/reference-spectrum/interference/analyte-spike recovery programme. It is not total-VOC chemistry, a dust method, or FTIR measurement of homonuclear O2/N2/monatomic Ar. EPA5 supplies filterable particulate sampling/recovery/gravimetry only within its stated phase and source conditions; actual wood/OSB/mineral/coating particulate is a measured whole physical mixture, not elemental C or a fictitious pure resin. Captured dust is Waste and is separate from the actual final air release. Actual collected condensate/mist goes whole to its real receiver; final released species/medium require their own applicable procedure, not a dry-PM assertion about all phases. Do not infer actual formulation constituents or release from a generic supplier label. Actual on-site combustion needs its complete producer/fuel/air/O2/water-generation/each real species/ash/energy/control unit, not CO2 alone or a purchased-heat stub; add those specific interfaces and actual procedures before data completeness. This source set does not establish a full programme for every unidentified formulation, reacting species or condensable/other phase: a genuinely necessary unestablished procedure remains hold. Actual-site calibration/lot QA within an established applicable programme remains study qualification, not proof no method exists; finite check never approves science, performance or study results. The retained Method5 explicitly incorporates Methods1–3; the full originals are also retained here for actual duct geometry/traverse, calibrated velocity/pressure/temperature/flow and dry-gas-density procedure. Respect non-cyclonic/size/location limits rather than claiming every room or duct is covered. An actual uncontained fugitive release is not automatically represented by one duct or personal-exposure result. Method3 discloses its restricted gas matrix, interferences and unabsorbed N2/CO remainder and its argon omission: no nominal air composition/dry molecular weight, pure N2 flow or measured Ar is inferred. Method320 PDF16 prints a tracer spiked/direct fraction in Eq3 and a fraction-mixing Eq4 but labels DF>=10; preserve that actual inconsistency, not a numerical default. On a common corrected mole basis, use the actual conserved mixture fraction phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), with a nonzero denominator, representative matched samples and the stated no-unaccounted-loss mixing conditions; expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Distinguish phi from its reciprocal dilution ratio, validate actual recovery and retain failed/negative results and uncertainty. This mathematical identity supplies no source concentration, acceptance tolerance, emission factor or factory QA success. These are dated EPA Internet copies, not an assertion of current regulatory conformity.| kg | actual operation and matched sampling | all actual production/service release periods | declared compartments and real control outlets | per 1 kg reference flow | laboratory originals; sampling method; calibration; limits/uncertainty; independent element balance |
| cp_packaging | building_manufacture | each packaging pool and gross channel | foreground_record | package/asset ID; specific material/article; empty opening; attached-WIP opening; attached-FG opening; reusable opening; purchases P; external-return-received ER; internalreuse R_internal; corresponding closing pools; gross shipments S; external returns EO; waste W; actual native kg; original cohort; originW; use-history vectors; supplier_included I_sup; actual J_in J_out; disjoint H2O_in H2O_out; X_in X_out same-side overlap evidence; original_Q0_Qc; whole_receiver_Qt; separate_compatible_service_A; | Weigh actual package articles and each gross crossing by material. Reconcile every opening/closing pool including attached WIP/FG and reusable assets. Match exact internal reuse on both sides once. Observe every present purchase/return/shipment/waste channel; no shipping-material multiplication by an environmental allocation or asset-use share.  For each actual whole wet PE-film, wooden-skid or steel-rack pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These three specific article pools are conditional on actual configuration; the source proves wrapping/packing but no universal material, tare, repair, water uptake or mass.| kg | each package movement and stock cut | actual packing and observed H services | separate packaging gate; excluded from net building Q | per 1 kg reference flow | weighing; purchase and return tickets; attached-stock counts; asset history; consignment receipts |
| cp_service | building_manufacture | released FG and actual later services | foreground_record | original serial/cohort/Qc; original delivery and burden; opening/closing FG; gross S/ER/EO; retained added component mass; actual incremental energy/rework; removed parts/waste; moisture; service date; observed H; historical exchange vectors | Trace actual gross movements, original deliveries/reversals and real incremental work to the original released cohort. Retain original burden and physical state through opening/closing FG; no new production on dispatch/reacceptance. Keep storage/handling/packing even when Qcurrent is zero. Stop observations at H; unknown future work is not invented. | kg | each service/movement and cutoff H | actual observed horizon linked to original cohort Qc | released FG service gate; all real rejected/unauthorised movements retained | per 1 kg reference flow | original cohort ledger; service tickets; weighing; stock and incremental burden reconciliation |
| cp_assets | factory_assets | actual whole unit and observed service | foreground_record | unit_id; configuration; whole_M_kg; physical_O_C; receipt; ERin; EOout; whole_retirement_Qt; repair_fluid_subledgers; actual_h; original_Q0_Qc; inherited_history; provider_units; unused_capacity; X_overlap | Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. | kg; h | Each actual event and reporting close | Actual original-cohort observed H | Actual complete machine and matched provider boundary | per 1 kg reference flow | Actual whole-unit records; calibrated M; conserved fleet; actual hours and complete provider/history nonoverlap |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | all non-reference rows | For Q>0, reported physical exchange = V/Q and reported environmental exchange = A/Q. For service records Q means the original released cohort Qc, separately for each original configuration and cohort, not current output. V is the actual gross native-unit boundary amount for that row and cohort; A is the converted and actually attributed raw exchange burden vector after inherited stock conservation. Choose one represented layer per exchange, not both as extra purchases. This is the only division; cards and protocol aggregation refer to its result and never divide again. Q=0 retains all true V/A and stock vectors without a per-unit result. | V; A; Q; cp_reference | reported exchange |  |
| manufacturing_closure | manufacturing physical gate | For each actual wet material and relevant conserved element: O_raw+O_WIP+O_nonWIP+I_phys+ER_pre+U_air+H2O_in=C_raw+C_WIP+C_nonWIP+T_accept+W_man+E_man+EO_pre+T_other+H2O_out. Each term is actual and disjoint; I_phys contains whole supplied material and carrier water once, and separate H2O terms exclude water already included in another whole leg or release. For an actually reactive species i add independently established G_i on the input side and C_i on the output side; do not add chemical creation to total mass/elements or fit one residual to unknown water/species. T_accept is an actual internal physical handover, never another external output or a closure-defined Q0. Packaging and fleets have separate gates. T_other consists only of named actual atomic transfers. X only deduplicates independently identified OTHER same-side flow terms, not stocks, true increments or opposite movements. | cp_material; cp_formulation; cp_reference; cp_waste; cp_species | manufacturing closure residual |  |
| fg_service_closure | released FG service gate | O_FG+T_accept+ER_FG+I_incremental+J_in+H2O_in=C_FG+S_gross+EO_FG+W_FG+E_FG+J_out+H2O_out at actual wet state. I_incremental is the FULL actual additional supplied matter, including real carrier water, not only the part retained in C; its retained part, whole waste and release are independently reconciled. J/water terms are actual additional disjoint transfers absent from other whole legs; sorption/desorption is real water movement, not repair. Preserve all failed/refused gross movements, complete C and original burdens. For truly reactive species keep G_i/C_i independently; inherited environmental vectors are a separate account, not conserved physical molecule amounts. | cp_service; cp_reference; cp_species; cp_waste | FG service closure residual |  |
| combined_closure | manufacturing plus FG service | Add the actual manufacturing and FG-service physical equations and cancel one matching internal T_accept only. Retain every opening/closing raw/WIP/non-WIP/FG/return state, actual gross external shipment/return, full new matter, waste, release and disjoint water movement. Q0 remains an independently fixed reference-event account; do not add Q0 plus external shipment as two physical products. Every inherited environmental exchange follows its original cohort and actual handovers separately, once; provider embedded history and own foreground history remain disjoint. | cp_material; cp_reference; cp_service | combined closure residual |  |
| pack_pool | each packaging pool | For each actual whole wet PE-film, wooden-skid or steel-rack pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These three specific article pools are conditional on actual configuration; the source proves wrapping/packing but no universal material, tare, repair, water uptake or mass. | cp_packaging; cp_waste; cp_service | packaging pool residual |  |
| inheritance | each environmental exchange vector | For each exchange and stock/cohort ID conserve opening inherited burden plus real incoming/added burden equals closing inherited burden plus burden actually transferred to first-release products, external returns, real other systems and wastes. Keep all attempt/idle/cleanup/rework loads and explain their actual causal attribution. Q=0 loads remain measured and retained. For observed post-release services report real additional A_service/Qc once with the original cohort, separate from its existing production burden. No fictional fixed inventory share, disappearing old burden or new output on reacceptance. | cp_material; cp_service; cp_reference | conserved burden vectors | ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows and reference | Confirm physical chemistry/article, supply state, process/grade/geography, every native property, exact reference unit chain and provider compatibility; no core surrogate. Unresolved auxiliary identity remains a specific named row and a disclosed provider/quantity gap. | full native originals and candidate membership; supplier TDS/BOM; exact support rows |
| dq_mass | Q and all stock vectors | Independent calibrated physical measurements, disjoint supplied articles, moisture and true uncertainty; no empirical factory masses or recipe/default yields asserted by this PCR. | scale certificates; raw measurements; released-ID register; stock/element closures |
| dq_completeness | actual manufacturing and service horizon | Full attempted manufacture, failed batches, Q0, start/stop, idle, inspection, cleaning, rework, gross returns and all present unlisted atomic flows; keep independently measured wastewater/gas/waste species and nonadditive indicators. | stage logs; meters; originW; species tests; service records; missingness ledger |
| dq_sources | all methodological evidence | Manufacturer pages identify route and competing delivery formats only; no same-SKU or universal numerical transfer. ILCD applies to attributional multifunctional processes as scoped, not manufacturing recipes. Retain original context and counterexamples and all unknowns; measurement and projection checks do not provide science/translation review. | primary full originals and source-specific applicability assessment; independent review |
| dq_actual_method | actual necessary species/phase/matrix | Use complete EPA320 only for actual identified IR-active vapor species and its real extractive heated-transport/reference-spectrum/interference/analyte-spike recovery programme. It is not total-VOC chemistry, a dust method, or FTIR measurement of homonuclear O2/N2/monatomic Ar. EPA5 supplies filterable particulate sampling/recovery/gravimetry only within its stated phase and source conditions; actual wood/OSB/mineral/coating particulate is a measured whole physical mixture, not elemental C or a fictitious pure resin. Captured dust is Waste and is separate from the actual final air release. Actual collected condensate/mist goes whole to its real receiver; final released species/medium require their own applicable procedure, not a dry-PM assertion about all phases. Do not infer actual formulation constituents or release from a generic supplier label. Actual on-site combustion needs its complete producer/fuel/air/O2/water-generation/each real species/ash/energy/control unit, not CO2 alone or a purchased-heat stub; add those specific interfaces and actual procedures before data completeness. This source set does not establish a full programme for every unidentified formulation, reacting species or condensable/other phase: a genuinely necessary unestablished procedure remains hold. Actual-site calibration/lot QA within an established applicable programme remains study qualification, not proof no method exists; finite check never approves science, performance or study results. The retained Method5 explicitly incorporates Methods1–3; the full originals are also retained here for actual duct geometry/traverse, calibrated velocity/pressure/temperature/flow and dry-gas-density procedure. Respect non-cyclonic/size/location limits rather than claiming every room or duct is covered. An actual uncontained fugitive release is not automatically represented by one duct or personal-exposure result. Method3 discloses its restricted gas matrix, interferences and unabsorbed N2/CO remainder and its argon omission: no nominal air composition/dry molecular weight, pure N2 flow or measured Ar is inferred. Method320 PDF16 prints a tracer spiked/direct fraction in Eq3 and a fraction-mixing Eq4 but labels DF>=10; preserve that actual inconsistency, not a numerical default. On a common corrected mole basis, use the actual conserved mixture fraction phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), with a nonzero denominator, representative matched samples and the stated no-unaccounted-loss mixing conditions; expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Distinguish phi from its reciprocal dilution ratio, validate actual recovery and retain failed/negative results and uncertainty. This mathematical identity supplies no source concentration, acceptance tolerance, emission factor or factory QA success. These are dated EPA Internet copies, not an assertion of current regulatory conformity. | Complete primary programme/actual applicability and recovery; specific unknown procedure hold separate from unperformed ordinary study QA |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference and completion schedule | Verify one complete building and one unique first-release finished row consistent across both languages; compare actual supply configuration against all exclusions. A whole-building Product identity needs positive family/route/state evidence and its exact support chain. Missing core identity or unverified native denominator prevents a complete guidance-ready dataset; do not substitute a board, door or furniture identity. | unsd-cpc3-buildings; prg-timber-building |
| validate_quantity | every raw and reported exchange | Check calibrated net release masses, first-release IDs, disjoint whole/component BOM, conversion states, one A/Q division, Q=0 preservation and original-Qc service attribution. Independently close manufacturing, released FG and combined wet mass, each relevant element and each packaging pool. Do not repair discrepancies with default loss, density, emission, uptake or one residual for multiple unknowns. | ilcd-allocation-2010 |
| validate_native | every database binding | Check all native basenames, synonyms/comments, CAS, grade, treatment/route/form, geography, media/type and every property. Preserve reference property and exact support versions and actual unit. Expose isolated classification debt separately from a contradictory chemical/material/route facet. Manufacturer examples do not make a geographically restricted electricity/water provider globally applicable. Generic auxiliary/provider uncertainty is explicit and is not by itself a whole-building core gap. |  |
| validate_completeness | actual activity and findings | Record measured presence, demonstrated absence and unknown separately for each atomic flow. Authorisation or acceptance failure never deletes actual inputs, releases, waste, returned articles or repair burden. Screen every additional ingredient/article, utility, fuel, gas species, package, maintenance item and waste destination before claiming complete coverage. Keep source limitations, unresolved identities, temporal/geographical representativeness, measurement and allocation uncertainty visible. | prg-timber-building; prefabeu-factory; ilcd-allocation-2010 |

### Complete applicability and accounting context

This PCR covers one terminal product: a complete single transportable timber-frame building assembled and first quality-released inside the factory. The building includes its floor, load-bearing timber frame, insulated walls and roof, weather enclosure, doors/windows and the interior finish and fixed services specified in its unique supply configuration. It is not a wall panel, a stack of CLT boards, furniture or a building-site service. Progressive House format 02 provides positive evidence of a whole timber-frame house assembled at the factory; its other formats supply separate elements or leave finishing to the partner. PrefabEU independently documents cutting, frame/sheathing manufacture, insulation, sealing, fit-out and weather wrapping while also offering separate elements. These are transparent technical synthesis sources, not one SKU, one factory or a common bill of materials. [prg-timber-building; prefabeu-factory.]

CPC 3.0 class 3870 includes assembled and unassembled buildings and incomplete buildings with their essential character; subclass 38701 requires predominantly wooden buildings. This selected methodology covers a narrower complete factory-assembled terminal, not every classified product. Exclude bare structural kits, separate wall/floor/roof elements, multi-module site-completed buildings, steel/concrete-dominant buildings, foundations, site craning/connection/commissioning and use/end-of-life. A trailer used only for delivery is a separately accounted transport asset; a permanently supplied road chassis changes the declared configuration and requires its own article and asset reconciliation. No density, dimensions, storey height, component mass, yield, recipe, heat-transfer value, certification, emission factor or life is prescribed. [unsd-cpc3-buildings.]

Declare every qualifier in the concrete package. This is a manufacturing mass declared unit, not a square-metre/year functional equivalence. The native Product is a manufactured predominantly wooden prefabricated building at plant with Mass/kg. Its whole-product name, descriptive comment and finished manufacturing state positively support the qualified complete factory-assembled subset; no native fixed grade, dimensions, geography or incompatible route is overridden. Its physical identity does not establish a matching factory/background provider or scientific approval. Establish predominantly wooden construction from the actual whole-building material/construction schedule and the classification context; a timber-frame label alone cannot override contrary whole-product material facts. No fixed wood mass/volume percentage is invented.

Stage-code receiving/cutting, timber-joint/frame manufacture, sheathing/insulation/membranes, complete-unit assembly, configured fit-out/services, finishing/sealing/testing, first release and observed storage/packing/dispatch separately inside this one foreground unit. Keep unallocated raw stage totals and every inherited stock vector. Conditional cards are measured if present; demonstrated absence is not_applicable; unknown is pending. Add any actual unlisted atomic exchange before complete data delivery; do not hide it in zero, other or a collection label. No factory quantity is invented.

Apply the following rules to attributional multifunctional processes only when allocation is required. Preserve the distinction between process co-products and functions of a multifunctional consumer product.

Protocols collect only undivided raw records. Their aggregation_rule names the final result basis produced by the single normalization below; it is not an instruction to divide during collection. Keep physical V distinct from environmental A: gross receipts/shipments/returns/waste/carriers/packaging are never scaled by load allocation, inventory change or service/asset-use shares. Select one physical boundary layer and reconcile its environmental burden vector without inventing a second purchase.

Q is the sum of individually traceable complete buildings first quality-released in the cohort, at their measured net release mass. Use cp_reference: calibrated whole-unit weighing with tare subtraction or independently weighed disjoint supplied-item reconciliation with uncertainty. Include actual retained components and water once. Exclude packaging, transport trailer, rejected units and internal modules. Count only the first release; neither dispatch nor reinspection creates production.

The selected manufactured wooden-prefabricated-building Product has a verified Mass/kg reference chain. Its broad family is narrowed to the complete single-unit configuration throughout the reference and finished-row description. Recheck the complete native reference-property → exact unit-group → reference-unit chain for any future alternative binding. If native Count or Area is selected, preserve that native property and derive any kg bridge from the same complete configuration measured under cp_reference. Item(s) and item are the same count with factor 1; they give no kg per building. Never infer mass or density from a secondary property coefficient.

Survey floor area from the actual floor plan: identify each storey, single counted horizontal floor face, exclusions, openings and perimeter convention. Do not substitute bounding-box area, façade area, double-sided board area or an invented storey height. For sheet or timber conversions use actual thickness/net geometry and independently measured matched-state mass/density; do not assume timber density or count-to-mass factors.

Collect dry-basis wood moisture u=(wet-oven_dry)/oven_dry separately for each species/stock state, and wet-basis fraction w=(wet-oven_dry)/wet; convert percentages to fractions. No numeric moisture is prescribed. Retained whole-article water and subcomponents are nonadditive subledgers. Track atmospheric sorption/desorption separately; it is not repair. Independently measure biogenic/fossil C and actual chemical species. Free water, structural water and any evidenced reaction water are distinct; one residual cannot fit two unknowns.

Retain original readings and conversions before attribution: kWh×3.6 gives MJ; fuel uses actual mass or measured volume/density and batch heating value. Integrate a genuine rate over its recorded time; an already integrated volume is not multiplied by time again. Gas volume requires actual species/state/T/P and moisture convention. Density is independently measured for that material and state, never borrowed from water. Purchased heat/steam is not implied by an electrical workshop.

For Q>0, reported physical exchange = V/Q and reported environmental exchange = A/Q. For service records Q means the original released cohort Qc, separately for each original configuration and cohort, not current output. V is the actual gross native-unit boundary amount for that row and cohort; A is the converted and actually attributed raw exchange burden vector after inherited stock conservation. Choose one represented layer per exchange, not both as extra purchases. This is the only division; cards and protocol aggregation refer to its result and never divide again. Q=0 retains all true V/A and stock vectors without a per-unit result.

For each actual wet material and relevant conserved element: O_raw+O_WIP+O_nonWIP+I_phys+ER_pre+U_air+H2O_in=C_raw+C_WIP+C_nonWIP+T_accept+W_man+E_man+EO_pre+T_other+H2O_out. Each term is actual and disjoint; I_phys contains whole supplied material and carrier water once, and separate H2O terms exclude water already included in another whole leg or release. For an actually reactive species i add independently established G_i on the input side and C_i on the output side; do not add chemical creation to total mass/elements or fit one residual to unknown water/species. T_accept is an actual internal physical handover, never another external output or a closure-defined Q0. Packaging and fleets have separate gates. T_other consists only of named actual atomic transfers. X only deduplicates independently identified OTHER same-side flow terms, not stocks, true increments or opposite movements.

O_FG+T_accept+ER_FG+I_incremental+J_in+H2O_in=C_FG+S_gross+EO_FG+W_FG+E_FG+J_out+H2O_out at actual wet state. I_incremental is the FULL actual additional supplied matter, including real carrier water, not only the part retained in C; its retained part, whole waste and release are independently reconciled. J/water terms are actual additional disjoint transfers absent from other whole legs; sorption/desorption is real water movement, not repair. Preserve all failed/refused gross movements, complete C and original burdens. For truly reactive species keep G_i/C_i independently; inherited environmental vectors are a separate account, not conserved physical molecule amounts.

Add the actual manufacturing and FG-service physical equations and cancel one matching internal T_accept only. Retain every opening/closing raw/WIP/non-WIP/FG/return state, actual gross external shipment/return, full new matter, waste, release and disjoint water movement. Q0 remains an independently fixed reference-event account; do not add Q0 plus external shipment as two physical products. Every inherited environmental exchange follows its original cohort and actual handovers separately, once; provider embedded history and own foreground history remain disjoint.

For each actual whole wet PE-film, wooden-skid or steel-rack pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These three specific article pools are conditional on actual configuration; the source proves wrapping/packing but no universal material, tare, repair, water uptake or mass.

For each exchange and stock/cohort ID conserve opening inherited burden plus real incoming/added burden equals closing inherited burden plus burden actually transferred to first-release products, external returns, real other systems and wastes. Keep all attempt/idle/cleanup/rework loads and explain their actual causal attribution. Q=0 loads remain measured and retained. For observed post-release services report real additional A_service/Qc once with the original cohort, separate from its existing production burden. No fictional fixed inventory share, disappearing old burden or new output on reacceptance.

Q0 is independently fixed from unique first quality-release events for complete same-configuration buildings after every required factory operation and test, ready for the declared factory supply gate. It includes all actual retained articles and water at release and excludes transport packaging/trailer tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result.

Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged.

T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted.

For each actual whole wet PE-film, wooden-skid or steel-rack pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These three specific article pools are conditional on actual configuration; the source proves wrapping/packing but no universal material, tare, repair, water uptake or mass.

One actual contaminated film, skid, rack, machine, filter, mixed dust, rejected building part or liquid consignment has one whole receiver event Qt containing substrate/article, retained wood/OSB/mineral/coating matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Every actual cutting/machining line, truss press, tool, extraction/handling unit and reusable rack keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. The PrefabEU named machinery illustrates actual industrial operations, not mandatory equipment at the PRG plant or a shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping.

USDA FPL2021 Chapters4/13 provide an actual wood-moisture programme: representative matched-state specimens, immediate weighing or moisture-protected storage, oven drying to constant mass and the stated dry-mass convention, plus electrical-meter calibration/species/temperature/depth/gradient limitations. Use u=(wet-dry)/dry and w=(wet-dry)/wet on actual compatible specimens, converting percentages to fractions; w=u/(1+u). The source warns that volatile extractives can make oven loss exceed true water. Do not equate whole coated/resin-containing/treated article loss with H2O or apply a timber meter to a complete house. Keep gypsum structural water, membrane/coating carriers, free/bound wood water and actual atmospheric sorption distinct. Whole supplied wet mass remains independently weighed even if a water subdivision is unresolved. An actually necessary untreated/treated-matrix or water-phase procedure not established remains a specific method hold; routine actual calibration/sampling/recovery of an established applicable programme is an unperformed study obligation. No climate EMC, density, moisture target, drying time, empirical range or source numerical performance becomes a PCR default. The retained handbook text is the procedure source here; its references to ASTM D4442/D4444 do not mean those complete standards were acquired or that ASTM conformity is claimed.

Use complete EPA320 only for actual identified IR-active vapor species and its real extractive heated-transport/reference-spectrum/interference/analyte-spike recovery programme. It is not total-VOC chemistry, a dust method, or FTIR measurement of homonuclear O2/N2/monatomic Ar. EPA5 supplies filterable particulate sampling/recovery/gravimetry only within its stated phase and source conditions; actual wood/OSB/mineral/coating particulate is a measured whole physical mixture, not elemental C or a fictitious pure resin. Captured dust is Waste and is separate from the actual final air release. Actual collected condensate/mist goes whole to its real receiver; final released species/medium require their own applicable procedure, not a dry-PM assertion about all phases. Do not infer actual formulation constituents or release from a generic supplier label. Actual on-site combustion needs its complete producer/fuel/air/O2/water-generation/each real species/ash/energy/control unit, not CO2 alone or a purchased-heat stub; add those specific interfaces and actual procedures before data completeness. This source set does not establish a full programme for every unidentified formulation, reacting species or condensable/other phase: a genuinely necessary unestablished procedure remains hold. Actual-site calibration/lot QA within an established applicable programme remains study qualification, not proof no method exists; finite check never approves science, performance or study results. The retained Method5 explicitly incorporates Methods1–3; the full originals are also retained here for actual duct geometry/traverse, calibrated velocity/pressure/temperature/flow and dry-gas-density procedure. Respect non-cyclonic/size/location limits rather than claiming every room or duct is covered. An actual uncontained fugitive release is not automatically represented by one duct or personal-exposure result. Method3 discloses its restricted gas matrix, interferences and unabsorbed N2/CO remainder and its argon omission: no nominal air composition/dry molecular weight, pure N2 flow or measured Ar is inferred. Method320 PDF16 prints a tracer spiked/direct fraction in Eq3 and a fraction-mixing Eq4 but labels DF>=10; preserve that actual inconsistency, not a numerical default. On a common corrected mole basis, use the actual conserved mixture fraction phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), with a nonzero denominator, representative matched samples and the stated no-unaccounted-loss mixing conditions; expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Distinguish phi from its reciprocal dilution ratio, validate actual recovery and retain failed/negative results and uncertainty. This mathematical identity supplies no source concentration, acceptance tolerance, emission factor or factory QA success. These are dated EPA Internet copies, not an assertion of current regulatory conformity.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after complete foreground and upstream evidence |
| downstream_use | Declared-configuration factory manufacture of a complete timber-frame building; link separately to transport/site/whole-life studies |
| allowed_use | Only compatible complete supply state, native basis and verified provider/region/time; disclose observed H |
| excluded_use | Generic installed-building equivalence; bare kits/panels; furniture; lifetime/thermal/carbon-neutrality claims; automatic credits |
| required_metadata | All reference qualifiers; full bill of supply; Q/cohort/stock/service definitions; actual geography/time; upstream gates; native identity and measurement chain |
| required_quality_disclosure | Missing core/auxiliary identities and providers; unknown future services; physical/element residuals; allocation and measurement uncertainty; source limits and review state |
| update_trigger | Changed terminal completeness, material/treatment/assembly route, configuration, supply gate, reference property, provider/region/time or observed-service horizon |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-buildings | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; 30 June 2025; page 195 | Original assembled/unassembled/incomplete building scope and predominantly wooden subclass; no manufacturing prescription or mapping approval |
| prg-timber-building | literature | https://prg-house.com/en/frame-house/; complete manufacturer HTML; manufacturing stages and formats 01–04 | Main complete-building factory route and whole-house format 02; wall diagrams and adjacent alternative supply formats; no adopted numerical density/thickness/time/performance/lifetime |
| prefabeu-factory | literature | https://www.prefabeu.com/production/; complete manufacturer HTML; factory line and separate element/module supply | Independent cutting/framing/sheathing/insulation/sealing/fit-out/wrapping route context and site-assembly distinction; not a common SKU or factory dataset |
| ilcd-allocation-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; first edition March 2010; sections 7.9.2–7.9.3; PDF pages 275–292 | Attributional cases requiring allocation: subdivision/virtual subdivision then exchange-specific determining physical causality then residual actual-condition common-gate market value; conservation and counterexamples; no industrial recipe or numeric transfer |
| usda-wood-moisture-2021 | official_guidance | USDA ForestProductsLaboratory,WoodHandbookFPL-GTR-282,2021,Chapters4/13; complete original and actual bounded moisture context. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | USDA FPL2021 Chapters4/13 provide an actual wood-moisture programme: representative matched-state specimens, immediate weighing or moisture-protected storage, oven drying to constant mass and the stated dry-mass convention, plus electrical-meter calibration/species/temperature/depth/gradient limitations. Use u=(wet-dry)/dry and w=(wet-dry)/wet on actual compatible specimens, converting percentages to fractions; w=u/(1+u). The source warns that volatile extractives can make oven loss exceed true water. Do not equate whole coated/resin-containing/treated article loss with H2O or apply a timber meter to a complete house. Keep gypsum structural water, membrane/coating carriers, free/bound wood water and actual atmospheric sorption distinct. Whole supplied wet mass remains independently weighed even if a water subdivision is unresolved. An actually necessary untreated/treated-matrix or water-phase procedure not established remains a specific method hold; routine actual calibration/sampling/recovery of an established applicable programme is an unperformed study obligation. No climate EMC, density, moisture target, drying time, empirical range or source numerical performance becomes a PCR default. The retained handbook text is the procedure source here; its references to ASTM D4442/D4444 do not mean those complete standards were acquired or that ASTM conformity is claimed. |
| epa-method320 | official_guidance | US EPA Method320,14January2019 internetcopy; complete method and Protocol. https://www.epa.gov/sites/default/files/2019-06/documents/method_320.pdf | Actual IR-active vapor programme and explicit species/matrix/recovery/phase limitations; no transferable emission factor. |
| epa-method5 | official_guidance | US EPA Method5,2August2017 internetcopy; complete original. https://www.epa.gov/sites/default/files/2017-08/documents/method_5.pdf | Actual filterable particulate programme; separate whole physical mixture from elemental/condensable/wet-mist claims. |
| epa-method1 | official_guidance | US EPA Method1,28April2020 Internetcopy,complete original. https://www.epa.gov/sites/production/files/2017-08/documents/method_1_3.pdf | Actual duct geometry, site/traverse/cyclonic restrictions and representativeness; no factory dimensions or universally valid sampling location. |
| epa-method2 | official_guidance | US EPA Method2,2August2017 Internetcopy,complete original. https://www.epa.gov/sites/default/files/2017-08/documents/method_2.pdf | Actual calibrated pitot/velocity/state/density and flow programme within its scope; no nominal gas density, air recipe or volumetric default. |
| epa-method3 | official_guidance | US EPA Method3,3August2017 Internetcopy,complete original. https://www.epa.gov/sites/default/files/2017-08/documents/method_3.pdf | Actual stated dry-gas molecular-weight programme, interferences/remainder and argon-omission counterevidence; not chemical-species conservation or measured Ar. |
