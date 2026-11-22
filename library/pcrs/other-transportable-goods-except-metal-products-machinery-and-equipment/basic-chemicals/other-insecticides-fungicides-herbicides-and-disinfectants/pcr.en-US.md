---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-insecticides-fungicides-herbicides-and-disinfectants
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Packaged liquid ungulate browsing repellent: original first-release environmental accounting

## 1. Scope and Applicability

This method is limited to whole registered liquid non-lethal ungulate browsing-repellent products, with non-operational environmental accounting at the actual producer’s final commercial packaging/labeling and original first-release gate; outer packing and contractor handoffs follow their actual timing and location. TRICO (EPA 71637-2, including the applicable TRICO PRO brand) exemplifies public finished-product identity, not an acquired factory inventory. Admit this collection route only when actual records establish one release perimeter including outsourced handoffs and no earlier first release. Supplier manufacture and primary packing remain a complete, explicitly covered black box; undisclosed composition is not reconstructed into inventory.

Excluded are formulation, internal manufacturing instructions, application, efficacy, field emissions, toxicological assessment, transfer/resale of already released goods, lethal products and neighboring classification products. The net-mass declared unit supports this production gate only; it is not an efficacy functional unit by protected area or duration. The frozen 2025 classification and 2026 official supplement jointly inform neighboring boundaries; the historical CBP ruling for a different product supports the repellent-function boundary only, not a TRICO classification ruling.

For the US representative product, identify the event using 40 CFR §152.3 applicable at the actual date: completion of packaging/labeling in the commercial form, or placement in the usual finished-goods shipment area, can trigger release; actual shipment or external receipt is not required. Unreleased goods in that area require physical separation and marking. Later relabeling/repackaging can constitute another regulatory production event. This method counts the same net contents in Q0 only once, retains all regulatory events separately, and continues actual new packaging, freight, repair, waste and other environmental burdens against the original cohort. Do not postpone an event already triggered at the producer to owner receipt or outer packing. Other countries require their actual applicable gate and records rather than automatic adoption of the US definition.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-insecticides-fungicides-herbicides-and-disinfectants |
| classification_refs | CPC 3.0 34669, accepted narrower relation for the packaged ungulate repellent under docs/adr/2026-11-22-accept-cpc-34669-packaged-nonlethal-ungulate-browsing-repellent.md |
| covered_products | Whole liquid ungulate browsing-repellent product with actual country registration and lot identity |
| excluded_products | Insecticides, fungicides, herbicides/growth regulators, disinfectants, specifically grouped hazardous pesticides; formulation ingredients; use services; resale of released goods |
| representative_product | TRICO / TRICO PRO finished product under its actual applicable label; no automatic equivalence between editions |
| production_route | Evidenced supplier finished-product manufacture and final commercial pack/label → earliest original release event; contractor handoffs and outer packing follow actual timing without postponing a gate already triggered |
| market_state | Sealed ready-to-sell whole liquid product, with separate package accounting; no default net contents, density or packaging material |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of the specified whole ungulate repellent; production-gate declared unit |
| How much | 1 kg net whole contents at original first release |
| How well | Actual applicable label, lot, sealed state, net weight and signed release identity; no assumed efficacy or default composition |
| How long or cycle | One original first-release cohort; no field-performance duration |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished liquid ungulate browsing repellent |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Country and registration; actual brand and label edition; non-lethal ungulate-repellent purpose; exclusion evidence for the specific 34666 grouping; actual producer, contractors and handoffs; signed original first-release gate, lots and Q0; net tare and package BOM; upstream black-box coverage and inherited burdens; sites and period; article-specific P/F/R and prior-dispatch links; native flows and properties/units; residual receivers, allocation and coverage gaps |

Every required qualifier must be declared in dataset metadata, process notes or reference-flow comments. Missing qualifiers leave the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_contents | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q0 is the sum of whole-product net mass first signed released in the same cohort; use calibrated gross weighing less measured component tare, excluding unreleased, duplicate returned and resale quantities. Neither package nor active-content mass replaces this denominator. |
| same_basis | all inventory rows | Mass / Energy / transport service | kg; kWh; t·km | Preserve each numerator unit, per 1 kg reference flow; divide actual cohort-attributable quantities by Q0. Counts require measured tare of the same article specification; volume requires measured density for the same lot. Do not infer density from label volume or composition statements. |
| meter_energy | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | Technical Energy references Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66; kWh has factor 3.6 to MJ. This is meter conversion, not a native-property claim for an unselected provider flow; provider net calorific value or another property needs independent verification. |

## 5. System Boundary

The data package must first name one explicit physical perimeter (producer/contractor sites and areas) and use it consistently for contents, each article pool and handoffs. Off-site locations enter S0/S1 only when explicitly inside that perimeter; owned articles already outside it remain in a separate ownership memorandum, not simultaneously in S1. D/U are dispatches across this perimeter; R is same-article re-entry linked to a prior dispatch across that same perimeter. Internal moves generate no D/U/R. Release can occur inside the perimeter, so record its status transition separately from physical boundary crossing.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-completed whole product and actual packaging, not yet first-released, handed over within an evidenced producer/contractor release perimeter |
| starting_condition_role | Foreground collection interface, not a burden-free origin; actual manufacture and primary-packing upstream aggregate remains included |
| product_classification_scope | Scoped non-lethal ungulate repellent within CPC 3.0 34669; proposed narrower relation |
| recursive_input_rule | Bind same-category upstream finished contents by identity, gate, time and burden coverage; cancel internal transfers without endless recursion or duplicate production |
| upstream_dataset_requirement | Compatible complete aggregate for actual supplier manufacture, primary packing, utilities, losses and treatment; supplement only uncovered actual outer-packing and logistics services |
| disclosure | Each producer site, handoff, original gate, period, stocks, physical/burden attribution, uncovered items and quality; unqualified upstream prevents a complete cradle-to-gate claim |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_first_release | whole product | Bind one original first-release gate to the actual producer and all outsourced packers: retain signed lot disposition, label edition, net weight and owner/custodian; retain handoff and receiver only when an actual transfer occurs. A master label, administrative transition or brand does not prove an actual release, common factory or equivalence between editions. Goods already first-released upstream cannot be counted as newly produced here. | `epa-trico-2026`; `epa-trico-2025`; `ecfr-release-152-3` |
| b_supplier | upstream interfaces | Include the actual supplying producer as a qualified aggregate with complete embodied manufacture, primary packing, utilities, losses and waste-treatment coverage per measured kg net contents. Do not reconstruct confidential composition or operations. Verify its gate, article coverage, burden basis and geographic/time scope. Missing supplier inventory is a coverage gap, never zero impact. Consolidate internal handoffs and inherited stocks without recursive duplicate production. | `pef-accounting-2021` |
| b_pack_ledger | each packaging article pool | For each distinct container, closure, label, carton and pallet keep S0 + P + F + R = D + U + W + S1 in consistent kg tare and article counts. S0/S1 include empty, fitted, loaded and held articles physically inside the declared perimeter; outside-owned assets are a separate memorandum. P is purchased receipt; F is first non-purchased external receipt with goods or separately borrowed/free-transferred irrespective of supplier coverage; R requires a trace to the very same article previously dispatched across this same declared perimeter. D is outward with contents, U other outward product articles, W discard. Internal fitting is not external receipt. Unknown provenance cannot be assigned R. Article stocks and every external movement must have a cohort/owner. | `pef-accounting-2021` |
| b_burden_once | packaging and service burdens | Maintain a separate coverage ledger for each actual acquisition, transport, cleaning, repair and treatment burden and its owner/cohort. Physical P/F/R never substitutes for this ledger. Include inherited burdens of opening and first-received non-purchased articles; credit only exact provider-covered components, not an assumed complete BOM. A real return carries its existing history and actual new services; it does not create a new manufacture burden. Unknown coverage remains a hold. Retain subsequent cohort services against its fixed original Q0 without enlarging new-period production. | `pef-accounting-2021` |
| b_complete | foreground completeness | Survey all actual utilities, articles, equipment services, residuals and emissions at each producer interface. The atomic cards are conditional collection slots, not evidence that a plant uses those articles. Add a separate chemically/physically specific card and protocol for each observed omitted exchange before study qualification. Identify emission substance, receiving compartment and treatment coverage independently; an unidentified residual is not a generic elementary flow. Unresolved coverage or balance residual blocks a complete dataset claim. | `pef-accounting-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| first_release | Supplier interface, actual outer packing and original first release | required | Same evidenced cohort not previously first-released; qualified upstream producer aggregate | foreground and upstream interfaces | 1 kg reference_product |

The packaging, utility and freight cards below apply only when actually present; they prescribe no material grade, voltage, transport mode or net contents. Components already entering in the supplier aggregate retain physical cards without added duplicate manufacture demand. Any additional actual BOM component (such as liner, seal insert or wrapping film) needs its own card; existing cards cannot substitute for it. Every waste needs a specific receiver/treatment binding; on-site emissions need distinct substance/compartment cards. Without these data coverage stays incomplete, not zero emission.

### Process: Original first release (`first_release`)

#### Inputs

##### Product flows

###### Unreleased finished liquid ungulate repellent (`unreleased_contents`)

Whole finished contents crossing an evidenced pre-release interface; exclude package tare. The supplying producer aggregate covers the actual undisclosed manufacture and primary packing. It is not an ingredient or a proxy for sheep fat. Internal transfers within a consolidated perimeter cancel. Prior released goods are ineligible for new production output.

- Selected flow: Unreleased finished liquid ungulate repellent
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot`
- Sources: `epa-trico-2026`; `pef-accounting-2021`

###### Repellent primary container (`container_in`)

One actual repellent primary container article, net of contents, only if present. Separately record purchased P, first non-purchased external receipt F (including arrival with goods, loan or free transfer regardless of supplier coverage), and genuine same-article return R. Preserve material, grade, tare, ownership, prior dispatch and supplier-burden coverage. Primary articles can arrive fitted to unreleased contents: that is physical receipt, not a second purchase.

- Selected flow: Repellent primary container
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Repellent container closure (`closure_in`)

One actual repellent container closure article, net of contents, only if present. Separately record purchased P, first non-purchased external receipt F (including arrival with goods, loan or free transfer regardless of supplier coverage), and genuine same-article return R. Preserve material, grade, tare, ownership, prior dispatch and supplier-burden coverage. Primary articles can arrive fitted to unreleased contents: that is physical receipt, not a second purchase.

- Selected flow: Repellent container closure
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Printed repellent label (`label_in`)

One actual printed repellent label article, net of contents, only if present. Separately record purchased P, first non-purchased external receipt F (including arrival with goods, loan or free transfer regardless of supplier coverage), and genuine same-article return R. Preserve material, grade, tare, ownership, prior dispatch and supplier-burden coverage. Primary articles can arrive fitted to unreleased contents: that is physical receipt, not a second purchase.

- Selected flow: Printed repellent label
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Repellent transport carton (`carton_in`)

One actual repellent transport carton article, net of contents, only if present. Separately record purchased P, first non-purchased external receipt F (including arrival with goods, loan or free transfer regardless of supplier coverage), and genuine same-article return R. Preserve material, grade, tare, ownership, prior dispatch and supplier-burden coverage. Primary articles can arrive fitted to unreleased contents: that is physical receipt, not a second purchase.

- Selected flow: Repellent transport carton
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Repellent transport pallet (`pallet_in`)

One actual repellent transport pallet article, net of contents, only if present. Separately record purchased P, first non-purchased external receipt F (including arrival with goods, loan or free transfer regardless of supplier coverage), and genuine same-article return R. Preserve material, grade, tare, ownership, prior dispatch and supplier-burden coverage. Primary articles can arrive fitted to unreleased contents: that is physical receipt, not a second purchase.

- Selected flow: Repellent transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Purchased alternating-current electricity (`electricity`)

Record actual attributable electricity at the evidenced release perimeter. Technical Energy and its MJ/kWh chain support metering conversion only; an actual provider flow, voltage, geography, technology and native property must be independently verified. A shared energy unit group never establishes net calorific value.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh (metering basis; supplier native property unresolved)
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `pef-accounting-2021`

###### Supplied cleaning water (`cleaning_water`)

Conditional cleaning input, with actual quality and supplier; exclude water already embedded in the finished product. Preserve volume measurement and measured density if converting to mass. No default density or recipe is supplied.

- Selected flow: Supplied cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `pef-accounting-2021`

###### Road freight transport service (`road_freight`)

Conditional actual road legs before first release and attributable package returns; identify loaded and empty legs and payload basis. Preserve tonnes including transported package mass even though Q0 excludes tare. Use a compatible provider model for empty legs without inventing payload. Other transport modes require distinct atomic cards.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t·km
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `pef-accounting-2021`

###### Returned previously released liquid ungulate repellent (`returned_released_contents`)

Only genuine old-goods return Rg across the declared physical perimeter, linked to prior outward lot and original cohort. Retain its inherited burdens and actual new services in the already-released G ledger, even if subsequently relabeled or repacked. It cannot enter unreleased U or create new Q0.

- Selected flow: Returned previously released liquid ungulate repellent
- Flow property / unit: Mass / kg
- Amount rule: Actual custody-transfer quantity attributable to original cohort / fixed original Q0; no new net production, and no unit result without positive original Q0.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_released_custody`
- Sources: `ecfr-release-152-3`; `pef-accounting-2021`

###### Externally received previously released liquid ungulate repellent (`received_released_contents`)

Only first external receipt Ig of already-first-released goods, with actual original producer, release record and inherited inventory. Imports, owner transfers and warehouse moves do not create new production. If an original cohort cannot be identified, retain an unresolved separate custody account without assigning it to the new-production cohort.

- Selected flow: Externally received previously released liquid ungulate repellent
- Flow property / unit: Mass / kg
- Amount rule: Actual custody-transfer quantity attributable to original cohort / fixed original Q0; no new net production, and no unit result without positive original Q0.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_released_custody`
- Sources: `ecfr-release-152-3`; `pef-accounting-2021`

#### Outputs

##### Product flows

###### Finished liquid ungulate browsing repellent (`reference_product`)

Unique reference output. Deduplicate original released lot mass across producer, contractor and owner. A later sale, transfer, relabel, return or resale cannot create this output again.

- Selected flow: Finished liquid ungulate browsing repellent
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `epa-trico-2026`; `epa-trico-2025`

###### Unreleased finished liquid ungulate repellent (`unreleased_transfer`)

Only an actual outward pre-release transfer outside the selected perimeter. Keep its mass and inherited burdens in the destination or closing work cohort, not Q0. Cancel internal transfers when the actual producer and contractor are consolidated.

- Selected flow: Unreleased finished liquid ungulate repellent
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot`
- Sources: `pef-accounting-2021`

###### Repellent primary container (`container_out`)

Physical outward repellent primary container, tare only: separately tag delivery with released contents, unreleased transfer, unused external return, and other external dispatch, each once. A later genuine return must point to this article's prior outward record. Physical article mass is not an additional reference product or automatic manufacturing demand.

- Selected flow: Repellent primary container
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Repellent container closure (`closure_out`)

Physical outward repellent container closure, tare only: separately tag delivery with released contents, unreleased transfer, unused external return, and other external dispatch, each once. A later genuine return must point to this article's prior outward record. Physical article mass is not an additional reference product or automatic manufacturing demand.

- Selected flow: Repellent container closure
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Printed repellent label (`label_out`)

Physical outward printed repellent label, tare only: separately tag delivery with released contents, unreleased transfer, unused external return, and other external dispatch, each once. A later genuine return must point to this article's prior outward record. Physical article mass is not an additional reference product or automatic manufacturing demand.

- Selected flow: Printed repellent label
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Repellent transport carton (`carton_out`)

Physical outward repellent transport carton, tare only: separately tag delivery with released contents, unreleased transfer, unused external return, and other external dispatch, each once. A later genuine return must point to this article's prior outward record. Physical article mass is not an additional reference product or automatic manufacturing demand.

- Selected flow: Repellent transport carton
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Repellent transport pallet (`pallet_out`)

Physical outward repellent transport pallet, tare only: separately tag delivery with released contents, unreleased transfer, unused external return, and other external dispatch, each once. A later genuine return must point to this article's prior outward record. Physical article mass is not an additional reference product or automatic manufacturing demand.

- Selected flow: Repellent transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `pef-accounting-2021`

###### Dispatched previously released liquid ungulate repellent (`released_dispatch`)

Actual external outward contents Dg from the already-released ledger, net of packaging and linked to original cohort. This is a custody transfer, not a second production/reference output. The reference_product gate transition into G and later physical dispatch must never be added as two manufactured quantities; internal movements across included areas cancel.

- Selected flow: Dispatched previously released liquid ungulate repellent
- Flow property / unit: Mass / kg
- Amount rule: Actual custody-transfer quantity attributable to original cohort / fixed original Q0; no new net production, and no unit result without positive original Q0.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_released_custody`
- Sources: `ecfr-release-152-3`; `pef-accounting-2021`

##### Waste flows

###### Discarded finished liquid ungulate repellent (`waste_contents`)

Actual separately collected discarded contents, net of container and cleaning water. Record waste classification, receiver, treatment scope and inherited production burdens; do not call a waste receiver an elementary-emission compartment.

- Selected flow: Discarded finished liquid ungulate repellent
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `pef-accounting-2021`

###### Repellent-contaminated cleaning wastewater (`cleaning_effluent`)

Conditional collected effluent crossing to a treatment provider. Record total effluent mass and evidenced composition; product content inside it is an internal balance constituent, not a second waste_contents exchange. Treatment emissions embedded in a provider are not emitted again here.

- Selected flow: Repellent-contaminated cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `pef-accounting-2021`

###### Discarded repellent primary container (`container_waste`)

Conditional discarded single repellent primary container stream with actual material and contamination class, receiver and treatment. Exclude attached contents, which retain a separate constituent account. Separate materially different or contaminated grades into separate atomic rows.

- Selected flow: Discarded repellent primary container
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `pef-accounting-2021`

###### Discarded repellent container closure (`closure_waste`)

Conditional discarded single repellent container closure stream with actual material and contamination class, receiver and treatment. Exclude attached contents, which retain a separate constituent account. Separate materially different or contaminated grades into separate atomic rows.

- Selected flow: Discarded repellent container closure
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `pef-accounting-2021`

###### Discarded printed repellent label (`label_waste`)

Conditional discarded single printed repellent label stream with actual material and contamination class, receiver and treatment. Exclude attached contents, which retain a separate constituent account. Separate materially different or contaminated grades into separate atomic rows.

- Selected flow: Discarded printed repellent label
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `pef-accounting-2021`

###### Discarded repellent transport carton (`carton_waste`)

Conditional discarded single repellent transport carton stream with actual material and contamination class, receiver and treatment. Exclude attached contents, which retain a separate constituent account. Separate materially different or contaminated grades into separate atomic rows.

- Selected flow: Discarded repellent transport carton
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `pef-accounting-2021`

###### Discarded repellent transport pallet (`pallet_waste`)

Conditional discarded single repellent transport pallet stream with actual material and contamination class, receiver and treatment. Exclude attached contents, which retain a separate constituent account. Separate materially different or contaminated grades into separate atomic rows.

- Selected flow: Discarded repellent transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Recorded amount attributable to original release cohort / Q0, per 1 kg reference flow; retain separate complete physical ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `pef-accounting-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | shared foreground demand | First subdivide by lot, meter and outsourced service. Where subdivision is unavailable, document why and use an evidenced causal physical driver h_i / sum(h_j) for the exact pool and period; shares must sum to one. Do not assume net product mass drives all cleaning, storage or transport. If no defensible driver is available, retain allocation unresolved; no arbitrary equal shares. | `pef-accounting-2021` |
| a_reuse | reusable articles | If reuse actually occurs, divide the evidenced article manufacture and first-delivery burden over its evidenced total lifetime uses, including first use; preserve incomplete-life uncertainty. Charge actual return transport, cleaning, repair and end-of-life once to the relevant use/cohort. Neither R/(P+F+R) nor stock turnover is a lifetime reuse count. Without reliable lifetime data, retain the unamortized history and unresolved allocation rather than invent rotations or recycling credits. | `pef-accounting-2021` |
| a_outputs | non-reference outputs | Packaging tare is delivered accompaniment, not co-product output earning an automatic credit. Retain burden-bearing reject, unreleased-transfer and closing-stock cohorts; normal rejects inherit actual production demand and treatment. A saleable co-product needs a separately evidenced function and justified allocation. Do not add avoided damage, pesticide substitution or field efficacy credits. | `pef-accounting-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every protocol retains raw absolute readings and the complete physical ledger, then sums actual attributed amounts for the same original cohort and divides by original Q0 to produce per 1 kg reference flow. The data package must separately disclose actual numerator, unit, coverage, allocation and original cohort. A later period without new first release has zero new-production Q0: preserve stocks, actual services and original burdens without producing a new-production unit result for that period. Any update adding later services to the original cohort must cite its fixed original positive Q0 and dataset version, without adding returned old goods or later regulatory production events to new Q0.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | first_release | reference_product | signed release and net-weight record | registration; country; label edition; lot; original release date; producer; handoff; gross; component tare; unique net mass; held mass | reconcile calibrated weighing and signed lot ledger to original first release; deduplicate across contractors | kg | each lot or movement | same original release cohort with complete opening/closing periods | explicit physical perimeter of named producer/contractor areas; outside-owned stock separately memorandized | per 1 kg reference flow | calibration; signed release; actual label; handoff originals |
| cp_lot | first_release | unreleased_contents; unreleased_transfer | supplier interface and contents-stock record | lot; supplier gate; unreleased identity; opening; receipts; returns; first release; outward transfer; holds; discard; product constituent in effluent; closing; inherited burdens | independent weighing and handoff reconciliation; bind contractor original burden-coverage statement to same lot/gate | kg | each lot or movement | same original release cohort with complete opening/closing periods | explicit physical perimeter of named producer/contractor areas; outside-owned stock separately memorandized | per 1 kg reference flow | net-mass ledger; supplier scope; original stock records |
| cp_pack | first_release | container_in; container_out; closure_in; closure_out; label_in; label_out; carton_in; carton_out; pallet_in; pallet_out | article-pool movement/stock and burden coverage | article specification; article ID; measured tare; count; owner; location; S0/S1; P/F/R; same-article prior outward link; D/U/W; supplier coverage; actual acquisition/freight/services; lifetime uses; unamortized balance | weigh same-specification articles and reconcile movements/stocks; first external non-purchase receipt is F; independently verify true-return article and prior dispatch; audit provider burden by component | kg | each lot or movement | same original release cohort with complete opening/closing periods | explicit physical perimeter of named producer/contractor areas; outside-owned stock separately memorandized | per 1 kg reference flow | physical receipts; off-site confirmations; tare; prior dispatch; provider coverage; service originals |
| cp_utility | first_release | electricity; cleaning_water | actual submeter and supplier record | meter; start/end readings; period; voltage/water quality; supplier; duplicate exclusions; allocation driver; volume/density; native property/unit | reconcile calibrated submeters and invoices; audit metered energy separately from provider native property; measure same-lot density for volume-to-mass water conversion | kWh; kg | each lot or movement | same original release cohort with complete opening/closing periods | explicit physical perimeter of named producer/contractor areas; outside-owned stock separately memorandized | per 1 kg reference flow | meter calibration; invoice; provider property/unit chain; density originals |
| cp_transport | first_release | road_freight | carrier handoff by leg | leg; date; origin/destination; carrier; mode; payload tonnes including package; km; empty return; provider coverage; cohort | reconcile consignment and actual distance; exclude provider-covered legs; model empty returns with compatible service basis | t·km | each lot or movement | same original release cohort with complete opening/closing periods | explicit physical perimeter of named producer/contractor areas; outside-owned stock separately memorandized | per 1 kg reference flow | consignment; distance; coverage evidence |
| cp_residual | first_release | waste_contents; cleaning_effluent; container_waste; closure_waste; label_waste; carton_waste; pallet_waste | individual waste-stream and emission-coverage survey | lot; original cohort; U/G status; substance/article; mass; contamination class; product constituent in effluent; receiver; treatment gate; on-site emitted substance/compartment; native unit; coverage; uncertainty | reconcile weighing and transfer notes; survey on-site compartments; retain residual discrepancy, not difference-as-air-emission or missing-as-zero | kg | each lot or movement | same original release cohort with complete opening/closing periods | explicit physical perimeter of named producer/contractor areas; outside-owned stock separately memorandized | per 1 kg reference flow | weighing; receiver notes; treatment scope; monitoring; substance balance |
| cp_released_custody | first_release | returned_released_contents; received_released_contents; released_dispatch | released custody and original-cohort record | original lot; original producer and first-release Q0; prior outward; Rg/Ig/Dg; physical perimeter; G0/G1; subsequent regulatory production events; inherited burdens; actual new services | independently reconcile genuine return/first external receipt/later dispatch to original first release; relabeling and ownership moves create no Q0; hold unknown original cohorts separately | kg | each movement | original cohort lifecycle and actual period | explicit physical perimeter; outside ownership separately memorandized | per 1 kg reference flow | prior-dispatch/return notes; original first release; measured net mass; inherited burdens; actual service originals |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_denominator | reference_product | Q0 = sum(gross mass - measured component tare for each unique original first-release lot). Exclude unreleased transfers, resale and duplicate return releases; require Q0 > 0. | cp_release; cp_pack | Q0 kg | `epa-trico-2026`; `pef-accounting-2021` |
| cohort_normalization | all inventory rows | x_norm = x_attributed / Q0; x_attributed is this row’s measured or evidenced allocated quantity for the original cohort, and x_norm is quantity per 1 kg reference flow. Preserve actual numerator units and burden coverage. | cp_release; cp_lot; cp_pack; cp_utility; cp_transport; cp_residual | x_norm | `pef-accounting-2021` |
| contents_balance | unreleased_contents; reference_product; unreleased_transfer; returned_released_contents; received_released_contents; released_dispatch; waste_contents; cleaning_effluent | Use two status ledgers within one declared physical perimeter: U0 + Iu = Q0 + Du + Wu + Cu + Eu + U1; G0 + Q0 + Ig + Rg = Dg + Wg + Cg + Eg + G1. U is never-first-released contents including holds; G is already-first-released contents; 0/1 denote opening/closing. Iu contains only evidenced never-released external receipts and their returns; Ig is first external receipt of already-released goods; Rg is genuine return of released old goods, independently linked to original cohort and never entered into U. Du/Dg are outward product transfers in each status, excluding the disjoint W, C and E outlets. W is separately discarded contents, C product constituent in effluent, E measured substance-specific emissions. Q0 internally transfers between ledgers and cancels at the consolidated physical boundary; cancel internal handoffs and avoid duplicate effluent constituents. Keep discrepancies unresolved. | cp_lot; cp_release; cp_released_custody; cp_residual | contents closure in kg | `pef-accounting-2021` |
| article_balance | each packaging article pool | For each article check S0 + P + F + R = D + U + W + S1; count times measured same-specification tare gives kg. Physical quantities are not automatic new manufacture demand; independently reconcile inherited burdens, coverage and lifetime uses. | cp_pack; cp_residual | article closure and burden coverage | `pef-accounting-2021` |
| electricity_conversion | electricity | E_MJ = 3.6 * E_kWh; convert metered energy only, never replace provider native-property verification with unit-group equivalence. | cp_utility | MJ; kWh | `pef-accounting-2021` |
| freight_basis | road_freight | Loaded-leg service = actual transported gross tonnes * actual km, including package mass and excluding provider-covered legs. Handle empty returns by a compatible provider basis; never substitute Q0 net kg for actual payload. | cp_transport | t·km | `pef-accounting-2021` |

Status-ledger example (identity check only, not factory data): U0=10, Q0=6, U1=4; G0=3, Rg=1, Dg=5, G1=5, with other terms zero. U closes as 10=6+4, G as 3+6+1=5+5, and consolidated physical mass as 13+1=5+9; current first-release net quantity is only 6. Already-released imports/transfers, relabeling the same contents and later dispatch generate no new Q0.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference_product | Align producer, registration edition, actual pack and lot net mass; same brand cannot merge editions | actual label; signed first release; handoff |
| dq_complete | whole system | Audit each producer black box, BOM, native properties/units, residuals and service coverage; retain gaps unresolved | supplier coverage matrix; row-wise physical/burden ledgers |
| dq_uncertainty | measurement and allocation | Disclose resolution, calibration, coverage period and article-pool allocation uncertainty; no invented quantitative ranges | raw readings; uncertainty; driver evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference product and classification | Require actual country/registration/edition/lot/producer and non-lethal ungulate-repellent purpose, not merely a pesticide label. Exclude CPC 34661 insecticides, 34662 fungicides, 34663 herbicides/anti-sprouting/growth regulators, 34664 disinfectants and 34666 hazardous pesticides. The latter is a specific HS grouping, not a warning pictogram test: confirm the actual product is outside HS 3808.52/.59 from authoritative classification evidence or competent supplier declaration, without inferring from undisclosed ingredients. Hold unresolved cases. This scoped 34669 association is a narrower inference, not an official TRICO customs ruling. | `unsd-cpc3-2025`; `unsd-cpc3-2026`; `cbp-repellent-2009`; `epa-trico-2026` |
| v_measure | all inventory rows | Require Q0 > 0, unique first-release lot membership, calibrated net weighing, same cohort denominator in both languages, traceable activity numerators and compatible native provider units. Reject gross-package or active-content denominators, duplicate transfer output, default density and unsupported energy-property substitution. | `pef-accounting-2021` |
| v_balance | each lot and article pool | Close contents and each packaging ledger including opening/closing stocks at all declared in-perimeter locations (outside-owned assets separately memorandized), every purchased/first non-purchased receipt, true return, loaded/unused dispatch, discard and held amount. Check same-article return links independently from burden coverage. Retain uncertainty in measured units and source-specific tolerances; no invented generic tolerance or discrepancy-as-emission closure. | `pef-accounting-2021` |
| v_coverage | dataset readiness | Before complete environmental use require qualified upstream production, actual article BOM, all active atomic flows and properties/units, services, emissions, residual receiver/treatment, allocation and inherited burdens. A declared unresolved product UUID permits candidate authoring only; it does not establish producer equivalence or study qualification. Report performed/skipped checks and every unresolved coverage item. | `pef-accounting-2021` |
| v_release_event | original release status and site physical stock | Independently reconcile earliest applicable release event and physical dispatch: qualifying unshipped mass can enter Q0 on commercial pack/label completion or shipment-area entry, while separated/marked unreleased goods stay held. Preserve released-awaiting-shipment closing physical stock without adding Q0 to the physical balance. Retain later regulatory production events without treating the same contents as new net production; continue all actual new environmental burdens against the original cohort. | `ecfr-release-152-3`; `epa-trico-2026` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Original first-release product-gate background only after actual data, upstream and native identities are qualified |
| allowed_use | Environmental accounting at matching registration edition, state, boundary and provider coverage, with uncertainty |
| excluded_use | Formulation/manufacturing instructions, application efficacy, toxicology, regulatory classification ruling, full PEF conformity, default field impacts or unqualified data substitution |
| required_metadata | Edition, net mass, original release gate, producer/contractor sites/period, BOM, upstream interfaces, cohorts, row-native properties/units and allocation |
| required_quality_disclosure | Upstream black-box coverage, all unresolved identities/residuals, physical and burden closure, measurement/lifetime uncertainty, performed and skipped checks |
| update_trigger | Changes in registration label, lot identity, producer handoff, packaging, provider coverage, gate, units/properties or allocation |

The CAES original independently corroborates TRICO Pro as a physical commercial comparator, while the manufacturer page corroborates liquid deer-repellent identity. Neither supplies an actual release lot, producer route or factory quantity; other products and use results in the research are excluded. Mass/kg and technical Energy/MJ/kWh conversions come from the independently checked native property/unit chain, not product-quantity factors in the external literature table.

## 11. Data Sources

| Source id | Type | Reference | Used for and limits |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 explanatory notes, 30 June 2025, PDF p.167. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Frozen leaf and neighboring titles; page has no product-specific ruling or factory data |
| unsd-cpc3-2026 | official_guidance | UNSD, 23 October 2026 explanatory-note workbook, CPC3!A1500:D1500 and rows1495–1499. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 34669 correspondence to HS2022 3808.99 and specific neighbor subheadings; does not change frozen coordinate or qualify a particular product |
| epa-trico-2026 | official_guidance | US EPA, TRICO 71637-2 authority letter 21 January 2026, PDF pp.1–2; master-label identity/net-contents/lot fields p.3. https://www3.epa.gov/pesticides/chem_search/ppls/071637-00002-20260121.pdf | Finished product/brand identity, label edition and first-shipment release gate; not evidence of an actual lot, amount, supplier or equivalence to earlier editions |
| epa-trico-2025 | official_guidance | US EPA, TRICO 71637-2 authority letter 21 February 2025, PDF pp.1–2 and identity fields p.3. https://www3.epa.gov/pesticides/chem_search/ppls/071637-00002-20250221.pdf | Earlier distinct label edition and lot/package identity fields; superseded with transition conditions, not a default current-lot label |
| caes-commercial-2024 | literature | Connecticut Agricultural Experiment Station, Final Report 23-02-CAES, title and identification of TRICO Pro as comparison product, PDF p.1. https://www.realchristmastreeboard.org/wp-content/uploads/2024/10/23-02-CAES-Final-Report.pdf | Independent institutional corroboration of a physical commercial comparator; no adoption of trial operations, results, dosage, manufacturing, factory inventory or a release lot |
| kwizda-commercial | literature | Kwizda Agro, TRICO product identity page. https://trico-repellent.eu/en/products/trico-sup-r-sup-~mp19218 | Manufacturer corroboration of a commercial liquid deer-repellent identity; country registration and actual pack need separate verification; no concentration, application, efficacy, density or factory data adopted |
| cbp-repellent-2009 | official_guidance | US CBP, HQ W968435, 15 June 2009, Customs Bulletin Vol43 No27 (10 July 2009), PDF pp.15–17. https://rulings.cbp.gov/ruling/W968435 ; https://www.cbp.gov/bulletins/43genno27.pdf | Historical 3808.99.95 ruling for different repellent Dog and Cat Get Away, distinguishing repelling from killing; functional-boundary corroboration only, not an official TRICO or current-CPC ruling |
| pef-accounting-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, corrected consolidated Annex I, sections3.2.1–3.2.2 (p.33), 4.4.9 (p.79), 4.5 (pp.87–88). https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | Declared-unit/boundary disclosure, lifetime reuse and subdivision/causal physical allocation principles. Cohort/article closure here is an environmental collection convention, not a regulation-prescribed factory fact, production range, default reuse rate or full PEF conformity claim |
| ecfr-release-152-3 | official_guidance | 40 CFR §152.3, definitions of Released for shipment and pesticide product; eCFR displayed Title40 current through 19 November 2026, read 22 November 2026. https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-152/subpart-A/section-152.3 | US finished-product release event, unreleased segregation and subsequent regulatory events; verify edition applicable to actual event date. Not actual-factory evidence; first event need not be shipped. Keep environmental first net quantity and regulatory events separately. |
