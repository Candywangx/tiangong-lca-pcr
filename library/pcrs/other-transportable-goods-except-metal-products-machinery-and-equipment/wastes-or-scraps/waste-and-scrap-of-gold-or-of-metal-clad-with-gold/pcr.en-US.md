---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-gold-or-of-metal-clad-with-gold
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Source-segregated gold-alloy jewellery stamping offcuts for refining

## 1. Scope and Applicability

This attributional PCR covers one identified homogeneous uncoated jewellery gold-alloy supply lot, actual bar-to-sheet rolling/drawing and actual electric annealing/water quenching where needed, die stamping and component edge finishing, source-separated collection of large metallic sheet offcuts, necessary dry foreign-object removal, measured composition/moisture/contamination qualification, and unique first release as refinery feed. Subsequent actual rigid-container packing, storage, handling and road delivery through the refinery's receipt gate remain in original-cohort service accounts. Retain source alloy and joint manufacturing burdens; this is not the purchase and repacking of already formed scrap.

GJSCI describes gold/alloy component manufacture, thermal/forming alternatives, offcut/dust recovery, failures and rework. Brepohl distinguishes large sheet scrap from filings/sweeps and supports separate rigid packing. Morris and Watson documents clean alloy plate-offcut reception and a separately identified receiving legal entity with conditional acceptance terms. These are a transparent qualitative technical synthesis, not proof of one contemporary SKU, plant, order, current permit or actual batch acceptance. Every actual supply requires its supplier specification/representative assay and every receiver requires its own independent legal/technical verification. No source example's fineness, temperature, yield, charge, recovery or density is adopted. Sources: gjsci-components-2013; brepohl-refining; mw-scrap; mw-terms-2023.

Exclude intentional non-gold precious-metal feed (39332), precious-metal ash (39333), gold-clad/plated or mixed-origin scrap, used or intact jewellery, casting sprues, ores/doré, pure gold ingots, powder/filings/sweeps/sludge/liquids as the reference product, thermal burning or refining, and a waste-treatment service reference. The complete CPC39331 leaf also includes gold-clad scrap, but this narrower method does not. Actual acid pickling, gas-fired heating, inhouse alloy compounding, melting, washing/deoiling of scrap or a refined-metal terminal requires separately evidenced inventory expansion; never suppress a real operation to fit this route. Gold-bearing material is not assigned to another precious-metal subclass merely because Ag/Cu are present. un-cpc3-2025.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-gold-or-of-metal-clad-with-gold |
| classification_refs | CPC 3.0:39331; narrower solid homogeneous gold-alloy manufacturing-offcut method; no accepted mapping implied |
| covered_products | Large unburned metallic sheet offcuts from one identified gold-alloy jewellery-stamping source lot qualified as refinery feed |
| excluded_products | Non-gold feed; gold-clad or plated feed; ash; intact jewellery; sprues; powder/filings/sweeps/sludge/liquids; mixed origins; refined bullion; waste-treatment service |
| representative_product | Source-segregated gold-alloy jewellery stamping offcuts with measured composition and actual receiver-agreed specification |
| production_route | Whole alloy receipt -> actual rolling/drawing/electric annealing and water quench -> stamping and actual edge finishing -> source segregation -> dry preparation/qualification -> first release; separate subsequent cohort services to receipt |
| market_state | Unrefined solid metallic feed at first release; actual measured as-received net mass; packaging excluded; receiver receipt traced separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unrefined solid gold-alloy jewellery stamping offcuts to a qualified refinery receiver |
| How much | 1 kg reference flow at first release on net as-received mass |
| How well | Actual receiver-agreed composition/metallic form/moisture/contamination requirements; no default fineness or recovery |
| How long or cycle | One unique first release per lot; later packing/storage/transport/receipt tracked as original-cohort services |
| reference_flow_link | gold_feed |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Waste and scrap containing precious metals `99555c72-dba9-4c85-b92e-4cd541f48a15` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source supplier and alloy lot; whole supplied alloy specification and upstream burden coverage; measured Au and each other constituent with assay basis and uncertainty; homogeneous uncoated alloy and bar-to-sheet route; large unburned sheet-offcut form; measured moisture and separated liquid; foreign-material and oil contamination with methods and limits; actual electric heating and quench state; first-release event and net mass Q; opening and closing WIP with per-exchange inherited vectors; released FG cohort identity and original Q_c; actual receiver legal entity and location; verified receiver authorisation for the actual material and jurisdiction; receiver-agreed specification and written acceptance with consignment receipt; actual legal waste or product transfer status; allocation decision context and row-specific hierarchy; utility country voltage and provider boundary; packaging identity tare ownership and all returns; transport route distance gross load and return convention |

Every qualifier shall appear in dataset metadata, reference-flow comment or equivalent consumable fields; omission makes the reference definition incomplete. Product identity establishes compatible physical identity only, not applicability, receiver authorisation or methodology approval.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_reference | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is newly first-released net as-received offcut mass from cp_release; exclude packaging/separated liquid/rejects. Closing FG already containing this Q is not added again. Fine-gold and dry mass are separate measured subaccounts, not replacement denominators. |
| m_units | all exchanges | Actual native reference property | actual unit | Convert raw g/t/troy-ounce records to kg with declared units; distinguish troy from avoirdupois ounces and fineness from mass. Convert electricity kWh to MJ by 3.6 MJ/kWh. Preserve native road kg*km; one t*km is 1000 kg*km. No item-to-kg, density, heat value or motor-power intensity is guessed. |
| m_water | quench and releases | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use independent water-state measurements; already integrated gas/liquid volume is not multiplied by time. Integrate a true rate over time first, at the measured state. Separate free/phase-change/reaction water, metals/oxygen balances and species evidence; a single residual cannot identify two unknowns. |
| m_normalisation | all inventory rows | Actual exchange numerator | per 1 kg reference flow | Collect undivided raw records, convert, attribute and carry WIP vectors before c_normalise performs the only A_j/Q. Cards and aggregation refer to that same result. Original-cohort service c_services uses disjoint H_jc and original Q_c once; H is not production denominator. When Q=0 retain actual load and stocks with no unit production result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Externally supplied identified whole gold-alloy bar and complete inherited burdens; not already formed scrap |
| starting_condition_role | Burdened input to joint jewellery forming manufacture |
| product_classification_scope | Homogeneous gold-alloy metallic sheet-offcut subset of CPC39331 |
| recursive_input_rule | External same-category offcuts are not the representative bar input; true returns carry paired history without recursive duplication |
| upstream_dataset_requirement | One compatible whole-alloy provider with complete mining/refining/alloying/casting/supply history; actual other bought materials/services each have their own provider |
| disclosure | Declare actual supply state, operation ownership, co-functions, every stock, legal transfer status and receiving conditions; future records are required rather than zero |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_chain | complete chain | Include actual supply of whole alloy and inherited mining/refining/alloying/casting/preparation through one compatible upstream provider, actual forming/thermal/stamping/finishing and scrap formation, segregation/qualification and cohort services to receiving gate. Avoid overlap where a bought supply already includes a unit operation. Industrial evidence supports unit architecture, not allocation or zero burden. | `gjsci-components-2013`; `brepohl-refining`; `mw-scrap`; `jrc-ilcd-2010` |
| b_gate | first release and services | The production gate is unique first feed-quality release, not dispatch/payment/refining outturn. Record original cohort services afterward through actual receiver receipt including packing/storage/repacking/loading/transport/return/cleanup. No receipt or recheck creates production Q. A rejected receiver lot retains original burden and actual return/rework route. | `mw-terms-2023`; `jrc-ilcd-2010` |
| b_receiver | refinery receipt | Verify receiver legal entity and exact facility separately from flow identity: written feed criteria; source/ownership and hazardous-material disclosure; current authorisation/registration or permit/exemption applicable to actual waste/product state and jurisdiction; evidence of verification and actual consignment receipt. Morris and Watson terms identify one company and discretionary acceptance with oil/liquid/toxic-metal/low-grade exclusions, not a transferable permit or a promise to accept every gold alloy. If any decisive acceptance/legal condition is unknown, hold that application at the gate. | `mw-scrap`; `mw-terms-2023` |
| b_extension | actual additional operations | The selected thermal route is electric annealing and water quench as actually needed, with no assumed boiler/steam/refining. Every actual fuel, gas, reagent, cleaner, oil, abrasive, packaging item, waste and molecular emission absent from these candidate cards must be added atomically with raw records, native restrictions, provider and source evidence before use. Absence, rather than missing data, justifies not_applicable. Never hide actual manufacture in other or zero. | `gjsci-components-2013`; `brepohl-refining` |
| b_physical | physical reconciliation | Keep full unallocated gross physical V for forming, preparation, FG and combined gates. Pair all internal transfers including released feed, process return and packaging reuse, cancelling them only in the combined boundary. Whole mixed stream mass, origin partitions and assay constituents are non-additive and use one provider per physical transfer. All stock movements keep species and individual inherited exchange vectors. | `gjsci-components-2013`; `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| forming | Alloy forming and jewellery stamping | required | Actual bar/sheet thermal forming and stamping/finishing; no numeric recipe | foreground | Q newly first-released net feed mass |
| preparation | Offcut segregation and first feed release | required | Source segregation and necessary dry preparation/qualification | foreground | Q newly first-released net feed mass |
| services | Original-cohort services to receiver receipt | required | Actual services after first release through receipt | cohort_service | original Q_c; H is not production denominator |

Card amounts refer to the same section8 result, never a pre-divided collection record. Mark a conditional row not_applicable only with evidence that the atomic exchange is absent; every real additional input or exit gets its own row rather than a collection label.

### Process: Alloy forming and jewellery stamping (`forming`)

#### Inputs

##### Product flows

###### Whole supplied jewellery alloy bar (`alloy_bar`)

Receive one identified uncoated homogeneous gold-alloy bar supply lot for actual rolling/drawing into sheet. Obtain supplier specification and representative Au/other-metal assay, inclusions, moisture, state and complete upstream burden vector. Purchase the whole alloy once; Au, Ag, Cu and other assay fractions are composition subaccounts, never extra purchases. Do not substitute pure bullion, doré, foil, clad stock or finished scrap. Reusable remnant returns retain their history. The adopted native Product is one pre-alloyed material made by melting elements and solidification as a solid solution/mixture/intermetallic; it has Mass as reference property, no CAS, fixed recipe, supply geometry, grade, route qualifier or geography. Its classification leaf says Other ferro-alloys, while its complete names, synonyms and explanatory text contain no iron-content restriction. Disclose that isolated classification inconsistency; it does not justify substituting a real ferro-alloy for this independently specified gold-alloy bar. Verify the actual single homogeneous uncoated gold-bearing supply, representative assay and provider. This is not a collection of separately purchased gold/silver/copper or a provider approval.

- Selected flow: Alloy, unspecific `a37ade44-f4b4-4e82-8bfc-509eb1553eaa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_origin`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Electricity for actual forming (`forming_power`)

This Product binding is only Chinese <1 kV low-voltage AC grid-average consumption mix supplied to the user, including the supply/transmission boundary. It is neither generation output nor a separately added grid or transformer service. Verify actual country, voltage, meter boundary and compatible provider; a different supply requires a separately verified identity. Record all production, heating, forming, extraction, start/stop, failed runs, idle and cleanup electricity without assuming an intensity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Water for actual quench and equipment cleaning (`quench_water`)

Actual treated municipal/potable water supplied by a pipeline at plant/consumer boundary, not raw surface water, a natural-resource withdrawal, deionised water, steam or a cleaning formulation. Native reference property is Mass; a secondary volume coefficient is not a measured density. Weigh water or use independently measured density at the actual temperature to convert a metered volume. Retain quench, evaporation, stock, carryout and wastewater fates separately.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Whole purchased metalworking fluid (`forming_fluid`)

Conditional only when a real stamping/rolling lubricant-coolant is used. The native Product covers metalworking coolants/lubricants including oils and emulsions without a fixed recipe or geography; bind only the actual single supplied liquid formulation after SDS/composition/provider checks. Purchase it once with carrier water and active contents inside its subledger. For actual onsite mixing split every independently bought oil/emulsifier/water and energy into atomic exchanges, retaining real loss and wastewater; do not retain this purchased-whole row in addition. Oils cannot accompany an offcut lot to a receiver that excludes them.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Actual abrasive paper (`abrasive_paper`)

Conditional physical peripheral finishing after stamping. This is one complete purchased coated abrasive sheet including backing and binder, not an additional purchase of alumina grains. Record actual grade, use and spent article; hand filing without coated abrasive does not invent this input. Other abrasives require their own concrete row.

- Selected flow: Aluminium-oxide-coated abrasive paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

###### Actual oxidation oxygen (`oxygen_uptake`)

Conditional net molecular O2 uptake only when actual annealing oxidation is independently established. Thermal heating does not prove oxidation. Establish oxide species and metal/oxygen changes independently; no air mass, inert nitrogen or water consumption is inferred from an unexplained mass residual.

- Selected flow: Oxygen taken from air for alloy oxidation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Joint jewellery component output (`stamped_component`)

Actual stamped and edge-finished component leaving the common manufacturing gate; its declared design quality and alloy are distinct from scrap. Record gross physical mass and independent assigned burden; later jewellery assembly, stone setting, plating and use are outside this component gate. This is not the PCR reference output and cannot increase scrap Q.

- Selected flow: Stamped gold-alloy jewellery component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Source-segregated sheet offcuts (`formed_offcuts`)

One physically segregated lot of solid gold-alloy sheet offcuts from the declared jewellery component manufacture. This native Product identity covers recyclable manufacturing remnants and has no fixed purity, alloy recipe, form route or geography; it is not an assortment of separate metal purchases. Declare actual Au and every other constituent, contamination, sharp-edged solid form, origin, stage and receiver criteria. It does not establish refined gold, gold-clad material, ashes, clean-paper/wood identity, legal waste status, receiver authorisation, provider compatibility or an allocation rule. Whole lot mass and assay partitions are non-additive representations of that same lot. At this internal transfer the pieces are formed scrap awaiting feed qualification, not additional first-released reference product. Pair its gross mass, lot and complete inherited vector with preparation input; cancel the pair in the combined boundary.

- Selected flow: Waste and scrap containing precious metals `99555c72-dba9-4c85-b92e-4cd541f48a15`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Reusable alloy remnant return (`reusable_remnant`)

One tracked solid remnant from the same alloy lot returning to actual manufacture, not a simultaneous scrap sale. Any separately retained bar remnant requires its own exact supply-state row; preserve original state and exchange history. Internal loops cancel and do not create extra purchases, Q or credits. External true returns are recorded at the actual interface with upstream burden adjustment exactly once.

- Selected flow: Reusable gold-alloy sheet remnant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stocks_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Separately traded gold-alloy filings (`separate_filings`)

Only if independently assayed clean fabrication filings are actually traded as another product. Keep them physically separate from large sheet offcuts, sweeps and abrasive-bearing residue. Their whole mass and value belong to their own co-function and receiver, not reference Q. If managed as waste rather than a product use the actual waste exchange instead, never both for the same material.

- Selected flow: Gold-alloy fabrication filings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_forming`
- Sources: `gjsci-components-2013`; `brepohl-refining`; `jrc-ilcd-2010`

##### Waste flows

###### Actual annealing oxide scale (`annealing_scale`)

Conditional separately collected mixed oxide-scale stream, with measured Au and other metals, oxidation state, oxygen and moisture; do not name it pure gold oxide. It is neither clean metallic offcut nor precious-metal ash. Keep receiver/treatment and inherited burden; no default yield or zero burden.

- Selected flow: Gold-alloy annealing oxide scale
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Spent abrasive paper (`spent_abrasive`)

One real spent coated article including actual retained metal particles. Quantify its whole mass and constituent subledger without adding captured gold again as a second physical output. Keep separate loose filings and direct-air fractions mutually exclusive.

- Selected flow: Spent aluminium-oxide-coated abrasive paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Actual quench-water purge (`quench_effluent`)

The actual whole liquid purge after reuse, with measured suspended/dissolved material and actual external treatment provider; not a direct elementary release or an invented steam/condensate return. Keep internal recirculation out of fresh demand. If liquid is externally returned as usable product, use a separately verified Product-return row and actual temperature/enthalpy and supplier water-energy convention.

- Selected flow: Spent gold-alloy quench water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Actual spent metalworking fluid (`spent_fluid`)

Conditional actual whole spent lubricant/coolant separately managed, including retained water/oil/metal without purchasing them again. Keep batch composition and treatment; distinguish fluid still retained on offcuts, spill, evaporation and stock. Actual solvent/VOC indicators are not molecular emission masses.

- Selected flow: Spent gold-alloy metalworking fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_forming`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

##### Elementary flows

###### Actual water evaporated to air (`vapour`)

Only molecular H2O vapour actually released to air: CAS 7732-18-5; native compartment emissions to air unspecified. The broad native synonym list includes isotopic/liquid terms but is not permission to model heavy water, ice, dissolved pollutants, freshwater discharge or chemical-reaction water as this evaporation. Select a more specific air compartment if actual evidence requires it. Independently measure water input/stocks/purge/carryout and humidity; no residual fitted to two unknowns.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Gold particulate to air (`gold_air`)

Conditional independently speciated gold metal particulate actually released beyond capture to the measured air compartment. Do not equate dust total, a bulk alloy assay or a generic VOC/COD indicator with this element. Record actual particle phase and size; oxides or other chemical species require distinct rows and stoichiometry, not the same metal-only mass. Whole aerosol mass and its constituent partitions are not added twice.

- Selected flow: Gold metal particulate emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Silver particulate to air (`silver_air`)

Conditional independently speciated silver metal particulate actually released beyond capture to the measured air compartment. Do not equate dust total, a bulk alloy assay or a generic VOC/COD indicator with this element. Record actual particle phase and size; oxides or other chemical species require distinct rows and stoichiometry, not the same metal-only mass. Whole aerosol mass and its constituent partitions are not added twice.

- Selected flow: Silver metal particulate emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Copper particulate to air (`copper_air`)

Conditional independently speciated copper metal particulate actually released beyond capture to the measured air compartment. Do not equate dust total, a bulk alloy assay or a generic VOC/COD indicator with this element. Record actual particle phase and size; oxides or other chemical species require distinct rows and stoichiometry, not the same metal-only mass. Whole aerosol mass and its constituent partitions are not added twice.

- Selected flow: Copper metal particulate emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

###### Measured dissipated heat (`heat_air`)

Only actual measured/reconciled heat loss to air, separate from sensible heat in metal/water and purchased electrical energy. No sold heat, boiler, combustion exhaust or steam supply is assumed by an electric annealing design.

- Selected flow: Dissipated heat to air
- Flow property / unit: Energy / MJ
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `gjsci-components-2013`; `jrc-ilcd-2010`

### Process: Offcut segregation and first feed release (`preparation`)

#### Inputs

##### Product flows

###### Internal formed offcuts received (`offcuts_received`)

One physically segregated lot of solid gold-alloy sheet offcuts from the declared jewellery component manufacture. This native Product identity covers recyclable manufacturing remnants and has no fixed purity, alloy recipe, form route or geography; it is not an assortment of separate metal purchases. Declare actual Au and every other constituent, contamination, sharp-edged solid form, origin, stage and receiver criteria. It does not establish refined gold, gold-clad material, ashes, clean-paper/wood identity, legal waste status, receiver authorisation, provider compatibility or an allocation rule. Whole lot mass and assay partitions are non-additive representations of that same lot. Receive exactly the paired forming transfer including inherited per-exchange vector and WIP history; this is not an additional purchase or a zero-burden feed.

- Selected flow: Waste and scrap containing precious metals `99555c72-dba9-4c85-b92e-4cd541f48a15`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stocks_preparation`
- Sources: `brepohl-refining`; `mw-scrap`; `jrc-ilcd-2010`

###### Actual segregation and quality-control power (`preparation_power`)

This Product binding is only Chinese <1 kV low-voltage AC grid-average consumption mix supplied to the user, including the supply/transmission boundary. It is neither generation output nor a separately added grid or transformer service. Verify actual country, voltage, meter boundary and compatible provider; a different supply requires a separately verified identity. Record all production, heating, forming, extraction, start/stop, failed runs, idle and cleanup electricity without assuming an intensity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_preparation`
- Sources: `brepohl-refining`; `mw-terms-2023`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-released gold-alloy refining feed (`gold_feed`)

One physically segregated lot of solid gold-alloy sheet offcuts from the declared jewellery component manufacture. This native Product identity covers recyclable manufacturing remnants and has no fixed purity, alloy recipe, form route or geography; it is not an assortment of separate metal purchases. Declare actual Au and every other constituent, contamination, sharp-edged solid form, origin, stage and receiver criteria. It does not establish refined gold, gold-clad material, ashes, clean-paper/wood identity, legal waste status, receiver authorisation, provider compatibility or an allocation rule. Whole lot mass and assay partitions are non-additive representations of that same lot. Q is the newly first-released net as-received mass of these solid metallic offcuts meeting the actual receiver-agreed Au/other-metal, moisture and contamination requirements, excluding packaging, separated liquids and rejected material. Keep measured moisture and dry-metal/Au subaccounts; do not substitute fine-gold mass for Q. The release certificate and later receiver receipt are linked by lot; first release is counted once even when still in closing FG or later returned/rechecked.

- Selected flow: Waste and scrap containing precious metals `99555c72-dba9-4c85-b92e-4cd541f48a15`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `mw-scrap`; `mw-terms-2023`; `brepohl-refining`; `jrc-ilcd-2010`

##### Waste flows

###### Removed ferrous tool fragments (`ferrous_contamination`)

Only real separated iron/steel tool fragments, with actual alloy and treatment route. Other foreign matter is a separately named physical stream; magnet use does not establish perfect removal or a default iron content. Do not hide gold entrainment or contaminated residue under a zero entry.

- Selected flow: Ferrous tool fragments removed from gold scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_preparation`
- Sources: `brepohl-refining`; `mw-terms-2023`; `jrc-ilcd-2010`

###### Externally managed rejected offcuts (`rejected_offcuts`)

Only material actually leaving for waste management after failure of the agreed feed specification. Record each cause, quantity, inherited burden and route. A held lot remains WIP; internal rework/reusable return cancels and is not this external output; a separately traded product requires its actual product row. No failed material increases Q.

- Selected flow: Rejected solid gold-alloy sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result in section8; retain undivided raw records and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs_preparation`
- Sources: `mw-terms-2023`; `jrc-ilcd-2010`

##### Elementary flows

### Process: Original-cohort services to receiver receipt (`services`)

#### Inputs

##### Product flows

###### Original-cohort packing and handling power (`service_power`)

This Product binding is only Chinese <1 kV low-voltage AC grid-average consumption mix supplied to the user, including the supply/transmission boundary. It is neither generation output nor a separately added grid or transformer service. Verify actual country, voltage, meter boundary and compatible provider; a different supply requires a separately verified identity. Record all production, heating, forming, extraction, start/stop, failed runs, idle and cleanup electricity without assuming an intensity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

###### Whole rigid steel can with lid (`rigid_can`)

One actual rigid steel can and its supplied lid for sharp-edged scrap, not a 200-litre drum by assumption. Establish actual tare/configuration and provider; loose plastic bag transport is excluded for these sharp pieces. Apply the separate packaging balance to purchased, externally returned and existing reusable cans; internal reuse is not repurchase or scrap Q.

- Selected flow: Rigid steel scrap can with lid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

###### Actual paper identification label (`paper_label`)

Conditional one actual paper tag with its supplied print; record label composition/tare separately from the can. A different label material gets a separate identity. Labels declare lot, net/tare/gross, alloy information and receiver destination without inventing an assay.

- Selected flow: Paper scrap-lot identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-refining`; `mw-terms-2023`; `jrc-ilcd-2010`

###### Actual polypropylene sealing tape (`sealing_tape`)

Conditional one complete purchased adhesive tape including backing and adhesive, only when really used. No duplicate polymer/adhesive purchase; actual other fasteners are separately named rather than hidden here.

- Selected flow: Polypropylene-backed adhesive sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

###### Actual road delivery to refinery receiver (`delivery_freight`)

Native Product identity is road freight, production mix at plant, with reference transport workload mass*distance and reference kg*km; it has no specified country/vehicle capacity. Choose a compatible actual carrier route/load/return arrangement. Calculate workload using actual gross transported scrap plus its packaging and distance, including actual empty/return legs through the provider convention. Do not add the carrier diesel/exhaust twice. It does not apply to air/sea/rail or passenger carriage and does not confer receiver legality.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `mw-terms-2023`; `jrc-ilcd-2010`

###### Actual can-cleaning water (`can_wash_water`)

Actual treated municipal/potable water supplied by a pipeline at plant/consumer boundary, not raw surface water, a natural-resource withdrawal, deionised water, steam or a cleaning formulation. Native reference property is Mass; a secondary volume coefficient is not a measured density. Weigh water or use independently measured density at the actual temperature to convert a metered volume. Retain quench, evaporation, stock, carryout and wastewater fates separately. Conditional container cleaning uses its original cohort-service account, not new production Q; add each real cleaner separately.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials_services`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Physical original-cohort feed delivery (`delivered_feed`)

One physically segregated lot of solid gold-alloy sheet offcuts from the declared jewellery component manufacture. This native Product identity covers recyclable manufacturing remnants and has no fixed purity, alloy recipe, form route or geography; it is not an assortment of separate metal purchases. Declare actual Au and every other constituent, contamination, sharp-edged solid form, origin, stage and receiver criteria. It does not establish refined gold, gold-clad material, ashes, clean-paper/wood identity, legal waste status, receiver authorisation, provider compatibility or an allocation rule. Whole lot mass and assay partitions are non-additive representations of that same lot. This is a physical shipment/receiver trace of already released cohort c, not newly manufactured feed. Record gross physical feed V and paired internal release transfer, cancelling that transfer on consolidation. Only disjoint cohort-service H contributes additional burden; retain original Q_c, returns, repeated deliveries and rejected receipts with no new Q.

- Selected flow: Waste and scrap containing precious metals `99555c72-dba9-4c85-b92e-4cd541f48a15`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `mw-scrap`; `mw-terms-2023`; `jrc-ilcd-2010`

###### Actual external reusable-can return (`can_return`)

Actual external return of the reusable can is a physical Product-return interface, not a saleable gold coproduct. Record exact can state, owner, tare and supplier convention; internal reuse cancels. External returned cans received are ER in the same can-specific stock ledger.

- Selected flow: Rigid steel scrap can with lid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

##### Waste flows

###### Discarded rigid steel scrap can (`can_waste`)

Only the actual separately tracked discarded packaging article and its real treatment; distinguish external dispatch still in use from waste. Apply its own complete packaging balance and inherited burdens. Retained gold contamination is a measured subaccount, not a second physical gold output or automatic recovery credit.

- Selected flow: Discarded rigid steel scrap can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

###### Discarded paper identification label (`label_waste`)

Only the actual separately tracked discarded packaging article and its real treatment; distinguish external dispatch still in use from waste. Apply its own complete packaging balance and inherited burdens. Retained gold contamination is a measured subaccount, not a second physical gold output or automatic recovery credit.

- Selected flow: Discarded paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

###### Discarded polypropylene adhesive tape (`tape_waste`)

Only the actual separately tracked discarded packaging article and its real treatment; distinguish external dispatch still in use from waste. Apply its own complete packaging balance and inherited burdens. Retained gold contamination is a measured subaccount, not a second physical gold output or automatic recovery credit.

- Selected flow: Discarded polypropylene adhesive tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

###### Actual spent can-cleaning water (`can_wash_effluent`)

Conditional whole cleaning-effluent stream to actual external treatment, with measured water/solids/species and original-cohort service history. Not a direct environmental discharge; each actual direct species discharge needs its own medium-specific elementary exchange.

- Selected flow: Spent steel-can cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single original-cohort s_jc result in section8; retain undivided raw H and gross physical V
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `brepohl-refining`; `jrc-ilcd-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | attributional decision | Use only the attributional allocation context where partitioning is required. State why it applies and distinguish traded co-products from waste management and negative-value streams. Source material is never automatically burden-free; document compatible upstream/downstream recycling/waste conventions with both parties. Industrial production and receiver evidence does not establish an LCA key. | `jrc-ilcd-2010` |
| a_subdivision | all exchanges | First separate dedicated component manufacture, offcut-only preparation and postrelease services by real subdivision; use virtual subdivision for exclusively attributable materials/services with a quantified technical relation. Keep each exchange and inherited source-alloy vector once across all co-functions. Never assign the entire joint line to offcuts or omit its formation. | `jrc-ilcd-2010` |
| a_causality | each remaining exchange | Establish the exchange-specific determining physical causal relation before choosing any remaining key. Measured alloy actually embodied in each output may support that material relationship, but does not automatically allocate furnace/press/idle/cleanup by the same mass or Au fraction. Show how a co-function determines each exchange; no free choice between physical and economic keys. Gross physical balances do not use allocated fractions. | `jrc-ilcd-2010` |
| a_residual | genuinely residual exchange | Only for a justified residual after subdivision and determining physical causality use representative contemporaneous market value of actual co-functions in their actual state at the same common process gate. Adjust downstream quotations for later refining/finishing/preparation/services and record price basis, quantity, currency, period, adjustments and sensitivity. Missing, zero/negative or incompatible prices require review, not fabricated or absolute-value shares. Allocated vectors sum back to the complete raw inventory. | `jrc-ilcd-2010` |
| a_no_credit | recovery and returns | No fixed fineness/yield, zero historical burden, automatic recycling credit, avoided virgin-gold production, avoided disposal or downstream-refining yield is prescribed. Au assay is neither saleable fine-gold output nor credit. Actual internal loops cancel; external returns preserve actual history. One physical lot cannot be both reference offcuts and a separately credited co-product. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect only undivided raw quantities, real states and inherited vectors. aggregation_rule labels the common reporting basis after the single section8 calculation; it does not tell the collector to divide again. Service raw H and production A are disjoint; cp_services records actual original Q_c.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_origin | forming | whole alloy | supplier and receipt | lot; supplier; whole alloy mass and state; Au and each metal assay; inclusions; moisture; upstream operations/provider; inherited exchange vector | Reconcile calibrated receipt weights, supplier composition/specification and representative assay; identify one complete whole-material provider and its upstream boundary | kg; assay fractions | each receipt and return | whole period including opening lots | actual source supplier and forming site | per 1 kg reference flow | supplier certificates; assay method/calibration; custody and coverage |
| cp_energy_forming | forming | electricity | meter and invoice | meter start/end; raw kWh; country; voltage; supply provider; time profile; equipment; production/service/start-stop/idle/failure/cleanup partitions | Read calibrated actual electrical meters and map their physical coverage; retain undivided raw totals and all modes before any attribution | kWh | continuous plus reporting boundaries | whole period including Q-zero | all actual shared and dedicated equipment | per 1 kg reference flow | meter calibration; topology; operating logs |
| cp_energy_preparation | preparation | electricity | meter and invoice | meter start/end; raw kWh; country; voltage; supply provider; time profile; equipment; production/service/start-stop/idle/failure/cleanup partitions | Read calibrated actual electrical meters and map their physical coverage; retain undivided raw totals and all modes before any attribution | kWh | continuous plus reporting boundaries | whole period including Q-zero | all actual shared and dedicated equipment | per 1 kg reference flow | meter calibration; topology; operating logs |
| cp_materials_forming | forming | water and individual consumable | purchase stock and usage | individual supplied article/formulation; receipt/use; opening/closing; returns; SDS and constituent subledger; raw unit; actual density/temperature; recycle pairs | Weigh or meter each actual water/formulation/abrasive supply; preserve whole purchased formulation once and separate actual onsite mixing inputs; record independent density and actual fates | kg; measured m3 | each supply/use and stock boundary | whole period including opening histories | actual tanks machines and service interfaces | per 1 kg reference flow | calibration; composition; supplier provider; stock reconciliation |
| cp_materials_services | services | water and individual consumable | purchase stock and usage | individual supplied article/formulation; receipt/use; opening/closing; returns; SDS and constituent subledger; raw unit; actual density/temperature; recycle pairs | Weigh or meter each actual water/formulation/abrasive supply; preserve whole purchased formulation once and separate actual onsite mixing inputs; record independent density and actual fates | kg; measured m3 | each supply/use and stock boundary | whole period including opening histories | actual tanks machines and service interfaces | per 1 kg reference flow | calibration; composition; supplier provider; stock reconciliation |
| cp_outputs_forming | forming | each physical co-output or reject | weighing and destination | individual stream; gross V; tare; net mass; Au and every constituent; water; phase/species; lot origin; route; provider; internal transfer pair; inherited vector | Weigh each mutually exclusive physical stream and analyse composition/contamination independently. Record whole mixture plus non-additive partitions; identify actual product or waste status and treatment | kg | each batch transfer and rejection | complete period including failures rework and cleanup | all forming/preparation exits | per 1 kg reference flow | calibrated weights; assays; transfer and treatment records |
| cp_outputs_preparation | preparation | each physical co-output or reject | weighing and destination | individual stream; gross V; tare; net mass; Au and every constituent; water; phase/species; lot origin; route; provider; internal transfer pair; inherited vector | Weigh each mutually exclusive physical stream and analyse composition/contamination independently. Record whole mixture plus non-additive partitions; identify actual product or waste status and treatment | kg | each batch transfer and rejection | complete period including failures rework and cleanup | all forming/preparation exits | per 1 kg reference flow | calibrated weights; assays; transfer and treatment records |
| cp_release | preparation | new first-released offcuts | release weighing and quality certificate | unique lot/event; net Q; tare/gross; moisture; Au and all constituents; impurity method/results; receiver specification; source; failure/hold history; release time | Weigh the qualified net solid offcut lot on a calibrated scale, exclude packaging and separated liquid, and bind representative assay and written receiver criteria to one unique first-release event. Rechecks/returns/dispatch do not create another event | kg | each unique first release | whole period plus opening cohort identity | actual feed release gate | per 1 kg reference flow | scale calibration; sampling/assay; qualification and event deduplication |
| cp_stocks_forming | forming | material and WIP vectors | lot stock and transfers | opening/closing raw and WIP; each flow amount; per-exchange inherited burden; failed/held/rework status; return lot; transfer pair; actual new conversion burden | Reconcile physical quantities and inherited per-exchange vectors at both boundaries for every lot; separate usable remnant, held feed and already released FG; carry failures and cleanup rather than discard their load | kg; original exchange units | each transfer and reporting boundary | whole period and opening burden histories | all manufacturing and preparation stocks | per 1 kg reference flow | stock counts; custody; vector equality; original records |
| cp_stocks_preparation | preparation | material and WIP vectors | lot stock and transfers | opening/closing raw and WIP; each flow amount; per-exchange inherited burden; failed/held/rework status; return lot; transfer pair; actual new conversion burden | Reconcile physical quantities and inherited per-exchange vectors at both boundaries for every lot; separate usable remnant, held feed and already released FG; carry failures and cleanup rather than discard their load | kg; original exchange units | each transfer and reporting boundary | whole period and opening burden histories | all manufacturing and preparation stocks | per 1 kg reference flow | stock counts; custody; vector equality; original records |
| cp_packaging | services | each individual package article | purchase return stock and fate | article/configuration; owner; measured tare; opening empty/WIP/FG/reusable; purchases P; external return received ER; closing C; gross shipment S; external return EO; waste W; reuse pairs; contamination | Weigh/count with measured configuration-specific tare every real steel can, paper label and tape article separately; record original cohort, incoming and outgoing states and every fate; retain all package stocks and return interfaces | kg; actual count and measured tare | each packing shipment return and stock boundary | whole period including opening attached stock | actual packing and external interfaces | per 1 kg reference flow | tare measurements; invoices; return/dispatch/waste receipts |
| cp_services | services | each original-cohort service | service meters shipment and receipt | cohort c; original Q_c; each raw H_jc; beginning/ending FG; gross dispatch/return; recheck/rework; route/distance/gross load; receiver legal entity; permit/registration or exemption; written acceptance; receipt | Track each released lot and disjoint postrelease service through receiver receipt, including returns, repacking, idle, cleanup and real incremental rework. Verify legal entity/facility/authorisation and material acceptance independently of UUID. Do not collect pre-divided amounts | original exchange units; kg; kg*km | each event and cohort reconciliation | full cohort service history including opening FG | first release through actual receiving gate | per 1 kg reference flow | raw service records; transfer receipts; documented authorisation and acceptance verification |
| cp_species | forming | each actual species and heat | state-specific measurement | actual species; phase and medium; mass or concentration; cumulative volume or true rate/time; temperature/pressure/humidity; particle size/composition; capture and non-air fates; independent water/oxygen/metal evidence; heat state | Use independent calibrated molecular/particulate and thermal observations across modes; convert each at its own measured state. Retain indicator results as indicators until speciation. No borrowed water density, guessed gas volume or double time integration | kg; raw volume/rate; MJ | continuous or representative event measurements | all start-stop failure normal idle and cleanup modes | actual process and environmental interfaces | per 1 kg reference flow | sampling/calibration; independent phase/reaction evidence; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_release | gold_feed | Q = sum of unique new first-release net offcut masses in kg. Q excludes packaging/separated liquids/rejects and is not shipment, Au content or closing FG added again. Keep the same lot identity through receiver receipt. | cp_release; cp_stocks_forming; cp_stocks_preparation | Q | `mw-terms-2023`; `jrc-ilcd-2010` |
| c_units | all inventory rows | Convert each undivided raw numerator to its declared exchange unit: g/1000 -> kg; kWh*3.6 -> MJ; t*km*1000 -> kg*km. Integrate only true rates; integrated volume stays volume. Convert volume to mass only using independent density of that substance at actual state. Assay partitions do not multiply whole purchased alloy into multiple inputs. | raw_records; cp_origin; cp_energy_forming; cp_energy_preparation; cp_materials_forming; cp_materials_services; cp_species | converted_raw | `gjsci-components-2013`; `jrc-ilcd-2010` |
| c_attribute | all inventory rows | For each exchange j use dedicated/virtual subdivision, determining physical causality and only justified residual common-gate value under section7. A_j = opening-WIP inherited vector_j + actually attributed converted load_j - closing-WIP inherited vector_j, with paired internal return/transfer vectors reconciled. Retain all failed/zero-output/start-stop/idle/cleanup/rework loads and every other co-function. This is a burden ledger, not the gross physical V balance. | converted_raw; cp_stocks_forming; cp_stocks_preparation; allocation_records | A_j | `jrc-ilcd-2010` |
| c_normalise | all inventory rows | For Q>0, a_j = A_j / Q exactly once. Cards and protocol aggregation refer only to this result. For Q=0 retain A_j and stock histories and issue no per-unit production result. gold_feed reference output is 1 kg after this same operation. | A_j; Q; cp_release | a_j | `jrc-ilcd-2010` |
| c_services | services | For original released cohort c with Q_c>0, s_jc = H_jc / Q_c once for disjoint actual postrelease service only. Link s_jc to the cohort production profile without another division; H is not Q and is never fed through current production A_j/Q. Preserve opening FG burden, returns, original shipment reversal and only actual incremental rework; no recheck or delivery creates output. For missing/zero Q_c retain H and hold the unit service result. | cp_services; cp_packaging; cp_stocks_forming; cp_stocks_preparation; Q_c | s_jc | `jrc-ilcd-2010` |
| c_physical | all physical gates | For each gate keep opening physical stocks + external receipts + real reaction uptake = closing stocks + external exits + measured species releases. Manufacturing exits include Q once; accepted closing FG is inside Q and not a second manufacturing output. FG gate on full actual as-received mass: opening released FG + paired Q + actual received returns + FG_in = closing FG + gross physical shipments + actual service rejects + FG_out, with internal service transfers paired. FG_in and FG_out are independently measured actual postrelease material/water/species or phase-transfer legs crossing this same gate, including genuine reaction uptake or vapour/removed-liquid exits when present; exclude anything already in returns, shipment, rejects or another term on that same side. Internal phase redistribution is not an external mass source. Keep dry-metal and fine-Au companion accounts separate from this whole-mass gate. Add each actual missing atomic interface and raw service/state record before claiming completeness; no wet operation, reaction yield or phase loss is defaulted. Combine gates by cancelling internal Q and other paired movements. Reconcile total mass and each relevant Au/Ag/Cu/other-element independently from species/reaction-water evidence; disclose uncertainty and do not force closure. | cp_origin; cp_outputs_forming; cp_outputs_preparation; cp_stocks_forming; cp_stocks_preparation; cp_release; cp_services; cp_species | physical_reconciliation | `gjsci-components-2013`; `jrc-ilcd-2010` |
| c_packages | each packaging article | For each can/label/tape separately: opening empty + opening attached-WIP + opening attached-FG + opening reusable + P + ER = C + S + EO + W. C includes all equivalent closing states; S is packaging leaving with gross physical shipments even for returns/repeated shipments. Internal reuse cancels and is neither purchase nor product Q. A new external interface X may extend only its actual side; remove OTHER only when evidence proves it is that exact same-side duplicate. Preserve ownership, prior burden and contamination; do not add metal assay partitions again. | cp_packaging; cp_services; cp_stocks_forming; cp_stocks_preparation | packaging_reconciliation | `brepohl-refining`; `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and supply | One actual alloy lot, whole formulation/article identity, source operations, receiver specification and physical state; document every UUID restriction and unresolved provider identity. | supplier and native identity evidence; representative assays |
| dq_completeness | all modes and stocks | Cover the complete period, all failures/start-stop/idle/cleanup/rework/Q-zero, stocks and per-exchange inherited vectors, each actual flow and fate; do not delete missing observations. | raw mode logs; stock/vector reconciliation |
| dq_measurement | all numerators and Q | Calibrated scales/meters, representative sampling and independent state/phase/species observations. Quantify precision and missingness; no default alloy assay, recovery, density or production setting. | calibration; analytical methods; uncertainty |
| dq_context | allocation and receipt | Verify study context and independent receiver legal/technical suitability; document source-specific limits. Recipe evidence does not approve allocation and a Product UUID does not approve a waste transfer. | allocation decision; authorisation and acceptance verification |
| dq_bilingual | complete data package | EN/ZH preserve the same events, qualifiers, exchange/flow identity, one-time formula, sources, conditions and uncertainty. Official Chinese UUID basenames stay exact. | paired records; complete semantic/projection audit |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | application | Verify the complete covered alloy/route/source/form conjunction and exclusions including 39332/39333; source specification/assay and actual receiving conditions are required. | `un-cpc3-2025`; `gjsci-components-2013`; `mw-terms-2023` |
| v_identity | each UUID | Check native Product/Waste/Elementary type, all name components/comments/synonyms, CAS, grade/route/form/geography/medium and every property. Use exact referenced property/unit-group chain and real reference unit, no latest substitution. Reject hard identity contradictions even if classification matches; retain all restrictions in the consuming context. | `mw-terms-2023` |
| v_basis | Q and load | Confirm unique first release, separate Au/dry/whole mass, no closing-FG double production, c_units and attribution before the only c_normalise, original Q_c service basis, and retained Q-zero loads. | `jrc-ilcd-2010` |
| v_balances | physical and packaging | Check every gate including the complete as-received FG equality in c_physical with independently measured non-overlapping FG_in/FG_out postrelease material/water/species/phase legs and their actual atomic interfaces. Keep dry-metal/fine-Au subaccounts separate. Check combined transfers, whole mixture versus partitions, element and water/species evidence independently, every packaging state/return/fate and complete WIP/FG inherited vectors. Unknown relationships remain explicit review items; do not force a numerical pass. | `gjsci-components-2013`; `brepohl-refining`; `jrc-ilcd-2010` |
| v_receiver | receipt endpoint | Missing current receiver authorisation/acceptance, incompatible transfer status, oil/hazard/low-grade rejection or missing decisive assay prevents use of the actual receiving endpoint. Keep held material and burden, not fictional refining output or coverage. | `mw-scrap`; `mw-terms-2023` |
| v_review | data package | Run finite measurement, source/content fingerprint and Schema checks; separately assess scientific applicability and translation. Engineering success is not scientific/translation review, accepted classification mapping or publication. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible attributional models of the declared source gold-alloy offcut feed through receiving gate, retaining all qualifiers and cohort services |
| excluded_use | Universal recovery, burden-free scrap, substitution credit for pure gold, non-gold/ash/clad feed, used jewellery, refinery output or unconditional legal approval |
| required_metadata | source supplier and alloy lot; whole supplied alloy specification and upstream burden coverage; measured Au and each other constituent with assay basis and uncertainty; homogeneous uncoated alloy and bar-to-sheet route; large unburned sheet-offcut form; measured moisture and separated liquid; foreign-material and oil contamination with methods and limits; actual electric heating and quench state; first-release event and net mass Q; opening and closing WIP with per-exchange inherited vectors; released FG cohort identity and original Q_c; actual receiver legal entity and location; verified receiver authorisation for the actual material and jurisdiction; receiver-agreed specification and written acceptance with consignment receipt; actual legal waste or product transfer status; allocation decision context and row-specific hierarchy; utility country voltage and provider boundary; packaging identity tare ownership and all returns; transport route distance gross load and return convention |
| required_quality_disclosure | Full supply and co-function boundary; raw period; inherited vectors; allocation hierarchy; UUID restrictions; legal/technical receipt verification; gaps/uncertainty; science and translation state |
| update_trigger | Change to alloy/source, forming/thermal route, contamination/moisture, provider, receiver specification/authorisation/legal state, measurement or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Structure, 30 June2025, complete group393 and adjacent 39331/39332/39333; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification distinctions only; narrower method is not a new accepted mapping |
| gjsci-components-2013 | official_guidance | GJSCI G&J/Q0603 Goldsmith Component Maker v1.0, reviewed30July2013; G&J/N0603 PDF13–17; https://www.gjsci.org/nos/hmg2/HMG-GoldsmithComponents.pdf | Qualitative original gold/alloy forming and stamping, edge finishing, scrap recovery, rework and account controls; no contemporary recipe or numeric default |
| brepohl-refining | handbook | Erhard Brepohl, Precious Metal Refining, Ganoksin publisher excerpt from The Theory and Practice of Goldsmithing, updated11December2016; Treatment at the Refinery/Scrap and adjacent Filings/Sweeps/PGM; https://www.ganoksin.com/article/precious-metal-refining/ | Large clean scrap segregation, fineness characterisation, weighing and rigid packing; refining chemistry and burning examples excluded |
| mw-scrap | extension_guidance | Morris and Watson, Scrap, undated publisher HTML; https://morrisandwatson.com/refining/scrap | Real clean alloy plate-offcut reception example, specifically own-origin alloy limitation; no universal buyer approval, recovery or burden key |
| mw-terms-2023 | extension_guidance | Morris and Watson Ltd New Zealand, Refining Terms and Conditions v2 July2023, complete2pages §§1–8; https://morrisandwatson.com/pdf/MWNZ-Refining-Terms-v2.pdf | Separate receiver legal entity, material exclusions, discretionary acceptance, origin/ownership/hazard disclosure, transport/receipt/analysis boundary; no transferable operating authorisation |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA Detailed Guidance, firstedition2010 §§7.9.2–7.9.3 PDF275–292; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional context, real/virtual subdivision, exchange-specific determining physical causality then justified residual common-gate market value; no industrial recipe or default waste credit |
