---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-zinc
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Source-segregated bare Zn-Cu-Ti sheet-fabrication offcuts for remelting

## 1. Scope and Applicability

This attributional PCR covers only clean solid offcuts of one identified bare bright-rolled Zn-Cu-Ti sheet/strip alloy with actual Al and other constituents declared, generated during genuine cold shearing and notching of roofing-panel blanks, separately collected, inspected, necessarily size-trimmed and packed for a specified zinc-remelting receiving gate. The foreground starts with the supplied whole sheet and its inherited upstream burdens; it includes the original mother-product fabrication and each real supply service. It is not a purchased finished-scrap packing model.

RHEINZINK CLASSIC is a real Zn–Cu–Ti alloy sheet example with a possible small Al addition, not pure zinc or a fixed recipe. Its EPD documents manufacturing trim remelting and construction cuttings sent directly or through collectors to secondary melting plants. The manufacturer fabrication specification supports smooth-blade shears/snips and rounded notches; Basel R4 independently distinguishes known-composition manufacturing clippings from oxide/dross and mixed scrap. These are a transparent qualitative technical synthesis, not one measured SKU/factory/order or a universal grade. Use actual lot analyses, processing configuration and receiver acceptance. No default density, yield, collection/recycling efficiency, energy factor, zero historical burden or substitution credit is adopted. Sources: `rheinzink-classic-2024`; `rheinzink-fabrication-2024`; `basel-r4-2004`.

The EPD §2.6 describes original pre-alloy melting, mixing with zinc, solidification and rolling; the supplied sheet is already an alloy before the foreground cold cuts. Basel R4 §24 identifies clean manufacturing trim as retaining the supplied material's composition. Cold shearing, notching and necessary size trimming preserve that alloy rather than separating its constituents or creating a remelted product. This supports the single qualified alloy feed below; it does not add an alloying furnace to the foreground. Retain actual melt/cast origin and supplier evidence for each sheet lot. Sources: `rheinzink-classic-2024`; `rheinzink-fabrication-2024`; `basel-r4-2004`.

Exclude post-consumer/weathered zinc, pure-metal Screen qualification inferred from alloy sheet, coated/painted/phosphated/preweathered or laminated sheet, zinc-coated steel, Zn-Al die-cast scrap, galvanizing dross, zinc ash, powders, sweeps, batteries, mixed electronic scrap, chemically cleaned oily scrap, melting/refining and ingot production. Soldering, coating, installation, drilling/sawing and hot processing are not silently added to the selected cold-shear route. Real additional operations require specific atomic inventories and applicability review. `rema-zinc-2026` is counterevidence: Screen expressly specifies pure zinc; adjacent die-cast, dross and old-zinc entries do not approve this alloy.

Manufacturer §3.06 directs collection of fabrication drop-offs for a local scrap-metal recycler. This supports the collection route, not acceptance of this alloy lot by a named remelter. Collect the actual dated contract/acceptance record identifying receiver, allowed alloy, contamination limits, size and packaging; do not infer these from pure-zinc Screen. Sources: `rheinzink-fabrication-2024`; `rema-zinc-2026`.

The full official notes list 39365 on PDF p204 without specifying a scrap grade or recycling process. Adjacent 39361/39362/39363/39364/39366 cover copper/nickel/aluminium/lead/tin scrap; 39367 includes titanium scrap. Minor Ti in this zinc-base alloy does not make it titanium scrap. Page 203 distinguishes non-precious-metal ash/residue 39320, precious-metal waste/scrap group 3933 (including ash 39333), and ferrous scrap 39340; 39380 covers battery scrap. Apply these exclusions using actual composition and form, not trade name alone. Source: `un-cpc3-2025`.

The manufacturer material page confirms Cu/Ti alloying; zinc-base purity is not finished-alloy purity. Source: `rheinzink-material`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-zinc |
| classification_refs | CPC 3.0:39365, accepted narrower association for bare zinc-base alloy sheet fabrication offcuts |
| covered_products | One identified bare rolled Zn-Cu-Ti alloy sheet-fabrication offcut stream first released as zinc-remelt feed |
| excluded_products | All exclusions in Section 1; reusable intact sheet is not automatically scrap |
| representative_product | Source-segregated bare Zn-Cu-Ti sheet-fabrication offcuts for remelting |
| production_route | Burdened supplied sheet → cold shearing/notching of panel blanks → source segregation → inspection/necessary cold trimming → first feed release → actual pallet/band packing and remelter supply |
| market_state | Solid clean bare alloy clippings; no melting, no fixed grade or receiver acceptance assumed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a source-traceable clean metallic Zn-base alloy feed for a specified remelting operation |
| How much | 1 kg net first-quality-released remelt feed |
| How well | Actual lot and receiver specification jointly establish alloy, metallic form and acceptable contamination; no assumed pure Zn or recovery performance |
| How long or cycle | One first-release event for one traceable cohort; later shipment/retest is a service |
| reference_flow_link | released_zinc_offcuts |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Quality-released bare Zn-Cu-Ti alloy sheet offcuts  |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source sheet lot and supplier; actual whole alloy designation; Zn Cu Ti Al and other constituent analyses; rolled flat form and dimensions; bright-rolled bare surface and oil oxide moisture condition; mother-product fabrication and burden origin; cold-shear and notch configuration; segregated traceability; first-release gate and Q_c cohort; actual remelter specification and dated acceptance; package composition and tare; factory and receiver geography; reporting period and service routes; upstream-provider and allocation basis; actual flow-identity applicability |

Declare every required qualifier in dataset context. The reference product is the single whole bare Zn-Cu-Ti alloy sheet-offcut exchange released_zinc_offcuts. Its product UUID is unresolved; a generic alloy name, pure-zinc flow or scrap collection cannot substitute for verified identity. Actual lot analysis and receiver specifications are required; legal status and current receiver authorisation need separate verification.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q_c is measured net solid feed newly first released in cohort c, after actual separately measured tare/free moisture/removal corrections; all quantities and relevant constituent subaccounts remain independently observed. Do not substitute contained Zn for whole alloy mass. |
| `unit_conversion` | all raw numerators | original recorded property | recorded unit | Convert actual t to kg and metered kWh to MJ using exact factors 1000 and 3.6 before attribution. Integrated volume is not multiplied by time again; integrate only a true rate. A volume-to-mass conversion requires independently measured density of that exact substance at its actual state, never water density or a fabricated sheet density. Counted packages require measured whole-article mass for the actual configuration. |
| `single_denominator` | all inventory rows | declared numerator property | per 1 kg reference flow | Raw collection retains original units. Section 8 alone produces A_ic / Q_c once after conversion, stock inheritance and real attribution. Cards and protocol aggregation columns only identify that same final result/basis, never a second calculation. Q_c = 0 retains all real loads in a disclosed loss/carryover account and produces no unit result. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete` | foreground | Include supplied-sheet receipt, original cold fabrication, segregated preparation, quality release, actual storage/packing/handling, inbound and outward/return transport through the declared zinc-remelter receiving gate. Keep failed and zero-output batches, start/stop, idle, cleanup and incremental rework. Included supplier history is never reset at scrap creation. | `rheinzink-classic-2024`; `rheinzink-fabrication-2024`; `basel-r4-2004`; `ilcd-attributional-2010` |
| `boundary_internal` | internal links and stock | Maintain a separate gross physical V ledger and an attributable exchange-burden vector for each lot and opening/closing WIP at every gate. Transfer each vector without re-purchasing, dilution by fresh-only averaging or hidden cancellation of losses. Cancel only matching internal transfers when consolidating gates; do not cancel external waste/emissions or internal rework effort. | `ilcd-attributional-2010` |
| `boundary_fg` | release and supply services | Q_c is first release, not net dispatch. Closing FG already contains the same batch first-release material and must not be added to Q_c. Keep opening/closing FG, every gross shipment and external return with its original cohort and burden. H (handled/delivered mass) is a service driver only. Packing or receiver retest adds no production. Reverse a returned original delivery and add actual incremental services/rework without manufacturing new historical burden or erasing the old one. | `ilcd-attributional-2010` |
| `boundary_actual_exchanges` | conditional and additional operations | No furnace, steam, purchased heat, process gas or chemical wash is inherent in this selected dry cold route. Demonstrate actual absence instead of setting unknowns to zero. Add and query each real unlisted input, tool replacement, complete purchased formulation, fuel, refrigerant, cleaning chemical, water, wastewater, solid waste and chemical emission separately before using a package with those operations. Actual mixing from purchased ingredients requires separate purchased materials and real mixing energy/losses. Do not use “other” bundles. | `rheinzink-classic-2024`; `rheinzink-fabrication-2024`; `basel-r4-2004` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One supplied bare rolled Zn-base alloy sheet lot with original supplier burden, surface state, packaging and receipt inventory |
| starting_condition_role | Burdened intermediate material genuinely cut/notched into the mother product and segregated offcuts |
| product_classification_scope | Narrow clean sheet-fabrication metallic offcut subset of CPC 3.0:39365 |
| recursive_input_rule | Do not replace the source manufacture with bought finished scrap; any actual external same-category return/feed is recorded once with its own provenance and burden and requires separate applicability review |
| upstream_dataset_requirement | One compatible provider per whole purchased article or service; confirm alloy/form/route/state and avoid duplicated included packaging or transport |
| disclosure | Report all Section 3 qualifiers and process/FG/consolidated physical gates, inherited vectors, actual allocation, omitted scope and receiver evidence |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source_fabrication | Original panel-blank cold fabrication | required | Same identified supplied sheet lot | Joint mother product and offcut generation | Q_c |
| feed_preparation | Segregated feed preparation and first release | required | Real inspection and necessary cold size trimming | Only first-release production gate | released_zinc_offcuts |
| supply_services | Cohort storage packing and supply | required | Actual route and package through receiving gate | Services on original cohort; H is not production | Q_c |

Each card consumes the one Section 8 `norm_once` result for its row and cohort. Internal-material cards preserve physical quantities and transferred vectors; consolidated modelling cancels the internal pairs. Conditional cards need actual observation; zero/absence must be supported. All restrictions in the card description remain part of the consumable rule context.

### Process: Original panel-blank cold fabrication (`source_fabrication`)

#### Inputs

##### Product flows

###### Whole supplied bare rolled alloy sheet (`supplied_sheet`)

One identified bare rolled Zn-Cu-Ti alloy sheet lot, constrained by supplier declaration and actual composition. Purchase the whole alloy once; elements, residual oil and moisture are non-additive subaccounts. Inherit supplier packaging and prior burdens once. The actual product UUID remains unresolved.

- Selected flow: Bare rolled Zn-Cu-Ti alloy sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `rheinzink-classic-2024`; `rheinzink-fabrication-2024`; `ilcd-attributional-2010`

###### Fabrication electricity (`fabrication_electricity`)

Include actual alternating-current electricity for this operation, including starts, failures, idle periods and cleanup. Collect voltage, geography, period and supply mix and select a compatible provider; the product UUID is unresolved. Convert metered kWh to MJ once before attribution; do not invent transformation losses.

- Selected flow: Alternating-current electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_source_fabrication`
- Sources: `rheinzink-fabrication-2024`; `ilcd-attributional-2010`

###### Machinery maintenance mineral-oil lubricant (`machine_oil`)

Conditional on actual use of this whole formulated mineral-oil machinery lubricant. Collect supplier product/SDS, composition, makeup, opening/closing stocks, maintenance interval and spent-oil destination; do not buy its base oil and additives again. Another actual lubricant requires its own specific card; unknown is not zero and the UUID is unresolved.

- Selected flow: Formulated mineral-oil machinery lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `rheinzink-fabrication-2024`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Joint cut and notched roofing-panel blank (`panel_blank`)

The actual mother-product output from cold sheet cutting/notching before assembly, coating, soldering or installation. Record the complete blank with its exact alloy and geometry; its specific product UUID remains unresolved. Its mass and attributable burden remain separate from scrap; no fabricated sale price or yield.

- Selected flow: Bare zinc-alloy roofing-panel blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `rheinzink-fabrication-2024`; `ilcd-attributional-2010`

###### Internal source-segregated solid offcuts (`raw_offcuts`)

Segregate this one known sheet lot at creation, before contact with other alloys, coatings or floor sweepings. Transfer measured whole offcuts and every inherited exchange-burden vector to feed_preparation. This is internal material, not a second external purchase or newly accepted Q_c. Reusable sheet remnants remain separately identified stock until genuinely designated to this offcut route.

- Selected flow: Bare zinc-alloy sheet offcuts before feed release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wip_source_fabrication`
- Sources: `rheinzink-classic-2024`; `rheinzink-fabrication-2024`; `basel-r4-2004`; `ilcd-attributional-2010`

##### Waste flows

###### Rejected zinc-alloy pieces (`source_rejects`)

Measure each rejected solid piece that really leaves the source process as waste, with its destination and composition. Internal rework stays internal with original burden and actual incremental processing. Do not turn rejected output into reference product or discard failure burdens.

- Selected flow: Rejected bare zinc-alloy sheet pieces
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_loss_source_fabrication`
- Sources: `basel-r4-2004`; `ilcd-attributional-2010`

###### Spent machinery lubricant (`spent_machine_oil`)

Actual spent whole formulation from machine_oil; distinguish retained oil, stored oil, collected waste and actual spills by independent measurements. Trace the receiver and treatment, add every actual oily absorbent as its own row, and do not equate an unmeasured oil loss with an air or water emission.

- Selected flow: Spent mineral-oil machinery lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `ilcd-attributional-2010`

### Process: Segregated feed preparation and first release (`feed_preparation`)

#### Inputs

##### Product flows

###### Internal offcut transfer into preparation (`offcut_transfer`)

Same physical transfer as raw_offcuts, with matching lot mass and exchange-specific inherited burdens; one internal link and no upstream provider added here. Inspect, manually remove actual foreign objects and make only necessary cold size cuts. No washing, chemical stripping, melting, briquetting or furnace operation is presumed.

- Selected flow: Bare zinc-alloy sheet offcuts before feed release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wip_feed_preparation`
- Sources: `rheinzink-classic-2024`; `basel-r4-2004`; `ilcd-attributional-2010`

###### Preparation electricity (`preparation_electricity`)

Include actual alternating-current electricity for this operation, including starts, failures, idle periods and cleanup. Collect voltage, geography, period and supply mix and select a compatible provider; the product UUID is unresolved. Convert metered kWh to MJ once before attribution; do not invent transformation losses.

- Selected flow: Alternating-current electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_feed_preparation`
- Sources: `basel-r4-2004`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### First quality-released net remelt feed (`released_zinc_offcuts`)

One source-traceable bare Zn-Cu-Ti alloy sheet-offcut exchange from genuine cold shearing/notching of the mother product and segregated preparation. Net Q_c is first quality release, excluding packaging, free water and measured removed contaminants. Retained surface oxide, oil and elemental analyses are non-additive subaccounts. Receiver agreement must explicitly accept this alloy, metallic form, oil/moisture/oxide condition, size, packaging and remelting use. Pure-zinc Screen qualification does not follow. The specific product UUID remains unresolved.

- Selected flow: Quality-released bare Zn-Cu-Ti alloy sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `rheinzink-classic-2024`; `rheinzink-fabrication-2024`; `basel-r4-2004`; `rema-zinc-2026`

##### Waste flows

###### Nonconforming segregated alloy offcuts (`preparation_rejects`)

Actual rejected whole material with its separately identified receiver/treatment route. Do not mix it into Q_c or use a generic accepted-scrap UUID to conceal contamination. Any secondary commercial output needs its own proven identity and allocation evidence.

- Selected flow: Rejected zinc-alloy remelt-feed offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_loss_feed_preparation`
- Sources: `basel-r4-2004`; `ilcd-attributional-2010`

###### Removed steel foreign object (`detached_steel`)

Conditional actually observed steel foreign matter, weighed and routed separately. It is not zinc alloy mass or default loss. Split any other observed foreign material into its own specific row and query.

- Selected flow: Detached steel fragment from offcut segregation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_loss_feed_preparation`
- Sources: `basel-r4-2004`

###### Contained cold-cut alloy fines (`collected_fines`)

Conditional actual fines from fabrication and necessary preparation; source tags partition the one total non-additively. Do not identify these alloy fines as pure zinc powder or furnace ZnO. Separate dry metal, surface oxide, oil and moisture subaccounts using independent observations.

- Selected flow: Contained zinc-alloy cutting fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_loss_feed_preparation`
- Sources: `basel-r4-2004`; `ilcd-attributional-2010`

##### Elementary flows

###### Verified metallic-zinc particulate to air (`metallic_zinc_air`)

Conditional only if actual atmospheric release and metallic Zn speciation are established. Do not rename total alloy dust, total-Zn assay, ZnO or an indoor captured residue as this species. Query each actually evidenced species and receiving compartment separately; add Cu/Ti/Al species and water releases if observed. Unmeasured release is unknown, not zero or a fitted mass-balance residual; absence needs process and measurement evidence. Capture source/preparation origin as non-additive partitions.

- Selected flow: Metallic zinc particulate to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_loss_feed_preparation`
- Sources: `basel-r4-2004`; `ilcd-attributional-2010`

### Process: Cohort storage packing and supply (`supply_services`)

#### Inputs

##### Product flows

###### Original released cohort into supply (`released_transfer`)

Internal transfer of the original first-release cohort and vector from released_zinc_offcuts. Opening released FG belongs to its original cohort Q_c. No second purchase, second production output or new acceptance is created by packing, shipment, arrival or retesting.

- Selected flow: Quality-released zinc-alloy sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Returned previously released offcuts (`returned_offcuts`)

Conditional physical return matched to the original delivery, including its original burdens and reversal of the corresponding delivery transfer. Credit no new Q_c; add actual return transport, handling and incremental rework to the original cohort. Separate return rejection and any genuine new material addition.

- Selected flow: Returned zinc-alloy sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-attributional-2010`

###### Storage handling and packing electricity (`service_electricity`)

Include actual alternating-current electricity for this operation, including starts, failures, idle periods and cleanup. Collect voltage, geography, period and supply mix and select a compatible provider; the product UUID is unresolved. Convert metered kWh to MJ once before attribution; do not invent transformation losses.

- Selected flow: Alternating-current electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_supply_services`
- Sources: `ilcd-attributional-2010`

###### Contracted road freight for this cohort (`road_transport`)

One actual contracted transport service with route, vehicle, load and return conventions declared. Record gross physically carried payload including attached packaging, actual distance and empty-return treatment; do not replace payload with burden-allocated A_i or Q_c. Provider emissions and fuel are included once; do not also buy the same diesel or duplicate its exhaust locally. Transport identity must match the actual configuration.

- Selected flow: Road freight service for segregated zinc offcuts
- Flow property / unit: mass*distance / t*km
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Wooden shipping pallet (`wood_pallet_received`)

Conditional on actual use of one wooden shipping pallet; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record disjoint physical receipts P+N_ext+ER once, including supplier-attached packaging. Unknown history is not zero. Manufacture is counted only within its proven burden-owner/provider scope.

- Selected flow: Wooden shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Polyethylene protective cover (`pe_cover_received`)

Conditional on actual use of one polyethylene film cover; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record disjoint physical receipts P+N_ext+ER once, including supplier-attached packaging. Unknown history is not zero. Manufacture is counted only within its proven burden-owner/provider scope.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Carbon-steel bundle strap (`steel_band_received`)

Conditional on actual use of one carbon-steel packaging band; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record disjoint physical receipts P+N_ext+ER once, including supplier-attached packaging. Unknown history is not zero. Manufacture is counted only within its proven burden-owner/provider scope.

- Selected flow: Carbon-steel packaging band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Solid paperboard protective interleaf (`paperboard_interleaf_received`)

Conditional on actual use of one solid-paperboard interleaf; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record disjoint physical receipts P+N_ext+ER once, including supplier-attached packaging. Unknown history is not zero. Manufacture is counted only within its proven burden-owner/provider scope.

- Selected flow: Solid paperboard packaging interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Polypropylene protective film (`pp_cover_received`)

Conditional on actual use of one polypropylene packaging film; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record disjoint physical receipts P+N_ext+ER once, including supplier-attached packaging. Unknown history is not zero. Manufacture is counted only within its proven burden-owner/provider scope.

- Selected flow: Polypropylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Attached packaging sent with gross shipment — Wooden shipping pallet (`wood_pallet_dispatch`)

Conditional on actual use of one wooden shipping pallet; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual gross attached dispatch S for each event; it creates neither a purchase nor new Q_c.

- Selected flow: Wooden shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Packaging returned externally — Wooden shipping pallet (`wood_pallet_external_return`)

Conditional on actual use of one wooden shipping pallet; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual separate outward return EO to the identified owner; internal reuse is not an external return.

- Selected flow: Wooden shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Attached packaging sent with gross shipment — Polyethylene protective cover (`pe_cover_dispatch`)

Conditional on actual use of one polyethylene film cover; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual gross attached dispatch S for each event; it creates neither a purchase nor new Q_c.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Packaging returned externally — Polyethylene protective cover (`pe_cover_external_return`)

Conditional on actual use of one polyethylene film cover; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual separate outward return EO to the identified owner; internal reuse is not an external return.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Attached packaging sent with gross shipment — Carbon-steel bundle strap (`steel_band_dispatch`)

Conditional on actual use of one carbon-steel packaging band; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual gross attached dispatch S for each event; it creates neither a purchase nor new Q_c.

- Selected flow: Carbon-steel packaging band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Packaging returned externally — Carbon-steel bundle strap (`steel_band_external_return`)

Conditional on actual use of one carbon-steel packaging band; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual separate outward return EO to the identified owner; internal reuse is not an external return.

- Selected flow: Carbon-steel packaging band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Attached packaging sent with gross shipment — Solid paperboard protective interleaf (`paperboard_interleaf_dispatch`)

Conditional on actual use of one solid-paperboard interleaf; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual gross attached dispatch S for each event; it creates neither a purchase nor new Q_c.

- Selected flow: Solid paperboard packaging interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Packaging returned externally — Solid paperboard protective interleaf (`paperboard_interleaf_external_return`)

Conditional on actual use of one solid-paperboard interleaf; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual separate outward return EO to the identified owner; internal reuse is not an external return.

- Selected flow: Solid paperboard packaging interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Attached packaging sent with gross shipment — Polypropylene protective film (`pp_cover_dispatch`)

Conditional on actual use of one polypropylene packaging film; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual gross attached dispatch S for each event; it creates neither a purchase nor new Q_c.

- Selected flow: Polypropylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Packaging returned externally — Polypropylene protective film (`pp_cover_external_return`)

Conditional on actual use of one polypropylene packaging film; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record actual separate outward return EO to the identified owner; internal reuse is not an external return.

- Selected flow: Polypropylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Original released offcuts at remelter receiving gate (`delivered_offcuts`)

Same quality-released cohort as released_zinc_offcuts, with original alloy and all receiver restrictions retained. Measure actual bare gross shipment/receipt separately from packaging and reconcile returns, damage and rejected delivery. Delivery/retest does not produce a second reference output; retain all prior burdens plus actual supply service. Receiver legal and acceptance status require actual dated evidence, not a current legal threshold inferred from historical guidance.

- Selected flow: Delivered clean zinc-alloy sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `rheinzink-classic-2024`; `basel-r4-2004`; `ilcd-attributional-2010`

##### Waste flows

###### Discarded packaging — Wooden shipping pallet (`wood_pallet_waste`)

Conditional on actual use of one wooden shipping pallet; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record only the discarded counterpart W, actual contamination and destination. It is a waste exchange, not a virgin article; no automatic recovery credit.

- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Discarded packaging — Polyethylene protective cover (`pe_cover_waste`)

Conditional on actual use of one polyethylene film cover; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record only the discarded counterpart W, actual contamination and destination. It is a waste exchange, not a virgin article; no automatic recovery credit.

- Selected flow: Discarded polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Discarded packaging — Carbon-steel bundle strap (`steel_band_waste`)

Conditional on actual use of one carbon-steel packaging band; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record only the discarded counterpart W, actual contamination and destination. It is a waste exchange, not a virgin article; no automatic recovery credit.

- Selected flow: Discarded carbon-steel packaging band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Discarded packaging — Solid paperboard protective interleaf (`paperboard_interleaf_waste`)

Conditional on actual use of one solid-paperboard interleaf; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record only the discarded counterpart W, actual contamination and destination. It is a waste exchange, not a virgin article; no automatic recovery credit.

- Selected flow: Discarded solid paperboard interleaf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Discarded packaging — Polypropylene protective film (`pp_cover_waste`)

Conditional on actual use of one polypropylene packaging film; record its exact material, form, composition, measured mass and supplier. UUID unresolved. Preserve ownership, custody, cohort, inherited burden and provider scope through cp_pack and pack_balance. Record only the discarded counterpart W, actual contamination and destination. It is a waste exchange, not a virgin article; no automatic recovery credit.

- Selected flow: Discarded polypropylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `rheinzink-classic-2024`; `ilcd-attributional-2010`

###### Supply-damaged rejected alloy feed (`supply_rejects`)

Actual irreversible rejection/loss after first release, charged to its original cohort and separately routed. Do not delete the historical first-release record, create new Q_c on reinspection, or silently exclude transport/handling failure.

- Selected flow: Supply-rejected zinc-alloy offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized Section 8 result for this exchange; no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `ilcd-attributional-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_goal` | all modelling | Use attributional accounting only. Keep original sheet/manufacturing burden once and identify actual functional outputs, value status and the true common process gate. A positive scrap value is not proof of zero history or a substitution credit. Industrial manufacturing/recycling evidence is not an allocation prescription; no EPD fixed percentage or Module D credit is imported. | `ilcd-attributional-2010` |
| `allocation_hierarchy` | each exchange | First directly assign dedicated functions and use feasible real/virtual subdivision. Then determine exchange-specific physical causality: embodied sheet metal follows the actual element/mass partition, whereas cutting energy is not automatically allocated by offcut mass merely because trim exists. Evaluate actual determining mechanisms for each load, including shared equipment, stock and loss treatment, with evidence. Avoid a blanket physical/economic choice or fixed allocation share. | `ilcd-attributional-2010` |
| `allocation_residual` | genuinely remaining common burdens | Only after documenting why the preceding steps cannot resolve the remaining load, use actual contemporary market values of actual co-functions at the same common process gate and in their actual condition. Remove downstream packing/transport/conditioning differences from later prices; do not use delivered scrap price against an unprocessed mother product. Reconcile all output shares and loss attribution to 100% of each pre-allocation exchange. Missing values remain unresolved, never invented. | `ilcd-attributional-2010` |
| `allocation_history` | material loops and returns | Document the modelling context and inherited upstream provider convention. This finite foreground method does not implement an infinite recycling-loop factor or assume future collection/processing efficiencies. Any whole-life recycled-allocation claim needs the actual true-joint-process and inherent-property/quality evidence required by ILCD §7.9.3 VI and annex 14.4; keep it outside the present finite result until established. Internal reuse of metal or packaging is a transfer, never a new purchase, free coproduct or automatic avoided-primary credit. | `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The collection tables specify required raw records. Their aggregation_rule column labels only the final reporting basis; collectors never divide raw data. Preserve immutable raw numerators, conversion/attribution records and the one normalized result separately. A_ic is the converted, genuinely attributed raw numerator for exchange i and cohort c after inherited stock vectors and applicable services have been resolved. V is whole physical mass; A is burden attribution and cannot substitute for V in a balance.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | source_fabrication | whole sheet and joint panel output | lot ledger and calibrated weighing | sheet receipts; supplier burden; whole composition; surface oil and moisture; dimensions; mother blanks; usable remnants; failed lots; raw masses | Trace the same lot from receipt through actual smooth-shear/notch operations and weigh every physical outlet; independently sample actual assay and contamination. Keep supplier included packaging and transport scope. | kg | each lot and reconciliation period | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_wip_feed_preparation | feed_preparation | internal material and WIP | physical stock and vector ledger | opening WIP; new receipts; internal transfer; closing WIP; rework; loss; one inherited numerator vector per lot | Weigh and identify every internal transfer and opening/closing stock; reconcile both process sides and carry every original burden component with the same material. | kg | each transfer and period close | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_wip_source_fabrication | source_fabrication | internal material and WIP | physical stock and vector ledger | opening WIP; new receipts; internal transfer; closing WIP; rework; loss; one inherited numerator vector per lot | Weigh and identify every internal transfer and opening/closing stock; reconcile both process sides and carry every original burden component with the same material. | kg | each transfer and period close | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_release | feed_preparation | first released remelt feed | scale tickets and first-release register | cohort c; first-release identity; gross weight; measured tare; free moisture; removed contamination; Q_c; actual Zn Cu Ti Al assay; receiver specification; date | Use a calibrated scale and actual tare correction; independently measure any deducted moisture/contamination, keep retained oxide/oil subaccounts, and match first release to receiver requirements without counting packaging or repeat retest. | kg | each first release and zero-output period | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_energy_feed_preparation | feed_preparation | actual electricity | meter and time-state log | meter starts and ends; raw kWh; site and voltage; supply mix; operating state; idle cleanup failed-lot energy; cohort allocation | Read actual submeter data or reconcile a disclosed shared meter with measured determining use; convert kWh to MJ once and retain actual inactivity and failed runs. | kWh; MJ | each run and full period | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_energy_source_fabrication | source_fabrication | actual electricity | meter and time-state log | meter starts and ends; raw kWh; site and voltage; supply mix; operating state; idle cleanup failed-lot energy; cohort allocation | Read actual submeter data or reconcile a disclosed shared meter with measured determining use; convert kWh to MJ once and retain actual inactivity and failed runs. | kWh; MJ | each run and full period | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_energy_supply_services | supply_services | actual electricity | meter and time-state log | meter starts and ends; raw kWh; site and voltage; supply mix; operating state; idle cleanup failed-lot energy; cohort allocation | Read actual submeter data or reconcile a disclosed shared meter with measured determining use; convert kWh to MJ once and retain actual inactivity and failed runs. | kWh; MJ | each run and full period | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_aux | source_fabrication | whole machinery lubricant | purchase stock and maintenance records | whole formulation id; SDS; receipts; opening and closing stock; actual makeup; retained oil; waste oil; spills; attribution | Weigh actual whole supplied product and trace every destination. Base oil and additive assays are subaccounts; identify and add each actual waste oil or oily absorbent exchange separately before package use. | kg | each maintenance and period | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_loss_feed_preparation | feed_preparation | each waste and real emitted species | segregated scales sampling and emission measurement | row identity; source stage; gross whole waste; actual composition; free water; metallic species; receiving medium; captured versus emitted; destination; uncertainty | Measure disjoint waste outlets and actual air/water release using appropriate independent sampling. Keep metal-element and total physical balances independent of chemical speciation; do not infer ZnO from total Zn or fit two unknowns with one residual. | kg | each lot and actual discharge event | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_loss_source_fabrication | source_fabrication | each waste and real emitted species | segregated scales sampling and emission measurement | row identity; source stage; gross whole waste; actual composition; free water; metallic species; receiving medium; captured versus emitted; destination; uncertainty | Measure disjoint waste outlets and actual air/water release using appropriate independent sampling. Keep metal-element and total physical balances independent of chemical speciation; do not infer ZnO from total Zn or fit two unknowns with one residual. | kg | each lot and actual discharge event | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_fg | supply_services | released stock delivery and returns | cohort FG ledger and receiving tickets | original cohort; opening FG; Q_c; closing FG; gross dispatch; external returns; delivery reversal; rejection; incremental rework; original burden vectors | Reconcile first release with every gross bare-material shipment and receipt; preserve old cohort history, reversals and actual new services through the receiving gate. | kg | each stock event and period close | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_pack | supply_services | each individual packaging article | article-specific physical receipt ownership stock tare and destination ledger | article id and specific material/form/type; Product-flow input direction; independently measured receipt quantity and original unit; measured whole unit mass; receipt id/time/origin; P; first nonpurchase N_ext; ER and same-article prior outward record; owner; custodian; burden owner; cohort; prior exchange-burden vector and unknown history; provider and included supplier package scope; opening empty raw/unused attached-WIP attached-FG and reusable; closing same states; gross S; EO; W; internal issue/reuse; actual rental return handling repair and measured replacement | Independently weigh each actual whole article receipt and segregated discarded counterpart; retain original measurements and any measured count-to-mass conversion for its actual configuration. Classify each external receipt once as P, N_ext or genuine ER using ownership/custody and prior outward evidence; absence of a separate invoice alone does not make a purchased component nonpurchase. Use the same specific received-card interface for the same article/type, preserving separately recoverable event quantities and vectors. Track source and composition partitions non-additively; retain all opening/closing states and per-article destinations. Establish the actual burden owner and compatible provider scope, inherit existing vectors once, and include actual incremental services and replacement/reuse without duplicating whole manufacture or its components. Unknown history remains unknown. | kg | every receipt stock dispatch return and discard | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |
| cp_service | supply_services | actual freight and handling | tickets routes load and service logs | cohort; origin; receiver; vehicle configuration; gross carried material and packages; actual km; empty return; rejection and repeat dispatch; service provider scope | Measure physical payload and route; select representative provider and a determining capacity constraint for shared services. Keep gross V and H separate from attributable A and first-release Q_c. | t*km; kg; km | each real leg and service event | Complete reporting period including opening/closing history and all failures | Named actual site and cohort c | per 1 kg reference flow | Traceable original records calibrated instruments and reconciliation; unknowns explicit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `norm_once` | all inventory rows | x_ic = A_ic / Q_c, executed once only when Q_c > 0; retain each result and its original numerator/unit lineage. Q_c = 0 carries actual burdens with no unit result. Reference output is 1 kg. | A_ic; Q_c; cp_release | x_ic | `ilcd-attributional-2010` |
| `attribute_raw` | raw numerator before norm_once | For each exchange convert actual raw units, add inherited opening-WIP burden and actual newly attributable effort, subtract only the burden actually transferred into closing WIP or a different cohort/function, and preserve all real losses. Reconcile direct assignment and approved residual allocation to the complete pre-allocation numerator. | raw records; inherited vectors; actual allocation; cp_wip_source_fabrication; cp_wip_feed_preparation; cp_source | A_ic | `ilcd-attributional-2010` |
| `physical_gates` | each material process and consolidated boundary | Opening WIP + external incoming V + internal incoming V = closing WIP + external outgoing V + internal outgoing V + independently quantified physical losses. Apply total mass and separate actual Zn Cu Ti Al balances; account for independently observed oxidation oxygen and water only when real. Cancel matching internal V at consolidation; never use an allocation share to close a physical balance. | gross raw masses; independent constituent analyses; cp_source; cp_wip_source_fabrication; cp_wip_feed_preparation; cp_loss_source_fabrication; cp_loss_feed_preparation | physical reconciliation | `basel-r4-2004`; `ilcd-attributional-2010` |
| `fg_balance` | each original cohort | Opening FG + new Q_c + external returned bare feed = closing FG + gross dispatched bare feed + actual post-release rejected/lost feed. All FG terms use the same tare-free and free-moisture-corrected feed-mass basis as first release; retain a separate whole gross V ledger and observed water/contamination changes for physical transport and closure. No second addition of same-cohort closing FG to Q_c. Carry original vector for each stock and reverse matched deliveries; H remains only a service driver. | cp_fg; Q_c; actual service records | cohort FG reconciliation | `ilcd-attributional-2010` |
| `pack_balance` | each package material and article separately | Opening empty + raw/unused + attached WIP + attached FG + reusable stock + new purchases P + first nonpurchase external receipts N_ext + external returns received ER = closing empty + raw/unused + attached WIP + attached FG + reusable stock + attached gross dispatch S + external returns sent EO + actual waste W. P includes whole-consignment purchased components without separate invoices. N_ext is independently measured first borrowed, leased, entrusted or genuinely nonpurchased supplier-attached receipt; ER requires the same identified article's prior outward dispatch. Preserve receipt id/time/origin, owner/custody, cohort, original vector, burden owner and provider scope for each physical input partition, independently of procurement and burden attribution. Internal issue/reuse cancels with its original vector retained. Incoming supplier packaging is identified within external receipts without a second manufacturing provider; whole articles and their component subaccounts are not added together. Unknown history is not zero. Retain actual rental/return/handling/repair services once. Do not put packaging into Q_c or assign automatic coproduct credit. | cp_pack; measured individual article mass; whole receipt and destination records | separate packaging reconciliation | `rheinzink-classic-2024`; `ilcd-attributional-2010` |
| `transport_raw` | road_transport | Freight activity = sum of actual carried payload in t times actual km for each leg, with observed load/empty-return convention and representative provider; allocate services by actual determining constraints before norm_once. Do not use first-release Q_c or burden A as gross payload. | cp_service; actual gross payload; actual route | raw transport activity | `ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | whole material and terminal | Prove single source and alloy-state compatibility, all required qualifiers and a real Product identity before claiming complete guidance. Unbound companion/auxiliary identities are specific gaps. | Supplier documents independent assays native records and receiver agreement |
| dq_quantity | all numerators and denominators | Collect raw finite values with original units and calibrations, complete failure/idle/cleanup history and per-exchange stock inheritance; no default zero or repeated normalization. | Raw ledger conversion log allocation workpaper and one normalized result |
| dq_species | composition mass and emissions | Whole alloy and whole supplied formulations are purchased once. Elements/species/water are independent non-additive subaccounts. Total mass residual cannot establish a chemical species or two missing quantities. | Sampling method detection limits assay closure physical gates and uncertainty |
| dq_context | all providers and services | Confirm technology geography time voltage vehicle form and all native restrictions; preserve unresolved data. Historical EPD/basel observations are not present legal findings or plant defaults. | Actual dated primary records and explicit representativeness rationale |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_applicability` | reference and source | Reject pooled/unknown alloy sources, missing qualifiers and false pure-zinc Screen claims. Verify one specific product identity and its property/unit chain; unresolved product UUIDs do not establish completed exchange-identity validation. Require actual cold fabrication, whole-alloy supply and dated receiver evidence. | `rheinzink-classic-2024`; `rheinzink-fabrication-2024`; `basel-r4-2004`; `rema-zinc-2026` |
| `validate_measurement` | all inventory | Check finite same-reference bases in both languages, exact native property/unit support, every raw quantity, the one A_ic / Q_c execution, Q_c > 0, source/FG/consolidated physical and element balances, and complete stock-vector inheritance. Q_c = 0 is retained but has no unit result. Missing measurements remain unknown. | `ilcd-attributional-2010` |
| `validate_services_pack` | FG and packaging | Check original cohort reversals, all first-release and delivery events, every separate package balance including empty/WIP/FG/reusable opening and closing states, and physical gross payload. Reject second Q_c from closing FG, handling H, delivery or retest; reject doubled package purchase and internal-reuse credit. Verify disjoint P/N_ext/ER physical receipt quantities and each specific input interface with receipt id/time/origin, owner/custody, cohort, inherited vector, burden owner and provider scope; ER needs the same article's prior outward record. Check raw/unused opening/closing stock as well. Reject a false purchase/return for first nonpurchase receipt, unknown history set to zero, or duplicate whole/component manufacture and services. | `rheinzink-classic-2024`; `ilcd-attributional-2010` |
| `validate_allocation` | each attributed load | Require documented dedicated assignment/subdivision, exchange-specific determining physical causality, and justified residual common-gate contemporary value when necessary. The complete assigned vectors sum to pre-allocation load; no arbitrary physical/economic switch, fixed share, invented upstream zero or automatic recycling credit. | `ilcd-attributional-2010` |
| `validate_actual_species` | conditional/additional flows | Check each real atomic formulation, waste and emission with its actual species/medium/destination. Lack of measurement is not absence. If real cleaning, combustion, hydraulic processing or other excluded route is introduced, add the actual complete inventory and review scope before use; do not hide any input/outlet in an unlisted zero or collection label. | `rheinzink-fabrication-2024`; `basel-r4-2004` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Source-specific feed burden for the actual compatible zinc remelter; supply services retain original cohort |
| allowed_use | Only the proved bare single-alloy cold-sheet route with complete actual identity, measurements, allocation and receiver data |
| excluded_use | No whole-leaf coverage; no legal status certification; no pure-metal/alloy substitution; no automatic primary-zinc displacement or recycling-rate model |
| required_metadata | All Section 3 qualifiers and evidence of each applicable native restriction and one provider per whole exchange |
| required_quality_disclosure | All specific exchange UUIDs unresolved; actual alloy and receiver conditions, raw data coverage, allocation uncertainty, omitted operations, provider applicability and packaging history |
| update_trigger | Change in source alloy or surface, mother fabrication, preparation, receiver, package, geography, energy supply or material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `rheinzink-classic-2024` | dataset | RHEINZINK / IBU, EPD-RHE-20230365-IBA1-EN, RHEINZINK-CLASSIC bright-rolled, issued 2024-01-02, §§2.1–2.9 and 2.14; https://www.rheinzink.com/fileadmin/redaktion/RHEINZINK_GLOBAL/Downloads/Technical-Documents/epd_rheinzink-classic_bright-rolled_2024-2029.pdf | Actual whole alloy/rolled-sheet supply and original manufacture, including pre-alloy melting, mixing, solidification and rolling; dry handling; separate real packaging and cuttings to secondary melting plants. Qualitative route evidence only: no recipe/density/efficiency/Module D credit adopted. |
| `rheinzink-fabrication-2024` | handbook | RHEINZINK America, Standing Seam Metal Roofing Panels, Section 07 61 13, September 2024, printed pp6–9 (full downloaded technical binder PDF pp48–51); https://www.rheinzink.us/fileadmin/redaktion/RHEINZINK_US/Downloads/Technical-Documents/Division_7_binder_Volume_10_Chapter_3_Standing_Seam_Roof_09_2024.pdf | Primary cold smooth-blade shearing/snips and rounded-notching fabrication, collection of drop-offs; separate adjacent installation, sealant, solder and coating alternatives. Not one measured same-factory order. |
| `basel-r4-2004` | official_guidance | Secretariat of Basel Convention, Technical guidelines R4, adopted decision VII/14 October 2004, printed November 2010 UNEP/SBC/2010/21, §§17–26 and 63–67; https://www.doe.gov.my/wp-content/uploads/2021/07/Technical-guidelines-on-the-environmentally-sound-recycling-or-reclamation-of-metals-and-metal-compounds-R4-1.pdf | Independent known-composition prompt-scrap generation, segregation and specification-driven direct remelting; distinguish zinc sheet clippings from ash/dross, coated steel and dust. Historical technical context only; no current legal threshold or authorisation. |
| `ilcd-attributional-2010` | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March 2010, §§7.9.2–7.9.3 pp255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining physical causality, genuine residual common-gate market value and 100% conservation; note recycling-specific true-joint-process limits. No numerical allocation factor adopted. |
| `rema-zinc-2026` | standard | ReMA ISRI Specifications, January 2026, Nonferrous Zinc, printed p12 and adjacent pp11–13; https://www.isrispecs.org/wp-content/uploads/2026/01/2026-January-ReMA_ISRI_Specifications.pdf | Counterevidence: Screen is new pure-zinc sheet/stamping scrap; alloy-specific receiver acceptance cannot be inferred. Distinguish old-zinc, die-cast, dross and mixed grades; no acceptance numeric adopted. |
| `un-cpc3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF pp203–204, code39365; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification meaning only; no PCR identity, methodology approval or positive mapping. |
| `rheinzink-material` | handbook | RHEINZINK, Titanium zinc, https://www.rheinzink.com/products/materials-surfaces/titanium-zinc/ | Confirms zinc base with added Cu/Ti for architectural alloy; base-metal purity is not finished-alloy purity. No web composition fraction, density or recycling-performance default adopted. |
