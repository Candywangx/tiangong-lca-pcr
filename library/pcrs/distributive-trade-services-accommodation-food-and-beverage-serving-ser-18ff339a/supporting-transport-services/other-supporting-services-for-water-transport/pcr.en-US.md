---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-water-transport
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other supporting services for water transport

## 1. Scope and Applicability

Water-transport support not directly connected with vessel operation, including navigation icebreaking, vessel registration and vessel laying-up/storage. These physically different services use independent conditional processes and datasets. Select one exact family and actual block; the residual title alone cannot establish a measurable service. The reviewed scope covers these three families only and is narrower than the open residual category. Other unreviewed residual supporting functions are not automatically applicable; they require independent functional scope, boundary and evidence review. [Source: `un-cpc-other-water`]

Exclude vessel cleaning/decontamination, including fuel/oil contamination removal (853), disinfection/extermination (85310), passenger/freight intermediation (85610/85630), public lifeboat/fireboat/search-and-rescue or public-order/safety services (91260/91290), and oil-spill fighting (94412/94420). A multi-role government icebreaker does not assign its rescue, resupply, scientific, sovereignty or flood-control work automatically to a navigation-icebreaking output. Distinguish ordinary port/pilotage, transport towing and vessel repair/recommissioning outside the selected support boundary. [Source: `un-cpc-other-water`]

| service_family | Counted block | Mandatory physical definition |
| --- | --- | --- |
| icebreaking | One completed specified navigation-icebreaking mission | Fix ice route/harbour area, actual length/width/clearance goal, ice type/thickness/concentration/ridging observations, weather, escorted vessel/convoy population, craft/power, actual assist/transit/idle/return and completion. No passenger/cargo transport output. |
| registration | One completed specified vessel-registry processing case | Fix jurisdiction/registry, vessel identity, transaction type (initial/renewal/change/cancellation), evidence-processing scope, formal decision/record and initial delivery. Distinguish outcome and complexity; submission/payment alone is not completion or legal approval by this PCR. |
| layup | One specified vessel stored for an actual 24-hour block | Fix vessel dimensions/footprint, actual cold/hot/preservation state and active systems, afloat/dry storage, site/mooring/cradle, actual custody hours, staffing/monitoring and contractual operator/customer scope. Retain partial days without billing rounding. |

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-water-transport |
| classification_refs | CPC 3.0 67590; narrower |
| covered_products | Separately qualified navigation-icebreaking missions, completed registration cases and actual vessel lay-up storage blocks |
| excluded_products | Vessel cleaning/disinfection, brokerage, public rescue/fire/safety, oil-spill fighting and unrelated vessel/port transport operations |
| representative_product | One completed route/harbour navigation-icebreaking mission with actual ice conditions and assisted vessel population |
| production_route | Define one family/extent → execute its actual conditional physical or administrative process → verify completed mission/case or actual custody-time block |
| market_state | Completed support service with evidence and scope; no universal count equivalence or inferred vessel operation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver one exactly specified water-transport-support function |
| How much | One family-specific block from section 1; never pooled across icebreaking, registry and lay-up |
| How well | Meet actual mission clearance, administrative completion or custody/preservation requirements with recorded outcome; no default capability or legal certification |
| How long or cycle | Actual mission/case start through completion and first delivery, or one actual 24-hour vessel-custody block with partial days retained |
| reference_flow_link | `support_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed specified water-transport support service block |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | exact service family and physically defined block; actual operation/component and completion interfaces; site/waterbody/jurisdiction; provider/customer responsibilities; ice mission route/cleared extent/ice condition/convoy/craft/duty when relevant; registration transaction/vessel/outcome/document-delivery scope and archive cutoff when relevant; lay-up vessel dimensions/state/active systems/afloat-dry/footprint/custody time/mooring/preservation/staffing when relevant; actual standby, rework and transfer; energy/fuel supply; shared functions; assets/lifetime denominator and renewal; wastes/receivers; actual acceptance; period and representativeness |

Item(s) counts the explicitly specified case/mission/time block. It does not impose an item property on fuel, electricity, area, time or waste rows. A registration case cannot represent an icebreaking mission or a stored vessel-day. Actual lay-up block count equals measured custody hours divided by 24, without fee rounding; ice clearance and registry scope retain their independent extent/complexity. No passenger-km, cargo tonne-km, ship fee or nominal capacity is inferred.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| support_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count one explicitly defined completed family-specific block with cp_completion; preserve actual extent and no cross-family equivalence. |
| ice_fuel | ice_diesel | Mass | kg | Use actual mission fuel by engine/duty/phase; volume conversion requires actual fuel grade density and temperature. No fixed fuel per ice kilometre or escort count. |
| layup_time | support_output | Number of items | Item(s) | For layup only, one count is one declared vessel stored for 24 actual hours. Preserve fractional blocks, vessel footprint and actual preservation state; no invoice-to-time conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One defined navigation mission, administrative transaction or accepted vessel-storage custody; actual support assets/upstream utilities are retained |
| starting_condition_role | foreground_start |
| product_classification_scope | Declared non-vessel-operation support family, with exclusions and independent processes |
| recursive_input_rule | Subcontracted same-function service enters once with exact extent/provider scope and removes overlapping owned work/assets |
| upstream_dataset_requirement | Actual mission energy/icebreaker assets, registry IT/office/service supply, lay-up energy/materials/storage assets and actual treatment inventories |
| disclosure | Independent function/extent, start/end/delivery/custody gates, multipurpose work, custody ownership, active preservation systems, all assets/providers and data gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_ice | Include actual ice-route/harbour clearance, escort/convoy assistance, dispatch, positioning, waiting, retries, return and support only to the extent attributable to navigation icebreaking. Canadian Coast Guard examples establish actual route/harbour/convoy distinctions; broader public program tasks remain separately scoped. | ccg-icebreaking |
| boundary_registry | Include actual receipt, evidence processing, checks, decision/record update and first delivery for the declared transaction. Separate initial/renewal/change/cancellation and outcome complexity; a completed processing decision does not make this PCR an authority to register a ship. Scope ongoing post-case archive/registry operation separately and avoid unlimited default retention. | uk-registry |
| boundary_layup | Include actual storage custody, monitoring/mooring and agreed state-preservation systems with operator/customer responsibility explicit. Record hot/cold/other state as actually specified rather than default energy. Preservation energy is included once when within the selected service even if a customer-owned generator supplies it; exclude unrelated propulsion, vessel manufacture and separate cleaning/disinfection/recommissioning. DNV public guidance supports site/mooring/preservation planning, not an unread recommended-practice limit. | dnv-layup |
| boundary_releases | Screen actual fuels, refrigerants, preservation chemicals, bilge/sewage, leaks, water/ice disturbance, wake and noise by actual receiving waterbody. Collected waste is not automatically released to sea. Chemical cards alone do not establish complete ice/habitat or local ecological coverage. |  |

## 6. Process Inventory Structure

Exactly one family process is selected for an actual dataset, followed by the common completion output. Shared resources are instantiated only for that function and actual configuration. Add every other real fuel/chemical/refrigerant/coating/waste/species separately; do not use energy, ship supplies, wastewater-and-residues or a future selector as a flow. No generic office process replaces the physical icebreaking or lay-up inventory.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| icebreaking | Execute defined navigation-icebreaking mission | conditional | Selected family icebreaking | foreground_production | per reference flow |
| registration | Process defined vessel-registry case | conditional | Selected family registration | foreground_production | per reference flow |
| layup | Provide actual vessel lay-up storage/preservation | conditional | Selected family layup | foreground_production | per reference flow |
| completion | Verify selected-family completion/output | required | One selected family with its actual extent | foreground_production | per reference flow |

### Process: Execute defined navigation-icebreaking mission (`icebreaking`)

#### Inputs

##### Product flows

###### Diesel fuel, unblended (`ice_diesel`)

Conditional on actual icebreaker/service-craft use of this fuel. Measure main/auxiliary/idle/transit/reposition consumption; other propulsion/fuel grades need separate actual supply rows. Assisted ships and resupply cargo fuel are outside this row.

- Selected flow: Diesel fuel, unblended
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_ice_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ice_energy`
- Sources:

###### Electricity, icebreaker shore supply (`ice_shore_power`)

Conditional on actual shore/charging support to the service craft; record source, voltage, charging losses and actual standby scope. Grid supply is not a zero-burden replacement for auxiliary combustion.

- Selected flow: Electricity, icebreaker shore supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_ice_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ice_energy`
- Sources:

###### Mineral hydraulic oil (`ice_hydraulic`)

Conditional on actual icebreaking equipment maintenance; measure grade, actual replacement and supported mission share, avoiding full oil change per mission.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Configured icebreaking service vessel (`ice_ship_share`)

Conditional on actual icebreaker use; identify hull/propulsion/ice capability and actual construction/renewal inventory and supported whole-life service denominator. Allocate only navigation-icebreaking mission share of multipurpose craft.

- Selected flow: Configured icebreaking service vessel
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

#### Outputs

##### Waste flows

###### Used mineral hydraulic oil (`ice_used_oil`)

Conditional on actual segregated removed hydraulic oil; trace collection and treatment, not a presumed water release. Other used oils require their own specific streams.

- Selected flow: Used mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Oily icebreaker bilge water (`ice_bilge`)

Conditional on actual collected bilge water; retain oil composition and real reception/onboard treatment scope. No assumed sea or freshwater discharge.

- Selected flow: Oily icebreaker bilge water
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`ice_co2`)

Conditional on actual in-scope fuel combustion of this species; use measurement or verified fuel/engine/load and carbon/sulfur evidence. Keep NO and NO2 separate, and do not copy aggregate NOx or customer voyage emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Carbon monoxide, to air (`ice_co`)

Conditional on actual in-scope fuel combustion of this species; use measurement or verified fuel/engine/load and carbon/sulfur evidence. Keep NO and NO2 separate, and do not copy aggregate NOx or customer voyage emissions.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen monoxide, to air (`ice_no`)

Conditional on actual in-scope fuel combustion of this species; use measurement or verified fuel/engine/load and carbon/sulfur evidence. Keep NO and NO2 separate, and do not copy aggregate NOx or customer voyage emissions.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen dioxide, to air (`ice_no2`)

Conditional on actual in-scope fuel combustion of this species; use measurement or verified fuel/engine/load and carbon/sulfur evidence. Keep NO and NO2 separate, and do not copy aggregate NOx or customer voyage emissions.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Sulfur dioxide, to air (`ice_so2`)

Conditional on actual in-scope fuel combustion of this species; use measurement or verified fuel/engine/load and carbon/sulfur evidence. Keep NO and NO2 separate, and do not copy aggregate NOx or customer voyage emissions.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

### Process: Process defined vessel-registry case (`registration`)

#### Inputs

##### Product flows

###### Electricity, vessel-registry facility supply (`registry_power`)

Meter actual case processing, scanning, communications and attributable office/IT support; identify processing/initial-delivery cutoff and avoid allocating unrelated vessel operational energy.

- Selected flow: Electricity, vessel-registry facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_registry.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_registry`
- Sources:

###### Uncoated office printing paper (`registry_paper`)

Conditional on actual paper documents/printing in the case; measure used/unused paper. Digital cases do not require an invented paper certificate.

- Selected flow: Uncoated office printing paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_registry.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_registry`
- Sources:

###### Configured registration-processing workstation (`registry_workstation`)

Conditional on actual owned workstation use; attribute manufacturing using actual case use and supported whole-life utilization; supplier-included equipment is not repeated.

- Selected flow: Configured registration-processing workstation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Vessel-registration case hosting service (`registry_hosting`)

Conditional on actual external case-hosting/processing service. Fix actual application/storage/region/capacity/retention coverage, measured activity and provider inventory; service hours alone do not imply electricity. Ongoing post-case archive operation is separately scoped.

- Selected flow: Vessel-registration case hosting service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per reference flow; cp_registry.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_registry`
- Sources:

###### Configured vessel-registry office building (`registry_building`)

Conditional on actual office use; identify floor/shared area, case service population and supported construction lifetime share, excluding unrelated agency functions.

- Selected flow: Configured vessel-registry office building
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

#### Outputs

##### Waste flows

###### Discarded office printing paper (`registry_waste_paper`)

Conditional on actual operator paper waste; weigh separately and identify actual confidential disposal/treatment scope without default recycling credit.

- Selected flow: Discarded office printing paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Provide actual vessel lay-up storage/preservation (`layup`)

#### Inputs

##### Product flows

###### Electricity, vessel lay-up preservation supply (`layup_power`)

Conditional on actual stored-vessel ventilation, dehumidification, heating, monitoring, battery maintenance or storage-facility support. Meter each real end use and preserve hot/cold/state specification; no universal preservation load.

- Selected flow: Electricity, vessel lay-up preservation supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_layup.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_layup`
- Sources:

###### Diesel fuel, unblended, lay-up preservation (`layup_diesel`)

Conditional on an actual generator/equipment maintaining the declared stored condition with this fuel. Record responsible owner/operator and include the agreed preservation share once, irrespective of ownership; exclude customer propulsion and unrelated activity.

- Selected flow: Diesel fuel, unblended, lay-up preservation
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_layup.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_layup`
- Sources:

###### Mineral corrosion-protection oil (`preservation_oil`)

Conditional on this actual preservation material and compatible machinery specification. Record issue/recovery and quantity; a formulated additive or other chemical needs its own specific row. Vessel cleaning/decontamination/disinfection is outside this service.

- Selected flow: Mineral corrosion-protection oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Silica gel desiccant (`silica_gel`)

Conditional on actual desiccant use; identify grade and actual replacement/regeneration boundary, not a required material for every lay-up state.

- Selected flow: Silica gel desiccant
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Polypropylene mooring rope (`mooring_rope`)

Conditional on actual afloat storage mooring using this material; allocate supported actual use/replacement share. Other rope materials and mooring equipment require separate rows.

- Selected flow: Polypropylene mooring rope
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Configured vessel lay-up berth (`layup_berth`)

Conditional on actual afloat berth storage; fix berth geometry, vessel footprint/length and construction scope, supported whole-life occupancy and actual stored time.

- Selected flow: Configured vessel lay-up berth
- Flow property / unit: Length / m
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured vessel-storage hardstanding (`hardstanding`)

Conditional on actual dry land storage; identify area, structural construction and actual storage population; do not also allocate an afloat berth for the same scope.

- Selected flow: Configured vessel-storage hardstanding
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured vessel-storage cradle (`cradle`)

Conditional on actual dry storage support; identify configuration, manufacture and supported load/cycle/lifetime utilization, excluding stored customer vessel manufacture.

- Selected flow: Configured vessel-storage cradle
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

#### Outputs

##### Waste flows

###### Used mineral corrosion-protection oil (`used_preservation_oil`)

Conditional on actual collected removed preservation oil; record composition, mass, reuse and actual treatment. A water leak is a separate chemical/receiver exchange, not this collected stream.

- Selected flow: Used mineral corrosion-protection oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent silica gel desiccant (`spent_desiccant`)

Conditional on actual spent silica gel; weigh and trace regeneration/disposal and contamination rather than assuming hazardousness or automatic recycling.

- Selected flow: Spent silica gel desiccant
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Lay-up service sanitary sewage (`layup_sewage`)

Conditional on actual service-crew wastewater included in the storage/preservation boundary; measure real reception/treatment scope. Do not assume direct environmental discharge.

- Selected flow: Lay-up service sanitary sewage
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`layup_co2`)

Conditional on actual in-scope fuel combustion of this species; use measurement or verified fuel/engine/load and carbon/sulfur evidence. Keep NO and NO2 separate, and do not copy aggregate NOx or customer voyage emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

### Process: Verify selected-family completion/output (`completion`)

#### Outputs

##### Product flows

###### Completed specified water-transport support service block (`support_output`)

One selected function: a defined navigation-icebreaking mission, a completed specified registration-processing case, or a one-vessel actual 24-hour lay-up storage block. These are distinct scenarios, not equivalent service counts.

- Selected flow: Completed specified water-transport support service block
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_family | Separate the three service families and unlike extents before any division. Ice missions use measured craft/engine duty and actual cleared/assisted extent; registry cases use actual processing/IT effort and case type; lay-up uses actual vessel footprint/time and preservation state. Counts across families are not interchangeable. |  |
| allocate_ice | Trace convoy/shared-route, positioning/return and seasonal standby to the actual navigation service population with a supported causal method. Separate public rescue, resupply, research, flood control and unrelated multipurpose work. No passenger/cargo transport co-product is presumed from escort or an icebreaker voyage. |  |
| allocate_layup | Attribute actual holding resources by compatible vessel footprint/time/state, and transition/inspection events by actual supported service use. Retain partial custody days and empty-facility support transparently. Do not allocate a full stored-vessel manufacturing inventory to each day or assume a preservation credit/extended life. |  |
| allocate_assets | Maintain persistent icebreaker, IT, office, berth, hardstanding and cradle ledgers with supported whole-life activity/service denominators. Observed periods distribute only already attributed period shares; cumulative manufacture/construction fractions across all jobs/users/periods cannot exceed one or reset annually. Separate actual renewal included upstream; unknown life/denominator requires review and sensitivity. |  |
| allocate_provider | A supplier hosting/preservation/icebreaking inventory replaces its covered resource and asset burdens once. Fees, registry legal rights, customer vessels and the mere state of storage are not extra co-products. Actual collected waste receives no automatic recycling/avoided-production credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | completion | support_output | Family-specific completion ledger | selected family; exact block; mission/case/vessel ID; physical extent; actual start/end; accepted output/outcome; operator/provider components; actual custody hours | Verify exactly one completed mission or completed specified registry case, or derive actual vessel-storage blocks from custody hours divided by 24. Keep families, types, outcomes and extents separate; no fee or nominal capacity as quantity. | Item(s) | each completion/custody interval | complete selected service boundary | actual selected-family providers | per reference flow | mission log; formal case decision/delivery; custody timestamps; population reconciliation |
| cp_ice_energy | icebreaking | ice_diesel; ice_shore_power | Mission ice/duty/energy ledger | mission route/cleared area; actual ice type/thickness/concentration/ridging; weather; convoy/vessel; craft/engine/power; fuel kg/grade/density; charging kWh; assist/transit/idle/wait/return/standby times; actual completion | Measure actual engine fuel and electrical supply, reconcile mission/convoy/shared and non-navigation duties. Use actual ice observations and operational logs, not a default fuel per route kilometre or ship escorted. | kg; kWh | each mission phase/meter interval | whole actual mission and allocated support | actual icebreaking operators/craft | per reference flow | fuel/charge meters; ice/route logs; engine duty; shared-task reconciliation |
| cp_registry | registration | registry_power; registry_paper; registry_hosting | Case processing and initial-delivery ledger | jurisdiction; case/transaction type; vessel; submitted evidence; actual checks/rework; decision/outcome/date; actual staff/IT activity; kWh; paper kg; provider service hours/capacity/region; first delivery; archive cutoff | Match actual case workflow and completed decision/delivery; submeter/reconcile actual IT/office activity and paper. Supplier hosting needs actual scope and inventory, not kWh inferred from case count. Keep incomplete work in progress explicit and ongoing registry/archives separately bounded. | kWh; kg; h | each case step and completion | actual case through first delivery | actual registry and providers | per reference flow | case log; recorded decision/document; meters; IT/provider scope; delivery evidence |
| cp_layup | layup | layup_power; layup_diesel | Custody/state and preservation-energy ledger | vessel dimensions/footprint; afloat/dry site; custody start/end/hours; actual hot/cold/state plan; active systems; staffing; measured ventilation/dehumidification/heating/monitoring/battery loads; actual generator fuel; responsible owner/provider | Verify real custody and approved-in-context preservation plan; meter actual energy for maintained systems and separate unrelated propulsion/cleaning. Retain partial days, actual equipment cycling and supplier/customer responsibilities; no universal cold/hot energy assumption. | kWh; kg | each custody/condition/meter interval | actual stored period and attributed transitions | actual vessel/site and providers | per reference flow | custody/state logs; meter/fuel records; preservation execution; scope reconciliation |
| cp_material | icebreaking; layup | ice_hydraulic; preservation_oil; silica_gel; mooring_rope | Specific support-material balance | individual chemical/material grade; measured kg; issue/return; replacement/regeneration; actual use/lifetime fraction; stock; recovery; actual leaks | Weigh each specific material and attribute actual maintenance/preservation use by supported service utilization. Separate vessel cleaning/disinfection from in-scope state preservation; no full rope or oil-change inventory per block. | kg | each actual material/maintenance event | actual support/preservation assigned | actual selected family assets | per reference flow | weighing; compatibility/grade; stock/material balance; use records |
| cp_assets | icebreaking; registration; layup | ice_ship_share; registry_workstation; registry_building; layup_berth; hardstanding; cradle | Persistent family-specific asset ledger | asset ID/configuration; construction/manufacture; actual item/m2/m; actual family use; supported lifetime service denominator; multipurpose share; prior cumulative fraction; period fraction; renewals/sensitivity | Match actual family assets and supported whole-life service utilization; conserve cross-job/user/period shares and avoid double counting renewals included upstream. Stored customer-vessel manufacture is outside the storage-service asset numerator. Unknown life/denominator requires explicit review. | Item(s); m2; m | each allocation and asset/renewal update | supported whole life and actual observation period | identified craft/IT/office/storage assets | per reference flow | asset/construction records; actual utilization; life evidence; cumulative shares |
| cp_waste | icebreaking; registration; layup | ice_used_oil; ice_bilge; registry_waste_paper; used_preservation_oil; spent_desiccant; layup_sewage | Specific waste/reception ledger | individual stream; actual kg/m3; composition/contamination; source family/event; reuse/regeneration; onboard/shore reception; actual treatment/disposal | Weigh/meter each stream separately and trace its real receiver/treatment. No presumed hazardousness, direct water release, reception, recycling or avoided burden. Other actual wastes require their own specific rows. | kg; m3 | each actual transfer/discharge period | all attributable actual waste | actual family providers and treatment gates | per reference flow | reception/transfer tickets; composition; mass/water balance; actual treatment |
| cp_release | icebreaking; layup | ice_co2; ice_co; ice_no; ice_no2; ice_so2; layup_co2 | Source/species-specific emission ledger | family/source; actual fuel/engine/load; carbon/sulfur/oxidation; measured species kg; NO/NO2 speciation/equivalent basis; air compartment; method applicability; uncertainty | Measure actual species or use independently verified source/duty/fuel-specific methods. Keep customer voyages, excluded public duties and upstream electricity separate. Record each other actual release/leak and receiver individually; do not copy NOx totals into two species. | kg | each emitting operation and representative monitoring | all represented in-scope emissions | actual source and air receiver | per reference flow | measurement; fuel/engine records; verified method; carbon/sulfur and task reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| family_attribution | all inventory rows | Assign actual resources/maintenance/support to one qualified family/extent and divide by its actual completed blocks. No cross-family count averaging. Reference output is exactly 1 Item(s). | cp_completion; actual family records | exchange amount per reference flow |  |
| layup_blocks | support_output | For layup only, divide measured vessel custody hours by 24 to obtain actual blocks, retaining partial days and vessel state/footprint. Do not derive time from fees or an assumed annual occupancy. | cp_layup; cp_completion | actual layup block quantity |  |
| asset_attribution | ice_ship_share; registry_workstation; registry_building; layup_berth; hardstanding; cradle | Apply supported family/block share of whole-life utilization to actual manufacture/construction, conserving cumulative fractions and separating already included renewals and other-purpose work. | cp_assets; cp_completion | asset amount per reference flow |  |
| species_accounting | ice_co2; ice_co; ice_no; ice_no2; ice_so2; layup_co2 | Use actual species mass or verified engine/fuel/duty evidence with explicit factors/units and NOx-equivalent conversion documented in the dataset. No numerical load, fuel or emission default is supplied. | cp_release; cp_ice_energy; cp_layup | individual species per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_family | support_output | Declare one function/extent and completion type; no universal other-support invoice, cross-family count equivalence or claimed legal/safety approval. | cp_completion |
| quality_physical | icebreaking; layup | Require actual ice/craft duty or vessel-storage state/time/active-system records; no office-only substitute or default energy per ship. | cp_ice_energy; cp_layup |
| quality_registry | registration | Preserve case transaction/outcome, actual processing evidence, first-delivery endpoint and archive boundary. Submission/fee does not prove completed registration. | cp_registry |
| quality_lifecycle | all asset rows | Support whole-life service denominator, multi-role attribution, initial/renewal boundary and cumulative conservation; unknown life/upstream scope prevents complete lifecycle claims. | cp_assets |
| quality_gaps | all inventory rows | Disclose identity/species/receiver/treatment, ice/habitat/noise and material-preservation evidence gaps and uncertainty; missing is not zero. | cp_waste; cp_release; site records |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_output | Require unique support_output product output equal to 1 Item(s) with one physically defined completed family block; forbid mixing missions, registry cases and lay-up days into one average. |  |
| validate_scope | Exclude vessel cleaning/disinfection/brokerage/public rescue/fire/safety/oil-spill fighting; separate public or multipurpose icebreaker duties by actual logs. | un-cpc-other-water |
| validate_process | Select the actual family-specific process and complete its physical/administrative evidence. Icebreaking does not create assumed passenger/freight outputs; registry does not imply authority approval; lay-up requires actual custody hours and state/preservation scope. |  |
| validate_atomic_lifecycle | Require specific exchanges with correct own properties/units and actual applicability, conserved asset shares, supplier overlap control and real waste receivers. Unknown identities/method evidence remain explicit; no publication readiness or ecological completeness is inferred. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | other_water_transport_support |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | One specified navigation-icebreaking, vessel-registry or lay-up-storage component with compatible extent, outcome/state and actual interfaces |
| excluded_use | Cross-family benchmark, whole ship voyage/lifetime, passenger/freight transport, public rescue/oil spill or implied registry/class/safety approval |
| required_metadata | exact service family and physically defined block; actual operation/component and completion interfaces; site/waterbody/jurisdiction; provider/customer responsibilities; ice mission route/cleared extent/ice condition/convoy/craft/duty when relevant; registration transaction/vessel/outcome/document-delivery scope and archive cutoff when relevant; lay-up vessel dimensions/state/active systems/afloat-dry/footprint/custody time/mooring/preservation/staffing when relevant; actual standby, rework and transfer; energy/fuel supply; shared functions; assets/lifetime denominator and renewal; wastes/receivers; actual acceptance; period and representativeness |
| required_quality_disclosure | Family-specific evidence and identity gaps; ice/state/case representativeness; customer/provider responsibilities; ecological/treatment scope; actual life denominators and upstream omissions |
| update_trigger | Changed mission/ice/convoy, registry type/process/outcome, vessel lay-up state/site/custody/preservation plan, powertrain/supply, provider scope or asset-life evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-other-water | official_guidance | UNSD CPC3.0 67590 explanatory note, consistent with draft PDF pp376–377. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67590 | Icebreaking/registration/lay-up-storage scope and explicit cleaning/disinfection/brokerage/public-safety/oil-spill exclusions; no unit equivalence |
| ccg-icebreaking | official_guidance | Canadian Coast Guard, Icebreaking in Canada, current web page read 2026-10-23. https://www.canada.ca/en/canadian-coast-guard/programs/icebreaking-canada.html | Navigation routes/convoys/harbour breakouts and actual ice/traffic/resource-dependent missions; wider Canadian public program is not automatically CPC scope or a fuel factor |
| uk-registry | official_guidance | UK Government, Register a boat: The UK Ship Register, current page read 2026-10-23. https://www.gov.uk/register-a-boat/the-uk-ship-register | Actual vessel identity/evidence and distinct registration/renewal/change/cancellation processes; UK eligibility/fees/duration are not global PCR requirements |
| dnv-layup | official_guidance | DNV, Safe and cost-efficient lay-up of vessels, public service overview read 2026-10-23. https://www.dnv.com/services/safe-and-cost-efficient-lay-up-of-vessels/ | Site/mooring, maintenance/staffing/inspection and preservation planning dimensions only; full RP/guidance paper not obtained or adopted and no numerical preservation limit used |
