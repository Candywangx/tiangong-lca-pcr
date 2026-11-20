---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.worn-clothing-and-other-worn-textile-articles
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Preparation of worn cotton-knit T-shirts for direct rewear

## 1. Scope and Applicability

This method covers a bounded post-use article chain: adult single-layer cotton-jersey T-shirts, still individually recognisable as shirts, collected from source owners and sorted/prepared to first acceptance for direct wearing again in an identified market. The main fabric is verified cotton; actual retained original trims, dyes/finish, soil and moisture remain subledgers of the whole article. Acceptance requires usable fabric and seams, actual necessary cleaning and minor repair, and documented safety/function/market fitness. No substantial remaking, fibre recovery or assumed new-clothing equivalence occurs.

The cited JRC study supplies sorting context and counterexamples; the Austrian general assessment sheet applicable to garments supplies assessment/cleaning/repair logic. This is a transparent technical synthesis for one article/route branch, not one observed supplier order or factory. Operator-specific procedures and actual lot measurements remain mandatory. The WCO trade presentation conditions are kept distinct from reuse function and from the UN CPC title in the complete notes. No universal wash recipe, reuse yield, per-shirt mass or number of further wears is supplied. [jrc-textile-2025; austria-reuse-2019; wco-hs63-2022; unsd-cpc-2025]

Pacific Clothing describes used-clothing sorting by knit/woven construction and a men’s short-sleeved cotton round-neck T-shirt stream, followed by piece-by-piece customer-grade reinspection and bale weighing/packing. This supports the article-grade route, not an observed cotton-jersey order: confirm actual knit construction, cotton/trim, appreciable wear, receiver and destination-market grade. Its clear-sheet/steel-strap bales do not establish this method’s LDPE sack, cleaning or repair arrangements. This method selects adult short-sleeved round-neck cotton-knit shirts in LDPE sacks, with aqueous cleaning/electric drying and minor seam repair only when necessary and actually recorded. [pacific-sorting; austria-reuse-2019]

The complete UNSD notes at PDF page 201 give the 39217 title without additional inclusion text. Neighbour 39218 covers rags; 39214–39216 concern cotton or man-made fibre wastes, not this intact wearable output. New/unworn knitted T-shirts belong outside this worn-article scope. The physical classification does not determine waste/product legal status. EU Directive 2025/1892 distinguishes direct reuse from further preparation and requires destination-relevant evidence where applicable; assess jurisdiction and actual status separately. [unsd-cpc-2025; eu-textile-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.worn-clothing-and-other-worn-textile-articles |
| classification_refs | CPC 3.0:39217; accepted narrower direct-rewear branch; see docs/adr/2026-11-21-accept-cpc-39217-worn-cotton-jersey-shirts-for-rewear.md |
| covered_products | Adult single-layer short-sleeved round-neck cotton-knit T-shirts with appreciable prior wear; sorted and prepared for direct clothing reuse; bulk sack supply |
| excluded_products | New or unworn garments; children’s garments; protective/medical clothing; mixed charity collection service; wiping rags; opened fibres; garnetted stock; fibre recycling; substantially remade clothing |
| representative_product | Intact adult cotton-jersey T-shirt with use-related fading or pilling but serviceable fabric and seams after actual preparation; main fabric cotton identity is verified; retained trims and moisture remain in the whole garment |
| production_route | Source-owner handover → separate collection and transport → receipt and item-level sorting → actual necessary aqueous cleaning/electric drying and minor seam repair → inspection and sack packing → first positive direct-rewear release → cohort storage and handover |
| market_state | Identified receiving market and operator grade; appreciably worn wearable shirts in protective LDPE sacks; no assumed remaining wearing life or new-shirt equivalence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply prepared worn cotton T-shirts for direct use as clothing |
| How much | 1 kg net newly first-released accepted garments; exclude every packaging tare |
| How well | Item-level identity and condition checks meet the documented adult clothing function, cleanliness, seam integrity and receiving-market acceptance criteria; appreciable wear is compatible with safe function |
| How long or cycle | One identified preparation/release cohort; no count of wears, resale events, dispatches or reinspection as new production |
| reference_flow_link | accepted_worn_shirts |

### Reference object

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Prepared appreciably worn adult cotton-jersey T-shirt for direct rewear |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | main-fabric cotton identity and verification method; adult single-layer short-sleeved round-neck cotton-knit T-shirt construction and size scope; retained seam/label/trim composition; prior-use provenance and appreciable-wear evidence; source-owner handover and waste/product status at every gate; actual collection route and source partitions; receiving-market grade and acceptance specification; cleaning necessity and actual wash formulation; drying route and endpoint moisture; repair task and actual thread supply; unique first-release lot/time and net weighing/tare; site and reporting period; country/voltage and utility provider boundary; prior manufacture/use/recovery exchange-vector attribution; output status and allocation drivers; per-exchange opening/closing WIP vectors; opening/closing FG and original cohort burdens; gross physical dispatch and external returns; each packaging component and reusable-pool ledger; native UUID restrictions and unresolved core identity |

Carry every required qualifier into actual metadata, reference comment or equivalent complete consumable product context. The reference Product UUID remains absent because no compatible worn-shirt identity has been confirmed; none of the auxiliary UUIDs establishes it.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of unique new positive first-release net masses in cp_release after all necessary cleaning/repair, garment acceptance and sack packing. Measure whole as-accepted shirts including actual moisture and retained trims; exclude sacks. Reinspection, each wear, resale, old-lot returns and dispatch do not add Q. |
| raw_units | all inventory rows | Original measured property | kg; MJ; kg*km | Convert raw quantities before attribution. kWh × 3.6 gives MJ once. Actual rates require integration over the recorded interval; already integrated quantities do not get another time factor. Volume-to-mass requires independent material-specific density at the measured temperature/pressure. No generic density or kg per garment is supplied. |
| whole_supply | source_shirts; wash_detergent; repair_thread | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each whole supplied garment or purchased formulation once. Cotton content, original trims, detergent active matter and carrier water are constituent subledgers, not additional purchases. On-site mixing instead requires each actual separately purchased ingredient and real mixing energy/loss as individual exchanges. |
| phase_mass | physical ledgers | Mass and composition | kg | Reconcile total physical mass separately from water, cotton solids and each relevant trim/soil/formulation constituent. Washing and drying do not imply polymer conversion or reaction water. Free liquid, retained moisture and vapour differ from chemically bound water. COD/TOC are indicators, not a named chemical mass. One balance residual cannot solve two unknown outlets. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole post-use cotton T-shirts at source-owner handover, before collection/sorting/preparation; include assigned upstream garment history separately from current preparation activities |
| starting_condition_role | Post-use whole-article input; a finished reused-shirt purchase/repacking gate is not the starting point |
| product_classification_scope | One direct-clothing-reuse branch within CPC 3.0:39217; rags and recycling-only materials excluded |
| recursive_input_rule | Internal T transfers and unaccepted rework retain inherited vectors and cancel on combination. Previously released returned garments retain original cohort identity; they are not a new source purchase or new Q. External prepared garments require separate applicability review. |
| upstream_dataset_requirement | Use one compatible provider for each actual purchase/service; retain route, geography, time and included transport/packaging. Carry the documented historical garment exchange vector exactly once, including the attributed manufacture, past maintenance/use and recovery steps; never assume donated means burden-free. |
| disclosure | Report separate collection, preparation/first-release, FG-service and combined gates; raw physical balances, mixed collection partitions, history attribution and unresolved identity remain explicit |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | p_collect; p_prepare | Include source handover, real pickup/transport, receiving/unpacking, individual sorting and condition assessment, necessary actual cleaning/drying and minor repair, inspection and bulk sack packing. Preserve rejected fractions. Do not substitute a charity collection total or purchased finished-shirt packaging inventory. | jrc-textile-2025; austria-reuse-2019 |
| b_identity | reference product | The chosen article remains an adult cotton-knit T-shirt for wearing. Verify appreciable prior wear and bulk sack presentation independently from direct-rewear suitability. New/unworn articles and material suitable only for rags or fibres are outside. UN CPC gives the category title only; the trade-condition basis here is WCO Chapter63 Note3. | unsd-cpc-2025; wco-hs63-2022 |
| b_cleaning | p_prepare | Choose actual item/cohort cleaning needs and fibre/care-compatible procedures; no universal wash temperature, dose, hygiene claim, repair rate or drying energy is supplied. The representative aqueous route uses whole laundry liquid and electric drying when needed. Dry cleaning, hazardous contamination, medical/protective decontamination or substantial reconstruction require another review and complete atomic inventory. | austria-reuse-2019; jrc-textile-2025 |
| b_completeness | all processes | Keep failed runs, Q0 cohorts, startup/shutdown, idle, cleanup, repeat washing and real rework. Add every actual omitted single formulation, fuel, utility, packaging component, separated waste and emitted species before asserting completeness. No other-material bucket or unsupported zero substitutes for a real exchange. |  |
| b_utilities | electricity; heat; water | The selected branch has electric washing/drying and handling. Do not copy a nonexistent boiler/steam/combustion inventory. If another actual heat route occurs, add each fuel, combustion gas species, steam or heat input and external condensate/heat-exchanger-water Product return separately, with actual state/enthalpy and supplier water/energy conventions; cancel internal circuits. |  |
| b_stocks | Q; FG; V | At first release, Q already includes released garments still in closing FG. Maintain opening FG + Q + external returns received = closing FG + gross physical dispatch V + real FG losses/transfers. Do not add closing FG to Q. Preserve original-dispatch reversal and old-cohort burdens on returns; extra cleaning/repair is incremental load, not new garment production. |  |
| b_services | p_service | Store raw post-release storage/handling/repacking loads H_i against original released cohort c. Join them into that cohort’s numerator before calc_normalize; do not put old-FG services onto unrelated current Q. Gross dispatch V and returned shipments remain physical diagnostics. Combine gates by cancelling internal T and Q transfers. |  |
| b_provider | all provider and outlet rows | Separate whole-outlet totals from source partitions: collect either measured partition amounts or a total with exhaustive non-overlapping shares, never both added. Match each stream to one provider/treatment boundary. An outsourced freight/treatment dataset already including fuel, emissions or losses must not be duplicated with direct rows. |  |
| b_native | UUID-bearing and unbound rows | All native restrictions in each card are mandatory product context. The worn-shirt core is unbound: manufactured-shirt, generic cloth and unusable-production-waste candidates do not establish a reusable worn garment. No surrogate UUID or inferred database-wide absence is asserted. Method use requires resolution of this core identity and actual-gate compatibility. |  |

## 6. Process Inventory Structure

All cards use the same 1 kg first-release reference cohort. The physical gate diagnostics T, Q, V and attached packaging are reconciled independently from attributed burdens and are not additive supplies. Conditional cleaning/repair/utility cards require real event or absence evidence. Split each actually separate material, species, outlet and package component; no catch-all other stream is permitted. A one-provider model must state which raw burdens are already upstream-contained.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_collect | Source collection and delivery | required | Actual source-owner cohort | Source whole-article gate and collection | Gross receipts and internal T with inherited vector |
| p_prepare | Item sorting cleaning repair packing and first release | required | Matched T; cleaning/repair only as actually necessary | Preparation and acceptance | Unique new first-release Q |
| p_service | Released-cohort storage and physical dispatch | required | Actual storage/handling/returns; replacement packing only if real | Original-cohort raw service H_i and FG reconciliation | Original Qc and physical V; no new production |

### Process: Source collection and delivery (`p_collect`)

#### Inputs

##### Product flows

###### Whole source garment (`source_shirts`)

Receive whole shirts with source-owner record, net mass, original cotton/trim/soil/moisture subledgers and a separately auditable inherited exchange vector. This is not virgin fabric or a newly manufactured T-shirt purchase. Collect real handover and pickup work even for donations; no source UUID is adopted.

- Selected flow: Post-use adult cotton-jersey T-shirt before reuse sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Sources: `ilcd-2010`

###### Contracted road freight (`collection_freight`)

The contracted road-freight service UUID and its mass-distance property UUID remain unresolved. Record actual vehicle, fuel, load and route; no historical 30-ton provider restriction is asserted. Collect source-to-preparation legs, actual payload/distance and empty-trip policy. The outsourced service is one provider; do not additionally buy diesel or add its exhaust already included upstream.

- Selected flow: Road freight transport service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `ilcd-2010`

###### Collection-site electricity (`collection_electricity`)

Metered alternating-current electricity; actual grid, voltage and provider flow UUID remain unresolved. Energy/MJ describes the metered quantity only; it is not a verified native supplier flow property. A shared Units of energy group does not establish Net calorific value. Include real receiving, weighing, lighting, conveying and idle electricity. A different grid/voltage/technology needs a compatible identity/provider, not this UUID by name alone.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### LDPE sack received with source garments (`source_ldpe_sack`)

Conditional first non-purchase external receipt of one non-laminated LDPE film sack, with garments or separately. It is a physical packaging receipt, not a new sack-manufacture event. Classify every first non-purchase external receipt, with incoming garments or as a separate loan/free transfer, in the first-receipt leg regardless of supplier inventory coverage. Only a proven same physical sack previously dispatched from this site is a return; an already included source-package burden is not bought again. Source bags of another material require another specific card.

- Selected flow: polyethylene low density foil(PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Internal delivered garment transfer T (`collected_shirts`)

Physical net handover T to preparation, with whole garment state and the same inherited vector. Account collection losses individually if they occur. This internal transfer is neither a second external supply nor reference production; cancel it against received_shirts when combining gates.

- Selected flow: Post-use adult cotton-jersey T-shirt before reuse sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transfer`
- Sources:

### Process: Item sorting cleaning repair packing and first release (`p_prepare`)

#### Inputs

##### Product flows

###### Received internal whole garment (`received_shirts`)

Receive exactly the matched T lot from collected_shirts; retain inherited vector and measured condition. Sort each shirt by identity, wear, damage, cleanliness and market fitness before deciding preparation and final destination. Do not add source_shirts a second time in the combined model.

- Selected flow: Post-use adult cotton-jersey T-shirt before reuse sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transfer`
- Sources: `jrc-textile-2025`

###### Washing drying repair and packing electricity (`preparation_electricity`)

Verify actual grid, voltage and supplier flow identity; Energy/MJ is the metered quantity, not the unverified native supplier property. Meter actual washing, electrically heated drying, minor sewing, sealing, conveying, idle and cleanup separately enough to allocate them; add no fuel-fired dryer or steam default. The actual dry endpoint and moisture are recorded, not a universal cycle.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `austria-reuse-2019`

###### Municipal wash and rinse water (`washing_water`)

The selected exchange is actual treated municipal water; its supplier flow UUID is unresolved. It is not raw water, deionised water or purchased steam. Metered Mass/kg is used; any secondary Volume factor would not establish independent measured density; collect mass or actual water density/temperature for conversion. Include repeat washes and cleaning; absence needs records.

- Selected flow: Tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `austria-reuse-2019`

###### Whole purchased laundry liquid (`wash_detergent`)

Native Product explicitly includes laundry liquid and hand/spot washing with no fixed brand, assay, route or geography. Record one whole actual formulation including carrier water; retain supplier SDS/composition and compatibility. No dosage, disinfection efficacy or active-matter content is inferred. Separately purchased bleach or softener requires its own concrete card, not this formulation twice.

- Selected flow: Liquid Detergent `c1214ed0-28a4-4273-a8c9-a4f29351747a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `austria-reuse-2019`

###### Cotton sewing thread for minor seam repair (`repair_thread`)

Only actual minor seam repair, not recutting or remanufacture. Record complete supplied thread once including real finish/moisture and offcuts; no assumed repair fraction. No verified sewing-thread identity is adopted; actual composition, finish and sewing use require supplier evidence. Any different thread or replacement component is a separate actual row.

- Selected flow: Cotton sewing thread with actual supplied finish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `austria-reuse-2019`

###### Fresh protective sack material (`new_ldpe_sack`)

The archived native Product is PE-LD foil, production mix at plant, Mass/kg. Non-laminated sack construction and actual converting burdens are site-specific applicability requirements; the foil record alone does not verify a finished sack provider. Use this identity only for the one actual LDPE film sack; no woven PP sack, composite laminate, PET strap, tape or resin substitution. Record purchased finished sack once with its included conversion burden; if formed/sealed on site, include actual forming/sealing electricity without a second sack or resin purchase.

- Selected flow: polyethylene low density foil(PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `wco-hs63-2022`

#### Outputs

##### Product flows

###### New first accepted direct-rewear garments (`accepted_worn_shirts`)

Q is net newly first-released whole shirts meeting the documented adult direct-clothing function, cotton-main-fabric identity, actual cleaning/repair acceptance, moisture and safety/market criteria. Maintain appreciable prior wear and bulk LDPE sack form; exclude every sack tare. Retained labels, seams, finish and actual moisture remain garment constituents. This is not a claim of new-garment quality, specific remaining wears, uniform factory origin or cradle-to-gate completeness. No compatible core UUID has been confirmed; do not bind new manufactured T-shirts, cloth, production scrap or rags instead.

- Selected flow: Prepared appreciably worn adult cotton-jersey T-shirt for direct rewear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `wco-hs63-2022`; `austria-reuse-2019`; `jrc-textile-2025`

##### Waste flows

###### Non-rewearable cotton shirt to treatment (`rejected_cotton_shirt`)

This physical whole-shirt waste stream is not Q. Measure rejected shirts and real route/status, including actual soil, moisture and original trims. A mixed unknown-fibre waste-fabric UUID and unusable manufacturing-scrap Product do not match it. If a real valuable recycling/wiper co-product instead leaves the gate, create the separately qualified Product outlet and allocate; no automatic recovery credit or invented downstream yield.

- Selected flow: Rejected post-consumer cotton T-shirt for contracted treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outlet`
- Sources: `jrc-textile-2025`; `ilcd-2010`

###### Captured cotton lint from preparation (`captured_cotton_lint`)

Weigh the physically captured lint with actual moisture and soil fractions; separate filter cake from any independently collected dry lint when their states/destinations differ. This is neither cotton-ginning linters nor a measured airborne emission. No UUID or constant loss fraction is adopted; any actual other removed soil/trim must be its own specific flow.

- Selected flow: Cotton lint captured from washing or drying cotton shirts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outlet`
- Sources:

###### Whole wash effluent to external treatment (`laundry_effluent`)

Record the one physical aqueous effluent mixture, measured mass and actual destination; preserve separate dissolved/solid/soil/formulation subledgers and analytical uncertainty. It is a technosphere Waste outlet, not direct elementary water discharge. The candidate fixed to electrolytic-manganese-slag washing is incompatible. Do not count whole effluent plus its constituents as separate full masses or infer a named chemical mass from COD. Treatment provider emissions are not repeated locally.

- Selected flow: Cotton-shirt laundry wastewater to contracted treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outlet`
- Sources:

###### Discarded LDPE sack (`ldpe_sack_waste`)

Actual torn or retired LDPE sack only, with destination and contamination records. Native virgin/supplied Product film cannot be reused as a Waste UUID. Keep each actual other package component or soil stream separate. Reconcile this outlet with cp_pack; internal reused bags are neither waste nor new procurement.

- Selected flow: Discarded non-laminated LDPE clothing sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

##### Elementary flows

###### Actual water vapour to air (`evaporated_water`)

Native Elementary flow is CAS7732-18-5 H2O, emission to air with unspecified subcompartment, Mass/kg. Broad synonym lists also mention isotope/ice labels; no isotope, liquid release or steam Product is intended here. Use only actual free-water evaporation to air and independently measure retained water and wastewater before closing the water balance; unmeasured competing outlets cannot be fitted from one residual. Captured condensate is a separate actual liquid outlet/return, not this emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

### Process: Released-cohort storage and physical dispatch (`p_service`)

#### Inputs

##### Product flows

###### Internal released-cohort receipt (`released_for_service`)

Receive the original Q cohort with its complete vector; stock is a physical gate transfer and is cancelled against accepted_worn_shirts in the combined model. Retain external returns separately by original release and original-dispatch reversal. Old stock does not inherit a fresh production date.

- Selected flow: Prepared appreciably worn adult cotton-jersey T-shirt for direct rewear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources:

###### Storage handling and loading electricity (`storage_electricity`)

Verify actual grid, voltage and supplier flow identity; Energy/MJ is the metered quantity only. Keep raw actual electricity H_i by original cohort and occupied duration/space or other demonstrated causal driver; include idle and cleanup. Join H_i before that cohort’s single normalization, not another division by current dispatch or Q.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `ilcd-2010`

###### Actual fresh replacement sack (`replacement_ldpe_sack`)

Same one non-laminated PE-LD film/sack restriction as new_ldpe_sack. Record only fresh replacement procurement assigned to the original released cohort; a physically returned or internally reused sack does not create a purchase. If another component is needed, add it separately. Keep its service-stage raw load in H_i.

- Selected flow: polyethylene low density foil(PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

###### External returned old released garments (`returned_worn_shirts`)

Actual returned old-cohort whole shirts only. Record original release and dispatch/reversal and preserve the original allocated garment vector; keep the positive physical returned mass separate from gross outward V. Additional work is attached as incremental H or a linked rework event, never new Q or a second original production burden. The same unbound worn-shirt core restriction applies.

- Selected flow: Prepared appreciably worn adult cotton-jersey T-shirt for direct rewear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources:

###### External LDPE sack return received (`sack_return_received`)

Conditional actual return of a non-laminated LDPE sack proven to be the same physical item previously dispatched from this site, empty or attached to returned old-cohort goods; retain its physical mass and inherited packaging vector. Count the external return received once in cp_pack; subsequent internal reuse is not fresh procurement. Do not collapse this receipt into net purchases or net outward packaging.

- Selected flow: polyethylene low density foil(PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Gross physical garment dispatch V (`gross_dispatch`)

Record every gross outward net garment mass V and its original cohort, including redispatch after a return, with sack tare separately. This is a physical delivery diagnostic; it is not a second reference production, not net delivery Q and not an additional product supply when combined with accepted_worn_shirts. Attach real post-release services to the original cohort only.

- Selected flow: Prepared appreciably worn adult cotton-jersey T-shirt for direct rewear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources:

###### LDPE sack accompanying gross dispatch (`sack_outward`)

Same native PE-LD material restrictions. This is the physical sack mass attached to gross outward garments, including reused sacks. It is a cp_pack ledger leg and a product packaging attribute, not another fresh sack purchase, garment Q, independently credited co-product or double-counted upstream burden. Record external empty-bag returns and external returns received as separate signed legs.

- Selected flow: polyethylene low density foil(PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

###### Empty LDPE sack returned externally (`empty_sack_return`)

Conditional return of the same non-laminated LDPE sack to an external owner, after detachment and empty-bag weighing. This is a distinct outward leg from packaging attached to gross V and from waste. It creates neither garment Q, a new bag purchase nor a credited co-product.

- Selected flow: polyethylene low density foil(PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

###### LDPE sack discarded during released-cohort service (`service_ldpe_sack_waste`)

Record real post-release replacement/handling sack loss by the original garment cohort, with its destination and retained packaging burden. This is a separate service-stage physical outlet and is reconciled once in cp_pack; do not duplicate preparation-stage ldpe_sack_waste. No supplied-Product film UUID is used as a Waste identity.

- Selected flow: Discarded non-laminated LDPE clothing sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 normalization calculation on this row’s raw attributable A_i and matched Q; do not renormalize. Physical transfer/dispatch/attachment diagnostics are not another supply.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all allocation | Use only attributional inventory accounting in an allocation-requiring situation consistent with the study goal. This is not a consequential substitution model; no avoided new clothing, avoided landfill or automatic recycling credit. | ilcd-2010 |
| a_subdivide | all shared processes | First assign dedicated collection/preparation work and embodied inputs by measured subdivision or technically demonstrated virtual subdivision. Assess each remaining exchange’s determining physical causality, including duration with limiting volume/mass for transport or storage; a single mass split for every load is not justified. | ilcd-2010 |
| a_residual | remaining shared inventory | Only genuinely unresolved residual common-process loads may use contemporaneous market value for each output/service in its actual state and amount at the same process gate. Document why subdivision and exchange-specific physical causality fail; remove later transport, washing, packing or retail margins from downstream prices. Reconcile shares to the full unallocated vector. | ilcd-2010 |
| a_history | source_shirts; historical vector | Retain each article’s manufacture, prior wearing/maintenance and recovery history without assigning the same historical exchange twice. Identify the technically equivalent true joint article-production gate and actual value/status trajectory; ordinary use-phase laundry belongs to the wearing service that caused it, not automatically to current reuse preparation. For a positive/nonnegative-valued article with limited inherent change, assess supported cycles/quality and physical attribution under ILCD §§7.9.3VI and14.4; if needed data cannot be obtained or approximated, justify the permitted value-based fallback and its uncertainty. Do not infer an infinite lifetime or recycling rate from a garment’s weight. | ilcd-2010 |
| a_waste_transition | negative-value intake | Where intake has negative market value, locate the actual step creating the first valuable reused article. Keep earlier waste-management responsibility with the first system; identify the true joint process and apply ILCD’s additional transition-step allocation rather than burden-free intake. Gate fees use their actual status and absolute value only in that specified transition allocation. Donated/zero-priced transfer alone does not establish a waste status or zero environmental history. Missing status, transition or history is unresolved, not a default cutoff. | ilcd-2010 |
| a_rejects | rejects and reusable packaging | Value and intended route determine whether a rejected cotton shirt is an actual co-product or waste requiring treatment. Record each separated physical fraction and real destination; no automatic scrap sale or credit. Reusable sacks retain their own measured lifetime/usage attribution; internal reuse is not fresh procurement or garment Q. | ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule column states only the final inventory reporting basis. Collection stores undivided raw amounts in original units and cohorts, including zero-output work. Conversion and attribution occur before the one §8 normalization; neither collection nor aggregation divides a value a second time. Protocol process_id names its primary owning process; use the same raw protocol for explicitly linked collection/service cards with their actual process and cohort keys.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | p_collect | Whole source article and inherited vector | handover and history ledger | source owner; article/lot; date; gross/tare/net mass; main fabric; trim/soil/moisture fractions; prior use and maintenance; gate status/value; historical raw exchange vector; history attribution decision | Calibrated net weighing plus provenance and composition checks; reconstruct attributed historical manufacture/use/recovery with documented true-joint gate; do not invent an absent record | kg; native exchange units | Each source lot and history revision | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_transport | p_collect | Actual source delivery service | journey manifest | vehicle capacity/fuel; source; destination; leg; distance; payload; empty return; provider included boundary; source partitions | Use actual contracted trip records and independent distance/load records; sum actual payload in kg times matched distance in km once; verify the actual vehicle and native service/property identity before binding | kg; km; kg*km | Each leg including empty-trip attribution | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_energy | p_prepare | Electricity by process and cohort | meter and event log | process; cohort; meter start/end; kWh; voltage; grid/country; wash/dry/sew/seal task; idle/failed/cleanup intervals; provider boundary | Submeter actual collection/preparation equipment and reconcile to site meter; retain failed and zero-output work; convert kWh to MJ before attribution | kWh; MJ | Each run and meter period | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_transfer | p_prepare | T and per-exchange WIP inheritance | physical transfer and WIP ledger | lot; process; T mass/state; opening/closing WIP mass/composition; inherited raw vector per exchange; additions; transfers; losses; rework loop | Calibrated transfer/WIP weighing and linked run tickets; preserve provenance and each exchange vector through internal transfers; no bulk monetary proxy for inherited energy/material | kg; native exchange units | Each transfer and period opening/closing | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_material | p_prepare | Whole detergent or sewing thread | purchase issue and composition ledger | single material identity; supplier/SDS; lot; purchased mass; opening/closing stock; issue; return; actual formulation; repair/wash task; carrier/active assay; loss | Weigh complete supplies and actual issues/returns; reconcile separate material stocks; composition is a subledger rather than a second procurement | kg | Each receipt issue and task | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_water | p_prepare | Water phases and evaporation | water balance with independent measurements | water meter/mass; temperature; independently established water density if needed; detergent-carrier water; incoming/retained garment moisture; wastewater mass/water fraction; condensate; vapour measurement; uncertainty | Meter/weigh water and independently measure garment moisture and effluent; measure exhaust water by supported humidity/airflow method or use one residual only after all other water legs are independently known; integrated gas volume receives no extra time factor | kg; raw meter units | Each wash/dry/cleanup run and stock boundary | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_release | p_prepare | Unique accepted first-release mass Q | inspection release and tare ledger | unique first-release ID/time; source/cohort; garment checks; wear evidence; care/cleaning/repair record; receiving-market grade; gross mass; sack tare; accepted net mass; reject; reinspection flags | Inspect item condition/function/safety and documented market fit after preparation; weigh accepted cohort on calibrated scale excluding all packaging and deduplicate release IDs; do not infer cotton composition from an unreadable label | kg | Every first release and rejection | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_outlet | p_prepare | One physical rejected shirt lint or effluent outlet | outlet measurement and destination ledger | single outlet identity; route/status/value; gross/tare/net mass; moisture/composition; sample method; whole-outlet total; exhaustive source shares; provider/treatment boundary; destinations | Weigh/sample each actual physical stream independently and retain custody/destination record; distinguish bound whole wastewater from its analytical subledger and real separate lint; totals and partitions are alternative non-additive views | kg | Every outlet and representative composition sample | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_pack | p_prepare | Each LDPE sack component and reusable pool | complete physical packaging and burden ledger | component/material; single-sack tare; empty/WIP-attached/FG-attached/reusable opening stock; all purchases including bundled purchases; first non-purchase external receipts with garments or separately loaned/free-transferred regardless of supplier coverage; same-item previous outward-dispatch ID; true external returns received; closing stocks in same states; attached mass on gross dispatch; empty external return sent; waste; internal reuse; original burden vector | Weigh each component and trace reusable sack identity/condition; reconcile all signed external/stock legs for the same physical pool. Keep procurement/usage burden and attachment diagnostics separate; add actual seal/tape/strap separately if present | kg | Every packaging event and opening/closing count | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_fg | p_service | Released stock dispatch V and returns | cohort FG physical and inherited-burden ledger | original release/cohort; original Q; opening/closing FG; gross physical V; returned mass; original dispatch ID/reversal; real losses; regrades; inherited vector; incremental repair | Trace calibrated weighbridge/warehouse records by original cohort and dispatch; record returned old stock and incremental preparation without another first-release receipt | kg; native exchange units | Every event and period opening/closing | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |
| cp_service | p_service | Raw post-release service vector H_i | service event and meter ledger | original cohort; event/time; occupied space/duration; meter/raw exchange; idle/cleanup; storage/handling/repacking task; causal driver; stock return attribution | Collect undivided real raw loads by original released cohort; cross-reference cp_pack/cp_fg and apply demonstrated allocation before joining H into that cohort numerator | kWh; MJ; kg | Every service event and meter interval | Declared reporting window plus complete original-cohort history and post-release events | Actual named source/collection/preparation/storage sites; identify outsourced boundary | per 1 kg reference flow | Dated original records; calibrated measurement; custody/provider scope; uncertainty; reconciled totals and retained gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_convert | all inventory rows | Convert each undivided raw observation into its exchange unit before attribution; electricity_MJ = measured_kWh * 3.6; freight_kgkm = sum(payload_kg * distance_km) for matched actual legs. Use independently supported density/state for any volume conversion and integrate only genuine rates. | raw_observations; measured_kWh; payload_kg; distance_km; density_state | converted_raw_observations |  |
| calc_attribute | all inventory rows | Build raw per-exchange A_i by source/cohort after applicable §7 history and shared-process attribution: opening WIP inherited vector + attributed current additions + original-cohort raw H_i - closing WIP inherited vector - explicit transfers assigned to other cohorts. Reconcile each destination vector to its physical quantity. Preserve failed/Q0/idle/cleanup loads and unresolved assignments; do not discard them or silently spread them over unrelated Q. F_i is only genuinely new unrecorded same-direction load; X_i is only an exactly proven duplicate on that same side (including an upstream-contained exchange). F_i and X_i cannot balance unknown losses or remove a necessary opposite-side return. | converted_raw_observations; inherited_vectors; allocation_decisions; H_i; F_i; X_i | A_i | ilcd-2010 |
| calc_normalize | all inventory rows | q_i = A_i / Q for Q > 0, once, on the matched first-release cohort; Q = sum of unique accepted net release masses in cp_release. Reference production is 1 kg; T/Q, V/Q and packaging-attached diagnostics express gate ratios and are not additional external supplies. At Q = 0 retain raw inventory and unresolved cohort assignments and issue no unit result. Cards and protocol aggregation only reference this calculation; never divide an already normalized q_i again. | A_i; Q; cp_release | q_i |  |
| calc_physical | physical ledgers | For each physical process/cohort: opening WIP + all real material receipts = closing WIP + all distinct physical material outlets. Preparation production output is Q + actual rejects/lint/effluent/vapour, not Q + closing FG. FG gate: opening FG + Q + external returns received = closing FG + V + actual FG losses/transfers. Combined collection/preparation/FG balance cancels internal T and Q transfers, retains opening/closing WIP and FG, all external material legs and actual water/species states. Balance physical mass and relevant components independently of allocation shares. | cp_source; cp_transfer; cp_release; cp_outlet; cp_water; cp_fg | physical_reconciliation |  |
| calc_packaging | all packaging rows | For each component and the same physical pool: opening(empty + WIP-attached + FG-attached + reusable) + all purchased packaging receipts + first non-purchase external receipts + proven same-item external returns received = closing(empty + WIP-attached + FG-attached + reusable) + attached packaging on gross physical dispatch V + external empty returns sent + waste. Purchased receipts include standalone and bundled purchases. First non-purchase receipts include sacks arriving with garments and separate loans/free transfers, even when omitted from a supplier inventory. A true return must trace the same physical sack to its prior dispatch from this site; an untraced incoming sack is not a return. Assign each physical receipt once. Record actual procurement, freight and service burdens once, net of proven provider inclusions only; missing supplier data is pending, never zero. Internal attachment/detachment/reuse cancels; source packaging retains its real inherited burden without manufacturing it again. No packaging mass enters garment Q. | cp_pack; V; packaging_stock_states | packaging_reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all garments and native references | Resolve the worn-shirt core before methodology acceptance; verify whole native record and its actual supplier/route/form/type/property chain. All §3 qualifiers and every native restriction must remain in consumable product context. Unreadable composition/unknown old-clothing origin is not a passed identity check. | Source custody and composition evidence; exact direct/support records; applicability decision |
| dq_measure | all raw fields | Keep calibration, tare and moisture methods, complete failed/idle/Q0 records, original units, independent density when required, time intervals, uncertainty and any reconciliation discrepancy; missing is not zero. | Calibration and batch/meter logs; independent samples and balance residuals |
| dq_history | source history and shared allocation | Keep raw historical/current/service vectors separately, explicit status/value trajectory, true joint gate, subdivision/physical-causality decisions, residual same-gate values and sensitivity. A zero price is no history waiver. | Traceable upstream studies and history/transition decision; complete share reconciliation |
| dq_completeness | whole physical gates | Record source partitions exhaustively without overlap and one provider per exchange. Inspect all actual materials, utilities, wastes and emitted species; add omitted atomic rows. Check independent whole/component and complete packaging balances with WIP/FG inheritance. | Custody manifests; raw balance and provider-boundary audit |
| dq_time | all collection protocols | Use one declared site/reporting window plus original-cohort history and actual post-release service periods. Disclose older evidence, geographical transfer, operator-selected grades, unknowns and uncertainty; synthesis is not one observed order or factory. | Dated source and site records; condition-specific applicability review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | applicability | Verify adult cotton-knit T-shirt identity, appreciable wear, bulk presentation, actual reuse market and safe functional acceptance independently. Neither a cotton label nor a collection sack alone proves direct rewear. Reject new clothes and recycling-only rags from Q. | unsd-cpc-2025; wco-hs63-2022; austria-reuse-2019 |
| v_uuid | native identity | Reject mismatched route/form/grade/media/type/CAS, even with a similar basename or classification. Verify exact reference property and unit-group versions outside canonical text, and actual reference unit. Ordinary provider/auxiliary UUID gaps remain explicit; the unresolved core prevents a complete usable identity. |  |
| v_basis | Q; A_i; H_i | Check one first-release denominator and exactly one calc_normalize application after raw conversion and attribution. Reject duplicate first-release IDs, dispatch/return/each-wear production, closing-FG duplication, hidden Q0 loads, lost WIP/FG vectors or an extra division. |  |
| v_mass | all physical gates | Check collection/preparation/FG and combined physical balances independently of allocation, with distinct actual species/water phases, complete packaging complete and source-partition reconciliation. Multiple unresolved outlets cannot be fitted from one residual; unresolved discrepancies are findings. |  |
| v_allocation | history and shared processes | Check documented history/status/value and true joint process, then subdivision, exchange-specific determining physical causality and only remaining same-gate economic residuals. No free choice of mass/economic share, default zero-history input, fixed reuse proportion or avoided-new-clothing credit. | ilcd-2010 |
| v_complete | dataset and claim | Report performed/skipped checks, findings, missing evidence and scope completeness. Structural/projection/measurement checks do not establish scientific, translation, supplier or legal approval. Missing core identity or actual route/history evidence remains unresolved; do not advertise full coverage or a unit result for Q0. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Attributed supply of this specified prepared worn garment at the declared first-release gate, with cohort-bound post-release services |
| allowed_use | Use only after core identity, route and history applicability are resolved and required foreground data are collected; disclose candidate methodology and uncertainty |
| excluded_use | New garment manufacturing; per-wear functional comparisons; automatic substitution/credit; mixed collection or fibre-recycling dataset; unknown-endpoint exports |
| required_metadata | All §3 qualifiers; source/receiver and custody; first-release gate/cohort; raw Q and A vectors; native restrictions; provider boundaries; historical allocation and stock/service links |
| required_quality_disclosure | Core and auxiliary identity gaps; actual electricity provider/native property gap; operator-specific acceptance and cleaning; historical uncertainties; geographic/temporal transfer; actual measurement completeness and mass/packaging discrepancies |
| update_trigger | Changed garment family, reuse market/grade, waste status, cleaning/repair/heat route, provider, native identity, reference gate or material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UNSD CPC Version3.0 explanatory notes, 30June2025, PDF pp200–201; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Complete notes, PDF pp200–201: 39217 has a title but no further inclusion text; 39214–39216 fibre wastes and 39218 rags are excluded from this intact clothing branch |
| wco-hs63-2022 | official_guidance | WCO HS2022 Chapter63 Note3; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1163_2022e.pdf | Appreciable-wear and bulk/bale/sack presentation as separate trade-state conditions; not a lifecycle burden rule |
| jrc-textile-2025 | literature | Bakowska et al., Fate and Composition of Textile Waste from Italy, the Czech Republic and Romania, JRC141441 (2025), Annex 3, printed pp69–73 (PDF pp73–77); https://doi.org/10.2760/3332076 | Observed sorting context, operator/market-specific reuse selection, T-shirt category and wiper/recycling counterexamples; technical synthesis only, no transfer of study yields or default garment mass |
| austria-reuse-2019 | official_guidance | Meissner et al., Guide to determining the end-of-waste status in the preparation for reuse, November2019, §§1–2 and5.1; https://www.umweltberatung.at/download/?id=Prep-for-Re-Use_end-of-waste-guide_Austria_2019.pdf | General garment assessment sheet: checking, actual necessary cleaning/repair, function/safety and documentation; Austrian guidance is methodological evidence, not universal legal clearance or a wash recipe |
| ilcd-2010 | handbook | European Commission JRC, ILCD Handbook General guide — Detailed guidance, First editionMarch2010, §§7.9.2–7.9.3 and14.4; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation hierarchy and explicit reuse/history/status/true-joint-process conditions; no product-specific shares or fixed lifespan |
| pacific-sorting | literature | Pacific Clothing Recyclers, Product Process; https://pacificclothing.ca/product-process/ | First-party sorting and men’s short-sleeved cotton round-neck shirt grade, knit/woven distinction, individual reinspection and packing; no transferred yield, bag material or wash/repair assumptions |
| eu-textile-2025 | official_guidance | Directive (EU) 2025/1892, recital 23 and Article 22d sorting/direct-reuse provisions; https://eur-lex.europa.eu/eli/dir/2025/1892/oj/eng | Legal-status and destination-relevant reuse evidence distinction, only within applicable jurisdiction; not CPC identity or universal clearance |
