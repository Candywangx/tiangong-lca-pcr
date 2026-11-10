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
| first_release_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | D is the sum of unique first-acceptance event net masses during the stated period/configuration, locked at each completed bare body's actual acceptance moisture. Newly accepted closing FG and all later dispositions remain part of D. Exclude packaging, opening accepted stock, returns and repeat acceptance from new D. Calibrated net weighing and immutable body/cohort-event links establish D; count and dimensions are cross-checks only. Reconcile all dispositions through acceptance_event_bridge without resetting D to dispatch or remaining stock. |
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

The dry-wood physical production boundary ends at the completed body's quality-acceptance gate. Its opening/closing stocks contain only material physically inside that gate: raw wood, WIP (including accepted-origin rework returned inside), internal templates and residue stocks; accepted FG outside the gate is excluded. Record every actual accepted-to-WIP re-entry and subsequent gate exit at its then-current mass/moisture, even when an old cohort returns. First acceptance is an event subset of gate exits, not an additional output alongside them. FG storage, dispatch, returns and packing after that gate are separate custody/service ledgers of the original cohort. Include blank preparation, test cuts, drilling, central cutout, routing, sanding, dust collection, extraction/compressor electricity where present, acceptance/rework, cleanup and actual packing services within the foreground inventory scope; the dry-wood gate ledger and the service scope are explicitly distinguished. Outsourced machining must be represented once at its actual service gate. Include its energy/material/waste inventory or the corresponding complete service provider, never both. Wood-carbon stock is not an automatic negative emission. No onsite kiln, steam, fuel combustion or chemical finishing is included in this supported dry electric-machining route. Their actual use fails route applicability and requires method extension.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| body_machining | Single-piece frame-body machining and release | required | Supported dry-machining route | foreground production | 1 kg |

### Process: Single-piece frame-body machining and release (`body_machining`)

Preserve gross physical quantity V_i and attributed quantity A_i as separate ledgers for every atomic exchange. Original meter/weight/time units and actual stage scope are retained before subdivision or causal attribution; inventory cards use A_i / D once. Physical co-output/waste quantities remain gross V_i even if burden shares differ. The cards express the target inventory burden view; the parallel physical ledger reports each full V_i, with no allocation-share reduction. Do not feed both views into the same model or label an attributed burden amount as the actual outgoing physical mass. Link opening/closing raw, WIP, accepted FG and residue stocks separately by physical location and immutable cohort to inherited per-exchange burden vectors. Only raw/WIP/templates/residues inside the production gate enter dry_wood_closure stocks; accepted FG outside the gate never does. First-accepted closing FG belongs in event-locked D once; all other later dispositions also remain in D. Redelivery, returns, physical WIP re-entry and reacceptance never create new D or repeat original slab burdens. Attribute all additional storage/packing/return/rework/loss activities to their original cohort; earlier accepted cohorts use their original D0, never current new D. Unknown D0 or inherited vectors remain unresolved and permit only an unnormalized correction ledger. Retain failed batches, idle/startup/cleanup and D=0 ledgers; never erase or divide by zero. Integrate rates over actual time once, then convert units and attribute. Each delivery leg retains gross carried mass, distance and direction; tkm = kg / 1000 × km once. Internal reusable cutouts/templates are stock transfers rather than new external receipts.

Conditional rows below require actual occurrence or documented absence; an unknown amount is not zero. Each card is one exchange. A positive actual consumable, packaging component, coolant, lubricant, maintenance addition, spent tooling or emitted species absent from these cards requires its own specific identity, protocol and compatibility review. The declared route has no coating/glue burden and no invented factory bill.

#### Inputs

##### Product flows

###### Wood material (`slab`)

Purchased dry untreated unglued solid-coniferous-wood slab, including actual moisture. Record species, dimensions, gate, dry conditioning and supplier. The broad identity describes supplied wood material; the upstream provider must supply this slab rather than a finished frame.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

#### Outputs

##### Product flows

###### Wood material (`frame_body`)

The complete accepted uncoated frame body contains only one-piece solid coniferous wood and actual contained water. Net quality-release mass excludes all packaging. The 1 kg card is the normalized first-acceptance reference coordinate, not an extra external dispatch or a second copy of the physical gate output. Actual first and repeat gate crossings are retained separately under dry_wood_closure. Wood material represents the complete body here; it cannot substitute for a glazed multi-material frame.

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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
- Amount rule: Collect the actual cohort-attributable exchange quantity under the per-exchange cohort rules above and divide once by its locked D (original D0 for earlier accepted cohorts); retain the gross physical ledger.
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
| cp_release | body_machining | frame_body and denominator D | primary measured records | SKU; species; dimensions; immutable body/cohort ID; first acceptance event/time, net kg and moisture; original D0 for older cohorts; gate-side raw/WIP/templates/residue stocks and separate accepted FG stocks; linked gross dispatch/returns; every loss, downgrade, waste and WIP re-entry/re-exit with mass/moisture/time/destination; inherited per-exchange vectors | Calibrated net weighing at the completed bare-body first acceptance; lock D by unique events. Reconcile complete mutually exclusive net destinations on the original acceptance basis through acceptance_event_bridge, including post-acceptance loss and closing WIP. Record every actual physical re-entry/re-exit at current mass for dry_wood_closure; reacceptance never adds D. Keep older FG/return services under original D0, with unknown history unresolved. Exclude packaging. | kg | each event, movement and period close | declared production period plus inherited cohort history, including failed/idle intervals | actual plant and one configuration; production gate separate from post-gate custody/services | per 1 kg reference flow | scale calibration, acceptance drawing, cohort/event and complete destination/gate reconciliation |
| cp_material | body_machining | slab, sandpaper, reusable_cutout | primary measured records | row_id; supplier; actual SKU/species/grade; original unit; external receipt/consumption/return; current mass/moisture by stream; gate-side opening/closing raw/WIP/template/residue stocks; linked internal transfer and accepted-origin re-entry/re-exit; template life; cutout buyer specification and full mass; inherited cohort vector | Weigh separate wood and whole abrasive streams; sample actual dry-basis moisture at every distinct state. Distinguish production-gate stocks from post-gate accepted FG, actual external receipts from internal transfers, and internal templates from accepted non-waste cutout sales. Pair both sides of rework crossings; no second wood purchase or first-acceptance event. Record tool/template consumption or outsourced service once. | kg | each lot and stock/gate movement | same production period plus inherited cohort history | actual stage, gate side, material and configuration | per 1 kg reference flow | supplier specification, sample method, stock/crossing/cohort and buyer evidence |
| cp_energy | body_machining | electricity | primary metered records | stage; meter readings; raw kWh or power/time; voltage; machine operating/idle/test hours; extraction/compressor; shared circuit and causal subdivision; provider/year | Submeter each stage where available; integrate compatible power-time records once only when needed. Reconcile stage totals and unassigned idle/cleanup with site bill; record actual causal allocation rather than nameplate load. Convert kWh to MJ once. | MJ | each meter interval and period close | same production period including failed work | actual plant electrical boundary | per 1 kg reference flow | calibration, load-time measurements, bill and allocation evidence |
| cp_packaging | body_machining | carton | primary measured records | whole carton SKU/furnish; mass; first receipt; ownership; purchased/loaned status; cohort; opening/closing raw/WIP/finished packaging stocks; return history; provider; gross dispatch | Weigh actual whole cartons and confirm actual furnish compatibility. Separate first external receipts, prior outward returns, internal reuse and actual waste. Absence of separate invoice does not prove nonpurchase; a purchased whole package includes its components once. Preserve each transport leg. | kg | each receipt, packing and return event | same period plus inherited cohort history | actual packing operation | per 1 kg reference flow | carton specification, ownership/receipt history and stock/provider reconciliation |
| cp_waste | body_machining | each segregated waste | primary measured records | row_id; origin stage, gate side and original cohort; wet mass; moisture/contamination; stock; waste status; actual receiver; transport; treatment boundary | Weigh each stream independently and reconcile gate-side stocks. Separate pre-gate waste, accepted-origin rework waste inside the gate, and post-gate FG loss/waste outside it; each actual waste enters one physical balance only. Preserve its original cohort attribution. Keep cutting rejects, collected dust, abrasive with adhered dust, and carton waste separate; no source-comment percentage or assumed treatment credit. | kg | each movement and period close | same production period | actual stage and receiver gate | per 1 kg reference flow | scale, analytical basis, manifests and receiver acceptance |
| cp_emission | body_machining | each outdoor PM bin and water vapour | primary measured records | row_id; stack/fugitive point; concentration; gas-flow/time/dry-wet/standard basis; PM size cuts/filterable scope; control/capture; gate-side wood-water stocks; current moisture of every gate crossing; original cohort; actual outdoor compartment | Use matched outdoor emission tests or a documented site mass balance with uncertainty. Distinguish collected residues, indoor air and outdoor releases. Do not infer PM fractions or wood-water evaporation from unpaired samples. Add any actual non-PM species separately. | kg | each test and represented operating interval | same period with sampling coverage disclosed | actual release point and configuration | per 1 kg reference flow | test method, detection limits, flow-time integration and water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows except frame_body | Inventory amount = actual cohort-attributable exchange quantity / its event-locked D (original D0 for an earlier accepted cohort). Keep original numerator units; determine causal shares and inherited raw/WIP vectors before dividing once. Include all applicable post-acceptance services and failed/rework activity of that cohort; never shift old FG/return services to new D. D=0 or unknown D0 preserves an unnormalized ledger and blocks the affected normalized result. Physical gate crossings, external dispatch and full waste quantities remain separate from attributed numerators and the 1 kg reference coordinate. | cohort-attributable exchange quantities; D/D0; cp_release; inherited vectors | amount per 1 kg reference flow | |
| dry_wood_closure | slab, frame_body, reusable_cutout, wood_offcut, sawdust and wood in abrasive_waste | For each actual stock/stream/crossing dry mass = current wet mass / (1 + sampled u). Production-gate balance: opening inside-gate dry stock + actual external dry-wood receipts + accepted-side dry-wood re-entries = closing inside-gate dry stock + actual gross body gate exits + external cutout dry wood + actual external raw-wood returns + actual external dry-wood waste transfers/releases from inside the gate. Residues retained inside remain closing stock, never a simultaneous waste output. Inside-gate stock includes raw/WIP/templates/residues and physically returned accepted-origin WIP, but excludes accepted FG outside the gate. Gross body exits include unique first exits and every actual repeat exit; use the paired physical re-entry once on the input side, never a second purchase or new D. Do not add dispatch, post-gate FG or post-gate losses to this gate balance. Retain a separate whole-site stock/dispatch check, where acceptance/rework transfers cancel and first acceptance is not an external output. Include adhered wood dust only in the abrasive-waste wood subledger; exclude paper, grit and water from dry wood. Investigate residuals using actual uncertainty, never an invented tolerance. | actual stream/crossing/stock weights; sampled u; cp_material; cp_release; cp_waste; cp_emission | dry-wood physical gate closure separate from acceptance-event ledger | usda-wood-handbook-2021 |
| acceptance_event_bridge | first-accepted body cohort | D = sum of unique first-acceptance net kg, locked at the measured acceptance basis. Cross-check D = Dispatch_new + FG_new + Other_new: Dispatch_new is net external dispatch after linked returns, FG_new is closing accepted FG, and Other_new covers every mutually exclusive remaining net disposition, including actual loss, scrap, downgrade/use, transfer out of product scope and closing returned/rework WIP. These are destinations of the newly accepted cohort only (zero opening accepted stock), expressed on its original acceptance mass basis with measured moisture/composition conversion; not raw current wet masses when the basis changed. A returned body is removed from net dispatch and counted once in its actual final FG/WIP/other destination; gross loops/reacceptance are not extra destinations. A 100 kg first acceptance with 60 kg net dispatch, 30 kg FG and 10 kg loss retains D=100 kg. The two-term dispatch-plus-FG shortcut is allowed only with evidenced zero other dispositions. Never infer zero loss, reset D or invent a residual to close the bridge. | cp_release; cp_material; cp_waste; measured basis conversions | locked D and complete net destination reconciliation | |
| stocks_and_services | raw/WIP and accepted cohorts | Keep opening accepted FG and earlier accepted returns under their immutable original cohort and D0; they cannot contribute to new D. Transfer inherited own-foreground per-exchange vectors with raw/WIP once, add current incremental operations once, and avoid adding supplier burdens already represented by the linked provider. Actual return, storage, packing, retest and rework services and their losses remain attached to that original accepted cohort, including when it re-enters the gate and is accepted again. Re-entry/re-exit is physical movement only, not new procurement, first acceptance or repetition of the original burden. Retain full physical streams separately from allocated vectors; unknown D0/history remains an unnormalized unresolved correction. | cp_release; cp_material; cp_energy; cp_packaging; cp_waste | cohort vectors, stocks and service corrections | |
| pm_partition | pm_fine, pm_mid, pm_coarse | On the same measured source/time/filterable definition: fine = PM2.5; middle = PM10 - PM2.5; coarse = total PM - PM10. Require total PM >= PM10 >= PM2.5 >= 0; unmatched cut points or missing measurements block bin inference. Do not sum nested PM totals as separate releases. | matched outdoor PM measurements; cp_emission | nonoverlapping released PM mass | |
| water_closure | water_vapour | On the same production-gate boundary as dry_wood_closure, reconcile water in opening inside-gate stocks + actual external receipts + actual accepted-side re-entries against closing inside-gate stocks + every actual gross body exit + external cutouts + external raw-wood returns + actual external waste transfers and outdoor water releases; retained residues remain closing stock only. Use measured current moisture for each physical crossing; accepted FG/dispatch outside the gate and first-acceptance event totals are not extra terms. Post-gate water changes require their own matched custody/service balance and original cohort attribution. Resolve actual air exchange/uptake and uncertainty; moisture decrease alone cannot establish an outdoor emission. Contained water is not an extra purchased input. | actual wet/dry crossing weights and gate-side stock changes; cp_material; cp_release; cp_waste; cp_emission | separately justified outdoor water release | usda-wood-handbook-2021 |

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
| measurement_gate | all inventory rows | Check per-1-kg basis, linked protocols, finite positive event-locked D, complete acceptance_event_bridge and one normalization. Opening FG, returns and repeat gate exits must not increase new D; later losses must not shrink D. D=0/unknown D0 preserves physical/burden ledgers and blocks the affected normalized result; no count, dispatch, residual FG or wood-intake denominator substitution. | |
| balances_gate | wood, dust, moisture, stocks | Separate physical V, allocated A and event-locked D. Verify dry_wood_closure gate-side stocks excluding post-gate accepted FG, paired actual re-entries/re-exits, full waste quantities and cohort vectors. Verify post-gate net destinations separately, and whole-site closure with internal gate transfers cancelled. Adding accepted FG plus first acceptance to one gate-output balance, omitting re-entry, counting reacceptance as new D, or double counting adhered dust, nested PM or whole packaging/components fails the model. | usda-wood-handbook-2021 |
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
