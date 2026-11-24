---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.isotopes-n-e-c-and-compounds-thereof-including-heavy-water
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Carbon-13-labelled calcium carbonate powder at first quality release

## 1. Scope and Applicability

This method defines environmental accounting for a declared cohort of legally supplied, non-radioactive carbon-13-labelled calcium carbonate solid powder, from receipt of chemically finished material to its first documented finished-product quality release. It is a downstream quality-release boundary, not chemical synthesis. A qualifying lot must have evidence that it was not previously released as the same finished product. First receipt, a new commercial SKU, a new container, a retest, a transfer or resale does not prove first release. If the evidence instead establishes already released bulk, this first-release method is inapplicable: model its actual downstream packing/distribution service separately without another production denominator.

The commercially specified solid (`sigma-carbonate-492027`), independently observed purchased powder (`naviaux-calcite-2019`) and corresponding single substance (`cil-carbonate-sds-2017`) establish a real product. They do not establish an actual eligible first-release site, lot, manufacturing route or environmental inventory. The protocols below prescribe collection; no site results are asserted. No synthesis, isotope separation, enrichment or radioactive-material preparation is described or inferred. Internal supplier preparation stays a closed box. Sigma’s 2016 product-dating statement defines quality release by review of analytical compliance and lot uniformity, separately from a later retest date (`sigma-product-dating-2016`). This historical general statement supports a real quality gate, not proof that a current lot was never released by an earlier upstream supplier; trace the actual lot to its source.

Exclude ordinary unlabelled carbonate, natural-range isotopic reference carbonate, limestone and calcite minerals, formulated solutions/mixtures, other labelled compounds, heavy water, radionuclides and nuclear materials. The frozen June 2025 coordinate is CPC 34260; the October 2026 explanation links it to HS 2845. HS chapter 28 Note 6 distinguishes deliberately modified isotopic composition from ordinary natural composition. An isotope delta value or metrology designation alone is insufficient (`unsd-cpc3-2025`, `unsd-cpc3-2026`, `wco-hs2022-ch28`, `iaea-610`). Ordinary carbonate belongs outside this restricted isotope scope; radioactive products are outside it and require the separate CPC 336 family. Neighbour CPC 34240's accepted sodium-chlorate method does not cover this product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.isotopes-n-e-c-and-compounds-thereof-including-heavy-water |
| classification_refs | CPC 3.0 34260, accepted narrower relation for the labelled powder under docs/adr/2026-11-22-accept-cpc-34260-carbon-13-labelled-calcium-carbonate-powder.md |
| covered_products | Chemically finished carbon-13-labelled calcium carbonate powder in its declared solid state, assigned once to its first documented finished-product quality release |
| excluded_products | Previously released bulk at retail splitting; resale; natural-range carbonate reference materials; ordinary carbonate; other isotopes/compounds; formulations; nuclear/radioactive products; internal preparation routes |
| representative_product | Calcium carbonate-13C, Sigma 492027, CAS287389-46-2; CIL CLM-7564 corroborates a corresponding single substance, not a shared lot or factory |
| production_route | Closed-box chemically finished supply, lot identity/quality assessment and first quality release only; no onsite transformation assumed |
| market_state | Finished solid powder at the documented first quality-release gate; net whole chemical mass, excluding packaging and withdrawn samples |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the specified carbon-13-labelled calcium carbonate powder at its first finished-product quality release |
| How much | 1 kg net whole released chemical product |
| How well | Actual lot specification and certificate must define labelled chemical identity, assay separately from carbon isotope atom fraction, physical state, method and uncertainty; the catalogue 99 atom percent is not chemical purity |
| How long or cycle | One declared lot cohort and accounting period; no lifetime service equivalence or release renewal on retest |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Carbon-13-labelled calcium carbonate powder |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Labelled identity and isotope; actual supplier/manufacturer/SKU/lot; solid state; separate assay and isotope atom-fraction methods/bases/uncertainties; actual CoA and applicable SDS; evidence of never-prior-released status and responsible first release; outsourced supplier and handover; net chemical mass/tare and withdrawn samples; first-release cohort Q and period; pre/post-release stocks and returns; packaging component identities/masses/ownership/coverage; upstream environmental dataset gate/quantity/geography/period; quality-service and transport envelopes; actual utilities, waste and unresolved coverage |

Declare every qualifier in dataset metadata, process notes or equivalent evidence. Missing reference-product UUID is not permission to substitute ordinary carbonate. The supporting Mass/kg chain is independently verified archival ILCD identity; it does not select a product flow or prove its eventual native reference property.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the same-lot whole chemical net mass by calibrated mass records or supported gross-minus-component-tare records using cp_mass. Define Q as positive net mass first released in this cohort/period; a shipping weight or container count does not replace Q. |
| isotope_basis | reference product | Mass | kg | Keep isotope atom fraction, chemical assay and whole product mass separate. Never multiply net product mass by 99 atom percent, a delta value or an assumed chemical purity. Do not convert this denominator to mass of carbon-13. |
| small_mass | reference product | Mass | kg | Retain traceable balances, precision and uncertainty. Convert g to kg by 0.001; sales pack size is not a measured lot mass or a manufacturing batch size. Samples removed before release are not part of Q. |
| electricity_basis | release_electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | Preserve meter readings in kWh; 1 kWh = 3.6 MJ in Units of energy. This technical property describes measurement only. Verify each chosen supplier flow's own property chain before linking; common energy units do not prove net calorific value or supplier compatibility. This measurement support points to Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Chemically finished labelled powder received with documented lot identity and never-prior-released status, plus actual associated packaging at the named receiving/quality-release location |
| starting_condition_role | Purchased same-category technosphere starting material with inherited environmental burdens; not burden-free raw matter |
| product_classification_scope | Only the documented labelled-carbonate first-release subset of CPC 34260; the classification does not prescribe a production route |
| recursive_input_rule | Resolve finished same-category supply through one compatible closed-box supplier environmental dataset; record its actual gate and release status, prevent self-link/cycles and do not reconstruct internal isotope preparation |
| upstream_dataset_requirement | Product/grade/lot-compatible environmental dataset with reference mass, geography, time, boundary, packaging, transport, quality-service coverage and uncertainty; distinguish missing data from zero and separate upstream from local burden |
| disclosure | Downstream first-quality-release gate only; cradle-to-gate claims require the verified closed-box upstream chain and complete environmental/packaging audit; already released purchases cannot create Q |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_release | all datasets | Require original lot release history and responsible release authority; trace outsourced quality work and its actual handover. Receipt, on-demand packing and post-release retest do not create production. A batch certificate alone needs history corroboration. Preserve the historical distinction between quality release and retest; trace whether the source supplier already released the lot earlier, rather than assuming the current seller certificate date is first release. | sigma-carbonate-492027; sigma-product-dating-2016; cil-retest-2025 |
| boundary_blackbox | all datasets | Retain inherited supplier burdens once and local activities separately. Use closed-box supply without acquiring internal preparation instructions; reject a whole-product footprint when upstream coverage is unknown. | eu-pef-2021-corrected |
| boundary_physical | all datasets | Use two adjacent chemical ledgers and one declared entity boundary per physical packaging pool if present. Actual location controls physical stocks: an offsite owned object cannot be both dispatched and inside closing stock. Reconcile all incoming, outgoing and stored mass without treating imbalance as an emission. | eu-pef-2021-corrected |
| boundary_packaging | all datasets | Identify each actual body, closure and outer packaging component separately before inventory completion; do not infer material, mass or burden from a catalogue pack size. For each component distinguish purchase, first non-purchase external receipt and the proven return of the same object previously dispatched from this site. Include actual incurred procurement, transport and service burdens once even if supplier coverage is absent. | sigma-carbonate-492027; eu-pef-2021-corrected |
| boundary_completeness | all datasets | Audit actual quality services, inbound logistics, storage, utilities, samples, packaging, waste and environmental releases. Add one atomic card for each evidenced exchange absent below; no unspecified collection card or invented default. Empty sections mean unassessed coverage until a justified absence record exists. | eu-pef-2021-corrected |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| first_release | Chemically finished powder receipt and first quality release | required | Only a traceable never-prior-released cohort; no onsite chemical transformation; failure of release-history evidence makes this boundary inapplicable | Downstream release foreground, closed-box supplier upstream | reference_product |
| released_stock | Released-product stock and subsequent service account | conditional | Actual post-release stock, return, external receipt, dispatch or attributable service; retain original lot cohort | Separate downstream follow-through; no new production Q | released_dispatch; physical D only, not a second functional reference |

Closed-box finished supply → declared receiving/quality assessment → first release Q. A supplier performing quality work before delivery must be identified and its service envelope reconciled with the supplier dataset; receiving already released product is downstream distribution. Do not create an imagined local preparation step. Post-release stocks/shipments are a separately linked follow-through account beyond this release gate, not another production output. If post-release movement or service is relevant, include the conditional released_stock account below. Q is its matched internal receipt from first_release, not an external purchase or another independently burdened product input. Keep the release-gate result and later-service result distinct; do not aggregate Q and D as two final outputs. On a combined physical view Q cancels. Conditional cards require actual occurrence; documented absence permits exclusion without inventing a quantity.

The cards specify concrete candidate exchanges, not observed factory amounts. Packaging material and component identities are not established by the available product evidence; they require collection and separate atomic cards before a complete dataset. No glass, plastic, pallet or reusable pool is assumed. Purchased analysis and transport must similarly be expanded to their actual service identities if they are not already included in the verified supplier envelope. No invented flow, reference range, zero amount or UUID fills a coverage gap.

### Process: Chemically finished powder receipt and first quality release (`first_release`)

#### Inputs

##### Product flows

###### Received labelled chemical (`received_powder`)

Record actual external receipts of the whole chemically finished labelled powder. Preserve source lot, prior release status, actual packaging and associated supplier burden. Non-purchase receipts also carry their provenance and remaining inherited burden; purchase cost does not define physical mass. This card counts first external never-released receipts only, excluding genuine sample returns in the separate unreleased_sample_return card. I is the sum of these mutually exclusive inputs; do not repeat material or upstream burden.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected same-cohort received net chemical mass attributable to the reference output after cp_mass and cp_burdens reconciliation; exclude internal recirculation and already released stock from the new production account.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `sigma-carbonate-492027`; `cil-carbonate-sds-2017`

###### Returned unreleased external sample (`unreleased_sample_return`)

Only a documented unchanged never-released sample returning from its actual external quality-service custodian. Record it as an explicit subgroup of I; preserve the previous sample-outward linkage and bring back only remaining burden. It is not a new supplier manufacturing input.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected actual return mass in cp_samples, normalized only under the original cohort rule; retain raw mass when Q is zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_samples`
- Sources: `eu-pef-2021-corrected`

###### Attributable metered electricity (`release_electricity`)

Apply only where actual electricity is attributable to receiving, quality assessment and pre-release storage. Record the actual meter and supplier scope, including shared allocation evidence; supplier-inclusive external quality services must not be counted again locally.

- Selected flow: Electricity supplied to the quality-release site
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- Amount rule: Collected attributable metered electricity for this released cohort; preserve opening/closing readings, dates, meter scope and cp_burdens allocation before division by Q. Unknown consumption is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_activity`
- Sources: `eu-pef-2021-corrected`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First released chemical (`reference_product`)

The unique reference output is net whole powder crossing the first quality-release gate. Exclude retained or consumed samples and unreleased material. Later retail packing or shipment does not generate another reference output.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `sigma-carbonate-492027`; `naviaux-calcite-2019`

###### Unreleased chemical returned externally (`unreleased_return`)

Apply only to actual unreleased chemically unchanged powder returned to the supplier. This is an external product transfer with an exclusive burden transfer, not Q, a co-product credit, a negative waste or a fictional yield improvement.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected actual unreleased return mass assigned separately from Q and physical waste; identify the recipient and remaining burden using cp_burdens.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `eu-pef-2021-corrected`

###### Unreleased powder sample transferred externally (`unreleased_sample_out`)

Only a real physical sample crossing the declared site perimeter to an identified external quality service. Same-site withdrawal to a retained-sample cupboard is an internal move, stays in U1 and is not S. No onsite chemical transformation or consumption is introduced.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected gross external sample mass S in cp_samples; record custody and actual service endpoint, without counting later service waste again as W.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_samples`
- Sources: `eu-pef-2021-corrected`

##### Waste flows

###### Discarded unmixed powder (`discarded_powder`)

Apply only to actual discarded unmixed labelled carbonate powder, including a discarded physical sample if it remains this substance. Reaction residues, liquids and mixed analytical wastes are different exchanges: require actual identity and separate cards or a verified inclusive external-service envelope.

- Selected flow: Discarded carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass / kg
- Amount rule: Collected discarded net powder mass, actual recipient/treatment and remaining burden, separately from retained samples, externally returned chemical and unexplained balance differences; no assumed waste fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `cil-carbonate-sds-2017`; `eu-pef-2021-corrected`

##### Elementary flows

No elementary emission is established by a product SDS, an unclosed mass balance or later laboratory dissolution. Source-specific releases require identified substance, medium and measured/modelled basis; untreated collected waste is not an elementary release.

### Process: Released-product stock and subsequent service account (`released_stock`)

This conditional account preserves the original production cohort and its inherited burden. Internal Q receipt is copied from reference_product with identical lot, time, mass and burden transfer; it is not a second external inventory card. Actual G, J, D and any external sample removal are the atomic interfaces below. Retained released samples stay in R1. Any other actual L endpoint requires its own specific card before completeness. Service burdens incurred after release attach to the original cohort, including periods with no new release; old product never acquires another full upstream manufacturing burden. Utilities for this account use a separate actual meter allocation from first_release.

#### Inputs

##### Product flows

###### Genuine return of released powder (`released_return`)

Apply only to a released lot or unchanged released sample traceable to its prior outward movement from this site. Preserve original cohort, condition, net mass and remaining incurred burden; a supplier shipment with no prior outward proof is J instead.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected gross received mass G and its original-cohort attribution using cp_released. G never increases Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_released`
- Sources: `eu-pef-2021-corrected`

###### Other external receipt of already released powder (`released_external_receipt`)

Apply to J, including purchased or non-purchased released powder not proven to be a genuine same-site return. Retain the outside origin and its own original release cohort; do not merge it into this period first-release denominator.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected gross external net chemical receipt J and remaining inherited burden using cp_released; no first-release allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_released`
- Sources: `eu-pef-2021-corrected`

###### Attributable post-release metered electricity (`postrelease_electricity`)

Only actual post-release storage, return assessment or re-dispatch electricity not already included in another supplier/service/meter allocation. It is incremental service, not new manufacture.

- Selected flow: Electricity supplied to the quality-release site
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- Amount rule: Collected attributable post-release electricity using cp_released_activity; retain actual amount at zero current Q and assign only to its original cohort or a separately disclosed service result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_released_activity`
- Sources: `eu-pef-2021-corrected`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual outward dispatch of released powder (`released_dispatch`)

Apply to actual D sales/transfer movements of released powder, including re-dispatch of proven returns. Preserve original cohort and transfer remaining burden once. This physical outgoing product is not reference_product and does not recreate Q.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected gross outward net chemical mass D using cp_released; track original cohort even when current Q is zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_released`
- Sources: `eu-pef-2021-corrected`

###### Released powder sample transferred externally (`released_sample_out`)

Only an actual released sample sent outside the site for a documented quality service or retest. Classify this once within L rather than D. Same-site retained samples remain R1; unchanged later sample return belongs to G with original outward proof. Service consumption/waste must have a documented endpoint in its own envelope, not a second onsite waste entry.

- Selected flow: Carbon-13-labelled calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected actual external sample mass using cp_released and cp_samples; retain original cohort and original upstream burden without renewal on retest.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_released`
- Sources: `eu-pef-2021-corrected`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | first_release | Separate cohorts, supplier envelopes and locally metered activities before allocation. For genuinely shared quality/storage/transport activities document the causal driver; use subdivision first, then a justified physical relationship, then another justified relationship with sensitivity. Do not invent economic fractions or allocate by isotope atom fraction. | eu-pef-2021-corrected |
| allocation_history | all datasets | Reconcile historical environmental burden separately from physical mass: opening carryover plus external incoming remaining incurred share plus genuinely new burden equals current attribution plus closing carryover plus mutually exclusive external transfer/other attribution. Apply per original object, lot cohort and exchange; a return brings back only its remaining share, never a second full manufacturing burden. | eu-pef-2021-corrected |
| allocation_packaging | all datasets | For each actual packaging component keep physical ownership/location, receipt, reuse and remaining burden distinct. Purchase and first non-purchase receipt are not a genuine return; missing supplier coverage requires investigation. Count each incurred purchase, transport or service once; do not divide physical movements by reuse count. Any life-sharing rule must be justified by actual service evidence; the PEF reuse example supplies no default rotation rate. | eu-pef-2021-corrected |
| allocation_losses | all datasets | Failed-lot assessment, non-recoverable losses and sample/waste treatment stay attributable under a justified cohort rule. Never assign them automatically to a fictional co-product, create an avoided-carbonate credit or transfer a burden both with returned powder and to Q. Q remains a physical net mass independent of allocation. | eu-pef-2021-corrected |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_identity | first_release | identity and first release | original lot history and certificates | supplier/manufacturer; SKU; source/child lot genealogy; prior release status; original first release time/authority; CoA/retest/expiry; separate assay and isotope basis/method/uncertainty; SDS; outsourced service party and handover | Match original certificate, genealogy and first-release register to actual handover; investigate whether bulk was previously released. Keep chemical assay distinct from isotope abundance. A downstream purchase paper cannot establish manufacture. | documentary | each lot and release decision | same cohort/period as cp_mass | actual supplier and named releasing location | retain evidence by lot; no pooling of unlike specifications | originals, responsible-party confirmation and independent applicability review |
| cp_mass | first_release | received, first released, returned and discarded chemical | two adjacent physical ledgers | cohort; time; gross; component tare; net kg; uncertainty; pre-release opening/receipts/closing; first release Q; samples retained/transferred/consumed; unreleased returns; waste; post-release opening/returns/closing/shipments/other disposal | Use calibrated balances and traceable lot mass records; reconcile pre- and post-release ledgers with the same Q and mutually exclusive destinations. Investigate discrepancies without inferring emissions or re-releasing old stock. | kg | every physical movement and release; close each period | declared complete period and lot cohort | declared physical boundary including identified external service custody | per 1 kg reference flow | calibration, tare provenance, stocktake, release evidence, transfer tickets and reconciliation uncertainty |
| cp_activity | first_release | actual utilities and external services | meter/invoice/service coverage | meter id; readings; dates; kWh; supplier/voltage/geography; service identity; actual handover/sample endpoint; transport legs/distance/load; boundary; supplier dataset inclusions; allocation driver; missing fields | Read actual utility and quality-service records; reconcile supplier-inclusive and local activities without overlap. Identify each missing atomic exchange before completion. No operational isotope preparation data requested. | kWh and each actual service unit separately | each record; aggregate by cohort and period | same complete period as cp_mass | actual local and outsourced quality boundary | per 1 kg reference flow | meter calibration; invoices; service declarations; supplier envelope and causal allocation evidence |
| cp_packaging | first_release | each actual packaging component | component-level physical and burden ledgers | body/closure/outer component identity; material; object id; unit mass; owner; location; opening; purchase; first non-purchase external receipt; genuine return tied to prior dispatch; outgoing; disposal; closing; supplier coverage; incurred procurement/transport/service and remaining burden | Inspect actual components and weigh or use traceable component records. Each first external receipt counts regardless of purchase or supplier inclusion. A genuine return needs same-object prior outward proof. Reconcile one entity perimeter and separate cards for each identified material/component; do not invent a pool. | kg and count separately with measured component mass | every relevant movement and stocktake | matched period, including provenance of opening stock | declared physical site/pool perimeter; offsite custody separate | per 1 kg reference flow | component specifications, weights, linked movement records, custody, invoices and supplier inclusions/exclusions |
| cp_burdens | first_release | inherited and new environmental burden | exchange-specific remaining-burden account | original object/lot; supplier dataset/reference quantity/gate; opening carry; incoming remaining incurred share; newly incurred burden; current attribution; closing carry; exclusive external/other attribution; uncertainty; allocation evidence | Trace each original burden once through receipt, storage, release, return, waste and transfer. Separate included from additional packaging, transport, analysis and utility burdens. Do not charge an entire opening stock purchase again or treat first non-purchase receipt as burden-free. | each original exchange unit retained | each burden event; period close | same cohorts and all relevant carried history | same chemical/component boundaries with explicit external transfers | per 1 kg reference flow | supplier dataset provenance and compatibility, burden-transfer ledger, completeness and double-count review |
| cp_samples | first_release | actual external samples and same-site retains | sample custody ledger | original lot/cohort; pre/post-release status; dispatch/return id and times; custodian/site boundary; external net mass; retained-stock location; actual analytical endpoint; service-included waste/burden | Distinguish onsite retention from external transfer; weigh each actual outward/return movement. Unreleased return is a separate subgroup of I; unchanged released return is G. At external consumption use the documented service endpoint; no onsite transformation or invented loss. | kg | each actual sample movement and stocktake | original cohort through actual endpoint | physical site perimeter, external service custody separately identified | per 1 kg reference flow | custody tickets; calibration; lot history; service endpoint and inclusion proof |
| cp_released | released_stock | G, J, D and actual released sample removal | original-cohort post-release physical and burden ledger | lot and original release Q_origin; R0; internal current Q; G and prior outward proof; J and outside provenance; R1; D; actual L endpoint; component tare; uncertainty; inherited remaining burden | Reconcile each gross physical movement and stock; never infer Q from G/J/D. Retained samples stay R1. Keep J separate by its outside original cohort and preserve burden history. Record raw quantities if current Q is zero. | kg | every actual post-release movement and period close | original cohort, including later zero-release periods | same declared perimeter as chemical stocks; external custody explicit | per 1 kg reference flow | original release genealogy; inventory; linked return/outward tickets; burden-transfer receipts |
| cp_released_activity | released_stock | actual subsequent utilities and services | original-cohort incremental service account | original cohort; actual kWh; meter/readings/dates; electricity supplier; actual service/transport/packaging exchanges; causal attribution; upstream inclusions; current Q; original Q_origin; missing fields | Measure later-service increments separately from release-stage and supplier-inclusive activities. Assign each incurred exchange once to the original cohort; do not treat lack of current release as zero activity. Keep a separate service result if original denominator is unavailable. | kWh and each actual service unit separately | each record and period close | later periods tied to original release cohort | actual downstream stock/service site and identified external envelopes | per 1 kg reference flow | meter and invoice evidence; causal attribution; original denominator and double-count audit |

### Calculation Rules

Q is the independently recorded first-release mass; the balances below are checks, not devices for deriving fictitious production from shipments or inventory differences. Symbols name physical accounts, not fabricated observations.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_release | all inventory rows | For positive eligible first-release Q, divide only its attributable release-cohort exchanges by Q kg; preserve numerator units and the 1 kg reference denominator. G/J/D and later-service exchanges do not enter a new production account. With current Q zero or missing, retain actual unnormalized mass and burden records, never divide by Q and never discard incremental services. Link later increments to their original cohort; normalization is permitted only against that cohort’s verified positive original release mass Q_origin, kept separate by cohort. If Q_origin is unavailable, disclose a separate unnormalized service result and unresolved denominator; no completed normalized dataset. | cp_mass; cp_activity; cp_burdens; cp_released; cp_released_activity | exchange per 1 kg reference flow | eu-pef-2021-corrected |
| prerelease_balance | all datasets | U0 + I = Q + U1 + S + W + T. U0/U1 include all inside-perimeter pre-release chemical stock, including same-site retained samples; internal moves do not change them. I is gross actual external never-prior-released receipt, with unreleased sample returns in a separately identified subgroup; S is gross actual external sample transfer, not onsite retention or consumption. W is actual other outward chemical waste/loss; T is unreleased external product transfer. Record each external sample endpoint in cp_samples; do not count service waste in both S and W. Investigate residual against measurement uncertainty. | cp_mass; cp_identity; cp_samples | pre-release physical closure | |
| postrelease_balance | all datasets | R0 + Q + G + J = R1 + D + L. R0/R1 are released opening/closing stocks; G is genuine old released-product return; J is other external already-released receipt; D is actual outward shipment/transfer; L is other actual documented outward released-material removal, including external samples, with each endpoint separate from D. Same-site retained released samples remain in R1; no onsite transformation is assumed. Q leaves the pre-account and enters this post-account identically and cancels when combined. R0, G, J and D never create Q. | cp_mass; cp_identity; cp_released; cp_samples | post-release and combined physical closure | |
| component_balance | actual packaging components | For each component, opening + purchased first receipt + first non-purchase external receipt + proven same-object return = closing inside the declared perimeter + actual outward movement + disposal + other documented removal. Internal moves cancel; classify each external receipt once. Counts convert to mass only using the measured same-component unit mass. Reusable offsite objects are outside inside-stock counts. | cp_packaging | component physical closure without invented quantities | eu-pef-2021-corrected |
| burden_balance | all datasets | Opening carry + external incoming remaining incurred share + genuinely new burden = current attribution + closing carry + mutually exclusive external transfer/other attribution. Reconcile in each original exchange unit, per original object and cohort. Preserve chemical and packaging history separately; no repeated full background burden on return, retest or repacking. | cp_burdens; cp_packaging | once-only environmental burden closure | eu-pef-2021-corrected |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference_product | Require exact labelled product flow and verified native property/unit chain before actual linking; ordinary carbonate is not equivalent. Keep lot composition and atom fraction separately. | Original supplier lot records and direct flow read; sigma-carbonate-492027; cil-carbonate-sds-2017 |
| dq_gate | first_release | Prove never-prior-released status, actual first release responsibility and outsourced handover. Do not infer an eligible site or production route from sale or retest policy. | cp_identity; original release genealogy |
| dq_inventory | all datasets | Resolve packaging components, service envelopes and every actual environmental exchange; distinguish missing, justified absence and measured zero. No inferred emission factors, operating conditions, yields or quantitative ranges. | cp_activity; cp_packaging; cp_burdens; supplier dataset audit |
| dq_services | released_stock | Retain raw G/J/D/L, stocks and incremental services at zero current Q; attribute only to the original cohort and a verified positive Q_origin or disclose an unnormalized service result. Conditional card exclusion needs actual absence evidence, not a guessed zero. | cp_released; cp_released_activity; cp_samples |
| dq_time | all datasets | Declare actual period/geography/technology, meter and mass uncertainty and sampling/retention status; a historical SDS or support XML is not a current platform/lot observation. | cp_identity; cp_mass; source editions and supplier compatibility assessment |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | all datasets | Reject labelled-product modelling with ordinary carbonate/calcite identity or natural-range reference carbonate. Verify one exact reference output, native property/unit support and all required qualifiers; missing product UUID remains a linking gap. | wco-hs2022-ch28; sigma-carbonate-492027; iaea-610 |
| validation_gate | all datasets | Reject first-release applicability if actual lot history cannot establish Q or shows already released bulk. Packing on demand, a new vial, purchase, resale or re-test cannot renew Q or upstream manufacturing burden. Require responsible-party and actual outsourced-handover evidence. | sigma-carbonate-492027; cil-retest-2025 |
| validation_mass | all datasets | Require Q greater than zero and both chemical ledgers to close within documented uncertainty; cancel Q across accounts. Keep retained samples, returned chemical, waste and released stock mutually exclusive. An unclosed difference is a finding, not an emission or new product. | |
| validation_packaging | all datasets | Require actual component identities, atomic cards, physical stocks/movements and inherited/new burden coverage. Distinguish purchase, first non-purchase receipt and proven genuine return regardless of supplier inclusion. Missing supplier evidence blocks completeness rather than erasing the exchange. | eu-pef-2021-corrected |
| validation_burdens | all datasets | Require product-compatible closed-box upstream coverage and separate once-only chemical/packaging history balances; reconcile local and outsourced activities. No full-footprint, usable background or zero-burden claim while coverage gaps persist. Numeric closure does not establish allocation validity or scientific approval. | eu-pef-2021-corrected |
| validation_services | all datasets | Require gross G/J/D and external sample interfaces when they occur; preserve same-site retained sample stocks. Reject current-period division at zero Q, lost incremental services, cohort mixing or renewed full background burdens on old returned/retested stock. A separate downstream service account never creates Q. | cil-retest-2025; eu-pef-2021-corrected |
| validation_units | all datasets | Reject isotope atom percent as whole-product mass fraction and unverified supplier-energy property inference. Check kilogram conversion, net mass/tare, actual Q and each numerator's unit independently. | sigma-carbonate-492027 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Conditional prospective foreground methodology; a completed independently reviewed dataset may serve as secondary_dataset or background_dataset only for its declared gate |
| downstream_use | Exact labelled-carbonate supply modelling after first-release applicability, UUID, upstream and inventory completeness are independently established |
| allowed_use | Prepare collection and review evidence; subsequently link only the exact compatible product/gate and disclose remaining uncertainty |
| excluded_use | Current incomplete inventories as completed backgrounds; classification-wide manufacture; retail splitting as new production; internal isotope preparation instructions; radioactive/nuclear use; ordinary-carbonate substitution; automatic PEF conformity |
| required_metadata | All reference qualifiers; lot genealogy and responsible release; Q; boundaries and two stock ledgers; native flow/property/units; supplier and service envelopes; component/burden ledgers; period/geography; allocation and uncertainty |
| required_quality_disclosure | Separate structural checks, unresolved flow/packaging/supplier/gate evidence, scientific review and empirical qualification. Authored rules and source identities are not observed factory data or methodology approval. |
| update_trigger | Verified lot release/certificate or actual gate changes; direct flow identities; supplier/component/service coverage; route/specification or period/geography changes; independent review |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Version 3 explanatory notes, 30 June 2025, PDF p161; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Frozen 34260 title and neighbours 34240 / 34250 / 3427; no product process or quantity. |
| unsd-cpc3-2026 | official_guidance | UNSD CPC3 explanatory notes, 23 October 2026, CPC3 row 1429 A:D; https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | Same 34260 title and HS 2022 heading 2845 linkage. Supplemental classification context only; no frozen-source mutation. |
| wco-hs2022-ch28 | official_guidance | WCO HS 2022 chapter 28, Note 6 final paragraph, heading 28.45; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0628_2022e.pdf?la=en | Tariff identity distinction for modified isotopic composition; no isotope preparation or process data. |
| sigma-carbonate-492027 | handbook | Sigma-Aldrich calcium carbonate-13C, product 492027, product page accessed 22 November 2026; https://www.sigmaaldrich.com/US/en/product/aldrich/492027 | Labelled chemical identity, solid state and catalogue 99 atom-percent specification; product-specific Packaging section allows on-demand packing from bulk. No actual lot, chemical assay, first release, container material or manufacturing burden. |
| naviaux-calcite-2019 | literature | Naviaux et al. (2019), Temperature dependence of calcite dissolution kinetics in seawater, Methods §2, PDF p3; https://par.nsf.gov/servlets/purl/10123239 | Independent actual purchase of labelled powder SKU 492027. Only this purchase observation is used; postpurchase laboratory sample preparation/dissolution is outside the release boundary. No first-release, manufacturing inventory or second-supplier evidence. |
| cil-carbonate-sds-2017 | handbook | CIL CALCIUM CARBONATE (13C, 99%), CLM-7564 SDS, v3.0, 23 May 2017, §§1–3 and physical-state fields §9; https://isotope.com/product/attachment/CLM-7564-1/SDS%20-%20CLM-7564.pdf | Corresponding labelled single substance and solid powder; not classified under the stated systems in this edition. Unlabelled CAS/EC entries are expressly qualified in the original. No lot certificate, current universal hazard assurance, chemical purity assay, first release or environmental inventory. |
| sigma-product-dating-2016 | handbook | Sigma-Aldrich, Product Dating Information Statement, 9 March 2016, p1 introductory paragraph and Recommended Retest Dated Products; https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/marketing/global/documents/178/822/product-dating-information-statement.pdf | Historical general quality-date definitions: quality release follows analytical compliance review; later retest dates may change. Distinguishes events, not an actual 492027 batch certificate, original manufacturer first release, current universal policy or environmental inventory; source-supplier prior release remains to be traced. |
| cil-retest-2025 | handbook | Jeffrey Drew, CIL North America ISO Quality Manager, Implementation of Retest and Expiration Dates on Certificates of Analysis, 15 July 2025, p1; https://isotope.com/content/files/images/retest%20and%20expiration%20dates%20on%20coas%20july%202025.pdf | Distinguishes retest and expiry dates for unopened correctly stored material; post-2023 CoA policy is not a specific batch history, actual expiry, new production or environmental dataset. |
| iaea-610 | official_guidance | IAEA-610 carbonate reference material, product description and stable-isotope reference information; https://analytical-reference-materials.iaea.org/iaea-610 | Natural-range isotope-calibration carbonate counterexample: metrological status or delta value alone does not identify a deliberately labelled compound. Not a substitute flow. |
| eu-pef-2021-corrected | official_guidance | Commission Recommendation (EU) 2021/2279, consolidated corrected 23 May 2022, Annex I §§3.2.1–3.2.2,4.2,4.3,4.4.9,4.5 (reference PDF p33; reuse p79; allocation p87); https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | General reference/boundary/completeness/allocation/reuse principles only. The two chemical ledgers and object/cohort burden ledger are this PCR's declared accounting requirements, not quoted EU formulas. No product-specific inventory, rotation count, burden factor or PEF approval is inferred. |
