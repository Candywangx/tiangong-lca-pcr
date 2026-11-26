---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-yarn-and-fabrics
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Manual measure-and-cut counter retail services for white woven 100% cotton fabric

## 1. Scope and Applicability

This authored candidate defines a partial retail counter-service module for actual finished white woven cotton fabric cut from a bolt. Its service output is final usable area, never a replacement fabric-production dataset. All mandatory scope and completion duties below are machine-addressable; no numerical default or certification claim is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-yarn-and-fabrics |
| classification_refs | CPC 3.0 62131; narrower |
| covered_products | Finished white woven 100% cotton fabric sold by manual full-width counter cutting; actual supplier/finish/lot strata are separate. |
| excluded_products | Other fibres, yarn, coated/laminated, knitted or blended fabric, non-white fabric, pre-cuts and powered processing; other qualifying SKUs are separate data strata, not excluded brands. |
| representative_product | Manual measure-and-cut counter retail services for white woven 100% cotton fabric; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Supplier finished bolt → store receipt/holding → inspection/manual measure/shears → packaging/counter handover → final acceptance/actual returns and residual routing. Fabric manufacture is separately coupled. |
| market_state | Unwashed, slack, finished white woven fabric; actual lot moisture/finish, final quality and geometry recorded. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide manual inspection/measure/cut counter retail service for the specified fabric. |
| How much | 1m2 finally accepted usable area in measured final unwashed slack state, excluding selvedges and mapped rejected defects. |
| How well | Actual customer contract specification, fibre/finish/lot/geometry and qualified acceptance; no assumed legal or certification limit. |
| How long or cycle | Whole fixed receiving/service cohort through contractual final claim/return closure, with late signed corrections. |
| reference_flow_link | qualified_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Manual counter-cut retail service for finally accepted usable area of white woven cotton fabric |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | SKU and fibre declaration and woven construction and actual finish and supplier lot; actual full and usable width/length map and defects; unwashed slack measurement temperature/RH and calibration; receiving dry-finished-mass and moisture/finish method; manual full-width cut route and packaging absence/presence; start/end gate and return policy and terminal acceptance evidence; pool configuration and coverage and late-revision IDs; gross physical crossings and source-coordinate ownership; partial counter boundary and fixed completion scope matrix; outside-air cotton source/capture/path closure and uncertainty; receiver and carrier and provider duplicate-scope checks |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_area | qualified_service | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Use calc_area actual usable geometry.1m2 is not1item/1yard/nominal width. Dry background kg is independent and uses calc_source. |
| mass_rows | failed_background; band_input; bag_input; receipt_input; cotton_air; unqualified_retained; failed_transfer; fabric_offcuts; defective_fabric; lint_waste; paperboard_waste; film_waste; band_waste; bag_waste; receipt_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual whole-carrier mass or explicitly declared original dry-fabric equivalent; never substitute moisture states. No per-piece default mass. |
| electricity_energy | lamp_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert actual metered kWh to MJ by3.6 once, then divide Q once. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified finished fabric bolt accepted into store receiving ledger, full-width original coordinates and state recorded. |
| starting_condition_role | foreground_receiving_gate |
| product_classification_scope | Specific subset of CPC62131 cotton woven-fabric retail service only; narrower. |
| recursive_input_rule | Internal remnants/returns retain original IDs and background; do not recursively add another retail-service or manufactured-fabric input. |
| upstream_dataset_requirement | Verified actual receiving-state fabric production/finish/inbound background with original equivalent partition; successful background completion separate from failed_background. |
| disclosure | Partial incremental counter module; fixed excluded modules and whole-retail completion methods mandatory, candidate identities unresolved where listed. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| scope | all | Apply to finished white woven 100% cotton bolts, sold by manual measuring and shears across full bolt width in an attended non-specialized store. Any brand/SKU in this class is eligible; keep actual supplier, finish, lot and geometry separate per pool. Record supplier fibre/weave declaration, finish/size specification, bolt ID and original length/full width. Do not infer bleaching recipe, weave pattern, finish add-on, certification or areal density from the retained manufacturer example. Exclude yarn, knits, blends, laminated/coated/special or non-white fabric, pre-cut packs, powered cutting, sewing, washing, dyeing and customer delivery; changed routes need specific cards/protocols and review before completeness. | kaufman-white-k001-1387; un-cpc-62131 |
| gates | all | Start when merchant accepts identified finished fabric bolts into the store receiving ledger; include target storage/handling, inspection, measuring, manual cutting, wrapping, counter handover, actual reversals and residual routing. End at final qualified consumer acceptance after the declared contractual return/claim period and terminal responsibility for retailer residues; goods still retained or uncertain are open responsibility, not failed waste or final service. Partial module includes direct counter lamp electricity, actual counter packaging, directly traceable failed-fabric upstream burden, retailer waste/carrier transfers and attributable exterior cotton-fibre particulate flux. | ghg-product-2011 |
| partial_completion | all | This is a partial counter module, never the whole retail footprint. Before whole-retail aggregation supply fixed completion modules: common building/shelf/counter-table/shears/ruler/cutting-mat/lamp/POS acquisition-installation, maintenance and terminal treatment; premises HVAC/lighting/POS power and refrigerant releases; general cleaning and shared toilets water/chemicals/effluent; staff/office/administrative devices and their operation/assets; receiving and return transport including actual empty movements; manual handling support assets; successful merchandise production/inbound transport. Use cp_completion and calc_completion on the identical pool, final Q and event IDs. A missing module is unverified, not zero. Customer travel/use/end of life, employees commuting and human metabolism are outside the declared retail service. | ghg-product-2011 |
| commodity_ownership | failed_background; qualified_service | The retail reference is a service, not newly produced cloth. Track every original bolt coordinate to exclusive final accepted, failed-service, continuing-transfer and open portions. Allocate original-gate fabric and its inbound background once to those portions using measured original full-width dry-fabric mass including finish and delivered selvedges; never kg of final ambient cloth by default. Successful portion B_s/Q is attached once by downstream completion; only B_f_service/Q enters failed_background here. Supplier returns/open transfers retain named continuing owner and original burden; do not erase or duplicate it. Continuing re-sale carries original background without generating another fabric-production input. | ghg-product-2011 |
| materials_conditions | all | Confirm actual packaging: optional uncoated kraft-paper band without adhesive, optional pure LDPE shopping bag, thermal-paper receipt; incoming bolt former is uncoated paperboard and wrap is LDPE only when evidenced. Intact reused incoming boards remain stock, not new packaging or waste. No laundering, liquid application, solvent cleaning, powered cutting, compressed air or vacuum is included. Presence/absence requires orders, store inspection and event logs over the whole pool, including closed periods. Any actual other material, cleaning contamination, fuel, device or emission requires a specific bilingual extension and collection rule before complete use. | ghg-product-2011 |
| carriers | fabric_offcuts; defective_fabric; lint_waste; paperboard_waste; film_waste; band_waste; bag_waste; receipt_waste | Weigh actual whole carrier sent to each documented receiver and treatment, wet/as-received, with tare removed. Offcuts are clean finished-fabric pieces, defective whole fabric is separate, and loose swept cotton lint is separate. Do not also count cotton fibre, finish or moisture inside a carrier as another waste flow. Sold remnants remain goods until final acceptance; recovered offcuts retain destination and original ownership, with no automatic avoided-production credit. Shared haul/treatment is included only once in the chosen linked provider boundary; no assumed treatment or default destination shares. | ghg-product-2011 |
| air_terminal | cotton_air; lint_waste | Fabric cutting to room air is internal; only target-attributable cotton-fibre particulate crossing the final outside-store boundary is elementary emission. cp_air and calc_air require all outlet/inlet/leak regimes, actual cotton-specific fraction and blank/source attribution, retained room/surface/filter stocks and whole lint/waste exports. Do not assume generation equals outside release or unknown capture equals zero. Surface lint entering lint_waste is a carrier transfer, not a simultaneous air emission; transient airborne inventory is not final emission. Unknown exterior paths or analytical identity prevent a complete emission claim. | ghg-product-2011 |
| mapping_evidence | all | CPC62131 includes many yarn/fibre/fabric groups; this SKU service is narrower, never exact for the leaf. Manufacturer web data establish product identity only: nominal width/weight are not measured usable area, reference mass, loss allowance or default factor. The retained 2024 certificate expired31 October2025: use its woven-cotton description only as historical construction context, never current certification, legal acceptance or environmental performance evidence. Supplier/site evidence must verify the actual present lot. | kaufman-white-k001-1387; kaufman-woven-description-2024; un-cpc-62131 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receiving | Receiving-gate failed-goods background attribution | required | All actual target-pool events; optional exchanges require absence evidence. | foreground | Per1m2 final Q service; original raw units retained. |
| counter | Inspection, manual measuring/cutting and final counter acceptance | required | All actual target-pool events; optional exchanges require absence evidence. | foreground | Per1m2 final Q service; original raw units retained. |
| residual | Residual custody and continuing/waste dispatch | required | All actual target-pool events; optional exchanges require absence evidence. | foreground | Per1m2 final Q service; original raw units retained. |
| completion | Fixed downstream whole-retail completion interface | conditional | Mandatory interface before whole-retail use; external modules not present in this partial inventory. | completion_interface | Per1m2 final Q service; original raw units retained. |

### Process: Receiving-gate failed-goods background attribution (`receiving`)

#### Inputs

##### Product flows

###### Finished white woven 100% cotton fabric at store receiving gate, failed-service portion (`failed_background`)

Coupled original receiving background for the exclusive failed portion assigned to this retail pool; includes its evidenced production/finish/inbound package/legs and excludes the successful/continuing/open portion. Not total incoming cloth and not another retail service.

- Selected flow: Finished white woven 100% cotton fabric at store receiving gate, failed-service portion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_f_service/Q kg dry finished-fabric receiving equivalent per1m2 service, the source-coordinate calculation rule; linked provider must convert its actual moisture/mass/area basis explicitly, with no default1kg/kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_background`
- Sources: `ghg-product-2011`; `kaufman-white-k001-1387`

### Process: Inspection, manual measuring/cutting and final counter acceptance (`counter`)

#### Inputs

##### Product flows

###### Alternating current (`lamp_electricity`)

At point of use; voltage level and provider unspecified; reported foreground electricity use, supply technology unspecified. Dedicated inspection/cutting lamp use only; supplier voltage/grid mix and actual site remain required.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: E_lamp/Q MJ per1m2 service from actual kWh and the lamp-energy calculation rule, including assigned standby.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power`
- Sources: `ghg-product-2011`

###### Uncoated kraft-paper fabric band without adhesive (`band_input`)

Actual counter consumable of the stated material and specification. Optional non-use needs whole-pool absence evidence; no omitted unknown quantity. Keep upstream manufacture and downstream carrier fate scope explicit.

- Selected flow: Uncoated kraft-paper fabric band without adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable M_x/Q kg per1m2 service by actual issue/stock records and the consumable calculation rule; delivered packaging is not retailer waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ghg-product-2011`

###### Pure LDPE shopping bag (`bag_input`)

Actual counter consumable of the stated material and specification. Optional non-use needs whole-pool absence evidence; no omitted unknown quantity. Keep upstream manufacture and downstream carrier fate scope explicit.

- Selected flow: Pure LDPE shopping bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable M_x/Q kg per1m2 service by actual issue/stock records and the consumable calculation rule; delivered packaging is not retailer waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ghg-product-2011`

###### Finished thermal receipt paper (`receipt_input`)

Actual counter consumable of the stated material and specification. Optional non-use needs whole-pool absence evidence; no omitted unknown quantity. Keep upstream manufacture and downstream carrier fate scope explicit.

- Selected flow: Finished thermal receipt paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable M_x/Q kg per1m2 service by actual issue/stock records and the consumable calculation rule; delivered packaging is not retailer waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ghg-product-2011`

#### Outputs

##### Product flows

###### Manual counter-cut retail service for finally accepted usable area of white woven cotton fabric (`qualified_service`)

Reference retail service at contractual quality and final acceptance, including one traceable physical delivered piece history. Commodity source background remains separately coupled; exclude delivered selvedges/defects from usable area only.

- Selected flow: Manual counter-cut retail service for finally accepted usable area of white woven cotton fabric
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: 1 m2
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `kaufman-white-k001-1387`; `ghg-product-2011`

##### Elementary flows

###### Cotton-fibre particulate emitted to outside air from manual fabric cutting (`cotton_air`)

Target-specific final environmental air transfer, not cotton generated inside the store. Medium is outside air; aerodynamic size distribution, cotton-specific composition and receiving environment must be bound before using an elementary UUID.

This selected identity makes no particle-size or chemical-composition claim. Retain the measured full particle coverage and source-specific cotton/coal attribution in this card; it is not a PM2.5 or PM10 amount. Verify characterization coverage for the exact UUID and selected LCIA method separately.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: E/Q kg per1m2 service only after the final exterior-flux calculation rule exterior flux, target attribution and capture/stock reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `ghg-product-2011`

### Process: Residual custody and continuing/waste dispatch (`residual`)

#### Outputs

##### Product flows

###### Nonaccepted  white woven cotton fabric retained by external recipient (`unqualified_retained`)

Actual physical cloth retained externally without qualified acceptance after claim settlement, not a retailer waste carrier. Record actual recipient/state and source coordinates. Before known continuing owner evidence, keep original burden provisionally in the original service failure ledger and block final completeness; release only by signed evidenced reassignment.

- Selected flow: Nonaccepted  white woven cotton fabric retained by external recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual net externally retained as-received fabric kg/Q from handover minus actual returns, not a financial refund amount; zero final acceptance area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Saleable  white woven cotton fabric transferred to named continuing recipient (`failed_transfer`)

Actual physical supplier/other continuing transfer with accepted saleable state and original background ownership. Not a qualified consumer service, waste, automatic failed-service burden or new fabric production.

- Selected flow: Saleable  white woven cotton fabric transferred to named continuing recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual net dispatched as-received kg attributed once/Q, independent of B_f_continuing dry equivalent and final Q; cp_residual.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

##### Waste flows

###### Clean finished  cotton fabric offcuts sent for treatment (`fabric_offcuts`)

One actual segregated whole carrier at dispatch to evidenced treatment receiver. Preserve measured condition/composition, traceable source event and provider haul/treatment boundary. Non-occurrence must be evidenced; no assumed recycling or avoided credit.

- Selected flow: Clean finished  cotton fabric offcuts sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable net whole-carrier W_x/Q kg per1m2 service, measured cp_residual; internal contained cotton/moisture/finish is not another exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Defective finished  cotton fabric sent for treatment (`defective_fabric`)

One actual segregated whole carrier at dispatch to evidenced treatment receiver. Preserve measured condition/composition, traceable source event and provider haul/treatment boundary. Non-occurrence must be evidenced; no assumed recycling or avoided credit.

- Selected flow: Defective finished  cotton fabric sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable net whole-carrier W_x/Q kg per1m2 service, measured cp_residual; internal contained cotton/moisture/finish is not another exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Dry-collected loose cotton lint from manual fabric cutting (`lint_waste`)

One actual segregated whole carrier at dispatch to evidenced treatment receiver. Preserve measured condition/composition, traceable source event and provider haul/treatment boundary. Non-occurrence must be evidenced; no assumed recycling or avoided credit.

- Selected flow: Dry-collected loose cotton lint from manual fabric cutting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable net whole-carrier W_x/Q kg per1m2 service, measured cp_residual; internal contained cotton/moisture/finish is not another exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Uncoated paperboard bolt former sent for treatment (`paperboard_waste`)

One actual segregated whole carrier at dispatch to evidenced treatment receiver. Preserve measured condition/composition, traceable source event and provider haul/treatment boundary. Non-occurrence must be evidenced; no assumed recycling or avoided credit.

- Selected flow: Uncoated paperboard bolt former sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable net whole-carrier W_x/Q kg per1m2 service, measured cp_residual; internal contained cotton/moisture/finish is not another exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### LDPE incoming bolt wrapping film sent for treatment (`film_waste`)

One actual segregated whole carrier at dispatch to evidenced treatment receiver. Preserve measured condition/composition, traceable source event and provider haul/treatment boundary. Non-occurrence must be evidenced; no assumed recycling or avoided credit.

- Selected flow: LDPE incoming bolt wrapping film sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable net whole-carrier W_x/Q kg per1m2 service, measured cp_residual; internal contained cotton/moisture/finish is not another exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Uncoated kraft-paper fabric band without adhesive sent for treatment (`band_waste`)

One actual segregated whole carrier at dispatch to evidenced treatment receiver. Preserve measured condition/composition, traceable source event and provider haul/treatment boundary. Non-occurrence must be evidenced; no assumed recycling or avoided credit.

- Selected flow: Uncoated kraft-paper fabric band without adhesive sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable net whole-carrier W_x/Q kg per1m2 service, measured cp_residual; internal contained cotton/moisture/finish is not another exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Pure LDPE shopping bag sent for treatment (`bag_waste`)

One actual segregated whole carrier at dispatch to evidenced treatment receiver. Preserve measured condition/composition, traceable source event and provider haul/treatment boundary. Non-occurrence must be evidenced; no assumed recycling or avoided credit.

- Selected flow: Pure LDPE shopping bag sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable net whole-carrier W_x/Q kg per1m2 service, measured cp_residual; internal contained cotton/moisture/finish is not another exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Finished thermal receipt paper sent for treatment (`receipt_waste`)

One actual segregated whole carrier at dispatch to evidenced treatment receiver. Preserve measured condition/composition, traceable source event and provider haul/treatment boundary. Non-occurrence must be evidenced; no assumed recycling or avoided credit.

- Selected flow: Finished thermal receipt paper sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable net whole-carrier W_x/Q kg per1m2 service, measured cp_residual; internal contained cotton/moisture/finish is not another exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

### Process: Fixed downstream whole-retail completion interface (`completion`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| pool | all | Prospectively fix store configuration, homogeneous SKU, receiving cohorts and accounting coverage before measuring. Keep unsuccessful/idle/closed/zero-sale intervals in the same configuration pool; allocate their actual direct burden to that pool. Entirely zero-Q pools stay unresolved and unnormalized until prospectively linked same-configuration output; never discard them or assign arbitrary output. Late physical reversals revise original Q, all affected direct numerators, source-background partition and allocations using signed revision IDs. Refund without physical return or qualified-acceptance reversal does not change Q. | ghg-product-2011 |
| shared_direct | lamp_electricity; band_input; bag_input; receipt_input | Subdivide direct meters and identified material issue records first. Shared counter lamp electricity is split by actual occupied cutting/inspection bench minutes across every beneficiary including aborted work; allocate standby/reserved hours by recorded reserved bench-area-hours to all beneficiaries, not only successful orders. For no measured driver keep unassigned residual and block completeness. Packaging is assigned by actual order/issue IDs with void/return waste retained. Raw attributable totals are divided by Q once; no composition/driver factor on an already attributable quantity. | ghg-product-2011 |
| no_credits | all | No automatic co-product, recycling, sale-of-offcuts or returned-fabric credit. Source-coordinate original background follows the final responsible service/continuing recipient; internal re-cutting/resale is not a new manufactured input. Demonstrate closed exclusive responsibility before any separately reviewed substitution model; keep such a model outside this module. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | counter | qualified_service | transaction_ledger | pool_id; SKU; lot_id; bolt_id; piece_id; parent_coordinates; order_id; event_id; event_date; gross_handover; physical_return; acceptance_state; retention_state; terminal_acceptance_id; return_deadline; l_jk; w_usable_jk; A_defect_j; polygon_area; temperature; RH; signed_revision_id | At receiving/cutting/return/final acceptance record calibrated slack geometry, defect polygons and photographic parent-coordinate map; retailer obtains final customer acceptance evidence and contractual claim closure, not just POS payment. Trace re-cut remnants and repeated physical crossings without counting original area twice. calc_area, calc_source and calc_physical on original IDs; one final Q. | m; m2; event | Every physical event and claim revision. | Whole prospectively fixed pool through final return closure, including zero-sale/closed intervals and late events. | Assigned store counter and original receiving cohorts. | per 1 m2 reference flow | Invoices, signed receiving/acceptance/return records, photo maps, calibration and revision trail. |
| cp_background | receiving | failed_background | source_coordinate_ledger | bolt_id; cell_id; a_full_ic; a_sample_ic; m_conditioned_sample_ic; m_dry_ic; r_ic; finish_spec; source_background_id; provider_conversion; inbound_leg_id; u_ics; u_icf_service; u_icf_continuing; u_icopen; final_owner; recipient_state; destructive_sample_id; uncertainty | Receiving staff map full-width source cells; test representative samples stratified by lot, width/length location and finish/moisture, validated dry-mass method with check reweighs. Trace every final descendant and supplier transfer to actual receiving-gate background, transport and named owner. Do not invent supplier manufacturing composition; obtain verified production-route and normalization evidence or keep background incomplete. calc_source exclusive ownership; failed_background=B_f_service/Q, successful B_s/Q remains completion only. | kg dry finished fabric; m2; kg | Each incoming bolt/lot sample and every descendant/fate revision. | All pool receiving and subsequent fates including continuing/open stock. | Actual receiving gate and supplier-linked production/inbound responsibility. | per 1 m2 reference flow | Supplier original product records, lot tests, dry-state validation, chain of custody and background scope audit. |
| cp_power | counter | lamp_electricity | meter_ledger | meter_id; circuit_map; opening_kWh; closing_kWh; kWh_active_t; kWh_standby_t; h_target_t; h_all_t; z_target_t; z_all_t; beneficiary_id; interval_id; calibration; coverage | Read dedicated lamp plug/circuit meter at every shift boundary and state change; log actual occupied/reserved bench time for all beneficiaries with failed work. Reconcile meter coverage to parent electricity invoice; parent/submeter overlap removed only when actually contained. calc_power once to MJ and divide Q once. | kWh; min; m2*h | Each shift and state transition. | All occupied, standby and closed hours in the pool. | Actual counter lamp circuit; premises/POS covered in completion. | per 1 m2 reference flow | Meter exports, calibration, circuit diagram and all-beneficiary driver reconciliation. |
| cp_pack | counter | band_input; bag_input; receipt_input | material_issue_ledger | material_id; supplier_spec; issue_id; order_id; opening_x; receipts_x; usable_returns_x; closing_x; continuing_out_x; homogeneous_item_count; m_item; tare; uncertainty; receiver | Counter staff weigh actual named dry/as-received packaging by lot at receiving/issue/stock counts; verify no adhesive/coating/composite in paper band and pure LDPE bag. Thermal paper is actual finished receipt-paper composition, not assumed cellulose. Sample homogeneous item mass with documented design only if used for count conversion. calc_materials; explicit absence evidence for optional band/bag, unknown not0. | kg; Item(s) only raw count | Every receipt/issue plus opening/closing counts. | Whole pool including void/failed orders. | Counter-issued packaging only; manufacture-provider scope documented. | per 1 m2 reference flow | Supplier composition/BOM, scale checks, stock/issue reconciliation and signed absence log. |
| cp_residual | residual | failed_transfer; unqualified_retained; fabric_offcuts; defective_fabric; lint_waste; paperboard_waste; film_waste; band_waste; bag_waste; receipt_waste | carrier_transfer_ledger | carrier_id; parent_bolt_coordinates; material_id; wet_mass; tare; dry_mass_sample; moisture_regain; receiver_id; receiver_acceptance; product_or_waste_state; treatment; haul_scope; retained_stock; event_id; cotton_contained_mass; opening_dry; receipts_dry; physical_returns_dry; closing_dry; gross_handover_dry; supplier_transfer_dry; offcut_dry; defect_dry; destructive_sample_dry; released_full_fabric_particles_dry; S_full_open; S_full_close; X_full; E_full; transformed_full_export | At each actual dispatch segregate and net-weigh each named whole carrier; photograph state, receipt and receiver permit/treatment where relevant. Retained saleable failed fabric sent supplier is product transfer, not retailer waste. Offcuts/defects/lint have separate actual carriers; sampled test cloth enters exactly one of these physical fates. Retained incoming former/film stays inventory until actual dispatch. calc_physical and calc_materials; one receiver-specific carrier kg/Q; no contained-species duplication. | kg as dispatched; kg dry for independent closure | Every discard/transfer and opening/closing stock. | All pool carriers through terminal acceptance, with late corrections. | Store receiving and residual holding/dispatch points. | per 1 m2 reference flow | Scale calibration, weigh tickets, receiver records, supplier-return responsibility and scope matrix. |
| cp_air | counter | cotton_air | species_flux_ledger | port_id; regime; interval_id; Cin_p; Cout_p; cotton_fraction; Fin_p; Fout_p; T; P; humidity; dt; blank_mode; target_extraneous_cotton; G; S_open; S_close; X; carrier_id; source_marker; detection_limit; uncertainty; released_full_fabric_particles_dry; S_full_open; S_full_close; X_full; E_full; transformed_full_export | Competent sampler measures actual final exterior inlets/outlets/leaks for matched cutting/no-cut and closed/resuspension regimes using calibrated particulate capture and cotton-specific microscopy/composition verification; retain original gravimetric blanks and actual flow on matched state. Inventory airborne/surface/filter cotton and actual exported carrier-contained cotton independently, with source-specific sampling plan and uncertainty. If method cannot distinguish target cotton or cover ports, disclose gap and do not claim complete emissions. calc_air exclusive mode; E/Q only after source/path/stock closure. | kg/m3; m3/h; kg; h | Representative measured regimes covering every operating/closed state, repeated on lot/configuration change; continuous state/time logs. | Whole pool and storage/capture changes at boundaries. | Final outside-store boundary and target source/capture custody. | per 1 m2 reference flow | Sampling plan, laboratory cotton identity, detection bounds, flow calibration, matched blanks, original carrier crosswalk. |
| cp_completion | completion | fixed excluded modules | scope_and_asset_ledger | pool_id; Q_version; module_id; provider_id; included_scope; source_id; meter_id; beneficiary_id; K; target_driver; all_driver; asset_id; e_target_current; L_expected_total; lifetime_versions; terminal_mass; maintenance_event_id; trip_payload; trip_distance; empty_vehicle_km; loaded_time; empty_time; reserved_time; B_s; provider_conversion; overlap_id; V_discharge; rho_discharge; temperature; composition; opening_liquid; external_water; cleaner_mass; actual_dissolved_or_suspended_additions; closing_liquid; vapour_export; liquid_in_goods_or_other_carriers; other_external_liquid_transfer; charge_open; added_external; reused_from_recovery; charge_close; circuit_recovered; other_circuit_transfer; S_rec_open; S_rec_close; recovery_sent; other_recovery_transfer; air_capture_stock_open; air_capture_stock_close; air_captured_sent; delta_indoor_air_stock | Retailer inventory owner collects all fixed modules in partial_completion from actual invoices/meters/BOM/workorders/transport logs and all-beneficiary asset ledger. Inspect real scope and split actual incompatible physical assets/contract units into named atomic cards; provider-included parts/fluids/haul/treatment are not counted again. Commissioning and retirement records identify original contents, actual replaced parts and remaining whole carrier. calc_completion, calc_completion_liquid and calc_completion_refrigerant; whole service unavailable until closed modules and exact overlap/Q-version agreement. | source native units with explicit conversion | Each source event, monthly reconciliation and every asset/lifetime revision. | Same pool plus full asset life and late corrections. | All fixed completion boundaries associated with the target service. | per 1 m2 reference flow | Signed scope matrix, provider evidence, all-beneficiary/lifetime closure, terminal receipts and exact source-ID dedup. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_area | qualified_service | For each finally accepted physical piece j, measure slack, unwashed final dimensions in recorded temperature/RH state without stretching. A_j=sum_k(l_jk*w_usable_jk)-A_defect_j, using a length-segment width map, excluding both selvedges and mapped rejected holes/defects once; A_defect_j contains only defects not already removed by the usable-width map. For irregular shapes use calibrated traced polygons instead of also adding rectangle areas. Q=sum A_j over unique terminal acceptances; consumer-retained unqualified pieces and subsequently reversed acceptances are excluded. Full selvedges may remain physically delivered; they contribute background and physical mass but not usable Q. m2 is area, never count of cuts or nominal yards. | piece_id; terminal_acceptance_id; l_jk; w_usable_jk; A_defect_j; temperature; RH; polygon_area | Q m2 | kaufman-white-k001-1387 |
| calc_source | failed_background; qualified_service | At receiving map each bolt i into measured coordinate cells c (including selvedges); b_ic=a_full_ic*g_dry_ic, g_dry_ic=m_conditioned_sample_ic/(1+r_ic)/a_sample_ic, where sample area and all original cell geometry are measured in the same receiving temperature/RH/slack state before drying; record any conditioned-state dimensional correction from paired specimen measurements, never assume wet/dry areas equal; with dry-basis moisture regain r=(m_conditioned-m_dry)/m_dry from a validated lot-specific drying method preserving nonvolatile finish and reporting volatile-finish bias. Supplier verified dry-finished-mass records for the same coordinates may replace sampling, not supplement it. Track exclusive fractions u_ics,u_icf_service,u_icf_continuing,u_icopen, summing1 for every original cell; B_z=sum b_ic*u_icz. Actual descendant boundaries, full-width cut coordinates and dry-fabric fragments determine u; no nominal area or wet mass shortcut. Include destroyed test specimens/offcuts, exact consumer-delivered selvedges and fabric-derived lint with their parent responsibility; pure moisture exchange is not another fabric background. B_original=B_s+B_f_service+B_f_continuing+B_open. B_f_service includes a separately labelled provisional charge for unqualified external retention without evidenced continuing owner; release it only through signed reassignment, and unresolved ownership blocks final completeness. B_f_service/Q enters this module; B_s/Q accompanies downstream successful-goods background once. B_f_continuing/B_open remain disclosed separate burden ledgers until known final owner; unknown original dimensions/moisture/background prevents closure. | a_full_ic; m_conditioned_sample_ic; m_dry_ic; a_sample_ic; r_ic; u_ics; u_icf_service; u_icf_continuing; u_icopen | B_z kg dry finished fabric; B_f_service/Q kg/m2 | ghg-product-2011 |
| calc_physical | failed_transfer; unqualified_retained; fabric_offcuts; defective_fabric; lint_waste | Keep a separate dry-finished-fabric stock equation: opening_dry+receipts_dry+physical_returns_dry=closing_dry+gross_handover_dry+supplier_transfer_dry+offcut_dry+defect_dry+released_full_fabric_particles_dry+destructive_sample_dry. released_full_fabric_particles_dry is one raw internal loss from cloth into the downstream particle/settled-lint pool, including dry fabric-derived fibre and finish; do not also subtract its later captured-lint export or outside emission in this cloth-stock equation. Close that downstream pool independently: released_full_fabric_particles_dry+S_full_open=S_full_close+X_full+E_full+transformed_full_export, with measured source-derived dry fractions, all surface/air/filter stocks, actual whole-carrier contained exports and exterior full-particulate transfer, not unrelated dust. These are raw full-fabric dry masses, not automatically the cotton-only species G/S/X/E in calc_air. Derive cotton source G from measured cotton mass fraction of each full-particle portion once; characterize actual finish/other species and transformations with separate named terminal cards if present before completeness. Include only disjoint actual terminal portions and exclude already included sample descendants; unknown stock/composition/transformation is a gap, not0. Gross handovers/returns include repeated crossings and are not Q. Weigh actual wet carriers for waste/transfer exchanges; stock dry equivalents use their own measured moisture/finish basis, never add paperboard, film, bag or external cleaning mass. Keep measurement uncertainty and unresolved residual; do not force it to zero. | opening_dry; receipts_dry; physical_returns_dry; closing_dry; gross_handover_dry; supplier_transfer_dry; offcut_dry; defect_dry; released_full_fabric_particles_dry; S_full_open; S_full_close; X_full; E_full; transformed_full_export; cotton_fraction; destructive_sample_dry | independent dry stock closure; actual carrier kg/Q | ghg-product-2011 |
| calc_power | lamp_electricity | E_lamp=3.6*sum_t[kWh_active_t*h_target_t/h_all_t+kWh_standby_t*z_target_t/z_all_t], only for actually shared intervals; a dedicated metered target interval has share1. h are occupied inspection/cutting minutes including failures, z reserved bench-area-hours including closed/idle; retain any zero-driver interval unassigned until evidenced causal resolution. All beneficiary shares sum1; do not subtract POS/HVAC from a disjoint lamp meter. Lamp contribution=E_lamp/Q MJ/m2. Metered net totals are not multiplied by nominal wattage or hours again. | kWh_active_t; h_target_t; h_all_t; kWh_standby_t; z_target_t; z_all_t; Q | E_lamp/Q MJ/m2 | ghg-product-2011 |
| calc_materials | band_input; bag_input; receipt_input; paperboard_waste; film_waste; band_waste; bag_waste; receipt_waste | For each named material x, actual consumption M_x=opening_x+receipts_x+usable_returns_x-closing_x-continuing_out_x in kg with weigh-ticket and per-item sampling only when actual homogeneous item count*m_item is validated. Assign once by actual order/issue/discard source IDs including failures and voids. Outgoing carrier W_x is direct net kg by actual receiver; never infer waste equals input when product packaging leaves with customer. Normalize attributable M_x or W_x by Q once; count/weight sampling variance is disclosed. Incoming packaging embodied production is in original merchandise background; outgoing incoming-wrap waste gets treatment here only, never another packaging input. | opening_x; receipts_x; usable_returns_x; closing_x; continuing_out_x; m_item; source_id; W_x; Q | attributable M_x/Q or W_x/Q kg/m2 | ghg-product-2011 |
| calc_air | cotton_air; lint_waste | Select mutually exclusive outside-flux mode E=integral(sum Cout_p*Fout_p-sum Cin_p*Fin_p)dt-target_extraneous_cotton, where C is actual cotton-fibre particulate mass concentration kg/m3, F actual m3/h on matching measured T/P/humidity basis; or a validated already differential/source-corrected mass-rate mode integrated over measured actual exposure. Never blank-correct twice. Attribute cotton from target cuts using matched no-cut intervals/source markers and all actual other cotton activities; unknown source shares block completeness. Independently reconcile target cotton-only internal source G, derived from the source-resolved full-fabric particle pool in calc_physical using actual measured cotton fraction once, with E=G+S_open-S_close-X, S total airborne/surface/capture-stock target cotton kg and X actual exported captured cotton kg. X portions inside lint_waste/other whole carriers are not a second exchange. Record transformations/unknown routes as gaps, not0. Report E/Q only after outside-path/source/stock closure within measured uncertainty; non-detects retain method detection bounds, not default0. Retain/investigate signed E observations with uncertainty; unresolved negative E cannot be entered as a negative cotton_air output, clamped to0 or claimed as avoided emission. Demonstrated actual net uptake requires separately reviewed matching elementary input identity and attribution; otherwise completeness remains blocked. | Cout_p; Fout_p; Cin_p; Fin_p; dt; target_extraneous_cotton; G; S_open; S_close; X; Q | E/Q kg/m2 | ghg-product-2011 |
| calc_completion | all | Build a scope matrix with provider dataset ID, event/asset/meter/source IDs and included manufacture, transport, energy, maintenance, fluids and treatment for every fixed module in partial_completion. Other actual premises energy carriers require specific named supplier activity/unit conversion: meter/import masses or actualV*density on matched state, energy only by measured applicable supplier NCV times actual mass, no generic fuel/heat Item(s) card. Successful goods use B_s/Q original receiving dry-fabric-equivalent kg with explicit provider conversion and actual inbound legs, minus only demonstrably already covered legs. Common operational pools: metered total K split target/all by occupied or reserved floor-area-hours for premises/HVAC/lighting/cleaning, active+standby device/transaction time for POS and shared office/admin devices, actual recorded staff/visitor service exposure for toilets, and loaded+empty+reserved handling time for handling assets; choose actual direct meters first. Keep all beneficiary/idle/failure periods, zero-driver residuals and actual fluid/waste mass rules fixed in calc_completion_liquid and calc_completion_refrigerant, no generic Item(s) event. Transport uses actual trip payload tonne-km and distinct empty vehicle-km only when not included in evidenced provider activity. Acquisition/terminal assets: for each actual complete asset a, use e_target_current/L_expected_total across all past/current/future beneficiaries, inclusive current exposure, appropriate area-hours for building/table/shelf, occupied+reserved hours for tools/lamp/POS. Ledger f_current=e_target_current/L_expected_total replaces old allocations on lifespan revision; cumulative fractions<=1; retirement replaces estimates with actual lifetime exposure and distributes residual/signed corrections. Apply manufacture and actual terminal whole-asset amount*f only once each, direct net terminal weighing excludes removed parts already; actual maintenance is event allocated by beneficiary exposure in its service interval, never multiplied by manufacture f again. Stratify actual incompatible asset/package/material/waste identities with named cards, own protocols and original receipts; factory contents, replacement parts and removed carriers are disjoint. For every compatible exchange identity/property/unit separately, retain this module original RAW attributable numerator and each completion module RAW attributable numerator. Verify identity, state and unit compatibility with explicit measured conversions; add only compatible same-exchange quantities row by row, remove exact overlapping source IDs once, then divide each combined numerator by the identical final Q once. An already normalized external module must first be restored to its actual raw numerator using its evidenced original denominator and the exact shared pool/version; otherwise it is not joinable. Never add normalized rows to raw totals, add kg to MJ or combine different materials/species simply because their units match. No total footprint claim until every named module closes. | scope_matrix; B_s; Q; provider_conversion; trip_payload; trip_distance; empty_vehicle_km; K; target_driver; all_driver; e_target_current; L_expected_total; asset_id; lifetime_versions; terminal_mass; maintenance_event_id | fixed-module attributable burdens/Q with exact overlap removal | ghg-product-2011 |
| calc_completion_liquid | completion | For each actual named cleaning/toilet liquid carrier, direct net discharge mass J=V_discharge*rho_discharge at measured temperature/composition; this is exclusive of reconstruction and is never reduced again by evaporation or reuse. If direct collection is unavailable use a validated full-liquid mass balance J=opening_liquid+external_water+cleaner_mass+actual_dissolved_or_suspended_additions-closing_liquid-vapour_export-liquid_in_goods_or_other_carriers-other_external_liquid_transfer, all kg and actual disjoint portions. Internal reuse is internal and cancels; imported-water meter already excludes reuse. Dry swept cotton, wipes, bins or separately captured solid particles are not liquid additions. Direct and reconstructed modes cannot be combined; moisture in a whole solid carrier is not again effluent. Source IDs and actual receiver/treatment fractions sum1; quantify uncertainty and unresolved terms, never unknown=0. Attribute raw common pool by the predeclared actual cleaning area-hours or actual toilet service exposure across all beneficiaries, preserving idle/zero-driver residual, before Q once. | V_discharge; rho_discharge; temperature; composition; opening_liquid; external_water; cleaner_mass; actual_dissolved_or_suspended_additions; closing_liquid; vapour_export; liquid_in_goods_or_other_carriers; other_external_liquid_transfer; source_id; target_driver; all_driver; Q | actual whole-liquid kg/Q and disjoint source-carrier allocation | ghg-product-2011 |
| calc_completion_refrigerant | completion | For each actual HVAC refrigerant species, close raw unallocated circuit balance L_internal=charge_open+added_external+reused_from_recovery-charge_close-circuit_recovered-other_circuit_transfer. Factory charge in the complete acquired equipment enters identified opening/commissioning contained stock, not a second purchased top-up; separately identify actual external commissioning additions. Close recovery reservoir S_rec_open+circuit_recovered=S_rec_close+reused_from_recovery+recovery_sent+other_recovery_transfer. Actual purchased input is added_external only. Close final outside release E=L_internal+air_capture_stock_open-air_capture_stock_close-air_captured_sent-delta_indoor_air_stock, with mutually exclusive circuit recovery and air capture; independently validate actual final exterior net flux at matched T/P/humidity. Intact equipment/waste-carrier contained refrigerant is not air and is not pure gas output again; actual separated recovered gas gets its own named carrier/card. Unknown paths/stocks/identity stay incomplete. Assign raw operational events across actual beneficiary area-hours; terminal contained gas/treatment uses the one final lifetime responsibility fraction, no second manufacture fraction. Reconcile opening/closing, dates, commissioning/provider scope and species original records before Q normalization. | charge_open; added_external; reused_from_recovery; charge_close; circuit_recovered; other_circuit_transfer; S_rec_open; S_rec_close; recovery_sent; other_recovery_transfer; air_capture_stock_open; air_capture_stock_close; air_captured_sent; delta_indoor_air_stock; Q | species-specific outside kg/Q and separate recovery/contained carriers | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all | Before dataset readiness bind each unverified flow and its support chain to matching original direct-read record+receipt with exact hashes, observed state, EN/ZH official names, flow type, material/state/provider qualifiers, property, unit and compartment. Supplier identity alone is not a UUID. Historical AC evidence supplies identity only, not grid factor/provider/voltage. Missing quantities/identities stay explicit gaps; candidate is review-required, not publication ready. | Original responses, receipts, hash report and row-specific completion matrix. |
| measurement | all | Calibrate tapes/area imaging, scales, moisture method, electrical and air sampling meters with traceable checks and uncertainty. Repeat width/length at receiving, cutting, physical return and final acceptance when state changes; retain raw geometry, conditions, sampling coverage and defects. No fixed moisture regain, nominal44-inch width or4.35oz/yd2 default. No claim of conformance to a standard not actually applied. | Calibration certificates, pre/post checks, lot sample design, raw uncertainty propagation and paired-state records. |
| closure | all | Reconcile terminal pieces, physical stocks, coordinate dry-background ownership, consumables, whole waste carriers, energy and exterior cotton flux before normalization. Investigate differences against measured uncertainty, record unresolved residual and sensitivity rather than force closure. Conditional absence must cover every pool interval. Complete EN/ZH source obligations must exist in supported structured rule/protocol/calculation fields; matching fingerprints alone do not prove semantics. | Signed reconciliations, source-coordinate maps, event revisions, absence logs and bilingual field/rule audit. |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_check | qualified_service | Require one homogeneous specification, actual final usable geometry and contractual acceptance, matching Q and source-parent history. Reject nominal-yard/width defaults, repeated acceptance, retained unqualified output, vanished failed cohorts and unknown-as-zero. | kaufman-white-k001-1387; ghg-product-2011 |
| quantity_check | all | Validate every row amount against native raw unit, measured state, exact protocol/process, attribution and one Q normalization; validate calc_source exclusive original background and independent gross/dry stocks, whole-carrier waste, air capture/export and all-beneficiary energy closure. Any unsupported conversion, missing path or residual outside uncertainty blocks completeness. | ghg-product-2011 |
| boundary_check | all | A complete incremental-module dataset still discloses its partial scope. Whole-retail use additionally requires every partial_completion module through calc_completion with the same final Q/version, source-ID dedup and physical asset lifetime/maintenance/terminal scope. Current certification or scientific/publication approval may not be inferred from content/translation markers or mapping acceptance. | ghg-product-2011 |
| projection_check | all | Verify every bilingual card, condition, rule, protocol, formula, source ID and applicability scope in generated structured and actual guidance. Keep unresolved row/support identities explicit until original binding, with no invented UUID. Fingerprints/schema do not establish scientific equivalence. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Partial incremental counter service only; whole-retail use requires fixed completion and successful source background coupling on identical Q. |
| allowed_use | Use for the identical recorded SKU/manual route/state/contract after measured quantities and UUID/background completion; disclose partial scope. |
| excluded_use | Entire CPC leaf, fabric or routes outside the declared class, full retail or certified/current-compliance claim, pure merchandise manufacture, default nominal area/mass or missing-data zero. |
| required_metadata | SKU and fibre declaration and woven construction and actual finish and supplier lot; actual full and usable width/length map and defects; unwashed slack measurement temperature/RH and calibration; receiving dry-finished-mass and moisture/finish method; manual full-width cut route and packaging absence/presence; start/end gate and return policy and terminal acceptance evidence; pool configuration and coverage and late-revision IDs; gross physical crossings and source-coordinate ownership; partial counter boundary and fixed completion scope matrix; outside-air cotton source/capture/path closure and uncertainty; receiver and carrier and provider duplicate-scope checks |
| required_quality_disclosure | Row identity/background gaps, receiving vs final state, geometry/moisture sampling uncertainty, partial-module scope matrix, closed/failed pools, revisions and exterior cotton coverage. |
| update_trigger | SKU/finish/lot construction, route, measuring state, packaging, provider boundaries, assets/life, contract/return outcomes, air paths or source evidence changes. |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62131 | official_guidance | UNSD CPC3.0 subclass62131, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62131 | Actual official explanatory note includes group266 cotton woven fabrics among broader textile groups; classification only, no quantitative factor. |
| kaufman-white-k001-1387 | handbook | Robert Kaufman Fabrics, K001-1387 WHITE from Kona Cotton, https://www.robertkaufman.com/fabrics/kona_cotton/K001-1387/ | Primary manufacturer identity100%cotton/WHITE; nominal44in width and4.35oz/yd2 are contextual product declarations, not defaults, factors, usable-width or compliance limits. Actual lot must be measured. |
| kaufman-woven-description-2024 | standard | Hohenstein certificate14.HUS.49303 issued2024-11-07, manufacturer-hosted https://www.robertkaufman.com/assets/files/14_HUS_49303.pdf | Historical description of woven100%cotton Kona cotton/white; validity ended2025-10-31. No current certification/performance conclusion and no adopted test limit. |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapters7/9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General attributable boundary and subdivision/physical-allocation principles only. Specific area geometry, original-coordinate responsibility, counter partial scope and fixed completion methods are this PCR design, not mandated factor/default or whole-standard conformity. |
