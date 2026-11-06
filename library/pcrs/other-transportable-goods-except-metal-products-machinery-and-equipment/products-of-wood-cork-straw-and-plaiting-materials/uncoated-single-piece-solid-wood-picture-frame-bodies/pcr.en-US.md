---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.uncoated-single-piece-solid-wood-picture-frame-bodies
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated single-piece solid-wood picture-frame bodies

## 1. Scope and Applicability

This PCR addresses a genuine unfinished picture-frame product: a closed, one-piece solid-coniferous-wood body with a machined viewing opening and rear rabbet, delivered uncoated and unglazed for subsequent framing. The supported route starts with purchased dry, untreated, unglued solid wood, cuts the outer blank and central opening, routes the profile/rabbet, sands, removes dust, checks geometry and releases the body. Single-piece slab machining is documented in a maker case; that case's later oil finish, electronics and hardware are outside this gate [superbender-single-piece-frame-2013]. Commercial unfinished open-back pine frames corroborate that finishing and glazing can follow sale, but do not establish their joint construction [ambiance-unfinished-frame]. This is a scoped methodology synthesis, not a claim that either source measured this exact factory route.

The reference body consists entirely of solid wood and its actual contained moisture. Exclude laminated or jointed blanks, glue, coatings, wax/oil, gilding, glass, backing, metal fittings, artwork, digital equipment, continuous mouldings, building-window frames and all other wooden articles. A rail or uncut slab is not the released frame body. Any retained nonwood component or later surface treatment changes applicability. Frame geometry and minimum remaining wood around the opening must be validated for the actual SKU; no default dimensions, cutter settings, strength, lifetime or conservation performance are prescribed. Machining trials, template wear, tear-out, end-grain breakage and rejected frames belong in the foreground ledger.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.uncoated-single-piece-solid-wood-picture-frame-bodies |
| classification_refs | CPC 3.0: 31914; narrower uncoated one-piece frame-body subset |
| covered_products | Completed uncoated unglazed single-piece solid-coniferous-wood picture-frame body with opening and rabbet |
| excluded_products | Profiles, uncut blanks, jointed/laminated bodies, coated or multi-material frames, mirrors, architectural frames, other wooden articles |
| representative_product | One accepted bare wood frame body, ready for downstream finishing or artwork mounting |
| production_route | Purchased dry solid slab → flattening/outer cutting → drilling/central cutout → profile and rabbet routing → sanding/dust removal → geometry acceptance → optional packing |
| market_state | First factory quality release of the completed uncoated body; actual wood moisture included; transport packaging excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a completed bare picture-frame body for subsequent framing |
| How much | 1 kg net accepted uncoated single-piece frame body |
| How well | Same declared species and geometry; opening, rabbet, remaining wall and surface acceptance verified against the actual purchase specification |
| How long or cycle | One declared production accounting period; no service-life equivalence is asserted |
| reference_flow_link | `frame_body` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Uncoated unglazed single-piece picture-frame body; botanical coniferous species; no retained glue/finish/hardware; outer/opening dimensions, rabbet, thickness and remaining wall; actual dry-basis moisture; net first-release mass; acceptance specification; supplier and completed machining gate; site/year; input slab gate; separately inventoried packaging; upstream and waste-receiver boundaries |

Required qualifiers must accompany every concrete reference exchange. The broad wood identity explicitly leaves form, species, treatment, moisture, route and provider unspecified. It covers the entire pure-wood body only with these qualifiers. It is not evidence that an arbitrary wood supplier supplies a frame. Slab input and frame output may share this material identity while representing different supplied products and gates; never connect the frame output as its own upstream slab supplier. No density or count-to-mass default is implied.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| first_release_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | D is the measured net mass of bodies first accepted during the stated period/configuration, including newly accepted closing finished stock; exclude packaging, opening accepted stock, returns and repeated inspection. Calibrated net weighing and unique acceptance-event records establish D. Count and dimensions are cross-checks, never the denominator. |
| wood_moisture | wood and wood residues | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure dry-basis moisture u = (wet sample mass - oven-dry sample mass) / oven-dry sample mass. Dry wood mass = wet stream mass / (1 + u). Sample each distinct stream/state; do not treat wet mass loss as dry-wood yield [usda-wood-handbook-2021]. |
| electricity_units | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert meter kWh once using 1 kWh = 3.6 MJ; preserve delivered electricity and below-1-kV supply boundary. Do not reinterpret this property label as a fuel or useful heat input. |
| configuration_strata | all inventory rows | Measured original property | declared row unit | Keep different species, opening geometry, rabbet, thickness, route and moisture states separately traceable. Volume conversion requires measured same-state density; no generic softwood density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dry untreated unglued solid-coniferous-wood slab at plant receipt, before frame machining |
| starting_condition_role | Foreground receiving gate, linked to upstream supplied-stock production and delivery |
| product_classification_scope | Completed one-piece frame body within CPC31914; the input slab is not itself the frame |
| recursive_input_rule | No purchased frame bodies in this primary machining route. Preserve slab/frame gate qualifiers even when their broad material UUID is equal; no self-provider loop |
| upstream_dataset_requirement | Actual slab provider covering forestry, sawing, drying and preceding shaping as applicable; actual consumable supply and incoming transport; no burden-free purchased wood |
| disclosure | Receiving and release gates; outsourced flattening/sanding; source and destination transport; machinery/extraction; rejects/stocks; packaging; downstream finishing/glazing exclusions and all unclosed upstream gaps |

Include blank preparation, test cuts, drilling, central cutout, routing, sanding, dust collection, extraction/compressor electricity where present, acceptance/rework, cleanup and actual packing within one foreground unit. Outsourced machining must be represented once at its actual service gate. Include its energy/material/waste inventory or the corresponding complete service provider, never both. Wood-carbon stock is not an automatic negative emission. No onsite kiln, steam, fuel combustion or chemical finishing is included in this supported dry electric-machining route. Their actual use fails route applicability and requires method extension.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| body_machining | Single-piece frame-body machining and release | required | Supported dry-machining route | foreground production | 1 kg |

### Process: Single-piece frame-body machining and release (`body_machining`)

Preserve gross physical quantity V_i and attributed quantity A_i as separate ledgers for every atomic exchange. Original meter/weight/time units and actual stage scope are retained before subdivision or causal attribution; inventory cards use A_i / D once. Physical co-output/waste quantities remain gross V_i even if burden shares differ. The cards express the target inventory burden view; the parallel physical ledger reports each full V_i, with no allocation-share reduction. Do not feed both views into the same model or label an attributed burden amount as the actual outgoing physical mass. Link opening/closing raw stock, WIP, finished bodies and residue stocks to inherited per-exchange burden vectors. First-accepted closing stock belongs in D; redelivery, returns and rework do not create another first-release denominator or repeat the original slab burden. Retain failed batches, idle/startup/cleanup and D=0 ledgers; never erase or divide by zero. Integrate rates over actual time once, then convert units and attribute. Each delivery leg retains gross carried mass, distance and direction; tkm = kg / 1000 × km once. Internal reusable cutouts/templates are stock transfers rather than new external receipts.

Conditional rows below require actual occurrence or documented absence; an unknown amount is not zero. Each card is one exchange. A positive actual consumable, packaging component, coolant, lubricant, maintenance addition, spent tooling or emitted species absent from these cards requires its own specific identity, protocol and compatibility review. The declared route has no coating/glue burden and no invented factory bill.

#### Inputs

##### Product flows

###### Wood material (`slab`)

Purchased dry untreated unglued solid-coniferous-wood slab, including actual moisture. Record species, dimensions, gate, dry conditioning and supplier. The broad identity describes supplied wood material; the upstream provider must supply this slab rather than a finished frame.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Alternating current (`electricity`)

Meter cutting, drilling, routing, sanding, extraction and actual auxiliary electricity by stage. The native flow is CN customer-side below-1-kV alternating current. Site/year/grid/provider and delivery-loss compatibility require confirmation; it is not a universal grid dataset.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

###### Sandpaper (`sandpaper`)

Actual paper-backed abrasive sheet used for dry wood sanding; weigh whole supplied sheet, track grit/backing/binder and exhausted stock. Its native furniture-plant CN context does not establish this factory or provider. Do not also buy its embedded abrasive mineral.

- Selected flow: Sandpaper `b09187da-c3cb-49e6-9b07-9e4ff091fd74`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### corrugated board boxes (`carton`)

Conditional actual corrugated carton. Native furnish is 16.6% primary and 83.4% recycled fibre; require actual whole-carton furnish/grade and provider compatibility or resolve another carton identity. This is neither a prescribed recipe nor a default consumption. Carton remains outside net frame mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

#### Outputs

##### Product flows

###### Wood material (`frame_body`)

The complete accepted uncoated frame body contains only one-piece solid coniferous wood and actual contained water. Net quality-release mass excludes all packaging. Wood material is the whole physical output here, not a substitute for a glazed multi-material frame.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`

###### Wood material (`reusable_cutout`)

Only a separately accepted non-waste solid-wood central cutout sold as a specified usable blank. Record its full actual dimensions, species, moisture, mass and buyer gate. A residual sold for disposal remains waste. Internally reused cutouts remain internal stock, not this external coproduct.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

##### Waste flows

###### Waste solid (`wood_offcut`)

One segregated stream of untreated solid-wood cutting rejects/offcuts sent as industrial waste. Qualify unagglomerated chunks, species, moisture, contamination and actual receiver. No agglomerated-scrap identity, inferred recycling or avoided-product credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### sawdust waste (`sawdust`)

Collected untreated sawing/routing/sanding dust sent as waste, excluding dust still adhered to abrasive. Weigh its actual wet state and stock changes. Native untreated combustion/recovery wording does not select a treatment plant or authorize credits.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Waste solid (`abrasive_waste`)

One segregated spent paper-backed abrasive stream with its adhered wood dust, measured as the whole outgoing solid. Broad Waste solid is conditional on actual receiver acceptance and contamination; no paint-booth or blasting-residue route is inferred. Never count adhered dust again in sawdust.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Packaging waste, cardboard (`carton_waste`)

Conditional segregated cardboard packaging trim/damaged cartons, weighed separately. The native comment contains a 2% expert estimate; reject that estimate for this site and measure the actual stream, stock and receiver.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Actual outdoor PM2.5 mass from tested stack/fugitive release; exclude collected dust and indoor occupational exposure. Use a compatible unspecified-air flow only with actual outdoor discharge metadata.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`

###### particles (PM2.5 - PM10) (`pm_mid`)

Actual outdoor particles above PM2.5 and through PM10, as a disjoint bin on the same sampling/filterable basis. It is not a second total PM10 quantity.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`

###### particles (> PM10) (`pm_coarse`)

Actual outdoor particles above PM10, matched to the other bins and total particulate definition. Missing size data remain a gap, not an assumed distribution.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`

###### water vapour (`water_vapour`)

Actual positive moisture loss to outdoor air during machining/conditioning only when supported by wood/water stock balance and release pathway. Do not confuse wet-wood mass change with dry-wood scrap or infer net uptake as a negative emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual attributable period quantity under the per-exchange rules above and divide by D once; retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`

## 7. Allocation and Co-product Handling

First subdivide actual operations and use direct material/energy records. The central cutout can be a usable co-product, an internal template/blank, or waste; buyer acceptance, actual specification, legal status and disposition establish its role, not positive sale value alone. Keep its full physical mass regardless of the burden share. Internal reuse is not an external coproduct or a second purchase.

For an unavoidable joint operation, identify which outputs actually share each exchange. Attribute stock-preparation burdens using a demonstrated physical relationship on a consistent dry-wood or other justified basis; attribute frame-only rabbet/profile machining, acceptance, packaging and associated emissions to the frame. Frame dust or reject mass is not a market-output denominator. A regional lumber study's mass allocation and finished-product packaging treatment are a case, not a universal frame allocation factor [corrim-northern-lumber-2025]. If no physical relationship is defensible, explain why before applying same-period, same-gate economic allocation to the remaining shared burdens using actual quantities and prices, with sensitivity and price coverage disclosed. Missing causes/prices remain unresolved. Never apply one revenue/mass share to every process exchange, reduce physical outgoing quantities by burden shares, or award unspecified recycling/avoided-product credits.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | body_machining | frame_body and denominator D | primary measured records | SKU; species; dimensions; unique first release event/time; accepted net mass; moisture; opening/closing raw/WIP/finished stocks; inherited per-exchange vectors; rejected/returned/reworked history; dispatch | Calibrated net weighing of the completed bare body; match unique geometry acceptance and reconcile first release with dispatch plus newly accepted closing stock. Exclude packaging and opening accepted goods; retain nonproduction repair work separately. | kg | each lot and period close | declared production period including failed/idle intervals | actual plant and one configuration | per 1 kg reference flow | scale calibration, acceptance drawing, stock and unique-event reconciliation |
| cp_material | body_machining | slab, sandpaper, reusable_cutout | primary measured records | row_id; supplier; actual SKU/species/grade; original unit; received/consumed/returned mass; moisture samples; stock transfer; template life; cutout buyer specification and full mass | Weigh separate wood and whole abrasive streams; retain actual dry-basis wood samples and calibration. Distinguish internal reusable templates from external input and accepted non-waste cutout sales. Record tool/template consumption or outsourced service once. | kg | each lot and stock movement | same production period | actual stage, material and configuration | per 1 kg reference flow | supplier specification, sample method, inventory and buyer evidence |
| cp_energy | body_machining | electricity | primary metered records | stage; meter readings; raw kWh or power/time; voltage; machine operating/idle/test hours; extraction/compressor; shared circuit and causal subdivision; provider/year | Submeter each stage where available; integrate compatible power-time records once only when needed. Reconcile stage totals and unassigned idle/cleanup with site bill; record actual causal allocation rather than nameplate load. Convert kWh to MJ once. | MJ | each meter interval and period close | same production period including failed work | actual plant electrical boundary | per 1 kg reference flow | calibration, load-time measurements, bill and allocation evidence |
| cp_packaging | body_machining | carton | primary measured records | whole carton SKU/furnish; mass; first receipt; ownership; purchased/loaned status; cohort; opening/closing raw/WIP/finished packaging stocks; return history; provider; gross dispatch | Weigh actual whole cartons and confirm actual furnish compatibility. Separate first external receipts, prior outward returns, internal reuse and actual waste. Absence of separate invoice does not prove nonpurchase; a purchased whole package includes its components once. Preserve each transport leg. | kg | each receipt, packing and return event | same period plus inherited cohort history | actual packing operation | per 1 kg reference flow | carton specification, ownership/receipt history and stock/provider reconciliation |
| cp_waste | body_machining | each segregated waste | primary measured records | row_id; origin stage; wet mass; moisture/contamination; stock; waste status; actual receiver; transport; treatment boundary | Weigh each stream independently and reconcile material stocks. Keep cutting rejects, collected dust, abrasive with adhered dust, and carton waste separate; no source-comment percentage or assumed treatment credit. | kg | each movement and period close | same production period | actual stage and receiver gate | per 1 kg reference flow | scale, analytical basis, manifests and receiver acceptance |
| cp_emission | body_machining | each outdoor PM bin and water vapour | primary measured records | row_id; stack/fugitive point; concentration; gas-flow/time/dry-wet/standard basis; PM size cuts/filterable scope; control/capture; wood-water stocks; actual outdoor compartment | Use matched outdoor emission tests or a documented site mass balance with uncertainty. Distinguish collected residues, indoor air and outdoor releases. Do not infer PM fractions or wood-water evaporation from unpaired samples. Add any actual non-PM species separately. | kg | each test and represented operating interval | same period with sampling coverage disclosed | actual release point and configuration | per 1 kg reference flow | test method, detection limits, flow-time integration and water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows except frame_body | inventory amount = actual attributable period quantity / D. Keep original numerator unit; D is cp_release first-accepted bare frame mass. Determine causal shares and inherited stock vectors before dividing once; D=0 preserves an unnormalized ledger and blocks reporting a normalized inventory. Gross physical quantities are retained separately from attributed numerators. | actual attributable period quantity; D; cp_release | amount per 1 kg reference flow | |
| dry_wood_closure | slab, frame_body, reusable_cutout, wood_offcut, sawdust | For each stream dry mass = wet mass / (1 + u). Reconcile opening dry stock + received dry wood against closing dry stock + first-accepted frame dry wood + external cutout dry wood + each dry waste/release. Include adhered wood dust in its abrasive-waste subledger without purchasing it again. Use actual uncertainty to investigate residuals, not an invented tolerance. | stream weights; sampled u; cp_material; cp_release; cp_waste; cp_emission | dry-wood closure | usda-wood-handbook-2021 |
| pm_partition | pm_fine, pm_mid, pm_coarse | On the same measured source/time/filterable definition: fine = PM2.5; middle = PM10 - PM2.5; coarse = total PM - PM10. Require total PM >= PM10 >= PM2.5 >= 0; unmatched cut points or missing measurements block bin inference. Do not sum nested PM totals as separate releases. | matched outdoor PM measurements; cp_emission | nonoverlapping released PM mass | |
| water_closure | water_vapour | Derive positive evaporative loss only from actual water input, retained wood/residue water and opening/closing water stocks on matched scope. Resolve air exchange/uptake and measurement uncertainty; moisture decrease alone is insufficient. Do not count contained water twice as an extra purchased input. | actual wet/dry weights and stock changes; cp_material; cp_release; cp_waste; cp_emission | separately justified outdoor water release | usda-wood-handbook-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| body_integrity | frame_body | Verify one-piece construction and all-wood composition; retain machining drawing, species, moisture and acceptance. Any glue, oil, wax, glazing, metal or electronics fails this scope even if wood dominates total mass. | physical inspection, drawings and supplier declaration |
| provider_gate | every exchange | Full native identity and actual whole supplied product must match property/unit, state and provider gate. Do not attach a generic lumber provider to the machined frame output or buy embedded abrasive/fibre constituents twice. | direct identity plus actual supplier route and quantity evidence |
| represented_period | all inventory rows | Same configuration and time coverage; include failed, startup, idle, cleanup, seasonal and outsourced stages. Missing data and unknown conditions remain disclosed; zero requires evidence of absence. | meters, production and site-walk records |
| carbon_stock | wood material | Retain dry wood and measured/source-qualified carbon fraction, stock and eventual destination separately from fossil consumables. No default carbon fraction, permanent storage credit or zero upstream biogenic release. | moisture, assay or qualified source and upstream coverage |
| packaging_closure | carton | Reconcile each cohort's opening stock + first external receipt + evidenced returns with closing stock + gross outgoing dispatch/return + actual waste. Preserve the provider and inherited burden vector; unknown ownership/history is a gap, never a zero receipt. | whole-object receipt, ownership and gross-movement ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | product and route | Require completed closed one-piece bare solid-coniferous frame with opening/rabbet and no retained nonwood material or finish. Uncut stock, continuous moulding and complete glazed frames are outside scope. | superbender-single-piece-frame-2013; ambiance-unfinished-frame |
| reference_gate | frame_body | Exactly one explicit reference product output uses 1 kg with required form/state/provider qualifiers. Shared generic wood UUIDs do not replace row linkage or permit a supplier self-loop. | |
| measurement_gate | all inventory rows | Check per-1-kg basis, linked collection protocols, finite positive D and one final normalization. Failed D=0 remains a disclosed physical/burden ledger; no count or wood-intake denominator substitution. | |
| balances_gate | wood, dust, moisture, stocks | Separate physical V from attributed A; retain all full outgoing quantities, same-period stock changes and inherited vectors. Double counting adhered dust, nested PM or received whole packaging/components fails the model. | usda-wood-handbook-2021 |
| identity_gate | every row | Exact official Chinese display, actual atomic physical state, property/unit, supplier/receiver compatibility and source restrictions are mandatory. UUID compliance metadata does not confer method or study approval. | |
| uncertainty_gate | allocation and closure | Missing causal shares, composition, source compatibility, capture, stock history or measured uncertainty remains pending review; no invented residual correction or fixed yield. | corrim-northern-lumber-2025 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset after complete foreground collection and independent study qualification |
| downstream_use | Explicit supply of an uncoated unglazed one-piece frame body to later finishing/framing; compatible background linkage only |
| allowed_use | Declared species, geometry, moisture and supported electric-machining route at the stated gate |
| excluded_use | Complete glazed/finished frame, artwork/digital equipment, architectural products, continuous profiles, CPC-wide wooden articles or unqualified frame suppliers |
| required_metadata | Exact bare-body and slab states/gates, species, one-piece construction, geometry/rabbet, first-release moisture/mass, site/year, suppliers, actual process and stock boundaries, packaging and waste destinations |
| required_quality_disclosure | Identity/provider restrictions, source applicability, missing periods/flows, allocation evidence, residuals/uncertainty, outsourced coverage, transport and upstream gaps, downstream finishing/glazing excluded |
| update_trigger | Retained material/finish or gate change; species/geometry/route change; new supplier, source, control, allocation or measurement evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| superbender-single-piece-frame-2013 | literature | Superbender. 17-inch Picture Frame Made From Single Piece Wood Slab (for Digital Picture Frame), 2013-08-04. Introduction and steps 1, 3, 8–15, 20–24. https://www.instructables.com/17-Picture-Frame-Made-from-Single-Piece-Wood-Slab/ | Primary maker case: solid pine slab machining and distinct later finishing/assembly; no factory quantities, prescribed geometry, machine settings or electronics burdens transferred |
| ambiance-unfinished-frame | literature | Jerry's Artarama / Ambiance. Unfinished Gallery Deep Wood Frames, product description and key features. https://www.jerrysartarama.com/ambiance-unfinished-wood-gallery-frames | Commercial unfinished open-back pine-frame gate; not evidence of one-piece construction or actual process inventory |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory. Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), Ch.4 p.4–1 moisture definition. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Dry-basis moisture accounting; no green-wood range, density, yield or lifetime transferred |
| corrim-northern-lumber-2025 | literature | CORRIM. Life Cycle Assessment of Softwood Lumber Production – Northern Region (2025-07-22), section 3.2.6 p.16. https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf | Bounded allocation case and packaging distinction; no regional mass share or universal allocation factor transferred |
