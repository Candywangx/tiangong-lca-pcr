---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-letters
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Domestic ordinary addressed-letter post — outsourced road-carriage configuration

## 1. Scope and Applicability

This PCR specifies only a domestic ordinary addressed-paper-letter service with outsourced motor-road carriage and facilities without onsite combustion or refrigerant equipment. These limits define the examined service/operating method; missing database UUIDs do not justify excluding real exchanges. It does not cover the whole CPC leaf. A different actual configuration cannot claim applicability or replace unknown exchanges with zero. Normative obligations are stated in the rule tables below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-letters |
| classification_refs | CPC 3.0 68011; narrower configuration only. The subclass also includes newspapers, periodicals, brochures, leaflets and international services under a universal service obligation (USO). |
| covered_products | Ordinary addressed paper-letter collection, sorting, domestic surface carriage and delivery under a documented USO, with all motor-road operations purchased from carriers and electrically operated or purchased-hot-water-heated postal facilities without onsite combustion or refrigerant equipment. |
| excluded_products | Courier/express, parcels, newspapers/periodicals, advertising leaflets/brochures, registered/insured/signature products, international or air/rail/sea carriage, self-operated motor fleets, onsite combustion and refrigerant-equipped facilities. |
| representative_product | One correctly delivered ordinary addressed letter in one declared domestic origin/destination and weight/service-class stratum; no standard letter weight, distance or delivery time is assumed. |
| production_route | Acceptance/collection → address preparation and sorting → outsourced road linehaul → destination sorting → outsourced van collection/delivery rounds → correct delivery; actual redelivery, forwarding and final returns are retained in the cohort. |
| market_state | Completed postal service at the declared delivery point; the carried letter remains customer cargo and is not a manufactured product of the operator. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Correct delivery of one admitted ordinary addressed letter under the declared USO and this service configuration. |
| How much | One completed delivered-letter service. |
| How well | Correct declared delivery point and acceptance-quality condition; disclose service class, observed transit time, lateness and damage, without equating dissimilar service levels. |
| How long or cycle | One closed calendar-month acceptance cohort, followed through each actual terminal outcome; no arbitrary follow-up limit converts pending letters into delivered or lost letters. |
| reference_flow_link | delivered_letter |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Domestic ordinary addressed-letter delivery service, outsourced road carriage |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | USO evidence and operator; domestic origin/destination stratum; ordinary letter class; actual mass and size band; address and delivery-point type; acceptance month and closure date; dispatch route and carrier; parcel/other-mail shares; sorting technology; motor carriage outsourcing; facility electricity/hot-water and absence of combustion/refrigerant equipment; service-quality criteria; measured transit-time distribution; D, T, L, X and pending counts; capital and maintenance coverage; geography and electricity/heat supply; exclusions and uncertainty. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | delivered_letter | Number of items | item | D counts unique correctly delivered, accepted-quality letters in the selected closed acceptance cohort; returned, rejected, lost, destroyed and pending letters are not D. One item means this defined service, never one vehicle trip or one equipment-hour. |
| m_units | all inventory rows | Declared numerator property | Declared row unit | Keep mass, volume, energy, distance, area-time and equipment-time independent. Convert metered kWh to MJ only by 3.6 MJ/kWh when a matched dataset requires MJ; convert kg to tonnes by 1000 kg/t. No count-to-mass, density, calorific-value or payload default is permitted. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Letter accepted into operator custody at the declared mailbox, collection stop or postal counter. Collection from an admitted pickup is included; customer travel and manufacture of the carried letter/envelope are outside the postal-service gate. |
| starting_condition_role | Service-custody boundary, not zero-burden manufacture of paper. A whole-letter product LCA must add its paper/printing independently. |
| product_classification_scope | Only the domestic ordinary addressed-letter, outsourced-road, non-combustion/non-refrigerant facility configuration within CPC 3.0 68011. |
| recursive_input_rule | Apply boundary_atomic_support: external activities enter through a defined single-unit service interface; do not recursively expand supplier internals. Foreground physical processes retain their existing cards and rules. Custody cargo is not a manufactured input. |
| upstream_dataset_requirement | Keep a signed scope-ownership matrix for each service contract and background dataset: exact gates, route/configuration, place/period, native reference unit, quality, supply/operation/empty/failure/maintenance/capital/terminal coverage, all-user allocation and foreground overlaps. Background coverage must preserve the existing lifecycle obligations and candidate allocation policies; it may be documented by a compatible dataset and supplier scope declaration without obtaining every internal exchange. Purchased quantity is measured at the interface; bundled independent services or incompatible units require separate concrete rows. For partial coverage partition by evidenced event/component first. Keep operator-owned assets, separately supplied energy/materials, customer-provided parts and operator-retained waste only in their own physical rows and exclude them from the supplier inventory. Suppress only identical covered supplier components; retain excluded real components through their own specific interface/physical rows. Never add the detailed counterpart to a service covering it; never erase burden because supplier detail is unavailable. Missing service-unit conversion, identity, coverage or a required complementary component blocks completeness, not zero. Existing narrower product applicability, physical stock balances, original-cohort corrections and receipt evidence remain mandatory for their actual owners. |
| disclosure | Follow admitted letters through correct delivery or final return/loss/authorized disposal; include associated retries, rerouting, holding, zero-output operation and rejected-intake share. Exclude recipient use and customer-letter production. Require exact supplier interface and capital coverage statements. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_scope | all processes | Apply only when every configuration qualifier is evidenced. USO is mandatory. Different routes or onsite fuel/refrigerant operations require a separately reviewed methodology configuration; this PCR does not authorize replacing them with zero or a generic service. | `un-cpc3-68011` |
| b_gate | postal_letter_service | Include counter/collection, all sorting and storage, all road legs and empty repositioning, attempted deliveries, forwarding, returns, terminal disposal and attributable administration/support. Record custody transfers in the same journey ledger without creating extra completed services. Pre-custody counter rejection is included as same-service acceptance support, not as an admitted letter. | `upu-postal-ghg-2010` |
| b_no_double | all inventory rows | Apply foreground_interface_coverage: outside foreground use the specific service interface; the following detailed physical requirements apply only to foreground-owned components. For every purchased leg include its physical fuel/electricity, direct emissions, manufacture, maintenance, infrastructure and terminal scope under mutually exclusive inventory owners exactly once. No complete transport-service input remains. Capital manufacture excludes separately metered operation and trays. Link each physical waste carrier to its compatible supported treatment once; never count whole wastewater and contained pollutant mass twice as treatment amounts. |  |
| b_materials | all inventory rows | Cards cover the declared configuration. Verify absence of unlisted direct chemicals, refrigerant losses, fuels and material wastes using procurement, maintenance and waste registers; a found unlisted exchange blocks completeness and requires an atomic card and reviewed scope before use. Never discard an actual material merely because it lacks a UUID. |  |
| b_counter_interface | postal_letter_service | Apply foreground_interface_coverage: outside foreground use the specific service interface; the following detailed physical requirements apply only to foreground-owned components. Ordinary acceptance-counter activity and its support are included. If another provider performs acceptance, use its separately identified physical inventory with matched interface and remove exact overlapping counter energy, materials and asset shares here; count acceptance once. A counter-service package is not an input. Postage is a payment, and customer letters are custody cargo rather than operator-manufactured goods. |  |

### Atomic supporting-activity boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | supporting activities | Each active exchange represents one defined material, equipment or service object with one primary property and unit. A service is not disallowed merely because it has upstream processes. Fix responsibility by provider, contract, site, event, gate and scope component before quantification. Operator-run processes and separately commissioned onsite tasks under operator inventory responsibility use foreground physical rows. Independently provided activities outside that responsibility use their specified service-interface rows; supplier manufacture, utilities, maintenance and waste remain in the matched background service, not extra foreground exchanges. A contract alone does not turn supplier internals into foreground. Do not change the product, route, custody gates or original reference denominator. Apply foreground_interface_method and foreground_interface_coverage; boundary changes need PCR review, not a data-availability choice. Ownership here means inventory responsibility, not legal title alone: rented equipment provision may be an external service while separately metered operator-run electricity remains foreground. |  |
| foreground_interface_coverage | all support processes and overlaps | Keep a signed scope-ownership matrix for each service contract and background dataset: exact gates, route/configuration, place/period, native reference unit, quality, supply/operation/empty/failure/maintenance/capital/terminal coverage, all-user allocation and foreground overlaps. Background coverage must preserve the existing lifecycle obligations and candidate allocation policies; it may be documented by a compatible dataset and supplier scope declaration without obtaining every internal exchange. Purchased quantity is measured at the interface; bundled independent services or incompatible units require separate concrete rows. For partial coverage partition by evidenced event/component first. Keep operator-owned assets, separately supplied energy/materials, customer-provided parts and operator-retained waste only in their own physical rows and exclude them from the supplier inventory. Suppress only identical covered supplier components; retain excluded real components through their own specific interface/physical rows. Never add the detailed counterpart to a service covering it; never erase burden because supplier detail is unavailable. Missing service-unit conversion, identity, coverage or a required complementary component blocks completeness, not zero. Existing narrower product applicability, physical stock balances, original-cohort corrections and receipt evidence remain mandatory for their actual owners. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| postal_letter_service | Acceptance, sorting, purchased road carriage, delivery and failure handling | required | all stages of declared configuration; heat and wastes conditional on occurrence | foreground | delivered_letter: 1 Item(s) |
| support_linehaul | Support interface / foreground activity: Non-refrigerated road letter trunk carriage | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Actual purchased non-refrigerated road letter-mail trunk carriage; expansion describes the carrier background, not a change to operator-owned transport. | support | allocation to delivered_letter |
| support_van_round | Support interface / foreground activity: Non-refrigerated letter collection and delivery van round | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Actual purchased non-refrigerated road van collection/delivery; expansion describes the carrier background, not a change to operator-owned transport. | support | allocation to delivered_letter |
| support_sorting_asset | Support interface / foreground activity: Availability of a configured letter-sorting machine, excluding operation utilities | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Manufacture/construction, separately identified maintenance and ultimate end of life of complete letter-sorting machine; no operating utilities. | support | allocation to delivered_letter |
| support_premises | Support interface / foreground activity: Postal premises shell occupancy, excluding operation utilities | conditional | Apply foreground_interface_method and foreground_interface_coverage to the actual responsibility. Existing physical-detail condition, only for its foreground component: Manufacture/construction, separately identified maintenance and ultimate end of life of completed postal sorting/counter building shell; no operating utilities. | support | allocation to delivered_letter |

### Process: Ordinary letter postal service (`postal_letter_service`)

#### Inputs

##### Product flows

###### Postal-facility electricity (`facility_electricity`)

Meter sorting, counters, lighting, IT, electric heating and attributable standby energy; reconcile submeters and the building bill. Carriers' purchased vehicle electricity stays inside carriage.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Final reported quantity per reference flow determined under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_facility`
- Sources:

###### Purchased hot-water heat (`hot_water_heat`)

Conditional only when heat is purchased. Measure delivered heat at the facility interface; do not count circulating water as water consumption. Evidence of an all-electric unheated configuration may establish absence.

- Selected flow: District hot-water heat
- Flow property / unit: Energy / MJ
- Amount rule: Final reported quantity per reference flow determined under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_facility`
- Sources:

###### Facility tap water (`tap_water`)

Meter cleaning and sanitary supply attributable to the service; do not infer all wastewater equals purchased water. Provider coverage and actual use determine the allocation.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: Final reported quantity per reference flow determined under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

###### Purchased paper routing labels (`paper_label`)

Whole purchased finished routing label including its adhesive and print; exclude customer envelope/paper. Record opening stock + receipts - closing stock adjusted for transfers; do not separately add adhesive/ink already included in this product.

- Selected flow: Printed paper routing label
- Flow property / unit: Mass / kg
- Amount rule: Final reported quantity per reference flow determined under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

###### Reusable HDPE mail tray manufacture (`mail_tray`)

Allocate manufactured tray mass over verified lifetime loaded-use cycles, including premature breakage; this input excludes end-of-life treatment. Trays carried on trucks enter payload mass as cargo, not a second manufacture input.

- Selected flow: High-density polyethylene mail tray
- Flow property / unit: Mass / kg
- Amount rule: sum(original tray net kg * f) / D under a_tray_lifecycle; manufacture only, excluding terminal treatment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

#### Outputs

##### Product flows

###### Delivered letter service (`delivered_letter`)

One unique correctly delivered, accepted-quality letter yields one service of this configuration. The customer letter is not paper manufactured here.

- Selected flow: Domestic ordinary addressed-letter delivery service, outsourced road carriage
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cohort`
- Sources: `un-cpc3-68011`

##### Waste flows

###### Waste adhesive paper routing labels (`label_waste`)

Measure operator-owned spent adhesive paper routing labels; retain adhesive/print condition and receiving treatment. Do not mix their identity with customer letters or claim default recycling credit.

- Selected flow: Waste printed adhesive paper routing label
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort/stratum attributed generated mass in this card's declared material and wet/dry basis / D, using the section 8 waste-origin method; includes retained waste and supported eventual treatment. Custody dispatch verifies the original event and is not another generation or later-cohort burden.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Paper letters authorized for destruction (`letter_waste`)

Record original-cohort generated mass only after destruction is authorized and the letter has physically left deliverable or returnable stock and entered the waste stream for destruction. Include generated waste retained at period close. Later handover only verifies or updates its treatment route. Letters awaiting disposition or still deliverable or returnable are not waste; destruction never adds a successful delivery. No default recycling credit.

- Selected flow: Waste paper letter authorized for destruction
- Flow property / unit: Mass / kg
- Amount rule: Original-cohort/stratum attributed generated mass in this card's declared material and wet/dry basis / D, using the section 8 waste-origin method; includes retained waste and supported eventual treatment. Custody dispatch verifies the original event and is not another generation or later-cohort burden.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Spent HDPE mail tray (`tray_waste`)

Allocate terminal residual tray treatment with the same complete-life fraction as tray manufacture under a_tray_lifecycle. Retain actual retirement stocks and receiver records separately to verify and update the lifecycle model. Disposal is excluded from mail_tray manufacture.

- Selected flow: Waste high-density polyethylene mail tray
- Flow property / unit: Mass / kg
- Amount rule: sum(terminal residual tray kg * the same f as mail_tray) / D under a_tray_lifecycle; actual retirement transfers are control records, not an additional numerator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Sanitary and cleaning wastewater to sewer (`sanitary_wastewater`)

Measure discharge at the sewer interface or reconcile a documented site-specific water balance with uncertainties; this is a waste transfer for treatment, not a freshwater elementary emission.

- Selected flow: Untreated sanitary and cleaning wastewater to sewer
- Flow property / unit: Volume / m3
- Amount rule: Final reported quantity per reference flow determined under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

### Process: Support interface and foreground activity (Non-refrigerated road letter trunk carriage) (`support_linehaul`)

#### Inputs

##### Product flows

###### Non-refrigerated road letter trunk carriage (`svc_linehaul`)

External interface only under boundary_atomic_support; one contract-defined non-refrigerated road letter trunk carriage. Measurement: sum(actual gross payload tonnes * actual loaded leg km); the matched service includes its assigned empty return and vehicle lifecycle. Fix provider, technology/configuration, gates, quality and included components per cp_interface_linehaul; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_linehaul for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_linehaul.

- Selected flow: Non-refrigerated road letter trunk carriage
- Flow property / unit: Transport performance / t*km
- Amount rule: sum(A_s,e * alpha_s,e) / D; native service unit t*km; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_linehaul`

###### Automotive diesel fuel (`u_linehaul_diesel`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Record measured mass or volume and measured/supplier density. Apply `inv_trunk_scope`, `inv_fuel_gate` in section 8.

- Selected flow: Automotive diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Motor gasoline (`u_linehaul_gasoline`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Record measured mass or volume and measured/supplier density. Apply `inv_trunk_scope`, `inv_fuel_gate` in section 8.

- Selected flow: Motor gasoline
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Alternating current (`u_linehaul_traction_electricity`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Only for documented battery-electric/plug-in vehicles and metered charge supply; no vehicle charging is also in foreground facility_electricity. Measure supply-side charging electricity with location, voltage and charging losses; do not add battery output as a second electricity input. Applies only to independently evidenced point-of-use AC; this generic UUID does not determine supplier, grid, voltage or generation technology. Meter kWh converts to MJ by 3.6 once; installation/repair AC and operating AC have disjoint meter/phase ownership. Apply `inv_trunk_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Complete road freight truck at factory gate (`u_linehaul_vehicle_factory_gate`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Only an independently delivered actual vehicle model with serial/model, tare, propulsion and component/BOM boundary; one row per distinct model. One manufactured vehicle including its installed original components; exclude operation, later repairs, road infrastructure and end of life. No simultaneous full-vehicle and included-part inputs. Apply documented consumed lifetime fraction, not current purchase count. For the same delivered vehicle model/asset cohort let Q_a be the original complete manufactured vehicle count, before any amortisation. f=(provider-period full-route vehicle-km/documented full-lifetime vehicle-km)*the fixed cohort route share defined above, with empty/reposition travel included consistently. Use q_prod=Q_a*f/D; each vehicle terminal stream uses its own original full-lifecycle Q_e with the identical f/D. Do not apply the route share again. Missing full-lifetime distance or matched duty blocks completion. Apply `inv_trunk_scope`, `inv_asset_basis` in section 8.

- Selected flow: Complete road freight truck at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Mineral lubricating oil delivered for vehicle maintenance (`u_linehaul_mineral_lubricant`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only where exact mineral-oil grade and measured issue/top-up are evidenced; synthetic oils and greases require separate identified rows. Actual maintenance oil outside the factory-gate product; collect issue, return, retained oil and waste oil to prevent double counting. Apply `inv_trunk_scope`, `inv_maintenance_share` in section 8.

- Selected flow: Mineral lubricating oil delivered for vehicle maintenance
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

#### Outputs

##### Waste flows

###### Waste mineral lubricating oil (`u_linehaul_waste_mineral_lubricant`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only separately collected evidenced mineral waste oil with receiver and composition; not oil retained in an end-of-life vehicle. Transfer mass once to the full matched storage/transport/treatment chain; do not additionally count contained hydrocarbons as a waste output. Apply `inv_trunk_scope`, `inv_maintenance_share` in section 8.

- Selected flow: Waste mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Decommissioned complete road freight truck to authorised dismantler (`u_linehaul_retired_vehicle`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only an independently handed-over complete asset with documented residual fluids/parts and receiver gate; otherwise identifiable separated outputs are needed. Use the same capital consumed-life fraction as the factory-gate vehicle. This is a physical waste carrier, not a dismantling/recycling service. Its subsequent dismantling, residues, emissions and final treatment remain mandatory and unverified until explicitly inventoried. Paired manufacture row u_linehaul_vehicle_factory_gate: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_trunk_scope`, `inv_terminal_basis` in section 8.

- Selected flow: Decommissioned complete road freight truck to authorised dismantler
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`u_linehaul_co2_fossil_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_trunk_scope`, `inv_vehicle_species` in section 8.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Carbon monoxide to air (`u_linehaul_co_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_trunk_scope`, `inv_vehicle_species` in section 8.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Nitrogen monoxide to air (`u_linehaul_no_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_trunk_scope`, `inv_vehicle_species` in section 8.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Nitrogen dioxide to air (`u_linehaul_no2_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_trunk_scope`, `inv_vehicle_species` in section 8.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Dinitrogen monoxide to air (`u_linehaul_n2o_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_trunk_scope`, `inv_vehicle_species` in section 8.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Methane to air (`u_linehaul_ch4_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_trunk_scope`, `inv_vehicle_species` in section 8.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`

###### Sulfur dioxide to air (`u_linehaul_so2_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_trunk_scope`, `inv_vehicle_species` in section 8.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_linehaul`


### Process: Support interface and foreground activity (Non-refrigerated letter collection and delivery van round) (`support_van_round`)

#### Inputs

##### Product flows

###### Non-refrigerated letter collection and delivery van round (`svc_van_round`)

External interface only under boundary_atomic_support; one contract-defined non-refrigerated letter collection and delivery van round. Measurement: actual complete round vehicle km including loaded, empty, failed and repeated legs; apply the retained movement/stop beneficiary shares once. Fix provider, technology/configuration, gates, quality and included components per cp_interface_van_round; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_van_round for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_van_round.

- Selected flow: Non-refrigerated letter collection and delivery van round
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: sum(A_s,e * alpha_s,e) / D; native service unit vehicle*km; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_van_round`

###### Automotive diesel fuel (`u_van_round_diesel`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Record measured mass or volume and measured/supplier density. Apply `inv_fuel_gate`, `inv_van_scope` in section 8.

- Selected flow: Automotive diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Motor gasoline (`u_van_round_gasoline`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Record measured mass or volume and measured/supplier density. Apply `inv_fuel_gate`, `inv_van_scope` in section 8.

- Selected flow: Motor gasoline
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Alternating current (`u_van_round_traction_electricity`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Only for documented battery-electric/plug-in vehicles and metered charge supply; no vehicle charging is also in foreground facility_electricity. Measure supply-side charging electricity with location, voltage and charging losses; do not add battery output as a second electricity input. Applies only to independently evidenced point-of-use AC; this generic UUID does not determine supplier, grid, voltage or generation technology. Meter kWh converts to MJ by 3.6 once; installation/repair AC and operating AC have disjoint meter/phase ownership. Apply `inv_van_scope` in section 8.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit MJ; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Complete van at factory gate (`u_van_round_vehicle_factory_gate`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: production. Only an independently delivered actual vehicle model with serial/model, tare, propulsion and component/BOM boundary; one row per distinct model. One manufactured vehicle including its installed original components; exclude operation, later repairs, road infrastructure and end of life. No simultaneous full-vehicle and included-part inputs. Apply documented consumed lifetime fraction, not current purchase count. For the same delivered vehicle model/asset cohort let Q_a be the original complete manufactured vehicle count, before any amortisation. f=(provider-period full-route vehicle-km/documented full-lifetime vehicle-km)*the fixed cohort route share defined above, with empty/reposition travel included consistently. Use q_prod=Q_a*f/D; each vehicle terminal stream uses its own original full-lifecycle Q_e with the identical f/D. Do not apply the route share again. Missing full-lifetime distance or matched duty blocks completion. Apply `inv_asset_basis`, `inv_van_scope` in section 8.

- Selected flow: Complete van at factory gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Mineral lubricating oil delivered for vehicle maintenance (`u_van_round_mineral_lubricant`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only where exact mineral-oil grade and measured issue/top-up are evidenced; synthetic oils and greases require separate identified rows. Actual maintenance oil outside the factory-gate product; collect issue, return, retained oil and waste oil to prevent double counting. Apply `inv_maintenance_share`, `inv_van_scope` in section 8.

- Selected flow: Mineral lubricating oil delivered for vehicle maintenance
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

#### Outputs

##### Waste flows

###### Waste mineral lubricating oil (`u_van_round_waste_mineral_lubricant`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: maintenance. Only separately collected evidenced mineral waste oil with receiver and composition; not oil retained in an end-of-life vehicle. Transfer mass once to the full matched storage/transport/treatment chain; do not additionally count contained hydrocarbons as a waste output. Apply `inv_maintenance_share`, `inv_van_scope` in section 8.

- Selected flow: Waste mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Decommissioned complete van to authorised dismantler (`u_van_round_retired_vehicle`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: eol. Only an independently handed-over complete asset with documented residual fluids/parts and receiver gate; otherwise identifiable separated outputs are needed. Use the same capital consumed-life fraction as the factory-gate vehicle. This is a physical waste carrier, not a dismantling/recycling service. Its subsequent dismantling, residues, emissions and final treatment remain mandatory and unverified until explicitly inventoried. Paired manufacture row u_van_round_vehicle_factory_gate: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_terminal_basis`, `inv_van_scope` in section 8.

- Selected flow: Decommissioned complete van to authorised dismantler
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`u_van_round_co2_fossil_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_vehicle_species`, `inv_van_scope` in section 8.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Carbon monoxide to air (`u_van_round_co_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_vehicle_species`, `inv_van_scope` in section 8.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Nitrogen monoxide to air (`u_van_round_no_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_vehicle_species`, `inv_van_scope` in section 8.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Nitrogen dioxide to air (`u_van_round_no2_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_vehicle_species`, `inv_van_scope` in section 8.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Dinitrogen monoxide to air (`u_van_round_n2o_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_vehicle_species`, `inv_van_scope` in section 8.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Methane to air (`u_van_round_ch4_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_vehicle_species`, `inv_van_scope` in section 8.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`

###### Sulfur dioxide to air (`u_van_round_so2_air`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Physical phase: use. Factor coverage must exclude upstream emissions counted with fuel supply. Apply `inv_vehicle_species`, `inv_van_scope` in section 8.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: sum(Q_physical_x,j * s_c,x,j) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_van_round`


### Process: Support interface and foreground activity (Availability of a configured letter-sorting machine, excluding operation utilities) (`support_sorting_asset`)

#### Inputs

##### Product flows

###### Availability of a configured letter-sorting machine (`svc_sorting_asset`)

External interface only under boundary_atomic_support; one contract-defined availability of a configured letter-sorting machine, excluding operation utilities. Measurement: actual configured machine hours attributed by the existing run/shift ledger; includes provision, upkeep and terminal responsibility, excludes separately metered operation. Fix provider, technology/configuration, gates, quality and included components per cp_interface_sorting_asset; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_sorting_asset for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_sorting_asset.

- Selected flow: Availability of a configured letter-sorting machine
- Flow property / unit: Duration / h
- Amount rule: sum(A_s,e * alpha_s,e) / D; native service unit h; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_sorting_asset`

###### Complete letter-sorting machine at handover (`u_sorting_asset_factory_gate`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Manufacture/construction, separately identified maintenance and ultimate end of life of complete letter-sorting machine; no operating utilities. Physical phase: production. Only the actual independently handed-over asset with a documented component boundary; separate different asset models or structures. Manufacture/construction up to handover only. Exclude operating utilities, maintenance/replacements, waste management and end of life. Document site assembly/construction included in this gate and avoid separate duplicate included materials. Q_a is the original complete machine count at its independent manufacture handover, before amortisation. f=attributed target-cohort service hours/documented full-lifetime hours using exactly the same operating/occupation-hour definition. Keep all users, standby/idle, rejection and tail coverage under a_hierarchy/cp_assets. q_prod=Q_a*f/D; each terminal Q_e uses identical f/D. The numerator already contains cohort attribution; no second share. Missing life/capacity evidence blocks completion. Apply `inv_asset_basis` in section 8.

- Selected flow: Complete letter-sorting machine at handover
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_sorting_asset`

#### Outputs

##### Waste flows

###### Decommissioned complete letter-sorting machine (`u_sorting_asset_retired_asset`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Manufacture/construction, separately identified maintenance and ultimate end of life of complete letter-sorting machine; no operating utilities. Physical phase: eol. Only a documented independent receiver gate with exact residual composition/component scope. Apply exactly the same lifetime fraction as the capital input; link full downstream physical treatment inventory once. It is not a bundled dismantling or demolition service. Paired manufacture row u_sorting_asset_factory_gate: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_terminal_basis` in section 8.

- Selected flow: Decommissioned complete letter-sorting machine
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit Item(s); use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_sorting_asset`


### Process: Support interface and foreground activity (Postal premises shell occupancy, excluding operation utilities) (`support_premises`)

#### Inputs

##### Product flows

###### Postal premises shell occupancy (`svc_premises`)

External interface only under boundary_atomic_support; one contract-defined postal premises shell occupancy, excluding operation utilities. Measurement: actual occupied floor area m2 * elapsed occupancy h, by zone and original all-user shares; excludes directly measured site utilities. Fix provider, technology/configuration, gates, quality and included components per cp_interface_premises; use foreground_interface_coverage to exclude operator-owned or separately supplied components. No supplier-internal exchanges are additional foreground inputs. Allocation follows activity_premises for native activity attribution only, with foreground_interface_method; this does not require the physical inventory branch. UUID and property/unit-group support are unverified candidates. Calculation: calc_interface_premises.

- Selected flow: Postal premises shell occupancy
- Flow property / unit: Area-time / m2*h
- Amount rule: sum(A_s,e * alpha_s,e) / D; native service unit m2*h; normalize once per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_interface_premises`

###### Completed postal sorting/counter building shell at handover (`u_premises_construction_gate`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Manufacture/construction, separately identified maintenance and ultimate end of life of completed postal sorting/counter building shell; no operating utilities. Physical phase: production. Only the actual independently handed-over asset with a documented component boundary; separate different asset models or structures. Manufacture/construction up to handover only. Exclude operating utilities, maintenance/replacements, waste management and end of life. Document site assembly/construction included in this gate and avoid separate duplicate included materials. Q_a is the original complete building-shell handover floor area, before amortisation. f=target-cohort/stratum attributed occupied/reserved floor-area-hours divided by the same asset full-lifetime occupied/reserved floor-area-hours; same asset, area and calendar-hour definition are mandatory. For premises_service the numerator is F_s; for premises use its attributed cohort area-hours. q_prod=Q_a*f/D; each full-lifecycle demolition stream Q_e uses identical f/D. Cohort/stratum shares are already in f and are not applied again. Missing lifetime/area boundary blocks completion. Apply `inv_asset_basis` in section 8.

- Selected flow: Completed postal sorting/counter building shell at handover
- Flow property / unit: Area / m2
- Amount rule: sum(Q_product_a * f_c,a) / D; native quantity unit m2; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises`

#### Outputs

##### Waste flows

###### Concrete from postal building demolition (`u_premises_retired_asset`)

Foreground physical component only: apply foreground_interface_method and foreground_interface_coverage before this card; an external service covering this component uses its svc_ interface instead. Manufacture/construction, separately identified maintenance and ultimate end of life of completed postal sorting/counter building shell; no operating utilities. Physical phase: eol. Only where actual demolition produces this separately measured concrete stream; exclude metals/timber and other separately collected streams. Apply exactly the same lifetime fraction as the capital input; link full downstream physical treatment inventory once. It is not a bundled dismantling or demolition service. Paired manufacture row u_premises_construction_gate: use that asset serial/cohort and identical lifetime fraction; never period-transfer quantity as a second burden. Apply `inv_terminal_basis` in section 8.

- Selected flow: Concrete from postal building demolition
- Flow property / unit: Mass / kg
- Amount rule: sum(R_terminal_a * f_c,a) / D; native quantity unit kg; use the fixed physical-allocation rules in section 8, never the service activity as this exchange quantity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_premises`



## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | all inventory rows | Use direct metering and subdivision first. For a shared sorting machine allocate variable energy and asset hours by measured processing time per service stratum; allocate standby over the same period's occupied machine-hours. For shared counter activity use observed transaction handling minutes. Reconcile all service shares, including parcels and other mail, to the full measured total; no revenue allocation. | `upu-postal-ghg-2010` |
| a_facility | facility_electricity, hot_water_heat, activity_premises, tap_water, sanitary_wastewater | After submetered process loads are removed, allocate shared lighting/space heat/premises by occupied floor-area-hours. Allocate sanitary water by staff-hours assigned to each service from duty rosters and cleaning water by cleaned floor-area-hours. Include service support/administration by the supported operations' staff-hours. Idle or rejection-related burdens remain in the period pool, not zero. | `upu-postal-ghg-2010` |
| a_transport | activity_linehaul, activity_van_round | For trunk carriage use actual payload tonne-km and a matched carrier model that already incorporates empty return and utilization. For van rounds allocate moving-route resource by measured segment payload mass share and stopped/idling resource by measured stop service minutes, using calc_round. Count only one of these models per physical segment; retain full empty/repositioning burden and all parcel/letter/other-service shares. |  |
| a_failure | delivered_letter | Within a declared service stratum allocate the complete closed-cohort burden, including final returns, losses, authorized disposal, rejected-intake share and all retries, over D once. Return/forward/retry events are not co-products and do not create additional D. Other-service allocations occur before this division, not after it. No avoided-product credit. | `usps-undeliverable-mail` |
| a_rejected_intake | postal_letter_service | Pre-custody rejected tenders R do not enter A, D, T, L or X. First attribute the measured counter-acceptance resource pool by requested service class/stratum and handling minutes. Include only rejection handling and its support share for tenders of this configuration in the same calendar month as the acceptance cohort, add to that cohort's other J, then divide by D once. Do not multiply by a second rejection/failure ratio or shift burdens between months. Unidentified requested class or handling time leaves allocation incomplete. |  |
| a_tray_lifecycle | mail_tray; tray_waste | For each identified tray cohort use f = cohort-attributed loaded-use cycles / evidenced complete lifetime loaded-use cycles for both manufacture and ultimate treatment. Manufacturing kg = original tray net kg * f; terminal waste kg = observed retired residual kg or an explicitly prospective residual kg from measured current mass and documented loss/reuse/removal plans, multiplied by the same f. Complete life includes all users and subsequent reuse, premature breakage and calendar retirement. Retain booked amounts and restate all original beneficiary cohorts on every life revision under calc_capital_restatement. Actual retirement/receiver records update this model and are a separate custody-control ledger, never a second current-period treatment exchange. Unknown life, residual mass or endpoint blocks completeness. Define each loaded cycle by one tray ID from first loading to final unloading; split at every cargo/owner change. Within that cycle assign its one use by each cohort/service stratum net cargo kg*residence h divided by all cargo kg*h in that same tray cycle, excluding tray tare; sum assigned cycle fractions before f. Dedicated use has share 1. Measure masses and timestamp all load/unload events; missing all-cargo coverage blocks completion. Empty return and standing periods create no extra loaded-cycle output, but remain reflected in complete life, handling/transport activity and calendar/early-retirement evidence. Final retirement restates manufacture and terminal quantities by actual complete-life beneficiary cycle shares and corrects each original cohort and original D. Retirement time triggers corrections, not a retirement-period remainder burden. A never-used tray requires evidenced sole commissioning service responsibility; otherwise allocation is incomplete. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. |  |
| allocation_waste_origin | label_waste; letter_waste | Fix each ordinary solid-waste generation event to its original service cohort and stratum at generation, never at later dispatch. Directly trace the generating task first; shared generation uses the existing site/handling allocation driver over the recorded generation interval, including all customer and noncohort workloads. Preserve event ID, generation date, original shares and original reference denominator through storage and internal transfers. Acquired old waste is not new generation. Retained waste keeps its original treatment responsibility; dispatch-period service does not inherit it. For shared generation, split records at each fixed local-calendar-month boundary (68013 uses its already declared counter accounting period instead); apply the existing site task/handling driver within that exact generation interval, not the full later dispatch/cohort window. Direct event attribution takes precedence. Record site timezone before period assignment. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | supporting physical inventory | For each provider, site, configuration, event and accounting interval, partition every measured physical total into mutually exclusive inventory owners before selecting the study cohort. Use the fixed activity driver for that support process, with all users and failed work in the denominator. Direct causal attribution precedes shared allocation. Never multiply a cohort share a second time if already attributed. Keep service-level allocation quantities as raw drivers, not exchange quantities, and do not repeat division by the final reference count. Meter/stock, installed/replaced assets, internal transfers, generated waste and fate balances must reconcile at the same physical/time boundary. A complete product gate may retain its manufacturing background, but a lump service row may not be reintroduced under a different label. |  |
| allocation_atomic_capital | manufacture; installation; terminal assets | For each physical asset serial/cohort a, Q_a is its actual manufacturing/construction-gate quantity in the card unit. Set f_c,a=attributed physical lifetime activity_c,a/evidenced full-life all-user activity_a, using the process/asset-specific driver and identical configuration/capacity units. Manufacture q=sum(Q_a*f_c,a)/N_ref; each initial and whole-asset replacement creates its own asset cohort and enters once, not an additional current-period maintenance item. Installation physical quantities outside the asset product gate use that same installed-asset fraction. Terminal residual quantity in its own declared unit, evidenced from matched retirement or a prospective residual/reuse/retention plan, uses exactly the same f_c,a and original reference denominator; actual custody transfers only verify/update it. Earlier removed parts are excluded from terminal residual. Restate life and all original beneficiary cohorts under calc_capital_restatement; lifetime estimates need evidence and sensitivity, never numeric defaults. Genuine component repairs/replacements use actual causal events or the fixed provider maintenance-year shares, not another whole-life fraction. A whole component reused as a separately commissioned capital asset instead receives its own serial/lifetime register, never both treatments. |  |
| allocation_capital_restatement | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | This PCR uses full restatement, not frozen historical shares or a retirement-period catch-up. All direct and supporting capital, reusable containers, installation outside the product gate and paired terminal sources follow calc_capital_restatement. Each specific activity rule fixes the driver and beneficiary shares; these are applied once. A complete asset background already including delivery/end-of-life follows the same restatement, without separate duplicate terminal exchanges. Routine component maintenance remains under its causal/period method. |  |
| allocation_atomic_waste | operational and maintenance wastes | Generated operational and maintenance waste retains its original generation event, provider/activity cohort, shares and original reference denominator through storage and transfers. Fixed shared-waste intervals are local calendar months with timezone declared; use same-interval causal activity and all users, unless an existing more specific maintenance-year or counter-period method applies. Reconcile closing=opening+generation+internal_in-internal_out-external_dispatch-evidenced_physical_loss on consistent material/moisture bases. Include supported eventual storage/transport/treatment for retained waste, with actual evidence or an explicitly evidenced compatible prospective route and uncertainty; unknown fate remains incomplete. Later receipts replace that original event model, not add a new dispatch-period burden. Asset terminal-waste uses its paired capital fraction instead. Waste carrier and its constituents, storage losses/releases and residual treatment cannot be counted twice; the same measured site/storage operation remains under one inventory owner. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_provider_maintenance_period | u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant | For every shared routine supporting-provider maintenance pool, fix interval y to the site-local calendar year with timezone and exact asset/site/configuration recorded. Split a cohort crossing years into its within-year activity. Actual installed/consumed material M_x,y and its separately measured generated waste use s_c,y=cohort-attributed beneficiary driver_y/all-beneficiary driver_y for that same year, then q=sum_y(M_x,y*s_c,y)/N_ref once. The driver is the physical support-process activity fixed in activity_*; for vehicle upkeep it is actual vehicle kilometres including once-attributed empty/failure travel, for variable road upkeep it is evidenced class-specific engineering damage in the same year, and for building fabric it is reserved floor-area-calendar-hours. Other shared support equipment uses its fixed actual all-beneficiary task/cycle/union-hour driver; retain exact configuration strata and no concurrency duplication. A signed maintenance work order fixes the causal asset and task pool before calculation, not a later modeller choice. Specific accident/failure repair is allocated exclusively to its evidenced causal order/task set, never also to the annual routine pool. Genuine component consumption excludes unused opening/closing stocks, uninstalled returns and internal transfers; generated removed parts retain this original event/year/share through later custody. No assumption that input and removed-part masses are identical. Apply one annual period share, not whole-life f, to real component repairs; entire replacement assets create separate capital cohorts instead. A positive unsupported pool or zero/unknown all-user denominator blocks completeness. Apply the same rules to retained provider maintenance cards where previously referenced; independent specific generation/fate balances and exact overlap exclusions remain mandatory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | postal_letter_service | delivered_letter | journey ledger | unique custody id; acceptance date/site; separate pre-custody rejected-tender transaction id R, date, counter, requested service class/stratum, rejection reason and handling minutes; USO/service code; mass/size; origin/destination; each handoff/attempt/forward/return; terminal date/outcome; condition; transit time; opening/closing pending | Reconcile acceptance scans or audited tray manifests to delivery manifests and final return/loss/authorized-disposal records; require a complete acceptance and terminal-outcome register. Sampling may audit the register but cannot replace closed-cohort terminal evidence. Ordinary untracked mail without that evidence cannot yield a complete result. Reconcile R separately from rejection logs, never adding it to A. Never assume dispatch equals delivery. | item; kg; day | each event; close each acceptance month | whole acceptance month plus full terminal-outcome tail | all counters, facilities and carriers used by cohort | per reference flow | audited complete manifests; service terms; outcome evidence; rejection register; counting audit and error bounds |
| cp_interface_linehaul | support_linehaul | svc_linehaul | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect sum(actual gross payload tonnes * actual loaded leg km); the matched service includes its assigned empty return and vehicle lifecycle. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | t*km | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_van_round | support_van_round | svc_van_round | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual complete round vehicle km including loaded, empty, failed and repeated legs; apply the retained movement/stop beneficiary shares once. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | vehicle*km | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_sorting_asset | support_sorting_asset | svc_sorting_asset | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual configured machine hours attributed by the existing run/shift ledger; includes provision, upkeep and terminal responsibility, excludes separately metered operation. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | h | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_interface_premises | support_premises | svc_premises | service_interface_register | provider; contract/version; event ID; site/route/configuration; owner; scope component; native A_s,e and unit; alpha_s,e and all-user driver; original cohort/output denominator; inclusion/exclusion matrix; meter/time/count source; calibration; background reference/unit/period/allocation; correction and overlap links | At the actual service acceptance/use interface collect actual occupied floor area m2 * elapsed occupancy h, by zone and original all-user shares; excludes directly measured site utilities. Record every executed event, including failed/reworked events required by the original method. Verify units against calibrated mass/distance/area/time records or deduplicated execution logs as applicable; reconcile to invoices without substituting money for activity. At contract start/change the service data custodian signs the boundary/ownership and background compatibility matrix; reconcile monthly and at original cohort closure. Record zero occurrence only from complete event registers. Missing activity, unit conversion, background coverage or identity remains incomplete; preserve uncertainty and evidence. Supplier internal measurements are not required for an external interface. | m2*h | each event; monthly; contract change; cohort closure | same complete original reference cohort and actual service-event periods | declared external service acceptance/use gate | per reference flow | signed contract/scope matrix; primary activity records; calibration; allocation and invoice reconciliation; verified background identity and documented gaps |
| cp_capital_restatement | postal_letter_service; support_linehaul; support_van_round; support_sorting_asset; support_premises | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | versioned_asset_cohort_ledger | asset/source ID; source phase and native unit; original cohort/stratum and causal parent; original reference denominator and revision; all-user actual driver by original interval; fixed beneficiary shares; complete-life driver forecast/version and supporting records; manufacture/installation quantity; terminal net residual/route and version; previously booked attributed raw B and normalized result; recalculated f/A/q and signed correction; zero-use commissioning responsibility; overlap exclusions | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Join serial/source asset registers, activity meters, supplier product gates and the original result ledger; apply calc_capital_restatement on each change. Recompute using the original physical driver and all-user evidence without changing physical stocks. Reconcile old/new/correction and original denominator by source and original cohort; retain versions and calibration with the original record owner. | source-native units; original driver units; Item(s) | each acquisition/commissioning, activity, life/source revision and retirement; reconcile each original reporting period | complete asset life and all affected original cohorts | all users of the same asset configuration; original product gate and separate installation/terminal sources | per reference flow | serial/source registers; calibration; life evidence; receiver records; original-cohort results and revision chain |
| cp_facility | postal_letter_service | facility_electricity; hot_water_heat | meter ledger | site/meter id; run/shift id; machine/counter id; cohort ids/counts and service strata handled in each run/shift, with cohort machine occupation and counter handling minutes; readings; unit; interval; sorting run/idle hours; counter handling minutes; other-service loads; floor area/hours; staff-hours; bill; calibration; heat interface | Read meters and heat meters at each facility; reconcile submeters to invoices, equipment logs and occupied space; join each run/shift meter interval to its cohort handling manifest and measured cohort machine time/counter minutes; identify all-electric/no-heat cases from plant register, not missing invoices. | kWh; MJ; h; m2; min | daily logs and monthly bill reconciliation | cohort activity months and tail periods | all actual handling facilities and support share | per reference flow | meter calibration; bills; duty/occupancy logs; absence evidence |
| cp_carriage | postal_letter_service | activity_linehaul; activity_van_round | carrier route record | carrier/vehicle/fuel; subcontract boundary; leg id; loaded and empty distance; actual letter/parcel/other payload mass per segment; tray tare; moving and stopped energy; per-service stop minutes; total route energy; carrier lifetime/maintenance coverage | Obtain carrier telematics, fuel/energy records and manifests with exact service boundaries. Reconcile total measured route distance/energy, empty segments and billed activity; request primary carrier records for moving/stopped split rather than select a generic ratio. | kg; km; t*km; vehicle*km; min; MJ | each trip/round/segment; monthly reconciliation | every cohort journey including return/retry tail | all purchased road legs and nested subcontractors | per reference flow | carrier evidence; scale/telematics calibration; GPS; invoices; allocation audit |
| cp_assets | postal_letter_service | activity_sorting_asset; activity_premises | capital-service register | asset/building id; full component boundary; floor area; actual occupied or operating hours; useful life; lifetime occupancy/throughput; manufacture/construction; maintenance; retirement; shared-service hours; run/shift-to-cohort asset-occupation link; cohort machine-hours and area-hours | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Verify supplier service models or construct owned-asset service models with documented complete lifecycle inventories and lifetime denominators; reconcile downtime and premature retirement. Do not invent useful life or treat cost as quantity. | h; m2*h | annual inventory with monthly utilization logs | representative life-cycle records matched to cohort year | all sorting equipment and premises in scope | per reference flow | asset register; model coverage; engineering useful-life records; maintenance/retirement records |
| cp_materials | postal_letter_service | tap_water; paper_label; mail_tray | material and stock ledger | water readings; paper label receipts/opening/closing stock and transfers; tray mass/id; loaded-use cycles; losses/breakage; purchases; service/cohort assignment tray cohort original netkg; attributed/all-user loaded cycles; complete lifetime cycles and remaining fraction; calendar retirement and subsequent reuse; residual terminal kg and derivation tray ID; cycle ID; every load/unload timestamp; cargo/cohort/stratum ID; all cargo net kg and residence h; empty/standing periods and commissioning responsibility | Apply foreground_interface_coverage to responsibility first. Interface activity, supplier gate/quality and compatibility evidence remain required; provider-internal physical/capital/species fields below are collected only for foreground-owned components. External components use the matching cp_interface_ protocol and compatible background evidence, without duplicating supplier internals. Read water meters and reconcile water use by purpose. Weigh labels and trays with calibrated scales and reconcile stock movements; trace tray cohorts through actual cycles, early failure and stocks, not arbitrary reuse counts. For trays apply a_tray_lifecycle to the same serial/cohort and lifetime basis; document prospective terminal mass, endpoint and uncertainty. | m3; kg; cycle | each receipt/retirement; monthly balance | same activity period and tail as cohort | all handling sites and reusable tray pools | per reference flow | meter/scale calibration; stock balance; tray-cycle register; supplier composition |
| cp_waste | postal_letter_service | label_waste; letter_waste; tray_waste; sanitary_wastewater | waste transfer record | source; stream and condition; mass/volume; date; authorized disposal record; waste stock opening/closing; receiver; transport/treatment coverage; water balance; generation_event_id; generation_time/site; source task/cohort/stratum; original allocation shares/reference denominator; generated mass and wet/dry/composition basis; opening/closing stock by origin; internal transfer IDs and both endpoints; external dispatch; evidenced physical loss/release; receiver and destination fractions; actual/prospective route and model version; evidence/uncertainty; receipt replacement status and revision chain; destruction authorization and actual discard time; segregated destruction stock record | Measure each ordinary solid-waste stream at generation. Any later dispatch weight is solely an original-event stock and receipt control and is not new generation. Measure sewer discharge or establish a site-specific water balance with known consumptive uses. Verify authorized mail destruction and receiver treatment; unresolved receiver is a gap, not recycling. For tray_waste actual transfers verify the separate control ledger; quantify the cohort lifecycle contribution using a_tray_lifecycle, not the retirement-year transfer total. Measure segregated generated mass at the generating point and record the responsible task/interval before storage; if generation is reconstructed from a complete stock balance, document all transfers, losses and measurement uncertainty and preserve original event provenance. Apply allocation_waste_origin and calc_waste_origin. At each transfer and period close reconcile origin-labelled stocks against calibration and receiver evidence. Require supported storage/transport/treatment coverage for retained mass; later receipts replace the original event model, never create a second dispatch-period burden. Recognize discarded letters at documented authorization plus actual removal from deliverable/returnable stock; include evidenced retained waste, and use dispatch receipts only to update the original event. Pending disposition is not waste generation. | kg; m3 | each transfer; monthly reconciliation; every ordinary-waste generation and monthly origin-stock reconciliation and each destruction authorization and actual discard | cohort activity and final disposal tail; retain original generation ownership through eventual treatment evidence | each sending site and actual receiving treatment chain | per reference flow | transfer tickets; scales/meters; receiver permits and treatment evidence; custody closure |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_linehaul | support_linehaul | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; provider/vehicle/battery/session IDs; synchronous clock/timezone; inlet AC meter/calibration; actual capacity and DC/BMS gross addition I_k separate from draws; opening/closing calibrated stored energy; matched configuration/temperature/age AC-equivalent curve; source vectors S_bk and transfer IDs; per-source draw/loss/closing and capital carryover; positive/zero/unknown evidence; direct E_zero; causal task and all-user local-day service-time denominators; meter and scope overlap owner; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Actual purchased non-refrigerated road letter-mail trunk carriage; expansion describes the carrier background, not a change to operator-owned transport. Retain cp_carriage, a_transport, calc_linehaul and agg_cp_carriage. Calculate actual gross cargo tonne-km including documented tray tare on loaded legs. For each carrier vehicle/route/period, use cohort actual tonne-km /all-user actual tonne-km as its fixed share; its total physical inventory must include the closed-route empty/reposition burden and compatible utilization. Do not apply another empty-return/load factor or van allocation to the same segment. Capital and EOL share one documented lifecycle fraction with the carrier lifetime denominator matched to the provider model. Preserve failed/return/tail transport. Operational use/maintenance quantities use the period-share convention below. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. For the provider own vehicle/battery boundary apply calc_provider_electric_stock; require calibrated capacity/AC-equivalent empirical charge-discharge curves, chronological source-labelled transfers and balanced stocks. Charging source/capital-hour carryover follows allocation_charge_sources and allocation_charge_zero where defined, using this provider original activity ownership, not a second owned-fleet copy. This vehicle rule does not apply to separately metered workshop/site/installation AC. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. | card-native units; raw t*km | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |
| cp_support_van_round | support_van_round | u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration; provider/vehicle/battery/session IDs; synchronous clock/timezone; inlet AC meter/calibration; actual capacity and DC/BMS gross addition I_k separate from draws; opening/closing calibrated stored energy; matched configuration/temperature/age AC-equivalent curve; source vectors S_bk and transfer IDs; per-source draw/loss/closing and capital carryover; positive/zero/unknown evidence; direct E_zero; causal task and all-user local-day service-time denominators; meter and scope overlap owner; maintenance_year; timezone; asset_id; installed/consumed M_x,y; generated residual kg; all_user_driver_y; cohort_attributed_driver_y; causal_event/task; unused inventory/returns/transfers | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Actual purchased non-refrigerated road van collection/delivery; expansion describes the carrier background, not a change to operator-owned transport. Retain cp_carriage, a_transport, calc_round and agg_cp_carriage. For each closed actual round B=B_move+B_stop; U is moving-segment energy times cargo-mass share plus stop energy times service-minute share. Assign empty/reposition energy by loaded-leg attributed moving-energy shares; U/B is the single cohort share for each measured round use/maintenance physical total; capital and EOL use the separate f convention below. All services recover the full round. Wholly empty routes require the evidenced sole commissioning stratum, otherwise block. Keep retries/returns/tail. For provider period totals use their measured round-to-period reconciliation, not a second payload allocation. Capital and EOL use the same evidenced full-lifetime fraction; provider capital allocation must be matched to the exact measured duty. Use/maintenance quantities use the period-share convention below; no additional service input or vehicle-km emissions factor. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. For the provider own vehicle/battery boundary apply calc_provider_electric_stock; require calibrated capacity/AC-equivalent empirical charge-discharge curves, chronological source-labelled transfers and balanced stocks. Charging source/capital-hour carryover follows allocation_charge_sources and allocation_charge_zero where defined, using this provider original activity ownership, not a second owned-fleet copy. This vehicle rule does not apply to separately metered workshop/site/installation AC. Apply allocation_provider_maintenance_period and calc_provider_maintenance_period to this provider actual routine/causal maintenance; no whole-cohort distance in each year. | card-native units; raw vehicle*km | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |
| cp_support_sorting_asset | support_sorting_asset | u_sorting_asset_factory_gate; u_sorting_asset_retired_asset | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Manufacture/construction, separately identified maintenance and ultimate end of life of complete letter-sorting machine; no operating utilities. Retain a_hierarchy, cp_assets and agg_cp_assets: assign measured machine processing hours to cohort/stratum by run/shift links; standby over occupied machine-hours, including other services, rejection/idle and cross-month cohort tails. Every asset interval sums to one across users. Asset f=attributed matched machine-hours /documented lifetime hours using the identical definition; use same f for complete-machine manufacture and EOL. q for each maintenance physical total=provider same-period total * fixed measured service share /D once. Do not add operating electricity already in facility_electricity. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. | card-native units; raw h | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |
| cp_support_premises | support_premises | u_premises_construction_gate; u_premises_retired_asset | physical_exchange_and_asset_register | event/asset/site/provider/configuration; exact product/substance; phase; Q_x,j and native unit; source intensity and activity basis; lifetime activity and f; terminal asset link and residual unit; stock and transfer IDs; original waste event/cohort; meter/calibration; all-user driver; overlap ownership; prospective route version; occurrence evidence; species identity/CAS, T and NO2-equivalent definition, source-matched molar a, molecular-mass provenance, direct species mass/factor and calibration | Collect only active foreground physical components under foreground_interface_method; external services use cp_interface_ protocols. Manufacture/construction, separately identified maintenance and ultimate end of life of completed postal sorting/counter building shell; no operating utilities. Retain a_facility, cp_assets and agg_cp_assets: measured occupied floor-area-hours with interval/run/shift-to-cohort links, all users/idle/rejection and tails reconciled to one per asset interval. Capital consumed fraction is attributed area-hours /documented full lifetime area-hours; same fraction for construction and EOL. Maintenance quantities use the same occupied-space allocation and q=provider same-period total * fixed share /D once. Exclude operating electricity, hot-water heat, water, sorting equipment and trays already separately inventoried. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. At each provider/source gate, collect event/asset/site/route/configuration and exact physical identity, condition of occurrence/non-occurrence, direction/type/receiving medium, raw quantity and unit, meter/tare/calibration, timestamps and timezone, complete accounting interval, source unit-inventory basis, all-user activity and cohort joins, manufacturing/installation/use/maintenance/EOL phase, original/remaining asset fractions, paired terminal residual provenance, stocks/transfers, receiver/fate and prospective-model revisions. Retain signed supplier scope and exact overlap crosswalk to existing direct rows. Obtain chemistry/BOM/species identity before adding a missing concrete row; an unbound candidate can await official identity but cannot be a plural collection. Measure all events, reconcile per local month/maintenance year as prescribed and review the complete asset/supplier inventory annually and at configuration/retirement changes. Unmeasured positive activity, unsupported future treatment or an unlisted actual exchange prevents completeness. | card-native units; raw m2*h | every event; local-month/maintenance-year reconciliation; annual/asset-change review | full original acceptance cohort and failure/return tail, matched asset life and eventual waste evidence | same provider/site/configuration scope; all shared users | per reference flow | calibrated originals; signed scope and overlap map; asset/receipt lineage; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_close | delivered_letter | Select a full calendar acceptance month and service stratum. Track A admitted unique letters to D delivered, T finally returned, L documented lost and X authorized destroyed/other failed terminal outcomes. Require A = D + T + L + X and pending = 0. Final data require D > 0. Reattempts/forwarding stay on the same id. Pending work retains attributed burdens in its own cohort ledger and cannot be shifted to another month's D. | A; D; T; L; X; cp_cohort | closed cohort; D |  |
| foreground_interface_method | svc_linehaul; svc_van_round; svc_sorting_asset; svc_premises | Before measurement classify every event/scope component as foreground physical or external service under boundary_atomic_support, with no overlap. Apply existing physical-card formulas, component rules and cp_support protocols only to the former, never demand an external provider BOM or internal meter ledger to activate a service interface. For a service row s collect raw A_s,e in its fixed native unit and alpha_s,e from the existing named activity allocation: direct cohort events have alpha=1; genuinely shared events retain the original all-user driver, failure/empty/standby treatment and event window. Allocated service amount T_s=sum(A_s,e*alpha_s,e); if the native activity ledger already contains cohort-attributed activity, alpha is already applied and must not be multiplied again. q_s=T_s/N_ref, with N_ref the original positive cohort reference output. Preserve raw totals for zero output and mark the unit result incomplete. Do not convert time, area, count or transport activity to energy or equipment mass without a separate evidenced relationship. Do not apply physical capital life fractions again to a service inventory that already contains its capital allocation. Quantities for background linkage equal q_s times an inventory per one identical service unit, once; an emission factor is not the service exchange quantity. All old physical-only instructions and service prohibitions apply only to the foreground physical branch; the service branch follows this rule and its explicit interface protocol. Incomplete or aborted service events retain their evidenced attributable burden. Do not silently discard them because the interface counts completed units: document an equivalent native service quantity supported by the contract and execution records, or add a separately identified partial-service row before claiming completeness; never assume a full unit or zero. A supplier value already per the final reference is not a raw A_s,e: recover its original total and denominator before recomputation, or prove exact equivalent normalization without dividing by the final denominator again. Any included supplier allocation is applied only once. | cp_interface_linehaul; cp_interface_van_round; cp_interface_sorting_asset; cp_interface_premises | native service units per original reference flow |  |
| calc_interface_linehaul | svc_linehaul | Apply foreground_interface_method. Native activity A_s,e (t*km): sum(actual gross payload tonnes * actual loaded leg km); the matched service includes its assigned empty return and vehicle lifecycle. Use the existing activity_linehaul beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/D once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_linehaul; activity_linehaul | t*km/D |  |
| calc_interface_van_round | svc_van_round | Apply foreground_interface_method. Native activity A_s,e (vehicle*km): actual complete round vehicle km including loaded, empty, failed and repeated legs; apply the retained movement/stop beneficiary shares once. Use the existing activity_van_round beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/D once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_van_round; activity_van_round | vehicle*km/D |  |
| calc_interface_sorting_asset | svc_sorting_asset | Apply foreground_interface_method. Native activity A_s,e (h): actual configured machine hours attributed by the existing run/shift ledger; includes provision, upkeep and terminal responsibility, excludes separately metered operation. Use the existing activity_sorting_asset beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/D once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_sorting_asset; activity_sorting_asset | h/D |  |
| calc_interface_premises | svc_premises | Apply foreground_interface_method. Native activity A_s,e (m2*h): actual occupied floor area m2 * elapsed occupancy h, by zone and original all-user shares; excludes directly measured site utilities. Use the existing activity_premises beneficiary and event-window rules only for service activity attribution; the physical branch is not required. q_s=sum(A_s,e*alpha_s,e)/D once. A compatible supplier intensity must use exactly this unit, scope and original allocation policy; no standard activity per final output is assumed. | cp_interface_premises; activity_premises | m2*h/D |  |
| calc_linehaul | activity_linehaul | Sum actual transported payload tonnes multiplied by actual loaded leg-km for the cohort. Carrier per-tonne-km model must cover compatible utilization and empty returns; do not multiply by another load factor or empty-return coefficient. Gross mail load includes documented tray tare, without inventing a letter mass. These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. | cp_carriage | raw activity diagnostic: attributed t*km |  |
| calc_round | activity_van_round | For each van round let B be measured total operating energy, B_move and B_stop its measured moving/stopped components with B = B_move + B_stop and B > 0. The pools are mutually exclusive and exhaustive; never allocate the same B separately twice. For each service stratum compute U = sum(moving segment energy times its actual payload mass share) + sum(stop energy times its measured stop-service-minute share). Attribute empty/reposition segments across all services on that round using the loaded segments' attributed moving-energy shares. Then equivalent attributed vehicle-km = full round vehicle-km times U/B; sums across all services must equal full round vehicle-km. A wholly empty round may be assigned only to its evidenced single commissioning service stratum using dispatch records; shared or unresolved responsibility leaves allocation incomplete and retains the burden, never zero. Use only the same measured-duty per-vehicle-km carrier model; non-positive B or missing split/shares blocks complete results. These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. | cp_carriage; B; B_move; B_stop; U | raw activity diagnostic: attributed vehicle*km |  |
| calc_final | all inventory rows | For each non-reference row let J be its complete attributable closed-cohort total after other-service allocation, including terminal failure and handling burdens. Report J / D once per reference flow. Keep numerator in the declared row unit. If source already provides J/D, reconcile and do not divide again. Set delivered_letter to exactly 1 item. No other row is fixed to 1. | J; D; cp_cohort; applicable row protocol | one quantity per reference flow |  |
| agg_cp_cohort | delivered_letter | One admitted id has one final outcome; reconcile A = D + T + L + X with pending = 0 before finalization. Exclude opening-month carry-in from this cohort but carry its burdens to its own cohort. | cp_cohort | final quantity per reference flow |  |
| agg_cp_facility | facility_electricity, hot_water_heat | Allocate measured totals by a_hierarchy/a_facility to the cohort, then calc_final per reference flow. Reconcile all service and acceptance-cohort shares, including cross-month tails, to 1 for each meter interval; unallocated residuals cannot be discarded and block completeness. | cp_facility | final quantity per reference flow |  |
| agg_cp_carriage | activity_linehaul, activity_van_round | These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. Use calc_linehaul or calc_round for a unique physical segment, allocate to cohort before calc_final per reference flow. These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. | cp_carriage | raw activity diagnostic: final quantity per reference flow |  |
| agg_cp_assets | activity_sorting_asset, activity_premises | Attribute machine hours and area-hours through run/shift/cohort occupation links; all cohort and other-service shares must sum to 1 for each asset interval. Divide complete lifecycle burden by documented lifetime service capacity and multiply attributed service demand once; calc_final per reference flow. These are raw provider activity diagnostics only; they are not inventory exchanges. Distribute only the separately named physical rows in the corresponding support processes, using original raw activity and one final reference normalization. | cp_assets | raw activity diagnostic: final quantity per reference flow |  |
| agg_cp_materials | tap_water, paper_label, mail_tray | Compute actual attributable water, label consumption and amortized tray manufacture; retain stock changes and use calc_final per reference flow. | cp_materials | final quantity per reference flow |  |
| agg_cp_waste | label_waste, letter_waste, tray_waste, sanitary_wastewater | For label_waste and letter_waste use calc_waste_origin, including source generation responsibility, retained stock and supported eventual treatment; its quantity is already normalized once and is not divided by calc_final again. For tray_waste use a_tray_lifecycle and its same lifetime fraction as mail_tray; actual retirement is only control evidence. For sanitary_wastewater use measured actual discharge/water balance and calc_final once, not solid-waste stock mass. | cp_waste | final quantity per reference flow |  |
| calc_waste_origin | label_waste; letter_waste | For each named ordinary solid-waste stream r and generation event j, A_c,r = sum_j(G_j,r*s_c,j), then q_c,r=A_c,r/original_reference_count once. G is measured generated mass, not dispatch mass. Reconcile each material and original event: closing = opening + generation + internal_in - internal_out - external_dispatch - evidenced_physical_loss. Record actual moisture/composition changes and mutually exclusive losses/releases; no invented residual and no full residual mass plus the same released constituent. Internal transfers preserve origin and do not create another exchange. Model the original cohort waste output and its required storage/transport/final treatment even while physically retained, using actual compatible receiver evidence or an explicitly evidenced material/composition/location-matched prospective route with uncertainty. Destination fractions close to one and enter once; no default recycling or zero treatment for retained mass. Unsupported fate stays incomplete. Keep observed custody stock/dispatch as a control ledger, not another inventory addition. Later receiver evidence replaces the same event prospective model and recomputes the original cohort with its original denominator; never add that mass/treatment to a later cohort. Include every necessary lifecycle leg once through a scope crosswalk; exclude site/storage energy and handling already included by site/service inventories. Capital terminal-waste lifetime fractions and wastewater balances retain their separate rules. original_reference_count=D for its original cohort/stratum. The generated-waste exchange is at the generation gate. Its linked complete waste-management inventory takes one kg on that same generated-mass basis through storage and all subsequent fates; final-treatment input is only the compatible measured/evidenced forecast residual after storage losses/moisture conversion, not the full original kg plus separate losses. Explicit storage releases replace the same included release in that linked inventory; a storage/handling operation already in site/service pools is removed from the waste link by a recorded scope crosswalk, never counted twice. | cp_waste; allocation_waste_origin | kg per original reference flow; origin stock/model ledger |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_linehaul | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. Retain cp_carriage, a_transport, calc_linehaul and agg_cp_carriage. Calculate actual gross cargo tonne-km including documented tray tare on loaded legs. For each carrier vehicle/route/period, use cohort actual tonne-km /all-user actual tonne-km as its fixed share; its total physical inventory must include the closed-route empty/reposition burden and compatible utilization. Do not apply another empty-return/load factor or van allocation to the same segment. Capital and EOL share one documented lifecycle fraction with the carrier lifetime denominator matched to the provider model. Preserve failed/return/tail transport. Operational use/maintenance quantities use the period-share convention below. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_linehaul | raw t*km plus uniquely attributed physical totals, not a service product |  |
| activity_van_round | u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. Retain cp_carriage, a_transport, calc_round and agg_cp_carriage. For each closed actual round B=B_move+B_stop; U is moving-segment energy times cargo-mass share plus stop energy times service-minute share. Assign empty/reposition energy by loaded-leg attributed moving-energy shares; U/B is the single cohort share for each measured round use/maintenance physical total; capital and EOL use the separate f convention below. All services recover the full round. Wholly empty routes require the evidenced sole commissioning stratum, otherwise block. Keep retries/returns/tail. For provider period totals use their measured round-to-period reconciliation, not a second payload allocation. Capital and EOL use the same evidenced full-lifetime fraction; provider capital allocation must be matched to the exact measured duty. Use/maintenance quantities use the period-share convention below; no additional service input or vehicle-km emissions factor. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_van_round | raw vehicle*km plus uniquely attributed physical totals, not a service product |  |
| activity_sorting_asset | u_sorting_asset_factory_gate; u_sorting_asset_retired_asset | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. Retain a_hierarchy, cp_assets and agg_cp_assets: assign measured machine processing hours to cohort/stratum by run/shift links; standby over occupied machine-hours, including other services, rejection/idle and cross-month cohort tails. Every asset interval sums to one across users. Asset f=attributed matched machine-hours /documented lifetime hours using the identical definition; use same f for complete-machine manufacture and EOL. q for each maintenance physical total=provider same-period total * fixed measured service share /D once. Do not add operating electricity already in facility_electricity. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_sorting_asset | raw h plus uniquely attributed physical totals, not a service product |  |
| activity_premises | u_premises_construction_gate; u_premises_retired_asset | Native activity definitions, allocation drivers and event windows also govern the matching calc_interface_ service rule; only the physical-quantity calculations and internal measurements below require the foreground physical branch under foreground_interface_method. Raw activity ledger only, not an exchange. Retain a_facility, cp_assets and agg_cp_assets: measured occupied floor-area-hours with interval/run/shift-to-cohort links, all users/idle/rejection and tails reconciled to one per asset interval. Capital consumed fraction is attributed area-hours /documented full lifetime area-hours; same fraction for construction and EOL. Maintenance quantities use the same occupied-space allocation and q=provider same-period total * fixed share /D once. Exclude operating electricity, hot-water heat, water, sorting equipment and trays already separately inventoried. Quantity convention: operational-period q=Q_period*a/N applies only to use and maintenance, where Q_period is a raw measured physical period/event total and a is its fixed reconciled allocation share. For production use raw manufacture/construction-gate physical asset quantity Q_a and q_prod=Q_a*f/N. For each linked terminal stream use that same asset cohort full-lifecycle terminal physical quantity Q_e and q_eol=Q_e*f/N with exactly the same f; Q_e is not a later-period whole dispatch. Here f already contains the asset lifetime-service fraction and the target cohort/stratum allocation, each once; do not multiply by a second operational share. Q_a and Q_e are never already amortised provider-period equivalents. If a supplier gives amortised equivalents, recover and verify the original asset cohort physical quantity and full-life denominator before applying this convention; never multiply an already consumed-life quantity by f again. N means the original D for 68011 or N_s for 68013, once. Any legacy per-reference activity diagnostic must first be restored to raw activity for physical disaggregation; never use it as an exchange or normalize twice. | cp_support_premises | raw m2*h plus uniquely attributed physical totals, not a service product |  |
| calc_atomic_physical | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle; u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. For operational physical flow x in matched provider interval j, recover Q_x,j in that card native physical unit from metering, stock balance, work orders or a compatible species/material-specific unit inventory. If source intensity is per activity unit, first Q_x,j=intensity_x,j*actual_all_user_activity_j; do not use money, a generic service emission basket, or an already per-reference amount without recovering its original basis. Then q_x=sum_j(Q_x,j*s_c,x,j)/N_ref once, with the fixed process driver and all-user shares. Electricity kWh converts to MJ by 3.6 once when the card uses MJ; other count/mass/volume conversions need measured configured unit mass, density, concentration and moisture as applicable. A shared meter or upstream product/service covering the same quantity/period/scope is removed by a measured overlap crosswalk, not by an assumed fraction. | cp_support_linehaul; cp_support_van_round; cp_support_sorting_asset; cp_support_premises | card-native physical unit per original reference flow |  |
| calc_atomic_capital | u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. For each physical asset serial/cohort a, Q_a is its actual manufacturing/construction-gate quantity in the card unit. Set f_c,a=attributed physical lifetime activity_c,a/evidenced full-life all-user activity_a, using the process/asset-specific driver and identical configuration/capacity units. Manufacture q=sum(Q_a*f_c,a)/N_ref; each initial and whole-asset replacement creates its own asset cohort and enters once, not an additional current-period maintenance item. Installation physical quantities outside the asset product gate use that same installed-asset fraction. Terminal residual quantity in its own declared unit, evidenced from matched retirement or a prospective residual/reuse/retention plan, uses exactly the same f_c,a and original reference denominator; actual custody transfers only verify/update it. Earlier removed parts are excluded from terminal residual. Restate life and all original beneficiary cohorts under calc_capital_restatement; lifetime estimates need evidence and sensitivity, never numeric defaults. Genuine component repairs/replacements use actual causal events or the fixed provider maintenance-year shares, not another whole-life fraction. A whole component reused as a separately commissioned capital asset instead receives its own serial/lifetime register, never both treatments. | cp_support_linehaul; cp_support_van_round; cp_support_sorting_asset; cp_support_premises | manufacturing product and paired terminal residual, same lifetime fraction |  |
| calc_capital_restatement | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Within this entry's declared applies_to scope, apply the complete ordered rule group: calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version. Use this entry's inputs, reference denominator and output; all definitions, conditions, exclusions and completion requirements across that group apply jointly. These components form one method, not additional exchanges or repeated allocation. Reading only a component is insufficient for completion. Follow the existing ownership and deduplication rules when one event appears in more than one entry. | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | source-native unit per original cohort N_c; separate physical controls |  |
| capital_linehaul_vehicle_factory_gate | u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_linehaul_vehicle_factory_gate: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. For the same delivered vehicle model/asset cohort let Q_a be the original complete manufactured vehicle count, before any amortisation. f=(provider-period full-route vehicle-km/documented full-lifetime vehicle-km)*the fixed cohort route share defined above, with empty/reposition travel included consistently. Use q_prod=Q_a*f/D; each vehicle terminal stream uses its own original full-lifecycle Q_e with the identical f/D. Do not apply the route share again. Missing full-lifetime distance or matched duty blocks completion. Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. Terminal row u_linehaul_retired_vehicle: native Item(s), q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_linehaul | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_van_round_vehicle_factory_gate | u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_van_round_vehicle_factory_gate: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. For the same delivered vehicle model/asset cohort let Q_a be the original complete manufactured vehicle count, before any amortisation. f=(provider-period full-route vehicle-km/documented full-lifetime vehicle-km)*the fixed cohort route share defined above, with empty/reposition travel included consistently. Use q_prod=Q_a*f/D; each vehicle terminal stream uses its own original full-lifecycle Q_e with the identical f/D. Do not apply the route share again. Missing full-lifetime distance or matched duty blocks completion. Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. Terminal row u_van_round_retired_vehicle: native Item(s), q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_van_round | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_sorting_asset_factory_gate | u_sorting_asset_factory_gate; u_sorting_asset_retired_asset | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_sorting_asset_factory_gate: Q_a is actual unamortized Item(s) at the declared product gate; q=sum(Q_a*f_c,a)/D. Q_a is the original complete machine count at its independent manufacture handover, before amortisation. f=attributed target-cohort service hours/documented full-lifetime hours using exactly the same operating/occupation-hour definition. Keep all users, standby/idle, rejection and tail coverage under a_hierarchy/cp_assets. q_prod=Q_a*f/D; each terminal Q_e uses identical f/D. The numerator already contains cohort attribution; no second share. Missing life/capacity evidence blocks completion. Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. Terminal row u_sorting_asset_retired_asset: native Item(s), q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_sorting_asset | asset-native physical unit per D; linked terminal native unit, same f |  |
| capital_premises_construction_gate | u_premises_construction_gate; u_premises_retired_asset | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Manufacture/construction row u_premises_construction_gate: Q_a is actual unamortized m2 at the declared product gate; q=sum(Q_a*f_c,a)/D. Q_a is the original complete building-shell handover floor area, before amortisation. f=target-cohort/stratum attributed occupied/reserved floor-area-hours divided by the same asset full-lifetime occupied/reserved floor-area-hours; same asset, area and calendar-hour definition are mandatory. For premises_service the numerator is F_s; for premises use its attributed cohort area-hours. q_prod=Q_a*f/D; each full-lifecycle demolition stream Q_e uses identical f/D. Cohort/stratum shares are already in f and are not applied again. Missing lifetime/area boundary blocks completion. Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. Terminal row u_premises_retired_asset: native kg, q=sum(R_a*f_c,a)/D; join the identical serial/cohort and f_c,a, R_a is the terminal net residual already excluding earlier removals; subtract historical removals once only when deriving R_a from an original gross/BOM basis, never again from measured terminal net residual. Whole replacements create their own asset cohort, never an extra maintenance whole-product flow; distinct installation beyond the product gate uses this same fraction. Static lifetime ratios describe the current version only; life/source changes and final retirement must apply calc_capital_restatement to the original cohorts, not update only future denominators. | cp_support_premises | asset-native physical unit per D; linked terminal native unit, same f |  |
| calc_atomic_species | all elementary physical rows | Foreground physical branch only under foreground_interface_method; service quantities use their interface rule. Each elementary row identifies one substance or physically specified particle carrier and one receiving medium/subcompartment. Collect the actual substance/CAS or verified chemical identity, factor unit and mass/molar/carbon expression, source technology/fuel/load, location and receiving medium. Apply a substance-specific measured release or compatible factor once. Factory emissions already in a complete product gate are not also direct provider-use emissions. Particle size classes and fate fractions are mutually exclusive; physically defined particles are not fictitious pure elements. NOx and NMVOC totals are QA observations only, never elementary-exchange substitutes. Every actual extra species/material needs its own concrete bilingual source row, protocol, unit, fixed calculation and normal projection before completed modelling; do not use a selector or a family-name placeholder. | cp_support_linehaul; cp_support_van_round; cp_support_sorting_asset; cp_support_premises | one substance or defined physical carrier per receiver |  |
| calc_nox_speciation | u_linehaul_no_air; u_linehaul_no2_air; u_van_round_no_air; u_van_round_no2_air | For the explicitly evidenced definition NOx=NO+NO2 expressed as NO2-equivalent, record T, its unit/basis and source-matched measured molar fraction a=n_NO/(n_NO+n_NO2). Then m_NO=a*T*M_NO/M_NO2 and m_NO2=(1-a)*T, using independently evidenced molecular masses on the same unit basis. Prefer direct substance-specific mass measurements/factors when available and do not add the QA total again. T is not ordinary NO/NO2 mixture mass; never apply a mass fraction directly to T or assign all T to NO2. If definition includes other nitrogen species, speciation or conversion evidence is missing, no two-component split is permitted: preserve the raw QA observation and block completion until actual species-specific rows and quantities are established. No numeric fraction or molecular mass is defaulted by this PCR. | cp_support_linehaul; cp_support_van_round | kg NO and kg NO2, never NO2-equivalent exchange |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_electric_stock | u_linehaul_traction_electricity; u_van_round_traction_electricity | Within each independently metered provider vehicle/battery boundary and complete interval j, E_total=inlet_AC+opening_AC_equivalent+traced_imports-closing_AC_equivalent-traced_exports (kWh). Calibrate usable capacity and empirical inlet-AC/stored-energy curves for the same configuration, temperature and age; percentage SOC or a default efficiency is insufficient. Preserve chronological source vectors on every battery transfer and charging/draw/loss/closing balance, including future beneficiaries and capital-hour carryover; unsupported conversion or unknown stock blocks completion. Remove independently metered direct verified-zero-gross-addition event AC E_zero before route allocation: E_route=E_total-E_zero; unexplained negative residual blocks completion. Allocate E_route using the fixed provider activity_* driver and all users at matching route/task intervals, including empty/failure work. E_zero belongs first to its evidenced causal order, then documented causal task set by actual elapsed service time; genuinely shared noncausal failures use a fixed site-local calendar-day all-user elapsed-service-time pool including failures/waits, splitting at midnight. Unknown gross addition is never zero. No route share is multiplied again onto E_zero. q_AC=(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))*3.6/D, once. Do not reapply provider shares to already attributed physical totals, add another charging-loss uplift, or include workshop/site/installation electricity in this vehicle pool. A compatible supplier intensity must demonstrate this same stock/ownership closure before use; otherwise collect original raw records. Physical-capital f remains its separately fixed lifetime driver, never a second annual energy share. | cp_support_linehaul; cp_support_van_round | MJ per original reference flow |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_maintenance_period | u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant | For every shared routine supporting-provider maintenance pool, fix interval y to the site-local calendar year with timezone and exact asset/site/configuration recorded. Split a cohort crossing years into its within-year activity. Actual installed/consumed material M_x,y and its separately measured generated waste use s_c,y=cohort-attributed beneficiary driver_y/all-beneficiary driver_y for that same year, then q=sum_y(M_x,y*s_c,y)/N_ref once. The driver is the physical support-process activity fixed in activity_*; for vehicle upkeep it is actual vehicle kilometres including once-attributed empty/failure travel, for variable road upkeep it is evidenced class-specific engineering damage in the same year, and for building fabric it is reserved floor-area-calendar-hours. Other shared support equipment uses its fixed actual all-beneficiary task/cycle/union-hour driver; retain exact configuration strata and no concurrency duplication. A signed maintenance work order fixes the causal asset and task pool before calculation, not a later modeller choice. Specific accident/failure repair is allocated exclusively to its evidenced causal order/task set, never also to the annual routine pool. Genuine component consumption excludes unused opening/closing stocks, uninstalled returns and internal transfers; generated removed parts retain this original event/year/share through later custody. No assumption that input and removed-part masses are identical. Apply one annual period share, not whole-life f, to real component repairs; entire replacement assets create separate capital cohorts instead. A positive unsupported pool or zero/unknown all-user denominator blocks completeness. Apply the same rules to retained provider maintenance cards where previously referenced; independent specific generation/fate balances and exact overlap exclusions remain mandatory. | cp_support_linehaul; cp_support_van_round | native physical unit per original reference flow |  |
| calc_capital_restatement_driver_revision | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For every asset a retain versioned all-user activity and each original beneficiary cohort/stratum c, including failed/empty work under its existing fixed responsibility rule. u_c,a is its attributed actual driver to date; U_a is evidenced complete-life all-user driver (actual to date plus supported remaining forecast), in the identical configuration and unit. U_a must be positive and at least the actual all-user total. Set f_c,a=u_c,a/U_a; do not use remaining activity as U_a. On every life, activity, beneficiary, source-quantity or terminal-route revision recompute every affected original cohort, including previously reported cohorts; do not preserve an old fraction while applying a new lifetime denominator only to later cohorts. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_source_correction | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. For each independent source s in its native unit, A_s,c,new=Q_s,new*f_c,a. Q_s,new is its current evidenced full manufacture/installation source quantity before lifetime allocation, not a remaining unallocated balance, or matched net terminal residual/complete lifecycle source; it is not a previously allocated quantity. Retain B_s,c, the previously booked attributed raw amount, and its original normalized result/version; delta_A_s,c=A_s,c,new-B_s,c. A newly evidenced terminal source has B=0, while a correction to an existing source replaces that same source ID. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_normalization | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Recompute q_s,c=A_s,c,new/N_c using that original cohort current verified reference denominator N_c; if N_c itself was corrected, replace the old result rather than adding delta_A/new_N to a result based on old_N. Sum source contributions only after removing documented overlap. Record positive/negative result corrections, never negative physical transfers, substitution credits or another current-period whole-asset purchase. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_retirement | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. At final retirement replace U_a by complete actual all-user driver, recompute all f and all source quantities; for positive total activity all beneficiary fractions sum to one, including non-study beneficiaries. Measured terminal net residual is not reduced again by historical removals. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_zero_activity | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Zero-output events retain their existing causal parent cohort and its original denominator; never seek an unrelated positive-output period. If that parent has no positive N_c, retain attributed raw totals and an unresolved normalized result. With zero lifetime activity, assign only to an evidenced sole commissioning responsibility under the same original-cohort rule; otherwise retain the unallocated source and block completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_shared_driver_controls | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. Keep asset manufacture, installation and terminal burden on the same revised f, while gross stock, transfers and retirements remain separate physical control records. For a calendar-time asset, u is its elapsed service-capacity time assigned once to each original class/period by the existing shared/class rule, including the prescribed vacancy/failure responsibility; U covers that same all-user calendar capacity. Do not apply the class share a second time to q. Unknown history, unsupported life/endpoint or missing original denominators blocks completeness. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |
| calc_capital_restatement_background_version | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Component of calc_capital_restatement. Before execution, read the complete group listed by the applicable entry: its definitions, conditions and exclusions govern every component. Use only that entry's actual event scope and original denominator; this component is not a separate exchange or independently additive result. If a supply-background or treatment-model version changes without a physical quantity change, replace the corresponding linked inventory and result for all affected original cohorts; a zero physical delta_A does not preserve the old model. | cp_capital_restatement | Method component; the originating entry owns the inventory result |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_evidence | all inventory rows | Require timestamped raw records, calibrated instruments, declared spatial/temporal coverage and reconciliation residuals. Use measured uncertainty and sampling intervals; no illustrative range is a compliance limit. | cp_cohort; cp_facility; cp_carriage; cp_materials; cp_waste |
| quality_waste_origin | label_waste; letter_waste | For every ordinary solid-waste stream verify generation responsibility, original cohort/stratum/denominator, origin-labelled stock balance, supported actual or prospective complete treatment and later-receipt replacement. Unknown origin/fate/physical loss remains an explicit gap; future dispatch alone cannot close or reassign it. Keep wastewater and amortized terminal-asset treatment on their separate methods. | generation/stock/transfer ledgers; supported route models; original-cohort receipt replacements |
| q_identity | all inventory rows | A semantic candidate without a UUID is explicit, not a verified Tiangong identity. Before a verified data package is claimed, bind exact flow type, state, property, unit and compartment using direct-read evidence and receipt hash; preserve official names. No similar-name substitution. | direct identity evidence and receipt |
| q_missing | all processes | Unknown quantities, receiver, activity occurrence, carrier coverage and allocation shares remain missing. Establish absence with registers and inspection; missing data are not zero. Report gaps and block complete/conforming result until resolved; no undisclosed generic fallback. | procurement/asset/waste registers and coverage audit |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | all disaggregated support and species | Completeness is branch-specific under foreground_interface_method and foreground_interface_coverage. Foreground physical exchanges need the retained exact identities, original measurements, species and stock reconciliation. External interfaces need one defined service/property/unit, measured activity, exact supplier gates and compatible background coverage, not exhaustive provider-internal BOMs or capital ledgers. Unknown occurrence is not absence; uncovered real scope is an explicit gap. Unbound interface UUID/property/unit-group identities remain row-specific candidates until direct official evidence and receipts resolve them. The interface is not permission for an undefined multi-service package or for an Item(s) substitute for hours/mass/transport activity. | scope-to-physical-row reconciliation; supplier/BOM/species originals; signed gap register |
| quality_service_interfaces | svc_linehaul; svc_van_round; svc_sorting_asset; svc_premises | Completeness is branch-specific under foreground_interface_method and foreground_interface_coverage. Foreground physical exchanges need the retained exact identities, original measurements, species and stock reconciliation. External interfaces need one defined service/property/unit, measured activity, exact supplier gates and compatible background coverage, not exhaustive provider-internal BOMs or capital ledgers. Unknown occurrence is not absence; uncovered real scope is an explicit gap. Unbound interface UUID/property/unit-group identities remain row-specific candidates until direct official evidence and receipts resolve them. The interface is not permission for an undefined multi-service package or for an Item(s) substitute for hours/mass/transport activity. | cp_interface protocols; signed coverage/ownership matrix; native-unit reconciliation; identity receipts |
| scope_interface_linehaul | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; svc_linehaul | For support_linehaul, svc_linehaul is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_van_round | u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air; svc_van_round | For support_van_round, svc_van_round is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_sorting_asset | u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; svc_sorting_asset | For support_sorting_asset, svc_sorting_asset is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| scope_interface_premises | u_premises_construction_gate; u_premises_retired_asset; svc_premises | For support_premises, svc_premises is the external service input under boundary_atomic_support. Its listed physical counterparts apply only to operator-owned foreground components; they are not required supplier-internal collection. For every event/component record exactly one owner and representation. Keep physical components excluded from the contracted service, and remove only evidenced overlap; partial contracts cannot suppress the whole process. Scope changes require the coverage matrix and fresh bilingual projection. | signed foreground/interface matrix; contract exclusions; actual component records |
| inv_trunk_scope | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air | Actual purchased non-refrigerated road letter-mail trunk carriage; expansion describes the carrier background, not a change to operator-owned transport. | Existing collection protocols and evidence of each listed inventory row. |
| inv_fuel_gate | u_linehaul_diesel; u_linehaul_gasoline; u_van_round_diesel; u_van_round_gasoline | Only where this exact fuel is documented for the in-scope provider vehicle; keep different grades separate. Fuel delivered to the vehicle tank, with matched upstream production and delivery; do not also add a combustion-service package. | Existing collection protocols and evidence of each listed inventory row. |
| inv_asset_basis | u_linehaul_vehicle_factory_gate; u_van_round_vehicle_factory_gate; u_sorting_asset_factory_gate; u_premises_construction_gate | The input Q_a is the original manufacture/construction-gate physical quantity before amortisation; apply f once as specified in lifetime_driver. Actual maintenance quantities use their separate period/event share, never this manufacture f. Already amortised supplier inputs require recovery of original Q_a and the full-life denominator; applying f again is prohibited. | Existing collection protocols and evidence of each listed inventory row. |
| inv_maintenance_share | u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant | Attribute measured actual maintenance-period/event quantities by that period/event service share; do not multiply them by capital manufacture f. | Existing collection protocols and evidence of each listed inventory row. |
| inv_terminal_basis | u_linehaul_retired_vehicle; u_van_round_retired_vehicle; u_sorting_asset_retired_asset; u_premises_retired_asset | Its raw Q_e is the full-lifecycle terminal physical quantity belonging to asset_suffix, before amortisation, not an amortised provider-period amount or a later-period dispatch total. Apply exactly the linked production f once and divide by the original denominator once; no extra operational allocation share. | Existing collection protocols and evidence of each listed inventory row. |
| inv_vehicle_species | u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air | Only when the exact substance, fossil/biogenic qualification where applicable, receiving-air compartment and measured or fuel/technology-specific calculation are evidenced. Vehicle-use emission only, calculated once from measured fuel/operation and the documented single-species factor. Do not use NOx, total hydrocarbons, CO2e or a generic exhaust mixture as this row. | Existing collection protocols and evidence of each listed inventory row. |
| inv_van_scope | u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air | Actual purchased non-refrigerated road van collection/delivery; expansion describes the carrier background, not a change to operator-owned transport. | Existing collection protocols and evidence of each listed inventory row. |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | postal_letter_service | Reject application outside documented USO, ordinary domestic addressed-letter scope and specified facility/outsourced-road configuration. Do not treat narrower mapping as full CPC coverage or equate service classes, payloads, geography, distances or time performance. | `un-cpc3-68011` |
| validate_service_interfaces | svc_linehaul; svc_van_round; svc_sorting_asset; svc_premises | Verify the event/component responsibility matrix before reading row amounts. An external-service component activates its interface only; its covered detailed physical counterpart is inactive, not a measured zero. Verify one property/unit, raw native activity, original all-user allocation and single final normalization; failed/reworked/empty events follow the retained cohort rules. Test partial contracts, own energy/assets/retained wastes, already allocated supplier inventories, zero-output cohorts and missing complementary coverage. Reject double counting, invented identity/amounts, forced supplier-internal collection or an undocumented branch change. Verify all service row IDs and protocol/rule links in both languages and generated guidance. |  |
| v_counts | delivered_letter | Check unique ids, A = D + T + L + X, pending = 0, D > 0, actual terminal evidence and carried burdens. Reject double-counted attempts, returns presented as delivered, abandoned pending records or cross-cohort shifting. | `usps-undeliverable-mail` |
| v_balance | all inventory rows | Check every row unit/property, source activity, allocation sums, meter/stock/waste balance, carrier scope and one final J/D division. Inspect both languages and machine projection for all boundary/allocation/collection/quality rules and exact row/protocol links. A schema/fingerprint pass alone is insufficient. Test A-period generated retained waste and B-period dispatch: original A responsibility and denominator persist, and actual evidence replaces that same event model without another B burden. |  |
| v_completion | all processes | Incomplete foreground evidence or unverified flow identities must remain disclosed and prevent a fully verified result. Candidate authoring and aligned translation do not establish scientific review, methodology approval or publication authority. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | all support and emission rows | Verify the event/component responsibility matrix before reading row amounts. An external-service component activates its interface only; its covered detailed physical counterpart is inactive, not a measured zero. Verify one property/unit, raw native activity, original all-user allocation and single final normalization; failed/reworked/empty events follow the retained cohort rules. Test partial contracts, own energy/assets/retained wastes, already allocated supplier inventories, zero-output cohorts and missing complementary coverage. Reject double counting, invented identity/amounts, forced supplier-internal collection or an undocumented branch change. Verify all service row IDs and protocol/rule links in both languages and generated guidance. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | Check original cohorts/denominators, all-user driver, source versions, booked amounts and restatement corrections under calc_capital_restatement. Reject frozen old history with only future-denominator changes, retirement-balance transfer to unrelated current output, and negative physical exchanges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground service-process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | The declared ordinary domestic letter service configuration with matched qualifiers and complete evidence. |
| excluded_use | Whole-letter paper manufacture; courier/express or parcels; full CPC 68011 coverage; unspecified average letter; other fleet/facility technologies; comparison without equivalent function and quality. |
| required_metadata | All reference qualifiers; custody cohort and terminal tail; exact supplier interfaces; allocation and capital models; data year and geography.; ordinary-waste generation origin, original shares/denominator, retained stocks and treatment revision chain; signed foreground/interface responsibility matrix, native service activity and background coverage; original physical activity, manufacture/terminal pairing and species basis only for foreground-owned components |
| required_quality_disclosure | Completeness; sampling and measurement uncertainty; pending/failed outcomes; flow identity status; missing data and exclusions; narrower scope. |
| update_trigger | Change in USO/service class, route, carrier/fuel, facility technology, delivery gate, supplier coverage, allocation evidence or material activity.; later ordinary-waste receipts/fate or generation correction update the original event/cohort model; foreground physical identity/speciation changes or external interface configuration/unit/coverage changes require applicable concrete-row review and fresh projection |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-68011 | official_guidance | UN Statistics Division, CPC Version 3.0, code 68011 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68011 | USO classification boundary; the present candidate deliberately covers a narrower service and operating configuration. |
| upu-postal-ghg-2010 | official_guidance | UPU / IPC / PostEurop, GHG Inventory Standard for the Postal Sector, March 2010, PDF pp. 7, 24–25 (principles; activities and allocation). https://www.uncclearn.org/wp-content/uploads/library/upu05.pdf | Postal activities and completeness/allocation context only. PCR-specific hierarchy/formulas are declared foreground methods, not quoted UPU defaults; no historical emissions factor is adopted. |
| usps-undeliverable-mail | official_guidance | US Postal Service, How is Undeliverable and Misdelivered Mail Handled?, undeliverable/return and delivery-point sections. https://faq.usps.com/articles/Knowledge/How-is-Undeliverable-and-Misdelivered-Mail-Handled | Official operator example distinguishing delivery, return and undeliverable outcomes; not a universal national service rule or a fixed forwarding duration. |
