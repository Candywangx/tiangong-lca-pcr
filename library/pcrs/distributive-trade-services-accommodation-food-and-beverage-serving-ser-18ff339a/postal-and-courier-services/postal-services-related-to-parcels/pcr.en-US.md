---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-parcels
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Postal services related to parcels

## 1. Scope and Applicability

Candidate methodology for domestic, non-temperature-controlled postal parcel service under a universal service obligation, using road transport. Own diesel/petrol/battery road vehicles and contracted carriers may coexist by distinct segments. The functional outcome is delivery, not manufacture or ownership transfer of parcel contents. International/customs and non-road routes require a separate scope review; this deliberately narrower coverage must not be described as the entire CPC subclass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-parcels |
| classification_refs | CPC 3.0 68012; narrower |
| covered_products | Domestic ambient postal parcels/packages rendered under a universal service obligation, road acceptance-to-receipt chain |
| excluded_products | Non-USO courier; letters; standalone counter transactions; international/customs; air, sea, rail or cold chain; goods manufacturing |
| representative_product | One delivered domestic ordinary postal parcel with declared mass/size/route/time class |
| production_route | Acceptance; sorting and temporary holding; road linehaul; local delivery; documented receipt, with attributable unsuccessful/repeated/return activity |
| market_state | Completed parcel delivery service; parcel remains customer property throughout custody |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Postal parcel delivery under an evidenced universal service obligation |
| How much | 1 uniquely identified parcel delivered; inventory denominator D delivered parcels in the closed acceptance cohort |
| How well | Declared ordinary/priority and promised time class; valid receipt by authorized recipient or agreed collection point; retain actual delay/quality and do not relabel late delivery as on-time |
| How long or cycle | Physical acceptance to final receipt; actual elapsed time and holding period recorded, no assumed fixed duration |
| reference_flow_link | delivered_parcel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Postal parcel delivery service under universal service obligation |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | USO legal/contract basis; operator and owner split; domestic origin/destination; reference period; service/time class; gross mass and dimensions distribution; route and distance; vehicle/fuel class; site energy and refrigerant; acceptance/receipt gates; recipient/collection-point mode; failed/returned/lost rates; supplier boundaries |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items | Item(s) | One item is one uniquely identified delivered parcel service; D counts final receipt once. No conversion from kg to items without observed parcel counts and gross masses. |
| normalize_once | all inventory | row-specific | row-specific | Retain raw cohort totals, attribution factors and D separately; row total attributable amount / D only once. A quantity already expressed per delivered item is not divided again. |
| energy_conversion | site_electricity; traction_electricity | Net calorific value | MJ | 1 kWh = 3.6 MJ exactly; store AC-input electricity and its supply profile; no fuel-energy conversion without actual LHV and compatible fuel composition. |
| freight_activity | activity_contract_road | Goods transport (mass*distance) | t*km | 1 t = 1000 kg; use measured gross parcel mass including shipper packaging, and declared loaded segment km; volume may support allocation but is never silently converted to mass. |
| physical_assets | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck | Number of items | Item(s) | One item is one complete recorded physical asset configuration, not one hour. Activity/lifetime activity is a dimensionless asset fraction. All future life assumptions need source and sensitivity. |
| floor_time | activity_building_asset | Area*time | m2*a | m2*a = measured occupied square metres × days/365; distinguish shell asset service from elementary land occupation. No unit-item substitution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already packaged customer parcel physically tendered and accepted into postal custody |
| starting_condition_role | Service starting state; goods and existing shipper packaging are carried objects, not manufactured inputs |
| product_classification_scope | Domestic ambient road postal parcel service under universal service obligation; narrower than CPC 68012 |
| recursive_input_rule | Apply boundary_atomic_support: external activities enter through a defined single-unit service interface; do not recursively expand supplier internals. Foreground physical processes retain their existing cards and rules. Custody cargo is not a manufactured input. |
| upstream_dataset_requirement | Keep a signed scope-ownership matrix for each service contract and background dataset: exact gates, route/configuration, place/period, native reference unit, quality, supply/operation/empty/failure/maintenance/capital/terminal coverage, all-user allocation and foreground overlaps. Background coverage must preserve the existing lifecycle obligations and candidate allocation policies; it may be documented by a compatible dataset and supplier scope declaration without obtaining every internal exchange. Purchased quantity is measured at the interface; bundled independent services or incompatible units require separate concrete rows. For partial coverage partition by evidenced event/component first. Keep operator-owned assets, separately supplied energy/materials, customer-provided parts and operator-retained waste only in their own physical rows and exclude them from the supplier inventory. Suppress only identical covered supplier components; retain excluded real components through their own specific interface/physical rows. Never add the detailed counterpart to a service covering it; never erase burden because supplier detail is unavailable. Missing service-unit conversion, identity, coverage or a required complementary component blocks completeness, not zero. Existing narrower product applicability, physical stock balances, original-cohort corrections and receipt evidence remain mandatory for their actual owners. |
| disclosure | Acceptance/receipt gate, closed cohort, owner/segment coverage, route technology, shared-load/space allocation, maintenance/capital coverage, exclusions and unresolved gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_uso` | Product identity | Apply only to parcel/package collection, road transport and delivery rendered under an evidenced universal service obligation. A commercial courier contract without that obligation is out of scope even if a postal operator performs it. | un-cpc3-68012 |
| `boundary_gates` | Complete chain | Start at physical acceptance into postal custody, including acceptance handling; finish at documented receipt by authorized recipient/collection point. Include upstream energy/material supply, own and contracted collection after acceptance, sorting, temporary holding, linehaul, last mile, redelivery, attributable returns, IT, facilities, maintenance, capital assets and treatment of operational wastes. A node-only record is an intermediate contribution. | un-cpc3-68012; upu-parcel-service; ghg-scope3-2013 |
| `boundary_exclusions` | Service boundary | Exclude goods manufacture, goods use, shipper packaging production already embodied at acceptance, customer travel before acceptance/after pickup, postal finance, standalone counter sales, letters, international/customs, air/water/rail routes and temperature-controlled carriage. Operator-added packaging is included upstream through delivery; its recipient disposal lies after this service gate and must be disclosed separately, never silently added to the service reference. | un-cpc3-68012 |
| `boundary_segment_owner` | Every transport leg | Maintain one physical segment identifier and exactly one owner/model: own fuel-electricity plus emissions plus non-operational asset, or purchased carriage with all those burdens inside. Never add carrier fuel, emissions, vehicle capital, maintenance, upstream energy or included empty runs again. Separate supplier warehousing from included hub operations by a coverage register. | ghg-scope3-2013 |
| `boundary_nonzero_gaps` | All required exchanges | Cards define atomic candidates, not an exhaustive zero-filled template. Confirm occurrence from route, invoice, asset, maintenance and waste registers; additional actual fuel, material, cloud service, refrigerant, vehicle configuration or emission compartment requires a separate physically specific card and protocol using the same methods. Missing identity/amount/factor stays unresolved and blocks a complete claim; only documented non-occurrence permits not_applicable. |  |
| `boundary_asset_coverage` | Infrastructure and maintenance | For every asset link verify full manufacture, maintenance and end-of-life coverage and declared life denominator. Operational energy, foreground combustion, explicitly modelled tyre/brake wear PM and explicitly modelled refrigerant releases are outside that link. The asset dataset must exclude those use-stage exchanges; if it cannot be disaggregated, the overlapping foreground exchange must not be added and matching complete coverage must be demonstrated. Replacement-tyre/brake supply and residual end-of-life treatment remain in the asset link, but residual discarded mass must deduct material already emitted as wear particles. Add separately identified replacement materials/wastes only if explicitly absent from the asset supplier boundary; never add original components of a complete vehicle or sorter twice. Missing compatible asset data is an incomplete component, not assumed negligible. |  |
| `boundary_counter_substitution` | Acceptance counter service | Apply foreground_interface_coverage: outside foreground use the specific service interface; the following detailed physical requirements apply only to foreground-owned components. Replace only the matched acceptance stage with itemized physical provider exchanges after matching procedure, mailpiece class, start/end handoff and responsibility. Join the session ID to each independently accepted mailpiece ID, observed work and receipt/handoff; one session may handle multiple mailpieces but is not one 68013 mailpiece output. Do not presume ordinary USO parcels match a registered/certified counter procedure. Include failed/corrective work and all served users; remove only evidenced overlapping energy, material and asset shares. No complete 68013 service product is an input. Where the gate or physical records do not match, do not substitute. |  |

### Atomic supporting-activity boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | supporting activities | Each active exchange represents one defined material, equipment or service object with one primary property and unit. A service is not disallowed merely because it has upstream processes. Fix responsibility by provider, contract, site, event, gate and scope component before quantification. Operator-run processes and separately commissioned onsite tasks under operator inventory responsibility use foreground physical rows. Independently provided activities outside that responsibility use their specified service-interface rows; supplier manufacture, utilities, maintenance and waste remain in the matched background service, not extra foreground exchanges. A contract alone does not turn supplier internals into foreground. Do not change the product, route, custody gates or original reference denominator. Apply foreground_interface_method and foreground_interface_coverage; boundary changes need PCR review, not a data-availability choice. Ownership here means inventory responsibility, not legal title alone: rented equipment provision may be an external service while separately metered operator-run electricity remains foreground. |  |
| foreground_interface_coverage | all support processes and overlaps | Keep a signed scope-ownership matrix for each service contract and background dataset: exact gates, route/configuration, place/period, native reference unit, quality, supply/operation/empty/failure/maintenance/capital/terminal coverage, all-user allocation and foreground overlaps. Background coverage must preserve the existing lifecycle obligations and candidate allocation policies; it may be documented by a compatible dataset and supplier scope declaration without obtaining every internal exchange. Purchased quantity is measured at the interface; bundled independent services or incompatible units require separate concrete rows. For partial coverage partition by evidenced event/component first. Keep operator-owned assets, separately supplied energy/materials, customer-provided parts and operator-retained waste only in their own physical rows and exclude them from the supplier inventory. Suppress only identical covered supplier components; retain excluded real components through their own specific interface/physical rows. Never add the detailed counterpart to a service covering it; never erase burden because supplier detail is unavailable. Missing service-unit conversion, identity, coverage or a required complementary component blocks completeness, not zero. Existing narrower product applicability, physical stock balances, original-cohort corrections and receipt evidence remain mandatory for their actual owners. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| postal_sites | Acceptance, sorting, holding and service support | required | Each physical site serving the cohort | foreground | attributed cohort activity / D |
| road_operations | Collection, linehaul and last-mile road movement | required | Own and/or contracted disjoint segments | foreground and linked supply | attributed cohort transport / D |
| direct_emissions | Owned combustion, wear and refrigerant emissions | conditional | Actual own source occurs; receiving compartment identified | foreground | species mass / D |
| service_completion | Final receipt and outcome reconciliation | required | Closed accepted cohort, D>0 | reference output | 1 Item(s) |
| support_contract_road | Support interface / foreground activity: Ambient road parcel carriage on a contracted leg | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace the full purchased carrier lifecycle service on its existing exclusive segment/attempt boundary with supplier-owned physical inventories. Keep custody gates, all customers, failed/repeated attempts, empty returns, idling and terminal losses. No overlap with operator-owned legs or another supplier service. | support | allocation to delivered_parcel |
| support_road_infrastructure | Support interface / foreground activity: Use of a specified road section by a declared vehicle class | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace road lifecycle provision with one real complete specified constructed section at construction-completion/open-to-traffic gate; later maintenance/renewal and EOL are separate physical exchanges. | support | allocation to delivered_parcel |
| support_charging_asset_service | Support interface / foreground activity: Availability of a configured charging apparatus, excluding electricity | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace lifecycle availability hours with a genuine complete factory-gate charger product plus actual external installation, replacement maintenance and EOL. H_k remains an attribution driver, not a physical flow or an item equivalence. | support | allocation to delivered_parcel |
| support_building_asset | Support interface / foreground activity: Postal building shell occupancy, excluding operation utilities | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. | support | allocation to delivered_parcel |

### Process: postal_sites (`postal_sites`)

#### Inputs

##### Product flows

###### Alternating current (`site_electricity`)

Metered electricity for acceptance, sorting, lighting, electric space heating and service IT; exclude vehicle charging from this meter ledger. Supply voltage, geography and provider must be declared; this generic use-point flow does not approve a supply dataset.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6 × attributed site electricity in kWh / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

###### Natural gas, pipeline, for site heating (`site_gas`)

Conditional on a site gas boiler; fuel supply excludes foreground combustion. Do not use an energy service dataset that already includes that combustion.

- Selected flow: Natural gas, pipeline, for site heating
- Flow property / unit: Mass / kg
- Amount rule: attributed gas mass / D; convert standard volume using supplier density at identical dry/wet, temperature and pressure basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

###### Tap water supplied to postal site (`site_water`)

Purchased water for service-associated site use, including sanitary share and cleaning; not elementary freshwater extraction.

- Selected flow: Tap water supplied to postal site
- Flow property / unit: Volume / m3
- Amount rule: attributed measured purchased water volume / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Corrugated cardboard box for parcel repair (`repair_box`)

Only operator-supplied replacement boxes issued after acceptance; do not recreate shipper packaging or contents production. Boxes transferred with parcels remain customer-bound packaging, with downstream disposal disclosed separately.

- Selected flow: Corrugated cardboard box for parcel repair
- Flow property / unit: Mass / kg
- Amount rule: net corrugated box mass issued to cohort / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Paper postal routing label with adhesive and paper release backing (`paper_label`)

One finished label includes face paper, adhesive and its paper-based release backing. Measure backing and release-coating mass/composition separately for reconciliation, without duplicating these contained input components; the peeled backing becomes the distinct liner waste at the site, while face paper/adhesive transferred to recipient is not site waste.

- Selected flow: Paper postal routing label with adhesive and paper release backing
- Flow property / unit: Mass / kg
- Amount rule: net complete label including adhesive and paper release backing mass issued / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Polypropylene parcel sealing tape with adhesive (`pp_tape`)

Conditional finished polypropylene-backed adhesive tape for in-boundary repair; include adhesive in the product mass once.

- Selected flow: Polypropylene parcel sealing tape with adhesive
- Flow property / unit: Mass / kg
- Amount rule: net complete tape mass issued / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Purchased virgin R134a for site air conditioning (`refrigerant_r134a`)

Only accepted virgin R134a supply, attributed by source lot and first service use/irreversible loss under calc_r134a. Usable uninstalled stock and its unapplied supply burden carry forward. Do not duplicate asset-embedded original fill; internal reuse is not a purchase and accepted externally reclaimed material uses its separate row.

- Selected flow: Purchased virgin R134a for site air conditioning
- Flow property / unit: Mass / kg
- Amount rule: A_supply/D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

###### Purchased recharge-ready reclaimed R134a for site air conditioning (`site_r134a_reclaimed_supply`)

Only externally purchased reclaimed R134a accepted as recharge-ready, with batch composition/specification, title and upstream reclamation/transport evidence. Own material returned after offsite processing under retained title is not a new purchase. Preserve source kg and unapplied supply fractions when mixed with internally recovered material whose supply burden was already assigned.

- Selected flow: Purchased recharge-ready reclaimed R134a for site air conditioning
- Flow property / unit: Mass / kg
- Amount rule: A_reclaimed/D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

###### Postal parcel belt conveyor, complete asset (`sorter_asset`)

Conditional physical conveyor; one item is one documented complete asset configuration. Linked non-operational asset life cycle includes manufacture, maintenance replacements and end-of-life; exclude electricity, already metered.

- Selected flow: Postal parcel belt conveyor, complete asset
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(service hours attributable to cohort / evidenced lifetime service hours) / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_asset`

###### Postal workstation desktop computer, complete asset (`it_asset`)

One item is one complete computer configuration with its declared included peripherals; do not add included parts again. When independent remote/cloud processing occurs outside foreground responsibility, identify the single configured processing service, contract gates and one measurable property/unit; add its specific service-interface card and executable protocol/calculation under foreground_interface_method. Do not require supplier servers, cooling, electricity or internal waste as extra foreground rows. Operator-run local equipment and power remain separate with exact overlap exclusions. An undefined cloud bundle, missing native-unit definition or unmatched background coverage remains incomplete; a foreground-owned processing component instead uses its specific physical exchanges.

- Selected flow: Postal workstation desktop computer, complete asset
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(attributed active device hours / evidenced lifetime device hours) / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_asset`

#### Outputs

##### Product flows

###### Site recovered R134a handed over as product (`site_r134a_recovered_product`)

Only actual R134a handover with evidenced product acceptance, title and recipient use; no substitution credit and no parcel-reference output. Mutually exclusive with the same batch waste branch.

- Selected flow: Site recovered R134a handed over as product
- Flow property / unit: Mass / kg
- Amount rule: A_product/D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

##### Waste flows

###### Site R134a waste at generation (`site_r134a_generated_waste`)

Only evidenced irreversible waste generation removing material from usable stock; includes retained waste and supported complete treatment owned by the original cohort. Usable recovered stock does not activate it. A different mixed carrier uses its actual whole-carrier identity, with constituents only in balances. Physical dispatch verifies the original event.

- Selected flow: Site R134a waste at generation
- Flow property / unit: Mass / kg
- Amount rule: A_waste/D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

###### Cardboard packaging waste from parcel handling (`waste_cardboard`)

Only discarded cardboard generated in boundary; customer contents and whole undeliverable parcels are not this waste. Split separate treatment destinations in the data package without duplicating mass.

- Selected flow: Cardboard packaging waste from parcel handling
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort attributed generated cardboard waste kg / D under the section 8 waste-origin rule, including retained mass and its supported eventual treatment; composition and actual/prospective receiver route must match this one stream, with no dispatch-period recount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Paper-based label release liner waste with release coating (`waste_paper`)

Actual paper-based liner including its release coating, generated from the complete label input; reconcile generated liner mass to measured liner fraction and net label issue. Treatment must match coated liner composition, not assume pure-paper recycling. Do not count face paper delivered on a parcel as site waste.

- Selected flow: Paper-based label release liner waste with release coating
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort attributed generated paper-based release liner including its release coating kg / D under the section 8 waste-origin rule, including retained mass and supported eventual treatment. Exclude label face paper and discarded complete labels; additional actual wastes require their own carrier-matched cards. Composition and actual/prospective receiver route must match this flow, with no dispatch-period recount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Polypropylene adhesive tape waste (`waste_pp`)

Operator-generated tape offcuts and removed tape including adhesive, excluding tape delivered to recipient.

- Selected flow: Polypropylene adhesive tape waste
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort attributed generated polypropylene adhesive tape waste kg / D under the section 8 waste-origin rule, including retained mass and its supported eventual treatment; composition and actual/prospective receiver route must match this one stream, with no dispatch-period recount.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Municipal wastewater from postal site, untreated (`site_wastewater`)

Measured discharge or water balance with evidenced evaporation and other uses; link sewerage/treatment once, not elementary water emission and not a second purchased treatment amount for already covered treatment.

- Selected flow: Municipal wastewater from postal site, untreated
- Flow property / unit: Volume / m3
- Amount rule: attributed wastewater volume delivered to sewer / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

### Process: road_operations (`road_operations`)

#### Inputs

##### Product flows

###### Petroleum diesel fuel for road vehicle (`diesel_fuel`)

Conditional own-operated diesel road segment, including idling and attributable empty running. Supplier fuel specification must establish composition; biofuel blends require separate biogenic carbon accounting, never assumed fully fossil.

- Selected flow: Petroleum diesel fuel for road vehicle
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed consumed petroleum diesel mass) / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `ghg-scope3-2013`

###### Petroleum petrol fuel for road vehicle (`petrol_fuel`)

Conditional own-operated petrol road segment; the supply dataset ends before foreground combustion.

- Selected flow: Petroleum petrol fuel for road vehicle
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed consumed petroleum petrol mass) / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `ghg-scope3-2013`

###### Alternating current (`traction_electricity`)

Conditional own-operated battery vehicle; AC input includes charger losses. Remove this quantity from site electricity and do not add battery-delivered energy again. Calculation: calc_electric_stock; the result is already on the original reference basis.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6*K_traction/D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `ghg-scope3-2013`

###### Diesel parcel delivery van, complete asset (`diesel_van`)

Conditional own-operated matching vehicle technology and configuration. One item is the complete asset, including original battery/tyres; linked asset dataset includes maintenance, replacement tyres, lubricant, replacement batteries and end-of-life, but excludes operational fuel/electricity and their direct emissions. Actual configuration must be instantiated separately.

- Selected flow: Diesel parcel delivery van, complete asset
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(attributed vehicle km / evidenced lifetime vehicle km) / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vehicle_asset`

###### Petrol parcel delivery van, complete asset (`petrol_van`)

Conditional own-operated matching vehicle technology and configuration. One item is the complete asset, including original battery/tyres; linked asset dataset includes maintenance, replacement tyres, lubricant, replacement batteries and end-of-life, but excludes operational fuel/electricity and their direct emissions. Actual configuration must be instantiated separately.

- Selected flow: Petrol parcel delivery van, complete asset
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(attributed vehicle km / evidenced lifetime vehicle km) / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vehicle_asset`

###### Battery electric parcel delivery van, complete asset (`electric_van`)

Conditional own-operated matching vehicle technology and configuration. One item is the complete asset, including original battery/tyres; linked asset dataset includes maintenance, replacement tyres, lubricant, replacement batteries and end-of-life, but excludes operational fuel/electricity and their direct emissions. Actual configuration must be instantiated separately.

- Selected flow: Battery electric parcel delivery van, complete asset
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(attributed vehicle km / evidenced lifetime vehicle km) / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vehicle_asset`

###### Diesel parcel linehaul truck, complete asset (`diesel_truck`)

Conditional own-operated matching vehicle technology and configuration. One item is the complete asset, including original battery/tyres; linked asset dataset includes maintenance, replacement tyres, lubricant, replacement batteries and end-of-life, but excludes operational fuel/electricity and their direct emissions. Actual configuration must be instantiated separately.

- Selected flow: Diesel parcel linehaul truck, complete asset
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(attributed vehicle km / evidenced lifetime vehicle km) / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vehicle_asset`

### Process: direct_emissions (`direct_emissions`)

#### Outputs

##### Elementary flows

###### Carbon dioxide, fossil, to urban air (`co2_fossil`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_urban_air` in section 8.

- Selected flow: Carbon dioxide, fossil, to urban air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Carbon dioxide, biogenic, to urban air (`co2_biogenic`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_urban_air` in section 8.

- Selected flow: Carbon dioxide, biogenic, to urban air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Methane, to urban air (`methane`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_urban_air` in section 8.

- Selected flow: Methane, to urban air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Nitrous oxide, to urban air (`nitrous_oxide`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_urban_air` in section 8.

- Selected flow: Nitrous oxide, to urban air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Nitrogen monoxide, to urban ground-level air (`nitrogen_monoxide_urban`)

Apply `inv_nitrogen_species` in section 8.

- Selected flow: Nitrogen monoxide, to urban ground-level air
- Flow property / unit: Mass / kg
- Amount rule: m_NO_assigned / D; substance mass only, one normalization
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

###### Nitrogen dioxide, to urban ground-level air (`nitrogen_dioxide_urban`)

Apply `inv_nitrogen_species` in section 8.

- Selected flow: Nitrogen dioxide, to urban ground-level air
- Flow property / unit: Mass / kg
- Amount rule: m_NO2_assigned / D; substance mass only, one normalization
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

###### Carbon monoxide, to urban air (`co`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_urban_air` in section 8.

- Selected flow: Carbon monoxide, to urban air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Sulfur dioxide, to urban air (`so2`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_urban_air` in section 8.

- Selected flow: Sulfur dioxide, to urban air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Particulate matter below 2.5 micrometres, to urban air (`pm25`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_urban_air` in section 8.

- Selected flow: Particulate matter below 2.5 micrometres, to urban air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Particulate matter from 2.5 to 10 micrometres, to urban air (`pm_coarse`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_urban_air` in section 8.

- Selected flow: Particulate matter from 2.5 to 10 micrometres, to urban air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### HFC-134a, to urban air (`r134a_air`)

Conditional leakage from identified site air-conditioning to urban ground-level air; use the rural card for rural sources, unknown compartment remains unresolved. No GWP multiplication in the elementary mass amount.

- Selected flow: HFC-134a, to urban air
- Flow property / unit: Mass / kg
- Amount rule: attributed positive R134a mass-balance leakage / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

###### Carbon dioxide, fossil, to rural air (`co2_fossil_rural`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_rural_air` in section 8.

- Selected flow: Carbon dioxide, fossil, to rural air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Carbon dioxide, biogenic, to rural air (`co2_biogenic_rural`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_rural_air` in section 8.

- Selected flow: Carbon dioxide, biogenic, to rural air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Methane, to rural air (`methane_rural`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_rural_air` in section 8.

- Selected flow: Methane, to rural air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Nitrous oxide, to rural air (`nitrous_oxide_rural`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_rural_air` in section 8.

- Selected flow: Nitrous oxide, to rural air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Nitrogen monoxide, to rural ground-level air (`nitrogen_monoxide_rural`)

Apply `inv_nitrogen_species` in section 8.

- Selected flow: Nitrogen monoxide, to rural ground-level air
- Flow property / unit: Mass / kg
- Amount rule: m_NO_assigned / D; substance mass only, one normalization
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

###### Nitrogen dioxide, to rural ground-level air (`nitrogen_dioxide_rural`)

Apply `inv_nitrogen_species` in section 8.

- Selected flow: Nitrogen dioxide, to rural ground-level air
- Flow property / unit: Mass / kg
- Amount rule: m_NO2_assigned / D; substance mass only, one normalization
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

###### Carbon monoxide, to rural air (`co_rural`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_rural_air` in section 8.

- Selected flow: Carbon monoxide, to rural air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Sulfur dioxide, to rural air (`so2_rural`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_rural_air` in section 8.

- Selected flow: Sulfur dioxide, to rural air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Particulate matter below 2.5 micrometres, to rural air (`pm25_rural`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_rural_air` in section 8.

- Selected flow: Particulate matter below 2.5 micrometres, to rural air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### Particulate matter from 2.5 to 10 micrometres, to rural air (`pm_coarse_rural`)

Conditional defined substance or specified aggregate from foreground-owned transport/site combustion or vehicle non-exhaust wear as applicable. No CO2e aggregate substitution. Unknown source compartment remains unresolved. Apply `inv_rural_air` in section 8.

- Selected flow: Particulate matter from 2.5 to 10 micrometres, to rural air
- Flow property / unit: Mass / kg
- Amount rule: sum(attributed activity_j × matching species factor_gj) / D; factor unit must cancel the activity unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ghg-scope3-2013`

###### HFC-134a, to rural air (`r134a_air_rural`)

Conditional leakage from identified site air-conditioning to rural ground-level air; use the urban card for urban sources, unknown compartment remains unresolved. No GWP multiplication in the elementary mass amount.

- Selected flow: HFC-134a, to rural air
- Flow property / unit: Mass / kg
- Amount rule: attributed positive R134a mass-balance leakage / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

### Process: service_completion (`service_completion`)

#### Outputs

##### Product flows

###### Postal parcel delivery service under universal service obligation (`delivered_parcel`)

One uniquely identified accepted parcel delivered to the authorized recipient or agreed collection point with valid evidence of receipt. Neither internal scans nor failed attempts nor return to sender creates another delivered service.

- Selected flow: Postal parcel delivery service under universal service obligation
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cohort`

### Process: Support interface and foreground activity (Ambient road parcel carriage on a contracted leg) (`support_contract_road`)

#### Inputs

##### Product flows

###### Ambient road parcel carriage on a contracted leg (`svc_contract_road`)

External interface only under boundary_atomic_support; one contract-defined ambient road parcel carriage on a contracted leg. Measurement: sum(actual gross payload tonnes * actual loaded leg km); retain the original closed empty/idle cycle and failed carriage in the matched service scope. Fix provider, technology/configuration, gates, quality and included components per cp_interface_contract_road; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_contract_road for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_contract_road.

- Selected flow: Ambient road parcel carriage on a contracted leg
- Flow property / unit: Transport performance / t*km
- Amount rule: sum(A_s,e * alpha_s,e) / D; native service unit t*km; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_contract_road`

###### supplied diesel fuel (`u_contract_road_diesel`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Actual grade/blend and tank stock balance; measure density/temperature for volume conversion. Fuel production is upstream; combustion is separate. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: supplied diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### supplied petrol fuel (`u_contract_road_petrol`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Actual grade/blend and tank stock balance; measure density/temperature for volume conversion. Fuel production is upstream; combustion is separate. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: supplied petrol fuel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Alternating current (`u_contract_road_electricity_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Apply existing AC-equivalent stocks and chronological source vectors, E_total/E_zero/E_route, positive/zero charging events and 3.6 MJ/kWh once. No second loss uplift or overlap with supplier depot electricity. Calculation: calc_provider_electric_stock; the result is already on the original reference basis. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_ac_basis` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6*(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))/D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Complete diesel delivery van at factory gate (`u_contract_road_diesel_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete diesel delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Complete petrol delivery van at factory gate (`u_contract_road_petrol_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete petrol delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Complete battery-electric delivery van at factory gate (`u_contract_road_electric_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete battery-electric delivery van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Complete diesel trunk truck at factory gate (`u_contract_road_diesel_truck`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Initial factory components share the same f; upkeep and final residual waste remain separate. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_vehicle_basis` in section 8.

- Selected flow: Complete diesel trunk truck at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### complete replacement tyre (`u_contract_road_replacement_tyre`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: complete replacement tyre
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### lubricant supplied to vehicle (`u_contract_road_lubricating_oil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: lubricant supplied to vehicle
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### complete LFP replacement traction battery (`u_contract_road_replacement_lfp_battery`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. External supplied mass, excluding original components. LFP/R134a only if the actual chemistry matches; other actual identities require their own row. Internal refrigerant reuse is a transfer, not new supply. Apply `inv_carrier_scope`, `inv_occurrence` in section 8.

- Selected flow: complete LFP replacement traction battery
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Purchased new R134a accepted for contracted road vehicles (`u_contract_road_r134a_supply`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Only for evidenced externally acquired new R134a physically delivered for HVAC of contracted road vehicles. Purchased reclaimed supply uses its own product row. Original fill belongs to the complete vehicle; internal reuse and custody returns create no new supply. Use the chemical kg attributed by source lot and beneficiary event under section 8; unused receipt stock does not enter this cohort directly.

- Selected flow: Purchased new R134a accepted for contracted road vehicles
- Flow property / unit: Mass / kg
- Amount rule: A_supply/D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Purchased reclaimed R134a accepted for contracted road vehicles (`u_contract_road_r134a_reclaimed_supply`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Only for externally reclaimed R134a with evidenced acquisition of title, physical delivery and recharge acceptance for HVAC of contracted road vehicles. Retain batch-matched supplier reclamation inventory, receipt and stock lineage. Use attributed chemical kg first consumed for this service under section 8; custody returns of own refrigerant and internal transfers do not activate this row.

- Selected flow: Purchased reclaimed R134a accepted for contracted road vehicles
- Flow property / unit: Mass / kg
- Amount rule: A_reclaimed/D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

#### Outputs

##### Product flows

###### recovered R134a transferred as a product (`u_contract_road_r134a_recovered_product`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only with evidenced product status at actual external handover; mutually exclusive with the waste row. One actual identified recovered refrigerant product; no automatic avoided-production credit. Internal reuse is a transfer only. Calculation: calc_carrier_r134a; the result is already on the original reference basis. Evidence must identify the handover object as the named refrigerant in the declared product or waste state. Record gross weight, tare, net batch weight and batch-matched composition with calibrated weighing or analytical evidence; use chemical kg in the balance. For a different mixed product or waste carrier, record the actual carrier once as its own exchange and retain constituent kg only for reconciliation. Use allocation_carrier_recovery for the product/waste burden boundary. Apply `inv_carrier_scope` in section 8.

- Selected flow: recovered R134a transferred as a product
- Flow property / unit: Mass / kg
- Amount rule: A_product/D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

##### Waste flows

###### residual spent complete tyre (`u_contract_road_spent_tyre`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: residual spent complete tyre
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### spent lubricant (`u_contract_road_spent_oil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: spent lubricant
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### spent LFP traction battery (`u_contract_road_spent_lfp_battery`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_residual_carrier` in section 8.

- Selected flow: spent LFP traction battery
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### complete retired diesel delivery van delivered for dismantling (`u_contract_road_eol_diesel_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual diesel delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contract_road_diesel_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired diesel delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### complete retired petrol delivery van delivered for dismantling (`u_contract_road_eol_petrol_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual petrol delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contract_road_petrol_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired petrol delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### complete retired battery-electric delivery van delivered for dismantling (`u_contract_road_eol_electric_van`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual battery-electric delivery van identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contract_road_electric_van: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired battery-electric delivery van delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### complete retired diesel trunk truck delivered for dismantling (`u_contract_road_eol_diesel_truck`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only for retirement of the actual diesel trunk truck identified by serial and linked to the matching manufacturing row; exclude any separately recorded removed parts. Paired manufacture row u_contract_road_diesel_truck: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_carrier_scope`, `inv_residual_carrier` in section 8.

- Selected flow: complete retired diesel trunk truck delivered for dismantling
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### R134a waste at generation (`u_contract_road_r134a_recovered_waste`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Activate only when this named refrigerant has an evidenced irreversible waste decision and is removed from usable/recharge-ready status. The waste exchange is at generation, including retained waste and supported complete treatment owned by the original cohort. Usable recovered stock does not activate it. A different mixed carrier requires its actual identity and whole-carrier quantity in a separate row, with constituents only in balances. Later physical handover verifies the original event without transferring responsibility to the dispatch period.

- Selected flow: R134a waste at generation
- Flow property / unit: Mass / kg
- Amount rule: A_waste/D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

##### Elementary flows

###### Fossil carbon dioxide (`u_contract_road_co2_fossil`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Fossil carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Biogenic carbon dioxide (`u_contract_road_co2_biogenic`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Biogenic carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Methane (`u_contract_road_methane`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Methane
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Nitrous oxide (`u_contract_road_nitrous_oxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitrous oxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Carbon monoxide (`u_contract_road_carbon_monoxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Nitric oxide (NO) (`u_contract_road_nitric_oxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitric oxide (NO)
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Nitrogen dioxide (NO2) (`u_contract_road_nitrogen_dioxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Nitrogen dioxide (NO2)
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Sulfur dioxide (`u_contract_road_sulfur_dioxide`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Exhaust particulate matter below 2.5 micrometres (`u_contract_road_pm25`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Exhaust particulate matter below 2.5 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Exhaust particulate matter 2.5 to 10 micrometres (`u_contract_road_pm_coarse`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Exhaust particulate matter 2.5 to 10 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### Airborne tyre-wear particulate matter below 2.5 micrometres (`u_contract_road_tyre_pm25`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: Airborne tyre-wear particulate matter below 2.5 micrometres
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`

###### R134a released to air (`u_contract_road_r134a_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Use source-matched measurement/factors. Calculation: calc_carrier_r134a; the result is already on the original reference basis. Apply `inv_carrier_scope`, `inv_occurrence`, `inv_carrier_emissions` in section 8.

- Selected flow: R134a released to air
- Flow property / unit: Mass / kg
- Amount rule: A_air/D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_contract_road`


### Process: Support interface and foreground activity (Use of a specified road section by a declared vehicle class) (`support_road_infrastructure`)

#### Inputs

##### Product flows

###### Use of a specified road section by a declared vehicle class (`svc_road_infrastructure`)

External interface only under boundary_atomic_support; one contract-defined use of a specified road section by a declared vehicle class. Measurement: actual vehicle km on the identified section/class, including empty/failure km; service covers road construction, upkeep and terminal responsibility with the existing fixed and damage allocation policy. Fix provider, technology/configuration, gates, quality and included components per cp_interface_road_infrastructure; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_road_infrastructure for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_road_infrastructure.

- Selected flow: Use of a specified road section by a declared vehicle class
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: sum(A_s,e * alpha_s,e) / D; native service unit vehicle*km; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_road_infrastructure`

###### Complete specified constructed road section at opening gate (`u_road_infrastructure_constructed_section`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. One as-built physical section with exact length/width, pavement/subbase, civil/safety components and location. Ends at completed handover; excludes later upkeep, renewal, retirement and explicitly counted direct wear. Underlying construction process is already inside this complete product and is not added again. For this exact completed section, f_fixed is attributed class-specific road-space*time demand divided by all-user road-space*time demand across its evidenced whole physical life, after exclusive subdivision. q=one complete constructed section*f_fixed/D; do not multiply again by vehicle-km. Later variable upkeep is not embedded in this manufacturing product. Apply `inv_occurrence`, `inv_road_scope` in section 8.

- Selected flow: Complete specified constructed road section at opening gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### delivered asphalt mixture for road maintenance (`u_road_infrastructure_asphalt_maintenance`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Specific complete material product only where evidenced in an actual event; grade/composition/delivery gate fixed from tickets. Installation energy/emissions and removed waste remain separate; not a generic material selector. Apply `inv_occurrence`, `inv_road_scope` in section 8.

- Selected flow: delivered asphalt mixture for road maintenance
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### delivered concrete for road maintenance (`u_road_infrastructure_concrete_maintenance`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Specific complete material product only where evidenced in an actual event; grade/composition/delivery gate fixed from tickets. Installation energy/emissions and removed waste remain separate; not a generic material selector. Apply `inv_occurrence`, `inv_road_scope` in section 8.

- Selected flow: delivered concrete for road maintenance
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### road-maintenance plant diesel (`u_road_infrastructure_maintenance_diesel`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Measured actual grade; direct combustion species must be separately instantiated with matching evidence. Apply `inv_occurrence`, `inv_road_scope` in section 8.

- Selected flow: road-maintenance plant diesel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### Alternating current (`u_road_infrastructure_maintenance_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Metered maintenance electricity, excluding electricity inside upstream material manufacture and unrelated site utilities. Apply `inv_occurrence`, `inv_ac_basis`, `inv_road_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

#### Outputs

##### Waste flows

###### removed asphalt pavement (`u_road_infrastructure_maintenance_asphalt`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_occurrence`, `inv_road_scope`, `inv_terminal_carrier` in section 8.

- Selected flow: removed asphalt pavement
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### removed road concrete (`u_road_infrastructure_maintenance_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Apply `inv_occurrence`, `inv_road_scope`, `inv_terminal_carrier` in section 8.

- Selected flow: removed road concrete
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### terminal residual asphalt pavement (`u_road_infrastructure_eol_asphalt`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Paired manufacture row u_road_infrastructure_constructed_section: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_occurrence`, `inv_road_scope`, `inv_terminal_carrier` in section 8.

- Selected flow: terminal residual asphalt pavement
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`

###### terminal residual road concrete (`u_road_infrastructure_eol_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Paired manufacture row u_road_infrastructure_constructed_section: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_occurrence`, `inv_road_scope`, `inv_terminal_carrier` in section 8.

- Selected flow: terminal residual road concrete
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_road_infrastructure`


### Process: Support interface and foreground activity (Availability of a configured charging apparatus, excluding electricity) (`support_charging_asset_service`)

#### Inputs

##### Product flows

###### Availability of a configured charging apparatus (`svc_charging_asset_service`)

External interface only under boundary_atomic_support; one contract-defined availability of a configured charging apparatus, excluding electricity. Measurement: actual nonoverlapping apparatus occupancy hours assigned under the existing positive-source/verified-zero event rules, including concurrent-port shares; electricity is excluded. Fix provider, technology/configuration, gates, quality and included components per cp_interface_charging_asset_service; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_charging_asset_service for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_charging_asset_service.

- Selected flow: Availability of a configured charging apparatus
- Flow property / unit: Duration / h
- Amount rule: sum(A_s,e * alpha_s,e) / D; native service unit h; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_charging_asset_service`

###### Complete specified charging apparatus at factory gate (`u_charging_asset_service_charger_manufactured`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. One complete real apparatus with model, serial, port ratings and included original cabinet/power electronics/cables/control components fixed. Manufacturing ends at factory handover. Exclude site installation, operating AC, replacement maintenance and EOL; no duplicate original component rows. Link this physical asset/installation to the actual charger serial. f_j,c=[sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)]/H_j,life. H uses nonoverlapping complete-apparatus occupied union-hours with the existing port allocation; H_j,life includes all users and positive/zero events through evidenced calendar retirement. Positive-source carryover and zero-event direct/causal/fixed-day rules remain unchanged. q_charger=one complete apparatus*f_j,c/D; installation physical quantity*q fraction follows the same f. Hours are only the attribution driver, never Item(s) or energy conversion. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: Complete specified charging apparatus at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### concrete supplied for charger foundation (`u_charging_asset_service_installation_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Actual separately supplied concrete incorporated into a uniquely registered charging foundation, excluded from road/building product gates. This is concrete supply, not a complete foundation product; separately collect actual foundation construction materials/energy and final concrete residual without duplicating the charger. No default one-foundation-per-charger or lifetime is allowed. Use an independent foundation asset/cohort ID. f_foundation = cohort-attributed foundation-supported apparatus occupied union-hours / evidenced complete foundation-life occupied union-hours of ALL supported chargers/users, across charger generations. Match capacity/configuration strata and equal-share concurrent occupied-port hours before source/zero-event cohort attribution. The original concrete quantity and terminal foundation concrete use this identical f_foundation and original final denominator. A foundation retained after charger retirement remains in its own life register; replacement casting is a new actual foundation cohort, not a current repair quantity. Missing supported foundation life or all-beneficiary use blocks completion. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: concrete supplied for charger foundation
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### Alternating current (`u_charging_asset_service_installation_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Installation-only metered energy outside complete-product manufacturing; no operating electricity or site-meter overlap. Link this physical asset/installation to the actual charger serial. f_j,c=[sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)]/H_j,life. H uses nonoverlapping complete-apparatus occupied union-hours with the existing port allocation; H_j,life includes all users and positive/zero events through evidenced calendar retirement. Positive-source carryover and zero-event direct/causal/fixed-day rules remain unchanged. q_charger=one complete apparatus*f_j,c/D; installation physical quantity*q fraction follows the same f. Hours are only the attribution driver, never Item(s) or energy conversion. Apply `inv_occurrence`, `inv_ac_basis`, `inv_charger_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### complete charger replacement cable assembly (`u_charging_asset_service_replacement_cable`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only an actually separately purchased complete cable assembly with specified connectors/rating. Exclude original cable inside new apparatus; other replacement component identities require their own confirmed rows. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: complete charger replacement cable assembly
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### Alternating current (`u_charging_asset_service_maintenance_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only separately attributable maintenance electricity; exclude already-metered charging/standby AC, which stays in existing electricity cards. Apply `inv_occurrence`, `inv_ac_basis`, `inv_charger_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

#### Outputs

##### Waste flows

###### discarded charger cable assembly (`u_charging_asset_service_removed_cable`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Measured real residual assembly stream at handover, with origin allocation and storage/treatment; no double counting if retained within a complete retired charger. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: discarded charger cable assembly
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### complete retired charging apparatus (`u_charging_asset_service_charger_eol`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. One physical residual apparatus at dismantler handover; measured mass excludes separately removed/recovered components. Complete-life beneficiary allocation and full future or actual storage/treatment chain required; no generic lifecycle-service background. Paired manufacture row u_charging_asset_service_charger_manufactured: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_occurrence`, `inv_charger_scope` in section 8.

- Selected flow: complete retired charging apparatus
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`

###### Terminal concrete residual of the separately registered charging foundation (`u_charging_asset_service_foundation_concrete_eol`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only when separate concrete foundation exists outside the road/building gate; use actual or evidenced prospective same-foundation residual and destination, not an assumed disposal date or mass. Concrete carrier to its specified treatment receiver; the terminal net residual already excludes earlier removals/reuse and losses; deduct these once only when deriving a net residual from an original gross/BOM basis, never again from measured net residual. Retain independent foundation lifetime across charger generations and its same manufacturing allocation fraction. Supported demolition, storage, transport and treatment are required; actual custody transfer replaces the original foundation model, never adds dispatch-period burden. Paired manufacture row u_charging_asset_service_installation_concrete: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_charger_scope` in section 8.

- Selected flow: Terminal concrete residual of the separately registered charging foundation
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_charging_asset_service`


### Process: Support interface and foreground activity (Postal building shell occupancy, excluding operation utilities) (`support_building_asset`)

#### Inputs

##### Product flows

###### Postal building shell occupancy (`svc_building_asset`)

External interface only under boundary_atomic_support; one contract-defined postal building shell occupancy, excluding operation utilities. Measurement: actual occupied floor area m2 * elapsed years on the documented calendar basis, zoned and assigned by the original all-user shares. Fix provider, technology/configuration, gates, quality and included components per cp_interface_building_asset; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_building_asset for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_building_asset.

- Selected flow: Postal building shell occupancy
- Flow property / unit: Area-time / m2*a
- Amount rule: sum(A_s,e * alpha_s,e) / D; native service unit m2*a; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_building_asset`

###### Complete specified depot building shell at construction handover (`u_building_asset_building_constructed`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: production. Physical square metre of a completed specified shell, not square-metre-year occupancy. Declare gross/internal floor-area basis, geometry, structural/envelope/original fixed components and location. Exclude later occupancy utilities, maintenance, demolition and separately recorded sorter/IT/charger. One actual building configuration per row; distinct configurations require distinct rows. For this exact completed shell use attributed measured occupied area-time A_c and an evidenced complete physical service life L years, including calendar retirement; q_m2=A_c/L/D. The equivalent whole-building fraction is f=A_c/(the identical-basis total supported floor area*L). All users share the same capacity denominator; m2*a is not a physical output unit. Use the same whole-building f for terminal residual wastes. Apply `inv_occurrence` in section 8.

- Selected flow: Complete specified depot building shell at construction handover
- Flow property / unit: Area / m2
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit m2; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_building_asset`

###### building repair concrete (`u_building_asset_repair_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: maintenance. Specific grade and actual externally supplied repair mass only; no original construction overlap. Apply `inv_occurrence` in section 8.

- Selected flow: building repair concrete
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_building_asset`

###### complete replacement window assembly (`u_building_asset_replacement_window`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: maintenance. Only an actually purchased complete window with defined frame/glazing dimensions and mass. Original window remains inside initial shell; other repair products need individual confirmed identities. Apply `inv_occurrence` in section 8.

- Selected flow: complete replacement window assembly
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_building_asset`

###### Alternating current (`u_building_asset_repair_ac`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: maintenance. Separately metered repair-only electricity outside normal site operations and upstream products. Apply `inv_occurrence`, `inv_ac_basis` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_building_asset`

#### Outputs

##### Waste flows

###### discarded complete window assembly (`u_building_asset_removed_window`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: maintenance. Real separately collected residual assembly; retained in demolition waste means no separate duplicate. Track origin responsibility, storage and treatment. Apply `inv_occurrence` in section 8.

- Selected flow: discarded complete window assembly
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_building_asset`

###### residual demolition concrete (`u_building_asset_demolition_concrete`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. Physical phase: eol. Actual physical concrete stream at demolition handover, excluding prior repair removals, recovered products and mass losses. Require same physical-building lifetime beneficiary basis and treatment chain; heterogeneous separately measured streams stay separate. Paired manufacture row u_building_asset_building_constructed: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_occurrence` in section 8.

- Selected flow: residual demolition concrete
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_building_asset`



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_cohort` | All burdens and output | Use a closed acceptance cohort by service class, weight/size band, route and promised time. A = D + R + L + X with unique accepted IDs: delivered D, finally returned R, lost/destroyed L, other documented final failure X. Open cases prevent closure and publication of a complete cohort. Include all accepted cohort burdens, including failed attempts and returns, and divide once by D > 0. A second posting is a new linked acceptance only with a distinct contract; do not duplicate the original output. | ; upu-parcel-service |
| `allocation_transport` | Own-operated shared vehicles | Subdivide by physical route and technology first. For each loaded segment j allocate observed energy/emissions by cohort gross parcel mass on board / gross mass of all freight on board; integrate actual segment distance in activity. Allocate empty/idle energy to the same closed duty cycle using loaded mass-distance shares. Include all customers/products in denominators. Where capacity is demonstrably volume-limited, use measured external parcel volume consistently for all loads and report mass results plus sensitivity; do not use tariff dimensional weight without physical evidence. Zero loaded activity or absent all-load denominator is unresolved. | ghg-scope3-2013 |
| `allocation_sites` | Shared hubs and support | Direct submeter/issue assignment first. Allocate sorter energy and equipment by measured operation seconds attributable to the cohort over all-service seconds; other site utilities, IT and common support by measured accepted-cohort handling work-seconds / all-function work-seconds. The all-function denominator explicitly includes observed pre-acceptance reject_work_seconds, standalone counter work and other service work. Assign their shares outside this accepted-parcel cohort; excluding rejected IDs from A alone must not leave their site burdens inside this cohort. Building occupied area-time is assigned by mapped functional zone use, with shared zones using those work-second shares. Include idle base loads over the same period. Measure representative tasks across each site and peak/nonpeak condition; extrapolation weights follow actual task counts and must reconcile to complete site totals. No revenue split. |  |
| `allocation_returns` | Rejected items, inventory and recovered waste | Pre-acceptance rejected enquiries belong to the separate counter service pool; acceptance activity for the delivered service must still be assigned. Internal transfers, sort passes and in-process stock are ledger events, not delivered reference outputs. Returned parcels remain customer property, not waste; only actual operator-generated discarded material enters waste cards. Operational recycling receives treatment burden once without automatic avoided-production credit. |  |
| `allocation_damage_loss` | Lost and damaged customer parcels | Count a delivered damaged parcel in D only when receipt is accepted under the declared service/quality class; retain a damaged flag and disclose accepted quality. Rejected damaged delivery stays failed until final return/loss resolution. Retain repair, storage, repeated travel and actual waste-treatment service attributable to the closed cohort. Customer goods remain a carried-object mass ledger; do not insert the goods manufacture, replacement product or monetary compensation as parcel-service material. If goods are actually destroyed, record custody, mass and legally authorized disposal as a separate customer-goods treatment contribution with explicit owner and boundary, never relabel the entire parcel as operator packaging waste. |  |
| allocation_charge_sources | charging and battery stocks | For verified positive gross source additions I_k>0 only; zero-addition occupied events follow allocation_charge_zero. Use chronological weighted-average source accounting for each physical battery AC-equivalent energy stock. Retain S_bk by originating charging session/source k; each validated stock increase enters its source once. Before each withdrawal e, remove e*S_bk/sum_k(S_bk) from each source, then assign that withdrawal by the declared route/cohort shares. Battery transfers preserve this source vector and move equal quantities out/in, never new electricity. Opening stock needs evidenced source provenance; unknown origin remains a blocking gap. Carry remaining source fractions across periods; reconcile each source supplied = assigned draws/losses + exported stock + closing stock. Allocate charging-session capital/service hours by that source actual or evidenced forecast lifetime draws/losses assigned to each beneficiary divided by all such supported draws/losses; retain closing unconsumed capital/service shares with its source stock, revise estimates and reconcile on exhaustion. Forecasts require evidence, uncertainty and scenario disclosure, never arbitrary FIFO/whole-cohort distance substitution. Stored charge discarded or physically lost is a service loss assigned by that asset interval all-user activity shares, not an export credit; zero beneficiary with positive burden stays unresolved. No loss is added twice through the AC-equivalent curve and source ledger. |  |
| allocation_charge_zero | charging hours and direct failed-attempt electricity | Classify each occupied charging event by verified gross new stored-energy source addition I_k, not net SOC change: positive addition followed by withdrawal/loss remains I_k>0. Missing or unresolved meter/BMS evidence is not I_k=0. For I_k>0 use allocation_charge_sources. For verified I_k=0 create no fictitious energy source: if dispatch/reservation evidence identifies one causal order/cohort, assign its hours and measured failed-attempt electricity directly to that cause, including failed/cancelled orders without adding successful output. If only a causal vehicle/task set is known, share within that recorded causal set by its attributed actual service elapsed time, including failed attempts and charging wait, using the existing mutually exclusive route/time pools and all customers. For genuinely shared failure with no separable causal task, use one fixed apparatus/site local-calendar-day failure pool, split cross-midnight intervals first, and allocate by all evidenced beneficiary service elapsed hours that day, including failed attempts/waits and non-study work. Fix timezone and beneficiary evidence; never choose a larger window or substitute arbitrary km/revenue. Shared time is partitioned once, not copied to every order. Positive burden with missing beneficiary evidence or zero elapsed denominator remains incomplete. Direct, causal-set and shared-day assignments are mutually exclusive and shares sum to one before study selection. These zero-addition hours remain in the same complete-life occupied-hours denominator; never assign them again through a source vector. Metered AC that never enters stock is a direct event loss/operational burden under the same shares, included once and removed from any residual route-energy pool. A zero net battery change with evidenced positive gross charge is not a zero-addition failure. I_k is gross addition from this charging event only; imported charged batteries retain their previous source vector and capital carryover, never constitute a new charging source or another session hour. |  |
| allocation_waste_origin | waste_cardboard; waste_paper; waste_pp | Fix each ordinary solid-waste generation event to its original service cohort and stratum at generation, never at later dispatch. Directly trace the generating task first; shared generation uses the existing site/handling allocation driver over the recorded generation interval, including all customer and noncohort workloads. Preserve event ID, generation date, original shares and original reference denominator through storage and internal transfers. Acquired old waste is not new generation. Retained waste keeps its original treatment responsibility; dispatch-period service does not inherit it. Record site timezone before period assignment. Shared-generation intervals are fixed local calendar months: split months first and use only same-month all-user site/handling drivers, not the later dispatch period or repeated full-cohort totals. |  |
| allocation_carrier_recovery | contracted R134a recovery | An external handover meeting evidenced product acceptance is a separate physical kg output, with no substitution credit and no delivery-reference count. Use the handover cut-off: the service retains necessary vehicle maintenance, compliant recovery and safe handover work through the gate; the recipient bears onward transport, regeneration, upgrading and use. Extra separation, purification or product-specific packaging undertaken to make a saleable product belongs to that product and is physically subdivided away from delivery. If actual shared loads cannot be separated and the cut-off cannot be evidenced, block completion pending a separately reviewed multifunction allocation. The waste branch retains the compatible actual treatment burden in the service. Never classify the same batch/handover ID as both product and waste. Internal reuse is a transfer only. |  |
| allocation_site_refrigerant_recovery | site_r134a_recovered_product; site_r134a_generated_waste | An external handover meeting evidenced product acceptance is a separate physical kg output, with no substitution credit and no delivery-reference count. Use the handover cut-off: the service retains necessary HVAC asset maintenance, compliant recovery and safe handover work through the gate; the recipient bears onward transport, regeneration, upgrading and use. Extra separation, purification or product-specific packaging undertaken to make a saleable product belongs to that product and is physically subdivided away from delivery. If actual shared loads cannot be separated and the cut-off cannot be evidenced, block completion pending a separately reviewed multifunction allocation. The waste branch retains the compatible actual treatment burden in the service. Never classify the same batch/handover ID as both product and waste. Internal reuse is a transfer only. For waste-tagged stock, original generation responsibility and complete treatment follow calc_refrigerant_waste_origin; dispatch time does not reset responsibility. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | supporting physical inventory | For each provider, site, configuration, event and accounting interval, partition every measured physical total into mutually exclusive inventory owners before selecting the study cohort. Use the fixed activity driver for that support process, with all users and failed work in the denominator. Direct causal attribution precedes shared allocation. Never multiply a cohort share a second time if already attributed. Keep service-level allocation quantities as raw drivers, not exchange quantities, and do not repeat division by the final reference count. Meter/stock, installed/replaced assets, internal transfers, generated waste and fate balances must reconcile at the same physical/time boundary. A complete product gate may retain its manufacturing background, but a lump service row may not be reintroduced under a different label. |  |
| allocation_atomic_capital | manufacture; installation; terminal assets | For each physical asset serial/cohort a, Q_a is its actual manufacturing/construction-gate quantity in the card unit. Set f_c,a=attributed physical lifetime activity_c,a/evidenced full-life all-user activity_a, using the process/asset-specific driver and identical configuration/capacity units. Manufacture q=sum(Q_a*f_c,a)/N_ref; each initial and whole-asset replacement creates its own asset cohort and enters once, not an additional current-period maintenance item. Installation physical quantities outside the asset product gate use that same installed-asset fraction. Terminal residual quantity in its own declared unit, evidenced from matched retirement or a prospective residual/reuse/retention plan, uses exactly the same f_c,a and original reference denominator; actual custody transfers only verify/update it. Earlier removed parts are excluded from terminal residual. Restate life and all original beneficiary cohorts under calc_capital_restatement; lifetime estimates need evidence and sensitivity, never numeric defaults. Genuine component repairs/replacements use actual causal events or the fixed provider maintenance-year shares, not another whole-life fraction. A whole component reused as a separately commissioned capital asset instead receives its own serial/lifetime register, never both treatments. |  |
| allocation_capital_restatement | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | This PCR uses full restatement, not frozen historical shares or a retirement-period catch-up. All direct and supporting capital, reusable containers, installation outside the product gate and paired terminal sources follow calc_capital_restatement. Each specific activity rule fixes the driver and beneficiary shares; these are applied once. A complete asset background already including delivery/end-of-life follows the same restatement, without separate duplicate terminal exchanges. Routine component maintenance remains under its causal/period method. |  |
| allocation_atomic_waste | operational and maintenance wastes | Generated operational and maintenance waste retains its original generation event, provider/activity cohort, shares and original reference denominator through storage and transfers. Fixed shared-waste intervals are local calendar months with timezone declared; use same-interval causal activity and all users, unless an existing more specific maintenance-year or counter-period method applies. Reconcile closing=opening+generation+internal_in-internal_out-external_dispatch-evidenced_physical_loss on consistent material/moisture bases. Include supported eventual storage/transport/treatment for retained waste, with actual evidence or an explicitly evidenced compatible prospective route and uncertainty; unknown fate remains incomplete. Later receipts replace that original event model, not add a new dispatch-period burden. Asset terminal-waste uses its paired capital fraction instead. Waste carrier and its constituents, storage losses/releases and residual treatment cannot be counted twice; the same measured site/storage operation remains under one inventory owner. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_provider_maintenance_period | u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window | For every shared routine supporting-provider maintenance pool, fix interval y to the site-local calendar year with timezone and exact asset/site/configuration recorded. Split a cohort crossing years into its within-year activity. Actual installed/consumed material M_x,y and its separately measured generated waste use s_c,y=cohort-attributed beneficiary driver_y/all-beneficiary driver_y for that same year, then q=sum_y(M_x,y*s_c,y)/N_ref once. The driver is the physical support-process activity fixed in activity_*; for vehicle upkeep it is actual vehicle kilometres including once-attributed empty/failure travel, for variable road upkeep it is evidenced class-specific engineering damage in the same year, and for building fabric it is reserved floor-area-calendar-hours. Other shared support equipment uses its fixed actual all-beneficiary task/cycle/union-hour driver; retain exact configuration strata and no concurrency duplication. A signed maintenance work order fixes the causal asset and task pool before calculation, not a later modeller choice. Specific accident/failure repair is allocated exclusively to its evidenced causal order/task set, never also to the annual routine pool. Genuine component consumption excludes unused opening/closing stocks, uninstalled returns and internal transfers; generated removed parts retain this original event/year/share through later custody. No assumption that input and removed-part masses are identical. Apply one annual period share, not whole-life f, to real component repairs; entire replacement assets create separate capital cohorts instead. A positive unsupported pool or zero/unknown all-user denominator blocks completeness. Apply the same rules to retained provider maintenance cards where previously referenced; independent specific generation/fate balances and exact overlap exclusions remain mandatory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | service_completion | delivered_parcel | item event ledger | acceptance_id; service contract and USO basis; origin/destination; acceptance and receipt timestamps; mass_kg; length/width/height_m; promised_time; final_status; return_id; rejection_reason; counter session ID; original accepted mailpiece IDs; applicable procedure; receipt/handoff; failed or corrected work; physical scope overlap crosswalk | Scan at custody acceptance, each transfer and legally valid final receipt; deduplicate ID and final state; close cases with loss/return records Aggregation method: A=D+R+L+X; internal scans do not add D; partition by class, size/weight, route and service promise For external counter interfaces apply only the physical substitution in boundary_counter_substitution; never infer original parcel count from sessions. | Item(s); kg; m; timestamp | each event | 12 consecutive acceptance months, follow every accepted item to final closure | all acceptance, hub and delivery sites, subcontractor handoffs | per declared reference flow | signed/electronic receipt; acceptance register; balance; scale/dimension-meter calibration |
| cp_interface_contract_road | support_contract_road | svc_contract_road | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect sum(actual gross payload tonnes * actual loaded leg km); retain the original closed empty/idle cycle and failed carriage in the matched service scope. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | t*km | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_road_infrastructure | support_road_infrastructure | svc_road_infrastructure | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual vehicle km on the identified section/class, including empty/failure km; service covers road construction, upkeep and terminal responsibility with the existing fixed and damage allocation policy. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | vehicle*km | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_charging_asset_service | support_charging_asset_service | svc_charging_asset_service | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual nonoverlapping apparatus occupancy hours assigned under the existing positive-source/verified-zero event rules, including concurrent-port shares; electricity is excluded. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | h | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_building_asset | support_building_asset | svc_building_asset | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual occupied floor area m2 * elapsed years on the documented calendar basis, zoned and assigned by the original all-user shares. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | m2*a | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_capital_restatement | postal_sites; road_operations; support_contract_road; support_road_infrastructure; support_charging_asset_service; support_building_asset | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | versioned_asset_cohort_ledger | asset/source ID; source phase and native unit; original cohort/stratum and causal parent; original reference denominator and revision; all-user actual driver by original interval; fixed beneficiary shares; complete-life driver forecast/version and supporting records; manufacture/installation quantity; terminal net residual/route and version; previously booked attributed raw B and normalized result; recalculated f/A/q and signed correction; zero-use commissioning responsibility; overlap exclusions | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Join serial/source asset registers, activity meters, supplier product gates and the original result ledger; apply calc_capital_restatement on each change. Recompute using the original physical driver and all-user evidence without changing physical stocks. Reconcile old/new/correction and original denominator by source and original cohort; retain versions and calibration with the original record owner. | source-native units; original driver units; Item(s) | each acquisition/commissioning, activity, life/source revision and retirement; reconcile each original reporting period | complete asset life and all affected original cohorts | all users of the same asset configuration; original product gate and separate installation/terminal sources | per reference flow | serial/source registers; calibration; life evidence; receiver records; original-cohort results and revision chain |
| cp_energy | postal_sites | site_electricity; site_gas | meter and fuel stock ledger | meter_id; site; start/end readings; billing period; AC charging submeter; gas stock/purchases/returns; temperature_pressure; dry_wet; supplier_density; accepted_cohort_work_seconds; reject_work_seconds; standalone_counter_work_seconds; other_function_work_seconds; external_supplier_return; internal_store_return; out_of_system_transfer | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Read meters at each site and compare bills; gas volume conversion only at identical stated conditions; direct submeters before shared allocation Aggregation method: consumption=opening+external receipts-closing-external supplier returns-out-of-system transfers; internal transfers cancel within the selected aggregate boundary; unused internal returns already in closing stock are never subtracted again; allocate using allocation_sites; exclude charging once | kWh; kg; m3; s | monthly meters; each fuel movement | same closed-cohort activity periods, including later returns | all postal-owned sites and support IT | per declared reference flow | calibration certificates; bills; stocktake; service workload time study |
| cp_material | postal_sites | site_water; repair_box; paper_label; pp_tape | supply and issue ledger | specific product/specification; component boundary; complete_label_mass; face_mass; adhesive_mass; liner_mass; release_coating_identity/composition; opening/closing stock; external_receipts; external_supplier_returns; internal_store_returns; out_of_system_transfers; issue_job; mass; volume; site; date; task attribution | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Weigh complete labels/boxes/tape by batch and issue count; read supply water meter; record actual configurations and applicability Aggregation method: net issue=opening+external receipts-closing-external supplier returns-nonservice uses-out-of-system transfers; internal unused-stock returns enter closing and are not another deduction; reconcile label face/adhesive/liner mass and coating composition; assign direct jobs, then shared work-second share; divide by D once | kg; m3; Item(s) | each batch/issue; monthly water | cohort activity period through final closure | all included sites | per declared reference flow | purchase/issue documents; calibrated balance/meter; stock and waste reconciliation |
| cp_transport | road_operations | diesel_fuel; petrol_fuel; traction_electricity; activity_contract_road | segment, vehicle and energy register | segment_id; subcontractor/own; start/end; route_km; all load IDs/mass/volume; vehicle fuel/technology; fuel stocks and fuel density; charger AC_kWh; idle/empty_km; contract included processes; supplier life-cycle coverage battery/session IDs; opening/closing calibrated stored kWh and SOC; traced battery transfers; paired inlet-AC/stored-energy curve; measured usable capacity; configuration/temperature/age; synchronized times source-vector S_bk; chronological charging/draw/transfer events; per-source opening/closing kWh; actual/forecast beneficiary draws and uncertainty; capital-hour carryover ledger; event/session ID and start/release time; site timezone and calendar day; verified gross source addition I_k and its meter/BMS evidence; positive/zero/unknown classification; failure/cancellation reason; causal order/cohort or vehicle/task-set IDs; all-user attributed service elapsed hours including failed attempts/waits; shared-day beneficiary evidence; direct-event AC kWh; mutually exclusive branch/share ledger; electricity/source/capital overlap crosswalk | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Record every loaded/empty route segment and custody handoff; weigh gross parcels including shipper packaging, measure external dimensions; match fuel/charging to duty cycle and invoices; check carrier boundary Aggregation method: own: allocate loaded and empty/idle energy by allocation_transport; contracted: sum observed gross parcel kg×segment km/1000; no energy duplicate For BEVs meter inlet AC and validate DC/BMS stored energy against matched charge/discharge tests; establish an empirical AC-equivalent stored-energy curve for the same battery configuration, temperature and age. A SOC percentage times nominal capacity or a nominal efficiency is insufficient. Join batteries/session stocks and route intervals under calc_electric_stock before allocation; missing stock/curve evidence blocks completeness. Apply allocation_charge_sources to all battery imports/exports and source-to-cohort attribution; transfer direction is measured at the same energy-stock boundary, with no credit for discarded charge. Retain every occupied attempt including failed/cancelled and verified zero-addition events. Measure gross addition separately from net stock change and concurrent draws; missing evidence stays unknown. Apply allocation_charge_sources only for positive I_k and allocation_charge_zero for verified zero I_k. Link causal dispatch/reservation and all-user service-time records; fix local timezone and split shared events at midnight. Reconcile branch hours to apparatus/bay occupancy and direct-event electricity to the same meter ledger once, with no fictitious stock source or route-energy duplication. Every earlier traction/motion/stop allocation in this protocol applies only to E_route after subtracting the independently metered E_zero under the section 8 electricity rule; E_zero follows its event shares once. | kg; km; m3; kWh; t*km | each segment/duty cycle; monthly reconciliation | all cohort trips through closure; same all-customer duty cycles | all owned/contracted legs, including failed delivery and returns | per declared reference flow | GPS/route logs; calibrated scales, dimensions and AC meters; fuel bills; all-load manifests; signed supplier coverage |
| cp_site_asset | postal_sites | sorter_asset; it_asset; activity_building_asset | physical asset and lifetime register | asset_id/configuration; included original components; lifetime_service_hours; attributable_active_hours; floor_area_m2; occupied_days; maintenance and residual end-of-life coverage; installation/retirement; replacement schedule | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Inspect asset inventory and service records; use physical life and activity, not book depreciation; zone-map measured floor area; verify supplier includes each maintenance/replacement pathway Aggregation method: equipment fraction=attributed activity/lifetime activity; building=mapped attributable m2×days/365; divide by D once; never count original components again | Item(s); h; km; m2; day | asset changes and monthly activity | cohort period plus documented representative full service life | each owned site conveyor/computer configuration and building functional zone; provider assets remain in provider service | per declared reference flow | asset specification; warranty/service history; floor survey; supported life scenario and sensitivity; supplier boundary |
| cp_vehicle_asset | road_operations | diesel_van; petrol_van; electric_van; diesel_truck | physical asset and lifetime register | vehicle_id/configuration; complete original components; evidenced lifetime_vehicle_km; attributable_used_km; odometer_start/end; maintenance/replacement schedule; residual end-of-life coverage; excluded explicit wear/refrigerant emissions | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Inspect the exact own-operated vehicle configuration, odometer and maintenance records; use evidenced physical lifetime km rather than book depreciation. Verify original and replacement component supply and residual end-of-life coverage, excluding explicit foreground wear and refrigerant releases as required by boundary_asset_coverage. Aggregation method: vehicle fraction=attributable used vehicle km/evidenced lifetime vehicle km; divide by D once; original components are already included in the complete asset | Item(s); km | asset changes and monthly activity | cohort period plus documented representative full service life | each own-operated diesel/petrol/battery delivery van and diesel linehaul truck configuration; no carrier-owned asset duplicated | per declared reference flow | asset specification; warranty/service history; floor survey; supported life scenario and sensitivity; supplier boundary |
| cp_waste | postal_sites | waste_cardboard; waste_paper; waste_pp; site_wastewater | waste transfer and water balance | specific waste; mass or volume; timestamp/site; carrier/receiver; treatment; destination fraction; meter; retained_stock; label backing; evaporation; generation_event_id; generation_time/site; source task/cohort/stratum; original allocation shares/reference denominator; generated mass and wet/dry/composition basis; opening/closing stock by origin; internal transfer IDs and both endpoints; external dispatch; evidenced physical loss/release; receiver and destination fractions; actual/prospective route and model version; evidence/uncertainty; receipt replacement status and revision chain | Solid packaging wastes: Measure segregated generated mass at the generating point and record the responsible task/interval before storage; if generation is reconstructed from a complete stock balance, document all transfers, losses and measurement uncertainty and preserve original event provenance. Apply allocation_waste_origin and calc_waste_origin. At each transfer and period close reconcile origin-labelled stocks against calibration and receiver evidence. Require supported storage/transport/treatment coverage for retained mass; later receipts replace the original event model, never create a second dispatch-period burden. Wastewater is a separate volume balance: meter sewer outflow or measure supply minus evidenced evaporation/other uses; link sewer/treatment once on actual volume, with no solid-waste kg stock formula or constituent duplication. | kg; m3 | each generation and transfer; origin stocks at monthly close | full cohort activity period; trace original generation through retained stock and eventual receiver evidence | all sites and waste receivers | per declared reference flow | scale calibration; waste consignment/receiver evidence; sewer invoice; water balance; non-occurrence evidence |
| cp_emissions | direct_emissions | co2_fossil; co2_biogenic; methane; nitrous_oxide; nitrogen_monoxide_urban; nitrogen_dioxide_urban; co; so2; pm25; pm_coarse; co2_fossil_rural; co2_biogenic_rural; methane_rural; nitrous_oxide_rural; nitrogen_monoxide_rural; nitrogen_dioxide_rural; co_rural; so2_rural; pm25_rural; pm_coarse_rural | species and technology factor record | physical_source; species; fuel/engine/abatement; fossil_biogenic_fraction; activity/value/unit; factor/value/unit/version/citation; compartment; measured source mass; urban/rural class; exhaust/nonexhaust coverage; species identity/CAS; direct mass or molar fraction; NO2-equivalent QA basis; molecular data source; compound/carbon basis; calibrated speciation and uncertainty; NMVOC total on its original basis, QA only, not an inventory row | Use source measurement first; otherwise cite source-specific compatible emission factors, using matching fuel/energy/km activity; distinguish tailpipe, boiler and tyre/brake sources Aggregation method: E_g=sum(activity_j×EF_gj×attribution_j)/D; factors must be species mass not CO2e; no additional carbon/content factor if EF already includes it; coarse PM=PM10-PM2.5 only on same source basis For the explicitly evidenced definition NOx=NO+NO2 expressed as NO2-equivalent, record T, its unit/basis and source-matched measured molar fraction a=n_NO/(n_NO+n_NO2). Then m_NO=a*T*M_NO/M_NO2 and m_NO2=(1-a)*T, using independently evidenced molecular masses on the same unit basis. Prefer direct substance-specific mass measurements/factors when available and do not add the QA total again. T is not ordinary NO/NO2 mixture mass; never apply a mass fraction directly to T or assign all T to NO2. If definition includes other nitrogen species, speciation or conversion evidence is missing, no two-component split is permitted: preserve the raw QA observation and block completion until actual species-specific rows and quantities are established. No numeric fraction or molecular mass is defaulted by this PCR. For each actual combustion/evaporation source, use source-matched calibrated species-resolved sampling/analysis or a traceable species-resolved factor inventory matching fuel, engine/process, control, load, cold/hot regime and period. Retain sampling recovery, calibration/response factors, detection and uncertainty, chemical identity, carbon-versus-compound basis and explicit conversions from formula/molecular data. Reconcile identified species to the measured/factor total on its original stated basis, investigating nonclosure; unidentified material is not zero and not a generic NMVOC exchange. Before completed modelling, author each actually supported species as its own named bilingual elementary card, matching compartment, quantity rule and protocol, then regenerate structured. Do not guess a fixed benzene/toluene/etc. roster, use total NMVOC as one species, or claim an exhaustive species inventory before this evidence exists. | kg of each species; kg fuel; MJ; vehicle km | each factor/technology change, monthly activity | cohort periods with matching geography, engine, fuel and controls | foreground own vehicles and gas boilers only | per declared reference flow | factor original and uncertainty; stack/engine records; fuel composition; compartment evidence; include nonexhaust; no zero for missing factor |
| cp_refrigerant | postal_sites | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | equipment refrigerant mass balance | site/equipment/chemical/lot IDs; local month and timezone; separate I/F/S opening/closing kg; movement ID, endpoints, title/custody; gross/tare/net/composition and calibration; virgin/external-reclaimed/own custody-return/internal-recovery sources; purchases, first installation, reuse, unused supplier returns, internal transfers, losses and actual media; original supply amount, applied/unapplied fraction and source kg before blending; upstream production/reclamation/transport scope; asset original/separate initial fill gate and lifetime fractions; original cohort and D; same-month all-user site driver/direct task; same-chemical shared-store issues by site; original waste event/shares/treatment version; product acceptance and physical dispatch; original-model correction chain ; initial/routine source tag and independent asset/source ID | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. At receipt, installation, recovery, return, transfer and waste-decision gates use calibrated batch weights, subtract tare once and convert to chemical kg with matched composition; retain actual mixed-carrier whole quantities. Reconcile purchase/title, maintenance, stock, meter and receiver records; pair I/F/S movements and source vectors under calc_r134a. Each month the original site record owner reconciles all users/original cohorts, first-supply attribution and unapplied carryover; unknown quantities/composition/media are never zero. Waste generation/treatment follows cp_refrigerant_waste_origin; initial capital fill follows cp_capital_restatement. The direct-emission process consumes this same site release ledger, partitioning urban/rural media only once. | kg | every movement/state change; reconcile each local month and original-cohort close | original supply lot through use/loss/return and eventual waste treatment | all identified R134a air-conditioning equipment; vehicle AC requires separately identified card if outside asset dataset | per declared reference flow | technician records; calibrated charging scale; purchase/recovery receipts; charge reconciliation |
| cp_transport_capital | road_operations | activity_road_infrastructure; activity_charging_asset_service | physical capital service register | road segment/class; vehicle class; all-user traffic/lifetime allocation; actual self-operated loaded/empty km; provider construction/renewal/maintenance/end-of-life inventory; explicit direct-wear exclusions; charger serial; occupied session start/end; supported battery/activity interval; cohort/all-user activity kWh; complete lifetime occupied h; idle/standby kWh; component overlap crosswalk apparatus ID; port ID; occupancy start/end; nonoverlapping port intervals; concurrent occupied-port count; measured source-labelled session draws; event/session ID and start/release time; site timezone and calendar day; verified gross source addition I_k and its meter/BMS evidence; positive/zero/unknown classification; failure/cancellation reason; causal order/cohort or vehicle/task-set IDs; all-user attributed service elapsed hours including failed attempts/waits; shared-day beneficiary evidence; direct-event AC kWh; mutually exclusive branch/share ledger; electricity/source/capital overlap crosswalk | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Trace every self-operated segment to GPS/odometer and actual road/vehicle class. Obtain primary road lifecycle inventory and evidenced complete-life traffic by class; subdivide exclusive infrastructure first, allocate variable pavement renewal/maintenance by evidenced class-specific engineering damage demand and fixed capacity/safety/civil works by documented class-specific road-space*time demand. Reconcile shares over all road users; missing traffic, engineering allocation or inventory blocks completion, with no default equivalence between classes. Verify removal of explicit direct-wear releases from infrastructure background. For chargers read calibrated session clocks and paired energy/stock records; map each occupied session to supported activity under calc_electric_stock, including all users. Assign positive-source hours by allocation_charge_sources and verified zero-addition hours by allocation_charge_zero; trace battery carryover between periods, record unknown positive burdens as gaps. Audit complete charger inventory, lifetime occupied hours, idle power and exclusion from vehicle/building capital. Apply calc_transport_capital; no costs-to-activity conversion. Apparatus occupied time is the union of intervals with any occupied port, not the sum of concurrent session clocks. Split at every port-state change; allocate each interval hours equally across its actual occupied ports, a declared availability allocation choice within the same evidenced port/service configuration. Define H_k as the sum of these allocated apparatus-hours for session k; sum_k(H_k) equals whole-apparatus union hours. Different port classes/configurations need separate strata and capacity sensitivity. Use H_k, not raw overlapping session hours, in the capital calculation; complete lifetime denominator is the same whole-apparatus occupied union-hours. Retain every occupied attempt including failed/cancelled and verified zero-addition events. Measure gross addition separately from net stock change and concurrent draws; missing evidence stays unknown. Apply allocation_charge_sources only for positive I_k and allocation_charge_zero for verified zero I_k. Link causal dispatch/reservation and all-user service-time records; fix local timezone and split shared events at midnight. Reconcile branch hours to apparatus/bay occupancy and direct-event electricity to the same meter ledger once, with no fictitious stock source or route-energy duplication. | vehicle*km; h; kWh | each segment and charging session; period reconciliation; annual capital/supplier review | complete cohort including empty/failure/return tail and evidenced infrastructure/charger life | all self-operated routes and all users of charging apparatus; purchased carriage retains its own included road capital | per reference flow | GPS/odometer calibration; road-class/traffic/engineering inventory and allocation evidence; session clock and energy calibration; charger life/scope crosswalk; no-overlap review |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_contract_road | support_contract_road | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; provider/vehicle/battery/session IDs; synchronous clock/timezone; inlet AC meter/calibration; actual capacity and DC/BMS gross addition I_k separate from draws; opening/closing calibrated stored energy; matched configuration/temperature/age AC-equivalent curve; source vectors S_bk and transfer IDs; per-source draw/loss/closing and capital carryover; positive/zero/unknown evidence; direct E_zero; causal task and all-user local-day service-time denominators; meter and scope overlap owner; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers; chemical/vehicle/store IDs; exclusive movement ID and endpoints; installed and recovered-store opening/closing kg separately; external supply receipt kg and installed addition; reuse; other in/out by subsystem; recovery into store; external product or waste handover kg, receiver and status; medium-specific losses; terminal residual; attribution period and all-user driver; handover time and gate, gross/tare/net batch kg, composition test and uncertainty, chemical kg, purchased new/reclaimed or own custody return, title and responsibility/receiver, original outbound/return movement IDs, lot opening/closing/issue/attributed shares/returns, upstream production or reclamation and transport scope, calibration ID; waste decision evidence/time; original generation event/lot; I/F/S state tag and location; measured generated gross/tare/net/composition and unit; original site/asset and timezone/interval; original causal task or all-user allocation fields/shares; original N and result version; retained tagged stock; movement IDs/endpoints; actual dispatch/receiver; storage loss/media; prospective treatment version and residual basis; original-model replacement/overlap evidence | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace the full purchased carrier lifecycle service on its existing exclusive segment/attempt boundary with supplier-owned physical inventories. Keep custody gates, all customers, failed/repeated attempts, empty returns, idling and terminal losses. No overlap with operator-owned legs or another supplier service. Subdivide actual supplier duty cycles by leg/technology; preserve existing loaded gross mass-distance allocation (measured physical volume only with capacity evidence), closed empty/idle-cycle and mutually exclusive last-mile service-time pools. q_x=sum(actual physical exchange x*applicable all-user cohort share)/D, once. Vehicle manufacturing q=one complete vehicle*attributed activity/evidenced whole-life activity/D. Maintenance uses actual causal events or the existing fixed local-calendar asset-year pool once; retirement uses the same lifetime beneficiary fraction and residual mass. Carrier road/charger/building products and their separate upkeep/EOL are required when in scope. Tonne-km or parcel-attempt count reconciles the supplier only; it is not a fuel/hour equivalence. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. For the provider own vehicle/battery boundary apply calc_provider_electric_stock; require calibrated capacity/AC-equivalent empirical charge-discharge curves, chronological source-labelled transfers and balanced stocks. Charging source/capital-hour carryover follows allocation_charge_sources and allocation_charge_zero where defined, using this provider original activity ownership, not a second owned-fleet copy. This vehicle rule does not apply to separately metered workshop/site/installation AC. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. Apply calc_carrier_r134a to the same provider asset and recovered store; reconcile purchases, uninstalled/recovered stocks and beneficiary events by lot. Distinguish necessary service recovery from additional sale-product operations. Do not repeat original asset charge or covered terminal treatment. Use calc_carrier_r134a at the material or work gate for each receipt, installation, reuse, recovery, external handover, return or release. Use calibrated evidence, close monthly and reconcile lots and custody stocks to the matched asset attribution interval. Verify receipts, source states and responsibility. Use ledgers for occurrence or non-occurrence; unknown is not zero. Generated refrigerant waste quantities, shares and original denominators follow cp_refrigerant_waste_origin and calc_refrigerant_waste_origin; actual dispatch only closes custody records for that origin and does not override original responsibility. | card-native units; raw t*km | every event; local-month/maintenance-year reconciliation; annual/asset-change review and each refrigerant movement, monthly close and attribution-period reconciliation | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty ; delivery/custody/title records, batch tests, tank and service-scale calibration and upstream overlap crosswalk |
| cp_refrigerant_waste_origin | support_contract_road; postal_sites | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | origin_tagged_refrigerant_waste_ledger | waste decision evidence/time; original generation event/lot; I/F/S state tag and location; measured generated gross/tare/net/composition and unit; original site/asset and timezone/interval; original causal task or all-user allocation fields/shares; original N and result version; retained tagged stock; movement IDs/endpoints; actual dispatch/receiver; storage loss/media; prospective treatment version and residual basis; original-model replacement/overlap evidence | Measure at the evidenced waste-decision point using calibrated weights and batch composition; join every movement to existing I/F/S stocks and tag within the physical store without another additive inventory. Fix original cohorts/denominators under calc_refrigerant_waste_origin; on every state/transfer/dispatch/loss/receiver-evidence change reconcile tagged stock, complete treatment models and original-result corrections. | kg; fraction; Item(s) | each waste decision/transfer/loss/dispatch; each local-month reconciliation | original generation interval through complete later treatment evidence | all beneficiaries of original site/asset and physical receiver chain | per reference flow | waste decision and removal-from-use evidence; calibration; batch analysis; original shares/denominators; treatment/replacement lineage |
| cp_support_road_infrastructure | support_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace road lifecycle provision with one real complete specified constructed section at construction-completion/open-to-traffic gate; later maintenance/renewal and EOL are separate physical exchanges. For section j record geometry and one complete section Item(s). q_section=1*f_fixed,j,c/D. Fixed construction uses evidenced class-specific road-space*time shares across all users over the documented life, with exclusive subdivision first. Variable upkeep uses the existing evidenced engineering damage share f_damage,j,y,c within the actual maintenance event fixed local-calendar year y, using all-user class-specific actual engineering damage demand in that same year and fixed local timezone; it never uses a different beneficiary year or the whole-life capital share. q_event,x=actual supplied mass/energy*f_damage,j,y,c or documented causal share/D; EOL residual carriers use the applicable whole-life beneficiary share once. Do not assume vehicle-class equivalence or equate vehicle-km to an item; actual loaded/empty/failure km remains only an attribution input. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. | card-native units; raw vehicle*km | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |
| cp_support_charging_asset_service | support_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace lifecycle availability hours with a genuine complete factory-gate charger product plus actual external installation, replacement maintenance and EOL. H_k remains an attribution driver, not a physical flow or an item equivalence. For each actual apparatus j let B_j,c=sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k). H_k is the existing nonoverlapping apparatus-union-hour allocation over actual occupied ports; source vectors and carryover apply only to gross positive stock additions, and the existing direct/causal-set/fixed-day shares to verified zero additions. q_new_charger=1 complete apparatus*B_j,c/H_j,life/D; H_j,life uses the identical occupied-union basis across documented complete life including zero events and calendar retirement. Installation and final residual streams use the same physical-asset beneficiary fraction; maintenance uses causal event assignment where available, otherwise the evidenced apparatus-period all-user occupied-hour shares. Measured operating AC stays in E_total/E_zero/E_route and the separate standby site/road ledger once; no conversion of hours to kWh or item without actual lifetime. Retain original denominator D once. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. | card-native units; raw h | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |
| cp_support_building_asset | support_building_asset | u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Replace non-operational building occupancy lifecycle service with a real completed construction-gate building product in physical m2, and separate actual repair and demolition exchanges. Site utilities remain independent. For physical shell j use measured attributable area-time A_j,c in m2*year, zoned and allocated under the existing all-user site rules; evidence physical service life L_j in years. q_constructed_m2=A_j,c/L_j/D. Do not retain m2*a as the physical product unit. If using one whole building Item(s) instead, q=1*A_j,c/(total supported floor area*L_j)/D, with identical area basis; choose one representation only. Actual causal repair is directly assigned; genuinely shared fixed-calendar building-year repair uses evidenced all-user occupied area-time shares in that year and divides by D once. Terminal residual streams use the corresponding whole-life occupied-area-time beneficiary fraction; no repeat full original mass after earlier removals. Construction manufacture ends at handover, never includes future maintenance/demolition. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. | card-native units; raw m2*a | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_denominator | delivered_parcel | A = D + R + L + X; D>0; q_output = D/D = 1 | cp_cohort | Item(s) |  |
| foreground_interface_method | svc_contract_road; svc_road_infrastructure; svc_charging_asset_service; svc_building_asset | Before measurement classify every event/scope component as foreground physical or external service under boundary_atomic_support, with no overlap. Apply existing physical-card formulas, component rules and cp_support protocols only to the former, never demand an external provider BOM or internal meter ledger to activate a service interface. For a service row s collect raw A_s,e in its fixed native unit and alpha_s,e from the existing named activity allocation: direct cohort events have alpha=1; genuinely shared events retain the original all-user driver, failure/empty/standby treatment and event window. Allocated service amount T_s=sum(A_s,e*alpha_s,e); if the native activity ledger already contains cohort-attributed activity, alpha is already applied and must not be multiplied again. q_s=T_s/N_ref, with N_ref the original positive cohort reference output. Preserve raw totals for zero output and mark the unit result incomplete. Do not convert time, area, count or transport activity to energy or equipment mass without a separate evidenced relationship. Do not apply physical capital life fractions again to a service inventory that already contains its capital allocation. Quantities for background linkage equal q_s times an inventory per one identical service unit, once; an emission factor is not the service exchange quantity. All old physical-only instructions and service prohibitions apply only to the foreground physical branch; the service branch follows this rule and its explicit interface protocol. Incomplete or aborted service events retain their evidenced attributable burden. Do not silently discard them because the interface counts completed units: document an equivalent native service quantity supported by the contract and execution records, or add a separately identified partial-service row before claiming completeness; never assume a full unit or zero. A supplier value already per the final reference is not a raw A_s,e: recover its original total and denominator before recomputation, or prove exact equivalent normalization without dividing by the final denominator again. Any included supplier allocation is applied only once. | cp_interface_contract_road; cp_interface_road_infrastructure; cp_interface_charging_asset_service; cp_interface_building_asset | native service units per original reference flow |  |
| calc_interface_contract_road | svc_contract_road | Apply foreground_interface_method. Native activity A_s,e (t*km): sum(actual gross payload tonnes * actual loaded leg km); retain the original closed empty/idle cycle and failed carriage in the matched service scope. Use the existing activity_contract_road beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/D once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_contract_road; activity_contract_road | t*km/D |  |
| calc_interface_road_infrastructure | svc_road_infrastructure | Apply foreground_interface_method. Native activity A_s,e (vehicle*km): actual vehicle km on the identified section/class, including empty/failure km; service covers road construction, upkeep and terminal responsibility with the existing fixed and damage allocation policy. Use the existing activity_road_infrastructure beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/D once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_road_infrastructure; activity_road_infrastructure | vehicle*km/D |  |
| calc_interface_charging_asset_service | svc_charging_asset_service | Apply foreground_interface_method. Native activity A_s,e (h): actual nonoverlapping apparatus occupancy hours assigned under the existing positive-source/verified-zero event rules, including concurrent-port shares; electricity is excluded. Use the existing activity_charging_asset_service beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/D once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_charging_asset_service; activity_charging_asset_service | h/D |  |
| calc_interface_building_asset | svc_building_asset | Apply foreground_interface_method. Native activity A_s,e (m2*a): actual occupied floor area m2 * elapsed years on the documented calendar basis, zoned and assigned by the original all-user shares. Use the existing activity_building_asset beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/D once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_building_asset; activity_building_asset | m2*a/D |  |
| calc_rows | all inventory | q_r = sum(raw total_rj × cohort attribution_rj) / D; if already attributed do not multiply again; preserve original totals and units The applicable calc_electric_stock or calc_provider_electric_stock already returns final traction MJ per D; use that value directly on its traction row with no extra share, 3.6 or division by D. | cp_energy; cp_material; cp_waste; cp_transport | row-specific unit per delivered item |  |
| calc_electric | site_electricity | q_site_MJ=3.6*site_kWh_assigned/D; exclude traction charger inlet AC from the site meter ledger. calc_electric_stock directly outputs traction MJ/D; do not convert or normalize that result again. | cp_energy | site MJ / Item(s) |  |
| calc_freight | activity_contract_road | q_tkm = sum(gross parcel kg × loaded segment km / 1000) / D; no own-segment service input These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. | cp_transport | raw activity diagnostic: t*km / Item(s) | ghg-scope3-2013 |
| calc_site_assets | sorter_asset; it_asset | q_asset = sum(attributed active hours / evidenced lifetime service hours) / D | cp_site_asset | Item(s) asset / Item(s) service |  |
| calc_vehicle_assets | diesel_van; petrol_van; electric_van; diesel_truck | q_asset = sum(attributed used vehicle km / evidenced lifetime vehicle km) / D | cp_vehicle_asset | Item(s) asset / Item(s) service |  |
| calc_building | activity_building_asset | q_building = sum(attributed occupied m2 × days / 365) / D These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. | cp_site_asset | raw activity diagnostic: m2*a / Item(s) |  |
| calc_emissions | all elementary combustion/wear cards | q_g = sum(activity_j × species mass EF_gj × attribution_j)/D; use fossil/biogenic split from fuel composition only if not already in EF; never multiply both fuel carbon and complete CO2 factor; PM2.5 and coarse PM are disjoint | cp_emissions | kg species / Item(s) | ghg-scope3-2013 |
| calc_r134a | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | Within this entry's declared applies_to scope, apply the complete ordered rule group: common_calc_r134a_identity; common_calc_r134a_stocks; calc_r134a_initial_scope; common_calc_r134a_custody; common_calc_r134a_supply_origin; calc_r134a_allocation; calc_r134a_outputs; calc_r134a_waste_priority; calc_r134a_site_media; calc_r134a_initial_supply. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; common_calc_r134a_identity; common_calc_r134a_stocks; calc_r134a_initial_scope; common_calc_r134a_custody; common_calc_r134a_supply_origin; calc_r134a_allocation; calc_r134a_outputs; calc_r134a_waste_priority; calc_r134a_site_media; calc_r134a_initial_supply | virgin/reclaimed supply, product, generated waste and air kg per original D | ghg-scope3-2013 |
| calc_carrier_r134a | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Within this entry's declared applies_to scope, apply the complete ordered rule group: common_calc_r134a_identity; common_calc_r134a_stocks; calc_carrier_r134a_initial_scope; common_calc_r134a_custody; common_calc_r134a_supply_origin; calc_carrier_r134a_allocation; calc_carrier_r134a_outputs; calc_carrier_r134a_waste_priority. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin; common_calc_r134a_identity; common_calc_r134a_stocks; calc_carrier_r134a_initial_scope; common_calc_r134a_custody; common_calc_r134a_supply_origin; calc_carrier_r134a_allocation; calc_carrier_r134a_outputs; calc_carrier_r134a_waste_priority | separate new supply, purchased reclaimed supply, named recovery product/waste and air kg per original D |  |
| calc_refrigerant_waste_origin | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | Within this entry's declared applies_to scope, apply the complete ordered rule group: calc_refrigerant_waste_origin_generation; calc_refrigerant_waste_origin_quantities; calc_refrigerant_waste_origin_state_ledger; calc_refrigerant_waste_origin_fate_updates. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant; calc_refrigerant_waste_origin_generation; calc_refrigerant_waste_origin_quantities; calc_refrigerant_waste_origin_state_ledger; calc_refrigerant_waste_origin_fate_updates | original generated mass per original D; separate physical dispatch |  |
| calc_stock | repair_box; paper_label; pp_tape | Net issue=opening+external receipts-closing-external supplier returns-other uses-out-of-system transfers; internal unused-stock return already in closing is not deducted again; reconcile complete-label mass with liner waste and recipient-bound components; ordinary solid waste uses calc_waste_origin; site_wastewater retains its separately measured volume balance | cp_material; cp_waste | kg or m3 / Item(s) |  |
| calc_waste_origin | waste_cardboard; waste_paper; waste_pp | For each named ordinary solid-waste stream r and generation event j, A_c,r = sum_j(G_j,r*s_c,j), then q_c,r=A_c,r/original_reference_count once. G is measured generated mass, not dispatch mass. Reconcile each material and original event: closing = opening + generation + internal_in - internal_out - external_dispatch - evidenced_physical_loss. Record actual moisture/composition changes and mutually exclusive losses/releases; no invented residual and no full residual mass plus the same released constituent. Internal transfers preserve origin and do not create another exchange. Model the original cohort waste output and its required storage/transport/final treatment even while physically retained, using actual compatible receiver evidence or an explicitly evidenced material/composition/location-matched prospective route with uncertainty. Destination fractions close to one and enter once; no default recycling or zero treatment for retained mass. Unsupported fate stays incomplete. Keep observed custody stock/dispatch as a control ledger, not another inventory addition. Later receiver evidence replaces the same event prospective model and recomputes the original cohort with its original denominator; never add that mass/treatment to a later cohort. Include every necessary lifecycle leg once through a scope crosswalk; exclude site/storage energy and handling already included by site/service inventories. Capital terminal-waste lifetime fractions and wastewater balances retain their separate rules. Here original_reference_count is the original cohort D. The generated-waste exchange is at the generation gate. Its linked complete waste-management inventory takes one kg on that same generated-mass basis through storage and all subsequent fates; final-treatment input is only the compatible measured/evidenced forecast residual after storage losses/moisture conversion, not the full original kg plus separate losses. Explicit storage releases replace the same included release in that linked inventory; a storage/handling operation already in site/service pools is removed from the waste link by a recorded scope crosswalk, never counted twice. | cp_waste; cp_cohort | generated waste kg per original reference flow; origin stock and treatment revision ledger |  |
| calc_electric_stock | traction_electricity | Meter-plus-stock energy E_total = metered inlet AC + opening AC-equivalent stored kWh + traced stored-energy imports - closing AC-equivalent stored kWh - traced stored-energy exports. All values cover identical physical boundaries and complete intervals; validate the configuration/temperature/age-matched empirical AC-equivalent curve under the collection protocol, preserving source vectors on transfers and charging losses once. Unknown stock/conversion is incomplete, never zero. Separate measured zero-addition direct-event AC E_zero from E_total before any route allocation: E_route=E_total-E_zero. A negative unexplained residual blocks completion. Assign E_route by the existing mutually exclusive route/motion/stop pools; assign E_zero only by allocation_charge_zero, with all-user shares and no fictitious stock source. Site/noncharging electricity remains exclusively in its separate site/support cards. Define K_traction as the sum of the cohort-assigned residual-route and direct zero-event energy (unnormalized kWh); traction_electricity=3.6*K_traction/D. Write this final result directly to the traction row; calc_provider_electric_stock independently finalizes contracted rows at their own boundary. | cp_transport; cp_cohort | MJ per reference flow |  |
| calc_transport_capital | activity_road_infrastructure; activity_charging_asset_service | Road activity = sum(actual self-operated segment vehicle-km * its cohort share)/D, including empty/failure legs; use the declared motion/empty-tour shares, not parcel t*km as a vehicle-km substitute. Match each road/vehicle class to the cp_transport_capital infrastructure intensity once. Charger activity = [sum_positive(H_k*a_c,k) + sum_zero(H_k*z_c,k)]/D. H_k is nonoverlapping allocated apparatus-hours from cp_transport_capital. For verified gross source addition I_k>0, a_c,k is the allocation_charge_sources beneficiary share, retaining source stock carryover. For verified I_k=0, z_c,k is the mutually exclusive direct/causal-set/fixed-day share in allocation_charge_zero. Never divide zero-addition events by energy or drop their occupied hours. Source additions are gross, not net SOC changes. All-user shares close to one; no full-cohort km repeated independently per session.  Complete charger intensity uses its full lifecycle inventory/lifetime occupied apparatus-hours, with idle/underuse and calendar retirement reflected. Standby electricity is measured over occupied and idle intervals, allocated by supported activity to all beneficiaries and included once in site/road electricity, never both. Verify exact component/module removals from vehicle, building and purchased-carriage scopes; absence of compatible evidence blocks completion. Replace raw session occupied h by H_k under cp_transport_capital; use allocation_charge_sources for positive additions and allocation_charge_zero for verified zero additions. Direct-event failed-attempt AC is assigned under the same zero-event shares once and removed from residual route-energy allocation; non-event idle standby remains separately reconciled, never duplicated. These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_transport_capital; route and cohort ledger; calc_electric_stock | raw activity diagnostic: vehicle*km; occupied charging h per reference flow |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_contract_road | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. Subdivide actual supplier duty cycles by leg/technology; preserve existing loaded gross mass-distance allocation (measured physical volume only with capacity evidence), closed empty/idle-cycle and mutually exclusive last-mile service-time pools. q_x=sum(actual physical exchange x*applicable all-user cohort share)/D, once. Vehicle manufacturing q=one complete vehicle*attributed activity/evidenced whole-life activity/D. Maintenance uses actual causal events or the existing fixed local-calendar asset-year pool once; retirement uses the same lifetime beneficiary fraction and residual mass. Carrier road/charger/building products and their separate upkeep/EOL are required when in scope. Tonne-km or parcel-attempt count reconciles the supplier only; it is not a fuel/hour equivalence. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. This row supplies refrigerant attribution evidence only; take new supply, reclaimed supply, recovery and air release from the dedicated final calculation calc_carrier_r134a. | cp_support_contract_road | raw t*km plus uniquely attributed physical totals, not a service product |  |
| activity_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. For section j record geometry and one complete section Item(s). q_section=1*f_fixed,j,c/D. Fixed construction uses evidenced class-specific road-space*time shares across all users over the documented life, with exclusive subdivision first. Variable upkeep uses the existing evidenced engineering damage share f_damage,j,y,c within the actual maintenance event fixed local-calendar year y, using all-user class-specific actual engineering damage demand in that same year and fixed local timezone; it never uses a different beneficiary year or the whole-life capital share. q_event,x=actual supplied mass/energy*f_damage,j,y,c or documented causal share/D; EOL residual carriers use the applicable whole-life beneficiary share once. Do not assume vehicle-class equivalence or equate vehicle-km to an item; actual loaded/empty/failure km remains only an attribution input. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_road_infrastructure | raw vehicle*km plus uniquely attributed physical totals, not a service product |  |
| activity_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. For each actual apparatus j let B_j,c=sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k). H_k is the existing nonoverlapping apparatus-union-hour allocation over actual occupied ports; source vectors and carryover apply only to gross positive stock additions, and the existing direct/causal-set/fixed-day shares to verified zero additions. q_new_charger=1 complete apparatus*B_j,c/H_j,life/D; H_j,life uses the identical occupied-union basis across documented complete life including zero events and calendar retirement. Installation and final residual streams use the same physical-asset beneficiary fraction; maintenance uses causal event assignment where available, otherwise the evidenced apparatus-period all-user occupied-hour shares. Measured operating AC stays in E_total/E_zero/E_route and the separate standby site/road ledger once; no conversion of hours to kWh or item without actual lifetime. Retain original denominator D once. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_charging_asset_service | raw h plus uniquely attributed physical totals, not a service product |  |
| activity_building_asset | u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. For physical shell j use measured attributable area-time A_j,c in m2*year, zoned and allocated under the existing all-user site rules; evidence physical service life L_j in years. q_constructed_m2=A_j,c/L_j/D. Do not retain m2*a as the physical product unit. If using one whole building Item(s) instead, q=1*A_j,c/(total supported floor area*L_j)/D, with identical area basis; choose one representation only. Actual causal repair is directly assigned; genuinely shared fixed-calendar building-year repair uses evidenced all-user occupied area-time shares in that year and divides by D once. Terminal residual streams use the corresponding whole-life occupied-area-time beneficiary fraction; no repeat full original mass after earlier removals. Construction manufacture ends at handover, never includes future maintenance/demolition. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_building_asset | raw m2*a plus uniquely attributed physical totals, not a service product |  |
| calc_atomic_physical | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product; u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. For operational physical flow x in matched provider interval j, recover Q_x,j in that card native physical unit from metering, stock balance, work orders or a compatible species/material-specific unit inventory. If source intensity is per activity unit, first Q_x,j=intensity_x,j*actual_all_user_activity_j; do not use money, a generic service emission basket, or an already per-reference amount without recovering its original basis. Then q_x=sum_j(Q_x,j*s_c,x,j)/N_ref once, with the fixed process driver and all-user shares. Electricity kWh converts to MJ by 3.6 once when the card uses MJ; other count/mass/volume conversions need measured configured unit mass, density, concentration and moisture as applicable. A shared meter or upstream product/service covering the same quantity/period/scope is removed by a measured overlap crosswalk, not by an assumed fraction. For traction AC and carrier R134a, use the respective dedicated final calculation directly and do not apply this generic rule again. | cp_support_contract_road; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_building_asset | card-native physical unit per original reference flow |  |
| calc_atomic_capital | u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. For each physical asset serial/cohort a, Q_a is its actual manufacturing/construction-gate quantity in the card unit. Set f_c,a=attributed physical lifetime activity_c,a/evidenced full-life all-user activity_a, using the process/asset-specific driver and identical configuration/capacity units. Manufacture q=sum(Q_a*f_c,a)/N_ref; each initial and whole-asset replacement creates its own asset cohort and enters once, not an additional current-period maintenance item. Installation physical quantities outside the asset product gate use that same installed-asset fraction. Terminal residual quantity in its own declared unit, evidenced from matched retirement or a prospective residual/reuse/retention plan, uses exactly the same f_c,a and original reference denominator; actual custody transfers only verify/update it. Earlier removed parts are excluded from terminal residual. Restate life and all original beneficiary cohorts under calc_capital_restatement; lifetime estimates need evidence and sensitivity, never numeric defaults. Genuine component repairs/replacements use actual causal events or the fixed provider maintenance-year shares, not another whole-life fraction. A whole component reused as a separately commissioned capital asset instead receives its own serial/lifetime register, never both treatments. | cp_support_contract_road; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_building_asset | manufacturing product and paired terminal residual, same lifetime fraction |  |
| calc_capital_restatement | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Within this entry's declared applies_to scope, apply the complete ordered rule group: calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | source-native unit per original cohort N_c; separate physical controls |  |
| capital_contract_road_diesel_van | u_contract_road_diesel_van; u_contract_road_eol_diesel_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contract_road_diesel_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/D, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contract_road_eol_diesel_van: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contract_road | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_contract_road_petrol_van | u_contract_road_petrol_van; u_contract_road_eol_petrol_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contract_road_petrol_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/D, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contract_road_eol_petrol_van: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contract_road | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_contract_road_electric_van | u_contract_road_electric_van; u_contract_road_eol_electric_van | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contract_road_electric_van: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/D, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contract_road_eol_electric_van: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contract_road | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_contract_road_diesel_truck | u_contract_road_diesel_truck; u_contract_road_eol_diesel_truck | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_contract_road_diesel_truck: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/D, once; do not multiply again by tonne-km or parcel attempts. Initial factory components share the same f; upkeep and final residual waste remain separate. Terminal row u_contract_road_eol_diesel_truck: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_contract_road | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_road_infrastructure_constructed_section | u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_road_infrastructure_constructed_section: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. For this exact completed section, f_fixed is attributed class-specific road-space*time demand divided by all-user road-space*time demand across its evidenced whole physical life, after exclusive subdivision. q=one complete constructed section*f_fixed/D; do not multiply again by vehicle-km. Later variable upkeep is not embedded in this manufacturing product. Terminal row u_road_infrastructure_eol_asphalt: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Terminal row u_road_infrastructure_eol_concrete: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_road_infrastructure | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_charging_asset_service_charger_manufactured | u_charging_asset_service_charger_manufactured; u_charging_asset_service_charger_eol | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_charging_asset_service_charger_manufactured: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. Link this physical asset/installation to the actual charger serial. f_j,c=[sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)]/H_j,life. H uses nonoverlapping complete-apparatus occupied union-hours with the existing port allocation; H_j,life includes all users and positive/zero events through evidenced calendar retirement. Positive-source carryover and zero-event direct/causal/fixed-day rules remain unchanged. q_charger=one complete apparatus*f_j,c/D; installation physical quantity*q fraction follows the same f. Hours are only the attribution driver, never Item(s) or energy conversion. Terminal row u_charging_asset_service_charger_eol: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_charging_asset_service | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_charging_asset_service_installation_concrete | u_charging_asset_service_installation_concrete; u_charging_asset_service_foundation_concrete_eol | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_charging_asset_service_installation_concrete: Q_a is actual unamortized kg at the declared product gate; q=sum(Q_a*f_c,a)/D. Use an independent foundation asset/cohort ID. f_foundation = cohort-attributed foundation-supported apparatus occupied union-hours / evidenced complete foundation-life occupied union-hours of ALL supported chargers/users, across charger generations. Match capacity/configuration strata and equal-share concurrent occupied-port hours before source/zero-event cohort attribution. The original concrete quantity and terminal foundation concrete use this identical f_foundation and original final denominator. A foundation retained after charger retirement remains in its own life register; replacement casting is a new actual foundation cohort, not a current repair quantity. Missing supported foundation life or all-beneficiary use blocks completion. Terminal row u_charging_asset_service_foundation_concrete_eol: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_charging_asset_service | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_charging_asset_service_installation_ac | u_charging_asset_service_installation_ac | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_charging_asset_service_installation_ac: Q_a is actual unamortized MJ at the declared product gate; q=sum(Q_a*f_c,a)/D. Link this physical asset/installation to the actual charger serial. f_j,c=[sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)]/H_j,life. H uses nonoverlapping complete-apparatus occupied union-hours with the existing port allocation; H_j,life includes all users and positive/zero events through evidenced calendar retirement. Positive-source carryover and zero-event direct/causal/fixed-day rules remain unchanged. q_charger=one complete apparatus*f_j,c/D; installation physical quantity*q fraction follows the same f. Hours are only the attribution driver, never Item(s) or energy conversion.  Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_charging_asset_service | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_building_asset_building_constructed | u_building_asset_building_constructed; u_building_asset_demolition_concrete | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_building_asset_building_constructed: Q_a is actual unamortized m2 at the declared product gate; q=sum(Q_a*f_c,a)/D. For this exact completed shell use attributed measured occupied area-time A_c and an evidenced complete physical service life L years, including calendar retirement; q_m2=A_c/L/D. The equivalent whole-building fraction is f=A_c/(the identical-basis total supported floor area*L). All users share the same capacity denominator; m2*a is not a physical output unit. Use the same whole-building f for terminal residual wastes. Terminal row u_building_asset_demolition_concrete: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_building_asset | asset-native physical unit per D; linked terminal native unit, same f |  |
| calc_atomic_species | all elementary physical rows | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Each elementary row identifies one substance or physically specified particle carrier and one receiving medium/subcompartment. Collect the actual substance/CAS or verified chemical identity, factor unit and mass/molar/carbon expression, source technology/fuel/load, location and receiving medium. Apply a substance-specific measured release or compatible factor once. Factory emissions already in a complete product gate are not also direct provider-use emissions. Particle size classes and fate fractions are mutually exclusive; physically defined particles are not fictitious pure elements. NOx and NMVOC totals are QA observations only, never elementary-exchange substitutes. Every actual extra species/material needs its own concrete bilingual source row, protocol, unit, fixed calculation and normal projection before completed modelling; do not use a selector or a family-name placeholder. | cp_support_contract_road; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_building_asset | one substance or defined physical carrier per receiver |  |
| calc_nox_speciation | nitrogen_monoxide_urban; nitrogen_dioxide_urban; nitrogen_monoxide_rural; nitrogen_dioxide_rural; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide | For the explicitly evidenced definition NOx=NO+NO2 expressed as NO2-equivalent, record T, its unit/basis and source-matched measured molar fraction a=n_NO/(n_NO+n_NO2). Then m_NO=a*T*M_NO/M_NO2 and m_NO2=(1-a)*T, using independently evidenced molecular masses on the same unit basis. Prefer direct substance-specific mass measurements/factors when available and do not add the QA total again. T is not ordinary NO/NO2 mixture mass; never apply a mass fraction directly to T or assign all T to NO2. If definition includes other nitrogen species, speciation or conversion evidence is missing, no two-component split is permitted: preserve the raw QA observation and block completion until actual species-specific rows and quantities are established. No numeric fraction or molecular mass is defaulted by this PCR. | cp_emissions; cp_support_contract_road | kg NO and kg NO2, never NO2-equivalent exchange |  |
| calc_nmvoc_species | actual volatile organic species, concrete source rows required before completion | For each actual combustion/evaporation source, use source-matched calibrated species-resolved sampling/analysis or a traceable species-resolved factor inventory matching fuel, engine/process, control, load, cold/hot regime and period. Retain sampling recovery, calibration/response factors, detection and uncertainty, chemical identity, carbon-versus-compound basis and explicit conversions from formula/molecular data. Reconcile identified species to the measured/factor total on its original stated basis, investigating nonclosure; unidentified material is not zero and not a generic NMVOC exchange. Before completed modelling, author each actually supported species as its own named bilingual elementary card, matching compartment, quantity rule and protocol, then regenerate structured. Do not guess a fixed benzene/toluene/etc. roster, use total NMVOC as one species, or claim an exhaustive species inventory before this evidence exists. | cp_emissions | individual supported compound kg; unresolved speciation blocks completion |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_electric_stock | u_contract_road_electricity_ac | Within each independently metered provider vehicle/battery boundary and complete interval j, E_total=inlet_AC+opening_AC_equivalent+traced_imports-closing_AC_equivalent-traced_exports (kWh). Calibrate usable capacity and empirical inlet-AC/stored-energy curves for the same configuration, temperature and age; percentage SOC or a default efficiency is insufficient. Preserve chronological source vectors on every battery transfer and charging/draw/loss/closing balance, including future beneficiaries and capital-hour carryover; unsupported conversion or unknown stock blocks completion. Remove independently metered direct verified-zero-gross-addition event AC E_zero before route allocation: E_route=E_total-E_zero; unexplained negative residual blocks completion. Allocate E_route using the fixed provider activity_* driver and all users at matching route/task intervals, including empty/failure work. E_zero belongs first to its evidenced causal order, then documented causal task set by actual elapsed service time; genuinely shared noncausal failures use a fixed site-local calendar-day all-user elapsed-service-time pool including failures/waits, splitting at midnight. Unknown gross addition is never zero. No route share is multiplied again onto E_zero. q_AC=(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))*3.6/D, once. Do not reapply provider shares to already attributed physical totals, add another charging-loss uplift, or include workshop/site/installation electricity in this vehicle pool. A compatible supplier intensity must demonstrate this same stock/ownership closure before use; otherwise collect original raw records. Physical-capital f remains its separately fixed lifetime driver, never a second annual energy share. | cp_support_contract_road | MJ per original reference flow |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_maintenance_period | u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window | For every shared routine supporting-provider maintenance pool, fix interval y to the site-local calendar year with timezone and exact asset/site/configuration recorded. Split a cohort crossing years into its within-year activity. Actual installed/consumed material M_x,y and its separately measured generated waste use s_c,y=cohort-attributed beneficiary driver_y/all-beneficiary driver_y for that same year, then q=sum_y(M_x,y*s_c,y)/N_ref once. The driver is the physical support-process activity fixed in activity_*; for vehicle upkeep it is actual vehicle kilometres including once-attributed empty/failure travel, for variable road upkeep it is evidenced class-specific engineering damage in the same year, and for building fabric it is reserved floor-area-calendar-hours. Other shared support equipment uses its fixed actual all-beneficiary task/cycle/union-hour driver; retain exact configuration strata and no concurrency duplication. A signed maintenance work order fixes the causal asset and task pool before calculation, not a later modeller choice. Specific accident/failure repair is allocated exclusively to its evidenced causal order/task set, never also to the annual routine pool. Genuine component consumption excludes unused opening/closing stocks, uninstalled returns and internal transfers; generated removed parts retain this original event/year/share through later custody. No assumption that input and removed-part masses are identical. Apply one annual period share, not whole-life f, to real component repairs; entire replacement assets create separate capital cohorts instead. A positive unsupported pool or zero/unknown all-user denominator blocks completeness. Apply the same rules to retained provider maintenance cards where previously referenced; independent specific generation/fate balances and exact overlap exclusions remain mandatory. For vehicle R134a supply, recovery and release, calc_carrier_r134a is the sole quantity rule. This rule supplies only its same asset-year driver and causal attribution. The dedicated refrigerant calculation owns each purchase, first use, recovery and release; this row supplies no second refrigerant purchase or removed-part inventory. | cp_support_contract_road; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_building_asset | native physical unit per original reference flow |  |
| common_calc_r134a_identity | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Component of calc_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Record ownership, custody, processing responsibility, physical gate and both endpoints for each batch and movement ID. All balance terms are kg of the named chemical. Obtain net batch B=gross weight minus tare on a calibrated scale; determine chemical mass fraction x from batch-matched supply or receiver tests or calibrated analysis, then use B*x. Use an independently measured chemical mass once. Activate the named exchange only with evidence matching its material specification; assume neither 100% nor a default purity. For a different mixed product or mixed waste containing oil/water or other components, record its actual carrier, wet net batch mass and receiver state in a distinct row. Retain refrigerant constituent kg for mass balance only; do not add a second independent output for that same carrier. If no actual carrier row exists, add the concrete bilingual row and protocol and verify its official identity. Unknown composition, actual object or responsibility blocks completion. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; allocation_provider_maintenance_period; cp_support_contract_road | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| common_calc_r134a_stocks | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Component of calc_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Installed ledger: L_inst=I_open+X_install+U+I_other_in-I_close-R-I_other_out. R is the matched installed-out/store-in recovery, U is matched store-out/installed-in reuse and X_install is installation from the unused new-material store only. Recovered/reclaimed store: L_store=S_open+R+S_external_in+S_internal_in-S_close-U-P_ext-W_ext-S_internal_out-S_other_out. P_ext/W_ext are named-chemical constituent kg in actual product/waste handovers from that store, including constituents of mixed carriers for reconciliation. A direct handover from installed stock uses I_other_out and the actual output once with the same ID, without R/P_ext/W_ext; evidence other outflows separately. Uninstalled new store: F_open+F_purchase+F_transfer_in-F_close-X_install-F_transfer_out-F_return=F_other_out; substantiate each actual loss and other fate in F_other_out. Paired internal moves cancel over the combined boundary. Resolve all positive residuals to evidenced events and media. Only verified air release enters the air row, including verified unused-store air loss if it occurs. Unknown, negative or unreconciled balances or unsupported media block completion. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; allocation_provider_maintenance_period; cp_support_contract_road | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| calc_r134a_initial_scope | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | Component of calc_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Original fill already included in the complete HVAC asset is not repurchased. Fill outside that product gate is a separate initial-installation source attributed once using the matched asset lifetime fractions under calc_capital_restatement, not a current-period routine top-up. Count site maintenance, external treatment and equipment terminal coverage once by movement ID and responsibility. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| common_calc_r134a_custody | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Component of calc_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. S_external_in=S_purchased+S_custody. S_purchased is an externally reclaimed product accepted for this system. For own refrigerant returned from offsite processing under retained responsibility, use S_custody and match original lot, dispatch/return IDs and custody/title evidence. Do not repurchase its original material; inventory actual external reclamation, loss, transport and treatment once on its evidenced boundary, removing overlap. Keep other entrusted lots in a segregated custody ledger, reconcile and return them to the responsible party, and exclude them from U. Where this service actually takes external waste reception, reclamation or use responsibility, review that processing boundary, concrete input and treatment chain before completion. Unsupported or out-of-scope processing cannot be claimed complete. Paired moves inside the same responsibility boundary are internal only. U takes only accepted recharge-ready material within the service responsibility. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; allocation_provider_maintenance_period; cp_support_contract_road | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| common_calc_r134a_supply_origin | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Component of calc_r134a; calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At physical receipt, register each purchase or equivalent acquisition of title once by receipt ID, as new supply F_purchase or purchased reclaimed product S_purchased accepted for recharge. Retain the matched supplier inventory for each batch: include new production or reclamation and compatible supply transport once, removing exact overlap with carriage or workshop coverage. Preserve source vectors through opening/closing uninstalled and recovered stocks, transfers, supplier returns, installation, disposal and release. For a physically blended same-state store with indistinguishable lots, remove source fractions in proportion to verified pre-movement source kg. Keep gross receipts in the physical ledger. Assign original supply burden when the lot first supplies an actual installation in this service or has an evidenced irreversible loss attributable to it, marking the allocated fraction. Later recovery, reuse or disposal carries only new operations, with no second purchase burden. Carry usable uninstalled stock and its unapplied supply burden forward; unused supplier returns or internal transfer alone do not enter service consumption. Across periods, allocated fractions cannot exceed the eligible lot. Apply evidenced direct causality or the matched all-user driver once. Join the original lot and beneficiary event; do not use receipt-period total as the cohort input or rebook the same lot. Put only cohort-attributed supply kg on the service input rows. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; allocation_provider_maintenance_period; cp_support_contract_road | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| calc_r134a_allocation | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | Component of calc_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each site-local calendar month of site HVAC, attribute evidenced dedicated tasks first; remaining first-service-use/irreversible-loss supply, usable product handovers and non-waste stock releases use that same month allocation_sites resource driver and all beneficiaries. Preserve lot origins across months; do not replace monthly denominators with whole-cohort cross-month activity. An untraceable shared-store remainder is first assigned by each beneficiary site evidenced kg issued of the same chemical from that store in that month, then by its same-month site shares; missing positive issue/all-user denominators remains unresolved. Original/initial asset fill follows the lifetime method above without another monthly operating share. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| calc_r134a_outputs | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | Component of calc_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. A_supply and A_reclaimed are attributed purchased new and reclaimed chemical kg respectively. A_product is actual product handover kg matching the named product row. A_waste is determined only by calc_refrigerant_waste_origin from original generation events, never substituted with current dispatch quantity. Mixed carriers use their own rows rather than these named chemical rows; A_air is verified air release. Divide each by original D once. Apply allocation_site_refrigerant_recovery for recovery product/waste responsibilities and do not grant substitution credit. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| calc_r134a_waste_priority | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | Component of calc_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. The current site-period share here applies only to first-use/loss supply, usable product handovers and current releases from non-waste stock. A_waste and treatment/releases from waste-tagged stock retain their original generation responsibility under calc_refrigerant_waste_origin; this rule does not override that origin. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| calc_r134a_site_media | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | Component of calc_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. I/F/S here belong to site HVAC and are not pooled with carrier-vehicle stocks. Partition A_air once between r134a_air and r134a_air_rural by evidenced release location; shares sum to one, never put the same total in both rows. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| calc_r134a_initial_supply | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | Component of calc_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Before computing attributed supply, separate initial fill outside the asset gate from routine operating supply. A_supply/A_reclaimed respectively equal original-cohort virgin/reclaimed operating first-use or irreversible-loss kg plus corresponding initial-fill source kg times the asset fraction under calc_capital_restatement; initial-fill sources do not also enter monthly operating pools. Original fill already inside the asset gate is not repeated in either amount. Routine operating sources in the two supply rows never receive lifetime f. Only initial-fill sources separated by asset/source ID and initial/routine tag and outside the equipment product gate invoke calc_capital_restatement. Combine the mutually exclusive attributed components and normalize by original D only once. | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | Method component; the originating entry owns the inventory result | ghg-scope3-2013 |
| calc_carrier_r134a_initial_scope | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Component of calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Original fill belongs to the complete vehicle; count workshop, external treatment and vehicle terminal coverage once by movement ID and responsibility. | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin | Method component; the originating entry owns the inventory result |  |
| calc_carrier_r134a_allocation | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Component of calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For the exact asset and site-local calendar maintenance year, assign evidenced exclusive causal events first, then allocate the remainder by cohort kilometres/all beneficiary kilometres for that year, including attributed empty and failed work. Keep source lineage for shared-store issues or losses traceable to an asset; allocate untraceable store losses first to beneficiary assets by their documented kg issued of that chemical from the same store in that year, then by their asset-km shares. Split at year boundaries; a positive pool without evidenced positive all-user km or issue denominator remains incomplete. | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin | Method component; the originating entry owns the inventory result |  |
| calc_carrier_r134a_outputs | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Component of calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. A_supply and A_reclaimed are attributed purchased new and reclaimed chemical kg respectively. A_product is actual product handover kg matching the named product row. A_waste is determined only by calc_refrigerant_waste_origin from original generation events, never substituted with current dispatch quantity. Mixed carriers use their own rows rather than these named chemical rows; A_air is verified air release. Divide each by original D once. Apply allocation_carrier_recovery for recovery product/waste responsibilities and do not grant substitution credit. | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin | Method component; the originating entry owns the inventory result |  |
| calc_carrier_r134a_waste_priority | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | Component of calc_carrier_r134a. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. The current asset-period share here applies only to first-use/loss supply, usable product handovers and current releases from non-waste stock. A_waste and treatment/releases from waste-tagged stock retain their original generation responsibility under calc_refrigerant_waste_origin; this rule does not override that origin. | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin | Method component; the originating entry owns the inventory result |  |
| calc_refrigerant_waste_origin_generation | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | Component of calc_refrigerant_waste_origin. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. A refrigerant becomes waste only at an evidenced irreversible decision removing it from usable/recharge-ready inventory for discard, with the actual material identity, owner and responsible service established. Recovery alone does not make usable material waste; neither later dispatch nor a commercial credit determines the generation date. Record generation event j, physical lot/location, measured gross/tare/net mass, composition/condition, original asset/site, generation interval, original beneficiary shares alpha_c,j and original service denominator N_c. For directly causal waste use the evidenced original task; otherwise apply the existing site-period or asset-maintenance-year/vehicle-month driver at generation, with that interval all-user denominator. For an untraceable shared store use the existing same-chemical issue-mass-to-asset driver in the generation interval, then its original asset beneficiary shares; unsupported or zero positive-pool denominators remain incomplete. | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant | Method component; the originating entry owns the inventory result |  |
| calc_refrigerant_waste_origin_quantities | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | Component of calc_refrigerant_waste_origin. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each named waste row r set A_waste_c,r=sum_j(G_j,r*alpha_c,j), q=A_waste_c,r/N_c once. G is the actual generated quantity on that row material/unit basis, including generated but retained waste. Only matching named-chemical waste uses the named chemical row; mixed oil/water/chemical carriers require their own actual carrier row and compatible whole-carrier mass; constituent kg remains a balance control, not another waste exchange. | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant | Method component; the originating entry owns the inventory result |  |
| calc_refrigerant_waste_origin_state_ledger | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | Component of calc_refrigerant_waste_origin. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. The waste-state register is a tagged view of the existing I/F/S physical stocks, not a fourth additive physical inventory. Classification at the same location changes the state tag only and does not also subtract R, W_ext or another physical transfer; sum usable plus waste-tagged stocks exactly once in the original stock equation. Exclude all waste-tagged mass from U or other recharge. Reconcile each waste-origin lot: closing=opening+generation+internal_in-internal_out-external_dispatch-evidenced_physical_loss, preserving original shares and N_c through transfers. Physical W_ext remains actual dispatch in the original mass balance; it is not A_waste and cannot create a new generation quantity. | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant | Method component; the originating entry owns the inventory result |  |
| calc_refrigerant_waste_origin_fate_updates | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | Component of calc_refrigerant_waste_origin. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Retained generated waste requires supported storage/transport/final treatment on the generation-gate basis under allocation_atomic_waste, using compatible actual evidence or a documented prospective route with uncertainty. Later receiver evidence replaces the same original model and recomputes the original cohort, including changes in material, residual mass or fate; never add the same quantity/treatment to the dispatch-period service. Explicit storage releases and treatment residuals must replace, not duplicate, the corresponding linked treatment inventory; shared site/storage handling already in another service row is removed by a scope crosswalk. If a physical release from waste-tagged stock is already separately modelled, retain its original waste-origin responsibility and remove that release from the linked inventory. Usable product handovers keep their existing product cut-off, never the waste branch. Unsupported origin, composition or treatment leaves the original result incomplete; later sale alone cannot relabel a generated waste event as a product. For the current waste row and original cohort, A_waste abbreviates A_waste_c,r; card D/N is that original cohort N_c, never dispatch-period output. | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_driver_revision | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For every asset a retain versioned all-user activity and each original beneficiary cohort/stratum c, including failed/empty work under its existing fixed responsibility rule. u_c,a is its attributed actual driver to date; U_a is evidenced complete-life all-user driver (actual to date plus supported remaining forecast), in the identical configuration and unit. U_a must be positive and at least the actual all-user total. Set f_c,a=u_c,a/U_a; do not use remaining activity as U_a. On every life, activity, beneficiary, source-quantity or terminal-route revision recompute every affected original cohort, including previously reported cohorts; do not preserve an old fraction while applying a new lifetime denominator only to later cohorts. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_source_correction | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each independent source s in its native unit, A_s,c,new=Q_s,new*f_c,a. Q_s,new is its current evidenced full manufacture/installation source quantity before lifetime allocation, not a remaining unallocated balance, or matched net terminal residual/complete lifecycle source; it is not a previously allocated quantity. Retain B_s,c, the previously booked attributed raw amount, and its original normalized result/version; delta_A_s,c=A_s,c,new-B_s,c. A newly evidenced terminal source has B=0, while a correction to an existing source replaces that same source ID. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_normalization | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Recompute q_s,c=A_s,c,new/N_c using that original cohort current verified reference denominator N_c; if N_c itself was corrected, replace the old result rather than adding delta_A/new_N to a result based on old_N. Sum source contributions only after removing documented overlap. Record positive/negative result corrections, never negative physical transfers, substitution credits or another current-period whole-asset purchase. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_retirement | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At final retirement replace U_a by complete actual all-user driver, recompute all f and all source quantities; for positive total activity all beneficiary fractions sum to one, including non-study beneficiaries. Measured terminal net residual is not reduced again by historical removals. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_zero_activity | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Zero-output events retain their existing causal parent cohort and its original denominator; never seek an unrelated positive-output period. If that parent has no positive N_c, retain attributed raw totals and an unresolved normalized result. With zero lifetime activity, assign only to an evidenced sole commissioning responsibility under the same original-cohort rule; otherwise retain the unallocated source and block completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_shared_driver_controls | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Keep asset manufacture, installation and terminal burden on the same revised f, while gross stock, transfers and retirements remain separate physical control records. For a calendar-time asset, u is its elapsed service-capacity time assigned once to each original class/period by the existing shared/class rule, including the prescribed vacancy/failure responsibility; U covers that same all-user calendar capacity. Do not apply the class share a second time to q. Unknown history, unsupported life/endpoint or missing original denominators blocks completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_background_version | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. If a supply-background or treatment-model version changes without a physical quantity change, replace the corresponding linked inventory and result for all affected original cohorts; a zero physical delta_A does not preserve the old model. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_complete | all rows | Raw fields and protocols are mandatory; supplier names/amounts may await collection but physical assignment, formulas, denominator and de-duplication follow these fixed rules. Screen other actual materials and emissions; missing exchange blocks completeness. | complete occurrence and coverage register |
| dq_represent | cohort and allocation | Use 12 consecutive acceptance months and track to final closure, covering peaks, all sites and routes. Separate service promise, mass/size, technology and location strata; disclose sampling weights and uncertainty. | cohort ledger; calibration; peak/nonpeak workload study |
| dq_identity | each selected flow | Validate exact candidate identity before binding; retain unresolved candidate and block completed modelling if absent. Official names do not erase material/route/state/compartment qualifiers. | official response and hash-bound receipt |
| dq_factors | emissions and lifetime | No default factor or life is specified. Record original factor/life source, version, technology, unit, boundary, uncertainty and sensitivity. Proxy requires compatible basis and explicit disclosure; unknown is not zero. | original source; supplier or maintenance evidence |
| dq_condition | conditional cards | Demonstrate occurrence/non-occurrence from fuel/assets/repair/waste records, not lack of invoices alone; investigate idle assets, stock changes and outsourced tasks. Missing confirmation remains unresolved. | signed site/route occurrence matrix |
| quality_waste_origin | waste_cardboard; waste_paper; waste_pp | For every ordinary solid-waste stream verify generation responsibility, original cohort/stratum/denominator, origin-labelled stock balance, supported actual or prospective complete treatment and later-receipt replacement. Unknown origin/fate/physical loss remains an explicit gap; future dispatch alone cannot close or reassign it. Keep wastewater and amortized terminal-asset treatment on their separate methods. | generation/stock/transfer ledgers; supported treatment scenarios; same-event receipt replacements |
| quality_charge_events | activity_charging_asset_service; traction_electricity | Verify every occupied charging event is positive gross source addition, verified zero addition or unresolved; net SOC alone cannot decide. Reconcile mutually exclusive source/direct/causal-set/shared-day shares, all beneficiaries, hours and metered losses. Failed/cancelled zero-addition hours remain counted with no successful-output credit; unknown evidence is not zero. Verify electricity removal from the residual route pool and keep the complete-life occupied-hours denominator unchanged. | session/source/branch records; meter and occupancy reconciliation; all-user causal-time evidence |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | all disaggregated support and species | Completeness is branch-specific under foreground_interface_method and foreground_interface_coverage. Foreground physical exchanges need the retained exact identities, original measurements, species and stock reconciliation. External interfaces need one defined service/property/unit, measured activity, exact supplier gates and compatible background coverage, not exhaustive provider-internal BOMs or capital ledgers. Unknown occurrence is not absence; uncovered real scope is an explicit gap. Unbound interface UUID/property/unit-group identities remain row-specific candidates until direct official evidence and receipts resolve them. The interface is not permission for an undefined multi-service package or for an Item(s) substitute for hours/mass/transport activity. | scope-to-physical-row reconciliation; supplier/BOM/species originals; signed gap register |
| quality_service_interfaces | svc_contract_road; svc_road_infrastructure; svc_charging_asset_service; svc_building_asset | Completeness is branch-specific under foreground_interface_method and foreground_interface_coverage. Foreground physical exchanges need the retained exact identities, original measurements, species and stock reconciliation. External interfaces need one defined service/property/unit, measured activity, exact supplier gates and compatible background coverage, not exhaustive provider-internal BOMs or capital ledgers. Unknown occurrence is not absence; uncovered real scope is an explicit gap. Unbound interface UUID/property/unit-group identities remain row-specific candidates until direct official evidence and receipts resolve them. The interface is not permission for an undefined multi-service package or for an Item(s) substitute for hours/mass/transport activity. | cp_interface protocols; signed coverage/ownership matrix; native-unit reconciliation; identity receipts |
| scope_interface_contract_road | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_r134a_recovered_waste; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; svc_contract_road | For support_contract_road, svc_contract_road is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; svc_road_infrastructure | For support_road_infrastructure, svc_road_infrastructure is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; svc_charging_asset_service | For support_charging_asset_service, svc_charging_asset_service is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_building_asset | u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete; svc_building_asset | For support_building_asset, svc_building_asset is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| inv_urban_air | co2_fossil; co2_biogenic; methane; nitrous_oxide; co; so2; pm25; pm_coarse | This card applies only to urban ground-level air; record source geography and use the separate rural card for rural sources. | Existing collection protocols and evidence of each listed inventory row. |
| inv_nitrogen_species | nitrogen_monoxide_urban; nitrogen_dioxide_urban; nitrogen_monoxide_rural; nitrogen_dioxide_rural | One chemically specific emission, not NOx or NO2-equivalent total. Use direct species mass/factor or the evidence-bound section 8 molar-speciation rule; unknown composition or an incompatible aggregate definition blocks complete quantification. | Existing collection protocols and evidence of each listed inventory row. |
| inv_rural_air | co2_fossil_rural; co2_biogenic_rural; methane_rural; nitrous_oxide_rural; co_rural; so2_rural; pm25_rural; pm_coarse_rural | This card applies only to rural ground-level air; record source geography and use the separate urban card for urban sources. | Existing collection protocols and evidence of each listed inventory row. |
| inv_carrier_scope | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_recovered_product; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air | Replace the full purchased carrier lifecycle service on its existing exclusive segment/attempt boundary with supplier-owned physical inventories. Keep custody gates, all customers, failed/repeated attempts, empty returns, idling and terminal losses. No overlap with operator-owned legs or another supplier service. | Existing collection protocols and evidence of each listed inventory row. |
| inv_occurrence | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete | Only with evidence that this exact physical exchange occurred within the replaced scope; an unknown occurrence is not zero. | Existing collection protocols and evidence of each listed inventory row. |
| inv_ac_basis | u_contract_road_electricity_ac; u_road_infrastructure_maintenance_ac; u_charging_asset_service_installation_ac; u_charging_asset_service_maintenance_ac; u_building_asset_repair_ac | Applies only to independently evidenced point-of-use AC; this generic UUID does not determine supplier, grid, voltage or generation technology. Meter kWh converts to MJ by 3.6 once; installation/repair AC and operating AC have disjoint meter/phase ownership. | Existing collection protocols and evidence of each listed inventory row. |
| inv_vehicle_basis | u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck | One specified physical vehicle and original components at factory handover; exclude operation, replacement maintenance, retirement, road and charger. Actual vehicle class/model must occur within this original service boundary; no new route is added. For this actual vehicle serial/configuration use allocated cohort vehicle-km divided by evidenced all-user complete-life vehicle-km, matching the original vehicle-capital rule. Include loaded/empty/failure movements and calendar retirement. q=one complete vehicle*f/D, once; do not multiply again by tonne-km or parcel attempts. | Existing collection protocols and evidence of each listed inventory row. |
| inv_residual_carrier | u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck | Measured real residual carrier stream at handover, excluding emitted wear/leakage and components already removed. Retain original beneficiary responsibility, storage and treatment chain; unknown future routes require disclosed scenarios. Later receipts replace the origin treatment model, not another cohort burden. | Existing collection protocols and evidence of each listed inventory row. |
| inv_carrier_emissions | u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air | Actual measured species or physical particulate fraction at the evidenced receiving air compartment; split urban/rural where the existing PCR does. NOx-as-NO2 is not actual NO2 mass; NO/NO2 need verified speciation and molecular-mass reconciliation. Wear excludes equivalent background release and residual waste mass. | Existing collection protocols and evidence of each listed inventory row. |
| inv_road_scope | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | Replace road lifecycle provision with one real complete specified constructed section at construction-completion/open-to-traffic gate; later maintenance/renewal and EOL are separate physical exchanges. | Existing collection protocols and evidence of each listed inventory row. |
| inv_terminal_carrier | u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | Real separately collected carrier stream at handover; terminal mass excludes prior replacement/removal, separately recovered products and explicit physical losses. Retain origin beneficiary allocation and full storage/treatment chain; no duplicate constituent or wear release. | Existing collection protocols and evidence of each listed inventory row. |
| inv_charger_scope | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | Replace lifecycle availability hours with a genuine complete factory-gate charger product plus actual external installation, replacement maintenance and EOL. H_k remains an attribution driver, not a physical flow or an item equivalence. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | Service and qualifiers | Require evidence of USO contract/legal scope, domestic origin/destination, acceptance and receipt gates, promised service time, observed duration, weight/size distribution, distance, modality, owner split and declared technology configurations. Domestic and international, road and air, ordinary and guaranteed-time services cannot be pooled as equivalent. | un-cpc3-68012; upu-parcel-service |
| validate_service_interfaces | svc_contract_road; svc_road_infrastructure; svc_charging_asset_service; svc_building_asset | Verify the event/component responsibility matrix before reading row amounts. An external-service component activates its interface only; its covered detailed physical counterpart is inactive, not a measured zero. Verify one property/unit, raw native activity, original all-user allocation and single final normalization; failed/reworked/empty events follow the retained cohort rules. Test partial contracts, own energy/assets/retained wastes, already allocated supplier inventories, zero-output cohorts and missing complementary coverage. Reject double counting, invented identity/amounts, forced supplier-internal collection or an undocumented branch change. Verify all service row IDs and protocol/rule links in both languages and generated guidance. |  |
| `validate_accounting` | All row IDs and protocols | Check every card identity, process/direction/type, property/unit, protocol, observed total, attribution and exactly-one normalization. Reconcile cohort A=D+R+L+X, material stocks and issue/waste balances, meter versus invoices and all-load/handling denominators. Reject any D<=0, open cohort, double-covered route or asset component. Verify mutually exclusive positive-source/verified-zero charging branches and no double electricity allocation. Test retained waste generation in cohort A and later transfer in cohort B: treatment remains with A and later receipts replace its model, without new B waste/treatment. Check each refrigerant receipt, source batch, stock, first-use assignment, movement and external ownership/status. Verify gross/tare/net and constituent evidence, no second carrier/component exchange, and no duplicated upstream processing or retirement scope. |  |
| `validate_evidence` | Identity and missing data | Empty UUID is an explicitly unbound candidate, not a false identity. Before a finalized dataset, verify exact official response/receipt hashes, record state, bilingual name, qualifiers, flow type/property/unit and emission compartment for each binding; search similarity is insufficient. Missing amounts/factors require collection or a cited compatible proxy with uncertainty, never zero. No PCR default consumption, weight, density, factor or compliance limit is supplied. |  |
| `validate_projection` | Bilingual and machine rules | Both languages must retain matching ordered rule IDs, row IDs, protocol references, gates, formulas, conditions, prohibitions and units. Sync from canonical Markdown and compare actual guidance units and scope, not merely schema/hash. Candidate/authored and translation aligned are structural authoring states, not scientific approval or publication. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | all support and emission rows | Verify the event/component responsibility matrix before reading row amounts. An external-service component activates its interface only; its covered detailed physical counterpart is inactive, not a measured zero. Verify one property/unit, raw native activity, original all-user allocation and single final normalization; failed/reworked/empty events follow the retained cohort rules. Test partial contracts, own energy/assets/retained wastes, already allocated supplier inventories, zero-output cohorts and missing complementary coverage. Reject double counting, invented identity/amounts, forced supplier-internal collection or an undocumented branch change. Verify all service row IDs and protocol/rule links in both languages and generated guidance. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | Check original cohorts/denominators, all-user driver, source versions, booked amounts and restatement corrections under calc_capital_restatement. Reject frozen old history with only future-denominator changes, retirement-balance transfer to unrelated current output, and negative physical exchanges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate parcel service foreground with upstream energy/material/assets and operational waste-treatment links |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same qualified domestic road USO service; downstream goods LCA may link this service once |
| excluded_use | Whole CPC 68012 equivalence, courier, international, air/sea/rail, cold chain, goods production and unqualified cross-service comparisons |
| required_metadata | All reference qualifiers; D and A/R/L/X; cohort and route stratum; methods and sources; owner/supplier coverage; raw-to-normalized audit trail; charging branch and failure-event ownership/timezone records; waste generation-origin ownership, retained stock and receiver-model revision chain; signed foreground/interface responsibility matrix, native service activity and background coverage; original physical activity, manufacture/terminal pairing and species basis only for foreground-owned components |
| required_quality_disclosure | Unbound identities; missing quantities/factors; proxies; sampling and allocation uncertainty; lifetime sensitivity; limited scope and incomplete components |
| update_trigger | USO or route/gate/service change; new fuel/material/refrigerant/asset; altered factor/supplier boundary; evidence correction; annual cohort refresh; charging event evidence/branch correction; later waste receipt/fate or generation correction updates the original-cohort model; foreground physical identity/speciation changes or external interface configuration/unit/coverage changes require applicable concrete-row review and fresh projection |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-68012 | official_guidance | UNSD CPC Version 3.0, subclass 68012, and Explanatory Notes p.379. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68012 | Universal-service parcel collection/transport/delivery classification; distinguishes non-USO courier |
| upu-parcel-service | official_guidance | UPU, Parcel Post. https://www.upu.int/en/Postal-Solutions/Programmes-Services/Quality-of-service/Parcel-Post | Postal process, tracking quality and operator delivery-time commitments; international context does not establish domestic legal obligations |
| ghg-scope3-2013 | official_guidance | WRI/WBCSD, Technical Guidance for Calculating Scope 3 Emissions, v1.0 (2013), category 4 pp.49–71, formulas 4.1–4.4; category 5 pp.72–80. https://ghgprotocol.org/sites/default/files/standards/Scope3_Calculation_Guidance_0.pdf | Fuel/electricity/refrigerant activity; physical mass/volume allocation; carrier boundaries and waste treatment. Used as method support, not full LCA conformance or default factors |
