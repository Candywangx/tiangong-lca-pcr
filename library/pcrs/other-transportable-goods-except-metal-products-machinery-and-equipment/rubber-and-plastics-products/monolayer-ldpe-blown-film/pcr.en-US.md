---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.monolayer-ldpe-blown-film
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Air-cooled monolayer LDPE blown flat film from purchased pellets

## 1. Scope and Applicability

This method covers manufacture of plain, non-self-adhesive, noncellular, unreinforced, unsupported, unprinted untreated monolayer LDPE flat film rolls from purchased virgin non-additivated pellets: receipt/conveying, condensation-dependent drying when real, electric melting/homogenising, one annular die, air-cooled bubble, collapse, cold flat splitting, winding, inspection, release packing and first quality release. Include same-formulation clean internal regrind only with full history. Exclude HDPE/LLDPE blends, added masterbatch/filler, external recycled feed, coextrusion/lamination, coating/corona, deliberate post-stretch orientation, cast film, bag sealing, primary resin synthesis and mere bought-film repacking. Actual departures require applicability reassessment and explicit atomic exchanges, never hidden zero or other-material totals.

Distinct industrial sources and a separate allocation guide are transparently synthesised; no same-order claim or universal factory numbers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.monolayer-ldpe-blown-film |
| classification_refs | CPC3.0 36330; proposed narrower context only |
| covered_products | One declared grade/configuration of plain monolayer LDPE flat web rolls cold-split from an air-cooled bubble |
| excluded_products | Other polymers/blends; cellular/adhesive/reinforced/laminated/coated films; cast film; sacks/bags; purchased-film-only wrapping |
| representative_product | Declared flat film roll; Lupolen2420K illustrates a non-additivated pellet supply, not mandatory SKU |
| production_route | Electric single-layer screw extrusion; annular die; air cooling; collapse; cold edge opening; twin flat-web winding |
| market_state | Packed rolls first quality-released at factory, net of removable core and all packaging; electricity binding limited to CN <1kV grid-average consumption supply |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide plain LDPE flat film for its declared conversion/use specification |
| How much | 1 kg net film at first quality release |
| How well | Declared grade, width/thickness tolerances and optical/mechanical acceptance; equal kg does not establish equal function |
| How long or cycle | One manufacturing and first-release cohort; no invented use lifetime |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | LDPE grade and full supplied formulation; virgin non-additivated pellet state; permitted same-formulation internal regrind and history; monolayer noncellular unreinforced unsupported structure; non-self-adhesive unprinted untreated surface; annular air-cooled blown route and cold flat-web split; width and net thickness tolerances; roll net mass and core/wrap tare; actual optical/mechanical acceptance and end-use limits; unique first release and reversal link; reporting period and geography; electricity voltage/provider boundary; actual drying/cooling configuration; raw/WIP/FG cohort mass and inherited per-flow vectors; actual species and waste destinations; each packaging component and reuse history; separate FG-service cutoff |

Every qualifier must be declared in consumed metadata, product/reference comments or equivalent fields. Native absent grade/CAS/route/location/performance is not proof of a particular supplier; preserve the product-card restrictions in full.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calibrated net film mass under cp_release excluding core/packaging; report_once is the unique A_i/Q operation. |
| energy_units | electricity; fg_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Actual same-boundary kWh ×3.6 gives MJ; integrated energy is not multiplied by time again. |
| state_units | fluid and species | Mass | kg | Use same-substance measured density/state and species-vs-carbon basis. Area/roll count is supplementary, never guessed kg/roll or TDS density substitution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory receipt of purchased virgin non-additivated LDPE pellets and actual separately identified supplies, not bought finished film |
| starting_condition_role | Foreground receiving gate with linked upstream supplies; polymer manufacture remains in compatible provider inventory |
| product_classification_scope | A bounded subset of original CPC36330 structure; 36390 other flat plastics, 36410 sacks/bags and 36920 self-adhesive shapes are separately listed; no unseen explanatory-note claim |
| recursive_input_rule | Clean same-formulation internal trim transfers mass and full inherited burden, not a new upstream purchase. Bought LDPE wrap is a separate actual package supply, never substituted for reference manufacture |
| upstream_dataset_requirement | Match whole actual supplied formulation, state, technology, geography, year and property/unit. Identify provider-included packaging/transport once; generic UUID is not supplier footprint |
| disclosure | Complete pellet-to-packed-roll first-release gate plus separate original-cohort post-release storage/handling/loading/dispatch service account. Declare service cutoff, retained FG and later supplements; keep raw production/FG/combined physical and vector ledgers |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | film_line | Include every actual receipt, handling, evidenced drying, screw/screen/die heat, blower/compressor, cooling loop, haul-off, cold slit, winding, testing and packing stage plus failed trials, startup/shutdown, hot standby, cleanup and rework. No purchased-film repacking shortcut. | `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film` |
| boundary_evidence | all stages | Synthesize distinct LYB guide, illustrative TDS and independent POLYSTAR cold-splitting capability transparently; not one SKU/factory/order. Multiextruder/cast-water/corona diagrams are adjacent alternatives, not this route. Typical specimen properties/settings are not universal limits or density conversions. Respect the illustrative resin medical/pharmaceutical exclusion. | `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film` |
| boundary_atomic | every exchange | Purchase each actual whole formulation once; assay/carrier water/active fractions are child accounts. Actual in-plant mixtures need separate purchased constituents and real mixing energy/loss. Every unlisted real ingredient, cleaning agent, lubricant, refrigerant, coolant additive, fuel, package, waste and species requires its own atomic named exchange and applicable state/provider/medium. No other-material, total-VOC chemical or utility bundle, no assumed zero or boiler/steam. Fuel-fired departures require route reassessment and separate real fuels and species. | `lyb-film-extrusion`; `lyb-lupolen-2420k` |
| boundary_cooling | water/heat | Bubble cooling is air cooling, not the neighbouring cast-water route. Include actual barrel/nip/chilled-air water circuits when present. Internal circulation is not external demand. External Product cooling supply and actual Product return need measured mass, constituents, actual T/P and enthalpy plus supplier water/energy/net-service convention; avoid duplicate water production or thermal-service burden. No presumed condensate/boiler. | `lyb-film-extrusion` |
| boundary_q | product; fg_service | Q is newly first-quality-released net film kg after cold slitting, winding, testing and release packing. Closing FG from those lots is already in Q: never add it as production output. Reinspection, shipment, warehouse transfer and prior-released return/rework create no new Q. Keep actual post-release warehouse/packing/handling/loading/dispatch in a separate original-cohort service account, including retained FG and later service supplements. Old FG production burdens do not enter current Q. | `lyb-film-extrusion`; `ilcd-handbook-2010` |
| boundary_species | mass/element/water | Melting/crystallisation is physical change, not assumed reaction water. Distinguish independently evidenced free, phase, reaction and structural water. Independently close total mass and relevant C/H/O or additive elements using measured fractions; measure oxygen uptake if material oxidation requires it. Do not fit two unknowns from one residual or infer named chemicals from COD/VOC. Separate polymer particles, actual gas species, treatment transfers and direct environmental releases. | `lyb-film-extrusion`; `lyb-lupolen-2420k` |
| boundary_history | WIP; FG; returns | Keep opening/closing raw stock, every WIP stage and regrind pool by cohort with a complete per-flow inherited vector; consumed opening cohorts transfer burden and unfinished cohorts carry it forward, including failures and zero-output runs. FG opening/closing/returns retain original release, delivery/reversal and full inherited vectors. Reverse linked original delivery as applicable and add only actual incremental rework/service; no new production from repeat release. Cancel internal Q/rework in combined physical accounting. | `ilcd-handbook-2010`; `lyb-film-extrusion` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| film_line | Complete pellet-to-packed-film first release | required | All stages; actual drying/cooling/regrind/cleaning conditions retained | foreground_manufacturing | product |
| fg_service | Original-cohort post-release services | required | Actual storage/packing/handling/loading/dispatch including closing retained FG | foreground_service | fg_receipt |

### Process: Manufacture and first release (`film_line`)

#### Inputs

##### Product flows

###### polyethylene low density granulate (PE-LD) (`resin`)

Actual virgin non-additivated LDPE pellets, whole supplied formulation purchased once. Native Product/Mass identity leaves CAS, grade, route, form detail and geography unspecified; require actual pellet specification and compatible upstream provider. Assay, free moisture and active fractions are child accounts, not extra purchases. Internal regrind retains inherited burdens and is not purchased resin. The card reports the single report_once result; no additional division here.

- Selected flow: polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `lyb-film-extrusion`; `lyb-lupolen-2420k`

###### Alternating current (`electricity`)

Native Product is CN grid-average consumption supply to user at <1 kV; no other voltage, generator output or transmission-service substitution. Reference property Net calorific value and MJ. Convert actual kWh by 3.6 once before final reporting. Include all actual motors, electrical heating, blowers/compressors, water pumps/chillers, drying, slitting/winding, inspection, packing, startup/idle/cleanup and failed trials without overlapping meters. The card reports the single report_once result; no additional division here.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `lyb-film-extrusion`; `lyb-lupolen-2420k`

###### Polyethylene-based formulated extrusion purge compound (`purge`)

Conditional actual purchased PE-based purge formulation used in changeover/start/stop. Record the whole grade, stabilisers and thermal restrictions; not pure-resin identity plus separately purchased constituent resin. Other actual purge chemistry gets its own named card and residue. The card reports the single report_once result; no additional division here.

- Selected flow: Polyethylene-based formulated extrusion purge compound
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `lyb-film-extrusion`

###### Formulated silicone lubricating grease (`grease`)

Conditional actual die/tool grease during shutdown/cleaning. Record complete supplied base fluid, thickener and additives once, retained grease and actual removed residues; do not assume pure PDMS or a universal amount. The card reports the single report_once result; no additional division here.

- Selected flow: Formulated silicone lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `lyb-film-extrusion`

###### Tap water for cooling-loop make-up (`water`)

Conditional actual external tap-water make-up or cleaning water. Other water origins need separate identities. Internal circulation is not external demand. Measure state, density, stock and outlets; condensation drying is conditional, not assumed LDPE hygroscopic uptake. The card reports the single report_once result; no additional division here.

- Selected flow: Tap water for cooling-loop make-up
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `lyb-film-extrusion`; `lyb-lupolen-2420k`

###### Liquid heat-exchange water supplied for cooling (`cooling_supply`)

Conditional actual external Product cooling-water supply, paired with cooling_return. Retain inlet measured mass, composition, T/P and enthalpy plus supplier water-production/net-heat accounting convention; no assumed installed chiller, steam, boiler or condensate. The card reports the single report_once result; no additional division here.

- Selected flow: Liquid heat-exchange water supplied for cooling
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `lyb-film-extrusion`

###### Stainless-steel extrusion filter screen mesh (`screen`)

Conditional actual replacement screen, alloy and full mass; a permanent breaker plate is not a new consumable each batch. Other actual filter materials require separate cards. Track adherent polymer in spent screen composition. The card reports the single report_once result; no additional division here.

- Selected flow: Stainless-steel extrusion filter screen mesh
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `lyb-film-extrusion`

###### Single removable winding core (`core`)

One cylindrical paperboard winding core, not a packaging bundle. Native Product/Mass, production mix at plant; paperboard-tube/core synonyms and comments are consistent. Size, grade, adhesive, recycled content and geography remain unspecified: verify actual whole-core supply. Exclude tare from film Q; count procurement once and retain empty/attached/reusable stocks and gross outward/return/waste movements. The card reports the single report_once result; no additional division here.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`

###### Low-density polyethylene foil (PE-LD) (`wrap`)

Conditional one purchased removable plain LDPE protective overwrap. Distinguish from manufactured reference film and actual own-film internal use. Native Product/Mass/kg has no CAS, grade, route, geography, performance or recycled-content restriction; actual plain LDPE supplier compatibility remains required, not an adhesive/multilayer proxy. Wrapper is outside Q with its own complete component ledger. The card reports the single report_once result; no additional division here.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`; `polystar-monolayer-flat-film`

###### Polypropylene packaging strap (`strap`)

Conditional actual whole PP strap with measured supplied composition and tare. Metal closures or different composites are additional atomic cards. Keep every empty/attached/reusable stock and external movement; internal reuse is not repurchase. The card reports the single report_once result; no additional division here.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`

###### Timber transport pallet (`pallet`)

Conditional actual whole wooden pallet with fasteners/treatment specified. Separate procurement, repairs, external returns and internal reuse; no assumed lifetime/reuse count. Its attached/empty mass stays outside film Q. The card reports the single report_once result; no additional division here.

- Selected flow: Timber transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`

###### LDPE resin packaging sack (`resin_sack`)

Conditional actual whole LDPE sack received with resin, not a second resin purchase. Identify its supplied composition/mass and supplier-included packaging burden once; retain a component receipt and waste/return/stock account. Other actual bag liners, octabin boards and bulk-container components get separate named cards. The card reports the single report_once result; no additional division here.

- Selected flow: LDPE resin packaging sack
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-lupolen-2420k`; `lyb-film-extrusion`

##### Waste flows

##### Elementary flows

###### Oxygen from atmosphere (`oxygen`)

Conditional net oxygen uptake only if independently evidenced oxidation requires it. Bubble/cooling air throughput is not oxygen consumption. Keep inlet/outlet background correction; never fit uptake and reaction water from one residual. The card reports the single report_once result; no additional division here.

- Selected flow: Oxygen from atmosphere
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `lyb-lupolen-2420k`

#### Outputs

##### Product flows

###### Newly first-quality-released net flat film (`product`)

Unique reference output: actual virgin non-additivated LDPE monolayer, noncellular, unreinforced, unsupported, non-self-adhesive, unprinted untreated flat film; electrically melt-extruded through one annular die, air-cooled, collapsed, cold-slit into flat webs, wound, inspected and packed for first release. Native Product/Mass/kg leaves CAS, grade, route, geography and performance unspecified; these are foreground/supplier requirements, not defaults. Equal-specification twin webs may share the lot; unequal outputs require subdivision. Q counts new first releases once including same-cohort closing FG, excluding removable core/wrap. Repeat release and dispatch create no Q.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film`

###### Liquid heat-exchange water returned to supplier (`cooling_return`)

Conditional actual external Product return paired to cooling_supply. Retain outlet mass, composition, actual T/P and enthalpy; do not copy inlet state, assume full return or grant a default energy credit. Treatment discharge is a different waste outlet. The card reports the single report_once result; no additional division here.

- Selected flow: Liquid heat-exchange water returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `lyb-film-extrusion`

##### Waste flows

###### Clean LDPE film trim for external treatment (`scrap`)

Actual non-reused film scrap, with contamination and receiver. Queried cleaned waste mixture at recycling plant does not identify this untreated factory-gate outlet; no UUID adopted. The card reports the single report_once result; no additional division here.

- Selected flow: Clean LDPE film trim for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `lyb-film-extrusion`

###### Degraded polyethylene extrusion purge residue (`purge_waste`)

Actual residue composition and receiver; formulated purge, oxidised polymer and grease contamination are not clean trim. Distinct actual residues require separate named cards. The card reports the single report_once result; no additional division here.

- Selected flow: Degraded polyethylene extrusion purge residue
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `lyb-film-extrusion`

###### Spent stainless-steel extrusion filter screen (`screen_waste`)

Actual spent screen with adhering polymer as composition subaccount; record whole waste once. Separately stripped polymer requires its own actual outlet. The card reports the single report_once result; no additional division here.

- Selected flow: Spent stainless-steel extrusion filter screen
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `lyb-film-extrusion`

###### Cooling-loop blowdown water for external treatment (`blowdown`)

Actual liquid waste to treatment with dissolved additives, measured state and receiver; neither clean Product return nor direct environmental water emission. The card reports the single report_once result; no additional division here.

- Selected flow: Cooling-loop blowdown water for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `lyb-film-extrusion`

###### Empty LDPE resin sack for external treatment (`sack_waste`)

Actual emptied LDPE resin sack, tracked as received supplier packaging with its already included burden once. Actual octabin, liner or other component needs its own card, not mixed packaging waste. The card reports the single report_once result; no additional division here.

- Selected flow: Empty LDPE resin sack for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`

###### Discarded paperboard winding core (`core_waste`)

Actual unusable whole core with composition, reuse history, contamination and receiver. Cores attached to outward film are not on-site waste. The card reports the single report_once result; no additional division here.

- Selected flow: Discarded paperboard winding core
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`

###### Discarded LDPE protective wrap (`wrap_waste`)

Actual removed/damaged LDPE wrap with component/receiver balance; do not repurchase previously embodied wrap. The card reports the single report_once result; no additional division here.

- Selected flow: Discarded LDPE protective wrap
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`

###### Discarded polypropylene packaging strap (`strap_waste`)

Actual PP strap waste separate from LDPE and metal closures. The card reports the single report_once result; no additional division here.

- Selected flow: Discarded polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`

###### Discarded timber transport pallet (`pallet_waste`)

Actual whole wood pallet waste with receiver; return to owner is a separate packaging return, not waste. The card reports the single report_once result; no additional division here.

- Selected flow: Discarded timber transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lyb-film-extrusion`

##### Elementary flows

###### Water vapour to air (`vapour`)

Conditional actual evaporation/removed free condensation water with independent source and phase evidence. No assumed reaction water. The card reports the single report_once result; no additional division here.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `lyb-film-extrusion`; `lyb-lupolen-2420k`

###### Polyethylene particles to air (`dust`)

Conditional escaped actual LDPE fines after capture; specify particle size/composition. Captured waste and gas VOC are distinct outlets. The card reports the single report_once result; no additional division here.

- Selected flow: Polyethylene particles to air
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `lyb-film-extrusion`; `lyb-lupolen-2420k`

###### Formaldehyde to air (`formaldehyde`)

Only if real species survey identifies formaldehyde CAS50-00-0. Validated species-specific sampling at actual treated/fugitive outlets; neither presence nor absence inferred from guide. The card reports the single report_once result; no additional division here.

- Selected flow: Formaldehyde to air
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `lyb-film-extrusion`; `lyb-lupolen-2420k`

###### Acetaldehyde to air (`acetaldehyde`)

Only if actual survey identifies acetaldehyde CAS75-07-0. Example aldehydes do not establish completeness; every additional actual species needs its own card and validated method. The card reports the single report_once result; no additional division here.

- Selected flow: Acetaldehyde to air
- Flow property / unit: Mass / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `lyb-film-extrusion`; `lyb-lupolen-2420k`

### Process: Finished-stock services (`fg_service`)

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`fg_receipt`)

Internal Q receipt from product, not new purchase or new production. Same Product/Mass/kg native identity and every product-card grade/route/quality restriction apply. Match unique original lot and complete per-flow burden vector; opening FG and old returns have independent histories. Cancel this transfer with production output in combined physical accounting. The card reports the single report_once result; no additional division here.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-handbook-2010`

###### Alternating current (`fg_power`)

Actual post-release storage, electric handling, reinspection, repacking and loading energy by original cohort. Native CN grid-average consumption to user <1kV, Net calorific value/MJ, convert kWh by3.6; same provider restriction as electricity. Old-cohort services never divide by current Q. Target new cohort service is separate from production and uses its same original Q through declared cutoff, with later supplements. The card reports the single report_once result; no additional division here.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-handbook-2010`; `lyb-film-extrusion`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`dispatch`)

Actual gross outward net-film mass by original cohort, separate from packaging and returns. Same Product/Mass/kg identity and all product-card physical restrictions apply. This is a physical service outlet, not second production output or normalization denominator. Closing FG is stock, not extra Q. Beyond-factory-loading transport requires a declared separate extension. The card reports the single report_once result; no additional division here.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported atomic exchange amount per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-handbook-2010`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | attributional inventory | Apply only when study goal/decision context establishes an attributional case needing allocation rather than substitution; no arbitrary modelling-framework choice or full ILCD conformity claim. Industrial manufacturing evidence does not support LCA allocation. | `ilcd-handbook-2010` |
| allocation_subdivide | each shared exchange | First isolate dedicated metered operations and virtually subdivide exclusive embodied materials/services by real lot/stage. Keep responsible-cohort startup, idle, failure, cleaning and rework load; whole-line kg ratios do not replace this step. | `ilcd-handbook-2010` |
| allocation_causality | individual residual exchange | Identify and justify exchange-specific determining physical causality to actual co-functions. Motor work, heating, blower activity, occupancy and limited storage may need different measured drivers or time-capacity combinations. Mass alone is not proof. Keep physical balances and full physical outputs independent of burden shares. | `ilcd-handbook-2010` |
| allocation_residual | genuinely inseparable remainder | Only documented residuals without determining physical causal assignment use contemporaneous representative market values at the common process gate in actual quantity/quality/state. Remove downstream transport/conditioning/packaging value when deriving prices; retain evidence, period, derivation and sensitivity. No fixed ratios, arbitrary physical/economic choice, retail price or indiscriminate total-revenue allocation. Each exchange allocated over co-functions must sum to its original inventory. | `ilcd-handbook-2010` |
| allocation_regrind | internal and external scrap | Clean internal same-formulation regrind retains inherited resin and real grinding/remelting burden; no new purchase, Q, automatic coproduct or avoided-resin credit. Independently establish actual legal/economic state and receiver of external trim, purge and packaging waste. Recovery destination alone proves neither burden-free waste nor co-product. External recycling methodology needs separately justified treatment/boundary evidence; no automatic end-of-life rule imported here. | `ilcd-handbook-2010`; `lyb-film-extrusion` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | film_line | product | release_records | SKU; grade; lot; gross roll mass; core/wrap tare; width/thickness; optical/mechanical tests; first release time; acceptance; reversal | Quality staff weigh rolls on calibrated scales and subtract separately measured removable tare; reconcile unique first-release and reversal records after slitting/winding/packing. Retain raw kg and tests; sum unique newly accepted net film kg to Q with no division. | kg | each roll/release | one complete matched production period | factory first-release gate | per 1 kg reference flow | calibration; tare and release tests |
| cp_material | film_line | resin; purge; grease; screen; scrap; purge_waste; screen_waste | material_stock | row_id; lot; full supplied formulation; free moisture; measured element fractions; supplier/state; receipt/issue/return masses; opening/closing raw/WIP/regrind; inherited per-flow vectors; stage; receiver | Custodian/lab weigh each supply/outlet and assay composition on compatible bases. Preserve unnormalised raw mass, full stock/vector and stage-transfer records including failures, start/stop, idle, cleaning and rework. Internal transfers are not repurchases; different real formulations/residues receive distinct rows. | kg | every material movement | same period/cohorts as cp_release | receipt through release and waste transfer | per 1 kg reference flow | invoices; assays; calibration; receiver records |
| cp_energy | film_line | electricity | meter_intervals | meter; provider/voltage/location; start/end kWh; power rate/time; stage/state; failure; shared-driver evidence; WIP/cohort | Energy engineer meters every actual stage and auxiliary including hot standby, start/stop, cleanup and zero-output runs. Retain raw compatible interval readings and overlap checks; distinguish power from integrated energy. No division in collection. | kWh | each interval/state | same period/cohorts as cp_release | production and actual auxiliaries | per 1 kg reference flow | calibration; circuit map; provider boundary |
| cp_water | film_line | water; cooling_supply; cooling_return; blowdown; vapour | water_heat_states | row_id; source/receiver; inlet/outlet mass/volume; independent density; T/P; dissolved constituents; moisture; loop stock; evaporation; actual enthalpy; supplier water-energy convention | Water engineer independently meters external supply/return/treatment and environmental outlets with measured density/state/composition; retain internal circulation and moisture as separate accounts. Keep raw quantities without division. Unmeasured evaporation or return stays unresolved, not fitted by a residual. | kg; m3; kg/m3; degC; kJ/kg | each interval/state test | same period/cohorts as cp_release | actual external water boundaries | per 1 kg reference flow | assays; meter calibration; supplier conventions |
| cp_pack | film_line | core; wrap; strap; pallet; sack_waste; core_waste; wrap_waste; strap_waste; pallet_waste; resin_sack | component_stock | row_id; whole composition; supplier/tare; opening/closing empty; attached WIP/FG; reusable stock; purchases; external returns received; gross physical dispatch; returns sent; waste; internal reuse; original cohort | Packing staff weigh every actual component, including received resin packaging, with supplier-included burden checked once. Keep complete raw empty/attached/reusable component and gross-dispatch/return/waste ledgers. Include real repacking and linked FG services; internal reuse cancels, tare never enters Q, no division. | kg | each component/movement | matched production and FG-service periods | receipt; WIP; packing; FG; external movements | per 1 kg reference flow | tare tests; component specs; stock closure |
| cp_air | film_line | oxygen; dust; formaldehyde; acetaldehyde | speciated_survey | row_id; species/CAS; particle size; medium; stage/state; stack/fugitive route; concentration/basis; integrated volume or true flow rate; time; T/P; wet/dry; controls; blanks; recovery; detection limits; uncertainty | Environmental engineer and competent lab first survey actual resin, purge, grease, cleaning and controls, then choose validated species/particle-specific methods for every real outlet/state including startup/idle and uncaptured routes. Preserve raw calibrated results and gas states, not total VOC as a chemical or default nondetect zeros. Example aldehydes are conditional, not presumed complete/positive. Missing survey means incomplete numerical data. No division. | kg/m3; m3; m3/h; h; kg | each actual species and representative state | same period/cohorts as cp_release | actual exhausts and all evidenced fugitives | per 1 kg reference flow | full lab reports; calibration; blanks; recovery; coverage |
| cp_fg | fg_service | fg_receipt; fg_power; dispatch | cohort_service_history | original release; full inherited per-flow vector; opening/closing FG and attached pack; new Q receipt; gross dispatch; return; original delivery reversal; loss; rework; incremental energy; occupancy/time; cutoff | Warehouse/quality staff retain raw cohort movements, original release/return/reversal history and inherited production/service vectors. Meter and attribute actual post-release service by exclusive records then justified drivers; no old-cohort burden divided by current Q. Retain target-cohort service through cutoff and later supplements; closing FG carries full vectors. Reinspection gives no Q; raw collection does not divide. | kg; kWh; h | each stock/service/dispatch movement | declared service interval and original cohort history | post-release storage to actual loading; retain unshipped FG | per 1 kg reference flow | history; vector and reversal links; service meters |

aggregation_rule declares the reporting basis only. Every collection method retains unnormalised raw records; conversions, cohort allocation and vector inheritance precede the single report_once division. Cards and later aggregation only reference that same result.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_q | product | Q = sum of unique newly first-quality-released net film kg with genuine linked reversal corrections; exclude core/wrap. Closing same-cohort FG already belongs to Q; dispatch, reinspection and prior-released return/rework are not new Q. | cp_release | Q | `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film` |
| cohort_raw | production rows | Construct raw A_i in each row unit: attributable current exchanges + complete inherited per-flow vectors of consumed opening WIP/regrind - complete vectors carried by closing WIP/regrind. Include failed/zero-output/start/stop/idle/cleanup and incremental rework. Inheritance is a vector, not a scalar impact score. Physical stocks stay separate; released closing FG is neither subtracted from production Q nor from its completed production burden. | cp_release; cp_material; cp_energy; cp_water; cp_pack; cp_air | A_i | `ilcd-handbook-2010` |
| physical_gates | raw production; FG; combined | Independently close total material mass and each relevant element on measured composition/water bases. Production: opening raw/WIP/empty-package/regrind stock + actual external material inputs + real rework transferred in = closing equivalent stock + new net film Q + packaging attached to new FG + prior-released rework returned to FG with its attached packaging + actual external Product water returns + all waste/species outlets. Internal regrind cancels. FG film subledger: opening net film + new Q receipts + real external returns + prior-released rework receipts = gross outward net film + closing net film + FG losses + transfers to rework. Add the separately complete attached/empty/reusable packaging and actual service-input/output subledgers for the total FG gate. Combined physical gate cancels all internal Q, rework and attached-package transfers and reconciles external material inputs/returns against external shipments, Product cooling returns, all waste/emissions and closing-minus-opening stocks. Closing FG already included in Q never becomes another production output. Do not use burden shares to scale physical outputs or use a residual to invent species. | cp_release; cp_material; cp_water; cp_air; cp_fg | raw physical ledgers | `ilcd-handbook-2010`; `lyb-film-extrusion` |
| pack_balance | each packaging component | Separately for each component: opening empty + opening attached WIP/FG + opening reusable + purchases + external returns received = closing empty + closing attached WIP/FG + closing reusable + component leaving with gross physical shipments + external returns sent + waste. Received supplier packaging is identified once without duplicating included upstream burden. Internal attachments/reuse cancel; packaging is outside Q and is not an automatic co-product or credit. | cp_pack; cp_fg | component ledgers | `ilcd-handbook-2010` |
| energy_units | electricity; fg_power | A_MJ = 3.6 × A_kWh on the same supply boundary before cohort reporting. Integrated kWh is not multiplied by time again; only true power rates require time integration. | cp_energy; cp_fg | A_MJ |  |
| fluid_species | actual fluid/species | Liquid A_kg = V_m3 × independently measured compatible rho_kg_per_m3 at actual composition/temperature. Species mass with compatible integrated volume uses sum(c × V); only actual volume flow F uses integral(c × F × dt). Match T/P/wet-dry state and units. Carbon-equivalent concentration needs independent species conversion. Never use water density for another liquid, multiply integrated volume by time or sum VOC/COD indicators with chemical masses. Cooling service uses measured inlet/outlet enthalpy under the actual supplier convention. | cp_water; cp_air | A_kg; A_species; net cooling service |  |
| fg_cohort | fg_service | Retain each original cohort full production vector and real incremental service/rework vectors. Reverse original delivery when actual linked return requires it; repeated inspection only adds its real increment. Attribute services first exclusively then by the hierarchy; old FG does not divide by current new-release Q. Target new cohort services use the same original Q across periods including closing FG and later supplements. Consolidation must not add inherited production again. | cp_fg; cp_pack | cohort A_i and histories | `ilcd-handbook-2010` |
| report_once | all non-reference exchanges | x_i = A_i / Q; A_i is the complete attributed raw numerator in row units and Q is the original newly first-quality-released film kg for that target cohort. Execute this division exactly once after raw unit conversion, full WIP inheritance and justified allocation. Production and subsequent service are separate results; service uses the same original Q, not gross/net shipments or another cohort current output. Cards and aggregation reference this same calculation; raw collection never divides. If Q = 0 preserve true burdens and issue no unit result. | A_i; Q; cp_release; cp_fg | x_i | `ilcd-handbook-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_raw | all exchanges | Require actual site/grade/cohort records, calibrated units and uncertainty, complete stage/state coverage and matched periods. Future measurements, auxiliary UUIDs and compatible providers are explicit data-production requirements, never invented numbers or assumed zeros. | raw records; assays; calibration; matched time |
| dq_species | all outlets | Numerical completeness requires a real full species/particle/water survey, validated methods and actual destinations. Conditional examples do not establish absence or completeness; every real added outlet becomes an atomic card. | complete lab/receiver records; limits; uncertainty |
| dq_native | UUID rows | Preserve full native physical restrictions and exact referenced property/unit chain with actual provider compatibility. Identity UUID is neither quantity nor scientific approval. No numeric reuse from mismatched materials or typical-grade numbers. | native chains; actual supply specs; explicit gaps |
| dq_fg | FG and packaging | Retain all inherited vectors, return/reversal history, actual service increment, component closure and cutoff, including retained FG and later supplements. Distinguish manufacturing completeness from service completeness. | cohort vector history; physical/component ledgers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference | Verify actual pellet formulation, plain single-layer noncellular LDPE structure, untreated nonadhesive surface, annular air-cooled blown/cold-flat-split route, dimensions/tests, packed-roll first release and unique product row; no bought-film-only or other-polymer shortcut. | `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film` |
| validate_native | all exchanges | Before quantitative use inspect every native basename/synonym/comment, CAS, grade, route, form, geography, medium, type and all properties plus exact unit chain and compatible provider. Unspecified PE-LD grade/route/location require actual qualifiers, not invented defaults. Wrong cleaned-recycling endpoint or voltage is a material mismatch. Specific unresolved auxiliaries never become collective flows. | `ilcd-handbook-2010` |
| validate_balances | all gates | Independently audit mass, relevant elements, free/phase/reaction water, WIP vectors, FG opening/closing/returns, gross dispatch, every packaging component and actual species. Production, FG and combined gates must agree with explicit uncertainty and internal cancellation. No residual-fitted gas or extra Q. | `ilcd-handbook-2010`; `lyb-film-extrusion` |
| validate_reporting | data production | Require raw protocols, complete state/stage coverage, real conversion and exchange-specific allocation before report_once. Q-zero preserves load without unit result. Missing actual species, supply/return state, inherited history, provider or unresolved physical closure makes the numerical package incomplete. Engineering checks do not establish plant values, science/translation approval, accepted mapping or publication. | `ilcd-handbook-2010`; `lyb-lupolen-2420k` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Matching LDPE flat film with reviewed providers; link manufacture first release and separate original-cohort FG service without duplicate inherited production |
| allowed_use | Actual bounded plain air-cooled monolayer LDPE cold-flat-split configuration with full records |
| excluded_use | Whole classification leaf coverage; functional equivalence from kg alone; illustrative resin medical/pharmaceutical use; unknown quantities/species set zero; automatic recycling credit or methodology approval |
| required_metadata | LDPE grade and full supplied formulation; virgin non-additivated pellet state; permitted same-formulation internal regrind and history; monolayer noncellular unreinforced unsupported structure; non-self-adhesive unprinted untreated surface; annular air-cooled blown route and cold flat-web split; width and net thickness tolerances; roll net mass and core/wrap tare; actual optical/mechanical acceptance and end-use limits; unique first release and reversal link; reporting period and geography; electricity voltage/provider boundary; actual drying/cooling configuration; raw/WIP/FG cohort mass and inherited per-flow vectors; actual species and waste destinations; each packaging component and reuse history; separate FG-service cutoff |
| required_quality_disclosure | Measurement uncertainty; data age/geography; supplier compatibility; unresolved exchanges; WIP/FG inherited vectors; all physical/component closure; service cutoff and later retained-FG burdens; allocation evidence/sensitivity; methodology review status |
| update_trigger | Grade/formulation, external recycled input, layer/surface/route/cooling, dimensions/tests, provider/voltage/year, species/control, packaging/reuse, release/service gate or allocation evidence change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| lyb-film-extrusion | handbook | LyondellBasell, A Guide to Polyolefin Film Extrusion, complete 42-page PDF; printed 6047/1004, PDF metadata 2015. https://www.lyondellbasell.com/globalassets/lyb/our-solutions/products/documents/polymers-technical-literature/A_Guide_to_Polyolefin_Film_Extrusion.pdf | Printed pp.9–15 and19–30: handling, electric melt/screen/die, blown/cast/coextrusion alternatives, air cooling, winding, regrind, start/stop and cleaning. General technology, not factory recipe/energy/yield or LCA allocation. |
| lyb-lupolen-2420k | literature | LyondellBasell, Lupolen2420K Technical Data Sheet, 15 October2026, pp.1–3. https://productsafety.lyondellbasell.com/DirectRequest?ProductGuid=79326e74-b73c-4977-9f56-b9e12367c004&ResponseTypeGuid=f1e32c20-d810-4db0-b25e-8e23a59f3733 | Illustrative non-additivated pellet supply, blown-film suitability, medical/pharmaceutical exclusion, specimen/typical-value limits, degradation and conditional condensation drying/storage. Not universal numeric defaults or same-factory evidence. |
| polystar-monolayer-flat-film | extension_guidance | POLYSTAR, Advantages of Using Monolayer Blown Film Machines for Plastic Packaging, undated official article; snapshot16 October2026. https://www.polystarco.com/blog-detail/advantages-of-using-monolayer-blown-film-machines-for-plastic-packaging/ | Independent machine capability: cold knives and back-to-back winders form two flat rolls. Hot-knife resealed tubular, blends/additives/recycled capabilities are adjacent exclusions, not this recipe. No output/energy/order assertion. |
| ilcd-handbook-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printed pp.255–272 (PDF275–292). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Restricted attributional hierarchy: subdivision/virtual subdivision, exchange-specific determining physical causality, residual actual common-gate market value and per-exchange conservation. Stock/vector, single-normalization and component equations are explicit PCR accounting requirements, not quoted ILCD formulas; no full conformity/end-of-life default. |
