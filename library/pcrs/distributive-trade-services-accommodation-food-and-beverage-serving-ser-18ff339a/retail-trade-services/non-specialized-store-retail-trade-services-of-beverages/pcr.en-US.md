---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-beverages
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient manual shelf-retail services for sealed 500 mL PET bottles of still spring water

## 1. Scope and Applicability

This PCR defines a partial manual ambient shelf-retail service. Named rules fix its boundary and completion duties; its output is neither bottled-water production nor a complete store service.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-beverages |
| classification_refs | CPC 3.0 62126 — Non-specialized store retail trade services, of beverages; narrower |
| covered_products | Stated partial manual ambient steel-shelf retail service for sealed 500 mL single-use PET-bottled unflavoured still spring water, homogeneous SKU with cap/label declared |
| excluded_products | Other formats/packages, carbonated/flavoured/alcoholic beverages, generalized mineral-water legal classifications, opened/leaking route, chilling, automation, wholesale, e-commerce, on-site consumption and uncompleted full-store service |
| representative_product | Ambient manual shelf-retail services for sealed 500 mL PET bottles of still spring water; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Supplier-finished goods receipt acceptance—remove transit carton/film—hand carry individual bottles to shelf—qualified customer acceptance and original-cohort returns closure—actual segregated residual handoff |
| market_state | Original bottle sealed, not leaking, within expiry, ambient retail following supplier storage instructions; international mineral-water naming does not replace verification of local spring-water classification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Ambient manual shelf-retail service for sealed 500 mL PET bottles of still spring water |
| How much | Service for one finally qualified accepted bottle; not production of its nominal 500 mL water |
| How well | Homogeneous SKU, original intact seal, documented label/expiry, supplier storage and contractual acceptance requirements satisfied |
| How long or cycle | From specified signed receipt to final customer acceptance and original-cohort contractual return closure; late events revise original versions |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ambient manual shelf-retail service for sealed 500 mL PET bottles of still spring water |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | SKU and spring-water classification/source; 500mL PET cap/label specification; intact seal/non-leak evidence; supplier storage/expiry/acceptance requirements; site and manual ambient route; prospective pool and N/version; physical handovers/returns and final qualified IDs; original goods background and failure ownership; complete shelf configuration and lifetime ledger; actual absence evidence for chilling/powered tools/wet cleaning/leaks; partial boundary and named completion matrix; raw measurement calibration and uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | retail_service; failed_goods_background; supplier_return; external_failed | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count unique original bottles and use the same N; 500mL is specification only and is not converted into kg. Reference service and physical merchandise have different roles. |
| mass_basis | dry_wipe; shelf_asset; replacement_bolt; cardboard; shrink_film; whole_bottle_waste; used_wipe; removed_bolt; terminal_shelf | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Actual net mass, calibrated scales and disjoint carrier/component boundaries; attribute raw kg and divide by N once. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already filled sealed finished bottles of specified SKU, with original transit carton/LDPE film, at signed store receiving acceptance gate |
| starting_condition_role | foreground_input |
| product_classification_scope | Specific partial manual shelf-retail service subset for spring-water bottles within CPC62126; not all goods of groups241–244 |
| recursive_input_rule | Upstream merchandise production is not recursion of this retail service; continuing returned goods preserve original IDs/background and do not re-input one unit of the same service |
| upstream_dataset_requirement | Complete filled-goods background including transit carton/film share and inbound transport at the same receiving gate, exact provider scope; success/failure responsibility disjoint under calc_goods |
| disclosure | Partial shelf module; disclose named omitted modules, same original-cohort N, unresolved identities and terminal plans; unavailable as complete retail service |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| route | all inventory rows | Only sealed, unflavoured, non-carbonated spring water, nominal 500 mL single-use PET, cap and label specification and homogeneous SKU are eligible. Receive already bottled goods in dry corrugated cases and LDPE shrink film; hand carry individual bottles to the complete steel shelf; no carts, pallet trucks, motors, chilling, dispensing, opening, on-site re-packing or vehicle delivery inside this module. Supplier label/instructions and actual temperature/expiry/seal inspection govern acceptance; no invented temperature or legal limit. | evian-faq; evian-500ml |
| gates | all inventory rows | Start at signed store receiving acceptance; include the stated shelf operation through final qualified customer acceptance and original-cohort return closure, including failed/idle periods and residual handling. Receipt refusal before the start gate stays supplier responsibility with evidence; store-caused damage after signed receipt remains in this pool. Customer possession or payment alone is not qualified acceptance. | ghg-product-2011 |
| partial_completion | all inventory rows | This is a partial manual shelf-retail module. A full retail result MUST add identified modules for building manufacture/installation/maintenance/end-of-life, ambient lighting and HVAC electricity/refrigerant/plant, checkout/POS and communications, any trolley/pallet-truck use and capital, common sanitation/water/chemicals/drains, personnel-support/site activities, inbound transport and successful-goods production. A named responsible data producer shall keep a source-ID/module overlap matrix, identical cohort/version/N and compatible reference basis; retain failed, idle and zero-output shares. Complete shelf capital, dry wipes, replacement bolts and these waste carriers belong only here. Other modules may not include them again. No full-retail footprint claim until every required module has evidence, raw activity, allocations and disjoint handoff/readback; unknown module coverage blocks that claim. | jrc-retail-2013; ghg-product-2011 |
| absence_extension | all inventory rows | At each reporting pool and every incident, verify route absence from site walk-through, equipment register, receipts, cleaning and damage records. An opened/leaking bottle, liquid discharge, evaporation from a spill, wet cleaning, other packaging, powered handling, dedicated light or other actual exchange requires a named specific bilingual card/protocol and supported calculation before that affected pool can be complete. Retain its original event and numerator; never assign an undocumented zero, omit it or silently substitute a whole-bottle carrier. Air, sewer, captured liquid and retained stock must close by actual receiving medium; no source-to-room quantity automatically becomes exterior emission. | jrc-retail-2013 |
| carrier_background | failed_goods_background; cardboard; shrink_film; whole_bottle_waste | A received goods background is one original filled bottle plus its evidenced share of original transit case/film and inbound freight to this same gate. Successful backgrounds B_success/N are coupled downstream once; only final store-responsibility failed backgrounds B_service/N enter failed_goods_background. Supplier continuation, resale and unresolved stock keep lineage, not a second production charge or recycling credit. Waste treatment is added only at the actual collection handoff; verify whether provider includes onward transport and treatment and add a named uncovered service if needed. Carrier contents are not extra exchanges. | ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| shelf | Manual shelf and goods ledger | required | Actual eligible route | Partial operation and complete shelf capital | 1 Item(s) retail_service |
| residual | Segregated residual handoff | required | Verify occurrence/absence of each stream for whole pool | Actual carrier terminal responsibility | 1 Item(s) retail_service |

### Process: Manual shelf and goods ledger (`shelf`)

#### Inputs

##### Product flows

###### Packaged still spring water in sealed 500 mL single-use PET bottle at store receiving gate (`failed_goods_background`)

B_service/N; calc_goods; cp_goods. This is the original complete bottle background attributable to retail failure, including original cap, label, source water, bottling and inbound freight. Continuing/resale/provisional bottles are excluded from this input and retain their original background ledger.

- Selected flow: Packaged still spring water in sealed 500 mL single-use PET bottle at store receiving gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: B_service/N; cp_goods. This is the original complete bottle background attributable to retail failure, including original cap, label, source water, bottling and inbound freight. Continuing/resale/provisional bottles are excluded from this input and retain their original background ledger.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Unimpregnated cellulose paper dry wipe (`dry_wipe`)

A_wipe/N; calc_material; cp_shelf. Actual dry-wipe mass consumed for shelf dust removal; no wet wiping, chemical impregnation or spill absorbency in this route.

- Selected flow: Unimpregnated cellulose paper dry wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_wipe/N; cp_shelf. Actual dry-wipe mass consumed for shelf dust removal; no wet wiping, chemical impregnation or spill absorbency in this route.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_shelf`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Complete freestanding bolted powder-coated steel retail shelf, installed (`shelf_asset`)

sum(f_j*m_initial_j)/N; calc_asset; cp_asset. Complete frame, shelves, original feet, fasteners and coating are one weighed asset; installation and original delivery are inside its contracted background. No light, wiring, till, trolley, building or replacement bolts are inside it.

- Selected flow: Complete freestanding bolted powder-coated steel retail shelf, installed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum(f_j*m_initial_j)/N; cp_asset. Complete frame, shelves, original feet, fasteners and coating are one weighed asset; installation and original delivery are inside its contracted background. No light, wiring, till, trolley, building or replacement bolts are inside it.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Carbon steel replacement shelf bolt (`replacement_bolt`)

A_bolt/N; calc_material; cp_shelf. Actual replacement bolts fitted in the reporting pool; original factory bolts remain in shelf_asset. Hand tightening is the declared maintenance operation; any powered tool, lubricant, replacement coating or other part requires named extension before completeness.

- Selected flow: Carbon steel replacement shelf bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_bolt/N; cp_shelf. Actual replacement bolts fitted in the reporting pool; original factory bolts remain in shelf_asset. Hand tightening is the declared maintenance operation; any powered tool, lubricant, replacement coating or other part requires named extension before completeness.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_shelf`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

#### Outputs

##### Product flows

###### Ambient manual shelf-retail service for sealed 500 mL PET bottles of still spring water (`retail_service`)

1 Item(s); cp_goods; calc_reference. Exactly one finally qualified accepted-bottle service, not one litre, kg, whole sales transaction or bottle production.

- Selected flow: Ambient manual shelf-retail service for sealed 500 mL PET bottles of still spring water
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Sealed 500 mL PET-bottled still spring water returned to supplier for continuing distribution (`supplier_return`)

C_supplier/N; calc_goods; cp_goods. Physical outgoing transfer, recipient and acceptance evidenced. No waste or avoided-production credit; original background and later retail responsibility travel with unique bottle IDs.

- Selected flow: Sealed 500 mL PET-bottled still spring water returned to supplier for continuing distribution
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: C_supplier/N; cp_goods. Physical outgoing transfer, recipient and acceptance evidenced. No waste or avoided-production credit; original background and later retail responsibility travel with unique bottle IDs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Unqualified externally retained sealed 500 mL PET-bottled still spring water (`external_failed`)

F_external/N; calc_goods; cp_goods. Actual physical final failed handover retained by the recipient is not successful service or store waste. Record final state, recipient and original background ownership once.

- Selected flow: Unqualified externally retained sealed 500 mL PET-bottled still spring water
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_external/N; cp_goods. Actual physical final failed handover retained by the recipient is not successful service or store waste. Record final state, recipient and original background ownership once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

### Process: Segregated residual handoff (`residual`)

#### Outputs

##### Waste flows

###### Dry corrugated cardboard transit carton waste (`cardboard`)

W_carton/N; calc_waste; cp_residual. Weigh actual separated cartons net of reusable stock and tare; inbound carton manufacture stays in complete merchandise background, not a second purchase input.

- Selected flow: Dry corrugated cardboard transit carton waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_carton/N; cp_residual. Weigh actual separated cartons net of reusable stock and tare; inbound carton manufacture stays in complete merchandise background, not a second purchase input.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Dry LDPE beverage multipack shrink film waste (`shrink_film`)

W_film/N; calc_waste; cp_residual. Actual separate LDPE shrink film; verify polymer identity and remove cartons from weighing. No assumed pack size or film mass.

- Selected flow: Dry LDPE beverage multipack shrink film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_film/N; cp_residual. Actual separate LDPE shrink film; verify polymer identity and remove cartons from weighing. No assumed pack size or film mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Rejected sealed 500 mL PET-bottled still spring water waste with cap and label (`whole_bottle_waste`)

W_bottle/N; calc_waste; cp_residual. Actual complete sealed carrier mass including water, bottle, cap and label. Do not add contained water, PET, cap or label as other waste rows. B_service counts original bottles once, not this waste mass.

- Selected flow: Rejected sealed 500 mL PET-bottled still spring water waste with cap and label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_bottle/N; cp_residual. Actual complete sealed carrier mass including water, bottle, cap and label. Do not add contained water, PET, cap or label as other waste rows. B_service counts original bottles once, not this waste mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Dust-soiled dry cellulose paper wipe waste (`used_wipe`)

W_wipe/N; calc_waste; cp_residual. Actual spent dry wipe with collected shelf dust, net of receptacle tare. No wet wipe or beverage-spill mixture is hidden in this carrier.

- Selected flow: Dust-soiled dry cellulose paper wipe waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_wipe/N; cp_residual. Actual spent dry wipe with collected shelf dust, net of receptacle tare. No wet wipe or beverage-spill mixture is hidden in this carrier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Removed carbon steel shelf bolt waste (`removed_bolt`)

W_bolt/N; calc_waste; cp_residual. Actual maintenance removals are event waste; retained terminal bolts stay with whole shelf and must not be weighed here again.

- Selected flow: Removed carbon steel shelf bolt waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_bolt/N; cp_residual. Actual maintenance removals are event waste; retained terminal bolts stay with whole shelf and must not be weighed here again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### End-of-life complete powder-coated steel retail shelf waste (`terminal_shelf`)

sum(f_terminal_j*m_terminal_j)/N; calc_asset; cp_asset_end. Direct net terminal weighing already excludes prior removals; do not subtract removed_bolt again. Include remaining fitted replacements and feet; no second material fraction or manufacture fraction.

- Selected flow: End-of-life complete powder-coated steel retail shelf waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum(f_terminal_j*m_terminal_j)/N; cp_asset_end. Direct net terminal weighing already excludes prior removals; do not subtract removed_bolt again. Include remaining fitted replacements and feet; no second material fraction or manufacture fraction.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_end`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| shared | all inventory rows | Directly identify the SKU/task/container first. For shared dry wipe/bolt events use recorded shelf-area-hours of all actual beneficiaries during the whole event coverage: a_i=x_i/sum(x_all); assign complete raw amount once. Include vacant reserved capacity as an explicitly assigned idle beneficiary and failed cohorts. If all drivers are zero/unknown, retain an unresolved raw pool; no automatic equal split or zero. All assigned shares reconcile to the raw total before division by N. Human metabolic energy and working time are not material exchanges; data/equipment used to execute PCR measurement are not operating inputs of the shelf. | ghg-product-2011 |
| asset_ledger | shelf_asset; terminal_shelf | Maintain one persistent complete-shelf ledger over all beneficiaries and periods. calc_asset fixes manufacture and terminal responsibility by shelf-area-hours, including reserved/idle intervals; revise prior allocations when expected lifetime changes, never restart manufacturing. Current replacement-bolt purchase/removal belongs to its actual maintenance event, not a second lifetime fraction. No substitution credit, avoided production or price allocation is allowed. | ghg-product-2011 |
| return_pool | all inventory rows | Prospectively fix one configuration/site/SKU cohort pool, its reporting dates and contractual return/acceptance closure rule before collection; retain zero-sale and failed-only periods in that pool. Late returns reopen that original version: revise N, every attributable operating/material/asset numerator, ownership and terminal fate; signed negative corrections replace old amounts, not an extra new-cohort burden. Financial-only credit does not change physical stock or qualified acceptance unless evidence changes it. A resale gets one final service and one successful background across its unique history. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | shelf | Bottle identity, acceptance, stock and background ownership | stock_acceptance_ledger | site; market region/date; supplier current SKU/bottle/cap/label composition and recycled-content records if modeled; SKU/label/photos; spring source; nominal500mL; PET/cap/label; lot; unique bottle or reconciled batch IDs; original receipt ID/count; opening/closing stock; gross handovers H; physical returns U; rework/resale links; final qualified IDs; failed/continuing/provisional IDs; recipient; ownership; signed receipt; expiry; ambient temperatures; final closure date/version; original background/provider and inlet transport scope; original receiving filled-bottle net/gross kg, dry bottle/cap/label tare/BOM, original filled contents kg and sampling uncertainty | Count scan/receipt/stock-check at receiving, every handover/return and daily shelf close; retain failed and supplier-return acknowledgements. Each original bottle is partitioned by calc_goods; nominal capacity is label specification only, not actual kg or accepted count. At receipt obtain configuration-matched supplier filled-product records/BOM or calibrate same-lot gross weighing and destructive dry component tare sampling; original fill kg is gross minus measured dry package tare, with sampling/temperature and uncertainty documented. Do not derive composition, fill kg or packaging kg from nominal500mL; obtain the original compatible complete-item production/inbound background or block background completion. Obtain customer contractual acceptance evidence and track end-of-return-window or documented final resolution. calc_reference; calc_goods; raw physical movements first, final N separate; each amount per reference flow once | Item(s); kg; degC | Every movement and daily close; closure and each late event | Complete prospective pool plus original-cohort corrections | Store receiving point, shelf and customer/supplier handoff records | per reference flow | Signed slips; scan audit; daily count reconciliation; label and instruction evidence; final customer and recipient records; background overlap matrix |
| cp_shelf | shelf | Actual dry wipes and replacement bolts | material_event_ledger | source_event_id; shelf_id; SKU/task; opening/purchases/transfers/closing dry material mass; wipe grade; bolt material/spec; fitted/removed ID; tare; scale resolution/calibration; all-beneficiary area-hours; idle shares; no-spill/no-wet-cleaning/equipment evidence | Weigh stock and actual issues/returns with calibrated balance; inspect unused versus consumed materials, hand-tightening job sheets and daily route absence. Dry-mass weighing is as supplied with actual humidity/state declared, no assumed dry fraction. Separate unrelated material grades or actual new chemicals as named cards before completeness. calc_material; assign raw totals once then /N per reference flow | kg | Each issue/return/maintenance event; daily absence; opening/closing inventory | Whole pool including idle and failure periods | Assigned shelf and disjoint source bins | per reference flow | Calibration certificate/check weights; supplier composition; stock reconciliation; job IDs and allocation ledger |
| cp_asset | shelf | Complete shelf manufacture/installation responsibility | asset_lifetime_ledger | asset_id/configuration; original installation/provider scope; initial net kg; each component boundary; calibrated scale; beneficiary shelf area and reserved interval; opening date; expected total lifetime area-hours L_j; version; prior fractions; idle/failure ownership; maintenance removals/additions; terminal plan | Weigh complete installed shelf net of transport packaging before service or use traceable configuration-matched original weighing. Record actual occupied/reserved area intervals across all beneficiaries daily, including empty/closed periods; review L_j at every reporting close and confirmed retirement. No arbitrary default shelf kg or lifetime. calc_asset; complete original kg times current fraction then /N per reference flow | kg; m2*h | Initial configuration; daily exposure; every lifetime revision | Entire asset lifetime and every reporting pool | Same identified complete shelf | per reference flow | Complete provider BOM/scope; original weighing/calibration; persistent lifetime versions and summed fractions |
| cp_residual | residual | Actual separated physical waste carriers | waste_handoff_ledger | source_event/container/portion IDs; stream identity; intact seal; complete bottle count and gross/net kg; carton/LDPE/used wipe/bolt kg; tare; opening/closing stored waste; transfers; recipient; destination/treatment; provider transport/treatment scope; shared all-beneficiary driver; scale calibration | Segregate each named stream at shelf and weigh every actual handoff and stored balance on calibrated scales. Whole sealed bottle waste is one carrier; count links to original failed IDs and weigh entire contents without nominal-volume-to-mass assumption. Document absence with inspections and collection manifests, not missing invoices. calc_waste; physical stock closure before allocation and /N per reference flow; no contained-component double count | kg; Item(s) | Each waste event/handoff and opening/closing storage | Entire original cohort including late return fates | Shelf collection point through documented receiver handoff | per reference flow | Weigh tickets; receiver receipt; calibration; polymer/BOM records; original bottle-ID and container-portion reconciliation |
| cp_asset_end | residual | Whole terminal shelf carrier and life responsibility | terminal_asset_ledger | asset_id; actual retirement; whole remaining carrier net kg; tare; retained feet/bolts/replacements; removal IDs; actual lifetime area-hours and all beneficiaries; final fraction versions/corrections; receiver; treatment/provider scope | At actual retirement directly weigh complete remaining shelf net, reconcile past event removals and additions by IDs and link its verified receiver. No terminal waste is invented at an arbitrary reporting close; reserve disclosed expected responsibility with actual planned carrier boundary until retirement confirms mass and f_terminal, then revise original versions. Unknown terminal data remain provisional. calc_asset; actual complete net carrier times f_terminal then /N per reference flow, exactly once | kg; m2*h | At confirmed retirement and each plan/revision review | Whole asset lifetime and original beneficiary versions | Same asset at actual waste handoff | per reference flow | Terminal weigh/calibration; transfer manifest; original and replacement-component reconciliation; final lifetime sum |
| cp_completion_operations | shelf | Collection view for separately completed common premises, lighting/HVAC, checkout and personnel-support modules | completion_meter_task_ledger | source_event_id; module/component/circuit/provider ID; original cohort/N/version; complete parent and submeter circuit map; actual opening/closing readings and units/calibration; direct SKU/task readings; covered dates; all beneficiary floor-area/reserved-idle hours; checkout task seconds and declared idle-capacity assignment; staff-support presence/task/standby seconds; actual refrigerant species, raw charge/recovery/air-capture stocks and transfers; factory-charge provider boundary; exterior flux and receiver evidence | Collect disjoint actual site records for each omitted module and retain their exact flow/provider definitions; this view creates no generic exchange in the shelf inventory. Subdivide/direct-meter first, then apply completion_operations to measured residuals. Record every operating, closed, failed and idle interval and every refrigerant event; inspect absent processes with equipment/incident records. Quantities unknown remain unresolved. per reference flow | native meter units; kg; m2*h; s | Each meter interval/task/incident; whole-pool opening/closing | Same prospective cohort and every original-version correction | Disjoint documented external completion modules at the same store | per reference flow | Circuit containment; calibrated meters; floor/time/task logs; complete-beneficiary and provider-overlap reconciliation |
| cp_completion_housekeeping | residual | Collection view for separately completed common housekeeping water, specific chemicals and whole effluent | completion_liquid_carrier_ledger | source/event/container/portion/module IDs; inlet and drain meter boundaries/readings; actual density/temperature; every declared cleaning formulation and chemical concentration/mass; cleaner/product dissolved portions; measured stored water/liquid stocks; reuse circuit; evaporation/capture/other discharge measurements; exported retained portions traced to this liquid pool, excluding newly added outside dry cloth/container mass; beneficiary cleaned-area/pass records; whole effluent recipient/treatment and provider scope; exclusive direct-or-reconstruction mode | Measure inlet imports and each actual chemical separately, and weigh or meter actual entire discharged liquid. Apply completion_housekeeping; do not infer whole effluent from a water-only balance. Keep drain-sharing portions disjoint from any other actual carrier; instrument calibration, measured solution composition and absence/incident coverage are required. Add specific cards in the completed module, not a generic combined cleaning row here. per reference flow | kg; m3; kg/m3; degC | Each cleaning/chemical issue and discharge; opening/closing stored liquid | Same whole pool including closed, failed and late correction periods | Mapped site inlet, cleaning points and actual drain/receiver gates | per reference flow | Inlet/drain map; calibration; cleaner supplier composition; measured complete liquid balance; unique container portions and receiver tickets |
| cp_completion_assets | shelf | Collection view for disjoint omitted capital and maintenance modules | completion_asset_event_ledger | module/asset/component/provider/contract IDs; exact complete asset configuration and manufacturing/installation boundary; initial contained fluids/parts; actual original quantity/BOM/weighing; current/past/remaining lifetime driver and all beneficiaries/idle; version/correction/residual ledger; actual terminal carrier and receiver; maintenance event date/support interval; homogeneous contract/service type/package version/unit; included parts/utilities/technician travel/removed-part treatment; excluded items and overlap IDs | Obtain actual complete asset/service definitions, original and terminal measurements, maintenance work orders and lifetime records; use completion_assets. Provider scope must be verified before choosing one complete package or disjoint named components. Heterogeneous event counts cannot stand in for a homogeneous contract unit. Collect original-cohort signed revisions across every beneficiary; no reset at a new report. per reference flow | actual defined asset/service unit; kg; m2*h; s | Initial acquisition/configuration; each event/report/revision; actual retirement | Full asset lifetime and each original cohort version | Documented completed building/HVAC/POS/handling/support assets, disjoint from shelf | per reference flow | Complete BOM/provider contract; original/terminal weighing; event scope; whole-life fractions and correction/reconciliation records |
| cp_completion_transport | shelf | Collection view for actual omitted inbound/return/handling transport | completion_route_handling_ledger | source/trip/leg/task/vehicle/module/provider IDs; all consignments and actual loaded kg at each leg; actual leg km including empty legs; fuel/electricity/idle readings and provider tkm/vehiclekm boundaries; actual stationary idle/standby interval duration and reserved capacity; shipment gate; original goods IDs/background owner; loaded and empty positioning/return handling seconds; reserved idle intervals; all beneficiaries; maintenance/capital/service inclusions | Collect actual route/load and operating logs or verified provider activities, not straight-line guesses. Apply completion_transport; prove which measured empty/idle legs the provider activity covers. Human individual-bottle carriage in the declared shelf route remains without a machine exchange; any separately completed handling equipment uses actual loaded plus empty time and its own disjoint asset record. per reference flow | kg; km; t*km; vehicle*km; s; actual fuel/energy units | Each trip leg/task/idle period and pool boundary | Same original goods/cohort pool including failures and returns | Exact supplier-to-receipt or actual return leg and documented handling route | per reference flow | Route/GPS/odometer and loading evidence; calibrated fuel/energy; all-beneficiary load and empty coverage; original background overlap matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | retail_service | N = count(unique finally qualified accepted original bottle IDs after original-cohort returns/resale closure). H and U are gross physical counts, not N. Return/resale does not create multiple services for the same original bottle. N must be positive for normalization; N=0 retains the entire raw pool and required reassignment/aggregation within the prospectively fixed identical configuration, never a fictitious 1 or omitted pool. | H; U; final_ids; cp_goods | N | ghg-product-2011 |
| calc_goods | failed_goods_background; supplier_return; external_failed | O_original comprises only unserved original opening bottles; R_original counts first receipts of previously uncounted original bottles, excluding physical returns/resale loops. Original bottle partition: O_original + R_original = B_success + B_service + B_continue + B_open; B_service = F_store + F_external; B_continue includes evidenced supplier-return with named next owner; other actual transfer C_other requires its own named card and protocol before completeness, and unresolved ownership remains provisional; B_open is unresolved store stock. B_success=N only because the same original sealed homogeneous bottle survives to qualified acceptance, evidenced by unique IDs and seal checks; no 500mL-to-kg equality. A failed later-resold bottle leaves F and enters success once, with original background corrections. Gross physical stock independently: S_open + R_gross + U = S_close + H + C_supplier + C_other + W_count; externally retained failures are already in H, never subtract F_external again. Reconcile old-customer returns to original IDs, not fresh receipts. B_service/N goes to failed_goods_background; B_success/N complete original goods background is added downstream once. Unknown final ownership remains B_open/provisional with blocked closure; financial refunds alone alter neither balance. | original_ids; ownership; stock; H; U; cp_goods | B_service; B_success; C_supplier; F_external | ghg-product-2011 |
| calc_material | dry_wipe; replacement_bolt | Raw consumed kg = opening usable kg + receipts kg + inward transfers kg - closing usable kg - outward usable transfers kg. Reconcile to weighed actual consumption/fitted events. Assign direct or a_i shared-event share once to obtain A_wipe or A_bolt, then /N once. Used-wipe dust mass need not equal purchased dry-wipe mass; actual waste is independently weighed. | material_stock; event_share; N; cp_shelf | A_wipe/N; A_bolt/N | ghg-product-2011 |
| calc_waste | cardboard; shrink_film; whole_bottle_waste; used_wipe; removed_bolt | For each disjoint carrier: generated kg + opening stored kg + actual inward kg = outgoing handed-off kg + closing stored kg + actual outward other transfer kg. Inventory quantity W_stream is attributed actual outgoing carrier kg for its measured recipient and treatment; disclose remaining storage with original future treatment responsibility. Use unique container/portion IDs; destination shares, if used, sum to 1 and multiply carrier amount once only. Full sealed carrier mass is measured, never label500mL*density. Whole-bottle W_count matches store-failed original IDs; external failed retained goods are not W_count. | waste_stock; handoff; recipient; N; cp_residual | W_carton/N; W_film/N; W_bottle/N; W_wipe/N; W_bolt/N | jrc-retail-2013 |
| calc_asset | shelf_asset; terminal_shelf | For asset j, x_j,p = sum(reserved shelf area_m2 * actual interval_h assigned to beneficiary pool p); L_j = prospectively documented expected lifetime sum of all beneficiaries x, including unoccupied reserved/idle time assigned to its responsible pool. Require L_j>0 with actual lifetime planning evidence; otherwise retain an unresolved asset pool. f_j,p=x_j,p/L_j; all versions sum fractions <=1 with a full future residual ledger. At lifespan revision replace all old f versions and record signed corrections against original pools; do not purchase the asset again. At retirement L_actual=sum(all actual x); f_terminal_j,p=x_j,p/L_actual and final revised manufacture fractions use that same full-life denominator; reconcile summed final fractions=1 and replace previous estimates. Manufacturing quantity=sum(f_j,p*m_initial_j)/N; actual terminal quantity=sum(f_terminal_j,p*m_terminal_j)/N once; do not multiply manufacture and terminal fractions together. Direct net terminal weighing excludes removed parts already; no additional subtraction. Prior manufacture burden is corrected by difference only. | x_j,p; L_j; m_initial_j; m_terminal_j; N; cp_asset; cp_asset_end | asset_kg/N; terminal_kg/N | ghg-product-2011 |
| calc_complete | all inventory rows | Each inventory amount uses an unnormalised original raw quantity, then disjoint attribution, then one division by the same N. No volume-to-mass, moisture, concentration, density or count-to-kg conversion is a default. Use calibrated actual net weighing for mass rows, labelled nominal capacity only to identify bottles. Before full-retail aggregation convert any external kg service by a measured matching sealed-bottle kg per finally qualified bottle with method, sample and uncertainty; never equate unlike package/state/service scopes or reuse already normalized numerator totals. | raw_quantities; attribution; N; cp_goods | coherent quantities per reference flow | ghg-product-2011 |
| completion_operations | all inventory rows | For each actual omitted lighting/HVAC/checkout/support utility circuit, first assign direct measured beneficiary quantities. For a parent containing the verified child meters, R_parent=P_parent-sum(disjoint included children); subtract each included child once only. An independent disjoint meter is unchanged. Allocate residual lighting/HVAC quantity by a_i=(floor area_m2*covered reserved hours)_i/sum(all actual beneficiary area-hours), including assigned idle/closed/reserved capacity. Checkout residual uses b_i=(actual task seconds_i+assigned declared idle-capacity seconds_i)/sum(all beneficiary task+idle-capacity seconds). Personnel-support residual uses measured attributable staff task/presence seconds plus assigned standby seconds, reconciled over all site beneficiaries. Idle capacity is recorded and assigned to the prospectively responsible pools by their reserved capacity/time, not erased or assigned only to sales. Unknown/zero total driver leaves an unresolved raw pool. Each circuit assigns all raw units once, removes only proven containing-side provider overlap, converts units on measured documented bases, then divides by original corrected N once. Actual fuels/heat and refrigerant species need their own specific exchanges in the completed module. For each refrigerant close physical raw circuit first: L_internal=opening charge+external makeup+reused recovery-closing charge-circuit recovery-other contained transfer. Commissioning factory charge belongs once to asset-contained opening stock/provider manufacturing, not a second purchased makeup input. Recovery-store opening+circuit recovery=recovery-store closing+sent recovery+reused recovery+other contained transfer, with unique source portions. Exterior species emission E=L_internal-net air storage change-net captured storage change-captured-air export; actual capture is disjoint from circuit recovery. Independently verify actual exterior inlet/outlet flux/background at consistent T/P/wet-dry units; room release is not automatically E and unknown capture/storage is not zero. Allocate only after raw closure; record whole transferred carrier and species portions without duplication. | meter_map; direct_readings; area_hours; checkout_seconds; staff_seconds; refrigerant_stocks; N; cp_completion_operations | disjoint completed utility quantities/N | ghg-product-2011; jrc-retail-2013 |
| completion_housekeeping | all inventory rows | Use actual imported water M_import=V_in*rho_in at measured temperature; an inlet import meter already excludes internal reuse, so never subtract reuse again. Record each actual cleaning formulation/chemical separately by net consumed mass and measured composition/concentration; background already including its ingredients is not supplemented by those same ingredients. For shared cleaning assign direct tasks first; remaining event quantities by actual cleaned floor area_m2*actual pass count over every beneficiary, including closed/failed/reserved areas actually cleaned. Choose mutually exclusive effluent methods: (A) actual outgoing whole-liquid M_eff=V_drain*rho_eff (or direct net weighing), with no second evaporation/storage deductions; (B) whole-liquid kg balance M_eff=M_import+M_other_actual_liquid+M_dissolved_actual_material+S_open-S_close-M_actual_evaporated-M_other_disjoint_outgoing_liquid-M_retained_export, with every term measured at consistent whole-carrier boundaries. M_retained_export means only the measured liquid or solid portions originating in this source liquid pool and exported within another actual carrier; exclude newly introduced outside dry cloth, container and other carrier mass. Its exported source portions are mutually exclusive with other liquid exports and closing retained stock at the same closure. Opening/closing quantities remain the separately time-stamped stock terms of this balance, never an additional retained-material deduction. Subtract each exported source portion once only, never again as a second solids deduction. Internal reuse cancels inside this boundary. Whole incoming cleaning solutions are in M_other_actual_liquid including their existing solutes; M_dissolved_actual_material contains only newly introduced dry material not already inside any measured liquid/carrier term. Include solutes and merchandise portions once, never infer full liquid from a water-only volume balance or multiply it by unrelated density. Condensate, capture, stored liquid and common-drain portions have unique mutually exclusive source/container IDs. Allocate raw carrier once then /N; destination fractions sum to1 and apply once. Unknown terms or drain coverage block completion. | inlet_water; actual_chemicals; direct_effluent; liquid_stocks; retained_export_source_portions; cleaned_area_passes; N; cp_completion_housekeeping | completed water/chemical/whole-effluent quantities/N | jrc-retail-2013; ghg-product-2011 |
| completion_assets | all inventory rows | Use disjoint complete-asset ledgers: building shell/fixed fabric excludes shelf, HVAC plant, dedicated lamps, POS and handling equipment; HVAC plant includes its evidenced original integrated controls/refrigerant charge and excludes building/POS/handling; POS includes defined terminal/printer/scanner/network package only with exact provider component boundary; each actual trolley/pallet-truck is a separate complete asset, including original contained fluid where evidenced. Dedicated lighting/support assets require their own named definition if outside those packages. Never include shelf_asset, replacement_bolt, dry_wipe or their waste again. For building/HVAC/lighting use all-beneficiary reserved floor-area-hours; POS uses task plus assigned idle-capacity seconds; handling uses actual loaded+empty positioning/return seconds plus assigned reserved-idle seconds; personnel-support assets use staff presence/task plus assigned standby seconds. For asset j, L_j=current confirmed past lifetime driver+documented expected remaining driver across every beneficiary, including idle; require L_j>0. f_j,p=current original-pool driver/L_j; complete original manufacture/installation quantity times f_j,p is assigned once. Revisions replace prior fractions by signed delta on each original cohort, preserving cumulative sum<=1 and explicit future residual, never resetting acquisition. At actual retirement use full actual lifetime sum and f_terminal_j,p=original-pool driver/full actual driver, reconcile final fractions sum=1, replace prior estimates and multiply the actual complete net terminal carrier by f_terminal once only, never again by manufacturing fraction; direct net terminal weighing already excludes prior removals. Initial fluid/parts are inside original package; later additions and removed components are separate actual events, and retained terminal components remain inside complete terminal carrier. Maintenance is separately recorded as an exact homogeneous actual contract_id/work_scope/service_type/package_version/unit and supported event interval. Direct event attribution first; common event shares use the relevant asset driver over its documented support interval for all beneficiaries, then divide by N. Different work scopes must be stratified into named compatible cards/services, not generic event-count Items. Verify included parts, utilities, technician travel and removed-part treatment and remove overlap from one proven containing side; do not mechanically split an evidenced complete package. Unknown coverage/driver/carrier/contract basis blocks completion. | asset_boundary; past_driver; remaining_driver; current_driver; initial_quantity; terminal_quantity; maintenance_contract; support_interval; N; cp_completion_assets | completed asset/maintenance/terminal quantities/N | ghg-product-2011 |
| completion_transport | all inventory rows | First verify each provider/goods background gate and included inbound/return transport, manufacture, energy, maintenance and treatment. Original-goods inbound freight remains with the one original bottle background under calc_goods and must not be added again. For uncovered actual transport the exclusive mode is fixed by evidence: use complete measured actual vehicle fuel/energy logs across all loaded, empty and idle legs whenever available, allocated by verified provider all-consignment responsibility; only when complete direct logs are unavailable use a compatible verified provider vehicle-distance/freight activity covering those exact legs with no duplicate fuel; absence of both blocks completion. Raw laden leg tkm=sum(actual carried consignments kg/1000*actual leg km); keep actual empty leg vehiclekm>0 even though tkm=0. Allocate actual laden freight burdens by consignment tkm across all beneficiaries; For moving empty/return legs, allocate burdens by documented reserved vehicle capacity*actual leg distance only when that actual predeclared contract assigns reserved capacity. For stationary idle/standby intervals under that reservation contract, allocate actual nonzero fuel/energy by reserved vehicle capacity*actual interval duration, never by zero distance. Each mode retains a positive sum of its actual all-beneficiary driver; unknown durations/capacity or zero/unknown total driver leave that raw pool unresolved. Without evidenced reservation, allocate both moving empty/return and stationary idle burdens by the actual route consignments outbound laden tkm with a positive all-beneficiary denominator; actual idle fuel/energy remains in that assigned route total. Record the contractual mode before collection; it is not a discretionary downstream choice. If a route has no loaded consignment and no evidenced reservation driver, retain its raw fuel/vehiclekm unresolved, never erase or assign zero. Provider tkm coverage must explicitly include observed empty/idle legs; if absent add a named compatible empty-vehicle-distance service once, removing overlapping legs and fuel. Handling equipment activity is actual loaded+empty positioning/return time plus declared reserved-idle time, shared over all beneficiaries using the same complete task/time pool; weight-zero handling never disappears. Capital/maintenance are disjoint under completion_assets and provider inclusion. Original failure/return duties stay with their original ownership/version and every final quantity divides corrected original N once. Unknown route/provider/empty coverage blocks completeness. | route_legs; actual_loads; vehiclekm; tkm; fuel_energy; stationary_idle_duration; reserved_capacity; loaded_empty_idle_seconds; provider_scope; N; cp_completion_transport | completed transport/handling quantities/N | ghg-product-2011; jrc-retail-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_completion | all inventory rows | Each concrete flow is presently unbound. Before dataset completeness, bind its exact material/service, direction/type, whole-carrier boundary, state and receiver to an official original flow response and matching hash receipt; verify property/unit/compartment and official bilingual names. If no compatible flow exists retain unresolved status; a search match is not binding evidence. Count/mass support UUIDs identify properties only, not these specific exchanges. Require actual market/region/date/SKU and current supplier bottle/cap/label specifications and recycled-content evidence if modeled: the US product page claims100% recycled plastic excluding caps/labels, while international FAQ reports40% average rPET across a range excluding caps/labels. These are different market/time/range statements, not evidence for the studied SKU; adopt neither as a default or provenance/compliance/factor claim. | Original responses; receipts; official naming and state/property/unit audit; row-specific mapping |
| data_closure | all inventory rows | Retain source raw fields, daily coverage, instrument resolution/checks/calibration, attribution versions, inventories, receipts and receivers. Explain uncertainty and signed residuals; measurement tolerance must be justified from actual instruments/sampling, not invented compliance limits. Missing, unknown, unopened/leaking status or unconfirmed non-occurrence is not zero; block affected completion until resolved with evidence. | Full ledgers; calibration; incident and absence records; quantified uncertainty and residual reconciliation |
| projection_translation | all inventory rows | All scope/gates/ownership, card amount/protocol, calculations, conditions and completion/dedup duties must exist in supported structured rules, and source and guidance readback must agree. Compare every nonempty EN/ZH business field, ordered IDs, card identity, quantity formula/input/unit and qualifier; markers do not certify methodology, official binding or independent approval. | Fresh projection/fingerprint/schema; semantic bilingual comparison and exact guidance readback |
| completion_methods | all inventory rows | The named completion protocols and equations are mandatory PCR methods for a later full-retail aggregate; the shelf boundary and its13specific exchanges remain unchanged. Collect actual quantities/providers in the separate completed modules with named specific flow cards and matching identities, not a generic missing-module flow. The responsible data producer must demonstrate every omitted module, full raw-to-driver-to-quantity-to-corrected-N chain, all-beneficiary idle/failed/zero pools, signed original-version corrections and provider/source/event/component overlap removal. Unknown inclusion, circuit containment, terminal responsibility or conversion prevents complete aggregate status. | Actual completed-module inventories and protocols; meters and containment; lifetime/event/route/carrier ledgers; exact source-ID overlap matrix and same-cohort/N/version readback |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_check | all inventory rows | Require actual same sealed bottle/SKU/route and measured absence conditions; CPC62126 is broader than this module, so use narrower mapping only after separate acceptance. No other beverages or whole-store service may be inferred. | un-cpc62126 |
| quantity_check | all inventory rows | Require positive final N, raw physical and original-background partitions, all failed/zero/late pools, one normalization, lifetime and event reconciliation, actual whole carriers and no double-counted contents, prior corrected fractions or included provider services. Any unresolved relationship or missing terminal/continuation responsibility blocks complete result. | ghg-product-2011 |
| partial_check | all inventory rows | Require explicit partial boundary and named missing-module handoff matrix in metadata. Only a separately reconciled complete module set may support full-retail use; this partial module alone cannot support complete product footprint, compliance, release or comparative claims. | jrc-retail-2013; ghg-product-2011 |
| completion_method_check | all inventory rows | A full-retail aggregate must enforce completion_operations, completion_housekeeping, completion_assets and completion_transport with their raw evidence and same corrected original N; downstream agents may collect field values and provider identities but may not select alternative allocation/denominator/asset/residual/empty-route methods silently. No full-retail completeness claim if a required named module or any actual specific card/receiver is missing. This does not add those exchanges to the partial shelf module. | ghg-product-2011; jrc-retail-2013 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset |
| allowed_use | Partial shelf service on the same sealed500mL PET spring-water bottle/manual ambient route; full retail only after partial_completion |
| excluded_use | Complete store or water life-cycle footprint, other drinks/formats/routes, compliance/publication/comparative claims, unverified identities or unresolved quantities treated as verified data |
| required_metadata | All required qualifiers; original gate, SKU, cohort/N/version, partial-boundary/completion matrix, provider backgrounds, shelf full lifetime and fate ownership |
| required_quality_disclosure | Measurement/sampling uncertainty, calibration, period/site, zero/failure/late pools, gaps and unbound identities, expected/actual terminal status, source applicability limitations |
| update_trigger | Bottle/label/spring-water classification or route changes; return/ownership corrections; leakage/wet-cleaning/powered equipment; lifetime/terminal changes; source and identity changes |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62126 | official_guidance | UNSD CPC3.0 62126, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62126 | Classification includes241–244; current scope is only a bottled spring-water service subset. Classification does not establish methodology maturity. |
| evian-faq | literature | evian international FAQ, snapshot 2026-10-27, https://www.evian.com/en_int/faq | Qualitative PET format and cool/dry/clean storage example; US500mL100% recycled plastic and international range-average40%rPET (both excluding caps/labels) refer to different market/time/ranges; neither nor old2025 targets supports default content, actual SKU composition or legal classification. |
| evian-500ml | literature | evian 500 mL natural spring water, snapshot 2026-10-27, https://www.evian.com/en_us/natural-spring-water/bottled-water/500ml | Feasibility of500mL bottled spring-water format; US naming does not replace local classification or actual SKU verification. No web mineral-composition or recycled-content factor adopted. |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN (2013), https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Scope prompts for retail energy, supply chains, logistics, packaging and waste and explicit partial-boundary disclosure; no benchmark quantities adopted. PCR-specific quantity and ownership rules are author-defined. |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters6–7,9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General service unit, transparent boundary, subdivision-first physical allocation; original-bottle ownership/return pools and shelf-area-hours are declared PCR designs, not standard-prescribed equations or complete conformity certification. |
