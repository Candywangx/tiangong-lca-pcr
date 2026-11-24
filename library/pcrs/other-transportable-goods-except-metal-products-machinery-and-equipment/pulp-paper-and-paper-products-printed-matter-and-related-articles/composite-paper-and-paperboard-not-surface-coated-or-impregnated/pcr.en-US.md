---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.composite-paper-and-paperboard-not-surface-coated-or-impregnated
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Uncoated flat-layer paperboard bonded with starch adhesive

## 1. Scope and Applicability

The physical scope is paperboard made by joining purchased, already dried, uncoated and unimpregnated flat paper or paperboard plies with aqueous starch adhesive, followed by pressing, drying/conditioning, cutting and gate preparation. Producer originals demonstrate multilayer starch bonding and a sheet-board market example; they do not establish every surface treatment or a converter utility route. Actual applicability requires layer construction, supplier surface-state declaration, adhesive formulation and gate-product evidence. This is a technical synthesis of the original flat-ply starch-bonding branch, not a claim about an actual factory, recipe, ply count, grammage or heat source. Include necessary pressing, actual drying/conditioning, flattening and slitting to the first accepted flat-composite-board supply gate. Meter electric drives and evidenced purchased-steam indirect heating separately; collect actual steam, coupled heat/electricity/water and condensate rather than assigning zero because a product example omits them. On-site pulping/papermaking, combustion heat and effluent treatment require completed corresponding units and atomic exchanges before a completeness claim. [wco-hs-2022-ch48; klug-es-adhesive; klug-es-board-td-2026]

Wet multilayer paperboard combines fibre layers during wet-end forming; multiple layers alone do not make it this product. Corrugated-core board, honeycomb cores, wood panels, cloth/metal/plastic reinforcement, bituminous or synthetic bonding, outer film/pigment coating and impregnated products are excluded. Internal paper-to-paper starch bonding is distinct from an outer coating. Declare inherent paper fillers/internal sizing within the purchased-ply upstream dataset rather than adding them again. [ec-paper-bref-2015; paramelt-paper-board; solidus-board]

The official CPC 3.0 explanatory notes list 32141 without a separate technical note; the normalized leaf and that entry agree. This method requires internally bonded flat paper layers: creped/crinkled/embossed/perforated products (32142), inorganic-coated products (32143), other surface-treated/impregnated products (32149), corrugated board (32151), and finished containers (32153) are excluded. These are product-boundary checks, not proof of a particular supplier classification. [unsd-cpc3-notes-2025; wco-hs-2022-ch48]

Separate converting is a real commercial operation: KOHLSCHEIN describes stored paper/board reels and reel-to-sheet bonding, including customer-provided material. This supports a receiving-to-board converting boundary, but does not identify its adhesive or prove uncoated faces for any particular grade. KLUG distinguishes wet couching from adhesive bonding. Fedrigoni describes an uncoated starch-laminated grade made in the paper machine; that adjacent integrated route must not be represented by this purchased-dry-ply foreground. Actual supply/ownership, dry starting state, surface declaration and starch formulation must therefore be demonstrated together before applying this method. [kohlschein-reel-lamination; klug-boards; fedrigoni-old-mill-2021]

Use only the qualitative cutting, wrapping and dust mechanism from BREF section 7.1.10. Its mill energy description and return of trim to papermaking are not converter defaults. Section 7.1.11.5 describes multilayer forming and white-water circuits, supporting exclusion of wet papermaking from this foreground; no mill water requirement, yield or emission factor is transferred. [ec-paper-bref-2015]

At first supply, this method covers only unfolded rectangular sheets, including squares, whose longer side exceeds 36 cm and whose shorter side exceeds 15 cm after final cutting. Exactly 36 cm on the longer side or exactly 15 cm on the shorter side fails the size gate. A 20 × 30 cm sheet is out of scope. For strips or rolls, HS Chapter 48 Note 8 instead requires a width greater than 36 cm. Strips and rolls are outside this sheet-board method. Use the dimensions of the released article, excluding packaging and before any customer conversion. [wco-hs-2022-ch48]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.composite-paper-and-paperboard-not-surface-coated-or-impregnated |
| classification_refs | CPC 3.0 32141. The narrower association was accepted under docs/adr/2026-11-22-accept-cpc-32141-starch-bonded-uncoated-flat-layer-paperboard.md. |
| covered_products | Unreinforced uncoated flat-paper-ply board joined with starch adhesive |
| excluded_products | Wet multilayer forming, corrugation, coating, impregnation, non-paper reinforcement and non-starch bonding |
| representative_product | Unsurfaced starch-bonded flat sheet board; example properties are not default recipes |
| production_route | Purchased dry plies → starch wet bonding and pressing → drying/conditioning and necessary flattening → final slitting/first flat-board supply gate; actual configuration must be collected |
| market_state | Accepted rectangular sheet output at converter gate after final cutting, unfolded long side > 36 cm and short side > 15 cm, with declared moisture and packing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide flat-layer board material with declared grammage, caliper and bond quality |
| How much | 1 kg |
| How well | Declare construction, material, moisture, caliper, grammage and order acceptance criteria; no universal performance threshold |
| How long or cycle | One conversion campaign and gate delivery; no universal service-life claim |
| reference_flow_link | `board_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished starch-bonded uncoated flat-layer paperboard |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | final delivered sheet form and both unfolded dimensions in cm; Actual grade, count and paper/paperboard state of each ply; evidence of no coating/impregnation/reinforcement; whole-glue ingredients, starch origin and wet/dry basis; necessary pressing/drying/flattening/slitting and first flat-board supply gate; measured gate moisture, net board/packing tare and acceptance IDs; site/period/voltage, actual heat route, steam pressure/temperature/condensate and provider basis; raw/WIP/FG/packaging stock vectors; co-outputs/waste receivers; order acceptance |

Every required qualifier must be declared in the actual data package. The 1 kg includes measured gate moisture and is not 1 kg oven-dry fibre; packaging is outside the denominator. Caliper or grammage alone does not replace measured net mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is same-period newly accepted net board kg at the first flat-board supply gate, measured gross less actual packing tare and including declared moisture. Reconcile acceptance IDs and stocks; normalize once. Historical finished-board return/reinspection creates no Q; new closing FG is not added again to measured accepted production. |
| moisture_basis | paper/glue/product/waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain wet mass, measured solids/moisture and volatile-loss applicability for each stream; wet adhesive mass is not dry adhesive or oven-dry paper mass. |
| electric_conversion | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | Use the dimensional conversion 1 kWh = 3.6 MJ. Convert actual electricity meter readings only; this does not establish thermal efficiency or delivered steam heat. |
| water_volume | tap water and water balance | Volume | m3 | Input uses measured m3; water-balance mass conversion uses actual density and temperature, without an assumed density. |
| pm_bins | particles released outdoors | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The three rows are mutually exclusive fractions; cumulative differences require comparable tests at the same conditions. Unknown particle splits remain pending; no default fractions. |


## 5. System Boundary

### Complete quantity and stock context

All inventory cards inherit this complete context. Keep gross physical exchange vector V, in each flow's original unit, separate from the attributed burden vector A. Establish raw record identity, actual time/scope, rate integration and dimensional conversion first; then isolate dedicated operations and justify each remaining shared exchange by its own physical cause. Only a genuinely inseparable residual may use another relationship. Perform one final division by positive new accepted net board mass Q. Allocation never alters gross mass, water, carbon, inventory stock or physical co-output quantities. [eu-pef-multifunctionality-2021]

Q is new board first accepted after bonding, required pressing, drying/conditioning, flattening and final slitting to the declared flat-sheet supply gate. Record rejects and every acceptance ID. New accepted closing finished goods are already included in Q; do not add them again to measured accepted production. Reconcile dispatch with opening/closing finished goods, external returns and transfers. Reinspection or return of previously accepted board creates no new Q. Opening finished goods dispatched now retain their original burdens. Raw/unused material, work in progress and finished-goods cohorts carry a vector b_i of inherited quantities for every flow i, including earlier material, electricity, heat, water and emissions; bring in their actual opening vectors, carry actual closing vectors, and transfer vectors at actual completion stages without deleting them or applying allocation twice. Unknown history is unknown, never a zero vector.

Q=0, failed batches, starts/stops, idle periods, cleanup and trial runs retain their real loads. Attribute them to the causally served production period/cohort with a documented rule; do not drop them, divide by zero, or substitute an invented output. A measured service quantity Qc or actual operating hours H may describe a separately declared service or attribution driver, never new board production Q. No machine mass, recipe, yield, moisture, price or loss share is prescribed.

A composition ledger partitions a whole supplied material; it does not create additional exchanges. Purchased paper includes its actual fibre/filler/sizing upstream once; purchased whole adhesive includes starch, carrier water and other supplied ingredients once. Wastewater wet mass, H2O, solids and COD are different quantities; only the whole shipment links to one actual compatible treatment provider. Do not sum its constituent ledger into whole-stream mass, add duplicate upstream manufacture, or claim recycling, substitution or energy credits.


### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dried uncoated/unimpregnated flat paper or paperboard plies and whole starch adhesive in supplied state arrive at converter |
| starting_condition_role | Foreground receiving boundary; upstream burden is not zero |
| product_classification_scope | The stated restricted subset of 32141; classification is not physical applicability |
| recursive_input_rule | Record any same-category purchased board once as a supplier input, without recursively duplicating current manufacture; an already-composite board core needs a separately verified flow and boundary. |
| upstream_dataset_requirement | Link compatible pulp/papermaking background per ply grade/origin; purchased adhesive includes formulation manufacture. Verify transport endpoints and existing transport coverage; add actual transport-service rows for uncovered routes. |
| disclosure | Declare supplier cut points, background quantity definitions, transport/packing coverage and actual foreground facilities; wood-processing studies do not establish papermaking recipes. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_layers | converter | Foreground starts at paper receipt; supplier pulping, sizing, fillers, drying and emissions belong once to the ply background and are not repeated at converter. | wco-hs-2022-ch48; ec-paper-bref-2015 |
| boundary_operations | converter | Include bonding, pressing, actual drying/conditioning and necessary flattening, cutting, dust capture, cleaning and actual gate packing; a converter without a pulper cannot call exported trim an internal broke loop. | ec-paper-bref-2015; klug-es-adhesive |
| boundary_variant | product | Reinforcement, surface treatment, synthetic binder, on-site combustion heat or on-site water treatment exceeds this route and requires complete corresponding methods and atomic rows; producer emission-free marketing does not replace site screening. | paramelt-paper-board; solidus-board; klug-es-adhesive |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| converter | Paper-ply bonding, conditioning, cutting and packing | required | Declared flat-paper/paperboard and starch route, electricity and actual steam separate | foreground | 1 kg reference flow |

This foreground unit aggregates internal transfers of the same material between bonding/cutting/packing; keep stage-specific measurements and physical mass/water/carbon diagrams. Internal-link ends must carry equal amounts; transfers are not a second finished-product output. Add individual rows for actual additional materials, facilities or transport before use; this inventory does not establish completeness for every plant.

Investigate actual bonding/press rollers, conveyor belts, cutting blades, lubricating oils/greases, cleaners and other maintenance materials: material/formulation, issues/returns/replacement/stocks, wear/waste receivers and maintenance electricity/water. Add a verified atomic row for every actual positive input/export. Unknown composition, frequency or quantity stays pending; do not invent a bundled maintenance flow or default replacement cycle, or treat an uninvestigated exchange as zero.

### Process: Paper-ply conversion (`converter`)

#### Inputs

##### Product flows

###### Outer paper plies (`outer_paper`)

Record one actual supplier grade of dried uncoated, unimpregnated outer-ply paper. Only identical grades may be summed; create separate atomic rows for differing grades. Collect fibre, filler, internal sizing, moisture and supplied-state background basis; no generic ply weight.

- Selected flow: Dried uncoated outer-ply paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh each outer-ply supplier grade in received wet kg; reconcile opening, receipts, unused returns, closing raw/WIP/FG and actual losses under cp_layers and the inherited per-flow stock ledger; isolate this grade/ply burden before one final normalization, once per reference flow. Area records require actual same-lot grammage and area, not catalogue values. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layers`
- Sources: `klug-es-adhesive`


Quantity-method context: `normalize_exchange`; `stock_vectors` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Inner paper plies (`core_paper`)

Record one actual inner-ply paper grade, separately from outer plies. For a two-ply construction this exchange is absent only with construction evidence. Distinguish paper from paperboard; collect grade, fibre/fillers/sizing, moisture and upstream basis.

- Selected flow: Dried uncoated inner-ply paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual inner paper grade separately in wet kg using cp_layers; absent inner plies require construction evidence. Reconcile issues/returns, raw/WIP/FG vectors and losses under the inherited per-flow stock ledger, isolate actual inner-ply burden and apply one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layers`
- Sources: `klug-es-adhesive`


Quantity-method context: `normalize_exchange`; `stock_vectors` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Purchased dried flat paperboard ply (`board_ply`)

Record one actual dried, uncoated and unimpregnated flat paperboard grade. Confirm fibre/fillers/sizing, moisture, surface state and supplier kg basis. An already-composite purchased core requires a separate verified flow and inherited-manufacture boundary.

- Selected flow: Dried uncoated flat paperboard ply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual wet kg per grade under cp_layers; area needs same-lot measured area and grammage. Reconcile the inherited per-flow stock ledger for raw/WIP/FG and losses, isolate this ply burden, then one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layers`


Quantity-method context: `normalize_exchange`; `stock_vectors` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Purchased starch adhesive (`starch_adhesive`)

Record the whole purchased aqueous starch formulation once, with supplier recipe/SDS, starch origin, heat treatment, solids, H2O fraction and wet-formulation reference mass. Carrier water and supplied ingredients are composition subledgers, not additional exchanges. Actual separately added ingredients need separate atomic cards; no synthetic, PVAc, EVA or bituminous binder is covered.

- Selected flow: Aqueous starch adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Meter or integrate actual whole supplied wet-formulation kg under cp_adhesive; volume needs actual mixture density at stated temperature. Reconcile unused/raw/WIP/FG/residue vectors; segregate this glue batch and only then use one final normalization once per reference flow. Solids, starch and carrier-water subledgers are not additional doses. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_adhesive`
- Sources: `klug-es-adhesive`; `klug-es-board-td-2026`


Quantity-method context: `normalize_exchange` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Additional dilution and cleaning water (`tap_water`)

Record metered externally supplied treated tap water for actual dilution and cleaning. Exclude adhesive carrier water and internal recirculation. Verify site, period, supplier treatment/delivery gate and m3 background basis; physical water mass requires measured density and temperature.

- Selected flow: Treated tap water
- Flow property / unit: Volume; unit group / m3
- Amount rule: Integrate measured external tap-water volume rates over actual intervals or use calibrated meter differences, in m3 under cp_water; exclude supplied-glue carrier water and internal recirculation. Isolate actual dilution/cleaning use and inherited stock burdens before one final normalization once per reference flow. Physical water kg uses actual water density(T). Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `paramelt-paper-board`


Quantity-method context: `normalize_exchange` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Customer-side low-voltage electricity (`electricity`)

Record actual low-voltage electricity supplied at the converter meter. Meter drives, press, ventilation, cutting, packing and electrical drying without overlapping meters; retain region/year/voltage/loss and background basis. The heat source must be collected, not inferred from a product example.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect nonoverlapping meter kWh differences or integrate actual power over time under cp_energy, including drying, starts/stops, idle and cleaning. Convert kWh to MJ with the metered kWh-to-MJ conversion (3.6 MJ/kWh); subdivide actual drive/operation scope, transfer stock vectors and assign only genuine shared residuals before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `ec-paper-bref-2015`


Quantity-method context: `normalize_exchange`; `electricity_mj` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Actual indirect process heat delivered by purchased steam (`steam_heat`)

Record actual purchased steam for indirect heating only. Collect supplier technology, pressure, temperature, steam quality, enthalpy datum, delivered heat and condensate paths. Energy in MJ, steam kg and useful heat are distinct ledgers; provider compatibility and conversion remain required. Other heat routes need their own atomic identity and complete units.

- Selected flow: Purchased steam process heat
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Integrate actual steam mass-rate and matched enthalpy difference, or verify heat-meter MJ, under cp_steam; reconcile the same gate/interval/condensate basis through the same-gate steam/condensate heat ledger to the provider native heat quantity. Retain separate carrier-water kg; subdivide drying duty, stock and coupled heat/electricity/water burdens before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steam`


Quantity-method context: `normalize_exchange`; `steam_delivery` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Plain uncoated paper wrap (`paper_wrap`)

Record one actual plain uncoated and unimpregnated paper wrapping grade, separately from incorporated plies and board net mass. Verify composition, moisture and provider mass basis. Add separate atomic rows for actual pallets, straps or film; whole packaging and components cannot duplicate manufacture.

- Selected flow: Plain uncoated paper wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual plain-paper component receipts and wet kg under cp_pack; use the complete first-physical-receipt ledger to distinguish first external physical receipt from procurement/burden ownership. Reconcile empty/raw/WIP/FG/reusable stocks, external issues, matched returns and waste; assign the actual wrapping burden once, then one final normalization per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ec-paper-bref-2015`


Quantity-method context: `normalize_exchange`; `packaging_receipts` together with the complete sections 4, 7 and 8 and the linked collection protocol.

#### Outputs

##### Product flows

###### Finished starch-bonded uncoated flat-layer paperboard (`board_output`)

Exactly 1 kg of newly accepted net board at declared gate moisture. Exclude packing and rejected board. The board contains only flat paper/paperboard plies and internal starch adhesive; no corrugated core, reinforcement, outer coating or impregnation.

- Selected flow: Finished starch-bonded uncoated flat-layer paperboard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `wco-hs-2022-ch48`; `klug-es-adhesive`

###### Steam condensate actually returned to heat supplier (`condensate_return`)

Record actual liquid condensate returned across the supplier interface. Internal returns cancel; contaminated/discarded condensate needs its actual waste identity and receiver. No negative steam, avoided-water or energy credit is assigned.

- Selected flow: Liquid steam condensate returned to heat supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual returned kg or same-stream V times measured density(T) under cp_steam; reconcile steam/return IDs, intervals, stocks and residual heat. Preserve gross V without another water manufacture or negative steam. Attribute actual heat duty and the inherited per-flow stock ledger, then one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steam`


Quantity-method context: `normalize_exchange`; `stock_vectors` together with the complete sections 4, 7 and 8 and the linked collection protocol.

##### Waste flows

###### Unglued paper trim exported (`clean_trim`)

Record separately weighed unglued paper trim exported to the actual receiver. Retain grade, moisture and receiver treatment compatibility; no default recycling share or credit.

- Selected flow: Unglued paper trim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual separate unglued trim shipments in wet kg under cp_waste, with stock/internal-return reconciliation and measured moisture; retain gross V and actual receiver. Determine dedicated/shared attribution and inherited grade burdens before one final normalization once per reference flow; no recycling credit. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ec-paper-bref-2015`


Quantity-method context: `normalize_exchange` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Starch-bonded board trim exported (`bonded_trim`)

Record exported starch-bearing board trim/rejects with paper/starch/moisture composition and receiver compatibility. Internal returns are not exports. Waste versus genuine coproduct requires section 7 evidence.

- Selected flow: Starch-bonded paperboard trim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual starch-bearing board trim/reject shipments in wet kg under cp_waste; record paper/starch/H2O and stocks separately without adding constituent mass twice. Keep gross V, inherited vectors and actual receiver; establish coproduct/waste attribution before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ec-paper-bref-2015`


Quantity-method context: `normalize_exchange` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Separated waste starch adhesive (`adhesive_residue`)

Record whole liquid aqueous starch adhesive residue exported, separately from cleaning wastewater. Collect phase, formulation, wet mass, solids/H2O, stock and receiver. Gelled/dried residue needs another specific atomic identity; no default hazard or treatment is assigned.

- Selected flow: Liquid waste starch adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure whole actual liquid residue shipment wet kg, or integrate volume and measured mixture density(T,state), under cp_waste and the whole wet-liquid basis; reconcile stocks and separate H2O/solids subledgers. Preserve gross V and actual receiver; assign the responsible glue/cleanup cohort before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `klug-es-adhesive`


Quantity-method context: `normalize_exchange`; `exported_liquid_basis` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Starch-adhesive equipment cleaning wastewater (`cleaning_effluent`)

Record whole wet cleaning wastewater exported to off-site treatment. Use measured wet mass or actual mixture density times measured volume; H2O, solids and COD are separate analyses, not extra whole-liquid exchanges. No duplicate direct receiving-water release is added for the same exported stream.

- Selected flow: Starch-adhesive equipment cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure actual whole exported cleaning liquid in wet kg or measured V times same-stream density(T,state), using cp_water and the whole wet-liquid basis. Integrate real discharge rates when rate-based; retain H2O, solids and COD as separate analyses, stocks and one receiver. Assign actual cleaning causes before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `paramelt-paper-board`


Quantity-method context: `normalize_exchange`; `exported_liquid_basis` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Collected starch-bearing paper cutting dust (`captured_dust`)

Record collected paper/starch cutting dust removed as waste, including inherent filler/sizing, moisture, stock and actual receiver. Captured dust is distinct from outdoor particulate release; no default biodegradability, collection frequency or treatment is assigned.

- Selected flow: Collected paper and starch cutting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weigh actual collector removal in wet kg under cp_waste; reconcile opening/closing collector stock and internal return, with measured paper/starch/filler/moisture composition. Keep capture separate from escaping PM and preserve gross V; isolate the actual cutting source before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ec-paper-bref-2015`


Quantity-method context: `normalize_exchange` together with the complete sections 4, 7 and 8 and the linked collection protocol.

##### Elementary flows

###### PM2.5 released to outdoor air (`pm25_air`)

Record actual exclusive PM2.5 release after capture. Retain measurement definitions, outdoor receiving compartment and detection-limit uncertainty; no default emission factor.

- Selected flow: Particles up to 2.5 micrometres to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Under cp_air integrate actual matched concentration times gas-volume rate over time with consistent T/P/wet-dry conditions, plus separately evidenced fugitives, for the exclusive outdoor-air PM2.5 fraction in kg. Preserve gross V, nondetect uncertainty and actual source attribution before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `ec-paper-bref-2015`


Quantity-method context: `normalize_exchange` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Particles between PM2.5 and PM10 released to air (`pm25_10_air`)

Record the exclusive >2.5 to 10 micrometre fraction. Only matched compatible cumulative PM10 minus PM2.5 may be used; unknown splits remain unresolved.

- Selected flow: Particles above 2.5 to 10 micrometres to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Under cp_air integrate exclusive size-resolved mass release, or apply the matched exclusive-particle calculation only to matched cumulative PM10 and PM2.5 records. Convert actual concentration/rate/time units to kg before causal attribution and stock-vector accounting; retain gross V and one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `ec-paper-bref-2015`


Quantity-method context: `normalize_exchange`; `pm_exclusive` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Particles above PM10 released to air (`pm_over10_air`)

Record the exclusive >10 micrometre fraction. Compatible total particulate minus PM10 is permitted with matched test conditions; never add cumulative total as another emission.

- Selected flow: Particles above 10 micrometres to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use cp_air matched exclusive >10 micrometre release tests or compatible total particulate minus PM10 under the matched exclusive-particle calculation, in kg; never add total PM as another species. Retain actual gas-rate/time integration, gross V, attribution and uncertainty before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `ec-paper-bref-2015`


Quantity-method context: `normalize_exchange`; `pm_exclusive` together with the complete sections 4, 7 and 8 and the linked collection protocol.

###### Water evaporated to outdoor air (`water_vapour`)

Determine process-derived positive H2O release using matched inlet/outlet humidity and dry-air rate or a fully constrained water balance with only one unknown. Exclude ambient humidity; retain steam/condensate and stock water. Condensation is not a negative vapour emission.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use cp_water independently measured matched air humidity and dry-air mass-rate integration, or a fully constrained water balance with this sole unknown, to establish positive process H2O released to outdoor air in kg. Include actual steam/condensate and all material/stock water; no simultaneous fitting of multiple unknowns. Attribute actual drying/conditioning loads before one final normalization once per reference flow. Direct same-reference amount is q_i = A_i / Q; A_i is this row attributed quantity after those steps, Q is new accepted net board kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `paramelt-paper-board`


Quantity-method context: `normalize_exchange` together with the complete sections 4, 7 and 8 and the linked collection protocol.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | converter | First investigate subdivision or explicit system expansion; expansion requires real co-functions, representative boundaries and whole-expanded-system reporting. Isolate dedicated paper grades, glue batches, meters and production campaigns before any allocation. For each remaining exchange document the causal physical relation: paper by actual grade/ply issues, glue by actual formulation dosing, heat by measured drying duty, electricity by measured drives/run state and water by actual cleaning/dilution operations. Neither board mass nor one factory-wide percentage automatically allocates every exchange. | eu-pef-multifunctionality-2021 |
| allocation_physical | physical ledger | Preserve gross V and all physical outputs/internal links/stocks independently of attributed A. Transfer inherited per-flow cohort vectors through raw material, WIP and finished goods once. The chosen target Q contains only new accepted board; unrelated output, returned board, opening-stock dispatch and reusable packaging do not enlarge it. | eu-pef-multifunctionality-2021 |
| allocation_residual | genuinely inseparable residual | Only after documenting why subdivision/expansion and a relevant physical relation fail, justify an economic relationship for the actual residual. Use actual same-gate, same-state, same-period quantities and realized values of all real co-functions, with cost/negative-value cases and sensitivity disclosed; no invented prices or universal share. | eu-pef-multifunctionality-2021 |
| allocation_trim | clean_trim; bonded_trim; captured_dust | Verify waste versus saleable coproduct from actual specification, recipient use, waste status and market evidence; a payment alone is insufficient. A genuine coproduct needs its own qualified Product output and physical quantity, with dedicated and shared burdens assigned before normalization. Keep waste as waste with one actual receiver; internal returns cancel and carry history. No automatic avoided-paper, energy-recovery or substitution credit. | ec-paper-bref-2015; eu-pef-multifunctionality-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

For each packaging component, distinguish purchased P, first external non-purchase receipt N, and ER returning the same previously outward physical object. N includes independently borrowed, rented, entrusted and accompanying objects regardless of who bears upstream burdens; supplier burden ownership never removes the physical receipt. Preserve origin, receipt ID/time, custody, prior vector and provider, then attribute burdens once with evidence. ER requires the same object/cohort and its earlier outward record; an unknown earlier history is not ER or a zero burden.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | converter | reference output | scale/meter/laboratory/supplier records | gross/tare/net mass; lot; order acceptance; grade; moisture; accepted production; dispatch; opening/closing stock | Record shape and both unfolded dimensions after final cutting against the acceptance ID. Retain the lot measurement and method, with any tolerances. Calibrated weighing and representative gate-moisture tests; reconcile accepted production with dispatch and stock | kg; mass fraction | each lot and matched stage interval | full declared period including starts/stops, rejects and stock changes | declared converting line and attributable shared units | per reference flow | calibration, sample chain, SOP, supplier definitions and complete raw records |
| cp_layers | converter | each paper grade | scale/meter/laboratory/supplier records | supplier; grade; ply position/count; moisture; received/issued/returned mass; stock; surface coating/impregnation declaration; transport endpoint | Per-grade scale/stock balance and supplier declaration; keep upstream paper manufacture separate from converter | kg; mass fraction | each lot and matched stage interval | full declared period including starts/stops, rejects and stock changes | declared converting line and attributable shared units | per reference flow | calibration, sample chain, SOP, supplier definitions and complete raw records |
| cp_adhesive | converter | starch adhesive | scale/meter/laboratory/supplier records | supplier/SDS and applicable CAS; starch origin and modification; all formulation ingredients; supplied form; wet mass; starch/other measured solids/H2O fractions; dilution; residue; shelf/storage change; background reference basis | Lot dosing/stock balance and validated solids method; do not double count supplier carrier water or the adhesive manufacturing process | kg; mass fraction | each lot and matched stage interval | full declared period including starts/stops, rejects and stock changes | declared converting line and attributable shared units | per reference flow | calibration, sample chain, SOP, supplier definitions and complete raw records |
| cp_energy | converter | electricity | calibrated meters/provider originals | stage power/time/kWh; provider voltage/region/year/mix/gate/losses; actual electric dryer and steam configuration; meter overlaps; coupled utilities; startup/idle/cleaning/stocks | Integrate actual operation without overlapping meters; distinguish supplier joint heat/power/water production from converter demand, without repeating covered generation/boiler fuel, water or emissions | kWh; MJ | each interval/campaign | full period including failures/idle/cleaning | selected line and actual shared units | per reference flow | calibration, provider basis and originals |
| cp_pack | converter | paper-wrap component | physical receipt/issue/return/stock records | atomic material/form/type/direction; original measurement/unit and kg conversion; receiptID/time/origin; procurement/burden owner/custody/cohort/prior vector/provider; purchases P and first nonpurchase N; ER matched to same-item earlier outward; empty/raw/WIP/FG/reusable opening/closing and grossS/EO/W | Separate physical receipt from procurement/burden ownership; purchased batch components remain P without separate invoice; actual loan/rental/entrusted/nonpurchase accompanied receipts enter actual receiving side as N; internal issue/reuse cancel and unknown history is not zero | kg | each event and period close | full period including stocks/returns | actual receiving side and packaging gate | per reference flow | original receipt/custody/history/provider evidence |
| cp_waste | converter | each waste export | scale/meter/laboratory/supplier records | stream; mass; moisture/solids; starch/filler/sizing contamination; liquid/gelled/semi-solid/dry state; H2O and other formulation fractions; receiver; treatment; stock; internal return; collector capture | Separate weighed loads and composition tests for each export; receiver tickets; collector stock balance | kg | each lot and matched stage interval | full declared period including starts/stops, rejects and stock changes | declared converting line and attributable shared units | per reference flow | calibration, sample chain, SOP, supplier definitions and complete raw records |
| cp_air | converter | each outdoor particle bin | scale/meter/laboratory/supplier records | source; aerodynamic size cut; concentration; sampled gas volume T/P wet/dry; time; controls; outdoor compartment; capture; blanks; detection limits; uncertainty | Site-approved size-resolved sampling of exhaust and fugitives; integrate matched concentration and volumetric rate over time; absence requires documented screening | kg; concentration; gas volume | each lot and matched stage interval | full declared period including starts/stops, rejects and stock changes | declared converting line and attributable shared units | per reference flow | calibration, sample chain, SOP, supplier definitions and complete raw records |
| cp_water | converter | water and cleaning effluent | scale/meter/laboratory/supplier records | purchased m3; density/T; glue/paper/product/waste moisture; wash discharge whole volume/wet mass/mixture density and temperature/H2O fraction/solids; receiver; returned condensate; humidity; water stock | Calibrated water meters, wet/dry composition and sampled density; matched physical water balance including purchased-glue carrier water once | m3; kg; mass fraction | each lot and matched stage interval | full declared period including starts/stops, rejects and stock changes | declared converting line and attributable shared units | per reference flow | calibration, sample chain, SOP, supplier definitions and complete raw records |
| cp_steam | converter | steam heat/carrier and condensate interfaces | heat/steam meters and provider originals | actual boiler or CHP route; steam/return IDs; mass-rate/time; P/T/quality; inlet/outlet enthalpy and datum; pipe losses; condensate kg/density/T/destination; heat meter; provider native units; coupled heat/power/water and stocks | Calibrated metering, actual-time integration and same-interface enthalpy ledger; verify provider native heat basis rather than equating kg, MJ or differing heat conventions | kg; MJ; time | each heat interval and campaign | full period including startup/idle/cleaning | actual converting line and heat-delivery gate | per reference flow | calibration, provider invoices/utility diagram, enthalpy calculations and return receipts |
| cp_stock | converter | each-flow stock inheritance and attribution | cohort/stock/acceptance/allocation records | each raw/unused/WIP/FG opening/closing quantity and per-flow vector; completion stage; first acceptance ID; dispatch/return; failed/start/idle/cleaning loads; co-outputs; subdivision and each-exchange physical cause; actual residual same-period/gate values | Track physical quantities and inherited burden vectors by cohort, gross V separate from attributed A; reconcile new Q without recounting new closing FG or returns | each flow original unit; kg | each event and period close | complete production/stock period | selected board gate and related shared units | per reference flow | original acceptance/stock accounts, historical vectors and attribution rationale |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all non-reference rows | First establish original units/actual-rate integration, same-scope conversion, stock_vectors and each-flow dedicated/shared attribution; then q_i = A_i / Q once. A_i is the quantity attributed to new target board in this card native unit; Q is same-period first accepted net board kg. Preserve gross V and physical co-outputs separately. | cp_mass; cp_layers; cp_adhesive; cp_energy; cp_pack; cp_waste; cp_air; cp_water; cp_steam; cp_stock | row amount per reference flow |  |
| electricity_mj | electricity | A_MJ = 3.6 * A_kWh; 3.6 is the kWh-to-MJ unit conversion; convert at the metered delivery point. | cp_energy | MJ per reference flow |  |
| dry_water_components | paper/glue/product/waste | m_dry = m_wet * s; m_H2O = m_wet * w_H2O; s is validated measured dry-solids fraction and w_H2O is independently established H2O fraction. Use 1-s only when the entire non-solid fraction is proven to be water; retain non-water volatiles/solvents and other formulation components separately, without assuming all drying loss is H2O. | cp_layers; cp_adhesive; cp_mass; cp_waste; cp_water | physical dry matter and water; wet reference unchanged |  |
| physical_balances | converter | For dry solids, water and carbon separately, inputs = product + exported waste + environmental releases + stock change; equal internal-link ends cancel. Convert pure-water input V using measured water density; whole mixed-liquid wet mass = V * measured mixture density, and its water ledger contains only wet mass * w_H2O. Collect carbon composition/biogenic origin; no default carbon fraction or CO2 emission. | cp_layers; cp_adhesive; cp_mass; cp_water; cp_waste; cp_air | unallocated physical ledger and residuals |  |
| pm_exclusive | particle rows | PM2.5-10 = matched PM10 - PM2.5; >10 = comparable total particulate - PM10; apply only with compatible definitions, conditions and detection limits, otherwise collect. Investigate negative differences rather than clipping to zero. | cp_air | exclusive particle kg per reference flow | ec-paper-bref-2015 |
| exported_liquid_basis | liquid adhesive residue/off-site cleaning wastewater | Native wet Mass/kg is measured whole wet mass or measured V * mixture density(T,state); same-stream H2O = wet mass * w_H2O. Formulation solids/pollutant indicators are separate composition ledgers, not additional whole-liquid quantities. Normalize once by same-period Q, with no on-site treatment or duplicate direct receiving-water releases. Non-liquid residue needs a separately verified identity and atomic row. | cp_waste; cp_water; cp_mass | wet kg per reference flow and separate H2O ledger |  |
| stock_vectors | all inventory rows | For each flow i: newly completed production burden vector = actual current activities + inherited raw/WIP vectors brought into production - actual raw/unused/WIP vectors carried forward; separately reconcile external returns/transfers/disposal at actual stages without subtracting net-issued material twice. Newly accepted FG vectors remain within Q, then are split between current dispatch and new closing FG; opening FG dispatch/returns keep original vectors and create no Q. Allocate only real common residual once. | cp_stock; cp_mass; cp_layers; cp_adhesive | each-flow attributed A and stock vectors; gross V independent | eu-pef-multifunctionality-2021 |
| packaging_receipts | paper_wrap | Complete physical ledger: opening S0 + purchased P + first nonpurchase N + ER matched to the same article previously outward = closing S1 + actual external outward EO + waste W. Include every empty/raw/WIP/FG/reusable stock; internal grossS issue/reuse ends cancel. P remains purchased without separate invoice. N records atomic material/form/direction/original measurement/receiptID and time/origin/owner/custody/cohort/priorvector/provider. Unknown history is not zero; whole article and components have no duplicate manufacture; current attribution and future carryover are separate. | cp_pack; cp_stock | complete receipt ledger and one provider burden |  |
| steam_delivery | steam_heat; condensate_return | Actual steam kg is mass-rate integrated over time; reconcile delivered MJ using a common inlet/outlet enthalpy datum and actual condensate/vent/loss paths. Retain provider thermal-energy quantity, usable heat and carrier-water kg separately; a different provider basis requires verified conversion, never an assumed equality or latent-heat factor. Verify coupled heat/power/water from actual provider joint burdens and each-exchange physical relationships; do not repeat provider fuel/water/electricity/emissions or invent a condensate energy credit. | cp_steam; cp_energy; cp_water; cp_stock | attributed native heat and separate water/energy physical ledgers |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all exchanges | Check name, CAS when relevant, route, classification, medium, property and unit; physical identity is distinct from background quantity compatibility; unresolved UUIDs remain blank. | supplier specifications and direct flow/property/unit records |
| period_scope | collection | Declare actual place/complete period, ply grades, adhesive supply state and line; historical or single-plant examples are not generic recipes or energy amounts. | cp_mass; cp_layers; cp_adhesive; cp_energy |
| uncertainty | measurement | Retain calibration, representativeness, detection limits, material/water/carbon residuals and uncertainty; missing is not zero and supplier VOC-free claims do not prove zero release at all stages. | cp_air; cp_water; cp_waste |
| coverage | actual route | Investigate and atomically complete actual packing, transport, maintenance/lubricants/cleaners/wastes and utilities. This method supplies no assumed on-site boiler or treatment unit. Distinguish real species/compartment/water/heat/phase from total PM, COD, NOx or elemental indicators; an indicator is not an additional species, and one residual cannot solve multiple unknowns. Retain actual biogenic CO2 in LCI irrespective of GHG reporting conventions. | cp_energy; cp_steam; cp_pack; cp_water; site process diagram |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product | Check flat plies, adhesive, surface/gate state and actual route; any unknown requires review, with no inference from classification or the name solid board. | wco-hs-2022-ch48; klug-es-adhesive; solidus-board |
| validate_final_sheet_dimensions | product | Require a rectangular sheet, including a square, with measured unfolded long side > 36 cm and short side > 15 cm at first supply after final cutting. Equality fails either limit. Missing form or dimensions require review before use. Keep any out-of-scope output out of the eligible reference mass. | wco-hs-2022-ch48; cp_mass |
| validate_reference | reference | Exactly one board_output is the 1 kg reference product output; identity must have verifiable physical limitations and cannot borrow a neighbouring product UUID. |  |
| validate_balances | collection | Verify every Amount original unit, real rate integration, conversion scope, each-flow subdivision/shared attribution, raw/WIP/FG inherited vectors and final single A/Q. Independently review gross V dry matter/water/carbon, stocks, physical co-outputs, Q=0 loads and first external packaging receipts. New closing FG is already in Q; return/reinspection creates no Q. A finite measurement check does not establish actual dataset completeness. | eu-pef-multifunctionality-2021 |
| validate_air | emissions | Do not sum the three exclusive particle bins with cumulative PM10 or total particulate; captured dust is separate from air releases. Zero requires screening evidence; unknown emissions/background bases prevent complete acceptance. | ec-paper-bref-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Declared gate-board input to downstream paper/packaging converting models |
| allowed_use | Only datasets physically within this scope with complete evidence/inventory |
| excluded_use | Wet multilayer board, corrugated/coated/impregnated materials; packages with unknown identity or quantity bases |
| required_metadata | Reference net mass/moisture, layer construction, adhesive, gate state, supplier backgrounds/utilities, actual period/place, each-flow stock inheritance and first flat-board supply gate |
| required_quality_disclosure | Missing measurements, unresolved identity/background bases, balance residuals, emission coverage, allocation and uncertainty |
| update_trigger | Changes in plies/adhesive/surfaces, process/energy/water treatment, supplier background or quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| wco-hs-2022-ch48 | official_guidance | WCO HS Nomenclature 2022, Chapter 48; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1048_2022e.pdf | Headings 48.07/48.08/48.10 distinguish flat adhesive bonding, corrugation and coating; no CPC mapping acceptance or emission factor. |
| ec-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF, 2015; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Section 7.1.10 (printed p.670/PDF p.708): finishing, cutting dust and packing mechanism; 7.1.11.5 (p.677/PDF p.715): wet multilayer board distinctions. Dry cutting mechanism only reused for converter; no papermaking water/energy/recycling defaults or emission factors. |
| klug-es-adhesive | handbook | KLUG-CONSERVATION, ES products, publisher page with 2024 notice; https://www.klug-conservation.com/es-products | ES adhesive and flat multiple-ply bonding paragraphs: heat-treated starch/water-soluble adhesive and product case only; no zero-VOC, recipe, life or dosage default. |
| klug-es-board-td-2026 | handbook | KLUG Conservation board 017 ES natural white multiple ply technical data sheet, 2026 notice; https://download.klug-conservation.de/Technische_Datenblaetter/Karton/Museumskarton/017-ES-naturweiss/en/TD-Conservation-board-017-ES-natural-white-multiple-ply-thicknesses-1-0-1-5-2-0-2-5mm.pdf | PDF p.1 material characteristics and ex-stock sheet dimensions: bleached-cellulose/potato-starch-bonded case; thickness/composition/performance figures are not generic recipes/ranges, and no inference of all surface treatments or site utilities. |
| paramelt-paper-board | handbook | Paramelt, Paper and board converting, publisher page; https://www.paramelt.com/packaging/paper-board-converting-adhesives/ | Water-based adhesives and Board lamination sections: different adhesives/films require formulation/surface decisions; no quantitative default. |
| solidus-board | handbook | Solidus, Solid board sheets and reels; https://solidus.com/product-type/solid-board-sheets-and-reels/page/2/ | Composition of solid board and Foodline: recycled-core/PE/PET-coated counterexamples; solid-board name does not prove uncoated state and its specifications are not quantity defaults. |
| eu-pef-multifunctionality-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | PDF pp.63–64: subdivision/expansion, physical and other relationship hierarchy; allocation method only, no fixed shares or complete PEF-conformance claim. |

| unsd-cpc3-notes-2025 | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, p.147; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official category and neighbouring exclusions only; no recipe, utility route or mapping acceptance. |
| kohlschein-reel-lamination | handbook | KOHLSCHEIN, Reel-to-sheet lamination; https://www.kohlschein.de/en/services/lamination/reel-to-sheet-lamination/ | Separate converter and customer-provided supply; no starch, surface-state or numerical default. |
| klug-boards | handbook | KLUG-CONSERVATION, Boards; https://www.klug-conservation.com/boards | Wet couching versus adhesive bonding; grade names and intended use do not establish surface state. |
| fedrigoni-old-mill-2021 | handbook | Fedrigoni, OLD MILL ECO 40 BIANCO, February 2021, p.1; https://specialpapers.fedrigoni.com/wp-content/uploads/2021/09/OLD-MILL-ECO-40-BIANCO-1-1.pdf | Adjacent uncoated starch-laminated on-machine route; excluded from this converter foreground, no recipe or grammage default. |
