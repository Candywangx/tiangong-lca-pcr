---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.writing-or-drawing-ink-and-other-inks
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Writing or drawing ink: aqueous dye formulation

## 1. Scope and Applicability

This record covers physical formulation of aqueous soluble-dye ink actually supplied for writing, with EP0030389A1 Example 2 as a supported blue representative. The category label does not establish a recipe. Documented dissolution/mixing, actual conditioning, quality release, packaging, storage, handling, cleaning, rework and plant dispatch are traced for the selected product and period. Patent ingredient proportions, temperatures, times and performance tests are examples, not prescribed industrial doses, yields, operating conditions or service claims. `sakura-aqueous-writing-ink-1981`.

Printing inks including inkjet/offset/gravure inks, artists colours and paints, isolated dyes/pigments/resins/solvents, complete pens/cartridges, dry ink sticks, pigment milling, UV curing, dye-salt synthesis and other chemical-reaction routes are outside this evidence-bounded method. A drawing-ink or other-ink label alone does not extend coverage; establish the same physical formulation and product state before conditional reuse. Use the existing semantic record for a compatible product; a new end-use label does not justify a duplicate PCR. Additional real ingredients, containers, treatment and utilities must be represented as specific atomic exchanges before claiming complete coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.writing-or-drawing-ink-and-other-inks |
| classification_refs | CPC 3.0 35140; classification context only; method covers the stated subset, no accepted edge is created here |
| covered_products | Aqueous soluble-dye writing ink made by documented physical formulation |
| excluded_products | Printing ink; artists colours; raw dye/pigment/resin/solvent; pens; reactive and pigment-dispersion routes |
| representative_product | Blue aqueous writing ink; Acid Blue 9 commercial preparation representative, not mandatory universal composition |
| production_route | Acquire whole commercial ingredients; dissolve/mix; actual conditioning; release; package/store/handle and dispatch; no assumed reaction |
| market_state | Supplied liquid formulation at plant dispatch, including its carrier water; packaging recorded separately |



## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared aqueous dye writing ink as a whole liquid formulation |
| How much | 1 kg net ink actually delivered and accepted at plant dispatch |
| How well | Meet the actual declared product specification and recipient acceptance records; no generic writing length, hazard, permanence or dose |
| How long or cycle | One declared matched delivery accounting period; this is a mass reference, not a service-life functional comparison |
| reference_flow_link | delivered_ink |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Writing or drawing ink and other inks `7b873d98-a9cc-416f-a9e8-a5888295364b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual ink identity and intended writing function; recipe revision and whole supply forms; soluble-dye aqueous route; carrier/active/water basis; product grade and acceptance specification; plant and supplier geography; matched period and delivery cohort; actual net delivery gate; opening/closing WIP and finished stock with carried burdens; return/rework links; packaging and included dispatch scope; native identity limitations and provider compatibility |



Declare all required qualifiers in dataset metadata or equivalent product/process notes. The native reference is broader than this method. Its pharmaceutical generalComment is an explicit metadata debt; no CAS, grade, geography/locationOfSupply or recipe is provided. The Mass reference has coefficient 1; it is not a density.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_ink_mass | reference product | Mass | kg | Reference is whole supplied ink net of all packaging. Q is actual unique positive net accepted delivery, not newly released production and not dry dye or active mass. Closing undelivered finished ink is excluded from Q. |
| supply_form | all material inputs | Mass | kg | Measure purchased formulations in their complete supplied wet form. Assay and carrier-water quantities are constituent subledgers; never duplicate whole formulation procurement with its constituents. Separate onsite acquisitions and blend burdens remain external inputs. |
| raw_conversion | all inventory rows | Declared row property | declared row unit | Convert each raw record before the one final normalization. Volume needs same-formulation temperature-specific measured density. Integrate rate over duration once; already integrated liquid/gas volume gets no further time factor. Retain kWh or MJ consistently; steam heat uses measured enthalpy difference. |



## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased whole commercial ingredients or a compatible whole finished ink at site receipt; physical formulation to actual net plant delivery |
| starting_condition_role | Foreground receipt boundary; upstream production is linked, never zero by omission |
| product_classification_scope | CPC 35140 context, limited to the declared aqueous soluble-dye writing-ink route; excludes 35130 printing and 35120 artists colours |
| recursive_input_rule | Whole purchased ink is one external input with upstream production. Rework and production-to-warehouse handovers are internal links, cancelled on consolidation; do not create circular new purchases or outputs |
| upstream_dataset_requirement | Match each actual supply form, route, concentration, geography and reference unit; generic identity UUIDs establish no background provider quantities |
| disclosure | Declare receipt, production release, WIP, finished storage, packing, handling, returns, treatment and plant dispatch boundaries with included burdens and explicit exclusions |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_physical | formulate_dispatch | Use actual dissolution/mixing records. No pigment grinding, resin synthesis, dye-salt reaction, reaction-water factor or generic recipe is supplied by this method. Additional chemistry needs independent reaction/species evidence and method review. | `sakura-aqueous-writing-ink-1981` |
| boundary_complete | formulate_dispatch | Include attributable preparation, actual filtration, quality rejects, failed/zero-output runs, cleaning, rework, packaging, warehouse, handling, loading and other actual dispatch burdens within the declared boundary. Add each real missing flow atomically. Offsite transport beyond the plant gate is a separately declared module. |  |
| boundary_stock | formulate_dispatch | Keep production and finished-warehouse mass ledgers separately. Production records new unique quality releases and WIP; do not add the same released lot mass and its closing finished stock as two production outputs. Warehouse records opening stock, internal receipts, actual net dispatch, rejects and closing stock. Consolidation cancels internal releases/receipts. Keep WIP/finished inventory carried burdens, including failure and rework burdens. |  |



## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| formulate_dispatch | Aqueous ink formulation and plant delivery | required | Declared aqueous soluble-dye product; conditional rows only when actually present | foreground_production | 1 kg net ink actually delivered |



### Process: Aqueous formulation and plant delivery (`formulate_dispatch`)

The representative cards describe separate actual supply forms, not a mandatory recipe. An absent ingredient is documented as not used; an actual different dye, additive, resin, fuel, filter medium, container component or outlet must have a chemically/physically specific separate row and evidence. This record does not declare a complete site inventory before those records exist. Internal returns/rework and opening/closing stocks remain linked subledgers, not hidden omissions.

#### Inputs

##### Product flows

###### C.I. Acid Blue 9 commercial dye preparation (`dye_blue9`)

The supported blue representative uses Water Blue #9. Record the complete acquired preparation, assay, water and salt content; do not replace it with a pure dye mass or a copper-sulphate search hit.

- Selected flow: C.I. Acid Blue 9 commercial dye preparation

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources: `sakura-aqueous-writing-ink-1981`

###### N,N,N',N'-tetrakis(2-hydroxypropyl)ethylenediamine commercial preparation (`amine_stabilizer`)

Use only where actually charged; retain whole supply form and assay. A hexamethylenetetramine or triethylamine hit is a different chemical.

- Selected flow: N,N,N',N'-tetrakis(2-hydroxypropyl)ethylenediamine commercial preparation

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources: `sakura-aqueous-writing-ink-1981`

###### Ethylene glycol (`ethylene_glycol`)

Identity is a pure industrial substance, CAS 107-21-1, ethylene-oxide hydration, production and industrial input mix at plant; name also mentions electrolyte solvent use. Geography/locationOfSupply and a purity number are unspecified. Use only for a compatible acquired substance; no electrolyte grade or site is inferred. Purchased aqueous dilution is a distinct whole formulation, not this pure row plus duplicated water.

- Selected flow: Ethylene glycol `3685eaf5-415b-46b2-a350-8b8cf548abbf`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources: `sakura-aqueous-writing-ink-1981`

###### glycerol (`glycerol`)

CAS 56-81-5; production mix at plant. Geography/locationOfSupply, grade, purity and manufacturing route are unspecified. Native medical and non-toxicity prose supplies no PCR hazard or performance rule. Match supplier form and route independently; crude glycerol or an aqueous solution is not automatically equivalent.

- Selected flow: glycerol `32d6a3cd-fb89-4a48-9594-bb240083042e`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources: `sakura-aqueous-writing-ink-1981`

###### Sodium benzoate commercial preparation (`sodium_benzoate`)

Include only actual procurement and use; retain preparation concentration. Benzoic acid is not sodium benzoate; no generic preservative dose or safety property is imposed.

- Selected flow: Sodium benzoate commercial preparation

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources: `sakura-aqueous-writing-ink-1981`

###### Scourol #400 polyoxyethylene alkyl ether preparation (`surfactant_scourol400`)

The historical example names this commercial preparation. Alkyl chain, EO distribution and active content are not supplied; do not infer lauryl ether or pure surfactant. Current supplier identity and actual whole formulation need primary verification before dataset use. Other additives require their own specific atomic row and evidence.

- Selected flow: Scourol #400 polyoxyethylene alkyl ether preparation

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources: `sakura-aqueous-writing-ink-1981`

###### Water added to aqueous ink formulation (`formulation_water`)

Record separately acquired formulation water in the actual supplied grade. Water already present in a purchased dye or additive solution is a constituent subledger, not another external purchase. No deionisation route is presumed.

- Selected flow: Water added to aqueous ink formulation

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources: `sakura-aqueous-writing-ink-1981`

###### Writing or drawing ink and other inks (`purchased_ink`)

Conditional whole purchased finished aqueous writing ink for actual blending or repacking; this is not an atomic pigment, dye, resin or solvent. The generic native identity is production mix at plant, finished manufactured Product, with unspecified geography/locationOfSupply, grade and CAS; its unrelated pharmaceutical comment is a metadata debt. Verify compatibility and upstream production burdens; no recipe is supplied by the UUID. Internal rework never becomes this external purchase.

- Selected flow: Writing or drawing ink and other inks `7b873d98-a9cc-416f-a9e8-a5888295364b`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources:

###### Electricity supplied to formulation and dispatch operations (`electricity`)

Meter mixing, pumping, actual filtration, cleaning, packing, storage, handling, dispatch and rework electricity included in scope. Shared utilities use a recorded physical driver; an unspecified regional supplier is not assumed.

- Selected flow: Electricity supplied to formulation and dispatch operations

- Flow property / unit: Energy / kWh

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_utilities`

- Sources:

###### Process heat supplied by steam (`steam_heat`)

Conditional actual purchased steam heat, measured from steam and returned condensate enthalpies. Do not count the same heat again as electric heating or both fuel and purchased heat. Actual fuel-fired onsite supply needs separate fuel, boiler water and emission rows.

- Selected flow: Process heat supplied by steam

- Flow property / unit: Energy / MJ

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_utilities`

- Sources:

###### Water used for ink equipment cleaning (`cleaning_water`)

Collect actual cleaning water, including failed batches and changeovers; do not fold it into formulation water. Record actual detergents separately when present.

- Selected flow: Water used for ink equipment cleaning

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_materials`

- Sources:

###### Glass bottle for delivered writing ink (`glass_bottle`)

Conditional actual bottle; weigh the glass component and trace breakage, returns, reuse and attributable manufacture. Bulk delivery uses its actual container, not an invented bottle.

- Selected flow: Glass bottle for delivered writing ink

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_packaging`

- Sources:

###### Polypropylene bottle cap (`pp_cap`)

Conditional actual polypropylene closure, separate from glass; liners or seals of another material require separate rows. Do not assume cap polymer from bottle type.

- Selected flow: Polypropylene bottle cap

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_packaging`

- Sources:

###### Corrugated cardboard transport carton (`corrugated_carton`)

Conditional actual single carton; weigh declared construction and distinguish inserts, tape and pallet rows when present. Packaging mass is excluded from ink Q but its burden remains.

- Selected flow: Corrugated cardboard transport carton

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_packaging`

- Sources:

###### Fresh ink filtration cartridge (`fresh_filter`)

Conditional actual production filtration cartridge, with material and size identified from its supplier. Record whole cartridge consumption separately from ink retained in spent cartridges; stability-test filter paper is not production filtration evidence. Split any separately purchased media into its own atomic row.

- Selected flow: Fresh ink filtration cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

#### Outputs

##### Product flows

###### Writing or drawing ink and other inks (`delivered_ink`)

Terminal reference output: actual unique accepted net ink delivery at plant dispatch. Native broad name, manufactured state, Product type and Mass agree; name has no specific grade or geography/locationOfSupply and no CAS. Native generalComment says 352 Pharmaceutical products / 352 药品产品, inconsistent metadata explicitly retained as debt, not a pharmaceutical identity or recipe. Only the declared aqueous writing-ink subset is usable here.

- Selected flow: Writing or drawing ink and other inks `7b873d98-a9cc-416f-a9e8-a5888295364b`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: 1 kg

- Value mode: `fixed_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_delivery`

- Sources: `sakura-aqueous-writing-ink-1981`

##### Waste flows

###### Spent ink filtration cartridge (`spent_filter`)

Conditional real filtration only; include spent cartridge with retained ink and distinguish cartridge consumption. A stability-test filter in a patent is not proof that all plants filter production.

- Selected flow: Spent ink filtration cartridge

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_outlets`

- Sources:

###### Rejected aqueous dye writing ink sent for treatment (`waste_ink`)

Record actual final reject mass, composition and treatment route, including failed or zero-output batches; internally reworked ink is a linked internal transfer, not external waste plus a new purchase. No universal hazardous classification is assigned.

- Selected flow: Rejected aqueous dye writing ink sent for treatment

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_outlets`

- Sources:

###### Aqueous effluent from writing-ink equipment cleaning (`wash_effluent`)

Collect the whole effluent stream and its independently measured composition. At a wastewater treatment handoff it is a waste flow; if onsite treatment is included, expand treatment inputs, sludge and individually speciated releases without counting the same untreated load twice.

- Selected flow: Aqueous effluent from writing-ink equipment cleaning

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_outlets`

- Sources:

##### Elementary flows

###### Water vapour to air from ink operations (`water_to_air`)

Conditional measured or independently supported evaporation to the declared air compartment. Do not equate missing mass with water; no reaction-water amount is invented for physical mixing.

- Selected flow: Water vapour to air from ink operations

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_outlets`

- Sources:

###### Ethylene glycol released to air (`glycol_to_air`)

Conditional actual ethylene-glycol release to the declared air compartment. Use species-specific evidence; neither a total VOC number nor COD nor a balance residual identifies glycol emission. Other actual species require their own atomic rows.

- Selected flow: Ethylene glycol released to air

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Attributable exchange reported once for the declared reference flow by the single period calculation in Section 8; retain this card's collection protocol.

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per 1 kg reference flow

- Basis kind: `process_output`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_outlets`

- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | formulate_dispatch | First trace ingredients and production/warehouse/dispatch burdens to actual product-route-state cohorts, then subdivide shared operations using measured drivers. Record driver values and conservation. Do not invent a fixed allocation or credit waste as a co-product. |  |
| allocation_failures | formulate_dispatch | All attributable failed, zero-output, rejected and rework burdens remain in raw ledgers. A positive delivery cohort may bear them through documented causality; a standalone zero-Q period cannot be divided or silently discarded. Retain it for an explicit linked cohort or report no normalized dataset. Internal reacceptance creates no new production. |  |



## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Each aggregation_rule declares the final reporting basis only. collection_method retains undivided raw-period quantities and complete carried burdens. Only delivery_normalization performs A/Q once; collection and cards never divide again.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | formulate_dispatch | terminal delivery and stocks | weighing_and_acceptance | product/recipe/route/state; lot/receipt/return IDs; period; gross/tare/net kg; release records; opening/closing WIP and finished kg; stock burden vectors; transfer/rework links | Owner: dispatch and stock-accounting lead. Reconcile calibrated net delivery weights to unique acceptance and reversal records; retain production, WIP and warehouse ledgers separately. Record all opening/closing masses and their prior carried burdens, failed runs and returns. Reacceptance is not new production; the same physical returned quantity cannot earn a second delivery credit without its reversal. Collect raw quantities only, no A/Q here. | kg | each movement and period close | complete matched accounting period and carried-stock history | declared plant and delivery cohort | per 1 kg reference flow | scale calibration; acceptance/return trail; stock valuation and burden transfer reconciliation |
| cp_materials | formulate_dispatch | each acquired ingredient and cleaning water | purchase_and_charge_records | row_id; supplier/lot; whole supply form; gross/tare/net; assay/water/active; charge and loss; returns; opening/closing input and WIP stocks; carried burdens | Owner: formulation materials accountant. Retain every raw-period acquisition and charge including failures, zero-output and rework. Reconcile receipts and input stock to actual consumption; track whole formulations separately from constituent subledgers. Record matched WIP/finished burden transfers without renormalizing; supplier forms and native restrictions are checked. No A/Q in collection. | kg | each lot and charge | complete matched period including failed runs and prior-stock history | same plant/product/route/state | per 1 kg reference flow | invoices; charge scales; supplier specification; assay; stock reconciliation |
| cp_utilities | formulate_dispatch | electricity and separately metered steam heat | meter_records | row_id; meter start/end; rate/time or integrated totals; steam/condensate masses and enthalpies; operation; physical driver; failures/rework/storage/dispatch; WIP/finished burden transfers | Owner: utility engineer. Collect raw measured electricity and steam heat independently for the complete operations included, with physical allocation and carried burden links. Record failures and no-output operation. Distinguish integrated volume from rate before conversion. No A/Q in collection. | kWh; MJ | meter interval and period close | complete matched period with carried burden history | same plant and included operations | per 1 kg reference flow | meter calibration; allocation drivers; energy balance; stock burden links |
| cp_packaging | formulate_dispatch | each actual packaging component | component_records | row_id; material; component count/mass; rejects/breakage; return/reuse cycles; opening/closing stock and carried burdens; delivery links | Owner: packaging lead. Weigh each actual component separately; reconcile purchases, consumption, reuse, losses and stock to matched deliveries. Preserve packing, storage and handling burdens and product-stock carryovers. Do not divide by Q during collection. | kg | each component lot and period | complete delivery period and reusable-container history | same delivery cohort | per 1 kg reference flow | component weights; specifications; reuse and stock reconciliation |
| cp_outlets | formulate_dispatch | each actual waste or elementary outlet | weighing_sampling_and_monitoring | row_id; outlet; wet mass; composition; actual species; medium/compartment; waste receipt; integrated volume or rate/time; measured density; treatment; retained ink; WIP/stock and rework links | Owner: environmental and waste measurement lead. Measure each real outlet independently; retain whole effluent mass and species subledger without double release. Record zero/failure runs and treatment boundaries. Close physical mass/elements independently of species and water evidence; never infer two unknowns from one residual, COD or total VOC. No A/Q in collection. | kg | each outlet event or monitoring interval | complete matched period including failures and carryovers | same declared process and outlet compartments | per 1 kg reference flow | waste receipts; laboratory methods; monitor calibration; mass/element and species/water reconciliation |



### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | Convert raw numerator units with traceable actual factors before reporting. For measured volume use same-formulation density at the measured temperature; integrate rate over its recorded interval once. An integrated volume is already a total. For purchased steam heat use transferred mass times measured enthalpy difference; use 3.6 MJ per kWh only as an exact unit conversion. | raw records; measured factors | raw_period_j |  |
| delivery_normalization | all inventory rows | Q = unique positive actual net accepted delivered ink kg for the matched product/route/state/cohort, excluding packaging and undelivered stock; returns carry their reversals and cannot be credited twice. For each exchange/burden j, A_j = raw_period_j + opening_WIP_burden_j + opening_finished_burden_j - closing_WIP_burden_j - closing_finished_burden_j, after linked internal-transfer cancellation and documented physical subdivision; opening/closing terms are attributed exchange quantities, not kg of stock substituted for energy. Report a_j = A_j / Q once, only for Q > 0. Include all attributable failed/zero-output, reject, rework, packing, storage, handling and dispatch burdens. Cards and aggregation_rule refer to this same one reporting operation, never successive divisions. Terminal delivered_ink is fixed at 1 kg after this operation. | raw_period_j; opening_WIP_burden_j; opening_finished_burden_j; closing_WIP_burden_j; closing_finished_burden_j; Q; cp_delivery; cp_materials; cp_utilities; cp_packaging; cp_outlets | a_j |  |
| physical_reconciliation | formulate_dispatch | For each production and warehouse ledger reconcile physical opening mass + actual external receipts = external outputs + physical closing mass, cancelling internal links on consolidation and including measured air uptake if any. Keep packaging separate from ink. Assayed dye, carrier water and elemental subledgers do not become extra purchases. Actual species, reaction-water formation/consumption and phase/free-water changes need independent evidence; physical mixing alone supplies no reaction-water term. Unknown differences remain quantified uncertainty, not fitted emissions or fitted reaction water. | mass and element ledgers; species and water measurements; stock and transfer records | reconciliation evidence |  |



### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Check full native name components, CAS, route, grade/form, geography/locationOfSupply, type/medium and every property before use. Identity is distinct from supplier/background compatibility; preserve the specific limitations in the cards. A missing auxiliary match is disclosed; a contradictory reference or real chemistry is not substituted. | complete native records; supplier original; route and state audit |
| quality_complete | all inventory rows | All raw numerators, denominators and carried burdens cover the same actual product-route-state cohort. Do not omit no-output runs, stock, returns, rework or included warehouse/dispatch. No transferable consumption/emission range is established by one patent; record measured uncertainty and unresolved evidence needs. | complete period ledgers; stock burden transfers; measurement uncertainty; zero-output records |
| quality_scope | formulate_dispatch | Historical patent examples support the stated formulation route only. Verify actual formulation, specifications and acceptance; claim no generic safe, permanent, archival, antimicrobial or other performance from ingredient/native prose. | `sakura-aqueous-writing-ink-1981` |



## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_ink | Require a unique Product output linked by reference_flow_link, the declared reference UUID and 1 kg net whole ink. A purchased whole ink may share the generic UUID as an input; never hide it or relabel it as a dye. Check actual aqueous writing scope and native metadata debt. |  |
| validate_ledger | all inventory rows | Verify positive actual delivery Q, raw-period matching, complete WIP and finished stock burden transfers, transfer cancellation, returns/rework, failure loads and the single reporting division. Reject division by zero, dry-dye denominator substitution, duplicate whole/constituent purchases or extra finished-stock output at production release. |  |
| validate_physical | all inventory rows | Check complete physical mass/elements separately from actual species and water evidence; check actual medium and supply state, density conditions, integrated-volume treatment, heat units, packaging and treatment boundary. Missing measurements or outlet identity remain explicit incomplete dataset coverage, never fictitious zero emissions. |  |



## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared aqueous writing-ink supply in a downstream model |
| allowed_use | Same declared formulation route, state and net plant-delivery basis after applicability review |
| excluded_use | Printing ink; artists colours; raw pigment/dye/resin substitution; per-pen dose, writing service equivalence or generic hazard/performance claims |
| required_metadata | product/recipe/route/state; supplier forms; site/time/geography; reference gate; Q; WIP/finished stocks and burdens; returns/rework; packaging/dispatch; native limits; provider matches |
| required_quality_disclosure | collection owners and methods; full-period completeness; stock burden history; allocation drivers; uncertainty; unresolved UUID/provider/range gaps; no scientific approval implied |
| update_trigger | formulation, supplied form, chemistry, production/dispatch gate, energy, packaging, stock practice or evidence changes |



## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sakura-aqueous-writing-ink-1981 | literature | Sakura Color Products Corporation. Aqueous ink composition. EP0030389A1, 1981-06-17. https://data.epo.org/publication-server/rest/v1.2/patents/EP0030389NWA1/document.pdf ; retrieved 2026-10-16; PDF p.1, p.9 (printed p.8), p.12-13 (printed p.11-12), Examples 1-2 | Primary historical patent case: aqueous writing-ink mixing route and separate named commercial ingredients; Example 2 blue representative. Scourol #400 is the Example 1 commercial alkyl-ether preparation, not a specified pure lauryl ether. One source only; no empirical plant ranges, generic recipe, yield, density, energy, emissions, hazard, service life, dose or present supplier approval. Actual plant and supplier evidence remain necessary. |
