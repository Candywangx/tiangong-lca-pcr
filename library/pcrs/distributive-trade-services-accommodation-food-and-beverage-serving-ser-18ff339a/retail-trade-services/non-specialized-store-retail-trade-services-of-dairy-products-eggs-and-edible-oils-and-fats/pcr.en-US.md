---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-dairy-products-eggs-and-edible-oils-and-fats
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Ambient retail services for refined sunflower oil in sealed glass bottles

## 1. Scope and Applicability

This PCR defines the incremental retail service for one homogeneous oil/package/channel configuration. It is a methodology design, not a measured store dataset. The official classification also covers processed milk/cream/whey, other dairy, preserved/cooked shell eggs and other fats/oil products; none is covered by this narrow service. Actual supplier labels determine conformity of the purchased goods. All quantities are collected, not numerical defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-dairy-products-eggs-and-edible-oils-and-fats |
| classification_refs | CPC 3.0 62122; narrower: only the specified vegetable-oil retail route, not the whole subclass |
| covered_products | Retail service for unopened 1000 mL nominal dark-green Marasca glass bottles of refined conventional sunflower seed oil, Helianthus annuus; sole ingredient sunflower oil; no added flavouring; actual bottle/cap/pourer/label specification recorded |
| excluded_products | Oil manufacture, filling or repacking; crude/cold-pressed/high-oleic/mid-oleic oils; oil blends, other fats and oils; dairy, whey and eggs; oil-cake/residues; bulk dispensing; online ordering, delivery and refrigerated or heated merchandise holding |
| representative_product | Ambient retail services for refined sunflower oil in sealed glass bottles; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Retailer receiving gate → manual trolley put-away → ambient steel shelf → customer self-selection → staffed POS checkout → accepted walk-in handover; no retailer vehicle leg after receipt |
| market_state | Shelf-stable unopened liquid oil in intact food-contact glass packaging, cool/dry/dark to current supplier label; no universal temperature, shelf life or density assigned |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the specified in-store retail service, retaining bottle integrity, traceability and declared supplier storage conditions |
| How much | 1 kg net oil content finally accepted through this service, Q > 0 |
| How well | Correct SKU/lot and sealed intact bottle, readable identity/date label, documented compliance with current supplier storage instructions, accepted by customer; price discount or refund alone changes neither physical status nor Q |
| How long or cycle | Prospectively declared complete same-configuration reporting pool, from receiving through resolved handover/return/fate; actual residence and failed/idle/closed periods retained; late events reopen original pool |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retail service for sealed glass-bottled refined sunflower oil |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU and supplier/label revision; botanical identity and refining status; bottle/cap/pourer/label specification; nominal and measured fill; net/gross/tare records; density method and temperature if volume converted; store/channel and absent-equipment audit; pool dates and late-event cutoff; accepted/returned/refused event IDs; storage-condition evidence; shared-driver and asset-ledger versions; merchandise background responsibility and receiving gate |

Declare every required qualifier in dataset metadata or equivalent fields. The service-flow UUID is intentionally absent pending an exact service identity; the mass property expresses net-oil throughput only.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_service_mass | retail_service; failed_oil_background | Mass | kg | Measure net oil, excluding all packaging, using calc_oil_mass and cp_events; keep the service/reference flow distinct from traded oil. |
| electric_energy | store_electricity | Net calorific value | MJ | Convert kWh to MJ by 3.6 only after causal attribution; no reference-mass rule applies to this electricity numerator. |
| package_count | building_acquisition; building_terminal; shelf_acquisition; shelf_terminal; pos_acquisition; pos_terminal; trolley_acquisition; trolley_terminal | Number of items | Item(s) | Count one explicitly specified complete physical device/construction/event/terminal package. Never substitute repair-material mass, operating time or distance for an item. Exposure fractions retain their own units in the ledger. |
| whole_carrier | discarded_bottle; decanted_oil; broken_glass; cleaning_effluent; oily_pad_waste | Mass | kg | Use actual whole-carrier mass with its specified moisture/oil content, not net product mass or duplicated constituents; direct and reconstructed modes are mutually exclusive. |
| split_labour_time | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance | Time | h | Use signed actual purchased labour hours only; order counts, area and asset counts cannot replace h. Materials, energy, tools, travel and wastes are independent exchanges. In-house hours are QA only, with no invented purchased exchange; normalize attributed hours once by the original final reference denominator. |
| selected_energy_identity | split_support_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | The selected AC identity has one reference energy property. Keep actual attributed quantities in the row unit;1kWh=3.6MJ in its unit group. Convert once before combining with a source expressed in another energy unit or supplying the reference-MJ exchange; never convert the same numerator twice or infer a supplier mix. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Retailer custody at documented store receiving gate of sealed refined sunflower oil bottles; all pre-gate production/primary packaging/inbound transport remain in packaged-merchandise background ledger |
| starting_condition_role | Incremental retail service with explicit failed-merchandise coupling and full supporting-store asset attribution |
| product_classification_scope | CPC 3.0 62122 includes vegetable oils among several groups; this is a narrower service for the defined oil, bottle and store route |
| recursive_input_rule | An incoming retail-service dataset is not the oil. Reuse only a disjoint upstream service with its gate disclosed; never recurse by adding this service to itself. Supplier-return and resale histories retain one merchandise-origin ID |
| upstream_dataset_requirement | Successful merchandise background is aggregated once by downstream product modeller; failure/background row covers the same receiving gate including primary package and inbound delivery. Electricity, capital, maintenance, terminal and waste providers need explicit disjoint boundaries |
| disclosure | Report service-only boundary and downstream assembly equation, Q and gross physical ledgers, unsuccessful external retention, unresolved fate/identity, all provider coverage and site restrictions; no oil footprint or full-standard conformity is implied |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| scope_gate | retail | Apply only to a walk-in non-specialized store with manual handling, natural ventilation, mains-powered lighting/POS, no HVAC, cold room, lift, standby generator or retailer transport after receipt. Verify every absence by dated equipment/route survey. Other actual equipment or exchanges require named atomic cards, collection protocols and bilingual projection before completeness; unknown presence is not absence. | jrc-retail-2013; un-cpc62122 |
| oil_storage | retail | Keep unopened refined conventional sunflower oil and exact current package identity separate from crude, cold-pressed and fatty-acid variants. Record label-specific cool/dry/dark conditions, lot/date/closure integrity and measured dwell; manufacturer examples support feasibility only, not a mandatory temperature, density, shelf life or a universal packaging composition. | spack-refined-oil; spack-packaging |
| merchandise_owner | retail; residual | Exclude background production, primary packaging and pre-receipt inbound delivery only for eventual qualified merchandise output or documented saleable stock carried forward. The service owns the same receiving-gate background for all irrecoverable loss, damage, theft and failed external retention and supplier returns until a signed continuing-responsibility transfer or verified future qualified resale assigns it once. Record recipient, state, receiving-gate burden owner and unique origin on each transfer; an unresolved transfer blocks completeness. Never assign waste merely because an order fails. | ghg-product-2011 |
| return_pool | retail; residual | Declare the pool before results; retain failed and zero-sale cohorts and all idle/closed periods. Q counts final qualified acceptance once per unique merchandise mass, less reversed acceptance, plus only reacceptance needed to restore the same mass once. Financial refunds without reversed qualification do not subtract Q; internal transfers and external retention without qualification never create Q. Late returns revise the original Q, service numerator, fate and background responsibility using actual event dates; prior retail work remains in that original pool and cannot be reassigned as new work. Q=0 pools remain unnormalizable and carried with their burden records. | ghg-product-2011 |
| asset_packages | assets | Include full building shell/fixed lighting/wiring/plumbing construction-and-installation package, steel shelf assembly, complete POS workstation (scanner/printer/payment device) and manual trolley. Each has distinct acquisition, event maintenance and terminal-service cards. Building excludes the three movable devices; device acquisition excludes operation/maintenance/terminal care. Terminal services include actual collection/transport/treatment of the complete remaining object and documented removed parts; no additional waste-treatment dataset for the same carrier. Required material, utility and emissions inside an evidenced complete provider package are not separately duplicated. Unsupported package coverage blocks completeness. | jrc-retail-2013; ghg-product-2011 |
| carrier_media | cleaning; residual | Measure each actual waste carrier and treatment route. Whole discarded bottles, decanted oil, glass fragments with adhered oil, oily polypropylene pads and sewer-bound cleaning effluent are disjoint terminal portions. Do not count oil on pads or in effluent again as decanted oil or environmental emission. Indoor spill is not an elementary release; verify impermeable containment and sewer routing. An observed final release to air/water/soil requires a specific substance/medium card and direct mass reconciliation before completeness; no default emission or zero escape is assumed. | jrc-retail-2013 |
| split_exchange_identity | all inventory rows | Each card has exactly one concrete exchange identity and one reference measurement property/unit; a unit group is not a second property, and auxiliary measurements are conversion evidence only. Labour cards no longer carry bundled materials/energy/equipment/wastes. Retained complete homogeneous assets, original packaged goods and real mixed waste carriers require matching actual whole-scope background/receiver treatment and full composition; heterogeneous collections or selectors are prohibited. An original exchange enters one core card or one split source only; reverse all old package characterization when replacing it and combine only disjoint raw quantities with identical identity/property/unit. Every other actual substance, part, fuel, refrigerant, emission and treatment gap requires a named bilingual card and process protocol; unknown is never zero or complete. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Receiving, ambient shelf and walk-in checkout | required | Every selected service pool | Retail output and direct store operation | per 1 kg reference flow |
| assets | Full supporting-store assets | required | All four assets throughout their life; maintenance events conditional on occurrence, terminal obligation retained before retirement | Disjoint acquisition, maintenance and terminal packages | per 1 kg reference flow |
| cleaning | Floor sanitation and oil-spill response | conditional | Actual cleaning/spill activity; require dated event/absence records; unknown activity incomplete | Cleaning inputs and disjoint wet carriers | per 1 kg reference flow |
| residual | Failed merchandise responsibility and terminal carriers | conditional | Any loss, refused/reversed transfer or terminal merchandise/carrier; dated zero-event proof otherwise; externally retained failed goods still need responsibility records | Receiving-gate background and actual waste fates | per 1 kg reference flow |
| split_support | Separate physical exchanges of cleaning or maintenance | conditional | Actual occurrence; prove presence or absence for each exchange | Disjoint resources, equipment and waste | retail_service |

### Process: Receiving, ambient shelf and walk-in checkout (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`store_electricity`)

Electricity enters the supporting store at point of use for shelf lighting and the staffed checkout, retaining all attributed closed and idle operation.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6*attributable recorded kWh/Q using the full-pool causal allocation equation and the exact kWh-to-MJ equation; point of use only; actual grid/provider/voltage and upstream delivery losses remain separately identified background requirements
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources: `ghg-product-2011`

###### Coreless thermal receipt paper roll (`receipt_paper`)

The defined thermal paper enters the POS printer, including receipts generated for failed or reversed transactions.

- Selected flow: Coreless thermal receipt paper roll
- Flow property / unit: Mass / kg
- Amount rule: Actual paper mass consumed for this service, including voided receipts and stock changes, divided by Q; absent only with complete paperless POS evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_checkout`
- Sources: `jrc-retail-2013`

###### High-density polyethylene carrier bag (`carrier_bag`)

The identified HDPE bag is an additional retailer-issued package for the intact glass bottle; customer-retained primary bottle packaging is separate.

- Selected flow: High-density polyethylene carrier bag
- Flow property / unit: Mass / kg
- Amount rule: Mass actually issued or wasted for these bottles/Q, correcting opening/closing bag stock; no bag only with issue records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_checkout`
- Sources: `jrc-retail-2013`

#### Outputs

##### Product flows

###### Retail service for sealed glass-bottled refined sunflower oil (`retail_service`)

This output is the successful retail function applied to net oil throughput in the specified unopened bottle; the merchandise and its packaging are not manufactured by this process.

- Selected flow: Retail service for sealed glass-bottled refined sunflower oil
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_events`
- Sources: `spack-refined-oil`; `spack-packaging`; `ghg-product-2011`

##### Waste flows

###### Discarded thermal receipt paper (`receipt_waste`)

This is the single paper waste carrier retained at the store after printing; it crosses to its documented contractor without duplicating customer-held receipts.

- Selected flow: Discarded thermal receipt paper
- Flow property / unit: Mass / kg
- Amount rule: Actual retailer-retained discarded paper/Q; issued customer receipts stay with merchandise downstream, not retailer waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_checkout`
- Sources: `jrc-retail-2013`

###### Discarded high-density polyethylene carrier bag (`bag_waste`)

This is the actual retailer-retained discarded bag carrier; customer-retained issued bags stay in downstream disposal and are not repeated here.

- Selected flow: Discarded high-density polyethylene carrier bag
- Flow property / unit: Mass / kg
- Amount rule: Direct net measured retailer-discarded bag mass/Q, including damaged issue stock and physically returned bags actually discarded; do not include customer-retained bags
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_checkout`
- Sources: `jrc-retail-2013`

###### Discarded corrugated cardboard transit carton (`corrugated_waste`)

The emptied transit carton becomes retailer waste after shelf replenishment; actual contamination and receiving recycling/treatment route are recorded.

- Selected flow: Discarded corrugated cardboard transit carton
- Flow property / unit: Mass / kg
- Amount rule: Actual emptied carton waste attributed to these bottles/Q; incoming carton manufacture remains in receiving-gate merchandise background and is not duplicated here
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_checkout`
- Sources: `jrc-retail-2013`

### Process: Full supporting-store assets (`assets`)

#### Inputs

##### Product flows

###### Complete store building construction and fixed-installation service (`building_acquisition`)

The complete specified building asset or construction package provides the supporting-store capacity; it contains its manufacture/installation scope only, with operation, event maintenance and terminal treatment excluded.

- Selected flow: Complete store building construction and fixed-installation service
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_building*f_building/Q via the lifetime-exposure equation; full specification and provider exclusions in cp_assets; no sum of repair masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Fixed-building maintenance labour only (`building_maintenance`)

Actual purchased labour hours only; excludes materials, equipment lifecycle, electricity, travel, wastes and treatment. For in-house work retain hours as QA but do not invent a purchased service exchange. Record physical exchanges independently in split_support or named extensions, deduplicating existing cards.

- Selected flow: Fixed-building maintenance labour only
- Flow property / unit: Time / h
- Amount rule: Measured exclusive or once-attributed purchased labour h / Q; cp_split_labour_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_labour_assets`
- Sources:

###### Complete building decommissioning and treatment service (`building_terminal`)

The specified building terminal service covers one complete remaining object and its traceable removed parts, with actual treatment and transport inventory. Its life-stage responsibility is retained during current use even when retirement is future.

- Selected flow: Complete building decommissioning and treatment service
- Flow property / unit: Number of items / Item(s)
- Amount rule: Terminal package count Nend_building*g_building/Q using the single terminal-responsibility equation, once; life-stage model or actual terminal records required even before retirement, no default zero; cp_assets binds complete remaining carrier mass and removed-part lineage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete steel retail shelf assembly (`shelf_acquisition`)

The complete specified shelf asset or construction package provides the supporting-store capacity; it contains its manufacture/installation scope only, with operation, event maintenance and terminal treatment excluded.

- Selected flow: Complete steel retail shelf assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_shelf*f_shelf/Q via the lifetime-exposure equation; full specification and provider exclusions in cp_assets; no sum of repair masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Steel retail-shelf maintenance labour only (`shelf_maintenance`)

Actual purchased labour hours only; excludes materials, equipment lifecycle, electricity, travel, wastes and treatment. For in-house work retain hours as QA but do not invent a purchased service exchange. Record physical exchanges independently in split_support or named extensions, deduplicating existing cards.

- Selected flow: Steel retail-shelf maintenance labour only
- Flow property / unit: Time / h
- Amount rule: Measured exclusive or once-attributed purchased labour h / Q; cp_split_labour_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_labour_assets`
- Sources:

###### Complete shelf decommissioning and treatment service (`shelf_terminal`)

The specified shelf terminal service covers one complete remaining object and its traceable removed parts, with actual treatment and transport inventory. Its life-stage responsibility is retained during current use even when retirement is future.

- Selected flow: Complete shelf decommissioning and treatment service
- Flow property / unit: Number of items / Item(s)
- Amount rule: Terminal package count Nend_shelf*g_shelf/Q using the single terminal-responsibility equation, once; life-stage model or actual terminal records required even before retirement, no default zero; cp_assets binds complete remaining carrier mass and removed-part lineage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete POS checkout workstation (`pos_acquisition`)

The complete specified POS asset or construction package provides the supporting-store capacity; it contains its manufacture/installation scope only, with operation, event maintenance and terminal treatment excluded.

- Selected flow: Complete POS checkout workstation
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_pos*f_pos/Q via the lifetime-exposure equation; full specification and provider exclusions in cp_assets; no sum of repair masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### POS-terminal maintenance labour only (`pos_maintenance`)

Actual purchased labour hours only; excludes materials, equipment lifecycle, electricity, travel, wastes and treatment. For in-house work retain hours as QA but do not invent a purchased service exchange. Record physical exchanges independently in split_support or named extensions, deduplicating existing cards.

- Selected flow: POS-terminal maintenance labour only
- Flow property / unit: Time / h
- Amount rule: Measured exclusive or once-attributed purchased labour h / Q; cp_split_labour_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_labour_assets`
- Sources:

###### Complete POS decommissioning and treatment service (`pos_terminal`)

The specified POS terminal service covers one complete remaining object and its traceable removed parts, with actual treatment and transport inventory. Its life-stage responsibility is retained during current use even when retirement is future.

- Selected flow: Complete POS decommissioning and treatment service
- Flow property / unit: Number of items / Item(s)
- Amount rule: Terminal package count Nend_pos*g_pos/Q using the single terminal-responsibility equation, once; life-stage model or actual terminal records required even before retirement, no default zero; cp_assets binds complete remaining carrier mass and removed-part lineage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete manual steel goods trolley (`trolley_acquisition`)

The complete specified trolley asset or construction package provides the supporting-store capacity; it contains its manufacture/installation scope only, with operation, event maintenance and terminal treatment excluded.

- Selected flow: Complete manual steel goods trolley
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_trolley*f_trolley/Q via the lifetime-exposure equation; full specification and provider exclusions in cp_assets; no sum of repair masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Manual goods-trolley maintenance labour only (`trolley_maintenance`)

Actual purchased labour hours only; excludes materials, equipment lifecycle, electricity, travel, wastes and treatment. For in-house work retain hours as QA but do not invent a purchased service exchange. Record physical exchanges independently in split_support or named extensions, deduplicating existing cards.

- Selected flow: Manual goods-trolley maintenance labour only
- Flow property / unit: Time / h
- Amount rule: Measured exclusive or once-attributed purchased labour h / Q; cp_split_labour_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_labour_assets`
- Sources:

###### Complete trolley decommissioning and treatment service (`trolley_terminal`)

The specified trolley terminal service covers one complete remaining object and its traceable removed parts, with actual treatment and transport inventory. Its life-stage responsibility is retained during current use even when retirement is future.

- Selected flow: Complete trolley decommissioning and treatment service
- Flow property / unit: Number of items / Item(s)
- Amount rule: Terminal package count Nend_trolley*g_trolley/Q using the single terminal-responsibility equation, once; life-stage model or actual terminal records required even before retirement, no default zero; cp_assets binds complete remaining carrier mass and removed-part lineage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

### Process: Floor sanitation and oil-spill response (`cleaning`)

#### Inputs

##### Product flows

###### Municipal tap water (`cleaning_water`)

Imported tap water enters floor-cleaning or spill-response liquid preparation, separately from water already present in the delivered cleaning solution.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Direct imported cleaning-water volume*density at observed temperature, attributed once/Q; imported meter already excludes internal reuse, so do not subtract reuse
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Sources: `jrc-retail-2013`

###### Sodium dodecyl sulfate aqueous cleaning solution, declared supplier formulation (`sds_cleaner`)

One real formulated aqueous cleaning solution enters the documented sanitation event; supplier SDS and actual concentration define this mixture, not an unspecified chemical selector.

- Selected flow: Sodium dodecyl sulfate aqueous cleaning solution, declared supplier formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual delivered solution mass consumed in declared cleaning events/Q; record measured or supplier-verified concentration and formulation, not active mass alone; any different cleaner requires its own atomic card
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Sources: `jrc-retail-2013`

###### Polypropylene oil-absorbent pad (`absorbent_pad`)

The dry polypropylene pad enters the oil-spill response before absorbing oil or wash liquid; incoming dry mass differs from outgoing whole used-pad mass.

- Selected flow: Polypropylene oil-absorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Actual dry pads used in oil-spill response/Q, including failed response waste; no oil content in incoming dry mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Sources: `jrc-retail-2013`

#### Outputs

##### Waste flows

###### Oily aqueous floor-cleaning effluent to sewer treatment (`cleaning_effluent`)

The actual whole floor-cleaning liquid crosses the sewer gate as waste to treatment; it is not an elementary water emission.

- Selected flow: Oily aqueous floor-cleaning effluent to sewer treatment
- Flow property / unit: Mass / kg
- Amount rule: Metered discharged volume*rho_eff/Q only in direct mode; the whole-liquid-carrier equation in the exclusive reconstruction mode, including cleaner/oil mass; no evaporation/storage deduction from direct discharge measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Sources: `jrc-retail-2013`

###### Spent polypropylene absorbent pad containing sunflower oil (`oily_pad_waste`)

The used pad leaves the site as one real wet waste carrier with its retained oil and water; the carrier treatment provider must accept that actual contamination.

- Selected flow: Spent polypropylene absorbent pad containing sunflower oil
- Flow property / unit: Mass / kg
- Amount rule: Direct net weighed outgoing used-pad carrier/Q including retained oil/water; prohibit duplicate constituents and match waste contractor treatment and transport scope
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Sources: `jrc-retail-2013`

### Process: Failed merchandise responsibility and terminal carriers (`residual`)

#### Inputs

##### Product flows

###### Refined sunflower oil in sealed 1000 mL glass bottle at store receiving gate (`failed_oil_background`)

Only the receiving-gate background responsibility assigned to unsuccessful unique merchandise enters this incremental service; successful merchandise background remains for downstream aggregation.

- Selected flow: Refined sunflower oil in sealed 1000 mL glass bottle at store receiving gate
- Flow property / unit: Mass / kg
- Amount rule: F_gate/Q from the receiving-gate background-responsibility equation; same oil/packaging/inbound gate as successful goods, unique responsibility per origin, includes unresolved-failure burden retained until signed transfer or linked eventual resale; never all incoming stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources: `ghg-product-2011`; `spack-refined-oil`; `spack-packaging`

#### Outputs

##### Product flows

###### Refined sunflower oil in glass bottle retained externally without qualified acceptance (`external_retention`)

This is the actual packaged-oil transfer remaining with a named external recipient after an unqualified handover or later reversal without physical return. Record residual fill, closure/bottle state and responsibility; it is not retailer waste.

- Selected flow: Refined sunflower oil in glass bottle retained externally without qualified acceptance
- Flow property / unit: Mass / kg
- Amount rule: Actual externally retained unqualified net oil kg/Q; this is a role-specific subset of gross handovers H, not a second physical movement and never Q. Keep original-pool service numerator and receiving-gate background responsibility until documented continuing transfer; no avoided-product credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Glass-bottled refined sunflower oil physically returned to supplier (`supplier_return`)

A named supplier actually takes custody at the store gate; a refund alone is not this transfer. Record actual net oil, package condition, pickup transport coverage and signed continuing receiving-gate background responsibility.

- Selected flow: Glass-bottled refined sunflower oil physically returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Actual physically returned net oil kg/Q; subset of supplier transfers in gross stock closure, not new input or Q. Background is not erased at return: retain F_gate responsibility until signed transfer or linked eventual qualified resale; no automatic waste or production credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

###### Sealed glass-bottled refined sunflower oil transferred for donation (`donated_oil`)

The actual still-fit sealed product is handed to a named donation recipient, with label/storage suitability and downstream package responsibility documented; do not classify suitable donated oil as waste.

- Selected flow: Sealed glass-bottled refined sunflower oil transferred for donation
- Flow property / unit: Mass / kg
- Amount rule: Actual donated net oil kg/Q; subset of documented outward physical transfers, not an additional stock term or qualified retail Q. Receiving-gate responsibility continues under the signed origin-linked assignment; no assumed substitution credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

##### Waste flows

###### Discarded sealed glass bottle of refined sunflower oil (`discarded_bottle`)

One still-sealed discarded bottle is a physically complete packaged waste object; its contained oil and components remain inside this carrier.

- Selected flow: Discarded sealed glass bottle of refined sunflower oil
- Flow property / unit: Mass / kg
- Amount rule: Direct weighed whole discarded sealed bottles/Q with retained oil, cap, pourer and label; exclude any fraction decanted or broken into other carriers; no separate glass/oil waste for that same bottle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources: `jrc-retail-2013`

###### Separately collected discarded refined sunflower oil (`decanted_oil`)

This liquid oil has actually been separated into its own collection vessel; oil retained on other carriers never enters this stream.

- Selected flow: Separately collected discarded refined sunflower oil
- Flow property / unit: Mass / kg
- Amount rule: Measured separately collected oil net mass/Q, excluding oil on glass/pads/in sewer effluent; container tare excluded, actual receiving/treatment record required
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources: `jrc-retail-2013`

###### Discarded green bottle-glass fragments with adhered sunflower oil (`broken_glass`)

The actual segregated broken-bottle carrier leaves the store with its measured adhered oil; spills recovered into pads or liquid are separate disjoint carriers.

- Selected flow: Discarded green bottle-glass fragments with adhered sunflower oil
- Flow property / unit: Mass / kg
- Amount rule: Direct net weighed segregated glass-fragment load/Q, including adhered oil and any retained closures identified in this real load; do not add a calculated bottle tare or the same adhered oil again
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources: `jrc-retail-2013`

### Process: Separate physical support exchanges (`split_support`)

Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

#### Inputs

##### Product flows

###### Complete replacement fixed LED luminaire (`split_building_led`)

Only an actual fixed-building lighting replacement, matched to a dated work order and exact model; not an assumed annual replacement or a substitute for other building repairs. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Complete replacement fixed LED luminaire
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Carbon-steel replacement shelving bolt (`split_shelf_bolt`)

Actual separately installed bolt net mass, excluding original shelf manufacture. Different coating/material or part needs another identity. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Carbon-steel replacement shelving bolt
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Complete replacement POS-terminal power-supply unit (`split_pos_psu`)

Only an actual homogeneous model replacement; count installed complete units independently of labour hours. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Complete replacement POS-terminal power-supply unit
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Complete replacement manual-goods-trolley wheel assembly (`split_trolley_wheel`)

Only an actual same-model replacement wheel assembly; not a generic maintenance-parts kit. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Complete replacement manual-goods-trolley wheel assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Alternating-current electricity for the identified support work (`split_support_electricity`)

Only measured support electricity not already characterized in any store/asset/provider row. Allocate a containing meter to disjoint intervals/sources; the same kWh cannot be added again. Record voltage/provider; no grid mix inferred. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

The selected flow uses the single Net calorific value energy property. The inventory keeps its stated measured energy unit; Units of energy supports1kWh=3.6MJ. Apply this conversion once when expressing a kWh record in reference MJ, including compatible-source aggregation; retain the original kWh meter numerator and source attribution, without adding another electricity demand.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Diesel light-commercial-vehicle operation for the identified support visit (`split_support_travel`)

Conditional candidate for actual documented diesel light-commercial vehicle visits only, measured vehicle-km including actual empty repositioning. Match complete vehicle-operation background and all beneficiaries; other propulsion/vehicle modes require distinct cards. Do not also add included fuel or movement from an existing transport/asset provider. Stationary idle energy absent from this provider needs its own named exchange. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Diesel light-commercial-vehicle operation for the identified support visit
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

#### Outputs

##### Waste flows

###### Removed complete fixed LED luminaire (`split_removed_led`)

Actual dated removal paired with the building repair; direct net mass excludes transport tare and is not an additional whole-building terminal share. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Removed complete fixed LED luminaire
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Removed carbon-steel shelving bolt (`split_removed_bolt`)

Actual separately removed bolt; exclude it from the remaining shelf terminal carrier. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Removed carbon-steel shelving bolt
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Removed complete POS-terminal power-supply unit (`split_removed_pos_psu`)

Actual measured removed electronic unit and matched receiver, disjoint from eventual whole POS disposal. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Removed complete POS-terminal power-supply unit
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Removed complete manual-goods-trolley wheel assembly (`split_removed_trolley_wheel`)

Actual measured removed assembly and compatible treatment, disjoint from remaining terminal trolley. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Removed complete manual-goods-trolley wheel assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | retail; cleaning | Use direct meters and event attribution before shared allocation. For a residual shared pool L_k, assign L_k*d_ik/sum_i(d_ik) across every actual beneficiary, including other merchandise. Use measured occupied shelf-volume-hours for storage/lighting space, observed checkout task seconds for POS, and cleaned area-event exposure for sanitation, only after documenting causal relevance. Allocate closed/idle residuals over the same declared beneficiaries, not only successful sales. Zero-driver periods retain a suspense balance and use prospectively documented capacity-time exposure across all beneficiaries; unknown drivers block completion. Reconcile the full measured parent pool; subtract a submeter only when its load is included in that parent, never from an independent disjoint meter. | ghg-product-2011 |
| asset_life | assets | For asset a at ledger version v, expected total lifetime exposure E_av includes past actual and projected remaining exposure to all beneficiaries. Current beneficiary fraction f_aiv=e_aiv/E_av; e uses occupied area-hours for building, shelf-volume-hours for shelving, task seconds for POS. Trolley exposure is source_task_ID-linked loaded handling minutes plus actual empty-return/positioning minutes, with declared idle/reserved-capacity responsibility retained as attributed minutes. Assign shared empty movements through documented task responsibility and reconcile every observed minute across all beneficiaries; zero payload never erases actual movement. Use the same responsibility rules in past actual and projected remaining exposure. Acquisition quantity N_a*f_aiv is the complete asset count share. On a lifespan/exposure revision recalculate desired cumulative shares using the revised denominator and post delta=desired cumulative share minus all prior posted shares; replace old allocations, never restart manufacture. Maintain cumulative shares <=1 across periods/owners and assign measured final residual at retirement. Terminal package quantity uses its single final lifetime responsibility fraction g_ai once, not g_ai*f_ai. | ghg-product-2011 |
| maintenance_event | assets | Each of the four maintenance cards measures ONLY actual purchased labour h, bound to signed contract_id/work_order_ID, service_type, scope_version and actual start/end/hours; a 1 Item work-order package is no longer a quantity on any maintenance labour flow. Sum only h of the same actual labour type/scope/unit/background; heterogeneous work needs named specific cards. Parts, event utilities, travel, tools and removed-part treatment use independent actual quantities/cards/protocols; exclude them from labour background. Reverse the former full service package; complete-package and split views cannot both be characterized. Retain event IDs and its supported interval from this event to the next repair/replacement of the same function or retirement. Allocate labour h and each separate event source once across ALL beneficiaries using that interval exposure; forecast future exposure and replace it with actuals through the persistent delta ledger. Never multiply another whole-device manufacturing-lifetime fraction; tool own manufacture/terminal uses its independent lifetime ledger. Exclude acquisition-warranty and provider-contained sources. Labour h is neither order count nor material kg; already-attributed sources receive no further share. | ghg-product-2011 |
| no_credit | residual | The service has no assumed co-product credit. Keep actual donation, supplier return and recovery recipient/responsibility separate; sale revenue, scrap price or refund is not a physical driver by default. A real co-product requires a reviewed allocation extension and disjoint receiving background before completeness. | ghg-product-2011 |
| split_attribution | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance; split_building_led; split_shelf_bolt; split_pos_psu; split_trolley_wheel; split_removed_led; split_removed_bolt; split_removed_pos_psu; split_removed_trolley_wheel; split_support_electricity; split_support_travel | Prefer exclusive direct measurements. For shared cleaning events attribute each raw physical quantity by actual cleaned area-events across all beneficiaries; for maintenance use the repaired asset physical driver over all beneficiaries of the actual supported work-order cycle. Retain idle, failed, closed and zero-driver loads and their original carryover rules, never discard them using sales. New tool manufacture/retirement uses persistent lifetime ledgers and historical revision deltas; installed replacement parts are charged once to their actual maintenance event, not again as an original whole-asset acquisition. Do not reapply a share to an already-attributed source or charge terminal tools only to the retirement period. Remove any contained quantity from its old background or replace the entire package with this split; never characterize both. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_events | retail | Accepted service and gross physical movements | Lot and unique bottle/event ledger | origin_ID; bottle_ID; SKU/lot; event_ID/date; pool_ID; gross_handover; physical_return; qualification/reversal; recipient/state; gross/tare/net oil; fill_volume; density/temperature; opening/closing stock; transfer_ID | At receiving, shelf and checkout scan every event; calibrated traceable scale measures gross and matched empty bottle/cap/pourer/label tare; homogeneous lot measured sampling plan requires uncertainty/coverage and rejects unproven nominal-fill shortcuts; volume mode uses lot-specific measured/verified density at matching temperature; check current supplier label and temperature/light/moisture logs Aggregation detail: calc_oil_mass and calc_acceptance produce Q; calc_physical independently closes gross stock. retail_service=1 kg per 1 kg reference flow; never normalize physical and accepted ledgers together twice | kg oil; L; kg/L; degC; events | Every receipt/handover/return; daily stock and storage review | Full declared pool, stock carryover and subsequent actual late returns | Assigned oil shelf, checkout, store gates and unique recipient records | per 1 kg reference flow | Scale calibration/verification; label photos; density test; transaction/return links; balance residual and uncertainty investigation |
| cp_electricity | retail | Store AC import and attributable service use | Meter topology and energy ledger | meter/circuit_ID; parent inclusion; start/end reads; timestamps; kWh; outage; shelf-volume-hours; POS seconds; all-beneficiary drivers; idle capacity; supplier/grid/voltage; provider boundary | Calibrated site import/submeters with wiring map and interval readings; directly isolate loads where possible; observe time/space drivers, verify independent meters before subtraction; retain outage/closed intervals Aggregation detail: calc_shared attributes full pool once; calc_energy converts 3.6 MJ/kWh then divides by Q once, per 1 kg reference flow | kWh; MJ; m3*h; s | Interval metering and every configuration/driver change | All open/idle/closed hours of pool and actual late-return processing assigned back to original pool | Entire supporting store with all actual beneficiaries | per 1 kg reference flow | Meter calibration; bills reconciliation; topology; load/driver survey; supplier geography/voltage and loss coverage |
| cp_checkout | retail | Receipts, bags, emptied cartons and paper waste | Material and issue/waste ledger | material_ID/specification; opening/purchased/closing mass; issued/voided quantity; bag count/measured unit mass; gross/tare waste; SKU/event_ID; contractor/route; stock card | Weigh each material separately using verified scale; counts convert only with actual homogeneous mass samples; distinguish retailer waste from customer-retained packaging and invoices; record carton origin and provider scope Aggregation detail: Raw material/waste mass attributed by direct events or calc_shared; calc_normalise divides by Q once, per 1 kg reference flow | kg; counts converted to kg | Each issue/waste event; daily stock reconciliation | Full pool including failures and stock changes | Oil checkout and carton unpacking area | per 1 kg reference flow | Scale check; material/SDS specification; invoices; issue-stock match; waste receipt and no-issue/zero-event proof |
| cp_assets | assets | Complete assets and terminal scope; maintenance labour h only | Persistent asset/exposure and provider-scope ledger | asset_ID; package version/BOM; source_task_ID; loaded/empty/idle/reserved task state; beneficiary; task start/end; loaded_minutes; empty_return_positioning_minutes; assigned_idle_reserved_minutes; task_responsibility; contract_id; work_order_ID; service_type; package_version; work_scope; homogeneous_unit; measurement_boundary; compatible_background_flow; execution_ID; work_order_count_QA_only; purchased_labour_h; labour_scope; labour_background_exclusions; installed count; site/owner; manufacture/installation boundary; commissioning/retirement; E_av/e_aiv; historical postings; ledger version; maintenance event/scope/parts IDs; terminal carrier gross/tare/direct net mass; removed-part IDs; route/recipient; provider inventory; g_ai | Preserve the original persistent asset life and all historical beneficiaries. Reconcile each work-order purchased labour start/end h and every raw physical constituent; labour uses cp_split_labour_assets, physical quantities cp_split_support. Every different substance/part/carrier needs an exact card, excluded from the labour background. Direct net terminal weighing and BOM reconstruction remain exclusive; earlier removed repair parts are excluded from the remaining whole-asset terminal scope. | Asset Item(s); maintenance h; terminal kg | Every asset/event/owner/lifetime revision; interval exposure; final retirement reconciliation | Full asset life, all periods and beneficiaries; current-pool postings with prior versions retained | Full supporting building, steel shelving, complete POS and manual trolley; none assumed outside due to lease | per 1 kg reference flow | Commissioning/condition/lifetime evidence; BOM/photos; exposure audit; cumulative <=1 ledger; final residual; provider boundary and terminal mass/recipient tickets; no-event evidence |
| cp_cleaning | cleaning | Tap water, specified SDS solution, pads, whole effluent and used pads | Cleaning/spill event liquid-carrier ledger | event_ID/date; floor/area; water meter V_in and temperature/rho; solution batch/concentration/formulation/mass; dry-pad mass; whole used-pad net mass/oil/water; effluent mode/V_out/rho_eff; oil-to-drain mass; opening/closing liquid stock; evaporation; removed liquid; capture; sewer/treatment receipt; calibration | At defined impermeable cleaning/spill area, separately meter imported water and discharge or use verified whole-carrier reconstruction. Weigh solution and pad inputs/outputs; measure cleaning interval exposure across all beneficiaries; sample effluent density at discharge composition/temperature; SDS ingredient record and measured oil/solid retention complete balance. Document actual final medium, sewer route and any outside escape; internal release alone cannot establish elementary flow Aggregation detail: calc_effluent chooses one mode; directly attributed or calc_shared masses; divide by Q once per 1 kg reference flow. Shared spill IDs with cp_fates reconcile oil destinations, not duplicate quantities | kg; L; kg/L; degC; m2*events | Every cleaning/spill event and liquid stock change | Full pool with failed/zero-output events retained | Whole defined sanitation area and actual sewer boundary | per 1 kg reference flow | Scale/meter calibration; density sample; SDS; photos of containment/drain; stock/carrier closure; sewer/waste manifest; no-event evidence |
| cp_fates | residual | Failed receiving-gate background and disjoint terminal merchandise carriers | Origin-linked responsibility and fate ledger | origin_ID; original pool/event/return_ID; initial packaged net oil; receiving gate/provider; qualified/stock/failure mass; recipient/state; external-retention/donation/supplier-return event IDs; final qualification; signed burden transfer; supplier-return continuation; eventual resale link; F_gate; whole bottle net waste mass; separated oil mass; glass carrier net mass/adhered oil; pad/effluent portion IDs; transport/treatment provider boundary | At every failure/return/theft/stock disposition follow the same unique oil mass and record actual recipient/state and responsibility. Independently weigh each disjoint whole carrier after tare on calibrated scale; test relevant adhered-oil balance; reconcile cp_events physical mass and cp_cleaning oil portions by original IDs. Failed goods held externally stay a transfer, not automatic retailer waste. Retailer supplier-return vehicle use is outside chosen route: occurrence requires dedicated transport/empty-trip cards before completeness Aggregation detail: calc_failure allocates receiving-gate background once; each actual carrier attributed once then /Q per 1 kg reference flow. Reuse original event ledgers from cp_events/cp_cleaning as single-process views, not fresh stock or repeated normalization | kg oil; kg whole carrier; responsibility fractions | Every event, fate change and subsequent linked resale; daily closure | Original pool plus all actual late-event dates and unresolved follow-through | Receiving gate, store residual handling and named external recipients/providers | per 1 kg reference flow | Signed transfer/fate receipts; theft/damage evidence; upstream package gate/primary packaging/inbound coverage; gross/tare tickets; all-origin oil closure; no-event proof; unknown fate blocks completion |
| cp_split_labour_assets | assets | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |
| cp_split_support | split_support | split_building_led; split_shelf_bolt; split_pos_psu; split_trolley_wheel; split_removed_led; split_removed_bolt; split_removed_pos_psu; split_removed_trolley_wheel; split_support_electricity; split_support_travel | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_oil_mass | retail_service | For each homogeneous lot use net_oil=gross_package-matched_empty_package_tare, or exclusive volume mode net_oil=measured_fill_L*rho_oil(T) in kg/L. Nominal 1000 mL and crude-oil density tables are not measurement substitutes. Keep bottle/cap/pourer/label outside net oil. | gross_package; matched_empty_package_tare; measured_fill_L; rho_oil(T); cp_events | Net oil kg per unique bottle/event | spack-refined-oil; spack-packaging |
| calc_acceptance | retail_service | Q=sum unique net oil with final qualified acceptance after reversals/reacceptance. Gross physical handovers H and returns R remain separate; only a qualification reversal removes that bottle from Q. One origin mass resold after return contributes at most once at final state. | net_oil; event_ID; qualification_state; reversal_link; cp_events | Q kg finally accepted service throughput | ghg-product-2011 |
| calc_physical | retail_service; failed_oil_background | Opening oil stock + external receipts + physical customer returns = gross physical customer handovers + physical supplier/internal transfers out + oil in retailer waste/pads/effluent/actual releases + closing oil stock + investigated theft/other loss. Qualification Q is not substituted for gross handovers; a return or resale is an event on the same origin. | opening; receipts; physical_returns; gross_handovers; transfers; carrier_oil; closing; theft; cp_events; cp_fates; cp_cleaning | Closed physical oil ledger with investigated residual | ghg-product-2011 |
| calc_failure | failed_oil_background | F_gate=sum unique non-qualified/finally failed oil kg for which this service retains receiving-gate responsibility. Subtract only documented eventual qualified resale/stock carryover or signed continuing-background transfer; retain unresolved mass as provisional service responsibility and incomplete fate. Link one receiving-gate dataset containing production, exact primary package and inbound transport. Downstream total=service inventory (including F_gate/Q) + successful-merchandise receiving-gate background once + customer downstream stages, with stock/resale responsibility reconciled. | origin_ID; receiving_gate; responsibility_owner; final_state; resale_link; signed_transfer; cp_fates | F_gate kg and explicit downstream assembly responsibility | ghg-product-2011 |
| calc_shared | store_electricity; cleaning_water; sds_cleaner; absorbent_pad; cleaning_effluent; oily_pad_waste; receipt_paper; carrier_bag; receipt_waste; bag_waste; corrugated_waste | X_i=X_direct_i+sum_k L_k*d_ik/sum_all_beneficiaries(d_jk). Parent residual L_k excludes only contained known submeters/direct parts once; independent disjoint meters are added, not subtracted. Use the documented causal driver and retained idle/zero-driver capacity-time method; sum allocated X_i over all beneficiaries equals full measured total. | X_direct_i; L_k; d_ik; all_beneficiaries; meter_topology; idle_capacity | Attributed raw quantity X_i before normalization | ghg-product-2011 |
| calc_energy | store_electricity | E_MJ=3.6*E_kWh; amount=E_MJ/Q after attribution. The conversion is exact energy units, not an emission factor. | E_kWh; Q; cp_electricity | MJ per 1 kg reference flow | ghg-product-2011 |
| calc_asset | building_acquisition; shelf_acquisition; pos_acquisition; trolley_acquisition | E_av=past_actual_exposure+projected_remaining_exposure across all beneficiaries; f_aiv=e_aiv/E_av. For trolley, e_trolley_i=sum(source_task_ID-attributed loaded_minutes + actual empty_return_positioning_minutes) + assigned_idle_reserved_minutes; E_trolley uses the same loaded/empty/idle/reserved responsibility basis across the whole lifetime and every beneficiary. Shared empty time is assigned once by recorded task responsibility and reconciles to actual observed time; zero load never sets actual time to zero. Post N_a*f_aiv for current exposure; on version change post desired_cumulative_new minus prior_posted_total. Keep complete object count, final residual and cumulative <=1. | N_a; e_aiv; E_av; source_task_ID; loaded_minutes; empty_return_positioning_minutes; assigned_idle_reserved_minutes; task_responsibility; ledger_version; prior_posted_total; cp_assets | Attributed complete asset/package count before /Q | ghg-product-2011 |
| calc_maintenance | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance | The four maintenance cards each measure actual purchased labour h for their respective asset only. Attribute measured h once per work order using its supported-cycle all-beneficiary asset driver; material, replacement, energy, travel and removed waste are independent cp_split_support quantities. Zero events require dated evidence; unknown is not zero. Divide by Q once under c_split_quantity; completed-package counts and complete maintenance-package backgrounds are no longer used. | work_order_ID; measured_labour_h; supported_interval_beneficiary_exposure; all_supported_beneficiaries; cp_split_labour_assets | Attributed labour h, final division by Q once | ghg-product-2011 |
| calc_terminal | building_terminal; shelf_terminal; pos_terminal; trolley_terminal | X_terminal=Nend_a*g_ai, where g_ai=cumulative lifetime exposure of beneficiary i / total lifetime exposure across every beneficiary and owner, using the current evidence-based whole-life forecast before retirement and final actual exposures at retirement. Version corrections replace prior postings and final g shares sum to one. Multiply once; do not multiply manufacture fraction again. Direct net carrier mass already excludes removed parts; BOM-only reconstruction subtracts parts once as the alternative. Match terminal package inventory to actual complete remaining object and all separately removed parts without duplicating maintenance treatment. | Nend_a; g_ai; full_carrier_mass; removed_parts; provider_scope; cp_assets | Attributed terminal-service package count before /Q | ghg-product-2011 |
| calc_effluent | cleaning_effluent | Choose one mode. Direct: W=V_out*rho_eff(T,composition), with no water-supply evaporation/storage deduction. Reconstruction: W=kg_imported_water+kg_delivered_cleaner_solution+kg_oil_entering_liquid+kg_other_measured_dissolved_or_suspended_material+opening_liquid_stock-closing_liquid_stock-kg_actual_evaporation-kg_liquid_removed_in_pads_or_separate_carriers. All terms are kg whole-carrier contributions, solution water is not repeated as imported water, and carrier-retained oil is not added twice. Missing terms block reconstruction. | effluent_mode; V_out; rho_eff; kg_imported_water; kg_delivered_cleaner_solution; kg_oil_entering_liquid; kg_other_material; opening_liquid_stock; closing_liquid_stock; kg_actual_evaporation; kg_liquid_removed; cp_cleaning | Raw whole effluent mass W kg before attribution and /Q | jrc-retail-2013 |
| calc_normalise | receipt_paper; carrier_bag; receipt_waste; bag_waste; corrugated_waste; building_acquisition; building_maintenance; building_terminal; shelf_acquisition; shelf_maintenance; shelf_terminal; pos_acquisition; pos_maintenance; pos_terminal; trolley_acquisition; trolley_maintenance; trolley_terminal; cleaning_water; sds_cleaner; absorbent_pad; cleaning_effluent; oily_pad_waste; failed_oil_background; external_retention; supplier_return; donated_oil; discarded_bottle; decanted_oil; broken_glass | Each already attributed raw exchange X_i is divided by the same corrected Q exactly once. Asset/event/terminal shares and destination/composition fractions already applied upstream are not reapplied. Reference output is 1 kg. For Q=0 keep raw pools and disclose unnormalizable service rather than omit them or assign zero. | X_i; Q; pool_ID; prior_allocation_versions | Inventory amount per 1 kg reference flow | ghg-product-2011 |
| c_split_quantity | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance; split_building_led; split_shelf_bolt; split_pos_psu; split_trolley_wheel; split_removed_led; split_removed_bolt; split_removed_pos_psu; split_removed_trolley_wheel; split_support_electricity; split_support_travel | For each exact identity r in its single unit, restore normalized source q_source with its original denominator D_source as x_raw=q_source*D_source; already-raw quantities are not restored again. Apply only missing attribution once under split_attribution, deduplicate source/event/version and reverse old package and historical versions. Sum disjoint raw quantities as X_r; q_r=X_r/Q, dividing by the final reference denominator once. Labour uses measured purchased h only, never old order counts/area; in-house hours are QA only. Calculate asset counts, material kg, electricity kWh, vehicle*km and waste-carrier kg separately; never add across properties or multiply already-measured physical quantities by labour hours. Unknown quantity/identity/background blocks completeness. | X_r; D_source; q_source; Q; cp_split_labour_assets; cp_split_support | q_r |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | Bind each specific unbound flow only after official direct read proves bilingual name, state/type, qualifiers and property/unit/medium fit; reference service cannot borrow commodity-oil UUID. Bound electricity identity does not identify its supply mix or provider. | Official originals/integrity records and per-row applicability plus provider/quantity evidence |
| q_mass | retail_service; failed_oil_background; external_retention; supplier_return; donated_oil; discarded_bottle; decanted_oil; broken_glass; cleaning_effluent; oily_pad_waste | Reconcile net oil, gross packaging and all carrier oil portions independently; preserve measurement uncertainty and investigate residuals without forcing closure to zero. Specified nominal bottle size never supplies mass/density by default. | Calibrated scales/meters; lot density/tare; event stock and carrier balances |
| q_boundary | assets; retail; residual | Each maintenance card must use actual purchased labour h; work-order count is QA only, consistently with split_labour_time/maintenance_event. Actual parts/utilities/travel/treatment have separate cards and are excluded from labour background. Verify each maintenance card has one signed contract/work-order-defined homogeneous unit, fixed service_type/package_version/work_scope/measurement boundary and compatible background flow; heterogeneous actual packages need named cards and matching protocol views before completeness. Verify every complete provider package and remove overlap with separately metered electricity, maintenance, terminal care, primary merchandise package and inbound delivery. Any unknown route/asset/provider coverage is incomplete. | Signed scope/BOM/process inventory; route/recipient receipts; topology and site survey |
| q_collection | all inventory rows | Use the exact linked single-process protocol; raw records specify what/where/when, IDs, method/unit/frequency/coverage, calibration, evidence, allocation and reconciliation. Conditional absence requires dated stock/site/event proof; missing data never imply zero. Additional actual exchanges require atomic cards/protocols and bilingual resync before completeness. | Complete source ledgers and presence/absence checklist with accountable reviewer |
| q_temporal | retail; assets; residual | Keep complete same-configuration periods and every failure/idle/closed/zero-driver cohort. Reopen original numerators/denominators/background/fates for actual late returns or lifetime changes; never erase prior work or restart full capital. | Prospective pool declaration; immutable origin/event links; versioned asset corrections and suspense balances |
| q_sources | all inventory rows | Use manufacturer examples only for refined-oil/bottle/storage feasibility; use JRC only to identify retail activity obligations and GHG Product Standard only for transparent unit/boundary/allocation logic. Foreground choices are this PCR design, not universal source mandates; no quantitative factor or compliance limit is imported. | Current labels and applicability/source-field audit; explicit uncertainty and gaps |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_service | retail_service | Require one service reference flow with 1 kg final accepted net-oil throughput, linked to retail_service. Reject commodity UUID substitution, gross-bottle denominators, nominal-volume density assumptions, duplicate resale or purely financial adjustments to Q. | ghg-product-2011 |
| v_ledgers | retail; residual; cleaning | Require independent gross physical stock closure and final-acceptance ledger, unique oil lineage, disjoint terminal carriers and background owner at the same gate including inbound transport. External failed retention/supplier returns need recipient/state and continuing responsibility. Unresolved fate means incomplete, not automatic waste or zero burden. | ghg-product-2011 |
| v_assets | assets | Require all four full assets and distinct acquisition/event-maintenance/terminal coverage, lifetime exposure equation and cumulative revision ledger; final fractions reconcile across beneficiaries/owners. Reject capital restart, second manufacture multiplier on terminal carriers, duplicate removed-part subtraction and unsupported complete packages. | ghg-product-2011 |
| v_collection | all inventory rows | Every collected/calculated card needs a real single-process protocol, actual amount/provider/quantity basis and one final /Q. Check every business field and qualifier in both languages and generated projection. Missing identities/quantities and conditional/zero-output unknowns remain explicit review gaps and preclude complete datasets. | ghg-product-2011 |
| v_liquid | cleaning | Select direct metered discharge or complete kg-carrier reconstruction, never a hybrid. Supply-water reuse is not subtracted from an import meter again; direct discharged V*rho is not corrected by evaporation/storage. All cleaner/oil/pad/effluent portions and final media reconcile, with any actual release separately modelled. | jrc-retail-2013 |
| split_completeness | all inventory rows | Check every exact identity and single reference property, all actual work-order constituents, disjoint measurements, old-package reversal, no duplicated source/asset terminal scope, all-beneficiary historical attribution and one final normalization. Unverified sources, uncarded actual exchanges, unknown quantities or a mere claim of contract inclusion are incomplete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Incremental foreground retail-service dataset; candidate methodology requires independent review |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Specified ambient walk-in oil route after all identity/quantity/provider/fate gaps close; downstream product assessment adds successful-merchandise background and customer use/disposal once |
| excluded_use | Oil manufacturing footprint; all dairy/eggs/oils/fats coverage; cold chain, HVAC store, delivery, repacking or unsupported provider-package proxy; zero-output normalized claims |
| required_metadata | All required qualifiers; classification subset; source/version/gates; Q/gross stock/origin ledgers; asset exposure and correction versions; provider exclusions; responsibility/recipient/fate links; actual pool and late dates |
| required_quality_disclosure | Identity/quantity/fate/provider gaps; sampling and measurement uncertainty; failed and zero-output pools; source applicability; supplier label conditions and no-standard-conformity claim |
| update_trigger | Supplier composition/package/storage change; channel/equipment/route change; meter/provider/lifetime revision; late acceptance/return or fate/responsibility correction |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62122 | official_guidance | UNSD, CPC Version 3.0, subclass 62122, explanatory note: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62122 | Classification includes vegetable oils and several other groups; narrower scope only, not raw milk/fresh-shell-egg equivalence |
| spack-refined-oil | literature | Spack BV, Refined Sunflower Oil, manufacturer product information and storage advice, snapshot 2026-10-27: https://www.spack.nl/en/our-products/sunflower-oil/refined-sunflower-oil/ | Botanical/refined product, single oil ingredient, retail availability, cool/dry/dark storage feasibility; not density, fill mass, inventory factors or safety certification |
| spack-packaging | literature | Spack BV, Packaging and Bottling oil, Marasca 1000 mL dark-green format and glass consumer bottles for retail, manufacturer information, snapshot 2026-10-27: https://www.spack.nl/en/packaging/ ; https://www.spack.nl/en/fill-up-with-oil/ | Specific retail bottle-format feasibility; actual component masses/formulation and delivered fill remain foreground measurements |
| jrc-retail-2013 | official_guidance | Schönberger, Galvez Martos and Styles, European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector (2013), EUR 25998 EN, executive summary and sections 2.1.6.7, 2.4.6.1–2: https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Identify energy/building/lighting, water/chemicals and retail waste activity obligations; no best-practice benchmark imported as mandatory inventory value |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–7 and 9: https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Transparent unit of analysis, boundary and subdivision/physical-allocation reasoning; this PCR chooses its explicit service/asset/failure equations without claiming full-standard conformity |
