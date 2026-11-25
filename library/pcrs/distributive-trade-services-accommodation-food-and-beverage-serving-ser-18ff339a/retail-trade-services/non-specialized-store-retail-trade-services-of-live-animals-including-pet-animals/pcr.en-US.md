---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-live-animals-including-pet-animals
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Non-specialized store retail handover of weaned domestic guinea pigs

## 1. Scope and Applicability

This PCR covers the declared guinea-pig route only. Its reference is a retail service, while animal production remains a separately accounted product background. Scope conditions and extensions are mandatory under scope and route_check.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-live-animals-including-pet-animals |
| classification_refs | CPC 3.0 62114; narrower |
| covered_products | On-site retail service for weaned domestic guinea pigs (Cavia porcellus) in a non-specialized store, using dry hay, vitamin-C-fortified pellets and wood-shaving litter; customer collection. |
| excluded_products | Other species, animal breeding, wholesale, specialist pet stores, slaughter, long-term boarding, home delivery, on-site pharmaceutical treatment, fresh-produce feeding, combustion heating and refrigerant cooling; an actual different route needs a separately reviewed inventory extension. |
| representative_product | One accepted guinea-pig retail handover service; the animal itself is a separately traced traded product. |
| production_route | Reception and identity checks; temporary dry-feed holding, feeding and care; cleaned reusable housing with fans/resistance heating where needed; purchaser suitability check and care information; accepted collection and return-window closure. |
| market_state | Live, weaned, identified, fit for transfer under applicable local requirements; no numerical age, weight, residence duration or welfare compliance is assumed. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Retail selection, temporary custody, care, purchaser information and accepted on-site handover of one identified weaned domestic guinea pig. |
| How much | 1 completed retail handover service; N is the number of final non-reversed accepted individual-animal handovers in a closed preregistered accounting pool. |
| How well | Traceable acquisition and health observations; suitable housing, feed/water, documented buyer information and signed acceptance. Failed or refused sales are not output. |
| How long or cycle | From recorded in-store receipt to final disposition and expiry of the declared return window for every animal of the cohort; all custody intervals and repeat attempts included. |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Guinea-pig retail handover service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | species; weaned state; source and legal procurement/custody responsibility; individual identity; site and non-specialized store status; cohort IDs; receipt/disposition timestamps; declared return window and closure date; N and mortality/loss/return ledger; actual diet and litter; housing configuration; care/acceptance criteria and local jurisdiction; allocation and utility supplier boundary |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | retail_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One Item is one completed individual-animal handover service, never one animal-production dataset, hour, monetary turnover or stock balance. All amounts use q_i / N once; N > 0 and cohort closure are required. |
| conversion | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Electricity MJ = metered kWh * 3.6; preserve point-of-use supply attribution and unit conversion once. |
| mass_basis | hay; pellets; water; litter; cleaner; wastewater; soiled_litter; carcass; ammonia; methane; biogenic_co2; carrier | Mass | kg | Use measured as-received material/carrier mass and actual named-molecule mass for exterior gases; retain moisture, chemical form and solution concentration. Volumetric records require measured or supplier-traceable density at matching conditions. Never multiply solution mass by active fraction again when linking the solution dataset, or multiply named-species kg by N/C fraction again. |
| selected_freight_identity | carriage | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | The selected road-freight identity uses the official goods-transport property/unit.1kg*km=0.001t*km; preserve the declared original quantity/attribution mode and convert only once. Actual vehicle, cargo conditions and provider stages remain independent applicability gates, with no assumed background or extra loaded share. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope | all processes | Include receipt checks, every holding day including weekends, care, hygiene, enclosure wear, attributed store utilities, final handover and post-return repeat care through cohort closure. Animal reproduction and successful animals upstream production are outside this incremental retail-service boundary; retain their product links. |  |
| loss_background | animal background responsibility | Allocate upstream production of dead or irrecoverably lost acquired animals to loss_animal input L / N. Link N successful animals separately in the downstream animal-plus-retail system, exactly once each, with their upstream production and delivery through signed in-store receipt. For L, use a delivered-animal background including that delivery once; if its producer dataset ends earlier, attach the missing transport within that background before linking loss_animal. Intact supplier returns retain their product background with the identified supplier; prove continuing responsibility and include all store custody and return-operation burdens here. Unknown disappearance is unresolved L, never zero. |  |
| exclusions | gate and supporting datasets | Supplier-to-store animal delivery before signed receipt is part of the separately linked delivered-animal background (including L under loss_background), while customer travel/use and final pet end-of-life are outside this store-gate operating service and must be disclosed and linked separately when the downstream study includes them. Consumable production, enclosure manufacture and treatment after waste handover require compatible upstream/downstream datasets; actual treatment emissions are not also store emissions. Building construction and employee commuting are excluded and disclosed, not claimed negligible. |  |
| route_check | conditional activities | Record daily care and environment checks, feeding, hygiene, buyer information and animal register under the process-scoped cp_custody/cp_custody_handover and cp_material/cp_material_hygiene/cp_material_handover views. Defra supports the activity list for England; actual local welfare duties and enclosure/temperature/feed requirements must be checked for the site. This PCR supplies no universal welfare thresholds or feeding amounts. Absence of veterinary visits, transport or deaths requires reconciled event logs; a missing log is unknown. New medicines, food types, fuels, refrigerants, disinfectants or waste pathways outside listed cards block use until individually extended and reviewed. | defra-pet-sale-2026 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| failed_external | physical disposition versus commercial reversal | Maintain separate physical-return and commercial-refund events. N is determined by final qualifying acceptance, not money received. A pure price concession, goodwill refund or other financial adjustment with contractual acceptance still valid does not alter physical disposition or N. Final F requires actual cancellation/revocation of acceptance or a genuinely nonqualifying external handover, with the animal demonstrably retained by an identified external recipient; F is not a service output N, a supplier return R, a death or an automatic carcass. Require signed retained-custody evidence and assign its delivered-animal production background exactly once to that recipient product system regardless of price; unresolved responsibility blocks closure. Include its failed service operating burden in the preregistered pool. Final L comprises actual deaths D plus irrecoverably lost acquired animals M; only documented D can create carcass waste. A physically returned animal is not terminal F: preserve its one individual history through quarantine, repeated care, refund and resale and assign one final disposition. |  |
| partial_boundary | incremental boundary and life-cycle completion | This is a partial incremental store-operation service inventory, not a complete retail life-cycle footprint or GHG Product Standard conformity claim. Till electricity is included as an operating utility share; building construction, store/till/IT capital manufacture, their maintenance/end-of-life and employee commuting remain excluded without claiming insignificance. A complete retail study must separately inventory these missing responsibilities using actual asset lifetime/use ledgers and allocated whole-store area-/operating-hours, link manufacture, replacement, maintenance and disposal once, reconcile with enclosure and utility coverage, and review the extended boundary. Retain successful and F recipient animal backgrounds, pre-gate delivery, customer travel/use, carrier disposal and pet end-of-life in the linked product system at their stated gates. Report partial results separately until these duties and any jurisdiction-specific attributable activities are assessed and supplied. |  |
| gas_screen | all store emissions and speciation | Screen actual housing, wet litter, drains, disinfectant use, stock and all equipment for other relevant emissions, including nitrous oxide and any refrigerant or combustion gases. Use a documented source-pathway/species matrix, actual operating/waste conditions and representative multi-gas monitoring or original source-specific emission evidence; non-detection needs detection limits and coverage. A plausible or observed unlisted substance requires its own species/air-or-water-medium card, measurement protocol, bilingual rule and regenerated projection before completeness; do not invent its UUID or assert zero. Existing concentration units mg/m3 mean mass of the named molecule, never N-, C- or CO2-equivalent. Instruments reporting N/C equivalents require an explicit traceable molecular-mass conversion and independent check before integration. Calibrate zero/span and airflow, preserve inlet/outlet/background data, investigate negative differentials without clipping and carry detection-limit intervals and sampling-coverage uncertainty. |  |
| method_basis | method provenance | GHG Product Life Cycle Accounting and Reporting Standard (2011), chapters 6, 7 and 9 supports defining a service function/reference flow, documenting connected life-cycle boundaries and exclusions, and preferring subdivision before justified physical allocation. Its GHG scope screening also informs gas_screen. The particular accepted-handover unit, closed pool, animal-hours, area-hours, failed-sale treatment and asset/event rules here are explicit PCR design choices requiring scientific review, not mandates or numeric defaults asserted from that source. Defra supports species-care activity selection only. The additional terminal species conservation balance, matched source-exposure accounting and exterior verification are explicit foreground measurement designs, not empirical capture factors or claimed mandates from these sources. | ghg-product-2011 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| protocol_views | all cards and collection protocols | Each protocol declares exactly one existing process ID. cp_material, cp_material_hygiene and cp_material_handover are holding, hygiene and handover views of the same stock/issue ledger; cp_custody and cp_custody_handover are holding and handover views of the same individual-event ledger. Preserve common source_record_id/ledger_id/event_id in all views. Each exchange reads only its own process view; reconciling a common record is not another exchange, stock issue, measurement or normalization. N is the same final pool denominator across both custody views. Require every row collection_protocol_id to resolve to its actual process ID, not a concatenated process label. |  |
| diet_applicability | hay; pellets; actual diet | The inspected Defra Part F basic-diet paragraphs identify a continuous hay-based primary diet with adequate vitamin C; the hay card means fresh-quality uncontaminated dried grass hay, not fresh growing grass. Fortified pellets supplement hay and cannot replace its primary role. The separate required-higher-standard paragraph calls for suitably sourced identified forage foods and describes commercial dried forage as supplementary; this PCR does not infer that grass hay alone satisfies that higher-standard obligation or certify any site rating. Confirm the actual site diet and applicable tier with care records and competent veterinary advice. If additional forage, fresh vegetables, supplements or a different food is actually required or used, add its specific atomic card and process-scoped protocol view, align both languages and resync before claiming complete coverage; unknown diet identity or quantity remains blocking. | defra-pet-sale-2026 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| terminal_env_boundary | ammonia; methane; biogenic_co2; wastewater; soiled_litter | Each gas elementary card is the attributable net transfer of its named molecular species across the actual whole-store exterior air boundary, not the housing/litter source plane or indoor recirculation. Keep raw internal source G_s separate from terminal E_s. Trace actual source-to-room-to-exterior paths, capture, temporary retained stocks, exported carriers and independently evidenced species formation/consumption. No capture apparatus or fraction is assumed. Source-plane position and any capture already included in a measurement/factor must be explicit; do not subtract that capture a second time. Unknown path, stock, transformation or capture occurrence/absence evidence prevents complete emissions coverage. Apply the terminal balance and independently measured exterior flux on the same attributed species/period; only the reconciled terminal species kg is allocated to the pool and divided by N once. Store custody ends at each waste handover; downstream treatment emissions remain outside these store gas cards. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified weaned live guinea pigs received and accepted into temporary in-store custody; record supplier, procurement responsibility, acquisition background and rejection disposition. |
| starting_condition_role | Incremental store retail service, not animal production. |
| product_classification_scope | Narrower than CPC 3.0 62114; only the declared guinea-pig route. |
| recursive_input_rule | Do not add another whole retail service for an internal transfer or a refunded/resold animal. Purchased prior services require explicit different gates and no repeated animal production. |
| upstream_dataset_requirement | Retain supplier animal background for N successful animals and F recipient animals outside service and L losses inside service; match species, weaned state and custody gate. Match diet, electricity supply, solution concentration and complete enclosure boundaries before linking. |
| disclosure | Report all exclusions, legal ownership/procurement responsibility, closed cohort period, failed attempts, unresolved identities, inventory completeness and background-link responsibilities. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| holding | Reception and temporary care | required | All cohort activities; conditional cards need evidenced occurrence or absence. | foreground service activity | per reference flow |
| hygiene | Hygiene and waste handover | required | All cohort activities; conditional cards need evidenced occurrence or absence. | foreground service activity | per reference flow |
| handover | Retail acceptance and closure | required | All cohort activities; conditional cards need evidenced occurrence or absence. | foreground service activity | per reference flow |

### Process: Reception and temporary care (`holding`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Purchased alternating-current electricity enters the store care system at the point-of-use meter. This identity does not establish its supplier, voltage or generation inventory.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: q_i / N; q_i = 3.6 * allocated point-of-use kWh including care, fan/heating, cleaning, lighting and till share; supplier/voltage unspecified by the flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`

###### Dry grass hay (`hay`)

Dry grass hay enters the holding area as feed and nesting material. Record issue mass and its two uses without counting the same hay twice.

- Selected flow: Dry grass hay
- Flow property / unit: Mass / kg
- Amount rule: q_i / N; q_i = weighed net hay issued, including feeding and nesting use; retain separate use tags and moisture, count once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Vitamin-C-fortified guinea-pig feed pellets (`pellets`)

The formulated feed enters as the supplied vitamin-C-fortified guinea-pig pellet product. Its vitamin content is composition of this product rather than another input.

- Selected flow: Vitamin-C-fortified guinea-pig feed pellets
- Flow property / unit: Mass / kg
- Amount rule: q_i / N; q_i = weighed net formulated pellets issued as supplied, including documented refusals and spoilage; no separate nutrient multiplication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Potable tap water (`water`)

Purchased potable water serves drinking, washing and dilution at the store. This product exchange is separate from any water-resource abstraction in its supplier dataset.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i / N; q_i = measured supplied drinking and hygiene water, including changes and spillage; mass or volume times traceable density; no environmental withdrawal input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Dust-free wood shavings (`litter`)

Dust-free wood shavings enter as dry litter. Their later wet soiled-carrier mass is measured independently and must not be assumed equal to the input.

- Selected flow: Dust-free wood shavings
- Flow property / unit: Mass / kg
- Amount rule: q_i / N; q_i = weighed dry wood-shaving litter issued, record moisture and stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Complete reusable polypropylene guinea-pig enclosure (`enclosure`)

This complete housing unit supplies temporary accommodation. Its lifetime share covers the specified base, lid, bowls, bottle and permanent hide as one equipment package.

- Selected flow: Complete reusable polypropylene guinea-pig enclosure
- Flow property / unit: Number of items / Item(s)
- Amount rule: q_i / N; q_i = sum over installed complete units of allocated occupied/readiness cohort-use hours / persistent documented total service-life hours, subject to the lifetime ledger and retirement-remainder correction; actual configuration and maintenance coverage retained; an uncertain lifetime is a disclosed uncertainty, never an invented default.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`

###### Weaned domestic guinea pig (`loss_animal`)

This is the loss-attributed share of acquired weaned live guinea pigs at the receipt gate. It carries the production and delivery background of dead or irrecoverably lost individuals, while carcass handling remains a separate waste operation.

- Selected flow: Weaned domestic guinea pig
- Flow property / unit: Number of items / Item(s)
- Amount rule: L / N; L = acquired individuals dead or irrecoverably lost within cohort responsibility, linked to species/state-matched animal production delivered to the signed in-store receipt gate once, including its pre-gate delivery transport. Supplier production-only datasets require a separately evidenced delivery-transport component within that delivered-animal background, not an omission. Surviving sold animals, F recipient-retained animals and intact supplier returns are excluded from L under loss_background.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_custody`

###### Veterinary consultation for a domestic guinea pig (`vet`)

A supplier provides one completed veterinary episode for an identified guinea pig when required. The episode is a defined purchased service package, not an undefined hour or animal count.

- Selected flow: Veterinary consultation for a domestic guinea pig
- Flow property / unit: Number of items / Item(s)
- Amount rule: q_i / N; conditional q_i = documented completed veterinary episodes, including the supplier-declared treatment package; no visit is evidenced by care and invoice logs, never presumed from missing invoices.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_event`

###### Road transport service for live guinea pigs (`carriage`)

A purchased road carriage service moves identified live animals on a post-receipt veterinary or supplier-return leg. The supplier dataset must support the recorded transport activity and package boundary.

The selected identity denotes road-freight activity, not an actual vehicle or LCI provider. Retain this card's stated cargo/vehicle, original mass basis and complete disjoint loaded-stage requirements. The official unit group uses1t*km=1000kg*km; apply any needed unit conversion once without another consignment/owner share. Empty and powered-idle sources keep their separate actual vehicle-km/vehicle-hour identities.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: q_i / N; conditional q_i = sum of allocated consignment gross kg * actual km / 1000 for off-site veterinary and supplier-return legs after receipt; include empty-return allocation in supplier service once; exclude pre-gate inbound and customer travel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_event`

#### Outputs

##### Elementary flows

###### Ammonia net transfer to exterior air (`ammonia`)

Ammonia elementary output is the named molecule actually reaching exterior environmental air during the original pool custody. Internal generation, room recirculation and retained/captured carrier contents remain intermediate accounting quantities; pre-handover litter is included and downstream waste treatment is separate.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i / N; q_i = reconciled attributable terminal ammonia kg crossing the actual whole-store exterior air boundary after internal stock/capture/carrier/transformation accounting and independent exterior-flux verification. Raw housing/litter source is not this elementary output; divide by N once, never assume unknown capture is zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`

###### Biogenic methane net transfer to exterior air (`methane`)

Biogenic methane elementary output is the named molecule actually reaching exterior environmental air during the original pool custody. Internal generation, room recirculation and retained/captured carrier contents remain intermediate accounting quantities; pre-handover litter is included and downstream waste treatment is separate.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i / N; q_i = reconciled attributable terminal biogenic methane kg crossing the actual whole-store exterior air boundary after internal stock/capture/carrier/transformation accounting and independent exterior-flux verification. Raw housing/litter source is not this elementary output; divide by N once, never assume unknown capture is zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`

###### Biogenic carbon dioxide net transfer to exterior air (`biogenic_co2`)

Biogenic carbon dioxide elementary output is the named molecule actually reaching exterior environmental air during the original pool custody. Internal generation, room recirculation and retained/captured carrier contents remain intermediate accounting quantities; pre-handover litter is included and downstream waste treatment is separate.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q_i / N; q_i = reconciled attributable terminal biogenic carbon dioxide kg crossing the actual whole-store exterior air boundary after internal stock/capture/carrier/transformation accounting and independent exterior-flux verification. Raw housing/litter source is not this elementary output; divide by N once, never assume unknown capture is zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`

### Process: Hygiene and waste handover (`hygiene`)

#### Inputs

##### Product flows

###### Aqueous sodium hypochlorite disinfectant solution (`cleaner`)

A defined aqueous sodium hypochlorite product enters hygiene operations only where its recorded label and local veterinary procedure authorize it. Measure solution mass, not an assumed pure-active-equivalent amount.

- Selected flow: Aqueous sodium hypochlorite disinfectant solution
- Flow property / unit: Mass / kg
- Amount rule: q_i / N; q_i = weighed stock solution consumed at recorded composition, concentration and label-authorized use; dilution water is already in water. No dose default or assumed disinfectant suitability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_hygiene`

#### Outputs

##### Waste flows

###### Guinea-pig enclosure wash wastewater (`wastewater`)

Measured enclosure wash liquid leaves the store for the named sewer or treatment receiver. Dissolved cleaner and suspended matter belong to its recorded composition.

- Selected flow: Guinea-pig enclosure wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: q_i / N; q_i = measured liquid wastewater to the documented sewer/treatment receiver; retain suspended solids and cleaner content as composition, not duplicate waste quantities; evaporation and retained moisture reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Soiled wood-shaving bedding containing guinea-pig excreta (`soiled_litter`)

The physically co-collected wood-shaving litter leaves with retained excreta and feed residues for one documented receiving pathway. It is one measured waste carrier, with components retained as composition rather than duplicate exchanges.

- Selected flow: Soiled wood-shaving bedding containing guinea-pig excreta
- Flow property / unit: Mass / kg
- Amount rule: q_i / N; q_i = wet collected litter stream including co-collected hay and pellet refusals; weigh container tare, record composition/moisture and receiver; no additional excreta or feed-waste card for the same carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Dead domestic guinea-pig carcass (`carcass`)

A dead guinea-pig carcass crosses the waste gate only when an actual death and receiver transfer are documented. Its wet net mass is distinct from the count-based upstream loss input.

- Selected flow: Dead domestic guinea-pig carcass
- Flow property / unit: Mass / kg
- Amount rule: q_i / N; conditional q_i = actual carcass net mass transferred to documented authorized receiver, linked to death IDs; unknown missing animals are not assigned invented carcass mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

### Process: Retail acceptance and closure (`handover`)

#### Inputs

##### Product flows

###### Corrugated-board guinea-pig handover carrier (`carrier`)

A corrugated-board carrier is supplied with the handover when actually used. It passes to the purchaser within the service package; its disposal is outside the store gate.

- Selected flow: Corrugated-board guinea-pig handover carrier
- Flow property / unit: Mass / kg
- Amount rule: q_i / N; conditional q_i = net carrier mass issued minus unused stock returns, including failed attempts; customer reusable carrier gives documented non-applicability, not an assumed zero; actual different carrier material needs reviewed extension.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_handover`

#### Outputs

##### Product flows

###### Guinea-pig retail handover service (`retail_service`)

The output is one completed retail handover service for an identified individual after final acceptance. The animal and its successful-production background are separate product objects, not this service flow.

- Selected flow: Guinea-pig retail handover service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_custody_handover`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | shared utility meters and consumables | Use dedicated submeter/issue records first. For shared housing care allocate measured pooled quantities by animal-hours; shared store lighting/space conditioning by occupied allocated area-hours including vacant readiness time assigned to this department. Keep the whole-store denominator, occupied areas, hours and allocation fractions; fractions must sum to one. Non-animal departments retain their share. | ghg-product-2011 |
| cohort | successful sales and failed custody | Allocate all cohort operating burdens including unsold residence, refused sales, deaths, supplier returns and repeated sale attempts across N final accepted handovers. Never remove the burdens of failed outcomes or grant mortality credits. No final positive N means no normalized service dataset. Refund and resale are one linked animal history: reverse the first counted handover and count only final unrevoked acceptance. A late physical return after closure reopens the original accounting pool and corrects every subsequent actual numerator, final N and disposition/background partition, including repeat care, transport, losses and any final resale. Preserve original and correction links; do not assign the same animal history or event burden to a new pool or count a new copy of its upstream background. |  |
| packages | enclosures; veterinary service; carriers; waste | Complete reusable enclosure includes base, lid, bowl, bottle and permanent hide; measure lifetime-use share and do not add those components again. Record replacements separately only after inventory extension. A veterinary consultation Item is one documented completed episode including administered medicines, clinic utilities and bundled travel only when its supplier dataset includes these. Charge separately purchased road carriage only when excluded from that package. Packaging transferred with the animal is part of service, not a credit or coproduct. Waste-carrier treatment includes contained excreta/feed residues; do not book their mass or downstream emissions again. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| pool_allocation | cohort pooling and zero-success burdens | Before outcomes are known, preregister one accounting-cohort pool containing every reception cohort from the same store, guinea-pig/diet/housing configuration and fixed acquisition-date window. The pool closes only after every included animal has final disposition and all return windows expire. N and every q_i refer to this complete pool. Include the entire operating and loss-background burden of reception cohorts with zero successful handovers in that pool; never delete them or select only successful cohorts. If the whole pool has N = 0, retain its unnormalized quantities, responsibility ledger and failed-output status, prohibit division and any complete service dataset claim. Pool windows/configuration cannot be changed retrospectively to erase failures. |  |
| asset_ledger | enclosure lifetime and all beneficiaries | Keep one persistent ledger per complete enclosure from commissioning through retirement across all beneficiaries, departments, pools and calendar periods. Total service-life hours are elapsed commissioned-life hours, including occupied use, idle/readiness hours and maintenance downtime, never a denominator reset for each pool. Assign every interval once: occupied shared hours by beneficiary animal-hours; empty readiness and maintenance-downtime hours to the designated department and its preregistered pool by allocated enclosure area-hours. Record actual cohort-use hours on the identical lifetime basis, require nonoverlapping interval allocation and cumulative manufacture shares <= 1. At retirement allocate any unassigned manufacturing remainder to all historical beneficiaries using their recorded allocated lifetime hours; correct affected prior datasets, retaining immutable original and correction links. Lifetime forecasts/revisions update the same ledger and cumulative background balance, never purchase another full manufacturing background. Manufacture, maintenance and end-of-life package boundaries must be evidenced; maintenance not included must be separately inventoried by actual material/service and end-of-life allocated by the same lifetime shares before completeness. A complete enclosure package excludes separately recorded replacement parts from its overlapping period/coverage; no package-plus-component duplication. |  |
| carriage_coverage | carriage and zero-distance physical work | Use t*km only with an evidenced supplier service factor whose boundary covers actual idling, failed visits/loading attempts and allocated empty return legs. Retain event IDs, loaded/empty distance, duration and measured fuel/electricity for each event. If t*km = 0 but the event consumed energy, or the factor omits these activities, do not assign zero: isolate the actual event fuel/electricity and supplier activity in a separate purchased transport-event service with its own explicit event unit, component inventory and allocation; extend with one atomic card per missing carrier/service and linked protocol, independently review and resync before claiming completeness. Do not also apply the t*km factor to the same included event fuel. Until that event model and provider scope are supplied, the dataset is incomplete; downstream modellers cannot choose a silent cut-off. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | holding | cohort, N and L | individual register and signed transfer | animal ID; species; weaned status; supplier; procurement/custody responsibility; receipt, checks, location and disposition timestamps; first sale; commercial refund amount/reason; final qualifying acceptance and explicit acceptance-revocation/cancellation state and evidence; physical return; external retained-custody F and recipient responsibility; resale; rejection; death D; missing M; intact supplier return R; preregistered pool ID, configuration and fixed window; acceptance and care-information receipt; return deadline; upstream background link; source_record_id; ledger_id; event_id; view_process_id | This holding view filters one authoritative raw ledger by holding process and the named row role; record source_record_id, ledger_id and event_id without duplicating source measurements. Record every custody event at store, daily census and care/environment observations; trace each refund to original sale. Close only when all individuals have final disposition and all accepted-sale return windows expire. Reopen/correct the original pool for late physical returns and all subsequent actual quantities, N and disposition/background changes; preserve version links and prohibit duplicate reassignment to a new pool. Pure financial concessions without acceptance revocation do not change N or physical disposition. Aggregation: Reconcile acquired = final accepted N + intact supplier returns R + deaths/irrecoverable losses L + documented failed external retained-custody F; no births in this route and no closing stock at closure; no unknown balance. Pre-acceptance rejected arrivals stay outside A with supplier product responsibility, but their measured store reception/rejection work is assigned to this cohort and included in q_i; retain rejection records and do not erase these burdens. Sum complete custody hours; normalize only after closure. | Item(s); h | every event and daily | entire cohort life including returns | one declared store and acquisition cohort | per reference flow | signed supplier/buyer/return records; death logs; daily count; background responsibility chain |
| cp_custody_handover | handover | final accepted service and N | individual register and signed transfer | animal ID; species; weaned status; supplier; procurement/custody responsibility; receipt, checks, location and disposition timestamps; first sale; commercial refund amount/reason; final qualifying acceptance and explicit acceptance-revocation/cancellation state and evidence; physical return; external retained-custody F and recipient responsibility; resale; rejection; death D; missing M; intact supplier return R; preregistered pool ID, configuration and fixed window; acceptance and care-information receipt; return deadline; upstream background link; source_record_id; ledger_id; event_id; view_process_id | This handover view uses the same cp_custody authoritative raw ledger and source_record_id/ledger_id/event_id; filter only handover records for the named row role. Cross-view reconciliation reuses those IDs, not a second measurement or second q_i/N normalization. Record every custody event at store, daily census and care/environment observations; trace each refund to original sale. Close only when all individuals have final disposition and all accepted-sale return windows expire. Reopen/correct the original pool for late physical returns and all subsequent actual quantities, N and disposition/background changes; preserve version links and prohibit duplicate reassignment to a new pool. Pure financial concessions without acceptance revocation do not change N or physical disposition. Aggregation: Reconcile acquired = final accepted N + intact supplier returns R + deaths/irrecoverable losses L + documented failed external retained-custody F; no births in this route and no closing stock at closure; no unknown balance. Pre-acceptance rejected arrivals stay outside A with supplier product responsibility, but their measured store reception/rejection work is assigned to this cohort and included in q_i; retain rejection records and do not erase these burdens. Sum complete custody hours; normalize only after closure. | Item(s); h | every event and daily | entire cohort life including returns | one declared store and acquisition cohort | per reference flow | signed supplier/buyer/return records; death logs; daily count; background responsibility chain |
| cp_material | holding | hay, feed, water, litter, cleaner, carrier | weighed issue and stock ledger | material identity; lot; composition/concentration; moisture; initial/closing stocks; receipts; issues; unused returns; loss; net/gross/tare; kg or volume; density conditions; species/cohort tags; conditional occurrence; source_record_id; ledger_id; event_id; view_process_id element_coverage claim; source_portion_id; element C/N; actual same-state material kg; measured dry_matter_fraction; dry-basis elemental_fraction and assay; live original-ID opening/closing mass and supported whole-body C/N; full external element paths; signed element residual and uncertainty; included-carrier overlap map | This holding view filters one authoritative raw ledger by holding process and the named row role; record source_record_id, ledger_id and event_id without duplicating source measurements. Weigh at each feed preparation, water refill, litter change, cleaning dilution and carrier issue with calibrated scales or meter plus traceable density; retain disinfectant label suitability and veterinary diet instructions. Purchases alone cannot establish use. Aggregation: opening + receipts - closing - unused outward returns = material use; separate feed/nesting tags, allocate shared use, retain discarded material once in soiled litter. Sum q_i then q_i / N. | kg | each issue and weekly stock reconciliation | all custody intervals and final cleanout | dedicated cohort or allocated pool | per reference flow | calibration; invoices; lot/label; moisture/density evidence; inventory reconciliation |
| cp_material_hygiene | hygiene | sodium hypochlorite solution | weighed issue and stock ledger | material identity; lot; composition/concentration; moisture; initial/closing stocks; receipts; issues; unused returns; loss; net/gross/tare; kg or volume; density conditions; species/cohort tags; conditional occurrence; source_record_id; ledger_id; event_id; view_process_id | This hygiene view uses the same cp_material authoritative raw ledger and source_record_id/ledger_id/event_id; filter only hygiene records for the named row role. Cross-view reconciliation reuses those IDs, not a second measurement or second q_i/N normalization. Weigh at each feed preparation, water refill, litter change, cleaning dilution and carrier issue with calibrated scales or meter plus traceable density; retain disinfectant label suitability and veterinary diet instructions. Purchases alone cannot establish use. Aggregation: opening + receipts - closing - unused outward returns = material use; separate feed/nesting tags, allocate shared use, retain discarded material once in soiled litter. Sum q_i then q_i / N. | kg | each issue and weekly stock reconciliation | all custody intervals and final cleanout | dedicated cohort or allocated pool | per reference flow | calibration; invoices; lot/label; moisture/density evidence; inventory reconciliation |
| cp_material_handover | handover | corrugated-board carrier | weighed issue and stock ledger | material identity; lot; composition/concentration; moisture; initial/closing stocks; receipts; issues; unused returns; loss; net/gross/tare; kg or volume; density conditions; species/cohort tags; conditional occurrence; source_record_id; ledger_id; event_id; view_process_id | This handover view uses the same cp_material authoritative raw ledger and source_record_id/ledger_id/event_id; filter only handover records for the named row role. Cross-view reconciliation reuses those IDs, not a second measurement or second q_i/N normalization. Weigh at each feed preparation, water refill, litter change, cleaning dilution and carrier issue with calibrated scales or meter plus traceable density; retain disinfectant label suitability and veterinary diet instructions. Purchases alone cannot establish use. Aggregation: opening + receipts - closing - unused outward returns = material use; separate feed/nesting tags, allocate shared use, retain discarded material once in soiled litter. Sum q_i then q_i / N. | kg | each issue and weekly stock reconciliation | all custody intervals and final cleanout | dedicated cohort or allocated pool | per reference flow | calibration; invoices; lot/label; moisture/density evidence; inventory reconciliation |
| cp_utility | holding | electricity and store allocation | meter and allocation register | meter ID; initial/final kWh; dates; supplier; voltage; equipment; area; operation/readiness hours; all-store denominator; animal-hours; allocation fractions | Read submeter daily and at cohort transitions; reconcile bills and all departments; capture continuous climate-control duty and cleaning/till share; use observed operation rather than rated power unless validated by measurements. Aggregation: Apply subdivide to q_kWh, then q_i = 3.6 * q_kWh and q_i / N; allocated totals reconcile to meters. | kWh; MJ | daily and each billing period | entire occupancy including nights and empty readiness | whole store with separate department pools | per reference flow | meter calibration; bills; floor plan; dated operating logs |
| cp_asset | holding | complete enclosure and maintenance boundary | asset service-life register | asset ID; complete configuration; included parts; install/retire dates; actual/expected lifetime hours and evidence; commissioning and all-beneficiary interval ledger; occupied/readiness hours; cumulative manufacture fractions; retirement remainder and corrections; cohort-use hours; repair service coverage; end-of-life destination | Inspect housing configuration on intake and changes, collect supplier complete-unit manufacture/maintenance/end-of-life dataset boundary and actual asset history; disclose censored lifetime and sensitivity; no invented lifespan. Aggregation: Follow asset_ledger; sum allocated occupied/readiness cohort-use hours / the same persistent documented total service-life hours by complete unit, then divide by N; no components counted again. Missing maintenance/end-of-life coverage blocks complete dataset until the compatible service dataset is supplied. | Item(s); h | installation, change and retirement; each cohort | complete asset life with disclosed forecast | housing assets used by cohort | per reference flow | serial asset records; supplier bill of materials and boundary; retirement evidence |
| cp_event | holding | veterinary episodes and purchased carriage | completed service invoice and trip record | animal IDs; event date; vet reason; completed episode ID; treatment/package inventory; travel inclusion; supplier; gross consignment kg; actual loaded/empty distance; idling duration; failed attempt; event fuel/electricity and scope; empty-leg allocation; return purpose; absence attestation | Capture each completed visit and post-receipt trip, verify supplier service scope against invoices and care logs; verify no-event claims with complete logs. Do not include separately invoiced onsite drugs in this route. Aggregation: Count completed vet episodes once; sum allocated kg * km / 1000 for carriage only outside vet package; divide each q_i by N. | Item(s); kg; km; t*km | every event and weekly no-event review | all custody and return attempts | attributable animals and external service suppliers | per reference flow | provider scope confirmation; invoices; travel logs; treatment reconciliation |
| cp_waste | hygiene | wastewater; litter; carcass | weighing and receiver transfer | stream ID; animal/death links; net/gross/tare; wet mass; composition; moisture; wastewater volume/density; receiver; treatment route; storage time; transfer manifest; captured-species portion ID and analytical form; actual exported portion versus retained closing stock; same cp_air join IDs | Weigh each removed litter container and carcass before authorized transfer; measure wastewater discharge and reconcile water retained in litter, animals and evaporation. Verify actual treatment boundary. No carcass event needs zero-death and no-missing reconciliation. Aggregation: Sum each wet waste carrier q_i, allocate before q_i / N. Contents are composition only; split only an actual separately collected/treated stream. Route fractions per waste stream sum to one, applied once. Cross-check actual carrier transfer and named-species composition with cp_air; captured material still retained is a stock, not an export. Direct measured whole carrier mass already contains dissolved/adsorbed species: do not add a separate constituent exchange or subtract exterior gas kg again. Actual additional capture media require a specifically measured carrier card/protocol and bilingual sync before completeness; no equipment or capture fraction is presumed. | kg | every removal, death and discharge; daily closure | all holding and final cleanout | store to named receiver gate | per reference flow | calibrated weights/meters; receiver acceptance and treatment descriptions; water/material ledger |
| cp_air | holding | raw internal named-species source and terminal exterior gas balance | ventilation and species-specific gas record | gas identity; air receiving medium; concentration in/out mg/m3 as named molecular mass, not N/C equivalent; other-species screen including N2O; ventilation m3/h; duration h; animal occupancy; background/human separation; reading_mode absolute_or_corrected_difference; instrument subtraction components and time/flow basis; same-species indoor incremental background concentration and raw source evidence; target net concentration; correction uncertainty; detection limit; calibration; waste-storage conditions; source/control-volume IDs and sampling-plane location; raw G_s and rate/exposure basis; species-portion/source_record IDs; S_open_s/S_close_s compartments and dates; disjoint exported capture carrier IDs, receiver and actual transfer mass/speciation; F_s/D_s reaction/speciation evidence; exterior inlet/outlet/leakage path IDs; actual volumetric versus air-mass versus species-mass-rate flow; temperature, pressure, wet/dry basis and density conversion; Q_non_target_s evidence; occurrence/absence and uncertainty reconciliation element_coverage claim; source_portion_id; element C/N; actual same-state material kg; measured dry_matter_fraction; dry-basis elemental_fraction and assay; live original-ID opening/closing mass and supported whole-body C/N; full external element paths; signed element residual and uncertainty; included-carrier overlap map | For raw internal G_s, use representative occupied housing and store litter holding measurements across full operating conditions; retain inlet and indoor non-target-source background increment evidence for the same species, flow and period; derive each gas separately under exactly one reading mode. For absolute readings subtract inlet once and only the additional indoor non-target increment not yet removed. For instrument-corrected differences retain the instrument correction ledger and subtract only still-unremoved indoor non-target increments; never subtract inlet or the same background again. Unknown correction state or missing increment evidence remains unresolved, never zero. An alternative original factor requires species, diet, waste state, temperature, measurement plane and time/exposure match plus independent review. Its documented boundary must identify raw internal source versus already terminal exterior release and all included capture/storage/transformation corrections; apply each correction once, never reprocess a terminal factor as G_s. No factor or capture fraction is a default here. Aggregation: first integrate raw source G_s with air_mass, retain stocks/carriers/transformations, then reconcile terminal_species_balance against independent exterior_flux. Prefer full actual pool measurements. For sampled source sublots retain r_s_j in kg of named species/h per exactly described enclosure/animal-occupancy configuration and actual matched sublot exposure H_j in h; sum G_s = sum(r_s_j * H_j) once across disjoint source/period strata. Do not multiply a measured sublot rate by animal count again; different occupancy/configuration needs its own measured stratum. Attribute only reconciled terminal E_s to the pool once, then q_i / N. Below detection is a bounded uncertainty interval; unknown source coverage, stock/pathway or closure is unresolved. | mg/m3; m3/h; kg-air/h; kg-air/m3; mg-species/h; kg-species/h; h; kg | continuous or stratified samples spanning each operating condition | all source/stock/exterior intervals through each actual waste handover | declared internal source planes plus whole-store actual exterior boundary; exclude downstream treatment | per reference flow | instrument calibration; raw concentration/airflow series; detection limits; representativeness and origin evidence; independent exterior-flow cross-check; signed stock/carrier balance; reaction/speciation and source-attribution records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all non-reference rows | q_ref = q_i / N; first assign measured quantities to the closed cohort under subdivide, then normalize exactly once. loss_animal uses L / N. retail_service = N / N = 1 Item(s). | q_i; N; L; cp_custody; cp_custody_handover | exchange amount per reference flow |  |
| air_mass | ammonia; methane; biogenic_co2 | G_s = sum(C_target * V * dt) * 0.000001. Absolute-reading mode: C_target = C_out - C_in - B_increment. B_increment is only the indoor non-target-source concentration increment of the same molecular species on the same flow/time basis still present after inlet correction; it excludes outdoor background already removed through C_in. Instrument-corrected-difference mode: C_target = D_instrument - B_remaining, where the documented instrument subtraction ledger identifies inlet and background components already removed; B_remaining includes only still-unremoved indoor non-target increments. The two modes are mutually exclusive; never subtract C_in or the same background twice, and unknown corrections cannot be set to zero. Concentration mg/m3, V m3/h, dt h, G_s raw internal kg of the named molecular species; calibrate zero/span and volume flow and convert any reported N/C equivalent explicitly before integration. Do not clamp unresolved negative net values to zero; investigate background/uncertainty. Do not multiply a direct gas-mass factor again by nutrient fraction. This is source-plane integration only; carry raw G_s without normalization to terminal_species_balance, not directly to the elementary card. In source-stratified sampling, r_s_j * H_j uses disjoint measured configuration-specific source exposure once, as recorded in cp_air. The concentration-difference form uses V only when actual source inlet/outlet flow compatibility is evidenced. Otherwise use actual separate source inlet/outlet absolute volume fluxes and an independently evidenced non-target kg correction with the same consistent mass-flux algebra as exterior_flux, evaluated at the declared internal source planes; do not assume equal flows. Preserve the two mutually exclusive correction modes. | reading_mode; C_out; C_in; B_increment; D_instrument; B_remaining; correction_ledger; V; dt; cp_air | raw internal named-species G_s kg, unnormalized |  |
| animal_partition | cohort products and service | A = N + R + L + F after closure; A = received acquired animals; R = intact supplier returns with retained responsibility; L = actual deaths D plus irrecoverable losses M; F = documented external retained-custody animals after commercial reversal under failed_external. Animal background responsibility = N individually linked successful animals + F individually linked external recipient animals outside service + L loss_animal inside service; R continues at supplier, never an avoided-production credit. | A; N; R; L; F; D; M; cp_custody; cp_custody_handover | closed background responsibility partition |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| terminal_species_balance | ammonia; methane; biogenic_co2 | E_s = G_s + S_open_s - S_close_s - X_s + F_s - D_s, all terms kg of the same actual named molecular species over one matched store-custody interval. G_s is the raw attributed net transfer from declared housing/litter source planes into the downstream indoor-air/capture control volume; it is not normalized. S_open_s and S_close_s are attributable stocks in that downstream indoor air, surfaces or actual capture inventory, entering with plus opening and minus closing signs; original un-emitted feed/litter contents are not such capture stocks. X_s is only disjoint named-species mass physically exported in actual technosphere carriers during the interval, excluding closing stock and previous recorded exports. Internal transfers or recirculation are neither X_s nor exterior release. F_s and D_s are independently evidenced formation and consumption of this molecule in downstream transport/storage/capture; require measured speciation, reaction/pathway evidence and traceable stoichiometric molecular-mass conversion, not an assumed loss fraction. A converted species such as ammonium is not automatically molecular ammonia: use its evidenced transformation and actual carrier composition, without counting the same captured portion in both X_s and D_s. A carrier already records the whole measured dissolved/adsorbed constituent mass as composition; never add it again as a constituent waste or air output or deduct E_s again from directly measured carrier mass. Retained capture is S_close_s until physically exported, then only X_s on the corresponding interval; carry S_close_s into next S_open_s with the same IDs and original source/pool responsibility. Later release/export or transformation of that stock corrects the original pool actual numerator; do not attribute the same portion again to a later pool. A retained closing stock does not prove zero future release; unresolved final fate prevents a complete custody/lifetime emissions claim. A new actual carrier or direct water/soil environmental transfer outside existing waste cards requires its own specific atomic card/protocol and bilingual sync before completeness, not an invented generic capture flow. Reconcile E_s against exterior_flux; retain and investigate signed values and uncertainty, with no unsupported uptake/avoided-emission credit. Inventory q_i is the reconciled attributable E_s sum for the original pool; normalize q_i / N once. This species-specific equation establishes only the named-species control-volume closure, not total carbon or nitrogen closure. A TOTAL C/N claim additionally requires the complete measured element ledger under element_coverage; until that ledger passes, disclose total-element coverage as unverified and do not infer it from animal count or gas balance. | G_s; S_open_s; S_close_s; X_s; F_s; D_s; cp_air; cp_waste | reconciled terminal E_s kg before allocation/normalization |  |
| element_coverage | holding | For e=C and N separately and one complete period/control volume verify I_e+S_open_e=O_e+S_close_e+R_e. I/O are actual element kg in every external source/exit: feed, litter, water/formulations, received/handed-over/transferred live animals, carcasses, actual manure/urine/mixed carriers and separate air/water/soil paths; S covers animals, unused feed/litter, held residuals and actual air/capture stocks. Derive element kg from actual same-state material kg times measured dry-matter fraction and evidenced dry-basis elemental mass fraction, OR direct element measurement, exclusively and once. For animals obtain same-original-ID opening/closing mass and supported whole-body elemental composition; growth is QA of these stock changes, not an extra exit. A source portion/species/capture already contained in a complete mixed carrier or stock cannot enter the element sum again. Convert molecular exports using their actual chemical composition to element kg, excluding other atoms. Internal transfers cancel; cover or substantiate the measurement/materiality screen for all actual C/N imports and other species including possible N2. Respiratory CO2/ammonia do not replace the full element total. R_e is a signed investigated residual assessed against calibrated uncertainty, never a default emission or credit. Missing composition/outlets/stocks or unexplained residual blocks a total-element closure claim; retain the specifically completed species-level coverage, with no invented elemental factor. | cp_material; cp_air; source_element_kg; animal_open_close_mass; dry_matter_fraction; elemental_fraction; all_external_element_paths; I_e; O_e; S_open_e; S_close_e; R_e | named C/N closure or explicitly unverified coverage |  |
| exterior_flux | ammonia; methane; biogenic_co2 | Independently measure actual exterior ventilation, leakage and other documented air-crossing paths. Absolute mode: E_check_s = 0.000001 * sum((C_ext_out_s * V_ext_out - C_ext_in_s * V_ext_in) * dt) - Q_non_target_s; use each actual inlet/outlet flow, not an assumed equal ventilation volume. Concentrations are actual molecular mg/m3, V actual m3/h on matching temperature/pressure and wet/dry basis, dt h and Q_non_target_s independently evidenced indoor non-target species kg over the same interval, not outdoor background already removed at the inlet. Corrected-difference mode may use instrument net species mg/h or kg/h integrated in time: multiply integrated mg/h * h by 0.000001 for kg, while kg/h * h already gives kg; its correction ledger must identify prior inlet and indoor-background removal, subtract only still-unremoved components and never multiply an already mass-rate signal by another airflow. Differential concentration requires documented compatible matched flow before conversion. If the instrument reports air mass flow kg-air/h, convert to m3/h using measured air density kg-air/m3 at the same conditions before multiplying mg-species/m3; alternative mass concentration mg/kg-air needs its own consistent measured basis. Mutually exclusive modes and unit conversions apply at each measurement plane. Unknown exterior paths, volume basis or background attribution are incomplete, not zero. Compare independently attributed E_check_s to terminal_species_balance on identical boundaries and intervals; do not force agreement with an invented capture fraction. | C_ext_out_s; V_ext_out; C_ext_in_s; V_ext_in; dt; Q_non_target_s; correction_ledger; air_density; cp_air | independent actual exterior E_check_s kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all exchanges | Bind a UUID only after original official record plus matching receipt establish public state, type, property/unit and exact object; retain official Chinese baseName. Blank flow UUID is unverified, not evidence of absence. Service identity is distinct from animal identity. | direct-read evidence and binding audit |
| completeness | conditional rows and unknowns | Document observed presence or evidenced absence for every conditional card. Unknown quantities, pathways, service-package contents and emitted gases remain unresolved and block a complete dataset; never replace them by zero. Keep estimates, detection intervals and sensitivity distinct from verified observations. | coverage matrix and unresolved ledger |
| period | all records | Use one closed preregistered accounting pool under pool_allocation with explicit timestamps and return policy; inventory quantities and N have identical lifetime coverage. Store-period data must be allocated using recorded animal-/area-hours and cannot use current-month sales to erase earlier or later holding costs. | cohort closure; meter and stock reconciliations |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| gas_terminal_closure | ammonia; methane; biogenic_co2; wastewater; soiled_litter | For each named gas, retain source-plane, room/duct/capture stock and actual exterior inlet/outlet records with compatible time intervals, temperature, pressure and wet/dry volume basis. Each measured carrier/species portion has one source_record_id and one exclusive fate: closing stock, actual exported carrier, evidenced transformation or exterior net flux. Reconcile G_s, signed opening/closing stock contributions, X_s, F_s, D_s and independently measured exterior E_check_s within documented propagated uncertainty; unresolved imbalance or species/source attribution blocks completeness, never becomes zero. Separate outdoor inlet correction and actual indoor non-target store/human sources once at each independently defined measurement plane; exterior verification is not another subtraction from the internal source balance. | source/stock/carrier/speciation ledger and independent exterior flux with common IDs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| check_basis | reference and all rows | Require reconciled cp_custody/cp_custody_handover closure, N > 0, A = N + R + L + F, exact 1 Item(s) service reference and one q_i / N conversion per row. No kg animal substitution or phantom output for death, refused sale, refund, internal transfer or supplier return. |  |
| check_scope | scope, identity and evidence | Verify actual species and dry-feed/fan-resistance route, non-specialized store classification, supplier responsibility and all conditional logs; outside-route activities require extension. Check every row type, unit, direction, official UUID chain and bilingual counterpart. Unbound identities remain candidate completion conditions, never verified or published methodology. |  |
| check_double_count | background, packages and emissions | Reconcile successful-animal upstream links plus L background exactly once, package inclusion, carrier contents, treatment gate, stock balances and utility allocations. Require gas coverage and explicit biogenic-carbon accounting without unsupported zero or credit. Verify all named rows, protocols and rules project into structured guidance. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| check_terminal_species | ammonia; methane; biogenic_co2; wastewater; soiled_litter | For every gas row, require terminal species balance and independent actual whole-store exterior flux agreement within evidenced uncertainty, a complete source/capture/stock/transformation/actual-carrier fate ledger and matched named-molecule units/conditions. Assert raw internal G_s is not directly emitted or normalized twice; captured retained versus exported portions are disjoint and already contained in measured carriers, and factor boundary corrections occur once. Unknown occurrence, attribution, pathway or unresolved closure fails completeness and cannot be zero-filled. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Partial incremental foreground unit-process retail service inventory; not a complete retail life-cycle footprint. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Incremental guinea-pig retail service at the declared store gate; combine with N successful animal product backgrounds using animal_partition. |
| excluded_use | Animal production footprint; whole pet lifetime; all live-animal species or all CPC 62114 routes; welfare certification; complete results while identity/quantity gaps remain. |
| required_metadata | Required qualifiers; all protocol coverage; source period; supplier scopes; background links; allocation denominators; conditions; reference and row identities. |
| required_quality_disclosure | Unbound UUIDs; missing gases/measurements; lifetime forecasts; loss/return uncertainty; excluded building/customer gates; treatment and maintenance coverage. |
| update_trigger | Species, feed, housing, heating/cooling, disinfectant, supplier scope, return policy, waste route or authoritative evidence changes; correction after late returns. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| defra-pet-sale-2026 | official_guidance | Defra, Selling animals as pets licensing: statutory guidance for local authorities, updated 1 June 2026, Parts A/B/F. https://www.gov.uk/government/publications/animal-activities-licensing-guidance-for-local-authorities/selling-animals-as-pets-licensing-statutory-guidance-for-local-authorities--2 | Species-specific retail care and record activities only; England scope, no LCA default amounts, allocation formula or universal compliance threshold. |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 6, 7, 9; printed pp.27–35, 62–65. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General service functional-unit, boundary disclosure, GHG screening and subdivision/physical-allocation framework; PCR-specific pools, drivers and partial scope are author choices, not source mandates or whole-standard conformity. |
