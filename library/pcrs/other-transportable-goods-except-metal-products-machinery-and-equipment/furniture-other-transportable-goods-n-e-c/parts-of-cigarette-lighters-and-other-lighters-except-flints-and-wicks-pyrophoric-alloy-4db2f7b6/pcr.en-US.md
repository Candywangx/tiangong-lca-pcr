---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-of-cigarette-lighters-and-other-lighters-except-flints-and-wicks-pyrophoric-alloy-4db2f7b6
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Passive plastic replacement end cap: outsourced manufacture to first standalone release

## 1. Scope and Applicability

This PCR covers one model-specific passive plastic replacement end cap supplied alone for a utility lighter, using externally commissioned manufacture as an opaque upstream system, followed by non-operational inspection, packing and the actual first standalone release. No resin identity, moulding technology, formulation, mass, lifetime or measured production result is inferred. The concrete anchor is the separate replacement cap in CBP N334329, not the complete empty utility lighter discussed in the same ruling. A documented part drawing, supplier lot, material declaration and first-release record are required to apply this method. `cbp-n334329`

The frozen June 2025 CPC 3.0 coordinate is 38995 (PDF p.198). The October 2026 explanatory table CPC3!A1853:D1853 associates it with HS 2022 3606.90 and 9613.90; this PCR uses only the passive-parts branch of 9613.90. Adjacent 38994 covers complete lighters, including relevant empty complete articles; 38998 is matches. Exclude flints, wicks, pyrophoric alloys, combustible articles, ignition mechanisms, reservoirs and all operational work. Decorative sleeves for complete lighters (CBP M82869) and packing boxes (CBP I88260) are different articles, even when empty. Exclude hinged metal casings and multipurpose accessories from this single plastic-cap scope. `unsd-cpc3-2025` `unsd-cpc3-2026` `cbp-m82869` `cbp-i88260`

All conditional cards require occurrence evidence. Carton and LDPE bag cards apply only when those exact packaging materials occur; their presence, composition and reuse are not inferred from the cap ruling. Add each actual missing packaging component, utility, service, waste and elementary species as its own atomic card before dataset completion. Missing quantities and provider links are unresolved, not zero. Core module references provide structure only; their retained stubs do not prove method review. The candidate PEF module informs declared-unit, boundary, completeness and allocation reasoning; this bounded cradle-to-first-release inventory does not establish full PEF conformity or an avoided-impact claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-of-cigarette-lighters-and-other-lighters-except-flints-and-wicks-pyrophoric-alloy-4db2f7b6 |
| classification_refs | CPC 3.0 38995, accepted narrower relation for the separately released passive plastic end cap under docs/adr/2026-11-22-accept-cpc-38995-standalone-passive-plastic-replacement-end-cap.md |
| covered_products | Passive plastic replacement end cap for a utility lighter |
| excluded_products | Complete lighters even if empty; metal hinged cases; decorative sleeves; packing boxes as reference products; multipurpose covers; ignition-related articles and processes. |
| representative_product | One separately supplied passive plastic replacement end cap matching the part identity documented in N334329; actual model/material/lot must be declared. |
| production_route | Commissioned external fabrication (black box) → physical receipt → non-operational dimensional/visual inspection → packing → first standalone release. No claim of injection moulding or a particular polymer. |
| market_state | New, loose, passive replacement part at the actual responsible producer first-release gate; no complete appliance or retail bundle. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a model-specific passive plastic replacement end cap as a separately released component; declared unit for an intermediate part. |
| How much | 1 kg newly first-released net bare caps of one configuration. |
| How well | Traceable drawing revision, material declaration, dimensions, integrity and non-operational acceptance criteria; no inferred safety certification or operating performance. |
| How long or cycle | One production cohort through first release; no quantified service life or use-cycle claim. |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Passive plastic replacement end cap for a utility lighter |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Dedicated replacement part and actual drawing/model; polymer/material declaration without invented composition; manufacturing provider and opaque-inventory coverage; supplier and responsible producer physical gates; standalone first-release event and lot genealogy; calibrated net mass Q; packaging excluded from Q; pre/post-release stocks and original returns; actual inspection criteria; observation period/site; each packaging material and acquisition/return channel; supplier coverage of inherited burdens; transport and utility native-unit bindings; allocation and unresolved data. |

Declare every required qualifier in consumer-visible metadata, reference-flow comment or equivalent process documentation. Mass is not a substitute for equal function across unlike cap configurations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of calibrated net bare cap masses newly first released in this cohort under cp_release. Exclude packaging, opening released stock, returns and repeat dispatch. All applicable cards use the same per 1 kg reference flow basis. |
| mass_conversion | mass inventory rows | Mass | kg | Use actual batch weighing and tare removal. Convert g to kg by 0.001. Counts support traceability only; count-based quantities need actual configuration-specific measured bare mass and reconciliation to the batch total, not a generic cap weight. |
| customs_count | reference product | Mass | kg | USITC 2023 HTS Revision 10 lists No. (count), not kg, for 9613.90.80.00; the line is not exclusively this cap. Customs quantities are neither net cap kg nor manufacturer first release. Match contemporaneous documents to the same accepted cap lot; where direct total weighing is unavailable, use stratified configuration/material/lot count and representative calibrated bare-mass sampling, documented sample selection, uncertainty and batch reconciliation. N334329 describes proposed imports, not an observed shipment or plant measurement. `usitc-hts-2023-rev10` `cbp-n334329` |
| meter_energy | release_electricity; post_electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | Metered electrical energy is measured Energy, not a declaration of a supplier flow native property. Verified Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` has MJ reference and kWh factor 3.6: convert only if the actual provider requires MJ. Verify its native flow/property separately; shared units do not imply Net calorific value. |
| transport_units | road_freight | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | Verified Units of mass*length `838aaa21-0117-11db-92e3-0800200c9a66` uses reference t*km with kg*km factor 0.001. This supports amount conversion only; the actual carrier, lorry, service-flow identity, loading and included empty-return convention remain independently required. |
| zero_output | all inventory rows | raw extensive quantity | original unit | If Q=0, retain failures, idle use, stock and rework with cohort burdens in original units. Produce no normalized dataset and do not erase them or divide by dispatch mass. |
| service_denominator | post_gate; packaging | Mass | kg | A later interval can have current new-release Q=0 and still incur real services. Retain those extensive quantities in their original units. A separate later-service intensity is permitted only with a traceable positive original release mass Q_original for that original cohort. Do not substitute Q_original into the current-period physical books, assign old goods to a new production cohort or create another manufacturing reference. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A specified commissioned passive plastic cap received before its first standalone release; actual upstream fabrication and delivery are linked black boxes. |
| starting_condition_role | Foreground collection boundary, not a burden-free life-cycle start. |
| product_classification_scope | Only the dedicated passive replacement-cap subset of CPC 3.0 38995 / HS 9613.90. |
| recursive_input_rule | An already released cap is merchandise/return with original burdens, not new production. Retain original identity; do not recursively claim another first release. Unreleased supplier caps need one bounded upstream inventory. |
| upstream_dataset_requirement | One compatible inventory per actual supplier lot, including cap fabrication burdens, scrap treatment and declared upstream materials/energy. Require coverage of supplier packaging and transport or add uncovered activities once. No recipe or operational disassembly is required. |
| disclosure | Declare supplier, physical gate, first release, inherited stock burdens, excluded downstream function and each unresolved coverage field. Show manufacturing and post-release services separately. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_first_release | first_release | Verify original producer and actual standalone first release using commissioned-production/acceptance records. If the supplier already released the cap as a saleable standalone part, use that original gate and dataset; a later receipt, relabelling, inspection, transfer or resale does not create Q. Do not omit real intervening activities: disclose a separate service layer. | `cbp-n334329` |
| boundary_upstream | unreleased_cap | Keep manufacture opaque but burdened: supplier inventory must identify the same cap/material/lot and actual included gate. Do not infer resin processing, numerical yields or internal emissions from the classification source. Missing upstream activity stays unresolved; it is not an empty zero inventory. | `eu-pef-2021` |
| boundary_perimeter | all processes | Use one explicit physical site perimeter for stocks. Goods outside it are outbound and cannot simultaneously remain inside closing stock merely because the producer retains ownership. Keep off-site ownership as a separate memorandum and include actual transport/services once. Internal movements cancel on consolidation. |  |
| boundary_completeness | all processes | Include actual inspection, handling, packing, losses and waste treatment to first release, together with upstream provider inventories. Survey for additional utilities and direct emissions; add each actual species and compartment separately. Operational testing, ignition work and downstream appliance/use/end-of-life are outside this component dataset. Do not imply full-life-cycle PEF or component performance equivalence. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| first_release | Receipt, inspection and first standalone release | required | Actual new production cohort, not resale | foreground | reference_product |
| packaging | Separate packaging physical and burden ledger | conditional | Each actual material; production share to first release and later service share separated | foreground | Same cohort Q; not packaging output as reference |
| post_gate | Released-stock reconciliation and separate services | conditional | Actual released storage, return or subsequent dispatch; no assumed flows | foreground | Original cohort Q as reporting basis only; no new release |

First-release product output and released_stock are the same internal handover represented in adjacent physical books. They cancel in the combined physical balance. The manufacturing reference remains the declared first-release event; a post_gate service report is non-additive to its already embodied production burden. Packaging transfers carry the physical material and its remaining burden, never a second reference function.

### Process: Receipt and first release(`first_release`)

#### Inputs

##### Product flows

###### Unreleased passive plastic replacement end cap for a utility lighter (`unreleased_cap`)

One specified cap supplied by the commissioned manufacturer before its first standalone release. Supplier manufacture is an opaque upstream inventory, not a recipe. Verify that this is not previously released merchandise or a complete lighter.

- Selected flow: Unreleased passive plastic replacement end cap for a utility lighter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_supplier.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supplier`
- Sources: `cbp-n334329`; `eu-pef-2021`

###### Alternating-current electricity (`release_electricity`)

Only actual electricity for pre-release inspection, packing and associated handling; identify site, meter, supply and voltage. Do not duplicate the upstream manufacturer electricity.

- Selected flow: Alternating-current electricity
- Flow property / unit: Metered Energy / kWh; native supplier property unresolved
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-pef-2021`

###### Road freight transport by lorry (`road_freight`)

Conditional on an actual road leg to the first-release gate not already included in the supplier inventory. Record loaded mass, distance, load factor and empty returns. Other actual modes need separate cards.

- Selected flow: Road freight transport by lorry
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_transport.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `eu-pef-2021`

##### Waste flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

##### Elementary flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

#### Outputs

##### Product flows

###### Unreleased passive plastic replacement end cap for a utility lighter (`unreleased_cap_transfer`)

Conditional actual supplier return or other external transfer before release, Tu in the physical book. Distinguish it from waste and internal rework; preserve the receiving party, original lot and exclusive residual-burden transfer.

- Selected flow: Unreleased passive plastic replacement end cap for a utility lighter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_supplier.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supplier`

###### Passive plastic replacement end cap for a utility lighter (`reference_product`)

The unique reference output is bare net cap mass first released as a standalone replacement part after actual non-operational inspection and required packing. Packaging mass is excluded.

- Selected flow: Passive plastic replacement end cap for a utility lighter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `cbp-n334329`; `eu-pef-2021`

##### Waste flows

###### Rejected passive plastic replacement end cap (`cap_reject`)

Only a cap actually consigned to waste before first release, with separate destination and treatment. Hold stock, supplier returns and recoverable rework are not waste by default.

- Selected flow: Rejected passive plastic replacement end cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_supplier.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supplier`
- Sources: `eu-pef-2021`

##### Elementary flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

### Process: Packaging ledger(`packaging`)

#### Inputs

##### Product flows

###### Corrugated shipping carton (`carton_purchase`)

Only actual purchases entering the declared site perimeter. Record the physical item even if its production burden is already covered by a supplier dataset.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Corrugated shipping carton (`carton_first_external`)

First non-purchase external receipt, including packaging accompanying incoming caps, loans and free transfers, whether or not supplier inventory covers it. It is not a return without same-item prior-outbound proof.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Corrugated shipping carton (`carton_true_return`)

Only the same physical item demonstrably returning from its own prior outbound movement at this site. Carry remaining embodied burdens; no new acquisition or second manufacturing burden.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Low-density polyethylene packing bag (`bag_purchase`)

Only actual purchases entering the declared site perimeter. Record the physical item even if its production burden is already covered by a supplier dataset.

- Selected flow: Low-density polyethylene packing bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Low-density polyethylene packing bag (`bag_first_external`)

First non-purchase external receipt, including packaging accompanying incoming caps, loans and free transfers, whether or not supplier inventory covers it. It is not a return without same-item prior-outbound proof.

- Selected flow: Low-density polyethylene packing bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Low-density polyethylene packing bag (`bag_true_return`)

Only the same physical item demonstrably returning from its own prior outbound movement at this site. Carry remaining embodied burdens; no new acquisition or second manufacturing burden.

- Selected flow: Low-density polyethylene packing bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

##### Waste flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

##### Elementary flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

#### Outputs

##### Product flows

###### Corrugated shipping carton (`carton_out`)

Actual outbound packaging, separately tagged as accompanying goods, return to owner, or other transfer. Keep mutually exclusive quantities and remaining-burden destinations.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Low-density polyethylene packing bag (`bag_out`)

Actual outbound packaging, separately tagged as accompanying goods, return to owner, or other transfer. Keep mutually exclusive quantities and remaining-burden destinations.

- Selected flow: Low-density polyethylene packing bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

##### Waste flows

###### Discarded corrugated shipping carton (`carton_waste`)

Only actual discarded material with measured net mass and treatment destination. Do not credit avoided virgin production merely because a recycler receives it.

- Selected flow: Discarded corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Discarded low-density polyethylene packing bag (`bag_waste`)

Only actual discarded material with measured net mass and treatment destination. Do not credit avoided virgin production merely because a recycler receives it.

- Selected flow: Discarded low-density polyethylene packing bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

##### Elementary flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

### Process: Released-stock book(`post_gate`)

#### Inputs

##### Product flows

###### Passive plastic replacement end cap for a utility lighter (`released_stock`)

Internal transfer of this cohort Q from the pre-release book to the released-stock book. Cancel against reference_product when consolidating physical books. It has no second upstream acquisition.

- Selected flow: Passive plastic replacement end cap for a utility lighter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_stock`
- Sources: `eu-pef-2021`

###### Passive plastic replacement end cap for a utility lighter (`old_cap_return`)

Conditional actual return of an already released cap, matched to its original release cohort and previous dispatch. Inspection or repacking never creates new Q.

- Selected flow: Passive plastic replacement end cap for a utility lighter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`

###### Passive plastic replacement end cap for a utility lighter (`external_released_cap`)

Conditional first external receipt of an already released cap, If, including acquired merchandise or a free/loaned transfer with no proof of a prior outbound of the same item from this site. It is neither new Q nor Rold; retain its original cohort and embodied-history/remaining-burden records separately.

- Selected flow: Passive plastic replacement end cap for a utility lighter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`

###### Alternating-current electricity (`post_electricity`)

Conditional actual electricity for storage, return inspection or repacking after first release. Report as a separate service layer; it cannot be silently merged into the manufacturing-only reference.

- Selected flow: Alternating-current electricity
- Flow property / unit: Metered Energy / kWh; native supplier property unresolved
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `eu-pef-2021`

##### Waste flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

##### Elementary flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

#### Outputs

##### Product flows

###### Passive plastic replacement end cap for a utility lighter (`gross_dispatch`)

Actual gross physical outbound of released caps, Dgross, partitioned into mutually exclusive sale/shipment, repeat dispatch and other transfers including return to external owner. All released-product outward transfers are included here; there is no additional Tf. Assign original embodied burdens once through the cohort ledger, not once per invoice.

- Selected flow: Passive plastic replacement end cap for a utility lighter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`

##### Waste flows

###### Discarded previously released passive plastic replacement end cap (`post_cap_waste`)

Only actual post-release discard. Preserve its original cohort and distinguish remaining embodied burden from new waste-treatment burden.

- Selected flow: Discarded previously released passive plastic replacement end cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated a_i result; collect raw amounts with cp_stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`

##### Elementary flows

No default exchange asserted; survey actual occurrence and add individually identified flows before data completion.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | Subdivide by actual lot and activity before allocation. Do not invent co-products or avoided manufacture of a complete lighter. For shared burdens test subdivision/system expansion first; where infeasible use a justified underlying physical relationship, and only then another justified relationship. Document causal basis, all recipients, factors summing to one and sensitivity. Metered runtime/activity can support inspection electricity; cap mass alone does not prove causality. | `eu-pef-2021` |
| allocation_inherited | all processes | For each physical original, cohort and exchange i, preserve B_open,i + B_external,i + B_new,i = B_current,i + B_close,i + B_transfer,i + B_other,i. B_external is only the remaining previously incurred share entering from outside, not a second original production. Closing, transfer and other destinations are mutually exclusive; each share is retired once. Maintain production and later-service layers separately and carry zero-output burdens forward with evidence. |  |
| allocation_release_bridge | first_release; post_gate; packaging | Apply the burden identity separately to unassigned pre-release burden and later released-item custody/service books. The production result is the burden assigned to the whole first-release cohort divided by Q, including its justified share of rejects and handling; closing newly released goods are already inside that Q. The same assigned vector is carried as an internal handover into released-item history, not charged a second time. Physical closing stock can contain already assigned embodied burdens: retain them as non-additive history, distinct from the still-unassigned B_close share. In the later book, dispatch transfers embodied history to its original cohort recipient, never to new Q. For packaging the same principle prevents charging full manufacture on first use and again as closing stock/return. Do not remove reject burdens merely because the physical waste leaves; attribute actual losses and treatment to their production cohort or retain an evidenced pending share when Q=0. |  |
| allocation_packaging | packaging | Physical receipt never proves a new environmental burden. For each carton/bag, including free or loaned receipts, document whether supplier coverage already includes production, delivery or service. Add each actually borne uncovered burden once; unknown supplier coverage is pending, not free. True returns keep their remaining original share, with only new transport/service added. No assumed reuse cycles, depreciation fractions or recycling credits; use actual service/cohort records and justify the allocation. | `eu-pef-2021` |
| allocation_returns | post_gate | Original embodied production of opening released goods, returned goods and repeat dispatch belongs to original cohorts. Do not add it to current Q or re-charge it for each shipment. Any actual new storage/inspection/repacking and waste treatment is a separately measured service burden assigned to the appropriate cohort/recipient; it must not disappear or be charged twice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | first_release | release mass | site and supplier primary records | lot; drawing revision; material declaration; first-release flag/time/site; net cap mass; tare; count; rejection; calibration | Weigh accepted bare caps with calibrated scale and reconcile unique release IDs to the original producer records. No ignition or operational test is needed. Sum unique newly released bare mass Q; derive all applicable quantities per 1 kg reference flow. | kg | each release | declared complete observation period plus inherited history | actual manufacturer and declared physical perimeter | per 1 kg reference flow | original records; calibration; coverage reconciliation; residual explanation |
| cp_supplier | first_release | cap receipt/reject and upstream coverage | site and supplier primary records | supplier lot; commissioned order; prior-release status; actual material declaration; incoming bare kg; rejects; returns to supplier; WIP; provider gate/coverage; inherited burden vector | Reconcile receiving and acceptance documents with the actual manufacturer. Obtain an opaque supplier inventory matching the lot; no internal composition or recipe is inferred. Retain all losses and destinations. Assign actual upstream and reject quantities to the released cohort per 1 kg reference flow using calc_reference after stock/burden closure. | kg; native exchange units | each receipt/disposition | declared complete observation period plus inherited history | actual manufacturer and declared physical perimeter | per 1 kg reference flow | original records; calibration; coverage reconciliation; residual explanation |
| cp_energy | first_release; post_gate | electricity | site and supplier primary records | meter start/end; multiplier; dates; idle use; actual task runtime; allocation recipients; supply identity; voltage; native property and unit; provider coverage | Read a traceable meter and reconcile invoices and task/site scope. Separate pre-release and later services; verify any supplier flow full native property/unit record before binding. Attribute actual metered energy to its cohort and service layer, then per 1 kg reference flow; never divide by output count or observation time. | kWh | each observation interval and task | declared complete observation period plus inherited history | actual manufacturer and declared physical perimeter | per 1 kg reference flow | original records; calibration; coverage reconciliation; residual explanation |
| cp_transport | first_release | actual road freight | site and supplier primary records | leg; from/to physical gate; loaded mass; distance; actual lorry/load; empty return; payer; upstream inclusion | Use consignment records and route evidence for uncovered real road legs. Identify all additional actual modes individually. Compute loaded tonne-km with compatible provider load/return convention, attribute once, then per 1 kg reference flow. | t; km; tkm | each actual leg | declared complete observation period plus inherited history | actual manufacturer and declared physical perimeter | per 1 kg reference flow | original records; calibration; coverage reconciliation; residual explanation |
| cp_packaging | packaging | one material at a time | site and supplier primary records | material/grade; item ID or homogeneous lot; count and measured tare mass; purchase; first non-purchase external receipt; same-item true return; opening/closing stock; outbound categories; waste; supplier burden coverage; remaining burden vector | Weigh and count each actual material separately. Match receipts, loan/free-transfer papers and prior outbound/return IDs, even for incoming supplier packaging. Inspect physical perimeter and disposition; audit coverage independently of payment. Close each material physical and burden ledger, distinguish manufacturing versus later services and other cohorts, then attribute per 1 kg reference flow. | kg and item count separately | each event plus stock counts at interval boundaries | declared complete observation period plus inherited history | actual manufacturer and declared physical perimeter | per 1 kg reference flow | original records; calibration; coverage reconciliation; residual explanation |
| cp_stock | post_gate | adjacent physical books | site and supplier primary records | cohort; original release ID; opening/closing unreleased kg; received unreleased kg; Q; unreleased waste/transfer; opening/closing released kg; original return kg; external released receipt kg; gross dispatch kg; released waste/transfer; inherited and new burden vectors | Use calibrated bare-mass records, cohort release history and physical stock counts. Link each old return to original dispatch; identify all mutually exclusive movements, including off-site goods. Close both books with the same Q; summarize attributable quantities per 1 kg reference flow only for their own cohort and service layer. | kg; original exchange units | each movement and period boundary | declared complete observation period plus inherited history | actual manufacturer and declared physical perimeter | per 1 kg reference flow | original records; calibration; coverage reconciliation; residual explanation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | all inventory rows | For Q>0, a_i = A_i / Q; A_i is the extensive exchange quantity attributable to this cohort after physical-stock and burden reconciliation. Keep all quantities in the card unit, keep production/service layers separate, and divide once. The unique reference output is 1 kg. Internal transfers cancel; do not add procurement, receipt, consumption and dispatch as if all were independent new burdens. | A_i; Q; cp_release; applicable collection protocol | a_i | eu-pef-2021 |
| calc_later_service | post_gate; packaging | For actual later services, s_i = S_i / Q_original only when Q_original>0 is independently documented for the same original cohort; otherwise keep S_i unnormalized and pending. This is an explicit service-only reporting branch, not a second application of calc_reference to current-period Q or a new production result. Link manufacturing embodied history without adding it again. Current-period physical Q remains the actually newly released mass, including zero. | S_i; Q_original; cp_stock; cp_packaging; cp_energy | s_i |  |
| calc_cap_books | first_release; post_gate | Before release: U0 + Iu = Q + U1 + Wu + Tu. After release: F0 + Q + Rold + If = Dgross + F1 + Wf. All symbols are bare kg for the same period/perimeter and mutually exclusive categories: U unreleased stock, Iu incoming unreleased caps, W waste, T other outbound transfer; F released stock, Rold real old returns, If other external already released receipts, Dgross all gross released-product outbound, including mutually exclusive other-transfer subcategories; no separate Tf. Internal rework stays inside U and is not a second receipt. In the sum, Q cancels. Q is measured first release, not net shipment; opening released goods and old returns never enlarge it. | cp_release; cp_supplier; cp_stock | two residuals and unique Q |  |
| calc_packaging_books | packaging | For each actual material j independently: S0,j + Pj + Ej + Rj = S1,j + Oj + Wj + Tj. P is purchased physical receipt; E is first non-purchase external receipt, including incoming packaging, loans and free transfers; R is the same item returning after a documented earlier site outbound. O is packaging accompanying goods, W actual waste, T other outbound including return to owner. Record counts and measured kg separately; no return is counted again as P or E. Internal packing/unpacking changes custody/status, not external stock. Reconcile supplier-covered burdens separately under allocation_packaging. | cp_packaging | material-specific physical closure |  |
| calc_burden_books | all processes | Apply allocation_inherited exchange by exchange, with original IDs and opening, external remaining, new, current, closing, exclusive transfer and other shares. When a same-item return follows a transfer recorded earlier in the same period, keep the gross physical events but reverse the earlier remaining-burden transfer on the same ID before reassignment; do not introduce it again as new B_external. An opening out-of-site item returning brings its remaining burden once. Prove supplier packaging, delivery and electricity coverage without duplicating a bundled inventory. | cp_supplier; cp_packaging; cp_stock; cp_energy | exchange burden residual and attribution |  |
| calc_energy | release_electricity; post_electricity | Recorded kWh = (meter_end - meter_start) × actual multiplier. Attribute to actual task/cohort using allocation_direct. If compatible provider amount is MJ, MJ = 3.6 × kWh; never apply both units as separate electricity inputs. Conversion does not verify the native supplier property. | cp_energy | attributed electrical energy |  |
| calc_transport | road_freight | Loaded tonne-km = measured payload kg / 1000 × actual km for that road leg. Match the provider load/empty-return convention and count an actual leg once; cost is not distance or transported mass. | cp_transport | t*km | eu-pef-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | reference_product | Confirm dedicated loose passive cap and actual supplier/model/material/lot. The historical ruling proves its described product, not the current plant route, polymer, mass or certification. | cp_release; cp_supplier; cbp-n334329 |
| quality_customs | reference_product | Retain contemporaneous same-lot accepted counts and calibrated net mass or a justified stratified sampling plan with uncertainty. HTS No. counts may include other parts; do not infer kg, actual import occurrence or first release from the ruling or tariff row. | cp_release; usitc-hts-2023-rev10; cbp-n334329 |
| quality_closure | all processes | Explain every stock and burden residual using calibrated measurement uncertainty and traceable corrections. No universal tolerance or unexplained balance plug. Record actual service and burden recipients, including zero-output periods. | cp_stock; cp_packaging; cp_release |
| quality_provider | all inventory rows | Resolve selected UUID, native property/group/unit, flow type, state, medium and provider compatibility before completed dataset use. Mass/kg support alone is not cap or waste identity. Search candidates do not prove material suitability or upstream coverage. | cp_supplier; cp_energy; cp_transport |
| quality_representativeness | all processes | Report observation period, geographic/technological scope, sample selection, measurement uncertainty, excluded or unmeasured activities and source limitations. No numerical ranges, yields or impacts are supplied without actual evidence. | cp_release; eu-pef-2021 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_scope | reference_product | Reject complete empty lighters, sleeves, multipurpose cases, packing boxes and metal casings as this reference product. Verify the loose dedicated plastic cap and actual first-release evidence; a customs code or supplier listing alone does not establish dataset applicability. | `cbp-n334329`; `cbp-m82869`; `cbp-i88260` |
| validation_reference | all inventory rows | Require unique reference_product output, Q>0, bare mass excluding packaging and a single per 1 kg reference flow denominator. Explain before/after stock residuals; Q cancels between adjacent books. Old returns, released opening stock and dispatch do not create Q. |  |
| validation_packaging | packaging | For each actual packaging material verify purchases, first non-purchase external receipts and same-item true returns independently, regardless of supplier inventory coverage. Close all physical destinations and stock. A missing supplier burden declaration is a data gap; actual borne transport, purchase and service burdens are counted once. |  |
| validation_burdens | all processes | Verify exchange-wise inherited/new burden closure and mutually exclusive recipients, reverse same-period return transfers once and preserve original cohorts. Do not combine manufacturing and subsequent service layers without explicit boundaries and removal of duplicate embodied production. |  |
| validation_identity | all inventory rows | A named unresolved candidate is not a verified provider. Keep unresolved UUIDs and support fields explicit, preserve bilingual atomic names and verify supplier native electricity property separately from metering Energy. Incomplete actual inventories cannot be represented as complete or approved. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A documented component input to a downstream assembly model; separate service layers only with explicit original-cohort bindings. |
| allowed_use | The verified model/material/lot route and gate, with compatible upstream inventory and resolved flow identities; compare mass inventories only with function/quality limitations stated. |
| excluded_use | Whole CPC leaf coverage, complete lighter LCA, operating/ignition guidance, assumed service life, PEF qualification, avoided complete-product production or unverified polymer substitutions. |
| required_metadata | All reference qualifiers; supplier and original gate; Q and its unique cohort; observation period; native flow/provider bindings; separate manufacturing/service layers; packaging/physical/burden ledgers. |
| required_quality_disclosure | Measured versus unresolved exchanges; opaque upstream coverage; representativeness; uncertainty; allocation basis; actual missing flows; stock/burden residuals and supplier-coverage gaps. |
| update_trigger | Change of cap design/material/supplier, actual route or first-release gate, packaging, electricity provider/property, inventory coverage, observation period or applicable classification explanation. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC 3.0 explanatory notes, 30 June 2025, pp.197–198. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Frozen classification coordinate and adjacent mixed leaf titles only; no cap production data. |
| unsd-cpc3-2026 | official_guidance | UNSD, CPC 3.0 explanatory table, 23 October 2026, CPC3!A1852:D1856, especially row 1853. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | Current classification supplement: 38995 includes HS 3606.90 and 9613.90; only the latter passive-parts branch is used. Does not replace the frozen denominator. |
| cbp-n334329 | official_guidance | CBP NY N334329, 9 August 2023, separate plastic end-cap product paragraph and classification at 9613.90.8000. https://rulings.cbp.gov/api/ruling/N334329 | Primary documentary identification of a loose passive replacement plastic cap; distinguishes a complete empty lighter in the same decision. Not evidence of polymer grade, process, mass or current factory. |
| cbp-m82869 | official_guidance | CBP NY M82869, 24 April 2006, decorative lighter cases at 7907.00.6000. https://rulings.cbp.gov/api/ruling/M82869 | Counterexample: empty decorative cases do not establish lighter-part identity; no reported composition or mass is transferred here. |
| cbp-i88260 | official_guidance | CBP NY I88260, 14 November 2002, plastic lighter gift boxes at 3923.10.0000. https://rulings.cbp.gov/api/ruling/I88260 | Counterexample separating packaging from the reference component. No cap packaging material or route inferred. |
| usitc-hts-2023-rev10 | official_guidance | USITC, 2023 Harmonized Tariff Schedule Revision 10 CSV, HTS Number 9613.90.80.00, Unit of Quantity field. https://www.usitc.gov/sites/default/files/tata/hts/hts_2023_revision_10_csv.csv | Contemporaneous statistical unit is No. (count), not kg; requires same-cap-lot count-to-measured-net-mass reconciliation. No tariff rate or actual shipment inference. |
| eu-pef-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, corrected consolidated Annex I, §§3.2.1–3.2.2,4,4.2,4.4.2–4.4.3,4.5,4.6.1. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | General declared-unit, life-cycle completeness, primary-data, electricity/transport and allocation reasoning only. The explicit stock/cohort equations are this PCR collection protocol, not quoted Commission formulas or full-PEF certification. |
