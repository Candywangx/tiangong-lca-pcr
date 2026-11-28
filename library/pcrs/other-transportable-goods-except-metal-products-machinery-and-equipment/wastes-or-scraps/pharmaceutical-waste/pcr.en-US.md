---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.pharmaceutical-waste
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Pharmaceutical waste: expired pharmacy-owned paracetamol tablets at first internal waste handover

## 1. Scope and Applicability

This attributional method covers one material: expired paracetamol-only finished tablets from the pharmacy's own stock, kept by original product and lot, with an actual decision to discard and a recorded first transfer to the pharmacy's segregated destruction stream. The reference is net whole-tablet mass, not active-ingredient equivalent, a therapeutic service or a disposal service. Each dataset fixes one verifiable finished formulation identity, labelled strength, tablet form, lot, packaging state, site and period. No patient-returned medicine is admitted to this route.

Expiry must establish unfitness for the original intended use, and stock-removal and receiving-custodian records must establish actual waste designation and physical segregation. An unused item, a quality hold, a near-expiry saleable item or an uncollected prescription alone does not establish either gate. The internal receiving custodian and location may be within the same pharmacy: an external receiver signature is not a prerequisite for this internal gate. It does not prove off-site collection or disposal. (`wco-hs30-2022`; `psi-medicine-disposal`)

The Irish original audit distinguishes pharmacy-generated waste from patient returns and records expiry among the former; its methods describe on-site designation and collection. It does not publish the intersection of paracetamol-only tablets, expiry and own-stock origin, nor a same-lot finished-tablet mass. This single-product restriction is an explicit methodological derivation, not a claimed observed subgroup or completed kilogram dataset. Neither unit counts, wholesale costs nor mixed-bin gross weights supply that missing mass. (`oleary-pharmacy-audit-2026`)

A separate original tablet study explicitly includes expired paracetamol tablets. It supports the physical existence of that expired finished-tablet state only, not the specific finished formulation identity, pharmacy-own-stock origin, discard decision, same strength, internal handover or hazard qualification of this route. Its samples are not joined to the Irish audit. No experimental conditions, quality/efficacy conclusions or post-expiry use recommendations are adopted. (`waghmare-expired-tablets-2026`)

This route requires a lawful, non-biological, non-infectious, site/period-qualified non-hazardous consignment. Exclude biological medicines, mixed or infectious clinical waste, sharps, controlled drugs, cytotoxic/cytostatic or radioactive material, hazardous consignments, other medicines or dosage forms, API alone, empty packaging, solvents, chemical-industry sludge, manufacturing rejects and community returns. No pathogen treatment, deliberate recovery of active substances, clinical use, formulation recipe or treatment operating conditions are specified. Unknown origin, classification, hazard determination or custody cannot pass applicability.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.pharmaceutical-waste |
| classification_refs | CPC 3.0:39931, Pharmaceutical waste; accepted narrower relation under docs/adr/2026-11-22-accept-cpc-39931-expired-pharmacy-owned-paracetamol-tablets.md |
| covered_products | Expired pharmacy-owned paracetamol-only whole tablets, one finished formulation and original lot per cohort, first documented internal destruction-stream transfer |
| excluded_products | Other drugs/forms; patient returns; manufacturing rejects; saleable/quarantined stock without demonstrated unfitness and discard; biological/infectious/hazardous waste; API; empty packs; solvents; sludge; disposal services |
| representative_product | One actual expired paracetamol-only tablet lot with a documented stock-to-destruction-stream transfer; no public qualifying sample or quantity is asserted |
| production_route | Trace original procurement and stock history; verify expiry and discard decision; record stock removal, net-mass determination and first internal segregation handover; separately link any subsequent custody work |
| market_state | Waste whole tablets in their recorded original containment, withheld from medicinal supply; no deblistering or reformulation is presumed |

Frozen UNSD June 2025 notes p.205 list 39931 and neighbours 39939, 39940 and 39950 without a detailed 39931 paragraph. The October 2026 CPC3 row 1940 links 39931 to HS 2022 3006.92; Chapter 30 Note 4(k) defines unfit pharmaceutical products and includes expiry as an example. These sources support classification, not a consignment's hazard status. Other clinical waste, waste organic solvents and chemical-industry wastes are separate neighbours. The later clarification does not replace the frozen classification coordinate. (`unsd-cpc3-notes-2025`; `unsd-cpc3-notes-2026`; `wco-hs30-2022`)

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Traceable expired paracetamol-only tablet material first handed from pharmacy stock into its segregated destruction stream |
| How much | 1 kg net whole-tablet mass excluding all packaging and containers |
| How well | Same finished formulation identity/lot, expiry and discard decision, actual internal handover, lawful non-biological/non-infectious non-hazardous determination for the actual site and period; no therapeutic equivalence |
| How long or cycle | One unique first recorded waste handover; later custody uses the original cohort rather than creating new production |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Expired paracetamol-only tablets |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Verifiable finished formulation identity (brand and authorisation or product-specification identifier, sole active substance and dosage form), without manufacturing proportions; labelled strength; whole-tablet form and lot; original supplier, stock ownership and no patient-return/manufacturing-reject origin; expiry and discard decision; actual site/country/period; existing documentation needed for waste/hazard determination; original packaging and all actual components; non-destructive measured net mass or independently measured same-lot whole-tablet mass with counts, method and uncertainty; first handover event, receiving internal custodian and designated location; opening/closing stocks and prior dispatch/return history; provider-included scopes and inherited burdens; actual utilities, containment, residual destinations and any later custody extension |

Declare every qualifier in dataset metadata, process notes, reference-flow comments or equivalent fields. No exact native Product flow has been established for this whole expired-tablet material. A clinical-waste Product flow, generic Waste flow or pure paracetamol elementary emission cannot substitute for it. Mass and energy support identities are not a supplier or reference-product binding.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Q is net same-lot whole-tablet mass at the first documented qualified internal waste handover. Use cp_release calibrated gross minus independently evidenced component tares, or count times independently measured same-lot finished-tablet unit mass. Record method, uncertainty and representativeness without opening waste solely for this model. Nominal active strength, cost, pack count or a mixed-bin weight is not net medicine mass. |
| raw_units | all inventory rows | Actual declared property | kg; MJ | Collect raw totals and event records. Convert original units before attribution and the sole division by Q. Volume-to-mass needs independently measured state-specific density; integrate actual rates once and never multiply an integrated total by time again. |
| electricity_unit | electricity | Energy | MJ | Collect metered kWh and use 1 kWh = 3.6 MJ. Energy is the metering property; the actual supplier flow, its native reference property and provider remain independently unbound until verified. Sharing an energy unit group does not prove net calorific value. |
| composition | expired_tablets_in; tablet_fragments; tablet_washwater | Mass | kg | Full tablet mass includes excipients and actual moisture. Assayed active mass is a non-additive subledger. Do not infer formulation, degradation, density or a named emission from label strength, COD/BOD, total dust or an unexplained balance residual. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Own-stock expired finished tablets at recorded discard decision, with procurement, stock and packaging history linked |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | CPC 3.0:39931; narrower single-product expired own-stock route |
| recursive_input_rule | Internal same-lot movements cancel. Transfer, ownership change, resale, reinspection and previously dispatched returns do not create a second reference release or another medicine-production process. |
| upstream_dataset_requirement | Preserve original medicine and packaging supplier/system-model provenance, stock burdens and included service scopes; declare how original burdens are attributed rather than assuming waste is burden-free or remanufacturing the medicine. |
| disclosure | Exact discard and first internal receiving gate; real packaging, utilities, stock and inherited burdens; optional custody scope and its original cohort; missing qualification and foreground evidence |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_origin | segregation | Establish own-stock origin, expiry, unfitness, discard and actual recorded internal receipt separately. A receiving custodian and designated area suffice for the internal gate only when recorded. No factory rejection record or consumer-return study proves this route. | `psi-medicine-disposal`; `oleary-pharmacy-audit-2026`; `wco-hs30-2022` |
| b_operations | segregation | Include actual stock verification, segregation, weighing, handling, necessary containment, attributable lighting/HVAC, cleaning, failed/zero-release operations and standby within the declared gate. Preserve real stage records. No deblistering, grinding, drying, chemical conversion, pathogen treatment or active-substance recovery is part of this route. | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |
| b_release | reference_product | Count Q once at first qualified internal handover. Pre-release stock plus incoming stock equals closing pre-release stock plus Q plus disjoint other outflows. Segregated stock plus Q and actual returns equals closing segregated stock plus gross dispatch and disjoint other outflows. Cancel internal Q when combining gates; neither closing stock nor external dispatch is new Q. | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |
| b_pack | all inventory rows | For EACH actual pack/container/pallet component at one physical gate, opening + P + N_ext + ER = closing + grossS + EO + W. Include empty, attached pre-release, attached segregated and reusable stocks. P is true purchase including articles included in a whole purchase price; N_ext is first external non-purchased receipt, including accompanying, borrowed, rented or free-transfer articles whether or not supplier data cover them; ER requires a traceable earlier outward dispatch of the same item. Classes are mutually exclusive; internal issues/reuse cancel. | `ilcd-lca-detailed-2010` |
| b_interfaces | all inventory rows | The conditional cards are not a complete site BOM. Determine each actual original medicine-pack component and any specialised bin body, lid, liner, closure or pallet separately; install its concrete atomic receipt/output or stock interface and measured quantity before dataset completeness. A PE bag is neither evidence of a compliant bin nor a substitute for one. Missing original packaging cannot be hidden inside net Q, a generic collection row or a symbolic balance. | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |
| b_custody | all inventory rows | Link physical receipts, ownership, original item/cohort and exchange-level carried burdens. Assign actual purchase, transport, rental or other services once; absent supplier inclusion evidence is a gap. A return/first non-purchased receipt is not automatically virgin manufacture, zero burden or a credit. Gross throughput and the environmental supply-demand vector are different accounts. | `ilcd-lca-detailed-2010` |
| b_destination | segregation | Base scope ends at internal segregation. An explicitly declared later storage/packing/dispatch extension retains original cohort mass Qc and adds only actual incremental work; H is service activity, never production. Collection, treatment and final disposal remain separately linked downstream services, not demonstrated by internal designation. Do not presume destruction performance, off-site receipt or an avoided-product credit. | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| segregation | Own-stock expiry designation through first internal destruction-stream handover | required | Actual qualifying single-product own-stock cohort | foreground | reference_product |

Keep stock, gate and any declared custody-extension records separate inside this aggregate process. No quantity or auxiliary occurrence is inferred from the public audit. Conditional water, PE bags and paper labels apply only where actually present and compatible; original packaging and specialised containers must be resolved individually. A whole purchased cleaning preparation is one acquired exchange, with non-additive constituent analysis; real in-house preparation needs separate actual inputs. No routine direct emission is presumed for contained tablets. Any real spill, cleaning preparation, utility, residual or species/medium release must be installed as an atomic exchange and independently measured before a completeness claim.

### Process: Expiry designation and internal waste handover (`segregation`)

#### Inputs

##### Product flows

###### Expired own-stock whole tablets (`expired_tablets_in`)

Record the same-lot expired tablets leaving own stock, with original procurement and carried exchange burdens. This is a stock transfer, not a new API/excipient purchase. Preserve the verifiable finished formulation identity, corresponding upstream dataset and original pack history; no manufacturing recipe or ingredient proportions are required at this handover gate. Use existing product/safety documentation for classification; unresolved product identity or native-flow applicability remains explicit.

- Selected flow: Expired paracetamol-only tablets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_history`
- Sources: `psi-medicine-disposal`

###### Metered electricity (`electricity`)

Conditional actual meter/submeter consumption for segregation, weighing, attributable lighting/HVAC, standby and cleanup. Record voltage, country, provider and supply boundary. Meter Energy is not the still-unverified native property of a supplier flow; rated power alone is not a consumption measurement.

- Selected flow: Grid electricity at the actual pharmacy
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `ilcd-lca-detailed-2010`

###### Water for actual cleaning (`tap_water`)

Conditional actual piped treated water, not pharmaceutical purified water, raw abstraction or steam. Native Mass is the reference; its secondary Volume conversion is not independently measured site density. Verify supplier and treatment scope; count water already inside a purchased cleaning preparation only as a non-additive constituent.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `ilcd-lca-detailed-2010`

###### Conditional PE bag receipts (`pe_bag_receipts`)

Only an actually present polyethylene bag article. The native Product identity/CAS9002-88-4 does not specify grade, dimensions, layers, supplier or suitability. Partition each external physical receipt into P, N_ext or ER and record stock and supplier scope. Do not apply a virgin-production provider to all gross returns/reuse.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-detailed-2010`

###### Conditional printed paper label receipts (`paper_label_receipts`)

Only an actual whole printed paper sticker. Native production mix at plant GLO does not establish actual provider or adhesive chemistry. Record all physical receipts including supplier-accompanying labels with no separate invoice; include printing/adhesive once within the acquired article unless actually made separately.

- Selected flow: Paper label `6e3bea7a-9e89-4f50-a065-79feaac682db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-detailed-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First internally handed-over expired tablet material (`reference_product`)

The sole reference output is net whole-tablet mass first recorded as physically received into the segregated destruction stream. Exclude all packaging. Require the actual discard, internal custodian/location, stock-removal and mass records; internal designation is not proof of off-site receipt or destruction. Reinspection and later dispatch create no second Q.

- Selected flow: Expired paracetamol-only tablets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `psi-medicine-disposal`

###### PE bag on actual gross external dispatch (`pe_bag_dispatch`)

Only in an explicitly declared custody extension with actual external dispatch. Record grossS for the same bag article, separate from net tablets Q, and retain inherited supply once. This is a packaging movement, not another co-product or new bag production. At the base internal gate retained bags remain closing stock.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-detailed-2010`

###### PE bag returned to its external owner (`pe_bag_external_return`)

Record actual EO, disjoint from grossS and W, with prior receipt, recipient and any genuine incremental transport/cleaning/rental service. A later inbound ER requires its own traceable prior outward dispatch of that same item. Ownership does not erase physical flow or establish a credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-detailed-2010`

###### Paper label accompanying actual dispatch (`paper_label_dispatch`)

Only actual grossS in a declared custody extension. Include inherited attached and newly applied labels separately by event, without a second original-article purchase. At the base internal gate retained labels stay in closing stock. Any real owner return needs its own disjoint concrete destination interface.

- Selected flow: Paper label `6e3bea7a-9e89-4f50-a065-79feaac682db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-detailed-2010`

##### Waste flows

###### Separately removed same-formulation fragments (`tablet_fragments`)

Only a separately weighed actual residual leaving to a documented waste receiver. Same-consignment fragments already in Q are not an extra output. Keep the finished formulation identity, whole-fragment mass, contamination and destination; pure paracetamol emission identity is not a whole-fragment identity.

- Selected flow: Expired paracetamol-tablet fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`
- Sources: `ilcd-lca-detailed-2010`

###### Actual tablet-contaminated cleaning effluent (`tablet_washwater`)

Conditional actual whole aqueous effluent with measured mass and treatment receiver. Retain separately analysed water and chemicals as non-additive subledgers. No cleaning, formulation dissolution or on-site treatment is prescribed; if actually present within scope, complete its specific inputs and outputs before claiming coverage.

- Selected flow: Paracetamol-tablet cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`
- Sources: `ilcd-lca-detailed-2010`

###### Used contaminated PE bag (`pe_bag_waste`)

Only actual component W. Measure bag material separately from adhering medicine and link its real waste destination. The new-bag Product UUID is not a contaminated Waste-flow identity; medicine adhering to it belongs once in the medicine ledger. No default recovery credit.

- Selected flow: Tablet-contaminated polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-detailed-2010`

###### Removed used paper label (`paper_label_waste`)

Only actual discarded labels, with whole-article mass, actual contamination and receiver. Supplier-included print/adhesive is not purchased twice. Retained attached labels are stock or dispatch, not simultaneously W. A virgin-label Product identity does not establish its Waste identity.

- Selected flow: Used printed paper adhesive label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-detailed-2010`

##### Elementary flows

Physical receipt/dispatch/residual cards retain measured gross interface amounts and original item/cohort links, without automatically attaching new-production providers. They are a separate non-additive custody view of the exchange-level environmental-demand vectors. Keep stock changes in the physical ledgers even where no external exchange occurs.

No actual species/compartment release is established by the public evidence. Contained medicine is not an emission; any real release requires its own identified atomic row and measurements, rather than a default loss factor.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all inventory rows | Apply attributional foreground accounting. There is no intended co-product here; packaging movements and custody are not new tablet production. Original purchase price or an accounting write-off does not determine environmental burden allocation. | `ilcd-lca-detailed-2010` |
| a_separate | segregation | Assign dedicated records and subdivide physically or virtually first. For remaining shared exchanges demonstrate their determining physical causality to actual co-functions. Only a genuinely unresolved remainder uses contemporaneous market values at the same process gate and physical state. Common mass/revenue alone is not causality; no free choice of allocation ratio. | `ilcd-lca-detailed-2010` |
| a_history | expired_tablets_in | Retain original medicine and packaging production/procurement burdens under their declared upstream system model. Expiry and discard do not establish either automatic full burden transfer or zero burden. Bind every carried exchange vector once; missing upstream history or allocation basis is explicit uncertainty, not new ingredient buying. | `ilcd-lca-detailed-2010` |
| a_cohorts | all inventory rows | Preserve opening/closing pre-release and segregated-stock vectors and every failed, zero-release, idle and cleanup record. Later services/returns use original Qc, not new Q. A Q=0 cohort retains its raw loads without a per-kg result; do not shift them to unrelated successful cohorts. | `ilcd-lca-detailed-2010` |
| a_services | all inventory rows | P/N_ext/ER classify physical receipts independently from environmental burdens. Retain owner, provider scope and original cohort; count actual procurement, transport, cleaning, rental and other incremental services once. No-invoice receipt and supplier omissions both require investigation. Do not multiply gross packaging reuse by a new-article provider or duplicate supplier-included services. | `ilcd-lca-detailed-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

These are collection requirements, not reported observations. Protocols retain unnormalised totals and event/stock records; the aggregation field identifies the final reference basis only. No protocol divides by Q. Calculation c_normalize is the sole normalisation. No measured operating range or numerical site factor is inferred from the audit, classification or general LCA handbook.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_history | segregation | expired_tablets_in | stock_history | product; finished_formulation_identity; authorisation_or_specification_id; upstream_dataset_ref; existing_safety_documents; labelled_strength; tablet_form; original_lot; supplier; ownership; original_receipt; expiry; discard_decision; patient_return_exclusion; opening_stock; closing_stock; inherited_vector_i; provider_scope_i | Obtain original procurement/stock and pharmacist disposition records, preserving original packaging, finished formulation identity and exchange-level upstream provenance. Verify brand, authorisation/specification identifier, sole active substance and dosage form against existing records and compatible upstream data; do not require quantitative manufacturing proportions. Raw totals for per 1 kg reference flow; no division here. | kg | each lot and movement | procurement history through reporting close | actual pharmacy and original supplier | per 1 kg reference flow | original records; actual site/period waste determination; linked upstream system model |
| cp_release | segregation | reference_product | internal_handover_weighing | lot; expiry; discard; stock_removal; receiving_custodian; designated_location; event_time; first_event_id; gross; each_component_tare; count_if_used; same_lot_finished_unit_mass_if_used; net; Q; Qc; opening_stock; closing_stock; grossS; actual_return; prior_dispatch; calibration; uncertainty | Reconcile actual stock removal and internal receipt with a calibrated non-destructive net-mass record. Alternatively use count times independently measured same-lot finished-tablet mass with representative sampling and uncertainty. Do not derive mass from active strength/cost/bin gross. Raw totals for per 1 kg reference flow; no division here. | kg | each first handover and custody event | opening through close including zero-release periods | actual pharmacy stock and segregated receiving gate | per 1 kg reference flow | internal event record; pharmacist discard decision; expiry; calibrated gross/tare or same-lot finished-mass basis; actual qualification |
| cp_pack | segregation | individual component interfaces | component_custody | component_id; material; form; direction; event; owner; lot; opening_empty; opening_attached_pre_release; opening_attached_segregated; opening_reusable; P; N_ext; ER; prior_outward_dispatch; closing; grossS; EO; W; measured_mass; supplier_scope_i; inherited_vector_i; incremental_service_i | Determine actual original pack and every containment component individually. Reconcile calibrated weights or traceable measured BOM with all receipts, including first non-purchases irrespective of supplier coverage and same-item returns. Install every actual atomic interface. Raw totals for per 1 kg reference flow; internal issues/reuse cancel; no division here. | kg | each receipt, movement, discard and stock count | opening through close; full original item lineage for returns | same component-specific physical gate and any declared custody extension | per 1 kg reference flow | measured BOM; receipts; ownership and invoices/whole-price scope; prior dispatch; supplier inclusion and missing-data disclosure |
| cp_utilities | segregation | electricity; tap_water | metered_activity | stage; lot; meter_start; meter_end; raw_unit; rate_time_if_used; density_if_needed; provider; voltage; geography; included_scope; standby; failed_operations; cleanup; service_H; original_Qc | Record actual meters, supplier activity and justified dedicated/shared-stage assignment. Distinguish metered Energy from supplier-native flow property. No rated-power or generic density substitution. Raw totals for per 1 kg reference flow; no division here. | kWh; kg | each stage and meter interval | full campaign and any declared custody extension | actual pharmacy and supply gate | per 1 kg reference flow | meter calibration; supplier/context compatibility; allocation evidence; actual measured density if needed |
| cp_residuals | segregation | tablet_fragments; tablet_washwater | residual_transfer | material; lot; event; whole_mass; measured_water; actual_assay_and_basis; contamination; receiver; treatment_boundary; sample_mass; inherited_vector_i | Independently weigh every actual residual and identify its real receiver; reconcile non-additive whole-material and analysed-component views. COD/BOD or dust alone is not a named chemical emission. Raw totals for per 1 kg reference flow; no division here. | kg | each actual residual transfer | all relevant operations and cleanup through close | actual source and residual receiving gate | per 1 kg reference flow | scales; analysis method/basis; transfer documentation; destination and completeness evidence |
| cp_services | segregation | later custody | cohort_service | original_first_event; Qc; H; raw_exchange_i; prior_dispatch; actual_return; opening_stock_i; closing_stock_i; inherited_vector_i; included_scope_i | Only for an explicitly declared extension: retain original cohort and actual incremental storage, handling, dispatch or return work. An inherited supply is not a second purchase. Raw totals for per 1 kg reference flow of original Qc; no division here. | actual service unit; kg | each actual service event | first internal handover through declared custody close | actual custodian and declared extension | per 1 kg reference flow | first-event lineage; real service records; provider inclusion; incremental measurements |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_raw | all inventory rows | Convert original units; 1 kWh = 3.6 MJ. Integrate true rates once. Volume-to-mass requires independently measured density for that actual state. Preserve raw totals and uncertainty. | raw_records; unit_chain; density_if_used | raw_totals_i | `ilcd-lca-detailed-2010` |
| c_mass | reference_product | For each first qualified event, q_event = gross minus all independently measured component tares, OR count times independently measured same-lot finished-tablet unit mass; record the chosen method, never add the two estimates. Q is the sum of unique first-event net masses for the defined same-product cohort. Neither nominal strength nor costs convert counts to medicine kg. | cp_release; cp_pack | Q | `psi-medicine-disposal` |
| c_tablets | expired_tablets_in; reference_product | Pre-release gate: opening_pre + incoming_stock = closing_pre + Q + other_pre_out. Segregated custody gate: opening_seg + Q + true_return = closing_seg + grossS + other_seg_out. Other outflows are disjoint actual residuals with their compositions measured. Q cancels on combination. Previously released returns and reinspection create no new Q; preserve original cohort and all physical mass. | cp_history; cp_release; cp_residuals; cp_services | medicine_reconciliation | `ilcd-lca-detailed-2010` |
| c_components | all inventory rows | For EACH component: opening + P + N_ext + ER = closing + grossS + EO + W, including empty/attached/reusable stocks. Receipt classes and destination classes are mutually exclusive; ER requires prior same-item outward dispatch. Internal issues/reuse cancel. Missing real interface/quantity is incomplete; no balancing plug or omitted non-purchased article. | cp_pack; cp_release; cp_services | component_reconciliation | `ilcd-lca-detailed-2010` |
| c_vectors | all inventory rows | For each original cohort and exchange i: opening carried vector + actual carried-in vector + genuinely new attributable vector = closing vector + assigned reference vector A_i + identified other-destination vector. Deduplicate provider-included scope once. Apply dedicated/subdivided records, then determining physical causality, then only unresolved same-gate/state/time market-value remainder. Physical throughput is not automatically new procurement burden. | cp_history; cp_pack; cp_utilities; cp_residuals; cp_services | A_i | `ilcd-lca-detailed-2010` |
| c_normalize | all inventory rows | a_i = A_i / Q for Q>0, once after raw conversion, attribution and reconciliation. The reference output is 1 kg. Q=0 retains raw burdens with no unit result. A later custody profile uses original Qc, with actual increments added before this sole division or reported once as a separate increment; H is never production. For a physical interface numerator use its measured raw G_i in place of A_i in this same normalisation step, retaining g_i = G_i / Q separately from environmental demand a_i. Never add these two views or attach virgin supply to gross throughput; never divide already-normalised values again. | A_i; G_i; Q; Qc; cp_release; cp_services | a_i; g_i | `ilcd-lca-detailed-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference_product | Require the actual single-product/lot expiry, discard and own-stock-to-segregated-stream intersection. Broad audit categories are not proof that this medicine met it. | Original procurement, expiry and internal custody records; `oleary-pharmacy-audit-2026` limitations |
| dq_gate | reference_product | Require site/period-specific lawful waste and non-hazardous qualification; no hazard/safety approval follows from CPC, non-biological naming or a finite measurement check. Internal receipt is not external collection. | Actual competent determination and recorded internal gate; `psi-medicine-disposal`; `wco-hs30-2022` |
| dq_mass | reference_product | Calibrated net whole-tablet mass or independently supported same-lot finished-mass conversion; all packaging excluded and uncertainty retained. No public kilogram case is supplied. | cp_release raw records; `oleary-pharmacy-audit-2026` quantity limits |
| dq_complete | all inventory rows | Every actual original package, specialised containment, utility, cleaning preparation, residual and real species requires its own atomic interface or explicit measured stock account. The initial map is not a cut-off. | Actual full BOM and event inventory; component and material closure |
| dq_lineage | all inventory rows | Carry original stock/item/provider burdens through all gates and actual returns. Keep genuine incremental services, failures, standby and cleanup without double procurement. | Exchange-vector and original-dispatch lineage; `ilcd-lca-detailed-2010` |
| dq_native | all inventory rows | Verify actual type, physical state, supply context, property and unit chain; exact native Chinese names where available. Metering identity does not fix a supplier's native reference property. | Original native identities and independent supplier context |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_applicability | reference_product | Require the same-product expired own-stock cohort, actual discard, internal segregation receipt and site/period qualification. Unused, near-expiry, quality-hold or uncollected status alone cannot pass. Excluded origins and biological/infectious/hazardous material cannot use this method. | `psi-medicine-disposal`; `wco-hs30-2022`; `oleary-pharmacy-audit-2026` |
| v_reference | reference_product | Require one linked Product output at 1 kg net whole-tablet mass with a unique first-event denominator. Resolve its precise native identity before a completed dataset claim; clinical waste, generic waste and an API elementary emission are not substitutes. Verify the same-lot mass basis for any count conversion. | `wco-hs30-2022`; `oleary-pharmacy-audit-2026` |
| v_stock | all inventory rows | Check pre-release, segregated and combined physical gates with Q cancelling internally. Closing stock and gross dispatch are not extra production; return/reinspection retains original cohort and no new Q. Check analysed constituents independently, without fitting several unknowns to one residual. | `ilcd-lca-detailed-2010` |
| v_pack | all inventory rows | Check EACH original pack/container/pallet component and concrete atomic interfaces, including P, first N_ext whether covered by supplier data or not, and same-item traceable ER. Enforce opening+P+N_ext+ER=closing+grossS+EO+W with empty/attached/reusable stocks and cancelling internal transfers. Missing quantities/interfaces cannot pass by symbols. | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |
| v_burden | all inventory rows | Verify provider scope, inherited vectors and real incremental procurement/transport/service burdens exactly once. No automatic zero burden, virgin manufacture on gross throughput, or credit. Check subdivision, determining physical causality and only residual same-gate/state/time economic allocation. | `ilcd-lca-detailed-2010` |
| v_calculation | all inventory rows | Require raw collection, unit/rate/density conversion and attribution before sole A_i/Q division. Q=0 retains loads; service extensions use original Qc and never H as production. Check native property/unit compatibility separately from electricity metering. | `ilcd-lca-detailed-2010` |
| v_destination | all inventory rows | Keep internal gate, off-site dispatch and downstream treatment distinct. Reconcile whole effluent versus constituent analyses as non-additive and one provider per actual exchange. Real residuals/releases need actual destinations/species/compartments; no disposal effectiveness or default emission is inferred. | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset only after all applicability, native-identity and evidence requirements are met |
| allowed_use | Same-product expired own-stock tablets at documented first internal destruction-stream handover, with original burden model and declared incremental scope |
| excluded_use | Other medicines/forms/origins; therapeutic use; safe/legal handling certification; biological/infectious/hazardous waste; treatment/disposal or active-substance recovery service; automatic zero-burden or avoided-product credits |
| required_metadata | Finished formulation identity/authorisation or specification/lot and expiry, corresponding upstream data and existing classification documentation, without manufacturing proportions; stock origin and discard; internal custodian/location/time; actual qualification; net-mass method and uncertainty; full packaging/BOM and custody; Q and any later original Qc; raw/normalised separation; site/period/provider and upstream allocation provenance |
| required_quality_disclosure | Public evidence does not establish this product-specific subgroup or net kg; reference Product UUID and actual site data unresolved; conditional component identities do not establish occurrence; original packaging and real services need full coverage; candidate guidance does not imply scientific/translation approval |
| update_trigger | New original subgroup/lot/mass/pack or custody evidence; changed waste determination, site/period or supplier; corrected native identities/property chains; new actual exchange or revised upstream system model |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-notes-2025 | official_guidance | UNSD, CPC Ver.3.0 Explanatory Notes, 30 June 2025, p.205; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Frozen 39931 identity and neighbouring categories; name-only entry does not establish hazard status |
| unsd-cpc3-notes-2026 | official_guidance | UNSD, CPC explanatory notes, 23 October 2026, CPC3!A1940:D1940; https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | Latest original 39931 correspondence to HS2022 3006.92; classification corroboration only, no change to frozen coordinate |
| wco-hs30-2022 | official_guidance | WCO, HS2022 Chapter 30, Note 4(k), PDF p.2, and 3006.92, p.4; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0630_2022e.pdf | Unfitness for original purpose, including expiry, distinguishes waste pharmaceuticals from medicinal goods; not a hazard or actual-discard determination |
| psi-medicine-disposal | official_guidance | Pharmaceutical Society of Ireland, Guidelines on the Disposal of Medicinal Products for a Retail Pharmacy Business, introduction and §§3.1.3–3.1.5; https://www.psi.ie/practice-supports/guidance-and-guidelines-pharmacists-and-pharmacies/guidelines-disposal-medicinal | Qualitative pharmacy stock segregation, designated custody and assessment context; basis for a derived documented internal gate, not proof of an actual transfer or an LCA mass factor; verify actual applicable place/date obligations |
| oleary-pharmacy-audit-2026 | literature | O'Leary et al., Unused and expired medicines waste in Ireland – an audit of medicines returned to and generated in community pharmacies, Irish Journal of Medical Science 195, 2853–2864, 2026, Methods, Results and Figs. 3 and 4; https://doi.org/10.1007/s11845-026-04436-6 | Original April/May 2025 audit separates own-stock waste/expiry from returns and documents on-site designation; does not identify this product-specific intersection, finished-tablet mass or a completed kilogram dataset; costs and unit counts are not LCA factors |
| ilcd-lca-detailed-2010 | handbook | European Commission JRC, ILCD Handbook, General guide for LCA, Detailed guidance, March 2010, §§7.9.2–7.9.3, printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | General attributional subdivision, determining-physical-causality and residual same-gate/state economic hierarchy; balances/protocols are explicit method derivations here, not reported pharmacy factors or a waste exemption |
| waghmare-expired-tablets-2026 | literature | Waghmare Rohit and Bharatee Chaudhari, Comparative Evaluation Test of Fresh & Expired Pharmaceutical Tablets, Asian Journal of Pharmaceutical Research and Development 14(5), 8–13, 2026, publisher abstract; https://doi.org/10.22270/ajprd.v14i5.1860 | Independent original evidence for the expired paracetamol-tablet physical state only; not specific finished formulation identity, same pharmacy/lot/strength, own-stock discard or disposal proof; no test conditions, clinical conclusions, residual recovery or use advice adopted |
